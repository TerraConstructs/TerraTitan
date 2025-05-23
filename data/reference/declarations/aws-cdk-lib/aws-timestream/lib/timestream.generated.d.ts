import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new Timestream database.
 *
 * If the AWS KMS key is not specified, the database will be encrypted with a Timestream managed AWS KMS key located in your account. Refer to [AWS managed AWS KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) for more info. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html) . See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-db.html) for details.
 *
 * @cloudformationResource AWS::Timestream::Database
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html
 */
export declare class CfnDatabase extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDatabase from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDatabase;
    /**
     * The `arn` of the database.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the Timestream database.
     */
    databaseName?: string;
    /**
     * The identifier of the AWS KMS key used to encrypt the data stored in the database.
     */
    kmsKeyId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to add to the database.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDatabaseProps);
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
 * Properties for defining a `CfnDatabase`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html
 */
export interface CfnDatabaseProps {
    /**
     * The name of the Timestream database.
     *
     * *Length Constraints* : Minimum length of 3 bytes. Maximum length of 256 bytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html#cfn-timestream-database-databasename
     */
    readonly databaseName?: string;
    /**
     * The identifier of the AWS KMS key used to encrypt the data stored in the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html#cfn-timestream-database-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The tags to add to the database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-database.html#cfn-timestream-database-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Create a scheduled query that will be run on your behalf at the configured schedule.
 *
 * Timestream assumes the execution role provided as part of the `ScheduledQueryExecutionRoleArn` parameter to run the query. You can use the `NotificationConfiguration` parameter to configure notification for your scheduled query operations.
 *
 * @cloudformationResource AWS::Timestream::ScheduledQuery
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html
 */
export declare class CfnScheduledQuery extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScheduledQuery from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScheduledQuery;
    /**
     * The `ARN` of the scheduled query.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The scheduled query error reporting configuration.
     *
     * @cloudformationAttribute SQErrorReportConfiguration
     */
    readonly attrSqErrorReportConfiguration: string;
    /**
     * The KMS key used to encrypt the query resource, if a customer managed KMS key was provided.
     *
     * @cloudformationAttribute SQKmsKeyId
     */
    readonly attrSqKmsKeyId: string;
    /**
     * The scheduled query name.
     *
     * @cloudformationAttribute SQName
     */
    readonly attrSqName: string;
    /**
     * The scheduled query notification configuration.
     *
     * @cloudformationAttribute SQNotificationConfiguration
     */
    readonly attrSqNotificationConfiguration: string;
    /**
     * The scheduled query string..
     *
     * @cloudformationAttribute SQQueryString
     */
    readonly attrSqQueryString: string;
    /**
     * The scheduled query schedule configuration.
     *
     * @cloudformationAttribute SQScheduleConfiguration
     */
    readonly attrSqScheduleConfiguration: string;
    /**
     * The ARN of the IAM role that will be used by Timestream to run the query.
     *
     * @cloudformationAttribute SQScheduledQueryExecutionRoleArn
     */
    readonly attrSqScheduledQueryExecutionRoleArn: string;
    /**
     * The configuration for query output.
     *
     * @cloudformationAttribute SQTargetConfiguration
     */
    readonly attrSqTargetConfiguration: string;
    /**
     * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result.
     */
    clientToken?: string;
    /**
     * Configuration for error reporting.
     */
    errorReportConfiguration: CfnScheduledQuery.ErrorReportConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon KMS key used to encrypt the scheduled query resource, at-rest.
     */
    kmsKeyId?: string;
    /**
     * Notification configuration for the scheduled query.
     */
    notificationConfiguration: cdk.IResolvable | CfnScheduledQuery.NotificationConfigurationProperty;
    /**
     * The query string to run.
     */
    queryString: string;
    /**
     * Schedule configuration.
     */
    scheduleConfiguration: cdk.IResolvable | CfnScheduledQuery.ScheduleConfigurationProperty;
    /**
     * The ARN for the IAM role that Timestream will assume when running the scheduled query.
     */
    scheduledQueryExecutionRoleArn: string;
    /**
     * A name for the query.
     */
    scheduledQueryName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to label the scheduled query.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Scheduled query target store configuration.
     */
    targetConfiguration?: cdk.IResolvable | CfnScheduledQuery.TargetConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScheduledQueryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScheduledQuery {
    /**
     * Configuration required for error reporting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-errorreportconfiguration.html
     */
    interface ErrorReportConfigurationProperty {
        /**
         * The S3 configuration for the error reports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-errorreportconfiguration.html#cfn-timestream-scheduledquery-errorreportconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnScheduledQuery.S3ConfigurationProperty;
    }
    /**
     * Details on S3 location for error reports that result from running a query.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html
     */
    interface S3ConfigurationProperty {
        /**
         * Name of the S3 bucket under which error reports will be created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html#cfn-timestream-scheduledquery-s3configuration-bucketname
         */
        readonly bucketName: string;
        /**
         * Encryption at rest options for the error reports.
         *
         * If no encryption option is specified, Timestream will choose SSE_S3 as default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html#cfn-timestream-scheduledquery-s3configuration-encryptionoption
         */
        readonly encryptionOption?: string;
        /**
         * Prefix for the error report key.
         *
         * Timestream by default adds the following prefix to the error report path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-s3configuration.html#cfn-timestream-scheduledquery-s3configuration-objectkeyprefix
         */
        readonly objectKeyPrefix?: string;
    }
    /**
     * Configuration of the schedule of the query.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-scheduleconfiguration.html
     */
    interface ScheduleConfigurationProperty {
        /**
         * An expression that denotes when to trigger the scheduled query run.
         *
         * This can be a cron expression or a rate expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-scheduleconfiguration.html#cfn-timestream-scheduledquery-scheduleconfiguration-scheduleexpression
         */
        readonly scheduleExpression: string;
    }
    /**
     * Configuration used for writing the output of a query.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-targetconfiguration.html
     */
    interface TargetConfigurationProperty {
        /**
         * Configuration needed to write data into the Timestream database and table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-targetconfiguration.html#cfn-timestream-scheduledquery-targetconfiguration-timestreamconfiguration
         */
        readonly timestreamConfiguration: cdk.IResolvable | CfnScheduledQuery.TimestreamConfigurationProperty;
    }
    /**
     * Configuration to write data into Timestream database and table.
     *
     * This configuration allows the user to map the query result select columns into the destination table columns.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html
     */
    interface TimestreamConfigurationProperty {
        /**
         * Name of Timestream database to which the query result will be written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-databasename
         */
        readonly databaseName: string;
        /**
         * This is to allow mapping column(s) from the query result to the dimension in the destination table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-dimensionmappings
         */
        readonly dimensionMappings: Array<CfnScheduledQuery.DimensionMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Name of the measure column.
         *
         * Also see `MultiMeasureMappings` and `MixedMeasureMappings` for how measure name properties on those relate to `MeasureNameColumn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-measurenamecolumn
         */
        readonly measureNameColumn?: string;
        /**
         * Specifies how to map measures to multi-measure records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-mixedmeasuremappings
         */
        readonly mixedMeasureMappings?: Array<cdk.IResolvable | CfnScheduledQuery.MixedMeasureMappingProperty> | cdk.IResolvable;
        /**
         * Multi-measure mappings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-multimeasuremappings
         */
        readonly multiMeasureMappings?: cdk.IResolvable | CfnScheduledQuery.MultiMeasureMappingsProperty;
        /**
         * Name of Timestream table that the query result will be written to.
         *
         * The table should be within the same database that is provided in Timestream configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-tablename
         */
        readonly tableName: string;
        /**
         * Column from query result that should be used as the time column in destination table.
         *
         * Column type for this should be TIMESTAMP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-timestreamconfiguration.html#cfn-timestream-scheduledquery-timestreamconfiguration-timecolumn
         */
        readonly timeColumn: string;
    }
    /**
     * This type is used to map column(s) from the query result to a dimension in the destination table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html
     */
    interface DimensionMappingProperty {
        /**
         * Type for the dimension: VARCHAR.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html#cfn-timestream-scheduledquery-dimensionmapping-dimensionvaluetype
         */
        readonly dimensionValueType: string;
        /**
         * Column name from query result.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-dimensionmapping.html#cfn-timestream-scheduledquery-dimensionmapping-name
         */
        readonly name: string;
    }
    /**
     * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html
     */
    interface MixedMeasureMappingProperty {
        /**
         * Refers to the value of measure_name in a result row.
         *
         * This field is required if MeasureNameColumn is provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html#cfn-timestream-scheduledquery-mixedmeasuremapping-measurename
         */
        readonly measureName?: string;
        /**
         * Type of the value that is to be read from sourceColumn.
         *
         * If the mapping is for MULTI, use MeasureValueType.MULTI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html#cfn-timestream-scheduledquery-mixedmeasuremapping-measurevaluetype
         */
        readonly measureValueType: string;
        /**
         * Required when measureValueType is MULTI.
         *
         * Attribute mappings for MULTI value measures.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html#cfn-timestream-scheduledquery-mixedmeasuremapping-multimeasureattributemappings
         */
        readonly multiMeasureAttributeMappings?: Array<cdk.IResolvable | CfnScheduledQuery.MultiMeasureAttributeMappingProperty> | cdk.IResolvable;
        /**
         * This field refers to the source column from which measure-value is to be read for result materialization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html#cfn-timestream-scheduledquery-mixedmeasuremapping-sourcecolumn
         */
        readonly sourceColumn?: string;
        /**
         * Target measure name to be used.
         *
         * If not provided, the target measure name by default would be measure-name if provided, or sourceColumn otherwise.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-mixedmeasuremapping.html#cfn-timestream-scheduledquery-mixedmeasuremapping-targetmeasurename
         */
        readonly targetMeasureName?: string;
    }
    /**
     * Attribute mapping for MULTI value measures.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html
     */
    interface MultiMeasureAttributeMappingProperty {
        /**
         * Type of the attribute to be read from the source column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html#cfn-timestream-scheduledquery-multimeasureattributemapping-measurevaluetype
         */
        readonly measureValueType: string;
        /**
         * Source column from where the attribute value is to be read.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html#cfn-timestream-scheduledquery-multimeasureattributemapping-sourcecolumn
         */
        readonly sourceColumn: string;
        /**
         * Custom name to be used for attribute name in derived table.
         *
         * If not provided, source column name would be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasureattributemapping.html#cfn-timestream-scheduledquery-multimeasureattributemapping-targetmultimeasureattributename
         */
        readonly targetMultiMeasureAttributeName?: string;
    }
    /**
     * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided.
     *
     * MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html
     */
    interface MultiMeasureMappingsProperty {
        /**
         * Required.
         *
         * Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html#cfn-timestream-scheduledquery-multimeasuremappings-multimeasureattributemappings
         */
        readonly multiMeasureAttributeMappings: Array<cdk.IResolvable | CfnScheduledQuery.MultiMeasureAttributeMappingProperty> | cdk.IResolvable;
        /**
         * The name of the target multi-measure name in the derived table.
         *
         * This input is required when measureNameColumn is not provided. If MeasureNameColumn is provided, then value from that column will be used as multi-measure name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-multimeasuremappings.html#cfn-timestream-scheduledquery-multimeasuremappings-targetmultimeasurename
         */
        readonly targetMultiMeasureName?: string;
    }
    /**
     * Notification configuration for a scheduled query.
     *
     * A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-notificationconfiguration.html
     */
    interface NotificationConfigurationProperty {
        /**
         * Details on SNS configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-notificationconfiguration.html#cfn-timestream-scheduledquery-notificationconfiguration-snsconfiguration
         */
        readonly snsConfiguration: cdk.IResolvable | CfnScheduledQuery.SnsConfigurationProperty;
    }
    /**
     * Details on SNS that are required to send the notification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-snsconfiguration.html
     */
    interface SnsConfigurationProperty {
        /**
         * SNS topic ARN that the scheduled query status notifications will be sent to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-scheduledquery-snsconfiguration.html#cfn-timestream-scheduledquery-snsconfiguration-topicarn
         */
        readonly topicArn: string;
    }
}
/**
 * Properties for defining a `CfnScheduledQuery`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html
 */
export interface CfnScheduledQueryProps {
    /**
     * Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result.
     *
     * Making multiple identical CreateScheduledQuery requests has the same effect as making a single request.
     *
     * - If CreateScheduledQuery is called without a `ClientToken` , the Query SDK generates a `ClientToken` on your behalf.
     * - After 8 hours, any request with the same `ClientToken` is treated as a new request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-clienttoken
     */
    readonly clientToken?: string;
    /**
     * Configuration for error reporting.
     *
     * Error reports will be generated when a problem is encountered when writing the query results.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-errorreportconfiguration
     */
    readonly errorReportConfiguration: CfnScheduledQuery.ErrorReportConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon KMS key used to encrypt the scheduled query resource, at-rest.
     *
     * If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with *alias/*
     *
     * If ErrorReportConfiguration uses `SSE_KMS` as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Notification configuration for the scheduled query.
     *
     * A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-notificationconfiguration
     */
    readonly notificationConfiguration: cdk.IResolvable | CfnScheduledQuery.NotificationConfigurationProperty;
    /**
     * The query string to run.
     *
     * Parameter names can be specified in the query string `@` character followed by an identifier. The named Parameter `@scheduled_runtime` is reserved and can be used in the query to get the time at which the query is scheduled to run.
     *
     * The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of `@scheduled_runtime` paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the `@scheduled_runtime` parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-querystring
     */
    readonly queryString: string;
    /**
     * Schedule configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduleconfiguration
     */
    readonly scheduleConfiguration: cdk.IResolvable | CfnScheduledQuery.ScheduleConfigurationProperty;
    /**
     * The ARN for the IAM role that Timestream will assume when running the scheduled query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduledqueryexecutionrolearn
     */
    readonly scheduledQueryExecutionRoleArn: string;
    /**
     * A name for the query.
     *
     * Scheduled query names must be unique within each Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduledqueryname
     */
    readonly scheduledQueryName?: string;
    /**
     * A list of key-value pairs to label the scheduled query.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Scheduled query target store configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-targetconfiguration
     */
    readonly targetConfiguration?: cdk.IResolvable | CfnScheduledQuery.TargetConfigurationProperty;
}
/**
 * The CreateTable operation adds a new table to an existing database in your account.
 *
 * In an AWS account, table names must be at least unique within each Region if they are in the same database. You may have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html) . See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html) for details.
 *
 * @cloudformationResource AWS::Timestream::Table
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html
 */
export declare class CfnTable extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTable;
    /**
     * The `arn` of the table.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the table.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The name of the Timestream database that contains this table.
     */
    databaseName: string;
    /**
     * Contains properties to set on the table when enabling magnetic store writes.
     */
    magneticStoreWriteProperties?: any | cdk.IResolvable;
    /**
     * The retention duration for the memory store and magnetic store. This object has the following attributes:.
     */
    retentionProperties?: any | cdk.IResolvable;
    /**
     * The schema of the table.
     */
    schema?: cdk.IResolvable | CfnTable.SchemaProperty;
    /**
     * The name of the Timestream table.
     */
    tableName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to add to the table.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTable {
    /**
     * Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-retentionproperties.html
     */
    interface RetentionPropertiesProperty {
        /**
         * The duration for which data must be stored in the magnetic store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-retentionproperties.html#cfn-timestream-table-retentionproperties-magneticstoreretentionperiodindays
         */
        readonly magneticStoreRetentionPeriodInDays?: string;
        /**
         * The duration for which data must be stored in the memory store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-retentionproperties.html#cfn-timestream-table-retentionproperties-memorystoreretentionperiodinhours
         */
        readonly memoryStoreRetentionPeriodInHours?: string;
    }
    /**
     * A Schema specifies the expected data model of the table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-schema.html
     */
    interface SchemaProperty {
        /**
         * A non-empty list of partition keys defining the attributes used to partition the table data.
         *
         * The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-schema.html#cfn-timestream-table-schema-compositepartitionkey
         */
        readonly compositePartitionKey?: Array<cdk.IResolvable | CfnTable.PartitionKeyProperty> | cdk.IResolvable;
    }
    /**
     * An attribute used in partitioning data in a table.
     *
     * A dimension key partitions data using the values of the dimension specified by the dimension-name as partition key, while a measure key partitions data using measure names (values of the 'measure_name' column).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html
     */
    interface PartitionKeyProperty {
        /**
         * The level of enforcement for the specification of a dimension key in ingested records.
         *
         * Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html#cfn-timestream-table-partitionkey-enforcementinrecord
         */
        readonly enforcementInRecord?: string;
        /**
         * The name of the attribute used for a dimension key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html#cfn-timestream-table-partitionkey-name
         */
        readonly name?: string;
        /**
         * The type of the partition key.
         *
         * Options are DIMENSION (dimension key) and MEASURE (measure key).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-partitionkey.html#cfn-timestream-table-partitionkey-type
         */
        readonly type: string;
    }
    /**
     * The set of properties on a table for configuring magnetic store writes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorewriteproperties.html
     */
    interface MagneticStoreWritePropertiesProperty {
        /**
         * A flag to enable magnetic store writes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorewriteproperties.html#cfn-timestream-table-magneticstorewriteproperties-enablemagneticstorewrites
         */
        readonly enableMagneticStoreWrites: boolean | cdk.IResolvable;
        /**
         * The location to write error reports for records rejected asynchronously during magnetic store writes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorewriteproperties.html#cfn-timestream-table-magneticstorewriteproperties-magneticstorerejecteddatalocation
         */
        readonly magneticStoreRejectedDataLocation?: cdk.IResolvable | CfnTable.MagneticStoreRejectedDataLocationProperty;
    }
    /**
     * The location to write error reports for records rejected, asynchronously, during magnetic store writes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorerejecteddatalocation.html
     */
    interface MagneticStoreRejectedDataLocationProperty {
        /**
         * Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-magneticstorerejecteddatalocation.html#cfn-timestream-table-magneticstorerejecteddatalocation-s3configuration
         */
        readonly s3Configuration?: cdk.IResolvable | CfnTable.S3ConfigurationProperty;
    }
    /**
     * The configuration that specifies an S3 location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html
     */
    interface S3ConfigurationProperty {
        /**
         * The bucket name of the customer S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html#cfn-timestream-table-s3configuration-bucketname
         */
        readonly bucketName: string;
        /**
         * The encryption option for the customer S3 location.
         *
         * Options are S3 server-side encryption with an S3 managed key or AWS managed key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html#cfn-timestream-table-s3configuration-encryptionoption
         */
        readonly encryptionOption: string;
        /**
         * The AWS KMS key ID for the customer S3 location when encrypting with an AWS managed key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html#cfn-timestream-table-s3configuration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The object key preview for the customer S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-table-s3configuration.html#cfn-timestream-table-s3configuration-objectkeyprefix
         */
        readonly objectKeyPrefix?: string;
    }
}
/**
 * Properties for defining a `CfnTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html
 */
export interface CfnTableProps {
    /**
     * The name of the Timestream database that contains this table.
     *
     * *Length Constraints* : Minimum length of 3 bytes. Maximum length of 256 bytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-databasename
     */
    readonly databaseName: string;
    /**
     * Contains properties to set on the table when enabling magnetic store writes.
     *
     * This object has the following attributes:
     *
     * - *EnableMagneticStoreWrites* : A `boolean` flag to enable magnetic store writes.
     * - *MagneticStoreRejectedDataLocation* : The location to write error reports for records rejected, asynchronously, during magnetic store writes. Only `S3Configuration` objects are allowed. The `S3Configuration` object has the following attributes:
     *
     * - *BucketName* : The name of the S3 bucket.
     * - *EncryptionOption* : The encryption option for the S3 location. Valid values are S3 server-side encryption with an S3 managed key ( `SSE_S3` ) or AWS managed key ( `SSE_KMS` ).
     * - *KmsKeyId* : The AWS KMS key ID to use when encrypting with an AWS managed key.
     * - *ObjectKeyPrefix* : The prefix to use option for the objects stored in S3.
     *
     * Both `BucketName` and `EncryptionOption` are *required* when `S3Configuration` is specified. If you specify `SSE_KMS` as your `EncryptionOption` then `KmsKeyId` is *required* .
     *
     * `EnableMagneticStoreWrites` attribute is *required* when `MagneticStoreWriteProperties` is specified. `MagneticStoreRejectedDataLocation` attribute is *required* when `EnableMagneticStoreWrites` is set to `true` .
     *
     * See the following examples:
     *
     * *JSON*
     *
     * ```json
     * { "Type" : AWS::Timestream::Table", "Properties":{ "DatabaseName":"TestDatabase", "TableName":"TestTable", "MagneticStoreWriteProperties":{ "EnableMagneticStoreWrites":true, "MagneticStoreRejectedDataLocation":{ "S3Configuration":{ "BucketName":"testbucket", "EncryptionOption":"SSE_KMS", "KmsKeyId":"1234abcd-12ab-34cd-56ef-1234567890ab", "ObjectKeyPrefix":"prefix" } } } }
     * }
     * ```
     *
     * *YAML*
     *
     * ```
     * Type: AWS::Timestream::Table
     * DependsOn: TestDatabase
     * Properties: TableName: "TestTable" DatabaseName: "TestDatabase" MagneticStoreWriteProperties: EnableMagneticStoreWrites: true MagneticStoreRejectedDataLocation: S3Configuration: BucketName: "testbucket" EncryptionOption: "SSE_KMS" KmsKeyId: "1234abcd-12ab-34cd-56ef-1234567890ab" ObjectKeyPrefix: "prefix"
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-magneticstorewriteproperties
     */
    readonly magneticStoreWriteProperties?: any | cdk.IResolvable;
    /**
     * The retention duration for the memory store and magnetic store. This object has the following attributes:.
     *
     * - *MemoryStoreRetentionPeriodInHours* : Retention duration for memory store, in hours.
     * - *MagneticStoreRetentionPeriodInDays* : Retention duration for magnetic store, in days.
     *
     * Both attributes are of type `string` . Both attributes are *required* when `RetentionProperties` is specified.
     *
     * See the following examples:
     *
     * *JSON*
     *
     * `{ "Type" : AWS::Timestream::Table", "Properties" : { "DatabaseName" : "TestDatabase", "TableName" : "TestTable", "RetentionProperties" : { "MemoryStoreRetentionPeriodInHours": "24", "MagneticStoreRetentionPeriodInDays": "7" } } }`
     *
     * *YAML*
     *
     * ```
     * Type: AWS::Timestream::Table
     * DependsOn: TestDatabase
     * Properties: TableName: "TestTable" DatabaseName: "TestDatabase" RetentionProperties: MemoryStoreRetentionPeriodInHours: "24" MagneticStoreRetentionPeriodInDays: "7"
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-retentionproperties
     */
    readonly retentionProperties?: any | cdk.IResolvable;
    /**
     * The schema of the table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-schema
     */
    readonly schema?: cdk.IResolvable | CfnTable.SchemaProperty;
    /**
     * The name of the Timestream table.
     *
     * *Length Constraints* : Minimum length of 3 bytes. Maximum length of 256 bytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tablename
     */
    readonly tableName?: string;
    /**
     * The tags to add to the table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A DB instance is an isolated database environment running in the cloud.
 *
 * It is the basic building block of Amazon Timestream for InfluxDB. A DB instance can contain multiple user-created databases (or organizations and buckets for the case of InfluxDb 2.x databases), and can be accessed using the same client tools and applications you might use to access a standalone self-managed InfluxDB instance.
 *
 * @cloudformationResource AWS::Timestream::InfluxDBInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html
 */
export declare class CfnInfluxDBInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInfluxDBInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInfluxDBInstance;
    /**
     * The Amazon Resource Name (ARN) of the DB instance
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Availability Zone in which the DB instance resides.
     *
     * @cloudformationAttribute AvailabilityZone
     */
    readonly attrAvailabilityZone: string;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * A service-generated unique identifier
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
     *
     * @cloudformationAttribute InfluxAuthParametersSecretArn
     */
    readonly attrInfluxAuthParametersSecretArn: string;
    /**
     * Describes an Availability Zone in which the InfluxDB instance is located
     *
     * @cloudformationAttribute SecondaryAvailabilityZone
     */
    readonly attrSecondaryAvailabilityZone: string;
    /**
     * The status of the DB instance.
     *
     * Valid Values: `CREATING` | `AVAILABLE` | `DELETING` | `MODIFYING` | `UPDATING` | `DELETED` | `FAILED`
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
     */
    allocatedStorage?: number;
    /**
     * The name of the initial InfluxDB bucket.
     */
    bucket?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Timestream for InfluxDB DB instance type to run on.
     */
    dbInstanceType?: string;
    /**
     * The name or id of the DB parameter group to assign to your DB instance.
     */
    dbParameterGroupIdentifier?: string;
    /**
     * The Timestream for InfluxDB DB storage type to read and write InfluxDB data.
     */
    dbStorageType?: string;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     */
    deploymentType?: string;
    /**
     * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
     */
    logDeliveryConfiguration?: cdk.IResolvable | CfnInfluxDBInstance.LogDeliveryConfigurationProperty;
    /**
     * The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name?: string;
    /**
     * Network type of the InfluxDB Instance.
     */
    networkType?: string;
    /**
     * The name of the initial organization for the initial admin user in InfluxDB.
     */
    organization?: string;
    /**
     * The password of the initial admin user created in InfluxDB.
     */
    password?: string;
    /**
     * The port number on which InfluxDB accepts connections.
     */
    port?: number;
    /**
     * Configures the DB instance with a public IP to facilitate access.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * A list of key-value pairs to associate with the DB instance.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The username of the initial admin user created in InfluxDB.
     */
    username?: string;
    /**
     * A list of VPC security group IDs to associate with the DB instance.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * A list of VPC subnet IDs to associate with the DB instance.
     */
    vpcSubnetIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnInfluxDBInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInfluxDBInstance {
    /**
     * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbinstance-logdeliveryconfiguration.html
     */
    interface LogDeliveryConfigurationProperty {
        /**
         * Configuration for S3 bucket log delivery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbinstance-logdeliveryconfiguration.html#cfn-timestream-influxdbinstance-logdeliveryconfiguration-s3configuration
         */
        readonly s3Configuration: cdk.IResolvable | CfnInfluxDBInstance.S3ConfigurationProperty;
    }
    /**
     * Configuration for S3 bucket log delivery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbinstance-s3configuration.html
     */
    interface S3ConfigurationProperty {
        /**
         * The bucket name of the customer S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbinstance-s3configuration.html#cfn-timestream-influxdbinstance-s3configuration-bucketname
         */
        readonly bucketName: string;
        /**
         * Indicates whether log delivery to the S3 bucket is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-timestream-influxdbinstance-s3configuration.html#cfn-timestream-influxdbinstance-s3configuration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnInfluxDBInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html
 */
export interface CfnInfluxDBInstanceProps {
    /**
     * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-allocatedstorage
     */
    readonly allocatedStorage?: number;
    /**
     * The name of the initial InfluxDB bucket.
     *
     * All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-bucket
     */
    readonly bucket?: string;
    /**
     * The Timestream for InfluxDB DB instance type to run on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-dbinstancetype
     */
    readonly dbInstanceType?: string;
    /**
     * The name or id of the DB parameter group to assign to your DB instance.
     *
     * DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-dbparametergroupidentifier
     */
    readonly dbParameterGroupIdentifier?: string;
    /**
     * The Timestream for InfluxDB DB storage type to read and write InfluxDB data.
     *
     * You can choose between 3 different types of provisioned Influx IOPS included storage according to your workloads requirements:
     *
     * - Influx IO Included 3000 IOPS
     * - Influx IO Included 12000 IOPS
     * - Influx IO Included 16000 IOPS
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-dbstoragetype
     */
    readonly dbStorageType?: string;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-deploymenttype
     */
    readonly deploymentType?: string;
    /**
     * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-logdeliveryconfiguration
     */
    readonly logDeliveryConfiguration?: cdk.IResolvable | CfnInfluxDBInstance.LogDeliveryConfigurationProperty;
    /**
     * The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     *
     * This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-name
     */
    readonly name?: string;
    /**
     * Network type of the InfluxDB Instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-networktype
     */
    readonly networkType?: string;
    /**
     * The name of the initial organization for the initial admin user in InfluxDB.
     *
     * An InfluxDB organization is a workspace for a group of users.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-organization
     */
    readonly organization?: string;
    /**
     * The password of the initial admin user created in InfluxDB.
     *
     * This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon SecretManager in your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-password
     */
    readonly password?: string;
    /**
     * The port number on which InfluxDB accepts connections.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-port
     */
    readonly port?: number;
    /**
     * Configures the DB instance with a public IP to facilitate access.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * A list of key-value pairs to associate with the DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The username of the initial admin user created in InfluxDB.
     *
     * Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-username
     */
    readonly username?: string;
    /**
     * A list of VPC security group IDs to associate with the DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
    /**
     * A list of VPC subnet IDs to associate with the DB instance.
     *
     * Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-influxdbinstance.html#cfn-timestream-influxdbinstance-vpcsubnetids
     */
    readonly vpcSubnetIds?: Array<string>;
}
