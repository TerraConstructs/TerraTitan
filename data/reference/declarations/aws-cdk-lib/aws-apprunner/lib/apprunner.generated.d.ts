import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specify an AWS App Runner Automatic Scaling configuration by using the `AWS::AppRunner::AutoScalingConfiguration` resource in an AWS CloudFormation template.
 *
 * The `AWS::AppRunner::AutoScalingConfiguration` resource is an AWS App Runner resource type that specifies an App Runner automatic scaling configuration.
 *
 * App Runner requires this resource to set non-default auto scaling settings for instances used to process the web requests. You can share an auto scaling configuration across multiple services.
 *
 * Create multiple revisions of a configuration by calling this action multiple times using the same `AutoScalingConfigurationName` . The call returns incremental `AutoScalingConfigurationRevision` values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.
 *
 * Configure a higher `MinSize` to increase the spread of your App Runner service over more Availability Zones in the AWS Region . The tradeoff is a higher minimal cost.
 *
 * Configure a lower `MaxSize` to control your cost. The tradeoff is lower responsiveness during peak demand.
 *
 * @cloudformationResource AWS::AppRunner::AutoScalingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html
 */
export declare class CfnAutoScalingConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAutoScalingConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAutoScalingConfiguration;
    /**
     * The Amazon Resource Name (ARN) of this auto scaling configuration.
     *
     * @cloudformationAttribute AutoScalingConfigurationArn
     */
    readonly attrAutoScalingConfigurationArn: string;
    /**
     * The revision of this auto scaling configuration. It's unique among all the active configurations that share the same `AutoScalingConfigurationName` .
     *
     * @cloudformationAttribute AutoScalingConfigurationRevision
     */
    readonly attrAutoScalingConfigurationRevision: number;
    /**
     * It's set to true for the configuration with the highest `Revision` among all configurations that share the same `AutoScalingConfigurationName` . It's set to false otherwise. App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
     *
     * @cloudformationAttribute Latest
     */
    readonly attrLatest: cdk.IResolvable;
    /**
     * The customer-provided auto scaling configuration name.
     */
    autoScalingConfigurationName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The maximum number of concurrent requests that an instance processes.
     */
    maxConcurrency?: number;
    /**
     * The maximum number of instances that a service scales up to.
     */
    maxSize?: number;
    /**
     * The minimum number of instances that App Runner provisions for a service.
     */
    minSize?: number;
    /**
     * A list of metadata items that you can associate with your auto scaling configuration resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAutoScalingConfigurationProps);
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
 * Properties for defining a `CfnAutoScalingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html
 */
export interface CfnAutoScalingConfigurationProps {
    /**
     * The customer-provided auto scaling configuration name.
     *
     * It can be used in multiple revisions of a configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-autoscalingconfigurationname
     */
    readonly autoScalingConfigurationName?: string;
    /**
     * The maximum number of concurrent requests that an instance processes.
     *
     * If the number of concurrent requests exceeds this limit, App Runner scales the service up.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-maxconcurrency
     */
    readonly maxConcurrency?: number;
    /**
     * The maximum number of instances that a service scales up to.
     *
     * At most `MaxSize` instances actively serve traffic for your service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-maxsize
     */
    readonly maxSize?: number;
    /**
     * The minimum number of instances that App Runner provisions for a service.
     *
     * The service always has at least `MinSize` provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
     *
     * App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-minsize
     */
    readonly minSize?: number;
    /**
     * A list of metadata items that you can associate with your auto scaling configuration resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specify an AWS App Runner observability configuration by using the `AWS::AppRunner::ObservabilityConfiguration` resource in an AWS CloudFormation template.
 *
 * The `AWS::AppRunner::ObservabilityConfiguration` resource is an AWS App Runner resource type that specifies an App Runner observability configuration.
 *
 * App Runner requires this resource when you specify App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.
 *
 * Create multiple revisions of a configuration by specifying this resource multiple times using the same `ObservabilityConfigurationName` . App Runner creates multiple resources with incremental `ObservabilityConfigurationRevision` values. When you specify a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.
 *
 * The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This resource takes optional parameters that describe the configuration of these features (currently one parameter, `TraceConfiguration` ). If you don't specify a feature parameter, App Runner doesn't enable the feature.
 *
 * @cloudformationResource AWS::AppRunner::ObservabilityConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html
 */
export declare class CfnObservabilityConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnObservabilityConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnObservabilityConfiguration;
    /**
     * It's set to `true` for the configuration with the highest `Revision` among all configurations that share the same `ObservabilityConfigurationName` . It's set to `false` otherwise.
     *
     * @cloudformationAttribute Latest
     */
    readonly attrLatest: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of this observability configuration.
     *
     * @cloudformationAttribute ObservabilityConfigurationArn
     */
    readonly attrObservabilityConfigurationArn: string;
    /**
     * The revision of this observability configuration. It's unique among all the active configurations ( `"Status": "ACTIVE"` ) that share the same `ObservabilityConfigurationName` .
     *
     * @cloudformationAttribute ObservabilityConfigurationRevision
     */
    readonly attrObservabilityConfigurationRevision: number;
    /**
     * A name for the observability configuration.
     */
    observabilityConfigurationName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of metadata items that you can associate with your observability configuration resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The configuration of the tracing feature within this observability configuration.
     */
    traceConfiguration?: cdk.IResolvable | CfnObservabilityConfiguration.TraceConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnObservabilityConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnObservabilityConfiguration {
    /**
     * Describes the configuration of the tracing feature within an AWS App Runner observability configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html
     */
    interface TraceConfigurationProperty {
        /**
         * The implementation provider chosen for tracing App Runner services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html#cfn-apprunner-observabilityconfiguration-traceconfiguration-vendor
         */
        readonly vendor: string;
    }
}
/**
 * Properties for defining a `CfnObservabilityConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html
 */
export interface CfnObservabilityConfigurationProps {
    /**
     * A name for the observability configuration.
     *
     * When you use it for the first time in an AWS Region , App Runner creates revision number `1` of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
     *
     * > The name `DefaultConfiguration` is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it.
     * >
     * > When you want to use your own observability configuration for your App Runner service, *create a configuration with a different name* , and then provide it when you create or update your service.
     *
     * If you don't specify a name, AWS CloudFormation generates a name for your observability configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-observabilityconfigurationname
     */
    readonly observabilityConfigurationName?: string;
    /**
     * A list of metadata items that you can associate with your observability configuration resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The configuration of the tracing feature within this observability configuration.
     *
     * If you don't specify it, App Runner doesn't enable tracing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-traceconfiguration
     */
    readonly traceConfiguration?: cdk.IResolvable | CfnObservabilityConfiguration.TraceConfigurationProperty;
}
/**
 * Specify an AWS App Runner service by using the `AWS::AppRunner::Service` resource in an AWS CloudFormation template.
 *
 * The `AWS::AppRunner::Service` resource is an AWS App Runner resource type that specifies an App Runner service.
 *
 * @cloudformationResource AWS::AppRunner::Service
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html
 */
export declare class CfnService extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnService from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnService;
    /**
     * The Amazon Resource Name (ARN) of this service.
     *
     * @cloudformationAttribute ServiceArn
     */
    readonly attrServiceArn: string;
    /**
     * An ID that App Runner generated for this service. It's unique within the AWS Region .
     *
     * @cloudformationAttribute ServiceId
     */
    readonly attrServiceId: string;
    /**
     * A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.
     *
     * @cloudformationAttribute ServiceUrl
     */
    readonly attrServiceUrl: string;
    /**
     * The current state of the App Runner service. These particular values mean the following.
     *
     * - `CREATE_FAILED` – The service failed to create. The failed service isn't usable, and still counts towards your service quota. To troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and rebuild your service using `UpdateService` .
     * - `DELETE_FAILED` – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service.
     */
    autoScalingConfigurationArn?: string;
    /**
     * An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs.
     */
    encryptionConfiguration?: CfnService.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The settings for the health check that AWS App Runner performs to monitor the health of the App Runner service.
     */
    healthCheckConfiguration?: CfnService.HealthCheckConfigurationProperty | cdk.IResolvable;
    /**
     * The runtime configuration of instances (scaling units) of your service.
     */
    instanceConfiguration?: CfnService.InstanceConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration settings related to network traffic of the web application that the App Runner service runs.
     */
    networkConfiguration?: cdk.IResolvable | CfnService.NetworkConfigurationProperty;
    /**
     * The observability configuration of your service.
     */
    observabilityConfiguration?: cdk.IResolvable | CfnService.ServiceObservabilityConfigurationProperty;
    /**
     * A name for the App Runner service.
     */
    serviceName?: string;
    /**
     * The source to deploy to the App Runner service.
     */
    sourceConfiguration: cdk.IResolvable | CfnService.SourceConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An optional list of metadata items that you can associate with the App Runner service resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServiceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnService {
    /**
     * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html
     */
    interface HealthCheckConfigurationProperty {
        /**
         * The number of consecutive checks that must succeed before App Runner decides that the service is healthy.
         *
         * Default: `1`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-healthythreshold
         */
        readonly healthyThreshold?: number;
        /**
         * The time interval, in seconds, between health checks.
         *
         * Default: `5`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-interval
         */
        readonly interval?: number;
        /**
         * The URL that health check requests are sent to.
         *
         * `Path` is only applicable when you set `Protocol` to `HTTP` .
         *
         * Default: `"/"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-path
         */
        readonly path?: string;
        /**
         * The IP protocol that App Runner uses to perform health checks for your service.
         *
         * If you set `Protocol` to `HTTP` , App Runner sends health check requests to the HTTP path specified by `Path` .
         *
         * Default: `TCP`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-protocol
         */
        readonly protocol?: string;
        /**
         * The time, in seconds, to wait for a health check response before deciding it failed.
         *
         * Default: `2`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-timeout
         */
        readonly timeout?: number;
        /**
         * The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.
         *
         * Default: `5`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-healthcheckconfiguration.html#cfn-apprunner-service-healthcheckconfiguration-unhealthythreshold
         */
        readonly unhealthyThreshold?: number;
    }
    /**
     * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html
     */
    interface InstanceConfigurationProperty {
        /**
         * The number of CPU units reserved for each instance of your App Runner service.
         *
         * Default: `1 vCPU`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html#cfn-apprunner-service-instanceconfiguration-cpu
         */
        readonly cpu?: string;
        /**
         * The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service.
         *
         * These are permissions that your code needs when it calls any AWS APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html#cfn-apprunner-service-instanceconfiguration-instancerolearn
         */
        readonly instanceRoleArn?: string;
        /**
         * The amount of memory, in MB or GB, reserved for each instance of your App Runner service.
         *
         * Default: `2 GB`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-instanceconfiguration.html#cfn-apprunner-service-instanceconfiguration-memory
         */
        readonly memory?: string;
    }
    /**
     * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The ARN of the KMS key that's used for encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-encryptionconfiguration.html#cfn-apprunner-service-encryptionconfiguration-kmskey
         */
        readonly kmsKey: string;
    }
    /**
     * Describes the observability configuration of an AWS App Runner service.
     *
     * These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html
     */
    interface ServiceObservabilityConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the observability configuration that is associated with the service.
         *
         * Specified only when `ObservabilityEnabled` is `true` .
         *
         * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3`
         *
         * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html#cfn-apprunner-service-serviceobservabilityconfiguration-observabilityconfigurationarn
         */
        readonly observabilityConfigurationArn?: string;
        /**
         * When `true` , an observability configuration resource is associated with the service, and an `ObservabilityConfigurationArn` is specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-serviceobservabilityconfiguration.html#cfn-apprunner-service-serviceobservabilityconfiguration-observabilityenabled
         */
        readonly observabilityEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Describes the source deployed to an AWS App Runner service.
     *
     * It can be a code or an image repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html
     */
    interface SourceConfigurationProperty {
        /**
         * Describes the resources that are needed to authenticate access to some source repositories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html#cfn-apprunner-service-sourceconfiguration-authenticationconfiguration
         */
        readonly authenticationConfiguration?: CfnService.AuthenticationConfigurationProperty | cdk.IResolvable;
        /**
         * If `true` , continuous integration from the source repository is enabled for the App Runner service.
         *
         * Each repository change (including any source code commit or new image version) starts a deployment.
         *
         * Default: App Runner sets to `false` for a source image that uses an ECR Public repository or an ECR repository that's in an AWS account other than the one that the service is in. App Runner sets to `true` in all other cases (which currently include a source code repository or a source image using a same-account ECR repository).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html#cfn-apprunner-service-sourceconfiguration-autodeploymentsenabled
         */
        readonly autoDeploymentsEnabled?: boolean | cdk.IResolvable;
        /**
         * The description of a source code repository.
         *
         * You must provide either this member or `ImageRepository` (but not both).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html#cfn-apprunner-service-sourceconfiguration-coderepository
         */
        readonly codeRepository?: CfnService.CodeRepositoryProperty | cdk.IResolvable;
        /**
         * The description of a source image repository.
         *
         * You must provide either this member or `CodeRepository` (but not both).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourceconfiguration.html#cfn-apprunner-service-sourceconfiguration-imagerepository
         */
        readonly imageRepository?: CfnService.ImageRepositoryProperty | cdk.IResolvable;
    }
    /**
     * Describes resources needed to authenticate access to some source repositories.
     *
     * The specific resource depends on the repository provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html
     */
    interface AuthenticationConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository.
         *
         * It's required for ECR image repositories (but not for ECR Public repositories).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html#cfn-apprunner-service-authenticationconfiguration-accessrolearn
         */
        readonly accessRoleArn?: string;
        /**
         * The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository.
         *
         * It's required for GitHub code repositories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-authenticationconfiguration.html#cfn-apprunner-service-authenticationconfiguration-connectionarn
         */
        readonly connectionArn?: string;
    }
    /**
     * Describes a source code repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html
     */
    interface CodeRepositoryProperty {
        /**
         * Configuration for building and running the service from a source code repository.
         *
         * > `CodeConfiguration` is required only for `CreateService` request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html#cfn-apprunner-service-coderepository-codeconfiguration
         */
        readonly codeConfiguration?: CfnService.CodeConfigurationProperty | cdk.IResolvable;
        /**
         * The location of the repository that contains the source code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html#cfn-apprunner-service-coderepository-repositoryurl
         */
        readonly repositoryUrl: string;
        /**
         * The version that should be used within the source code repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html#cfn-apprunner-service-coderepository-sourcecodeversion
         */
        readonly sourceCodeVersion: cdk.IResolvable | CfnService.SourceCodeVersionProperty;
        /**
         * The path of the directory that stores source code and configuration files.
         *
         * The build and start commands also execute from here. The path is absolute from root and, if not specified, defaults to the repository root.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-coderepository.html#cfn-apprunner-service-coderepository-sourcedirectory
         */
        readonly sourceDirectory?: string;
    }
    /**
     * Identifies a version of code that AWS App Runner refers to within a source code repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html
     */
    interface SourceCodeVersionProperty {
        /**
         * The type of version identifier.
         *
         * For a git-based repository, branches represent versions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html#cfn-apprunner-service-sourcecodeversion-type
         */
        readonly type: string;
        /**
         * A source code version.
         *
         * For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-sourcecodeversion.html#cfn-apprunner-service-sourcecodeversion-value
         */
        readonly value: string;
    }
    /**
     * Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html
     */
    interface CodeConfigurationProperty {
        /**
         * The basic configuration for building and running the App Runner service.
         *
         * Use it to quickly launch an App Runner service without providing a `apprunner.yaml` file in the source code repository (or ignoring the file if it exists).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html#cfn-apprunner-service-codeconfiguration-codeconfigurationvalues
         */
        readonly codeConfigurationValues?: CfnService.CodeConfigurationValuesProperty | cdk.IResolvable;
        /**
         * The source of the App Runner configuration. Values are interpreted as follows:.
         *
         * - `REPOSITORY` – App Runner reads configuration values from the `apprunner.yaml` file in the source code repository and ignores `CodeConfigurationValues` .
         * - `API` – App Runner uses configuration values provided in `CodeConfigurationValues` and ignores the `apprunner.yaml` file in the source code repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfiguration.html#cfn-apprunner-service-codeconfiguration-configurationsource
         */
        readonly configurationSource: string;
    }
    /**
     * Describes the basic configuration needed for building and running an AWS App Runner service.
     *
     * This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a `apprunner.yaml` file in the source code repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html
     */
    interface CodeConfigurationValuesProperty {
        /**
         * The command App Runner runs to build your application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-buildcommand
         */
        readonly buildCommand?: string;
        /**
         * The port that your application listens to in the container.
         *
         * Default: `8080`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-port
         */
        readonly port?: string;
        /**
         * A runtime environment type for building and running an App Runner service.
         *
         * It represents a programming language runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-runtime
         */
        readonly runtime: string;
        /**
         * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable.
         *
         * The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
         *
         * > - If the AWS Systems Manager Parameter Store parameter exists in the same AWS Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified.
         * > - Currently, cross account referencing of AWS Systems Manager Parameter Store parameter is not supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-runtimeenvironmentsecrets
         */
        readonly runtimeEnvironmentSecrets?: Array<cdk.IResolvable | CfnService.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * The environment variables that are available to your running AWS App Runner service.
         *
         * An array of key-value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-runtimeenvironmentvariables
         */
        readonly runtimeEnvironmentVariables?: Array<cdk.IResolvable | CfnService.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * The command App Runner runs to start your application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-codeconfigurationvalues.html#cfn-apprunner-service-codeconfigurationvalues-startcommand
         */
        readonly startCommand?: string;
    }
    /**
     * Describes a key-value pair, which is a string-to-string mapping.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html
     */
    interface KeyValuePairProperty {
        /**
         * The key name string to map to a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html#cfn-apprunner-service-keyvaluepair-name
         */
        readonly name?: string;
        /**
         * The value string to which the key name is mapped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-keyvaluepair.html#cfn-apprunner-service-keyvaluepair-value
         */
        readonly value?: string;
    }
    /**
     * Describes a source image repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html
     */
    interface ImageRepositoryProperty {
        /**
         * Configuration for running the identified image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html#cfn-apprunner-service-imagerepository-imageconfiguration
         */
        readonly imageConfiguration?: CfnService.ImageConfigurationProperty | cdk.IResolvable;
        /**
         * The identifier of an image.
         *
         * For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see [Pulling an image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the *Amazon ECR User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html#cfn-apprunner-service-imagerepository-imageidentifier
         */
        readonly imageIdentifier: string;
        /**
         * The type of the image repository.
         *
         * This reflects the repository provider and whether the repository is private or public.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imagerepository.html#cfn-apprunner-service-imagerepository-imagerepositorytype
         */
        readonly imageRepositoryType: string;
    }
    /**
     * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html
     */
    interface ImageConfigurationProperty {
        /**
         * The port that your application listens to in the container.
         *
         * Default: `8080`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html#cfn-apprunner-service-imageconfiguration-port
         */
        readonly port?: string;
        /**
         * An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable.
         *
         * The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
         *
         * > - If the AWS Systems Manager Parameter Store parameter exists in the same AWS Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified.
         * > - Currently, cross account referencing of AWS Systems Manager Parameter Store parameter is not supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html#cfn-apprunner-service-imageconfiguration-runtimeenvironmentsecrets
         */
        readonly runtimeEnvironmentSecrets?: Array<cdk.IResolvable | CfnService.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * Environment variables that are available to your running App Runner service.
         *
         * An array of key-value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html#cfn-apprunner-service-imageconfiguration-runtimeenvironmentvariables
         */
        readonly runtimeEnvironmentVariables?: Array<cdk.IResolvable | CfnService.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * An optional command that App Runner runs to start the application in the source image.
         *
         * If specified, this command overrides the Docker image’s default start command.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-imageconfiguration.html#cfn-apprunner-service-imageconfiguration-startcommand
         */
        readonly startCommand?: string;
    }
    /**
     * Describes configuration settings related to network traffic of an AWS App Runner service.
     *
     * Consists of embedded objects for each configurable network feature.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * Network configuration settings for outbound message traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html#cfn-apprunner-service-networkconfiguration-egressconfiguration
         */
        readonly egressConfiguration?: CfnService.EgressConfigurationProperty | cdk.IResolvable;
        /**
         * Network configuration settings for inbound message traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html#cfn-apprunner-service-networkconfiguration-ingressconfiguration
         */
        readonly ingressConfiguration?: CfnService.IngressConfigurationProperty | cdk.IResolvable;
        /**
         * App Runner provides you with the option to choose between *Internet Protocol version 4 (IPv4)* and *dual stack* (IPv4 and IPv6) for your incoming public network configuration.
         *
         * This is an optional parameter. If you do not specify an `IpAddressType` , it defaults to select IPv4.
         *
         * > Currently, App Runner supports dual stack for only Public endpoint. Only IPv4 is supported for Private endpoint. If you update a service that's using dual-stack Public endpoint to a Private endpoint, your App Runner service will default to support only IPv4 for Private endpoint and fail to receive traffic originating from IPv6 endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-networkconfiguration.html#cfn-apprunner-service-networkconfiguration-ipaddresstype
         */
        readonly ipAddressType?: string;
    }
    /**
     * Describes configuration settings related to outbound network traffic of an AWS App Runner service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html
     */
    interface EgressConfigurationProperty {
        /**
         * The type of egress configuration.
         *
         * Set to `DEFAULT` for access to resources hosted on public networks.
         *
         * Set to `VPC` to associate your service to a custom VPC specified by `VpcConnectorArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html#cfn-apprunner-service-egressconfiguration-egresstype
         */
        readonly egressType: string;
        /**
         * The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service.
         *
         * Only valid when `EgressType = VPC` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-egressconfiguration.html#cfn-apprunner-service-egressconfiguration-vpcconnectorarn
         */
        readonly vpcConnectorArn?: string;
    }
    /**
     * Network configuration settings for inbound network traffic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-ingressconfiguration.html
     */
    interface IngressConfigurationProperty {
        /**
         * Specifies whether your App Runner service is publicly accessible.
         *
         * To make the service publicly accessible set it to `True` . To make the service privately accessible, from only within an Amazon VPC set it to `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-service-ingressconfiguration.html#cfn-apprunner-service-ingressconfiguration-ispubliclyaccessible
         */
        readonly isPubliclyAccessible: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnService`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html
 */
export interface CfnServiceProps {
    /**
     * The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service.
     *
     * If not provided, App Runner associates the latest revision of a default auto scaling configuration.
     *
     * Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3`
     *
     * Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-autoscalingconfigurationarn
     */
    readonly autoScalingConfigurationArn?: string;
    /**
     * An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs.
     *
     * By default, App Runner uses an AWS managed key .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnService.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The settings for the health check that AWS App Runner performs to monitor the health of the App Runner service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration
     */
    readonly healthCheckConfiguration?: CfnService.HealthCheckConfigurationProperty | cdk.IResolvable;
    /**
     * The runtime configuration of instances (scaling units) of your service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-instanceconfiguration
     */
    readonly instanceConfiguration?: CfnService.InstanceConfigurationProperty | cdk.IResolvable;
    /**
     * Configuration settings related to network traffic of the web application that the App Runner service runs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnService.NetworkConfigurationProperty;
    /**
     * The observability configuration of your service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-observabilityconfiguration
     */
    readonly observabilityConfiguration?: cdk.IResolvable | CfnService.ServiceObservabilityConfigurationProperty;
    /**
     * A name for the App Runner service.
     *
     * It must be unique across all the running App Runner services in your AWS account in the AWS Region .
     *
     * If you don't specify a name, AWS CloudFormation generates a name for your service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-servicename
     */
    readonly serviceName?: string;
    /**
     * The source to deploy to the App Runner service.
     *
     * It can be a code or an image repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration
     */
    readonly sourceConfiguration: cdk.IResolvable | CfnService.SourceConfigurationProperty;
    /**
     * An optional list of metadata items that you can associate with the App Runner service resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specify an AWS App Runner VPC connector by using the `AWS::AppRunner::VpcConnector` resource in an AWS CloudFormation template.
 *
 * The `AWS::AppRunner::VpcConnector` resource is an AWS App Runner resource type that specifies an App Runner VPC connector.
 *
 * App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud ( Amazon VPC ).
 *
 * @cloudformationResource AWS::AppRunner::VpcConnector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html
 */
export declare class CfnVpcConnector extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcConnector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcConnector;
    /**
     * The Amazon Resource Name (ARN) of this VPC connector.
     *
     * @cloudformationAttribute VpcConnectorArn
     */
    readonly attrVpcConnectorArn: string;
    /**
     * The revision of this VPC connector. It's unique among all the active connectors ( `"Status": "ACTIVE"` ) that share the same `Name` .
     *
     * > At this time, App Runner supports only one revision per name.
     *
     * @cloudformationAttribute VpcConnectorRevision
     */
    readonly attrVpcConnectorRevision: number;
    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets.
     */
    securityGroups?: Array<string>;
    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC.
     */
    subnets: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of metadata items that you can associate with your VPC connector resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A name for the VPC connector.
     */
    vpcConnectorName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcConnectorProps);
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
 * Properties for defining a `CfnVpcConnector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html
 */
export interface CfnVpcConnectorProps {
    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets.
     *
     * If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-securitygroups
     */
    readonly securityGroups?: Array<string>;
    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC.
     *
     * Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     *
     * > App Runner currently only provides support for IPv4.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-subnets
     */
    readonly subnets: Array<string>;
    /**
     * A list of metadata items that you can associate with your VPC connector resource.
     *
     * A tag is a key-value pair.
     *
     * > A `VpcConnector` is immutable, so you cannot update its tags. To change the tags, replace the resource. To replace a `VpcConnector` , you must provide a new combination of security groups.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A name for the VPC connector.
     *
     * If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-vpcconnectorname
     */
    readonly vpcConnectorName?: string;
}
/**
 * Specify an AWS App Runner VPC Ingress Connection by using the `AWS::AppRunner::VpcIngressConnection` resource in an AWS CloudFormation template.
 *
 * The `AWS::AppRunner::VpcIngressConnection` resource is an AWS App Runner resource type that specifies an App Runner VPC Ingress Connection.
 *
 * App Runner requires this resource when you want to associate your App Runner service to an Amazon VPC endpoint.
 *
 * @cloudformationResource AWS::AppRunner::VpcIngressConnection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html
 */
export declare class CfnVpcIngressConnection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcIngressConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcIngressConnection;
    /**
     * The domain name associated with the VPC Ingress Connection resource.
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * The current status of the VPC Ingress Connection. The VPC Ingress Connection displays one of the following statuses: `AVAILABLE` , `PENDING_CREATION` , `PENDING_UPDATE` , `PENDING_DELETION` , `FAILED_CREATION` , `FAILED_UPDATE` , `FAILED_DELETION` , and `DELETED` ..
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the VPC Ingress Connection.
     *
     * @cloudformationAttribute VpcIngressConnectionArn
     */
    readonly attrVpcIngressConnectionArn: string;
    /**
     * Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
     */
    ingressVpcConfiguration: CfnVpcIngressConnection.IngressVpcConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
     */
    serviceArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An optional list of metadata items that you can associate with the VPC Ingress Connection resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The customer-provided VPC Ingress Connection name.
     */
    vpcIngressConnectionName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcIngressConnectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVpcIngressConnection {
    /**
     * Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html
     */
    interface IngressVpcConfigurationProperty {
        /**
         * The ID of the VPC endpoint that your App Runner service connects to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration-vpcendpointid
         */
        readonly vpcEndpointId: string;
        /**
         * The ID of the VPC that is used for the VPC endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration-vpcid
         */
        readonly vpcId: string;
    }
}
/**
 * Properties for defining a `CfnVpcIngressConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html
 */
export interface CfnVpcIngressConnectionProps {
    /**
     * Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration
     */
    readonly ingressVpcConfiguration: CfnVpcIngressConnection.IngressVpcConfigurationProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-servicearn
     */
    readonly serviceArn: string;
    /**
     * An optional list of metadata items that you can associate with the VPC Ingress Connection resource.
     *
     * A tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The customer-provided VPC Ingress Connection name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-vpcingressconnectionname
     */
    readonly vpcIngressConnectionName?: string;
}
