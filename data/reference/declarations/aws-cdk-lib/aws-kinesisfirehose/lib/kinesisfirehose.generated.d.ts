import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::KinesisFirehose::DeliveryStream` resource specifies an Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivery stream that delivers real-time streaming data to an Amazon Simple Storage Service (Amazon S3), Amazon Redshift, or Amazon Elasticsearch Service (Amazon ES) destination.
 *
 * For more information, see [Creating an Amazon Kinesis Data Firehose Delivery Stream](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html) in the *Amazon Kinesis Data Firehose Developer Guide* .
 *
 * @cloudformationResource AWS::KinesisFirehose::DeliveryStream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html
 */
export declare class CfnDeliveryStream extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeliveryStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeliveryStream;
    /**
     * The Amazon Resource Name (ARN) of the delivery stream, such as `arn:aws:firehose:us-east-2:123456789012:deliverystream/delivery-stream-name` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
     */
    amazonOpenSearchServerlessDestinationConfiguration?: CfnDeliveryStream.AmazonOpenSearchServerlessDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * The destination in Amazon OpenSearch Service.
     */
    amazonopensearchserviceDestinationConfiguration?: CfnDeliveryStream.AmazonopensearchserviceDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * The top level object for configuring streams with database as a source.
     */
    databaseSourceConfiguration?: CfnDeliveryStream.DatabaseSourceConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
     */
    deliveryStreamEncryptionConfigurationInput?: CfnDeliveryStream.DeliveryStreamEncryptionConfigurationInputProperty | cdk.IResolvable;
    /**
     * The name of the Firehose stream.
     */
    deliveryStreamName?: string;
    /**
     * The Firehose stream type. This can be one of the following values:.
     */
    deliveryStreamType?: string;
    /**
     * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
     */
    directPutSourceConfiguration?: CfnDeliveryStream.DirectPutSourceConfigurationProperty | cdk.IResolvable;
    /**
     * An Amazon ES destination for the delivery stream.
     */
    elasticsearchDestinationConfiguration?: CfnDeliveryStream.ElasticsearchDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * An Amazon S3 destination for the delivery stream.
     */
    extendedS3DestinationConfiguration?: CfnDeliveryStream.ExtendedS3DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination.
     */
    httpEndpointDestinationConfiguration?: CfnDeliveryStream.HttpEndpointDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the destination configure settings for Apache Iceberg Table.
     */
    icebergDestinationConfiguration?: CfnDeliveryStream.IcebergDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * When a Kinesis stream is used as the source for the delivery stream, a [KinesisStreamSourceConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html) containing the Kinesis stream ARN and the role ARN for the source stream.
     */
    kinesisStreamSourceConfiguration?: cdk.IResolvable | CfnDeliveryStream.KinesisStreamSourceConfigurationProperty;
    /**
     * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
     */
    mskSourceConfiguration?: cdk.IResolvable | CfnDeliveryStream.MSKSourceConfigurationProperty;
    /**
     * An Amazon Redshift destination for the delivery stream.
     */
    redshiftDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.RedshiftDestinationConfigurationProperty;
    /**
     * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
     */
    s3DestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
    /**
     * Configure Snowflake destination.
     */
    snowflakeDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.SnowflakeDestinationConfigurationProperty;
    /**
     * The configuration of a destination in Splunk for the delivery stream.
     */
    splunkDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.SplunkDestinationConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A set of tags to assign to the Firehose stream.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDeliveryStreamProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeliveryStream {
    /**
     * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html
     */
    interface DeliveryStreamEncryptionConfigurationInputProperty {
        /**
         * If you set `KeyType` to `CUSTOMER_MANAGED_CMK` , you must specify the Amazon Resource Name (ARN) of the CMK.
         *
         * If you set `KeyType` to `AWS _OWNED_CMK` , Firehose uses a service-account CMK.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput-keyarn
         */
        readonly keyArn?: string;
        /**
         * Indicates the type of customer master key (CMK) to use for encryption.
         *
         * The default setting is `AWS_OWNED_CMK` . For more information about CMKs, see [Customer Master Keys (CMKs)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys) .
         *
         * You can use a CMK of type CUSTOMER_MANAGED_CMK to encrypt up to 500 delivery streams.
         *
         * > To encrypt your delivery stream, use symmetric CMKs. Kinesis Data Firehose doesn't support asymmetric CMKs. For information about symmetric and asymmetric CMKs, see [About Symmetric and Asymmetric CMKs](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html) in the AWS Key Management Service developer guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput-keytype
         */
        readonly keyType: string;
    }
    /**
     * Describes the configuration of the HTTP endpoint destination.
     *
     * Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html
     */
    interface HttpEndpointDestinationConfigurationProperty {
        /**
         * The buffering options that can be used before data is delivered to the specified destination.
         *
         * Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The SizeInMBs and IntervalInSeconds parameters are optional. However, if you specify a value for one of them, you must also provide a value for the other.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.BufferingHintsProperty | cdk.IResolvable;
        /**
         * Describes the Amazon CloudWatch logging options for your delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The configuration of the HTTP endpoint selected as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-endpointconfiguration
         */
        readonly endpointConfiguration: CfnDeliveryStream.HttpEndpointConfigurationProperty | cdk.IResolvable;
        /**
         * Describes the data processing configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The configuration of the request sent to the HTTP endpoint specified as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-requestconfiguration
         */
        readonly requestConfiguration?: CfnDeliveryStream.HttpEndpointRequestConfigurationProperty | cdk.IResolvable;
        /**
         * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.RetryOptionsProperty;
        /**
         * Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-rolearn
         */
        readonly roleArn?: string;
        /**
         * Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers to the HTTP endpoint destination.
         *
         * You can back up all documents (AllData) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (FailedDataOnly).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * Describes the configuration of a destination in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The configuration that defines how you access secrets for HTTP Endpoint destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-secretsmanagerconfiguration
         */
        readonly secretsManagerConfiguration?: cdk.IResolvable | CfnDeliveryStream.SecretsManagerConfigurationProperty;
    }
    /**
     * The configuration of the HTTP endpoint request.
     *
     * Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html
     */
    interface HttpEndpointRequestConfigurationProperty {
        /**
         * Describes the metadata sent to the HTTP endpoint destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-commonattributes
         */
        readonly commonAttributes?: Array<CfnDeliveryStream.HttpEndpointCommonAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination.
         *
         * For more information, see Content-Encoding in MDN Web Docs, the official Mozilla documentation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-contentencoding
         */
        readonly contentEncoding?: string;
    }
    /**
     * Describes the metadata that's delivered to the specified HTTP endpoint destination.
     *
     * Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html
     */
    interface HttpEndpointCommonAttributeProperty {
        /**
         * The name of the HTTP endpoint common attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html#cfn-kinesisfirehose-deliverystream-httpendpointcommonattribute-attributename
         */
        readonly attributeName: string;
        /**
         * The value of the HTTP endpoint common attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html#cfn-kinesisfirehose-deliverystream-httpendpointcommonattribute-attributevalue
         */
        readonly attributeValue: string;
    }
    /**
     * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html
     */
    interface S3DestinationConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon S3 bucket to send data to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bucketarn
         */
        readonly bucketArn: string;
        /**
         * Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.BufferingHintsProperty | cdk.IResolvable;
        /**
         * The CloudWatch logging options for your Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The type of compression that Kinesis Data Firehose uses to compress the data that it delivers to the Amazon S3 bucket.
         *
         * For valid values, see the `CompressionFormat` content for the [S3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_S3DestinationConfiguration.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-compressionformat
         */
        readonly compressionFormat?: string;
        /**
         * Configures Amazon Simple Storage Service (Amazon S3) server-side encryption.
         *
         * Kinesis Data Firehose uses AWS Key Management Service ( AWS KMS) to encrypt the data that it delivers to your Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-encryptionconfiguration
         */
        readonly encryptionConfiguration?: CfnDeliveryStream.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3.
         *
         * This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-erroroutputprefix
         */
        readonly errorOutputPrefix?: string;
        /**
         * A prefix that Kinesis Data Firehose adds to the files that it delivers to the Amazon S3 bucket.
         *
         * The prefix helps you identify the files that Kinesis Data Firehose delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * The ARN of an AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption).
         *
         * For more information, see [Grant Kinesis Data Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) in the *Amazon Kinesis Data Firehose Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The `BufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data before delivering it to the destination.
     *
     * The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html
     */
    interface BufferingHintsProperty {
        /**
         * The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination.
         *
         * For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html#cfn-kinesisfirehose-deliverystream-bufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination.
         *
         * For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-bufferinghints.html#cfn-kinesisfirehose-deliverystream-bufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * The `EncryptionConfiguration` property type specifies the encryption settings that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses when delivering data to Amazon Simple Storage Service (Amazon S3).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The AWS Key Management Service ( AWS KMS) encryption key that Amazon S3 uses to encrypt your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html#cfn-kinesisfirehose-deliverystream-encryptionconfiguration-kmsencryptionconfig
         */
        readonly kmsEncryptionConfig?: cdk.IResolvable | CfnDeliveryStream.KMSEncryptionConfigProperty;
        /**
         * Disables encryption.
         *
         * For valid values, see the `NoEncryptionConfig` content for the [EncryptionConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_EncryptionConfiguration.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html#cfn-kinesisfirehose-deliverystream-encryptionconfiguration-noencryptionconfig
         */
        readonly noEncryptionConfig?: string;
    }
    /**
     * The `KMSEncryptionConfig` property type specifies the AWS Key Management Service ( AWS KMS) encryption key that Amazon Simple Storage Service (Amazon S3) uses to encrypt data delivered by the Amazon Kinesis Data Firehose (Kinesis Data Firehose) stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html
     */
    interface KMSEncryptionConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Kinesis Data Firehose stream.
         *
         * The key must belong to the same region as the destination S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html#cfn-kinesisfirehose-deliverystream-kmsencryptionconfig-awskmskeyarn
         */
        readonly awskmsKeyArn: string;
    }
    /**
     * The `CloudWatchLoggingOptions` property type specifies Amazon CloudWatch Logs (CloudWatch Logs) logging options that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses for the delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html
     */
    interface CloudWatchLoggingOptionsProperty {
        /**
         * Indicates whether CloudWatch Logs logging is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The name of the CloudWatch Logs log group that contains the log stream that Kinesis Data Firehose will use.
         *
         * Conditional. If you enable logging, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-loggroupname
         */
        readonly logGroupName?: string;
        /**
         * The name of the CloudWatch Logs log stream that Kinesis Data Firehose uses to send logs about data delivery.
         *
         * Conditional. If you enable logging, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-logstreamname
         */
        readonly logStreamName?: string;
    }
    /**
     * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
     *
     * Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-retryoptions.html
     */
    interface RetryOptionsProperty {
        /**
         * The total amount of time that Kinesis Data Firehose spends on retries.
         *
         * This duration starts after the initial attempt to send data to the custom destination via HTTPS endpoint fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from the specified destination after each attempt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-retryoptions.html#cfn-kinesisfirehose-deliverystream-retryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data.
     *
     * Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html
     */
    interface HttpEndpointConfigurationProperty {
        /**
         * The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-accesskey
         */
        readonly accessKey?: string;
        /**
         * The name of the HTTP endpoint selected as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-name
         */
        readonly name?: string;
        /**
         * The URL of the HTTP endpoint selected as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-url
         */
        readonly url: string;
    }
    /**
     * The `ProcessingConfiguration` property configures data processing for an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html
     */
    interface ProcessingConfigurationProperty {
        /**
         * Indicates whether data processing is enabled (true) or disabled (false).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html#cfn-kinesisfirehose-deliverystream-processingconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The data processors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html#cfn-kinesisfirehose-deliverystream-processingconfiguration-processors
         */
        readonly processors?: Array<cdk.IResolvable | CfnDeliveryStream.ProcessorProperty> | cdk.IResolvable;
    }
    /**
     * The `Processor` property specifies a data processor for an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html
     */
    interface ProcessorProperty {
        /**
         * The processor parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html#cfn-kinesisfirehose-deliverystream-processor-parameters
         */
        readonly parameters?: Array<cdk.IResolvable | CfnDeliveryStream.ProcessorParameterProperty> | cdk.IResolvable;
        /**
         * The type of processor.
         *
         * Valid values: `Lambda` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processor.html#cfn-kinesisfirehose-deliverystream-processor-type
         */
        readonly type: string;
    }
    /**
     * The `ProcessorParameter` property specifies a processor parameter in a data processor for an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html
     */
    interface ProcessorParameterProperty {
        /**
         * The name of the parameter.
         *
         * Currently the following default values are supported: 3 for `NumberOfRetries` and 60 for the `BufferIntervalInSeconds` . The `BufferSizeInMBs` ranges between 0.2 MB and up to 3MB. The default buffering hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is 256 KB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html#cfn-kinesisfirehose-deliverystream-processorparameter-parametername
         */
        readonly parameterName: string;
        /**
         * The parameter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-processorparameter.html#cfn-kinesisfirehose-deliverystream-processorparameter-parametervalue
         */
        readonly parameterValue: string;
    }
    /**
     * The structure that defines how Firehose accesses the secret.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html
     */
    interface SecretsManagerConfigurationProperty {
        /**
         * Specifies whether you want to use the secrets manager feature.
         *
         * When set as `True` the secrets manager configuration overwrites the existing secrets in the destination configuration. When it's set to `False` Firehose falls back to the credentials in the destination configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * Specifies the role that Firehose assumes when calling the Secrets Manager API operation.
         *
         * When you provide the role, it overrides any destination specific role defined in the destination configuration. If you do not provide the then we use the destination specific role. This parameter is required for Splunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-rolearn
         */
        readonly roleArn?: string;
        /**
         * The ARN of the secret that stores your credentials.
         *
         * It must be in the same region as the Firehose stream and the role. The secret ARN can reside in a different account than the Firehose stream and role as Firehose supports cross-account secret access. This parameter is required when *Enabled* is set to `True` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-secretarn
         */
        readonly secretArn?: string;
    }
    /**
     * The `KinesisStreamSourceConfiguration` property type specifies the stream and role Amazon Resource Names (ARNs) for a Kinesis stream used as the source for a delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html
     */
    interface KinesisStreamSourceConfigurationProperty {
        /**
         * The ARN of the source Kinesis data stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration-kinesisstreamarn
         */
        readonly kinesisStreamArn: string;
        /**
         * The ARN of the role that provides access to the source Kinesis data stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The `RedshiftDestinationConfiguration` property type specifies an Amazon Redshift cluster to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html
     */
    interface RedshiftDestinationConfigurationProperty {
        /**
         * The CloudWatch logging options for your Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The connection string that Kinesis Data Firehose uses to connect to the Amazon Redshift cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-clusterjdbcurl
         */
        readonly clusterJdbcurl: string;
        /**
         * Configures the Amazon Redshift `COPY` command that Kinesis Data Firehose uses to load data into the cluster from the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-copycommand
         */
        readonly copyCommand: CfnDeliveryStream.CopyCommandProperty | cdk.IResolvable;
        /**
         * The password for the Amazon Redshift user that you specified in the `Username` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-password
         */
        readonly password?: string;
        /**
         * The data processing configuration for the Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The retry behavior in case Firehose is unable to deliver documents to Amazon Redshift.
         *
         * Default value is 3600 (60 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.RedshiftRetryOptionsProperty;
        /**
         * The ARN of the AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption).
         *
         * For more information, see [Grant Kinesis Data Firehose Access to an Amazon Redshift Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-rs) in the *Amazon Kinesis Data Firehose Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The configuration for backup in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupconfiguration
         */
        readonly s3BackupConfiguration?: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The Amazon S3 backup mode.
         *
         * After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * The S3 bucket where Kinesis Data Firehose first delivers data.
         *
         * After the data is in the bucket, Kinesis Data Firehose uses the `COPY` command to load the data into the Amazon Redshift cluster. For the Amazon S3 bucket's compression format, don't specify `SNAPPY` or `ZIP` because the Amazon Redshift `COPY` command doesn't support them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The configuration that defines how you access secrets for Amazon Redshift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-secretsmanagerconfiguration
         */
        readonly secretsManagerConfiguration?: cdk.IResolvable | CfnDeliveryStream.SecretsManagerConfigurationProperty;
        /**
         * The Amazon Redshift user that has permission to access the Amazon Redshift cluster.
         *
         * This user must have `INSERT` privileges for copying data from the Amazon S3 bucket to the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-username
         */
        readonly username?: string;
    }
    /**
     * The `CopyCommand` property type configures the Amazon Redshift `COPY` command that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses to load data into an Amazon Redshift cluster from an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html
     */
    interface CopyCommandProperty {
        /**
         * Parameters to use with the Amazon Redshift `COPY` command.
         *
         * For examples, see the `CopyOptions` content for the [CopyCommand](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html#cfn-kinesisfirehose-deliverystream-copycommand-copyoptions
         */
        readonly copyOptions?: string;
        /**
         * A comma-separated list of column names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html#cfn-kinesisfirehose-deliverystream-copycommand-datatablecolumns
         */
        readonly dataTableColumns?: string;
        /**
         * The name of the target table.
         *
         * The table must already exist in the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-copycommand.html#cfn-kinesisfirehose-deliverystream-copycommand-datatablename
         */
        readonly dataTableName: string;
    }
    /**
     * Configures retry behavior in case Firehose is unable to deliver documents to Amazon Redshift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html
     */
    interface RedshiftRetryOptionsProperty {
        /**
         * The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt.
         *
         * The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of `DurationInSeconds` is 0 (zero) or if the first delivery attempt takes longer than the current value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html#cfn-kinesisfirehose-deliverystream-redshiftretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * Describes the configuration of a destination in Amazon OpenSearch Service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html
     */
    interface AmazonopensearchserviceDestinationConfigurationProperty {
        /**
         * The buffering options.
         *
         * If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.AmazonopensearchserviceBufferingHintsProperty | cdk.IResolvable;
        /**
         * Describes the Amazon CloudWatch logging options for your delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The endpoint to use when communicating with the cluster.
         *
         * Specify either this ClusterEndpoint or the DomainARN field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-clusterendpoint
         */
        readonly clusterEndpoint?: string;
        /**
         * Indicates the method for setting up document ID.
         *
         * The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-documentidoptions
         */
        readonly documentIdOptions?: CfnDeliveryStream.DocumentIdOptionsProperty | cdk.IResolvable;
        /**
         * The ARN of the Amazon OpenSearch Service domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-domainarn
         */
        readonly domainArn?: string;
        /**
         * The Amazon OpenSearch Service index name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-indexname
         */
        readonly indexName: string;
        /**
         * The Amazon OpenSearch Service index rotation period.
         *
         * Index rotation appends a timestamp to the IndexName to facilitate the expiration of old data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-indexrotationperiod
         */
        readonly indexRotationPeriod?: string;
        /**
         * Describes a data processing configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.
         *
         * The default value is 300 (5 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-retryoptions
         */
        readonly retryOptions?: CfnDeliveryStream.AmazonopensearchserviceRetryOptionsProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * Defines how documents should be delivered to Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * Describes the configuration of a destination in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The Amazon OpenSearch Service type name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-typename
         */
        readonly typeName?: string;
        /**
         * The details of the VPC of the Amazon OpenSearch Service destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: cdk.IResolvable | CfnDeliveryStream.VpcConfigurationProperty;
    }
    /**
     * Indicates the method for setting up document ID.
     *
     * The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-documentidoptions.html
     */
    interface DocumentIdOptionsProperty {
        /**
         * When the `FIREHOSE_DEFAULT` option is chosen, Firehose generates a unique document ID for each record based on a unique internal identifier.
         *
         * The generated document ID is stable across multiple delivery attempts, which helps prevent the same record from being indexed multiple times with different document IDs.
         *
         * When the `NO_DOCUMENT_ID` option is chosen, Firehose does not include any document IDs in the requests it sends to the Amazon OpenSearch Service. This causes the Amazon OpenSearch Service domain to generate document IDs. In case of multiple delivery attempts, this may cause the same record to be indexed more than once with different document IDs. This option enables write-heavy operations, such as the ingestion of logs and observability data, to consume less resources in the Amazon OpenSearch Service domain, resulting in improved performance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-documentidoptions.html#cfn-kinesisfirehose-deliverystream-documentidoptions-defaultdocumentidformat
         */
        readonly defaultDocumentIdFormat: string;
    }
    /**
     * Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html
     */
    interface AmazonopensearchserviceBufferingHintsProperty {
        /**
         * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination.
         *
         * The default value is 300 (5 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * Buffer incoming data to the specified size, in MBs, before delivering it to the destination.
         *
         * The default value is 5. We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html
     */
    interface AmazonopensearchserviceRetryOptionsProperty {
        /**
         * After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt).
         *
         * After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * The details of the VPC of the Amazon ES destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * The ARN of the IAM role that you want the delivery stream to use to create endpoints in the destination VPC.
         *
         * You can use your existing Kinesis Data Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Kinesis Data Firehose service principal and that it grants the following permissions:
         *
         * - `ec2:DescribeVpcs`
         * - `ec2:DescribeVpcAttribute`
         * - `ec2:DescribeSubnets`
         * - `ec2:DescribeSecurityGroups`
         * - `ec2:DescribeNetworkInterfaces`
         * - `ec2:CreateNetworkInterface`
         * - `ec2:CreateNetworkInterfacePermission`
         * - `ec2:DeleteNetworkInterface`
         *
         * If you revoke these permissions after you create the delivery stream, Kinesis Data Firehose can't scale out by creating more ENIs when necessary. You might therefore see a degradation in performance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The IDs of the security groups that you want Kinesis Data Firehose to use when it creates ENIs in the VPC of the Amazon ES destination.
         *
         * You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain's security group. Also ensure that the Amazon ES domain's security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the Amazon ES destination.
         *
         * Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.
         *
         * The number of ENIs that Kinesis Data Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Kinesis Data Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Kinesis Data Firehose can create up to three ENIs for this delivery stream for each of the subnets specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html
     */
    interface MSKSourceConfigurationProperty {
        /**
         * The authentication configuration of the Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-authenticationconfiguration
         */
        readonly authenticationConfiguration: CfnDeliveryStream.AuthenticationConfigurationProperty | cdk.IResolvable;
        /**
         * The ARN of the Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-mskclusterarn
         */
        readonly mskClusterArn: string;
        /**
         * The start date and time in UTC for the offset position within your MSK topic from where Firehose begins to read.
         *
         * By default, this is set to timestamp when Firehose becomes Active.
         *
         * If you want to create a Firehose stream with Earliest start position from SDK or CLI, you need to set the `ReadFromTimestamp` parameter to Epoch (1970-01-01T00:00:00Z).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-readfromtimestamp
         */
        readonly readFromTimestamp?: string;
        /**
         * The topic name within the Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-topicname
         */
        readonly topicName: string;
    }
    /**
     * The authentication configuration of the Amazon MSK cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html
     */
    interface AuthenticationConfigurationProperty {
        /**
         * The type of connectivity used to access the Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html#cfn-kinesisfirehose-deliverystream-authenticationconfiguration-connectivity
         */
        readonly connectivity: string;
        /**
         * The ARN of the role used to access the Amazon MSK cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html#cfn-kinesisfirehose-deliverystream-authenticationconfiguration-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The `SplunkDestinationConfiguration` property type specifies the configuration of a destination in Splunk for a Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html
     */
    interface SplunkDestinationConfigurationProperty {
        /**
         * The buffering options.
         *
         * If no value is specified, the default values for Splunk are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: cdk.IResolvable | CfnDeliveryStream.SplunkBufferingHintsProperty;
        /**
         * The Amazon CloudWatch logging options for your Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The amount of time that Firehose waits to receive an acknowledgment from Splunk after it sends it data.
         *
         * At the end of the timeout period, Firehose either tries to send the data again or considers it an error, based on your retry settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecacknowledgmenttimeoutinseconds
         */
        readonly hecAcknowledgmentTimeoutInSeconds?: number;
        /**
         * The HTTP Event Collector (HEC) endpoint to which Firehose sends your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecendpoint
         */
        readonly hecEndpoint: string;
        /**
         * This type can be either `Raw` or `Event` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecendpointtype
         */
        readonly hecEndpointType: string;
        /**
         * This is a GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hectoken
         */
        readonly hecToken?: string;
        /**
         * The data processing configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The retry behavior in case Firehose is unable to deliver data to Splunk, or if it doesn't receive an acknowledgment of receipt from Splunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.SplunkRetryOptionsProperty;
        /**
         * Defines how documents should be delivered to Amazon S3.
         *
         * When set to `FailedEventsOnly` , Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllEvents` , Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is `FailedEventsOnly` .
         *
         * You can update this backup mode from `FailedEventsOnly` to `AllEvents` . You can't update it from `AllEvents` to `FailedEventsOnly` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * The configuration for the backup Amazon S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The configuration that defines how you access secrets for Splunk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-secretsmanagerconfiguration
         */
        readonly secretsManagerConfiguration?: cdk.IResolvable | CfnDeliveryStream.SecretsManagerConfigurationProperty;
    }
    /**
     * The `SplunkRetryOptions` property type specifies retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk or if it doesn't receive an acknowledgment from Splunk.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html
     */
    interface SplunkRetryOptionsProperty {
        /**
         * The total amount of time that Firehose spends on retries.
         *
         * This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Firehose waits for acknowledgment from Splunk after each attempt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html#cfn-kinesisfirehose-deliverystream-splunkretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * The buffering options.
     *
     * If no value is specified, the default values for Splunk are used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkbufferinghints.html
     */
    interface SplunkBufferingHintsProperty {
        /**
         * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination.
         *
         * The default value is 60 (1 minute).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkbufferinghints.html#cfn-kinesisfirehose-deliverystream-splunkbufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * Buffer incoming data to the specified size, in MBs, before delivering it to the destination.
         *
         * The default value is 5.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-splunkbufferinghints.html#cfn-kinesisfirehose-deliverystream-splunkbufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * The `ExtendedS3DestinationConfiguration` property type configures an Amazon S3 destination for an Amazon Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html
     */
    interface ExtendedS3DestinationConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon S3 bucket.
         *
         * For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The buffering option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.BufferingHintsProperty | cdk.IResolvable;
        /**
         * The Amazon CloudWatch logging options for your Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The compression format.
         *
         * If no value is specified, the default is `UNCOMPRESSED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-compressionformat
         */
        readonly compressionFormat?: string;
        /**
         * The time zone you prefer.
         *
         * UTC is the default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-customtimezone
         */
        readonly customTimeZone?: string;
        /**
         * The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-dataformatconversionconfiguration
         */
        readonly dataFormatConversionConfiguration?: CfnDeliveryStream.DataFormatConversionConfigurationProperty | cdk.IResolvable;
        /**
         * The configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-dynamicpartitioningconfiguration
         */
        readonly dynamicPartitioningConfiguration?: CfnDeliveryStream.DynamicPartitioningConfigurationProperty | cdk.IResolvable;
        /**
         * The encryption configuration for the Kinesis Data Firehose delivery stream.
         *
         * The default value is `NoEncryption` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-encryptionconfiguration
         */
        readonly encryptionConfiguration?: CfnDeliveryStream.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3.
         *
         * This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-erroroutputprefix
         */
        readonly errorOutputPrefix?: string;
        /**
         * Specify a file extension.
         *
         * It will override the default file extension
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-fileextension
         */
        readonly fileExtension?: string;
        /**
         * The `YYYY/MM/DD/HH` time format prefix is automatically used for delivered Amazon S3 files.
         *
         * For more information, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * The data processing configuration for the Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The Amazon Resource Name (ARN) of the AWS credentials.
         *
         * For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The configuration for backup in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-s3backupconfiguration
         */
        readonly s3BackupConfiguration?: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The Amazon S3 backup mode.
         *
         * After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
    }
    /**
     * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
     *
     * Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see [Kinesis Data Firehose Record Format Conversion](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html
     */
    interface DataFormatConversionConfigurationProperty {
        /**
         * Defaults to `true` .
         *
         * Set it to `false` if you want to disable format conversion while preserving the configuration details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the deserializer that you want Firehose to use to convert the format of your data from JSON.
         *
         * This parameter is required if `Enabled` is set to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-inputformatconfiguration
         */
        readonly inputFormatConfiguration?: CfnDeliveryStream.InputFormatConfigurationProperty | cdk.IResolvable;
        /**
         * Specifies the serializer that you want Firehose to use to convert the format of your data to the Parquet or ORC format.
         *
         * This parameter is required if `Enabled` is set to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-outputformatconfiguration
         */
        readonly outputFormatConfiguration?: cdk.IResolvable | CfnDeliveryStream.OutputFormatConfigurationProperty;
        /**
         * Specifies the AWS Glue Data Catalog table that contains the column information.
         *
         * This parameter is required if `Enabled` is set to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-schemaconfiguration
         */
        readonly schemaConfiguration?: cdk.IResolvable | CfnDeliveryStream.SchemaConfigurationProperty;
    }
    /**
     * Specifies the deserializer you want to use to convert the format of the input data.
     *
     * This parameter is required if `Enabled` is set to true.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html
     */
    interface InputFormatConfigurationProperty {
        /**
         * Specifies which deserializer to use.
         *
         * You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html#cfn-kinesisfirehose-deliverystream-inputformatconfiguration-deserializer
         */
        readonly deserializer?: CfnDeliveryStream.DeserializerProperty | cdk.IResolvable;
    }
    /**
     * The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON.
     *
     * Kinesis Data Firehose then serializes the data to its final format using the `Serializer` . Kinesis Data Firehose supports two types of deserializers: the [Apache Hive JSON SerDe](https://docs.aws.amazon.com/https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON) and the [OpenX JSON SerDe](https://docs.aws.amazon.com/https://github.com/rcongiu/Hive-JSON-Serde) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html
     */
    interface DeserializerProperty {
        /**
         * The native Hive / HCatalog JsonSerDe.
         *
         * Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html#cfn-kinesisfirehose-deliverystream-deserializer-hivejsonserde
         */
        readonly hiveJsonSerDe?: CfnDeliveryStream.HiveJsonSerDeProperty | cdk.IResolvable;
        /**
         * The OpenX SerDe.
         *
         * Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-deserializer.html#cfn-kinesisfirehose-deliverystream-deserializer-openxjsonserde
         */
        readonly openXJsonSerDe?: cdk.IResolvable | CfnDeliveryStream.OpenXJsonSerDeProperty;
    }
    /**
     * The native Hive / HCatalog JsonSerDe.
     *
     * Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html
     */
    interface HiveJsonSerDeProperty {
        /**
         * Indicates how you want Firehose to parse the date and timestamps that may be present in your input data JSON.
         *
         * To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://docs.aws.amazon.com/https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html) . You can also use the special value `millis` to parse timestamps in epoch milliseconds. If you don't specify a format, Firehose uses `java.sql.Timestamp::valueOf` by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html#cfn-kinesisfirehose-deliverystream-hivejsonserde-timestampformats
         */
        readonly timestampFormats?: Array<string>;
    }
    /**
     * The OpenX SerDe.
     *
     * Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html
     */
    interface OpenXJsonSerDeProperty {
        /**
         * When set to `true` , which is the default, Firehose converts JSON keys to lowercase before deserializing them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-caseinsensitive
         */
        readonly caseInsensitive?: boolean | cdk.IResolvable;
        /**
         * Maps column names to JSON keys that aren't identical to the column names.
         *
         * This is useful when the JSON contains keys that are Hive keywords. For example, `timestamp` is a Hive keyword. If you have a JSON key named `timestamp` , set this parameter to `{"ts": "timestamp"}` to map this key to a column named `ts` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-columntojsonkeymappings
         */
        readonly columnToJsonKeyMappings?: cdk.IResolvable | Record<string, string>;
        /**
         * When set to `true` , specifies that the names of the keys include dots and that you want Firehose to replace them with underscores.
         *
         * This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-convertdotsinjsonkeystounderscores
         */
        readonly convertDotsInJsonKeysToUnderscores?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the schema to which you want Firehose to configure your data before it writes it to Amazon S3.
     *
     * This parameter is required if `Enabled` is set to true.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html
     */
    interface SchemaConfigurationProperty {
        /**
         * The ID of the AWS Glue Data Catalog.
         *
         * If you don't supply this, the AWS account ID is used by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-catalogid
         */
        readonly catalogId?: string;
        /**
         * Specifies the name of the AWS Glue database that contains the schema for the output data.
         *
         * > If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `DatabaseName` property is required and its value must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-databasename
         */
        readonly databaseName?: string;
        /**
         * If you don't specify an AWS Region, the default is the current Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-region
         */
        readonly region?: string;
        /**
         * The role that Firehose can use to access AWS Glue.
         *
         * This role must be in the same account you use for Firehose. Cross-account roles aren't allowed.
         *
         * > If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `RoleARN` property is required and its value must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-rolearn
         */
        readonly roleArn?: string;
        /**
         * Specifies the AWS Glue table that contains the column information that constitutes your data schema.
         *
         * > If the `SchemaConfiguration` request parameter is used as part of invoking the `CreateDeliveryStream` API, then the `TableName` property is required and its value must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-tablename
         */
        readonly tableName?: string;
        /**
         * Specifies the table version for the output data schema.
         *
         * If you don't specify this version ID, or if you set it to `LATEST` , Firehose uses the most recent version. This means that any updates to the table are automatically picked up.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-versionid
         */
        readonly versionId?: string;
    }
    /**
     * Specifies the serializer that you want Firehose to use to convert the format of your data before it writes it to Amazon S3.
     *
     * This parameter is required if `Enabled` is set to true.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html
     */
    interface OutputFormatConfigurationProperty {
        /**
         * Specifies which serializer to use.
         *
         * You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html#cfn-kinesisfirehose-deliverystream-outputformatconfiguration-serializer
         */
        readonly serializer?: cdk.IResolvable | CfnDeliveryStream.SerializerProperty;
    }
    /**
     * The serializer that you want Firehose to use to convert data to the target format before writing it to Amazon S3.
     *
     * Firehose supports two types of serializers: the ORC SerDe and the Parquet SerDe.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html
     */
    interface SerializerProperty {
        /**
         * A serializer to use for converting data to the ORC format before storing it in Amazon S3.
         *
         * For more information, see [Apache ORC](https://docs.aws.amazon.com/https://orc.apache.org/docs/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html#cfn-kinesisfirehose-deliverystream-serializer-orcserde
         */
        readonly orcSerDe?: cdk.IResolvable | CfnDeliveryStream.OrcSerDeProperty;
        /**
         * A serializer to use for converting data to the Parquet format before storing it in Amazon S3.
         *
         * For more information, see [Apache Parquet](https://docs.aws.amazon.com/https://parquet.apache.org/docs/contribution-guidelines/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-serializer.html#cfn-kinesisfirehose-deliverystream-serializer-parquetserde
         */
        readonly parquetSerDe?: cdk.IResolvable | CfnDeliveryStream.ParquetSerDeProperty;
    }
    /**
     * A serializer to use for converting data to the ORC format before storing it in Amazon S3.
     *
     * For more information, see [Apache ORC](https://docs.aws.amazon.com/https://orc.apache.org/docs/) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html
     */
    interface OrcSerDeProperty {
        /**
         * The Hadoop Distributed File System (HDFS) block size.
         *
         * This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-blocksizebytes
         */
        readonly blockSizeBytes?: number;
        /**
         * The column names for which you want Firehose to create bloom filters.
         *
         * The default is `null` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-bloomfiltercolumns
         */
        readonly bloomFilterColumns?: Array<string>;
        /**
         * The Bloom filter false positive probability (FPP).
         *
         * The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-bloomfilterfalsepositiveprobability
         */
        readonly bloomFilterFalsePositiveProbability?: number;
        /**
         * The compression code to use over data blocks.
         *
         * The default is `SNAPPY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-compression
         */
        readonly compression?: string;
        /**
         * Represents the fraction of the total number of non-null rows.
         *
         * To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-dictionarykeythreshold
         */
        readonly dictionaryKeyThreshold?: number;
        /**
         * Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries.
         *
         * This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-enablepadding
         */
        readonly enablePadding?: boolean | cdk.IResolvable;
        /**
         * The version of the file to write.
         *
         * The possible values are `V0_11` and `V0_12` . The default is `V0_12` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-formatversion
         */
        readonly formatVersion?: string;
        /**
         * A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size.
         *
         * The default value is 0.05, which means 5 percent of stripe size.
         *
         * For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.
         *
         * Kinesis Data Firehose ignores this parameter when `EnablePadding` is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-paddingtolerance
         */
        readonly paddingTolerance?: number;
        /**
         * The number of rows between index entries.
         *
         * The default is 10,000 and the minimum is 1,000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-rowindexstride
         */
        readonly rowIndexStride?: number;
        /**
         * The number of bytes in each stripe.
         *
         * The default is 64 MiB and the minimum is 8 MiB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-orcserde.html#cfn-kinesisfirehose-deliverystream-orcserde-stripesizebytes
         */
        readonly stripeSizeBytes?: number;
    }
    /**
     * A serializer to use for converting data to the Parquet format before storing it in Amazon S3.
     *
     * For more information, see [Apache Parquet](https://docs.aws.amazon.com/https://parquet.apache.org/docs/) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html
     */
    interface ParquetSerDeProperty {
        /**
         * The Hadoop Distributed File System (HDFS) block size.
         *
         * This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-blocksizebytes
         */
        readonly blockSizeBytes?: number;
        /**
         * The compression code to use over data blocks.
         *
         * The possible values are `UNCOMPRESSED` , `SNAPPY` , and `GZIP` , with the default being `SNAPPY` . Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-compression
         */
        readonly compression?: string;
        /**
         * Indicates whether to enable dictionary compression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-enabledictionarycompression
         */
        readonly enableDictionaryCompression?: boolean | cdk.IResolvable;
        /**
         * The maximum amount of padding to apply.
         *
         * This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-maxpaddingbytes
         */
        readonly maxPaddingBytes?: number;
        /**
         * The Parquet page size.
         *
         * Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-pagesizebytes
         */
        readonly pageSizeBytes?: number;
        /**
         * Indicates the version of row format to output.
         *
         * The possible values are `V1` and `V2` . The default is `V1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-parquetserde.html#cfn-kinesisfirehose-deliverystream-parquetserde-writerversion
         */
        readonly writerVersion?: string;
    }
    /**
     * The `DynamicPartitioningConfiguration` property type specifies the configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html
     */
    interface DynamicPartitioningConfigurationProperty {
        /**
         * Specifies whether dynamic partitioning is enabled for this Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html#cfn-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html#cfn-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.RetryOptionsProperty;
    }
    /**
     * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html
     */
    interface AmazonOpenSearchServerlessDestinationConfigurationProperty {
        /**
         * The buffering options.
         *
         * If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.AmazonOpenSearchServerlessBufferingHintsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-collectionendpoint
         */
        readonly collectionEndpoint?: string;
        /**
         * The Serverless offering for Amazon OpenSearch Service index name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-indexname
         */
        readonly indexName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
         *
         * The default value is 300 (5 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: CfnDeliveryStream.AmazonOpenSearchServerlessRetryOptionsProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * Defines how documents should be delivered to Amazon S3.
         *
         * When it is set to FailedDocumentsOnly, Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: cdk.IResolvable | CfnDeliveryStream.VpcConfigurationProperty;
    }
    /**
     * Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html
     */
    interface AmazonOpenSearchServerlessBufferingHintsProperty {
        /**
         * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination.
         *
         * The default value is 300 (5 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * Buffer incoming data to the specified size, in MBs, before delivering it to the destination.
         *
         * The default value is 5.
         *
         * We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * Configures retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html
     */
    interface AmazonOpenSearchServerlessRetryOptionsProperty {
        /**
         * After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time during which Firehose retries delivery (including the first attempt).
         *
         * After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * The `ElasticsearchDestinationConfiguration` property type specifies an Amazon Elasticsearch Service (Amazon ES) domain that Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html
     */
    interface ElasticsearchDestinationConfigurationProperty {
        /**
         * Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon ES domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.ElasticsearchBufferingHintsProperty | cdk.IResolvable;
        /**
         * The Amazon CloudWatch Logs logging options for the delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The endpoint to use when communicating with the cluster.
         *
         * Specify either this `ClusterEndpoint` or the `DomainARN` field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-clusterendpoint
         */
        readonly clusterEndpoint?: string;
        /**
         * Indicates the method for setting up document ID.
         *
         * The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-documentidoptions
         */
        readonly documentIdOptions?: CfnDeliveryStream.DocumentIdOptionsProperty | cdk.IResolvable;
        /**
         * The ARN of the Amazon ES domain.
         *
         * The IAM role must have permissions for `DescribeElasticsearchDomain` , `DescribeElasticsearchDomains` , and `DescribeElasticsearchDomainConfig` after assuming the role specified in *RoleARN* .
         *
         * Specify either `ClusterEndpoint` or `DomainARN` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-domainarn
         */
        readonly domainArn?: string;
        /**
         * The name of the Elasticsearch index to which Kinesis Data Firehose adds data for indexing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-indexname
         */
        readonly indexName: string;
        /**
         * The frequency of Elasticsearch index rotation.
         *
         * If you enable index rotation, Kinesis Data Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see [Index Rotation for the Amazon ES Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation) in the *Amazon Kinesis Data Firehose Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-indexrotationperiod
         */
        readonly indexRotationPeriod?: string;
        /**
         * The data processing configuration for the Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The retry behavior when Kinesis Data Firehose is unable to deliver data to Amazon ES.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: CfnDeliveryStream.ElasticsearchRetryOptionsProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents.
         *
         * For more information, see [Controlling Access with Amazon Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The condition under which Kinesis Data Firehose delivers data to Amazon Simple Storage Service (Amazon S3).
         *
         * You can send Amazon S3 all documents (all data) or only the documents that Kinesis Data Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the `S3BackupMode` content for the [ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchDestinationConfiguration.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * The S3 bucket where Kinesis Data Firehose backs up incoming data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * The Elasticsearch type name that Amazon ES adds to documents when indexing data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-typename
         */
        readonly typeName?: string;
        /**
         * The details of the VPC of the Amazon ES destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-vpcconfiguration
         */
        readonly vpcConfiguration?: cdk.IResolvable | CfnDeliveryStream.VpcConfigurationProperty;
    }
    /**
     * The `ElasticsearchBufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data while delivering it to the destination.
     *
     * The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
     *
     * ElasticsearchBufferingHints is the property type for the `BufferingHints` property of the [Amazon Kinesis Data Firehose DeliveryStream ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html
     */
    interface ElasticsearchBufferingHintsProperty {
        /**
         * The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination.
         *
         * For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html#cfn-kinesisfirehose-deliverystream-elasticsearchbufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination.
         *
         * For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html#cfn-kinesisfirehose-deliverystream-elasticsearchbufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * The `ElasticsearchRetryOptions` property type configures the retry behavior for when Amazon Kinesis Data Firehose (Kinesis Data Firehose) can't deliver data to Amazon Elasticsearch Service (Amazon ES).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html
     */
    interface ElasticsearchRetryOptionsProperty {
        /**
         * After an initial failure to deliver to Amazon ES, the total amount of time during which Kinesis Data Firehose re-attempts delivery (including the first attempt).
         *
         * If Kinesis Data Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the `DurationInSeconds` content for the [ElasticsearchRetryOptions](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchRetryOptions.html) data type in the *Amazon Kinesis Data Firehose API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html#cfn-kinesisfirehose-deliverystream-elasticsearchretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * The top level object for configuring streams with database as a source.
     *
     * Amazon Data Firehose is in preview release and is subject to change.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html
     */
    interface DatabaseSourceConfigurationProperty {
        /**
         * The list of column patterns in source database endpoint for Firehose to read from.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-columns
         */
        readonly columns?: CfnDeliveryStream.DatabaseColumnsProperty | cdk.IResolvable;
        /**
         * The list of database patterns in source database endpoint for Firehose to read from.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databases
         */
        readonly databases: CfnDeliveryStream.DatabasesProperty | cdk.IResolvable;
        /**
         * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databasesourceauthenticationconfiguration
         */
        readonly databaseSourceAuthenticationConfiguration: CfnDeliveryStream.DatabaseSourceAuthenticationConfigurationProperty | cdk.IResolvable;
        /**
         * The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databasesourcevpcconfiguration
         */
        readonly databaseSourceVpcConfiguration: CfnDeliveryStream.DatabaseSourceVPCConfigurationProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-digest
         */
        readonly digest?: string;
        /**
         * The endpoint of the database server.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-endpoint
         */
        readonly endpoint: string;
        /**
         * The port of the database. This can be one of the following values.
         *
         * - 3306 for MySQL database type
         * - 5432 for PostgreSQL database type
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-port
         */
        readonly port: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-publiccertificate
         */
        readonly publicCertificate?: string;
        /**
         * The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-snapshotwatermarktable
         */
        readonly snapshotWatermarkTable: string;
        /**
         * The mode to enable or disable SSL when Firehose connects to the database endpoint.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-sslmode
         */
        readonly sslMode?: string;
        /**
         * The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-surrogatekeys
         */
        readonly surrogateKeys?: Array<string>;
        /**
         * The list of table patterns in source database endpoint for Firehose to read from.
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-tables
         */
        readonly tables: CfnDeliveryStream.DatabaseTablesProperty | cdk.IResolvable;
        /**
         * The type of database engine. This can be one of the following values.
         *
         * - MySQL
         * - PostgreSQL
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-type
         */
        readonly type: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databases.html
     */
    interface DatabasesProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databases.html#cfn-kinesisfirehose-deliverystream-databases-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databases.html#cfn-kinesisfirehose-deliverystream-databases-include
         */
        readonly include?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasetables.html
     */
    interface DatabaseTablesProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasetables.html#cfn-kinesisfirehose-deliverystream-databasetables-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasetables.html#cfn-kinesisfirehose-deliverystream-databasetables-include
         */
        readonly include?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasecolumns.html
     */
    interface DatabaseColumnsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasecolumns.html#cfn-kinesisfirehose-deliverystream-databasecolumns-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasecolumns.html#cfn-kinesisfirehose-deliverystream-databasecolumns-include
         */
        readonly include?: Array<string>;
    }
    /**
     * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
     *
     * Amazon Data Firehose is in preview release and is subject to change.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceauthenticationconfiguration.html
     */
    interface DatabaseSourceAuthenticationConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourceauthenticationconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourceauthenticationconfiguration-secretsmanagerconfiguration
         */
        readonly secretsManagerConfiguration: cdk.IResolvable | CfnDeliveryStream.SecretsManagerConfigurationProperty;
    }
    /**
     * The structure for details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
     *
     * Amazon Data Firehose is in preview release and is subject to change.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourcevpcconfiguration.html
     */
    interface DatabaseSourceVPCConfigurationProperty {
        /**
         * The VPC endpoint service name which Firehose uses to create a PrivateLink to the database.
         *
         * The endpoint service must have the Firehose service principle `firehose.amazonaws.com` as an allowed principal on the VPC endpoint service. The VPC endpoint service name is a string that looks like `com.amazonaws.vpce.<region>.<vpc-endpoint-service-id>` .
         *
         * Amazon Data Firehose is in preview release and is subject to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-databasesourcevpcconfiguration.html#cfn-kinesisfirehose-deliverystream-databasesourcevpcconfiguration-vpcendpointservicename
         */
        readonly vpcEndpointServiceName: string;
    }
    /**
     * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-directputsourceconfiguration.html
     */
    interface DirectPutSourceConfigurationProperty {
        /**
         * The value that you configure for this parameter is for information purpose only and does not affect Firehose delivery throughput limit.
         *
         * You can use the [Firehose Limits form](https://docs.aws.amazon.com/https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits) to request a throughput limit increase.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-directputsourceconfiguration.html#cfn-kinesisfirehose-deliverystream-directputsourceconfiguration-throughputhintinmbs
         */
        readonly throughputHintInMBs?: number;
    }
    /**
     * Configure Snowflake destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html
     */
    interface SnowflakeDestinationConfigurationProperty {
        /**
         * URL for accessing your Snowflake account.
         *
         * This URL must include your [account identifier](https://docs.aws.amazon.com/https://docs.snowflake.com/en/user-guide/admin-account-identifier) . Note that the protocol (https://) and port number are optional.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-accounturl
         */
        readonly accountUrl: string;
        /**
         * Describes the buffering to perform before delivering data to the Snowflake destination.
         *
         * If you do not specify any value, Firehose uses the default values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: cdk.IResolvable | CfnDeliveryStream.SnowflakeBufferingHintsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * The name of the record content column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-contentcolumnname
         */
        readonly contentColumnName?: string;
        /**
         * All data in Snowflake is maintained in databases.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-database
         */
        readonly database: string;
        /**
         * Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-dataloadingoption
         */
        readonly dataLoadingOption?: string;
        /**
         * Passphrase to decrypt the private key when the key is encrypted.
         *
         * For information, see [Using Key Pair Authentication & Key Rotation](https://docs.aws.amazon.com/https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-keypassphrase
         */
        readonly keyPassphrase?: string;
        /**
         * Specify a column name in the table, where the metadata information has to be loaded.
         *
         * When you enable this field, you will see the following column in the snowflake table, which differs based on the source type.
         *
         * For Direct PUT as source
         *
         * `{ "firehoseDeliveryStreamName" : "streamname", "IngestionTime" : "timestamp" }`
         *
         * For Kinesis Data Stream as source
         *
         * `"kinesisStreamName" : "streamname", "kinesisShardId" : "Id", "kinesisPartitionKey" : "key", "kinesisSequenceNumber" : "1234", "subsequenceNumber" : "2334", "IngestionTime" : "timestamp" }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-metadatacolumnname
         */
        readonly metaDataColumnName?: string;
        /**
         * The private key used to encrypt your Snowflake client.
         *
         * For information, see [Using Key Pair Authentication & Key Rotation](https://docs.aws.amazon.com/https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-privatekey
         */
        readonly privateKey?: string;
        /**
         * Specifies configuration for Snowflake.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * The time period where Firehose will retry sending data to the chosen HTTP endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.SnowflakeRetryOptionsProperty;
        /**
         * The Amazon Resource Name (ARN) of the Snowflake role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * Choose an S3 backup mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
        /**
         * Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-schema
         */
        readonly schema: string;
        /**
         * The configuration that defines how you access secrets for Snowflake.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-secretsmanagerconfiguration
         */
        readonly secretsManagerConfiguration?: cdk.IResolvable | CfnDeliveryStream.SecretsManagerConfigurationProperty;
        /**
         * Optionally configure a Snowflake role.
         *
         * Otherwise the default user role will be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-snowflakeroleconfiguration
         */
        readonly snowflakeRoleConfiguration?: cdk.IResolvable | CfnDeliveryStream.SnowflakeRoleConfigurationProperty;
        /**
         * The VPCE ID for Firehose to privately connect with Snowflake.
         *
         * The ID format is com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.aws.amazon.com/https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-snowflakevpcconfiguration
         */
        readonly snowflakeVpcConfiguration?: cdk.IResolvable | CfnDeliveryStream.SnowflakeVpcConfigurationProperty;
        /**
         * All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-table
         */
        readonly table: string;
        /**
         * User login name for the Snowflake account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-user
         */
        readonly user?: string;
    }
    /**
     * Optionally configure a Snowflake role.
     *
     * Otherwise the default user role will be used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeroleconfiguration.html
     */
    interface SnowflakeRoleConfigurationProperty {
        /**
         * Enable Snowflake role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeroleconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakeroleconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The Snowflake role you wish to configure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeroleconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakeroleconfiguration-snowflakerole
         */
        readonly snowflakeRole?: string;
    }
    /**
     * Configure a Snowflake VPC.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakevpcconfiguration.html
     */
    interface SnowflakeVpcConfigurationProperty {
        /**
         * The VPCE ID for Firehose to privately connect with Snowflake.
         *
         * The ID format is com.amazonaws.vpce.[region].vpce-svc-<[id]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.aws.amazon.com/https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakevpcconfiguration.html#cfn-kinesisfirehose-deliverystream-snowflakevpcconfiguration-privatelinkvpceid
         */
        readonly privateLinkVpceId: string;
    }
    /**
     * Specify how long Firehose retries sending data to the New Relic HTTP endpoint.
     *
     * After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket. Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint. Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired. If you don't want Firehose to retry sending data, set this value to 0.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeretryoptions.html
     */
    interface SnowflakeRetryOptionsProperty {
        /**
         * the time period where Firehose will retry sending data to the chosen HTTP endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakeretryoptions.html#cfn-kinesisfirehose-deliverystream-snowflakeretryoptions-durationinseconds
         */
        readonly durationInSeconds?: number;
    }
    /**
     * Describes the buffering to perform before delivering data to the Snowflake destination.
     *
     * If you do not specify any value, Firehose uses the default values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakebufferinghints.html
     */
    interface SnowflakeBufferingHintsProperty {
        /**
         * Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination.
         *
         * The default value is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakebufferinghints.html#cfn-kinesisfirehose-deliverystream-snowflakebufferinghints-intervalinseconds
         */
        readonly intervalInSeconds?: number;
        /**
         * Buffer incoming data to the specified size, in MBs, before delivering it to the destination.
         *
         * The default value is 128.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-snowflakebufferinghints.html#cfn-kinesisfirehose-deliverystream-snowflakebufferinghints-sizeinmbs
         */
        readonly sizeInMBs?: number;
    }
    /**
     * Specifies the destination configure settings for Apache Iceberg Table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html
     */
    interface IcebergDestinationConfigurationProperty {
        /**
         * Describes whether all incoming data for this delivery stream will be append only (inserts only and not for updates and deletes) for Iceberg delivery.
         *
         * This feature is only applicable for Apache Iceberg Tables.
         *
         * The default value is false. If you set this value to true, Firehose automatically increases the throughput limit of a stream based on the throttling levels of the stream. If you set this parameter to true for a stream with updates and deletes, you will see out of order delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-appendonly
         */
        readonly appendOnly?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-bufferinghints
         */
        readonly bufferingHints?: CfnDeliveryStream.BufferingHintsProperty | cdk.IResolvable;
        /**
         * Configuration describing where the destination Apache Iceberg Tables are persisted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-catalogconfiguration
         */
        readonly catalogConfiguration: CfnDeliveryStream.CatalogConfigurationProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-cloudwatchloggingoptions
         */
        readonly cloudWatchLoggingOptions?: CfnDeliveryStream.CloudWatchLoggingOptionsProperty | cdk.IResolvable;
        /**
         * Provides a list of `DestinationTableConfigurations` which Firehose uses to deliver data to Apache Iceberg Tables.
         *
         * Firehose will write data with insert if table specific configuration is not provided here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-destinationtableconfigurationlist
         */
        readonly destinationTableConfigurationList?: Array<CfnDeliveryStream.DestinationTableConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-processingconfiguration
         */
        readonly processingConfiguration?: cdk.IResolvable | CfnDeliveryStream.ProcessingConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-retryoptions
         */
        readonly retryOptions?: cdk.IResolvable | CfnDeliveryStream.RetryOptionsProperty;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * Describes how Firehose will backup records.
         *
         * Currently,S3 backup only supports `FailedDataOnly` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-s3backupmode
         */
        readonly s3BackupMode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
    }
    /**
     * Describes the configuration of a destination in Apache Iceberg Tables.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html
     */
    interface DestinationTableConfigurationProperty {
        /**
         * The name of the Apache Iceberg database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-destinationdatabasename
         */
        readonly destinationDatabaseName: string;
        /**
         * Specifies the name of the Apache Iceberg Table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-destinationtablename
         */
        readonly destinationTableName: string;
        /**
         * The table specific S3 error output prefix.
         *
         * All the errors that occurred while delivering to this table will be prefixed with this value in S3 destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-s3erroroutputprefix
         */
        readonly s3ErrorOutputPrefix?: string;
        /**
         * A list of unique keys for a given Apache Iceberg table.
         *
         * Firehose will use these for running Create, Update, or Delete operations on the given Iceberg table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-uniquekeys
         */
        readonly uniqueKeys?: Array<string>;
    }
    /**
     * Describes the containers where the destination Apache Iceberg Tables are persisted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-catalogconfiguration.html
     */
    interface CatalogConfigurationProperty {
        /**
         * Specifies the Glue catalog ARN identifier of the destination Apache Iceberg Tables.
         *
         * You must specify the ARN in the format `arn:aws:glue:region:account-id:catalog` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-catalogconfiguration.html#cfn-kinesisfirehose-deliverystream-catalogconfiguration-catalogarn
         */
        readonly catalogArn?: string;
    }
}
/**
 * Properties for defining a `CfnDeliveryStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html
 */
export interface CfnDeliveryStreamProps {
    /**
     * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration
     */
    readonly amazonOpenSearchServerlessDestinationConfiguration?: CfnDeliveryStream.AmazonOpenSearchServerlessDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * The destination in Amazon OpenSearch Service.
     *
     * You can specify only one destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration
     */
    readonly amazonopensearchserviceDestinationConfiguration?: CfnDeliveryStream.AmazonopensearchserviceDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * The top level object for configuring streams with database as a source.
     *
     * Amazon Data Firehose is in preview release and is subject to change.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration
     */
    readonly databaseSourceConfiguration?: CfnDeliveryStream.DatabaseSourceConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput
     */
    readonly deliveryStreamEncryptionConfigurationInput?: CfnDeliveryStream.DeliveryStreamEncryptionConfigurationInputProperty | cdk.IResolvable;
    /**
     * The name of the Firehose stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamname
     */
    readonly deliveryStreamName?: string;
    /**
     * The Firehose stream type. This can be one of the following values:.
     *
     * - `DirectPut` : Provider applications access the Firehose stream directly.
     * - `KinesisStreamAsSource` : The Firehose stream uses a Kinesis data stream as a source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamtype
     */
    readonly deliveryStreamType?: string;
    /**
     * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-directputsourceconfiguration
     */
    readonly directPutSourceConfiguration?: CfnDeliveryStream.DirectPutSourceConfigurationProperty | cdk.IResolvable;
    /**
     * An Amazon ES destination for the delivery stream.
     *
     * Conditional. You must specify only one destination configuration.
     *
     * If you change the delivery stream destination from an Amazon ES destination to an Amazon S3 or Amazon Redshift destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration
     */
    readonly elasticsearchDestinationConfiguration?: CfnDeliveryStream.ElasticsearchDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * An Amazon S3 destination for the delivery stream.
     *
     * Conditional. You must specify only one destination configuration.
     *
     * If you change the delivery stream destination from an Amazon Extended S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration
     */
    readonly extendedS3DestinationConfiguration?: CfnDeliveryStream.ExtendedS3DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination.
     *
     * You can specify only one destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration
     */
    readonly httpEndpointDestinationConfiguration?: CfnDeliveryStream.HttpEndpointDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Specifies the destination configure settings for Apache Iceberg Table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration
     */
    readonly icebergDestinationConfiguration?: CfnDeliveryStream.IcebergDestinationConfigurationProperty | cdk.IResolvable;
    /**
     * When a Kinesis stream is used as the source for the delivery stream, a [KinesisStreamSourceConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html) containing the Kinesis stream ARN and the role ARN for the source stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration
     */
    readonly kinesisStreamSourceConfiguration?: cdk.IResolvable | CfnDeliveryStream.KinesisStreamSourceConfigurationProperty;
    /**
     * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration
     */
    readonly mskSourceConfiguration?: cdk.IResolvable | CfnDeliveryStream.MSKSourceConfigurationProperty;
    /**
     * An Amazon Redshift destination for the delivery stream.
     *
     * Conditional. You must specify only one destination configuration.
     *
     * If you change the delivery stream destination from an Amazon Redshift destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration
     */
    readonly redshiftDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.RedshiftDestinationConfigurationProperty;
    /**
     * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
     *
     * Conditional. You must specify only one destination configuration.
     *
     * If you change the delivery stream destination from an Amazon S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration
     */
    readonly s3DestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.S3DestinationConfigurationProperty;
    /**
     * Configure Snowflake destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration
     */
    readonly snowflakeDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.SnowflakeDestinationConfigurationProperty;
    /**
     * The configuration of a destination in Splunk for the delivery stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration
     */
    readonly splunkDestinationConfiguration?: cdk.IResolvable | CfnDeliveryStream.SplunkDestinationConfigurationProperty;
    /**
     * A set of tags to assign to the Firehose stream.
     *
     * A tag is a key-value pair that you can define and assign to AWS resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the AWS Billing and Cost Management User Guide.
     *
     * You can specify up to 50 tags when creating a Firehose stream.
     *
     * If you specify tags in the `CreateDeliveryStream` action, Amazon Data Firehose performs an additional authorization on the `firehose:TagDeliveryStream` action to verify if users have permissions to create tags. If you do not provide this permission, requests to create new Firehose streams with IAM resource tags will fail with an `AccessDeniedException` such as following.
     *
     * *AccessDeniedException*
     *
     * User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy.
     *
     * For an example IAM policy, see [Tag example.](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html#API_CreateDeliveryStream_Examples)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
