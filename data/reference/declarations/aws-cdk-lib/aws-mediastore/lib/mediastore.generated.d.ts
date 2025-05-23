import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::MediaStore::Container resource specifies a storage container to hold objects.
 *
 * A container is similar to a bucket in Amazon S3.
 *
 * When you create a container using AWS CloudFormation , the template manages data for five API actions: creating a container, setting access logging, updating the default container policy, adding a cross-origin resource sharing (CORS) policy, and adding an object lifecycle policy.
 *
 * @cloudformationResource AWS::MediaStore::Container
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html
 */
export declare class CfnContainer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContainer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContainer;
    /**
     * The DNS endpoint of the container. Use the endpoint to identify the specific container when sending requests to the data plane. The service assigns this value when the container is created. Once the value has been assigned, it does not change.
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The state of access logging on the container.
     */
    accessLoggingEnabled?: boolean | cdk.IResolvable;
    /**
     * The name for the container.
     */
    containerName: string;
    /**
     * > End of support notice: On November 13, 2025, AWS will discontinue support for AWS Elemental MediaStore.
     */
    corsPolicy?: Array<CfnContainer.CorsRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * > End of support notice: On November 13, 2025, AWS will discontinue support for AWS Elemental MediaStore.
     */
    lifecyclePolicy?: string;
    /**
     * The metric policy that is associated with the container.
     */
    metricPolicy?: cdk.IResolvable | CfnContainer.MetricPolicyProperty;
    /**
     * Creates an access policy for the specified container to restrict the users and clients that can access it.
     */
    policy?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnContainerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContainer {
    /**
     * The metric policy that is associated with the container.
     *
     * A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.
     *
     * To view examples of how to construct a metric policy for your use case, see [Example Metric Policies](https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html
     */
    interface MetricPolicyProperty {
        /**
         * A setting to enable or disable metrics at the container level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html#cfn-mediastore-container-metricpolicy-containerlevelmetrics
         */
        readonly containerLevelMetrics: string;
        /**
         * A parameter that holds an array of rules that enable metrics at the object level.
         *
         * This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also [request a quota increase](https://docs.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicy.html#cfn-mediastore-container-metricpolicy-metricpolicyrules
         */
        readonly metricPolicyRules?: Array<cdk.IResolvable | CfnContainer.MetricPolicyRuleProperty> | cdk.IResolvable;
    }
    /**
     * A setting that enables metrics at the object level.
     *
     * Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also [request a quota increase](https://docs.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas) to allow up to 300 rules per policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html
     */
    interface MetricPolicyRuleProperty {
        /**
         * A path or file name that defines which objects to include in the group.
         *
         * Wildcards (*) are acceptable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html#cfn-mediastore-container-metricpolicyrule-objectgroup
         */
        readonly objectGroup: string;
        /**
         * A name that allows you to refer to the object group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-metricpolicyrule.html#cfn-mediastore-container-metricpolicyrule-objectgroupname
         */
        readonly objectGroupName: string;
    }
    /**
     * A rule for a CORS policy.
     *
     * You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html
     */
    interface CorsRuleProperty {
        /**
         * Specifies which headers are allowed in a preflight `OPTIONS` request through the `Access-Control-Request-Headers` header.
         *
         * Each header name that is specified in `Access-Control-Request-Headers` must have a corresponding entry in the rule. Only the headers that were requested are sent back.
         *
         * This element can contain only one wildcard character (*).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html#cfn-mediastore-container-corsrule-allowedheaders
         */
        readonly allowedHeaders?: Array<string>;
        /**
         * Identifies an HTTP method that the origin that is specified in the rule is allowed to execute.
         *
         * Each CORS rule must contain at least one `AllowedMethods` and one `AllowedOrigins` element.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html#cfn-mediastore-container-corsrule-allowedmethods
         */
        readonly allowedMethods?: Array<string>;
        /**
         * One or more response headers that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
         *
         * Each CORS rule must have at least one `AllowedOrigins` element. The string value can include only one wildcard character (*), for example, http://*.example.com. Additionally, you can specify only one wildcard character to allow cross-origin access for all origins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html#cfn-mediastore-container-corsrule-allowedorigins
         */
        readonly allowedOrigins?: Array<string>;
        /**
         * One or more headers in the response that you want users to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
         *
         * This element is optional for each rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html#cfn-mediastore-container-corsrule-exposeheaders
         */
        readonly exposeHeaders?: Array<string>;
        /**
         * The time in seconds that your browser caches the preflight response for the specified resource.
         *
         * A CORS rule can have only one `MaxAgeSeconds` element.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediastore-container-corsrule.html#cfn-mediastore-container-corsrule-maxageseconds
         */
        readonly maxAgeSeconds?: number;
    }
}
/**
 * Properties for defining a `CfnContainer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html
 */
export interface CfnContainerProps {
    /**
     * The state of access logging on the container.
     *
     * This value is `false` by default, indicating that AWS Elemental MediaStore does not send access logs to Amazon CloudWatch Logs. When you enable access logging on the container, MediaStore changes this value to `true` , indicating that the service delivers access logs for objects stored in that container to CloudWatch Logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-accessloggingenabled
     */
    readonly accessLoggingEnabled?: boolean | cdk.IResolvable;
    /**
     * The name for the container.
     *
     * The name must be from 1 to 255 characters. Container names must be unique to your AWS account within a specific region. As an example, you could create a container named `movies` in every region, as long as you don’t have an existing container with that name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-containername
     */
    readonly containerName: string;
    /**
     * > End of support notice: On November 13, 2025, AWS will discontinue support for AWS Elemental MediaStore.
     *
     * After November 13, 2025, you will no longer be able to access the AWS Elemental MediaStore console or AWS Elemental MediaStore resources. For more information, visit this [blog post](https://docs.aws.amazon.com/media/support-for-aws-elemental-mediastore-ending-soon/) .
     *
     * Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.
     *
     * To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
     *
     * To learn more about CORS, see [Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore](https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-corspolicy
     */
    readonly corsPolicy?: Array<CfnContainer.CorsRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * > End of support notice: On November 13, 2025, AWS will discontinue support for AWS Elemental MediaStore.
     *
     * After November 13, 2025, you will no longer be able to access the AWS Elemental MediaStore console or AWS Elemental MediaStore resources. For more information, visit this [blog post](https://docs.aws.amazon.com/media/support-for-aws-elemental-mediastore-ending-soon/) .
     *
     * Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.
     *
     * For information about how to construct an object lifecycle policy, see [Components of an Object Lifecycle Policy](https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-lifecyclepolicy
     */
    readonly lifecyclePolicy?: string;
    /**
     * The metric policy that is associated with the container.
     *
     * A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.
     *
     * To view examples of how to construct a metric policy for your use case, see [Example Metric Policies](https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-metricpolicy
     */
    readonly metricPolicy?: cdk.IResolvable | CfnContainer.MetricPolicyProperty;
    /**
     * Creates an access policy for the specified container to restrict the users and clients that can access it.
     *
     * For information about the data that is included in an access policy, see the [AWS Identity and Access Management User Guide](https://docs.aws.amazon.com/iam/) .
     *
     * For this release of the REST API, you can create only one policy for a container. If you enter `PutContainerPolicy` twice, the second command modifies the existing policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-policy
     */
    readonly policy?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediastore-container.html#cfn-mediastore-container-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
