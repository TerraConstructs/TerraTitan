/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#api_id AppsyncFunction#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#code AppsyncFunction#code}
    */
    readonly code?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#data_source AppsyncFunction#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#description AppsyncFunction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#function_version AppsyncFunction#function_version}
    */
    readonly functionVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#id AppsyncFunction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#max_batch_size AppsyncFunction#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#name AppsyncFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}
    */
    readonly requestMappingTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}
    */
    readonly responseMappingTemplate?: string;
    /**
    * runtime block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#runtime AppsyncFunction#runtime}
    */
    readonly runtime?: AppsyncFunctionRuntime;
    /**
    * sync_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#sync_config AppsyncFunction#sync_config}
    */
    readonly syncConfig?: AppsyncFunctionSyncConfig;
}
export interface AppsyncFunctionRuntime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#name AppsyncFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#runtime_version AppsyncFunction#runtime_version}
    */
    readonly runtimeVersion: string;
}
export declare function appsyncFunctionRuntimeToTerraform(struct?: AppsyncFunctionRuntimeOutputReference | AppsyncFunctionRuntime): any;
export declare function appsyncFunctionRuntimeToHclTerraform(struct?: AppsyncFunctionRuntimeOutputReference | AppsyncFunctionRuntime): any;
export declare class AppsyncFunctionRuntimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncFunctionRuntime | undefined;
    set internalValue(value: AppsyncFunctionRuntime | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _runtimeVersion?;
    get runtimeVersion(): string;
    set runtimeVersion(value: string);
    get runtimeVersionInput(): string | undefined;
}
export interface AppsyncFunctionSyncConfigLambdaConflictHandlerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}
    */
    readonly lambdaConflictHandlerArn?: string;
}
export declare function appsyncFunctionSyncConfigLambdaConflictHandlerConfigToTerraform(struct?: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): any;
export declare function appsyncFunctionSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct?: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): any;
export declare class AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncFunctionSyncConfigLambdaConflictHandlerConfig | undefined;
    set internalValue(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig | undefined);
    private _lambdaConflictHandlerArn?;
    get lambdaConflictHandlerArn(): string;
    set lambdaConflictHandlerArn(value: string);
    resetLambdaConflictHandlerArn(): void;
    get lambdaConflictHandlerArnInput(): string | undefined;
}
export interface AppsyncFunctionSyncConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#conflict_detection AppsyncFunction#conflict_detection}
    */
    readonly conflictDetection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#conflict_handler AppsyncFunction#conflict_handler}
    */
    readonly conflictHandler?: string;
    /**
    * lambda_conflict_handler_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}
    */
    readonly lambdaConflictHandlerConfig?: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
}
export declare function appsyncFunctionSyncConfigToTerraform(struct?: AppsyncFunctionSyncConfigOutputReference | AppsyncFunctionSyncConfig): any;
export declare function appsyncFunctionSyncConfigToHclTerraform(struct?: AppsyncFunctionSyncConfigOutputReference | AppsyncFunctionSyncConfig): any;
export declare class AppsyncFunctionSyncConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncFunctionSyncConfig | undefined;
    set internalValue(value: AppsyncFunctionSyncConfig | undefined);
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
    get lambdaConflictHandlerConfig(): AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference;
    putLambdaConflictHandlerConfig(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): void;
    resetLambdaConflictHandlerConfig(): void;
    get lambdaConflictHandlerConfigInput(): AppsyncFunctionSyncConfigLambdaConflictHandlerConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function aws_appsync_function}
*/
export declare class AppsyncFunction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_function";
    /**
    * Generates CDKTF code for importing a AppsyncFunction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncFunction to import
    * @param importFromId The id of the existing AppsyncFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncFunction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_function aws_appsync_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncFunctionConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncFunctionConfig);
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
    get dataSourceInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get functionId(): string;
    private _functionVersion?;
    get functionVersion(): string;
    set functionVersion(value: string);
    resetFunctionVersion(): void;
    get functionVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxBatchSize?;
    get maxBatchSize(): number;
    set maxBatchSize(value: number);
    resetMaxBatchSize(): void;
    get maxBatchSizeInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _requestMappingTemplate?;
    get requestMappingTemplate(): string;
    set requestMappingTemplate(value: string);
    resetRequestMappingTemplate(): void;
    get requestMappingTemplateInput(): string | undefined;
    private _responseMappingTemplate?;
    get responseMappingTemplate(): string;
    set responseMappingTemplate(value: string);
    resetResponseMappingTemplate(): void;
    get responseMappingTemplateInput(): string | undefined;
    private _runtime;
    get runtime(): AppsyncFunctionRuntimeOutputReference;
    putRuntime(value: AppsyncFunctionRuntime): void;
    resetRuntime(): void;
    get runtimeInput(): AppsyncFunctionRuntime | undefined;
    private _syncConfig;
    get syncConfig(): AppsyncFunctionSyncConfigOutputReference;
    putSyncConfig(value: AppsyncFunctionSyncConfig): void;
    resetSyncConfig(): void;
    get syncConfigInput(): AppsyncFunctionSyncConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
