/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_network_access_type SagemakerDomain#app_network_access_type}
    */
    readonly appNetworkAccessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_security_group_management SagemakerDomain#app_security_group_management}
    */
    readonly appSecurityGroupManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#auth_mode SagemakerDomain#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#domain_name SagemakerDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#id SagemakerDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#kms_key_id SagemakerDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#subnet_ids SagemakerDomain#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#tag_propagation SagemakerDomain#tag_propagation}
    */
    readonly tagPropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#tags SagemakerDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#tags_all SagemakerDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#vpc_id SagemakerDomain#vpc_id}
    */
    readonly vpcId: string;
    /**
    * default_space_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_space_settings SagemakerDomain#default_space_settings}
    */
    readonly defaultSpaceSettings?: SagemakerDomainDefaultSpaceSettings;
    /**
    * default_user_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_user_settings SagemakerDomain#default_user_settings}
    */
    readonly defaultUserSettings: SagemakerDomainDefaultUserSettings;
    /**
    * domain_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#domain_settings SagemakerDomain#domain_settings}
    */
    readonly domainSettings?: SagemakerDomainDomainSettings;
    /**
    * retention_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#retention_policy SagemakerDomain#retention_policy}
    */
    readonly retentionPolicy?: SagemakerDomainRetentionPolicy;
}
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
    */
    readonly fileSystemPath: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig): any;
export declare function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig): any;
export declare class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _fileSystemPath?;
    get fileSystemPath(): string;
    set fileSystemPath(value: string);
    get fileSystemPathInput(): string | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig {
    /**
    * efs_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig;
}
export declare function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined);
    private _efsFileSystemConfig;
    get efsFileSystemConfig(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference;
    putEfsFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig): void;
    resetEfsFileSystemConfig(): void;
    get efsFileSystemConfigInput(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined;
}
export declare class SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigOutputReference;
}
export interface SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
    */
    readonly uid: number;
}
export declare function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any;
export declare function sagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): any;
export declare class SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number | undefined;
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
    private _lifecycleManagement?;
    get lifecycleManagement(): string;
    set lifecycleManagement(value: string);
    resetLifecycleManagement(): void;
    get lifecycleManagementInput(): string | undefined;
    private _maxIdleTimeoutInMinutes?;
    get maxIdleTimeoutInMinutes(): number;
    set maxIdleTimeoutInMinutes(value: number);
    resetMaxIdleTimeoutInMinutes(): void;
    get maxIdleTimeoutInMinutesInput(): number | undefined;
    private _minIdleTimeoutInMinutes?;
    get minIdleTimeoutInMinutes(): number;
    set minIdleTimeoutInMinutes(value: number);
    resetMinIdleTimeoutInMinutes(): void;
    get minIdleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
    */
    readonly idleSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#assumable_role_arns SagemakerDomain#assumable_role_arns}
    */
    readonly assumableRoleArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role_arns SagemakerDomain#execution_role_arns}
    */
    readonly executionRoleArns?: string[];
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings | undefined);
    private _assumableRoleArns?;
    get assumableRoleArns(): string[];
    set assumableRoleArns(value: string[]);
    resetAssumableRoleArns(): void;
    get assumableRoleArnsInput(): string[] | undefined;
    private _executionRoleArns?;
    get executionRoleArns(): string[];
    set executionRoleArns(value: string[]);
    resetExecutionRoleArns(): void;
    get executionRoleArnsInput(): string[] | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
    */
    readonly codeRepository?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
    /**
    * emr_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#emr_settings SagemakerDomain#emr_settings}
    */
    readonly emrSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined);
    private _builtInLifecycleConfigArn?;
    get builtInLifecycleConfigArn(): string;
    set builtInLifecycleConfigArn(value: string);
    resetBuiltInLifecycleConfigArn(): void;
    get builtInLifecycleConfigArnInput(): string | undefined;
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCodeRepository[] | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    private _emrSettings;
    get emrSettings(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettingsOutputReference;
    putEmrSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings): void;
    resetEmrSettings(): void;
    get emrSettingsInput(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsEmrSettings | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
    */
    readonly codeRepository?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb: number;
}
export declare function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined);
    private _defaultEbsVolumeSizeInGb?;
    get defaultEbsVolumeSizeInGb(): number;
    set defaultEbsVolumeSizeInGb(value: number);
    get defaultEbsVolumeSizeInGbInput(): number | undefined;
    private _maximumEbsVolumeSizeInGb?;
    get maximumEbsVolumeSizeInGb(): number;
    set maximumEbsVolumeSizeInGb(value: number);
    get maximumEbsVolumeSizeInGbInput(): number | undefined;
}
export interface SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings {
    /**
    * default_ebs_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export declare function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined);
    private _defaultEbsStorageSettings;
    get defaultEbsStorageSettings(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;
    putDefaultEbsStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings): void;
    resetDefaultEbsStorageSettings(): void;
    get defaultEbsStorageSettingsInput(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
}
export interface SagemakerDomainDefaultSpaceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * custom_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_file_system_config SagemakerDomain#custom_file_system_config}
    */
    readonly customFileSystemConfig?: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * custom_posix_user_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig;
    /**
    * jupyter_lab_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings;
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings;
    /**
    * space_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
    */
    readonly spaceStorageSettings?: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings;
}
export declare function sagemakerDomainDefaultSpaceSettingsToTerraform(struct?: SagemakerDomainDefaultSpaceSettingsOutputReference | SagemakerDomainDefaultSpaceSettings): any;
export declare function sagemakerDomainDefaultSpaceSettingsToHclTerraform(struct?: SagemakerDomainDefaultSpaceSettingsOutputReference | SagemakerDomainDefaultSpaceSettings): any;
export declare class SagemakerDomainDefaultSpaceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultSpaceSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultSpaceSettings | undefined);
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _customFileSystemConfig;
    get customFileSystemConfig(): SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfigList;
    putCustomFileSystemConfig(value: SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | cdktf.IResolvable): void;
    resetCustomFileSystemConfig(): void;
    get customFileSystemConfigInput(): cdktf.IResolvable | SagemakerDomainDefaultSpaceSettingsCustomFileSystemConfig[] | undefined;
    private _customPosixUserConfig;
    get customPosixUserConfig(): SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfigOutputReference;
    putCustomPosixUserConfig(value: SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig): void;
    resetCustomPosixUserConfig(): void;
    get customPosixUserConfigInput(): SagemakerDomainDefaultSpaceSettingsCustomPosixUserConfig | undefined;
    private _jupyterLabAppSettings;
    get jupyterLabAppSettings(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettingsOutputReference;
    putJupyterLabAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings): void;
    resetJupyterLabAppSettings(): void;
    get jupyterLabAppSettingsInput(): SagemakerDomainDefaultSpaceSettingsJupyterLabAppSettings | undefined;
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerDomainDefaultSpaceSettingsJupyterServerAppSettings | undefined;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerDomainDefaultSpaceSettingsKernelGatewayAppSettings | undefined;
    private _spaceStorageSettings;
    get spaceStorageSettings(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettingsOutputReference;
    putSpaceStorageSettings(value: SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings): void;
    resetSpaceStorageSettings(): void;
    get spaceStorageSettingsInput(): SagemakerDomainDefaultSpaceSettingsSpaceStorageSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role_arn SagemakerDomain#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined);
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#amazon_bedrock_role_arn SagemakerDomain#amazon_bedrock_role_arn}
    */
    readonly amazonBedrockRoleArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined);
    private _amazonBedrockRoleArn?;
    get amazonBedrockRoleArn(): string;
    set amazonBedrockRoleArn(value: string);
    resetAmazonBedrockRoleArn(): void;
    get amazonBedrockRoleArnInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#data_source_name SagemakerDomain#data_source_name}
    */
    readonly dataSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#secret_arn SagemakerDomain#secret_arn}
    */
    readonly secretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings | cdktf.IResolvable | undefined);
    private _dataSourceName?;
    get dataSourceName(): string;
    set dataSourceName(value: string);
    resetDataSourceName(): void;
    get dataSourceNameInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    get secretArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#cross_account_model_register_role_arn SagemakerDomain#cross_account_model_register_role_arn}
    */
    readonly crossAccountModelRegisterRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings | undefined);
    private _crossAccountModelRegisterRoleArn?;
    get crossAccountModelRegisterRoleArn(): string;
    set crossAccountModelRegisterRoleArn(value: string);
    resetCrossAccountModelRegisterRoleArn(): void;
    get crossAccountModelRegisterRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#amazon_forecast_role_arn SagemakerDomain#amazon_forecast_role_arn}
    */
    readonly amazonForecastRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#status SagemakerDomain#status}
    */
    readonly status?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined);
    private _amazonForecastRoleArn?;
    get amazonForecastRoleArn(): string;
    set amazonForecastRoleArn(value: string);
    resetAmazonForecastRoleArn(): void;
    get amazonForecastRoleArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#s3_artifact_path SagemakerDomain#s3_artifact_path}
    */
    readonly s3ArtifactPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings | undefined);
    private _s3ArtifactPath?;
    get s3ArtifactPath(): string;
    set s3ArtifactPath(value: string);
    resetS3ArtifactPath(): void;
    get s3ArtifactPathInput(): string | undefined;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCanvasAppSettings {
    /**
    * direct_deploy_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#direct_deploy_settings SagemakerDomain#direct_deploy_settings}
    */
    readonly directDeploySettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings;
    /**
    * emr_serverless_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#emr_serverless_settings SagemakerDomain#emr_serverless_settings}
    */
    readonly emrServerlessSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings;
    /**
    * generative_ai_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#generative_ai_settings SagemakerDomain#generative_ai_settings}
    */
    readonly generativeAiSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings;
    /**
    * identity_provider_oauth_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#identity_provider_oauth_settings SagemakerDomain#identity_provider_oauth_settings}
    */
    readonly identityProviderOauthSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable;
    /**
    * kendra_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#kendra_settings SagemakerDomain#kendra_settings}
    */
    readonly kendraSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings;
    /**
    * model_register_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#model_register_settings SagemakerDomain#model_register_settings}
    */
    readonly modelRegisterSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings;
    /**
    * time_series_forecasting_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#time_series_forecasting_settings SagemakerDomain#time_series_forecasting_settings}
    */
    readonly timeSeriesForecastingSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings;
    /**
    * workspace_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#workspace_settings SagemakerDomain#workspace_settings}
    */
    readonly workspaceSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings;
}
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCanvasAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCanvasAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCanvasAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCanvasAppSettings | undefined);
    private _directDeploySettings;
    get directDeploySettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettingsOutputReference;
    putDirectDeploySettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings): void;
    resetDirectDeploySettings(): void;
    get directDeploySettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsDirectDeploySettings | undefined;
    private _emrServerlessSettings;
    get emrServerlessSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettingsOutputReference;
    putEmrServerlessSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings): void;
    resetEmrServerlessSettings(): void;
    get emrServerlessSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsEmrServerlessSettings | undefined;
    private _generativeAiSettings;
    get generativeAiSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettingsOutputReference;
    putGenerativeAiSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings): void;
    resetGenerativeAiSettings(): void;
    get generativeAiSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings | undefined;
    private _identityProviderOauthSettings;
    get identityProviderOauthSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettingsList;
    putIdentityProviderOauthSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | cdktf.IResolvable): void;
    resetIdentityProviderOauthSettings(): void;
    get identityProviderOauthSettingsInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsCanvasAppSettingsIdentityProviderOauthSettings[] | undefined;
    private _kendraSettings;
    get kendraSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettingsOutputReference;
    putKendraSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings): void;
    resetKendraSettings(): void;
    get kendraSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsKendraSettings | undefined;
    private _modelRegisterSettings;
    get modelRegisterSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettingsOutputReference;
    putModelRegisterSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings): void;
    resetModelRegisterSettings(): void;
    get modelRegisterSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsModelRegisterSettings | undefined;
    private _timeSeriesForecastingSettings;
    get timeSeriesForecastingSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettingsOutputReference;
    putTimeSeriesForecastingSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings): void;
    resetTimeSeriesForecastingSettings(): void;
    get timeSeriesForecastingSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsTimeSeriesForecastingSettings | undefined;
    private _workspaceSettings;
    get workspaceSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettingsOutputReference;
    putWorkspaceSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings): void;
    resetWorkspaceSettings(): void;
    get workspaceSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsWorkspaceSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
    private _lifecycleManagement?;
    get lifecycleManagement(): string;
    set lifecycleManagement(value: string);
    resetLifecycleManagement(): void;
    get lifecycleManagementInput(): string | undefined;
    private _maxIdleTimeoutInMinutes?;
    get maxIdleTimeoutInMinutes(): number;
    set maxIdleTimeoutInMinutes(value: number);
    resetMaxIdleTimeoutInMinutes(): void;
    get maxIdleTimeoutInMinutesInput(): number | undefined;
    private _minIdleTimeoutInMinutes?;
    get minIdleTimeoutInMinutes(): number;
    set minIdleTimeoutInMinutes(value: number);
    resetMinIdleTimeoutInMinutes(): void;
    get minIdleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
    */
    readonly idleSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): any;
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsCodeEditorAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsCodeEditorAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined);
    private _builtInLifecycleConfigArn?;
    get builtInLifecycleConfigArn(): string;
    set builtInLifecycleConfigArn(value: string);
    resetBuiltInLifecycleConfigArn(): void;
    get builtInLifecycleConfigArnInput(): string | undefined;
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsAppLifecycleManagement | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#file_system_id SagemakerDomain#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#file_system_path SagemakerDomain#file_system_path}
    */
    readonly fileSystemPath: string;
}
export declare function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig): any;
export declare function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig): any;
export declare class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _fileSystemPath?;
    get fileSystemPath(): string;
    set fileSystemPath(value: string);
    get fileSystemPathInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsCustomFileSystemConfig {
    /**
    * efs_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#efs_file_system_config SagemakerDomain#efs_file_system_config}
    */
    readonly efsFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig;
}
export declare function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsCustomFileSystemConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig | cdktf.IResolvable | undefined);
    private _efsFileSystemConfig;
    get efsFileSystemConfig(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfigOutputReference;
    putEfsFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig): void;
    resetEfsFileSystemConfig(): void;
    get efsFileSystemConfigInput(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigEfsFileSystemConfig | undefined;
}
export declare class SagemakerDomainDefaultUserSettingsCustomFileSystemConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsCustomPosixUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#gid SagemakerDomain#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#uid SagemakerDomain#uid}
    */
    readonly uid: number;
}
export declare function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any;
export declare function sagemakerDomainDefaultUserSettingsCustomPosixUserConfigToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference | SagemakerDomainDefaultUserSettingsCustomPosixUserConfig): any;
export declare class SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number | undefined;
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_timeout_in_minutes SagemakerDomain#idle_timeout_in_minutes}
    */
    readonly idleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_management SagemakerDomain#lifecycle_management}
    */
    readonly lifecycleManagement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#max_idle_timeout_in_minutes SagemakerDomain#max_idle_timeout_in_minutes}
    */
    readonly maxIdleTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#min_idle_timeout_in_minutes SagemakerDomain#min_idle_timeout_in_minutes}
    */
    readonly minIdleTimeoutInMinutes?: number;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined);
    private _idleTimeoutInMinutes?;
    get idleTimeoutInMinutes(): number;
    set idleTimeoutInMinutes(value: number);
    resetIdleTimeoutInMinutes(): void;
    get idleTimeoutInMinutesInput(): number | undefined;
    private _lifecycleManagement?;
    get lifecycleManagement(): string;
    set lifecycleManagement(value: string);
    resetLifecycleManagement(): void;
    get lifecycleManagementInput(): string | undefined;
    private _maxIdleTimeoutInMinutes?;
    get maxIdleTimeoutInMinutes(): number;
    set maxIdleTimeoutInMinutes(value: number);
    resetMaxIdleTimeoutInMinutes(): void;
    get maxIdleTimeoutInMinutesInput(): number | undefined;
    private _minIdleTimeoutInMinutes?;
    get minIdleTimeoutInMinutes(): number;
    set minIdleTimeoutInMinutes(value: number);
    resetMinIdleTimeoutInMinutes(): void;
    get minIdleTimeoutInMinutesInput(): number | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
    /**
    * idle_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#idle_settings SagemakerDomain#idle_settings}
    */
    readonly idleSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined);
    private _idleSettings;
    get idleSettings(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
    putIdleSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void;
    resetIdleSettings(): void;
    get idleSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#assumable_role_arns SagemakerDomain#assumable_role_arns}
    */
    readonly assumableRoleArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role_arns SagemakerDomain#execution_role_arns}
    */
    readonly executionRoleArns?: string[];
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings | undefined);
    private _assumableRoleArns?;
    get assumableRoleArns(): string[];
    set assumableRoleArns(value: string[]);
    resetAssumableRoleArns(): void;
    get assumableRoleArnsInput(): string[] | undefined;
    private _executionRoleArns?;
    get executionRoleArns(): string[];
    set executionRoleArns(value: string[]);
    resetExecutionRoleArns(): void;
    get executionRoleArnsInput(): string[] | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterLabAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#built_in_lifecycle_config_arn SagemakerDomain#built_in_lifecycle_config_arn}
    */
    readonly builtInLifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * app_lifecycle_management block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_lifecycle_management SagemakerDomain#app_lifecycle_management}
    */
    readonly appLifecycleManagement?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
    */
    readonly codeRepository?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
    /**
    * emr_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#emr_settings SagemakerDomain#emr_settings}
    */
    readonly emrSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterLabAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined);
    private _builtInLifecycleConfigArn?;
    get builtInLifecycleConfigArn(): string;
    set builtInLifecycleConfigArn(value: string);
    resetBuiltInLifecycleConfigArn(): void;
    get builtInLifecycleConfigArnInput(): string | undefined;
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _appLifecycleManagement;
    get appLifecycleManagement(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
    putAppLifecycleManagement(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement): void;
    resetAppLifecycleManagement(): void;
    get appLifecycleManagementInput(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsAppLifecycleManagement | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository[] | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined;
    private _emrSettings;
    get emrSettings(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference;
    putEmrSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings): void;
    resetEmrSettings(): void;
    get emrSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsEmrSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#repository_url SagemakerDomain#repository_url}
    */
    readonly repositoryUrl: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined);
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
}
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * code_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#code_repository SagemakerDomain#code_repository}
    */
    readonly codeRepository?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _codeRepository;
    get codeRepository(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepositoryList;
    putCodeRepository(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable): void;
    resetCodeRepository(): void;
    get codeRepositoryInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arns SagemakerDomain#lifecycle_config_arns}
    */
    readonly lifecycleConfigArns?: string[];
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined);
    private _lifecycleConfigArns?;
    get lifecycleConfigArns(): string[];
    set lifecycleConfigArns(value: string[]);
    resetLifecycleConfigArns(): void;
    get lifecycleConfigArnsInput(): string[] | undefined;
    private _customImage;
    get customImage(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#app_image_config_name SagemakerDomain#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_name SagemakerDomain#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#image_version_number SagemakerDomain#image_version_number}
    */
    readonly imageVersionNumber?: number;
}
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any;
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable): any;
export declare class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage | cdktf.IResolvable | undefined);
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
export declare class SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageOutputReference;
}
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsRSessionAppSettings {
    /**
    * custom_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_image SagemakerDomain#custom_image}
    */
    readonly customImage?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsRSessionAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRSessionAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined);
    private _customImage;
    get customImage(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImageList;
    putCustomImage(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | cdktf.IResolvable): void;
    resetCustomImage(): void;
    get customImageInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsRSessionAppSettingsCustomImage[] | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#access_status SagemakerDomain#access_status}
    */
    readonly accessStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#user_group SagemakerDomain#user_group}
    */
    readonly userGroup?: string;
}
export declare function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined);
    private _accessStatus?;
    get accessStatus(): string;
    set accessStatus(value: string);
    resetAccessStatus(): void;
    get accessStatusInput(): string | undefined;
    private _userGroup?;
    get userGroup(): string;
    set userGroup(value: string);
    resetUserGroup(): void;
    get userGroupInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsSharingSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#notebook_output_option SagemakerDomain#notebook_output_option}
    */
    readonly notebookOutputOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
    */
    readonly s3KmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#s3_output_path SagemakerDomain#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare function sagemakerDomainDefaultUserSettingsSharingSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference | SagemakerDomainDefaultUserSettingsSharingSettings): any;
export declare class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsSharingSettings | undefined);
    private _notebookOutputOption?;
    get notebookOutputOption(): string;
    set notebookOutputOption(value: string);
    resetNotebookOutputOption(): void;
    get notebookOutputOptionInput(): string | undefined;
    private _s3KmsKeyId?;
    get s3KmsKeyId(): string;
    set s3KmsKeyId(value: string);
    resetS3KmsKeyId(): void;
    get s3KmsKeyIdInput(): string | undefined;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    resetS3OutputPath(): void;
    get s3OutputPathInput(): string | undefined;
}
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_ebs_volume_size_in_gb SagemakerDomain#default_ebs_volume_size_in_gb}
    */
    readonly defaultEbsVolumeSizeInGb: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#maximum_ebs_volume_size_in_gb SagemakerDomain#maximum_ebs_volume_size_in_gb}
    */
    readonly maximumEbsVolumeSizeInGb: number;
}
export declare function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): any;
export declare class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined);
    private _defaultEbsVolumeSizeInGb?;
    get defaultEbsVolumeSizeInGb(): number;
    set defaultEbsVolumeSizeInGb(value: number);
    get defaultEbsVolumeSizeInGbInput(): number | undefined;
    private _maximumEbsVolumeSizeInGb?;
    get maximumEbsVolumeSizeInGb(): number;
    set maximumEbsVolumeSizeInGb(value: number);
    get maximumEbsVolumeSizeInGbInput(): number | undefined;
}
export interface SagemakerDomainDefaultUserSettingsSpaceStorageSettings {
    /**
    * default_ebs_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_ebs_storage_settings SagemakerDomain#default_ebs_storage_settings}
    */
    readonly defaultEbsStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
}
export declare function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettings): any;
export declare function sagemakerDomainDefaultUserSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference | SagemakerDomainDefaultUserSettingsSpaceStorageSettings): any;
export declare class SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined);
    private _defaultEbsStorageSettings;
    get defaultEbsStorageSettings(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;
    putDefaultEbsStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): void;
    resetDefaultEbsStorageSettings(): void;
    get defaultEbsStorageSettingsInput(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings | undefined;
}
export interface SagemakerDomainDefaultUserSettingsStudioWebPortalSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#hidden_app_types SagemakerDomain#hidden_app_types}
    */
    readonly hiddenAppTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#hidden_instance_types SagemakerDomain#hidden_instance_types}
    */
    readonly hiddenInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#hidden_ml_tools SagemakerDomain#hidden_ml_tools}
    */
    readonly hiddenMlTools?: string[];
}
export declare function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference | SagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any;
export declare function sagemakerDomainDefaultUserSettingsStudioWebPortalSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference | SagemakerDomainDefaultUserSettingsStudioWebPortalSettings): any;
export declare class SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined);
    private _hiddenAppTypes?;
    get hiddenAppTypes(): string[];
    set hiddenAppTypes(value: string[]);
    resetHiddenAppTypes(): void;
    get hiddenAppTypesInput(): string[] | undefined;
    private _hiddenInstanceTypes?;
    get hiddenInstanceTypes(): string[];
    set hiddenInstanceTypes(value: string[]);
    resetHiddenInstanceTypes(): void;
    get hiddenInstanceTypesInput(): string[] | undefined;
    private _hiddenMlTools?;
    get hiddenMlTools(): string[];
    set hiddenMlTools(value: string[]);
    resetHiddenMlTools(): void;
    get hiddenMlToolsInput(): string[] | undefined;
}
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any;
export declare function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference | SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any;
export declare class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined);
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDefaultUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#auto_mount_home_efs SagemakerDomain#auto_mount_home_efs}
    */
    readonly autoMountHomeEfs?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_landing_uri SagemakerDomain#default_landing_uri}
    */
    readonly defaultLandingUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role SagemakerDomain#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#security_groups SagemakerDomain#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#studio_web_portal SagemakerDomain#studio_web_portal}
    */
    readonly studioWebPortal?: string;
    /**
    * canvas_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#canvas_app_settings SagemakerDomain#canvas_app_settings}
    */
    readonly canvasAppSettings?: SagemakerDomainDefaultUserSettingsCanvasAppSettings;
    /**
    * code_editor_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#code_editor_app_settings SagemakerDomain#code_editor_app_settings}
    */
    readonly codeEditorAppSettings?: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings;
    /**
    * custom_file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_file_system_config SagemakerDomain#custom_file_system_config}
    */
    readonly customFileSystemConfig?: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable;
    /**
    * custom_posix_user_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#custom_posix_user_config SagemakerDomain#custom_posix_user_config}
    */
    readonly customPosixUserConfig?: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig;
    /**
    * jupyter_lab_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#jupyter_lab_app_settings SagemakerDomain#jupyter_lab_app_settings}
    */
    readonly jupyterLabAppSettings?: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings;
    /**
    * jupyter_server_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
    */
    readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings;
    /**
    * kernel_gateway_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
    */
    readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings;
    /**
    * r_session_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#r_session_app_settings SagemakerDomain#r_session_app_settings}
    */
    readonly rSessionAppSettings?: SagemakerDomainDefaultUserSettingsRSessionAppSettings;
    /**
    * r_studio_server_pro_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#r_studio_server_pro_app_settings SagemakerDomain#r_studio_server_pro_app_settings}
    */
    readonly rStudioServerProAppSettings?: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings;
    /**
    * sharing_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sharing_settings SagemakerDomain#sharing_settings}
    */
    readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings;
    /**
    * space_storage_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#space_storage_settings SagemakerDomain#space_storage_settings}
    */
    readonly spaceStorageSettings?: SagemakerDomainDefaultUserSettingsSpaceStorageSettings;
    /**
    * studio_web_portal_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#studio_web_portal_settings SagemakerDomain#studio_web_portal_settings}
    */
    readonly studioWebPortalSettings?: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings;
    /**
    * tensor_board_app_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
    */
    readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings;
}
export declare function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any;
export declare function sagemakerDomainDefaultUserSettingsToHclTerraform(struct?: SagemakerDomainDefaultUserSettingsOutputReference | SagemakerDomainDefaultUserSettings): any;
export declare class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDefaultUserSettings | undefined;
    set internalValue(value: SagemakerDomainDefaultUserSettings | undefined);
    private _autoMountHomeEfs?;
    get autoMountHomeEfs(): string;
    set autoMountHomeEfs(value: string);
    resetAutoMountHomeEfs(): void;
    get autoMountHomeEfsInput(): string | undefined;
    private _defaultLandingUri?;
    get defaultLandingUri(): string;
    set defaultLandingUri(value: string);
    resetDefaultLandingUri(): void;
    get defaultLandingUriInput(): string | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _studioWebPortal?;
    get studioWebPortal(): string;
    set studioWebPortal(value: string);
    resetStudioWebPortal(): void;
    get studioWebPortalInput(): string | undefined;
    private _canvasAppSettings;
    get canvasAppSettings(): SagemakerDomainDefaultUserSettingsCanvasAppSettingsOutputReference;
    putCanvasAppSettings(value: SagemakerDomainDefaultUserSettingsCanvasAppSettings): void;
    resetCanvasAppSettings(): void;
    get canvasAppSettingsInput(): SagemakerDomainDefaultUserSettingsCanvasAppSettings | undefined;
    private _codeEditorAppSettings;
    get codeEditorAppSettings(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettingsOutputReference;
    putCodeEditorAppSettings(value: SagemakerDomainDefaultUserSettingsCodeEditorAppSettings): void;
    resetCodeEditorAppSettings(): void;
    get codeEditorAppSettingsInput(): SagemakerDomainDefaultUserSettingsCodeEditorAppSettings | undefined;
    private _customFileSystemConfig;
    get customFileSystemConfig(): SagemakerDomainDefaultUserSettingsCustomFileSystemConfigList;
    putCustomFileSystemConfig(value: SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | cdktf.IResolvable): void;
    resetCustomFileSystemConfig(): void;
    get customFileSystemConfigInput(): cdktf.IResolvable | SagemakerDomainDefaultUserSettingsCustomFileSystemConfig[] | undefined;
    private _customPosixUserConfig;
    get customPosixUserConfig(): SagemakerDomainDefaultUserSettingsCustomPosixUserConfigOutputReference;
    putCustomPosixUserConfig(value: SagemakerDomainDefaultUserSettingsCustomPosixUserConfig): void;
    resetCustomPosixUserConfig(): void;
    get customPosixUserConfigInput(): SagemakerDomainDefaultUserSettingsCustomPosixUserConfig | undefined;
    private _jupyterLabAppSettings;
    get jupyterLabAppSettings(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettingsOutputReference;
    putJupyterLabAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterLabAppSettings): void;
    resetJupyterLabAppSettings(): void;
    get jupyterLabAppSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterLabAppSettings | undefined;
    private _jupyterServerAppSettings;
    get jupyterServerAppSettings(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference;
    putJupyterServerAppSettings(value: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): void;
    resetJupyterServerAppSettings(): void;
    get jupyterServerAppSettingsInput(): SagemakerDomainDefaultUserSettingsJupyterServerAppSettings | undefined;
    private _kernelGatewayAppSettings;
    get kernelGatewayAppSettings(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference;
    putKernelGatewayAppSettings(value: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): void;
    resetKernelGatewayAppSettings(): void;
    get kernelGatewayAppSettingsInput(): SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings | undefined;
    private _rSessionAppSettings;
    get rSessionAppSettings(): SagemakerDomainDefaultUserSettingsRSessionAppSettingsOutputReference;
    putRSessionAppSettings(value: SagemakerDomainDefaultUserSettingsRSessionAppSettings): void;
    resetRSessionAppSettings(): void;
    get rSessionAppSettingsInput(): SagemakerDomainDefaultUserSettingsRSessionAppSettings | undefined;
    private _rStudioServerProAppSettings;
    get rStudioServerProAppSettings(): SagemakerDomainDefaultUserSettingsRStudioServerProAppSettingsOutputReference;
    putRStudioServerProAppSettings(value: SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings): void;
    resetRStudioServerProAppSettings(): void;
    get rStudioServerProAppSettingsInput(): SagemakerDomainDefaultUserSettingsRStudioServerProAppSettings | undefined;
    private _sharingSettings;
    get sharingSettings(): SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference;
    putSharingSettings(value: SagemakerDomainDefaultUserSettingsSharingSettings): void;
    resetSharingSettings(): void;
    get sharingSettingsInput(): SagemakerDomainDefaultUserSettingsSharingSettings | undefined;
    private _spaceStorageSettings;
    get spaceStorageSettings(): SagemakerDomainDefaultUserSettingsSpaceStorageSettingsOutputReference;
    putSpaceStorageSettings(value: SagemakerDomainDefaultUserSettingsSpaceStorageSettings): void;
    resetSpaceStorageSettings(): void;
    get spaceStorageSettingsInput(): SagemakerDomainDefaultUserSettingsSpaceStorageSettings | undefined;
    private _studioWebPortalSettings;
    get studioWebPortalSettings(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettingsOutputReference;
    putStudioWebPortalSettings(value: SagemakerDomainDefaultUserSettingsStudioWebPortalSettings): void;
    resetStudioWebPortalSettings(): void;
    get studioWebPortalSettingsInput(): SagemakerDomainDefaultUserSettingsStudioWebPortalSettings | undefined;
    private _tensorBoardAppSettings;
    get tensorBoardAppSettings(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference;
    putTensorBoardAppSettings(value: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): void;
    resetTensorBoardAppSettings(): void;
    get tensorBoardAppSettingsInput(): SagemakerDomainDefaultUserSettingsTensorBoardAppSettings | undefined;
}
export interface SagemakerDomainDomainSettingsDockerSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#enable_docker_access SagemakerDomain#enable_docker_access}
    */
    readonly enableDockerAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#vpc_only_trusted_accounts SagemakerDomain#vpc_only_trusted_accounts}
    */
    readonly vpcOnlyTrustedAccounts?: string[];
}
export declare function sagemakerDomainDomainSettingsDockerSettingsToTerraform(struct?: SagemakerDomainDomainSettingsDockerSettingsOutputReference | SagemakerDomainDomainSettingsDockerSettings): any;
export declare function sagemakerDomainDomainSettingsDockerSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsDockerSettingsOutputReference | SagemakerDomainDomainSettingsDockerSettings): any;
export declare class SagemakerDomainDomainSettingsDockerSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDomainSettingsDockerSettings | undefined;
    set internalValue(value: SagemakerDomainDomainSettingsDockerSettings | undefined);
    private _enableDockerAccess?;
    get enableDockerAccess(): string;
    set enableDockerAccess(value: string);
    resetEnableDockerAccess(): void;
    get enableDockerAccessInput(): string | undefined;
    private _vpcOnlyTrustedAccounts?;
    get vpcOnlyTrustedAccounts(): string[];
    set vpcOnlyTrustedAccounts(value: string[]);
    resetVpcOnlyTrustedAccounts(): void;
    get vpcOnlyTrustedAccountsInput(): string[] | undefined;
}
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#instance_type SagemakerDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#lifecycle_config_arn SagemakerDomain#lifecycle_config_arn}
    */
    readonly lifecycleConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_alias SagemakerDomain#sagemaker_image_version_alias}
    */
    readonly sagemakerImageVersionAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#sagemaker_image_version_arn SagemakerDomain#sagemaker_image_version_arn}
    */
    readonly sagemakerImageVersionArn?: string;
}
export declare function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any;
export declare function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): any;
export declare class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined;
    set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined);
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
export interface SagemakerDomainDomainSettingsRStudioServerProDomainSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#domain_execution_role_arn SagemakerDomain#domain_execution_role_arn}
    */
    readonly domainExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#r_studio_connect_url SagemakerDomain#r_studio_connect_url}
    */
    readonly rStudioConnectUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#r_studio_package_manager_url SagemakerDomain#r_studio_package_manager_url}
    */
    readonly rStudioPackageManagerUrl?: string;
    /**
    * default_resource_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#default_resource_spec SagemakerDomain#default_resource_spec}
    */
    readonly defaultResourceSpec?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec;
}
export declare function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettings): any;
export declare function sagemakerDomainDomainSettingsRStudioServerProDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference | SagemakerDomainDomainSettingsRStudioServerProDomainSettings): any;
export declare class SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined;
    set internalValue(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined);
    private _domainExecutionRoleArn?;
    get domainExecutionRoleArn(): string;
    set domainExecutionRoleArn(value: string);
    get domainExecutionRoleArnInput(): string | undefined;
    private _rStudioConnectUrl?;
    get rStudioConnectUrl(): string;
    set rStudioConnectUrl(value: string);
    resetRStudioConnectUrl(): void;
    get rStudioConnectUrlInput(): string | undefined;
    private _rStudioPackageManagerUrl?;
    get rStudioPackageManagerUrl(): string;
    set rStudioPackageManagerUrl(value: string);
    resetRStudioPackageManagerUrl(): void;
    get rStudioPackageManagerUrlInput(): string | undefined;
    private _defaultResourceSpec;
    get defaultResourceSpec(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpecOutputReference;
    putDefaultResourceSpec(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec): void;
    resetDefaultResourceSpec(): void;
    get defaultResourceSpecInput(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsDefaultResourceSpec | undefined;
}
export interface SagemakerDomainDomainSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#execution_role_identity_config SagemakerDomain#execution_role_identity_config}
    */
    readonly executionRoleIdentityConfig?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#security_group_ids SagemakerDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * docker_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#docker_settings SagemakerDomain#docker_settings}
    */
    readonly dockerSettings?: SagemakerDomainDomainSettingsDockerSettings;
    /**
    * r_studio_server_pro_domain_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#r_studio_server_pro_domain_settings SagemakerDomain#r_studio_server_pro_domain_settings}
    */
    readonly rStudioServerProDomainSettings?: SagemakerDomainDomainSettingsRStudioServerProDomainSettings;
}
export declare function sagemakerDomainDomainSettingsToTerraform(struct?: SagemakerDomainDomainSettingsOutputReference | SagemakerDomainDomainSettings): any;
export declare function sagemakerDomainDomainSettingsToHclTerraform(struct?: SagemakerDomainDomainSettingsOutputReference | SagemakerDomainDomainSettings): any;
export declare class SagemakerDomainDomainSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainDomainSettings | undefined;
    set internalValue(value: SagemakerDomainDomainSettings | undefined);
    private _executionRoleIdentityConfig?;
    get executionRoleIdentityConfig(): string;
    set executionRoleIdentityConfig(value: string);
    resetExecutionRoleIdentityConfig(): void;
    get executionRoleIdentityConfigInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _dockerSettings;
    get dockerSettings(): SagemakerDomainDomainSettingsDockerSettingsOutputReference;
    putDockerSettings(value: SagemakerDomainDomainSettingsDockerSettings): void;
    resetDockerSettings(): void;
    get dockerSettingsInput(): SagemakerDomainDomainSettingsDockerSettings | undefined;
    private _rStudioServerProDomainSettings;
    get rStudioServerProDomainSettings(): SagemakerDomainDomainSettingsRStudioServerProDomainSettingsOutputReference;
    putRStudioServerProDomainSettings(value: SagemakerDomainDomainSettingsRStudioServerProDomainSettings): void;
    resetRStudioServerProDomainSettings(): void;
    get rStudioServerProDomainSettingsInput(): SagemakerDomainDomainSettingsRStudioServerProDomainSettings | undefined;
}
export interface SagemakerDomainRetentionPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#home_efs_file_system SagemakerDomain#home_efs_file_system}
    */
    readonly homeEfsFileSystem?: string;
}
export declare function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any;
export declare function sagemakerDomainRetentionPolicyToHclTerraform(struct?: SagemakerDomainRetentionPolicyOutputReference | SagemakerDomainRetentionPolicy): any;
export declare class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDomainRetentionPolicy | undefined;
    set internalValue(value: SagemakerDomainRetentionPolicy | undefined);
    private _homeEfsFileSystem?;
    get homeEfsFileSystem(): string;
    set homeEfsFileSystem(value: string);
    resetHomeEfsFileSystem(): void;
    get homeEfsFileSystemInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain aws_sagemaker_domain}
*/
export declare class SagemakerDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_domain";
    /**
    * Generates CDKTF code for importing a SagemakerDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDomain to import
    * @param importFromId The id of the existing SagemakerDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_domain aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDomainConfig);
    private _appNetworkAccessType?;
    get appNetworkAccessType(): string;
    set appNetworkAccessType(value: string);
    resetAppNetworkAccessType(): void;
    get appNetworkAccessTypeInput(): string | undefined;
    private _appSecurityGroupManagement?;
    get appSecurityGroupManagement(): string;
    set appSecurityGroupManagement(value: string);
    resetAppSecurityGroupManagement(): void;
    get appSecurityGroupManagementInput(): string | undefined;
    get arn(): string;
    private _authMode?;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    get homeEfsFileSystemId(): string;
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
    get securityGroupIdForDomainBoundary(): string;
    get singleSignOnApplicationArn(): string;
    get singleSignOnManagedApplicationInstanceId(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _tagPropagation?;
    get tagPropagation(): string;
    set tagPropagation(value: string);
    resetTagPropagation(): void;
    get tagPropagationInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _defaultSpaceSettings;
    get defaultSpaceSettings(): SagemakerDomainDefaultSpaceSettingsOutputReference;
    putDefaultSpaceSettings(value: SagemakerDomainDefaultSpaceSettings): void;
    resetDefaultSpaceSettings(): void;
    get defaultSpaceSettingsInput(): SagemakerDomainDefaultSpaceSettings | undefined;
    private _defaultUserSettings;
    get defaultUserSettings(): SagemakerDomainDefaultUserSettingsOutputReference;
    putDefaultUserSettings(value: SagemakerDomainDefaultUserSettings): void;
    get defaultUserSettingsInput(): SagemakerDomainDefaultUserSettings | undefined;
    private _domainSettings;
    get domainSettings(): SagemakerDomainDomainSettingsOutputReference;
    putDomainSettings(value: SagemakerDomainDomainSettings): void;
    resetDomainSettings(): void;
    get domainSettingsInput(): SagemakerDomainDomainSettings | undefined;
    private _retentionPolicy;
    get retentionPolicy(): SagemakerDomainRetentionPolicyOutputReference;
    putRetentionPolicy(value: SagemakerDomainRetentionPolicy): void;
    resetRetentionPolicy(): void;
    get retentionPolicyInput(): SagemakerDomainRetentionPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
