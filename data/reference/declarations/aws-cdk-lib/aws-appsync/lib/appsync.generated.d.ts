import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::AppSync::ApiCache` resource represents the input of a `CreateApiCache` operation.
 *
 * @cloudformationResource AWS::AppSync::ApiCache
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html
 */
export declare class CfnApiCache extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiCache from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiCache;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Caching behavior.
     */
    apiCachingBehavior: string;
    /**
     * The GraphQL API ID.
     */
    apiId: string;
    /**
     * At-rest encryption flag for cache.
     */
    atRestEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:.
     */
    healthMetricsConfig?: string;
    /**
     * Transit encryption flag when connecting to cache.
     */
    transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * TTL in seconds for cache entries.
     */
    ttl: number;
    /**
     * The cache instance type. Valid values are.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiCacheProps);
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
 * Properties for defining a `CfnApiCache`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html
 */
export interface CfnApiCacheProps {
    /**
     * Caching behavior.
     *
     * - *FULL_REQUEST_CACHING* : All requests from the same user are cached. Individual resolvers are automatically cached. All API calls will try to return responses from the cache.
     * - *PER_RESOLVER_CACHING* : Individual resolvers that you specify are cached.
     * - *OPERATION_LEVEL_CACHING* : Full requests are cached together and returned without executing resolvers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apicachingbehavior
     */
    readonly apiCachingBehavior: string;
    /**
     * The GraphQL API ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-apiid
     */
    readonly apiId: string;
    /**
     * At-rest encryption flag for cache.
     *
     * You cannot update this setting after creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-atrestencryptionenabled
     */
    readonly atRestEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include:.
     *
     * - *NetworkBandwidthOutAllowanceExceeded* : The network packets dropped because the throughput exceeded the aggregated bandwidth limit. This is useful for diagnosing bottlenecks in a cache configuration.
     * - *EngineCPUUtilization* : The CPU utilization (percentage) allocated to the Redis process. This is useful for diagnosing bottlenecks in a cache configuration.
     *
     * Metrics will be recorded by API ID. You can set the value to `ENABLED` or `DISABLED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-healthmetricsconfig
     */
    readonly healthMetricsConfig?: string;
    /**
     * Transit encryption flag when connecting to cache.
     *
     * You cannot update this setting after creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-transitencryptionenabled
     */
    readonly transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * TTL in seconds for cache entries.
     *
     * Valid values are 1–3,600 seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-ttl
     */
    readonly ttl: number;
    /**
     * The cache instance type. Valid values are.
     *
     * - `SMALL`
     * - `MEDIUM`
     * - `LARGE`
     * - `XLARGE`
     * - `LARGE_2X`
     * - `LARGE_4X`
     * - `LARGE_8X` (not available in all regions)
     * - `LARGE_12X`
     *
     * Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.
     *
     * The following legacy instance types are available, but their use is discouraged:
     *
     * - *T2_SMALL* : A t2.small instance type.
     * - *T2_MEDIUM* : A t2.medium instance type.
     * - *R4_LARGE* : A r4.large instance type.
     * - *R4_XLARGE* : A r4.xlarge instance type.
     * - *R4_2XLARGE* : A r4.2xlarge instance type.
     * - *R4_4XLARGE* : A r4.4xlarge instance type.
     * - *R4_8XLARGE* : A r4.8xlarge instance type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apicache.html#cfn-appsync-apicache-type
     */
    readonly type: string;
}
/**
 * The `AWS::AppSync::ApiKey` resource creates a unique key that you can distribute to clients who are executing GraphQL operations with AWS AppSync that require an API key.
 *
 * @cloudformationResource AWS::AppSync::ApiKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html
 */
export declare class CfnApiKey extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiKey;
    /**
     * The API key.
     *
     * @cloudformationAttribute ApiKey
     */
    readonly attrApiKey: string;
    /**
     * The API key ID.
     *
     * @cloudformationAttribute ApiKeyId
     */
    readonly attrApiKeyId: string;
    /**
     * The Amazon Resource Name (ARN) of the API key, such as `arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/apikey/apikeya1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Unique AWS AppSync GraphQL API ID for this API key.
     */
    apiId: string;
    /**
     * Unique description of your API key.
     */
    description?: string;
    /**
     * The time after which the API key expires.
     */
    expires?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiKeyProps);
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
 * Properties for defining a `CfnApiKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html
 */
export interface CfnApiKeyProps {
    /**
     * Unique AWS AppSync GraphQL API ID for this API key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-apiid
     */
    readonly apiId: string;
    /**
     * Unique description of your API key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-description
     */
    readonly description?: string;
    /**
     * The time after which the API key expires.
     *
     * The date is represented as seconds since the epoch, rounded down to the nearest hour.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-apikey.html#cfn-appsync-apikey-expires
     */
    readonly expires?: number;
}
/**
 * The `AWS::AppSync::DataSource` resource creates data sources for resolvers in AWS AppSync to connect to, such as Amazon DynamoDB , AWS Lambda , and Amazon OpenSearch Service .
 *
 * Resolvers use these data sources to fetch data when clients make GraphQL calls.
 *
 * @cloudformationResource AWS::AppSync::DataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html
 */
export declare class CfnDataSource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDataSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDataSource;
    /**
     * The Amazon Resource Name (ARN) of the API key, such as `arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/datasources/datasourcename` .
     *
     * @cloudformationAttribute DataSourceArn
     */
    readonly attrDataSourceArn: string;
    /**
     * Friendly name for you to identify your AWS AppSync data source after creation.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Unique AWS AppSync GraphQL API identifier where this data source will be created.
     */
    apiId: string;
    /**
     * The description of the data source.
     */
    description?: string;
    /**
     * AWS Region and TableName for an Amazon DynamoDB table in your account.
     */
    dynamoDbConfig?: CfnDataSource.DynamoDBConfigProperty | cdk.IResolvable;
    /**
     * @deprecated this property has been deprecated
     */
    elasticsearchConfig?: CfnDataSource.ElasticsearchConfigProperty | cdk.IResolvable;
    /**
     * An EventBridge configuration that contains a valid ARN of an event bus.
     */
    eventBridgeConfig?: CfnDataSource.EventBridgeConfigProperty | cdk.IResolvable;
    /**
     * Endpoints for an HTTP data source.
     */
    httpConfig?: CfnDataSource.HttpConfigProperty | cdk.IResolvable;
    /**
     * An ARN of a Lambda function in valid ARN format.
     */
    lambdaConfig?: cdk.IResolvable | CfnDataSource.LambdaConfigProperty;
    /**
     * Enables or disables enhanced data source metrics for specified data sources.
     */
    metricsConfig?: string;
    /**
     * Friendly name for you to identify your AppSync data source after creation.
     */
    name: string;
    /**
     * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
     */
    openSearchServiceConfig?: cdk.IResolvable | CfnDataSource.OpenSearchServiceConfigProperty;
    /**
     * Relational Database configuration of the relational database data source.
     */
    relationalDatabaseConfig?: cdk.IResolvable | CfnDataSource.RelationalDatabaseConfigProperty;
    /**
     * The AWS Identity and Access Management service role ARN for the data source.
     */
    serviceRoleArn?: string;
    /**
     * The type of the data source.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDataSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDataSource {
    /**
     * The `OpenSearchServiceConfig` property type specifies the `AwsRegion` and `Endpoints` for an Amazon OpenSearch Service domain in your account for an AWS AppSync data source.
     *
     * `OpenSearchServiceConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html
     */
    interface OpenSearchServiceConfigProperty {
        /**
         * The AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html#cfn-appsync-datasource-opensearchserviceconfig-awsregion
         */
        readonly awsRegion: string;
        /**
         * The endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-opensearchserviceconfig.html#cfn-appsync-datasource-opensearchserviceconfig-endpoint
         */
        readonly endpoint: string;
    }
    /**
     * The data source.
     *
     * This can be an API destination, resource, or AWS service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html
     */
    interface EventBridgeConfigProperty {
        /**
         * The event bus pipeline's ARN.
         *
         * For more information about event buses, see [EventBridge event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-eventbridgeconfig.html#cfn-appsync-datasource-eventbridgeconfig-eventbusarn
         */
        readonly eventBusArn: string;
    }
    /**
     * Use the `HttpConfig` property type to specify `HttpConfig` for an AWS AppSync data source.
     *
     * `HttpConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html
     */
    interface HttpConfigProperty {
        /**
         * The authorization configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html#cfn-appsync-datasource-httpconfig-authorizationconfig
         */
        readonly authorizationConfig?: CfnDataSource.AuthorizationConfigProperty | cdk.IResolvable;
        /**
         * The endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html#cfn-appsync-datasource-httpconfig-endpoint
         */
        readonly endpoint: string;
    }
    /**
     * The `AuthorizationConfig` property type specifies the authorization type and configuration for an AWS AppSync http data source.
     *
     * `AuthorizationConfig` is a property of the [AWS AppSync DataSource HttpConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html
     */
    interface AuthorizationConfigProperty {
        /**
         * The authorization type that the HTTP endpoint requires.
         *
         * - *AWS_IAM* : The authorization type is Signature Version 4 (SigV4).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html#cfn-appsync-datasource-authorizationconfig-authorizationtype
         */
        readonly authorizationType: string;
        /**
         * The AWS Identity and Access Management settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-authorizationconfig.html#cfn-appsync-datasource-authorizationconfig-awsiamconfig
         */
        readonly awsIamConfig?: CfnDataSource.AwsIamConfigProperty | cdk.IResolvable;
    }
    /**
     * Use the `AwsIamConfig` property type to specify `AwsIamConfig` for a AWS AppSync authorizaton.
     *
     * `AwsIamConfig` is a property of the [AWS AppSync DataSource AuthorizationConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-httpconfig-authorizationconfig.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html
     */
    interface AwsIamConfigProperty {
        /**
         * The signing Region for AWS Identity and Access Management authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html#cfn-appsync-datasource-awsiamconfig-signingregion
         */
        readonly signingRegion?: string;
        /**
         * The signing service name for AWS Identity and Access Management authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-awsiamconfig.html#cfn-appsync-datasource-awsiamconfig-signingservicename
         */
        readonly signingServiceName?: string;
    }
    /**
     * Use the `RelationalDatabaseConfig` property type to specify `RelationalDatabaseConfig` for an AWS AppSync data source.
     *
     * `RelationalDatabaseConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html
     */
    interface RelationalDatabaseConfigProperty {
        /**
         * Information about the Amazon RDS resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html#cfn-appsync-datasource-relationaldatabaseconfig-rdshttpendpointconfig
         */
        readonly rdsHttpEndpointConfig?: cdk.IResolvable | CfnDataSource.RdsHttpEndpointConfigProperty;
        /**
         * The type of relational data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html#cfn-appsync-datasource-relationaldatabaseconfig-relationaldatabasesourcetype
         */
        readonly relationalDatabaseSourceType: string;
    }
    /**
     * Use the `RdsHttpEndpointConfig` property type to specify the `RdsHttpEndpoint` for an AWS AppSync relational database.
     *
     * `RdsHttpEndpointConfig` is a property of the [AWS AppSync DataSource RelationalDatabaseConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-relationaldatabaseconfig.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html
     */
    interface RdsHttpEndpointConfigProperty {
        /**
         * AWS Region for RDS HTTP endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html#cfn-appsync-datasource-rdshttpendpointconfig-awsregion
         */
        readonly awsRegion: string;
        /**
         * The ARN for database credentials stored in AWS Secrets Manager .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html#cfn-appsync-datasource-rdshttpendpointconfig-awssecretstorearn
         */
        readonly awsSecretStoreArn: string;
        /**
         * Logical database name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html#cfn-appsync-datasource-rdshttpendpointconfig-databasename
         */
        readonly databaseName?: string;
        /**
         * Amazon RDS cluster Amazon Resource Name (ARN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html#cfn-appsync-datasource-rdshttpendpointconfig-dbclusteridentifier
         */
        readonly dbClusterIdentifier: string;
        /**
         * Logical schema name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-rdshttpendpointconfig.html#cfn-appsync-datasource-rdshttpendpointconfig-schema
         */
        readonly schema?: string;
    }
    /**
     * The `LambdaConfig` property type specifies the Lambda function ARN for an AWS AppSync data source.
     *
     * `LambdaConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html
     */
    interface LambdaConfigProperty {
        /**
         * The ARN for the Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-lambdaconfig.html#cfn-appsync-datasource-lambdaconfig-lambdafunctionarn
         */
        readonly lambdaFunctionArn: string;
    }
    /**
     * The `DynamoDBConfig` property type specifies the `AwsRegion` and `TableName` for an Amazon DynamoDB table in your account for an AWS AppSync data source.
     *
     * `DynamoDBConfig` is a property of the [AWS::AppSync::DataSource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html
     */
    interface DynamoDBConfigProperty {
        /**
         * The AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html#cfn-appsync-datasource-dynamodbconfig-awsregion
         */
        readonly awsRegion: string;
        /**
         * The `DeltaSyncConfig` for a versioned datasource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html#cfn-appsync-datasource-dynamodbconfig-deltasyncconfig
         */
        readonly deltaSyncConfig?: CfnDataSource.DeltaSyncConfigProperty | cdk.IResolvable;
        /**
         * The table name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html#cfn-appsync-datasource-dynamodbconfig-tablename
         */
        readonly tableName: string;
        /**
         * Set to `TRUE` to use AWS Identity and Access Management with this data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html#cfn-appsync-datasource-dynamodbconfig-usecallercredentials
         */
        readonly useCallerCredentials?: boolean | cdk.IResolvable;
        /**
         * Set to TRUE to use Conflict Detection and Resolution with this data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-dynamodbconfig.html#cfn-appsync-datasource-dynamodbconfig-versioned
         */
        readonly versioned?: boolean | cdk.IResolvable;
    }
    /**
     * Describes a Delta Sync configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html
     */
    interface DeltaSyncConfigProperty {
        /**
         * The number of minutes that an Item is stored in the data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html#cfn-appsync-datasource-deltasyncconfig-basetablettl
         */
        readonly baseTableTtl: string;
        /**
         * The Delta Sync table name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html#cfn-appsync-datasource-deltasyncconfig-deltasynctablename
         */
        readonly deltaSyncTableName: string;
        /**
         * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-deltasyncconfig.html#cfn-appsync-datasource-deltasyncconfig-deltasynctablettl
         */
        readonly deltaSyncTableTtl: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html
     */
    interface ElasticsearchConfigProperty {
        /**
         * The AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html#cfn-appsync-datasource-elasticsearchconfig-awsregion
         */
        readonly awsRegion: string;
        /**
         * The endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-datasource-elasticsearchconfig.html#cfn-appsync-datasource-elasticsearchconfig-endpoint
         */
        readonly endpoint: string;
    }
}
/**
 * Properties for defining a `CfnDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html
 */
export interface CfnDataSourceProps {
    /**
     * Unique AWS AppSync GraphQL API identifier where this data source will be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-apiid
     */
    readonly apiId: string;
    /**
     * The description of the data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-description
     */
    readonly description?: string;
    /**
     * AWS Region and TableName for an Amazon DynamoDB table in your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-dynamodbconfig
     */
    readonly dynamoDbConfig?: CfnDataSource.DynamoDBConfigProperty | cdk.IResolvable;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-elasticsearchconfig
     */
    readonly elasticsearchConfig?: CfnDataSource.ElasticsearchConfigProperty | cdk.IResolvable;
    /**
     * An EventBridge configuration that contains a valid ARN of an event bus.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-eventbridgeconfig
     */
    readonly eventBridgeConfig?: CfnDataSource.EventBridgeConfigProperty | cdk.IResolvable;
    /**
     * Endpoints for an HTTP data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-httpconfig
     */
    readonly httpConfig?: CfnDataSource.HttpConfigProperty | cdk.IResolvable;
    /**
     * An ARN of a Lambda function in valid ARN format.
     *
     * This can be the ARN of a Lambda function that exists in the current account or in another account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-lambdaconfig
     */
    readonly lambdaConfig?: cdk.IResolvable | CfnDataSource.LambdaConfigProperty;
    /**
     * Enables or disables enhanced data source metrics for specified data sources.
     *
     * Note that `MetricsConfig` won't be used unless the `dataSourceLevelMetricsBehavior` value is set to `PER_DATA_SOURCE_METRICS` . If the `dataSourceLevelMetricsBehavior` is set to `FULL_REQUEST_DATA_SOURCE_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.
     *
     * `MetricsConfig` can be `ENABLED` or `DISABLED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-metricsconfig
     */
    readonly metricsConfig?: string;
    /**
     * Friendly name for you to identify your AppSync data source after creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-name
     */
    readonly name: string;
    /**
     * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-opensearchserviceconfig
     */
    readonly openSearchServiceConfig?: cdk.IResolvable | CfnDataSource.OpenSearchServiceConfigProperty;
    /**
     * Relational Database configuration of the relational database data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-relationaldatabaseconfig
     */
    readonly relationalDatabaseConfig?: cdk.IResolvable | CfnDataSource.RelationalDatabaseConfigProperty;
    /**
     * The AWS Identity and Access Management service role ARN for the data source.
     *
     * The system assumes this role when accessing the data source.
     *
     * Required if `Type` is specified as `AWS_LAMBDA` , `AMAZON_DYNAMODB` , `AMAZON_ELASTICSEARCH` , `AMAZON_EVENTBRIDGE` , `AMAZON_OPENSEARCH_SERVICE` , `RELATIONAL_DATABASE` , or `AMAZON_BEDROCK_RUNTIME` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-servicerolearn
     */
    readonly serviceRoleArn?: string;
    /**
     * The type of the data source.
     *
     * - *AWS_LAMBDA* : The data source is an AWS Lambda function.
     * - *AMAZON_DYNAMODB* : The data source is an Amazon DynamoDB table.
     * - *AMAZON_ELASTICSEARCH* : The data source is an Amazon OpenSearch Service domain.
     * - *AMAZON_EVENTBRIDGE* : The data source is an Amazon EventBridge event bus.
     * - *AMAZON_OPENSEARCH_SERVICE* : The data source is an Amazon OpenSearch Service domain.
     * - *AMAZON_BEDROCK_RUNTIME* : The data source is the Amazon Bedrock runtime.
     * - *NONE* : There is no data source. This type is used when you wish to invoke a GraphQL operation without connecting to a data source, such as performing data transformation with resolvers or triggering a subscription to be invoked from a mutation.
     * - *HTTP* : The data source is an HTTP endpoint.
     * - *RELATIONAL_DATABASE* : The data source is a relational database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-datasource.html#cfn-appsync-datasource-type
     */
    readonly type: string;
}
/**
 * The `AWS::AppSync::DomainName` resource creates a `DomainNameConfig` object to configure a custom domain.
 *
 * @cloudformationResource AWS::AppSync::DomainName
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html
 */
export declare class CfnDomainName extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainName from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainName;
    /**
     * The domain name provided by AWS AppSync .
     *
     * @cloudformationAttribute AppSyncDomainName
     */
    readonly attrAppSyncDomainName: string;
    /**
     * The domain name.
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * The ID of your Amazon Route 53 hosted zone.
     *
     * @cloudformationAttribute HostedZoneId
     */
    readonly attrHostedZoneId: string;
    /**
     * The Amazon Resource Name (ARN) of the certificate.
     */
    certificateArn: string;
    /**
     * The decription for your domain name.
     */
    description?: string;
    /**
     * The domain name.
     */
    domainName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainNameProps);
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
 * Properties for defining a `CfnDomainName`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html
 */
export interface CfnDomainNameProps {
    /**
     * The Amazon Resource Name (ARN) of the certificate.
     *
     * This will be an AWS Certificate Manager certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-certificatearn
     */
    readonly certificateArn: string;
    /**
     * The decription for your domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-description
     */
    readonly description?: string;
    /**
     * The domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-domainname
     */
    readonly domainName: string;
}
/**
 * The `AWS::AppSync::DomainNameApiAssociation` resource represents the mapping of your custom domain name to the assigned API URL.
 *
 * @cloudformationResource AWS::AppSync::DomainNameApiAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html
 */
export declare class CfnDomainNameApiAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainNameApiAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainNameApiAssociation;
    /**
     * @cloudformationAttribute ApiAssociationIdentifier
     */
    readonly attrApiAssociationIdentifier: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The domain name.
     */
    domainName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainNameApiAssociationProps);
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
 * Properties for defining a `CfnDomainNameApiAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html
 */
export interface CfnDomainNameApiAssociationProps {
    /**
     * The API ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html#cfn-appsync-domainnameapiassociation-apiid
     */
    readonly apiId: string;
    /**
     * The domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html#cfn-appsync-domainnameapiassociation-domainname
     */
    readonly domainName: string;
}
/**
 * The `AWS::AppSync::FunctionConfiguration` resource defines the functions in GraphQL APIs to perform certain operations.
 *
 * You can use pipeline resolvers to attach functions. For more information, see [Pipeline Resolvers](https://docs.aws.amazon.com/appsync/latest/devguide/pipeline-resolvers.html) in the *AWS AppSync Developer Guide* .
 *
 * > When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the AWS CloudFormation template. Changing the Amazon S3 file content without changing a property value will not result in an update operation.
 * >
 * > See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::AppSync::FunctionConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html
 */
export declare class CfnFunctionConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFunctionConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFunctionConfiguration;
    /**
     * The name of data source this function will attach.
     *
     * @cloudformationAttribute DataSourceName
     */
    readonly attrDataSourceName: string;
    /**
     * ARN of the function, such as `arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/functions/functionId` .
     *
     * @cloudformationAttribute FunctionArn
     */
    readonly attrFunctionArn: string;
    /**
     * The unique ID of this function.
     *
     * @cloudformationAttribute FunctionId
     */
    readonly attrFunctionId: string;
    /**
     * The name of the function.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The AWS AppSync GraphQL API that you want to attach using this function.
     */
    apiId: string;
    /**
     * The `resolver` code that contains the request and response functions.
     */
    code?: string;
    /**
     * The Amazon S3 endpoint.
     */
    codeS3Location?: string;
    /**
     * The name of data source this function will attach.
     */
    dataSourceName: string;
    /**
     * The `Function` description.
     */
    description?: string;
    /**
     * The version of the request mapping template.
     */
    functionVersion?: string;
    /**
     * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a `BatchInvoke` operation.
     */
    maxBatchSize?: number;
    /**
     * The name of the function.
     */
    name: string;
    /**
     * The `Function` request mapping template.
     */
    requestMappingTemplate?: string;
    /**
     * Describes a Sync configuration for a resolver.
     */
    requestMappingTemplateS3Location?: string;
    /**
     * The `Function` response mapping template.
     */
    responseMappingTemplate?: string;
    /**
     * The location of a response mapping template in an Amazon S3 bucket.
     */
    responseMappingTemplateS3Location?: string;
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     */
    runtime?: CfnFunctionConfiguration.AppSyncRuntimeProperty | cdk.IResolvable;
    /**
     * Describes a Sync configuration for a resolver.
     */
    syncConfig?: cdk.IResolvable | CfnFunctionConfiguration.SyncConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFunctionConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFunctionConfiguration {
    /**
     * Describes a Sync configuration for a resolver.
     *
     * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html
     */
    interface SyncConfigProperty {
        /**
         * The Conflict Detection strategy to use.
         *
         * - *VERSION* : Detect conflicts based on object versions for this resolver.
         * - *NONE* : Do not detect conflicts when invoking this resolver.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html#cfn-appsync-functionconfiguration-syncconfig-conflictdetection
         */
        readonly conflictDetection: string;
        /**
         * The Conflict Resolution strategy to perform in the event of a conflict.
         *
         * - *OPTIMISTIC_CONCURRENCY* : Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
         * - *AUTOMERGE* : Resolve conflicts with the Automerge conflict resolution strategy.
         * - *LAMBDA* : Resolve conflicts with an AWS Lambda function supplied in the `LambdaConflictHandlerConfig` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html#cfn-appsync-functionconfiguration-syncconfig-conflicthandler
         */
        readonly conflictHandler?: string;
        /**
         * The `LambdaConflictHandlerConfig` when configuring `LAMBDA` as the Conflict Handler.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-syncconfig.html#cfn-appsync-functionconfiguration-syncconfig-lambdaconflicthandlerconfig
         */
        readonly lambdaConflictHandlerConfig?: cdk.IResolvable | CfnFunctionConfiguration.LambdaConflictHandlerConfigProperty;
    }
    /**
     * The `LambdaConflictHandlerConfig` object when configuring `LAMBDA` as the Conflict Handler.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-lambdaconflicthandlerconfig.html
     */
    interface LambdaConflictHandlerConfigProperty {
        /**
         * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-lambdaconflicthandlerconfig.html#cfn-appsync-functionconfiguration-lambdaconflicthandlerconfig-lambdaconflicthandlerarn
         */
        readonly lambdaConflictHandlerArn?: string;
    }
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     *
     * Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-appsyncruntime.html
     */
    interface AppSyncRuntimeProperty {
        /**
         * The `name` of the runtime to use.
         *
         * Currently, the only allowed value is `APPSYNC_JS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-appsyncruntime.html#cfn-appsync-functionconfiguration-appsyncruntime-name
         */
        readonly name: string;
        /**
         * The `version` of the runtime to use.
         *
         * Currently, the only allowed version is `1.0.0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-functionconfiguration-appsyncruntime.html#cfn-appsync-functionconfiguration-appsyncruntime-runtimeversion
         */
        readonly runtimeVersion: string;
    }
}
/**
 * Properties for defining a `CfnFunctionConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html
 */
export interface CfnFunctionConfigurationProps {
    /**
     * The AWS AppSync GraphQL API that you want to attach using this function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-apiid
     */
    readonly apiId: string;
    /**
     * The `resolver` code that contains the request and response functions.
     *
     * When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-code
     */
    readonly code?: string;
    /**
     * The Amazon S3 endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-codes3location
     */
    readonly codeS3Location?: string;
    /**
     * The name of data source this function will attach.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-datasourcename
     */
    readonly dataSourceName: string;
    /**
     * The `Function` description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-description
     */
    readonly description?: string;
    /**
     * The version of the request mapping template.
     *
     * Currently, only the 2018-05-29 version of the template is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-functionversion
     */
    readonly functionVersion?: string;
    /**
     * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a `BatchInvoke` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-maxbatchsize
     */
    readonly maxBatchSize?: number;
    /**
     * The name of the function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-name
     */
    readonly name: string;
    /**
     * The `Function` request mapping template.
     *
     * Functions support only the 2018-05-29 version of the request mapping template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-requestmappingtemplate
     */
    readonly requestMappingTemplate?: string;
    /**
     * Describes a Sync configuration for a resolver.
     *
     * Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-requestmappingtemplates3location
     */
    readonly requestMappingTemplateS3Location?: string;
    /**
     * The `Function` response mapping template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-responsemappingtemplate
     */
    readonly responseMappingTemplate?: string;
    /**
     * The location of a response mapping template in an Amazon S3 bucket.
     *
     * Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-responsemappingtemplates3location
     */
    readonly responseMappingTemplateS3Location?: string;
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     *
     * Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-runtime
     */
    readonly runtime?: CfnFunctionConfiguration.AppSyncRuntimeProperty | cdk.IResolvable;
    /**
     * Describes a Sync configuration for a resolver.
     *
     * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-functionconfiguration.html#cfn-appsync-functionconfiguration-syncconfig
     */
    readonly syncConfig?: cdk.IResolvable | CfnFunctionConfiguration.SyncConfigProperty;
}
/**
 * The `AWS::AppSync::GraphQLApi` resource creates a new AWS AppSync GraphQL API.
 *
 * This is the top-level construct for your application. For more information, see [Quick Start](https://docs.aws.amazon.com/appsync/latest/devguide/quickstart.html) in the *AWS AppSync Developer Guide* .
 *
 * @cloudformationResource AWS::AppSync::GraphQLApi
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html
 */
export declare class CfnGraphQLApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGraphQLApi from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGraphQLApi;
    /**
     * Unique AWS AppSync GraphQL API identifier.
     *
     * @cloudformationAttribute ApiId
     */
    readonly attrApiId: string;
    /**
     * The Amazon Resource Name (ARN) of the API key, such as `arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The fully qualified domain name (FQDN) of the endpoint URL of your GraphQL API.
     *
     * @cloudformationAttribute GraphQLDns
     */
    readonly attrGraphQlDns: string;
    /**
     * The GraphQL endpoint ARN.
     *
     * @cloudformationAttribute GraphQLEndpointArn
     */
    readonly attrGraphQlEndpointArn: string;
    /**
     * The Endpoint URL of your GraphQL API.
     *
     * @cloudformationAttribute GraphQLUrl
     */
    readonly attrGraphQlUrl: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The fully qualified domain name (FQDN) of the real-time endpoint URL of your GraphQL API.
     *
     * @cloudformationAttribute RealtimeDns
     */
    readonly attrRealtimeDns: string;
    /**
     * The GraphQL API real-time endpoint URL. For more information, see [Discovering the real-time endpoint from the GraphQL endpoint](https://docs.aws.amazon.com/appsync/latest/devguide/real-time-websocket-client.html#handshake-details-to-establish-the-websocket-connection) .
     *
     * @cloudformationAttribute RealtimeUrl
     */
    readonly attrRealtimeUrl: string;
    /**
     * A list of additional authentication providers for the `GraphqlApi` API.
     */
    additionalAuthenticationProviders?: Array<CfnGraphQLApi.AdditionalAuthenticationProviderProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that indicates whether the GraphQL API is a standard API ( `GRAPHQL` ) or merged API ( `MERGED` ).
     */
    apiType?: string;
    /**
     * Security configuration for your GraphQL API.
     */
    authenticationType: string;
    /**
     * Enables and controls the enhanced metrics feature.
     */
    enhancedMetricsConfig?: CfnGraphQLApi.EnhancedMetricsConfigProperty | cdk.IResolvable;
    /**
     * A map containing the list of resources with their properties and environment variables.
     */
    environmentVariables?: cdk.IResolvable | Record<string, string>;
    /**
     * Sets the value of the GraphQL API to enable ( `ENABLED` ) or disable ( `DISABLED` ) introspection.
     */
    introspectionConfig?: string;
    /**
     * A `LambdaAuthorizerConfig` holds configuration on how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode.
     */
    lambdaAuthorizerConfig?: cdk.IResolvable | CfnGraphQLApi.LambdaAuthorizerConfigProperty;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: cdk.IResolvable | CfnGraphQLApi.LogConfigProperty;
    /**
     * The AWS Identity and Access Management service role ARN for a merged API.
     */
    mergedApiExecutionRoleArn?: string;
    /**
     * The API name.
     */
    name: string;
    /**
     * The OpenID Connect configuration.
     */
    openIdConnectConfig?: cdk.IResolvable | CfnGraphQLApi.OpenIDConnectConfigProperty;
    /**
     * The owner contact information for an API resource.
     */
    ownerContact?: string;
    /**
     * The maximum depth a query can have in a single request.
     */
    queryDepthLimit?: number;
    /**
     * The maximum number of resolvers that can be invoked in a single request.
     */
    resolverCountLimit?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key-value pairs) for this GraphQL API.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.
     */
    userPoolConfig?: cdk.IResolvable | CfnGraphQLApi.UserPoolConfigProperty;
    /**
     * Sets the scope of the GraphQL API to public ( `GLOBAL` ) or private ( `PRIVATE` ).
     */
    visibility?: string;
    /**
     * A flag indicating whether to use AWS X-Ray tracing for this `GraphqlApi` .
     */
    xrayEnabled?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGraphQLApiProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGraphQLApi {
    /**
     * The `OpenIDConnectConfig` property type specifies the optional authorization configuration for using an OpenID Connect compliant service with your GraphQL endpoint for an AWS AppSync GraphQL API.
     *
     * `OpenIDConnectConfig` is a property of the [AWS::AppSync::GraphQLApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html
     */
    interface OpenIDConnectConfigProperty {
        /**
         * The number of milliseconds that a token is valid after being authenticated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html#cfn-appsync-graphqlapi-openidconnectconfig-authttl
         */
        readonly authTtl?: number;
        /**
         * The client identifier of the Relying party at the OpenID identity provider.
         *
         * This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so that AWS AppSync can validate against multiple client identifiers at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html#cfn-appsync-graphqlapi-openidconnectconfig-clientid
         */
        readonly clientId?: string;
        /**
         * The number of milliseconds that a token is valid after it's issued to a user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html#cfn-appsync-graphqlapi-openidconnectconfig-iatttl
         */
        readonly iatTtl?: number;
        /**
         * The issuer for the OIDC configuration.
         *
         * The issuer returned by discovery must exactly match the value of `iss` in the ID token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-openidconnectconfig.html#cfn-appsync-graphqlapi-openidconnectconfig-issuer
         */
        readonly issuer?: string;
    }
    /**
     * Describes an additional authentication provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html
     */
    interface AdditionalAuthenticationProviderProperty {
        /**
         * The authentication type for API key, AWS Identity and Access Management , OIDC, Amazon Cognito user pools , or AWS Lambda .
         *
         * Valid Values: `API_KEY` | `AWS_IAM` | `OPENID_CONNECT` | `AMAZON_COGNITO_USER_POOLS` | `AWS_LAMBDA`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html#cfn-appsync-graphqlapi-additionalauthenticationprovider-authenticationtype
         */
        readonly authenticationType: string;
        /**
         * Configuration for AWS Lambda function authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html#cfn-appsync-graphqlapi-additionalauthenticationprovider-lambdaauthorizerconfig
         */
        readonly lambdaAuthorizerConfig?: cdk.IResolvable | CfnGraphQLApi.LambdaAuthorizerConfigProperty;
        /**
         * The OIDC configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html#cfn-appsync-graphqlapi-additionalauthenticationprovider-openidconnectconfig
         */
        readonly openIdConnectConfig?: cdk.IResolvable | CfnGraphQLApi.OpenIDConnectConfigProperty;
        /**
         * The Amazon Cognito user pool configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-additionalauthenticationprovider.html#cfn-appsync-graphqlapi-additionalauthenticationprovider-userpoolconfig
         */
        readonly userPoolConfig?: CfnGraphQLApi.CognitoUserPoolConfigProperty | cdk.IResolvable;
    }
    /**
     * Configuration for AWS Lambda function authorization.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html
     */
    interface LambdaAuthorizerConfigProperty {
        /**
         * The number of seconds a response should be cached for.
         *
         * The default is 0 seconds, which disables caching. If you don't specify a value for `authorizerResultTtlInSeconds` , the default value is used. The maximum value is one hour (3600 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html#cfn-appsync-graphqlapi-lambdaauthorizerconfig-authorizerresultttlinseconds
         */
        readonly authorizerResultTtlInSeconds?: number;
        /**
         * The ARN of the Lambda function to be called for authorization.
         *
         * This may be a standard Lambda ARN, a version ARN ( `.../v3` ) or alias ARN.
         *
         * *Note* : This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To do so with the AWS CLI , run the following:
         *
         * `aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html#cfn-appsync-graphqlapi-lambdaauthorizerconfig-authorizeruri
         */
        readonly authorizerUri?: string;
        /**
         * A regular expression for validation of tokens before the Lambda function is called.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-lambdaauthorizerconfig.html#cfn-appsync-graphqlapi-lambdaauthorizerconfig-identityvalidationexpression
         */
        readonly identityValidationExpression?: string;
    }
    /**
     * Describes an Amazon Cognito user pool configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html
     */
    interface CognitoUserPoolConfigProperty {
        /**
         * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
         *
         * If this value isn't set, no filtering is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html#cfn-appsync-graphqlapi-cognitouserpoolconfig-appidclientregex
         */
        readonly appIdClientRegex?: string;
        /**
         * The AWS Region in which the user pool was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html#cfn-appsync-graphqlapi-cognitouserpoolconfig-awsregion
         */
        readonly awsRegion?: string;
        /**
         * The user pool ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-cognitouserpoolconfig.html#cfn-appsync-graphqlapi-cognitouserpoolconfig-userpoolid
         */
        readonly userPoolId?: string;
    }
    /**
     * The `UserPoolConfig` property type specifies the optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint for an AWS AppSync GraphQL API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html
     */
    interface UserPoolConfigProperty {
        /**
         * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
         *
         * If this value isn't set, no filtering is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html#cfn-appsync-graphqlapi-userpoolconfig-appidclientregex
         */
        readonly appIdClientRegex?: string;
        /**
         * The AWS Region in which the user pool was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html#cfn-appsync-graphqlapi-userpoolconfig-awsregion
         */
        readonly awsRegion?: string;
        /**
         * The action that you want your GraphQL API to take when a request that uses Amazon Cognito user pool authentication doesn't match the Amazon Cognito user pool configuration.
         *
         * When specifying Amazon Cognito user pools as the default authentication, you must set the value for `DefaultAction` to `ALLOW` if specifying `AdditionalAuthenticationProviders` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html#cfn-appsync-graphqlapi-userpoolconfig-defaultaction
         */
        readonly defaultAction?: string;
        /**
         * The user pool ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-userpoolconfig.html#cfn-appsync-graphqlapi-userpoolconfig-userpoolid
         */
        readonly userPoolId?: string;
    }
    /**
     * The `LogConfig` property type specifies the logging configuration when writing GraphQL operations and tracing to Amazon CloudWatch for an AWS AppSync GraphQL API.
     *
     * `LogConfig` is a property of the [AWS::AppSync::GraphQLApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html
     */
    interface LogConfigProperty {
        /**
         * The service role that AWS AppSync will assume to publish to Amazon CloudWatch Logs in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html#cfn-appsync-graphqlapi-logconfig-cloudwatchlogsrolearn
         */
        readonly cloudWatchLogsRoleArn?: string;
        /**
         * Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html#cfn-appsync-graphqlapi-logconfig-excludeverbosecontent
         */
        readonly excludeVerboseContent?: boolean | cdk.IResolvable;
        /**
         * The field logging level. Values can be NONE, ERROR, INFO, DEBUG, or ALL.
         *
         * - *NONE* : No field-level logs are captured.
         * - *ERROR* : Logs the following information *only* for the fields that are in the error category:
         *
         * - The error section in the server response.
         * - Field-level errors.
         * - The generated request/response functions that got resolved for error fields.
         * - *INFO* : Logs the following information *only* for the fields that are in the info and error categories:
         *
         * - Info-level messages.
         * - The user messages sent through `$util.log.info` and `console.log` .
         * - Field-level tracing and mapping logs are not shown.
         * - *DEBUG* : Logs the following information *only* for the fields that are in the debug, info, and error categories:
         *
         * - Debug-level messages.
         * - The user messages sent through `$util.log.info` , `$util.log.debug` , `console.log` , and `console.debug` .
         * - Field-level tracing and mapping logs are not shown.
         * - *ALL* : The following information is logged for all fields in the query:
         *
         * - Field-level tracing information.
         * - The generated request/response functions that were resolved for each field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-logconfig.html#cfn-appsync-graphqlapi-logconfig-fieldloglevel
         */
        readonly fieldLogLevel?: string;
    }
    /**
     * Describes an enhanced metrics configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-enhancedmetricsconfig.html
     */
    interface EnhancedMetricsConfigProperty {
        /**
         * Controls how data source metrics will be emitted to CloudWatch. Data source metrics include:.
         *
         * - *Requests* : The number of invocations that occured during a request.
         * - *Latency* : The time to complete a data source invocation.
         * - *Errors* : The number of errors that occurred during a data source invocation.
         *
         * These metrics can be emitted to CloudWatch per data source or for all data sources in the request. Metrics will be recorded by API ID and data source name. `dataSourceLevelMetricsBehavior` accepts one of these values at a time:
         *
         * - `FULL_REQUEST_DATA_SOURCE_METRICS` : Records and emits metric data for all data sources in the request.
         * - `PER_DATA_SOURCE_METRICS` : Records and emits metric data for data sources that have the `MetricsConfig` value set to `ENABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-enhancedmetricsconfig.html#cfn-appsync-graphqlapi-enhancedmetricsconfig-datasourcelevelmetricsbehavior
         */
        readonly dataSourceLevelMetricsBehavior: string;
        /**
         * Controls how operation metrics will be emitted to CloudWatch. Operation metrics include:.
         *
         * - *Requests* : The number of times a specified GraphQL operation was called.
         * - *GraphQL errors* : The number of GraphQL errors that occurred during a specified GraphQL operation.
         *
         * Metrics will be recorded by API ID and operation name. You can set the value to `ENABLED` or `DISABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-enhancedmetricsconfig.html#cfn-appsync-graphqlapi-enhancedmetricsconfig-operationlevelmetricsconfig
         */
        readonly operationLevelMetricsConfig: string;
        /**
         * Controls how resolver metrics will be emitted to CloudWatch. Resolver metrics include:.
         *
         * - *GraphQL errors* : The number of GraphQL errors that occurred.
         * - *Requests* : The number of invocations that occurred during a request.
         * - *Latency* : The time to complete a resolver invocation.
         * - *Cache hits* : The number of cache hits during a request.
         * - *Cache misses* : The number of cache misses during a request.
         *
         * These metrics can be emitted to CloudWatch per resolver or for all resolvers in the request. Metrics will be recorded by API ID and resolver name. `resolverLevelMetricsBehavior` accepts one of these values at a time:
         *
         * - `FULL_REQUEST_RESOLVER_METRICS` : Records and emits metric data for all resolvers in the request.
         * - `PER_RESOLVER_METRICS` : Records and emits metric data for resolvers that have the `MetricsConfig` value set to `ENABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-graphqlapi-enhancedmetricsconfig.html#cfn-appsync-graphqlapi-enhancedmetricsconfig-resolverlevelmetricsbehavior
         */
        readonly resolverLevelMetricsBehavior: string;
    }
}
/**
 * Properties for defining a `CfnGraphQLApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html
 */
export interface CfnGraphQLApiProps {
    /**
     * A list of additional authentication providers for the `GraphqlApi` API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-additionalauthenticationproviders
     */
    readonly additionalAuthenticationProviders?: Array<CfnGraphQLApi.AdditionalAuthenticationProviderProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that indicates whether the GraphQL API is a standard API ( `GRAPHQL` ) or merged API ( `MERGED` ).
     *
     * *WARNING* : If the `ApiType` has not been defined, *explicitly* setting it to `GRAPHQL` in a template/stack update will result in an API replacement and new DNS values.
     *
     * The following values are valid:
     *
     * `GRAPHQL | MERGED`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-apitype
     */
    readonly apiType?: string;
    /**
     * Security configuration for your GraphQL API.
     *
     * For allowed values (such as `API_KEY` , `AWS_IAM` , `AMAZON_COGNITO_USER_POOLS` , `OPENID_CONNECT` , or `AWS_LAMBDA` ), see [Security](https://docs.aws.amazon.com/appsync/latest/devguide/security.html) in the *AWS AppSync Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-authenticationtype
     */
    readonly authenticationType: string;
    /**
     * Enables and controls the enhanced metrics feature.
     *
     * Enhanced metrics emit granular data on API usage and performance such as AppSync request and error counts, latency, and cache hits/misses. All enhanced metric data is sent to your CloudWatch account, and you can configure the types of data that will be sent.
     *
     * Enhanced metrics can be configured at the resolver, data source, and operation levels. For more information, see [Monitoring and logging](https://docs.aws.amazon.com//appsync/latest/devguide/monitoring.html#cw-metrics) in the *AWS AppSync User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-enhancedmetricsconfig
     */
    readonly enhancedMetricsConfig?: CfnGraphQLApi.EnhancedMetricsConfigProperty | cdk.IResolvable;
    /**
     * A map containing the list of resources with their properties and environment variables.
     *
     * For more information, see [Environmental variables](https://docs.aws.amazon.com/appsync/latest/devguide/environmental-variables.html) .
     *
     * *Pattern* : `^[A-Za-z]+\\w*$\\`
     *
     * *Minimum* : 2
     *
     * *Maximum* : 64
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-environmentvariables
     */
    readonly environmentVariables?: cdk.IResolvable | Record<string, string>;
    /**
     * Sets the value of the GraphQL API to enable ( `ENABLED` ) or disable ( `DISABLED` ) introspection.
     *
     * If no value is provided, the introspection configuration will be set to `ENABLED` by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled.
     *
     * For more information about introspection, see [GraphQL introspection](https://docs.aws.amazon.com/https://graphql.org/learn/introspection/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-introspectionconfig
     */
    readonly introspectionConfig?: string;
    /**
     * A `LambdaAuthorizerConfig` holds configuration on how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode.
     *
     * Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-lambdaauthorizerconfig
     */
    readonly lambdaAuthorizerConfig?: cdk.IResolvable | CfnGraphQLApi.LambdaAuthorizerConfigProperty;
    /**
     * The Amazon CloudWatch Logs configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-logconfig
     */
    readonly logConfig?: cdk.IResolvable | CfnGraphQLApi.LogConfigProperty;
    /**
     * The AWS Identity and Access Management service role ARN for a merged API.
     *
     * The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the `AUTO_MERGE` to update the merged API endpoint with the source API changes automatically.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-mergedapiexecutionrolearn
     */
    readonly mergedApiExecutionRoleArn?: string;
    /**
     * The API name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-name
     */
    readonly name: string;
    /**
     * The OpenID Connect configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-openidconnectconfig
     */
    readonly openIdConnectConfig?: cdk.IResolvable | CfnGraphQLApi.OpenIDConnectConfigProperty;
    /**
     * The owner contact information for an API resource.
     *
     * This field accepts any string input with a length of 0 - 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-ownercontact
     */
    readonly ownerContact?: string;
    /**
     * The maximum depth a query can have in a single request.
     *
     * Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds. Note that fields can still be set to nullable or non-nullable. If a non-nullable field produces an error, the error will be thrown upwards to the first nullable field available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-querydepthlimit
     */
    readonly queryDepthLimit?: number;
    /**
     * The maximum number of resolvers that can be invoked in a single request.
     *
     * The default value is `0` (or unspecified), which will set the limit to `10000` . When specified, the limit value can be between `1` and `10000` . This field will produce a limit error if the operation falls out of bounds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-resolvercountlimit
     */
    readonly resolverCountLimit?: number;
    /**
     * An arbitrary set of tags (key-value pairs) for this GraphQL API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Optional authorization configuration for using Amazon Cognito user pools with your GraphQL endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-userpoolconfig
     */
    readonly userPoolConfig?: cdk.IResolvable | CfnGraphQLApi.UserPoolConfigProperty;
    /**
     * Sets the scope of the GraphQL API to public ( `GLOBAL` ) or private ( `PRIVATE` ).
     *
     * By default, the scope is set to `Global` if no value is provided.
     *
     * *WARNING* : If `Visibility` has not been defined, *explicitly* setting it to `GLOBAL` in a template/stack update will result in an API replacement and new DNS values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-visibility
     */
    readonly visibility?: string;
    /**
     * A flag indicating whether to use AWS X-Ray tracing for this `GraphqlApi` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlapi.html#cfn-appsync-graphqlapi-xrayenabled
     */
    readonly xrayEnabled?: boolean | cdk.IResolvable;
}
/**
 * The `AWS::AppSync::GraphQLSchema` resource is used for your AWS AppSync GraphQL schema that controls the data model for your API.
 *
 * Schema files are text written in Schema Definition Language (SDL) format. For more information about schema authoring, see [Designing a GraphQL API](https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html) in the *AWS AppSync Developer Guide* .
 *
 * > When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CloudFormation template. Changing the Amazon S3 file content without changing a property value will not result in an update operation.
 * >
 * > See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::AppSync::GraphQLSchema
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html
 */
export declare class CfnGraphQLSchema extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGraphQLSchema from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGraphQLSchema;
    /**
     * The ID value.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The AWS AppSync GraphQL API identifier to which you want to apply this schema.
     */
    apiId: string;
    /**
     * The text representation of a GraphQL schema in SDL format.
     */
    definition?: string;
    /**
     * The location of a GraphQL schema file in an Amazon S3 bucket.
     */
    definitionS3Location?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGraphQLSchemaProps);
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
 * Properties for defining a `CfnGraphQLSchema`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html
 */
export interface CfnGraphQLSchemaProps {
    /**
     * The AWS AppSync GraphQL API identifier to which you want to apply this schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-apiid
     */
    readonly apiId: string;
    /**
     * The text representation of a GraphQL schema in SDL format.
     *
     * For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-definition
     */
    readonly definition?: string;
    /**
     * The location of a GraphQL schema file in an Amazon S3 bucket.
     *
     * Use this if you want to provision with the schema living in Amazon S3 rather than embedding it in your CloudFormation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-graphqlschema.html#cfn-appsync-graphqlschema-definitions3location
     */
    readonly definitionS3Location?: string;
}
/**
 * The `AWS::AppSync::Resolver` resource defines the logical GraphQL resolver that you attach to fields in a schema.
 *
 * Request and response templates for resolvers are written in Apache Velocity Template Language (VTL) format. For more information about resolvers, see [Resolver Mapping Template Reference](https://docs.aws.amazon.com/appsync/latest/devguide/resolver-mapping-template-reference.html) .
 *
 * > When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. To cause this resource to be updated you must change a property value for this resource in the CloudFormation template. Changing the Amazon S3 file content without changing a property value will not result in an update operation.
 * >
 * > See [Update Behaviors of Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::AppSync::Resolver
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html
 */
export declare class CfnResolver extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolver from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolver;
    /**
     * The GraphQL field on a type that invokes the resolver.
     *
     * @cloudformationAttribute FieldName
     */
    readonly attrFieldName: string;
    /**
     * ARN of the resolver, such as `arn:aws:appsync:us-east-1:123456789012:apis/graphqlapiid/types/typename/resolvers/resolvername` .
     *
     * @cloudformationAttribute ResolverArn
     */
    readonly attrResolverArn: string;
    /**
     * The GraphQL type that invokes this resolver.
     *
     * @cloudformationAttribute TypeName
     */
    readonly attrTypeName: string;
    /**
     * The AWS AppSync GraphQL API to which you want to attach this resolver.
     */
    apiId: string;
    /**
     * The caching configuration for the resolver.
     */
    cachingConfig?: CfnResolver.CachingConfigProperty | cdk.IResolvable;
    /**
     * The `resolver` code that contains the request and response functions.
     */
    code?: string;
    /**
     * The Amazon S3 endpoint.
     */
    codeS3Location?: string;
    /**
     * The resolver data source name.
     */
    dataSourceName?: string;
    /**
     * The GraphQL field on a type that invokes the resolver.
     */
    fieldName: string;
    /**
     * The resolver type.
     */
    kind?: string;
    /**
     * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a `BatchInvoke` operation.
     */
    maxBatchSize?: number;
    /**
     * Enables or disables enhanced resolver metrics for specified resolvers.
     */
    metricsConfig?: string;
    /**
     * Functions linked with the pipeline resolver.
     */
    pipelineConfig?: cdk.IResolvable | CfnResolver.PipelineConfigProperty;
    /**
     * The request mapping template.
     */
    requestMappingTemplate?: string;
    /**
     * The location of a request mapping template in an Amazon S3 bucket.
     */
    requestMappingTemplateS3Location?: string;
    /**
     * The response mapping template.
     */
    responseMappingTemplate?: string;
    /**
     * The location of a response mapping template in an Amazon S3 bucket.
     */
    responseMappingTemplateS3Location?: string;
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     */
    runtime?: CfnResolver.AppSyncRuntimeProperty | cdk.IResolvable;
    /**
     * The `SyncConfig` for a resolver attached to a versioned data source.
     */
    syncConfig?: cdk.IResolvable | CfnResolver.SyncConfigProperty;
    /**
     * The GraphQL type that invokes this resolver.
     */
    typeName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResolverProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResolver {
    /**
     * Use the `PipelineConfig` property type to specify `PipelineConfig` for an AWS AppSync resolver.
     *
     * `PipelineConfig` is a property of the [AWS::AppSync::Resolver](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html
     */
    interface PipelineConfigProperty {
        /**
         * A list of `Function` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-pipelineconfig.html#cfn-appsync-resolver-pipelineconfig-functions
         */
        readonly functions?: Array<string>;
    }
    /**
     * Describes a Sync configuration for a resolver.
     *
     * Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html
     */
    interface SyncConfigProperty {
        /**
         * The Conflict Detection strategy to use.
         *
         * - *VERSION* : Detect conflicts based on object versions for this resolver.
         * - *NONE* : Do not detect conflicts when invoking this resolver.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html#cfn-appsync-resolver-syncconfig-conflictdetection
         */
        readonly conflictDetection: string;
        /**
         * The Conflict Resolution strategy to perform in the event of a conflict.
         *
         * - *OPTIMISTIC_CONCURRENCY* : Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
         * - *AUTOMERGE* : Resolve conflicts with the Automerge conflict resolution strategy.
         * - *LAMBDA* : Resolve conflicts with an AWS Lambda function supplied in the `LambdaConflictHandlerConfig` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html#cfn-appsync-resolver-syncconfig-conflicthandler
         */
        readonly conflictHandler?: string;
        /**
         * The `LambdaConflictHandlerConfig` when configuring `LAMBDA` as the Conflict Handler.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-syncconfig.html#cfn-appsync-resolver-syncconfig-lambdaconflicthandlerconfig
         */
        readonly lambdaConflictHandlerConfig?: cdk.IResolvable | CfnResolver.LambdaConflictHandlerConfigProperty;
    }
    /**
     * The `LambdaConflictHandlerConfig` when configuring LAMBDA as the Conflict Handler.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-lambdaconflicthandlerconfig.html
     */
    interface LambdaConflictHandlerConfigProperty {
        /**
         * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-lambdaconflicthandlerconfig.html#cfn-appsync-resolver-lambdaconflicthandlerconfig-lambdaconflicthandlerarn
         */
        readonly lambdaConflictHandlerArn?: string;
    }
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     *
     * Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html
     */
    interface AppSyncRuntimeProperty {
        /**
         * The `name` of the runtime to use.
         *
         * Currently, the only allowed value is `APPSYNC_JS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html#cfn-appsync-resolver-appsyncruntime-name
         */
        readonly name: string;
        /**
         * The `version` of the runtime to use.
         *
         * Currently, the only allowed version is `1.0.0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-appsyncruntime.html#cfn-appsync-resolver-appsyncruntime-runtimeversion
         */
        readonly runtimeVersion: string;
    }
    /**
     * The caching configuration for a resolver that has caching activated.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html
     */
    interface CachingConfigProperty {
        /**
         * The caching keys for a resolver that has caching activated.
         *
         * Valid values are entries from the `$context.arguments` , `$context.source` , and `$context.identity` maps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html#cfn-appsync-resolver-cachingconfig-cachingkeys
         */
        readonly cachingKeys?: Array<string>;
        /**
         * The TTL in seconds for a resolver that has caching activated.
         *
         * Valid values are 1–3,600 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-resolver-cachingconfig.html#cfn-appsync-resolver-cachingconfig-ttl
         */
        readonly ttl: number;
    }
}
/**
 * Properties for defining a `CfnResolver`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html
 */
export interface CfnResolverProps {
    /**
     * The AWS AppSync GraphQL API to which you want to attach this resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-apiid
     */
    readonly apiId: string;
    /**
     * The caching configuration for the resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-cachingconfig
     */
    readonly cachingConfig?: CfnResolver.CachingConfigProperty | cdk.IResolvable;
    /**
     * The `resolver` code that contains the request and response functions.
     *
     * When code is used, the `runtime` is required. The runtime value must be `APPSYNC_JS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-code
     */
    readonly code?: string;
    /**
     * The Amazon S3 endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-codes3location
     */
    readonly codeS3Location?: string;
    /**
     * The resolver data source name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-datasourcename
     */
    readonly dataSourceName?: string;
    /**
     * The GraphQL field on a type that invokes the resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-fieldname
     */
    readonly fieldName: string;
    /**
     * The resolver type.
     *
     * - *UNIT* : A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
     * - *PIPELINE* : A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of `Function` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-kind
     */
    readonly kind?: string;
    /**
     * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a `BatchInvoke` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-maxbatchsize
     */
    readonly maxBatchSize?: number;
    /**
     * Enables or disables enhanced resolver metrics for specified resolvers.
     *
     * Note that `MetricsConfig` won't be used unless the `resolverLevelMetricsBehavior` value is set to `PER_RESOLVER_METRICS` . If the `resolverLevelMetricsBehavior` is set to `FULL_REQUEST_RESOLVER_METRICS` instead, `MetricsConfig` will be ignored. However, you can still set its value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-metricsconfig
     */
    readonly metricsConfig?: string;
    /**
     * Functions linked with the pipeline resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-pipelineconfig
     */
    readonly pipelineConfig?: cdk.IResolvable | CfnResolver.PipelineConfigProperty;
    /**
     * The request mapping template.
     *
     * Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-requestmappingtemplate
     */
    readonly requestMappingTemplate?: string;
    /**
     * The location of a request mapping template in an Amazon S3 bucket.
     *
     * Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-requestmappingtemplates3location
     */
    readonly requestMappingTemplateS3Location?: string;
    /**
     * The response mapping template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-responsemappingtemplate
     */
    readonly responseMappingTemplate?: string;
    /**
     * The location of a response mapping template in an Amazon S3 bucket.
     *
     * Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-responsemappingtemplates3location
     */
    readonly responseMappingTemplateS3Location?: string;
    /**
     * Describes a runtime used by an AWS AppSync resolver or AWS AppSync function.
     *
     * Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-runtime
     */
    readonly runtime?: CfnResolver.AppSyncRuntimeProperty | cdk.IResolvable;
    /**
     * The `SyncConfig` for a resolver attached to a versioned data source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-syncconfig
     */
    readonly syncConfig?: cdk.IResolvable | CfnResolver.SyncConfigProperty;
    /**
     * The GraphQL type that invokes this resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-resolver.html#cfn-appsync-resolver-typename
     */
    readonly typeName: string;
}
/**
 * Describes the configuration of a source API.
 *
 * A source API is a GraphQL API that is linked to a merged API. There can be multiple source APIs attached to each merged API. When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API. Source APIs can originate from your account or from other accounts via Resource Access Manager.
 *
 * @cloudformationResource AWS::AppSync::SourceApiAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html
 */
export declare class CfnSourceApiAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSourceApiAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSourceApiAssociation;
    /**
     * The Amazon Resource Name (ARN) of the source API association.
     *
     * @cloudformationAttribute AssociationArn
     */
    readonly attrAssociationArn: string;
    /**
     * The ID generated by the AppSync service for the source API association.
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * The datetime value of the last successful merge of the source API association. The result will be in UTC format and your local time zone.
     *
     * @cloudformationAttribute LastSuccessfulMergeDate
     */
    readonly attrLastSuccessfulMergeDate: string;
    /**
     * The Amazon Resource Name (ARN) of the merged API.
     *
     * @cloudformationAttribute MergedApiArn
     */
    readonly attrMergedApiArn: string;
    /**
     * The ID of the merged API.
     *
     * @cloudformationAttribute MergedApiId
     */
    readonly attrMergedApiId: string;
    /**
     * The source API's Amazon Resource Name (ARN) value.
     *
     * @cloudformationAttribute SourceApiArn
     */
    readonly attrSourceApiArn: string;
    /**
     * The state of the source API association.
     *
     * The following values are valid:
     *
     * `MERGE_SCHEDULED | MERGE_FAILED | MERGE_SUCCESS | MERGE_IN_PROGRESS | AUTO_MERGE_SCHEDULE_FAILED | DELETION_SCHEDULED | DELETION_IN_PROGRESS | DELETION_FAILED`
     *
     * @cloudformationAttribute SourceApiAssociationStatus
     */
    readonly attrSourceApiAssociationStatus: string;
    /**
     * The message describing the state of the source API association.
     *
     * @cloudformationAttribute SourceApiAssociationStatusDetail
     */
    readonly attrSourceApiAssociationStatusDetail: string;
    /**
     * The ID of the source API.
     *
     * @cloudformationAttribute SourceApiId
     */
    readonly attrSourceApiId: string;
    /**
     * The description field of the association configuration.
     */
    description?: string;
    /**
     * The identifier of the AppSync Merged API.
     */
    mergedApiIdentifier?: string;
    /**
     * The `SourceApiAssociationConfig` object data.
     */
    sourceApiAssociationConfig?: cdk.IResolvable | CfnSourceApiAssociation.SourceApiAssociationConfigProperty;
    /**
     * The identifier of the AppSync Source API.
     */
    sourceApiIdentifier?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSourceApiAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSourceApiAssociation {
    /**
     * Describes properties used to specify configurations related to a source API.
     *
     * This is a property of the `AWS:AppSync:SourceApiAssociation` type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-sourceapiassociation-sourceapiassociationconfig.html
     */
    interface SourceApiAssociationConfigProperty {
        /**
         * The property that indicates which merging option is enabled in the source API association.
         *
         * Valid merge types are `MANUAL_MERGE` (default) and `AUTO_MERGE` . Manual merges are the default behavior and require the user to trigger any changes from the source APIs to the merged API manually. Auto merges subscribe the merged API to the changes performed on the source APIs so that any change in the source APIs are also made to the merged API. Auto merges use `MergedApiExecutionRoleArn` to perform merge operations.
         *
         * The following values are valid:
         *
         * `MANUAL_MERGE | AUTO_MERGE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-sourceapiassociation-sourceapiassociationconfig.html#cfn-appsync-sourceapiassociation-sourceapiassociationconfig-mergetype
         */
        readonly mergeType?: string;
    }
}
/**
 * Properties for defining a `CfnSourceApiAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html
 */
export interface CfnSourceApiAssociationProps {
    /**
     * The description field of the association configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html#cfn-appsync-sourceapiassociation-description
     */
    readonly description?: string;
    /**
     * The identifier of the AppSync Merged API.
     *
     * This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html#cfn-appsync-sourceapiassociation-mergedapiidentifier
     */
    readonly mergedApiIdentifier?: string;
    /**
     * The `SourceApiAssociationConfig` object data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html#cfn-appsync-sourceapiassociation-sourceapiassociationconfig
     */
    readonly sourceApiAssociationConfig?: cdk.IResolvable | CfnSourceApiAssociation.SourceApiAssociationConfigProperty;
    /**
     * The identifier of the AppSync Source API.
     *
     * This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-sourceapiassociation.html#cfn-appsync-sourceapiassociation-sourceapiidentifier
     */
    readonly sourceApiIdentifier?: string;
}
/**
 * The `AWS::AppSync::Api` resource creates an AWS AppSync API that you can use for an AWS AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.
 *
 * @cloudformationResource AWS::AppSync::Api
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html
 */
export declare class CfnApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApi from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApi;
    /**
     * The Amazon Resource Name (ARN) of the AWS AppSync Api.
     *
     * @cloudformationAttribute ApiArn
     */
    readonly attrApiArn: string;
    /**
     * The unique identifier for the AWS AppSync Api generated by the service.
     *
     * @cloudformationAttribute ApiId
     */
    readonly attrApiId: string;
    /**
     * A map of DNS names for the AppSync API.
     *
     * @cloudformationAttribute Dns
     */
    readonly attrDns: cdk.IResolvable;
    /**
     * The domain name of the Api's HTTP endpoint.
     *
     * @cloudformationAttribute Dns.Http
     */
    readonly attrDnsHttp: string;
    /**
     * The domain name of the Api's real-time endpoint.
     *
     * @cloudformationAttribute Dns.Realtime
     */
    readonly attrDnsRealtime: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
     */
    eventConfig?: CfnApi.EventConfigProperty | cdk.IResolvable;
    /**
     * The name of the `Api` .
     */
    name: string;
    /**
     * The owner contact information for an API resource.
     */
    ownerContact?: string;
    /**
     * A set of tags (key-value pairs) for this API.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApi {
    /**
     * Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html
     */
    interface EventConfigProperty {
        /**
         * A list of authorization providers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html#cfn-appsync-api-eventconfig-authproviders
         */
        readonly authProviders: Array<CfnApi.AuthProviderProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of valid authorization modes for the Event API connections.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html#cfn-appsync-api-eventconfig-connectionauthmodes
         */
        readonly connectionAuthModes: Array<CfnApi.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of valid authorization modes for the Event API publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html#cfn-appsync-api-eventconfig-defaultpublishauthmodes
         */
        readonly defaultPublishAuthModes: Array<CfnApi.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A list of valid authorization modes for the Event API subscriptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html#cfn-appsync-api-eventconfig-defaultsubscribeauthmodes
         */
        readonly defaultSubscribeAuthModes: Array<CfnApi.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The CloudWatch Logs configuration for the Event API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventconfig.html#cfn-appsync-api-eventconfig-logconfig
         */
        readonly logConfig?: CfnApi.EventLogConfigProperty | cdk.IResolvable;
    }
    /**
     * Describes an authorization provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authprovider.html
     */
    interface AuthProviderProperty {
        /**
         * The authorization type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authprovider.html#cfn-appsync-api-authprovider-authtype
         */
        readonly authType: string;
        /**
         * Describes an Amazon Cognito user pool configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authprovider.html#cfn-appsync-api-authprovider-cognitoconfig
         */
        readonly cognitoConfig?: CfnApi.CognitoConfigProperty | cdk.IResolvable;
        /**
         * A `LambdaAuthorizerConfig` specifies how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode.
         *
         * Be aware that an AWS AppSync API can have only one AWS Lambda authorizer configured at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authprovider.html#cfn-appsync-api-authprovider-lambdaauthorizerconfig
         */
        readonly lambdaAuthorizerConfig?: cdk.IResolvable | CfnApi.LambdaAuthorizerConfigProperty;
        /**
         * Describes an OpenID Connect (OIDC) configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authprovider.html#cfn-appsync-api-authprovider-openidconnectconfig
         */
        readonly openIdConnectConfig?: cdk.IResolvable | CfnApi.OpenIDConnectConfigProperty;
    }
    /**
     * Describes an OpenID Connect (OIDC) configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-openidconnectconfig.html
     */
    interface OpenIDConnectConfigProperty {
        /**
         * The number of milliseconds that a token is valid after being authenticated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-openidconnectconfig.html#cfn-appsync-api-openidconnectconfig-authttl
         */
        readonly authTtl?: number;
        /**
         * The client identifier of the relying party at the OpenID identity provider.
         *
         * This identifier is typically obtained when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that AWS AppSync can validate against multiple client identifiers at a time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-openidconnectconfig.html#cfn-appsync-api-openidconnectconfig-clientid
         */
        readonly clientId?: string;
        /**
         * The number of milliseconds that a token is valid after it's issued to a user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-openidconnectconfig.html#cfn-appsync-api-openidconnectconfig-iatttl
         */
        readonly iatTtl?: number;
        /**
         * The issuer for the OIDC configuration.
         *
         * The issuer returned by discovery must exactly match the value of `iss` in the ID token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-openidconnectconfig.html#cfn-appsync-api-openidconnectconfig-issuer
         */
        readonly issuer: string;
    }
    /**
     * Describes an Amazon Cognito configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-cognitoconfig.html
     */
    interface CognitoConfigProperty {
        /**
         * A regular expression for validating the incoming Amazon Cognito user pool app client ID.
         *
         * If this value isn't set, no filtering is applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-cognitoconfig.html#cfn-appsync-api-cognitoconfig-appidclientregex
         */
        readonly appIdClientRegex?: string;
        /**
         * The AWS Region in which the user pool was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-cognitoconfig.html#cfn-appsync-api-cognitoconfig-awsregion
         */
        readonly awsRegion: string;
        /**
         * The user pool ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-cognitoconfig.html#cfn-appsync-api-cognitoconfig-userpoolid
         */
        readonly userPoolId: string;
    }
    /**
     * A `LambdaAuthorizerConfig` specifies how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode.
     *
     * Be aware that an AWS AppSync API can have only one AWS Lambda authorizer configured at a time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-lambdaauthorizerconfig.html
     */
    interface LambdaAuthorizerConfigProperty {
        /**
         * The number of seconds a response should be cached for.
         *
         * The default is 0 seconds, which disables caching. If you don't specify a value for `authorizerResultTtlInSeconds` , the default value is used. The maximum value is one hour (3600 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-lambdaauthorizerconfig.html#cfn-appsync-api-lambdaauthorizerconfig-authorizerresultttlinseconds
         */
        readonly authorizerResultTtlInSeconds?: number;
        /**
         * The Amazon Resource Name (ARN) of the Lambda function to be called for authorization.
         *
         * This can be a standard Lambda ARN, a version ARN ( `.../v3` ), or an alias ARN.
         *
         * *Note* : This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To use the AWS Command Line Interface ( AWS CLI ), run the following:
         *
         * `aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-lambdaauthorizerconfig.html#cfn-appsync-api-lambdaauthorizerconfig-authorizeruri
         */
        readonly authorizerUri: string;
        /**
         * A regular expression for validation of tokens before the Lambda function is called.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-lambdaauthorizerconfig.html#cfn-appsync-api-lambdaauthorizerconfig-identityvalidationexpression
         */
        readonly identityValidationExpression?: string;
    }
    /**
     * Describes an authorization configuration.
     *
     * Use `AuthMode` to specify the publishing and subscription authorization configuration for an Event API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authmode.html
     */
    interface AuthModeProperty {
        /**
         * The authorization type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-authmode.html#cfn-appsync-api-authmode-authtype
         */
        readonly authType?: string;
    }
    /**
     * Describes the CloudWatch Logs configuration for the Event API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventlogconfig.html
     */
    interface EventLogConfigProperty {
        /**
         * The IAM service role that AWS AppSync assumes to publish CloudWatch Logs in your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventlogconfig.html#cfn-appsync-api-eventlogconfig-cloudwatchlogsrolearn
         */
        readonly cloudWatchLogsRoleArn: string;
        /**
         * The type of information to log for the Event API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-eventlogconfig.html#cfn-appsync-api-eventlogconfig-loglevel
         */
        readonly logLevel: string;
    }
    /**
     * A map of DNS names for the Api.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-dnsmap.html
     */
    interface DnsMapProperty {
        /**
         * The domain name of the Api's HTTP endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-dnsmap.html#cfn-appsync-api-dnsmap-http
         */
        readonly http?: string;
        /**
         * The domain name of the Api's real-time endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-api-dnsmap.html#cfn-appsync-api-dnsmap-realtime
         */
        readonly realtime?: string;
    }
}
/**
 * Properties for defining a `CfnApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html
 */
export interface CfnApiProps {
    /**
     * Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig
     */
    readonly eventConfig?: CfnApi.EventConfigProperty | cdk.IResolvable;
    /**
     * The name of the `Api` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-name
     */
    readonly name: string;
    /**
     * The owner contact information for an API resource.
     *
     * This field accepts any string input with a length of 0 - 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-ownercontact
     */
    readonly ownerContact?: string;
    /**
     * A set of tags (key-value pairs) for this API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::AppSync::ChannelNamespace` resource creates a channel namespace associated with an `Api` .
 *
 * The `ChannelNamespace` contains the definitions for code handlers for the `Api` .
 *
 * @cloudformationResource AWS::AppSync::ChannelNamespace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html
 */
export declare class CfnChannelNamespace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannelNamespace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannelNamespace;
    /**
     * The Amazon Resource Name (ARN) of the channel namespace.
     *
     * @cloudformationAttribute ChannelNamespaceArn
     */
    readonly attrChannelNamespaceArn: string;
    /**
     * The `Api` ID.
     */
    apiId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The event handler functions that run custom business logic to process published events and subscribe requests.
     */
    codeHandlers?: string;
    /**
     * The Amazon S3 endpoint where the code is located.
     */
    codeS3Location?: string;
    /**
     * The name of the channel namespace.
     */
    name: string;
    /**
     * The authorization mode to use for publishing messages on the channel namespace.
     */
    publishAuthModes?: Array<CfnChannelNamespace.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The authorization mode to use for subscribing to messages on the channel namespace.
     */
    subscribeAuthModes?: Array<CfnChannelNamespace.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A set of tags (key-value pairs) for this channel namespace.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelNamespaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnChannelNamespace {
    /**
     * Describes an authorization configuration.
     *
     * Use `AuthMode` to specify the publishing and subscription authorization configuration for an Event API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-authmode.html
     */
    interface AuthModeProperty {
        /**
         * The authorization type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appsync-channelnamespace-authmode.html#cfn-appsync-channelnamespace-authmode-authtype
         */
        readonly authType?: string;
    }
}
/**
 * Properties for defining a `CfnChannelNamespace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html
 */
export interface CfnChannelNamespaceProps {
    /**
     * The `Api` ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-apiid
     */
    readonly apiId: string;
    /**
     * The event handler functions that run custom business logic to process published events and subscribe requests.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-codehandlers
     */
    readonly codeHandlers?: string;
    /**
     * The Amazon S3 endpoint where the code is located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-codes3location
     */
    readonly codeS3Location?: string;
    /**
     * The name of the channel namespace.
     *
     * This name must be unique within the `Api` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-name
     */
    readonly name: string;
    /**
     * The authorization mode to use for publishing messages on the channel namespace.
     *
     * This configuration overrides the default `Api` authorization configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-publishauthmodes
     */
    readonly publishAuthModes?: Array<CfnChannelNamespace.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The authorization mode to use for subscribing to messages on the channel namespace.
     *
     * This configuration overrides the default `Api` authorization configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-subscribeauthmodes
     */
    readonly subscribeAuthModes?: Array<CfnChannelNamespace.AuthModeProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A set of tags (key-value pairs) for this channel namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
