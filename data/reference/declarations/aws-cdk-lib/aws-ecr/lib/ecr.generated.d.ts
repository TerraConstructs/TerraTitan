import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ECR::PublicRepository` resource specifies an Amazon Elastic Container Registry Public (Amazon ECR Public) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts.
 *
 * For more information, see [Amazon ECR public repositories](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repositories.html) in the *Amazon ECR Public User Guide* .
 *
 * @cloudformationResource AWS::ECR::PublicRepository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html
 */
export declare class CfnPublicRepository extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPublicRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPublicRepository;
    /**
     * Returns the Amazon Resource Name (ARN) for the specified `AWS::ECR::PublicRepository` resource. For example, `arn:aws:ecr-public:: *123456789012* :repository/ *test-repository*` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The details about the repository that are publicly visible in the Amazon ECR Public Gallery.
     */
    repositoryCatalogData?: any | cdk.IResolvable;
    /**
     * The name to use for the public repository.
     */
    repositoryName?: string;
    /**
     * The JSON repository policy text to apply to the public repository.
     */
    repositoryPolicyText?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPublicRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPublicRepository {
    /**
     * The details about the repository that are publicly visible in the Amazon ECR Public Gallery.
     *
     * For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html
     */
    interface RepositoryCatalogDataProperty {
        /**
         * The longform description of the contents of the repository.
         *
         * This text appears in the repository details on the Amazon ECR Public Gallery.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html#cfn-ecr-publicrepository-repositorycatalogdata-abouttext
         */
        readonly aboutText?: string;
        /**
         * The architecture tags that are associated with the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html#cfn-ecr-publicrepository-repositorycatalogdata-architectures
         */
        readonly architectures?: Array<string>;
        /**
         * The operating system tags that are associated with the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html#cfn-ecr-publicrepository-repositorycatalogdata-operatingsystems
         */
        readonly operatingSystems?: Array<string>;
        /**
         * The short description of the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html#cfn-ecr-publicrepository-repositorycatalogdata-repositorydescription
         */
        readonly repositoryDescription?: string;
        /**
         * The longform usage details of the contents of the repository.
         *
         * The usage text provides context for users of the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-publicrepository-repositorycatalogdata.html#cfn-ecr-publicrepository-repositorycatalogdata-usagetext
         */
        readonly usageText?: string;
    }
}
/**
 * Properties for defining a `CfnPublicRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html
 */
export interface CfnPublicRepositoryProps {
    /**
     * The details about the repository that are publicly visible in the Amazon ECR Public Gallery.
     *
     * For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html#cfn-ecr-publicrepository-repositorycatalogdata
     */
    readonly repositoryCatalogData?: any | cdk.IResolvable;
    /**
     * The name to use for the public repository.
     *
     * The repository name may be specified on its own (such as `nginx-web-app` ) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app` ). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html#cfn-ecr-publicrepository-repositoryname
     */
    readonly repositoryName?: string;
    /**
     * The JSON repository policy text to apply to the public repository.
     *
     * For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html#cfn-ecr-publicrepository-repositorypolicytext
     */
    readonly repositoryPolicyText?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-publicrepository.html#cfn-ecr-publicrepository-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ECR::PullThroughCacheRule` resource creates or updates a pull through cache rule.
 *
 * A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
 *
 * @cloudformationResource AWS::ECR::PullThroughCacheRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html
 */
export declare class CfnPullThroughCacheRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPullThroughCacheRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPullThroughCacheRule;
    /**
     * The ARN of the Secrets Manager secret associated with the pull through cache rule.
     */
    credentialArn?: string;
    /**
     * The Amazon ECR repository prefix associated with the pull through cache rule.
     */
    ecrRepositoryPrefix?: string;
    /**
     * The name of the upstream source registry associated with the pull through cache rule.
     */
    upstreamRegistry?: string;
    /**
     * The upstream registry URL associated with the pull through cache rule.
     */
    upstreamRegistryUrl?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnPullThroughCacheRuleProps);
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
 * Properties for defining a `CfnPullThroughCacheRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html
 */
export interface CfnPullThroughCacheRuleProps {
    /**
     * The ARN of the Secrets Manager secret associated with the pull through cache rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-credentialarn
     */
    readonly credentialArn?: string;
    /**
     * The Amazon ECR repository prefix associated with the pull through cache rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-ecrrepositoryprefix
     */
    readonly ecrRepositoryPrefix?: string;
    /**
     * The name of the upstream source registry associated with the pull through cache rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-upstreamregistry
     */
    readonly upstreamRegistry?: string;
    /**
     * The upstream registry URL associated with the pull through cache rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-upstreamregistryurl
     */
    readonly upstreamRegistryUrl?: string;
}
/**
 * The `AWS::ECR::RegistryPolicy` resource creates or updates the permissions policy for a private registry.
 *
 * A private registry policy is used to specify permissions for another AWS account and is used when configuring cross-account replication. For more information, see [Registry permissions](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the *Amazon Elastic Container Registry User Guide* .
 *
 * @cloudformationResource AWS::ECR::RegistryPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html
 */
export declare class CfnRegistryPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRegistryPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRegistryPolicy;
    /**
     * The account ID of the private registry the policy is associated with.
     *
     * @cloudformationAttribute RegistryId
     */
    readonly attrRegistryId: string;
    /**
     * The JSON policy text for your registry.
     */
    policyText: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRegistryPolicyProps);
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
 * Properties for defining a `CfnRegistryPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html
 */
export interface CfnRegistryPolicyProps {
    /**
     * The JSON policy text for your registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html#cfn-ecr-registrypolicy-policytext
     */
    readonly policyText: any | cdk.IResolvable;
}
/**
 * The `AWS::ECR::ReplicationConfiguration` resource creates or updates the replication configuration for a private registry.
 *
 * The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see [Using Service-Linked Roles for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the *Amazon Elastic Container Registry User Guide* .
 *
 * > When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see `AWS::ECR::RegistryPolicy` .
 *
 * @cloudformationResource AWS::ECR::ReplicationConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html
 */
export declare class CfnReplicationConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationConfiguration;
    /**
     * The account ID of the destination registry.
     *
     * @cloudformationAttribute RegistryId
     */
    readonly attrRegistryId: string;
    /**
     * The replication configuration for a registry.
     */
    replicationConfiguration: cdk.IResolvable | CfnReplicationConfiguration.ReplicationConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReplicationConfiguration {
    /**
     * The replication configuration for a registry.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html
     */
    interface ReplicationConfigurationProperty {
        /**
         * An array of objects representing the replication destinations and repository filters for a replication configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnReplicationConfiguration.ReplicationRuleProperty> | cdk.IResolvable;
    }
    /**
     * An array of objects representing the replication destinations and repository filters for a replication configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html
     */
    interface ReplicationRuleProperty {
        /**
         * An array of objects representing the destination for a replication rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html#cfn-ecr-replicationconfiguration-replicationrule-destinations
         */
        readonly destinations: Array<cdk.IResolvable | CfnReplicationConfiguration.ReplicationDestinationProperty> | cdk.IResolvable;
        /**
         * An array of objects representing the filters for a replication rule.
         *
         * Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationrule.html#cfn-ecr-replicationconfiguration-replicationrule-repositoryfilters
         */
        readonly repositoryFilters?: Array<cdk.IResolvable | CfnReplicationConfiguration.RepositoryFilterProperty> | cdk.IResolvable;
    }
    /**
     * The filter settings used with image replication.
     *
     * Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html
     */
    interface RepositoryFilterProperty {
        /**
         * The repository filter details.
         *
         * When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html#cfn-ecr-replicationconfiguration-repositoryfilter-filter
         */
        readonly filter: string;
        /**
         * The repository filter type.
         *
         * The only supported value is `PREFIX_MATCH` , which is a repository name prefix specified with the `filter` parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-repositoryfilter.html#cfn-ecr-replicationconfiguration-repositoryfilter-filtertype
         */
        readonly filterType: string;
    }
    /**
     * An array of objects representing the destination for a replication rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html
     */
    interface ReplicationDestinationProperty {
        /**
         * The Region to replicate to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html#cfn-ecr-replicationconfiguration-replicationdestination-region
         */
        readonly region: string;
        /**
         * The AWS account ID of the Amazon ECR private registry to replicate to.
         *
         * When configuring cross-Region replication within your own registry, specify your own account ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-replicationconfiguration-replicationdestination.html#cfn-ecr-replicationconfiguration-replicationdestination-registryid
         */
        readonly registryId: string;
    }
}
/**
 * Properties for defining a `CfnReplicationConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html
 */
export interface CfnReplicationConfigurationProps {
    /**
     * The replication configuration for a registry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration
     */
    readonly replicationConfiguration: cdk.IResolvable | CfnReplicationConfiguration.ReplicationConfigurationProperty;
}
/**
 * The `AWS::ECR::Repository` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts.
 *
 * For more information, see [Amazon ECR private repositories](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the *Amazon ECR User Guide* .
 *
 * @cloudformationResource AWS::ECR::Repository
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html
 */
export declare class CfnRepository extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepository from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepository;
    /**
     * Returns the Amazon Resource Name (ARN) for the specified `AWS::ECR::Repository` resource. For example, `arn:aws:ecr: *eu-west-1* : *123456789012* :repository/ *test-repository*` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the URI for the specified `AWS::ECR::Repository` resource. For example, `*123456789012* .dkr.ecr. *us-west-2* .amazonaws.com/repository` .
     *
     * @cloudformationAttribute RepositoryUri
     */
    readonly attrRepositoryUri: string;
    /**
     * If true, deleting the repository force deletes the contents of the repository.
     */
    emptyOnDelete?: boolean | cdk.IResolvable;
    /**
     * The encryption configuration for the repository.
     */
    encryptionConfiguration?: CfnRepository.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The image scanning configuration for the repository.
     */
    imageScanningConfiguration?: CfnRepository.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The tag mutability setting for the repository.
     */
    imageTagMutability?: string;
    /**
     * Creates or updates a lifecycle policy.
     */
    lifecyclePolicy?: cdk.IResolvable | CfnRepository.LifecyclePolicyProperty;
    /**
     * The name to use for the repository.
     */
    repositoryName?: string;
    /**
     * The JSON repository policy text to apply to the repository.
     */
    repositoryPolicyText?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRepositoryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRepository {
    /**
     * The image scanning configuration for a repository.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html
     */
    interface ImageScanningConfigurationProperty {
        /**
         * The setting that determines whether images are scanned after being pushed to a repository.
         *
         * If set to `true` , images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html#cfn-ecr-repository-imagescanningconfiguration-scanonpush
         */
        readonly scanOnPush?: boolean | cdk.IResolvable;
    }
    /**
     * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
     *
     * By default, when no encryption configuration is set or the `AES256` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
     *
     * For more control over the encryption of the contents of your repository, you can use server-side encryption with AWS Key Management Service key stored in AWS Key Management Service ( AWS KMS ) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The encryption type to use.
         *
         * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with AWS Key Management Service key stored in AWS KMS . When you use AWS KMS to encrypt your data, you can either use the default AWS managed AWS KMS key for Amazon ECR, or specify your own AWS KMS key, which you already created.
         *
         * If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the AWS KMS Management Service key stored in AWS KMS . Similar to the `KMS` encryption type, you can either use the default AWS managed AWS KMS key for Amazon ECR, or specify your own AWS KMS key, which you've already created.
         *
         * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
         *
         * For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html#cfn-ecr-repository-encryptionconfiguration-encryptiontype
         */
        readonly encryptionType: string;
        /**
         * If you use the `KMS` encryption type, specify the AWS KMS key to use for encryption.
         *
         * The alias, key ID, or full ARN of the AWS KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed AWS KMS key for Amazon ECR will be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html#cfn-ecr-repository-encryptionconfiguration-kmskey
         */
        readonly kmsKey?: string;
    }
    /**
     * The `LifecyclePolicy` property type specifies a lifecycle policy.
     *
     * For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html) in the *Amazon ECR User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html
     */
    interface LifecyclePolicyProperty {
        /**
         * The JSON repository policy text to apply to the repository.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html#cfn-ecr-repository-lifecyclepolicy-lifecyclepolicytext
         */
        readonly lifecyclePolicyText?: string;
        /**
         * The AWS account ID associated with the registry that contains the repository.
         *
         * If you do not specify a registry, the default registry is assumed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html#cfn-ecr-repository-lifecyclepolicy-registryid
         */
        readonly registryId?: string;
    }
}
/**
 * Properties for defining a `CfnRepository`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html
 */
export interface CfnRepositoryProps {
    /**
     * If true, deleting the repository force deletes the contents of the repository.
     *
     * If false, the repository must be empty before attempting to delete it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-emptyondelete
     */
    readonly emptyOnDelete?: boolean | cdk.IResolvable;
    /**
     * The encryption configuration for the repository.
     *
     * This determines how the contents of your repository are encrypted at rest.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnRepository.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The image scanning configuration for the repository.
     *
     * This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-imagescanningconfiguration
     */
    readonly imageScanningConfiguration?: CfnRepository.ImageScanningConfigurationProperty | cdk.IResolvable;
    /**
     * The tag mutability setting for the repository.
     *
     * If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-imagetagmutability
     */
    readonly imageTagMutability?: string;
    /**
     * Creates or updates a lifecycle policy.
     *
     * For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-lifecyclepolicy
     */
    readonly lifecyclePolicy?: cdk.IResolvable | CfnRepository.LifecyclePolicyProperty;
    /**
     * The name to use for the repository.
     *
     * The repository name may be specified on its own (such as `nginx-web-app` ) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app` ). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-repositoryname
     */
    readonly repositoryName?: string;
    /**
     * The JSON repository policy text to apply to the repository.
     *
     * For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-repositorypolicytext
     */
    readonly repositoryPolicyText?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html#cfn-ecr-repository-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The details of the repository creation template associated with the request.
 *
 * @cloudformationResource AWS::ECR::RepositoryCreationTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html
 */
export declare class CfnRepositoryCreationTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRepositoryCreationTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRepositoryCreationTemplate;
    /**
     * The date and time, in JavaScript date format, when the repository creation template was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The date and time, in JavaScript date format, when the repository creation template was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.
     */
    appliedFor: Array<string>;
    /**
     * The ARN of the role to be assumed by Amazon ECR.
     */
    customRoleArn?: string;
    /**
     * The description associated with the repository creation template.
     */
    description?: string;
    /**
     * The encryption configuration associated with the repository creation template.
     */
    encryptionConfiguration?: CfnRepositoryCreationTemplate.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The tag mutability setting for the repository.
     */
    imageTagMutability?: string;
    /**
     * The lifecycle policy to use for repositories created using the template.
     */
    lifecyclePolicy?: string;
    /**
     * The repository namespace prefix associated with the repository creation template.
     */
    prefix: string;
    /**
     * The repository policy to apply to repositories created using the template.
     */
    repositoryPolicy?: string;
    /**
     * The metadata to apply to the repository to help you categorize and organize.
     */
    resourceTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRepositoryCreationTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRepositoryCreationTemplate {
    /**
     * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
     *
     * By default, when no encryption configuration is set or the `AES256` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
     *
     * For more control over the encryption of the contents of your repository, you can use server-side encryption with AWS Key Management Service key stored in AWS Key Management Service ( AWS KMS ) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * The encryption type to use.
         *
         * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with AWS Key Management Service key stored in AWS KMS . When you use AWS KMS to encrypt your data, you can either use the default AWS managed AWS KMS key for Amazon ECR, or specify your own AWS KMS key, which you already created.
         *
         * If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the AWS KMS Management Service key stored in AWS KMS . Similar to the `KMS` encryption type, you can either use the default AWS managed AWS KMS key for Amazon ECR, or specify your own AWS KMS key, which you've already created.
         *
         * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
         *
         * For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptionconfiguration.html#cfn-ecr-repositorycreationtemplate-encryptionconfiguration-encryptiontype
         */
        readonly encryptionType: string;
        /**
         * If you use the `KMS` encryption type, specify the AWS KMS key to use for encryption.
         *
         * The alias, key ID, or full ARN of the AWS KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed AWS KMS key for Amazon ECR will be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repositorycreationtemplate-encryptionconfiguration.html#cfn-ecr-repositorycreationtemplate-encryptionconfiguration-kmskey
         */
        readonly kmsKey?: string;
    }
}
/**
 * Properties for defining a `CfnRepositoryCreationTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html
 */
export interface CfnRepositoryCreationTemplateProps {
    /**
     * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.
     *
     * The two supported scenarios are PULL_THROUGH_CACHE and REPLICATION
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-appliedfor
     */
    readonly appliedFor: Array<string>;
    /**
     * The ARN of the role to be assumed by Amazon ECR.
     *
     * Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-customrolearn
     */
    readonly customRoleArn?: string;
    /**
     * The description associated with the repository creation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-description
     */
    readonly description?: string;
    /**
     * The encryption configuration associated with the repository creation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-encryptionconfiguration
     */
    readonly encryptionConfiguration?: CfnRepositoryCreationTemplate.EncryptionConfigurationProperty | cdk.IResolvable;
    /**
     * The tag mutability setting for the repository.
     *
     * If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-imagetagmutability
     */
    readonly imageTagMutability?: string;
    /**
     * The lifecycle policy to use for repositories created using the template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-lifecyclepolicy
     */
    readonly lifecyclePolicy?: string;
    /**
     * The repository namespace prefix associated with the repository creation template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-prefix
     */
    readonly prefix: string;
    /**
     * The repository policy to apply to repositories created using the template.
     *
     * A repository policy is a permissions policy associated with a repository to control access permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-repositorypolicy
     */
    readonly repositoryPolicy?: string;
    /**
     * The metadata to apply to the repository to help you categorize and organize.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repositorycreationtemplate.html#cfn-ecr-repositorycreationtemplate-resourcetags
     */
    readonly resourceTags?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
}
