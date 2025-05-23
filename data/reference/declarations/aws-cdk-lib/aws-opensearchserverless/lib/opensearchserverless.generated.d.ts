import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a data access policy for OpenSearch Serverless.
 *
 * Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see [Data access control for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html) .
 *
 * @cloudformationResource AWS::OpenSearchServerless::AccessPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html
 */
export declare class CfnAccessPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessPolicy;
    /**
     * The description of the policy.
     */
    description?: string;
    /**
     * The name of the policy.
     */
    name: string;
    /**
     * The JSON policy document without any whitespaces.
     */
    policy: string;
    /**
     * The type of access policy.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessPolicyProps);
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
 * Properties for defining a `CfnAccessPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html
 */
export interface CfnAccessPolicyProps {
    /**
     * The description of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-description
     */
    readonly description?: string;
    /**
     * The name of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-name
     */
    readonly name: string;
    /**
     * The JSON policy document without any whitespaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-policy
     */
    readonly policy: string;
    /**
     * The type of access policy.
     *
     * Currently the only option is `data` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-type
     */
    readonly type: string;
}
/**
 * Specifies an OpenSearch Serverless collection.
 *
 * For more information, see [Creating and managing Amazon OpenSearch Serverless collections](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html) in the *Amazon OpenSearch Service Developer Guide* .
 *
 * > You must create a matching [encryption policy](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html) in order for a collection to be created successfully. You can specify the policy resource within the same CloudFormation template as the collection resource if you use the [DependsOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) attribute. See [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#aws-resource-opensearchserverless-collection--examples) for a sample template. Otherwise the encryption policy must already exist before you create the collection.
 *
 * @cloudformationResource AWS::OpenSearchServerless::Collection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html
 */
export declare class CfnCollection extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCollection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCollection;
    /**
     * The Amazon Resource Name (ARN) of the collection. For example, `arn:aws:aoss:us-east-1:123456789012:collection/07tjusf2h91cunochc` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Collection-specific endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection. For example, `https://07tjusf2h91cunochc.us-east-1.aoss.amazonaws.com` .
     *
     * @cloudformationAttribute CollectionEndpoint
     */
    readonly attrCollectionEndpoint: string;
    /**
     * The collection-specific endpoint used to access OpenSearch Dashboards. For example, `https://07tjusf2h91cunochc.us-east-1.aoss.amazonaws.com/_dashboards` .
     *
     * @cloudformationAttribute DashboardEndpoint
     */
    readonly attrDashboardEndpoint: string;
    /**
     * A unique identifier for the collection. For example, `07tjusf2h91cunochc` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the collection.
     */
    description?: string;
    /**
     * The name of the collection.
     */
    name: string;
    /**
     * Indicates whether to use standby replicas for the collection.
     */
    standbyReplicas?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the collection.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of collection.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCollectionProps);
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
 * Properties for defining a `CfnCollection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html
 */
export interface CfnCollectionProps {
    /**
     * A description of the collection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#cfn-opensearchserverless-collection-description
     */
    readonly description?: string;
    /**
     * The name of the collection.
     *
     * Collection names must meet the following criteria:
     *
     * - Starts with a lowercase letter
     * - Unique to your account and AWS Region
     * - Contains between 3 and 28 characters
     * - Contains only lowercase letters a-z, the numbers 0-9, and the hyphen (-)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#cfn-opensearchserverless-collection-name
     */
    readonly name: string;
    /**
     * Indicates whether to use standby replicas for the collection.
     *
     * You can't update this property after the collection is already created. If you attempt to modify this property, the collection continues to use the original value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#cfn-opensearchserverless-collection-standbyreplicas
     */
    readonly standbyReplicas?: string;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the collection.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#cfn-opensearchserverless-collection-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of collection.
     *
     * Possible values are `SEARCH` , `TIMESERIES` , and `VECTORSEARCH` . For more information, see [Choosing a collection type](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html#serverless-usecase) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-collection.html#cfn-opensearchserverless-collection-type
     */
    readonly type?: string;
}
/**
 * Specifies a security configuration for OpenSearch Serverless.
 *
 * For more information, see [SAML authentication for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html) .
 *
 * @cloudformationResource AWS::OpenSearchServerless::SecurityConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html
 */
export declare class CfnSecurityConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityConfig;
    /**
     * The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless.
     *
     * @cloudformationAttribute IamIdentityCenterOptions.ApplicationArn
     */
    readonly attrIamIdentityCenterOptionsApplicationArn: string;
    /**
     * The description of the IAM Identity Center application used to integrate with OpenSearch Serverless.
     *
     * @cloudformationAttribute IamIdentityCenterOptions.ApplicationDescription
     */
    readonly attrIamIdentityCenterOptionsApplicationDescription: string;
    /**
     * The name of the IAM Identity Center application used to integrate with OpenSearch Serverless.
     *
     * @cloudformationAttribute IamIdentityCenterOptions.ApplicationName
     */
    readonly attrIamIdentityCenterOptionsApplicationName: string;
    /**
     * The unique identifier of the security configuration. For example, `saml/123456789012/myprovider` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description of the security configuration.
     */
    description?: string;
    /**
     * Describes IAM Identity Center options in the form of a key-value map.
     */
    iamIdentityCenterOptions?: CfnSecurityConfig.IamIdentityCenterConfigOptionsProperty | cdk.IResolvable;
    /**
     * The name of the security configuration.
     */
    name?: string;
    /**
     * SAML options for the security configuration in the form of a key-value map.
     */
    samlOptions?: cdk.IResolvable | CfnSecurityConfig.SamlConfigOptionsProperty;
    /**
     * The type of security configuration.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSecurityConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSecurityConfig {
    /**
     * Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html
     */
    interface SamlConfigOptionsProperty {
        /**
         * The group attribute for this SAML integration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-groupattribute
         */
        readonly groupAttribute?: string;
        /**
         * The XML IdP metadata file generated from your identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-metadata
         */
        readonly metadata: string;
        /**
         * Custom entity id attribute to override default entity id for this saml integration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-opensearchserverlessentityid
         */
        readonly openSearchServerlessEntityId?: string;
        /**
         * The session timeout, in minutes.
         *
         * Default is 60 minutes (12 hours).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-sessiontimeout
         */
        readonly sessionTimeout?: number;
        /**
         * A user attribute for this SAML integration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-userattribute
         */
        readonly userAttribute?: string;
    }
    /**
     * Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html
     */
    interface IamIdentityCenterConfigOptionsProperty {
        /**
         * The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-applicationarn
         */
        readonly applicationArn?: string;
        /**
         * The description of the IAM Identity Center application used to integrate with OpenSearch Serverless.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-applicationdescription
         */
        readonly applicationDescription?: string;
        /**
         * The name of the IAM Identity Center application used to integrate with OpenSearch Serverless.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-applicationname
         */
        readonly applicationName?: string;
        /**
         * The group attribute for this IAM Identity Center integration.
         *
         * Defaults to `GroupId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-groupattribute
         */
        readonly groupAttribute?: string;
        /**
         * The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-instancearn
         */
        readonly instanceArn: string;
        /**
         * The user attribute for this IAM Identity Center integration.
         *
         * Defaults to `UserId`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchserverless-securityconfig-iamidentitycenterconfigoptions.html#cfn-opensearchserverless-securityconfig-iamidentitycenterconfigoptions-userattribute
         */
        readonly userAttribute?: string;
    }
}
/**
 * Properties for defining a `CfnSecurityConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html
 */
export interface CfnSecurityConfigProps {
    /**
     * The description of the security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-description
     */
    readonly description?: string;
    /**
     * Describes IAM Identity Center options in the form of a key-value map.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-iamidentitycenteroptions
     */
    readonly iamIdentityCenterOptions?: CfnSecurityConfig.IamIdentityCenterConfigOptionsProperty | cdk.IResolvable;
    /**
     * The name of the security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-name
     */
    readonly name?: string;
    /**
     * SAML options for the security configuration in the form of a key-value map.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samloptions
     */
    readonly samlOptions?: cdk.IResolvable | CfnSecurityConfig.SamlConfigOptionsProperty;
    /**
     * The type of security configuration.
     *
     * Currently the only option is `saml` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-type
     */
    readonly type?: string;
}
/**
 * Creates an encryption or network policy to be used by one or more OpenSearch Serverless collections.
 *
 * Network policies specify access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. For more information, see [Network access for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html) .
 *
 * Encryption policies specify a KMS encryption key to assign to particular collections. For more information, see [Encryption at rest for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html) .
 *
 * @cloudformationResource AWS::OpenSearchServerless::SecurityPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html
 */
export declare class CfnSecurityPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityPolicy;
    /**
     * The description of the security policy.
     */
    description?: string;
    /**
     * The name of the policy.
     */
    name: string;
    /**
     * The JSON policy document without any whitespaces.
     */
    policy: string;
    /**
     * The type of security policy.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityPolicyProps);
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
 * Properties for defining a `CfnSecurityPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html
 */
export interface CfnSecurityPolicyProps {
    /**
     * The description of the security policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-description
     */
    readonly description?: string;
    /**
     * The name of the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-name
     */
    readonly name: string;
    /**
     * The JSON policy document without any whitespaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-policy
     */
    readonly policy: string;
    /**
     * The type of security policy.
     *
     * Can be either `encryption` or `network` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-type
     */
    readonly type: string;
}
/**
 * Creates an OpenSearch Serverless-managed interface VPC endpoint.
 *
 * For more information, see [Access Amazon OpenSearch Serverless using an interface endpoint](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html) .
 *
 * @cloudformationResource AWS::OpenSearchServerless::VpcEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html
 */
export declare class CfnVpcEndpoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcEndpoint;
    /**
     * The unique identifier of the endpoint. For example, `vpce-050f79086ee71ac05` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the endpoint.
     */
    name: string;
    /**
     * The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     */
    securityGroupIds?: Array<string>;
    /**
     * The ID of the subnets from which you access OpenSearch Serverless.
     */
    subnetIds: Array<string>;
    /**
     * The ID of the VPC from which you access OpenSearch Serverless.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcEndpointProps);
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
 * Properties for defining a `CfnVpcEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html
 */
export interface CfnVpcEndpointProps {
    /**
     * The name of the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-name
     */
    readonly name: string;
    /**
     * The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The ID of the subnets from which you access OpenSearch Serverless.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The ID of the VPC from which you access OpenSearch Serverless.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-vpcid
     */
    readonly vpcId: string;
}
/**
 * Creates a lifecyle policy to be applied to OpenSearch Serverless indexes.
 *
 * Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see [Creating data lifecycle policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-create) .
 *
 * @cloudformationResource AWS::OpenSearchServerless::LifecyclePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html
 */
export declare class CfnLifecyclePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLifecyclePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLifecyclePolicy;
    /**
     * The description of the lifecycle policy.
     */
    description?: string;
    /**
     * The name of the lifecycle policy.
     */
    name: string;
    /**
     * The JSON policy document without any whitespaces.
     */
    policy: string;
    /**
     * The type of lifecycle policy.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLifecyclePolicyProps);
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
 * Properties for defining a `CfnLifecyclePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html
 */
export interface CfnLifecyclePolicyProps {
    /**
     * The description of the lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-description
     */
    readonly description?: string;
    /**
     * The name of the lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-name
     */
    readonly name: string;
    /**
     * The JSON policy document without any whitespaces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-policy
     */
    readonly policy: string;
    /**
     * The type of lifecycle policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-type
     */
    readonly type: string;
}
