import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a pipe.
 *
 * Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
 *
 * > As an aid to help you jumpstart developing CloudFormation templates, the EventBridge console enables you to create templates from the existing pipes in your account. For more information, see [Generate an CloudFormation template from EventBridge Pipes](https://docs.aws.amazon.com/eventbridge/latest/userguide/pipes-generate-template.html) in the *Amazon EventBridge User Guide* .
 *
 * @cloudformationResource AWS::Pipes::Pipe
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html
 */
export declare class CfnPipe extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPipe from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPipe;
    /**
     * The ARN of the pipe.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The time the pipe was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The state the pipe is in.
     *
     * @cloudformationAttribute CurrentState
     */
    readonly attrCurrentState: string;
    /**
     * When the pipe was last updated, in [ISO-8601 format](https://docs.aws.amazon.com/https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
     *
     * @cloudformationAttribute LastModifiedTime
     */
    readonly attrLastModifiedTime: string;
    /**
     * The reason the pipe is in its current state.
     *
     * @cloudformationAttribute StateReason
     */
    readonly attrStateReason: string;
    /**
     * A description of the pipe.
     */
    description?: string;
    /**
     * The state the pipe should be in.
     */
    desiredState?: string;
    /**
     * The ARN of the enrichment resource.
     */
    enrichment?: string;
    /**
     * The parameters required to set up enrichment on your pipe.
     */
    enrichmentParameters?: cdk.IResolvable | CfnPipe.PipeEnrichmentParametersProperty;
    /**
     * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data.
     */
    kmsKeyIdentifier?: string;
    /**
     * The logging configuration settings for the pipe.
     */
    logConfiguration?: cdk.IResolvable | CfnPipe.PipeLogConfigurationProperty;
    /**
     * The name of the pipe.
     */
    name?: string;
    /**
     * The ARN of the role that allows the pipe to send data to the target.
     */
    roleArn: string;
    /**
     * The ARN of the source resource.
     */
    source: string;
    /**
     * The parameters required to set up a source for your pipe.
     */
    sourceParameters?: cdk.IResolvable | CfnPipe.PipeSourceParametersProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value pairs to associate with the pipe.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The ARN of the target resource.
     */
    target: string;
    /**
     * The parameters required to set up a target for your pipe.
     */
    targetParameters?: cdk.IResolvable | CfnPipe.PipeTargetParametersProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPipeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPipe {
    /**
     * The parameters required to set up a target for your pipe.
     *
     * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html
     */
    interface PipeTargetParametersProperty {
        /**
         * The parameters for using an AWS Batch job as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-batchjobparameters
         */
        readonly batchJobParameters?: cdk.IResolvable | CfnPipe.PipeTargetBatchJobParametersProperty;
        /**
         * The parameters for using an CloudWatch Logs log stream as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-cloudwatchlogsparameters
         */
        readonly cloudWatchLogsParameters?: cdk.IResolvable | CfnPipe.PipeTargetCloudWatchLogsParametersProperty;
        /**
         * The parameters for using an Amazon ECS task as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-ecstaskparameters
         */
        readonly ecsTaskParameters?: cdk.IResolvable | CfnPipe.PipeTargetEcsTaskParametersProperty;
        /**
         * The parameters for using an EventBridge event bus as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-eventbridgeeventbusparameters
         */
        readonly eventBridgeEventBusParameters?: cdk.IResolvable | CfnPipe.PipeTargetEventBridgeEventBusParametersProperty;
        /**
         * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-httpparameters
         */
        readonly httpParameters?: cdk.IResolvable | CfnPipe.PipeTargetHttpParametersProperty;
        /**
         * Valid JSON text passed to the target.
         *
         * In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](https://docs.aws.amazon.com/http://www.rfc-editor.org/rfc/rfc7159.txt) .
         *
         * To remove an input template, specify an empty string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-inputtemplate
         */
        readonly inputTemplate?: string;
        /**
         * The parameters for using a Kinesis stream as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-kinesisstreamparameters
         */
        readonly kinesisStreamParameters?: cdk.IResolvable | CfnPipe.PipeTargetKinesisStreamParametersProperty;
        /**
         * The parameters for using a Lambda function as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-lambdafunctionparameters
         */
        readonly lambdaFunctionParameters?: cdk.IResolvable | CfnPipe.PipeTargetLambdaFunctionParametersProperty;
        /**
         * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-redshiftdataparameters
         */
        readonly redshiftDataParameters?: cdk.IResolvable | CfnPipe.PipeTargetRedshiftDataParametersProperty;
        /**
         * The parameters for using a SageMaker AI pipeline as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-sagemakerpipelineparameters
         */
        readonly sageMakerPipelineParameters?: cdk.IResolvable | CfnPipe.PipeTargetSageMakerPipelineParametersProperty;
        /**
         * The parameters for using a Amazon SQS stream as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-sqsqueueparameters
         */
        readonly sqsQueueParameters?: cdk.IResolvable | CfnPipe.PipeTargetSqsQueueParametersProperty;
        /**
         * The parameters for using a Step Functions state machine as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-stepfunctionstatemachineparameters
         */
        readonly stepFunctionStateMachineParameters?: cdk.IResolvable | CfnPipe.PipeTargetStateMachineParametersProperty;
        /**
         * The parameters for using a Timestream for LiveAnalytics table as a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html#cfn-pipes-pipe-pipetargetparameters-timestreamparameters
         */
        readonly timestreamParameters?: cdk.IResolvable | CfnPipe.PipeTargetTimestreamParametersProperty;
    }
    /**
     * The parameters for using a Step Functions state machine as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetstatemachineparameters.html
     */
    interface PipeTargetStateMachineParametersProperty {
        /**
         * Specify whether to invoke the Step Functions state machine synchronously or asynchronously.
         *
         * - `REQUEST_RESPONSE` (default) - Invoke synchronously. For more information, see [StartSyncExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html) in the *AWS Step Functions API Reference* .
         *
         * > `REQUEST_RESPONSE` is not supported for `STANDARD` state machine workflows.
         * - `FIRE_AND_FORGET` - Invoke asynchronously. For more information, see [StartExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html) in the *AWS Step Functions API Reference* .
         *
         * For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the *Amazon EventBridge User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetstatemachineparameters.html#cfn-pipes-pipe-pipetargetstatemachineparameters-invocationtype
         */
        readonly invocationType?: string;
    }
    /**
     * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html
     */
    interface PipeTargetHttpParametersProperty {
        /**
         * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters
         */
        readonly headerParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues
         */
        readonly pathParameterValues?: Array<string>;
        /**
         * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters
         */
        readonly queryStringParameters?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The parameters for using a Amazon SQS stream as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html
     */
    interface PipeTargetSqsQueueParametersProperty {
        /**
         * This parameter applies only to FIFO (first-in-first-out) queues.
         *
         * The token used for deduplication of sent messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagededuplicationid
         */
        readonly messageDeduplicationId?: string;
        /**
         * The FIFO message group ID to use as the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagegroupid
         */
        readonly messageGroupId?: string;
    }
    /**
     * The parameters for using an CloudWatch Logs log stream as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html
     */
    interface PipeTargetCloudWatchLogsParametersProperty {
        /**
         * The name of the log stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html#cfn-pipes-pipe-pipetargetcloudwatchlogsparameters-logstreamname
         */
        readonly logStreamName?: string;
        /**
         * A [dynamic path parameter](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) to a field in the payload containing the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
         *
         * The value cannot be a static timestamp as the provided timestamp would be applied to all events delivered by the Pipe, regardless of when they are actually delivered.
         *
         * If no dynamic path parameter is provided, the default value is the time the invocation is processed by the Pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html#cfn-pipes-pipe-pipetargetcloudwatchlogsparameters-timestamp
         */
        readonly timestamp?: string;
    }
    /**
     * The parameters for using a Kinesis stream as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html
     */
    interface PipeTargetKinesisStreamParametersProperty {
        /**
         * Determines which shard in the stream the data record is assigned to.
         *
         * Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html#cfn-pipes-pipe-pipetargetkinesisstreamparameters-partitionkey
         */
        readonly partitionKey: string;
    }
    /**
     * The parameters for using a SageMaker AI pipeline as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html
     */
    interface PipeTargetSageMakerPipelineParametersProperty {
        /**
         * List of Parameter names and values for SageMaker AI Model Building Pipeline execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html#cfn-pipes-pipe-pipetargetsagemakerpipelineparameters-pipelineparameterlist
         */
        readonly pipelineParameterList?: Array<cdk.IResolvable | CfnPipe.SageMakerPipelineParameterProperty> | cdk.IResolvable;
    }
    /**
     * Name/Value pair of a parameter to start execution of a SageMaker AI Model Building Pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html
     */
    interface SageMakerPipelineParameterProperty {
        /**
         * Name of parameter to start execution of a SageMaker AI Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html#cfn-pipes-pipe-sagemakerpipelineparameter-name
         */
        readonly name: string;
        /**
         * Value of parameter to start execution of a SageMaker AI Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html#cfn-pipes-pipe-sagemakerpipelineparameter-value
         */
        readonly value: string;
    }
    /**
     * The parameters for using an EventBridge event bus as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html
     */
    interface PipeTargetEventBridgeEventBusParametersProperty {
        /**
         * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-detailtype
         */
        readonly detailType?: string;
        /**
         * The URL subdomain of the endpoint.
         *
         * For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-endpointid
         */
        readonly endpointId?: string;
        /**
         * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns.
         *
         * Any number, including zero, may be present.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-resources
         */
        readonly resources?: Array<string>;
        /**
         * The source of the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-source
         */
        readonly source?: string;
        /**
         * The time stamp of the event, per [RFC3339](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc3339.txt) . If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-time
         */
        readonly time?: string;
    }
    /**
     * The parameters for using a Lambda function as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html
     */
    interface PipeTargetLambdaFunctionParametersProperty {
        /**
         * Specify whether to invoke the function synchronously or asynchronously.
         *
         * - `REQUEST_RESPONSE` (default) - Invoke synchronously. This corresponds to the `RequestResponse` option in the `InvocationType` parameter for the Lambda [Invoke](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) API.
         * - `FIRE_AND_FORGET` - Invoke asynchronously. This corresponds to the `Event` option in the `InvocationType` parameter for the Lambda [Invoke](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) API.
         *
         * For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the *Amazon EventBridge User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html#cfn-pipes-pipe-pipetargetlambdafunctionparameters-invocationtype
         */
        readonly invocationType?: string;
    }
    /**
     * The parameters for using an Amazon ECS task as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html
     */
    interface PipeTargetEcsTaskParametersProperty {
        /**
         * The capacity provider strategy to use for the task.
         *
         * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-capacityproviderstrategy
         */
        readonly capacityProviderStrategy?: Array<CfnPipe.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies whether to enable Amazon ECS managed tags for the task.
         *
         * For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-enableecsmanagedtags
         */
        readonly enableEcsManagedTags?: boolean | cdk.IResolvable;
        /**
         * Whether or not to enable the execute command functionality for the containers in this task.
         *
         * If true, this enables execute command functionality on all containers in the task.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-enableexecutecommand
         */
        readonly enableExecuteCommand?: boolean | cdk.IResolvable;
        /**
         * Specifies an Amazon ECS task group for the task.
         *
         * The maximum length is 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-group
         */
        readonly group?: string;
        /**
         * Specifies the launch type on which your task is running.
         *
         * The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-launchtype
         */
        readonly launchType?: string;
        /**
         * Use this structure if the Amazon ECS task uses the `awsvpc` network mode.
         *
         * This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
         *
         * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-networkconfiguration
         */
        readonly networkConfiguration?: cdk.IResolvable | CfnPipe.NetworkConfigurationProperty;
        /**
         * The overrides that are associated with a task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-overrides
         */
        readonly overrides?: CfnPipe.EcsTaskOverrideProperty | cdk.IResolvable;
        /**
         * An array of placement constraint objects to use for the task.
         *
         * You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-placementconstraints
         */
        readonly placementConstraints?: Array<cdk.IResolvable | CfnPipe.PlacementConstraintProperty> | cdk.IResolvable;
        /**
         * The placement strategy objects to use for the task.
         *
         * You can specify a maximum of five strategy rules per task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-placementstrategy
         */
        readonly placementStrategy?: Array<cdk.IResolvable | CfnPipe.PlacementStrategyProperty> | cdk.IResolvable;
        /**
         * Specifies the platform version for the task.
         *
         * Specify only the numeric portion of the platform version, such as `1.1.0` .
         *
         * This structure is used only if `LaunchType` is `FARGATE` . For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-platformversion
         */
        readonly platformVersion?: string;
        /**
         * Specifies whether to propagate the tags from the task definition to the task.
         *
         * If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the `TagResource` API action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-propagatetags
         */
        readonly propagateTags?: string;
        /**
         * The reference ID to use for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-referenceid
         */
        readonly referenceId?: string;
        /**
         * The metadata that you apply to the task to help you categorize and organize them.
         *
         * Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
        /**
         * The number of tasks to create based on `TaskDefinition` .
         *
         * The default is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-taskcount
         */
        readonly taskCount?: number;
        /**
         * The ARN of the task definition to use if the event target is an Amazon ECS task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html#cfn-pipes-pipe-pipetargetecstaskparameters-taskdefinitionarn
         */
        readonly taskDefinitionArn: string;
    }
    /**
     * An object representing a constraint on task placement.
     *
     * To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html
     */
    interface PlacementConstraintProperty {
        /**
         * A cluster query language expression to apply to the constraint.
         *
         * You cannot specify an expression if the constraint type is `distinctInstance` . To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html#cfn-pipes-pipe-placementconstraint-expression
         */
        readonly expression?: string;
        /**
         * The type of constraint.
         *
         * Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html#cfn-pipes-pipe-placementconstraint-type
         */
        readonly type?: string;
    }
    /**
     * The task placement strategy for a task or service.
     *
     * To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html
     */
    interface PlacementStrategyProperty {
        /**
         * The field to apply the placement strategy against.
         *
         * For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html#cfn-pipes-pipe-placementstrategy-field
         */
        readonly field?: string;
        /**
         * The type of placement strategy.
         *
         * The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html#cfn-pipes-pipe-placementstrategy-type
         */
        readonly type?: string;
    }
    /**
     * The details of a capacity provider strategy.
     *
     * To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The base value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html#cfn-pipes-pipe-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html#cfn-pipes-pipe-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider: string;
        /**
         * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The weight value is taken into consideration after the base value, if defined, is satisfied.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html#cfn-pipes-pipe-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * The overrides that are associated with a task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html
     */
    interface EcsTaskOverrideProperty {
        /**
         * One or more container overrides that are sent to a task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-containeroverrides
         */
        readonly containerOverrides?: Array<CfnPipe.EcsContainerOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The cpu override for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-cpu
         */
        readonly cpu?: string;
        /**
         * The ephemeral storage setting override for the task.
         *
         * > This parameter is only supported for tasks hosted on Fargate that use the following platform versions:
         * >
         * > - Linux platform version `1.4.0` or later.
         * > - Windows platform version `1.0.0` or later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-ephemeralstorage
         */
        readonly ephemeralStorage?: CfnPipe.EcsEphemeralStorageProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the task execution IAM role override for the task.
         *
         * For more information, see [Amazon ECS task execution IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-executionrolearn
         */
        readonly executionRoleArn?: string;
        /**
         * The Elastic Inference accelerator override for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-inferenceacceleratoroverrides
         */
        readonly inferenceAcceleratorOverrides?: Array<CfnPipe.EcsInferenceAcceleratorOverrideProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The memory override for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-memory
         */
        readonly memory?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume.
         *
         * All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Role for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html#cfn-pipes-pipe-ecstaskoverride-taskrolearn
         */
        readonly taskRoleArn?: string;
    }
    /**
     * Details on an Elastic Inference accelerator task override.
     *
     * This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html
     */
    interface EcsInferenceAcceleratorOverrideProperty {
        /**
         * The Elastic Inference accelerator device name to override for the task.
         *
         * This parameter must match a `deviceName` specified in the task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html#cfn-pipes-pipe-ecsinferenceacceleratoroverride-devicename
         */
        readonly deviceName?: string;
        /**
         * The Elastic Inference accelerator type to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html#cfn-pipes-pipe-ecsinferenceacceleratoroverride-devicetype
         */
        readonly deviceType?: string;
    }
    /**
     * The amount of ephemeral storage to allocate for the task.
     *
     * This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Fargate task storage](https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html) in the *Amazon ECS User Guide for Fargate* .
     *
     * > This parameter is only supported for tasks hosted on Fargate using Linux platform version `1.4.0` or later. This parameter is not supported for Windows containers on Fargate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsephemeralstorage.html
     */
    interface EcsEphemeralStorageProperty {
        /**
         * The total amount, in GiB, of ephemeral storage to set for the task.
         *
         * The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsephemeralstorage.html#cfn-pipes-pipe-ecsephemeralstorage-sizeingib
         */
        readonly sizeInGiB: number;
    }
    /**
     * The overrides that are sent to a container.
     *
     * An empty container override can be passed in. An example of an empty container override is `{"containerOverrides": [ ] }` . If a non-empty container override is specified, the `name` parameter must be included.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html
     */
    interface EcsContainerOverrideProperty {
        /**
         * The command to send to the container that overrides the default command from the Docker image or the task definition.
         *
         * You must also specify a container name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-command
         */
        readonly command?: Array<string>;
        /**
         * The number of `cpu` units reserved for the container, instead of the default value from the task definition.
         *
         * You must also specify a container name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-cpu
         */
        readonly cpu?: number;
        /**
         * The environment variables to send to the container.
         *
         * You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-environment
         */
        readonly environment?: Array<CfnPipe.EcsEnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of files containing the environment variables to pass to a container, instead of the value from the container definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-environmentfiles
         */
        readonly environmentFiles?: Array<CfnPipe.EcsEnvironmentFileProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition.
         *
         * If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-memory
         */
        readonly memory?: number;
        /**
         * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition.
         *
         * You must also specify a container name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-memoryreservation
         */
        readonly memoryReservation?: number;
        /**
         * The name of the container that receives the override.
         *
         * This parameter is required if any override is specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-name
         */
        readonly name?: string;
        /**
         * The type and amount of a resource to assign to a container, instead of the default value from the task definition.
         *
         * The only supported resource is a GPU.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html#cfn-pipes-pipe-ecscontaineroverride-resourcerequirements
         */
        readonly resourceRequirements?: Array<CfnPipe.EcsResourceRequirementProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The environment variables to send to the container.
     *
     * You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html
     */
    interface EcsEnvironmentVariableProperty {
        /**
         * The name of the key-value pair.
         *
         * For environment variables, this is the name of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html#cfn-pipes-pipe-ecsenvironmentvariable-name
         */
        readonly name?: string;
        /**
         * The value of the key-value pair.
         *
         * For environment variables, this is the value of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html#cfn-pipes-pipe-ecsenvironmentvariable-value
         */
        readonly value?: string;
    }
    /**
     * The type and amount of a resource to assign to a container.
     *
     * The supported resource types are GPUs and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html
     */
    interface EcsResourceRequirementProperty {
        /**
         * The type of resource to assign to a container.
         *
         * The supported values are `GPU` or `InferenceAccelerator` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html#cfn-pipes-pipe-ecsresourcerequirement-type
         */
        readonly type: string;
        /**
         * The value for the specified resource type.
         *
         * If the `GPU` type is used, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
         *
         * If the `InferenceAccelerator` type is used, the `value` matches the `deviceName` for an InferenceAccelerator specified in a task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html#cfn-pipes-pipe-ecsresourcerequirement-value
         */
        readonly value: string;
    }
    /**
     * A list of files containing the environment variables to pass to a container.
     *
     * You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored. For more information about the environment variable file syntax, see [Declare default environment variables in file](https://docs.aws.amazon.com/https://docs.docker.com/compose/env-file/) .
     *
     * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying environment variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * This parameter is only supported for tasks hosted on Fargate using the following platform versions:
     *
     * - Linux platform version `1.4.0` or later.
     * - Windows platform version `1.0.0` or later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html
     */
    interface EcsEnvironmentFileProperty {
        /**
         * The file type to use.
         *
         * The only supported value is `s3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html#cfn-pipes-pipe-ecsenvironmentfile-type
         */
        readonly type: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html#cfn-pipes-pipe-ecsenvironmentfile-value
         */
        readonly value: string;
    }
    /**
     * This structure specifies the network configuration for an Amazon ECS task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used.
         *
         * This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-networkconfiguration.html#cfn-pipes-pipe-networkconfiguration-awsvpcconfiguration
         */
        readonly awsvpcConfiguration?: CfnPipe.AwsVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.
     *
     * This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html
     */
    interface AwsVpcConfigurationProperty {
        /**
         * Specifies whether the task's elastic network interface receives a public IP address.
         *
         * You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html#cfn-pipes-pipe-awsvpcconfiguration-assignpublicip
         */
        readonly assignPublicIp?: string;
        /**
         * Specifies the security groups associated with the task.
         *
         * These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html#cfn-pipes-pipe-awsvpcconfiguration-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Specifies the subnets associated with the task.
         *
         * These subnets must all be in the same VPC. You can specify as many as 16 subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html#cfn-pipes-pipe-awsvpcconfiguration-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The parameters for using an AWS Batch job as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html
     */
    interface PipeTargetBatchJobParametersProperty {
        /**
         * The array properties for the submitted job, such as the size of the array.
         *
         * The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-arrayproperties
         */
        readonly arrayProperties?: CfnPipe.BatchArrayPropertiesProperty | cdk.IResolvable;
        /**
         * The overrides that are sent to a container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-containeroverrides
         */
        readonly containerOverrides?: CfnPipe.BatchContainerOverridesProperty | cdk.IResolvable;
        /**
         * A list of dependencies for the job.
         *
         * A job can depend upon a maximum of 20 jobs. You can specify a `SEQUENTIAL` type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an `N_TO_N` type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-dependson
         */
        readonly dependsOn?: Array<CfnPipe.BatchJobDependencyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The job definition used by this job.
         *
         * This value can be one of `name` , `name:revision` , or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-jobdefinition
         */
        readonly jobDefinition: string;
        /**
         * The name of the job.
         *
         * It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-jobname
         */
        readonly jobName: string;
        /**
         * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition.
         *
         * Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-parameters
         */
        readonly parameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The retry strategy to use for failed jobs.
         *
         * When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html#cfn-pipes-pipe-pipetargetbatchjobparameters-retrystrategy
         */
        readonly retryStrategy?: CfnPipe.BatchRetryStrategyProperty | cdk.IResolvable;
    }
    /**
     * An object that represents an AWS Batch job dependency.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html
     */
    interface BatchJobDependencyProperty {
        /**
         * The job ID of the AWS Batch job that's associated with this dependency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html#cfn-pipes-pipe-batchjobdependency-jobid
         */
        readonly jobId?: string;
        /**
         * The type of the job dependency.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html#cfn-pipes-pipe-batchjobdependency-type
         */
        readonly type?: string;
    }
    /**
     * The array properties for the submitted job, such as the size of the array.
     *
     * The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batcharrayproperties.html
     */
    interface BatchArrayPropertiesProperty {
        /**
         * The size of the array, if this is an array batch job.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batcharrayproperties.html#cfn-pipes-pipe-batcharrayproperties-size
         */
        readonly size?: number;
    }
    /**
     * The retry strategy that's associated with a job.
     *
     * For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the *AWS Batch User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchretrystrategy.html
     */
    interface BatchRetryStrategyProperty {
        /**
         * The number of times to move a job to the `RUNNABLE` status.
         *
         * If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchretrystrategy.html#cfn-pipes-pipe-batchretrystrategy-attempts
         */
        readonly attempts?: number;
    }
    /**
     * The overrides that are sent to a container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html
     */
    interface BatchContainerOverridesProperty {
        /**
         * The command to send to the container that overrides the default command from the Docker image or the task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html#cfn-pipes-pipe-batchcontaineroverrides-command
         */
        readonly command?: Array<string>;
        /**
         * The environment variables to send to the container.
         *
         * You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
         *
         * > Environment variables cannot start with " `AWS Batch` ". This naming convention is reserved for variables that AWS Batch sets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html#cfn-pipes-pipe-batchcontaineroverrides-environment
         */
        readonly environment?: Array<CfnPipe.BatchEnvironmentVariableProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The instance type to use for a multi-node parallel job.
         *
         * > This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html#cfn-pipes-pipe-batchcontaineroverrides-instancetype
         */
        readonly instanceType?: string;
        /**
         * The type and amount of resources to assign to a container.
         *
         * This overrides the settings in the job definition. The supported resources include `GPU` , `MEMORY` , and `VCPU` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html#cfn-pipes-pipe-batchcontaineroverrides-resourcerequirements
         */
        readonly resourceRequirements?: Array<CfnPipe.BatchResourceRequirementProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The environment variables to send to the container.
     *
     * You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
     *
     * > Environment variables cannot start with " `AWS Batch` ". This naming convention is reserved for variables that AWS Batch sets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html
     */
    interface BatchEnvironmentVariableProperty {
        /**
         * The name of the key-value pair.
         *
         * For environment variables, this is the name of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html#cfn-pipes-pipe-batchenvironmentvariable-name
         */
        readonly name?: string;
        /**
         * The value of the key-value pair.
         *
         * For environment variables, this is the value of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html#cfn-pipes-pipe-batchenvironmentvariable-value
         */
        readonly value?: string;
    }
    /**
     * The type and amount of a resource to assign to a container.
     *
     * The supported resources include `GPU` , `MEMORY` , and `VCPU` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html
     */
    interface BatchResourceRequirementProperty {
        /**
         * The type of resource to assign to a container.
         *
         * The supported resources include `GPU` , `MEMORY` , and `VCPU` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html#cfn-pipes-pipe-batchresourcerequirement-type
         */
        readonly type: string;
        /**
         * The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
         *
         * - **type="GPU"** - The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched on.
         *
         * > GPUs aren't available for jobs that are running on Fargate resources.
         * - **type="MEMORY"** - The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to `Memory` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/) . You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to `Memory` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/) .
         *
         * > If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the *AWS Batch User Guide* .
         *
         * For jobs that are running on Fargate resources, then `value` is the hard limit (in MiB), and must match one of the supported values and the `VCPU` values must be one of the values supported for that memory value.
         *
         * - **value = 512** - `VCPU` = 0.25
         * - **value = 1024** - `VCPU` = 0.25 or 0.5
         * - **value = 2048** - `VCPU` = 0.25, 0.5, or 1
         * - **value = 3072** - `VCPU` = 0.5, or 1
         * - **value = 4096** - `VCPU` = 0.5, 1, or 2
         * - **value = 5120, 6144, or 7168** - `VCPU` = 1 or 2
         * - **value = 8192** - `VCPU` = 1, 2, 4, or 8
         * - **value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360** - `VCPU` = 2 or 4
         * - **value = 16384** - `VCPU` = 2, 4, or 8
         * - **value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720** - `VCPU` = 4
         * - **value = 20480, 24576, or 28672** - `VCPU` = 4 or 8
         * - **value = 36864, 45056, 53248, or 61440** - `VCPU` = 8
         * - **value = 32768, 40960, 49152, or 57344** - `VCPU` = 8 or 16
         * - **value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880** - `VCPU` = 16
         * - **type="VCPU"** - The number of vCPUs reserved for the container. This parameter maps to `CpuShares` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/) . Each vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.
         *
         * The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see [AWS Fargate quotas](https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate) in the *AWS General Reference* .
         *
         * For jobs that are running on Fargate resources, then `value` must match one of the supported values and the `MEMORY` values must be one of the values supported for that `VCPU` value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16
         *
         * - **value = 0.25** - `MEMORY` = 512, 1024, or 2048
         * - **value = 0.5** - `MEMORY` = 1024, 2048, 3072, or 4096
         * - **value = 1** - `MEMORY` = 2048, 3072, 4096, 5120, 6144, 7168, or 8192
         * - **value = 2** - `MEMORY` = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384
         * - **value = 4** - `MEMORY` = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720
         * - **value = 8** - `MEMORY` = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
         * - **value = 16** - `MEMORY` = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html#cfn-pipes-pipe-batchresourcerequirement-value
         */
        readonly value: string;
    }
    /**
     * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html
     */
    interface PipeTargetRedshiftDataParametersProperty {
        /**
         * The name of the database.
         *
         * Required when authenticating using temporary credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-database
         */
        readonly database: string;
        /**
         * The database user name.
         *
         * Required when authenticating using temporary credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-dbuser
         */
        readonly dbUser?: string;
        /**
         * The name or ARN of the secret that enables access to the database.
         *
         * Required when authenticating using Secrets Manager.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-secretmanagerarn
         */
        readonly secretManagerArn?: string;
        /**
         * The SQL statement text to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-sqls
         */
        readonly sqls: Array<string>;
        /**
         * The name of the SQL statement.
         *
         * You can name the SQL statement when you create it to identify the query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-statementname
         */
        readonly statementName?: string;
        /**
         * Indicates whether to send an event back to EventBridge after the SQL statement runs.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-withevent
         */
        readonly withEvent?: boolean | cdk.IResolvable;
    }
    /**
     * The parameters for using a Timestream for LiveAnalytics table as a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html
     */
    interface PipeTargetTimestreamParametersProperty {
        /**
         * Map source data to dimensions in the target Timestream for LiveAnalytics table.
         *
         * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-dimensionmappings
         */
        readonly dimensionMappings: Array<CfnPipe.DimensionMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The granularity of the time units used. Default is `MILLISECONDS` .
         *
         * Required if `TimeFieldType` is specified as `EPOCH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-epochtimeunit
         */
        readonly epochTimeUnit?: string;
        /**
         * Maps multiple measures from the source event to the same record in the specified Timestream for LiveAnalytics table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-multimeasuremappings
         */
        readonly multiMeasureMappings?: Array<cdk.IResolvable | CfnPipe.MultiMeasureMappingProperty> | cdk.IResolvable;
        /**
         * Mappings of single source data fields to individual records in the specified Timestream for LiveAnalytics table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-singlemeasuremappings
         */
        readonly singleMeasureMappings?: Array<cdk.IResolvable | CfnPipe.SingleMeasureMappingProperty> | cdk.IResolvable;
        /**
         * The type of time value used.
         *
         * The default is `EPOCH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-timefieldtype
         */
        readonly timeFieldType?: string;
        /**
         * How to format the timestamps. For example, `yyyy-MM-dd'T'HH:mm:ss'Z'` .
         *
         * Required if `TimeFieldType` is specified as `TIMESTAMP_FORMAT` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-timestampformat
         */
        readonly timestampFormat?: string;
        /**
         * Dynamic path to the source data field that represents the time value for your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-timevalue
         */
        readonly timeValue: string;
        /**
         * 64 bit version value or source data field that represents the version value for your data.
         *
         * Write requests with a higher version number will update the existing measure values of the record and version. In cases where the measure value is the same, the version will still be updated.
         *
         * Default value is 1.
         *
         * Timestream for LiveAnalytics does not support updating partial measure values in a record.
         *
         * Write requests for duplicate data with a higher version number will update the existing measure value and version. In cases where the measure value is the same, `Version` will still be updated. Default value is `1` .
         *
         * > `Version` must be `1` or greater, or you will receive a `ValidationException` error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargettimestreamparameters.html#cfn-pipes-pipe-pipetargettimestreamparameters-versionvalue
         */
        readonly versionValue: string;
    }
    /**
     * Maps source data to a dimension in the target Timestream for LiveAnalytics table.
     *
     * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionmapping.html
     */
    interface DimensionMappingProperty {
        /**
         * The metadata attributes of the time series.
         *
         * For example, the name and Availability Zone of an Amazon EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionmapping.html#cfn-pipes-pipe-dimensionmapping-dimensionname
         */
        readonly dimensionName: string;
        /**
         * Dynamic path to the dimension value in the source event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionmapping.html#cfn-pipes-pipe-dimensionmapping-dimensionvalue
         */
        readonly dimensionValue: string;
        /**
         * The data type of the dimension for the time-series data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-dimensionmapping.html#cfn-pipes-pipe-dimensionmapping-dimensionvaluetype
         */
        readonly dimensionValueType: string;
    }
    /**
     * Maps a single source data field to a single record in the specified Timestream for LiveAnalytics table.
     *
     * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-singlemeasuremapping.html
     */
    interface SingleMeasureMappingProperty {
        /**
         * Target measure name for the measurement attribute in the Timestream table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-singlemeasuremapping.html#cfn-pipes-pipe-singlemeasuremapping-measurename
         */
        readonly measureName: string;
        /**
         * Dynamic path of the source field to map to the measure in the record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-singlemeasuremapping.html#cfn-pipes-pipe-singlemeasuremapping-measurevalue
         */
        readonly measureValue: string;
        /**
         * Data type of the source field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-singlemeasuremapping.html#cfn-pipes-pipe-singlemeasuremapping-measurevaluetype
         */
        readonly measureValueType: string;
    }
    /**
     * Maps multiple measures from the source event to the same Timestream for LiveAnalytics record.
     *
     * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasuremapping.html
     */
    interface MultiMeasureMappingProperty {
        /**
         * Mappings that represent multiple source event fields mapped to measures in the same Timestream for LiveAnalytics record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasuremapping.html#cfn-pipes-pipe-multimeasuremapping-multimeasureattributemappings
         */
        readonly multiMeasureAttributeMappings: Array<cdk.IResolvable | CfnPipe.MultiMeasureAttributeMappingProperty> | cdk.IResolvable;
        /**
         * The name of the multiple measurements per record (multi-measure).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasuremapping.html#cfn-pipes-pipe-multimeasuremapping-multimeasurename
         */
        readonly multiMeasureName: string;
    }
    /**
     * A mapping of a source event data field to a measure in a Timestream for LiveAnalytics record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasureattributemapping.html
     */
    interface MultiMeasureAttributeMappingProperty {
        /**
         * Dynamic path to the measurement attribute in the source event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasureattributemapping.html#cfn-pipes-pipe-multimeasureattributemapping-measurevalue
         */
        readonly measureValue: string;
        /**
         * Data type of the measurement attribute in the source event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasureattributemapping.html#cfn-pipes-pipe-multimeasureattributemapping-measurevaluetype
         */
        readonly measureValueType: string;
        /**
         * Target measure name to be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-multimeasureattributemapping.html#cfn-pipes-pipe-multimeasureattributemapping-multimeasureattributename
         */
        readonly multiMeasureAttributeName: string;
    }
    /**
     * The parameters required to set up enrichment on your pipe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html
     */
    interface PipeEnrichmentParametersProperty {
        /**
         * Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.
         *
         * If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html#cfn-pipes-pipe-pipeenrichmentparameters-httpparameters
         */
        readonly httpParameters?: cdk.IResolvable | CfnPipe.PipeEnrichmentHttpParametersProperty;
        /**
         * Valid JSON text passed to the enrichment.
         *
         * In this case, nothing from the event itself is passed to the enrichment. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](https://docs.aws.amazon.com/http://www.rfc-editor.org/rfc/rfc7159.txt) .
         *
         * To remove an input template, specify an empty string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html#cfn-pipes-pipe-pipeenrichmentparameters-inputtemplate
         */
        readonly inputTemplate?: string;
    }
    /**
     * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
     *
     * In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html
     */
    interface PipeEnrichmentHttpParametersProperty {
        /**
         * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters
         */
        readonly headerParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues
         */
        readonly pathParameterValues?: Array<string>;
        /**
         * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters
         */
        readonly queryStringParameters?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The parameters required to set up a source for your pipe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html
     */
    interface PipeSourceParametersProperty {
        /**
         * The parameters for using an Active MQ broker as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters
         */
        readonly activeMqBrokerParameters?: cdk.IResolvable | CfnPipe.PipeSourceActiveMQBrokerParametersProperty;
        /**
         * The parameters for using a DynamoDB stream as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters
         */
        readonly dynamoDbStreamParameters?: cdk.IResolvable | CfnPipe.PipeSourceDynamoDBStreamParametersProperty;
        /**
         * The collection of event patterns used to filter events.
         *
         * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
         *
         * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-filtercriteria
         */
        readonly filterCriteria?: CfnPipe.FilterCriteriaProperty | cdk.IResolvable;
        /**
         * The parameters for using a Kinesis stream as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters
         */
        readonly kinesisStreamParameters?: cdk.IResolvable | CfnPipe.PipeSourceKinesisStreamParametersProperty;
        /**
         * The parameters for using an MSK stream as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters
         */
        readonly managedStreamingKafkaParameters?: cdk.IResolvable | CfnPipe.PipeSourceManagedStreamingKafkaParametersProperty;
        /**
         * The parameters for using a Rabbit MQ broker as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters
         */
        readonly rabbitMqBrokerParameters?: cdk.IResolvable | CfnPipe.PipeSourceRabbitMQBrokerParametersProperty;
        /**
         * The parameters for using a self-managed Apache Kafka stream as a source.
         *
         * A *self managed* cluster refers to any Apache Kafka cluster not hosted by AWS . This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://docs.aws.amazon.com/https://www.confluent.io/) , [CloudKarafka](https://docs.aws.amazon.com/https://www.cloudkarafka.com/) , or [Redpanda](https://docs.aws.amazon.com/https://redpanda.com/) . For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters
         */
        readonly selfManagedKafkaParameters?: cdk.IResolvable | CfnPipe.PipeSourceSelfManagedKafkaParametersProperty;
        /**
         * The parameters for using a Amazon SQS stream as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters
         */
        readonly sqsQueueParameters?: cdk.IResolvable | CfnPipe.PipeSourceSqsQueueParametersProperty;
    }
    /**
     * The parameters for using an MSK stream as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html
     */
    interface PipeSourceManagedStreamingKafkaParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * The name of the destination queue to consume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-consumergroupid
         */
        readonly consumerGroupId?: string;
        /**
         * The credentials needed to access the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-credentials
         */
        readonly credentials?: cdk.IResolvable | CfnPipe.MSKAccessCredentialsProperty;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * The position in a stream from which to start reading.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-startingposition
         */
        readonly startingPosition?: string;
        /**
         * The name of the topic that the pipe will read from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-topicname
         */
        readonly topicName: string;
    }
    /**
     * The AWS Secrets Manager secret that stores your stream credentials.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html
     */
    interface MSKAccessCredentialsProperty {
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html#cfn-pipes-pipe-mskaccesscredentials-clientcertificatetlsauth
         */
        readonly clientCertificateTlsAuth?: string;
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html#cfn-pipes-pipe-mskaccesscredentials-saslscram512auth
         */
        readonly saslScram512Auth?: string;
    }
    /**
     * The parameters for using a DynamoDB stream as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html
     */
    interface PipeSourceDynamoDBStreamParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * Define the target queue to send dead-letter queue events to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig
         */
        readonly deadLetterConfig?: CfnPipe.DeadLetterConfigProperty | cdk.IResolvable;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * Discard records older than the specified age.
         *
         * The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumrecordageinseconds
         */
        readonly maximumRecordAgeInSeconds?: number;
        /**
         * Discard records after the specified number of retries.
         *
         * The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
        /**
         * Define how to handle item process failures.
         *
         * `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-onpartialbatchitemfailure
         */
        readonly onPartialBatchItemFailure?: string;
        /**
         * The number of batches to process concurrently from each shard.
         *
         * The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-parallelizationfactor
         */
        readonly parallelizationFactor?: number;
        /**
         * (Streams only) The position in a stream from which to start reading.
         *
         * *Valid values* : `TRIM_HORIZON | LATEST`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-startingposition
         */
        readonly startingPosition: string;
    }
    /**
     * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html
     */
    interface DeadLetterConfigProperty {
        /**
         * The ARN of the specified target for the dead-letter queue.
         *
         * For Amazon Kinesis stream and Amazon DynamoDB stream sources, specify either an Amazon SNS topic or Amazon SQS queue ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html#cfn-pipes-pipe-deadletterconfig-arn
         */
        readonly arn?: string;
    }
    /**
     * The parameters for using a self-managed Apache Kafka stream as a source.
     *
     * A *self managed* cluster refers to any Apache Kafka cluster not hosted by AWS . This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://docs.aws.amazon.com/https://www.confluent.io/) , [CloudKarafka](https://docs.aws.amazon.com/https://www.cloudkarafka.com/) , or [Redpanda](https://docs.aws.amazon.com/https://redpanda.com/) . For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html
     */
    interface PipeSourceSelfManagedKafkaParametersProperty {
        /**
         * An array of server URLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-additionalbootstrapservers
         */
        readonly additionalBootstrapServers?: Array<string>;
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * The name of the destination queue to consume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-consumergroupid
         */
        readonly consumerGroupId?: string;
        /**
         * The credentials needed to access the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-credentials
         */
        readonly credentials?: cdk.IResolvable | CfnPipe.SelfManagedKafkaAccessConfigurationCredentialsProperty;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * The ARN of the Secrets Manager secret used for certification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-serverrootcacertificate
         */
        readonly serverRootCaCertificate?: string;
        /**
         * The position in a stream from which to start reading.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-startingposition
         */
        readonly startingPosition?: string;
        /**
         * The name of the topic that the pipe will read from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-topicname
         */
        readonly topicName: string;
        /**
         * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-vpc
         */
        readonly vpc?: cdk.IResolvable | CfnPipe.SelfManagedKafkaAccessConfigurationVpcProperty;
    }
    /**
     * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html
     */
    interface SelfManagedKafkaAccessConfigurationVpcProperty {
        /**
         * Specifies the security groups associated with the stream.
         *
         * These security groups must all be in the same VPC. You can specify as many as five security groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-securitygroup
         */
        readonly securityGroup?: Array<string>;
        /**
         * Specifies the subnets associated with the stream.
         *
         * These subnets must all be in the same VPC. You can specify as many as 16 subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-subnets
         */
        readonly subnets?: Array<string>;
    }
    /**
     * The AWS Secrets Manager secret that stores your stream credentials.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html
     */
    interface SelfManagedKafkaAccessConfigurationCredentialsProperty {
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-basicauth
         */
        readonly basicAuth?: string;
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-clientcertificatetlsauth
         */
        readonly clientCertificateTlsAuth?: string;
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-saslscram256auth
         */
        readonly saslScram256Auth?: string;
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-saslscram512auth
         */
        readonly saslScram512Auth?: string;
    }
    /**
     * The parameters for using a Rabbit MQ broker as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html
     */
    interface PipeSourceRabbitMQBrokerParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * The credentials needed to access the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-credentials
         */
        readonly credentials: cdk.IResolvable | CfnPipe.MQBrokerAccessCredentialsProperty;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * The name of the destination queue to consume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-queuename
         */
        readonly queueName: string;
        /**
         * The name of the virtual host associated with the source broker.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-virtualhost
         */
        readonly virtualHost?: string;
    }
    /**
     * The AWS Secrets Manager secret that stores your broker credentials.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mqbrokeraccesscredentials.html
     */
    interface MQBrokerAccessCredentialsProperty {
        /**
         * The ARN of the Secrets Manager secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mqbrokeraccesscredentials.html#cfn-pipes-pipe-mqbrokeraccesscredentials-basicauth
         */
        readonly basicAuth: string;
    }
    /**
     * The parameters for using a Amazon SQS stream as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html
     */
    interface PipeSourceSqsQueueParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html#cfn-pipes-pipe-pipesourcesqsqueueparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html#cfn-pipes-pipe-pipesourcesqsqueueparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
    }
    /**
     * The parameters for using a Kinesis stream as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html
     */
    interface PipeSourceKinesisStreamParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * Define the target queue to send dead-letter queue events to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-deadletterconfig
         */
        readonly deadLetterConfig?: CfnPipe.DeadLetterConfigProperty | cdk.IResolvable;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * Discard records older than the specified age.
         *
         * The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumrecordageinseconds
         */
        readonly maximumRecordAgeInSeconds?: number;
        /**
         * Discard records after the specified number of retries.
         *
         * The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
        /**
         * Define how to handle item process failures.
         *
         * `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-onpartialbatchitemfailure
         */
        readonly onPartialBatchItemFailure?: string;
        /**
         * The number of batches to process concurrently from each shard.
         *
         * The default value is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-parallelizationfactor
         */
        readonly parallelizationFactor?: number;
        /**
         * The position in a stream from which to start reading.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingposition
         */
        readonly startingPosition: string;
        /**
         * With `StartingPosition` set to `AT_TIMESTAMP` , the time from which to start reading, in Unix time seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingpositiontimestamp
         */
        readonly startingPositionTimestamp?: string;
    }
    /**
     * The collection of event patterns used to filter events.
     *
     * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
     *
     * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filtercriteria.html
     */
    interface FilterCriteriaProperty {
        /**
         * The event patterns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filtercriteria.html#cfn-pipes-pipe-filtercriteria-filters
         */
        readonly filters?: Array<CfnPipe.FilterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Filter events using an event pattern.
     *
     * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filter.html
     */
    interface FilterProperty {
        /**
         * The event pattern.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filter.html#cfn-pipes-pipe-filter-pattern
         */
        readonly pattern?: string;
    }
    /**
     * The parameters for using an Active MQ broker as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html
     */
    interface PipeSourceActiveMQBrokerParametersProperty {
        /**
         * The maximum number of records to include in each batch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-batchsize
         */
        readonly batchSize?: number;
        /**
         * The credentials needed to access the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials
         */
        readonly credentials: cdk.IResolvable | CfnPipe.MQBrokerAccessCredentialsProperty;
        /**
         * The maximum length of a time to wait for events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * The name of the destination queue to consume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename
         */
        readonly queueName: string;
    }
    /**
     * Represents the configuration settings for the logs to which this pipe should report events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html
     */
    interface PipeLogConfigurationProperty {
        /**
         * The logging configuration settings for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html#cfn-pipes-pipe-pipelogconfiguration-cloudwatchlogslogdestination
         */
        readonly cloudwatchLogsLogDestination?: CfnPipe.CloudwatchLogsLogDestinationProperty | cdk.IResolvable;
        /**
         * The Amazon Data Firehose logging configuration settings for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html#cfn-pipes-pipe-pipelogconfiguration-firehoselogdestination
         */
        readonly firehoseLogDestination?: CfnPipe.FirehoseLogDestinationProperty | cdk.IResolvable;
        /**
         * Whether the execution data (specifically, the `payload` , `awsRequest` , and `awsResponse` fields) is included in the log messages for this pipe.
         *
         * This applies to all log destinations for the pipe.
         *
         * For more information, see [Including execution data in logs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data) in the *Amazon EventBridge User Guide* .
         *
         * *Allowed values:* `ALL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html#cfn-pipes-pipe-pipelogconfiguration-includeexecutiondata
         */
        readonly includeExecutionData?: Array<string>;
        /**
         * The level of logging detail to include.
         *
         * This applies to all log destinations for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html#cfn-pipes-pipe-pipelogconfiguration-level
         */
        readonly level?: string;
        /**
         * The Amazon S3 logging configuration settings for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipelogconfiguration.html#cfn-pipes-pipe-pipelogconfiguration-s3logdestination
         */
        readonly s3LogDestination?: cdk.IResolvable | CfnPipe.S3LogDestinationProperty;
    }
    /**
     * Represents the Amazon S3 logging configuration settings for the pipe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html
     */
    interface S3LogDestinationProperty {
        /**
         * The name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html#cfn-pipes-pipe-s3logdestination-bucketname
         */
        readonly bucketName?: string;
        /**
         * The AWS account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html#cfn-pipes-pipe-s3logdestination-bucketowner
         */
        readonly bucketOwner?: string;
        /**
         * The format EventBridge uses for the log records.
         *
         * EventBridge currently only supports `json` formatting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html#cfn-pipes-pipe-s3logdestination-outputformat
         */
        readonly outputFormat?: string;
        /**
         * The prefix text with which to begin Amazon S3 log object names.
         *
         * For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-s3logdestination.html#cfn-pipes-pipe-s3logdestination-prefix
         */
        readonly prefix?: string;
    }
    /**
     * Represents the Amazon Data Firehose logging configuration settings for the pipe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-firehoselogdestination.html
     */
    interface FirehoseLogDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Firehose delivery stream to which EventBridge delivers the pipe log records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-firehoselogdestination.html#cfn-pipes-pipe-firehoselogdestination-deliverystreamarn
         */
        readonly deliveryStreamArn?: string;
    }
    /**
     * Represents the Amazon CloudWatch Logs logging configuration settings for the pipe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-cloudwatchlogslogdestination.html
     */
    interface CloudwatchLogsLogDestinationProperty {
        /**
         * The AWS Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-cloudwatchlogslogdestination.html#cfn-pipes-pipe-cloudwatchlogslogdestination-loggrouparn
         */
        readonly logGroupArn?: string;
    }
}
/**
 * Properties for defining a `CfnPipe`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html
 */
export interface CfnPipeProps {
    /**
     * A description of the pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description
     */
    readonly description?: string;
    /**
     * The state the pipe should be in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-desiredstate
     */
    readonly desiredState?: string;
    /**
     * The ARN of the enrichment resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-enrichment
     */
    readonly enrichment?: string;
    /**
     * The parameters required to set up enrichment on your pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-enrichmentparameters
     */
    readonly enrichmentParameters?: cdk.IResolvable | CfnPipe.PipeEnrichmentParametersProperty;
    /**
     * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data.
     *
     * The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
     *
     * To update a pipe that is using the default AWS owned key to use a customer managed key instead, or update a pipe that is using a customer managed key to use a different customer managed key, specify a customer managed key identifier.
     *
     * To update a pipe that is using a customer managed key to use the default AWS owned key , specify an empty string.
     *
     * For more information, see [Managing keys](https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-kmskeyidentifier
     */
    readonly kmsKeyIdentifier?: string;
    /**
     * The logging configuration settings for the pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-logconfiguration
     */
    readonly logConfiguration?: cdk.IResolvable | CfnPipe.PipeLogConfigurationProperty;
    /**
     * The name of the pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name
     */
    readonly name?: string;
    /**
     * The ARN of the role that allows the pipe to send data to the target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-rolearn
     */
    readonly roleArn: string;
    /**
     * The ARN of the source resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-source
     */
    readonly source: string;
    /**
     * The parameters required to set up a source for your pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-sourceparameters
     */
    readonly sourceParameters?: cdk.IResolvable | CfnPipe.PipeSourceParametersProperty;
    /**
     * The list of key-value pairs to associate with the pipe.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The ARN of the target resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-target
     */
    readonly target: string;
    /**
     * The parameters required to set up a target for your pipe.
     *
     * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-targetparameters
     */
    readonly targetParameters?: cdk.IResolvable | CfnPipe.PipeTargetParametersProperty;
}
