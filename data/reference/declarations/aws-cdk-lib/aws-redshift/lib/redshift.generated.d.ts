import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a cluster. A *cluster* is a fully managed data warehouse that consists of a set of compute nodes.
 *
 * To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to [Amazon Redshift Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html) in the *Amazon Redshift Cluster Management Guide* .
 *
 * @cloudformationResource AWS::Redshift::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html
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
     * The namespace Amazon Resource Name (ARN) of the cluster.
     *
     * @cloudformationAttribute ClusterNamespaceArn
     */
    readonly attrClusterNamespaceArn: string;
    /**
     * A unique identifier for the maintenance window.
     *
     * @cloudformationAttribute DeferMaintenanceIdentifier
     */
    readonly attrDeferMaintenanceIdentifier: string;
    /**
     * The connection endpoint for the Amazon Redshift cluster. For example: `examplecluster.cg034hpkmmjt.us-east-1.redshift.amazonaws.com` .
     *
     * @cloudformationAttribute Endpoint.Address
     */
    readonly attrEndpointAddress: string;
    /**
     * The port number on which the Amazon Redshift cluster accepts connections. For example: `5439` .
     *
     * @cloudformationAttribute Endpoint.Port
     */
    readonly attrEndpointPort: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.
     *
     * @cloudformationAttribute MasterPasswordSecretArn
     */
    readonly attrMasterPasswordSecretArn: string;
    /**
     * If `true` , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.
     */
    allowVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * This parameter is retired.
     */
    aquaConfigurationStatus?: string;
    /**
     * The number of days that automated snapshots are retained.
     */
    automatedSnapshotRetentionPeriod?: number;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.
     */
    availabilityZone?: string;
    /**
     * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
     */
    availabilityZoneRelocation?: boolean | cdk.IResolvable;
    /**
     * Describes the status of the Availability Zone relocation operation.
     */
    availabilityZoneRelocationStatus?: string;
    /**
     * A boolean value indicating whether the resize operation is using the classic resize process.
     */
    classic?: boolean | cdk.IResolvable;
    /**
     * A unique identifier for the cluster.
     */
    clusterIdentifier?: string;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    clusterParameterGroupName?: string;
    /**
     * A list of security groups to be associated with this cluster.
     */
    clusterSecurityGroups?: Array<string>;
    /**
     * The name of a cluster subnet group to be associated with this cluster.
     */
    clusterSubnetGroupName?: string;
    /**
     * The type of the cluster. When cluster type is specified as.
     */
    clusterType: string;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     */
    clusterVersion?: string;
    /**
     * The name of the first database to be created when the cluster is created.
     */
    dbName: string;
    /**
     * A Boolean indicating whether to enable the deferred maintenance window.
     */
    deferMaintenance?: boolean | cdk.IResolvable;
    /**
     * An integer indicating the duration of the maintenance window in days.
     */
    deferMaintenanceDuration?: number;
    /**
     * A timestamp for the end of the time period when we defer maintenance.
     */
    deferMaintenanceEndTime?: string;
    /**
     * A timestamp indicating the start time for the deferred maintenance window.
     */
    deferMaintenanceStartTime?: string;
    /**
     * The destination region that snapshots are automatically copied to when cross-region snapshot copy is enabled.
     */
    destinationRegion?: string;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    elasticIp?: string;
    /**
     * If `true` , the data in the cluster is encrypted at rest.
     */
    encrypted?: boolean | cdk.IResolvable;
    /**
     * The connection endpoint.
     */
    endpoint?: CfnCluster.EndpointProperty | cdk.IResolvable;
    /**
     * An option that specifies whether to create the cluster with enhanced VPC routing enabled.
     */
    enhancedVpcRouting?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
     */
    hsmClientCertificateIdentifier?: string;
    /**
     * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
     */
    hsmConfigurationIdentifier?: string;
    /**
     * A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.
     */
    iamRoles?: Array<string>;
    /**
     * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
     */
    kmsKeyId?: string;
    /**
     * Specifies logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     */
    loggingProperties?: cdk.IResolvable | CfnCluster.LoggingPropertiesProperty;
    /**
     * An optional parameter for the name of the maintenance track for the cluster.
     */
    maintenanceTrackName?: string;
    /**
     * If `true` , Amazon Redshift uses AWS Secrets Manager to manage this cluster's admin credentials.
     */
    manageMasterPassword?: boolean | cdk.IResolvable;
    /**
     * The default number of days to retain a manual snapshot.
     */
    manualSnapshotRetentionPeriod?: number;
    /**
     * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
     */
    masterPasswordSecretKmsKeyId?: string;
    /**
     * The user name associated with the admin user account for the cluster that is being created.
     */
    masterUsername: string;
    /**
     * The password associated with the admin user account for the cluster that is being created.
     */
    masterUserPassword?: string;
    /**
     * A boolean indicating whether Amazon Redshift should deploy the cluster in two Availability Zones.
     */
    multiAz?: boolean | cdk.IResolvable;
    /**
     * The policy that is attached to a resource.
     */
    namespaceResourcePolicy?: any | cdk.IResolvable;
    /**
     * The node type to be provisioned for the cluster.
     */
    nodeType: string;
    /**
     * The number of compute nodes in the cluster.
     */
    numberOfNodes?: number;
    /**
     * The AWS account used to create or copy the snapshot.
     */
    ownerAccount?: string;
    /**
     * The port number on which the cluster accepts incoming connections.
     */
    port?: number;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     */
    preferredMaintenanceWindow?: string;
    /**
     * If `true` , the cluster can be accessed from a public network.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The Amazon Redshift operation to be performed.
     */
    resourceAction?: string;
    /**
     * Describes a `RevisionTarget` object.
     */
    revisionTarget?: string;
    /**
     * Rotates the encryption keys for a cluster.
     */
    rotateEncryptionKey?: boolean | cdk.IResolvable;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    snapshotClusterIdentifier?: string;
    /**
     * The name of the snapshot copy grant.
     */
    snapshotCopyGrantName?: string;
    /**
     * Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
     */
    snapshotCopyManual?: boolean | cdk.IResolvable;
    /**
     * The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region .
     */
    snapshotCopyRetentionPeriod?: number;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    snapshotIdentifier?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tag instances.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    vpcSecurityGroupIds?: Array<string>;
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
     * Describes a connection endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-endpoint.html
     */
    interface EndpointProperty {
        /**
         * The DNS address of the cluster.
         *
         * This property is read only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-endpoint.html#cfn-redshift-cluster-endpoint-address
         */
        readonly address?: string;
        /**
         * The port that the database engine is listening on.
         *
         * This property is read only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-endpoint.html#cfn-redshift-cluster-endpoint-port
         */
        readonly port?: string;
    }
    /**
     * Specifies logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html
     */
    interface LoggingPropertiesProperty {
        /**
         * The name of an existing S3 bucket where the log files are to be stored.
         *
         * Constraints:
         *
         * - Must be in the same region as the cluster
         * - The cluster must have read bucket and put object permissions
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html#cfn-redshift-cluster-loggingproperties-bucketname
         */
        readonly bucketName?: string;
        /**
         * The log destination type.
         *
         * An enum with possible values of `s3` and `cloudwatch` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html#cfn-redshift-cluster-loggingproperties-logdestinationtype
         */
        readonly logDestinationType?: string;
        /**
         * The collection of exported log types.
         *
         * Possible values are `connectionlog` , `useractivitylog` , and `userlog` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html#cfn-redshift-cluster-loggingproperties-logexports
         */
        readonly logExports?: Array<string>;
        /**
         * The prefix applied to the log file names.
         *
         * Valid characters are any letter from any language, any whitespace character, any numeric character, and the following characters: underscore ( `_` ), period ( `.` ), colon ( `:` ), slash ( `/` ), equal ( `=` ), plus ( `+` ), backslash ( `\` ), hyphen ( `-` ), at symbol ( `@` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-cluster-loggingproperties.html#cfn-redshift-cluster-loggingproperties-s3keyprefix
         */
        readonly s3KeyPrefix?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html
 */
export interface CfnClusterProps {
    /**
     * If `true` , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.
     *
     * When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster.
     *
     * Default: `true`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-allowversionupgrade
     */
    readonly allowVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * This parameter is retired.
     *
     * It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-aquaconfigurationstatus
     */
    readonly aquaConfigurationStatus?: string;
    /**
     * The number of days that automated snapshots are retained.
     *
     * If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with [CreateClusterSnapshot](https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html) in the *Amazon Redshift API Reference* .
     *
     * Default: `1`
     *
     * Constraints: Must be a value from 0 to 35.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-automatedsnapshotretentionperiod
     */
    readonly automatedSnapshotRetentionPeriod?: number;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.
     *
     * For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     *
     * Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint.
     *
     * Example: `us-east-2d`
     *
     * Constraint: The specified Availability Zone must be in the same region as the current endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzonerelocation
     */
    readonly availabilityZoneRelocation?: boolean | cdk.IResolvable;
    /**
     * Describes the status of the Availability Zone relocation operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzonerelocationstatus
     */
    readonly availabilityZoneRelocationStatus?: string;
    /**
     * A boolean value indicating whether the resize operation is using the classic resize process.
     *
     * If you don't provide this parameter or set the value to `false` , the resize type is elastic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-classic
     */
    readonly classic?: boolean | cdk.IResolvable;
    /**
     * A unique identifier for the cluster.
     *
     * You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. The identifier also appears in the Amazon Redshift console.
     *
     * Constraints:
     *
     * - Must contain from 1 to 63 alphanumeric characters or hyphens.
     * - Alphabetic characters must be lowercase.
     * - First character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     * - Must be unique for all clusters within an AWS account .
     *
     * Example: `myexamplecluster`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusteridentifier
     */
    readonly clusterIdentifier?: string;
    /**
     * The name of the parameter group to be associated with this cluster.
     *
     * Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to [Working with Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)
     *
     * Constraints:
     *
     * - Must be 1 to 255 alphanumeric characters or hyphens.
     * - First character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusterparametergroupname
     */
    readonly clusterParameterGroupName?: string;
    /**
     * A list of security groups to be associated with this cluster.
     *
     * Default: The default cluster security group for Amazon Redshift.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustersecuritygroups
     */
    readonly clusterSecurityGroups?: Array<string>;
    /**
     * The name of a cluster subnet group to be associated with this cluster.
     *
     * If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustersubnetgroupname
     */
    readonly clusterSubnetGroupName?: string;
    /**
     * The type of the cluster. When cluster type is specified as.
     *
     * - `single-node` , the *NumberOfNodes* parameter is not required.
     * - `multi-node` , the *NumberOfNodes* parameter is required.
     *
     * Valid Values: `multi-node` | `single-node`
     *
     * Default: `multi-node`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustertype
     */
    readonly clusterType: string;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     *
     * The version selected runs on all the nodes in the cluster.
     *
     * Constraints: Only version 1.0 is currently available.
     *
     * Example: `1.0`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusterversion
     */
    readonly clusterVersion?: string;
    /**
     * The name of the first database to be created when the cluster is created.
     *
     * To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to [Create a Database](https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html) in the Amazon Redshift Database Developer Guide.
     *
     * Default: `dev`
     *
     * Constraints:
     *
     * - Must contain 1 to 64 alphanumeric characters.
     * - Must contain only lowercase letters.
     * - Cannot be a word that is reserved by the service. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-dbname
     */
    readonly dbName: string;
    /**
     * A Boolean indicating whether to enable the deferred maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenance
     */
    readonly deferMaintenance?: boolean | cdk.IResolvable;
    /**
     * An integer indicating the duration of the maintenance window in days.
     *
     * If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenanceduration
     */
    readonly deferMaintenanceDuration?: number;
    /**
     * A timestamp for the end of the time period when we defer maintenance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenanceendtime
     */
    readonly deferMaintenanceEndTime?: string;
    /**
     * A timestamp indicating the start time for the deferred maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenancestarttime
     */
    readonly deferMaintenanceStartTime?: string;
    /**
     * The destination region that snapshots are automatically copied to when cross-region snapshot copy is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-destinationregion
     */
    readonly destinationRegion?: string;
    /**
     * The Elastic IP (EIP) address for the cluster.
     *
     * Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on. For more information about provisioning clusters in EC2-VPC, go to [Supported Platforms to Launch Your Cluster](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms) in the Amazon Redshift Cluster Management Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-elasticip
     */
    readonly elasticIp?: string;
    /**
     * If `true` , the data in the cluster is encrypted at rest.
     *
     * If you set the value on this parameter to `false` , the request will fail.
     *
     * Default: true
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-encrypted
     */
    readonly encrypted?: boolean | cdk.IResolvable;
    /**
     * The connection endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-endpoint
     */
    readonly endpoint?: CfnCluster.EndpointProperty | cdk.IResolvable;
    /**
     * An option that specifies whether to create the cluster with enhanced VPC routing enabled.
     *
     * To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
     *
     * If this option is `true` , enhanced VPC routing is enabled.
     *
     * Default: false
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-enhancedvpcrouting
     */
    readonly enhancedVpcRouting?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-hsmclientcertificateidentifier
     */
    readonly hsmClientCertificateIdentifier?: string;
    /**
     * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-hsmconfigurationidentifier
     */
    readonly hsmConfigurationIdentifier?: string;
    /**
     * A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.
     *
     * You must supply the IAM roles in their Amazon Resource Name (ARN) format.
     *
     * The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to [Quotas and limits](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-iamroles
     */
    readonly iamRoles?: Array<string>;
    /**
     * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties
     */
    readonly loggingProperties?: cdk.IResolvable | CfnCluster.LoggingPropertiesProperty;
    /**
     * An optional parameter for the name of the maintenance track for the cluster.
     *
     * If you don't provide a maintenance track name, the cluster is assigned to the `current` track.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-maintenancetrackname
     */
    readonly maintenanceTrackName?: string;
    /**
     * If `true` , Amazon Redshift uses AWS Secrets Manager to manage this cluster's admin credentials.
     *
     * You can't use `MasterUserPassword` if `ManageMasterPassword` is true. If `ManageMasterPassword` is false or not set, Amazon Redshift uses `MasterUserPassword` for the admin user account's password.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-managemasterpassword
     */
    readonly manageMasterPassword?: boolean | cdk.IResolvable;
    /**
     * The default number of days to retain a manual snapshot.
     *
     * If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.
     *
     * The value must be either -1 or an integer between 1 and 3,653.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-manualsnapshotretentionperiod
     */
    readonly manualSnapshotRetentionPeriod?: number;
    /**
     * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
     *
     * You can only use this parameter if `ManageMasterPassword` is true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masterpasswordsecretkmskeyid
     */
    readonly masterPasswordSecretKmsKeyId?: string;
    /**
     * The user name associated with the admin user account for the cluster that is being created.
     *
     * Constraints:
     *
     * - Must be 1 - 128 alphanumeric characters or hyphens. The user name can't be `PUBLIC` .
     * - Must contain only lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
     * - The first character must be a letter.
     * - Must not contain a colon (:) or a slash (/).
     * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masterusername
     */
    readonly masterUsername: string;
    /**
     * The password associated with the admin user account for the cluster that is being created.
     *
     * You can't use `MasterUserPassword` if `ManageMasterPassword` is `true` .
     *
     * Constraints:
     *
     * - Must be between 8 and 64 characters in length.
     * - Must contain at least one uppercase letter.
     * - Must contain at least one lowercase letter.
     * - Must contain one number.
     * - Can be any printable ASCII character (ASCII code 33-126) except `'` (single quote), `"` (double quote), `\` , `/` , or `@` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masteruserpassword
     */
    readonly masterUserPassword?: string;
    /**
     * A boolean indicating whether Amazon Redshift should deploy the cluster in two Availability Zones.
     *
     * The default is false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-multiaz
     */
    readonly multiAz?: boolean | cdk.IResolvable;
    /**
     * The policy that is attached to a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-namespaceresourcepolicy
     */
    readonly namespaceResourcePolicy?: any | cdk.IResolvable;
    /**
     * The node type to be provisioned for the cluster.
     *
     * For information about node types, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the *Amazon Redshift Cluster Management Guide* .
     *
     * Valid Values: `dc2.large` | `dc2.8xlarge` | `ra3.large` | `ra3.xlplus` | `ra3.4xlarge` | `ra3.16xlarge`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-nodetype
     */
    readonly nodeType: string;
    /**
     * The number of compute nodes in the cluster.
     *
     * This parameter is required when the *ClusterType* parameter is specified as `multi-node` .
     *
     * For information about determining how many nodes you need, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the *Amazon Redshift Cluster Management Guide* .
     *
     * If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster.
     *
     * Default: `1`
     *
     * Constraints: Value must be at least 1 and no more than 100.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-numberofnodes
     */
    readonly numberOfNodes?: number;
    /**
     * The AWS account used to create or copy the snapshot.
     *
     * Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-owneraccount
     */
    readonly ownerAccount?: string;
    /**
     * The port number on which the cluster accepts incoming connections.
     *
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections.
     *
     * Default: `5439`
     *
     * Valid Values:
     *
     * - For clusters with ra3 nodes - Select a port within the ranges `5431-5455` or `8191-8215` . (If you have an existing cluster with ra3 nodes, it isn't required that you change the port to these ranges.)
     * - For clusters with dc2 nodes - Select a port within the range `1150-65535` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-port
     */
    readonly port?: number;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     *
     * Format: `ddd:hh24:mi-ddd:hh24:mi`
     *
     * Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see [Maintenance Windows](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows) in Amazon Redshift Cluster Management Guide.
     *
     * Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
     *
     * Constraints: Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * If `true` , the cluster can be accessed from a public network.
     *
     * Default: false
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The Amazon Redshift operation to be performed.
     *
     * Supported operations are `pause-cluster` , `resume-cluster` , and `failover-primary-compute` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-resourceaction
     */
    readonly resourceAction?: string;
    /**
     * Describes a `RevisionTarget` object.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-revisiontarget
     */
    readonly revisionTarget?: string;
    /**
     * Rotates the encryption keys for a cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-rotateencryptionkey
     */
    readonly rotateEncryptionKey?: boolean | cdk.IResolvable;
    /**
     * The name of the cluster the source snapshot was created from.
     *
     * This parameter is required if your user or role has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotclusteridentifier
     */
    readonly snapshotClusterIdentifier?: string;
    /**
     * The name of the snapshot copy grant.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopygrantname
     */
    readonly snapshotCopyGrantName?: string;
    /**
     * Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopymanual
     */
    readonly snapshotCopyManual?: boolean | cdk.IResolvable;
    /**
     * The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region .
     *
     * By default, this only changes the retention period of copied automated snapshots.
     *
     * If you decrease the retention period for automated snapshots that are copied to a destination AWS Region , Amazon Redshift deletes any existing automated snapshots that were copied to the destination AWS Region and that fall outside of the new retention period.
     *
     * Constraints: Must be at least 1 and no more than 35 for automated snapshots.
     *
     * If you specify the `manual` option, only newly copied manual snapshots will have the new retention period.
     *
     * If you specify the value of -1 newly copied manual snapshots are retained indefinitely.
     *
     * Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopyretentionperiod
     */
    readonly snapshotCopyRetentionPeriod?: number;
    /**
     * The name of the snapshot from which to create the new cluster.
     *
     * This parameter isn't case sensitive. You must specify this parameter or `snapshotArn` , but not both.
     *
     * Example: `my-snapshot-id`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotidentifier
     */
    readonly snapshotIdentifier?: string;
    /**
     * A list of tag instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     *
     * Default: The default VPC security group is associated with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * Describes a parameter group.
 *
 * @cloudformationResource AWS::Redshift::ClusterParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html
 */
export declare class CfnClusterParameterGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterParameterGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterParameterGroup;
    /**
     * The description of the parameter group.
     */
    description: string;
    /**
     * The name of the cluster parameter group family that this cluster parameter group is compatible with.
     */
    parameterGroupFamily: string;
    /**
     * The name of the cluster parameter group.
     */
    parameterGroupName?: string;
    /**
     * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
     */
    parameters?: Array<cdk.IResolvable | CfnClusterParameterGroup.ParameterProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags for the cluster parameter group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterParameterGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnClusterParameterGroup {
    /**
     * Describes a parameter in a cluster parameter group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html
     */
    interface ParameterProperty {
        /**
         * The name of the parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html#cfn-redshift-clusterparametergroup-parameter-parametername
         */
        readonly parameterName: string;
        /**
         * The value of the parameter.
         *
         * If `ParameterName` is `wlm_json_configuration` , then the maximum size of `ParameterValue` is 8000 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-clusterparametergroup-parameter.html#cfn-redshift-clusterparametergroup-parameter-parametervalue
         */
        readonly parameterValue: string;
    }
}
/**
 * Properties for defining a `CfnClusterParameterGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html
 */
export interface CfnClusterParameterGroupProps {
    /**
     * The description of the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-description
     */
    readonly description: string;
    /**
     * The name of the cluster parameter group family that this cluster parameter group is compatible with.
     *
     * You can create a custom parameter group and then associate your cluster with it. For more information, see [Amazon Redshift parameter groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parametergroupfamily
     */
    readonly parameterGroupFamily: string;
    /**
     * The name of the cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parametergroupname
     */
    readonly parameterGroupName?: string;
    /**
     * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
     *
     * For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.
     *
     * For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm_json_configuration parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parameters
     */
    readonly parameters?: Array<cdk.IResolvable | CfnClusterParameterGroup.ParameterProperty> | cdk.IResolvable;
    /**
     * The list of tags for the cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.
 *
 * For information about managing security groups, go to [Amazon Redshift Cluster Security Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html) in the *Amazon Redshift Cluster Management Guide* .
 *
 * @cloudformationResource AWS::Redshift::ClusterSecurityGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html
 */
export declare class CfnClusterSecurityGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterSecurityGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterSecurityGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description for the security group.
     */
    description: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies an arbitrary set of tags (key–value pairs) to associate with this security group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterSecurityGroupProps);
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
 * Properties for defining a `CfnClusterSecurityGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html
 */
export interface CfnClusterSecurityGroupProps {
    /**
     * A description for the security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-description
     */
    readonly description: string;
    /**
     * Specifies an arbitrary set of tags (key–value pairs) to associate with this security group.
     *
     * Use tags to manage your resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Adds an inbound (ingress) rule to an Amazon Redshift security group.
 *
 * Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.
 *
 * If you authorize access to an Amazon EC2 security group, specify *EC2SecurityGroupName* and *EC2SecurityGroupOwnerId* . The Amazon EC2 security group and Amazon Redshift cluster must be in the same AWS Region .
 *
 * If you authorize access to a CIDR/IP address range, specify *CIDRIP* . For an overview of CIDR blocks, see the Wikipedia article on [Classless Inter-Domain Routing](https://docs.aws.amazon.com/http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
 *
 * You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to [Working with Security Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html) in the *Amazon Redshift Cluster Management Guide* .
 *
 * @cloudformationResource AWS::Redshift::ClusterSecurityGroupIngress
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html
 */
export declare class CfnClusterSecurityGroupIngress extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterSecurityGroupIngress from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterSecurityGroupIngress;
    /**
     * Specifies an inbound (ingress) rule for an Amazon Redshift security group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The IP range to be added the Amazon Redshift security group.
     */
    cidrip?: string;
    /**
     * The name of the security group to which the ingress rule is added.
     */
    clusterSecurityGroupName: string;
    /**
     * The EC2 security group to be added the Amazon Redshift security group.
     */
    ec2SecurityGroupName?: string;
    /**
     * The AWS account number of the owner of the security group specified by the *EC2SecurityGroupName* parameter.
     */
    ec2SecurityGroupOwnerId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterSecurityGroupIngressProps);
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
 * Properties for defining a `CfnClusterSecurityGroupIngress`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html
 */
export interface CfnClusterSecurityGroupIngressProps {
    /**
     * The IP range to be added the Amazon Redshift security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-cidrip
     */
    readonly cidrip?: string;
    /**
     * The name of the security group to which the ingress rule is added.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-clustersecuritygroupname
     */
    readonly clusterSecurityGroupName: string;
    /**
     * The EC2 security group to be added the Amazon Redshift security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupname
     */
    readonly ec2SecurityGroupName?: string;
    /**
     * The AWS account number of the owner of the security group specified by the *EC2SecurityGroupName* parameter.
     *
     * The AWS Access Key ID is not an acceptable value.
     *
     * Example: `111122223333`
     *
     * Conditional. If you specify the `EC2SecurityGroupName` property, you must specify this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupownerid
     */
    readonly ec2SecurityGroupOwnerId?: string;
}
/**
 * Specifies an Amazon Redshift subnet group.
 *
 * You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud ( Amazon VPC ) when creating Amazon Redshift subnet group.
 *
 * For information about subnet groups, go to [Amazon Redshift Cluster Subnet Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-cluster-subnet-groups.html) in the *Amazon Redshift Cluster Management Guide* .
 *
 * @cloudformationResource AWS::Redshift::ClusterSubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html
 */
export declare class CfnClusterSubnetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterSubnetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterSubnetGroup;
    /**
     * The name of the cluster subnet group.
     *
     * @cloudformationAttribute ClusterSubnetGroupName
     */
    readonly attrClusterSubnetGroupName: string;
    /**
     * A description for the subnet group.
     */
    description: string;
    /**
     * An array of VPC subnet IDs.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Specifies an arbitrary set of tags (key–value pairs) to associate with this subnet group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterSubnetGroupProps);
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
 * Properties for defining a `CfnClusterSubnetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html
 */
export interface CfnClusterSubnetGroupProps {
    /**
     * A description for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-description
     */
    readonly description: string;
    /**
     * An array of VPC subnet IDs.
     *
     * A maximum of 20 subnets can be modified in a single request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * Specifies an arbitrary set of tags (key–value pairs) to associate with this subnet group.
     *
     * Use tags to manage your resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersubnetgroup.html#cfn-redshift-clustersubnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a Redshift-managed VPC endpoint.
 *
 * @cloudformationResource AWS::Redshift::EndpointAccess
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html
 */
export declare class CfnEndpointAccess extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpointAccess from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpointAccess;
    /**
     * The DNS address of the endpoint.
     *
     * @cloudformationAttribute Address
     */
    readonly attrAddress: string;
    /**
     * The time (UTC) that the endpoint was created.
     *
     * @cloudformationAttribute EndpointCreateTime
     */
    readonly attrEndpointCreateTime: string;
    /**
     * The status of the endpoint.
     *
     * @cloudformationAttribute EndpointStatus
     */
    readonly attrEndpointStatus: string;
    /**
     * The port number on which the cluster accepts incoming connections.
     *
     * @cloudformationAttribute Port
     */
    readonly attrPort: number;
    /**
     * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
     *
     * @cloudformationAttribute VpcEndpoint
     */
    readonly attrVpcEndpoint: cdk.IResolvable;
    /**
     * @cloudformationAttribute VpcEndpoint.NetworkInterfaces
     */
    readonly attrVpcEndpointNetworkInterfaces: cdk.IResolvable;
    /**
     * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
     *
     * @cloudformationAttribute VpcEndpoint.VpcEndpointId
     */
    readonly attrVpcEndpointVpcEndpointId: string;
    /**
     * The VPC identifier that the endpoint is associated.
     *
     * @cloudformationAttribute VpcEndpoint.VpcId
     */
    readonly attrVpcEndpointVpcId: string;
    /**
     * The security groups associated with the endpoint.
     *
     * @cloudformationAttribute VpcSecurityGroups
     */
    readonly attrVpcSecurityGroups: cdk.IResolvable;
    /**
     * The cluster identifier of the cluster associated with the endpoint.
     */
    clusterIdentifier: string;
    /**
     * The name of the endpoint.
     */
    endpointName: string;
    /**
     * The AWS account ID of the owner of the cluster.
     */
    resourceOwner?: string;
    /**
     * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
     */
    subnetGroupName: string;
    /**
     * The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     */
    vpcSecurityGroupIds: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointAccessProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpointAccess {
    /**
     * The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html
     */
    interface VpcEndpointProperty {
        /**
         * One or more network interfaces of the endpoint.
         *
         * Also known as an interface endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html#cfn-redshift-endpointaccess-vpcendpoint-networkinterfaces
         */
        readonly networkInterfaces?: Array<cdk.IResolvable | CfnEndpointAccess.NetworkInterfaceProperty> | cdk.IResolvable;
        /**
         * The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html#cfn-redshift-endpointaccess-vpcendpoint-vpcendpointid
         */
        readonly vpcEndpointId?: string;
        /**
         * The VPC identifier that the endpoint is associated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcendpoint.html#cfn-redshift-endpointaccess-vpcendpoint-vpcid
         */
        readonly vpcId?: string;
    }
    /**
     * Describes a network interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html
     */
    interface NetworkInterfaceProperty {
        /**
         * The Availability Zone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html#cfn-redshift-endpointaccess-networkinterface-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The network interface identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html#cfn-redshift-endpointaccess-networkinterface-networkinterfaceid
         */
        readonly networkInterfaceId?: string;
        /**
         * The IPv4 address of the network interface within the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html#cfn-redshift-endpointaccess-networkinterface-privateipaddress
         */
        readonly privateIpAddress?: string;
        /**
         * The subnet identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-networkinterface.html#cfn-redshift-endpointaccess-networkinterface-subnetid
         */
        readonly subnetId?: string;
    }
    /**
     * The security groups associated with the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html
     */
    interface VpcSecurityGroupProperty {
        /**
         * The status of the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html#cfn-redshift-endpointaccess-vpcsecuritygroup-status
         */
        readonly status?: string;
        /**
         * The identifier of the VPC security group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-endpointaccess-vpcsecuritygroup.html#cfn-redshift-endpointaccess-vpcsecuritygroup-vpcsecuritygroupid
         */
        readonly vpcSecurityGroupId?: string;
    }
}
/**
 * Properties for defining a `CfnEndpointAccess`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html
 */
export interface CfnEndpointAccessProps {
    /**
     * The cluster identifier of the cluster associated with the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-clusteridentifier
     */
    readonly clusterIdentifier: string;
    /**
     * The name of the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-endpointname
     */
    readonly endpointName: string;
    /**
     * The AWS account ID of the owner of the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-resourceowner
     */
    readonly resourceOwner?: string;
    /**
     * The subnet group name where Amazon Redshift chooses to deploy the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-subnetgroupname
     */
    readonly subnetGroupName: string;
    /**
     * The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds: Array<string>;
}
/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts .
 *
 * @cloudformationResource AWS::Redshift::EndpointAuthorization
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html
 */
export declare class CfnEndpointAuthorization extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpointAuthorization from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpointAuthorization;
    /**
     * Indicates whether all VPCs in the grantee account are allowed access to the cluster.
     *
     * @cloudformationAttribute AllowedAllVPCs
     */
    readonly attrAllowedAllVpCs: cdk.IResolvable;
    /**
     * The VPCs allowed access to the cluster.
     *
     * @cloudformationAttribute AllowedVPCs
     */
    readonly attrAllowedVpCs: Array<string>;
    /**
     * The time (UTC) when the authorization was created.
     *
     * @cloudformationAttribute AuthorizeTime
     */
    readonly attrAuthorizeTime: string;
    /**
     * The status of the cluster.
     *
     * @cloudformationAttribute ClusterStatus
     */
    readonly attrClusterStatus: string;
    /**
     * The number of Redshift-managed VPC endpoints created for the authorization.
     *
     * @cloudformationAttribute EndpointCount
     */
    readonly attrEndpointCount: number;
    /**
     * The AWS account ID of the grantee of the cluster.
     *
     * @cloudformationAttribute Grantee
     */
    readonly attrGrantee: string;
    /**
     * The AWS account ID of the cluster owner.
     *
     * @cloudformationAttribute Grantor
     */
    readonly attrGrantor: string;
    /**
     * The status of the authorization action.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The AWS account ID of either the cluster owner (grantor) or grantee.
     */
    account: string;
    /**
     * The cluster identifier.
     */
    clusterIdentifier: string;
    /**
     * Indicates whether to force the revoke action.
     */
    force?: boolean | cdk.IResolvable;
    /**
     * The virtual private cloud (VPC) identifiers to grant access to.
     */
    vpcIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointAuthorizationProps);
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
 * Properties for defining a `CfnEndpointAuthorization`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html
 */
export interface CfnEndpointAuthorizationProps {
    /**
     * The AWS account ID of either the cluster owner (grantor) or grantee.
     *
     * If `Grantee` parameter is true, then the `Account` value is of the grantor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-account
     */
    readonly account: string;
    /**
     * The cluster identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-clusteridentifier
     */
    readonly clusterIdentifier: string;
    /**
     * Indicates whether to force the revoke action.
     *
     * If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-force
     */
    readonly force?: boolean | cdk.IResolvable;
    /**
     * The virtual private cloud (VPC) identifiers to grant access to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-vpcids
     */
    readonly vpcIds?: Array<string>;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html.
 *
 * @cloudformationResource AWS::Redshift::EventSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html
 */
export declare class CfnEventSubscription extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventSubscription;
    /**
     * The AWS account associated with the Amazon Redshift event notification subscription.
     *
     * @cloudformationAttribute CustomerAwsId
     */
    readonly attrCustomerAwsId: string;
    /**
     * The name of the Amazon Redshift event notification subscription.
     *
     * @cloudformationAttribute CustSubscriptionId
     */
    readonly attrCustSubscriptionId: string;
    /**
     * The list of Amazon Redshift event categories specified in the event notification subscription.
     *
     * Values: Configuration, Management, Monitoring, Security, Pending
     *
     * @cloudformationAttribute EventCategoriesList
     */
    readonly attrEventCategoriesList: Array<string>;
    /**
     * A list of the sources that publish events to the Amazon Redshift event notification subscription.
     *
     * @cloudformationAttribute SourceIdsList
     */
    readonly attrSourceIdsList: Array<string>;
    /**
     * The status of the Amazon Redshift event notification subscription.
     *
     * Constraints:
     *
     * - Can be one of the following: active | no-permission | topic-not-exist
     * - The status "no-permission" indicates that Amazon Redshift no longer has permission to post to the Amazon SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The date and time the Amazon Redshift event notification subscription was created.
     *
     * @cloudformationAttribute SubscriptionCreationTime
     */
    readonly attrSubscriptionCreationTime: string;
    /**
     * A boolean value;
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
     */
    eventCategories?: Array<string>;
    /**
     * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
     */
    severity?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
     */
    snsTopicArn?: string;
    /**
     * A list of one or more identifiers of Amazon Redshift source objects.
     */
    sourceIds?: Array<string>;
    /**
     * The type of source that will be generating the events.
     */
    sourceType?: string;
    /**
     * The name of the event subscription to be created.
     */
    subscriptionName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tag instances.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventSubscriptionProps);
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
 * Properties for defining a `CfnEventSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html
 */
export interface CfnEventSubscriptionProps {
    /**
     * A boolean value;
     *
     * set to `true` to activate the subscription, and set to `false` to create the subscription but not activate it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies the Amazon Redshift event categories to be published by the event notification subscription.
     *
     * Values: configuration, management, monitoring, security, pending
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-eventcategories
     */
    readonly eventCategories?: Array<string>;
    /**
     * Specifies the Amazon Redshift event severity to be published by the event notification subscription.
     *
     * Values: ERROR, INFO
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-severity
     */
    readonly severity?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
     *
     * The ARN is created by Amazon SNS when you create a topic and subscribe to it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-snstopicarn
     */
    readonly snsTopicArn?: string;
    /**
     * A list of one or more identifiers of Amazon Redshift source objects.
     *
     * All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified.
     *
     * Example: my-cluster-1, my-cluster-2
     *
     * Example: my-snapshot-20131010
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourceids
     */
    readonly sourceIds?: Array<string>;
    /**
     * The type of source that will be generating the events.
     *
     * For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your AWS account . You must specify a source type in order to specify source IDs.
     *
     * Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-sourcetype
     */
    readonly sourceType?: string;
    /**
     * The name of the event subscription to be created.
     *
     * Constraints:
     *
     * - Cannot be null, empty, or blank.
     * - Must contain from 1 to 255 alphanumeric characters or hyphens.
     * - First character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-subscriptionname
     */
    readonly subscriptionName: string;
    /**
     * A list of tag instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-eventsubscription.html#cfn-redshift-eventsubscription-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a scheduled action.
 *
 * A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the `ResizeCluster` API operation.
 *
 * @cloudformationResource AWS::Redshift::ScheduledAction
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html
 */
export declare class CfnScheduledAction extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScheduledAction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScheduledAction;
    /**
     * List of times when the scheduled action will run.
     *
     * @cloudformationAttribute NextInvocations
     */
    readonly attrNextInvocations: Array<string>;
    /**
     * The state of the scheduled action. For example, `DISABLED` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * If true, the schedule is enabled.
     */
    enable?: boolean | cdk.IResolvable;
    /**
     * The end time in UTC when the schedule is no longer active.
     */
    endTime?: string;
    /**
     * The IAM role to assume to run the scheduled action.
     */
    iamRole?: string;
    /**
     * The schedule for a one-time (at format) or recurring (cron format) scheduled action.
     */
    schedule?: string;
    /**
     * The description of the scheduled action.
     */
    scheduledActionDescription?: string;
    /**
     * The name of the scheduled action.
     */
    scheduledActionName: string;
    /**
     * The start time in UTC when the schedule is active.
     */
    startTime?: string;
    /**
     * A JSON format string of the Amazon Redshift API operation with input parameters.
     */
    targetAction?: cdk.IResolvable | CfnScheduledAction.ScheduledActionTypeProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScheduledActionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScheduledAction {
    /**
     * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html
     */
    interface ScheduledActionTypeProperty {
        /**
         * An action that runs a `PauseCluster` API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html#cfn-redshift-scheduledaction-scheduledactiontype-pausecluster
         */
        readonly pauseCluster?: cdk.IResolvable | CfnScheduledAction.PauseClusterMessageProperty;
        /**
         * An action that runs a `ResizeCluster` API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html#cfn-redshift-scheduledaction-scheduledactiontype-resizecluster
         */
        readonly resizeCluster?: cdk.IResolvable | CfnScheduledAction.ResizeClusterMessageProperty;
        /**
         * An action that runs a `ResumeCluster` API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-scheduledactiontype.html#cfn-redshift-scheduledaction-scheduledactiontype-resumecluster
         */
        readonly resumeCluster?: cdk.IResolvable | CfnScheduledAction.ResumeClusterMessageProperty;
    }
    /**
     * Describes a pause cluster operation.
     *
     * For example, a scheduled action to run the `PauseCluster` API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-pauseclustermessage.html
     */
    interface PauseClusterMessageProperty {
        /**
         * The identifier of the cluster to be paused.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-pauseclustermessage.html#cfn-redshift-scheduledaction-pauseclustermessage-clusteridentifier
         */
        readonly clusterIdentifier: string;
    }
    /**
     * Describes a resume cluster operation.
     *
     * For example, a scheduled action to run the `ResumeCluster` API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resumeclustermessage.html
     */
    interface ResumeClusterMessageProperty {
        /**
         * The identifier of the cluster to be resumed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resumeclustermessage.html#cfn-redshift-scheduledaction-resumeclustermessage-clusteridentifier
         */
        readonly clusterIdentifier: string;
    }
    /**
     * Describes a resize cluster operation.
     *
     * For example, a scheduled action to run the `ResizeCluster` API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html
     */
    interface ResizeClusterMessageProperty {
        /**
         * A boolean value indicating whether the resize operation is using the classic resize process.
         *
         * If you don't provide this parameter or set the value to `false` , the resize type is elastic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html#cfn-redshift-scheduledaction-resizeclustermessage-classic
         */
        readonly classic?: boolean | cdk.IResolvable;
        /**
         * The unique identifier for the cluster to resize.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html#cfn-redshift-scheduledaction-resizeclustermessage-clusteridentifier
         */
        readonly clusterIdentifier: string;
        /**
         * The new cluster type for the specified cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html#cfn-redshift-scheduledaction-resizeclustermessage-clustertype
         */
        readonly clusterType?: string;
        /**
         * The new node type for the nodes you are adding.
         *
         * If not specified, the cluster's current node type is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html#cfn-redshift-scheduledaction-resizeclustermessage-nodetype
         */
        readonly nodeType?: string;
        /**
         * The new number of nodes for the cluster.
         *
         * If not specified, the cluster's current number of nodes is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-redshift-scheduledaction-resizeclustermessage.html#cfn-redshift-scheduledaction-resizeclustermessage-numberofnodes
         */
        readonly numberOfNodes?: number;
    }
}
/**
 * Properties for defining a `CfnScheduledAction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html
 */
export interface CfnScheduledActionProps {
    /**
     * If true, the schedule is enabled.
     *
     * If false, the scheduled action does not trigger. For more information about `state` of the scheduled action, see `ScheduledAction` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-enable
     */
    readonly enable?: boolean | cdk.IResolvable;
    /**
     * The end time in UTC when the schedule is no longer active.
     *
     * After this time, the scheduled action does not trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-endtime
     */
    readonly endTime?: string;
    /**
     * The IAM role to assume to run the scheduled action.
     *
     * This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the *Amazon Redshift Cluster Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-iamrole
     */
    readonly iamRole?: string;
    /**
     * The schedule for a one-time (at format) or recurring (cron format) scheduled action.
     *
     * Schedule invocations must be separated by at least one hour.
     *
     * Format of at expressions is " `at(yyyy-mm-ddThh:mm:ss)` ". For example, " `at(2016-03-04T17:27:00)` ".
     *
     * Format of cron expressions is " `cron(Minutes Hours Day-of-month Month Day-of-week Year)` ". For example, " `cron(0 10 ? * MON *)` ". For more information, see [Cron Expressions](https://docs.aws.amazon.com//AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-schedule
     */
    readonly schedule?: string;
    /**
     * The description of the scheduled action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactiondescription
     */
    readonly scheduledActionDescription?: string;
    /**
     * The name of the scheduled action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactionname
     */
    readonly scheduledActionName: string;
    /**
     * The start time in UTC when the schedule is active.
     *
     * Before this time, the scheduled action does not trigger.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-starttime
     */
    readonly startTime?: string;
    /**
     * A JSON format string of the Amazon Redshift API operation with input parameters.
     *
     * " `{\"ResizeCluster\":{\"NodeType\":\"ra3.4xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3}}` ".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-targetaction
     */
    readonly targetAction?: cdk.IResolvable | CfnScheduledAction.ScheduledActionTypeProperty;
}
/**
 * Describes a zero-ETL integration.
 *
 * @cloudformationResource AWS::Redshift::Integration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html
 */
export declare class CfnIntegration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegration;
    /**
     * The time (UTC) when the integration was created.
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The Amazon Resource Name (ARN) of the integration.
     *
     * @cloudformationAttribute IntegrationArn
     */
    readonly attrIntegrationArn: string;
    /**
     * The encryption context for the integration.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the integration.
     */
    integrationName?: string;
    /**
     * The AWS Key Management Service ( AWS KMS ) key identifier for the key used to encrypt the integration.
     */
    kmsKeyId?: string;
    /**
     * The Amazon Resource Name (ARN) of the database used as the source for replication.
     */
    sourceArn: string;
    /**
     * The list of tags associated with the integration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.
     */
    targetArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationProps);
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
 * Properties for defining a `CfnIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html
 */
export interface CfnIntegrationProps {
    /**
     * The encryption context for the integration.
     *
     * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *AWS Key Management Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * The name of the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-integrationname
     */
    readonly integrationName?: string;
    /**
     * The AWS Key Management Service ( AWS KMS ) key identifier for the key used to encrypt the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The Amazon Resource Name (ARN) of the database used as the source for replication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-sourcearn
     */
    readonly sourceArn: string;
    /**
     * The list of tags associated with the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-targetarn
     */
    readonly targetArn: string;
}
