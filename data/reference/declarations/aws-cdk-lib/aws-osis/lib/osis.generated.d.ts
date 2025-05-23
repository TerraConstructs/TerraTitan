import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::OSIS::Pipeline resource creates an Amazon OpenSearch Ingestion pipeline.
 *
 * @cloudformationResource AWS::OSIS::Pipeline
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html
 */
export declare class CfnPipeline extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPipeline from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPipeline;
    /**
     * A list of the ingestion endpoints for the pipeline that you can send data to. Currently, only a single ingestion endpoint is supported for a pipeline. For example, `my-pipeline-123456789012.us-east-1.osis.amazonaws.com` .
     *
     * @cloudformationAttribute IngestEndpointUrls
     */
    readonly attrIngestEndpointUrls: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the pipeline.
     *
     * @cloudformationAttribute PipelineArn
     */
    readonly attrPipelineArn: string;
    /**
     * The VPC interface endpoints that have access to the pipeline.
     *
     * @cloudformationAttribute VpcEndpoints
     */
    readonly attrVpcEndpoints: cdk.IResolvable;
    /**
     * The VPC endpoint service name for the pipeline.
     *
     * @cloudformationAttribute VpcEndpointService
     */
    readonly attrVpcEndpointService: string;
    /**
     * Options that specify the configuration of a persistent buffer.
     */
    bufferOptions?: CfnPipeline.BufferOptionsProperty | cdk.IResolvable;
    /**
     * Options to control how OpenSearch encrypts buffer data.
     */
    encryptionAtRestOptions?: CfnPipeline.EncryptionAtRestOptionsProperty | cdk.IResolvable;
    /**
     * Key-value pairs that represent log publishing settings.
     */
    logPublishingOptions?: cdk.IResolvable | CfnPipeline.LogPublishingOptionsProperty;
    /**
     * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
     */
    maxUnits: number;
    /**
     * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
     */
    minUnits: number;
    /**
     * The Data Prepper pipeline configuration in YAML format.
     */
    pipelineConfigurationBody: string;
    /**
     * The name of the pipeline.
     */
    pipelineName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * List of tags to add to the pipeline upon creation.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
     */
    vpcOptions?: cdk.IResolvable | CfnPipeline.VpcOptionsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPipelineProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPipeline {
    /**
     * Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html
     */
    interface VpcOptionsProperty {
        /**
         * A list of security groups associated with the VPC endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html#cfn-osis-pipeline-vpcoptions-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of subnet IDs associated with the VPC endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html#cfn-osis-pipeline-vpcoptions-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * Options for attaching a VPC to a pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html#cfn-osis-pipeline-vpcoptions-vpcattachmentoptions
         */
        readonly vpcAttachmentOptions?: cdk.IResolvable | CfnPipeline.VpcAttachmentOptionsProperty;
        /**
         * Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcoptions.html#cfn-osis-pipeline-vpcoptions-vpcendpointmanagement
         */
        readonly vpcEndpointManagement?: string;
    }
    /**
     * Options for attaching a VPC to pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcattachmentoptions.html
     */
    interface VpcAttachmentOptionsProperty {
        /**
         * Whether a VPC is attached to the pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcattachmentoptions.html#cfn-osis-pipeline-vpcattachmentoptions-attachtovpc
         */
        readonly attachToVpc: boolean | cdk.IResolvable;
        /**
         * The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcattachmentoptions.html#cfn-osis-pipeline-vpcattachmentoptions-cidrblock
         */
        readonly cidrBlock: string;
    }
    /**
     * Container for the values required to configure logging for the pipeline.
     *
     * If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-logpublishingoptions.html
     */
    interface LogPublishingOptionsProperty {
        /**
         * The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs.
         *
         * This parameter is required if `IsLoggingEnabled` is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-logpublishingoptions.html#cfn-osis-pipeline-logpublishingoptions-cloudwatchlogdestination
         */
        readonly cloudWatchLogDestination?: CfnPipeline.CloudWatchLogDestinationProperty | cdk.IResolvable;
        /**
         * Whether logs should be published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-logpublishingoptions.html#cfn-osis-pipeline-logpublishingoptions-isloggingenabled
         */
        readonly isLoggingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-cloudwatchlogdestination.html
     */
    interface CloudWatchLogDestinationProperty {
        /**
         * The name of the CloudWatch Logs group to send pipeline logs to.
         *
         * You can specify an existing log group or create a new one. For example, `/aws/vendedlogs/OpenSearchService/pipelines` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-cloudwatchlogdestination.html#cfn-osis-pipeline-cloudwatchlogdestination-loggroup
         */
        readonly logGroup: string;
    }
    /**
     * Options that specify the configuration of a persistent buffer.
     *
     * To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions` . For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-bufferoptions.html
     */
    interface BufferOptionsProperty {
        /**
         * Whether persistent buffering should be enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-bufferoptions.html#cfn-osis-pipeline-bufferoptions-persistentbufferenabled
         */
        readonly persistentBufferEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Options to control how OpenSearch encrypts buffer data.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-encryptionatrestoptions.html
     */
    interface EncryptionAtRestOptionsProperty {
        /**
         * The ARN of the KMS key used to encrypt buffer data.
         *
         * By default, data is encrypted using an AWS owned key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-encryptionatrestoptions.html#cfn-osis-pipeline-encryptionatrestoptions-kmskeyarn
         */
        readonly kmsKeyArn: string;
    }
    /**
     * An OpenSearch Ingestion-managed VPC endpoint that will access one or more pipelines.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html
     */
    interface VpcEndpointProperty {
        /**
         * The unique identifier of the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html#cfn-osis-pipeline-vpcendpoint-vpcendpointid
         */
        readonly vpcEndpointId?: string;
        /**
         * The ID for your VPC.
         *
         * AWS PrivateLink generates this value when you create a VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html#cfn-osis-pipeline-vpcendpoint-vpcid
         */
        readonly vpcId?: string;
        /**
         * Information about the VPC, including associated subnets and security groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-osis-pipeline-vpcendpoint.html#cfn-osis-pipeline-vpcendpoint-vpcoptions
         */
        readonly vpcOptions?: cdk.IResolvable | CfnPipeline.VpcOptionsProperty;
    }
}
/**
 * Properties for defining a `CfnPipeline`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html
 */
export interface CfnPipelineProps {
    /**
     * Options that specify the configuration of a persistent buffer.
     *
     * To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions` . For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-bufferoptions
     */
    readonly bufferOptions?: CfnPipeline.BufferOptionsProperty | cdk.IResolvable;
    /**
     * Options to control how OpenSearch encrypts buffer data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-encryptionatrestoptions
     */
    readonly encryptionAtRestOptions?: CfnPipeline.EncryptionAtRestOptionsProperty | cdk.IResolvable;
    /**
     * Key-value pairs that represent log publishing settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-logpublishingoptions
     */
    readonly logPublishingOptions?: cdk.IResolvable | CfnPipeline.LogPublishingOptionsProperty;
    /**
     * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-maxunits
     */
    readonly maxUnits: number;
    /**
     * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-minunits
     */
    readonly minUnits: number;
    /**
     * The Data Prepper pipeline configuration in YAML format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-pipelineconfigurationbody
     */
    readonly pipelineConfigurationBody: string;
    /**
     * The name of the pipeline.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-pipelinename
     */
    readonly pipelineName: string;
    /**
     * List of tags to add to the pipeline upon creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions
     */
    readonly vpcOptions?: cdk.IResolvable | CfnPipeline.VpcOptionsProperty;
}
