/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}
    */
    readonly autoImportPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}
    */
    readonly driveCacheType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}
    */
    readonly efaEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}
    */
    readonly exportPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}
    */
    readonly fileSystemTypeVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}
    */
    readonly finalBackupTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}
    */
    readonly importPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}
    */
    readonly importedFileChunkSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}
    */
    readonly logConfiguration?: FsxLustreFileSystemLogConfiguration;
    /**
    * metadata_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#metadata_configuration FsxLustreFileSystem#metadata_configuration}
    */
    readonly metadataConfiguration?: FsxLustreFileSystemMetadataConfiguration;
    /**
    * root_squash_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#root_squash_configuration FsxLustreFileSystem#root_squash_configuration}
    */
    readonly rootSquashConfiguration?: FsxLustreFileSystemRootSquashConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}
    */
    readonly timeouts?: FsxLustreFileSystemTimeouts;
}
export interface FsxLustreFileSystemLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}
    */
    readonly level?: string;
}
export declare function fsxLustreFileSystemLogConfigurationToTerraform(struct?: FsxLustreFileSystemLogConfigurationOutputReference | FsxLustreFileSystemLogConfiguration): any;
export declare function fsxLustreFileSystemLogConfigurationToHclTerraform(struct?: FsxLustreFileSystemLogConfigurationOutputReference | FsxLustreFileSystemLogConfiguration): any;
export declare class FsxLustreFileSystemLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxLustreFileSystemLogConfiguration | undefined;
    set internalValue(value: FsxLustreFileSystemLogConfiguration | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    resetDestination(): void;
    get destinationInput(): string | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string | undefined;
}
export interface FsxLustreFileSystemMetadataConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}
    */
    readonly mode?: string;
}
export declare function fsxLustreFileSystemMetadataConfigurationToTerraform(struct?: FsxLustreFileSystemMetadataConfigurationOutputReference | FsxLustreFileSystemMetadataConfiguration): any;
export declare function fsxLustreFileSystemMetadataConfigurationToHclTerraform(struct?: FsxLustreFileSystemMetadataConfigurationOutputReference | FsxLustreFileSystemMetadataConfiguration): any;
export declare class FsxLustreFileSystemMetadataConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxLustreFileSystemMetadataConfiguration | undefined;
    set internalValue(value: FsxLustreFileSystemMetadataConfiguration | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
}
export interface FsxLustreFileSystemRootSquashConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}
    */
    readonly noSquashNids?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}
    */
    readonly rootSquash?: string;
}
export declare function fsxLustreFileSystemRootSquashConfigurationToTerraform(struct?: FsxLustreFileSystemRootSquashConfigurationOutputReference | FsxLustreFileSystemRootSquashConfiguration): any;
export declare function fsxLustreFileSystemRootSquashConfigurationToHclTerraform(struct?: FsxLustreFileSystemRootSquashConfigurationOutputReference | FsxLustreFileSystemRootSquashConfiguration): any;
export declare class FsxLustreFileSystemRootSquashConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxLustreFileSystemRootSquashConfiguration | undefined;
    set internalValue(value: FsxLustreFileSystemRootSquashConfiguration | undefined);
    private _noSquashNids?;
    get noSquashNids(): string[];
    set noSquashNids(value: string[]);
    resetNoSquashNids(): void;
    get noSquashNidsInput(): string[] | undefined;
    private _rootSquash?;
    get rootSquash(): string;
    set rootSquash(value: string);
    resetRootSquash(): void;
    get rootSquashInput(): string | undefined;
}
export interface FsxLustreFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxLustreFileSystemTimeoutsToTerraform(struct?: FsxLustreFileSystemTimeouts | cdktf.IResolvable): any;
export declare function fsxLustreFileSystemTimeoutsToHclTerraform(struct?: FsxLustreFileSystemTimeouts | cdktf.IResolvable): any;
export declare class FsxLustreFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxLustreFileSystemTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxLustreFileSystemTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system}
*/
export declare class FsxLustreFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_lustre_file_system";
    /**
    * Generates CDKTF code for importing a FsxLustreFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxLustreFileSystem to import
    * @param importFromId The id of the existing FsxLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxLustreFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxLustreFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig);
    get arn(): string;
    private _autoImportPolicy?;
    get autoImportPolicy(): string;
    set autoImportPolicy(value: string);
    resetAutoImportPolicy(): void;
    get autoImportPolicyInput(): string | undefined;
    private _automaticBackupRetentionDays?;
    get automaticBackupRetentionDays(): number;
    set automaticBackupRetentionDays(value: number);
    resetAutomaticBackupRetentionDays(): void;
    get automaticBackupRetentionDaysInput(): number | undefined;
    private _backupId?;
    get backupId(): string;
    set backupId(value: string);
    resetBackupId(): void;
    get backupIdInput(): string | undefined;
    private _copyTagsToBackups?;
    get copyTagsToBackups(): boolean | cdktf.IResolvable;
    set copyTagsToBackups(value: boolean | cdktf.IResolvable);
    resetCopyTagsToBackups(): void;
    get copyTagsToBackupsInput(): boolean | cdktf.IResolvable | undefined;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string | undefined;
    private _dataCompressionType?;
    get dataCompressionType(): string;
    set dataCompressionType(value: string);
    resetDataCompressionType(): void;
    get dataCompressionTypeInput(): string | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string | undefined;
    get dnsName(): string;
    private _driveCacheType?;
    get driveCacheType(): string;
    set driveCacheType(value: string);
    resetDriveCacheType(): void;
    get driveCacheTypeInput(): string | undefined;
    private _efaEnabled?;
    get efaEnabled(): boolean | cdktf.IResolvable;
    set efaEnabled(value: boolean | cdktf.IResolvable);
    resetEfaEnabled(): void;
    get efaEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _exportPath?;
    get exportPath(): string;
    set exportPath(value: string);
    resetExportPath(): void;
    get exportPathInput(): string | undefined;
    private _fileSystemTypeVersion?;
    get fileSystemTypeVersion(): string;
    set fileSystemTypeVersion(value: string);
    resetFileSystemTypeVersion(): void;
    get fileSystemTypeVersionInput(): string | undefined;
    private _finalBackupTags?;
    get finalBackupTags(): {
        [key: string]: string;
    };
    set finalBackupTags(value: {
        [key: string]: string;
    });
    resetFinalBackupTags(): void;
    get finalBackupTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _importPath?;
    get importPath(): string;
    set importPath(value: string);
    resetImportPath(): void;
    get importPathInput(): string | undefined;
    private _importedFileChunkSize?;
    get importedFileChunkSize(): number;
    set importedFileChunkSize(value: number);
    resetImportedFileChunkSize(): void;
    get importedFileChunkSizeInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get mountName(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _perUnitStorageThroughput?;
    get perUnitStorageThroughput(): number;
    set perUnitStorageThroughput(value: number);
    resetPerUnitStorageThroughput(): void;
    get perUnitStorageThroughputInput(): number | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _skipFinalBackup?;
    get skipFinalBackup(): boolean | cdktf.IResolvable;
    set skipFinalBackup(value: boolean | cdktf.IResolvable);
    resetSkipFinalBackup(): void;
    get skipFinalBackupInput(): boolean | cdktf.IResolvable | undefined;
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
    resetStorageCapacity(): void;
    get storageCapacityInput(): number | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
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
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _logConfiguration;
    get logConfiguration(): FsxLustreFileSystemLogConfigurationOutputReference;
    putLogConfiguration(value: FsxLustreFileSystemLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): FsxLustreFileSystemLogConfiguration | undefined;
    private _metadataConfiguration;
    get metadataConfiguration(): FsxLustreFileSystemMetadataConfigurationOutputReference;
    putMetadataConfiguration(value: FsxLustreFileSystemMetadataConfiguration): void;
    resetMetadataConfiguration(): void;
    get metadataConfigurationInput(): FsxLustreFileSystemMetadataConfiguration | undefined;
    private _rootSquashConfiguration;
    get rootSquashConfiguration(): FsxLustreFileSystemRootSquashConfigurationOutputReference;
    putRootSquashConfiguration(value: FsxLustreFileSystemRootSquashConfiguration): void;
    resetRootSquashConfiguration(): void;
    get rootSquashConfigurationInput(): FsxLustreFileSystemRootSquashConfiguration | undefined;
    private _timeouts;
    get timeouts(): FsxLustreFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxLustreFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxLustreFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
