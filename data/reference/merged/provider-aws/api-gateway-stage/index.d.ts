/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Whether a cache cluster is enabled for the stage */
    readonly cacheClusterEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) Size of the cache cluster for the stage, if enabled. Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`. */
    readonly cacheClusterSize?: string;
    /** (Optional) Identifier of a client certificate for the stage. */
    readonly clientCertificateId?: string;
    /** (Required) ID of the deployment that the stage points to */
    readonly deploymentId: string;
    /** (Optional) Description of the stage. */
    readonly description?: string;
    /** (Optional) Version of the associated API documentation */
    readonly documentationVersion?: string;
    /** */
    readonly id?: string;
    /** (Required) ID of the associated REST API */
    readonly restApiId: string;
    /** (Required) Name of the stage */
    readonly stageName: string;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Map that defines the stage variables */
    readonly variables?: {
        [key: string]: string;
    };
    /** (Optional) Whether active tracing with X-ray is enabled. Defaults to `false`. */
    readonly xrayTracingEnabled?: boolean | cdktf.IResolvable;
    /** */
    readonly accessLogSettings?: ApiGatewayStageAccessLogSettings;
    /** */
    readonly canarySettings?: ApiGatewayStageCanarySettings;
}
export interface ApiGatewayStageAccessLogSettings {
    /** (Required) ARN of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. Automatically removes trailing `:*` if present. */
    readonly destinationArn: string;
    /** (Required) Formatting and values recorded in the logs. */
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
    /** (Required) ID of the deployment that the canary points to. */
    readonly deploymentId: string;
    /** (Optional) Percent `0.0` - `100.0` of traffic to divert to the canary deployment. */
    readonly percentTraffic?: number;
    /** (Optional) Map of overridden stage `variables` (including new variables) for the canary deployment. */
    readonly stageVariableOverrides?: {
        [key: string]: string;
    };
    /** (Optional) Whether the canary deployment uses the stage cache. Defaults to false. */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_stage aws_api_gateway_stage}
*/
export declare class ApiGatewayStage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_stage";
    /**
    * Generates CDKTF code for importing a ApiGatewayStage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayStage to import
    * @param importFromId The id of the existing ApiGatewayStage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_stage#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayStage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_stage aws_api_gateway_stage} Resource
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
