import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::OpenSearchService::Domain resource creates an Amazon OpenSearch Service domain.
 *
 * @cloudformationResource AWS::OpenSearchService::Domain
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html
 */
export declare class CfnDomain extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomain from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomain;
    /**
     * Date and time when the migration period will be disabled. Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing) .
     *
     * @cloudformationAttribute AdvancedSecurityOptions.AnonymousAuthDisableDate
     */
    readonly attrAdvancedSecurityOptionsAnonymousAuthDisableDate: string;
    /**
     * The Amazon Resource Name (ARN) of the CloudFormation stack.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The domain-specific endpoint used for requests to the OpenSearch APIs, such as `search-mystack-1ab2cdefghij-ab1c2deckoyb3hofw7wpqa3cm.us-west-1.es.amazonaws.com` .
     *
     * @cloudformationAttribute DomainEndpoint
     */
    readonly attrDomainEndpoint: string;
    /**
     * @cloudformationAttribute DomainEndpoints
     */
    readonly attrDomainEndpoints: cdk.IResolvable;
    /**
     * If `IPAddressType` to set to `dualstack` , a version 2 domain endpoint is provisioned. This endpoint functions like a normal endpoint, except that it works with both IPv4 and IPv6 IP addresses. Normal endpoints work only with IPv4 IP addresses.
     *
     * @cloudformationAttribute DomainEndpointV2
     */
    readonly attrDomainEndpointV2: string;
    /**
     * The resource ID. For example, `123456789012/my-domain` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN for IAM Identity Center Application which will integrate with Amazon OpenSearch Service.
     *
     * @cloudformationAttribute IdentityCenterOptions.IdentityCenterApplicationARN
     */
    readonly attrIdentityCenterOptionsIdentityCenterApplicationArn: string;
    /**
     * The ID of IAM Identity Store.
     *
     * @cloudformationAttribute IdentityCenterOptions.IdentityStoreId
     */
    readonly attrIdentityCenterOptionsIdentityStoreId: string;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions
     */
    readonly attrServiceSoftwareOptions: cdk.IResolvable;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.AutomatedUpdateDate
     */
    readonly attrServiceSoftwareOptionsAutomatedUpdateDate: string;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.Cancellable
     */
    readonly attrServiceSoftwareOptionsCancellable: cdk.IResolvable;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.CurrentVersion
     */
    readonly attrServiceSoftwareOptionsCurrentVersion: string;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.Description
     */
    readonly attrServiceSoftwareOptionsDescription: string;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.NewVersion
     */
    readonly attrServiceSoftwareOptionsNewVersion: string;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.OptionalDeployment
     */
    readonly attrServiceSoftwareOptionsOptionalDeployment: cdk.IResolvable;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.UpdateAvailable
     */
    readonly attrServiceSoftwareOptionsUpdateAvailable: cdk.IResolvable;
    /**
     * @cloudformationAttribute ServiceSoftwareOptions.UpdateStatus
     */
    readonly attrServiceSoftwareOptionsUpdateStatus: string;
    /**
     * An AWS Identity and Access Management ( IAM ) policy document that specifies who can access the OpenSearch Service domain and their permissions.
     */
    accessPolicies?: any | cdk.IResolvable;
    /**
     * Additional options to specify for the OpenSearch Service domain.
     */
    advancedOptions?: cdk.IResolvable | Record<string, string>;
    /**
     * Specifies options for fine-grained access control and SAML authentication.
     */
    advancedSecurityOptions?: CfnDomain.AdvancedSecurityOptionsInputProperty | cdk.IResolvable;
    /**
     * Container for the cluster configuration of a domain.
     */
    clusterConfig?: CfnDomain.ClusterConfigProperty | cdk.IResolvable;
    /**
     * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
     */
    cognitoOptions?: CfnDomain.CognitoOptionsProperty | cdk.IResolvable;
    domainArn?: string;
    /**
     * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
     */
    domainEndpointOptions?: CfnDomain.DomainEndpointOptionsProperty | cdk.IResolvable;
    /**
     * A name for the OpenSearch Service domain.
     */
    domainName?: string;
    /**
     * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain.
     */
    ebsOptions?: CfnDomain.EBSOptionsProperty | cdk.IResolvable;
    /**
     * Whether the domain should encrypt data at rest, and if so, the AWS KMS key to use.
     */
    encryptionAtRestOptions?: CfnDomain.EncryptionAtRestOptionsProperty | cdk.IResolvable;
    /**
     * The version of OpenSearch to use.
     */
    engineVersion?: string;
    /**
     * Container for IAM Identity Center Option control for the domain.
     */
    identityCenterOptions?: CfnDomain.IdentityCenterOptionsProperty | cdk.IResolvable;
    /**
     * Choose either dual stack or IPv4 as your IP address type.
     */
    ipAddressType?: string;
    /**
     * An object with one or more of the following keys: `SEARCH_SLOW_LOGS` , `ES_APPLICATION_LOGS` , `INDEX_SLOW_LOGS` , `AUDIT_LOGS` , depending on the types of logs you want to publish.
     */
    logPublishingOptions?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnDomain.LogPublishingOptionProperty>;
    /**
     * Specifies whether node-to-node encryption is enabled.
     */
    nodeToNodeEncryptionOptions?: cdk.IResolvable | CfnDomain.NodeToNodeEncryptionOptionsProperty;
    /**
     * Options for a domain's off-peak window, during which OpenSearch Service can perform mandatory configuration changes on the domain.
     */
    offPeakWindowOptions?: cdk.IResolvable | CfnDomain.OffPeakWindowOptionsProperty;
    skipShardMigrationWait?: boolean | cdk.IResolvable;
    /**
     * *DEPRECATED* .
     */
    snapshotOptions?: cdk.IResolvable | CfnDomain.SnapshotOptionsProperty;
    /**
     * Service software update options for the domain.
     */
    softwareUpdateOptions?: cdk.IResolvable | CfnDomain.SoftwareUpdateOptionsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Service domain.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The virtual private cloud (VPC) configuration for the OpenSearch Service domain.
     */
    vpcOptions?: cdk.IResolvable | CfnDomain.VPCOptionsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDomainProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomain {
    /**
     * Options for configuring service software updates for a domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html
     */
    interface SoftwareUpdateOptionsProperty {
        /**
         * Specifies whether automatic service software updates are enabled for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-softwareupdateoptions.html#cfn-opensearchservice-domain-softwareupdateoptions-autosoftwareupdateenabled
         */
        readonly autoSoftwareUpdateEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies whether the OpenSearch Service domain publishes application, search slow logs, or index slow logs to Amazon CloudWatch.
     *
     * Each option must be an object of name `SEARCH_SLOW_LOGS` , `ES_APPLICATION_LOGS` , `INDEX_SLOW_LOGS` , or `AUDIT_LOGS` depending on the type of logs you want to publish. For the full syntax, see the [examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain--examples) .
     *
     * Before you enable log publishing, you need to create a CloudWatch log group and provide OpenSearch Service the correct permissions to write to it. To learn more, see [Enabling log publishing ( AWS CloudFormation)](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createdomain-configure-slow-logs.html#createdomain-configure-slow-logs-cfn) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html
     */
    interface LogPublishingOptionProperty {
        /**
         * Specifies the CloudWatch log group to publish to.
         *
         * Required if you enable log publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html#cfn-opensearchservice-domain-logpublishingoption-cloudwatchlogsloggrouparn
         */
        readonly cloudWatchLogsLogGroupArn?: string;
        /**
         * If `true` , enables the publishing of logs to CloudWatch.
         *
         * Default: `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-logpublishingoption.html#cfn-opensearchservice-domain-logpublishingoption-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * *DEPRECATED* .
     *
     * This setting is only relevant to domains running legacy Elasticsearch OSS versions earlier than 5.3. It does not apply to OpenSearch domains.
     *
     * The automated snapshot configuration for the OpenSearch Service domain indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-snapshotoptions.html
     */
    interface SnapshotOptionsProperty {
        /**
         * The hour in UTC during which the service takes an automated daily snapshot of the indexes in the OpenSearch Service domain.
         *
         * For example, if you specify 0, OpenSearch Service takes an automated snapshot everyday between midnight and 1 am. You can specify a value between 0 and 23.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-snapshotoptions.html#cfn-opensearchservice-domain-snapshotoptions-automatedsnapshotstarthour
         */
        readonly automatedSnapshotStartHour?: number;
    }
    /**
     * The virtual private cloud (VPC) configuration for the OpenSearch Service domain.
     *
     * For more information, see [Launching your Amazon OpenSearch Service domains using a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html
     */
    interface VPCOptionsProperty {
        /**
         * The list of security group IDs that are associated with the VPC endpoints for the domain.
         *
         * If you don't provide a security group ID, OpenSearch Service uses the default security group for the VPC. To learn more, see [Security groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon VPC User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html#cfn-opensearchservice-domain-vpcoptions-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * Provide one subnet ID for each Availability Zone that your domain uses.
         *
         * For example, you must specify three subnet IDs for a three-AZ domain. To learn more, see [VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html) in the *Amazon VPC User Guide* .
         *
         * If you specify more than one subnet, you must also configure `ZoneAwarenessEnabled` and `ZoneAwarenessConfig` within [ClusterConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html) , otherwise you'll see the error "You must specify exactly one subnet" during template creation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-vpcoptions.html#cfn-opensearchservice-domain-vpcoptions-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * Specifies options for node-to-node encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html
     */
    interface NodeToNodeEncryptionOptionsProperty {
        /**
         * Specifies to enable or disable node-to-node encryption on the domain.
         *
         * Required if you enable fine-grained access control in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html#cfn-opensearchservice-domain-nodetonodeencryptionoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html
     */
    interface DomainEndpointOptionsProperty {
        /**
         * The fully qualified URL for your custom endpoint.
         *
         * Required if you enabled a custom endpoint for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html#cfn-opensearchservice-domain-domainendpointoptions-customendpoint
         */
        readonly customEndpoint?: string;
        /**
         * The AWS Certificate Manager ARN for your domain's SSL/TLS certificate.
         *
         * Required if you enabled a custom endpoint for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html#cfn-opensearchservice-domain-domainendpointoptions-customendpointcertificatearn
         */
        readonly customEndpointCertificateArn?: string;
        /**
         * True to enable a custom endpoint for the domain.
         *
         * If enabled, you must also provide values for `CustomEndpoint` and `CustomEndpointCertificateArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html#cfn-opensearchservice-domain-domainendpointoptions-customendpointenabled
         */
        readonly customEndpointEnabled?: boolean | cdk.IResolvable;
        /**
         * True to require that all traffic to the domain arrive over HTTPS.
         *
         * Required if you enable fine-grained access control in [AdvancedSecurityOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html#cfn-opensearchservice-domain-domainendpointoptions-enforcehttps
         */
        readonly enforceHttps?: boolean | cdk.IResolvable;
        /**
         * The minimum TLS version required for traffic to the domain. The policy can be one of the following values:.
         *
         * - *Policy-Min-TLS-1-0-2019-07:* TLS security policy that supports TLS version 1.0 to TLS version 1.2
         * - *Policy-Min-TLS-1-2-2019-07:* TLS security policy that supports only TLS version 1.2
         * - *Policy-Min-TLS-1-2-PFS-2023-10:* TLS security policy that supports TLS version 1.2 to TLS version 1.3 with perfect forward secrecy cipher suites
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html#cfn-opensearchservice-domain-domainendpointoptions-tlssecuritypolicy
         */
        readonly tlsSecurityPolicy?: string;
    }
    /**
     * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html
     */
    interface CognitoOptionsProperty {
        /**
         * Whether to enable or disable Amazon Cognito authentication for OpenSearch Dashboards.
         *
         * See [Amazon Cognito authentication for OpenSearch Dashboards](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html#cfn-opensearchservice-domain-cognitooptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The Amazon Cognito identity pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
         *
         * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html#cfn-opensearchservice-domain-cognitooptions-identitypoolid
         */
        readonly identityPoolId?: string;
        /**
         * The `AmazonOpenSearchServiceCognitoAccess` role that allows OpenSearch Service to configure your user pool and identity pool.
         *
         * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html#cfn-opensearchservice-domain-cognitooptions-rolearn
         */
        readonly roleArn?: string;
        /**
         * The Amazon Cognito user pool ID that you want OpenSearch Service to use for OpenSearch Dashboards authentication.
         *
         * Required if you enabled Cognito Authentication for OpenSearch Dashboards.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-cognitooptions.html#cfn-opensearchservice-domain-cognitooptions-userpoolid
         */
        readonly userPoolId?: string;
    }
    /**
     * Specifies options for fine-grained access control.
     *
     * If you specify advanced security options, you must also enable node-to-node encryption ( [NodeToNodeEncryptionOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html) ) and encryption at rest ( [EncryptionAtRestOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html) ). You must also enable `EnforceHTTPS` within [DomainEndpointOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html) , which requires HTTPS for all traffic to the domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html
     */
    interface AdvancedSecurityOptionsInputProperty {
        /**
         * Date and time when the migration period will be disabled.
         *
         * Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-anonymousauthdisabledate
         */
        readonly anonymousAuthDisableDate?: string;
        /**
         * True to enable a 30-day migration period during which administrators can create role mappings.
         *
         * Only necessary when [enabling fine-grained access control on an existing domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-enabling-existing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-anonymousauthenabled
         */
        readonly anonymousAuthEnabled?: boolean | cdk.IResolvable;
        /**
         * True to enable fine-grained access control.
         *
         * You must also enable encryption of data at rest and node-to-node encryption. See [Fine-grained access control in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * True to enable the internal user database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-internaluserdatabaseenabled
         */
        readonly internalUserDatabaseEnabled?: boolean | cdk.IResolvable;
        /**
         * Container for information about the JWT configuration of the Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-jwtoptions
         */
        readonly jwtOptions?: cdk.IResolvable | CfnDomain.JWTOptionsProperty;
        /**
         * Specifies information about the master user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-masteruseroptions
         */
        readonly masterUserOptions?: cdk.IResolvable | CfnDomain.MasterUserOptionsProperty;
        /**
         * Container for information about the SAML configuration for OpenSearch Dashboards.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html#cfn-opensearchservice-domain-advancedsecurityoptionsinput-samloptions
         */
        readonly samlOptions?: cdk.IResolvable | CfnDomain.SAMLOptionsProperty;
    }
    /**
     * Container for information about the SAML configuration for OpenSearch Dashboards.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html
     */
    interface SAMLOptionsProperty {
        /**
         * True to enable SAML authentication for a domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The SAML Identity Provider's information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-idp
         */
        readonly idp?: CfnDomain.IdpProperty | cdk.IResolvable;
        /**
         * The backend role that the SAML master user is mapped to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-masterbackendrole
         */
        readonly masterBackendRole?: string;
        /**
         * The SAML master user name, which is stored in the domain's internal user database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-masterusername
         */
        readonly masterUserName?: string;
        /**
         * Element of the SAML assertion to use for backend roles.
         *
         * Default is `roles` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-roleskey
         */
        readonly rolesKey?: string;
        /**
         * The duration, in minutes, after which a user session becomes inactive.
         *
         * Acceptable values are between 1 and 1440, and the default value is 60.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-sessiontimeoutminutes
         */
        readonly sessionTimeoutMinutes?: number;
        /**
         * Element of the SAML assertion to use for the user name.
         *
         * Default is `NameID` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-samloptions.html#cfn-opensearchservice-domain-samloptions-subjectkey
         */
        readonly subjectKey?: string;
    }
    /**
     * The SAML Identity Provider's information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html
     */
    interface IdpProperty {
        /**
         * The unique entity ID of the application in the SAML identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html#cfn-opensearchservice-domain-idp-entityid
         */
        readonly entityId: string;
        /**
         * The metadata of the SAML application, in XML format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-idp.html#cfn-opensearchservice-domain-idp-metadatacontent
         */
        readonly metadataContent: string;
    }
    /**
     * Specifies information about the master user.
     *
     * Required if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html
     */
    interface MasterUserOptionsProperty {
        /**
         * Amazon Resource Name (ARN) for the master user.
         *
         * The ARN can point to an IAM user or role. This property is required for Amazon Cognito to work, and it must match the role configured for Cognito. Only specify if `InternalUserDatabaseEnabled` is false in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html#cfn-opensearchservice-domain-masteruseroptions-masteruserarn
         */
        readonly masterUserArn?: string;
        /**
         * Username for the master user. Only specify if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * If you don't want to specify this value directly within the template, you can use a [dynamic reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html#cfn-opensearchservice-domain-masteruseroptions-masterusername
         */
        readonly masterUserName?: string;
        /**
         * Password for the master user. Only specify if `InternalUserDatabaseEnabled` is true in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * If you don't want to specify this value directly within the template, you can use a [dynamic reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-masteruseroptions.html#cfn-opensearchservice-domain-masteruseroptions-masteruserpassword
         */
        readonly masterUserPassword?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-jwtoptions.html
     */
    interface JWTOptionsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-jwtoptions.html#cfn-opensearchservice-domain-jwtoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-jwtoptions.html#cfn-opensearchservice-domain-jwtoptions-publickey
         */
        readonly publicKey?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-jwtoptions.html#cfn-opensearchservice-domain-jwtoptions-roleskey
         */
        readonly rolesKey?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-jwtoptions.html#cfn-opensearchservice-domain-jwtoptions-subjectkey
         */
        readonly subjectKey?: string;
    }
    /**
     * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain.
     *
     * For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html
     */
    interface EBSOptionsProperty {
        /**
         * Specifies whether Amazon EBS volumes are attached to data nodes in the OpenSearch Service domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html#cfn-opensearchservice-domain-ebsoptions-ebsenabled
         */
        readonly ebsEnabled?: boolean | cdk.IResolvable;
        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         *
         * This property applies only to the `gp3` and provisioned IOPS EBS volume types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html#cfn-opensearchservice-domain-ebsoptions-iops
         */
        readonly iops?: number;
        /**
         * The throughput (in MiB/s) of the EBS volumes attached to data nodes.
         *
         * Applies only to the `gp3` volume type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html#cfn-opensearchservice-domain-ebsoptions-throughput
         */
        readonly throughput?: number;
        /**
         * The size (in GiB) of the EBS volume for each data node.
         *
         * The minimum and maximum size of an EBS volume depends on the EBS volume type and the instance type to which it is attached. For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the *Amazon OpenSearch Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html#cfn-opensearchservice-domain-ebsoptions-volumesize
         */
        readonly volumeSize?: number;
        /**
         * The EBS volume type to use with the OpenSearch Service domain.
         *
         * If you choose `gp3` , you must also specify values for `Iops` and `Throughput` . For more information about each type, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the *Amazon EC2 User Guide for Linux Instances* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-ebsoptions.html#cfn-opensearchservice-domain-ebsoptions-volumetype
         */
        readonly volumeType?: string;
    }
    /**
     * Whether the domain should encrypt data at rest, and if so, the AWS Key Management Service key to use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html
     */
    interface EncryptionAtRestOptionsProperty {
        /**
         * Specify `true` to enable encryption at rest. Required if you enable fine-grained access control in [AdvancedSecurityOptionsInput](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-advancedsecurityoptionsinput.html) .
         *
         * If no encryption at rest options were initially specified in the template, updating this property by adding it causes no interruption. However, if you change this property after it's already been set within a template, the domain is deleted and recreated in order to modify the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html#cfn-opensearchservice-domain-encryptionatrestoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The KMS key ID. Takes the form `1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a` . Required if you enable encryption at rest.
         *
         * You can also use `keyAlias` as a value.
         *
         * If no encryption at rest options were initially specified in the template, updating this property by adding it causes no interruption. However, if you change this property after it's already been set within a template, the domain is deleted and recreated in order to modify the property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html#cfn-opensearchservice-domain-encryptionatrestoptions-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Off-peak window settings for the domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html
     */
    interface OffPeakWindowOptionsProperty {
        /**
         * Specifies whether off-peak window settings are enabled for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html#cfn-opensearchservice-domain-offpeakwindowoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Off-peak window settings for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindowoptions.html#cfn-opensearchservice-domain-offpeakwindowoptions-offpeakwindow
         */
        readonly offPeakWindow?: cdk.IResolvable | CfnDomain.OffPeakWindowProperty;
    }
    /**
     * A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain.
     *
     * These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify. If you don't specify a window start time, it defaults to 10:00 P.M. local time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html
     */
    interface OffPeakWindowProperty {
        /**
         * The desired start time for an off-peak maintenance window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-offpeakwindow.html#cfn-opensearchservice-domain-offpeakwindow-windowstarttime
         */
        readonly windowStartTime?: cdk.IResolvable | CfnDomain.WindowStartTimeProperty;
    }
    /**
     * A custom start time for the off-peak window, in Coordinated Universal Time (UTC).
     *
     * The window length will always be 10 hours, so you can't specify an end time. For example, if you specify 11:00 P.M. UTC as a start time, the end time will automatically be set to 9:00 A.M.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html
     */
    interface WindowStartTimeProperty {
        /**
         * The start hour of the window in Coordinated Universal Time (UTC), using 24-hour time.
         *
         * For example, 17 refers to 5:00 P.M. UTC. The minimum value is 0 and the maximum value is 23.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html#cfn-opensearchservice-domain-windowstarttime-hours
         */
        readonly hours: number;
        /**
         * The start minute of the window, in UTC.
         *
         * The minimum value is 0 and the maximum value is 59.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-windowstarttime.html#cfn-opensearchservice-domain-windowstarttime-minutes
         */
        readonly minutes: number;
    }
    /**
     * The cluster configuration for the OpenSearch Service domain.
     *
     * You can specify options such as the instance type and the number of instances. For more information, see [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html
     */
    interface ClusterConfigProperty {
        /**
         * Container for cold storage configuration options.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-coldstorageoptions
         */
        readonly coldStorageOptions?: CfnDomain.ColdStorageOptionsProperty | cdk.IResolvable;
        /**
         * The number of instances to use for the master node.
         *
         * If you specify this property, you must specify `true` for the `DedicatedMasterEnabled` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-dedicatedmastercount
         */
        readonly dedicatedMasterCount?: number;
        /**
         * Indicates whether to use a dedicated master node for the OpenSearch Service domain.
         *
         * A dedicated master node is a cluster node that performs cluster management tasks, but doesn't hold data or respond to data upload requests. Dedicated master nodes offload cluster management tasks to increase the stability of your search clusters. See [Dedicated master nodes in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-dedicatedmasternodes.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-dedicatedmasterenabled
         */
        readonly dedicatedMasterEnabled?: boolean | cdk.IResolvable;
        /**
         * The hardware configuration of the computer that hosts the dedicated master node, such as `m3.medium.search` . If you specify this property, you must specify `true` for the `DedicatedMasterEnabled` property. For valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-dedicatedmastertype
         */
        readonly dedicatedMasterType?: string;
        /**
         * The number of data nodes (instances) to use in the OpenSearch Service domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-instancecount
         */
        readonly instanceCount?: number;
        /**
         * The instance type for your data nodes, such as `m3.medium.search` . For valid values, see [Supported instance types in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-instancetype
         */
        readonly instanceType?: string;
        /**
         * Indicates whether Multi-AZ with Standby deployment option is enabled.
         *
         * For more information, see [Multi-AZ with Standby](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html#managedomains-za-standby) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-multiazwithstandbyenabled
         */
        readonly multiAzWithStandbyEnabled?: boolean | cdk.IResolvable;
        /**
         * List of node options for the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-nodeoptions
         */
        readonly nodeOptions?: Array<cdk.IResolvable | CfnDomain.NodeOptionProperty> | cdk.IResolvable;
        /**
         * The number of warm nodes in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-warmcount
         */
        readonly warmCount?: number;
        /**
         * Whether to enable UltraWarm storage for the cluster.
         *
         * See [UltraWarm storage for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ultrawarm.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-warmenabled
         */
        readonly warmEnabled?: boolean | cdk.IResolvable;
        /**
         * The instance type for the cluster's warm nodes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-warmtype
         */
        readonly warmType?: string;
        /**
         * Specifies zone awareness configuration options.
         *
         * Only use if `ZoneAwarenessEnabled` is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-zoneawarenessconfig
         */
        readonly zoneAwarenessConfig?: cdk.IResolvable | CfnDomain.ZoneAwarenessConfigProperty;
        /**
         * Indicates whether to enable zone awareness for the OpenSearch Service domain.
         *
         * When you enable zone awareness, OpenSearch Service allocates the nodes and replica index shards that belong to a cluster across two Availability Zones (AZs) in the same region to prevent data loss and minimize downtime in the event of node or data center failure. Don't enable zone awareness if your cluster has no replica index shards or is a single-node cluster. For more information, see [Configuring a multi-AZ domain in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-clusterconfig.html#cfn-opensearchservice-domain-clusterconfig-zoneawarenessenabled
         */
        readonly zoneAwarenessEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies zone awareness configuration options.
     *
     * Only use if `ZoneAwarenessEnabled` is `true` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-zoneawarenessconfig.html
     */
    interface ZoneAwarenessConfigProperty {
        /**
         * If you enabled multiple Availability Zones (AZs), the number of AZs that you want the domain to use.
         *
         * Valid values are `2` and `3` . Default is 2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-zoneawarenessconfig.html#cfn-opensearchservice-domain-zoneawarenessconfig-availabilityzonecount
         */
        readonly availabilityZoneCount?: number;
    }
    /**
     * Container for the parameters required to enable cold storage for an OpenSearch Service domain.
     *
     * For more information, see [Cold storage for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-coldstorageoptions.html
     */
    interface ColdStorageOptionsProperty {
        /**
         * Whether to enable or disable cold storage on the domain.
         *
         * You must enable UltraWarm storage to enable cold storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-coldstorageoptions.html#cfn-opensearchservice-domain-coldstorageoptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Container for specifying node type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeoption.html
     */
    interface NodeOptionProperty {
        /**
         * Container for specifying configuration of any node type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeoption.html#cfn-opensearchservice-domain-nodeoption-nodeconfig
         */
        readonly nodeConfig?: cdk.IResolvable | CfnDomain.NodeConfigProperty;
        /**
         * Container for node type like coordinating.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeoption.html#cfn-opensearchservice-domain-nodeoption-nodetype
         */
        readonly nodeType?: string;
    }
    /**
     * Container for specifying configuration of any node type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeconfig.html
     */
    interface NodeConfigProperty {
        /**
         * The number of nodes of a particular node type in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeconfig.html#cfn-opensearchservice-domain-nodeconfig-count
         */
        readonly count?: number;
        /**
         * A boolean that indicates whether a particular node type is enabled or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeconfig.html#cfn-opensearchservice-domain-nodeconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The instance type of a particular node type in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodeconfig.html#cfn-opensearchservice-domain-nodeconfig-type
         */
        readonly type?: string;
    }
    /**
     * Container for IAM Identity Center Options settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html
     */
    interface IdentityCenterOptionsProperty {
        /**
         * True to enable IAM Identity Center for API access in Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-enabledapiaccess
         */
        readonly enabledApiAccess?: boolean | cdk.IResolvable;
        /**
         * The ARN for IAM Identity Center Application which will integrate with Amazon OpenSearch Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-identitycenterapplicationarn
         */
        readonly identityCenterApplicationArn?: string;
        /**
         * The ARN for IAM Identity Center Instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-identitycenterinstancearn
         */
        readonly identityCenterInstanceArn?: string;
        /**
         * The ID of IAM Identity Store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-identitystoreid
         */
        readonly identityStoreId?: string;
        /**
         * Specify the attribute that contains the backend role (groupName, groupID) of IAM Identity Center.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-roleskey
         */
        readonly rolesKey?: string;
        /**
         * Specify the attribute that contains the subject (username, userID, email) of IAM Identity Center.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-identitycenteroptions.html#cfn-opensearchservice-domain-identitycenteroptions-subjectkey
         */
        readonly subjectKey?: string;
    }
    /**
     * The current status of the service software for an Amazon OpenSearch Service domain.
     *
     * For more information, see [Service software updates in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html
     */
    interface ServiceSoftwareOptionsProperty {
        /**
         * The timestamp, in Epoch time, until which you can manually request a service software update.
         *
         * After this date, we automatically update your service software.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-automatedupdatedate
         */
        readonly automatedUpdateDate?: string;
        /**
         * True if you're able to cancel your service software version update.
         *
         * False if you can't cancel your service software update.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-cancellable
         */
        readonly cancellable?: boolean | cdk.IResolvable;
        /**
         * The current service software version present on the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-currentversion
         */
        readonly currentVersion?: string;
        /**
         * A description of the service software update status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-description
         */
        readonly description?: string;
        /**
         * The new service software version, if one is available.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-newversion
         */
        readonly newVersion?: string;
        /**
         * True if a service software is never automatically updated.
         *
         * False if a service software is automatically updated after the automated update date.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-optionaldeployment
         */
        readonly optionalDeployment?: boolean | cdk.IResolvable;
        /**
         * True if you're able to update your service software version.
         *
         * False if you can't update your service software version.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-updateavailable
         */
        readonly updateAvailable?: boolean | cdk.IResolvable;
        /**
         * The status of your service software update.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-servicesoftwareoptions.html#cfn-opensearchservice-domain-servicesoftwareoptions-updatestatus
         */
        readonly updateStatus?: string;
    }
}
/**
 * Properties for defining a `CfnDomain`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html
 */
export interface CfnDomainProps {
    /**
     * An AWS Identity and Access Management ( IAM ) policy document that specifies who can access the OpenSearch Service domain and their permissions.
     *
     * For more information, see [Configuring access policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-creating) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-accesspolicies
     */
    readonly accessPolicies?: any | cdk.IResolvable;
    /**
     * Additional options to specify for the OpenSearch Service domain.
     *
     * For more information, see [AdvancedOptions](https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html#API_CreateDomain_RequestBody) in the OpenSearch Service API reference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-advancedoptions
     */
    readonly advancedOptions?: cdk.IResolvable | Record<string, string>;
    /**
     * Specifies options for fine-grained access control and SAML authentication.
     *
     * If you specify advanced security options, you must also enable node-to-node encryption ( [NodeToNodeEncryptionOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-nodetonodeencryptionoptions.html) ) and encryption at rest ( [EncryptionAtRestOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-encryptionatrestoptions.html) ). You must also enable `EnforceHTTPS` within [DomainEndpointOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-domain-domainendpointoptions.html) , which requires HTTPS for all traffic to the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-advancedsecurityoptions
     */
    readonly advancedSecurityOptions?: CfnDomain.AdvancedSecurityOptionsInputProperty | cdk.IResolvable;
    /**
     * Container for the cluster configuration of a domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-clusterconfig
     */
    readonly clusterConfig?: CfnDomain.ClusterConfigProperty | cdk.IResolvable;
    /**
     * Configures OpenSearch Service to use Amazon Cognito authentication for OpenSearch Dashboards.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-cognitooptions
     */
    readonly cognitoOptions?: CfnDomain.CognitoOptionsProperty | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-domainarn
     */
    readonly domainArn?: string;
    /**
     * Specifies additional options for the domain endpoint, such as whether to require HTTPS for all traffic or whether to use a custom endpoint rather than the default endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-domainendpointoptions
     */
    readonly domainEndpointOptions?: CfnDomain.DomainEndpointOptionsProperty | cdk.IResolvable;
    /**
     * A name for the OpenSearch Service domain.
     *
     * The name must have a minimum length of 3 and a maximum length of 28. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the domain name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * Required when creating a new domain.
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-domainname
     */
    readonly domainName?: string;
    /**
     * The configurations of Amazon Elastic Block Store (Amazon EBS) volumes that are attached to data nodes in the OpenSearch Service domain.
     *
     * For more information, see [EBS volume size limits](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/limits.html#ebsresource) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-ebsoptions
     */
    readonly ebsOptions?: CfnDomain.EBSOptionsProperty | cdk.IResolvable;
    /**
     * Whether the domain should encrypt data at rest, and if so, the AWS KMS key to use.
     *
     * See [Encryption of data at rest for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html) .
     *
     * If no encryption at rest options were initially specified in the template, updating this property by adding it causes no interruption. However, if you change this property after it's already been set within a template, the domain is deleted and recreated in order to modify the property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-encryptionatrestoptions
     */
    readonly encryptionAtRestOptions?: CfnDomain.EncryptionAtRestOptionsProperty | cdk.IResolvable;
    /**
     * The version of OpenSearch to use.
     *
     * The value must be in the format `OpenSearch_X.Y` or `Elasticsearch_X.Y` . If not specified, the latest version of OpenSearch is used. For information about the versions that OpenSearch Service supports, see [Supported versions of OpenSearch and Elasticsearch](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html#choosing-version) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * If you set the [EnableVersionUpgrade](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-upgradeopensearchdomain) update policy to `true` , you can update `EngineVersion` without interruption. When `EnableVersionUpgrade` is set to `false` , or is not specified, updating `EngineVersion` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-engineversion
     */
    readonly engineVersion?: string;
    /**
     * Container for IAM Identity Center Option control for the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-identitycenteroptions
     */
    readonly identityCenterOptions?: CfnDomain.IdentityCenterOptionsProperty | cdk.IResolvable;
    /**
     * Choose either dual stack or IPv4 as your IP address type.
     *
     * Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * An object with one or more of the following keys: `SEARCH_SLOW_LOGS` , `ES_APPLICATION_LOGS` , `INDEX_SLOW_LOGS` , `AUDIT_LOGS` , depending on the types of logs you want to publish.
     *
     * Each key needs a valid `LogPublishingOption` value. For the full syntax, see the [examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#aws-resource-opensearchservice-domain--examples) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-logpublishingoptions
     */
    readonly logPublishingOptions?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnDomain.LogPublishingOptionProperty>;
    /**
     * Specifies whether node-to-node encryption is enabled.
     *
     * See [Node-to-node encryption for Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ntn.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-nodetonodeencryptionoptions
     */
    readonly nodeToNodeEncryptionOptions?: cdk.IResolvable | CfnDomain.NodeToNodeEncryptionOptionsProperty;
    /**
     * Options for a domain's off-peak window, during which OpenSearch Service can perform mandatory configuration changes on the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-offpeakwindowoptions
     */
    readonly offPeakWindowOptions?: cdk.IResolvable | CfnDomain.OffPeakWindowOptionsProperty;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-skipshardmigrationwait
     */
    readonly skipShardMigrationWait?: boolean | cdk.IResolvable;
    /**
     * *DEPRECATED* .
     *
     * The automated snapshot configuration for the OpenSearch Service domain indexes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-snapshotoptions
     */
    readonly snapshotOptions?: cdk.IResolvable | CfnDomain.SnapshotOptionsProperty;
    /**
     * Service software update options for the domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-softwareupdateoptions
     */
    readonly softwareUpdateOptions?: cdk.IResolvable | CfnDomain.SoftwareUpdateOptionsProperty;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the OpenSearch Service domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The virtual private cloud (VPC) configuration for the OpenSearch Service domain.
     *
     * For more information, see [Launching your Amazon OpenSearch Service domains within a VPC](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html) in the *Amazon OpenSearch Service Developer Guide* .
     *
     * If you remove this entity altogether, along with its associated properties, it causes a replacement. You might encounter this scenario if you're updating your security configuration from a VPC to a public endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-domain.html#cfn-opensearchservice-domain-vpcoptions
     */
    readonly vpcOptions?: cdk.IResolvable | CfnDomain.VPCOptionsProperty;
}
/**
 * Creates an OpenSearch Application.
 *
 * @cloudformationResource AWS::OpenSearchService::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
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
    /**
     * The Amazon Resource Name (ARN) of the domain. See [Identifiers for IAM Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in *Using AWS Identity and Access Management* for more information.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Unique identifier for an OpenSearch application.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * List of application configurations.
     */
    appConfigs?: Array<CfnApplication.AppConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * List of data sources.
     */
    dataSources?: Array<CfnApplication.DataSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Endpoint URL of an OpenSearch Application.
     */
    endpoint?: string;
    /**
     * Container for IAM Identity Center Options settings.
     */
    iamIdentityCenterOptions?: CfnApplication.IamIdentityCenterOptionsProperty | cdk.IResolvable;
    /**
     * Name of an OpenSearch Application.
     */
    name: string;
    /**
     * An arbitrary set of tags (key-value pairs) for this application.
     */
    tags?: Array<cdk.CfnTag>;
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
     * Settings for IAM Identity Center for an OpenSearch Application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-iamidentitycenteroptions.html
     */
    interface IamIdentityCenterOptionsProperty {
        /**
         * IAM Identity Center is enabled for the OpenSearch Application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-iamidentitycenteroptions.html#cfn-opensearchservice-application-iamidentitycenteroptions-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Amazon Resource Name (ARN) format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-iamidentitycenteroptions.html#cfn-opensearchservice-application-iamidentitycenteroptions-iamidentitycenterinstancearn
         */
        readonly iamIdentityCenterInstanceArn?: string;
        /**
         * Amazon Resource Name of the IAM Identity Center's Application created for the OpenSearch Application after enabling IAM Identity Center.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-iamidentitycenteroptions.html#cfn-opensearchservice-application-iamidentitycenteroptions-iamroleforidentitycenterapplicationarn
         */
        readonly iamRoleForIdentityCenterApplicationArn?: string;
    }
    /**
     * Configurations of the OpenSearch Application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-appconfig.html
     */
    interface AppConfigProperty {
        /**
         * Specify the item to configure, such as admin role for the OpenSearch Application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-appconfig.html#cfn-opensearchservice-application-appconfig-key
         */
        readonly key: string;
        /**
         * Specifies the value to configure for the key, such as an IAM user ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-appconfig.html#cfn-opensearchservice-application-appconfig-value
         */
        readonly value: string;
    }
    /**
     * Data sources that are associated with an OpenSearch Application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-datasource.html
     */
    interface DataSourceProperty {
        /**
         * Amazon Resource Name (ARN) format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-datasource.html#cfn-opensearchservice-application-datasource-datasourcearn
         */
        readonly dataSourceArn: string;
        /**
         * Detailed description of a data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-opensearchservice-application-datasource.html#cfn-opensearchservice-application-datasource-datasourcedescription
         */
        readonly dataSourceDescription?: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html
 */
export interface CfnApplicationProps {
    /**
     * List of application configurations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-appconfigs
     */
    readonly appConfigs?: Array<CfnApplication.AppConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * List of data sources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-datasources
     */
    readonly dataSources?: Array<CfnApplication.DataSourceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Endpoint URL of an OpenSearch Application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-endpoint
     */
    readonly endpoint?: string;
    /**
     * Container for IAM Identity Center Options settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-iamidentitycenteroptions
     */
    readonly iamIdentityCenterOptions?: CfnApplication.IamIdentityCenterOptionsProperty | cdk.IResolvable;
    /**
     * Name of an OpenSearch Application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-name
     */
    readonly name: string;
    /**
     * An arbitrary set of tags (key-value pairs) for this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
