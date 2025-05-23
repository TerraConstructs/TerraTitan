/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOpenzfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}
    */
    readonly copyTagsToVolumes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#delete_options FsxOpenzfsFileSystem#delete_options}
    */
    readonly deleteOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}
    */
    readonly deploymentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#endpoint_ip_address_range FsxOpenzfsFileSystem#endpoint_ip_address_range}
    */
    readonly endpointIpAddressRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#final_backup_tags FsxOpenzfsFileSystem#final_backup_tags}
    */
    readonly finalBackupTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#preferred_subnet_id FsxOpenzfsFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#route_table_ids FsxOpenzfsFileSystem#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#skip_final_backup FsxOpenzfsFileSystem#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * disk_iops_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#disk_iops_configuration FsxOpenzfsFileSystem#disk_iops_configuration}
    */
    readonly diskIopsConfiguration?: FsxOpenzfsFileSystemDiskIopsConfiguration;
    /**
    * root_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#root_volume_configuration FsxOpenzfsFileSystem#root_volume_configuration}
    */
    readonly rootVolumeConfiguration?: FsxOpenzfsFileSystemRootVolumeConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#timeouts FsxOpenzfsFileSystem#timeouts}
    */
    readonly timeouts?: FsxOpenzfsFileSystemTimeouts;
}
export interface FsxOpenzfsFileSystemDiskIopsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}
    */
    readonly mode?: string;
}
export declare function fsxOpenzfsFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference | FsxOpenzfsFileSystemDiskIopsConfiguration): any;
export declare function fsxOpenzfsFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference | FsxOpenzfsFileSystemDiskIopsConfiguration): any;
export declare class FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: FsxOpenzfsFileSystemDiskIopsConfiguration | undefined);
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
export interface FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}
    */
    readonly clients: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}
    */
    readonly options: string[];
}
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable): any;
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable): any;
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | cdktf.IResolvable | undefined);
    private _clients?;
    get clients(): string;
    set clients(value: string);
    get clientsInput(): string | undefined;
    private _options?;
    get options(): string[];
    set options(value: string[]);
    get optionsInput(): string[] | undefined;
}
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference;
}
export interface FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports {
    /**
    * client_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#client_configurations FsxOpenzfsFileSystem#client_configurations}
    */
    readonly clientConfigurations: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable;
}
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): any;
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): any;
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports | undefined;
    set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports | undefined);
    private _clientConfigurations;
    get clientConfigurations(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList;
    putClientConfigurations(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | cdktf.IResolvable): void;
    get clientConfigurationsInput(): cdktf.IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[] | undefined;
}
export interface FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}
    */
    readonly storageCapacityQuotaGib: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}
    */
    readonly type: string;
}
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable): any;
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable): any;
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | cdktf.IResolvable | undefined);
    private _id?;
    get id(): number;
    set id(value: number);
    get idInput(): number | undefined;
    private _storageCapacityQuotaGib?;
    get storageCapacityQuotaGib(): number;
    set storageCapacityQuotaGib(value: number);
    get storageCapacityQuotaGibInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference;
}
export interface FsxOpenzfsFileSystemRootVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}
    */
    readonly copyTagsToSnapshots?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}
    */
    readonly recordSizeKib?: number;
    /**
    * nfs_exports block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#nfs_exports FsxOpenzfsFileSystem#nfs_exports}
    */
    readonly nfsExports?: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;
    /**
    * user_and_group_quotas block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#user_and_group_quotas FsxOpenzfsFileSystem#user_and_group_quotas}
    */
    readonly userAndGroupQuotas?: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable;
}
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationToTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference | FsxOpenzfsFileSystemRootVolumeConfiguration): any;
export declare function fsxOpenzfsFileSystemRootVolumeConfigurationToHclTerraform(struct?: FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference | FsxOpenzfsFileSystemRootVolumeConfiguration): any;
export declare class FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsFileSystemRootVolumeConfiguration | undefined;
    set internalValue(value: FsxOpenzfsFileSystemRootVolumeConfiguration | undefined);
    private _copyTagsToSnapshots?;
    get copyTagsToSnapshots(): boolean | cdktf.IResolvable;
    set copyTagsToSnapshots(value: boolean | cdktf.IResolvable);
    resetCopyTagsToSnapshots(): void;
    get copyTagsToSnapshotsInput(): boolean | cdktf.IResolvable | undefined;
    private _dataCompressionType?;
    get dataCompressionType(): string;
    set dataCompressionType(value: string);
    resetDataCompressionType(): void;
    get dataCompressionTypeInput(): string | undefined;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _recordSizeKib?;
    get recordSizeKib(): number;
    set recordSizeKib(value: number);
    resetRecordSizeKib(): void;
    get recordSizeKibInput(): number | undefined;
    private _nfsExports;
    get nfsExports(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference;
    putNfsExports(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): void;
    resetNfsExports(): void;
    get nfsExportsInput(): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports | undefined;
    private _userAndGroupQuotas;
    get userAndGroupQuotas(): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList;
    putUserAndGroupQuotas(value: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | cdktf.IResolvable): void;
    resetUserAndGroupQuotas(): void;
    get userAndGroupQuotasInput(): cdktf.IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[] | undefined;
}
export interface FsxOpenzfsFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxOpenzfsFileSystemTimeoutsToTerraform(struct?: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable): any;
export declare function fsxOpenzfsFileSystemTimeoutsToHclTerraform(struct?: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable): any;
export declare class FsxOpenzfsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsFileSystemTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system aws_fsx_openzfs_file_system}
*/
export declare class FsxOpenzfsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_openzfs_file_system";
    /**
    * Generates CDKTF code for importing a FsxOpenzfsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOpenzfsFileSystem to import
    * @param importFromId The id of the existing FsxOpenzfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOpenzfsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_file_system aws_fsx_openzfs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOpenzfsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxOpenzfsFileSystemConfig);
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
    private _copyTagsToVolumes?;
    get copyTagsToVolumes(): boolean | cdktf.IResolvable;
    set copyTagsToVolumes(value: boolean | cdktf.IResolvable);
    resetCopyTagsToVolumes(): void;
    get copyTagsToVolumesInput(): boolean | cdktf.IResolvable | undefined;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string | undefined;
    private _deleteOptions?;
    get deleteOptions(): string[];
    set deleteOptions(value: string[]);
    resetDeleteOptions(): void;
    get deleteOptionsInput(): string[] | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    get deploymentTypeInput(): string | undefined;
    get dnsName(): string;
    get endpointIpAddress(): string;
    private _endpointIpAddressRange?;
    get endpointIpAddressRange(): string;
    set endpointIpAddressRange(value: string);
    resetEndpointIpAddressRange(): void;
    get endpointIpAddressRangeInput(): string | undefined;
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
    private _preferredSubnetId?;
    get preferredSubnetId(): string;
    set preferredSubnetId(value: string);
    resetPreferredSubnetId(): void;
    get preferredSubnetIdInput(): string | undefined;
    get rootVolumeId(): string;
    private _routeTableIds?;
    get routeTableIds(): string[];
    set routeTableIds(value: string[]);
    resetRouteTableIds(): void;
    get routeTableIdsInput(): string[] | undefined;
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
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference;
    putDiskIopsConfiguration(value: FsxOpenzfsFileSystemDiskIopsConfiguration): void;
    resetDiskIopsConfiguration(): void;
    get diskIopsConfigurationInput(): FsxOpenzfsFileSystemDiskIopsConfiguration | undefined;
    private _rootVolumeConfiguration;
    get rootVolumeConfiguration(): FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference;
    putRootVolumeConfiguration(value: FsxOpenzfsFileSystemRootVolumeConfiguration): void;
    resetRootVolumeConfiguration(): void;
    get rootVolumeConfigurationInput(): FsxOpenzfsFileSystemRootVolumeConfiguration | undefined;
    private _timeouts;
    get timeouts(): FsxOpenzfsFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxOpenzfsFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOpenzfsFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
