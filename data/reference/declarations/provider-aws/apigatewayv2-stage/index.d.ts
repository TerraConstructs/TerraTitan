/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2StageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}
    */
    readonly autoDeploy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}
    */
    readonly deploymentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#description Apigatewayv2Stage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#id Apigatewayv2Stage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#name Apigatewayv2Stage#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}
    */
    readonly stageVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#tags Apigatewayv2Stage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * access_log_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}
    */
    readonly accessLogSettings?: Apigatewayv2StageAccessLogSettings;
    /**
    * default_route_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}
    */
    readonly defaultRouteSettings?: Apigatewayv2StageDefaultRouteSettings;
    /**
    * route_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}
    */
    readonly routeSettings?: Apigatewayv2StageRouteSettings[] | cdktf.IResolvable;
}
export interface Apigatewayv2StageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#format Apigatewayv2Stage#format}
    */
    readonly format: string;
}
export declare function apigatewayv2StageAccessLogSettingsToTerraform(struct?: Apigatewayv2StageAccessLogSettingsOutputReference | Apigatewayv2StageAccessLogSettings): any;
export declare function apigatewayv2StageAccessLogSettingsToHclTerraform(struct?: Apigatewayv2StageAccessLogSettingsOutputReference | Apigatewayv2StageAccessLogSettings): any;
export declare class Apigatewayv2StageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2StageAccessLogSettings | undefined;
    set internalValue(value: Apigatewayv2StageAccessLogSettings | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
}
export interface Apigatewayv2StageDefaultRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export declare function apigatewayv2StageDefaultRouteSettingsToTerraform(struct?: Apigatewayv2StageDefaultRouteSettingsOutputReference | Apigatewayv2StageDefaultRouteSettings): any;
export declare function apigatewayv2StageDefaultRouteSettingsToHclTerraform(struct?: Apigatewayv2StageDefaultRouteSettingsOutputReference | Apigatewayv2StageDefaultRouteSettings): any;
export declare class Apigatewayv2StageDefaultRouteSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2StageDefaultRouteSettings | undefined;
    set internalValue(value: Apigatewayv2StageDefaultRouteSettings | undefined);
    private _dataTraceEnabled?;
    get dataTraceEnabled(): boolean | cdktf.IResolvable;
    set dataTraceEnabled(value: boolean | cdktf.IResolvable);
    resetDataTraceEnabled(): void;
    get dataTraceEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _detailedMetricsEnabled?;
    get detailedMetricsEnabled(): boolean | cdktf.IResolvable;
    set detailedMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetDetailedMetricsEnabled(): void;
    get detailedMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string | undefined;
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
}
export interface Apigatewayv2StageRouteSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}
    */
    readonly detailedMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}
    */
    readonly routeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
}
export declare function apigatewayv2StageRouteSettingsToTerraform(struct?: Apigatewayv2StageRouteSettings | cdktf.IResolvable): any;
export declare function apigatewayv2StageRouteSettingsToHclTerraform(struct?: Apigatewayv2StageRouteSettings | cdktf.IResolvable): any;
export declare class Apigatewayv2StageRouteSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Apigatewayv2StageRouteSettings | cdktf.IResolvable | undefined;
    set internalValue(value: Apigatewayv2StageRouteSettings | cdktf.IResolvable | undefined);
    private _dataTraceEnabled?;
    get dataTraceEnabled(): boolean | cdktf.IResolvable;
    set dataTraceEnabled(value: boolean | cdktf.IResolvable);
    resetDataTraceEnabled(): void;
    get dataTraceEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _detailedMetricsEnabled?;
    get detailedMetricsEnabled(): boolean | cdktf.IResolvable;
    set detailedMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetDetailedMetricsEnabled(): void;
    get detailedMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string | undefined;
    private _routeKey?;
    get routeKey(): string;
    set routeKey(value: string);
    get routeKeyInput(): string | undefined;
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
}
export declare class Apigatewayv2StageRouteSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Apigatewayv2StageRouteSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Apigatewayv2StageRouteSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage aws_apigatewayv2_stage}
*/
export declare class Apigatewayv2Stage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_stage";
    /**
    * Generates CDKTF code for importing a Apigatewayv2Stage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Stage to import
    * @param importFromId The id of the existing Apigatewayv2Stage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Stage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_stage aws_apigatewayv2_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2StageConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2StageConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    get arn(): string;
    private _autoDeploy?;
    get autoDeploy(): boolean | cdktf.IResolvable;
    set autoDeploy(value: boolean | cdktf.IResolvable);
    resetAutoDeploy(): void;
    get autoDeployInput(): boolean | cdktf.IResolvable | undefined;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string | undefined;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    resetDeploymentId(): void;
    get deploymentIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get executionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeUrl(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _stageVariables?;
    get stageVariables(): {
        [key: string]: string;
    };
    set stageVariables(value: {
        [key: string]: string;
    });
    resetStageVariables(): void;
    get stageVariablesInput(): {
        [key: string]: string;
    } | undefined;
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
    private _accessLogSettings;
    get accessLogSettings(): Apigatewayv2StageAccessLogSettingsOutputReference;
    putAccessLogSettings(value: Apigatewayv2StageAccessLogSettings): void;
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): Apigatewayv2StageAccessLogSettings | undefined;
    private _defaultRouteSettings;
    get defaultRouteSettings(): Apigatewayv2StageDefaultRouteSettingsOutputReference;
    putDefaultRouteSettings(value: Apigatewayv2StageDefaultRouteSettings): void;
    resetDefaultRouteSettings(): void;
    get defaultRouteSettingsInput(): Apigatewayv2StageDefaultRouteSettings | undefined;
    private _routeSettings;
    get routeSettings(): Apigatewayv2StageRouteSettingsList;
    putRouteSettings(value: Apigatewayv2StageRouteSettings[] | cdktf.IResolvable): void;
    resetRouteSettings(): void;
    get routeSettingsInput(): cdktf.IResolvable | Apigatewayv2StageRouteSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
