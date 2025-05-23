/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerSpaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#id SagemakerSpace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}
    */
    readonly spaceDisplayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}
    */
    readonly spaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ownership_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}
    */
    readonly ownershipSettings?: SagemakerSpaceOwnershipSettings;
    /**
    * space_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}
    */
    readonly spaceSettings?: SagemakerSpaceSpaceSettings;
    /**
    * space_sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}
    */
    readonly spaceSharingSettings?: SagemakerSpaceSpaceSharingSettings;
}
export interface SagemakerSpaceOwnershipSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}
    */
    readonly ownerUserProfileName: string;
}
export declare function sagemakerSpaceOwnershipSettingsToTerraform(struct?: SagemakerSpaceOwnershipSettingsOutputReference | SagemakerSpaceOwnershipSettings): any;
export declare function sagemakerSpaceOwnershipSettingsToHclTerraform(struct?: SagemakerSpaceOwnershipSettingsOutputReference | SagemakerSpaceOwnershipSettings): any;
export declare class SagemakerSpaceOwnershipSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceOwnershipSettings | undefined;
    set internalValue(value: SagemakerSpaceOwnershipSettings | undefined);
    private _ownerUserProfileName?;
    get ownerUserProfileName(): string;
    set ownerUserProfileName(value: string);
    get ownerUserProfileNameInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
}
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}
    */
    readonly idleSettings?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettings {
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettings): any;
export declare function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettings): any;
export declare class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettings | undefined);
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}
    */
    readonly fileSystemId: string;
}
export declare function sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference | SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem): any;
export declare function sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference | SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem): any;
export declare class SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsCustomFileSystem {
    /**
    * efs_file_system block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}
    */
    readonly efsFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem;
}
export declare function sagemakerSpaceSpaceSettingsCustomFileSystemToTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable): any;
export declare function sagemakerSpaceSpaceSettingsCustomFileSystemToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable): any;
export declare class SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable | undefined);
    private _efsFileSystem;
    get efsFileSystem(): SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference;
    putEfsFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem): void;
    get efsFileSystemInput(): SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem | undefined;
}
export declare class SagemakerSpaceSpaceSettingsCustomFileSystemList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference;
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#idle_timeout_in_minutes SagemakerSpace#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
}
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#idle_settings SagemakerSpace#idle_settings}
    */
    readonly idleSettings?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettings {
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#app_lifecycle_management SagemakerSpace#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}
    */
    readonly codeRepository?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
}
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettings): any;
export declare function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettings): any;
export declare class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettings | undefined);
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}
    */
    readonly codeRepository?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettings): any;
export declare function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettings): any;
export declare class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _imageVersionNumber?;
    get imageVersionNumber(): number;
    set imageVersionNumber(value: number);
    resetImageVersionNumber(): void;
    get imageVersionNumberInput(): number | undefined;
}
export declare class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference;
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycleConfigArn?;
    get lifecycleConfigArn(): string;
    set lifecycleConfigArn(value: string);
    resetLifecycleConfigArn(): void;
    get lifecycleConfigArnInput(): string | undefined;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string | undefined;
    private _sagemakerImageVersionAlias?;
    get sagemakerImageVersionAlias(): string;
    set sagemakerImageVersionAlias(value: string);
    resetSagemakerImageVersionAlias(): void;
    get sagemakerImageVersionAliasInput(): string | undefined;
    private _sagemakerImageVersionArn?;
    get sagemakerImageVersionArn(): string;
    set sagemakerImageVersionArn(value: string);
    resetSagemakerImageVersionArn(): void;
    get sagemakerImageVersionArnInput(): string | undefined;
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#custom_image SagemakerSpace#custom_image}
    */
    readonly customImage?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
    */
    readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): any;
export declare function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): any;
export declare class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _customImage;
    get customImage(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList;
    putCustomImage(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    get defaultResourceSpecInput(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}
    */
    readonly ebsVolumeSizeInGb: number;
}
export declare function sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): any;
export declare function sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): any;
export declare class SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings | undefined);
    private _ebsVolumeSizeInGb?;
    get ebsVolumeSizeInGb(): number;
    set ebsVolumeSizeInGb(value: number);
    get ebsVolumeSizeInGbInput(): number | undefined;
}
export interface SagemakerSpaceSpaceSettingsSpaceStorageSettings {
    /**
    * ebs_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}
    */
    readonly ebsStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
}
export declare function sagemakerSpaceSpaceSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettings): any;
export declare function sagemakerSpaceSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettings): any;
export declare class SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettingsSpaceStorageSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettingsSpaceStorageSettings | undefined);
    private _ebsStorageSettings;
    get ebsStorageSettings(): SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference;
    putEbsStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): void;
    get ebsStorageSettingsInput(): SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings | undefined;
}
export interface SagemakerSpaceSpaceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}
    */
    readonly appType?: string;
    /**
    * code_editor_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: SagemakerSpaceSpaceSettingsCodeEditorAppSettings;
    /**
    * custom_file_system block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#custom_file_system SagemakerSpace#custom_file_system}
    */
    readonly customFileSystem?: SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable;
    /**
    * jupyter_lab_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: SagemakerSpaceSpaceSettingsJupyterLabAppSettings;
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerSpaceSpaceSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;
    /**
    * space_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}
    */
    readonly spaceStorageSettings?: SagemakerSpaceSpaceSettingsSpaceStorageSettings;
}
export declare function sagemakerSpaceSpaceSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsOutputReference | SagemakerSpaceSpaceSettings): any;
export declare function sagemakerSpaceSpaceSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsOutputReference | SagemakerSpaceSpaceSettings): any;
export declare class SagemakerSpaceSpaceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSettings | undefined);
    private _appType?;
    get appType(): string;
    set appType(value: string);
    resetAppType(): void;
    get appTypeInput(): string | undefined;
    private _codeEditorAppSettings;
    get codeEditorAppSettings(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference;
    putCodeEditorAppSettings(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettings): void;
    resetCodeEditorAppSettings(): void;
    get codeEditorAppSettingsInput(): SagemakerSpaceSpaceSettingsCodeEditorAppSettings | undefined;
    private _customFileSystem;
    get customFileSystem(): SagemakerSpaceSpaceSettingsCustomFileSystemList;
    putCustomFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable): void;
    resetCustomFileSystem(): void;
    get customFileSystemInput(): cdktf.IResolvable | SagemakerSpaceSpaceSettingsCustomFileSystem[] | undefined;
    private _jupyterLabAppSettings;
    get jupyterLabAppSettings(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference;
    putJupyterLabAppSettings(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettings): void;
    resetJupyterLabAppSettings(): void;
    get jupyterLabAppSettingsInput(): SagemakerSpaceSpaceSettingsJupyterLabAppSettings | undefined;
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerSpaceSpaceSettingsJupyterServerAppSettings | undefined;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettings | undefined;
    private _spaceStorageSettings;
    get spaceStorageSettings(): SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference;
    putSpaceStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettings): void;
    resetSpaceStorageSettings(): void;
    get spaceStorageSettingsInput(): SagemakerSpaceSpaceSettingsSpaceStorageSettings | undefined;
}
export interface SagemakerSpaceSpaceSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}
    */
    readonly sharingType: string;
}
export declare function sagemakerSpaceSpaceSharingSettingsToTerraform(struct?: SagemakerSpaceSpaceSharingSettingsOutputReference | SagemakerSpaceSpaceSharingSettings): any;
export declare function sagemakerSpaceSpaceSharingSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSharingSettingsOutputReference | SagemakerSpaceSpaceSharingSettings): any;
export declare class SagemakerSpaceSpaceSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerSpaceSpaceSharingSettings | undefined;
    set internalValue(value: SagemakerSpaceSpaceSharingSettings | undefined);
    private _sharingType?;
    get sharingType(): string;
    set sharingType(value: string);
    get sharingTypeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space aws_sagemaker_space}
*/
export declare class SagemakerSpace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_space";
    /**
    * Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerSpace to import
    * @param importFromId The id of the existing SagemakerSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerSpace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_space aws_sagemaker_space} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerSpaceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerSpaceConfig);
    get arn(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string | undefined;
    get homeEfsFileSystemUid(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _spaceDisplayName?;
    get spaceDisplayName(): string;
    set spaceDisplayName(value: string);
    resetSpaceDisplayName(): void;
    get spaceDisplayNameInput(): string | undefined;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    get spaceNameInput(): string | undefined;
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
    get url(): string;
    private _ownershipSettings;
    get ownershipSettings(): SagemakerSpaceOwnershipSettingsOutputReference;
    putOwnershipSettings(value: SagemakerSpaceOwnershipSettings): void;
    resetOwnershipSettings(): void;
    get ownershipSettingsInput(): SagemakerSpaceOwnershipSettings | undefined;
    private _spaceSettings;
    get spaceSettings(): SagemakerSpaceSpaceSettingsOutputReference;
    putSpaceSettings(value: SagemakerSpaceSpaceSettings): void;
    resetSpaceSettings(): void;
    get spaceSettingsInput(): SagemakerSpaceSpaceSettings | undefined;
    private _spaceSharingSettings;
    get spaceSharingSettings(): SagemakerSpaceSpaceSharingSettingsOutputReference;
    putSpaceSharingSettings(value: SagemakerSpaceSpaceSharingSettings): void;
    resetSpaceSharingSettings(): void;
    get spaceSharingSettingsInput(): SagemakerSpaceSpaceSharingSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
