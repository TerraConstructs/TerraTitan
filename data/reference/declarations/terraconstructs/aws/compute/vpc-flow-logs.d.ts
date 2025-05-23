import { flowLog } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ISubnet, IVpc } from "./vpc";
import { IAwsConstruct, AwsConstructBase } from "../aws-construct";
import * as logs from "../cloudwatch";
import * as iam from "../iam";
import * as storage from "../storage";
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface FlowLogOutputs {
    /**
     * The Id of the VPC Flow Log
     *
     * @attribute
     */
    readonly flowLogId: string;
}
/**
 * A FlowLog
 */
export interface IFlowLog extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly flowLogOutputs: FlowLogOutputs;
    /**
     * The Id of the VPC Flow Log
     *
     * @attribute
     */
    readonly flowLogId: string;
}
/**
 * The type of VPC traffic to log
 */
export declare enum FlowLogTrafficType {
    /**
     * Only log accepts
     */
    ACCEPT = "ACCEPT",
    /**
     * Log all requests
     */
    ALL = "ALL",
    /**
     * Only log rejects
     */
    REJECT = "REJECT"
}
/**
 * The available destination types for Flow Logs
 */
export declare enum FlowLogDestinationType {
    /**
     * Send flow logs to CloudWatch Logs Group
     */
    CLOUD_WATCH_LOGS = "cloud-watch-logs",
    /**
     * Send flow logs to S3 Bucket
     */
    S3 = "s3",
    /**
     * Send flow logs to Kinesis Data Firehose
     */
    KINESIS_DATA_FIREHOSE = "kinesis-data-firehose"
}
/**
 * The type of resource to create the flow log for
 */
export declare abstract class FlowLogResourceType {
    /**
     * The subnet to attach the Flow Log to
     */
    static fromSubnet(subnet: ISubnet): FlowLogResourceType;
    /**
     * The VPC to attach the Flow Log to
     */
    static fromVpc(vpc: IVpc): FlowLogResourceType;
    /**
     * The Network Interface to attach the Flow Log to
     */
    static fromNetworkInterfaceId(id: string): FlowLogResourceType;
    /**
     * The Transit Gateway to attach the Flow Log to
     */
    static fromTransitGatewayId(id: string): FlowLogResourceType;
    /**
     * The Transit Gateway Attachment to attach the Flow Log to
     */
    static fromTransitGatewayAttachmentId(id: string): FlowLogResourceType;
    /**
     * The type of resource to attach a flow log to.
     */
    abstract resourceType: string;
    /**
     * The Id of the resource that the flow log should be attached to.
     */
    abstract resourceId: string;
}
/**
 * The file format for flow logs written to an S3 bucket destination
 */
export declare enum FlowLogFileFormat {
    /**
     * File will be written as plain text
     *
     * This is the default value
     */
    PLAIN_TEXT = "plain-text",
    /**
     * File will be written in parquet format
     */
    PARQUET = "parquet"
}
/**
 * Options for writing logs to a S3 destination
 */
export interface S3DestinationOptions {
    /**
     * Use Hive-compatible prefixes for flow logs
     * stored in Amazon S3
     *
     * @default false
     */
    readonly hiveCompatiblePartitions?: boolean;
    /**
     * The format for the flow log
     *
     * @default FlowLogFileFormat.PLAIN_TEXT
     */
    readonly fileFormat?: FlowLogFileFormat;
    /**
     * Partition the flow log per hour
     *
     * @default false
     */
    readonly perHourPartition?: boolean;
}
/**
 * The destination type for the flow log
 */
export declare abstract class FlowLogDestination {
    /**
     * Use CloudWatch logs as the destination
     */
    static toCloudWatchLogs(logGroup?: logs.ILogGroup, iamRole?: iam.IRole): FlowLogDestination;
    /**
     * Use S3 as the destination
     *
     * @param bucket optional s3 bucket to publish logs to. If one is not provided
     * a default bucket will be created
     * @param keyPrefix optional prefix within the bucket to write logs to
     * @param options additional s3 destination options
     */
    static toS3(bucket?: storage.IBucket, keyPrefix?: string, options?: S3DestinationOptions): FlowLogDestination;
    /**
     * Use Kinesis Data Firehose as the destination
     *
     * @param deliveryStreamArn the ARN of Kinesis Data Firehose delivery stream to publish logs to
     */
    static toKinesisDataFirehoseDestination(deliveryStreamArn: string): FlowLogDestination;
    /**
     * Generates a flow log destination configuration
     */
    abstract bind(scope: Construct, f: FlowLog): FlowLogDestinationConfig;
}
/**
 * Flow Log Destination configuration
 */
export interface FlowLogDestinationConfig {
    /**
     * The type of destination to publish the flow logs to.
     *
     * @default - CLOUD_WATCH_LOGS
     */
    readonly logDestinationType: FlowLogDestinationType;
    /**
     * The IAM Role that has access to publish to CloudWatch logs
     *
     * @default - default IAM role is created for you
     */
    readonly iamRole?: iam.IRole;
    /**
     * The CloudWatch Logs Log Group to publish the flow logs to
     *
     * @default - default log group is created for you
     */
    readonly logGroup?: logs.ILogGroup;
    /**
     * S3 bucket to publish the flow logs to
     *
     * @default - undefined
     */
    readonly s3Bucket?: storage.IBucket;
    /**
     * S3 bucket key prefix to publish the flow logs to
     *
     * @default - undefined
     */
    readonly keyPrefix?: string;
    /**
     * The ARN of Kinesis Data Firehose delivery stream to publish the flow logs to
     *
     * @default - undefined
     */
    readonly deliveryStreamArn?: string;
    /**
     * Options for writing flow logs to a supported destination
     *
     * @default - undefined
     */
    readonly destinationOptions?: S3DestinationOptions;
}
/**
 * The maximum interval of time during which a flow of packets
 * is captured and aggregated into a flow log record.
 *
 */
export declare enum FlowLogMaxAggregationInterval {
    /**
     * 1 minute (60 seconds)
     */
    ONE_MINUTE = 60,
    /**
     * 10 minutes (600 seconds)
     */
    TEN_MINUTES = 600
}
/**
 * The following table describes all of the available fields for a flow log record.
 */
export declare class LogFormat {
    readonly value: string;
    /**
     * The VPC Flow Logs version.
     */
    static readonly VERSION: LogFormat;
    /**
     * The AWS account ID of the owner of the source network interface for which traffic is recorded.
     */
    static readonly ACCOUNT_ID: LogFormat;
    /**
     * The ID of the network interface for which the traffic is recorded.
     */
    static readonly INTERFACE_ID: LogFormat;
    /**
     * The source address for incoming traffic, or the IPv4 or IPv6 address of the network interface
     * for outgoing traffic on the network interface.
     */
    static readonly SRC_ADDR: LogFormat;
    /**
     * The destination address for outgoing traffic, or the IPv4 or IPv6 address of the network interface
     * for incoming traffic on the network interface.
     */
    static readonly DST_ADDR: LogFormat;
    /**
     * The source port of the traffic.
     */
    static readonly SRC_PORT: LogFormat;
    /**
     * The destination port of the traffic.
     */
    static readonly DST_PORT: LogFormat;
    /**
     * The IANA protocol number of the traffic.
     */
    static readonly PROTOCOL: LogFormat;
    /**
     * The number of packets transferred during the flow.
     */
    static readonly PACKETS: LogFormat;
    /**
     * The number of bytes transferred during the flow.
     */
    static readonly BYTES: LogFormat;
    /**
     * The time, in Unix seconds, when the first packet of the flow was received within
     * the aggregation interval.
     *
     * This might be up to 60 seconds after the packet was transmitted or received on
     * the network interface.
     */
    static readonly START_TIMESTAMP: LogFormat;
    /**
     * The time, in Unix seconds, when the last packet of the flow was received within
     * the aggregation interval.
     *
     * This might be up to 60 seconds after the packet was transmitted or received on
     * the network interface.
     */
    static readonly END_TIMESTAMP: LogFormat;
    /**
     * The action that is associated with the traffic.
     */
    static readonly ACTION: LogFormat;
    /**
     * The logging status of the flow log.
     */
    static readonly LOG_STATUS: LogFormat;
    /**
     * The ID of the VPC that contains the network interface for which the traffic is recorded.
     */
    static readonly VPC_ID: LogFormat;
    /**
     * The ID of the subnet that contains the network interface for which the traffic is recorded.
     */
    static readonly SUBNET_ID: LogFormat;
    /**
     * The ID of the instance that's associated with network interface for which the traffic is
     * recorded, if the instance is owned by you.
     *
     * Returns a '-' symbol for a requester-managed network interface; for example, the
     * network interface for a NAT gateway
     */
    static readonly INSTANCE_ID: LogFormat;
    /**
     * The bitmask value for TCP flags.
     *
     * - FIN -- 1
     * - SYN -- 2
     * - RST -- 4
     * - SYN-ACK -- 18
     *
     * If no supported flags are recorded, the TCP flag value is 0.
     *
     * TCP flags can be OR-ed during the aggregation interval. For short connections,
     * the flags might be set on the same line in the flow log record, for example,
     * 19 for SYN-ACK and FIN, and 3 for SYN and FIN.
     */
    static readonly TCP_FLAGS: LogFormat;
    /**
     * The type of traffic.
     *
     * The possible values are IPv4, IPv6, or EFA.
     */
    static readonly TRAFFIC_TYPE: LogFormat;
    /**
     * The packet-level (original) source IP address of the traffic.
     */
    static readonly PKT_SRC_ADDR: LogFormat;
    /**
     * The packet-level (original) destination IP address for the traffic.
     */
    static readonly PKT_DST_ADDR: LogFormat;
    /**
     * The Region that contains the network interface for which traffic is recorded.
     */
    static readonly REGION: LogFormat;
    /**
     * The ID of the Availability Zone that contains the network interface for which traffic is recorded.
     */
    static readonly AZ_ID: LogFormat;
    /**
     * The type of sublocation that's returned in the sublocation-id field.
     */
    static readonly SUBLOCATION_TYPE: LogFormat;
    /**
     * The ID of the sublocation that contains the network interface for which traffic is recorded.
     */
    static readonly SUBLOCATION_ID: LogFormat;
    /**
     * The name of the subset of IP address ranges for the pkt-srcaddr field,
     * if the source IP address is for an AWS service.
     */
    static readonly PKT_SRC_AWS_SERVICE: LogFormat;
    /**
     * The name of the subset of IP address ranges for the pkt-dstaddr field,
     * if the destination IP address is for an AWS service.
     */
    static readonly PKT_DST_AWS_SERVICE: LogFormat;
    /**
     * The direction of the flow with respect to the interface where traffic is captured.
     */
    static readonly FLOW_DIRECTION: LogFormat;
    /**
     * The path that egress traffic takes to the destination.
     */
    static readonly TRAFFIC_PATH: LogFormat;
    /**
     * AWS Resource Name (ARN) of the ECS cluster if the traffic is from a running ECS task.
     */
    static readonly ECS_CLUSTER_ARN: LogFormat;
    /**
     * Name of the ECS cluster if the traffic is from a running ECS task.
     */
    static readonly ECS_CLUSTER_NAME: LogFormat;
    /**
     * ARN of the ECS container instance if the traffic is from a running ECS task on an EC2 instance.
     */
    static readonly ECS_CONTAINER_INSTANCE_ARN: LogFormat;
    /**
     * ID of the ECS container instance if the traffic is from a running ECS task on an EC2 instance.
     */
    static readonly ECS_CONTAINER_INSTANCE_ID: LogFormat;
    /**
     * Docker runtime ID of the container if the traffic is from a running ECS task.
     * If there is one container or more in the ECS task, this will be the docker runtime ID of the first container.
     */
    static readonly ECS_CONTAINER_ID: LogFormat;
    /**
     * Docker runtime ID of the container if the traffic is from a running ECS task.
     * If there is more than one container in the ECS task, this will be the Docker runtime ID of the second container.
     */
    static readonly ECS_SECOND_CONTAINER_ID: LogFormat;
    /**
     * Name of the ECS service if the traffic is from a running ECS task and the ECS task is started by an ECS service.
     */
    static readonly ECS_SERVICE_NAME: LogFormat;
    /**
     * ARN of the ECS task definition if the traffic is from a running ECS task.
     */
    static readonly ECS_TASK_DEFINITION_ARN: LogFormat;
    /**
     * ARN of the ECS task if the traffic is from a running ECS task.
     */
    static readonly ECS_TASK_ARN: LogFormat;
    /**
     * ID of the ECS task if the traffic is from a running ECS task.
     */
    static readonly ECS_TASK_ID: LogFormat;
    /**
     * The default format.
     */
    static readonly ALL_DEFAULT_FIELDS: LogFormat;
    /**
     * A custom format string.
     *
     * Gives full control over the format string fragment.
     */
    static custom(formatString: string): LogFormat;
    /**
     * A custom field name.
     *
     * If there is no ready-made constant for a new field yet, you can use this.
     * The field name will automatically be wrapped in `${ ... }`.
     */
    static field(field: string): LogFormat;
    protected constructor(value: string);
}
/**
 * Options to add a flow log to a VPC
 */
export interface FlowLogOptions {
    /**
     * The type of traffic to log. You can log traffic that the resource accepts or rejects, or all traffic.
     * When the target is either `TransitGateway` or `TransitGatewayAttachment`, setting the traffic type is not possible.
     *
     * @see https://docs.aws.amazon.com/vpc/latest/tgw/working-with-flow-logs.html
     *
     * @default ALL
     */
    readonly trafficType?: FlowLogTrafficType;
    /**
     * Specifies the type of destination to which the flow log data is to be published.
     * Flow log data can be published to CloudWatch Logs or Amazon S3
     *
     * @default FlowLogDestinationType.toCloudWatchLogs()
     */
    readonly destination?: FlowLogDestination;
    /**
     * The fields to include in the flow log record, in the order in which they should appear.
     *
     * If multiple fields are specified, they will be separated by spaces. For full control over the literal log format
     * string, pass a single field constructed with `LogFormat.custom()`.
     *
     * See https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records
     *
     * @default - default log format is used.
     */
    readonly logFormat?: LogFormat[];
    /**
     * The maximum interval of time during which a flow of packets is captured
     * and aggregated into a flow log record.
     *
     * When creating flow logs for a Transit Gateway or Transit Gateway Attachment,
     * this property must be ONE_MINUTES.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-maxaggregationinterval
     *
     * @default - FlowLogMaxAggregationInterval.ONE_MINUTES if creating flow logs for Transit Gateway, otherwise FlowLogMaxAggregationInterval.TEN_MINUTES.
     */
    readonly maxAggregationInterval?: FlowLogMaxAggregationInterval;
}
/**
 * Properties of a VPC Flow Log
 */
export interface FlowLogProps extends FlowLogOptions {
    /**
     * The name of the FlowLog
     *
     * Since the FlowLog resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag.
     *
     * @default CDK generated name
     */
    readonly flowLogName?: string;
    /**
     * The type of resource for which to create the flow log
     */
    readonly resourceType: FlowLogResourceType;
}
/**
 * The base class for a Flow Log
 */
declare abstract class FlowLogBase extends AwsConstructBase implements IFlowLog {
    /**
     * The Id of the VPC Flow Log
     *
     * @attribute
     */
    abstract readonly flowLogId: string;
    get flowLogOutputs(): FlowLogOutputs;
    get outputs(): Record<string, any>;
}
/**
 * A VPC flow log.
 * @resource AWS::EC2::FlowLog
 */
export declare class FlowLog extends FlowLogBase {
    /**
     * Import a Flow Log by it's Id
     */
    static fromFlowLogId(scope: Construct, id: string, flowLogId: string): IFlowLog;
    /**
     * The Id of the VPC Flow Log
     *
     * @attribute
     */
    readonly flowLogId: string;
    /**
     * The S3 bucket to publish flow logs to
     */
    readonly bucket?: storage.IBucket;
    /**
     * S3 bucket key prefix to publish the flow logs under
     */
    readonly keyPrefix?: string;
    /**
     * The iam role used to publish logs to CloudWatch
     */
    readonly iamRole?: iam.IRole;
    /**
     * The CloudWatch Logs LogGroup to publish flow logs to
     */
    readonly logGroup?: logs.ILogGroup;
    /**
     * The ARN of the Kinesis Data Firehose delivery stream to publish flow logs to
     */
    readonly deliveryStreamArn?: string;
    readonly resource: flowLog.FlowLog;
    constructor(scope: Construct, id: string, props: FlowLogProps);
}
export {};
