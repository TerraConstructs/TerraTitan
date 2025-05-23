/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#allocated_storage DbInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#apply_immediately DbInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#availability_zone DbInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#backup_retention_period DbInstance#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#backup_target DbInstance#backup_target}
    */
    readonly backupTarget?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#backup_window DbInstance#backup_window}
    */
    readonly backupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#character_set_name DbInstance#character_set_name}
    */
    readonly characterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}
    */
    readonly customIamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}
    */
    readonly customerOwnedIpEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#db_name DbInstance#db_name}
    */
    readonly dbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#dedicated_log_volume DbInstance#dedicated_log_volume}
    */
    readonly dedicatedLogVolume?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#delete_automated_backups DbInstance#delete_automated_backups}
    */
    readonly deleteAutomatedBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#deletion_protection DbInstance#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain DbInstance#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain_auth_secret_arn DbInstance#domain_auth_secret_arn}
    */
    readonly domainAuthSecretArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain_dns_ips DbInstance#domain_dns_ips}
    */
    readonly domainDnsIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain_fqdn DbInstance#domain_fqdn}
    */
    readonly domainFqdn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}
    */
    readonly domainIamRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#domain_ou DbInstance#domain_ou}
    */
    readonly domainOu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}
    */
    readonly enabledCloudwatchLogsExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#engine DbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#engine_lifecycle_support DbInstance#engine_lifecycle_support}
    */
    readonly engineLifecycleSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#engine_version DbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}
    */
    readonly finalSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}
    */
    readonly iamDatabaseAuthenticationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#id DbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#identifier DbInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#identifier_prefix DbInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#instance_class DbInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#iops DbInstance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#kms_key_id DbInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#license_model DbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#maintenance_window DbInstance#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#manage_master_user_password DbInstance#manage_master_user_password}
    */
    readonly manageMasterUserPassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#master_user_secret_kms_key_id DbInstance#master_user_secret_kms_key_id}
    */
    readonly masterUserSecretKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#max_allocated_storage DbInstance#max_allocated_storage}
    */
    readonly maxAllocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#monitoring_interval DbInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#multi_az DbInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}
    */
    readonly ncharCharacterSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#network_type DbInstance#network_type}
    */
    readonly networkType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#option_group_name DbInstance#option_group_name}
    */
    readonly optionGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#parameter_group_name DbInstance#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#password DbInstance#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#password_wo DbInstance#password_wo}
    */
    readonly passwordWo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#password_wo_version DbInstance#password_wo_version}
    */
    readonly passwordWoVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#port DbInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#publicly_accessible DbInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#replica_mode DbInstance#replica_mode}
    */
    readonly replicaMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#replicate_source_db DbInstance#replicate_source_db}
    */
    readonly replicateSourceDb?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}
    */
    readonly skipFinalSnapshot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#snapshot_identifier DbInstance#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#storage_encrypted DbInstance#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#storage_throughput DbInstance#storage_throughput}
    */
    readonly storageThroughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#storage_type DbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#tags DbInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#tags_all DbInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#timezone DbInstance#timezone}
    */
    readonly timezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#upgrade_storage_config DbInstance#upgrade_storage_config}
    */
    readonly upgradeStorageConfig?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#username DbInstance#username}
    */
    readonly username?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * blue_green_update block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#blue_green_update DbInstance#blue_green_update}
    */
    readonly blueGreenUpdate?: DbInstanceBlueGreenUpdate;
    /**
    * restore_to_point_in_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}
    */
    readonly restoreToPointInTime?: DbInstanceRestoreToPointInTime;
    /**
    * s3_import block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#s3_import DbInstance#s3_import}
    */
    readonly s3Import?: DbInstanceS3Import;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#timeouts DbInstance#timeouts}
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#enabled DbInstance#enabled}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#restore_time DbInstance#restore_time}
    */
    readonly restoreTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}
    */
    readonly sourceDbInstanceAutomatedBackupsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}
    */
    readonly sourceDbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}
    */
    readonly sourceDbiResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#bucket_name DbInstance#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#bucket_prefix DbInstance#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#ingestion_role DbInstance#ingestion_role}
    */
    readonly ingestionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#source_engine DbInstance#source_engine}
    */
    readonly sourceEngine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#source_engine_version DbInstance#source_engine_version}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#create DbInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#delete DbInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#update DbInstance#update}
    */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance aws_db_instance}
*/
export declare class DbInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_instance";
    /**
    * Generates CDKTF code for importing a DbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbInstance to import
    * @param importFromId The id of the existing DbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance aws_db_instance} Resource
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
