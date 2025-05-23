/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#description AppstreamStack#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}
    */
    readonly embedHostDomains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}
    */
    readonly feedbackUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#id AppstreamStack#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#name AppstreamStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}
    */
    readonly redirectUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#tags AppstreamStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#tags_all AppstreamStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * access_endpoints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}
    */
    readonly accessEndpoints?: AppstreamStackAccessEndpoints[] | cdktf.IResolvable;
    /**
    * application_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}
    */
    readonly applicationSettings?: AppstreamStackApplicationSettings;
    /**
    * storage_connectors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}
    */
    readonly storageConnectors?: AppstreamStackStorageConnectors[] | cdktf.IResolvable;
    /**
    * streaming_experience_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}
    */
    readonly streamingExperienceSettings?: AppstreamStackStreamingExperienceSettings;
    /**
    * user_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}
    */
    readonly userSettings?: AppstreamStackUserSettings[] | cdktf.IResolvable;
}
export interface AppstreamStackAccessEndpoints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}
    */
    readonly vpceId?: string;
}
export declare function appstreamStackAccessEndpointsToTerraform(struct?: AppstreamStackAccessEndpoints | cdktf.IResolvable): any;
export declare function appstreamStackAccessEndpointsToHclTerraform(struct?: AppstreamStackAccessEndpoints | cdktf.IResolvable): any;
export declare class AppstreamStackAccessEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppstreamStackAccessEndpoints | cdktf.IResolvable | undefined;
    set internalValue(value: AppstreamStackAccessEndpoints | cdktf.IResolvable | undefined);
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    private _vpceId?;
    get vpceId(): string;
    set vpceId(value: string);
    resetVpceId(): void;
    get vpceIdInput(): string | undefined;
}
export declare class AppstreamStackAccessEndpointsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppstreamStackAccessEndpoints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppstreamStackAccessEndpointsOutputReference;
}
export interface AppstreamStackApplicationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}
    */
    readonly settingsGroup?: string;
}
export declare function appstreamStackApplicationSettingsToTerraform(struct?: AppstreamStackApplicationSettingsOutputReference | AppstreamStackApplicationSettings): any;
export declare function appstreamStackApplicationSettingsToHclTerraform(struct?: AppstreamStackApplicationSettingsOutputReference | AppstreamStackApplicationSettings): any;
export declare class AppstreamStackApplicationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamStackApplicationSettings | undefined;
    set internalValue(value: AppstreamStackApplicationSettings | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _settingsGroup?;
    get settingsGroup(): string;
    set settingsGroup(value: string);
    resetSettingsGroup(): void;
    get settingsGroupInput(): string | undefined;
}
export interface AppstreamStackStorageConnectors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}
    */
    readonly connectorType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#domains AppstreamStack#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}
    */
    readonly resourceIdentifier?: string;
}
export declare function appstreamStackStorageConnectorsToTerraform(struct?: AppstreamStackStorageConnectors | cdktf.IResolvable): any;
export declare function appstreamStackStorageConnectorsToHclTerraform(struct?: AppstreamStackStorageConnectors | cdktf.IResolvable): any;
export declare class AppstreamStackStorageConnectorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppstreamStackStorageConnectors | cdktf.IResolvable | undefined;
    set internalValue(value: AppstreamStackStorageConnectors | cdktf.IResolvable | undefined);
    private _connectorType?;
    get connectorType(): string;
    set connectorType(value: string);
    get connectorTypeInput(): string | undefined;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    resetDomains(): void;
    get domainsInput(): string[] | undefined;
    private _resourceIdentifier?;
    get resourceIdentifier(): string;
    set resourceIdentifier(value: string);
    resetResourceIdentifier(): void;
    get resourceIdentifierInput(): string | undefined;
}
export declare class AppstreamStackStorageConnectorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppstreamStackStorageConnectors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppstreamStackStorageConnectorsOutputReference;
}
export interface AppstreamStackStreamingExperienceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}
    */
    readonly preferredProtocol?: string;
}
export declare function appstreamStackStreamingExperienceSettingsToTerraform(struct?: AppstreamStackStreamingExperienceSettingsOutputReference | AppstreamStackStreamingExperienceSettings): any;
export declare function appstreamStackStreamingExperienceSettingsToHclTerraform(struct?: AppstreamStackStreamingExperienceSettingsOutputReference | AppstreamStackStreamingExperienceSettings): any;
export declare class AppstreamStackStreamingExperienceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamStackStreamingExperienceSettings | undefined;
    set internalValue(value: AppstreamStackStreamingExperienceSettings | undefined);
    private _preferredProtocol?;
    get preferredProtocol(): string;
    set preferredProtocol(value: string);
    resetPreferredProtocol(): void;
    get preferredProtocolInput(): string | undefined;
}
export interface AppstreamStackUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#action AppstreamStack#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#permission AppstreamStack#permission}
    */
    readonly permission: string;
}
export declare function appstreamStackUserSettingsToTerraform(struct?: AppstreamStackUserSettings | cdktf.IResolvable): any;
export declare function appstreamStackUserSettingsToHclTerraform(struct?: AppstreamStackUserSettings | cdktf.IResolvable): any;
export declare class AppstreamStackUserSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppstreamStackUserSettings | cdktf.IResolvable | undefined;
    set internalValue(value: AppstreamStackUserSettings | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    get permissionInput(): string | undefined;
}
export declare class AppstreamStackUserSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppstreamStackUserSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppstreamStackUserSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack aws_appstream_stack}
*/
export declare class AppstreamStack extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_stack";
    /**
    * Generates CDKTF code for importing a AppstreamStack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamStack to import
    * @param importFromId The id of the existing AppstreamStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamStack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_stack aws_appstream_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamStackConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamStackConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _embedHostDomains?;
    get embedHostDomains(): string[];
    set embedHostDomains(value: string[]);
    resetEmbedHostDomains(): void;
    get embedHostDomainsInput(): string[] | undefined;
    private _feedbackUrl?;
    get feedbackUrl(): string;
    set feedbackUrl(value: string);
    resetFeedbackUrl(): void;
    get feedbackUrlInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _redirectUrl?;
    get redirectUrl(): string;
    set redirectUrl(value: string);
    resetRedirectUrl(): void;
    get redirectUrlInput(): string | undefined;
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
    private _accessEndpoints;
    get accessEndpoints(): AppstreamStackAccessEndpointsList;
    putAccessEndpoints(value: AppstreamStackAccessEndpoints[] | cdktf.IResolvable): void;
    resetAccessEndpoints(): void;
    get accessEndpointsInput(): cdktf.IResolvable | AppstreamStackAccessEndpoints[] | undefined;
    private _applicationSettings;
    get applicationSettings(): AppstreamStackApplicationSettingsOutputReference;
    putApplicationSettings(value: AppstreamStackApplicationSettings): void;
    resetApplicationSettings(): void;
    get applicationSettingsInput(): AppstreamStackApplicationSettings | undefined;
    private _storageConnectors;
    get storageConnectors(): AppstreamStackStorageConnectorsList;
    putStorageConnectors(value: AppstreamStackStorageConnectors[] | cdktf.IResolvable): void;
    resetStorageConnectors(): void;
    get storageConnectorsInput(): cdktf.IResolvable | AppstreamStackStorageConnectors[] | undefined;
    private _streamingExperienceSettings;
    get streamingExperienceSettings(): AppstreamStackStreamingExperienceSettingsOutputReference;
    putStreamingExperienceSettings(value: AppstreamStackStreamingExperienceSettings): void;
    resetStreamingExperienceSettings(): void;
    get streamingExperienceSettingsInput(): AppstreamStackStreamingExperienceSettings | undefined;
    private _userSettings;
    get userSettings(): AppstreamStackUserSettingsList;
    putUserSettings(value: AppstreamStackUserSettings[] | cdktf.IResolvable): void;
    resetUserSettings(): void;
    get userSettingsInput(): cdktf.IResolvable | AppstreamStackUserSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
