/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsFsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsFsxWindowsFileSystemAuditLogConfiguration {
}
export declare function dataAwsFsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: DataAwsFsxWindowsFileSystemAuditLogConfiguration): any;
export declare function dataAwsFsxWindowsFileSystemAuditLogConfigurationToHclTerraform(struct?: DataAwsFsxWindowsFileSystemAuditLogConfiguration): any;
export declare class DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxWindowsFileSystemAuditLogConfiguration | undefined;
    set internalValue(value: DataAwsFsxWindowsFileSystemAuditLogConfiguration | undefined);
    get auditLogDestination(): string;
    get fileAccessAuditLogLevel(): string;
    get fileShareAccessAuditLogLevel(): string;
}
export declare class DataAwsFsxWindowsFileSystemAuditLogConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference;
}
export interface DataAwsFsxWindowsFileSystemDiskIopsConfiguration {
}
export declare function dataAwsFsxWindowsFileSystemDiskIopsConfigurationToTerraform(struct?: DataAwsFsxWindowsFileSystemDiskIopsConfiguration): any;
export declare function dataAwsFsxWindowsFileSystemDiskIopsConfigurationToHclTerraform(struct?: DataAwsFsxWindowsFileSystemDiskIopsConfiguration): any;
export declare class DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxWindowsFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: DataAwsFsxWindowsFileSystemDiskIopsConfiguration | undefined);
    get iops(): number;
    get mode(): string;
}
export declare class DataAwsFsxWindowsFileSystemDiskIopsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system}
*/
export declare class DataAwsFsxWindowsFileSystem extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_fsx_windows_file_system";
    /**
    * Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsFsxWindowsFileSystem to import
    * @param importFromId The id of the existing DataAwsFsxWindowsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsFsxWindowsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsFsxWindowsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsFsxWindowsFileSystemConfig);
    get activeDirectoryId(): string;
    get aliases(): string[];
    get arn(): string;
    private _auditLogConfiguration;
    get auditLogConfiguration(): DataAwsFsxWindowsFileSystemAuditLogConfigurationList;
    get automaticBackupRetentionDays(): number;
    get backupId(): string;
    get copyTagsToBackups(): cdktf.IResolvable;
    get dailyAutomaticBackupStartTime(): string;
    get deploymentType(): string;
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): DataAwsFsxWindowsFileSystemDiskIopsConfigurationList;
    get dnsName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get preferredFileServerIp(): string;
    get preferredSubnetId(): string;
    get securityGroupIds(): string[];
    get skipFinalBackup(): cdktf.IResolvable;
    get storageCapacity(): number;
    get storageType(): string;
    get subnetIds(): string[];
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
    get throughputCapacity(): number;
    get vpcId(): string;
    get weeklyMaintenanceStartTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
