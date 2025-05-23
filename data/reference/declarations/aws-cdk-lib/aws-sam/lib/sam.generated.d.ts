import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessfunction.
 *
 * @cloudformationResource AWS::Serverless::Function
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html
 */
export declare class CfnFunction extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
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
    architectures?: Array<string>;
    assumeRolePolicyDocument?: any | cdk.IResolvable;
    autoPublishAlias?: string;
    autoPublishCodeSha256?: string;
    codeSigningConfigArn?: string;
    codeUri?: cdk.IResolvable | CfnFunction.S3LocationProperty | string;
    deadLetterQueue?: CfnFunction.DeadLetterQueueProperty | cdk.IResolvable;
    deploymentPreference?: CfnFunction.DeploymentPreferenceProperty | cdk.IResolvable;
    description?: string;
    environment?: CfnFunction.FunctionEnvironmentProperty | cdk.IResolvable;
    ephemeralStorage?: CfnFunction.EphemeralStorageProperty | cdk.IResolvable;
    eventInvokeConfig?: CfnFunction.EventInvokeConfigProperty | cdk.IResolvable;
    events?: cdk.IResolvable | Record<string, CfnFunction.EventSourceProperty | cdk.IResolvable>;
    fileSystemConfigs?: Array<CfnFunction.FileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    functionName?: string;
    functionUrlConfig?: CfnFunction.FunctionUrlConfigProperty | cdk.IResolvable;
    handler?: string;
    imageConfig?: CfnFunction.ImageConfigProperty | cdk.IResolvable;
    imageUri?: string;
    inlineCode?: string;
    kmsKeyArn?: string;
    layers?: Array<string>;
    memorySize?: number;
    packageType?: string;
    permissionsBoundary?: string;
    policies?: Array<CfnFunction.IAMPolicyDocumentProperty | cdk.IResolvable | CfnFunction.SAMPolicyTemplateProperty | string> | CfnFunction.IAMPolicyDocumentProperty | cdk.IResolvable | string;
    provisionedConcurrencyConfig?: cdk.IResolvable | CfnFunction.ProvisionedConcurrencyConfigProperty;
    reservedConcurrentExecutions?: number;
    role?: string;
    runtime?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    timeout?: number;
    tracing?: string;
    versionDescription?: string;
    vpcConfig?: cdk.IResolvable | CfnFunction.VpcConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnFunctionProps);
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3location.html
     */
    interface S3LocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3location.html#cfn-serverless-function-s3location-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3location.html#cfn-serverless-function-s3location-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3location.html#cfn-serverless-function-s3location-version
         */
        readonly version?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-filesystemconfig.html
     */
    interface FileSystemConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-filesystemconfig.html#cfn-serverless-function-filesystemconfig-arn
         */
        readonly arn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-filesystemconfig.html#cfn-serverless-function-filesystemconfig-localmountpath
         */
        readonly localMountPath?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iampolicydocument.html
     */
    interface IAMPolicyDocumentProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iampolicydocument.html#cfn-serverless-function-iampolicydocument-statement
         */
        readonly statement: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iampolicydocument.html#cfn-serverless-function-iampolicydocument-version
         */
        readonly version?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html
     */
    interface SAMPolicyTemplateProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-amidescribepolicy
         */
        readonly amiDescribePolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-awssecretsmanagergetsecretvaluepolicy
         */
        readonly awsSecretsManagerGetSecretValuePolicy?: cdk.IResolvable | CfnFunction.SecretArnSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-cloudformationdescribestackspolicy
         */
        readonly cloudFormationDescribeStacksPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-cloudwatchputmetricpolicy
         */
        readonly cloudWatchPutMetricPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-dynamodbcrudpolicy
         */
        readonly dynamoDbCrudPolicy?: cdk.IResolvable | CfnFunction.TableSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-dynamodbreadpolicy
         */
        readonly dynamoDbReadPolicy?: cdk.IResolvable | CfnFunction.TableSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-dynamodbstreamreadpolicy
         */
        readonly dynamoDbStreamReadPolicy?: cdk.IResolvable | CfnFunction.TableStreamSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-dynamodbwritepolicy
         */
        readonly dynamoDbWritePolicy?: cdk.IResolvable | CfnFunction.TableSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-ec2describepolicy
         */
        readonly ec2DescribePolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-elasticsearchhttppostpolicy
         */
        readonly elasticsearchHttpPostPolicy?: CfnFunction.DomainSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-filterlogeventspolicy
         */
        readonly filterLogEventsPolicy?: cdk.IResolvable | CfnFunction.LogGroupSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-kinesiscrudpolicy
         */
        readonly kinesisCrudPolicy?: cdk.IResolvable | CfnFunction.StreamSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-kinesisstreamreadpolicy
         */
        readonly kinesisStreamReadPolicy?: cdk.IResolvable | CfnFunction.StreamSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-kmsdecryptpolicy
         */
        readonly kmsDecryptPolicy?: cdk.IResolvable | CfnFunction.KeySAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-lambdainvokepolicy
         */
        readonly lambdaInvokePolicy?: CfnFunction.FunctionSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-rekognitiondetectonlypolicy
         */
        readonly rekognitionDetectOnlyPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-rekognitionlabelspolicy
         */
        readonly rekognitionLabelsPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-rekognitionnodataaccesspolicy
         */
        readonly rekognitionNoDataAccessPolicy?: CfnFunction.CollectionSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-rekognitionreadpolicy
         */
        readonly rekognitionReadPolicy?: CfnFunction.CollectionSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-rekognitionwriteonlyaccesspolicy
         */
        readonly rekognitionWriteOnlyAccessPolicy?: CfnFunction.CollectionSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-s3crudpolicy
         */
        readonly s3CrudPolicy?: CfnFunction.BucketSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-s3readpolicy
         */
        readonly s3ReadPolicy?: CfnFunction.BucketSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-s3writepolicy
         */
        readonly s3WritePolicy?: CfnFunction.BucketSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sesbulktemplatedcrudpolicy
         */
        readonly sesBulkTemplatedCrudPolicy?: CfnFunction.IdentitySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sescrudpolicy
         */
        readonly sesCrudPolicy?: CfnFunction.IdentitySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sesemailtemplatecrudpolicy
         */
        readonly sesEmailTemplateCrudPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sessendbouncepolicy
         */
        readonly sesSendBouncePolicy?: CfnFunction.IdentitySAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-snscrudpolicy
         */
        readonly snsCrudPolicy?: cdk.IResolvable | CfnFunction.TopicSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-snspublishmessagepolicy
         */
        readonly snsPublishMessagePolicy?: cdk.IResolvable | CfnFunction.TopicSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sqspollerpolicy
         */
        readonly sqsPollerPolicy?: cdk.IResolvable | CfnFunction.QueueSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-sqssendmessagepolicy
         */
        readonly sqsSendMessagePolicy?: cdk.IResolvable | CfnFunction.QueueSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-ssmparameterreadpolicy
         */
        readonly ssmParameterReadPolicy?: cdk.IResolvable | CfnFunction.ParameterNameSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-stepfunctionsexecutionpolicy
         */
        readonly stepFunctionsExecutionPolicy?: cdk.IResolvable | CfnFunction.StateMachineSAMPTProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sampolicytemplate.html#cfn-serverless-function-sampolicytemplate-vpcaccesspolicy
         */
        readonly vpcAccessPolicy?: CfnFunction.EmptySAMPTProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-emptysampt.html
     */
    interface EmptySAMPTProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-queuesampt.html
     */
    interface QueueSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-queuesampt.html#cfn-serverless-function-queuesampt-queuename
         */
        readonly queueName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionsampt.html
     */
    interface FunctionSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionsampt.html#cfn-serverless-function-functionsampt-functionname
         */
        readonly functionName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-tablesampt.html
     */
    interface TableSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-tablesampt.html#cfn-serverless-function-tablesampt-tablename
         */
        readonly tableName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-tablestreamsampt.html
     */
    interface TableStreamSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-tablestreamsampt.html#cfn-serverless-function-tablestreamsampt-streamname
         */
        readonly streamName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-tablestreamsampt.html#cfn-serverless-function-tablestreamsampt-tablename
         */
        readonly tableName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-identitysampt.html
     */
    interface IdentitySAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-identitysampt.html#cfn-serverless-function-identitysampt-identityname
         */
        readonly identityName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-domainsampt.html
     */
    interface DomainSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-domainsampt.html#cfn-serverless-function-domainsampt-domainname
         */
        readonly domainName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-bucketsampt.html
     */
    interface BucketSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-bucketsampt.html#cfn-serverless-function-bucketsampt-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-collectionsampt.html
     */
    interface CollectionSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-collectionsampt.html#cfn-serverless-function-collectionsampt-collectionid
         */
        readonly collectionId: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-topicsampt.html
     */
    interface TopicSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-topicsampt.html#cfn-serverless-function-topicsampt-topicname
         */
        readonly topicName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-streamsampt.html
     */
    interface StreamSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-streamsampt.html#cfn-serverless-function-streamsampt-streamname
         */
        readonly streamName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-keysampt.html
     */
    interface KeySAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-keysampt.html#cfn-serverless-function-keysampt-keyid
         */
        readonly keyId: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-loggroupsampt.html
     */
    interface LogGroupSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-loggroupsampt.html#cfn-serverless-function-loggroupsampt-loggroupname
         */
        readonly logGroupName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-statemachinesampt.html
     */
    interface StateMachineSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-statemachinesampt.html#cfn-serverless-function-statemachinesampt-statemachinename
         */
        readonly stateMachineName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-parameternamesampt.html
     */
    interface ParameterNameSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-parameternamesampt.html#cfn-serverless-function-parameternamesampt-parametername
         */
        readonly parameterName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-secretarnsampt.html
     */
    interface SecretArnSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-secretarnsampt.html#cfn-serverless-function-secretarnsampt-secretarn
         */
        readonly secretArn: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionenvironment.html
     */
    interface FunctionEnvironmentProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionenvironment.html#cfn-serverless-function-functionenvironment-variables
         */
        readonly variables: cdk.IResolvable | Record<string, string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-vpcconfig.html
     */
    interface VpcConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-vpcconfig.html#cfn-serverless-function-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-vpcconfig.html#cfn-serverless-function-vpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventsource.html
     */
    interface EventSourceProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventsource.html#cfn-serverless-function-eventsource-properties
         */
        readonly properties: CfnFunction.AlexaSkillEventProperty | CfnFunction.ApiEventProperty | CfnFunction.CloudWatchEventEventProperty | CfnFunction.CloudWatchLogsEventProperty | CfnFunction.CognitoEventProperty | CfnFunction.DynamoDBEventProperty | CfnFunction.EventBridgeRuleEventProperty | CfnFunction.HttpApiEventProperty | CfnFunction.IoTRuleEventProperty | cdk.IResolvable | CfnFunction.KinesisEventProperty | CfnFunction.S3EventProperty | CfnFunction.ScheduleEventProperty | CfnFunction.SNSEventProperty | CfnFunction.SQSEventProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventsource.html#cfn-serverless-function-eventsource-type
         */
        readonly type: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3event.html
     */
    interface S3EventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3event.html#cfn-serverless-function-s3event-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3event.html#cfn-serverless-function-s3event-events
         */
        readonly events: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3event.html#cfn-serverless-function-s3event-filter
         */
        readonly filter?: cdk.IResolvable | CfnFunction.S3NotificationFilterProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3notificationfilter.html
     */
    interface S3NotificationFilterProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3notificationfilter.html#cfn-serverless-function-s3notificationfilter-s3key
         */
        readonly s3Key: cdk.IResolvable | CfnFunction.S3KeyFilterProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3keyfilter.html
     */
    interface S3KeyFilterProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3keyfilter.html#cfn-serverless-function-s3keyfilter-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnFunction.S3KeyFilterRuleProperty> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3keyfilterrule.html
     */
    interface S3KeyFilterRuleProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3keyfilterrule.html#cfn-serverless-function-s3keyfilterrule-name
         */
        readonly name: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-s3keyfilterrule.html#cfn-serverless-function-s3keyfilterrule-value
         */
        readonly value: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-snsevent.html
     */
    interface SNSEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-snsevent.html#cfn-serverless-function-snsevent-topic
         */
        readonly topic: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sqsevent.html
     */
    interface SQSEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sqsevent.html#cfn-serverless-function-sqsevent-batchsize
         */
        readonly batchSize?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sqsevent.html#cfn-serverless-function-sqsevent-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-sqsevent.html#cfn-serverless-function-sqsevent-queue
         */
        readonly queue: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html
     */
    interface KinesisEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html#cfn-serverless-function-kinesisevent-batchsize
         */
        readonly batchSize?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html#cfn-serverless-function-kinesisevent-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html#cfn-serverless-function-kinesisevent-functionresponsetypes
         */
        readonly functionResponseTypes?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html#cfn-serverless-function-kinesisevent-startingposition
         */
        readonly startingPosition: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-kinesisevent.html#cfn-serverless-function-kinesisevent-stream
         */
        readonly stream: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html
     */
    interface DynamoDBEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-batchsize
         */
        readonly batchSize?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-bisectbatchonfunctionerror
         */
        readonly bisectBatchOnFunctionError?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-destinationconfig
         */
        readonly destinationConfig?: CfnFunction.DestinationConfigProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-maximumbatchingwindowinseconds
         */
        readonly maximumBatchingWindowInSeconds?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-maximumrecordageinseconds
         */
        readonly maximumRecordAgeInSeconds?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-parallelizationfactor
         */
        readonly parallelizationFactor?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-startingposition
         */
        readonly startingPosition: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-dynamodbevent.html#cfn-serverless-function-dynamodbevent-stream
         */
        readonly stream: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-destinationconfig.html
     */
    interface DestinationConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-destinationconfig.html#cfn-serverless-function-destinationconfig-onfailure
         */
        readonly onFailure: CfnFunction.DestinationProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-destination.html
     */
    interface DestinationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-destination.html#cfn-serverless-function-destination-destination
         */
        readonly destination: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-destination.html#cfn-serverless-function-destination-type
         */
        readonly type?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html
     */
    interface ApiEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-auth
         */
        readonly auth?: CfnFunction.AuthProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-method
         */
        readonly method: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-path
         */
        readonly path: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-requestmodel
         */
        readonly requestModel?: cdk.IResolvable | CfnFunction.RequestModelProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-requestparameters
         */
        readonly requestParameters?: Array<cdk.IResolvable | CfnFunction.RequestParameterProperty | string> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-apievent.html#cfn-serverless-function-apievent-restapiid
         */
        readonly restApiId?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-auth.html
     */
    interface AuthProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-auth.html#cfn-serverless-function-auth-apikeyrequired
         */
        readonly apiKeyRequired?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-auth.html#cfn-serverless-function-auth-authorizationscopes
         */
        readonly authorizationScopes?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-auth.html#cfn-serverless-function-auth-authorizer
         */
        readonly authorizer?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-auth.html#cfn-serverless-function-auth-resourcepolicy
         */
        readonly resourcePolicy?: CfnFunction.AuthResourcePolicyProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html
     */
    interface AuthResourcePolicyProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-awsaccountblacklist
         */
        readonly awsAccountBlacklist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-awsaccountwhitelist
         */
        readonly awsAccountWhitelist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-customstatements
         */
        readonly customStatements?: Array<any | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-intrinsicvpcblacklist
         */
        readonly intrinsicVpcBlacklist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-intrinsicvpceblacklist
         */
        readonly intrinsicVpceBlacklist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-intrinsicvpcewhitelist
         */
        readonly intrinsicVpceWhitelist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-intrinsicvpcwhitelist
         */
        readonly intrinsicVpcWhitelist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-iprangeblacklist
         */
        readonly ipRangeBlacklist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-iprangewhitelist
         */
        readonly ipRangeWhitelist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-sourcevpcblacklist
         */
        readonly sourceVpcBlacklist?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-authresourcepolicy.html#cfn-serverless-function-authresourcepolicy-sourcevpcwhitelist
         */
        readonly sourceVpcWhitelist?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestmodel.html
     */
    interface RequestModelProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestmodel.html#cfn-serverless-function-requestmodel-model
         */
        readonly model: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestmodel.html#cfn-serverless-function-requestmodel-required
         */
        readonly required?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestmodel.html#cfn-serverless-function-requestmodel-validatebody
         */
        readonly validateBody?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestmodel.html#cfn-serverless-function-requestmodel-validateparameters
         */
        readonly validateParameters?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestparameter.html
     */
    interface RequestParameterProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestparameter.html#cfn-serverless-function-requestparameter-caching
         */
        readonly caching?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-requestparameter.html#cfn-serverless-function-requestparameter-required
         */
        readonly required?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html
     */
    interface ScheduleEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html#cfn-serverless-function-scheduleevent-description
         */
        readonly description?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html#cfn-serverless-function-scheduleevent-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html#cfn-serverless-function-scheduleevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html#cfn-serverless-function-scheduleevent-name
         */
        readonly name?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-scheduleevent.html#cfn-serverless-function-scheduleevent-schedule
         */
        readonly schedule: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatcheventevent.html
     */
    interface CloudWatchEventEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatcheventevent.html#cfn-serverless-function-cloudwatcheventevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatcheventevent.html#cfn-serverless-function-cloudwatcheventevent-inputpath
         */
        readonly inputPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatcheventevent.html#cfn-serverless-function-cloudwatcheventevent-pattern
         */
        readonly pattern: any | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatchlogsevent.html
     */
    interface CloudWatchLogsEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatchlogsevent.html#cfn-serverless-function-cloudwatchlogsevent-filterpattern
         */
        readonly filterPattern: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cloudwatchlogsevent.html#cfn-serverless-function-cloudwatchlogsevent-loggroupname
         */
        readonly logGroupName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iotruleevent.html
     */
    interface IoTRuleEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iotruleevent.html#cfn-serverless-function-iotruleevent-awsiotsqlversion
         */
        readonly awsIotSqlVersion?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-iotruleevent.html#cfn-serverless-function-iotruleevent-sql
         */
        readonly sql: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-alexaskillevent.html
     */
    interface AlexaSkillEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-alexaskillevent.html#cfn-serverless-function-alexaskillevent-skillid
         */
        readonly skillId: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventbridgeruleevent.html
     */
    interface EventBridgeRuleEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventbridgeruleevent.html#cfn-serverless-function-eventbridgeruleevent-eventbusname
         */
        readonly eventBusName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventbridgeruleevent.html#cfn-serverless-function-eventbridgeruleevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventbridgeruleevent.html#cfn-serverless-function-eventbridgeruleevent-inputpath
         */
        readonly inputPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventbridgeruleevent.html#cfn-serverless-function-eventbridgeruleevent-pattern
         */
        readonly pattern: any | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html
     */
    interface HttpApiEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-apiid
         */
        readonly apiId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-auth
         */
        readonly auth?: CfnFunction.HttpApiFunctionAuthProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-method
         */
        readonly method?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-path
         */
        readonly path?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-payloadformatversion
         */
        readonly payloadFormatVersion?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-routesettings
         */
        readonly routeSettings?: cdk.IResolvable | CfnFunction.RouteSettingsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapievent.html#cfn-serverless-function-httpapievent-timeoutinmillis
         */
        readonly timeoutInMillis?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapifunctionauth.html
     */
    interface HttpApiFunctionAuthProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapifunctionauth.html#cfn-serverless-function-httpapifunctionauth-authorizationscopes
         */
        readonly authorizationScopes?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-httpapifunctionauth.html#cfn-serverless-function-httpapifunctionauth-authorizer
         */
        readonly authorizer?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html
     */
    interface RouteSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html#cfn-serverless-function-routesettings-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html#cfn-serverless-function-routesettings-detailedmetricsenabled
         */
        readonly detailedMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html#cfn-serverless-function-routesettings-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html#cfn-serverless-function-routesettings-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-routesettings.html#cfn-serverless-function-routesettings-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cognitoevent.html
     */
    interface CognitoEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cognitoevent.html#cfn-serverless-function-cognitoevent-trigger
         */
        readonly trigger: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-cognitoevent.html#cfn-serverless-function-cognitoevent-userpool
         */
        readonly userPool: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deadletterqueue.html
     */
    interface DeadLetterQueueProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deadletterqueue.html#cfn-serverless-function-deadletterqueue-targetarn
         */
        readonly targetArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deadletterqueue.html#cfn-serverless-function-deadletterqueue-type
         */
        readonly type: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html
     */
    interface DeploymentPreferenceProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html#cfn-serverless-function-deploymentpreference-alarms
         */
        readonly alarms?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html#cfn-serverless-function-deploymentpreference-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html#cfn-serverless-function-deploymentpreference-hooks
         */
        readonly hooks?: CfnFunction.HooksProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html#cfn-serverless-function-deploymentpreference-role
         */
        readonly role?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-deploymentpreference.html#cfn-serverless-function-deploymentpreference-type
         */
        readonly type?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-hooks.html
     */
    interface HooksProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-hooks.html#cfn-serverless-function-hooks-posttraffic
         */
        readonly postTraffic?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-hooks.html#cfn-serverless-function-hooks-pretraffic
         */
        readonly preTraffic?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-provisionedconcurrencyconfig.html
     */
    interface ProvisionedConcurrencyConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-provisionedconcurrencyconfig.html#cfn-serverless-function-provisionedconcurrencyconfig-provisionedconcurrentexecutions
         */
        readonly provisionedConcurrentExecutions: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokeconfig.html
     */
    interface EventInvokeConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokeconfig.html#cfn-serverless-function-eventinvokeconfig-destinationconfig
         */
        readonly destinationConfig?: CfnFunction.EventInvokeDestinationConfigProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokeconfig.html#cfn-serverless-function-eventinvokeconfig-maximumeventageinseconds
         */
        readonly maximumEventAgeInSeconds?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokeconfig.html#cfn-serverless-function-eventinvokeconfig-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokedestinationconfig.html
     */
    interface EventInvokeDestinationConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokedestinationconfig.html#cfn-serverless-function-eventinvokedestinationconfig-onfailure
         */
        readonly onFailure: CfnFunction.DestinationProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-eventinvokedestinationconfig.html#cfn-serverless-function-eventinvokedestinationconfig-onsuccess
         */
        readonly onSuccess: CfnFunction.DestinationProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-imageconfig.html
     */
    interface ImageConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-imageconfig.html#cfn-serverless-function-imageconfig-command
         */
        readonly command?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-imageconfig.html#cfn-serverless-function-imageconfig-entrypoint
         */
        readonly entryPoint?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-imageconfig.html#cfn-serverless-function-imageconfig-workingdirectory
         */
        readonly workingDirectory?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionurlconfig.html
     */
    interface FunctionUrlConfigProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionurlconfig.html#cfn-serverless-function-functionurlconfig-authtype
         */
        readonly authType: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionurlconfig.html#cfn-serverless-function-functionurlconfig-cors
         */
        readonly cors?: CfnFunction.CorsConfigurationProperty | cdk.IResolvable | string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-functionurlconfig.html#cfn-serverless-function-functionurlconfig-invokemode
         */
        readonly invokeMode?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html
     */
    interface CorsConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html#cfn-serverless-function-corsconfiguration-allowcredentials
         */
        readonly allowCredentials?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html#cfn-serverless-function-corsconfiguration-allowheaders
         */
        readonly allowHeaders?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html#cfn-serverless-function-corsconfiguration-allowmethods
         */
        readonly allowMethods?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html#cfn-serverless-function-corsconfiguration-alloworigin
         */
        readonly allowOrigin: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-corsconfiguration.html#cfn-serverless-function-corsconfiguration-maxage
         */
        readonly maxAge?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-ephemeralstorage.html
     */
    interface EphemeralStorageProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-function-ephemeralstorage.html#cfn-serverless-function-ephemeralstorage-size
         */
        readonly size: number;
    }
}
/**
 * Properties for defining a `CfnFunction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html
 */
export interface CfnFunctionProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-architectures
     */
    readonly architectures?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-assumerolepolicydocument
     */
    readonly assumeRolePolicyDocument?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-autopublishalias
     */
    readonly autoPublishAlias?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-autopublishcodesha256
     */
    readonly autoPublishCodeSha256?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-codesigningconfigarn
     */
    readonly codeSigningConfigArn?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-codeuri
     */
    readonly codeUri?: cdk.IResolvable | CfnFunction.S3LocationProperty | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-deadletterqueue
     */
    readonly deadLetterQueue?: CfnFunction.DeadLetterQueueProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-deploymentpreference
     */
    readonly deploymentPreference?: CfnFunction.DeploymentPreferenceProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-environment
     */
    readonly environment?: CfnFunction.FunctionEnvironmentProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-ephemeralstorage
     */
    readonly ephemeralStorage?: CfnFunction.EphemeralStorageProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-eventinvokeconfig
     */
    readonly eventInvokeConfig?: CfnFunction.EventInvokeConfigProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-events
     */
    readonly events?: cdk.IResolvable | Record<string, CfnFunction.EventSourceProperty | cdk.IResolvable>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-filesystemconfigs
     */
    readonly fileSystemConfigs?: Array<CfnFunction.FileSystemConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-functionname
     */
    readonly functionName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-functionurlconfig
     */
    readonly functionUrlConfig?: CfnFunction.FunctionUrlConfigProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-handler
     */
    readonly handler?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-imageconfig
     */
    readonly imageConfig?: CfnFunction.ImageConfigProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-imageuri
     */
    readonly imageUri?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-inlinecode
     */
    readonly inlineCode?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-layers
     */
    readonly layers?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-memorysize
     */
    readonly memorySize?: number;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-packagetype
     */
    readonly packageType?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-permissionsboundary
     */
    readonly permissionsBoundary?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-policies
     */
    readonly policies?: Array<CfnFunction.IAMPolicyDocumentProperty | cdk.IResolvable | CfnFunction.SAMPolicyTemplateProperty | string> | CfnFunction.IAMPolicyDocumentProperty | cdk.IResolvable | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-provisionedconcurrencyconfig
     */
    readonly provisionedConcurrencyConfig?: cdk.IResolvable | CfnFunction.ProvisionedConcurrencyConfigProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-reservedconcurrentexecutions
     */
    readonly reservedConcurrentExecutions?: number;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-role
     */
    readonly role?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-runtime
     */
    readonly runtime?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-timeout
     */
    readonly timeout?: number;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-tracing
     */
    readonly tracing?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-versiondescription
     */
    readonly versionDescription?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-function.html#cfn-serverless-function-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnFunction.VpcConfigProperty;
}
/**
 * https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessapi.
 *
 * @cloudformationResource AWS::Serverless::Api
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html
 */
export declare class CfnApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
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
    accessLogSetting?: CfnApi.AccessLogSettingProperty | cdk.IResolvable;
    alwaysDeploy?: boolean | cdk.IResolvable;
    auth?: CfnApi.AuthProperty | cdk.IResolvable;
    binaryMediaTypes?: Array<string>;
    cacheClusterEnabled?: boolean | cdk.IResolvable;
    cacheClusterSize?: string;
    canarySetting?: CfnApi.CanarySettingProperty | cdk.IResolvable;
    cors?: CfnApi.CorsConfigurationProperty | cdk.IResolvable | string;
    definitionBody?: any | cdk.IResolvable;
    definitionUri?: cdk.IResolvable | CfnApi.S3LocationProperty | string;
    description?: string;
    disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    domain?: CfnApi.DomainConfigurationProperty | cdk.IResolvable;
    endpointConfiguration?: CfnApi.EndpointConfigurationProperty | cdk.IResolvable | string;
    gatewayResponses?: any | cdk.IResolvable;
    methodSettings?: Array<any | cdk.IResolvable> | cdk.IResolvable;
    minimumCompressionSize?: number;
    models?: any | cdk.IResolvable;
    name?: string;
    openApiVersion?: string;
    stageName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    tracingEnabled?: boolean | cdk.IResolvable;
    variables?: cdk.IResolvable | Record<string, string>;
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-s3location.html
     */
    interface S3LocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-s3location.html#cfn-serverless-api-s3location-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-s3location.html#cfn-serverless-api-s3location-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-s3location.html#cfn-serverless-api-s3location-version
         */
        readonly version: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-endpointconfiguration.html
     */
    interface EndpointConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-endpointconfiguration.html#cfn-serverless-api-endpointconfiguration-type
         */
        readonly type?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-endpointconfiguration.html#cfn-serverless-api-endpointconfiguration-vpcendpointids
         */
        readonly vpcEndpointIds?: Array<string>;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html
     */
    interface CorsConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html#cfn-serverless-api-corsconfiguration-allowcredentials
         */
        readonly allowCredentials?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html#cfn-serverless-api-corsconfiguration-allowheaders
         */
        readonly allowHeaders?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html#cfn-serverless-api-corsconfiguration-allowmethods
         */
        readonly allowMethods?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html#cfn-serverless-api-corsconfiguration-alloworigin
         */
        readonly allowOrigin: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-corsconfiguration.html#cfn-serverless-api-corsconfiguration-maxage
         */
        readonly maxAge?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-auth.html
     */
    interface AuthProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-auth.html#cfn-serverless-api-auth-adddefaultauthorizertocorspreflight
         */
        readonly addDefaultAuthorizerToCorsPreflight?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-auth.html#cfn-serverless-api-auth-authorizers
         */
        readonly authorizers?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-auth.html#cfn-serverless-api-auth-defaultauthorizer
         */
        readonly defaultAuthorizer?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-accesslogsetting.html
     */
    interface AccessLogSettingProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-accesslogsetting.html#cfn-serverless-api-accesslogsetting-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-accesslogsetting.html#cfn-serverless-api-accesslogsetting-format
         */
        readonly format?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-canarysetting.html
     */
    interface CanarySettingProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-canarysetting.html#cfn-serverless-api-canarysetting-deploymentid
         */
        readonly deploymentId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-canarysetting.html#cfn-serverless-api-canarysetting-percenttraffic
         */
        readonly percentTraffic?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-canarysetting.html#cfn-serverless-api-canarysetting-stagevariableoverrides
         */
        readonly stageVariableOverrides?: cdk.IResolvable | Record<string, string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-canarysetting.html#cfn-serverless-api-canarysetting-usestagecache
         */
        readonly useStageCache?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html
     */
    interface DomainConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-basepath
         */
        readonly basePath?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-certificatearn
         */
        readonly certificateArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-domainname
         */
        readonly domainName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-endpointconfiguration
         */
        readonly endpointConfiguration?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-mutualtlsauthentication
         */
        readonly mutualTlsAuthentication?: cdk.IResolvable | CfnApi.MutualTlsAuthenticationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-ownershipverificationcertificatearn
         */
        readonly ownershipVerificationCertificateArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-route53
         */
        readonly route53?: cdk.IResolvable | CfnApi.Route53ConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-domainconfiguration.html#cfn-serverless-api-domainconfiguration-securitypolicy
         */
        readonly securityPolicy?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-mutualtlsauthentication.html
     */
    interface MutualTlsAuthenticationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-mutualtlsauthentication.html#cfn-serverless-api-mutualtlsauthentication-truststoreuri
         */
        readonly truststoreUri?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-mutualtlsauthentication.html#cfn-serverless-api-mutualtlsauthentication-truststoreversion
         */
        readonly truststoreVersion?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html
     */
    interface Route53ConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html#cfn-serverless-api-route53configuration-distributeddomainname
         */
        readonly distributedDomainName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html#cfn-serverless-api-route53configuration-evaluatetargethealth
         */
        readonly evaluateTargetHealth?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html#cfn-serverless-api-route53configuration-hostedzoneid
         */
        readonly hostedZoneId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html#cfn-serverless-api-route53configuration-hostedzonename
         */
        readonly hostedZoneName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-api-route53configuration.html#cfn-serverless-api-route53configuration-ipv6
         */
        readonly ipV6?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html
 */
export interface CfnApiProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-accesslogsetting
     */
    readonly accessLogSetting?: CfnApi.AccessLogSettingProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-alwaysdeploy
     */
    readonly alwaysDeploy?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-auth
     */
    readonly auth?: CfnApi.AuthProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-binarymediatypes
     */
    readonly binaryMediaTypes?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-cacheclusterenabled
     */
    readonly cacheClusterEnabled?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-cacheclustersize
     */
    readonly cacheClusterSize?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-canarysetting
     */
    readonly canarySetting?: CfnApi.CanarySettingProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-cors
     */
    readonly cors?: CfnApi.CorsConfigurationProperty | cdk.IResolvable | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-definitionbody
     */
    readonly definitionBody?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-definitionuri
     */
    readonly definitionUri?: cdk.IResolvable | CfnApi.S3LocationProperty | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-disableexecuteapiendpoint
     */
    readonly disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-domain
     */
    readonly domain?: CfnApi.DomainConfigurationProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-endpointconfiguration
     */
    readonly endpointConfiguration?: CfnApi.EndpointConfigurationProperty | cdk.IResolvable | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-gatewayresponses
     */
    readonly gatewayResponses?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-methodsettings
     */
    readonly methodSettings?: Array<any | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-minimumcompressionsize
     */
    readonly minimumCompressionSize?: number;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-models
     */
    readonly models?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-name
     */
    readonly name?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-openapiversion
     */
    readonly openApiVersion?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-stagename
     */
    readonly stageName: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-tracingenabled
     */
    readonly tracingEnabled?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-api.html#cfn-serverless-api-variables
     */
    readonly variables?: cdk.IResolvable | Record<string, string>;
}
/**
 * https://github.com/aws/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlesshttpapi.
 *
 * @cloudformationResource AWS::Serverless::HttpApi
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html
 */
export declare class CfnHttpApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
    /**
     * Build a CfnHttpApi from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHttpApi;
    accessLogSetting?: CfnHttpApi.AccessLogSettingProperty | cdk.IResolvable;
    auth?: CfnHttpApi.HttpApiAuthProperty | cdk.IResolvable;
    corsConfiguration?: boolean | CfnHttpApi.CorsConfigurationObjectProperty | cdk.IResolvable;
    defaultRouteSettings?: cdk.IResolvable | CfnHttpApi.RouteSettingsProperty;
    definitionBody?: any | cdk.IResolvable;
    definitionUri?: cdk.IResolvable | CfnHttpApi.S3LocationProperty | string;
    description?: string;
    disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    domain?: CfnHttpApi.HttpApiDomainConfigurationProperty | cdk.IResolvable;
    failOnWarnings?: boolean | cdk.IResolvable;
    routeSettings?: cdk.IResolvable | CfnHttpApi.RouteSettingsProperty;
    stageName?: string;
    stageVariables?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnHttpApiProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnHttpApi {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-s3location.html
     */
    interface S3LocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-s3location.html#cfn-serverless-httpapi-s3location-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-s3location.html#cfn-serverless-httpapi-s3location-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-s3location.html#cfn-serverless-httpapi-s3location-version
         */
        readonly version: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapiauth.html
     */
    interface HttpApiAuthProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapiauth.html#cfn-serverless-httpapi-httpapiauth-authorizers
         */
        readonly authorizers?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapiauth.html#cfn-serverless-httpapi-httpapiauth-defaultauthorizer
         */
        readonly defaultAuthorizer?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-accesslogsetting.html
     */
    interface AccessLogSettingProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-accesslogsetting.html#cfn-serverless-httpapi-accesslogsetting-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-accesslogsetting.html#cfn-serverless-httpapi-accesslogsetting-format
         */
        readonly format?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html
     */
    interface CorsConfigurationObjectProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-allowcredentials
         */
        readonly allowCredentials?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-allowheaders
         */
        readonly allowHeaders?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-allowmethods
         */
        readonly allowMethods?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-alloworigins
         */
        readonly allowOrigins?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-exposeheaders
         */
        readonly exposeHeaders?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-corsconfigurationobject.html#cfn-serverless-httpapi-corsconfigurationobject-maxage
         */
        readonly maxAge?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html
     */
    interface RouteSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html#cfn-serverless-httpapi-routesettings-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html#cfn-serverless-httpapi-routesettings-detailedmetricsenabled
         */
        readonly detailedMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html#cfn-serverless-httpapi-routesettings-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html#cfn-serverless-httpapi-routesettings-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-routesettings.html#cfn-serverless-httpapi-routesettings-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html
     */
    interface HttpApiDomainConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-basepath
         */
        readonly basePath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-certificatearn
         */
        readonly certificateArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-domainname
         */
        readonly domainName: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-endpointconfiguration
         */
        readonly endpointConfiguration?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-mutualtlsauthentication
         */
        readonly mutualTlsAuthentication?: cdk.IResolvable | CfnHttpApi.MutualTlsAuthenticationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-route53
         */
        readonly route53?: cdk.IResolvable | CfnHttpApi.Route53ConfigurationProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-httpapidomainconfiguration.html#cfn-serverless-httpapi-httpapidomainconfiguration-securitypolicy
         */
        readonly securityPolicy?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html
     */
    interface Route53ConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html#cfn-serverless-httpapi-route53configuration-distributeddomainname
         */
        readonly distributedDomainName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html#cfn-serverless-httpapi-route53configuration-evaluatetargethealth
         */
        readonly evaluateTargetHealth?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html#cfn-serverless-httpapi-route53configuration-hostedzoneid
         */
        readonly hostedZoneId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html#cfn-serverless-httpapi-route53configuration-hostedzonename
         */
        readonly hostedZoneName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-route53configuration.html#cfn-serverless-httpapi-route53configuration-ipv6
         */
        readonly ipV6?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-mutualtlsauthentication.html
     */
    interface MutualTlsAuthenticationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-mutualtlsauthentication.html#cfn-serverless-httpapi-mutualtlsauthentication-truststoreuri
         */
        readonly truststoreUri?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-httpapi-mutualtlsauthentication.html#cfn-serverless-httpapi-mutualtlsauthentication-truststoreversion
         */
        readonly truststoreVersion?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnHttpApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html
 */
export interface CfnHttpApiProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-accesslogsetting
     */
    readonly accessLogSetting?: CfnHttpApi.AccessLogSettingProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-auth
     */
    readonly auth?: CfnHttpApi.HttpApiAuthProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-corsconfiguration
     */
    readonly corsConfiguration?: boolean | CfnHttpApi.CorsConfigurationObjectProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-defaultroutesettings
     */
    readonly defaultRouteSettings?: cdk.IResolvable | CfnHttpApi.RouteSettingsProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-definitionbody
     */
    readonly definitionBody?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-definitionuri
     */
    readonly definitionUri?: cdk.IResolvable | CfnHttpApi.S3LocationProperty | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-disableexecuteapiendpoint
     */
    readonly disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-domain
     */
    readonly domain?: CfnHttpApi.HttpApiDomainConfigurationProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-failonwarnings
     */
    readonly failOnWarnings?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-routesettings
     */
    readonly routeSettings?: cdk.IResolvable | CfnHttpApi.RouteSettingsProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-stagename
     */
    readonly stageName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-stagevariables
     */
    readonly stageVariables?: cdk.IResolvable | Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-httpapi.html#cfn-serverless-httpapi-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlessapplication.
 *
 * @cloudformationResource AWS::Serverless::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    location: CfnApplication.ApplicationLocationProperty | cdk.IResolvable | string;
    notificationArns?: Array<string>;
    parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    timeoutInMinutes?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-application-applicationlocation.html
     */
    interface ApplicationLocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-application-applicationlocation.html#cfn-serverless-application-applicationlocation-applicationid
         */
        readonly applicationId: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-application-applicationlocation.html#cfn-serverless-application-applicationlocation-semanticversion
         */
        readonly semanticVersion: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html
 */
export interface CfnApplicationProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html#cfn-serverless-application-location
     */
    readonly location: CfnApplication.ApplicationLocationProperty | cdk.IResolvable | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html#cfn-serverless-application-notificationarns
     */
    readonly notificationArns?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html#cfn-serverless-application-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html#cfn-serverless-application-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-application.html#cfn-serverless-application-timeoutinminutes
     */
    readonly timeoutInMinutes?: number;
}
/**
 * https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlesssimpletable.
 *
 * @cloudformationResource AWS::Serverless::SimpleTable
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html
 */
export declare class CfnSimpleTable extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
    /**
     * Build a CfnSimpleTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSimpleTable;
    primaryKey?: cdk.IResolvable | CfnSimpleTable.PrimaryKeyProperty;
    provisionedThroughput?: cdk.IResolvable | CfnSimpleTable.ProvisionedThroughputProperty;
    sseSpecification?: cdk.IResolvable | CfnSimpleTable.SSESpecificationProperty;
    tableName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSimpleTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSimpleTable {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-primarykey.html
     */
    interface PrimaryKeyProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-primarykey.html#cfn-serverless-simpletable-primarykey-name
         */
        readonly name?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-primarykey.html#cfn-serverless-simpletable-primarykey-type
         */
        readonly type: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-provisionedthroughput.html
     */
    interface ProvisionedThroughputProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-provisionedthroughput.html#cfn-serverless-simpletable-provisionedthroughput-readcapacityunits
         */
        readonly readCapacityUnits?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-provisionedthroughput.html#cfn-serverless-simpletable-provisionedthroughput-writecapacityunits
         */
        readonly writeCapacityUnits: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-ssespecification.html
     */
    interface SSESpecificationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-simpletable-ssespecification.html#cfn-serverless-simpletable-ssespecification-sseenabled
         */
        readonly sseEnabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnSimpleTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html
 */
export interface CfnSimpleTableProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html#cfn-serverless-simpletable-primarykey
     */
    readonly primaryKey?: cdk.IResolvable | CfnSimpleTable.PrimaryKeyProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html#cfn-serverless-simpletable-provisionedthroughput
     */
    readonly provisionedThroughput?: cdk.IResolvable | CfnSimpleTable.ProvisionedThroughputProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html#cfn-serverless-simpletable-ssespecification
     */
    readonly sseSpecification?: cdk.IResolvable | CfnSimpleTable.SSESpecificationProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html#cfn-serverless-simpletable-tablename
     */
    readonly tableName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-simpletable.html#cfn-serverless-simpletable-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md#awsserverlesslayerversion.
 *
 * @cloudformationResource AWS::Serverless::LayerVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html
 */
export declare class CfnLayerVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
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
    compatibleRuntimes?: Array<string>;
    contentUri?: cdk.IResolvable | CfnLayerVersion.S3LocationProperty | string;
    description?: string;
    layerName?: string;
    licenseInfo?: string;
    retentionPolicy?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnLayerVersionProps);
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-layerversion-s3location.html
     */
    interface S3LocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-layerversion-s3location.html#cfn-serverless-layerversion-s3location-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-layerversion-s3location.html#cfn-serverless-layerversion-s3location-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-layerversion-s3location.html#cfn-serverless-layerversion-s3location-version
         */
        readonly version?: number;
    }
}
/**
 * Properties for defining a `CfnLayerVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html
 */
export interface CfnLayerVersionProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-compatibleruntimes
     */
    readonly compatibleRuntimes?: Array<string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-contenturi
     */
    readonly contentUri?: cdk.IResolvable | CfnLayerVersion.S3LocationProperty | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-description
     */
    readonly description?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-layername
     */
    readonly layerName?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-licenseinfo
     */
    readonly licenseInfo?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-layerversion.html#cfn-serverless-layerversion-retentionpolicy
     */
    readonly retentionPolicy?: string;
}
/**
 * https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-statemachine.html.
 *
 * @cloudformationResource AWS::Serverless::StateMachine
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html
 */
export declare class CfnStateMachine extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * The `Transform` a template must use in order to use this resource
     */
    static readonly REQUIRED_TRANSFORM: string;
    /**
     * Build a CfnStateMachine from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStateMachine;
    definition?: any | cdk.IResolvable;
    definitionSubstitutions?: cdk.IResolvable | Record<string, string>;
    definitionUri?: cdk.IResolvable | CfnStateMachine.S3LocationProperty | string;
    events?: cdk.IResolvable | Record<string, CfnStateMachine.EventSourceProperty | cdk.IResolvable>;
    logging?: cdk.IResolvable | CfnStateMachine.LoggingConfigurationProperty;
    name?: string;
    permissionsBoundaries?: string;
    policies?: Array<CfnStateMachine.IAMPolicyDocumentProperty | cdk.IResolvable | CfnStateMachine.SAMPolicyTemplateProperty | string> | CfnStateMachine.IAMPolicyDocumentProperty | cdk.IResolvable | string;
    role?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Record<string, string>;
    tracing?: cdk.IResolvable | CfnStateMachine.TracingConfigurationProperty;
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStateMachineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStateMachine {
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-s3location.html
     */
    interface S3LocationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-s3location.html#cfn-serverless-statemachine-s3location-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-s3location.html#cfn-serverless-statemachine-s3location-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-s3location.html#cfn-serverless-statemachine-s3location-version
         */
        readonly version?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventsource.html
     */
    interface EventSourceProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventsource.html#cfn-serverless-statemachine-eventsource-properties
         */
        readonly properties: CfnStateMachine.ApiEventProperty | CfnStateMachine.CloudWatchEventEventProperty | CfnStateMachine.EventBridgeRuleEventProperty | cdk.IResolvable | CfnStateMachine.ScheduleEventProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventsource.html#cfn-serverless-statemachine-eventsource-type
         */
        readonly type: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatcheventevent.html
     */
    interface CloudWatchEventEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatcheventevent.html#cfn-serverless-statemachine-cloudwatcheventevent-eventbusname
         */
        readonly eventBusName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatcheventevent.html#cfn-serverless-statemachine-cloudwatcheventevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatcheventevent.html#cfn-serverless-statemachine-cloudwatcheventevent-inputpath
         */
        readonly inputPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatcheventevent.html#cfn-serverless-statemachine-cloudwatcheventevent-pattern
         */
        readonly pattern: any | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventbridgeruleevent.html
     */
    interface EventBridgeRuleEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventbridgeruleevent.html#cfn-serverless-statemachine-eventbridgeruleevent-eventbusname
         */
        readonly eventBusName?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventbridgeruleevent.html#cfn-serverless-statemachine-eventbridgeruleevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventbridgeruleevent.html#cfn-serverless-statemachine-eventbridgeruleevent-inputpath
         */
        readonly inputPath?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-eventbridgeruleevent.html#cfn-serverless-statemachine-eventbridgeruleevent-pattern
         */
        readonly pattern: any | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-scheduleevent.html
     */
    interface ScheduleEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-scheduleevent.html#cfn-serverless-statemachine-scheduleevent-input
         */
        readonly input?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-scheduleevent.html#cfn-serverless-statemachine-scheduleevent-schedule
         */
        readonly schedule: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-apievent.html
     */
    interface ApiEventProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-apievent.html#cfn-serverless-statemachine-apievent-method
         */
        readonly method: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-apievent.html#cfn-serverless-statemachine-apievent-path
         */
        readonly path: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-apievent.html#cfn-serverless-statemachine-apievent-restapiid
         */
        readonly restApiId?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-loggingconfiguration.html#cfn-serverless-statemachine-loggingconfiguration-destinations
         */
        readonly destinations: Array<cdk.IResolvable | CfnStateMachine.LogDestinationProperty> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-loggingconfiguration.html#cfn-serverless-statemachine-loggingconfiguration-includeexecutiondata
         */
        readonly includeExecutionData: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-loggingconfiguration.html#cfn-serverless-statemachine-loggingconfiguration-level
         */
        readonly level: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-logdestination.html
     */
    interface LogDestinationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-logdestination.html#cfn-serverless-statemachine-logdestination-cloudwatchlogsloggroup
         */
        readonly cloudWatchLogsLogGroup: CfnStateMachine.CloudWatchLogsLogGroupProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatchlogsloggroup.html
     */
    interface CloudWatchLogsLogGroupProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-cloudwatchlogsloggroup.html#cfn-serverless-statemachine-cloudwatchlogsloggroup-loggrouparn
         */
        readonly logGroupArn: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-iampolicydocument.html
     */
    interface IAMPolicyDocumentProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-iampolicydocument.html#cfn-serverless-statemachine-iampolicydocument-statement
         */
        readonly statement: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-iampolicydocument.html#cfn-serverless-statemachine-iampolicydocument-version
         */
        readonly version: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-sampolicytemplate.html
     */
    interface SAMPolicyTemplateProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-sampolicytemplate.html#cfn-serverless-statemachine-sampolicytemplate-lambdainvokepolicy
         */
        readonly lambdaInvokePolicy?: CfnStateMachine.FunctionSAMPTProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-sampolicytemplate.html#cfn-serverless-statemachine-sampolicytemplate-stepfunctionsexecutionpolicy
         */
        readonly stepFunctionsExecutionPolicy?: cdk.IResolvable | CfnStateMachine.StateMachineSAMPTProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-functionsampt.html
     */
    interface FunctionSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-functionsampt.html#cfn-serverless-statemachine-functionsampt-functionname
         */
        readonly functionName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-statemachinesampt.html
     */
    interface StateMachineSAMPTProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-statemachinesampt.html#cfn-serverless-statemachine-statemachinesampt-statemachinename
         */
        readonly stateMachineName: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-tracingconfiguration.html
     */
    interface TracingConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-serverless-statemachine-tracingconfiguration.html#cfn-serverless-statemachine-tracingconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnStateMachine`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html
 */
export interface CfnStateMachineProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-definition
     */
    readonly definition?: any | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-definitionsubstitutions
     */
    readonly definitionSubstitutions?: cdk.IResolvable | Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-definitionuri
     */
    readonly definitionUri?: cdk.IResolvable | CfnStateMachine.S3LocationProperty | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-events
     */
    readonly events?: cdk.IResolvable | Record<string, CfnStateMachine.EventSourceProperty | cdk.IResolvable>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-logging
     */
    readonly logging?: cdk.IResolvable | CfnStateMachine.LoggingConfigurationProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-name
     */
    readonly name?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-permissionsboundaries
     */
    readonly permissionsBoundaries?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-policies
     */
    readonly policies?: Array<CfnStateMachine.IAMPolicyDocumentProperty | cdk.IResolvable | CfnStateMachine.SAMPolicyTemplateProperty | string> | CfnStateMachine.IAMPolicyDocumentProperty | cdk.IResolvable | string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-role
     */
    readonly role?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-tracing
     */
    readonly tracing?: cdk.IResolvable | CfnStateMachine.TracingConfigurationProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-serverless-statemachine.html#cfn-serverless-statemachine-type
     */
    readonly type?: string;
}
