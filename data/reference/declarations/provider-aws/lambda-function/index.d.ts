/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}
    */
    readonly codeSigningConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#description LambdaFunction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#filename LambdaFunction#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#handler LambdaFunction#handler}
    */
    readonly handler?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#id LambdaFunction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}
    */
    readonly imageUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#layers LambdaFunction#layers}
    */
    readonly layers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}
    */
    readonly memorySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}
    */
    readonly packageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#publish LambdaFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}
    */
    readonly replaceSecurityGroupsOnDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}
    */
    readonly replacementSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
    */
    readonly reservedConcurrentExecutions?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#role LambdaFunction#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#skip_destroy LambdaFunction#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#source_code_hash LambdaFunction#source_code_hash}
    */
    readonly sourceCodeHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#tags LambdaFunction#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#tags_all LambdaFunction#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}
    */
    readonly timeout?: number;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}
    */
    readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#environment LambdaFunction#environment}
    */
    readonly environment?: LambdaFunctionEnvironment;
    /**
    * ephemeral_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}
    */
    readonly ephemeralStorage?: LambdaFunctionEphemeralStorage;
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#file_system_config LambdaFunction#file_system_config}
    */
    readonly fileSystemConfig?: LambdaFunctionFileSystemConfig;
    /**
    * image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}
    */
    readonly imageConfig?: LambdaFunctionImageConfig;
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}
    */
    readonly loggingConfig?: LambdaFunctionLoggingConfig;
    /**
    * snap_start block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}
    */
    readonly snapStart?: LambdaFunctionSnapStart;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#timeouts LambdaFunction#timeouts}
    */
    readonly timeouts?: LambdaFunctionTimeouts;
    /**
    * tracing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}
    */
    readonly tracingConfig?: LambdaFunctionTracingConfig;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}
    */
    readonly vpcConfig?: LambdaFunctionVpcConfig;
}
export interface LambdaFunctionDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}
    */
    readonly targetArn: string;
}
export declare function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfigOutputReference | LambdaFunctionDeadLetterConfig): any;
export declare function lambdaFunctionDeadLetterConfigToHclTerraform(struct?: LambdaFunctionDeadLetterConfigOutputReference | LambdaFunctionDeadLetterConfig): any;
export declare class LambdaFunctionDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionDeadLetterConfig | undefined;
    set internalValue(value: LambdaFunctionDeadLetterConfig | undefined);
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
}
export interface LambdaFunctionEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#variables LambdaFunction#variables}
    */
    readonly variables?: {
        [key: string]: string;
    };
}
export declare function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironmentOutputReference | LambdaFunctionEnvironment): any;
export declare function lambdaFunctionEnvironmentToHclTerraform(struct?: LambdaFunctionEnvironmentOutputReference | LambdaFunctionEnvironment): any;
export declare class LambdaFunctionEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionEnvironment | undefined;
    set internalValue(value: LambdaFunctionEnvironment | undefined);
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
}
export interface LambdaFunctionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#size LambdaFunction#size}
    */
    readonly size?: number;
}
export declare function lambdaFunctionEphemeralStorageToTerraform(struct?: LambdaFunctionEphemeralStorageOutputReference | LambdaFunctionEphemeralStorage): any;
export declare function lambdaFunctionEphemeralStorageToHclTerraform(struct?: LambdaFunctionEphemeralStorageOutputReference | LambdaFunctionEphemeralStorage): any;
export declare class LambdaFunctionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionEphemeralStorage | undefined;
    set internalValue(value: LambdaFunctionEphemeralStorage | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    resetSize(): void;
    get sizeInput(): number | undefined;
}
export interface LambdaFunctionFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#arn LambdaFunction#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#local_mount_path LambdaFunction#local_mount_path}
    */
    readonly localMountPath: string;
}
export declare function lambdaFunctionFileSystemConfigToTerraform(struct?: LambdaFunctionFileSystemConfigOutputReference | LambdaFunctionFileSystemConfig): any;
export declare function lambdaFunctionFileSystemConfigToHclTerraform(struct?: LambdaFunctionFileSystemConfigOutputReference | LambdaFunctionFileSystemConfig): any;
export declare class LambdaFunctionFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionFileSystemConfig | undefined;
    set internalValue(value: LambdaFunctionFileSystemConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _localMountPath?;
    get localMountPath(): string;
    set localMountPath(value: string);
    get localMountPathInput(): string | undefined;
}
export interface LambdaFunctionImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#command LambdaFunction#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}
    */
    readonly workingDirectory?: string;
}
export declare function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfigOutputReference | LambdaFunctionImageConfig): any;
export declare function lambdaFunctionImageConfigToHclTerraform(struct?: LambdaFunctionImageConfigOutputReference | LambdaFunctionImageConfig): any;
export declare class LambdaFunctionImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionImageConfig | undefined;
    set internalValue(value: LambdaFunctionImageConfig | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _entryPoint?;
    get entryPoint(): string[];
    set entryPoint(value: string[]);
    resetEntryPoint(): void;
    get entryPointInput(): string[] | undefined;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string | undefined;
}
export interface LambdaFunctionLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}
    */
    readonly applicationLogLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}
    */
    readonly logFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}
    */
    readonly logGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}
    */
    readonly systemLogLevel?: string;
}
export declare function lambdaFunctionLoggingConfigToTerraform(struct?: LambdaFunctionLoggingConfigOutputReference | LambdaFunctionLoggingConfig): any;
export declare function lambdaFunctionLoggingConfigToHclTerraform(struct?: LambdaFunctionLoggingConfigOutputReference | LambdaFunctionLoggingConfig): any;
export declare class LambdaFunctionLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionLoggingConfig | undefined;
    set internalValue(value: LambdaFunctionLoggingConfig | undefined);
    private _applicationLogLevel?;
    get applicationLogLevel(): string;
    set applicationLogLevel(value: string);
    resetApplicationLogLevel(): void;
    get applicationLogLevelInput(): string | undefined;
    private _logFormat?;
    get logFormat(): string;
    set logFormat(value: string);
    get logFormatInput(): string | undefined;
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    resetLogGroup(): void;
    get logGroupInput(): string | undefined;
    private _systemLogLevel?;
    get systemLogLevel(): string;
    set systemLogLevel(value: string);
    resetSystemLogLevel(): void;
    get systemLogLevelInput(): string | undefined;
}
export interface LambdaFunctionSnapStart {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}
    */
    readonly applyOn: string;
}
export declare function lambdaFunctionSnapStartToTerraform(struct?: LambdaFunctionSnapStartOutputReference | LambdaFunctionSnapStart): any;
export declare function lambdaFunctionSnapStartToHclTerraform(struct?: LambdaFunctionSnapStartOutputReference | LambdaFunctionSnapStart): any;
export declare class LambdaFunctionSnapStartOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionSnapStart | undefined;
    set internalValue(value: LambdaFunctionSnapStart | undefined);
    private _applyOn?;
    get applyOn(): string;
    set applyOn(value: string);
    get applyOnInput(): string | undefined;
    get optimizationStatus(): string;
}
export interface LambdaFunctionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#create LambdaFunction#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#delete LambdaFunction#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#update LambdaFunction#update}
    */
    readonly update?: string;
}
export declare function lambdaFunctionTimeoutsToTerraform(struct?: LambdaFunctionTimeouts | cdktf.IResolvable): any;
export declare function lambdaFunctionTimeoutsToHclTerraform(struct?: LambdaFunctionTimeouts | cdktf.IResolvable): any;
export declare class LambdaFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LambdaFunctionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface LambdaFunctionTracingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#mode LambdaFunction#mode}
    */
    readonly mode: string;
}
export declare function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfigOutputReference | LambdaFunctionTracingConfig): any;
export declare function lambdaFunctionTracingConfigToHclTerraform(struct?: LambdaFunctionTracingConfigOutputReference | LambdaFunctionTracingConfig): any;
export declare class LambdaFunctionTracingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionTracingConfig | undefined;
    set internalValue(value: LambdaFunctionTracingConfig | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
}
export interface LambdaFunctionVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#ipv6_allowed_for_dual_stack LambdaFunction#ipv6_allowed_for_dual_stack}
    */
    readonly ipv6AllowedForDualStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfigOutputReference | LambdaFunctionVpcConfig): any;
export declare function lambdaFunctionVpcConfigToHclTerraform(struct?: LambdaFunctionVpcConfigOutputReference | LambdaFunctionVpcConfig): any;
export declare class LambdaFunctionVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionVpcConfig | undefined;
    set internalValue(value: LambdaFunctionVpcConfig | undefined);
    private _ipv6AllowedForDualStack?;
    get ipv6AllowedForDualStack(): boolean | cdktf.IResolvable;
    set ipv6AllowedForDualStack(value: boolean | cdktf.IResolvable);
    resetIpv6AllowedForDualStack(): void;
    get ipv6AllowedForDualStackInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function aws_lambda_function}
*/
export declare class LambdaFunction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_function";
    /**
    * Generates CDKTF code for importing a LambdaFunction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaFunction to import
    * @param importFromId The id of the existing LambdaFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaFunction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function aws_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionConfig);
    private _architectures?;
    get architectures(): string[];
    set architectures(value: string[]);
    resetArchitectures(): void;
    get architecturesInput(): string[] | undefined;
    get arn(): string;
    get codeSha256(): string;
    private _codeSigningConfigArn?;
    get codeSigningConfigArn(): string;
    set codeSigningConfigArn(value: string);
    resetCodeSigningConfigArn(): void;
    get codeSigningConfigArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _filename?;
    get filename(): string;
    set filename(value: string);
    resetFilename(): void;
    get filenameInput(): string | undefined;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    resetHandler(): void;
    get handlerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageUri?;
    get imageUri(): string;
    set imageUri(value: string);
    resetImageUri(): void;
    get imageUriInput(): string | undefined;
    get invokeArn(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    get lastModified(): string;
    private _layers?;
    get layers(): string[];
    set layers(value: string[]);
    resetLayers(): void;
    get layersInput(): string[] | undefined;
    private _memorySize?;
    get memorySize(): number;
    set memorySize(value: number);
    resetMemorySize(): void;
    get memorySizeInput(): number | undefined;
    private _packageType?;
    get packageType(): string;
    set packageType(value: string);
    resetPackageType(): void;
    get packageTypeInput(): string | undefined;
    private _publish?;
    get publish(): boolean | cdktf.IResolvable;
    set publish(value: boolean | cdktf.IResolvable);
    resetPublish(): void;
    get publishInput(): boolean | cdktf.IResolvable | undefined;
    get qualifiedArn(): string;
    get qualifiedInvokeArn(): string;
    private _replaceSecurityGroupsOnDestroy?;
    get replaceSecurityGroupsOnDestroy(): boolean | cdktf.IResolvable;
    set replaceSecurityGroupsOnDestroy(value: boolean | cdktf.IResolvable);
    resetReplaceSecurityGroupsOnDestroy(): void;
    get replaceSecurityGroupsOnDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _replacementSecurityGroupIds?;
    get replacementSecurityGroupIds(): string[];
    set replacementSecurityGroupIds(value: string[]);
    resetReplacementSecurityGroupIds(): void;
    get replacementSecurityGroupIdsInput(): string[] | undefined;
    private _reservedConcurrentExecutions?;
    get reservedConcurrentExecutions(): number;
    set reservedConcurrentExecutions(value: number);
    resetReservedConcurrentExecutions(): void;
    get reservedConcurrentExecutionsInput(): number | undefined;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string | undefined;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    resetS3Bucket(): void;
    get s3BucketInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    resetS3Key(): void;
    get s3KeyInput(): string | undefined;
    private _s3ObjectVersion?;
    get s3ObjectVersion(): string;
    set s3ObjectVersion(value: string);
    resetS3ObjectVersion(): void;
    get s3ObjectVersionInput(): string | undefined;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceCodeHash?;
    get sourceCodeHash(): string;
    set sourceCodeHash(value: string);
    resetSourceCodeHash(): void;
    get sourceCodeHashInput(): string | undefined;
    get sourceCodeSize(): number;
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
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    get version(): string;
    private _deadLetterConfig;
    get deadLetterConfig(): LambdaFunctionDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: LambdaFunctionDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): LambdaFunctionDeadLetterConfig | undefined;
    private _environment;
    get environment(): LambdaFunctionEnvironmentOutputReference;
    putEnvironment(value: LambdaFunctionEnvironment): void;
    resetEnvironment(): void;
    get environmentInput(): LambdaFunctionEnvironment | undefined;
    private _ephemeralStorage;
    get ephemeralStorage(): LambdaFunctionEphemeralStorageOutputReference;
    putEphemeralStorage(value: LambdaFunctionEphemeralStorage): void;
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): LambdaFunctionEphemeralStorage | undefined;
    private _fileSystemConfig;
    get fileSystemConfig(): LambdaFunctionFileSystemConfigOutputReference;
    putFileSystemConfig(value: LambdaFunctionFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): LambdaFunctionFileSystemConfig | undefined;
    private _imageConfig;
    get imageConfig(): LambdaFunctionImageConfigOutputReference;
    putImageConfig(value: LambdaFunctionImageConfig): void;
    resetImageConfig(): void;
    get imageConfigInput(): LambdaFunctionImageConfig | undefined;
    private _loggingConfig;
    get loggingConfig(): LambdaFunctionLoggingConfigOutputReference;
    putLoggingConfig(value: LambdaFunctionLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): LambdaFunctionLoggingConfig | undefined;
    private _snapStart;
    get snapStart(): LambdaFunctionSnapStartOutputReference;
    putSnapStart(value: LambdaFunctionSnapStart): void;
    resetSnapStart(): void;
    get snapStartInput(): LambdaFunctionSnapStart | undefined;
    private _timeouts;
    get timeouts(): LambdaFunctionTimeoutsOutputReference;
    putTimeouts(value: LambdaFunctionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LambdaFunctionTimeouts | undefined;
    private _tracingConfig;
    get tracingConfig(): LambdaFunctionTracingConfigOutputReference;
    putTracingConfig(value: LambdaFunctionTracingConfig): void;
    resetTracingConfig(): void;
    get tracingConfigInput(): LambdaFunctionTracingConfig | undefined;
    private _vpcConfig;
    get vpcConfig(): LambdaFunctionVpcConfigOutputReference;
    putVpcConfig(value: LambdaFunctionVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): LambdaFunctionVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
