/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}
    */
    readonly userName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}
    */
    readonly workspaceId?: string;
}
export interface DataAwsWorkspacesWorkspaceWorkspaceProperties {
}
export declare function dataAwsWorkspacesWorkspaceWorkspacePropertiesToTerraform(struct?: DataAwsWorkspacesWorkspaceWorkspaceProperties): any;
export declare function dataAwsWorkspacesWorkspaceWorkspacePropertiesToHclTerraform(struct?: DataAwsWorkspacesWorkspaceWorkspaceProperties): any;
export declare class DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesWorkspaceWorkspaceProperties | undefined;
    set internalValue(value: DataAwsWorkspacesWorkspaceWorkspaceProperties | undefined);
    get computeTypeName(): string;
    get rootVolumeSizeGib(): number;
    get runningMode(): string;
    get runningModeAutoStopTimeoutInMinutes(): number;
    get userVolumeSizeGib(): number;
}
export declare class DataAwsWorkspacesWorkspaceWorkspacePropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace aws_workspaces_workspace}
*/
export declare class DataAwsWorkspacesWorkspace extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_workspaces_workspace";
    /**
    * Generates CDKTF code for importing a DataAwsWorkspacesWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsWorkspacesWorkspace to import
    * @param importFromId The id of the existing DataAwsWorkspacesWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsWorkspacesWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_workspace aws_workspaces_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesWorkspaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsWorkspacesWorkspaceConfig);
    get bundleId(): string;
    get computerName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddress(): string;
    get rootVolumeEncryptionEnabled(): cdktf.IResolvable;
    get state(): string;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    get userVolumeEncryptionEnabled(): cdktf.IResolvable;
    get volumeEncryptionKey(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    resetWorkspaceId(): void;
    get workspaceIdInput(): string | undefined;
    private _workspaceProperties;
    get workspaceProperties(): DataAwsWorkspacesWorkspaceWorkspacePropertiesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
