import { Construct } from "constructs";
import { IAwsConstruct, AwsConstructBase, AwsConstructProps } from "..";
import { IEventSourceDlq } from "./function";
import { IFunction } from "./function-base";
import { Duration } from "../..";
export interface EventSourceMappingOptions extends AwsConstructProps {
    /**
     * The Amazon Resource Name (ARN) of the event source. Any record added to
     * this stream can invoke the Lambda function.
     *
     * @default - not set if using a self managed Kafka cluster, throws an error otherwise
     */
    readonly eventSourceArn?: string;
    /**
     * The largest number of records that AWS Lambda will retrieve from your event
     * source at the time of invoking your function. Your function receives an
     * event with all the retrieved records.
     *
     * Valid Range: Minimum value of 1. Maximum value of 10000.
     *
     * @default - Amazon Kinesis, Amazon DynamoDB, and Amazon MSK is 100 records.
     * The default for Amazon SQS is 10 messages. For standard SQS queues, the maximum is 10,000. For FIFO SQS queues, the maximum is 10.
     */
    readonly batchSize?: number;
    /**
     * If the function returns an error, split the batch in two and retry.
     *
     * @default false
     */
    readonly bisectBatchOnError?: boolean;
    /**
     * An Amazon SQS queue or Amazon SNS topic destination for discarded records.
     *
     * @default discarded records are ignored
     */
    readonly onFailure?: IEventSourceDlq;
    /**
     * Set to false to disable the event source upon creation.
     *
     * @default true
     */
    readonly enabled?: boolean;
    /**
     * The position in the DynamoDB, Kinesis or MSK stream where AWS Lambda should
     * start reading.
     *
     * @see https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType
     *
     * @default - no starting position
     */
    readonly startingPosition?: StartingPosition;
    /**
     * The time from which to start reading, in Unix time seconds.
     *
     * @default - no timestamp
     */
    readonly startingPositionTimestamp?: number;
    /**
     * Allow functions to return partially successful responses for a batch of records.
     *
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting
     *
     * @default false
     */
    readonly reportBatchItemFailures?: boolean;
    /**
     * The maximum amount of time to gather records before invoking the function.
     * Maximum of Duration.minutes(5)
     *
     * @default Duration.seconds(0)
     */
    readonly maxBatchingWindow?: Duration;
    /**
     * The maximum concurrency setting limits the number of concurrent instances of the function that an Amazon SQS event source can invoke.
     *
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency
     *
     * Valid Range: Minimum value of 2. Maximum value of 1000.
     *
     * @default - No specific limit.
     */
    readonly maxConcurrency?: number;
    /**
     * The maximum age of a record that Lambda sends to a function for processing.
     * Valid Range:
     * * Minimum value of 60 seconds
     * * Maximum value of 7 days
     *
     * @default - infinite or until the record expires.
     */
    readonly maxRecordAge?: Duration;
    /**
     * The maximum number of times to retry when the function returns an error.
     * Set to `undefined` if you want lambda to keep retrying infinitely or until
     * the record expires.
     *
     * Valid Range:
     * * Minimum value of 0
     * * Maximum value of 10000
     *
     * @default - infinite or until the record expires.
     */
    readonly retryAttempts?: number;
    /**
     * The number of batches to process from each shard concurrently.
     * Valid Range:
     * * Minimum value of 1
     * * Maximum value of 10
     *
     * @default 1
     */
    readonly parallelizationFactor?: number;
    /**
     * The name of the Kafka topic.
     *
     * @default - no topic
     */
    readonly kafkaTopic?: string;
    /**
     * The size of the tumbling windows to group records sent to DynamoDB or Kinesis
     *
     * @see https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-windows
     *
     * Valid Range: 0 - 15 minutes
     *
     * @default - None
     */
    readonly tumblingWindow?: Duration;
    /**
     * A list of host and port pairs that are the addresses of the Kafka brokers in a self managed "bootstrap" Kafka cluster
     * that a Kafka client connects to initially to bootstrap itself.
     * They are in the format `abc.example.com:9096`.
     *
     * @default - none
     */
    readonly kafkaBootstrapServers?: string[];
    /**
     * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. The value must have a lenght between 1 and 200 and full the pattern '[a-zA-Z0-9-\/*:_+=.@-]*'. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html
     *
     * @default - none
     */
    readonly kafkaConsumerGroupId?: string;
    /**
     * Specific settings like the authentication protocol or the VPC components to secure access to your event source.
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html
     *
     * @default - none
     */
    readonly sourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * Add filter criteria to Event Source.
     *
     * A set of up to 5 filter. If an event satisfies at least one, Lambda sends the event to the function or adds it to the next batch.
     * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html
     *
     * @default - none
     */
    readonly filters?: Array<{
        [key: string]: any;
    }>;
    /**
     * Check if support S3 onfailure destination(ODF). Currently only MSK and self managed kafka event support S3 ODF
     *
     * @default false
     */
    readonly supportS3OnFailureDestination?: boolean;
}
/**
 * Properties for declaring a new event source mapping.
 */
export interface EventSourceMappingProps extends EventSourceMappingOptions {
    /**
     * The target AWS Lambda function.
     */
    readonly target: IFunction;
}
/**
 * Outputs to expose via the grid.
 */
export interface EventSourceMappingOutputs {
    /**
     * The identifier for the EventSourceMapping.
     */
    readonly uuid: string;
}
/**
 * Represents an event source mapping for a lambda function.
 * @see https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html
 */
export interface IEventSourceMapping extends IAwsConstruct {
    /**
     * strongly typed outputs
     */
    readonly eventSourceMappingOutputs: EventSourceMappingOutputs;
    /**
     * The identifier for this EventSourceMapping
     * @attribute
     */
    readonly eventSourceMappingId: string;
    /**
     * The ARN of the event source mapping (i.e. arn:aws:lambda:region:account-id:event-source-mapping/event-source-mapping-id)
     */
    readonly eventSourceMappingArn: string;
}
/**
 * Defines a Lambda EventSourceMapping resource.
 *
 * Usually, you won't need to define the mapping yourself. This will usually be done by
 * event sources. For example, to add an SQS event source to a function:
 *
 * ```ts
 * import { notify, compute } from 'terraconstructs';
 *
 * declare const handler: compute.Function;
 * declare const queue: notify.Queue;
 *
 * handler.addEventSource(new compute.eventsources.SqsEventSource(queue));
 * ```
 *
 * The `SqsEventSource` class will automatically create the mapping, and will also
 * modify the Lambda's execution role so it can consume messages from the queue.
 */
export declare class EventSourceMapping extends AwsConstructBase implements IEventSourceMapping {
    /**
     * Import an event source into this stack from its event source id.
     */
    static fromEventSourceMappingId(scope: Construct, id: string, eventSourceMappingId: string): IEventSourceMapping;
    private static formatArn;
    readonly eventSourceMappingId: string;
    readonly eventSourceMappingArn: string;
    readonly eventSourceMappingOutputs: EventSourceMappingOutputs;
    get outputs(): Record<string, any>;
    constructor(scope: Construct, id: string, props: EventSourceMappingProps);
    private validateKafkaConsumerGroupIdOrThrow;
}
/**
 * The type of authentication protocol or the VPC components for your event source's SourceAccessConfiguration
 * @see https://docs.aws.amazon.com/lambda/latest/dg/API_SourceAccessConfiguration.html#SSS-Type-SourceAccessConfiguration-Type
 */
export declare enum SourceAccessConfigurationType {
    /**
     * (MQ) The Secrets Manager secret that stores your broker credentials.
     */
    BASIC_AUTH = "BASIC_AUTH",
    /**
     * The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your Self-Managed Apache Kafka cluster.
     */
    VPC_SUBNET = "VPC_SUBNET",
    /**
     * The VPC security group used to manage access to your Self-Managed Apache Kafka brokers.
     */
    VPC_SECURITY_GROUP = "VPC_SECURITY_GROUP",
    /**
     * The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your Self-Managed Apache Kafka brokers.
     */
    SASL_SCRAM_256_AUTH = "SASL_SCRAM_256_AUTH",
    /**
     * The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your Self-Managed Apache Kafka brokers.
     */
    SASL_SCRAM_512_AUTH = "SASL_SCRAM_512_AUTH",
    /**
     * The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM),
     * and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
     */
    CLIENT_CERTIFICATE_TLS_AUTH = "CLIENT_CERTIFICATE_TLS_AUTH",
    /**
     * The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
     */
    SERVER_ROOT_CA_CERTIFICATE = "SERVER_ROOT_CA_CERTIFICATE"
}
/**
 * Specific settings like the authentication protocol or the VPC components to secure access to your event source.
 */
export interface SourceAccessConfiguration {
    /**
     * The type of authentication protocol or the VPC components for your event source. For example: "SASL_SCRAM_512_AUTH".
     */
    readonly type: SourceAccessConfigurationType;
    /**
     * The value for your chosen configuration in type.
     * For example: "URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName".
     * The exact string depends on the type.
     * @see SourceAccessConfigurationType
     */
    readonly uri: string;
}
/**
 * The position in the DynamoDB, Kinesis or MSK stream where AWS Lambda should start
 * reading.
 */
export declare enum StartingPosition {
    /**
     * Start reading at the last untrimmed record in the shard in the system,
     * which is the oldest data record in the shard.
     */
    TRIM_HORIZON = "TRIM_HORIZON",
    /**
     * Start reading just after the most recent record in the shard, so that you
     * always read the most recent data in the shard
     */
    LATEST = "LATEST",
    /**
     * Start reading from a position defined by a time stamp.
     * Only supported for Amazon Kinesis streams, otherwise an error will occur.
     * If supplied, `startingPositionTimestamp` must also be set.
     */
    AT_TIMESTAMP = "AT_TIMESTAMP"
}
