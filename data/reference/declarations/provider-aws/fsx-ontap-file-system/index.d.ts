/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#deployment_type FsxOntapFileSystem#deployment_type}
    */
    readonly deploymentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}
    */
    readonly endpointIpAddressRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}
    */
    readonly fsxAdminPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#ha_pairs FsxOntapFileSystem#ha_pairs}
    */
    readonly haPairs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#id FsxOntapFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#kms_key_id FsxOntapFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#route_table_ids FsxOntapFileSystem#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#security_group_ids FsxOntapFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#storage_capacity FsxOntapFileSystem#storage_capacity}
    */
    readonly storageCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#storage_type FsxOntapFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#subnet_ids FsxOntapFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#tags FsxOntapFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#tags_all FsxOntapFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#throughput_capacity FsxOntapFileSystem#throughput_capacity}
    */
    readonly throughputCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#throughput_capacity_per_ha_pair FsxOntapFileSystem#throughput_capacity_per_ha_pair}
    */
    readonly throughputCapacityPerHaPair?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * disk_iops_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}
    */
    readonly diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#timeouts FsxOntapFileSystem#timeouts}
    */
    readonly timeouts?: FsxOntapFileSystemTimeouts;
}
export interface FsxOntapFileSystemEndpointsIntercluster {
}
export declare function fsxOntapFileSystemEndpointsInterclusterToTerraform(struct?: FsxOntapFileSystemEndpointsIntercluster): any;
export declare function fsxOntapFileSystemEndpointsInterclusterToHclTerraform(struct?: FsxOntapFileSystemEndpointsIntercluster): any;
export declare class FsxOntapFileSystemEndpointsInterclusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapFileSystemEndpointsIntercluster | undefined;
    set internalValue(value: FsxOntapFileSystemEndpointsIntercluster | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapFileSystemEndpointsInterclusterList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapFileSystemEndpointsInterclusterOutputReference;
}
export interface FsxOntapFileSystemEndpointsManagement {
}
export declare function fsxOntapFileSystemEndpointsManagementToTerraform(struct?: FsxOntapFileSystemEndpointsManagement): any;
export declare function fsxOntapFileSystemEndpointsManagementToHclTerraform(struct?: FsxOntapFileSystemEndpointsManagement): any;
export declare class FsxOntapFileSystemEndpointsManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapFileSystemEndpointsManagement | undefined;
    set internalValue(value: FsxOntapFileSystemEndpointsManagement | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapFileSystemEndpointsManagementList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapFileSystemEndpointsManagementOutputReference;
}
export interface FsxOntapFileSystemEndpoints {
}
export declare function fsxOntapFileSystemEndpointsToTerraform(struct?: FsxOntapFileSystemEndpoints): any;
export declare function fsxOntapFileSystemEndpointsToHclTerraform(struct?: FsxOntapFileSystemEndpoints): any;
export declare class FsxOntapFileSystemEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapFileSystemEndpoints | undefined;
    set internalValue(value: FsxOntapFileSystemEndpoints | undefined);
    private _intercluster;
    get intercluster(): FsxOntapFileSystemEndpointsInterclusterList;
    private _management;
    get management(): FsxOntapFileSystemEndpointsManagementList;
}
export declare class FsxOntapFileSystemEndpointsList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapFileSystemEndpointsOutputReference;
}
export interface FsxOntapFileSystemDiskIopsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#iops FsxOntapFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#mode FsxOntapFileSystem#mode}
    */
    readonly mode?: string;
}
export declare function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOntapFileSystemDiskIopsConfigurationOutputReference | FsxOntapFileSystemDiskIopsConfiguration): any;
export declare function fsxOntapFileSystemDiskIopsConfigurationToHclTerraform(struct?: FsxOntapFileSystemDiskIopsConfigurationOutputReference | FsxOntapFileSystemDiskIopsConfiguration): any;
export declare class FsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: FsxOntapFileSystemDiskIopsConfiguration | undefined);
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
export interface FsxOntapFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#create FsxOntapFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#delete FsxOntapFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#update FsxOntapFileSystem#update}
    */
    readonly update?: string;
}
export declare function fsxOntapFileSystemTimeoutsToTerraform(struct?: FsxOntapFileSystemTimeouts | cdktf.IResolvable): any;
export declare function fsxOntapFileSystemTimeoutsToHclTerraform(struct?: FsxOntapFileSystemTimeouts | cdktf.IResolvable): any;
export declare class FsxOntapFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapFileSystemTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOntapFileSystemTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system aws_fsx_ontap_file_system}
*/
export declare class FsxOntapFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_ontap_file_system";
    /**
    * Generates CDKTF code for importing a FsxOntapFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOntapFileSystem to import
    * @param importFromId The id of the existing FsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOntapFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_file_system aws_fsx_ontap_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapFileSystemConfig);
    get arn(): string;
    private _automaticBackupRetentionDays?;
    get automaticBackupRetentionDays(): number;
    set automaticBackupRetentionDays(value: number);
    resetAutomaticBackupRetentionDays(): void;
    get automaticBackupRetentionDaysInput(): number | undefined;
    private _dailyAutomaticBackupStartTime?;
    get dailyAutomaticBackupStartTime(): string;
    set dailyAutomaticBackupStartTime(value: string);
    resetDailyAutomaticBackupStartTime(): void;
    get dailyAutomaticBackupStartTimeInput(): string | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    get deploymentTypeInput(): string | undefined;
    get dnsName(): string;
    private _endpointIpAddressRange?;
    get endpointIpAddressRange(): string;
    set endpointIpAddressRange(value: string);
    resetEndpointIpAddressRange(): void;
    get endpointIpAddressRangeInput(): string | undefined;
    private _endpoints;
    get endpoints(): FsxOntapFileSystemEndpointsList;
    private _fsxAdminPassword?;
    get fsxAdminPassword(): string;
    set fsxAdminPassword(value: string);
    resetFsxAdminPassword(): void;
    get fsxAdminPasswordInput(): string | undefined;
    private _haPairs?;
    get haPairs(): number;
    set haPairs(value: number);
    resetHaPairs(): void;
    get haPairsInput(): number | undefined;
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
    get preferredSubnetIdInput(): string | undefined;
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
    private _storageCapacity?;
    get storageCapacity(): number;
    set storageCapacity(value: number);
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
    resetThroughputCapacity(): void;
    get throughputCapacityInput(): number | undefined;
    private _throughputCapacityPerHaPair?;
    get throughputCapacityPerHaPair(): number;
    set throughputCapacityPerHaPair(value: number);
    resetThroughputCapacityPerHaPair(): void;
    get throughputCapacityPerHaPairInput(): number | undefined;
    get vpcId(): string;
    private _weeklyMaintenanceStartTime?;
    get weeklyMaintenanceStartTime(): string;
    set weeklyMaintenanceStartTime(value: string);
    resetWeeklyMaintenanceStartTime(): void;
    get weeklyMaintenanceStartTimeInput(): string | undefined;
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): FsxOntapFileSystemDiskIopsConfigurationOutputReference;
    putDiskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration): void;
    resetDiskIopsConfiguration(): void;
    get diskIopsConfigurationInput(): FsxOntapFileSystemDiskIopsConfiguration | undefined;
    private _timeouts;
    get timeouts(): FsxOntapFileSystemTimeoutsOutputReference;
    putTimeouts(value: FsxOntapFileSystemTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOntapFileSystemTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
