import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an Amazon EKS add-on.
 *
 * Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the *Amazon EKS User Guide* .
 *
 * @cloudformationResource AWS::EKS::Addon
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html
 */
export declare class CfnAddon extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAddon from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAddon;
    /**
     * The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the add-on.
     */
    addonName: string;
    /**
     * The version of the add-on.
     */
    addonVersion?: string;
    /**
     * The name of your cluster.
     */
    clusterName: string;
    /**
     * The configuration values that you provided.
     */
    configurationValues?: string;
    /**
     * An array of Pod Identity Assocations owned by the Addon.
     */
    podIdentityAssociations?: Array<cdk.IResolvable | CfnAddon.PodIdentityAssociationProperty> | cdk.IResolvable;
    /**
     * Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on.
     */
    preserveOnDelete?: boolean | cdk.IResolvable;
    /**
     * How to resolve field value conflicts for an Amazon EKS add-on.
     */
    resolveConflicts?: string;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account.
     */
    serviceAccountRoleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the add-on to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAddonProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAddon {
    /**
     * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-addon-podidentityassociation.html
     */
    interface PodIdentityAssociationProperty {
        /**
         * The Amazon Resource Name (ARN) of the IAM role to associate with the service account.
         *
         * The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-addon-podidentityassociation.html#cfn-eks-addon-podidentityassociation-rolearn
         */
        readonly roleArn: string;
        /**
         * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-addon-podidentityassociation.html#cfn-eks-addon-podidentityassociation-serviceaccount
         */
        readonly serviceAccount: string;
    }
}
/**
 * Properties for defining a `CfnAddon`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html
 */
export interface CfnAddonProps {
    /**
     * The name of the add-on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonname
     */
    readonly addonName: string;
    /**
     * The version of the add-on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-addonversion
     */
    readonly addonVersion?: string;
    /**
     * The name of your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-clustername
     */
    readonly clusterName: string;
    /**
     * The configuration values that you provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-configurationvalues
     */
    readonly configurationValues?: string;
    /**
     * An array of Pod Identity Assocations owned by the Addon.
     *
     * Each EKS Pod Identity association maps a role to a service account in a namespace in the cluster.
     *
     * For more information, see [Attach an IAM Role to an Amazon EKS add-on using Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-podidentityassociations
     */
    readonly podIdentityAssociations?: Array<cdk.IResolvable | CfnAddon.PodIdentityAssociationProperty> | cdk.IResolvable;
    /**
     * Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on.
     *
     * If an IAM account is associated with the add-on, it isn't removed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-preserveondelete
     */
    readonly preserveOnDelete?: boolean | cdk.IResolvable;
    /**
     * How to resolve field value conflicts for an Amazon EKS add-on.
     *
     * Conflicts are handled based on the value you choose:
     *
     * - *None* – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.
     * - *Overwrite* – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.
     * - *Preserve* – This is similar to the NONE option. If the self-managed version of the add-on is installed on your cluster Amazon EKS doesn't change the add-on resource properties. Creation of the add-on might fail if conflicts are detected. This option works differently during the update operation. For more information, see [`UpdateAddon`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) .
     *
     * If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-resolveconflicts
     */
    readonly resolveConflicts?: string;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account.
     *
     * The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the *Amazon EKS User Guide* .
     *
     * > To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see [Enabling IAM roles for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-serviceaccountrolearn
     */
    readonly serviceAccountRoleArn?: string;
    /**
     * The metadata that you apply to the add-on to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Add-on tags do not propagate to any other resources associated with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html#cfn-eks-addon-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an Amazon EKS control plane.
 *
 * The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as `etcd` and the API server. The control plane runs in an account managed by AWS , and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.
 *
 * The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support `kubectl exec` , `logs` , and `proxy` data flows).
 *
 * Amazon EKS nodes run in your AWS account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.
 *
 * You can use the `endpointPublicAccess` and `endpointPrivateAccess` parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see [Amazon EKS Cluster Endpoint Access Control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
 *
 * You can use the `logging` parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster Control Plane Logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the **Amazon EKS User Guide** .
 *
 * > CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](https://docs.aws.amazon.com/cloudwatch/pricing/) .
 *
 * In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see [Allowing users to access your cluster](https://docs.aws.amazon.com/eks/latest/userguide/cluster-auth.html) and [Launching Amazon EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html) in the *Amazon EKS User Guide* .
 *
 * @cloudformationResource AWS::EKS::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * The ARN of the cluster, such as `arn:aws:eks:us-west-2:666666666666:cluster/prod` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The `certificate-authority-data` for your cluster.
     *
     * @cloudformationAttribute CertificateAuthorityData
     */
    readonly attrCertificateAuthorityData: string;
    /**
     * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
     *
     * This parameter is only returned by Amazon EKS clusters that support managed node groups. For more information, see [Managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html) in the *Amazon EKS User Guide* .
     *
     * @cloudformationAttribute ClusterSecurityGroupId
     */
    readonly attrClusterSecurityGroupId: string;
    /**
     * Amazon Resource Name (ARN) or alias of the customer master key (CMK).
     *
     * @cloudformationAttribute EncryptionConfigKeyArn
     */
    readonly attrEncryptionConfigKeyArn: string;
    /**
     * The endpoint for your Kubernetes API server, such as `https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * The ID of your local Amazon EKS cluster on an AWS Outpost. This property isn't available for an Amazon EKS cluster on the AWS cloud.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The CIDR block that Kubernetes Service IP addresses are assigned from if you created a `1.21` or later cluster with version `>1.10.1` or later of the Amazon VPC CNI add-on and specified `ipv6` for *ipFamily* when you created the cluster. Kubernetes assigns Service addresses from the unique local address range ( `fc00::/7` ) because you can't specify a custom `IPv6` CIDR block when you create the cluster.
     *
     * @cloudformationAttribute KubernetesNetworkConfig.ServiceIpv6Cidr
     */
    readonly attrKubernetesNetworkConfigServiceIpv6Cidr: string;
    /**
     * The issuer URL for the OIDC identity provider of the cluster, such as `https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E` . If you need to remove `https://` from this output value, you can include the following code in your template.
     *
     * `!Select [1, !Split ["//", !GetAtt EKSCluster.OpenIdConnectIssuerUrl]]`
     *
     * @cloudformationAttribute OpenIdConnectIssuerUrl
     */
    readonly attrOpenIdConnectIssuerUrl: string;
    /**
     * The access configuration for the cluster.
     */
    accessConfig?: CfnCluster.AccessConfigProperty | cdk.IResolvable;
    /**
     * If you set this value to `False` when creating a cluster, the default networking add-ons will not be installed.
     */
    bootstrapSelfManagedAddons?: boolean | cdk.IResolvable;
    /**
     * Indicates the current configuration of the compute capability on your EKS Auto Mode cluster.
     */
    computeConfig?: CfnCluster.ComputeConfigProperty | cdk.IResolvable;
    /**
     * The encryption configuration for the cluster.
     */
    encryptionConfig?: Array<CfnCluster.EncryptionConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Kubernetes network configuration for the cluster.
     */
    kubernetesNetworkConfig?: cdk.IResolvable | CfnCluster.KubernetesNetworkConfigProperty;
    /**
     * The logging configuration for your cluster.
     */
    logging?: cdk.IResolvable | CfnCluster.LoggingProperty;
    /**
     * The unique name to give to your cluster.
     */
    name?: string;
    /**
     * An object representing the configuration of your local Amazon EKS cluster on an AWS Outpost.
     */
    outpostConfig?: cdk.IResolvable | CfnCluster.OutpostConfigProperty;
    /**
     * The configuration in the cluster for EKS Hybrid Nodes.
     */
    remoteNetworkConfig?: cdk.IResolvable | CfnCluster.RemoteNetworkConfigProperty;
    /**
     * The VPC configuration that's used by the cluster control plane.
     */
    resourcesVpcConfig: cdk.IResolvable | CfnCluster.ResourcesVpcConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     */
    roleArn: string;
    /**
     * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster.
     */
    storageConfig?: cdk.IResolvable | CfnCluster.StorageConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the cluster to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * This value indicates if extended support is enabled or disabled for the cluster.
     */
    upgradePolicy?: cdk.IResolvable | CfnCluster.UpgradePolicyProperty;
    /**
     * The desired Kubernetes version for your cluster.
     */
    version?: string;
    /**
     * The configuration for zonal shift for the cluster.
     */
    zonalShiftConfig?: cdk.IResolvable | CfnCluster.ZonalShiftConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCluster {
    /**
     * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs.
     *
     * By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster control plane logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the **Amazon EKS User Guide** .
     *
     * > When updating a resource, you must include this `Logging` property if the previous CloudFormation template of the resource had it. > CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](https://docs.aws.amazon.com/cloudwatch/pricing/) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html
     */
    interface LoggingProperty {
        /**
         * The cluster control plane logging configuration for your cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-logging.html#cfn-eks-cluster-logging-clusterlogging
         */
        readonly clusterLogging?: CfnCluster.ClusterLoggingProperty | cdk.IResolvable;
    }
    /**
     * The cluster control plane logging configuration for your cluster.
     *
     * > When updating a resource, you must include this `ClusterLogging` property if the previous CloudFormation template of the resource had it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html
     */
    interface ClusterLoggingProperty {
        /**
         * The enabled control plane logs for your cluster. All log types are disabled if the array is empty.
         *
         * > When updating a resource, you must include this `EnabledTypes` property if the previous CloudFormation template of the resource had it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-clusterlogging.html#cfn-eks-cluster-clusterlogging-enabledtypes
         */
        readonly enabledTypes?: Array<cdk.IResolvable | CfnCluster.LoggingTypeConfigProperty> | cdk.IResolvable;
    }
    /**
     * The enabled logging type.
     *
     * For a list of the valid logging types, see the [`types` property of `LogSetup`](https://docs.aws.amazon.com/eks/latest/APIReference/API_LogSetup.html#AmazonEKS-Type-LogSetup-types) in the *Amazon EKS API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html
     */
    interface LoggingTypeConfigProperty {
        /**
         * The name of the log type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-loggingtypeconfig.html#cfn-eks-cluster-loggingtypeconfig-type
         */
        readonly type?: string;
    }
    /**
     * The configuration of your local Amazon EKS cluster on an AWS Outpost.
     *
     * Before creating a cluster on an Outpost, review [Creating a local cluster on an Outpost](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html) in the *Amazon EKS User Guide* . This API isn't available for Amazon EKS clusters on the AWS cloud.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html
     */
    interface OutpostConfigProperty {
        /**
         * The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts.
         *
         * Choose an instance type based on the number of nodes that your cluster will have. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide* .
         *
         * The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html#cfn-eks-cluster-outpostconfig-controlplaneinstancetype
         */
        readonly controlPlaneInstanceType: string;
        /**
         * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.
         *
         * For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html#cfn-eks-cluster-outpostconfig-controlplaneplacement
         */
        readonly controlPlanePlacement?: CfnCluster.ControlPlanePlacementProperty | cdk.IResolvable;
        /**
         * The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts.
         *
         * Only a single Outpost ARN is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-outpostconfig.html#cfn-eks-cluster-outpostconfig-outpostarns
         */
        readonly outpostArns: Array<string>;
    }
    /**
     * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.
     *
     * For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-controlplaneplacement.html
     */
    interface ControlPlanePlacementProperty {
        /**
         * The name of the placement group for the Kubernetes control plane instances.
         *
         * This property is only used for a local cluster on an AWS Outpost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-controlplaneplacement.html#cfn-eks-cluster-controlplaneplacement-groupname
         */
        readonly groupName?: string;
    }
    /**
     * The encryption configuration for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html
     */
    interface EncryptionConfigProperty {
        /**
         * The encryption provider for the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html#cfn-eks-cluster-encryptionconfig-provider
         */
        readonly provider?: cdk.IResolvable | CfnCluster.ProviderProperty;
        /**
         * Specifies the resources to be encrypted.
         *
         * The only supported value is `secrets` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-encryptionconfig.html#cfn-eks-cluster-encryptionconfig-resources
         */
        readonly resources?: Array<string>;
    }
    /**
     * Identifies the AWS Key Management Service ( AWS KMS ) key used to encrypt the secrets.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-provider.html
     */
    interface ProviderProperty {
        /**
         * Amazon Resource Name (ARN) or alias of the KMS key.
         *
         * The KMS key must be symmetric and created in the same AWS Region as the cluster. If the KMS key was created in a different account, the [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) must have access to the KMS key. For more information, see [Allowing users in other accounts to use a KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-provider.html#cfn-eks-cluster-provider-keyarn
         */
        readonly keyArn?: string;
    }
    /**
     * The Kubernetes network configuration for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html
     */
    interface KubernetesNetworkConfigProperty {
        /**
         * Request to enable or disable the load balancing capability on your EKS Auto Mode cluster.
         *
         * For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html#cfn-eks-cluster-kubernetesnetworkconfig-elasticloadbalancing
         */
        readonly elasticLoadBalancing?: CfnCluster.ElasticLoadBalancingProperty | cdk.IResolvable;
        /**
         * Specify which IP family is used to assign Kubernetes pod and service IP addresses.
         *
         * If you don't specify a value, `ipv4` is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify `ipv6` , the VPC and subnets that you specify for cluster creation must have both `IPv4` and `IPv6` CIDR blocks assigned to them. You can't specify `ipv6` for clusters in China Regions.
         *
         * You can only specify `ipv6` for `1.21` and later clusters that use version `1.10.1` or later of the Amazon VPC CNI add-on. If you specify `ipv6` , then ensure that your VPC meets the requirements listed in the considerations listed in [Assigning IPv6 addresses to pods and services](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html) in the *Amazon EKS User Guide* . Kubernetes assigns services `IPv6` addresses from the unique local address range `(fc00::/7)` . You can't specify a custom `IPv6` CIDR block. Pod addresses are assigned from the subnet's `IPv6` CIDR.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html#cfn-eks-cluster-kubernetesnetworkconfig-ipfamily
         */
        readonly ipFamily?: string;
        /**
         * Don't specify a value if you select `ipv6` for *ipFamily* .
         *
         * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the `10.100.0.0/16` or `172.20.0.0/16` CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:
         *
         * - Within one of the following private IP address blocks: `10.0.0.0/8` , `172.16.0.0/12` , or `192.168.0.0/16` .
         * - Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.
         * - Between `/24` and `/12` .
         *
         * > You can only specify a custom CIDR block when you create a cluster. You can't change this value after the cluster is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html#cfn-eks-cluster-kubernetesnetworkconfig-serviceipv4cidr
         */
        readonly serviceIpv4Cidr?: string;
        /**
         * The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified `ipv6` for *ipFamily* when you created the cluster. Kubernetes assigns service addresses from the unique local address range ( `fc00::/7` ) because you can't specify a custom IPv6 CIDR block when you create the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-kubernetesnetworkconfig.html#cfn-eks-cluster-kubernetesnetworkconfig-serviceipv6cidr
         */
        readonly serviceIpv6Cidr?: string;
    }
    /**
     * Indicates the current configuration of the load balancing capability on your EKS Auto Mode cluster.
     *
     * For example, if the capability is enabled or disabled. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-elasticloadbalancing.html
     */
    interface ElasticLoadBalancingProperty {
        /**
         * Indicates if the load balancing capability is enabled on your EKS Auto Mode cluster.
         *
         * If the load balancing capability is enabled, EKS Auto Mode will create and delete load balancers in your AWS account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-elasticloadbalancing.html#cfn-eks-cluster-elasticloadbalancing-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * An object representing the VPC configuration to use for an Amazon EKS cluster.
     *
     * > When updating a resource, you must include these properties if the previous CloudFormation template of the resource had them:
     * >
     * > - `EndpointPublicAccess`
     * > - `EndpointPrivateAccess`
     * > - `PublicAccessCidrs`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html
     */
    interface ResourcesVpcConfigProperty {
        /**
         * Set this value to `true` to enable private access for your cluster's Kubernetes API server endpoint.
         *
         * If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is `false` , which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that `publicAccessCidrs` includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-endpointprivateaccess
         */
        readonly endpointPrivateAccess?: boolean | cdk.IResolvable;
        /**
         * Set this value to `false` to disable public access to your cluster's Kubernetes API server endpoint.
         *
         * If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is `true` , which enables public access for your Kubernetes API server. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-endpointpublicaccess
         */
        readonly endpointPublicAccess?: boolean | cdk.IResolvable;
        /**
         * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint.
         *
         * Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is `0.0.0.0/0` . If you've disabled private endpoint access, make sure that you specify the necessary CIDR blocks for every node and AWS Fargate `Pod` in the cluster. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-publicaccesscidrs
         */
        readonly publicAccessCidrs?: Array<string>;
        /**
         * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane.
         *
         * If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see [Amazon EKS security group considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the **Amazon EKS User Guide** .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * Specify subnets for your Amazon EKS nodes.
         *
         * Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-resourcesvpcconfig.html#cfn-eks-cluster-resourcesvpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * The access configuration for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-accessconfig.html
     */
    interface AccessConfigProperty {
        /**
         * The desired authentication mode for the cluster.
         *
         * If you create a cluster by using the EKS API, AWS SDKs, or AWS CloudFormation , the default is `CONFIG_MAP` . If you create the cluster by using the AWS Management Console , the default value is `API_AND_CONFIG_MAP` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-accessconfig.html#cfn-eks-cluster-accessconfig-authenticationmode
         */
        readonly authenticationMode?: string;
        /**
         * Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-accessconfig.html#cfn-eks-cluster-accessconfig-bootstrapclustercreatoradminpermissions
         */
        readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdk.IResolvable;
    }
    /**
     * The support policy to use for the cluster.
     *
     * Extended support allows you to remain on specific Kubernetes versions for longer. Clusters in extended support have higher costs. The default value is `EXTENDED` . Use `STANDARD` to disable extended support.
     *
     * [Learn more about EKS Extended Support in the *Amazon EKS User Guide* .](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-upgradepolicy.html
     */
    interface UpgradePolicyProperty {
        /**
         * If the cluster is set to `EXTENDED` , it will enter extended support at the end of standard support.
         *
         * If the cluster is set to `STANDARD` , it will be automatically upgraded at the end of standard support.
         *
         * [Learn more about EKS Extended Support in the *Amazon EKS User Guide* .](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-upgradepolicy.html#cfn-eks-cluster-upgradepolicy-supporttype
         */
        readonly supportType?: string;
    }
    /**
     * The configuration in the cluster for EKS Hybrid Nodes.
     *
     * You can't change or update this configuration after the cluster is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotenetworkconfig.html
     */
    interface RemoteNetworkConfigProperty {
        /**
         * The list of network CIDRs that can contain hybrid nodes.
         *
         * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
         *
         * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
         *
         * It must satisfy the following requirements:
         *
         * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
         * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
         * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including AWS Transit Gateway , AWS Site-to-Site VPN , or AWS Direct Connect .
         * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250` .
         * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
         * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotenetworkconfig.html#cfn-eks-cluster-remotenetworkconfig-remotenodenetworks
         */
        readonly remoteNodeNetworks: Array<cdk.IResolvable | CfnCluster.RemoteNodeNetworkProperty> | cdk.IResolvable;
        /**
         * The list of network CIDRs that can contain pods that run Kubernetes webhooks on hybrid nodes.
         *
         * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
         *
         * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
         *
         * It must satisfy the following requirements:
         *
         * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
         * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotenetworkconfig.html#cfn-eks-cluster-remotenetworkconfig-remotepodnetworks
         */
        readonly remotePodNetworks?: Array<cdk.IResolvable | CfnCluster.RemotePodNetworkProperty> | cdk.IResolvable;
    }
    /**
     * A network CIDR that can contain hybrid nodes.
     *
     * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
     *
     * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
     *
     * It must satisfy the following requirements:
     *
     * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
     * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
     * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including AWS Transit Gateway , AWS Site-to-Site VPN , or AWS Direct Connect .
     * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250` .
     * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
     * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotenodenetwork.html
     */
    interface RemoteNodeNetworkProperty {
        /**
         * A network CIDR that can contain hybrid nodes.
         *
         * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
         *
         * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
         *
         * It must satisfy the following requirements:
         *
         * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
         * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
         * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including AWS Transit Gateway , AWS Site-to-Site VPN , or AWS Direct Connect .
         * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250` .
         * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
         * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotenodenetwork.html#cfn-eks-cluster-remotenodenetwork-cidrs
         */
        readonly cidrs: Array<string>;
    }
    /**
     * A network CIDR that can contain pods that run Kubernetes webhooks on hybrid nodes.
     *
     * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
     *
     * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
     *
     * It must satisfy the following requirements:
     *
     * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
     * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotepodnetwork.html
     */
    interface RemotePodNetworkProperty {
        /**
         * A network CIDR that can contain pods that run Kubernetes webhooks on hybrid nodes.
         *
         * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
         *
         * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16` ).
         *
         * It must satisfy the following requirements:
         *
         * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /24, maximum allowed size is /8. Publicly-routable addresses aren't supported.
         * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-remotepodnetwork.html#cfn-eks-cluster-remotepodnetwork-cidrs
         */
        readonly cidrs: Array<string>;
    }
    /**
     * Indicates the current configuration of the compute capability on your EKS Auto Mode cluster.
     *
     * For example, if the capability is enabled or disabled. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your AWS account. For more information, see EKS Auto Mode compute capability in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-computeconfig.html
     */
    interface ComputeConfigProperty {
        /**
         * Request to enable or disable the compute capability on your EKS Auto Mode cluster.
         *
         * If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your AWS account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-computeconfig.html#cfn-eks-cluster-computeconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Configuration for node pools that defines the compute resources for your EKS Auto Mode cluster.
         *
         * For more information, see EKS Auto Mode Node Pools in the *Amazon EKS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-computeconfig.html#cfn-eks-cluster-computeconfig-nodepools
         */
        readonly nodePools?: Array<string>;
        /**
         * The ARN of the IAM Role EKS will assign to EC2 Managed Instances in your EKS Auto Mode cluster.
         *
         * This value cannot be changed after the compute capability of EKS Auto Mode is enabled. For more information, see the IAM Reference in the *Amazon EKS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-computeconfig.html#cfn-eks-cluster-computeconfig-noderolearn
         */
        readonly nodeRoleArn?: string;
    }
    /**
     * Request to update the configuration of the storage capability of your EKS Auto Mode cluster.
     *
     * For example, enable the capability. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-storageconfig.html
     */
    interface StorageConfigProperty {
        /**
         * Request to configure EBS Block Storage settings for your EKS Auto Mode cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-storageconfig.html#cfn-eks-cluster-storageconfig-blockstorage
         */
        readonly blockStorage?: CfnCluster.BlockStorageProperty | cdk.IResolvable;
    }
    /**
     * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster.
     *
     * For example, if the capability is enabled or disabled. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your AWS account. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-blockstorage.html
     */
    interface BlockStorageProperty {
        /**
         * Indicates if the block storage capability is enabled on your EKS Auto Mode cluster.
         *
         * If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your AWS account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-blockstorage.html#cfn-eks-cluster-blockstorage-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * The configuration for zonal shift for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-zonalshiftconfig.html
     */
    interface ZonalShiftConfigProperty {
        /**
         * If zonal shift is enabled, AWS configures zonal autoshift for the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-cluster-zonalshiftconfig.html#cfn-eks-cluster-zonalshiftconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The access configuration for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-accessconfig
     */
    readonly accessConfig?: CfnCluster.AccessConfigProperty | cdk.IResolvable;
    /**
     * If you set this value to `False` when creating a cluster, the default networking add-ons will not be installed.
     *
     * The default networking addons include vpc-cni, coredns, and kube-proxy.
     *
     * Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-bootstrapselfmanagedaddons
     */
    readonly bootstrapSelfManagedAddons?: boolean | cdk.IResolvable;
    /**
     * Indicates the current configuration of the compute capability on your EKS Auto Mode cluster.
     *
     * For example, if the capability is enabled or disabled. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your AWS account. For more information, see EKS Auto Mode compute capability in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-computeconfig
     */
    readonly computeConfig?: CfnCluster.ComputeConfigProperty | cdk.IResolvable;
    /**
     * The encryption configuration for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-encryptionconfig
     */
    readonly encryptionConfig?: Array<CfnCluster.EncryptionConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Kubernetes network configuration for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig
     */
    readonly kubernetesNetworkConfig?: cdk.IResolvable | CfnCluster.KubernetesNetworkConfigProperty;
    /**
     * The logging configuration for your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-logging
     */
    readonly logging?: cdk.IResolvable | CfnCluster.LoggingProperty;
    /**
     * The unique name to give to your cluster.
     *
     * The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphanumeric character and can't be longer than 100 characters. The name must be unique within the AWS Region and AWS account that you're creating the cluster in. Note that underscores can't be used in AWS CloudFormation .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-name
     */
    readonly name?: string;
    /**
     * An object representing the configuration of your local Amazon EKS cluster on an AWS Outpost.
     *
     * This object isn't available for clusters on the AWS cloud.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-outpostconfig
     */
    readonly outpostConfig?: cdk.IResolvable | CfnCluster.OutpostConfigProperty;
    /**
     * The configuration in the cluster for EKS Hybrid Nodes.
     *
     * You can't change or update this configuration after the cluster is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-remotenetworkconfig
     */
    readonly remoteNetworkConfig?: cdk.IResolvable | CfnCluster.RemoteNetworkConfigProperty;
    /**
     * The VPC configuration that's used by the cluster control plane.
     *
     * Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the *Amazon EKS User Guide* . You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig
     */
    readonly resourcesVpcConfig: cdk.IResolvable | CfnCluster.ResourcesVpcConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
     *
     * For more information, see [Amazon EKS Service IAM Role](https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the **Amazon EKS User Guide** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-rolearn
     */
    readonly roleArn: string;
    /**
     * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster.
     *
     * For example, if the capability is enabled or disabled. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your AWS account. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-storageconfig
     */
    readonly storageConfig?: cdk.IResolvable | CfnCluster.StorageConfigProperty;
    /**
     * The metadata that you apply to the cluster to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Cluster tags don't propagate to any other resources associated with the cluster.
     *
     * > You must have the `eks:TagResource` and `eks:UntagResource` permissions for your [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the AWS CloudFormation stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * This value indicates if extended support is enabled or disabled for the cluster.
     *
     * [Learn more about EKS Extended Support in the *Amazon EKS User Guide* .](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-upgradepolicy
     */
    readonly upgradePolicy?: cdk.IResolvable | CfnCluster.UpgradePolicyProperty;
    /**
     * The desired Kubernetes version for your cluster.
     *
     * If you don't specify a value here, the default version available in Amazon EKS is used.
     *
     * > The default version might not be the latest version available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-version
     */
    readonly version?: string;
    /**
     * The configuration for zonal shift for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-zonalshiftconfig
     */
    readonly zonalShiftConfig?: cdk.IResolvable | CfnCluster.ZonalShiftConfigProperty;
}
/**
 * Creates an AWS Fargate profile for your Amazon EKS cluster.
 *
 * You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.
 *
 * The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile's selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.
 *
 * When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes [Role Based Access Control](https://docs.aws.amazon.com/https://kubernetes.io/docs/reference/access-authn-authz/rbac/) (RBAC) for authorization so that the `kubelet` that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see [Pod Execution Role](https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the *Amazon EKS User Guide* .
 *
 * Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.
 *
 * If any Fargate profiles in a cluster are in the `DELETING` status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.
 *
 * For more information, see [AWS Fargate profile](https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html) in the *Amazon EKS User Guide* .
 *
 * @cloudformationResource AWS::EKS::FargateProfile
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html
 */
export declare class CfnFargateProfile extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFargateProfile from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFargateProfile;
    /**
     * The ARN of the cluster, such as `arn:aws:eks:us-west-2:666666666666:fargateprofile/myCluster/myFargateProfile/1cb1a11a-1dc1-1d11-cf11-1111f11fa111` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of your cluster.
     */
    clusterName: string;
    /**
     * The name of the Fargate profile.
     */
    fargateProfileName?: string;
    /**
     * The Amazon Resource Name (ARN) of the `Pod` execution role to use for a `Pod` that matches the selectors in the Fargate profile.
     */
    podExecutionRoleArn: string;
    /**
     * The selectors to match for a `Pod` to use this Fargate profile.
     */
    selectors: Array<cdk.IResolvable | CfnFargateProfile.SelectorProperty> | cdk.IResolvable;
    /**
     * The IDs of subnets to launch a `Pod` into.
     */
    subnets?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that assists with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFargateProfileProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFargateProfile {
    /**
     * An object representing an AWS Fargate profile selector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-selector.html
     */
    interface SelectorProperty {
        /**
         * The Kubernetes labels that the selector should match.
         *
         * A pod must contain all of the labels that are specified in the selector for it to be considered a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-selector.html#cfn-eks-fargateprofile-selector-labels
         */
        readonly labels?: Array<cdk.IResolvable | CfnFargateProfile.LabelProperty> | cdk.IResolvable;
        /**
         * The Kubernetes `namespace` that the selector should match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-selector.html#cfn-eks-fargateprofile-selector-namespace
         */
        readonly namespace: string;
    }
    /**
     * A key-value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-label.html
     */
    interface LabelProperty {
        /**
         * Enter a key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-label.html#cfn-eks-fargateprofile-label-key
         */
        readonly key: string;
        /**
         * Enter a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-fargateprofile-label.html#cfn-eks-fargateprofile-label-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnFargateProfile`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html
 */
export interface CfnFargateProfileProps {
    /**
     * The name of your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-clustername
     */
    readonly clusterName: string;
    /**
     * The name of the Fargate profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-fargateprofilename
     */
    readonly fargateProfileName?: string;
    /**
     * The Amazon Resource Name (ARN) of the `Pod` execution role to use for a `Pod` that matches the selectors in the Fargate profile.
     *
     * The `Pod` execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see [`Pod` execution role](https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-podexecutionrolearn
     */
    readonly podExecutionRoleArn: string;
    /**
     * The selectors to match for a `Pod` to use this Fargate profile.
     *
     * Each selector must have an associated Kubernetes `namespace` . Optionally, you can also specify `labels` for a `namespace` . You may specify up to five selectors in a Fargate profile.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-selectors
     */
    readonly selectors: Array<cdk.IResolvable | CfnFargateProfile.SelectorProperty> | cdk.IResolvable;
    /**
     * The IDs of subnets to launch a `Pod` into.
     *
     * A `Pod` running on Fargate isn't assigned a public IP address, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-subnets
     */
    readonly subnets?: Array<string>;
    /**
     * Metadata that assists with categorization and organization.
     *
     * Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-fargateprofile.html#cfn-eks-fargateprofile-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Associates an identity provider configuration to a cluster.
 *
 * If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes `Role` and `ClusterRole` objects, assign permissions to them, and then bind them to the identities using Kubernetes `RoleBinding` and `ClusterRoleBinding` objects. For more information see [Using RBAC Authorization](https://docs.aws.amazon.com/https://kubernetes.io/docs/reference/access-authn-authz/rbac/) in the Kubernetes documentation.
 *
 * @cloudformationResource AWS::EKS::IdentityProviderConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html
 */
export declare class CfnIdentityProviderConfig extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentityProviderConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentityProviderConfig;
    /**
     * The Amazon Resource Name (ARN) associated with the identity provider config.
     *
     * @cloudformationAttribute IdentityProviderConfigArn
     */
    readonly attrIdentityProviderConfigArn: string;
    /**
     * The name of your cluster.
     */
    clusterName: string;
    /**
     * The name of the configuration.
     */
    identityProviderConfigName?: string;
    /**
     * An object representing an OpenID Connect (OIDC) identity provider configuration.
     */
    oidc?: cdk.IResolvable | CfnIdentityProviderConfig.OidcIdentityProviderConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that assists with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the identity provider configuration.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityProviderConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdentityProviderConfig {
    /**
     * An object representing the configuration for an OpenID Connect (OIDC) identity provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html
     */
    interface OidcIdentityProviderConfigProperty {
        /**
         * This is also known as *audience* .
         *
         * The ID of the client application that makes authentication requests to the OIDC identity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-clientid
         */
        readonly clientId: string;
        /**
         * The JSON web token (JWT) claim that the provider uses to return your groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-groupsclaim
         */
        readonly groupsClaim?: string;
        /**
         * The prefix that is prepended to group claims to prevent clashes with existing names (such as `system:` groups).
         *
         * For example, the value `oidc:` creates group names like `oidc:engineering` and `oidc:infra` . The prefix can't contain `system:`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-groupsprefix
         */
        readonly groupsPrefix?: string;
        /**
         * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-issuerurl
         */
        readonly issuerUrl: string;
        /**
         * The key-value pairs that describe required claims in the identity token.
         *
         * If set, each claim is verified to be present in the token with a matching value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-requiredclaims
         */
        readonly requiredClaims?: Array<cdk.IResolvable | CfnIdentityProviderConfig.RequiredClaimProperty> | cdk.IResolvable;
        /**
         * The JSON Web token (JWT) claim that is used as the username.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-usernameclaim
         */
        readonly usernameClaim?: string;
        /**
         * The prefix that is prepended to username claims to prevent clashes with existing names.
         *
         * The prefix can't contain `system:`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html#cfn-eks-identityproviderconfig-oidcidentityproviderconfig-usernameprefix
         */
        readonly usernamePrefix?: string;
    }
    /**
     * A key-value pair that describes a required claim in the identity token.
     *
     * If set, each claim is verified to be present in the token with a matching value.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html
     */
    interface RequiredClaimProperty {
        /**
         * The key to match from the token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html#cfn-eks-identityproviderconfig-requiredclaim-key
         */
        readonly key: string;
        /**
         * The value for the key from the token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html#cfn-eks-identityproviderconfig-requiredclaim-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnIdentityProviderConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html
 */
export interface CfnIdentityProviderConfigProps {
    /**
     * The name of your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#cfn-eks-identityproviderconfig-clustername
     */
    readonly clusterName: string;
    /**
     * The name of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#cfn-eks-identityproviderconfig-identityproviderconfigname
     */
    readonly identityProviderConfigName?: string;
    /**
     * An object representing an OpenID Connect (OIDC) identity provider configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#cfn-eks-identityproviderconfig-oidc
     */
    readonly oidc?: cdk.IResolvable | CfnIdentityProviderConfig.OidcIdentityProviderConfigProperty;
    /**
     * Metadata that assists with categorization and organization.
     *
     * Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#cfn-eks-identityproviderconfig-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the identity provider configuration.
     *
     * The only type available is `oidc` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html#cfn-eks-identityproviderconfig-type
     */
    readonly type: string;
}
/**
 * Creates a managed node group for an Amazon EKS cluster.
 *
 * You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template.
 *
 * For later updates, you will only be able to update a node group using a launch template only if it was originally deployed with a launch template. Additionally, the launch template ID or name must match what was used when the node group was created. You can update the launch template version with necessary changes. For more information about using launch templates, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) .
 *
 * An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by AWS for an Amazon EKS cluster. For more information, see [Managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html) in the *Amazon EKS User Guide* .
 *
 * > Windows AMI types are only supported for commercial AWS Regions that support Windows on Amazon EKS.
 *
 * @cloudformationResource AWS::EKS::Nodegroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html
 */
export declare class CfnNodegroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNodegroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNodegroup;
    /**
     * The Amazon Resource Name (ARN) associated with the managed node group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of your cluster.
     *
     * @cloudformationAttribute ClusterName
     */
    readonly attrClusterName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name associated with an Amazon EKS managed node group.
     *
     * @cloudformationAttribute NodegroupName
     */
    readonly attrNodegroupName: string;
    /**
     * The AMI type for your node group.
     */
    amiType?: string;
    /**
     * The capacity type of your managed node group.
     */
    capacityType?: string;
    /**
     * The name of your cluster.
     */
    clusterName: string;
    /**
     * The root device disk size (in GiB) for your node group instances.
     */
    diskSize?: number;
    /**
     * Force the update if any `Pod` on the existing node group can't be drained due to a `Pod` disruption budget issue.
     */
    forceUpdateEnabled?: boolean | cdk.IResolvable;
    /**
     * Specify the instance types for a node group.
     */
    instanceTypes?: Array<string>;
    /**
     * The Kubernetes `labels` applied to the nodes in the node group.
     */
    labels?: cdk.IResolvable | Record<string, string>;
    /**
     * An object representing a node group's launch template specification.
     */
    launchTemplate?: cdk.IResolvable | CfnNodegroup.LaunchTemplateSpecificationProperty;
    /**
     * The unique name to give your node group.
     */
    nodegroupName?: string;
    /**
     * The node auto repair configuration for the node group.
     */
    nodeRepairConfig?: cdk.IResolvable | CfnNodegroup.NodeRepairConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
     */
    nodeRole: string;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use with your node group (for example, `1.14.7- *YYYYMMDD*` ). By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see [Amazon EKS optimized Linux AMI Versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the *Amazon EKS User Guide* .
     */
    releaseVersion?: string;
    /**
     * The remote access configuration to use with your node group.
     */
    remoteAccess?: cdk.IResolvable | CfnNodegroup.RemoteAccessProperty;
    /**
     * The scaling configuration details for the Auto Scaling group that is created for your node group.
     */
    scalingConfig?: cdk.IResolvable | CfnNodegroup.ScalingConfigProperty;
    /**
     * The subnets to use for the Auto Scaling group that is created for your node group.
     */
    subnets: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata that assists with categorization and organization.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group when they are created.
     */
    taints?: Array<cdk.IResolvable | CfnNodegroup.TaintProperty> | cdk.IResolvable;
    /**
     * The node group update configuration.
     */
    updateConfig?: cdk.IResolvable | CfnNodegroup.UpdateConfigProperty;
    /**
     * The Kubernetes version to use for your managed nodes.
     */
    version?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNodegroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNodegroup {
    /**
     * The update configuration for the node group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html
     */
    interface UpdateConfigProperty {
        /**
         * The maximum number of nodes unavailable at once during a version update.
         *
         * Nodes are updated in parallel. This value or `maxUnavailablePercentage` is required to have a value.The maximum number is 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html#cfn-eks-nodegroup-updateconfig-maxunavailable
         */
        readonly maxUnavailable?: number;
        /**
         * The maximum percentage of nodes unavailable during a version update.
         *
         * This percentage of nodes are updated in parallel, up to 100 nodes at once. This value or `maxUnavailable` is required to have a value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html#cfn-eks-nodegroup-updateconfig-maxunavailablepercentage
         */
        readonly maxUnavailablePercentage?: number;
        /**
         * The configuration for the behavior to follow during a node group version update of this managed node group.
         *
         * You choose between two possible strategies for replacing nodes during an [`UpdateNodegroupVersion`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html) action.
         *
         * An Amazon EKS managed node group updates by replacing nodes with new nodes of newer AMI versions in parallel. The *update strategy* changes the managed node update behavior of the managed node group for each quantity. The *default* strategy has guardrails to protect you from misconfiguration and launches the new instances first, before terminating the old instances. The *minimal* strategy removes the guardrails and terminates the old instances before launching the new instances. This minimal strategy is useful in scenarios where you are constrained to resources or costs (for example, with hardware accelerators such as GPUs).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-updateconfig.html#cfn-eks-nodegroup-updateconfig-updatestrategy
         */
        readonly updateStrategy?: string;
    }
    /**
     * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group.
     *
     * When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html
     */
    interface ScalingConfigProperty {
        /**
         * The current number of nodes that the managed node group should maintain.
         *
         * > If you use the Kubernetes [Cluster Autoscaler](https://docs.aws.amazon.com/https://github.com/kubernetes/autoscaler#kubernetes-autoscaler) , you shouldn't change the `desiredSize` value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.
         *
         * Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.
         *
         * This parameter can be different from `minSize` in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let the Cluster Autoscaler reduce the number if there are too many. When the Cluster Autoscaler is used, the `desiredSize` parameter is altered by the Cluster Autoscaler (but can be out-of-date for short periods of time). the Cluster Autoscaler doesn't scale a managed node group lower than `minSize` or higher than `maxSize` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-desiredsize
         */
        readonly desiredSize?: number;
        /**
         * The maximum number of nodes that the managed node group can scale out to.
         *
         * For information about the maximum number that you can specify, see [Amazon EKS service quotas](https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html) in the *Amazon EKS User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-maxsize
         */
        readonly maxSize?: number;
        /**
         * The minimum number of nodes that the managed node group can scale in to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-scalingconfig.html#cfn-eks-nodegroup-scalingconfig-minsize
         */
        readonly minSize?: number;
    }
    /**
     * A property that allows a node to repel a `Pod` .
     *
     * For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html) in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html
     */
    interface TaintProperty {
        /**
         * The effect of the taint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html#cfn-eks-nodegroup-taint-effect
         */
        readonly effect?: string;
        /**
         * The key of the taint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html#cfn-eks-nodegroup-taint-key
         */
        readonly key?: string;
        /**
         * The value of the taint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-taint.html#cfn-eks-nodegroup-taint-value
         */
        readonly value?: string;
    }
    /**
     * An object representing a node group launch template specification.
     *
     * The launch template can't include [`SubnetId`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html) , [`IamInstanceProfile`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html) , [`RequestSpotInstances`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html) , [`HibernationOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html) , or [`TerminateInstances`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html) , or the node group deployment or update will fail. For more information about launch templates, see [`CreateLaunchTemplate`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html) in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * You must specify either the launch template ID or the launch template name in the request, but not both.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html
     */
    interface LaunchTemplateSpecificationProperty {
        /**
         * The ID of the launch template.
         *
         * You must specify either the launch template ID or the launch template name in the request, but not both. After node group creation, you cannot use a different ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html#cfn-eks-nodegroup-launchtemplatespecification-id
         */
        readonly id?: string;
        /**
         * The name of the launch template.
         *
         * You must specify either the launch template name or the launch template ID in the request, but not both. After node group creation, you cannot use a different name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html#cfn-eks-nodegroup-launchtemplatespecification-name
         */
        readonly name?: string;
        /**
         * The version number of the launch template to use.
         *
         * If no version is specified, then the template's default version is used. You can use a different version for node group updates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-launchtemplatespecification.html#cfn-eks-nodegroup-launchtemplatespecification-version
         */
        readonly version?: string;
    }
    /**
     * An object representing the remote access configuration for the managed node group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html
     */
    interface RemoteAccessProperty {
        /**
         * The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group.
         *
         * For more information, see [Amazon EC2 key pairs and Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the *Amazon Elastic Compute Cloud User Guide for Linux Instances* . For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see [Amazon EC2 key pairs and Windows instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html) in the *Amazon Elastic Compute Cloud User Guide for Windows Instances* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html#cfn-eks-nodegroup-remoteaccess-ec2sshkey
         */
        readonly ec2SshKey: string;
        /**
         * The security group IDs that are allowed SSH access (port 22) to the nodes.
         *
         * For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet ( `0.0.0.0/0` ). For more information, see [Security Groups for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon Virtual Private Cloud User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-remoteaccess.html#cfn-eks-nodegroup-remoteaccess-sourcesecuritygroups
         */
        readonly sourceSecurityGroups?: Array<string>;
    }
    /**
     * The node auto repair configuration for the node group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-noderepairconfig.html
     */
    interface NodeRepairConfigProperty {
        /**
         * Specifies whether to enable node auto repair for the node group.
         *
         * Node auto repair is disabled by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-nodegroup-noderepairconfig.html#cfn-eks-nodegroup-noderepairconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnNodegroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html
 */
export interface CfnNodegroupProps {
    /**
     * The AMI type for your node group.
     *
     * If you specify `launchTemplate` , and your launch template uses a custom AMI, then don't specify `amiType` , or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add `eks:kube-proxy-windows` to your Windows nodes `rolearn` in the `aws-auth` `ConfigMap` . For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-amitype
     */
    readonly amiType?: string;
    /**
     * The capacity type of your managed node group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-capacitytype
     */
    readonly capacityType?: string;
    /**
     * The name of your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-clustername
     */
    readonly clusterName: string;
    /**
     * The root device disk size (in GiB) for your node group instances.
     *
     * The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify `launchTemplate` , then don't specify `diskSize` , or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-disksize
     */
    readonly diskSize?: number;
    /**
     * Force the update if any `Pod` on the existing node group can't be drained due to a `Pod` disruption budget issue.
     *
     * If an update fails because all Pods can't be drained, you can force the update after it fails to terminate the old node whether or not any `Pod` is running on the node.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-forceupdateenabled
     */
    readonly forceUpdateEnabled?: boolean | cdk.IResolvable;
    /**
     * Specify the instance types for a node group.
     *
     * If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the `amiType` parameter. If you specify `launchTemplate` , then you can specify zero or one instance type in your launch template *or* you can specify 0-20 instance types for `instanceTypes` . If however, you specify an instance type in your launch template *and* specify any `instanceTypes` , the node group deployment will fail. If you don't specify an instance type in a launch template or for `instanceTypes` , then `t3.medium` is used, by default. If you specify `Spot` for `capacityType` , then we recommend specifying multiple values for `instanceTypes` . For more information, see [Managed node group capacity types](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types) and [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-instancetypes
     */
    readonly instanceTypes?: Array<string>;
    /**
     * The Kubernetes `labels` applied to the nodes in the node group.
     *
     * > Only `labels` that are applied with the Amazon EKS API are shown here. There may be other Kubernetes `labels` applied to the nodes in this group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-labels
     */
    readonly labels?: cdk.IResolvable | Record<string, string>;
    /**
     * An object representing a node group's launch template specification.
     *
     * When using this object, don't directly specify `instanceTypes` , `diskSize` , or `remoteAccess` . You cannot later specify a different launch template ID or name than what was used to create the node group.
     *
     * Make sure that the launch template meets the requirements in `launchTemplateSpecification` . Also refer to [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-launchtemplate
     */
    readonly launchTemplate?: cdk.IResolvable | CfnNodegroup.LaunchTemplateSpecificationProperty;
    /**
     * The unique name to give your node group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-nodegroupname
     */
    readonly nodegroupName?: string;
    /**
     * The node auto repair configuration for the node group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-noderepairconfig
     */
    readonly nodeRepairConfig?: cdk.IResolvable | CfnNodegroup.NodeRepairConfigProperty;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
     *
     * The Amazon EKS worker node `kubelet` daemon makes calls to AWS APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the **Amazon EKS User Guide** . If you specify `launchTemplate` , then don't specify `[IamInstanceProfile](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html)` in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-noderole
     */
    readonly nodeRole: string;
    /**
     * The AMI version of the Amazon EKS optimized AMI to use with your node group (for example, `1.14.7- *YYYYMMDD*` ). By default, the latest available AMI version for the node group's current Kubernetes version is used. For more information, see [Amazon EKS optimized Linux AMI Versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the *Amazon EKS User Guide* .
     *
     * > Changing this value triggers an update of the node group if one is available. You can't update other properties at the same time as updating `Release Version` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-releaseversion
     */
    readonly releaseVersion?: string;
    /**
     * The remote access configuration to use with your node group.
     *
     * For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify `launchTemplate` , then don't specify `remoteAccess` , or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-remoteaccess
     */
    readonly remoteAccess?: cdk.IResolvable | CfnNodegroup.RemoteAccessProperty;
    /**
     * The scaling configuration details for the Auto Scaling group that is created for your node group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-scalingconfig
     */
    readonly scalingConfig?: cdk.IResolvable | CfnNodegroup.ScalingConfigProperty;
    /**
     * The subnets to use for the Auto Scaling group that is created for your node group.
     *
     * If you specify `launchTemplate` , then don't specify `[SubnetId](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html)` in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-subnets
     */
    readonly subnets: Array<string>;
    /**
     * Metadata that assists with categorization and organization.
     *
     * Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The Kubernetes taints to be applied to the nodes in the node group when they are created.
     *
     * Effect is one of `No_Schedule` , `Prefer_No_Schedule` , or `No_Execute` . Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-taints
     */
    readonly taints?: Array<cdk.IResolvable | CfnNodegroup.TaintProperty> | cdk.IResolvable;
    /**
     * The node group update configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-updateconfig
     */
    readonly updateConfig?: cdk.IResolvable | CfnNodegroup.UpdateConfigProperty;
    /**
     * The Kubernetes version to use for your managed nodes.
     *
     * By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify `launchTemplate` , and your launch template uses a custom AMI, then don't specify `version` , or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Launch template support](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide* .
     *
     * > You can't update other properties at the same time as updating `Version` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-nodegroup.html#cfn-eks-nodegroup-version
     */
    readonly version?: string;
}
/**
 * Creates an access entry.
 *
 * An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the `aws-auth` `ConfigMap` for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes `Role` , `ClusterRole` , `RoleBinding` , and `ClusterRoleBinding` objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes `Role` , `ClusterRole` , `RoleBinding` , and `ClusterRoleBinding` objects.
 *
 * For more information about access entries, see [Access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html) in the *Amazon EKS User Guide* .
 *
 * @cloudformationResource AWS::EKS::AccessEntry
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html
 */
export declare class CfnAccessEntry extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessEntry from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessEntry;
    /**
     * The ARN of the access entry.
     *
     * @cloudformationAttribute AccessEntryArn
     */
    readonly attrAccessEntryArn: string;
    /**
     * The access policies to associate to the access entry.
     */
    accessPolicies?: Array<CfnAccessEntry.AccessPolicyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of your cluster.
     */
    clusterName: string;
    /**
     * The value for `name` that you've specified for `kind: Group` as a `subject` in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object.
     */
    kubernetesGroups?: Array<string>;
    /**
     * The ARN of the IAM principal for the `AccessEntry` .
     */
    principalArn: string;
    /**
     * Metadata that assists with categorization and organization.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The type of the new access entry.
     */
    type?: string;
    /**
     * The username to authenticate to Kubernetes with.
     */
    username?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessEntryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccessEntry {
    /**
     * An access policy includes permissions that allow Amazon EKS to authorize an IAM principal to work with Kubernetes objects on your cluster.
     *
     * The policies are managed by Amazon EKS, but they're not IAM policies. You can't view the permissions in the policies using the API. The permissions for many of the policies are similar to the Kubernetes `cluster-admin` , `admin` , `edit` , and `view` cluster roles. For more information about these cluster roles, see [User-facing roles](https://docs.aws.amazon.com/https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) in the Kubernetes documentation. To view the contents of the policies, see [Access policy permissions](https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions) in the *Amazon EKS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accesspolicy.html
     */
    interface AccessPolicyProperty {
        /**
         * The scope of an `AccessPolicy` that's associated to an `AccessEntry` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accesspolicy.html#cfn-eks-accessentry-accesspolicy-accessscope
         */
        readonly accessScope: CfnAccessEntry.AccessScopeProperty | cdk.IResolvable;
        /**
         * The ARN of the access policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accesspolicy.html#cfn-eks-accessentry-accesspolicy-policyarn
         */
        readonly policyArn: string;
    }
    /**
     * The scope of an `AccessPolicy` that's associated to an `AccessEntry` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accessscope.html
     */
    interface AccessScopeProperty {
        /**
         * A Kubernetes `namespace` that an access policy is scoped to.
         *
         * A value is required if you specified `namespace` for `Type` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accessscope.html#cfn-eks-accessentry-accessscope-namespaces
         */
        readonly namespaces?: Array<string>;
        /**
         * The scope type of an access policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-accessentry-accessscope.html#cfn-eks-accessentry-accessscope-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnAccessEntry`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html
 */
export interface CfnAccessEntryProps {
    /**
     * The access policies to associate to the access entry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accesspolicies
     */
    readonly accessPolicies?: Array<CfnAccessEntry.AccessPolicyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of your cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-clustername
     */
    readonly clusterName: string;
    /**
     * The value for `name` that you've specified for `kind: Group` as a `subject` in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object.
     *
     * Amazon EKS doesn't confirm that the value for `name` exists in any bindings on your cluster. You can specify one or more names.
     *
     * Kubernetes authorizes the `principalArn` of the access entry to access any cluster objects that you've specified in a Kubernetes `Role` or `ClusterRole` object that is also specified in a binding's `roleRef` . For more information about creating Kubernetes `RoleBinding` , `ClusterRoleBinding` , `Role` , or `ClusterRole` objects, see [Using RBAC Authorization in the Kubernetes documentation](https://docs.aws.amazon.com/https://kubernetes.io/docs/reference/access-authn-authz/rbac/) .
     *
     * If you want Amazon EKS to authorize the `principalArn` (instead of, or in addition to Kubernetes authorizing the `principalArn` ), you can associate one or more access policies to the access entry using `AssociateAccessPolicy` . If you associate any access policies, the `principalARN` has all permissions assigned in the associated access policies and all permissions in any Kubernetes `Role` or `ClusterRole` objects that the group names are bound to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-kubernetesgroups
     */
    readonly kubernetesGroups?: Array<string>;
    /**
     * The ARN of the IAM principal for the `AccessEntry` .
     *
     * You can specify one ARN for each access entry. You can't specify the same ARN in more than one access entry. This value can't be changed after access entry creation.
     *
     * The valid principals differ depending on the type of the access entry in the `type` field. For `STANDARD` access entries, you can use every IAM principal type. For nodes ( `EC2` (for EKS Auto Mode), `EC2_LINUX` , `EC2_WINDOWS` , `FARGATE_LINUX` , and `HYBRID_LINUX` ), the only valid ARN is IAM roles. You can't use the STS session principal type with access entries because this is a temporary principal for each session and not a permanent identity that can be assigned permissions.
     *
     * [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#bp-users-federation-idp) recommend using IAM roles with temporary credentials, rather than IAM users with long-term credentials.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-principalarn
     */
    readonly principalArn: string;
    /**
     * Metadata that assists with categorization and organization.
     *
     * Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the new access entry.
     *
     * Valid values are `STANDARD` , `FARGATE_LINUX` , `EC2_LINUX` , `EC2_WINDOWS` , `EC2` (for EKS Auto Mode), `HYBRID_LINUX` , and `HYPERPOD_LINUX` .
     *
     * If the `principalArn` is for an IAM role that's used for self-managed Amazon EC2 nodes, specify `EC2_LINUX` or `EC2_WINDOWS` . Amazon EKS grants the necessary permissions to the node for you. If the `principalArn` is for any other purpose, specify `STANDARD` . If you don't specify a value, Amazon EKS sets the value to `STANDARD` . If you have the access mode of the cluster set to `API_AND_CONFIG_MAP` , it's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the `aws-auth` `ConfigMap` for the roles. You can't change this value once you've created the access entry.
     *
     * If you set the value to `EC2_LINUX` or `EC2_WINDOWS` , you can't specify values for `kubernetesGroups` , or associate an `AccessPolicy` to the access entry.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-type
     */
    readonly type?: string;
    /**
     * The username to authenticate to Kubernetes with.
     *
     * We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see [Creating access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries) in the *Amazon EKS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-username
     */
    readonly username?: string;
}
/**
 * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
 *
 * @cloudformationResource AWS::EKS::PodIdentityAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html
 */
export declare class CfnPodIdentityAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPodIdentityAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPodIdentityAssociation;
    /**
     * The Amazon Resource Name (ARN) of the association.
     *
     * @cloudformationAttribute AssociationArn
     */
    readonly attrAssociationArn: string;
    /**
     * The ID of the association.
     *
     * @cloudformationAttribute AssociationId
     */
    readonly attrAssociationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the cluster that the association is in.
     */
    clusterName: string;
    /**
     * The name of the Kubernetes namespace inside the cluster to create the association in.
     */
    namespace: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the service account.
     */
    roleArn: string;
    /**
     * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
     */
    serviceAccount: string;
    /**
     * Metadata that assists with categorization and organization.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPodIdentityAssociationProps);
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
 * Properties for defining a `CfnPodIdentityAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html
 */
export interface CfnPodIdentityAssociationProps {
    /**
     * The name of the cluster that the association is in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-clustername
     */
    readonly clusterName: string;
    /**
     * The name of the Kubernetes namespace inside the cluster to create the association in.
     *
     * The service account and the pods that use the service account must be in this namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-namespace
     */
    readonly namespace: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the service account.
     *
     * The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-rolearn
     */
    readonly roleArn: string;
    /**
     * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-serviceaccount
     */
    readonly serviceAccount: string;
    /**
     * Metadata that assists with categorization and organization.
     *
     * Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource – 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length – 128 Unicode characters in UTF-8
     * - Maximum value length – 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
