/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterConfig extends cdktf.TerraformMetaArguments {
    /** (Optional, Required for Multi-AZ DB cluster) The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. */
    readonly allocatedStorage?: number;
    /** (Optional) Enable to allow major engine version upgrades when changing engine versions. Defaults to `false`. */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`. See [Amazon RDS Documentation for more information.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html) */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /** (Optional) List of EC2 Availability Zones for the DB cluster storage where DB cluster instances can be created. */
    readonly availabilityZones?: string[];
    /** (Optional) Target backtrack window, in seconds. Only available for `aurora` and `aurora-mysql` engines currently. To disable backtracking, set this value to `0`. Defaults to `0`. Must be between `0` and `259200` (72 hours) */
    readonly backtrackWindow?: number;
    /** (Optional) Days to retain backups for. Default `1` */
    readonly backupRetentionPeriod?: number;
    /** (Optional) The CA certificate identifier to use for the DB cluster's server certificate. */
    readonly caCertificateIdentifier?: string;
    /** (Optional, Forces new resources) The cluster identifier. If omitted, Terraform will assign a random, unique identifier. */
    readonly clusterIdentifier?: string;
    /** (Optional, Forces new resource) Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `clusterIdentifier`. */
    readonly clusterIdentifierPrefix?: string;
    /** */
    readonly clusterMembers?: string[];
    /** (Optional, Forces new resources) Specifies the scalability mode of the Aurora DB cluster. When set to `limitless`, the cluster operates as an Aurora Limitless Database. When set to `standard` (the default), the cluster uses normal DB instance creation. Valid values: `limitless`, `standard`. */
    readonly clusterScalabilityType?: string;
    /** (Optional, boolean) Copy all Cluster `tags` to snapshots. Default is `false`. */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /** (Optional) The mode of Database Insights to enable for the DB cluster. Valid values: `standard`, `advanced`. */
    readonly databaseInsightsMode?: string;
    /** (Optional) Name for an automatically created database on cluster creation. There are different naming restrictions per database engine: [RDS Naming Constraints][5] */
    readonly databaseName?: string;
    /** (Optional, Required for Multi-AZ DB cluster) The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6g.xlarge`. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the Amazon RDS User Guide. */
    readonly dbClusterInstanceClass?: string;
    /** (Optional) A cluster parameter group to associate with the cluster. */
    readonly dbClusterParameterGroupName?: string;
    /** (Optional) Instance parameter group to associate with all instances of the DB cluster. The `dbInstanceParameterGroupName` parameter is only valid in combination with the `allowMajorVersionUpgrade` parameter. */
    readonly dbInstanceParameterGroupName?: string;
    /** (Optional) DB subnet group to associate with this DB cluster. */
    readonly dbSubnetGroupName?: string;
    /** (Optional) For use with RDS Custom. */
    readonly dbSystemId?: string;
    /** (Optional) Specifies whether to remove automated backups immediately after the DB cluster is deleted. Default is `true`. */
    readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
    /** (Optional) If the DB cluster should have deletion protection enabled. */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /** (Optional) The ID of the Directory Service Active Directory domain to create the cluster in. */
    readonly domain?: string;
    /** (Optional, but required if `domain` is provided) The name of the IAM role to be used when making API calls to the Directory Service. */
    readonly domainIamRoleName?: string;
    /** (Optional) Whether cluster should forward writes to an associated global cluster. Applied to secondary clusters to enable them to forward writes to an [`aws_rds_global_cluster`](/docs/providers/aws/r/rds_global_cluster.html)'s primary cluster. See the [User Guide for Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-write-forwarding.html) for more information. */
    readonly enableGlobalWriteForwarding?: boolean | cdktf.IResolvable;
    /** (Optional) Enable HTTP endpoint (data API). Only valid for some combinations of `engineMode`, `engine` and `engineVersion` and only available in some regions. See the [Region and version availability](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html#data-api.regions) section of the documentation. This option also does not work with any of these options specified: `snapshotIdentifier`, `replicationSourceIdentifier`, `s3Import`. */
    readonly enableHttpEndpoint?: boolean | cdktf.IResolvable;
    /** (Optional) Whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.. See the [User Guide for Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-write-forwarding.html) for more information. **NOTE:** Local write forwarding requires Aurora MySQL version 3.04 or higher. */
    readonly enableLocalWriteForwarding?: boolean | cdktf.IResolvable;
    /** (Optional) Set of log types to export to cloudwatch. If omitted, no logs will be exported. The following log types are supported: `audit`, `error`, `general`, `slowquery`, `iam-db-auth-error`, `postgresql` (PostgreSQL). */
    readonly enabledCloudwatchLogsExports?: string[];
    /** (Required) Name of the database engine to be used for this DB cluster. Valid Values: `aurora-mysql`, `aurora-postgresql`, `mysql`, `postgres`. (Note that `mysql` and `postgres` are Multi-AZ RDS clusters). */
    readonly engine: string;
    /** (Optional) The life cycle type for this DB instance. This setting is valid for cluster types Aurora DB clusters and Multi-AZ DB clusters. Valid values are `open-source-rds-extended-support`, `open-source-rds-extended-support-disabled`. Default value is `open-source-rds-extended-support`. [Using Amazon RDS Extended Support]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html */
    readonly engineLifecycleSupport?: string;
    /** (Optional) Database engine mode. Valid values: `global` (only valid for Aurora MySQL 1.21 and earlier), `parallelquery`, `provisioned`, `serverless`. Defaults to: `provisioned`. Specify an empty value (`""`) for no engine mode. See the [RDS User Guide](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) for limitations when using `serverless`. */
    readonly engineMode?: string;
    /** (Optional) Database engine version. Updating this argument results in an outage. See the [Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) and [Aurora Postgres](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.html) documentation for your configured engine to determine this value, or by running `aws rds describe-db-engine-versions`. For example with Aurora MySQL 2, a potential value for this argument is `5.7.mysql_aurora.2.03.2`. The value can contain a partial version where supported by the API. The actual engine version used is returned in the attribute `engineVersionActual`, , see [Attribute Reference](#attribute-reference) below. */
    readonly engineVersion?: string;
    /** (Optional) Name of your final DB snapshot when this DB cluster is deleted. If omitted, no final snapshot will be made. */
    readonly finalSnapshotIdentifier?: string;
    /** (Optional) Global cluster identifier specified on [`aws_rds_global_cluster`](/docs/providers/aws/r/rds_global_cluster.html). */
    readonly globalClusterIdentifier?: string;
    /** (Optional) Specifies whether or not mappings of AWS Identity and Access Management (IAM) accounts to database accounts is enabled. Please see [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) for availability and limitations. */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) List of ARNs for the IAM roles to associate to the RDS Cluster. */
    readonly iamRoles?: string[];
    /** */
    readonly id?: string;
    /** (Optional) Amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. For information about valid Iops values, see [Amazon RDS Provisioned IOPS storage to improve performance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the Amazon RDS User Guide. (This setting is required to create a Multi-AZ DB cluster). Must be a multiple between .5 and 50 of the storage amount for the DB cluster. */
    readonly iops?: number;
    /** (Optional) ARN for the KMS encryption key. When specifying `kmsKeyId`, `storageEncrypted` needs to be set to true. */
    readonly kmsKeyId?: string;
    /** (Optional) Set to true to allow RDS to manage the master user password in Secrets Manager. Cannot be set if `masterPassword` is provided. */
    readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
    /** (Optional, required unless `manageMasterUserPassword` is set to true, a `snapshotIdentifier`, `replicationSourceIdentifier`, or `masterPasswordWo` is provided or unless a `globalClusterIdentifier` is provided when the cluster is the "secondary" cluster of a global database) Password for the master DB user. Note that this may show up in logs, and it will be stored in the state file. Please refer to the [RDS Naming Constraints][5]. Cannot be set if `manageMasterUserPassword` is set to `true`. */
    readonly masterPassword?: string;
    /** */
    readonly masterPasswordWo?: string;
    /** (Optional) Used together with `masterPasswordWo` to trigger an update. Increment this value when an update to the `masterPasswordWo` is required. */
    readonly masterPasswordWoVersion?: number;
    /** (Optional) Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN. If not specified, the default KMS key for your Amazon Web Services account is used. */
    readonly masterUserSecretKmsKeyId?: string;
    /** (Required unless a `snapshotIdentifier` or `replicationSourceIdentifier` is provided or unless a `globalClusterIdentifier` is provided when the cluster is the "secondary" cluster of a global database) Username for the master DB user. Please refer to the [RDS Naming Constraints][5]. This argument does not support in-place updates and cannot be changed during a restore from snapshot. */
    readonly masterUsername?: string;
    /** (Optional) Interval, in seconds, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60. */
    readonly monitoringInterval?: number;
    /** (Optional) ARN for the IAM role that permits RDS to send enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole.html) what IAM permissions are needed to allow Enhanced Monitoring for RDS Clusters. */
    readonly monitoringRoleArn?: string;
    /** (Optional) Network type of the cluster. Valid values: `IPV4`, `DUAL`. */
    readonly networkType?: string;
    /** (Optional) Enables Performance Insights. */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies the KMS Key ID to encrypt Performance Insights data. If not specified, the default RDS KMS key will be used (`aws/rds`). */
    readonly performanceInsightsKmsKeyId?: string;
    /** (Optional) Specifies the amount of time to retain performance insights data for. Defaults to 7 days if Performance Insights are enabled. Valid values are `7`, `month * 31` (where month is a number of months from 1-23), and `731`. See [here](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.Overview.cost.html) for more information on retention periods. */
    readonly performanceInsightsRetentionPeriod?: number;
    /** (Optional) Port on which the DB accepts connections. */
    readonly port?: number;
    /** (Optional) Daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC. Default: A 30-minute window selected at random from an 8-hour block of time per region, e.g. `04:00-09:00`. */
    readonly preferredBackupWindow?: string;
    /** (Optional) Weekly time range during which system maintenance can occur, in (UTC) e.g., `wed:04:00-wed:04:30` */
    readonly preferredMaintenanceWindow?: string;
    /** (Optional) ARN of a source DB cluster or DB instance if this DB cluster is to be created as a Read Replica. **Note:** Removing this attribute after creation will promote the read replica to a standalone cluster. If DB Cluster is part of a Global Cluster, use the [`lifecycle` configuration block `ignore_changes` argument](https://www.terraform.io/docs/configuration/meta-arguments/lifecycle.html#ignore_changes) to prevent Terraform from showing differences for this argument instead of configuring this value. */
    readonly replicationSourceIdentifier?: string;
    /** (Optional) Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `finalSnapshotIdentifier`. Default is `false`. */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /** (Optional) Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot. Conflicts with `globalClusterIdentifier`. Clusters cannot be restored from snapshot **and** joined to an existing global cluster in a single operation. See the [AWS documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-getting-started.html#aurora-global-database.use-snapshot) or the [Global Cluster Restored From Snapshot example](#global-cluster-restored-from-snapshot) for instructions on building a global cluster starting with a snapshot. */
    readonly snapshotIdentifier?: string;
    /** (Optional) The source region for an encrypted replica DB cluster. */
    readonly sourceRegion?: string;
    /** (Optional) Specifies whether the DB cluster is encrypted. The default is `false` for `provisioned` `engineMode` and `true` for `serverless` `engineMode`. When restoring an unencrypted `snapshotIdentifier`, the `kmsKeyId` argument must be provided to encrypt the restored cluster. Terraform will only perform drift detection if a configuration value is provided. */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /** (Optional, Required for Multi-AZ DB cluster) (Forces new for Multi-AZ DB clusters) Specifies the storage type to be associated with the DB cluster. For Aurora DB clusters, `storageType` modifications can be done in-place. For Multi-AZ DB Clusters, the `iops` argument must also be set. Valid values are: `""`, `aurora-iopt1` (Aurora DB Clusters); `io1`, `io2` (Multi-AZ DB Clusters). Default: `""` (Aurora DB Clusters); `io1` (Multi-AZ DB Clusters). */
    readonly storageType?: string;
    /** (Optional) A map of tags to assign to the DB cluster. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) List of VPC security groups to associate with the Cluster For more detailed documentation about each argument, refer to the AWS official documentation: */
    readonly vpcSecurityGroupIds?: string[];
    /** */
    readonly restoreToPointInTime?: RdsClusterRestoreToPointInTime;
    /** */
    readonly s3Import?: RdsClusterS3Import;
    /** */
    readonly scalingConfiguration?: RdsClusterScalingConfiguration;
    /** */
    readonly serverlessv2ScalingConfiguration?: RdsClusterServerlessv2ScalingConfiguration;
    /** */
    readonly timeouts?: RdsClusterTimeouts;
}
export interface RdsClusterMasterUserSecret {
}
export declare function rdsClusterMasterUserSecretToTerraform(struct?: RdsClusterMasterUserSecret): any;
export declare function rdsClusterMasterUserSecretToHclTerraform(struct?: RdsClusterMasterUserSecret): any;
export declare class RdsClusterMasterUserSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RdsClusterMasterUserSecret | undefined;
    set internalValue(value: RdsClusterMasterUserSecret | undefined);
    get kmsKeyId(): string;
    get secretArn(): string;
    get secretStatus(): string;
}
export declare class RdsClusterMasterUserSecretList extends cdktf.ComplexList {
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
    get(index: number): RdsClusterMasterUserSecretOutputReference;
}
export interface RdsClusterRestoreToPointInTime {
    /** (Optional) Date and time in UTC format to restore the database cluster to. Conflicts with `useLatestRestorableTime`. */
    readonly restoreToTime?: string;
    /** (Optional) Type of restore to be performed. */
    readonly restoreType?: string;
    /** (Optional) Identifier of the source database cluster from which to restore. When restoring from a cluster in another AWS account, the identifier is the ARN of that cluster. */
    readonly sourceClusterIdentifier?: string;
    /** (Optional) Cluster resource ID of the source database cluster from which to restore. To be used for restoring a deleted cluster in the same account which still has a retained automatic backup available. */
    readonly sourceClusterResourceId?: string;
    /** (Optional) Set to true to restore the database cluster to the latest restorable backup time. Defaults to false. Conflicts with `restoreToTime`. */
    readonly useLatestRestorableTime?: boolean | cdktf.IResolvable;
}
export declare function rdsClusterRestoreToPointInTimeToTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any;
export declare function rdsClusterRestoreToPointInTimeToHclTerraform(struct?: RdsClusterRestoreToPointInTimeOutputReference | RdsClusterRestoreToPointInTime): any;
export declare class RdsClusterRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterRestoreToPointInTime | undefined;
    set internalValue(value: RdsClusterRestoreToPointInTime | undefined);
    private _restoreToTime?;
    get restoreToTime(): string;
    set restoreToTime(value: string);
    resetRestoreToTime(): void;
    get restoreToTimeInput(): string | undefined;
    private _restoreType?;
    get restoreType(): string;
    set restoreType(value: string);
    resetRestoreType(): void;
    get restoreTypeInput(): string | undefined;
    private _sourceClusterIdentifier?;
    get sourceClusterIdentifier(): string;
    set sourceClusterIdentifier(value: string);
    resetSourceClusterIdentifier(): void;
    get sourceClusterIdentifierInput(): string | undefined;
    private _sourceClusterResourceId?;
    get sourceClusterResourceId(): string;
    set sourceClusterResourceId(value: string);
    resetSourceClusterResourceId(): void;
    get sourceClusterResourceIdInput(): string | undefined;
    private _useLatestRestorableTime?;
    get useLatestRestorableTime(): boolean | cdktf.IResolvable;
    set useLatestRestorableTime(value: boolean | cdktf.IResolvable);
    resetUseLatestRestorableTime(): void;
    get useLatestRestorableTimeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface RdsClusterS3Import {
    /** (Required) Bucket name where your backup is stored */
    readonly bucketName: string;
    /** (Optional) Can be blank, but is the path to your backup */
    readonly bucketPrefix?: string;
    /** (Required) Role applied to load the data. */
    readonly ingestionRole: string;
    /** (Required) Source engine for the backup */
    readonly sourceEngine: string;
    /** (Required) Version of the source engine used to make the backup This will not recreate the resource if the S3 object changes in some way. It's only used to initialize the database. This only works currently with the aurora engine. See AWS for currently supported engines and options. See [Aurora S3 Migration Docs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3). */
    readonly sourceEngineVersion: string;
}
export declare function rdsClusterS3ImportToTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any;
export declare function rdsClusterS3ImportToHclTerraform(struct?: RdsClusterS3ImportOutputReference | RdsClusterS3Import): any;
export declare class RdsClusterS3ImportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterS3Import | undefined;
    set internalValue(value: RdsClusterS3Import | undefined);
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
export interface RdsClusterScalingConfiguration {
    /** (Optional) Whether to enable automatic pause. A DB cluster can be paused only when it's idle (it has no connections). If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it. Defaults to `true`. */
    readonly autoPause?: boolean | cdktf.IResolvable;
    /** (Optional) Maximum capacity for an Aurora DB cluster in `serverless` DB engine mode. The maximum capacity must be greater than or equal to the minimum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `16`. */
    readonly maxCapacity?: number;
    /** (Optional) Minimum capacity for an Aurora DB cluster in `serverless` DB engine mode. The minimum capacity must be lesser than or equal to the maximum capacity. Valid Aurora MySQL capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `256`. Valid Aurora PostgreSQL capacity values are (`2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`). Defaults to `1`. */
    readonly minCapacity?: number;
    /** (Optional) Amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. Valid values are `60` through `600`. Defaults to `300`. */
    readonly secondsBeforeTimeout?: number;
    /** (Optional) Time, in seconds, before an Aurora DB cluster in serverless mode is paused. Valid values are `300` through `86400`. Defaults to `300`. */
    readonly secondsUntilAutoPause?: number;
    /** (Optional) Action to take when the timeout is reached. Valid values: `ForceApplyCapacityChange`, `RollbackCapacityChange`. Defaults to `RollbackCapacityChange`. See [documentation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v1.how-it-works.html#aurora-serverless.how-it-works.timeout-action). */
    readonly timeoutAction?: string;
}
export declare function rdsClusterScalingConfigurationToTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any;
export declare function rdsClusterScalingConfigurationToHclTerraform(struct?: RdsClusterScalingConfigurationOutputReference | RdsClusterScalingConfiguration): any;
export declare class RdsClusterScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterScalingConfiguration | undefined;
    set internalValue(value: RdsClusterScalingConfiguration | undefined);
    private _autoPause?;
    get autoPause(): boolean | cdktf.IResolvable;
    set autoPause(value: boolean | cdktf.IResolvable);
    resetAutoPause(): void;
    get autoPauseInput(): boolean | cdktf.IResolvable | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _minCapacity?;
    get minCapacity(): number;
    set minCapacity(value: number);
    resetMinCapacity(): void;
    get minCapacityInput(): number | undefined;
    private _secondsBeforeTimeout?;
    get secondsBeforeTimeout(): number;
    set secondsBeforeTimeout(value: number);
    resetSecondsBeforeTimeout(): void;
    get secondsBeforeTimeoutInput(): number | undefined;
    private _secondsUntilAutoPause?;
    get secondsUntilAutoPause(): number;
    set secondsUntilAutoPause(value: number);
    resetSecondsUntilAutoPause(): void;
    get secondsUntilAutoPauseInput(): number | undefined;
    private _timeoutAction?;
    get timeoutAction(): string;
    set timeoutAction(value: string);
    resetTimeoutAction(): void;
    get timeoutActionInput(): string | undefined;
}
export interface RdsClusterServerlessv2ScalingConfiguration {
    /** (Required) Maximum capacity for an Aurora DB cluster in `provisioned` DB engine mode. The maximum capacity must be greater than or equal to the minimum capacity. Valid capacity values are in a range of `0` up to `256` in steps of `0.5`. */
    readonly maxCapacity: number;
    /** (Required) Minimum capacity for an Aurora DB cluster in `provisioned` DB engine mode. The minimum capacity must be lesser than or equal to the maximum capacity. Valid capacity values are in a range of `0` up to `256` in steps of `0.5`. */
    readonly minCapacity: number;
    /** (Optional) Time, in seconds, before an Aurora DB cluster in `provisioned` DB engine mode is paused. Valid values are `300` through `86400`. */
    readonly secondsUntilAutoPause?: number;
}
export declare function rdsClusterServerlessv2ScalingConfigurationToTerraform(struct?: RdsClusterServerlessv2ScalingConfigurationOutputReference | RdsClusterServerlessv2ScalingConfiguration): any;
export declare function rdsClusterServerlessv2ScalingConfigurationToHclTerraform(struct?: RdsClusterServerlessv2ScalingConfigurationOutputReference | RdsClusterServerlessv2ScalingConfiguration): any;
export declare class RdsClusterServerlessv2ScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterServerlessv2ScalingConfiguration | undefined;
    set internalValue(value: RdsClusterServerlessv2ScalingConfiguration | undefined);
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    get maxCapacityInput(): number | undefined;
    private _minCapacity?;
    get minCapacity(): number;
    set minCapacity(value: number);
    get minCapacityInput(): number | undefined;
    private _secondsUntilAutoPause?;
    get secondsUntilAutoPause(): number;
    set secondsUntilAutoPause(value: number);
    resetSecondsUntilAutoPause(): void;
    get secondsUntilAutoPauseInput(): number | undefined;
}
export interface RdsClusterTimeouts {
    /** (Default `120m`) - `update` - (Default `120m`) - `delete` - (Default `120m`) any cleanup task during the destroying process. */
    readonly create?: string;
    /** (Default `120m`) any cleanup task during the destroying process. */
    readonly delete?: string;
    /** (Default `120m`) - `delete` - (Default `120m`) any cleanup task during the destroying process. */
    readonly update?: string;
}
export declare function rdsClusterTimeoutsToTerraform(struct?: RdsClusterTimeouts | cdktf.IResolvable): any;
export declare function rdsClusterTimeoutsToHclTerraform(struct?: RdsClusterTimeouts | cdktf.IResolvable): any;
export declare class RdsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsClusterTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster aws_rds_cluster}
*/
export declare class RdsCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster";
    /**
    * Generates CDKTF code for importing a RdsCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsCluster to import
    * @param importFromId The id of the existing RdsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster aws_rds_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterConfig);
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
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _backtrackWindow?;
    get backtrackWindow(): number;
    set backtrackWindow(value: number);
    resetBacktrackWindow(): void;
    get backtrackWindowInput(): number | undefined;
    private _backupRetentionPeriod?;
    get backupRetentionPeriod(): number;
    set backupRetentionPeriod(value: number);
    resetBackupRetentionPeriod(): void;
    get backupRetentionPeriodInput(): number | undefined;
    private _caCertificateIdentifier?;
    get caCertificateIdentifier(): string;
    set caCertificateIdentifier(value: string);
    resetCaCertificateIdentifier(): void;
    get caCertificateIdentifierInput(): string | undefined;
    get caCertificateValidTill(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string | undefined;
    private _clusterIdentifierPrefix?;
    get clusterIdentifierPrefix(): string;
    set clusterIdentifierPrefix(value: string);
    resetClusterIdentifierPrefix(): void;
    get clusterIdentifierPrefixInput(): string | undefined;
    private _clusterMembers?;
    get clusterMembers(): string[];
    set clusterMembers(value: string[]);
    resetClusterMembers(): void;
    get clusterMembersInput(): string[] | undefined;
    get clusterResourceId(): string;
    private _clusterScalabilityType?;
    get clusterScalabilityType(): string;
    set clusterScalabilityType(value: string);
    resetClusterScalabilityType(): void;
    get clusterScalabilityTypeInput(): string | undefined;
    private _copyTagsToSnapshot?;
    get copyTagsToSnapshot(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshot(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshot(): void;
    get copyTagsToSnapshotInput(): boolean | cdktf.IResolvable | undefined;
    private _databaseInsightsMode?;
    get databaseInsightsMode(): string;
    set databaseInsightsMode(value: string);
    resetDatabaseInsightsMode(): void;
    get databaseInsightsModeInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _dbClusterInstanceClass?;
    get dbClusterInstanceClass(): string;
    set dbClusterInstanceClass(value: string);
    resetDbClusterInstanceClass(): void;
    get dbClusterInstanceClassInput(): string | undefined;
    private _dbClusterParameterGroupName?;
    get dbClusterParameterGroupName(): string;
    set dbClusterParameterGroupName(value: string);
    resetDbClusterParameterGroupName(): void;
    get dbClusterParameterGroupNameInput(): string | undefined;
    private _dbInstanceParameterGroupName?;
    get dbInstanceParameterGroupName(): string;
    set dbInstanceParameterGroupName(value: string);
    resetDbInstanceParameterGroupName(): void;
    get dbInstanceParameterGroupNameInput(): string | undefined;
    private _dbSubnetGroupName?;
    get dbSubnetGroupName(): string;
    set dbSubnetGroupName(value: string);
    resetDbSubnetGroupName(): void;
    get dbSubnetGroupNameInput(): string | undefined;
    private _dbSystemId?;
    get dbSystemId(): string;
    set dbSystemId(value: string);
    resetDbSystemId(): void;
    get dbSystemIdInput(): string | undefined;
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
    private _domainIamRoleName?;
    get domainIamRoleName(): string;
    set domainIamRoleName(value: string);
    resetDomainIamRoleName(): void;
    get domainIamRoleNameInput(): string | undefined;
    private _enableGlobalWriteForwarding?;
    get enableGlobalWriteForwarding(): boolean | cdktf.IResolvable;
    set enableGlobalWriteForwarding(value: boolean | cdktf.IResolvable);
    resetEnableGlobalWriteForwarding(): void;
    get enableGlobalWriteForwardingInput(): boolean | cdktf.IResolvable | undefined;
    private _enableHttpEndpoint?;
    get enableHttpEndpoint(): boolean | cdktf.IResolvable;
    set enableHttpEndpoint(value: boolean | cdktf.IResolvable);
    resetEnableHttpEndpoint(): void;
    get enableHttpEndpointInput(): boolean | cdktf.IResolvable | undefined;
    private _enableLocalWriteForwarding?;
    get enableLocalWriteForwarding(): boolean | cdktf.IResolvable;
    set enableLocalWriteForwarding(value: boolean | cdktf.IResolvable);
    resetEnableLocalWriteForwarding(): void;
    get enableLocalWriteForwardingInput(): boolean | cdktf.IResolvable | undefined;
    private _enabledCloudwatchLogsExports?;
    get enabledCloudwatchLogsExports(): string[];
    set enabledCloudwatchLogsExports(value: string[]);
    resetEnabledCloudwatchLogsExports(): void;
    get enabledCloudwatchLogsExportsInput(): string[] | undefined;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    private _engineLifecycleSupport?;
    get engineLifecycleSupport(): string;
    set engineLifecycleSupport(value: string);
    resetEngineLifecycleSupport(): void;
    get engineLifecycleSupportInput(): string | undefined;
    private _engineMode?;
    get engineMode(): string;
    set engineMode(value: string);
    resetEngineMode(): void;
    get engineModeInput(): string | undefined;
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
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    resetGlobalClusterIdentifier(): void;
    get globalClusterIdentifierInput(): string | undefined;
    get hostedZoneId(): string;
    private _iamDatabaseAuthenticationEnabled?;
    get iamDatabaseAuthenticationEnabled(): boolean | cdktf.IResolvable;
    set iamDatabaseAuthenticationEnabled(value: boolean | cdktf.IResolvable);
    resetIamDatabaseAuthenticationEnabled(): void;
    get iamDatabaseAuthenticationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _manageMasterUserPassword?;
    get manageMasterUserPassword(): boolean | cdktf.IResolvable;
    set manageMasterUserPassword(value: boolean | cdktf.IResolvable);
    resetManageMasterUserPassword(): void;
    get manageMasterUserPasswordInput(): boolean | cdktf.IResolvable | undefined;
    private _masterPassword?;
    get masterPassword(): string;
    set masterPassword(value: string);
    resetMasterPassword(): void;
    get masterPasswordInput(): string | undefined;
    private _masterPasswordWo?;
    get masterPasswordWo(): string;
    set masterPasswordWo(value: string);
    resetMasterPasswordWo(): void;
    get masterPasswordWoInput(): string | undefined;
    private _masterPasswordWoVersion?;
    get masterPasswordWoVersion(): number;
    set masterPasswordWoVersion(value: number);
    resetMasterPasswordWoVersion(): void;
    get masterPasswordWoVersionInput(): number | undefined;
    private _masterUserSecret;
    get masterUserSecret(): RdsClusterMasterUserSecretList;
    private _masterUserSecretKmsKeyId?;
    get masterUserSecretKmsKeyId(): string;
    set masterUserSecretKmsKeyId(value: string);
    resetMasterUserSecretKmsKeyId(): void;
    get masterUserSecretKmsKeyIdInput(): string | undefined;
    private _masterUsername?;
    get masterUsername(): string;
    set masterUsername(value: string);
    resetMasterUsername(): void;
    get masterUsernameInput(): string | undefined;
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
    private _networkType?;
    get networkType(): string;
    set networkType(value: string);
    resetNetworkType(): void;
    get networkTypeInput(): string | undefined;
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
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    get readerEndpoint(): string;
    private _replicationSourceIdentifier?;
    get replicationSourceIdentifier(): string;
    set replicationSourceIdentifier(value: string);
    resetReplicationSourceIdentifier(): void;
    get replicationSourceIdentifierInput(): string | undefined;
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
    private _sourceRegion?;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    resetSourceRegion(): void;
    get sourceRegionInput(): string | undefined;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable | undefined;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _restoreToPointInTime;
    get restoreToPointInTime(): RdsClusterRestoreToPointInTimeOutputReference;
    putRestoreToPointInTime(value: RdsClusterRestoreToPointInTime): void;
    resetRestoreToPointInTime(): void;
    get restoreToPointInTimeInput(): RdsClusterRestoreToPointInTime | undefined;
    private _s3Import;
    get s3Import(): RdsClusterS3ImportOutputReference;
    putS3Import(value: RdsClusterS3Import): void;
    resetS3Import(): void;
    get s3ImportInput(): RdsClusterS3Import | undefined;
    private _scalingConfiguration;
    get scalingConfiguration(): RdsClusterScalingConfigurationOutputReference;
    putScalingConfiguration(value: RdsClusterScalingConfiguration): void;
    resetScalingConfiguration(): void;
    get scalingConfigurationInput(): RdsClusterScalingConfiguration | undefined;
    private _serverlessv2ScalingConfiguration;
    get serverlessv2ScalingConfiguration(): RdsClusterServerlessv2ScalingConfigurationOutputReference;
    putServerlessv2ScalingConfiguration(value: RdsClusterServerlessv2ScalingConfiguration): void;
    resetServerlessv2ScalingConfiguration(): void;
    get serverlessv2ScalingConfigurationInput(): RdsClusterServerlessv2ScalingConfiguration | undefined;
    private _timeouts;
    get timeouts(): RdsClusterTimeoutsOutputReference;
    putTimeouts(value: RdsClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
