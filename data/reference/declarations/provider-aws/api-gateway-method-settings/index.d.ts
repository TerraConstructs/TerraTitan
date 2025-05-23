/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#id ApiGatewayMethodSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#method_path ApiGatewayMethodSettings#method_path}
    */
    readonly methodPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#rest_api_id ApiGatewayMethodSettings#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#stage_name ApiGatewayMethodSettings#stage_name}
    */
    readonly stageName: string;
    /**
    * settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#settings ApiGatewayMethodSettings#settings}
    */
    readonly settings: ApiGatewayMethodSettingsSettings;
}
export interface ApiGatewayMethodSettingsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
    */
    readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
    */
    readonly cacheTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#caching_enabled ApiGatewayMethodSettings#caching_enabled}
    */
    readonly cachingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#logging_level ApiGatewayMethodSettings#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
    */
    readonly metricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
    */
    readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
    */
    readonly unauthorizedCacheControlHeaderStrategy?: string;
}
export declare function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any;
export declare function apiGatewayMethodSettingsSettingsToHclTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any;
export declare class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayMethodSettingsSettings | undefined;
    set internalValue(value: ApiGatewayMethodSettingsSettings | undefined);
    private _cacheDataEncrypted?;
    get cacheDataEncrypted(): boolean | cdktf.IResolvable;
    set cacheDataEncrypted(value: boolean | cdktf.IResolvable);
    resetCacheDataEncrypted(): void;
    get cacheDataEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _cacheTtlInSeconds?;
    get cacheTtlInSeconds(): number;
    set cacheTtlInSeconds(value: number);
    resetCacheTtlInSeconds(): void;
    get cacheTtlInSecondsInput(): number | undefined;
    private _cachingEnabled?;
    get cachingEnabled(): boolean | cdktf.IResolvable;
    set cachingEnabled(value: boolean | cdktf.IResolvable);
    resetCachingEnabled(): void;
    get cachingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _dataTraceEnabled?;
    get dataTraceEnabled(): boolean | cdktf.IResolvable;
    set dataTraceEnabled(value: boolean | cdktf.IResolvable);
    resetDataTraceEnabled(): void;
    get dataTraceEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string | undefined;
    private _metricsEnabled?;
    get metricsEnabled(): boolean | cdktf.IResolvable;
    set metricsEnabled(value: boolean | cdktf.IResolvable);
    resetMetricsEnabled(): void;
    get metricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _requireAuthorizationForCacheControl?;
    get requireAuthorizationForCacheControl(): boolean | cdktf.IResolvable;
    set requireAuthorizationForCacheControl(value: boolean | cdktf.IResolvable);
    resetRequireAuthorizationForCacheControl(): void;
    get requireAuthorizationForCacheControlInput(): boolean | cdktf.IResolvable | undefined;
    private _throttlingBurstLimit?;
    get throttlingBurstLimit(): number;
    set throttlingBurstLimit(value: number);
    resetThrottlingBurstLimit(): void;
    get throttlingBurstLimitInput(): number | undefined;
    private _throttlingRateLimit?;
    get throttlingRateLimit(): number;
    set throttlingRateLimit(value: number);
    resetThrottlingRateLimit(): void;
    get throttlingRateLimitInput(): number | undefined;
    private _unauthorizedCacheControlHeaderStrategy?;
    get unauthorizedCacheControlHeaderStrategy(): string;
    set unauthorizedCacheControlHeaderStrategy(value: string);
    resetUnauthorizedCacheControlHeaderStrategy(): void;
    get unauthorizedCacheControlHeaderStrategyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings aws_api_gateway_method_settings}
*/
export declare class ApiGatewayMethodSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_method_settings";
    /**
    * Generates CDKTF code for importing a ApiGatewayMethodSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayMethodSettings to import
    * @param importFromId The id of the existing ApiGatewayMethodSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayMethodSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method_settings aws_api_gateway_method_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _methodPath?;
    get methodPath(): string;
    set methodPath(value: string);
    get methodPathInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string | undefined;
    private _settings;
    get settings(): ApiGatewayMethodSettingsSettingsOutputReference;
    putSettings(value: ApiGatewayMethodSettingsSettings): void;
    get settingsInput(): ApiGatewayMethodSettingsSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
