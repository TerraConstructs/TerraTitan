/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#code AppsyncResolver#code}
    */
    readonly code?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#data_source AppsyncResolver#data_source}
    */
    readonly dataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#field AppsyncResolver#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#id AppsyncResolver#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}
    */
    readonly kind?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#request_template AppsyncResolver#request_template}
    */
    readonly requestTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#response_template AppsyncResolver#response_template}
    */
    readonly responseTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#type AppsyncResolver#type}
    */
    readonly type: string;
    /**
    * caching_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}
    */
    readonly cachingConfig?: AppsyncResolverCachingConfig;
    /**
    * pipeline_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}
    */
    readonly pipelineConfig?: AppsyncResolverPipelineConfig;
    /**
    * runtime block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}
    */
    readonly runtime?: AppsyncResolverRuntime;
    /**
    * sync_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}
    */
    readonly syncConfig?: AppsyncResolverSyncConfig;
}
export interface AppsyncResolverCachingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}
    */
    readonly cachingKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}
    */
    readonly ttl?: number;
}
export declare function appsyncResolverCachingConfigToTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any;
export declare function appsyncResolverCachingConfigToHclTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any;
export declare class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncResolverCachingConfig | undefined;
    set internalValue(value: AppsyncResolverCachingConfig | undefined);
    private _cachingKeys?;
    get cachingKeys(): string[];
    set cachingKeys(value: string[]);
    resetCachingKeys(): void;
    get cachingKeysInput(): string[] | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number | undefined;
}
export interface AppsyncResolverPipelineConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}
    */
    readonly functions?: string[];
}
export declare function appsyncResolverPipelineConfigToTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any;
export declare function appsyncResolverPipelineConfigToHclTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any;
export declare class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncResolverPipelineConfig | undefined;
    set internalValue(value: AppsyncResolverPipelineConfig | undefined);
    private _functions?;
    get functions(): string[];
    set functions(value: string[]);
    resetFunctions(): void;
    get functionsInput(): string[] | undefined;
}
export interface AppsyncResolverRuntime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#name AppsyncResolver#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}
    */
    readonly runtimeVersion: string;
}
export declare function appsyncResolverRuntimeToTerraform(struct?: AppsyncResolverRuntimeOutputReference | AppsyncResolverRuntime): any;
export declare function appsyncResolverRuntimeToHclTerraform(struct?: AppsyncResolverRuntimeOutputReference | AppsyncResolverRuntime): any;
export declare class AppsyncResolverRuntimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncResolverRuntime | undefined;
    set internalValue(value: AppsyncResolverRuntime | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _runtimeVersion?;
    get runtimeVersion(): string;
    set runtimeVersion(value: string);
    get runtimeVersionInput(): string | undefined;
}
export interface AppsyncResolverSyncConfigLambdaConflictHandlerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}
    */
    readonly lambdaConflictHandlerArn?: string;
}
export declare function appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform(struct?: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncResolverSyncConfigLambdaConflictHandlerConfig): any;
export declare function appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct?: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncResolverSyncConfigLambdaConflictHandlerConfig): any;
export declare class AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncResolverSyncConfigLambdaConflictHandlerConfig | undefined;
    set internalValue(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig | undefined);
    private _lambdaConflictHandlerArn?;
    get lambdaConflictHandlerArn(): string;
    set lambdaConflictHandlerArn(value: string);
    resetLambdaConflictHandlerArn(): void;
    get lambdaConflictHandlerArnInput(): string | undefined;
}
export interface AppsyncResolverSyncConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}
    */
    readonly conflictDetection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}
    */
    readonly conflictHandler?: string;
    /**
    * lambda_conflict_handler_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}
    */
    readonly lambdaConflictHandlerConfig?: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
}
export declare function appsyncResolverSyncConfigToTerraform(struct?: AppsyncResolverSyncConfigOutputReference | AppsyncResolverSyncConfig): any;
export declare function appsyncResolverSyncConfigToHclTerraform(struct?: AppsyncResolverSyncConfigOutputReference | AppsyncResolverSyncConfig): any;
export declare class AppsyncResolverSyncConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncResolverSyncConfig | undefined;
    set internalValue(value: AppsyncResolverSyncConfig | undefined);
    private _conflictDetection?;
    get conflictDetection(): string;
    set conflictDetection(value: string);
    resetConflictDetection(): void;
    get conflictDetectionInput(): string | undefined;
    private _conflictHandler?;
    get conflictHandler(): string;
    set conflictHandler(value: string);
    resetConflictHandler(): void;
    get conflictHandlerInput(): string | undefined;
    private _lambdaConflictHandlerConfig;
    get lambdaConflictHandlerConfig(): AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference;
    putLambdaConflictHandlerConfig(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig): void;
    resetLambdaConflictHandlerConfig(): void;
    get lambdaConflictHandlerConfigInput(): AppsyncResolverSyncConfigLambdaConflictHandlerConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver aws_appsync_resolver}
*/
export declare class AppsyncResolver extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_resolver";
    /**
    * Generates CDKTF code for importing a AppsyncResolver resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncResolver to import
    * @param importFromId The id of the existing AppsyncResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncResolver to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_resolver aws_appsync_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncResolverConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncResolverConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    resetCode(): void;
    get codeInput(): string | undefined;
    private _dataSource?;
    get dataSource(): string;
    set dataSource(value: string);
    resetDataSource(): void;
    get dataSourceInput(): string | undefined;
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kind?;
    get kind(): string;
    set kind(value: string);
    resetKind(): void;
    get kindInput(): string | undefined;
    private _maxBatchSize?;
    get maxBatchSize(): number;
    set maxBatchSize(value: number);
    resetMaxBatchSize(): void;
    get maxBatchSizeInput(): number | undefined;
    private _requestTemplate?;
    get requestTemplate(): string;
    set requestTemplate(value: string);
    resetRequestTemplate(): void;
    get requestTemplateInput(): string | undefined;
    private _responseTemplate?;
    get responseTemplate(): string;
    set responseTemplate(value: string);
    resetResponseTemplate(): void;
    get responseTemplateInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _cachingConfig;
    get cachingConfig(): AppsyncResolverCachingConfigOutputReference;
    putCachingConfig(value: AppsyncResolverCachingConfig): void;
    resetCachingConfig(): void;
    get cachingConfigInput(): AppsyncResolverCachingConfig | undefined;
    private _pipelineConfig;
    get pipelineConfig(): AppsyncResolverPipelineConfigOutputReference;
    putPipelineConfig(value: AppsyncResolverPipelineConfig): void;
    resetPipelineConfig(): void;
    get pipelineConfigInput(): AppsyncResolverPipelineConfig | undefined;
    private _runtime;
    get runtime(): AppsyncResolverRuntimeOutputReference;
    putRuntime(value: AppsyncResolverRuntime): void;
    resetRuntime(): void;
    get runtimeInput(): AppsyncResolverRuntime | undefined;
    private _syncConfig;
    get syncConfig(): AppsyncResolverSyncConfigOutputReference;
    putSyncConfig(value: AppsyncResolverSyncConfig): void;
    resetSyncConfig(): void;
    get syncConfigInput(): AppsyncResolverSyncConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
