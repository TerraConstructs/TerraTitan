/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
    /** (Required unless a `snapshotIdentifier` or `replicateSourceDb` is provided) The allocated storage in gibibytes. If `maxAllocatedStorage` is configured, this argument represents the initial storage allocation and differences from the configuration will be ignored automatically when Storage Autoscaling occurs. If `replicateSourceDb` is set, the value is ignored during the creation of the instance. */
    readonly allocatedStorage?: number;
    /** (Optional) Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage and the change is asynchronously applied as soon as possible. */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether any database modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html) */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /** (Optional) Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /** (Optional) The AZ for the RDS instance. */
    readonly availabilityZone?: string;
    /** (Optional) The days to retain backups for. */
    readonly backupRetentionPeriod?: number;
    /** (Optional, Forces new resource) Specifies where automated backups and manual snapshots are stored. Possible values are `region` (default) and `outposts`. See [Working with Amazon RDS on AWS Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) for more information. */
    readonly backupTarget?: string;
    /** (Optional) The daily time range (in UTC) during which automated backups are created if they are enabled. */
    readonly backupWindow?: string;
    /** (Optional) The identifier of the CA certificate for the DB instance. */
    readonly caCertIdentifier?: string;
    /** (Optional) The character set name to use for DB encoding in Oracle and Microsoft SQL instances (collation). */
    readonly characterSetName?: string;
    /** (Optional, boolean) Copy all Instance `tags` to snapshots. Default is `false`. */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /** (Optional) The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. */
    readonly customIamInstanceProfile?: string;
    /** (Optional) Indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance. See [CoIP for RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html#rds-on-outposts.coip) for more information. */
    readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#database_insights_mode DbInstance#database_insights_mode}
    */
    readonly databaseInsightsMode?: string;
    /** (Optional) The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance. Note that this does not apply for Oracle or SQL Server engines. See the [AWS documentation](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/rds/create-db-instance.html) for more details on what applies for those engines. If you are providing an Oracle db name, it needs to be in all upper case. Cannot be specified for a replica. */
    readonly dbName?: string;
    /** (Optional) Name of [DB subnet group](/docs/providers/aws/r/db_subnet_group.html). */
    readonly dbSubnetGroupName?: string;
    /** (Optional, boolean) Use a dedicated log volume (DLV) for the DB instance. Requires Provisioned IOPS. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.dlv) for more details. */
    readonly dedicatedLogVolume?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether to remove automated backups immediately after the DB instance is deleted. Default is `true`. */
    readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
    /** (Optional) If the DB instance should have deletion protection enabled. The database can't be deleted when this value is set to `true`. The default is `false`. */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /** (Optional) The ID of the Directory Service Active Directory domain to create the instance in. Conflicts with `domainFqdn`, `domainOu`, `domainAuthSecretArn` and a `domainDnsIps`. */
    readonly domain?: string;
    /** (Optional, but required if domain_fqdn is provided) The ARN for the Secrets Manager secret with the self managed Active Directory credentials for the user joining the domain. Conflicts with `domain` and `domainIamRoleName`. */
    readonly domainAuthSecretArn?: string;
    /** (Optional, but required if domain_fqdn is provided)  The IPv4 DNS IP addresses of your primary and secondary self managed Active Directory domain controllers. Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list. Conflicts with `domain` and `domainIamRoleName`. */
    readonly domainDnsIps?: string[];
    /** (Optional) The fully qualified domain name (FQDN) of the self managed Active Directory domain. Conflicts with `domain` and `domainIamRoleName`. */
    readonly domainFqdn?: string;
    /** (Optional, but required if domain is provided) The name of the IAM role to be used when making API calls to the Directory Service. Conflicts with `domainFqdn`, `domainOu`, `domainAuthSecretArn` and a `domainDnsIps`. */
    readonly domainIamRoleName?: string;
    /** (Optional, but required if domain_fqdn is provided) The self managed Active Directory organizational unit for your DB instance to join. Conflicts with `domain` and `domainIamRoleName`. */
    readonly domainOu?: string;
    /** (Optional) Set of log types to enable for exporting to CloudWatch logs. If omitted, no logs will be exported. For supported values, see the EnableCloudwatchLogsExports.member.N parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). */
    readonly enabledCloudwatchLogsExports?: string[];
    /** (Required unless a `snapshotIdentifier` or `replicateSourceDb` is provided) The database engine to use. For supported values, see the Engine parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine must match the [DB cluster](/docs/providers/aws/r/rds_cluster.html)'s engine'. For information on the difference between the available Aurora MySQL engines see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html) in the Amazon RDS User Guide. */
    readonly engine?: string;
    /** (Optional) The life cycle type for this DB instance. This setting applies only to RDS for MySQL and RDS for PostgreSQL. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html */
    readonly engineLifecycleSupport?: string;
    /** (Optional) The engine version to use. If `autoMinorVersionUpgrade` is enabled, you can provide a prefix of the version such as `8.0` (for `8.0.36`). The actual engine version used is returned in the attribute `engineVersionActual`, see [Attribute Reference](#attribute-reference) below. For supported values, see the EngineVersion parameter in [API action CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html). Note that for Amazon Aurora instances the engine version must match the [DB cluster](/docs/providers/aws/r/rds_cluster.html)'s engine version'. */
    readonly engineVersion?: string;
    /** (Optional) The name of your final DB snapshot when this DB instance is deleted. Must be provided if `skipFinalSnapshot` is set to `false`. The value must begin with a letter, only contain alphanumeric characters and hyphens, and not end with a hyphen or contain two consecutive hyphens. Must not be provided when deleting a read replica. */
    readonly finalSnapshotIdentifier?: string;
    /** (Optional) Specifies whether mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#id DbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The name of the RDS instance, if omitted, Terraform will assign a random, unique identifier. Required if `restoreToPointInTime` is specified. */
    readonly identifier?: string;
    /** (Optional) Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`. */
    readonly identifierPrefix?: string;
    /** (Required) The instance type of the RDS instance. */
    readonly instanceClass: string;
    /** (Optional) The amount of provisioned IOPS. Setting this implies a storage_type of "io1" or "io2". Can only be set when `storageType` is `"io1"`, `"io2` or `"gp3"`. */
    readonly iops?: number;
    /** (Optional) The ARN for the KMS encryption key. If creating an encrypted replica, set this to the destination KMS ARN. */
    readonly kmsKeyId?: string;
    /** (Optional, but required for some DB engines, i.e., Oracle SE1) License model information for this DB instance. Valid values for this field are as follows: * RDS for MariaDB: `general-public-license` * RDS for Microsoft SQL Server: `license-included` * RDS for MySQL: `general-public-license` * RDS for Oracle: `bring-your-own-license | license-included` */
    readonly licenseModel?: string;
    /** (Optional) The window to perform maintenance in. */
    readonly maintenanceWindow?: string;
    /** (Optional) Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `password` is provided. */
    readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
    /** (Optional) The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used. */
    readonly masterUserSecretKmsKeyId?: string;
    /** (Optional) Specifies the maximum storage (in GiB) that Amazon RDS can automatically scale to for this DB instance. By default, Storage Autoscaling is disabled. To enable Storage Autoscaling, set `maxAllocatedStorage` to **greater than or equal to** `allocatedStorage`. Setting `maxAllocatedStorage` to 0 explicitly disables Storage Autoscaling. When configured, changes to `allocatedStorage` will be automatically ignored as the storage can dynamically scale. */
    readonly maxAllocatedStorage?: number;
    /** (Optional) The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60. */
    readonly monitoringInterval?: number;
    /** (Optional) The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances. */
    readonly monitoringRoleArn?: string;
    /** (Optional) Specifies if the RDS instance is multi-AZ */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /** (Optional, Forces new resource) The national character set is used in the NCHAR, NVARCHAR2, and NCLOB data types for Oracle instances. This can't be changed. See [Oracle Character Sets Supported in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.OracleCharacterSets.html). */
    readonly ncharCharacterSetName?: string;
    /** (Optional) The network type of the DB instance. Valid values: `IPV4`, `DUAL`. */
    readonly networkType?: string;
    /** (Optional) Name of the DB option group to associate. */
    readonly optionGroupName?: string;
    /** (Optional) Name of the DB parameter group to associate. */
    readonly parameterGroupName?: string;
    /** (Required unless `manageMasterUserPassword` is set to true or unless a `snapshotIdentifier` or `replicateSourceDb` is provided or `manageMasterUserPassword` is set.) Password for the master DB user. Note that this may show up in logs, and it will be stored in the state file. Cannot be set if `manageMasterUserPassword` is set to `true`. */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#password_wo DbInstance#password_wo}
    */
    readonly passwordWo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#password_wo_version DbInstance#password_wo_version}
    */
    readonly passwordWoVersion?: number;
    /** (Optional) Specifies whether Performance Insights are enabled. Defaults to false. */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) The ARN for the KMS key to encrypt Performance Insights data. When specifying `performanceInsightsKmsKeyId`, `performanceInsightsEnabled` needs to be set to true. Once KMS key is set, it can never be changed. */
    readonly performanceInsightsKmsKeyId?: string;
    /** (Optional) Amount of time in days to retain Performance Insights data. Valid values are `7`, `731` (2 years) or a multiple of `31`. When specifying `performanceInsightsRetentionPeriod`, `performanceInsightsEnabled` needs to be set to true. Defaults to '7'. */
    readonly performanceInsightsRetentionPeriod?: number;
    /** (Optional) The port on which the DB accepts connections. */
    readonly port?: number;
    /** (Optional) Bool to control if instance is publicly accessible. Default is `false`. */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether the replica is in either `mounted` or `open-read-only` mode. This attribute is only supported by Oracle instances. Oracle replicas operate in `open-read-only` mode unless otherwise specified. See [Working with Oracle Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) for more information. */
    readonly replicaMode?: string;
    /** (Optional) Specifies that this resource is a Replica database, and to use this value as the source database. */
    readonly replicateSourceDb?: string;
    /** (Optional) Determines whether a final DB snapshot is created before the DB instance is deleted. If true is specified, no DBSnapshot is created. If false is specified, a DB snapshot is created before the DB instance is deleted, using the value from `finalSnapshotIdentifier`. Default is `false`. */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether or not to create this database from a snapshot. */
    readonly snapshotIdentifier?: string;
    /** (Optional) Specifies whether the DB instance is encrypted. Note that if you are creating a cross-region read replica this field is ignored and you should instead declare `kmsKeyId` with a valid ARN. The default is `false` if not specified. */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /** (Optional) The storage throughput value for the DB instance. Can only be set when `storageType` is `"gp3"`. Cannot be specified if the `allocatedStorage` value is below a per-`engine` threshold. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#gp3-storage) for details. */
    readonly storageThroughput?: number;
    /** (Optional) One of "standard" (magnetic), "gp2" (general purpose SSD), "gp3" (general purpose SSD that needs `iops` independently) "io1" (provisioned IOPS SSD) or "io2" (block express storage provisioned IOPS SSD). The default is "io1" if `iops` is specified, "gp2" if not. */
    readonly storageType?: string;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#tags_all DbInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Time zone of the DB instance. `timezone` is currently only supported by Microsoft SQL Server. The `timezone` can only be set on creation. See [MSSQL User Guide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone) for more information. */
    readonly timezone?: string;
    /** (Optional) Whether to upgrade the storage file system configuration on the read replica. */
    readonly upgradeStorageConfig?: boolean | cdktf.IResolvable;
    /** (Required unless a `snapshotIdentifier` or `replicateSourceDb` is provided) Username for the master DB user. Cannot be specified for a replica. */
    readonly username?: string;
    /** (Optional) List of VPC security groups to associate. */
    readonly vpcSecurityGroupIds?: string[];
    /** (Optional) Enables low-downtime updates using [RDS Blue/Green deployments][blue-green]. */
    readonly blueGreenUpdate?: DbInstanceBlueGreenUpdate;
    /** (Optional, Forces new resource) A configuration block for restoring a DB instance to an arbitrary point in time. */
    readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime;
    /** (Optional) Restore from a Percona Xtrabackup in S3.  See [Importing Data into an Amazon RDS MySQL DB Instance](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html) */
    readonly s3Import?: DbInstanceS3Import;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#timeouts DbInstance#timeouts}
    */
    readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceListenerEndpoint {
}
export declare function dbInstanceListenerEndpointToTerraform(struct?: DbInstanceListenerEndpoint): any;
export declare function dbInstanceListenerEndpointToHclTerraform(struct?: DbInstanceListenerEndpoint): any;
export declare class DbInstanceListenerEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DbInstanceListenerEndpoint | undefined;
    set internalValue(value: DbInstanceListenerEndpoint | undefined);
    get address(): string;
    get hostedZoneId(): string;
    get port(): number;
}
export declare class DbInstanceListenerEndpointList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DbInstanceListenerEndpointOutputReference;
}
export interface DbInstanceMasterUserSecret {
}
export declare function dbInstanceMasterUserSecretToTerraform(struct?: DbInstanceMasterUserSecret): any;
export declare function dbInstanceMasterUserSecretToHclTerraform(struct?: DbInstanceMasterUserSecret): any;
export declare class DbInstanceMasterUserSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DbInstanceMasterUserSecret | undefined;
    set internalValue(value: DbInstanceMasterUserSecret | undefined);
    get kmsKeyId(): string;
    get secretArn(): string;
    get secretStatus(): string;
}
export declare class DbInstanceMasterUserSecretList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DbInstanceMasterUserSecretOutputReference;
}
export interface DbInstanceBlueGreenUpdate {
    /** (Optional) Enables [low-downtime updates](#low-downtime-updates) when `true`. */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function dbInstanceBlueGreenUpdateToTerraform(struct?: DbInstanceBlueGreenUpdateOutputReference | DbInstanceBlueGreenUpdate): any;
export declare function dbInstanceBlueGreenUpdateToHclTerraform(struct?: DbInstanceBlueGreenUpdateOutputReference | DbInstanceBlueGreenUpdate): any;
export declare class DbInstanceBlueGreenUpdateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceBlueGreenUpdate | undefined;
    set internalValue(value: DbInstanceBlueGreenUpdate | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DbInstanceRestoreToPointInTime {
    /** (Optional) The date and time to restore from. Value must be a time in Universal Coordinated Time (UTC) format and must be before the latest restorable time for the DB instance. Cannot be specified with `useLatestRestorableTime`. */
    readonly restoreTime?: string;
    /** (Optional) The ARN of the automated backup from which to restore. Required if `sourceDbInstanceIdentifier` or `sourceDbiResourceId` is not specified. */
    readonly sourceDbInstanceAutomatedBackupsArn?: string;
    /** (Optional) The identifier of the source DB instance from which to restore. Must match the identifier of an existing DB instance. Required if `sourceDbInstanceAutomatedBackupsArn` or `sourceDbiResourceId` is not specified. */
    readonly sourceDbInstanceIdentifier?: string;
    /** (Optional) The resource ID of the source DB instance from which to restore. Required if `sourceDbInstanceIdentifier` or `sourceDbInstanceAutomatedBackupsArn` is not specified. */
    readonly sourceDbiResourceId?: string;
    /** (Optional) A boolean value that indicates whether the DB instance is restored from the latest backup time. Defaults to `false`. Cannot be specified with `restoreTime`. */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}
export declare function dbInstanceRestoreToPointInTimeToTerraform(struct?: DbInstanceRestoreToPointInTimeOutputReference | DbInstanceRestoreToPointInTime): any;
export declare function dbInstanceRestoreToPointInTimeToHclTerraform(struct?: DbInstanceRestoreToPointInTimeOutputReference | DbInstanceRestoreToPointInTime): any;
export declare class DbInstanceRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceRestoreToPointInTime | undefined;
    set internalValue(value: DbInstanceRestoreToPointInTime | undefined);
    private _restoreTime?;
    get restoreTime(): string;
    set restoreTime(value: string);
    resetRestoreTime(): void;
    get restoreTimeInput(): string | undefined;
    private _sourceDbInstanceAutomatedBackupsArn?;
    get sourceDbInstanceAutomatedBackupsArn(): string;
    set sourceDbInstanceAutomatedBackupsArn(value: string);
    resetSourceDbInstanceAutomatedBackupsArn(): void;
    get sourceDbInstanceAutomatedBackupsArnInput(): string | undefined;
    private _sourceDbInstanceIdentifier?;
    get sourceDbInstanceIdentifier(): string;
    set sourceDbInstanceIdentifier(value: string);
    resetSourceDbInstanceIdentifier(): void;
    get sourceDbInstanceIdentifierInput(): string | undefined;
    private _sourceDbiResourceId?;
    get sourceDbiResourceId(): string;
    set sourceDbiResourceId(value: string);
    resetSourceDbiResourceId(): void;
    get sourceDbiResourceIdInput(): string | undefined;
    private _useLatestRestorableTime?;
    get useLatestRestorableTime(): boolean | cdktf.IResolvable;
    set useLatestRestorableTime(value: boolean | cdktf.IResolvable);
    resetUseLatestRestorableTime(): void;
    get useLatestRestorableTimeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DbInstanceS3Import {
    /** (Required) The bucket name where your backup is stored */
    readonly bucketName: string;
    /** (Optional) Can be blank, but is the path to your backup */
    readonly bucketPrefix?: string;
    /** (Required) Role applied to load the data. */
    readonly ingestionRole: string;
    /** (Required, as of Feb 2018 only 'mysql' supported) Source engine for the backup */
    readonly sourceEngine: string;
    /** (Required, as of Feb 2018 only '5.6' supported) Version of the source engine used to make the backup This will not recreate the resource if the S3 object changes in some way.  It's only used to initialize the database. */
    readonly sourceEngineVersion: string;
}
export declare function dbInstanceS3ImportToTerraform(struct?: DbInstanceS3ImportOutputReference | DbInstanceS3Import): any;
export declare function dbInstanceS3ImportToHclTerraform(struct?: DbInstanceS3ImportOutputReference | DbInstanceS3Import): any;
export declare class DbInstanceS3ImportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceS3Import | undefined;
    set internalValue(value: DbInstanceS3Import | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _ingestionRole?;
    get ingestionRole(): string;
    set ingestionRole(value: string);
    get ingestionRoleInput(): string | undefined;
    private _sourceEngine?;
    get sourceEngine(): string;
    set sourceEngine(value: string);
    get sourceEngineInput(): string | undefined;
    private _sourceEngineVersion?;
    get sourceEngineVersion(): string;
    set sourceEngineVersion(value: string);
    get sourceEngineVersionInput(): string | undefined;
}
export interface DbInstanceTimeouts {
    /** (Default `40m`) - `update` - (Default `80m`) - `delete` - (Default `60m`) */
    readonly create?: string;
    /** (Default `60m`) */
    readonly delete?: string;
    /** (Default `80m`) - `delete` - (Default `60m`) */
    readonly update?: string;
}
export declare function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any;
export declare function dbInstanceTimeoutsToHclTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any;
export declare class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbInstanceTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance aws_db_instance}
*/
export declare class DbInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_instance";
    /**
    * Generates CDKTF code for importing a DbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbInstance to import
    * @param importFromId The id of the existing DbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_instance aws_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DbInstanceConfig);
    get address(): string;
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number | undefined;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number | undefined;
    private _backupTarget?;
    get backupTarget(): string;
    set backupTarget(value: string);
    resetBackupTarget(): void;
    get backupTargetInput(): string | undefined;
    private _backupWindow?;
    get backupWindow(): string;
    set backupWindow(value: string);
    resetBackupWindow(): void;
    get backupWindowInput(): string | undefined;
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string | undefined;
    private _characterSetName?;
    get characterSetName(): string;
    set characterSetName(value: string);
    resetCharacterSetName(): void;
    get characterSetNameInput(): string | undefined;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    private _customIamInstanceProfile?;
    get customIamInstanceProfile(): string;
    set customIamInstanceProfile(value: string);
    resetCustomIamInstanceProfile(): void;
    get customIamInstanceProfileInput(): string | undefined;
    private _customerOwnedIpEnabled?;
    get customerOwnedIpEnabled(): boolean | cdktf.IResolvable;
    set customerOwnedIpEnabled(value: boolean | cdktf.IResolvable);
    resetCustomerOwnedIpEnabled(): void;
    get customerOwnedIpEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _databaseInsightsMode?;
    get databaseInsightsMode(): string;
    set databaseInsightsMode(value: string);
    resetDatabaseInsightsMode(): void;
    get databaseInsightsModeInput(): string | undefined;
    private _dbName?;
    get dbName(): string;
    set dbName(value: string);
    resetDbName(): void;
    get dbNameInput(): string | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    private _dedicatedLogVolume?;
    get dedicatedLogVolume(): boolean | cdktf.IResolvable;
    set dedicatedLogVolume(value: boolean | cdktf.IResolvable);
    resetDedicatedLogVolume(): void;
    get dedicatedLogVolumeInput(): boolean | cdktf.IResolvable | undefined;
    private _deleteAutomatedBackups?;
    get deleteAutomatedBackups(): boolean | cdktf.IResolvable;
    set deleteAutomatedBackups(value: boolean | cdktf.IResolvable);
    resetDeleteAutomatedBackups(): void;
    get deleteAutomatedBackupsInput(): boolean | cdktf.IResolvable | undefined;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _domainAuthSecretArn?;
    get domainAuthSecretArn(): string;
    set domainAuthSecretArn(value: string);
    resetDomainAuthSecretArn(): void;
    get domainAuthSecretArnInput(): string | undefined;
    private _domainDnsIps?;
    get domainDnsIps(): string[];
    set domainDnsIps(value: string[]);
    resetDomainDnsIps(): void;
    get domainDnsIpsInput(): string[] | undefined;
    private _domainFqdn?;
    get domainFqdn(): string;
    set domainFqdn(value: string);
    resetDomainFqdn(): void;
    get domainFqdnInput(): string | undefined;
    private _domainIamRoleName?;
    get domainIamRoleName(): string;
    set domainIamRoleName(value: string);
    resetDomainIamRoleName(): void;
    get domainIamRoleNameInput(): string | undefined;
    private _domainOu?;
    get domainOu(): string;
    set domainOu(value: string);
    resetDomainOu(): void;
    get domainOuInput(): string | undefined;
    private _enabledCloudwatchLogsExports?;
    get enabledCloudwatchLogsExports(): string[];
    set enabledCloudwatchLogsExports(value: string[]);
    resetEnabledCloudwatchLogsExports(): void;
    get enabledCloudwatchLogsExportsInput(): string[] | undefined;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineLifecycleSupport?;
    get engineLifecycleSupport(): string;
    set engineLifecycleSupport(value: string);
    resetEngineLifecycleSupport(): void;
    get engineLifecycleSupportInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get engineVersionActual(): string;
    private _finalSnapshotIdentifier?;
    get finalSnapshotIdentifier(): string;
    set finalSnapshotIdentifier(value: string);
    resetFinalSnapshotIdentifier(): void;
    get finalSnapshotIdentifierInput(): string | undefined;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean | cdktf.IResolvable;
    set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string | undefined;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get latestRestorableTime(): string;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string | undefined;
    private _listenerEndpoint;
    get listenerEndpoint(): DbInstanceListenerEndpointList;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _manageMasterUserPassword?;
    get manageMasterUserPassword(): boolean | cdktf.IResolvable;
    set manageMasterUserPassword(value: boolean | cdktf.IResolvable);
    resetManageMasterUserPassword(): void;
    get manageMasterUserPasswordInput(): boolean | cdktf.IResolvable | undefined;
    private _masterUserSecret;
    get masterUserSecret(): DbInstanceMasterUserSecretList;
    private _masterUserSecretKmsKeyId?;
    get masterUserSecretKmsKeyId(): string;
    set masterUserSecretKmsKeyId(value: string);
    resetMasterUserSecretKmsKeyId(): void;
    get masterUserSecretKmsKeyIdInput(): string | undefined;
    private _maxAllocatedStorage?;
    get maxAllocatedStorage(): number;
    set maxAllocatedStorage(value: number);
    resetMaxAllocatedStorage(): void;
    get maxAllocatedStorageInput(): number | undefined;
    private _monitoringInterval?;
    get monitoringInterval(): number;
    set monitoringInterval(value: number);
    resetMonitoringInterval(): void;
    get monitoringIntervalInput(): number | undefined;
    private _monitoringRoleArn?;
    get monitoringRoleArn(): string;
    set monitoringRoleArn(value: string);
    resetMonitoringRoleArn(): void;
    get monitoringRoleArnInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _ncharCharacterSetName?;
    get ncharCharacterSetName(): string;
    set ncharCharacterSetName(value: string);
    resetNcharCharacterSetName(): void;
    get ncharCharacterSetNameInput(): string | undefined;
    private _networkType?;
    get networkType(): string;
    set networkType(value: string);
    resetNetworkType(): void;
    get networkTypeInput(): string | undefined;
    private _optionGroupName?;
    get optionGroupName(): string;
    set optionGroupName(value: string);
    resetOptionGroupName(): void;
    get optionGroupNameInput(): string | undefined;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _passwordWo?;
    get passwordWo(): string;
    set passwordWo(value: string);
    resetPasswordWo(): void;
    get passwordWoInput(): string | undefined;
    private _passwordWoVersion?;
    get passwordWoVersion(): number;
    set passwordWoVersion(value: number);
    resetPasswordWoVersion(): void;
    get passwordWoVersionInput(): number | undefined;
    private _performanceInsightsEnabled?;
    get performanceInsightsEnabled(): boolean | cdktf.IResolvable;
    set performanceInsightsEnabled(value: boolean | cdktf.IResolvable);
    resetPerformanceInsightsEnabled(): void;
    get performanceInsightsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _performanceInsightsKmsKeyId?;
    get performanceInsightsKmsKeyId(): string;
    set performanceInsightsKmsKeyId(value: string);
    resetPerformanceInsightsKmsKeyId(): void;
    get performanceInsightsKmsKeyIdInput(): string | undefined;
    private _performanceInsightsRetentionPeriod?;
    get performanceInsightsRetentionPeriod(): number;
    set performanceInsightsRetentionPeriod(value: number);
    resetPerformanceInsightsRetentionPeriod(): void;
    get performanceInsightsRetentionPeriodInput(): number | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable | undefined;
    private _replicaMode?;
    get replicaMode(): string;
    set replicaMode(value: string);
    resetReplicaMode(): void;
    get replicaModeInput(): string | undefined;
    get replicas(): string[];
    private _replicateSourceDb?;
    get replicateSourceDb(): string;
    set replicateSourceDb(value: string);
    resetReplicateSourceDb(): void;
    get replicateSourceDbInput(): string | undefined;
    get resourceId(): string;
    private _skipFinalSnapshot?;
    get skipFinalSnapshot(): boolean | cdktf.IResolvable;
    set skipFinalSnapshot(value: boolean | cdktf.IResolvable);
    resetSkipFinalSnapshot(): void;
    get skipFinalSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    private _snapshotIdentifier?;
    get snapshotIdentifier(): string;
    set snapshotIdentifier(value: string);
    resetSnapshotIdentifier(): void;
    get snapshotIdentifierInput(): string | undefined;
    get status(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _storageThroughput?;
    get storageThroughput(): number;
    set storageThroughput(value: number);
    resetStorageThroughput(): void;
    get storageThroughputInput(): number | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _upgradeStorageConfig?;
    get upgradeStorageConfig(): boolean | cdktf.IResolvable;
    set upgradeStorageConfig(value: boolean | cdktf.IResolvable);
    resetUpgradeStorageConfig(): void;
    get upgradeStorageConfigInput(): boolean | cdktf.IResolvable | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _blueGreenUpdate;
    get blueGreenUpdate(): DbInstanceBlueGreenUpdateOutputReference;
    putBlueGreenUpdate(value: DbInstanceBlueGreenUpdate): void;
    resetBlueGreenUpdate(): void;
    get blueGreenUpdateInput(): DbInstanceBlueGreenUpdate | undefined;
    private _restoreToPointInTime;
    get restoreToPointInTime(): DbInstanceRestoreToPointInTimeOutputReference;
    putRestoreToPointInTime(value: DbInstanceRestoreToPointInTime): void;
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): DbInstanceRestoreToPointInTime | undefined;
    private _s3Import;
    get s3Import(): DbInstanceS3ImportOutputReference;
    putS3Import(value: DbInstanceS3Import): void;
    resetS3Import(): void;
    get s3ImportInput(): DbInstanceS3Import | undefined;
    private _timeouts;
    get timeouts(): DbInstanceTimeoutsOutputReference;
    putTimeouts(value: DbInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
