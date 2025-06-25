/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#id WorkspacesDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}
    */
    readonly ipGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}
    */
    readonly userIdentityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}
    */
    readonly workspaceDirectoryDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}
    */
    readonly workspaceDirectoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}
    */
    readonly workspaceType?: string;
    /**
    * active_directory_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}
    */
    readonly activeDirectoryConfig?: WorkspacesDirectoryActiveDirectoryConfig;
    /**
    * certificate_based_auth_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}
    */
    readonly certificateBasedAuthProperties?: WorkspacesDirectoryCertificateBasedAuthProperties;
    /**
    * saml_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}
    */
    readonly samlProperties?: WorkspacesDirectorySamlProperties;
    /**
    * self_service_permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}
    */
    readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions;
    /**
    * workspace_access_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
    */
    readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties;
    /**
    * workspace_creation_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
    */
    readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties;
}
export interface WorkspacesDirectoryActiveDirectoryConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}
    */
    readonly serviceAccountSecretArn: string;
}
export declare function workspacesDirectoryActiveDirectoryConfigToTerraform(struct?: WorkspacesDirectoryActiveDirectoryConfigOutputReference | WorkspacesDirectoryActiveDirectoryConfig): any;
export declare function workspacesDirectoryActiveDirectoryConfigToHclTerraform(struct?: WorkspacesDirectoryActiveDirectoryConfigOutputReference | WorkspacesDirectoryActiveDirectoryConfig): any;
export declare class WorkspacesDirectoryActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectoryActiveDirectoryConfig | undefined;
    set internalValue(value: WorkspacesDirectoryActiveDirectoryConfig | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _serviceAccountSecretArn?;
    get serviceAccountSecretArn(): string;
    set serviceAccountSecretArn(value: string);
    get serviceAccountSecretArnInput(): string | undefined;
}
export interface WorkspacesDirectoryCertificateBasedAuthProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}
    */
    readonly certificateAuthorityArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}
    */
    readonly status?: string;
}
export declare function workspacesDirectoryCertificateBasedAuthPropertiesToTerraform(struct?: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference | WorkspacesDirectoryCertificateBasedAuthProperties): any;
export declare function workspacesDirectoryCertificateBasedAuthPropertiesToHclTerraform(struct?: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference | WorkspacesDirectoryCertificateBasedAuthProperties): any;
export declare class WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectoryCertificateBasedAuthProperties | undefined;
    set internalValue(value: WorkspacesDirectoryCertificateBasedAuthProperties | undefined);
    private _certificateAuthorityArn?;
    get certificateAuthorityArn(): string;
    set certificateAuthorityArn(value: string);
    resetCertificateAuthorityArn(): void;
    get certificateAuthorityArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface WorkspacesDirectorySamlProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}
    */
    readonly relayStateParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}
    */
    readonly userAccessUrl?: string;
}
export declare function workspacesDirectorySamlPropertiesToTerraform(struct?: WorkspacesDirectorySamlPropertiesOutputReference | WorkspacesDirectorySamlProperties): any;
export declare function workspacesDirectorySamlPropertiesToHclTerraform(struct?: WorkspacesDirectorySamlPropertiesOutputReference | WorkspacesDirectorySamlProperties): any;
export declare class WorkspacesDirectorySamlPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectorySamlProperties | undefined;
    set internalValue(value: WorkspacesDirectorySamlProperties | undefined);
    private _relayStateParameterName?;
    get relayStateParameterName(): string;
    set relayStateParameterName(value: string);
    resetRelayStateParameterName(): void;
    get relayStateParameterNameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _userAccessUrl?;
    get userAccessUrl(): string;
    set userAccessUrl(value: string);
    resetUserAccessUrl(): void;
    get userAccessUrlInput(): string | undefined;
}
export interface WorkspacesDirectorySelfServicePermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}
    */
    readonly changeComputeType?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}
    */
    readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
    */
    readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}
    */
    readonly restartWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}
    */
    readonly switchRunningMode?: boolean | cdktf.IResolvable;
}
export declare function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any;
export declare function workspacesDirectorySelfServicePermissionsToHclTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any;
export declare class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectorySelfServicePermissions | undefined;
    set internalValue(value: WorkspacesDirectorySelfServicePermissions | undefined);
    private _changeComputeType?;
    get changeComputeType(): boolean | cdktf.IResolvable;
    set changeComputeType(value: boolean | cdktf.IResolvable);
    resetChangeComputeType(): void;
    get changeComputeTypeInput(): boolean | cdktf.IResolvable | undefined;
    private _increaseVolumeSize?;
    get increaseVolumeSize(): boolean | cdktf.IResolvable;
    set increaseVolumeSize(value: boolean | cdktf.IResolvable);
    resetIncreaseVolumeSize(): void;
    get increaseVolumeSizeInput(): boolean | cdktf.IResolvable | undefined;
    private _rebuildWorkspace?;
    get rebuildWorkspace(): boolean | cdktf.IResolvable;
    set rebuildWorkspace(value: boolean | cdktf.IResolvable);
    resetRebuildWorkspace(): void;
    get rebuildWorkspaceInput(): boolean | cdktf.IResolvable | undefined;
    private _restartWorkspace?;
    get restartWorkspace(): boolean | cdktf.IResolvable;
    set restartWorkspace(value: boolean | cdktf.IResolvable);
    resetRestartWorkspace(): void;
    get restartWorkspaceInput(): boolean | cdktf.IResolvable | undefined;
    private _switchRunningMode?;
    get switchRunningMode(): boolean | cdktf.IResolvable;
    set switchRunningMode(value: boolean | cdktf.IResolvable);
    resetSwitchRunningMode(): void;
    get switchRunningModeInput(): boolean | cdktf.IResolvable | undefined;
}
export interface WorkspacesDirectoryWorkspaceAccessProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}
    */
    readonly deviceTypeAndroid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
    */
    readonly deviceTypeChromeos?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}
    */
    readonly deviceTypeIos?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}
    */
    readonly deviceTypeLinux?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}
    */
    readonly deviceTypeOsx?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}
    */
    readonly deviceTypeWeb?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}
    */
    readonly deviceTypeWindows?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
    */
    readonly deviceTypeZeroclient?: string;
}
export declare function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any;
export declare function workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any;
export declare class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectoryWorkspaceAccessProperties | undefined;
    set internalValue(value: WorkspacesDirectoryWorkspaceAccessProperties | undefined);
    private _deviceTypeAndroid?;
    get deviceTypeAndroid(): string;
    set deviceTypeAndroid(value: string);
    resetDeviceTypeAndroid(): void;
    get deviceTypeAndroidInput(): string | undefined;
    private _deviceTypeChromeos?;
    get deviceTypeChromeos(): string;
    set deviceTypeChromeos(value: string);
    resetDeviceTypeChromeos(): void;
    get deviceTypeChromeosInput(): string | undefined;
    private _deviceTypeIos?;
    get deviceTypeIos(): string;
    set deviceTypeIos(value: string);
    resetDeviceTypeIos(): void;
    get deviceTypeIosInput(): string | undefined;
    private _deviceTypeLinux?;
    get deviceTypeLinux(): string;
    set deviceTypeLinux(value: string);
    resetDeviceTypeLinux(): void;
    get deviceTypeLinuxInput(): string | undefined;
    private _deviceTypeOsx?;
    get deviceTypeOsx(): string;
    set deviceTypeOsx(value: string);
    resetDeviceTypeOsx(): void;
    get deviceTypeOsxInput(): string | undefined;
    private _deviceTypeWeb?;
    get deviceTypeWeb(): string;
    set deviceTypeWeb(value: string);
    resetDeviceTypeWeb(): void;
    get deviceTypeWebInput(): string | undefined;
    private _deviceTypeWindows?;
    get deviceTypeWindows(): string;
    set deviceTypeWindows(value: string);
    resetDeviceTypeWindows(): void;
    get deviceTypeWindowsInput(): string | undefined;
    private _deviceTypeZeroclient?;
    get deviceTypeZeroclient(): string;
    set deviceTypeZeroclient(value: string);
    resetDeviceTypeZeroclient(): void;
    get deviceTypeZeroclientInput(): string | undefined;
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
    */
    readonly customSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}
    */
    readonly defaultOu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}
    */
    readonly enableInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
    */
    readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
    */
    readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
}
export declare function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any;
export declare function workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any;
export declare class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesDirectoryWorkspaceCreationProperties | undefined;
    set internalValue(value: WorkspacesDirectoryWorkspaceCreationProperties | undefined);
    private _customSecurityGroupId?;
    get customSecurityGroupId(): string;
    set customSecurityGroupId(value: string);
    resetCustomSecurityGroupId(): void;
    get customSecurityGroupIdInput(): string | undefined;
    private _defaultOu?;
    get defaultOu(): string;
    set defaultOu(value: string);
    resetDefaultOu(): void;
    get defaultOuInput(): string | undefined;
    private _enableInternetAccess?;
    get enableInternetAccess(): boolean | cdktf.IResolvable;
    set enableInternetAccess(value: boolean | cdktf.IResolvable);
    resetEnableInternetAccess(): void;
    get enableInternetAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _enableMaintenanceMode?;
    get enableMaintenanceMode(): boolean | cdktf.IResolvable;
    set enableMaintenanceMode(value: boolean | cdktf.IResolvable);
    resetEnableMaintenanceMode(): void;
    get enableMaintenanceModeInput(): boolean | cdktf.IResolvable | undefined;
    private _userEnabledAsLocalAdministrator?;
    get userEnabledAsLocalAdministrator(): boolean | cdktf.IResolvable;
    set userEnabledAsLocalAdministrator(value: boolean | cdktf.IResolvable);
    resetUserEnabledAsLocalAdministrator(): void;
    get userEnabledAsLocalAdministratorInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory aws_workspaces_directory}
*/
export declare class WorkspacesDirectory extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspaces_directory";
    /**
    * Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspacesDirectory to import
    * @param importFromId The id of the existing WorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspacesDirectory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspaces_directory aws_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesDirectoryConfig = {}
    */
    constructor(scope: Construct, id: string, config?: WorkspacesDirectoryConfig);
    get alias(): string;
    get customerUserName(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
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
    private _ipGroupIds?;
    get ipGroupIds(): string[];
    set ipGroupIds(value: string[]);
    resetIpGroupIds(): void;
    get ipGroupIdsInput(): string[] | undefined;
    get registrationCode(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
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
    private _userIdentityType?;
    get userIdentityType(): string;
    set userIdentityType(value: string);
    resetUserIdentityType(): void;
    get userIdentityTypeInput(): string | undefined;
    private _workspaceDirectoryDescription?;
    get workspaceDirectoryDescription(): string;
    set workspaceDirectoryDescription(value: string);
    resetWorkspaceDirectoryDescription(): void;
    get workspaceDirectoryDescriptionInput(): string | undefined;
    private _workspaceDirectoryName?;
    get workspaceDirectoryName(): string;
    set workspaceDirectoryName(value: string);
    resetWorkspaceDirectoryName(): void;
    get workspaceDirectoryNameInput(): string | undefined;
    get workspaceSecurityGroupId(): string;
    private _workspaceType?;
    get workspaceType(): string;
    set workspaceType(value: string);
    resetWorkspaceType(): void;
    get workspaceTypeInput(): string | undefined;
    private _activeDirectoryConfig;
    get activeDirectoryConfig(): WorkspacesDirectoryActiveDirectoryConfigOutputReference;
    putActiveDirectoryConfig(value: WorkspacesDirectoryActiveDirectoryConfig): void;
    resetActiveDirectoryConfig(): void;
    get activeDirectoryConfigInput(): WorkspacesDirectoryActiveDirectoryConfig | undefined;
    private _certificateBasedAuthProperties;
    get certificateBasedAuthProperties(): WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference;
    putCertificateBasedAuthProperties(value: WorkspacesDirectoryCertificateBasedAuthProperties): void;
    resetCertificateBasedAuthProperties(): void;
    get certificateBasedAuthPropertiesInput(): WorkspacesDirectoryCertificateBasedAuthProperties | undefined;
    private _samlProperties;
    get samlProperties(): WorkspacesDirectorySamlPropertiesOutputReference;
    putSamlProperties(value: WorkspacesDirectorySamlProperties): void;
    resetSamlProperties(): void;
    get samlPropertiesInput(): WorkspacesDirectorySamlProperties | undefined;
    private _selfServicePermissions;
    get selfServicePermissions(): WorkspacesDirectorySelfServicePermissionsOutputReference;
    putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions): void;
    resetSelfServicePermissions(): void;
    get selfServicePermissionsInput(): WorkspacesDirectorySelfServicePermissions | undefined;
    private _workspaceAccessProperties;
    get workspaceAccessProperties(): WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
    putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties): void;
    resetWorkspaceAccessProperties(): void;
    get workspaceAccessPropertiesInput(): WorkspacesDirectoryWorkspaceAccessProperties | undefined;
    private _workspaceCreationProperties;
    get workspaceCreationProperties(): WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
    putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties): void;
    resetWorkspaceCreationProperties(): void;
    get workspaceCreationPropertiesInput(): WorkspacesDirectoryWorkspaceCreationProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
