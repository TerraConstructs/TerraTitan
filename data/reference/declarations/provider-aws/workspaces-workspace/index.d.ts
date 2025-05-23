/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#id WorkspacesWorkspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}
    */
    readonly rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#tags WorkspacesWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#user_name WorkspacesWorkspace#user_name}
    */
    readonly userName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}
    */
    readonly userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}
    */
    readonly volumeEncryptionKey?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}
    */
    readonly timeouts?: WorkspacesWorkspaceTimeouts;
    /**
    * workspace_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}
    */
    readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties;
}
export interface WorkspacesWorkspaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#create WorkspacesWorkspace#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#delete WorkspacesWorkspace#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#update WorkspacesWorkspace#update}
    */
    readonly update?: string;
}
export declare function workspacesWorkspaceTimeoutsToTerraform(struct?: WorkspacesWorkspaceTimeouts | cdktf.IResolvable): any;
export declare function workspacesWorkspaceTimeoutsToHclTerraform(struct?: WorkspacesWorkspaceTimeouts | cdktf.IResolvable): any;
export declare class WorkspacesWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesWorkspaceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspacesWorkspaceTimeouts | cdktf.IResolvable | undefined);
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
export interface WorkspacesWorkspaceWorkspaceProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}
    */
    readonly computeTypeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}
    */
    readonly rootVolumeSizeGib?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}
    */
    readonly runningMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}
    */
    readonly runningModeAutoStopTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}
    */
    readonly userVolumeSizeGib?: number;
}
export declare function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any;
export declare function workspacesWorkspaceWorkspacePropertiesToHclTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any;
export declare class WorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesWorkspaceWorkspaceProperties | undefined;
    set internalValue(value: WorkspacesWorkspaceWorkspaceProperties | undefined);
    private _computeTypeName?;
    get computeTypeName(): string;
    set computeTypeName(value: string);
    resetComputeTypeName(): void;
    get computeTypeNameInput(): string | undefined;
    private _rootVolumeSizeGib?;
    get rootVolumeSizeGib(): number;
    set rootVolumeSizeGib(value: number);
    resetRootVolumeSizeGib(): void;
    get rootVolumeSizeGibInput(): number | undefined;
    private _runningMode?;
    get runningMode(): string;
    set runningMode(value: string);
    resetRunningMode(): void;
    get runningModeInput(): string | undefined;
    private _runningModeAutoStopTimeoutInMinutes?;
    get runningModeAutoStopTimeoutInMinutes(): number;
    set runningModeAutoStopTimeoutInMinutes(value: number);
    resetRunningModeAutoStopTimeoutInMinutes(): void;
    get runningModeAutoStopTimeoutInMinutesInput(): number | undefined;
    private _userVolumeSizeGib?;
    get userVolumeSizeGib(): number;
    set userVolumeSizeGib(value: number);
    resetUserVolumeSizeGib(): void;
    get userVolumeSizeGibInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace aws_workspaces_workspace}
*/
export declare class WorkspacesWorkspace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspaces_workspace";
    /**
    * Generates CDKTF code for importing a WorkspacesWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspacesWorkspace to import
    * @param importFromId The id of the existing WorkspacesWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspacesWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_workspace aws_workspaces_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesWorkspaceConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig);
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string | undefined;
    get computerName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddress(): string;
    private _rootVolumeEncryptionEnabled?;
    get rootVolumeEncryptionEnabled(): boolean | cdktf.IResolvable;
    set rootVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetRootVolumeEncryptionEnabled(): void;
    get rootVolumeEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    private _userVolumeEncryptionEnabled?;
    get userVolumeEncryptionEnabled(): boolean | cdktf.IResolvable;
    set userVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable);
    resetUserVolumeEncryptionEnabled(): void;
    get userVolumeEncryptionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _volumeEncryptionKey?;
    get volumeEncryptionKey(): string;
    set volumeEncryptionKey(value: string);
    resetVolumeEncryptionKey(): void;
    get volumeEncryptionKeyInput(): string | undefined;
    private _timeouts;
    get timeouts(): WorkspacesWorkspaceTimeoutsOutputReference;
    putTimeouts(value: WorkspacesWorkspaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | WorkspacesWorkspaceTimeouts | undefined;
    private _workspaceProperties;
    get workspaceProperties(): WorkspacesWorkspaceWorkspacePropertiesOutputReference;
    putWorkspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties): void;
    resetWorkspaceProperties(): void;
    get workspacePropertiesInput(): WorkspacesWorkspaceWorkspaceProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
