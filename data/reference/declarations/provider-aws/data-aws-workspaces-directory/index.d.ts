/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory#directory_id DataAwsWorkspacesDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory#id DataAwsWorkspacesDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory#tags DataAwsWorkspacesDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsWorkspacesDirectorySamlProperties {
}
export declare function dataAwsWorkspacesDirectorySamlPropertiesToTerraform(struct?: DataAwsWorkspacesDirectorySamlProperties): any;
export declare function dataAwsWorkspacesDirectorySamlPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectorySamlProperties): any;
export declare class DataAwsWorkspacesDirectorySamlPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesDirectorySamlProperties | undefined;
    set internalValue(value: DataAwsWorkspacesDirectorySamlProperties | undefined);
    get relayStateParameterName(): string;
    get status(): string;
    get userAccessUrl(): string;
}
export declare class DataAwsWorkspacesDirectorySamlPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesDirectorySamlPropertiesOutputReference;
}
export interface DataAwsWorkspacesDirectorySelfServicePermissions {
}
export declare function dataAwsWorkspacesDirectorySelfServicePermissionsToTerraform(struct?: DataAwsWorkspacesDirectorySelfServicePermissions): any;
export declare function dataAwsWorkspacesDirectorySelfServicePermissionsToHclTerraform(struct?: DataAwsWorkspacesDirectorySelfServicePermissions): any;
export declare class DataAwsWorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesDirectorySelfServicePermissions | undefined;
    set internalValue(value: DataAwsWorkspacesDirectorySelfServicePermissions | undefined);
    get changeComputeType(): cdktf.IResolvable;
    get increaseVolumeSize(): cdktf.IResolvable;
    get rebuildWorkspace(): cdktf.IResolvable;
    get restartWorkspace(): cdktf.IResolvable;
    get switchRunningMode(): cdktf.IResolvable;
}
export declare class DataAwsWorkspacesDirectorySelfServicePermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesDirectorySelfServicePermissionsOutputReference;
}
export interface DataAwsWorkspacesDirectoryWorkspaceAccessProperties {
}
export declare function dataAwsWorkspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceAccessProperties): any;
export declare function dataAwsWorkspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceAccessProperties): any;
export declare class DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesDirectoryWorkspaceAccessProperties | undefined;
    set internalValue(value: DataAwsWorkspacesDirectoryWorkspaceAccessProperties | undefined);
    get deviceTypeAndroid(): string;
    get deviceTypeChromeos(): string;
    get deviceTypeIos(): string;
    get deviceTypeLinux(): string;
    get deviceTypeOsx(): string;
    get deviceTypeWeb(): string;
    get deviceTypeWindows(): string;
    get deviceTypeZeroclient(): string;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
}
export interface DataAwsWorkspacesDirectoryWorkspaceCreationProperties {
}
export declare function dataAwsWorkspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceCreationProperties): any;
export declare function dataAwsWorkspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct?: DataAwsWorkspacesDirectoryWorkspaceCreationProperties): any;
export declare class DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesDirectoryWorkspaceCreationProperties | undefined;
    set internalValue(value: DataAwsWorkspacesDirectoryWorkspaceCreationProperties | undefined);
    get customSecurityGroupId(): string;
    get defaultOu(): string;
    get enableInternetAccess(): cdktf.IResolvable;
    get enableMaintenanceMode(): cdktf.IResolvable;
    get userEnabledAsLocalAdministrator(): cdktf.IResolvable;
}
export declare class DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory aws_workspaces_directory}
*/
export declare class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_workspaces_directory";
    /**
    * Generates CDKTF code for importing a DataAwsWorkspacesDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsWorkspacesDirectory to import
    * @param importFromId The id of the existing DataAwsWorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsWorkspacesDirectory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_directory aws_workspaces_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig);
    get alias(): string;
    get customerUserName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    get directoryName(): string;
    get directoryType(): string;
    get dnsIpAddresses(): string[];
    get iamRoleId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipGroupIds(): string[];
    get registrationCode(): string;
    private _samlProperties;
    get samlProperties(): DataAwsWorkspacesDirectorySamlPropertiesList;
    private _selfServicePermissions;
    get selfServicePermissions(): DataAwsWorkspacesDirectorySelfServicePermissionsList;
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
    private _workspaceAccessProperties;
    get workspaceAccessProperties(): DataAwsWorkspacesDirectoryWorkspaceAccessPropertiesList;
    private _workspaceCreationProperties;
    get workspaceCreationProperties(): DataAwsWorkspacesDirectoryWorkspaceCreationPropertiesList;
    get workspaceSecurityGroupId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
