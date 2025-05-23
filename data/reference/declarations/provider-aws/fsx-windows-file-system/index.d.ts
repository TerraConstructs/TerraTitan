/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#final_backup_tags FsxWindowsFileSystem#final_backup_tags}
    */
    readonly finalBackupTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#id FsxWindowsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * audit_log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}
    */
    readonly auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration;
    /**
    * disk_iops_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#disk_iops_configuration FsxWindowsFileSystem#disk_iops_configuration}
    */
    readonly diskIopsConfiguration?: FsxWindowsFileSystemDiskIopsConfiguration;
    /**
    * self_managed_active_directory block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
    */
    readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}
    */
    readonly timeouts?: FsxWindowsFileSystemTimeouts;
}
export interface FsxWindowsFileSystemAuditLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}
    */
    readonly auditLogDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}
    */
    readonly fileAccessAuditLogLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}
    */
    readonly fileShareAccessAuditLogLevel?: string;
}
export declare function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any;
export declare function fsxWindowsFileSystemAuditLogConfigurationToHclTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any;
export declare class FsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxWindowsFileSystemAuditLogConfiguration | undefined;
    set internalValue(value: FsxWindowsFileSystemAuditLogConfiguration | undefined);
    private _auditLogDestination?;
    get auditLogDestination(): string;
    set auditLogDestination(value: string);
    resetAuditLogDestination(): void;
    get auditLogDestinationInput(): string | undefined;
    private _fileAccessAuditLogLevel?;
    get fileAccessAuditLogLevel(): string;
    set fileAccessAuditLogLevel(value: string);
    resetFileAccessAuditLogLevel(): void;
    get fileAccessAuditLogLevelInput(): string | undefined;
    private _fileShareAccessAuditLogLevel?;
    get fileShareAccessAuditLogLevel(): string;
    set fileShareAccessAuditLogLevel(value: string);
    resetFileShareAccessAuditLogLevel(): void;
    get fileShareAccessAuditLogLevelInput(): string | undefined;
}
export interface FsxWindowsFileSystemDiskIopsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#iops FsxWindowsFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#mode FsxWindowsFileSystem#mode}
    */
    readonly mode?: string;
}
export declare function fsxWindowsFileSystemDiskIopsConfigurationToTerraform(struct?: FsxWindowsFileSystemDiskIopsConfigurationOutputReference | FsxWindowsFileSystemDiskIopsConfiguration): any;
export declare function fsxWindowsFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxWindowsFileSystemDiskIopsConfigurationOutputReference | FsxWindowsFileSystemDiskIopsConfiguration): any;
export declare class FsxWindowsFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxWindowsFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: FsxWindowsFileSystemDiskIopsConfiguration | undefined);
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
export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#password FsxWindowsFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#username FsxWindowsFileSystem#username}
    */
    readonly username: string;
}
export declare function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any;
export declare function fsxWindowsFileSystemSelfManagedActiveDirectoryToHclTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any;
export declare class FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxWindowsFileSystemSelfManagedActiveDirectory | undefined;
    set internalValue(value: FsxWindowsFileSystemSelfManagedActiveDirectory | undefined);
    private _dnsIps?;
    get dnsIps(): string[];
    set dnsIps(value: string[]);
    get dnsIpsInput(): string[] | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _fileSystemAdministratorsGroup?;
    get fileSystemAdministratorsGroup(): string;
    set fileSystemAdministratorsGroup(value: string);
    resetFileSystemAdministratorsGroup(): void;
    get fileSystemAdministratorsGroupInput(): string | undefined;
    private _organizationalUnitDistinguishedName?;
    get organizationalUnitDistinguishedName(): string;
    set organizationalUnitDistinguishedName(value: string);
    resetOrganizationalUnitDistinguishedName(): void;
    get organizationalUnitDistinguishedNameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface FsxWindowsFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#create FsxWindowsFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#update FsxWindowsFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxWindowsFileSystemTimeoutsToTerraform(struct?: FsxWindowsFileSystemTimeouts | cdktf.IResolvable): any;
export declare function fsxWindowsFileSystemTimeoutsToHclTerraform(struct?: FsxWindowsFileSystemTimeouts | cdktf.IResolvable): any;
export declare class FsxWindowsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxWindowsFileSystemTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxWindowsFileSystemTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system aws_fsx_windows_file_system}
*/
export declare class FsxWindowsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_windows_file_system";
    /**
    * Generates CDKTF code for importing a FsxWindowsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxWindowsFileSystem to import
    * @param importFromId The id of the existing FsxWindowsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxWindowsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_windows_file_system aws_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxWindowsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig);
    private _activeDirectoryId?;
    get activeDirectoryId(): string;
    set activeDirectoryId(value: string);
    resetActiveDirectoryId(): void;
    get activeDirectoryIdInput(): string | undefined;
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[] | undefined;
    get arn(): string;
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
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string | undefined;
    get dnsName(): string;
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
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get preferredFileServerIp(): string;
    private _preferredSubnetId?;
    get preferredSubnetId(): string;
    set preferredSubnetId(value: string);
    resetPreferredSubnetId(): void;
    get preferredSubnetIdInput(): string | undefined;
    get remoteAdministrationEndpoint(): string;
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
    private _throughputCapacity?;
    get throughputCapacity(): number;
    set throughputCapacity(value: number);
    get throughputCapacityInput(): number | undefined;
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _auditLogConfiguration;
    get auditLogConfiguration(): FsxWindowsFileSystemAuditLogConfigurationOutputReference;
    putAuditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration): void;
    resetAuditLogConfiguration(): void;
    get auditLogConfigurationInput(): FsxWindowsFileSystemAuditLogConfiguration | undefined;
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): FsxWindowsFileSystemDiskIopsConfigurationOutputReference;
    putDiskIopsConfiguration(value: FsxWindowsFileSystemDiskIopsConfiguration): void;
    resetDiskIopsConfiguration(): void;
    get diskIopsConfigurationInput(): FsxWindowsFileSystemDiskIopsConfiguration | undefined;
    private _selfManagedActiveDirectory;
    get selfManagedActiveDirectory(): FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference;
    putSelfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory): void;
    resetSelfManagedActiveDirectory(): void;
    get selfManagedActiveDirectoryInput(): FsxWindowsFileSystemSelfManagedActiveDirectory | undefined;
    private _timeouts;
    get timeouts(): FsxWindowsFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxWindowsFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxWindowsFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
