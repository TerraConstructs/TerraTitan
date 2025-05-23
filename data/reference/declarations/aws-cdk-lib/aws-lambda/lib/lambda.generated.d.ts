import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Lambda::Alias` resource creates an [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.
 *
 * You can also map an alias to split invocation requests between two versions. Use the `RoutingConfig` parameter to specify a second version and the percentage of invocation requests that it receives.
 *
 * @cloudformationResource AWS::Lambda::Alias
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html
 */
export declare class CfnAlias extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlias from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlias;
    /**
     * The Amazon Resource Name (ARN) of the alias.
     *
     * @cloudformationAttribute AliasArn
     */
    readonly attrAliasArn: string;
    /**
     * A description of the alias.
     */
    description?: string;
    /**
     * The name or ARN of the Lambda function.
     */
    functionName: string;
    /**
     * The function version that the alias invokes.
     */
    functionVersion: string;
    /**
     * The name of the alias.
     */
    name: string;
    /**
     * Specifies a [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) configuration for a function's alias.
     */
    provisionedConcurrencyConfig?: cdk.IResolvable | CfnAlias.ProvisionedConcurrencyConfigurationProperty;
    /**
     * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) of the alias.
     */
    routingConfig?: CfnAlias.AliasRoutingConfigurationProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAliasProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAlias {
    /**
     * A provisioned concurrency configuration for a function's alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-provisionedconcurrencyconfiguration.html
     */
    interface ProvisionedConcurrencyConfigurationProperty {
        /**
         * The amount of provisioned concurrency to allocate for the alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-provisionedconcurrencyconfiguration.html#cfn-lambda-alias-provisionedconcurrencyconfiguration-provisionedconcurrentexecutions
         */
        readonly provisionedConcurrentExecutions: number;
    }
    /**
     * The [traffic-shifting](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) configuration of a Lambda function alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-aliasroutingconfiguration.html
     */
    interface AliasRoutingConfigurationProperty {
        /**
         * The second version, and the percentage of traffic that's routed to it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-aliasroutingconfiguration.html#cfn-lambda-alias-aliasroutingconfiguration-additionalversionweights
         */
        readonly additionalVersionWeights?: Array<cdk.IResolvable | CfnAlias.VersionWeightProperty> | cdk.IResolvable;
    }
    /**
     * The [traffic-shifting](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) configuration of a Lambda function alias.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html
     */
    interface VersionWeightProperty {
        /**
         * The qualifier of the second version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html#cfn-lambda-alias-versionweight-functionversion
         */
        readonly functionVersion: string;
        /**
         * The percentage of traffic that the alias routes to the second version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-alias-versionweight.html#cfn-lambda-alias-versionweight-functionweight
         */
        readonly functionWeight: number;
    }
}
/**
 * Properties for defining a `CfnAlias`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html
 */
export interface CfnAliasProps {
    /**
     * A description of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-description
     */
    readonly description?: string;
    /**
     * The name or ARN of the Lambda function.
     *
     * **Name formats** - *Function name* - `MyFunction` .
     * - *Function ARN* - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction` .
     * - *Partial ARN* - `123456789012:function:MyFunction` .
     *
     * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-functionname
     */
    readonly functionName: string;
    /**
     * The function version that the alias invokes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-functionversion
     */
    readonly functionVersion: string;
    /**
     * The name of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-name
     */
    readonly name: string;
    /**
     * Specifies a [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) configuration for a function's alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-provisionedconcurrencyconfig
     */
    readonly provisionedConcurrencyConfig?: cdk.IResolvable | CfnAlias.ProvisionedConcurrencyConfigurationProperty;
    /**
     * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) of the alias.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-alias.html#cfn-lambda-alias-routingconfig
     */
    readonly routingConfig?: CfnAlias.AliasRoutingConfigurationProperty | cdk.IResolvable;
}
/**
 * Details about a [Code signing configuration](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) .
 *
 * @cloudformationResource AWS::Lambda::CodeSigningConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html
 */
export declare class CfnCodeSigningConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCodeSigningConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCodeSigningConfig;
    /**
     * The Amazon Resource Name (ARN) of the code signing configuration.
     *
     * @cloudformationAttribute CodeSigningConfigArn
     */
    readonly attrCodeSigningConfigArn: string;
    /**
     * The code signing configuration ID.
     *
     * @cloudformationAttribute CodeSigningConfigId
     */
    readonly attrCodeSigningConfigId: string;
    /**
     * List of allowed publishers.
     */
    allowedPublishers: CfnCodeSigningConfig.AllowedPublishersProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The code signing policy controls the validation failure action for signature mismatch or expiry.
     */
    codeSigningPolicies?: CfnCodeSigningConfig.CodeSigningPoliciesProperty | cdk.IResolvable;
    /**
     * Code signing configuration description.
     */
    description?: string;
    /**
     * A list of tags to add to the code signing configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCodeSigningConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCodeSigningConfig {
    /**
     * List of signing profiles that can sign a code package.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html
     */
    interface AllowedPublishersProperty {
        /**
         * The Amazon Resource Name (ARN) for each of the signing profiles.
         *
         * A signing profile defines a trusted user who can sign a code package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-allowedpublishers.html#cfn-lambda-codesigningconfig-allowedpublishers-signingprofileversionarns
         */
        readonly signingProfileVersionArns: Array<string>;
    }
    /**
     * Code signing configuration [policies](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies) specify the validation failure action for signature mismatch or expiry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html
     */
    interface CodeSigningPoliciesProperty {
        /**
         * Code signing configuration policy for deployment validation failure.
         *
         * If you set the policy to `Enforce` , Lambda blocks the deployment request if signature validation checks fail. If you set the policy to `Warn` , Lambda allows the deployment and creates a CloudWatch log.
         *
         * Default value: `Warn`
         *
         * @default - "Warn"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-codesigningconfig-codesigningpolicies.html#cfn-lambda-codesigningconfig-codesigningpolicies-untrustedartifactondeployment
         */
        readonly untrustedArtifactOnDeployment: string;
    }
}
/**
 * Properties for defining a `CfnCodeSigningConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html
 */
export interface CfnCodeSigningConfigProps {
    /**
     * List of allowed publishers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-allowedpublishers
     */
    readonly allowedPublishers: CfnCodeSigningConfig.AllowedPublishersProperty | cdk.IResolvable;
    /**
     * The code signing policy controls the validation failure action for signature mismatch or expiry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-codesigningpolicies
     */
    readonly codeSigningPolicies?: CfnCodeSigningConfig.CodeSigningPoliciesProperty | cdk.IResolvable;
    /**
     * Code signing configuration description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-description
     */
    readonly description?: string;
    /**
     * A list of tags to add to the code signing configuration.
     *
     * > You must have the `lambda:TagResource` , `lambda:UntagResource` , and `lambda:ListTags` permissions for your [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the AWS CloudFormation stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-codesigningconfig.html#cfn-lambda-codesigningconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Lambda::EventInvokeConfig` resource configures options for [asynchronous invocation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html) on a version or an alias.
 *
 * By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it.
 *
 * @cloudformationResource AWS::Lambda::EventInvokeConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html
 */
export declare class CfnEventInvokeConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventInvokeConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventInvokeConfig;
    /**
     * A destination for events after they have been sent to a function for processing.
     */
    destinationConfig?: CfnEventInvokeConfig.DestinationConfigProperty | cdk.IResolvable;
    /**
     * The name of the Lambda function.
     */
    functionName: string;
    /**
     * The maximum age of a request that Lambda sends to a function for processing.
     */
    maximumEventAgeInSeconds?: number;
    /**
     * The maximum number of times to retry when the function returns an error.
     */
    maximumRetryAttempts?: number;
    /**
     * The identifier of a version or alias.
     */
    qualifier: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventInvokeConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventInvokeConfig {
    /**
     * A configuration object that specifies the destination of an event after Lambda processes it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html
     */
    interface DestinationConfigProperty {
        /**
         * The destination configuration for failed invocations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig-onfailure
         */
        readonly onFailure?: cdk.IResolvable | CfnEventInvokeConfig.OnFailureProperty;
        /**
         * The destination configuration for successful invocations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-destinationconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig-onsuccess
         */
        readonly onSuccess?: cdk.IResolvable | CfnEventInvokeConfig.OnSuccessProperty;
    }
    /**
     * A destination for events that were processed successfully.
     *
     * To retain records of successful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations) , you can configure an Amazon SNS topic, Amazon SQS queue, Lambda function, or Amazon EventBridge event bus as the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onsuccess.html
     */
    interface OnSuccessProperty {
        /**
         * The Amazon Resource Name (ARN) of the destination resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onsuccess.html#cfn-lambda-eventinvokeconfig-onsuccess-destination
         */
        readonly destination: string;
    }
    /**
     * A destination for events that failed processing.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onfailure.html
     */
    interface OnFailureProperty {
        /**
         * The Amazon Resource Name (ARN) of the destination resource.
         *
         * To retain records of unsuccessful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations) , you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
         *
         * To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html) , [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html) , [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination) , you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventinvokeconfig-onfailure.html#cfn-lambda-eventinvokeconfig-onfailure-destination
         */
        readonly destination: string;
    }
}
/**
 * Properties for defining a `CfnEventInvokeConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html
 */
export interface CfnEventInvokeConfigProps {
    /**
     * A destination for events after they have been sent to a function for processing.
     *
     * **Destinations** - *Function* - The Amazon Resource Name (ARN) of a Lambda function.
     * - *Queue* - The ARN of a standard SQS queue.
     * - *Bucket* - The ARN of an Amazon S3 bucket.
     * - *Topic* - The ARN of a standard SNS topic.
     * - *Event Bus* - The ARN of an Amazon EventBridge event bus.
     *
     * > S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-destinationconfig
     */
    readonly destinationConfig?: CfnEventInvokeConfig.DestinationConfigProperty | cdk.IResolvable;
    /**
     * The name of the Lambda function.
     *
     * *Minimum* : `1`
     *
     * *Maximum* : `64`
     *
     * *Pattern* : `([a-zA-Z0-9-_]+)`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-functionname
     */
    readonly functionName: string;
    /**
     * The maximum age of a request that Lambda sends to a function for processing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-maximumeventageinseconds
     */
    readonly maximumEventAgeInSeconds?: number;
    /**
     * The maximum number of times to retry when the function returns an error.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-maximumretryattempts
     */
    readonly maximumRetryAttempts?: number;
    /**
     * The identifier of a version or alias.
     *
     * - *Version* - A version number.
     * - *Alias* - An alias name.
     * - *Latest* - To specify the unpublished version, use `$LATEST` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventinvokeconfig.html#cfn-lambda-eventinvokeconfig-qualifier
     */
    readonly qualifier: string;
}
/**
 * The `AWS::Lambda::EventSourceMapping` resource creates a mapping between an event source and an AWS Lambda function.
 *
 * Lambda reads items from the event source and triggers the function.
 *
 * For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
 *
 * - [Configuring a Dynamo DB stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping)
 * - [Configuring a Kinesis stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping)
 * - [Configuring an SQS queue as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource)
 * - [Configuring an MQ broker as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping)
 * - [Configuring MSK as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html)
 * - [Configuring Self-Managed Apache Kafka as an event source](https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html)
 * - [Configuring Amazon DocumentDB as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)
 *
 * @cloudformationResource AWS::Lambda::EventSourceMapping
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html
 */
export declare class CfnEventSourceMapping extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventSourceMapping from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventSourceMapping;
    /**
     * The Amazon Resource Name (ARN) of the event source mapping.
     *
     * @cloudformationAttribute EventSourceMappingArn
     */
    readonly attrEventSourceMappingArn: string;
    /**
     * The event source mapping's ID.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
     */
    amazonManagedKafkaEventSourceConfig?: CfnEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty | cdk.IResolvable;
    /**
     * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function.
     */
    batchSize?: number;
    /**
     * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.
     */
    bisectBatchOnFunctionError?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
     */
    destinationConfig?: CfnEventSourceMapping.DestinationConfigProperty | cdk.IResolvable;
    /**
     * Specific configuration settings for a DocumentDB event source.
     */
    documentDbEventSourceConfig?: CfnEventSourceMapping.DocumentDBEventSourceConfigProperty | cdk.IResolvable;
    /**
     * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the event source.
     */
    eventSourceArn?: string;
    /**
     * An object that defines the filter criteria that determine whether Lambda should process an event.
     */
    filterCriteria?: CfnEventSourceMapping.FilterCriteriaProperty | cdk.IResolvable;
    /**
     * The name or ARN of the Lambda function.
     */
    functionName: string;
    /**
     * (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
     */
    functionResponseTypes?: Array<string>;
    /**
     * The ARN of the AWS Key Management Service ( AWS KMS ) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics) .
     */
    kmsKeyArn?: string;
    /**
     * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     */
    maximumBatchingWindowInSeconds?: number;
    /**
     * (Kinesis and DynamoDB Streams only) Discard records older than the specified age.
     */
    maximumRecordAgeInSeconds?: number;
    /**
     * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries.
     */
    maximumRetryAttempts?: number;
    /**
     * The metrics configuration for your event source.
     */
    metricsConfig?: cdk.IResolvable | CfnEventSourceMapping.MetricsConfigProperty;
    /**
     * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard.
     */
    parallelizationFactor?: number;
    /**
     * (Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source.
     */
    provisionedPollerConfig?: cdk.IResolvable | CfnEventSourceMapping.ProvisionedPollerConfigProperty;
    /**
     * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
     */
    queues?: Array<string>;
    /**
     * (Amazon SQS only) The scaling configuration for the event source.
     */
    scalingConfig?: cdk.IResolvable | CfnEventSourceMapping.ScalingConfigProperty;
    /**
     * The self-managed Apache Kafka cluster for your event source.
     */
    selfManagedEventSource?: cdk.IResolvable | CfnEventSourceMapping.SelfManagedEventSourceProperty;
    /**
     * Specific configuration settings for a self-managed Apache Kafka event source.
     */
    selfManagedKafkaEventSourceConfig?: cdk.IResolvable | CfnEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty;
    /**
     * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
     */
    sourceAccessConfigurations?: Array<cdk.IResolvable | CfnEventSourceMapping.SourceAccessConfigurationProperty> | cdk.IResolvable;
    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
     */
    startingPosition?: string;
    /**
     * With `StartingPosition` set to `AT_TIMESTAMP` , the time from which to start reading, in Unix time seconds.
     */
    startingPositionTimestamp?: number;
    /**
     * A list of tags to add to the event source mapping.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the Kafka topic.
     */
    topics?: Array<string>;
    /**
     * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources.
     */
    tumblingWindowInSeconds?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventSourceMappingProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventSourceMapping {
    /**
     * (Amazon SQS only) The scaling configuration for the event source.
     *
     * To remove the configuration, pass an empty value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html
     */
    interface ScalingConfigProperty {
        /**
         * Limits the number of concurrent instances that the Amazon SQS event source can invoke.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html#cfn-lambda-eventsourcemapping-scalingconfig-maximumconcurrency
         */
        readonly maximumConcurrency?: number;
    }
    /**
     * The self-managed Apache Kafka cluster for your event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html
     */
    interface SelfManagedEventSourceProperty {
        /**
         * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html#cfn-lambda-eventsourcemapping-selfmanagedeventsource-endpoints
         */
        readonly endpoints?: CfnEventSourceMapping.EndpointsProperty | cdk.IResolvable;
    }
    /**
     * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html
     */
    interface EndpointsProperty {
        /**
         * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html#cfn-lambda-eventsourcemapping-endpoints-kafkabootstrapservers
         */
        readonly kafkaBootstrapServers?: Array<string>;
    }
    /**
     * An object that contains the filters for an event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html
     */
    interface FilterCriteriaProperty {
        /**
         * A list of filters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html#cfn-lambda-eventsourcemapping-filtercriteria-filters
         */
        readonly filters?: Array<CfnEventSourceMapping.FilterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A structure within a `FilterCriteria` object that defines an event filtering pattern.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html
     */
    interface FilterProperty {
        /**
         * A filter pattern.
         *
         * For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html#cfn-lambda-eventsourcemapping-filter-pattern
         */
        readonly pattern?: string;
    }
    /**
     * Specific configuration settings for a self-managed Apache Kafka event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html
     */
    interface SelfManagedKafkaEventSourceConfigProperty {
        /**
         * The identifier for the Kafka consumer group to join.
         *
         * The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html#cfn-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig-consumergroupid
         */
        readonly consumerGroupId?: string;
    }
    /**
     * Specific configuration settings for a DocumentDB event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html
     */
    interface DocumentDBEventSourceConfigProperty {
        /**
         * The name of the collection to consume within the database.
         *
         * If you do not specify a collection, Lambda consumes all collections.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-collectionname
         */
        readonly collectionName?: string;
        /**
         * The name of the database to consume within the DocumentDB cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-databasename
         */
        readonly databaseName?: string;
        /**
         * Determines what DocumentDB sends to your event stream during document update operations.
         *
         * If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-fulldocument
         */
        readonly fullDocument?: string;
    }
    /**
     * A configuration object that specifies the destination of an event after Lambda processes it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-destinationconfig.html
     */
    interface DestinationConfigProperty {
        /**
         * The destination configuration for failed invocations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-destinationconfig.html#cfn-lambda-eventsourcemapping-destinationconfig-onfailure
         */
        readonly onFailure?: cdk.IResolvable | CfnEventSourceMapping.OnFailureProperty;
    }
    /**
     * A destination for events that failed processing.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html
     */
    interface OnFailureProperty {
        /**
         * The Amazon Resource Name (ARN) of the destination resource.
         *
         * To retain records of unsuccessful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations) , you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
         *
         * To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html) , [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html) , [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination) , you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html#cfn-lambda-eventsourcemapping-onfailure-destination
         */
        readonly destination?: string;
    }
    /**
     * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html
     */
    interface AmazonManagedKafkaEventSourceConfigProperty {
        /**
         * The identifier for the Kafka consumer group to join.
         *
         * The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-consumergroupid
         */
        readonly consumerGroupId?: string;
    }
    /**
     * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html
     */
    interface SourceAccessConfigurationProperty {
        /**
         * The type of authentication protocol, VPC components, or virtual host for your event source. For example: `"Type":"SASL_SCRAM_512_AUTH"` .
         *
         * - `BASIC_AUTH` – (Amazon MQ) The AWS Secrets Manager secret that stores your broker credentials.
         * - `BASIC_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
         * - `VPC_SUBNET` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
         * - `VPC_SECURITY_GROUP` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
         * - `SASL_SCRAM_256_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
         * - `SASL_SCRAM_512_AUTH` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
         * - `VIRTUAL_HOST` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
         * - `CLIENT_CERTIFICATE_TLS_AUTH` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
         * - `SERVER_ROOT_CA_CERTIFICATE` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html#cfn-lambda-eventsourcemapping-sourceaccessconfiguration-type
         */
        readonly type?: string;
        /**
         * The value for your chosen configuration in `Type` .
         *
         * For example: `"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html#cfn-lambda-eventsourcemapping-sourceaccessconfiguration-uri
         */
        readonly uri?: string;
    }
    /**
     * The [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode) configuration for the event source. Use provisioned mode to customize the minimum and maximum number of event pollers for your event source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-provisionedpollerconfig.html
     */
    interface ProvisionedPollerConfigProperty {
        /**
         * The maximum number of event pollers this event source can scale up to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-provisionedpollerconfig.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig-maximumpollers
         */
        readonly maximumPollers?: number;
        /**
         * The minimum number of event pollers this event source can scale down to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-provisionedpollerconfig.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig-minimumpollers
         */
        readonly minimumPollers?: number;
    }
    /**
     * The metrics configuration for your event source.
     *
     * Use this configuration object to define which metrics you want your event source mapping to produce.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-metricsconfig.html
     */
    interface MetricsConfigProperty {
        /**
         * The metrics you want your event source mapping to produce.
         *
         * Include `EventCount` to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-metricsconfig.html#cfn-lambda-eventsourcemapping-metricsconfig-metrics
         */
        readonly metrics?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnEventSourceMapping`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html
 */
export interface CfnEventSourceMappingProps {
    /**
     * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig
     */
    readonly amazonManagedKafkaEventSourceConfig?: CfnEventSourceMapping.AmazonManagedKafkaEventSourceConfigProperty | cdk.IResolvable;
    /**
     * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function.
     *
     * Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
     *
     * - *Amazon Kinesis* – Default 100. Max 10,000.
     * - *Amazon DynamoDB Streams* – Default 100. Max 10,000.
     * - *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
     * - *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
     * - *Self-managed Apache Kafka* – Default 100. Max 10,000.
     * - *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
     * - *DocumentDB* – Default 100. Max 10,000.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-batchsize
     */
    readonly batchSize?: number;
    /**
     * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.
     *
     * The default value is false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-bisectbatchonfunctionerror
     */
    readonly bisectBatchOnFunctionError?: boolean | cdk.IResolvable;
    /**
     * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-destinationconfig
     */
    readonly destinationConfig?: CfnEventSourceMapping.DestinationConfigProperty | cdk.IResolvable;
    /**
     * Specific configuration settings for a DocumentDB event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig
     */
    readonly documentDbEventSourceConfig?: CfnEventSourceMapping.DocumentDBEventSourceConfigProperty | cdk.IResolvable;
    /**
     * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
     *
     * Default: True
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the event source.
     *
     * - *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
     * - *Amazon DynamoDB Streams* – The ARN of the stream.
     * - *Amazon Simple Queue Service* – The ARN of the queue.
     * - *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc) ).
     * - *Amazon MQ* – The ARN of the broker.
     * - *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-eventsourcearn
     */
    readonly eventSourceArn?: string;
    /**
     * An object that defines the filter criteria that determine whether Lambda should process an event.
     *
     * For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-filtercriteria
     */
    readonly filterCriteria?: CfnEventSourceMapping.FilterCriteriaProperty | cdk.IResolvable;
    /**
     * The name or ARN of the Lambda function.
     *
     * **Name formats** - *Function name* – `MyFunction` .
     * - *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction` .
     * - *Version or Alias ARN* – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD` .
     * - *Partial ARN* – `123456789012:function:MyFunction` .
     *
     * The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-functionname
     */
    readonly functionName: string;
    /**
     * (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
     *
     * Valid Values: `ReportBatchItemFailures`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-functionresponsetypes
     */
    readonly functionResponseTypes?: Array<string>;
    /**
     * The ARN of the AWS Key Management Service ( AWS KMS ) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     *
     * *Default ( Kinesis , DynamoDB , Amazon SQS event sources)* : 0
     *
     * *Default ( Amazon MSK , Kafka, Amazon MQ , Amazon DocumentDB event sources)* : 500 ms
     *
     * *Related setting:* For Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumbatchingwindowinseconds
     */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
     * (Kinesis and DynamoDB Streams only) Discard records older than the specified age.
     *
     * The default value is -1,
     * which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
     *
     * > The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumrecordageinseconds
     */
    readonly maximumRecordAgeInSeconds?: number;
    /**
     * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries.
     *
     * The default value is -1,
     * which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumretryattempts
     */
    readonly maximumRetryAttempts?: number;
    /**
     * The metrics configuration for your event source.
     *
     * For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-metricsconfig
     */
    readonly metricsConfig?: cdk.IResolvable | CfnEventSourceMapping.MetricsConfigProperty;
    /**
     * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard.
     *
     * The default value is 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-parallelizationfactor
     */
    readonly parallelizationFactor?: number;
    /**
     * (Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source.
     *
     * For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig
     */
    readonly provisionedPollerConfig?: cdk.IResolvable | CfnEventSourceMapping.ProvisionedPollerConfigProperty;
    /**
     * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-queues
     */
    readonly queues?: Array<string>;
    /**
     * (Amazon SQS only) The scaling configuration for the event source.
     *
     * For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-scalingconfig
     */
    readonly scalingConfig?: cdk.IResolvable | CfnEventSourceMapping.ScalingConfigProperty;
    /**
     * The self-managed Apache Kafka cluster for your event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedeventsource
     */
    readonly selfManagedEventSource?: cdk.IResolvable | CfnEventSourceMapping.SelfManagedEventSourceProperty;
    /**
     * Specific configuration settings for a self-managed Apache Kafka event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig
     */
    readonly selfManagedKafkaEventSourceConfig?: cdk.IResolvable | CfnEventSourceMapping.SelfManagedKafkaEventSourceConfigProperty;
    /**
     * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-sourceaccessconfigurations
     */
    readonly sourceAccessConfigurations?: Array<cdk.IResolvable | CfnEventSourceMapping.SourceAccessConfigurationProperty> | cdk.IResolvable;
    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
     *
     * - *LATEST* - Read only new records.
     * - *TRIM_HORIZON* - Process all available records.
     * - *AT_TIMESTAMP* - Specify a time from which to start reading records.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-startingposition
     */
    readonly startingPosition?: string;
    /**
     * With `StartingPosition` set to `AT_TIMESTAMP` , the time from which to start reading, in Unix time seconds.
     *
     * `StartingPositionTimestamp` cannot be in the future.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-startingpositiontimestamp
     */
    readonly startingPositionTimestamp?: number;
    /**
     * A list of tags to add to the event source mapping.
     *
     * > You must have the `lambda:TagResource` , `lambda:UntagResource` , and `lambda:ListTags` permissions for your [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the AWS CloudFormation stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the Kafka topic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-topics
     */
    readonly topics?: Array<string>;
    /**
     * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources.
     *
     * A value of 0 seconds indicates no tumbling window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tumblingwindowinseconds
     */
    readonly tumblingWindowInSeconds?: number;
}
/**
 * The `AWS::Lambda::Function` resource creates a Lambda function.
 *
 * To create a function, you need a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) and an [execution role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html) . The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
 *
 * You set the package type to `Image` if the deployment package is a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) . For these functions, include the URI of the container image in the Amazon ECR registry in the [`ImageUri` property of the `Code` property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri) . You do not need to specify the handler and runtime properties.
 *
 * You set the package type to `Zip` if the deployment package is a [.zip file archive](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip) . For these functions, specify the Amazon S3 location of your .zip file in the `Code` property. Alternatively, for Node.js and Python functions, you can define your function inline in the [`ZipFile` property of the `Code` property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile) . In both cases, you must also specify the handler and runtime properties.
 *
 * You can use [code signing](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html) if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with `UpdateFunctionCode` , Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
 *
 * When you update a `AWS::Lambda::Function` resource, CloudFormation calls the [UpdateFunctionConfiguration](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionConfiguration.html) and [UpdateFunctionCode](https://docs.aws.amazon.com/lambda/latest/api/API_UpdateFunctionCode.html) Lambda APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CloudFormation update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the `$LATEST` version.
 *
 * Note that you configure [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html) on a `AWS::Lambda::Version` or a `AWS::Lambda::Alias` .
 *
 * For a complete introduction to Lambda functions, see [What is Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/lambda-welcome.html) in the *Lambda developer guide.*
 *
 * @cloudformationResource AWS::Lambda::Function
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html
 */
export declare class CfnFunction extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFunction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFunction;
    /**
     * The Amazon Resource Name (ARN) of the function.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     *
     * @cloudformationAttribute SnapStartResponse
     */
    readonly attrSnapStartResponse: cdk.IResolvable;
    /**
     * When set to ``PublishedVersions``, Lambda creates a snapshot of the execution environment when you publish a function version.
     *
     * @cloudformationAttribute SnapStartResponse.ApplyOn
     */
    readonly attrSnapStartResponseApplyOn: string;
    /**
     * When you provide a [qualified Amazon Resource Name (ARN)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using), this response element indicates whether SnapStart is activated for the specified function version.
     *
     * @cloudformationAttribute SnapStartResponse.OptimizationStatus
     */
    readonly attrSnapStartResponseOptimizationStatus: string;
    /**
     * The instruction set architecture that the function supports.
     */
    architectures?: Array<string>;
    /**
     * The code for the function. You can define your function code in multiple ways:.
     */
    code: CfnFunction.CodeProperty | cdk.IResolvable;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration.
     */
    codeSigningConfigArn?: string;
    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.
     */
    deadLetterConfig?: CfnFunction.DeadLetterConfigProperty | cdk.IResolvable;
    /**
     * A description of the function.
     */
    description?: string;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    environment?: CfnFunction.EnvironmentProperty | cdk.IResolvable;
    /**
     * The size of the function's `/tmp` directory in MB.
     */
    ephemeralStorage?: CfnFunction.EphemeralStorageProperty | cdk.IResolvable;
    /**
     * Connection settings for an Amazon EFS file system.
     */
    fileSystemConfigs?: Array<CfnFunction.FileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the Lambda function, up to 64 characters in length.
     */
    functionName?: string;
    /**
     * The name of the method within your code that Lambda calls to run your function.
     */
    handler?: string;
    /**
     * Configuration values that override the container image Dockerfile settings.
     */
    imageConfig?: CfnFunction.ImageConfigProperty | cdk.IResolvable;
    /**
     * The ARN of the AWS Key Management Service ( AWS KMS ) customer managed key that's used to encrypt the following resources:.
     */
    kmsKeyArn?: string;
    /**
     * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
     */
    layers?: Array<string>;
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     */
    loggingConfig?: cdk.IResolvable | CfnFunction.LoggingConfigProperty;
    /**
     * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
     */
    memorySize?: number;
    /**
     * The type of deployment package.
     */
    packageType?: string;
    /**
     * The status of your function's recursive loop detection configuration.
     */
    recursiveLoop?: string;
    /**
     * The number of simultaneous executions to reserve for the function.
     */
    reservedConcurrentExecutions?: number;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    role: string;
    /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) . Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
     */
    runtime?: string;
    /**
     * Sets the runtime management configuration for a function's version.
     */
    runtimeManagementConfig?: cdk.IResolvable | CfnFunction.RuntimeManagementConfigProperty;
    /**
     * The function's [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    snapStart?: cdk.IResolvable | CfnFunction.SnapStartProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it.
     */
    timeout?: number;
    /**
     * Set `Mode` to `Active` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) .
     */
    tracingConfig?: cdk.IResolvable | CfnFunction.TracingConfigProperty;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
     */
    vpcConfig?: cdk.IResolvable | CfnFunction.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFunctionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFunction {
    /**
     * Configuration values that override the container image Dockerfile settings.
     *
     * For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html
     */
    interface ImageConfigProperty {
        /**
         * Specifies parameters that you want to pass in with ENTRYPOINT.
         *
         * You can specify a maximum of 1,500 parameters in the list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html#cfn-lambda-function-imageconfig-command
         */
        readonly command?: Array<string>;
        /**
         * Specifies the entry point to their application, which is typically the location of the runtime executable.
         *
         * You can specify a maximum of 1,500 string entries in the list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html#cfn-lambda-function-imageconfig-entrypoint
         */
        readonly entryPoint?: Array<string>;
        /**
         * Specifies the working directory.
         *
         * The length of the directory string cannot exceed 1,000 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-imageconfig.html#cfn-lambda-function-imageconfig-workingdirectory
         */
        readonly workingDirectory?: string;
    }
    /**
     * The function's [AWS X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) tracing configuration. To sample and record incoming requests, set `Mode` to `Active` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tracingconfig.html
     */
    interface TracingConfigProperty {
        /**
         * The tracing mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-tracingconfig.html#cfn-lambda-function-tracingconfig-mode
         */
        readonly mode?: string;
    }
    /**
     * The VPC security groups and subnets that are attached to a Lambda function.
     *
     * When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC. For more information, see [VPC Settings](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html) .
     *
     * > When you delete a function, AWS CloudFormation monitors the state of its network interfaces and waits for Lambda to delete them before proceeding. If the VPC is defined in the same stack, the network interfaces need to be deleted by Lambda before AWS CloudFormation can delete the VPC's resources.
     * >
     * > To monitor network interfaces, AWS CloudFormation needs the `ec2:DescribeNetworkInterfaces` permission. It obtains this from the user or role that modifies the stack. If you don't provide this permission, AWS CloudFormation does not wait for network interfaces to be deleted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html#cfn-lambda-function-vpcconfig-ipv6allowedfordualstack
         */
        readonly ipv6AllowedForDualStack?: boolean | cdk.IResolvable;
        /**
         * A list of VPC security group IDs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html#cfn-lambda-function-vpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of VPC subnet IDs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-vpcconfig.html#cfn-lambda-function-vpcconfig-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * The [dead-letter queue](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq) for failed asynchronous invocations.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-deadletterconfig.html
     */
    interface DeadLetterConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-deadletterconfig.html#cfn-lambda-function-deadletterconfig-targetarn
         */
        readonly targetArn?: string;
    }
    /**
     * Sets the runtime management configuration for a function's version.
     *
     * For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html
     */
    interface RuntimeManagementConfigProperty {
        /**
         * The ARN of the runtime version you want the function to use.
         *
         * > This is only required if you're using the *Manual* runtime update mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html#cfn-lambda-function-runtimemanagementconfig-runtimeversionarn
         */
        readonly runtimeVersionArn?: string;
        /**
         * Specify the runtime update mode.
         *
         * - *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase) . This is the best choice for most customers to ensure they always benefit from runtime updates.
         * - *FunctionUpdate* - Lambda updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
         * - *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback) .
         *
         * *Valid Values* : `Auto` | `FunctionUpdate` | `Manual`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-runtimemanagementconfig.html#cfn-lambda-function-runtimemanagementconfig-updateruntimeon
         */
        readonly updateRuntimeOn: string;
    }
    /**
     * The function's [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html
     */
    interface SnapStartProperty {
        /**
         * Set `ApplyOn` to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstart.html#cfn-lambda-function-snapstart-applyon
         */
        readonly applyOn: string;
    }
    /**
     * The [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) for a Lambda function. To deploy a function defined as a container image, you specify the location of a container image in the Amazon ECR registry. For a .zip file deployment package, you can specify the location of an object in Amazon S3. For Node.js and Python functions, you can specify the function code inline in the template.
     *
     * > When you specify source code inline for a Node.js function, the `index` file that AWS CloudFormation creates uses the extension `.js` . This means that Lambda treats the file as a CommonJS module. ES modules aren't supported for inline functions.
     *
     * Changes to a deployment package in Amazon S3 or a container image in ECR are not detected automatically during stack updates. To update the function code, change the object key or version in the template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html
     */
    interface CodeProperty {
        /**
         * URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-imageuri
         */
        readonly imageUri?: string;
        /**
         * An Amazon S3 bucket in the same AWS Region as your function.
         *
         * The bucket can be in a different AWS account .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-s3bucket
         */
        readonly s3Bucket?: string;
        /**
         * The Amazon S3 key of the deployment package.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-s3key
         */
        readonly s3Key?: string;
        /**
         * For versioned objects, the version of the deployment package object to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-s3objectversion
         */
        readonly s3ObjectVersion?: string;
        /**
         * The ARN of the AWS Key Management Service ( AWS KMS ) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [AWS owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-sourcekmskeyarn
         */
        readonly sourceKmsKeyArn?: string;
        /**
         * (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named `index` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html) . This zip file cannot exceed 4MB. For the `Handler` property, the first part of the handler identifier must be `index` . For example, `index.handler` .
         *
         * > When you specify source code inline for a Node.js function, the `index` file that AWS CloudFormation creates uses the extension `.js` . This means that Lambda treats the file as a CommonJS module. ES modules aren't supported for inline functions.
         *
         * For JSON, you must escape quotes and special characters such as newline ( `\n` ) with a backslash.
         *
         * If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ( [cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html) ) that simplifies sending responses. See [Using AWS Lambda with AWS CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html#cfn-lambda-function-code-zipfile
         */
        readonly zipFile?: string;
    }
    /**
     * Details about the connection between a Lambda function and an [Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html
     */
    interface FileSystemConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html#cfn-lambda-function-filesystemconfig-arn
         */
        readonly arn: string;
        /**
         * The path where the function can access the file system, starting with `/mnt/` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-filesystemconfig.html#cfn-lambda-function-filesystemconfig-localmountpath
         */
        readonly localMountPath: string;
    }
    /**
     * A function's environment variable settings.
     *
     * You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html
     */
    interface EnvironmentProperty {
        /**
         * Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html) .
         *
         * If the value of the environment variable is a time or a duration, enclose the value in quotes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-environment.html#cfn-lambda-function-environment-variables
         */
        readonly variables?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The size of the function's `/tmp` directory in MB.
     *
     * The default value is 512, but it can be any whole number between 512 and 10,240 MB.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html
     */
    interface EphemeralStorageProperty {
        /**
         * The size of the function's `/tmp` directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-ephemeralstorage.html#cfn-lambda-function-ephemeralstorage-size
         */
        readonly size: number;
    }
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html
     */
    interface LoggingConfigProperty {
        /**
         * Set this property to filter the application logs for your function that Lambda sends to CloudWatch.
         *
         * Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html#cfn-lambda-function-loggingconfig-applicationloglevel
         */
        readonly applicationLogLevel?: string;
        /**
         * The format in which Lambda sends your function's application and system logs to CloudWatch.
         *
         * Select between plain text and structured JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html#cfn-lambda-function-loggingconfig-logformat
         */
        readonly logFormat?: string;
        /**
         * The name of the Amazon CloudWatch log group the function sends logs to.
         *
         * By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>` . To use a different log group, enter an existing log group or enter a new log group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html#cfn-lambda-function-loggingconfig-loggroup
         */
        readonly logGroup?: string;
        /**
         * Set this property to filter the system logs for your function that Lambda sends to CloudWatch.
         *
         * Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-loggingconfig.html#cfn-lambda-function-loggingconfig-systemloglevel
         */
        readonly systemLogLevel?: string;
    }
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html
     */
    interface SnapStartResponseProperty {
        /**
         * When set to `PublishedVersions` , Lambda creates a snapshot of the execution environment when you publish a function version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html#cfn-lambda-function-snapstartresponse-applyon
         */
        readonly applyOn?: string;
        /**
         * When you provide a [qualified Amazon Resource Name (ARN)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using) , this response element indicates whether SnapStart is activated for the specified function version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-snapstartresponse.html#cfn-lambda-function-snapstartresponse-optimizationstatus
         */
        readonly optimizationStatus?: string;
    }
}
/**
 * Properties for defining a `CfnFunction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html
 */
export interface CfnFunctionProps {
    /**
     * The instruction set architecture that the function supports.
     *
     * Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-architectures
     */
    readonly architectures?: Array<string>;
    /**
     * The code for the function. You can define your function code in multiple ways:.
     *
     * - For .zip deployment packages, you can specify the Amazon S3 location of the .zip file in the `S3Bucket` , `S3Key` , and `S3ObjectVersion` properties.
     * - For .zip deployment packages, you can alternatively define the function code inline in the `ZipFile` property. This method works only for Node.js and Python functions.
     * - For container images, specify the URI of your container image in the Amazon ECR registry in the `ImageUri` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-code
     */
    readonly code: CfnFunction.CodeProperty | cdk.IResolvable;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration.
     *
     * A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-codesigningconfigarn
     */
    readonly codeSigningConfigArn?: string;
    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.
     *
     * For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-deadletterconfig
     */
    readonly deadLetterConfig?: CfnFunction.DeadLetterConfigProperty | cdk.IResolvable;
    /**
     * A description of the function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-description
     */
    readonly description?: string;
    /**
     * Environment variables that are accessible from function code during execution.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-environment
     */
    readonly environment?: CfnFunction.EnvironmentProperty | cdk.IResolvable;
    /**
     * The size of the function's `/tmp` directory in MB.
     *
     * The default value is 512, but it can be any whole number between 512 and 10,240 MB.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-ephemeralstorage
     */
    readonly ephemeralStorage?: CfnFunction.EphemeralStorageProperty | cdk.IResolvable;
    /**
     * Connection settings for an Amazon EFS file system.
     *
     * To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
     *
     * For more information about using the `DependsOn` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-filesystemconfigs
     */
    readonly fileSystemConfigs?: Array<CfnFunction.FileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the Lambda function, up to 64 characters in length.
     *
     * If you don't specify a name, AWS CloudFormation generates one.
     *
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-functionname
     */
    readonly functionName?: string;
    /**
     * The name of the method within your code that Lambda calls to run your function.
     *
     * Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-handler
     */
    readonly handler?: string;
    /**
     * Configuration values that override the container image Dockerfile settings.
     *
     * For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-imageconfig
     */
    readonly imageConfig?: CfnFunction.ImageConfigProperty | cdk.IResolvable;
    /**
     * The ARN of the AWS Key Management Service ( AWS KMS ) customer managed key that's used to encrypt the following resources:.
     *
     * - The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption) .
     * - The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
     * - When used with `SourceKMSKeyArn` , the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption) .
     * - The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle) .
     *
     * If you don't provide a customer managed key, Lambda uses an [AWS owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [AWS managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-layers
     */
    readonly layers?: Array<string>;
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-loggingconfig
     */
    readonly loggingConfig?: cdk.IResolvable | CfnFunction.LoggingConfigProperty;
    /**
     * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-memorysize
     */
    readonly memorySize?: number;
    /**
     * The type of deployment package.
     *
     * Set to `Image` for container image and set `Zip` for .zip file archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-packagetype
     */
    readonly packageType?: string;
    /**
     * The status of your function's recursive loop detection configuration.
     *
     * When this value is set to `Allow` and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
     *
     * When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-recursiveloop
     */
    readonly recursiveLoop?: string;
    /**
     * The number of simultaneous executions to reserve for the function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-reservedconcurrentexecutions
     */
    readonly reservedConcurrentExecutions?: number;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-role
     */
    readonly role: string;
    /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) . Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
     *
     * The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels) .
     *
     * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-runtime
     */
    readonly runtime?: string;
    /**
     * Sets the runtime management configuration for a function's version.
     *
     * For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-runtimemanagementconfig
     */
    readonly runtimeManagementConfig?: cdk.IResolvable | CfnFunction.RuntimeManagementConfigProperty;
    /**
     * The function's [AWS Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-snapstart
     */
    readonly snapStart?: cdk.IResolvable | CfnFunction.SnapStartProperty;
    /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
     *
     * > You must have the `lambda:TagResource` , `lambda:UntagResource` , and `lambda:ListTags` permissions for your [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the AWS CloudFormation stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it.
     *
     * The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-timeout
     */
    readonly timeout?: number;
    /**
     * Set `Mode` to `Active` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-tracingconfig
     */
    readonly tracingConfig?: cdk.IResolvable | CfnFunction.TracingConfigProperty;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.
     *
     * When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnFunction.VpcConfigProperty;
}
/**
 * The `AWS::Lambda::LayerVersion` resource creates a [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) from a ZIP archive.
 *
 * @cloudformationResource AWS::Lambda::LayerVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html
 */
export declare class CfnLayerVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLayerVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLayerVersion;
    /**
     * The ARN of the layer version.
     *
     * @cloudformationAttribute LayerVersionArn
     */
    readonly attrLayerVersionArn: string;
    /**
     * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html) .
     */
    compatibleArchitectures?: Array<string>;
    /**
     * A list of compatible [function runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) . Used for filtering with [ListLayers](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html) and [ListLayerVersions](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html) .
     */
    compatibleRuntimes?: Array<string>;
    /**
     * The function layer archive.
     */
    content: CfnLayerVersion.ContentProperty | cdk.IResolvable;
    /**
     * The description of the version.
     */
    description?: string;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerName?: string;
    /**
     * The layer's software license. It can be any of the following:.
     */
    licenseInfo?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLayerVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLayerVersion {
    /**
     * A ZIP archive that contains the contents of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html
     */
    interface ContentProperty {
        /**
         * The Amazon S3 bucket of the layer archive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html#cfn-lambda-layerversion-content-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The Amazon S3 key of the layer archive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html#cfn-lambda-layerversion-content-s3key
         */
        readonly s3Key: string;
        /**
         * For versioned objects, the version of the layer archive object to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-layerversion-content.html#cfn-lambda-layerversion-content-s3objectversion
         */
        readonly s3ObjectVersion?: string;
    }
}
/**
 * Properties for defining a `CfnLayerVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html
 */
export interface CfnLayerVersionProps {
    /**
     * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-compatiblearchitectures
     */
    readonly compatibleArchitectures?: Array<string>;
    /**
     * A list of compatible [function runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) . Used for filtering with [ListLayers](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html) and [ListLayerVersions](https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-compatibleruntimes
     */
    readonly compatibleRuntimes?: Array<string>;
    /**
     * The function layer archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-content
     */
    readonly content: CfnLayerVersion.ContentProperty | cdk.IResolvable;
    /**
     * The description of the version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-description
     */
    readonly description?: string;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-layername
     */
    readonly layerName?: string;
    /**
     * The layer's software license. It can be any of the following:.
     *
     * - An [SPDX license identifier](https://docs.aws.amazon.com/https://spdx.org/licenses/) . For example, `MIT` .
     * - The URL of a license hosted on the internet. For example, `https://opensource.org/licenses/MIT` .
     * - The full text of the license.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversion.html#cfn-lambda-layerversion-licenseinfo
     */
    readonly licenseInfo?: string;
}
/**
 * The `AWS::Lambda::LayerVersionPermission` resource adds permissions to the resource-based policy of a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) . Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization.
 *
 * > Since the release of the [UpdateReplacePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) both `UpdateReplacePolicy` and `DeletionPolicy` are required to protect your Resources/LayerPermissions from deletion.
 *
 * @cloudformationResource AWS::Lambda::LayerVersionPermission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html
 */
export declare class CfnLayerVersionPermission extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLayerVersionPermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLayerVersionPermission;
    /**
     * ID generated by service
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The API action that grants access to the layer.
     */
    action: string;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     */
    layerVersionArn: string;
    /**
     * With the principal set to `*` , grant permission to all accounts in the specified organization.
     */
    organizationId?: string;
    /**
     * An account ID, or `*` to grant layer usage permission to all accounts in an organization, or all AWS accounts (if `organizationId` is not specified).
     */
    principal: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLayerVersionPermissionProps);
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
 * Properties for defining a `CfnLayerVersionPermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html
 */
export interface CfnLayerVersionPermissionProps {
    /**
     * The API action that grants access to the layer.
     *
     * For example, `lambda:GetLayerVersion` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-action
     */
    readonly action: string;
    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-layerversionarn
     */
    readonly layerVersionArn: string;
    /**
     * With the principal set to `*` , grant permission to all accounts in the specified organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-organizationid
     */
    readonly organizationId?: string;
    /**
     * An account ID, or `*` to grant layer usage permission to all accounts in an organization, or all AWS accounts (if `organizationId` is not specified).
     *
     * For the last case, make sure that you really do want all AWS accounts to have usage permission to this layer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html#cfn-lambda-layerversionpermission-principal
     */
    readonly principal: string;
}
/**
 * The `AWS::Lambda::Permission` resource grants an AWS service or another account permission to use a function.
 *
 * You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
 *
 * To grant permission to another account, specify the account ID as the `Principal` . To grant permission to an organization defined in AWS Organizations , specify the organization ID as the `PrincipalOrgID` . For AWS services, the principal is a domain-style identifier defined by the service, like `s3.amazonaws.com` or `sns.amazonaws.com` . For AWS services, you can also specify the ARN of the associated resource as the `SourceArn` . If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
 *
 * If your function has a function URL, you can specify the `FunctionUrlAuthType` parameter. This adds a condition to your permission that only applies when your function URL's `AuthType` matches the specified `FunctionUrlAuthType` . For more information about the `AuthType` parameter, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) .
 *
 * This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see [Lambda Function Policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html) .
 *
 * @cloudformationResource AWS::Lambda::Permission
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html
 */
export declare class CfnPermission extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPermission from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPermission;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The action that the principal can use on the function.
     */
    action: string;
    /**
     * For Alexa Smart Home functions, a token that the invoker must supply.
     */
    eventSourceToken?: string;
    /**
     * The name or ARN of the Lambda function, version, or alias.
     */
    functionName: string;
    /**
     * The type of authentication that your function URL uses.
     */
    functionUrlAuthType?: string;
    /**
     * The AWS service , AWS account , IAM user, or IAM role that invokes the function.
     */
    principal: string;
    /**
     * The identifier for your organization in AWS Organizations .
     */
    principalOrgId?: string;
    /**
     * For AWS service , the ID of the AWS account that owns the resource.
     */
    sourceAccount?: string;
    /**
     * For AWS services , the ARN of the AWS resource that invokes the function.
     */
    sourceArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPermissionProps);
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
 * Properties for defining a `CfnPermission`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html
 */
export interface CfnPermissionProps {
    /**
     * The action that the principal can use on the function.
     *
     * For example, `lambda:InvokeFunction` or `lambda:GetFunction` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-action
     */
    readonly action: string;
    /**
     * For Alexa Smart Home functions, a token that the invoker must supply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-eventsourcetoken
     */
    readonly eventSourceToken?: string;
    /**
     * The name or ARN of the Lambda function, version, or alias.
     *
     * **Name formats** - *Function name* – `my-function` (name-only), `my-function:v1` (with alias).
     * - *Function ARN* – `arn:aws:lambda:us-west-2:123456789012:function:my-function` .
     * - *Partial ARN* – `123456789012:function:my-function` .
     *
     * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-functionname
     */
    readonly functionName: string;
    /**
     * The type of authentication that your function URL uses.
     *
     * Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-functionurlauthtype
     */
    readonly functionUrlAuthType?: string;
    /**
     * The AWS service , AWS account , IAM user, or IAM role that invokes the function.
     *
     * If you specify a service, use `SourceArn` or `SourceAccount` to limit who can invoke the function through that service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-principal
     */
    readonly principal: string;
    /**
     * The identifier for your organization in AWS Organizations .
     *
     * Use this to grant permissions to all the AWS accounts under this organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-principalorgid
     */
    readonly principalOrgId?: string;
    /**
     * For AWS service , the ID of the AWS account that owns the resource.
     *
     * Use this together with `SourceArn` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourceaccount
     */
    readonly sourceAccount?: string;
    /**
     * For AWS services , the ARN of the AWS resource that invokes the function.
     *
     * For example, an Amazon S3 bucket or Amazon SNS topic.
     *
     * Note that Lambda configures the comparison using the `StringLike` operator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourcearn
     */
    readonly sourceArn?: string;
}
/**
 * The `AWS::Lambda::Url` resource creates a function URL with the specified configuration parameters.
 *
 * A [function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) is a dedicated HTTP(S) endpoint that you can use to invoke your function.
 *
 * @cloudformationResource AWS::Lambda::Url
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html
 */
export declare class CfnUrl extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUrl from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUrl;
    /**
     * The Amazon Resource Name (ARN) of the function.
     *
     * @cloudformationAttribute FunctionArn
     */
    readonly attrFunctionArn: string;
    /**
     * The HTTP URL endpoint for your function.
     *
     * @cloudformationAttribute FunctionUrl
     */
    readonly attrFunctionUrl: string;
    /**
     * The type of authentication that your function URL uses.
     */
    authType: string;
    /**
     * The [Cross-Origin Resource Sharing (CORS)](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
     */
    cors?: CfnUrl.CorsProperty | cdk.IResolvable;
    /**
     * Use one of the following options:.
     */
    invokeMode?: string;
    /**
     * The alias name.
     */
    qualifier?: string;
    /**
     * The name of the Lambda function.
     */
    targetFunctionArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUrlProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUrl {
    /**
     * The [Cross-Origin Resource Sharing (CORS)](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html
     */
    interface CorsProperty {
        /**
         * Whether you want to allow cookies or other credentials in requests to your function URL.
         *
         * The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-allowcredentials
         */
        readonly allowCredentials?: boolean | cdk.IResolvable;
        /**
         * The HTTP headers that origins can include in requests to your function URL.
         *
         * For example: `Date` , `Keep-Alive` , `X-Custom-Header` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-allowheaders
         */
        readonly allowHeaders?: Array<string>;
        /**
         * The HTTP methods that are allowed when calling your function URL.
         *
         * For example: `GET` , `POST` , `DELETE` , or the wildcard character ( `*` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-allowmethods
         */
        readonly allowMethods?: Array<string>;
        /**
         * The origins that can access your function URL.
         *
         * You can list any number of specific origins, separated by a comma. For example: `https://www.example.com` , `http://localhost:60905` .
         *
         * Alternatively, you can grant access to all origins with the wildcard character ( `*` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-alloworigins
         */
        readonly allowOrigins?: Array<string>;
        /**
         * The HTTP headers in your function response that you want to expose to origins that call your function URL.
         *
         * For example: `Date` , `Keep-Alive` , `X-Custom-Header` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-exposeheaders
         */
        readonly exposeHeaders?: Array<string>;
        /**
         * The maximum amount of time, in seconds, that browsers can cache results of a preflight request.
         *
         * By default, this is set to `0` , which means the browser will not cache results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-url-cors.html#cfn-lambda-url-cors-maxage
         */
        readonly maxAge?: number;
    }
}
/**
 * Properties for defining a `CfnUrl`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html
 */
export interface CfnUrlProps {
    /**
     * The type of authentication that your function URL uses.
     *
     * Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#cfn-lambda-url-authtype
     */
    readonly authType: string;
    /**
     * The [Cross-Origin Resource Sharing (CORS)](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#cfn-lambda-url-cors
     */
    readonly cors?: CfnUrl.CorsProperty | cdk.IResolvable;
    /**
     * Use one of the following options:.
     *
     * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
     * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 20 MB, however, you can [request a quota increase](https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#cfn-lambda-url-invokemode
     */
    readonly invokeMode?: string;
    /**
     * The alias name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#cfn-lambda-url-qualifier
     */
    readonly qualifier?: string;
    /**
     * The name of the Lambda function.
     *
     * **Name formats** - *Function name* - `my-function` .
     * - *Function ARN* - `lambda:  :  :function:my-function` .
     * - *Partial ARN* - `:function:my-function` .
     *
     * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-url.html#cfn-lambda-url-targetfunctionarn
     */
    readonly targetFunctionArn: string;
}
/**
 * The `AWS::Lambda::Version` resource creates a [version](https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html) from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.
 *
 * @cloudformationResource AWS::Lambda::Version
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html
 */
export declare class CfnVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVersion;
    /**
     * The ARN of the function.
     *
     * @cloudformationAttribute FunctionArn
     */
    readonly attrFunctionArn: string;
    /**
     * The version number.
     *
     * @cloudformationAttribute Version
     */
    readonly attrVersion: string;
    /**
     * Only publish a version if the hash value matches the value that's specified.
     */
    codeSha256?: string;
    /**
     * A description for the version to override the description in the function configuration.
     */
    description?: string;
    /**
     * The name or ARN of the Lambda function.
     */
    functionName: string;
    /**
     * The resource policy of your function.
     */
    policy?: any | cdk.IResolvable;
    /**
     * Specifies a provisioned concurrency configuration for a function's version.
     */
    provisionedConcurrencyConfig?: cdk.IResolvable | CfnVersion.ProvisionedConcurrencyConfigurationProperty;
    /**
     * Runtime Management Config of a function.
     */
    runtimePolicy?: cdk.IResolvable | CfnVersion.RuntimePolicyProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVersionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVersion {
    /**
     * A [provisioned concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) configuration for a function's version.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html
     */
    interface ProvisionedConcurrencyConfigurationProperty {
        /**
         * The amount of provisioned concurrency to allocate for the version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-provisionedconcurrencyconfiguration.html#cfn-lambda-version-provisionedconcurrencyconfiguration-provisionedconcurrentexecutions
         */
        readonly provisionedConcurrentExecutions: number;
    }
    /**
     * Runtime Management Config of a function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-runtimepolicy.html
     */
    interface RuntimePolicyProperty {
        /**
         * The ARN of the runtime the function is configured to use.
         *
         * If the runtime update mode is manual, the ARN is returned, otherwise null is returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-runtimepolicy.html#cfn-lambda-version-runtimepolicy-runtimeversionarn
         */
        readonly runtimeVersionArn?: string;
        /**
         * The runtime update mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-version-runtimepolicy.html#cfn-lambda-version-runtimepolicy-updateruntimeon
         */
        readonly updateRuntimeOn: string;
    }
}
/**
 * Properties for defining a `CfnVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html
 */
export interface CfnVersionProps {
    /**
     * Only publish a version if the hash value matches the value that's specified.
     *
     * Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-codesha256
     */
    readonly codeSha256?: string;
    /**
     * A description for the version to override the description in the function configuration.
     *
     * Updates are not supported for this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-description
     */
    readonly description?: string;
    /**
     * The name or ARN of the Lambda function.
     *
     * **Name formats** - *Function name* - `MyFunction` .
     * - *Function ARN* - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction` .
     * - *Partial ARN* - `123456789012:function:MyFunction` .
     *
     * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-functionname
     */
    readonly functionName: string;
    /**
     * The resource policy of your function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-policy
     */
    readonly policy?: any | cdk.IResolvable;
    /**
     * Specifies a provisioned concurrency configuration for a function's version.
     *
     * Updates are not supported for this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-provisionedconcurrencyconfig
     */
    readonly provisionedConcurrencyConfig?: cdk.IResolvable | CfnVersion.ProvisionedConcurrencyConfigurationProperty;
    /**
     * Runtime Management Config of a function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-version.html#cfn-lambda-version-runtimepolicy
     */
    readonly runtimePolicy?: cdk.IResolvable | CfnVersion.RuntimePolicyProperty;
}
