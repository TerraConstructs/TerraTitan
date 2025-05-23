/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}
    */
    readonly cacheClusterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}
    */
    readonly cacheClusterSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}
    */
    readonly deploymentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#description ApiGatewayStage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}
    */
    readonly documentationVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#id ApiGatewayStage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#stage_name ApiGatewayStage#stage_name}
    */
    readonly stageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#tags ApiGatewayStage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#tags_all ApiGatewayStage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#variables ApiGatewayStage#variables}
    */
    readonly variables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}
    */
    readonly xrayTracingEnabled?: boolean | cdktf.IResolvable;
    /**
    * access_log_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}
    */
    readonly accessLogSettings?: ApiGatewayStageAccessLogSettings;
    /**
    * canary_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}
    */
    readonly canarySettings?: ApiGatewayStageCanarySettings;
}
export interface ApiGatewayStageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#format ApiGatewayStage#format}
    */
    readonly format: string;
}
export declare function apiGatewayStageAccessLogSettingsToTerraform(struct?: ApiGatewayStageAccessLogSettingsOutputReference | ApiGatewayStageAccessLogSettings): any;
export declare function apiGatewayStageAccessLogSettingsToHclTerraform(struct?: ApiGatewayStageAccessLogSettingsOutputReference | ApiGatewayStageAccessLogSettings): any;
export declare class ApiGatewayStageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayStageAccessLogSettings | undefined;
    set internalValue(value: ApiGatewayStageAccessLogSettings | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
}
export interface ApiGatewayStageCanarySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}
    */
    readonly deploymentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}
    */
    readonly percentTraffic?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}
    */
    readonly stageVariableOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}
    */
    readonly useStageCache?: boolean | cdktf.IResolvable;
}
export declare function apiGatewayStageCanarySettingsToTerraform(struct?: ApiGatewayStageCanarySettingsOutputReference | ApiGatewayStageCanarySettings): any;
export declare function apiGatewayStageCanarySettingsToHclTerraform(struct?: ApiGatewayStageCanarySettingsOutputReference | ApiGatewayStageCanarySettings): any;
export declare class ApiGatewayStageCanarySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayStageCanarySettings | undefined;
    set internalValue(value: ApiGatewayStageCanarySettings | undefined);
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    get deploymentIdInput(): string | undefined;
    private _percentTraffic?;
    get percentTraffic(): number;
    set percentTraffic(value: number);
    resetPercentTraffic(): void;
    get percentTrafficInput(): number | undefined;
    private _stageVariableOverrides?;
    get stageVariableOverrides(): {
        [key: string]: string;
    };
    set stageVariableOverrides(value: {
        [key: string]: string;
    });
    resetStageVariableOverrides(): void;
    get stageVariableOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _useStageCache?;
    get useStageCache(): boolean | cdktf.IResolvable;
    set useStageCache(value: boolean | cdktf.IResolvable);
    resetUseStageCache(): void;
    get useStageCacheInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage aws_api_gateway_stage}
*/
export declare class ApiGatewayStage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_stage";
    /**
    * Generates CDKTF code for importing a ApiGatewayStage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayStage to import
    * @param importFromId The id of the existing ApiGatewayStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayStage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_stage aws_api_gateway_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayStageConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayStageConfig);
    get arn(): string;
    private _cacheClusterEnabled?;
    get cacheClusterEnabled(): boolean | cdktf.IResolvable;
    set cacheClusterEnabled(value: boolean | cdktf.IResolvable);
    resetCacheClusterEnabled(): void;
    get cacheClusterEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cacheClusterSize?;
    get cacheClusterSize(): string;
    set cacheClusterSize(value: string);
    resetCacheClusterSize(): void;
    get cacheClusterSizeInput(): string | undefined;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string | undefined;
    private _deploymentId?;
    get deploymentId(): string;
    set deploymentId(value: string);
    get deploymentIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _documentationVersion?;
    get documentationVersion(): string;
    set documentationVersion(value: string);
    resetDocumentationVersion(): void;
    get documentationVersionInput(): string | undefined;
    get executionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeUrl(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    get stageNameInput(): string | undefined;
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
    private _variables?;
    get variables(): {
        [key: string]: string;
    };
    set variables(value: {
        [key: string]: string;
    });
    resetVariables(): void;
    get variablesInput(): {
        [key: string]: string;
    } | undefined;
    get webAclArn(): string;
    private _xrayTracingEnabled?;
    get xrayTracingEnabled(): boolean | cdktf.IResolvable;
    set xrayTracingEnabled(value: boolean | cdktf.IResolvable);
    resetXrayTracingEnabled(): void;
    get xrayTracingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _accessLogSettings;
    get accessLogSettings(): ApiGatewayStageAccessLogSettingsOutputReference;
    putAccessLogSettings(value: ApiGatewayStageAccessLogSettings): void;
    resetAccessLogSettings(): void;
    get accessLogSettingsInput(): ApiGatewayStageAccessLogSettings | undefined;
    private _canarySettings;
    get canarySettings(): ApiGatewayStageCanarySettingsOutputReference;
    putCanarySettings(value: ApiGatewayStageCanarySettings): void;
    resetCanarySettings(): void;
    get canarySettingsInput(): ApiGatewayStageCanarySettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
