import { kinesisStream } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { IAwsConstruct, AwsConstructBase, AwsConstructProps } from "../aws-construct";
import { Duration } from "../../duration";
import * as cloudwatch from "../cloudwatch";
import * as kms from "../encryption";
import * as iam from "../iam";
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface StreamOutputs {
    /**
     * The ARN of the stream.
     *
     * @attribute
     */
    readonly streamArn: string;
    /**
     * The name of the stream
     *
     * @attribute
     */
    readonly streamName: string;
}
/**
 * A Kinesis Stream
 */
export interface IStream extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly streamOutputs: StreamOutputs;
    /**
     * The ARN of the stream.
     *
     * @attribute
     */
    readonly streamArn: string;
    /**
     * The name of the stream
     *
     * @attribute
     */
    readonly streamName: string;
    /**
     * Optional KMS encryption key associated with this stream.
     */
    readonly encryptionKey?: kms.IKey;
    /**
     * Adds a statement to the IAM resource policy associated with this stream.
     *
     * If this stream was created in this stack (`new Stream`), a resource policy
     * will be automatically created upon the first call to `addToResourcePolicy`. If
     * the stream is imported (`Stream.import`), then this is a no-op.
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
    /**
     * Grant read permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to ues the key to decrypt the
     * contents of the stream will also be granted.
     */
    grantRead(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to ues the key to encrypt the
     * contents of the stream will also be granted.
     */
    grantWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grants read/write permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to use the key for
     * encrypt/decrypt will also be granted.
     */
    grantReadWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant the indicated permissions on this stream to the provided IAM principal.
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Return stream metric based from its metric name
     *
     * @param metricName name of the stream metric
     * @param props properties of the metric
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes retrieved from the Kinesis stream, measured over the specified time period. Minimum, Maximum,
     * and Average statistics represent the bytes in a single GetRecords operation for the stream in the specified time
     * period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The age of the last record in all GetRecords calls made against a Kinesis stream, measured over the specified time
     * period. Age is the difference between the current time and when the last record of the GetRecords call was written
     * to the stream. The Minimum and Maximum statistics can be used to track the progress of Kinesis consumer
     * applications. A value of zero indicates that the records being read are completely caught up with the stream.
     *
     * The metric defaults to maximum over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsIteratorAgeMilliseconds(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time taken per GetRecords operation, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records retrieved from the shard, measured over the specified time period. Minimum, Maximum, and
     * Average statistics represent the records in a single GetRecords operation for the stream in the specified time
     * period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful GetRecords operations per stream, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes successfully put to the Kinesis stream over the specified time period. This metric includes
     * bytes from PutRecord and PutRecords operations. Minimum, Maximum, and Average statistics represent the bytes in a
     * single put operation for the stream in the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricIncomingBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records successfully put to the Kinesis stream over the specified time period. This metric includes
     * record counts from PutRecord and PutRecords operations. Minimum, Maximum, and Average statistics represent the
     * records in a single put operation for the stream in the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricIncomingRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes put to the Kinesis stream using the PutRecord operation over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time taken per PutRecord operation, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful PutRecord operations per Kinesis stream, measured over the specified time period. Average
     * reflects the percentage of successful writes to a stream.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes put to the Kinesis stream using the PutRecords operation over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time taken per PutRecords operation, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     *  The number of PutRecords operations where at least one record succeeded, per Kinesis stream, measured over the
     *  specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of records sent in a PutRecords operation per Kinesis data stream, measured over the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsTotalRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful records in a PutRecords operation per Kinesis data stream, measured over the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsSuccessfulRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to internal failures in a PutRecords operation per Kinesis data stream,
     * measured over the specified time period. Occasional internal failures are to be expected and should be retried.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsFailedRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to throttling in a PutRecords operation per Kinesis data stream, measured over
     * the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsThrottledRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of GetRecords calls throttled for the stream over the specified time period. The most commonly used
     * statistic for this metric is Average.
     *
     * When the Minimum statistic has a value of 1, all records were throttled for the stream during the specified time
     * period.
     *
     * When the Maximum statistic has a value of 0 (zero), no records were throttled for the stream during the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties
     *
     * @param props properties of the metric
     *
     */
    metricReadProvisionedThroughputExceeded(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to throttling for the stream over the specified time period. This metric
     * includes throttling from PutRecord and PutRecords operations.
     *
     * When the Minimum statistic has a non-zero value, records were being throttled for the stream during the specified
     * time period.
     *
     * When the Maximum statistic has a value of 0 (zero), no records were being throttled for the stream during the
     * specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricWriteProvisionedThroughputExceeded(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * A reference to a stream. The easiest way to instantiate is to call
 * `stream.export()`. Then, the consumer can use `Stream.import(this, ref)` and
 * get a `Stream`.
 */
export interface StreamAttributes {
    /**
     * The ARN of the stream.
     */
    readonly streamArn: string;
    /**
     * The KMS key securing the contents of the stream if encryption is enabled.
     *
     * @default - No encryption
     */
    readonly encryptionKey?: kms.IKey;
}
/**
 * Represents a Kinesis Stream.
 */
declare abstract class StreamBase extends AwsConstructBase implements IStream {
    /**
     * The ARN of the stream.
     */
    abstract readonly streamArn: string;
    /**
     * The name of the stream
     */
    abstract readonly streamName: string;
    get streamOutputs(): StreamOutputs;
    get outputs(): Record<string, any>;
    /**
     * Optional KMS encryption key associated with this stream.
     */
    abstract readonly encryptionKey?: kms.IKey;
    /**
     * Indicates if a stream resource policy should automatically be created upon
     * the first call to `addToResourcePolicy`.
     *
     * Set by subclasses.
     */
    protected abstract readonly autoCreatePolicy: boolean;
    private resourcePolicy?;
    constructor(scope: Construct, id: string, props?: AwsConstructProps);
    /**
     * Adds a statement to the IAM resource policy associated with this stream.
     *
     * If this stream was created in this stack (`new Strem`), a resource policy
     * will be automatically created upon the first call to `addToResourcePolicy`. If
     * the stream is imported (`Stream.import`), then this is a no-op.
     */
    addToResourcePolicy(statement: iam.PolicyStatement): iam.AddToResourcePolicyResult;
    /**
     * Grant read permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to ues the key to decrypt the
     * contents of the stream will also be granted.
     */
    grantRead(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant write permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to ues the key to encrypt the
     * contents of the stream will also be granted.
     */
    grantWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grants read/write permissions for this stream and its contents to an IAM
     * principal (Role/Group/User).
     *
     * If an encryption key is used, permission to use the key for
     * encrypt/decrypt will also be granted.
     */
    grantReadWrite(grantee: iam.IGrantable): iam.Grant;
    /**
     * Grant the indicated permissions on this stream to the given IAM principal (Role/Group/User).
     */
    grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
    /**
     * Return stream metric based from its metric name
     *
     * @param metricName name of the stream metric
     * @param props properties of the metric
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes retrieved from the Kinesis stream, measured over the specified time period. Minimum, Maximum,
     * and Average statistics represent the bytes in a single GetRecords operation for the stream in the specified time
     * period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The age of the last record in all GetRecords calls made against a Kinesis stream, measured over the specified time
     * period. Age is the difference between the current time and when the last record of the GetRecords call was written
     * to the stream. The Minimum and Maximum statistics can be used to track the progress of Kinesis consumer
     * applications. A value of zero indicates that the records being read are completely caught up with the stream.
     *
     * The metric defaults to maximum over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsIteratorAgeMilliseconds(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful GetRecords operations per stream, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records retrieved from the shard, measured over the specified time period. Minimum, Maximum, and
     * Average statistics represent the records in a single GetRecords operation for the stream in the specified time
     * period.
     *
     * average
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful GetRecords operations per stream, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricGetRecordsLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes put to the Kinesis stream using the PutRecord operation over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time taken per PutRecord operation, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful PutRecord operations per Kinesis stream, measured over the specified time period. Average
     * reflects the percentage of successful writes to a stream.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes put to the Kinesis stream using the PutRecords operation over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time taken per PutRecords operation, measured over the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     *  The number of PutRecords operations where at least one record succeeded, per Kinesis stream, measured over the
     *  specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of records sent in a PutRecords operation per Kinesis data stream, measured over the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsTotalRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of successful records in a PutRecords operation per Kinesis data stream, measured over the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsSuccessfulRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to internal failures in a PutRecords operation per Kinesis data stream,
     * measured over the specified time period. Occasional internal failures are to be expected and should be retried.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsFailedRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to throttling in a PutRecords operation per Kinesis data stream, measured over
     * the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricPutRecordsThrottledRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of bytes successfully put to the Kinesis stream over the specified time period. This metric includes
     * bytes from PutRecord and PutRecords operations. Minimum, Maximum, and Average statistics represent the bytes in a
     * single put operation for the stream in the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricIncomingBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records successfully put to the Kinesis stream over the specified time period. This metric includes
     * record counts from PutRecord and PutRecords operations. Minimum, Maximum, and Average statistics represent the
     * records in a single put operation for the stream in the specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricIncomingRecords(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of GetRecords calls throttled for the stream over the specified time period. The most commonly used
     * statistic for this metric is Average.
     *
     * When the Minimum statistic has a value of 1, all records were throttled for the stream during the specified time
     * period.
     *
     * When the Maximum statistic has a value of 0 (zero), no records were throttled for the stream during the specified
     * time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties
     *
     * @param props properties of the metric
     *
     */
    metricReadProvisionedThroughputExceeded(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of records rejected due to throttling for the stream over the specified time period. This metric
     * includes throttling from PutRecord and PutRecords operations.
     *
     * When the Minimum statistic has a non-zero value, records were being throttled for the stream during the specified
     * time period.
     *
     * When the Maximum statistic has a value of 0 (zero), no records were being throttled for the stream during the
     * specified time period.
     *
     * The metric defaults to average over 5 minutes, it can be changed by passing `statistic` and `period` properties.
     *
     * @param props properties of the metric
     */
    metricWriteProvisionedThroughputExceeded(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    private metricFromCannedFunction;
}
/**
 * Properties for a Kinesis Stream
 */
export interface StreamProps extends AwsConstructProps {
    /**
     * Enforces a particular physical stream name.
     * @default <generated>
     */
    readonly streamName?: string;
    /**
     * The number of hours for the data records that are stored in shards to remain accessible.
     * @default Duration.hours(24)
     */
    readonly retentionPeriod?: Duration;
    /**
     * The number of shards for the stream.
     *
     * Can only be provided if streamMode is Provisioned.
     *
     * @default 1
     */
    readonly shardCount?: number;
    /**
     * The kind of server-side encryption to apply to this stream.
     *
     * If you choose KMS, you can specify a KMS key via `encryptionKey`. If
     * encryption key is not specified, a key will automatically be created.
     *
     * @default - StreamEncryption.KMS if encrypted Streams are supported in the region
     *   or StreamEncryption.UNENCRYPTED otherwise.
     *   StreamEncryption.KMS if an encryption key is supplied through the encryptionKey property
     */
    readonly encryption?: StreamEncryption;
    /**
     * External KMS key to use for stream encryption.
     *
     * The 'encryption' property must be set to "Kms".
     *
     * @default - Kinesis Data Streams master key ('/alias/aws/kinesis').
     *   If encryption is set to StreamEncryption.KMS and this property is undefined, a new KMS key
     *   will be created and associated with this stream.
     */
    readonly encryptionKey?: kms.IKey;
    /**
     * The capacity mode of this stream.
     *
     * @default StreamMode.PROVISIONED
     */
    readonly streamMode?: StreamMode;
}
/**
 * A Kinesis stream. Can be encrypted with a KMS key.
 *
 * @resource aws_kinesis_stream
 */
export declare class Stream extends StreamBase {
    /**
     * Import an existing Kinesis Stream provided an ARN
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name
     * @param streamArn Stream ARN (i.e. arn:aws:kinesis:<region>:<account-id>:stream/Foo)
     */
    static fromStreamArn(scope: Construct, id: string, streamArn: string): IStream;
    /**
     * Creates a Stream construct that represents an external stream.
     *
     * @param scope The parent creating construct (usually `this`).
     * @param id The construct's name.
     * @param attrs Stream import properties
     */
    static fromStreamAttributes(scope: Construct, id: string, attrs: StreamAttributes): IStream;
    readonly streamArn: string;
    readonly streamName: string;
    readonly encryptionKey?: kms.IKey;
    readonly resource: kinesisStream.KinesisStream;
    protected readonly autoCreatePolicy = true;
    constructor(scope: Construct, id: string, props?: StreamProps);
    /**
     * Set up key properties and return the Stream encryption property from the
     * user's configuration.
     */
    private parseEncryption;
}
/**
 * Enables or updates server-side encryption using an AWS KMS key for a specified stream.
 *
 * > When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to `UPDATING` . After the update is complete, Kinesis Data Streams sets the status of the stream back to `ACTIVE` . Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is `UPDATING` . Once the status of the stream is `ACTIVE` , encryption begins for records written to the stream.
 *
 * API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24-hour period.
 *
 * Note: It can take up to 5 seconds after the stream is in an `ACTIVE` status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from `PutRecord` or `PutRecords` .
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html
 */
export interface StreamEncryptionProperty {
    /**
     * The encryption type to use.
     *
     * The only valid value is `KMS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-encryptiontype
     */
    readonly encryptionType: string;
    /**
     * The GUID for the customer-managed AWS KMS key to use for encryption.
     *
     * This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis` .
     *
     * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
     * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
     * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
     * - Alias name example: `alias/MyAliasName`
     * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-keyid
     */
    readonly kmsKeyId: string;
}
/**
 * What kind of server-side encryption to apply to this stream
 */
export declare enum StreamEncryption {
    /**
     * Records in the stream are not encrypted.
     */
    UNENCRYPTED = "NONE",
    /**
     * Server-side encryption with a KMS key managed by the user.
     * If `encryptionKey` is specified, this key will be used, otherwise, one will be defined.
     */
    KMS = "KMS",
    /**
     * Server-side encryption with a master key managed by Amazon Kinesis
     */
    MANAGED = "MANAGED"
}
/**
 * Specifies the capacity mode to apply to this stream.
 */
export declare enum StreamMode {
    /**
     * Specify the provisioned capacity mode. The stream will have `shardCount` shards unless
     * modified and will be billed according to the provisioned capacity.
     */
    PROVISIONED = "PROVISIONED",
    /**
     * Specify the on-demand capacity mode. The stream will autoscale and be billed according to the
     * volume of data ingested and retrieved.
     */
    ON_DEMAND = "ON_DEMAND"
}
export {};
