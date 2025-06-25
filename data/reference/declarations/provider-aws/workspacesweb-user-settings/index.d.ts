/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspaceswebUserSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}
    */
    readonly copyAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}
    */
    readonly deepLinkAllowed?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}
    */
    readonly disconnectTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}
    */
    readonly downloadAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}
    */
    readonly idleDisconnectTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}
    */
    readonly pasteAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}
    */
    readonly printAllowed: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}
    */
    readonly uploadAllowed: string;
    /**
    * cookie_synchronization_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}
    */
    readonly cookieSynchronizationConfiguration?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable;
    /**
    * toolbar_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}
    */
    readonly toolbarConfiguration?: WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable;
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}
    */
    readonly path?: string;
}
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable): any;
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable): any;
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference;
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}
    */
    readonly path?: string;
}
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable): any;
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable): any;
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference;
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfiguration {
    /**
    * allowlist block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}
    */
    readonly allowlist?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable;
    /**
    * blocklist block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}
    */
    readonly blocklist?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable;
}
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable): any;
export declare function workspaceswebUserSettingsCookieSynchronizationConfigurationToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable): any;
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable | undefined);
    private _allowlist;
    get allowlist(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList;
    putAllowlist(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable): void;
    resetAllowlist(): void;
    get allowlistInput(): cdktf.IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | undefined;
    private _blocklist;
    get blocklist(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList;
    putBlocklist(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable): void;
    resetBlocklist(): void;
    get blocklistInput(): cdktf.IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | undefined;
}
export declare class WorkspaceswebUserSettingsCookieSynchronizationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference;
}
export interface WorkspaceswebUserSettingsToolbarConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}
    */
    readonly hiddenToolbarItems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}
    */
    readonly maxDisplayResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}
    */
    readonly toolbarType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}
    */
    readonly visualMode?: string;
}
export declare function workspaceswebUserSettingsToolbarConfigurationToTerraform(struct?: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable): any;
export declare function workspaceswebUserSettingsToolbarConfigurationToHclTerraform(struct?: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable): any;
export declare class WorkspaceswebUserSettingsToolbarConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable | undefined);
    private _hiddenToolbarItems?;
    get hiddenToolbarItems(): string[];
    set hiddenToolbarItems(value: string[]);
    resetHiddenToolbarItems(): void;
    get hiddenToolbarItemsInput(): string[] | undefined;
    private _maxDisplayResolution?;
    get maxDisplayResolution(): string;
    set maxDisplayResolution(value: string);
    resetMaxDisplayResolution(): void;
    get maxDisplayResolutionInput(): string | undefined;
    private _toolbarType?;
    get toolbarType(): string;
    set toolbarType(value: string);
    resetToolbarType(): void;
    get toolbarTypeInput(): string | undefined;
    private _visualMode?;
    get visualMode(): string;
    set visualMode(value: string);
    resetVisualMode(): void;
    get visualModeInput(): string | undefined;
}
export declare class WorkspaceswebUserSettingsToolbarConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebUserSettingsToolbarConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings aws_workspacesweb_user_settings}
*/
export declare class WorkspaceswebUserSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspacesweb_user_settings";
    /**
    * Generates CDKTF code for importing a WorkspaceswebUserSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspaceswebUserSettings to import
    * @param importFromId The id of the existing WorkspaceswebUserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspaceswebUserSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_settings aws_workspacesweb_user_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspaceswebUserSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WorkspaceswebUserSettingsConfig);
    private _additionalEncryptionContext?;
    get additionalEncryptionContext(): {
        [key: string]: string;
    };
    set additionalEncryptionContext(value: {
        [key: string]: string;
    });
    resetAdditionalEncryptionContext(): void;
    get additionalEncryptionContextInput(): {
        [key: string]: string;
    } | undefined;
    get associatedPortalArns(): string[];
    private _copyAllowed?;
    get copyAllowed(): string;
    set copyAllowed(value: string);
    get copyAllowedInput(): string | undefined;
    private _customerManagedKey?;
    get customerManagedKey(): string;
    set customerManagedKey(value: string);
    resetCustomerManagedKey(): void;
    get customerManagedKeyInput(): string | undefined;
    private _deepLinkAllowed?;
    get deepLinkAllowed(): string;
    set deepLinkAllowed(value: string);
    resetDeepLinkAllowed(): void;
    get deepLinkAllowedInput(): string | undefined;
    private _disconnectTimeoutInMinutes?;
    get disconnectTimeoutInMinutes(): number;
    set disconnectTimeoutInMinutes(value: number);
    resetDisconnectTimeoutInMinutes(): void;
    get disconnectTimeoutInMinutesInput(): number | undefined;
    private _downloadAllowed?;
    get downloadAllowed(): string;
    set downloadAllowed(value: string);
    get downloadAllowedInput(): string | undefined;
    private _idleDisconnectTimeoutInMinutes?;
    get idleDisconnectTimeoutInMinutes(): number;
    set idleDisconnectTimeoutInMinutes(value: number);
    resetIdleDisconnectTimeoutInMinutes(): void;
    get idleDisconnectTimeoutInMinutesInput(): number | undefined;
    private _pasteAllowed?;
    get pasteAllowed(): string;
    set pasteAllowed(value: string);
    get pasteAllowedInput(): string | undefined;
    private _printAllowed?;
    get printAllowed(): string;
    set printAllowed(value: string);
    get printAllowedInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _uploadAllowed?;
    get uploadAllowed(): string;
    set uploadAllowed(value: string);
    get uploadAllowedInput(): string | undefined;
    get userSettingsArn(): string;
    private _cookieSynchronizationConfiguration;
    get cookieSynchronizationConfiguration(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationList;
    putCookieSynchronizationConfiguration(value: WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable): void;
    resetCookieSynchronizationConfiguration(): void;
    get cookieSynchronizationConfigurationInput(): cdktf.IResolvable | WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | undefined;
    private _toolbarConfiguration;
    get toolbarConfiguration(): WorkspaceswebUserSettingsToolbarConfigurationList;
    putToolbarConfiguration(value: WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable): void;
    resetToolbarConfiguration(): void;
    get toolbarConfigurationInput(): cdktf.IResolvable | WorkspaceswebUserSettingsToolbarConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
