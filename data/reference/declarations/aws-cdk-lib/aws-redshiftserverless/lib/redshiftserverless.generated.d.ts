import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A collection of database objects and users.
 *
 * @cloudformationResource AWS::RedshiftServerless::Namespace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html
 */
export declare class CfnNamespace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNamespace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNamespace;
    /**
     * @cloudformationAttribute Namespace
     */
    readonly attrNamespace: cdk.IResolvable;
    /**
     * The username of the administrator for the first database created in the namespace.
     *
     * @cloudformationAttribute Namespace.AdminUsername
     */
    readonly attrNamespaceAdminUsername: string;
    /**
     * The date of when the namespace was created.
     *
     * @cloudformationAttribute Namespace.CreationDate
     */
    readonly attrNamespaceCreationDate: string;
    /**
     * The name of the first database created in the namespace.
     *
     * @cloudformationAttribute Namespace.DbName
     */
    readonly attrNamespaceDbName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
     *
     * @cloudformationAttribute Namespace.DefaultIamRoleArn
     */
    readonly attrNamespaceDefaultIamRoleArn: string;
    /**
     * A list of IAM roles to associate with the namespace.
     *
     * @cloudformationAttribute Namespace.IamRoles
     */
    readonly attrNamespaceIamRoles: Array<string>;
    /**
     * The ID of the AWS Key Management Service key used to encrypt your data.
     *
     * @cloudformationAttribute Namespace.KmsKeyId
     */
    readonly attrNamespaceKmsKeyId: string;
    /**
     * The types of logs the namespace can export. Available export types are `User log` , `Connection log` , and `User activity log` .
     *
     * @cloudformationAttribute Namespace.LogExports
     */
    readonly attrNamespaceLogExports: Array<string>;
    /**
     * The Amazon Resource Name (ARN) associated with a namespace.
     *
     * @cloudformationAttribute Namespace.NamespaceArn
     */
    readonly attrNamespaceNamespaceArn: string;
    /**
     * The unique identifier of a namespace.
     *
     * @cloudformationAttribute Namespace.NamespaceId
     */
    readonly attrNamespaceNamespaceId: string;
    /**
     * The name of the namespace. Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com//redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
     *
     * @cloudformationAttribute Namespace.NamespaceName
     */
    readonly attrNamespaceNamespaceName: string;
    /**
     * The status of the namespace.
     *
     * @cloudformationAttribute Namespace.Status
     */
    readonly attrNamespaceStatus: string;
    /**
     * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
     */
    adminPasswordSecretKmsKeyId?: string;
    /**
     * The username of the administrator for the primary database created in the namespace.
     */
    adminUsername?: string;
    /**
     * The password of the administrator for the primary database created in the namespace.
     */
    adminUserPassword?: string;
    /**
     * The name of the primary database created in the namespace.
     */
    dbName?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
     */
    defaultIamRoleArn?: string;
    /**
     * The name of the snapshot to be created before the namespace is deleted.
     */
    finalSnapshotName?: string;
    /**
     * How long to retain the final snapshot.
     */
    finalSnapshotRetentionPeriod?: number;
    /**
     * A list of IAM roles to associate with the namespace.
     */
    iamRoles?: Array<string>;
    /**
     * The ID of the AWS Key Management Service key used to encrypt your data.
     */
    kmsKeyId?: string;
    /**
     * The types of logs the namespace can export.
     */
    logExports?: Array<string>;
    /**
     * If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.
     */
    manageAdminPassword?: boolean | cdk.IResolvable;
    /**
     * The name of the namespace.
     */
    namespaceName: string;
    /**
     * The resource policy that will be attached to the namespace.
     */
    namespaceResourcePolicy?: any | cdk.IResolvable;
    /**
     * The ARN for the Redshift application that integrates with IAM Identity Center.
     */
    redshiftIdcApplicationArn?: string;
    /**
     * The snapshot copy configurations for the namespace.
     */
    snapshotCopyConfigurations?: Array<cdk.IResolvable | CfnNamespace.SnapshotCopyConfigurationProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The map of the key-value pairs used to tag the namespace.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNamespaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNamespace {
    /**
     * The object that you configure to copy snapshots from one namespace to a namespace in another AWS Region .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-snapshotcopyconfiguration.html
     */
    interface SnapshotCopyConfigurationProperty {
        /**
         * The ID of the KMS key to use to encrypt your snapshots in the destination AWS Region .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-snapshotcopyconfiguration.html#cfn-redshiftserverless-namespace-snapshotcopyconfiguration-destinationkmskeyid
         */
        readonly destinationKmsKeyId?: string;
        /**
         * The destination AWS Region to copy snapshots to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-snapshotcopyconfiguration.html#cfn-redshiftserverless-namespace-snapshotcopyconfiguration-destinationregion
         */
        readonly destinationRegion: string;
        /**
         * The retention period of snapshots that are copied to the destination AWS Region .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-snapshotcopyconfiguration.html#cfn-redshiftserverless-namespace-snapshotcopyconfiguration-snapshotretentionperiod
         */
        readonly snapshotRetentionPeriod?: number;
    }
    /**
     * A collection of database objects and users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html
     */
    interface NamespaceProperty {
        /**
         * The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-adminpasswordsecretarn
         */
        readonly adminPasswordSecretArn?: string;
        /**
         * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-adminpasswordsecretkmskeyid
         */
        readonly adminPasswordSecretKmsKeyId?: string;
        /**
         * The username of the administrator for the first database created in the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-adminusername
         */
        readonly adminUsername?: string;
        /**
         * The date of when the namespace was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-creationdate
         */
        readonly creationDate?: string;
        /**
         * The name of the first database created in the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-dbname
         */
        readonly dbName?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-defaultiamrolearn
         */
        readonly defaultIamRoleArn?: string;
        /**
         * A list of IAM roles to associate with the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-iamroles
         */
        readonly iamRoles?: Array<string>;
        /**
         * The ID of the AWS Key Management Service key used to encrypt your data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The types of logs the namespace can export.
         *
         * Available export types are User log, Connection log, and User activity log.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-logexports
         */
        readonly logExports?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) associated with a namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-namespacearn
         */
        readonly namespaceArn?: string;
        /**
         * The unique identifier of a namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-namespaceid
         */
        readonly namespaceId?: string;
        /**
         * The name of the namespace.
         *
         * Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com//redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-namespacename
         */
        readonly namespaceName?: string;
        /**
         * The status of the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-namespace-namespace.html#cfn-redshiftserverless-namespace-namespace-status
         */
        readonly status?: string;
    }
}
/**
 * Properties for defining a `CfnNamespace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html
 */
export interface CfnNamespaceProps {
    /**
     * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
     *
     * You can only use this parameter if `ManageAdminPassword` is `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-adminpasswordsecretkmskeyid
     */
    readonly adminPasswordSecretKmsKeyId?: string;
    /**
     * The username of the administrator for the primary database created in the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-adminusername
     */
    readonly adminUsername?: string;
    /**
     * The password of the administrator for the primary database created in the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-adminuserpassword
     */
    readonly adminUserPassword?: string;
    /**
     * The name of the primary database created in the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-dbname
     */
    readonly dbName?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-defaultiamrolearn
     */
    readonly defaultIamRoleArn?: string;
    /**
     * The name of the snapshot to be created before the namespace is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-finalsnapshotname
     */
    readonly finalSnapshotName?: string;
    /**
     * How long to retain the final snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-finalsnapshotretentionperiod
     */
    readonly finalSnapshotRetentionPeriod?: number;
    /**
     * A list of IAM roles to associate with the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-iamroles
     */
    readonly iamRoles?: Array<string>;
    /**
     * The ID of the AWS Key Management Service key used to encrypt your data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The types of logs the namespace can export.
     *
     * Available export types are `userlog` , `connectionlog` , and `useractivitylog` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-logexports
     */
    readonly logExports?: Array<string>;
    /**
     * If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials.
     *
     * You can't use `AdminUserPassword` if `ManageAdminPassword` is true. If `ManageAdminPassword` is `false` or not set, Amazon Redshift uses `AdminUserPassword` for the admin user account's password.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-manageadminpassword
     */
    readonly manageAdminPassword?: boolean | cdk.IResolvable;
    /**
     * The name of the namespace.
     *
     * Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com//redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-namespacename
     */
    readonly namespaceName: string;
    /**
     * The resource policy that will be attached to the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-namespaceresourcepolicy
     */
    readonly namespaceResourcePolicy?: any | cdk.IResolvable;
    /**
     * The ARN for the Redshift application that integrates with IAM Identity Center.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-redshiftidcapplicationarn
     */
    readonly redshiftIdcApplicationArn?: string;
    /**
     * The snapshot copy configurations for the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-snapshotcopyconfigurations
     */
    readonly snapshotCopyConfigurations?: Array<cdk.IResolvable | CfnNamespace.SnapshotCopyConfigurationProperty> | cdk.IResolvable;
    /**
     * The map of the key-value pairs used to tag the namespace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-namespace.html#cfn-redshiftserverless-namespace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The collection of compute resources in Amazon Redshift Serverless.
 *
 * @cloudformationResource AWS::RedshiftServerless::Workgroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html
 */
export declare class CfnWorkgroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWorkgroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWorkgroup;
    /**
     * @cloudformationAttribute Workgroup
     */
    readonly attrWorkgroup: cdk.IResolvable;
    /**
     * The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
     *
     * @cloudformationAttribute Workgroup.BaseCapacity
     */
    readonly attrWorkgroupBaseCapacity: number;
    /**
     * @cloudformationAttribute Workgroup.ConfigParameters
     */
    readonly attrWorkgroupConfigParameters: cdk.IResolvable;
    /**
     * The creation date of the workgroup.
     *
     * @cloudformationAttribute Workgroup.CreationDate
     */
    readonly attrWorkgroupCreationDate: string;
    /**
     * @cloudformationAttribute Workgroup.Endpoint
     */
    readonly attrWorkgroupEndpoint: cdk.IResolvable;
    /**
     * The DNS address of the VPC endpoint.
     *
     * @cloudformationAttribute Workgroup.Endpoint.Address
     */
    readonly attrWorkgroupEndpointAddress: string;
    /**
     * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
     *
     * @cloudformationAttribute Workgroup.Endpoint.Port
     */
    readonly attrWorkgroupEndpointPort: number;
    /**
     * @cloudformationAttribute Workgroup.Endpoint.VpcEndpoints
     */
    readonly attrWorkgroupEndpointVpcEndpoints: cdk.IResolvable;
    /**
     * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
     *
     * @cloudformationAttribute Workgroup.EnhancedVpcRouting
     */
    readonly attrWorkgroupEnhancedVpcRouting: cdk.IResolvable;
    /**
     * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.
     *
     * @cloudformationAttribute Workgroup.MaxCapacity
     */
    readonly attrWorkgroupMaxCapacity: number;
    /**
     * The namespace the workgroup is associated with.
     *
     * @cloudformationAttribute Workgroup.NamespaceName
     */
    readonly attrWorkgroupNamespaceName: string;
    /**
     * A value that specifies whether the workgroup can be accessible from a public network.
     *
     * @cloudformationAttribute Workgroup.PubliclyAccessible
     */
    readonly attrWorkgroupPubliclyAccessible: cdk.IResolvable;
    /**
     * An array of security group IDs to associate with the workgroup.
     *
     * @cloudformationAttribute Workgroup.SecurityGroupIds
     */
    readonly attrWorkgroupSecurityGroupIds: Array<string>;
    /**
     * The status of the workgroup.
     *
     * @cloudformationAttribute Workgroup.Status
     */
    readonly attrWorkgroupStatus: string;
    /**
     * An array of subnet IDs the workgroup is associated with.
     *
     * @cloudformationAttribute Workgroup.SubnetIds
     */
    readonly attrWorkgroupSubnetIds: Array<string>;
    /**
     * The Amazon Resource Name (ARN) that links to the workgroup.
     *
     * @cloudformationAttribute Workgroup.WorkgroupArn
     */
    readonly attrWorkgroupWorkgroupArn: string;
    /**
     * The unique identifier of the workgroup.
     *
     * @cloudformationAttribute Workgroup.WorkgroupId
     */
    readonly attrWorkgroupWorkgroupId: string;
    /**
     * The name of the workgroup.
     *
     * @cloudformationAttribute Workgroup.WorkgroupName
     */
    readonly attrWorkgroupWorkgroupName: string;
    /**
     * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
     */
    baseCapacity?: number;
    /**
     * A list of parameters to set for finer control over a database.
     */
    configParameters?: Array<CfnWorkgroup.ConfigParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
     */
    enhancedVpcRouting?: boolean | cdk.IResolvable;
    /**
     * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries.
     */
    maxCapacity?: number;
    /**
     * The namespace the workgroup is associated with.
     */
    namespaceName?: string;
    /**
     * The custom port to use when connecting to a workgroup.
     */
    port?: number;
    /**
     * An object that represents the price performance target settings for the workgroup.
     */
    pricePerformanceTarget?: cdk.IResolvable | CfnWorkgroup.PerformanceTargetProperty;
    /**
     * A value that specifies whether the workgroup can be accessible from a public network.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * A list of security group IDs to associate with the workgroup.
     */
    securityGroupIds?: Array<string>;
    /**
     * A list of subnet IDs the workgroup is associated with.
     */
    subnetIds?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The map of the key-value pairs used to tag the workgroup.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the workgroup.
     */
    workgroupName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWorkgroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWorkgroup {
    /**
     * A array of parameters to set for more control over a serverless database.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html
     */
    interface ConfigParameterProperty {
        /**
         * The key of the parameter.
         *
         * The options are `datestyle` , `enable_user_activity_logging` , `query_group` , `search_path` , `max_query_execution_time` , and `require_ssl` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html#cfn-redshiftserverless-workgroup-configparameter-parameterkey
         */
        readonly parameterKey?: string;
        /**
         * The value of the parameter to set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-configparameter.html#cfn-redshiftserverless-workgroup-configparameter-parametervalue
         */
        readonly parameterValue?: string;
    }
    /**
     * An object that represents the price performance target settings for the workgroup.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-performancetarget.html
     */
    interface PerformanceTargetProperty {
        /**
         * The target price performance level for the workgroup.
         *
         * Valid values include 1, 25, 50, 75, and 100. These correspond to the price performance levels LOW_COST, ECONOMICAL, BALANCED, RESOURCEFUL, and HIGH_PERFORMANCE.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-performancetarget.html#cfn-redshiftserverless-workgroup-performancetarget-level
         */
        readonly level?: number;
        /**
         * Whether the price performance target is enabled for the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-performancetarget.html#cfn-redshiftserverless-workgroup-performancetarget-status
         */
        readonly status?: string;
    }
    /**
     * The VPC endpoint object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html
     */
    interface EndpointProperty {
        /**
         * The DNS address of the VPC endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html#cfn-redshiftserverless-workgroup-endpoint-address
         */
        readonly address?: string;
        /**
         * The port that Amazon Redshift Serverless listens on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html#cfn-redshiftserverless-workgroup-endpoint-port
         */
        readonly port?: number;
        /**
         * An array of `VpcEndpoint` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-endpoint.html#cfn-redshiftserverless-workgroup-endpoint-vpcendpoints
         */
        readonly vpcEndpoints?: Array<cdk.IResolvable | CfnWorkgroup.VpcEndpointProperty> | cdk.IResolvable;
    }
    /**
     * The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html
     */
    interface VpcEndpointProperty {
        /**
         * One or more network interfaces of the endpoint.
         *
         * Also known as an interface endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html#cfn-redshiftserverless-workgroup-vpcendpoint-networkinterfaces
         */
        readonly networkInterfaces?: Array<cdk.IResolvable | CfnWorkgroup.NetworkInterfaceProperty> | cdk.IResolvable;
        /**
         * The connection endpoint ID for connecting to Amazon Redshift Serverless.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html#cfn-redshiftserverless-workgroup-vpcendpoint-vpcendpointid
         */
        readonly vpcEndpointId?: string;
        /**
         * The VPC identifier that the endpoint is associated with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-vpcendpoint.html#cfn-redshiftserverless-workgroup-vpcendpoint-vpcid
         */
        readonly vpcId?: string;
    }
    /**
     * Contains information about a network interface in an Amazon Redshift Serverless managed VPC endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html
     */
    interface NetworkInterfaceProperty {
        /**
         * The availability Zone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html#cfn-redshiftserverless-workgroup-networkinterface-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The unique identifier of the network interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html#cfn-redshiftserverless-workgroup-networkinterface-networkinterfaceid
         */
        readonly networkInterfaceId?: string;
        /**
         * The IPv4 address of the network interface within the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html#cfn-redshiftserverless-workgroup-networkinterface-privateipaddress
         */
        readonly privateIpAddress?: string;
        /**
         * The unique identifier of the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-networkinterface.html#cfn-redshiftserverless-workgroup-networkinterface-subnetid
         */
        readonly subnetId?: string;
    }
    /**
     * The collection of computing resources from which an endpoint is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html
     */
    interface WorkgroupProperty {
        /**
         * The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-basecapacity
         */
        readonly baseCapacity?: number;
        /**
         * An array of parameters to set for advanced control over a database.
         *
         * The options are `auto_mv` , `datestyle` , `enable_case_sensitive_identifier` , `enable_user_activity_logging` , `query_group` , `search_path` , `require_ssl` , `use_fips_ssl` , and query monitoring metrics that let you define performance boundaries. For more information about query monitoring rules and available metrics, see [Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-configparameters
         */
        readonly configParameters?: Array<CfnWorkgroup.ConfigParameterProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The creation date of the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-creationdate
         */
        readonly creationDate?: string;
        /**
         * The endpoint that is created from the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-endpoint
         */
        readonly endpoint?: CfnWorkgroup.EndpointProperty | cdk.IResolvable;
        /**
         * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-enhancedvpcrouting
         */
        readonly enhancedVpcRouting?: boolean | cdk.IResolvable;
        /**
         * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries.
         *
         * The max capacity is specified in RPUs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-maxcapacity
         */
        readonly maxCapacity?: number;
        /**
         * The namespace the workgroup is associated with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-namespacename
         */
        readonly namespaceName?: string;
        /**
         * An object that represents the price performance target settings for the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-priceperformancetarget
         */
        readonly pricePerformanceTarget?: cdk.IResolvable | CfnWorkgroup.PerformanceTargetProperty;
        /**
         * A value that specifies whether the workgroup can be accessible from a public network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-publiclyaccessible
         */
        readonly publiclyAccessible?: boolean | cdk.IResolvable;
        /**
         * An array of security group IDs to associate with the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The status of the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-status
         */
        readonly status?: string;
        /**
         * An array of subnet IDs the workgroup is associated with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-subnetids
         */
        readonly subnetIds?: Array<string>;
        /**
         * The Amazon Resource Name (ARN) that links to the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-workgrouparn
         */
        readonly workgroupArn?: string;
        /**
         * The unique identifier of the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-workgroupid
         */
        readonly workgroupId?: string;
        /**
         * The name of the workgroup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshiftserverless-workgroup-workgroup.html#cfn-redshiftserverless-workgroup-workgroup-workgroupname
         */
        readonly workgroupName?: string;
    }
}
/**
 * Properties for defining a `CfnWorkgroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html
 */
export interface CfnWorkgroupProps {
    /**
     * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-basecapacity
     */
    readonly baseCapacity?: number;
    /**
     * A list of parameters to set for finer control over a database.
     *
     * Available options are `datestyle` , `enable_user_activity_logging` , `query_group` , `search_path` , `max_query_execution_time` , and `require_ssl` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-configparameters
     */
    readonly configParameters?: Array<CfnWorkgroup.ConfigParameterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-enhancedvpcrouting
     */
    readonly enhancedVpcRouting?: boolean | cdk.IResolvable;
    /**
     * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries.
     *
     * The max capacity is specified in RPUs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-maxcapacity
     */
    readonly maxCapacity?: number;
    /**
     * The namespace the workgroup is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-namespacename
     */
    readonly namespaceName?: string;
    /**
     * The custom port to use when connecting to a workgroup.
     *
     * Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-port
     */
    readonly port?: number;
    /**
     * An object that represents the price performance target settings for the workgroup.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-priceperformancetarget
     */
    readonly pricePerformanceTarget?: cdk.IResolvable | CfnWorkgroup.PerformanceTargetProperty;
    /**
     * A value that specifies whether the workgroup can be accessible from a public network.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * A list of security group IDs to associate with the workgroup.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * A list of subnet IDs the workgroup is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * The map of the key-value pairs used to tag the workgroup.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the workgroup.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshiftserverless-workgroup.html#cfn-redshiftserverless-workgroup-workgroupname
     */
    readonly workgroupName: string;
}
