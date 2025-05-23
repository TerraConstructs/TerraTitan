/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RumAppMonitorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}
    */
    readonly cwLogEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#id RumAppMonitor#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#tags_all RumAppMonitor#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * app_monitor_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}
    */
    readonly appMonitorConfiguration?: RumAppMonitorAppMonitorConfiguration;
    /**
    * custom_events block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}
    */
    readonly customEvents?: RumAppMonitorCustomEvents;
}
export interface RumAppMonitorAppMonitorConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}
    */
    readonly allowCookies?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}
    */
    readonly enableXray?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}
    */
    readonly excludedPages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}
    */
    readonly favoritePages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}
    */
    readonly guestRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}
    */
    readonly identityPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}
    */
    readonly includedPages?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}
    */
    readonly sessionSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}
    */
    readonly telemetries?: string[];
}
export declare function rumAppMonitorAppMonitorConfigurationToTerraform(struct?: RumAppMonitorAppMonitorConfigurationOutputReference | RumAppMonitorAppMonitorConfiguration): any;
export declare function rumAppMonitorAppMonitorConfigurationToHclTerraform(struct?: RumAppMonitorAppMonitorConfigurationOutputReference | RumAppMonitorAppMonitorConfiguration): any;
export declare class RumAppMonitorAppMonitorConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RumAppMonitorAppMonitorConfiguration | undefined;
    set internalValue(value: RumAppMonitorAppMonitorConfiguration | undefined);
    private _allowCookies?;
    get allowCookies(): boolean | cdktf.IResolvable;
    set allowCookies(value: boolean | cdktf.IResolvable);
    resetAllowCookies(): void;
    get allowCookiesInput(): boolean | cdktf.IResolvable | undefined;
    private _enableXray?;
    get enableXray(): boolean | cdktf.IResolvable;
    set enableXray(value: boolean | cdktf.IResolvable);
    resetEnableXray(): void;
    get enableXrayInput(): boolean | cdktf.IResolvable | undefined;
    private _excludedPages?;
    get excludedPages(): string[];
    set excludedPages(value: string[]);
    resetExcludedPages(): void;
    get excludedPagesInput(): string[] | undefined;
    private _favoritePages?;
    get favoritePages(): string[];
    set favoritePages(value: string[]);
    resetFavoritePages(): void;
    get favoritePagesInput(): string[] | undefined;
    private _guestRoleArn?;
    get guestRoleArn(): string;
    set guestRoleArn(value: string);
    resetGuestRoleArn(): void;
    get guestRoleArnInput(): string | undefined;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    resetIdentityPoolId(): void;
    get identityPoolIdInput(): string | undefined;
    private _includedPages?;
    get includedPages(): string[];
    set includedPages(value: string[]);
    resetIncludedPages(): void;
    get includedPagesInput(): string[] | undefined;
    private _sessionSampleRate?;
    get sessionSampleRate(): number;
    set sessionSampleRate(value: number);
    resetSessionSampleRate(): void;
    get sessionSampleRateInput(): number | undefined;
    private _telemetries?;
    get telemetries(): string[];
    set telemetries(value: string[]);
    resetTelemetries(): void;
    get telemetriesInput(): string[] | undefined;
}
export interface RumAppMonitorCustomEvents {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}
    */
    readonly status?: string;
}
export declare function rumAppMonitorCustomEventsToTerraform(struct?: RumAppMonitorCustomEventsOutputReference | RumAppMonitorCustomEvents): any;
export declare function rumAppMonitorCustomEventsToHclTerraform(struct?: RumAppMonitorCustomEventsOutputReference | RumAppMonitorCustomEvents): any;
export declare class RumAppMonitorCustomEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RumAppMonitorCustomEvents | undefined;
    set internalValue(value: RumAppMonitorCustomEvents | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor aws_rum_app_monitor}
*/
export declare class RumAppMonitor extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rum_app_monitor";
    /**
    * Generates CDKTF code for importing a RumAppMonitor resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RumAppMonitor to import
    * @param importFromId The id of the existing RumAppMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RumAppMonitor to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rum_app_monitor aws_rum_app_monitor} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RumAppMonitorConfig
    */
    constructor(scope: Construct, id: string, config: RumAppMonitorConfig);
    get appMonitorId(): string;
    get arn(): string;
    private _cwLogEnabled?;
    get cwLogEnabled(): boolean | cdktf.IResolvable;
    set cwLogEnabled(value: boolean | cdktf.IResolvable);
    resetCwLogEnabled(): void;
    get cwLogEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get cwLogGroup(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _appMonitorConfiguration;
    get appMonitorConfiguration(): RumAppMonitorAppMonitorConfigurationOutputReference;
    putAppMonitorConfiguration(value: RumAppMonitorAppMonitorConfiguration): void;
    resetAppMonitorConfiguration(): void;
    get appMonitorConfigurationInput(): RumAppMonitorAppMonitorConfiguration | undefined;
    private _customEvents;
    get customEvents(): RumAppMonitorCustomEventsOutputReference;
    putCustomEvents(value: RumAppMonitorCustomEvents): void;
    resetCustomEvents(): void;
    get customEventsInput(): RumAppMonitorCustomEvents | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
