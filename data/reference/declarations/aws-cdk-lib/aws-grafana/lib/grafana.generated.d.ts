import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a *workspace* .
 *
 * In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.
 *
 * @cloudformationResource AWS::Grafana::Workspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html
 */
export declare class CfnWorkspace extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkspace;
    /**
     * The date that the workspace was created.
     *
     * Type: Timestamp
     *
     * @cloudformationAttribute CreationTimestamp
     */
    readonly attrCreationTimestamp: string;
    /**
     * The URL that users can use to access the Grafana console in the workspace.
     *
     * Type: String
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * Specifies the version of Grafana supported by this workspace.
     *
     * Type: String
     *
     * @cloudformationAttribute GrafanaVersion
     */
    readonly attrGrafanaVersion: string;
    /**
     * The unique ID of this workspace.
     *
     * Type: String
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The most recent date that the workspace was modified.
     *
     * Type: Timestamp
     *
     * @cloudformationAttribute ModificationTimestamp
     */
    readonly attrModificationTimestamp: string;
    /**
     * Specifies whether the workspace's SAML configuration is complete.
     *
     * Valid values: `CONFIGURED | NOT_CONFIGURED`
     *
     * Type: String
     *
     * @cloudformationAttribute SamlConfigurationStatus
     */
    readonly attrSamlConfigurationStatus: string;
    /**
     * The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana .
     *
     * Type: String
     *
     * @cloudformationAttribute SsoClientId
     */
    readonly attrSsoClientId: string;
    /**
     * The current status of the workspace.
     *
     * Valid values: `ACTIVE | CREATING | DELETING | FAILED | UPDATING | UPGRADING | DELETION_FAILED | CREATION_FAILED | UPDATE_FAILED | UPGRADE_FAILED | LICENSE_REMOVAL_FAILED`
     *
     * Type: String
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.
     */
    accountAccessType: string;
    /**
     * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center , or both to authenticate users for using the Grafana console within a workspace. For more information, see [User authentication in Amazon Managed Grafana](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html) .
     */
    authenticationProviders: Array<string>;
    /**
     * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     */
    clientToken?: string;
    /**
     * Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.
     */
    dataSources?: Array<string>;
    /**
     * The user-defined description of the workspace.
     */
    description?: string;
    /**
     * Specifies the version of Grafana to support in the workspace.
     */
    grafanaVersion?: string;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The configuration settings for network access to your workspace.
     */
    networkAccessControl?: cdk.IResolvable | CfnWorkspace.NetworkAccessControlProperty;
    /**
     * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.
     */
    notificationDestinations?: Array<string>;
    /**
     * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
     */
    organizationalUnits?: Array<string>;
    /**
     * The name of the IAM role that is used to access resources through Organizations.
     */
    organizationRoleName?: string;
    /**
     * If this is `SERVICE_MANAGED` , and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.
     */
    permissionType: string;
    /**
     * Whether plugin administration is enabled in the workspace.
     */
    pluginAdminEnabled?: boolean | cdk.IResolvable;
    /**
     * The IAM role that grants permissions to the AWS resources that the workspace will view data from.
     */
    roleArn?: string;
    /**
     * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the `Admin` and `Editor` roles in the workspace.
     */
    samlConfiguration?: cdk.IResolvable | CfnWorkspace.SamlConfigurationProperty;
    /**
     * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.
     */
    stackSetName?: string;
    /**
     * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
     */
    vpcConfiguration?: cdk.IResolvable | CfnWorkspace.VpcConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkspaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkspace {
    /**
     * A structure containing information about how this workspace works with SAML.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html
     */
    interface SamlConfigurationProperty {
        /**
         * Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace.
         *
         * If this is empty, all organizations in the assertion attribute have access.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html#cfn-grafana-workspace-samlconfiguration-allowedorganizations
         */
        readonly allowedOrganizations?: Array<string>;
        /**
         * A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html#cfn-grafana-workspace-samlconfiguration-assertionattributes
         */
        readonly assertionAttributes?: CfnWorkspace.AssertionAttributesProperty | cdk.IResolvable;
        /**
         * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html#cfn-grafana-workspace-samlconfiguration-idpmetadata
         */
        readonly idpMetadata: CfnWorkspace.IdpMetadataProperty | cdk.IResolvable;
        /**
         * How long a sign-on session by a SAML user is valid, before the user has to sign on again.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html#cfn-grafana-workspace-samlconfiguration-loginvalidityduration
         */
        readonly loginValidityDuration?: number;
        /**
         * A structure containing arrays that map group names in the SAML assertion to the Grafana `Admin` and `Editor` roles in the workspace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html#cfn-grafana-workspace-samlconfiguration-rolevalues
         */
        readonly roleValues?: cdk.IResolvable | CfnWorkspace.RoleValuesProperty;
    }
    /**
     * This structure defines which groups defined in the SAML assertion attribute are to be mapped to the Grafana `Admin` and `Editor` roles in the workspace.
     *
     * SAML authenticated users not part of `Admin` or `Editor` role groups have `Viewer` permission over the workspace.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html
     */
    interface RoleValuesProperty {
        /**
         * A list of groups from the SAML assertion attribute to grant the Grafana `Admin` role to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html#cfn-grafana-workspace-rolevalues-admin
         */
        readonly admin?: Array<string>;
        /**
         * A list of groups from the SAML assertion attribute to grant the Grafana `Editor` role to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html#cfn-grafana-workspace-rolevalues-editor
         */
        readonly editor?: Array<string>;
    }
    /**
     * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.
     *
     * You can specify the metadata either by providing a URL to its location in the `url` parameter, or by specifying the full metadata in XML format in the `xml` parameter. Specifying both will cause an error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html
     */
    interface IdpMetadataProperty {
        /**
         * The URL of the location containing the IdP metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html#cfn-grafana-workspace-idpmetadata-url
         */
        readonly url?: string;
        /**
         * The full IdP metadata, in XML format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html#cfn-grafana-workspace-idpmetadata-xml
         */
        readonly xml?: string;
    }
    /**
     * A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html
     */
    interface AssertionAttributesProperty {
        /**
         * The name of the attribute within the SAML assertion to use as the email names for SAML users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-email
         */
        readonly email?: string;
        /**
         * The name of the attribute within the SAML assertion to use as the user full "friendly" names for user groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-groups
         */
        readonly groups?: string;
        /**
         * The name of the attribute within the SAML assertion to use as the login names for SAML users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-login
         */
        readonly login?: string;
        /**
         * The name of the attribute within the SAML assertion to use as the user full "friendly" names for SAML users.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-name
         */
        readonly name?: string;
        /**
         * The name of the attribute within the SAML assertion to use as the user full "friendly" names for the users' organizations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-org
         */
        readonly org?: string;
        /**
         * The name of the attribute within the SAML assertion to use as the user roles.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html#cfn-grafana-workspace-assertionattributes-role
         */
        readonly role?: string;
    }
    /**
     * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
     *
     * > Provided `securityGroupIds` and `subnetIds` must be part of the same VPC.
     * >
     * > Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
         *
         * Duplicates not allowed.
         *
         * *Array Members* : Minimum number of 1 items. Maximum number of 5 items.
         *
         * *Length* : Minimum length of 0. Maximum length of 255.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html#cfn-grafana-workspace-vpcconfiguration-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.
         *
         * Duplicates not allowed.
         *
         * *Array Members* : Minimum number of 2 items. Maximum number of 6 items.
         *
         * *Length* : Minimum length of 0. Maximum length of 255.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html#cfn-grafana-workspace-vpcconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * The configuration settings for in-bound network access to your workspace.
     *
     * When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.
     *
     * Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.
     *
     * If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.
     *
     * > While both `prefixListIds` and `vpceIds` are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.
     * >
     * > If both are passed as empty arrays, no traffic is allowed to the workspace, because only *explicitly* allowed connections are accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html
     */
    interface NetworkAccessControlProperty {
        /**
         * An array of prefix list IDs.
         *
         * A prefix list is a list of CIDR ranges of IP addresses. The IP addresses specified are allowed to access your workspace. If the list is not included in the configuration (passed an empty array) then no IP addresses are allowed to access the workspace. You create a prefix list using the Amazon VPC console.
         *
         * Prefix list IDs have the format `pl- *1a2b3c4d*` .
         *
         * For more information about prefix lists, see [Group CIDR blocks using managed prefix lists](https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html) in the *Amazon Virtual Private Cloud User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html#cfn-grafana-workspace-networkaccesscontrol-prefixlistids
         */
        readonly prefixListIds?: Array<string>;
        /**
         * An array of Amazon VPC endpoint IDs for the workspace.
         *
         * You can create VPC endpoints to your Amazon Managed Grafana workspace for access from within a VPC. If a `NetworkAccessConfiguration` is specified then only VPC endpoints specified here are allowed to access the workspace. If you pass in an empty array of strings, then no VPCs are allowed to access the workspace.
         *
         * VPC endpoint IDs have the format `vpce- *1a2b3c4d*` .
         *
         * For more information about creating an interface VPC endpoint, see [Interface VPC endpoints](https://docs.aws.amazon.com/grafana/latest/userguide/VPC-endpoints) in the *Amazon Managed Grafana User Guide* .
         *
         * > The only VPC endpoints that can be specified here are interface VPC endpoints for Grafana workspaces (using the `com.amazonaws.[region].grafana-workspace` service endpoint). Other VPC endpoints are ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html#cfn-grafana-workspace-networkaccesscontrol-vpceids
         */
        readonly vpceIds?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnWorkspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html
 */
export interface CfnWorkspaceProps {
    /**
     * Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.
     *
     * If this is `ORGANIZATION` , the `OrganizationalUnits` parameter specifies which organizational units the workspace can access.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-accountaccesstype
     */
    readonly accountAccessType: string;
    /**
     * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center , or both to authenticate users for using the Grafana console within a workspace. For more information, see [User authentication in Amazon Managed Grafana](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html) .
     *
     * *Allowed Values* : `AWS_SSO | SAML`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-authenticationproviders
     */
    readonly authenticationProviders: Array<string>;
    /**
     * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-clienttoken
     */
    readonly clientToken?: string;
    /**
     * Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.
     *
     * This list is only used when the workspace was created through the AWS console, and the `permissionType` is `SERVICE_MANAGED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-datasources
     */
    readonly dataSources?: Array<string>;
    /**
     * The user-defined description of the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-description
     */
    readonly description?: string;
    /**
     * Specifies the version of Grafana to support in the workspace.
     *
     * Defaults to the latest version on create (for example, 9.4), or the current version of the workspace on update.
     *
     * Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from 9.4 to 8.4).
     *
     * To know what versions are available to upgrade to for a specific workspace, see the [ListVersions](https://docs.aws.amazon.com/grafana/latest/APIReference/API_ListVersions.html) operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-grafanaversion
     */
    readonly grafanaVersion?: string;
    /**
     * The name of the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-name
     */
    readonly name?: string;
    /**
     * The configuration settings for network access to your workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-networkaccesscontrol
     */
    readonly networkAccessControl?: cdk.IResolvable | CfnWorkspace.NetworkAccessControlProperty;
    /**
     * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.
     *
     * *AllowedValues* : `SNS`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-notificationdestinations
     */
    readonly notificationDestinations?: Array<string>;
    /**
     * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-organizationalunits
     */
    readonly organizationalUnits?: Array<string>;
    /**
     * The name of the IAM role that is used to access resources through Organizations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-organizationrolename
     */
    readonly organizationRoleName?: string;
    /**
     * If this is `SERVICE_MANAGED` , and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.
     *
     * If this is `CUSTOMER_MANAGED` , you must manage those roles and permissions yourself.
     *
     * If you are working with a workspace in a member account of an organization and that account is not a delegated administrator account, and you want the workspace to access data sources in other AWS accounts in the organization, this parameter must be set to `CUSTOMER_MANAGED` .
     *
     * For more information about converting between customer and service managed, see [Managing permissions for data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html) . For more information about the roles and permissions that must be managed for customer managed workspaces, see [Amazon Managed Grafana permissions and policies for AWS data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-permissiontype
     */
    readonly permissionType: string;
    /**
     * Whether plugin administration is enabled in the workspace.
     *
     * Setting to `true` allows workspace admins to install, uninstall, and update plugins from within the Grafana workspace.
     *
     * > This option is only valid for workspaces that support Grafana version 9 or newer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-pluginadminenabled
     */
    readonly pluginAdminEnabled?: boolean | cdk.IResolvable;
    /**
     * The IAM role that grants permissions to the AWS resources that the workspace will view data from.
     *
     * This role must already exist.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-rolearn
     */
    readonly roleArn?: string;
    /**
     * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the `Admin` and `Editor` roles in the workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-samlconfiguration
     */
    readonly samlConfiguration?: cdk.IResolvable | CfnWorkspace.SamlConfigurationProperty;
    /**
     * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-stacksetname
     */
    readonly stackSetName?: string;
    /**
     * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
     *
     * > Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html#cfn-grafana-workspace-vpcconfiguration
     */
    readonly vpcConfiguration?: cdk.IResolvable | CfnWorkspace.VpcConfigurationProperty;
}
