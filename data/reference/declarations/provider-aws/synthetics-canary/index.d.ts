/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SyntheticsCanaryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}
    */
    readonly artifactS3Location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#delete_lambda SyntheticsCanary#delete_lambda}
    */
    readonly deleteLambda?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}
    */
    readonly failureRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}
    */
    readonly handler: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#id SyntheticsCanary#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#name SyntheticsCanary#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}
    */
    readonly runtimeVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#s3_version SyntheticsCanary#s3_version}
    */
    readonly s3Version?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#start_canary SyntheticsCanary#start_canary}
    */
    readonly startCanary?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}
    */
    readonly successRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#tags_all SyntheticsCanary#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#zip_file SyntheticsCanary#zip_file}
    */
    readonly zipFile?: string;
    /**
    * artifact_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}
    */
    readonly artifactConfig?: SyntheticsCanaryArtifactConfig;
    /**
    * run_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}
    */
    readonly runConfig?: SyntheticsCanaryRunConfig;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}
    */
    readonly schedule: SyntheticsCanarySchedule;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}
    */
    readonly vpcConfig?: SyntheticsCanaryVpcConfig;
}
export interface SyntheticsCanaryTimeline {
}
export declare function syntheticsCanaryTimelineToTerraform(struct?: SyntheticsCanaryTimeline): any;
export declare function syntheticsCanaryTimelineToHclTerraform(struct?: SyntheticsCanaryTimeline): any;
export declare class SyntheticsCanaryTimelineOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SyntheticsCanaryTimeline | undefined;
    set internalValue(value: SyntheticsCanaryTimeline | undefined);
    get created(): string;
    get lastModified(): string;
    get lastStarted(): string;
    get lastStopped(): string;
}
export declare class SyntheticsCanaryTimelineList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SyntheticsCanaryTimelineOutputReference;
}
export interface SyntheticsCanaryArtifactConfigS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function syntheticsCanaryArtifactConfigS3EncryptionToTerraform(struct?: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference | SyntheticsCanaryArtifactConfigS3Encryption): any;
export declare function syntheticsCanaryArtifactConfigS3EncryptionToHclTerraform(struct?: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference | SyntheticsCanaryArtifactConfigS3Encryption): any;
export declare class SyntheticsCanaryArtifactConfigS3EncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SyntheticsCanaryArtifactConfigS3Encryption | undefined;
    set internalValue(value: SyntheticsCanaryArtifactConfigS3Encryption | undefined);
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface SyntheticsCanaryArtifactConfig {
    /**
    * s3_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}
    */
    readonly s3Encryption?: SyntheticsCanaryArtifactConfigS3Encryption;
}
export declare function syntheticsCanaryArtifactConfigToTerraform(struct?: SyntheticsCanaryArtifactConfigOutputReference | SyntheticsCanaryArtifactConfig): any;
export declare function syntheticsCanaryArtifactConfigToHclTerraform(struct?: SyntheticsCanaryArtifactConfigOutputReference | SyntheticsCanaryArtifactConfig): any;
export declare class SyntheticsCanaryArtifactConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SyntheticsCanaryArtifactConfig | undefined;
    set internalValue(value: SyntheticsCanaryArtifactConfig | undefined);
    private _s3Encryption;
    get s3Encryption(): SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;
    putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption): void;
    resetS3Encryption(): void;
    get s3EncryptionInput(): SyntheticsCanaryArtifactConfigS3Encryption | undefined;
}
export interface SyntheticsCanaryRunConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}
    */
    readonly activeTracing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#environment_variables SyntheticsCanary#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}
    */
    readonly memoryInMb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export declare function syntheticsCanaryRunConfigToTerraform(struct?: SyntheticsCanaryRunConfigOutputReference | SyntheticsCanaryRunConfig): any;
export declare function syntheticsCanaryRunConfigToHclTerraform(struct?: SyntheticsCanaryRunConfigOutputReference | SyntheticsCanaryRunConfig): any;
export declare class SyntheticsCanaryRunConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SyntheticsCanaryRunConfig | undefined;
    set internalValue(value: SyntheticsCanaryRunConfig | undefined);
    private _activeTracing?;
    get activeTracing(): boolean | cdktf.IResolvable;
    set activeTracing(value: boolean | cdktf.IResolvable);
    resetActiveTracing(): void;
    get activeTracingInput(): boolean | cdktf.IResolvable | undefined;
    private _environmentVariables?;
    get environmentVariables(): {
        [key: string]: string;
    };
    set environmentVariables(value: {
        [key: string]: string;
    });
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
    private _memoryInMb?;
    get memoryInMb(): number;
    set memoryInMb(value: number);
    resetMemoryInMb(): void;
    get memoryInMbInput(): number | undefined;
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number | undefined;
}
export interface SyntheticsCanarySchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}
    */
    readonly durationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}
    */
    readonly expression: string;
}
export declare function syntheticsCanaryScheduleToTerraform(struct?: SyntheticsCanaryScheduleOutputReference | SyntheticsCanarySchedule): any;
export declare function syntheticsCanaryScheduleToHclTerraform(struct?: SyntheticsCanaryScheduleOutputReference | SyntheticsCanarySchedule): any;
export declare class SyntheticsCanaryScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SyntheticsCanarySchedule | undefined;
    set internalValue(value: SyntheticsCanarySchedule | undefined);
    private _durationInSeconds?;
    get durationInSeconds(): number;
    set durationInSeconds(value: number);
    resetDurationInSeconds(): void;
    get durationInSecondsInput(): number | undefined;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string | undefined;
}
export interface SyntheticsCanaryVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function syntheticsCanaryVpcConfigToTerraform(struct?: SyntheticsCanaryVpcConfigOutputReference | SyntheticsCanaryVpcConfig): any;
export declare function syntheticsCanaryVpcConfigToHclTerraform(struct?: SyntheticsCanaryVpcConfigOutputReference | SyntheticsCanaryVpcConfig): any;
export declare class SyntheticsCanaryVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SyntheticsCanaryVpcConfig | undefined;
    set internalValue(value: SyntheticsCanaryVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary aws_synthetics_canary}
*/
export declare class SyntheticsCanary extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_synthetics_canary";
    /**
    * Generates CDKTF code for importing a SyntheticsCanary resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SyntheticsCanary to import
    * @param importFromId The id of the existing SyntheticsCanary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SyntheticsCanary to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_canary aws_synthetics_canary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SyntheticsCanaryConfig
    */
    constructor(scope: Construct, id: string, config: SyntheticsCanaryConfig);
    get arn(): string;
    private _artifactS3Location?;
    get artifactS3Location(): string;
    set artifactS3Location(value: string);
    get artifactS3LocationInput(): string | undefined;
    private _deleteLambda?;
    get deleteLambda(): boolean | cdktf.IResolvable;
    set deleteLambda(value: boolean | cdktf.IResolvable);
    resetDeleteLambda(): void;
    get deleteLambdaInput(): boolean | cdktf.IResolvable | undefined;
    get engineArn(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _failureRetentionPeriod?;
    get failureRetentionPeriod(): number;
    set failureRetentionPeriod(value: number);
    resetFailureRetentionPeriod(): void;
    get failureRetentionPeriodInput(): number | undefined;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    get handlerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _runtimeVersion?;
    get runtimeVersion(): string;
    set runtimeVersion(value: string);
    get runtimeVersionInput(): string | undefined;
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
    private _s3Version?;
    get s3Version(): string;
    set s3Version(value: string);
    resetS3Version(): void;
    get s3VersionInput(): string | undefined;
    get sourceLocationArn(): string;
    private _startCanary?;
    get startCanary(): boolean | cdktf.IResolvable;
    set startCanary(value: boolean | cdktf.IResolvable);
    resetStartCanary(): void;
    get startCanaryInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
    private _successRetentionPeriod?;
    get successRetentionPeriod(): number;
    set successRetentionPeriod(value: number);
    resetSuccessRetentionPeriod(): void;
    get successRetentionPeriodInput(): number | undefined;
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
    private _timeline;
    get timeline(): SyntheticsCanaryTimelineList;
    private _zipFile?;
    get zipFile(): string;
    set zipFile(value: string);
    resetZipFile(): void;
    get zipFileInput(): string | undefined;
    private _artifactConfig;
    get artifactConfig(): SyntheticsCanaryArtifactConfigOutputReference;
    putArtifactConfig(value: SyntheticsCanaryArtifactConfig): void;
    resetArtifactConfig(): void;
    get artifactConfigInput(): SyntheticsCanaryArtifactConfig | undefined;
    private _runConfig;
    get runConfig(): SyntheticsCanaryRunConfigOutputReference;
    putRunConfig(value: SyntheticsCanaryRunConfig): void;
    resetRunConfig(): void;
    get runConfigInput(): SyntheticsCanaryRunConfig | undefined;
    private _schedule;
    get schedule(): SyntheticsCanaryScheduleOutputReference;
    putSchedule(value: SyntheticsCanarySchedule): void;
    get scheduleInput(): SyntheticsCanarySchedule | undefined;
    private _vpcConfig;
    get vpcConfig(): SyntheticsCanaryVpcConfigOutputReference;
    putVpcConfig(value: SyntheticsCanaryVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): SyntheticsCanaryVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
