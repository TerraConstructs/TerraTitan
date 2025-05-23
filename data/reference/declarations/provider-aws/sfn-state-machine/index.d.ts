/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SfnStateMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}
    */
    readonly definition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}
    */
    readonly type?: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#encryption_configuration SfnStateMachine#encryption_configuration}
    */
    readonly encryptionConfiguration?: SfnStateMachineEncryptionConfiguration;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}
    */
    readonly loggingConfiguration?: SfnStateMachineLoggingConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#timeouts SfnStateMachine#timeouts}
    */
    readonly timeouts?: SfnStateMachineTimeouts;
    /**
    * tracing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}
    */
    readonly tracingConfiguration?: SfnStateMachineTracingConfiguration;
}
export interface SfnStateMachineEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#kms_data_key_reuse_period_seconds SfnStateMachine#kms_data_key_reuse_period_seconds}
    */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#kms_key_id SfnStateMachine#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}
    */
    readonly type?: string;
}
export declare function sfnStateMachineEncryptionConfigurationToTerraform(struct?: SfnStateMachineEncryptionConfigurationOutputReference | SfnStateMachineEncryptionConfiguration): any;
export declare function sfnStateMachineEncryptionConfigurationToHclTerraform(struct?: SfnStateMachineEncryptionConfigurationOutputReference | SfnStateMachineEncryptionConfiguration): any;
export declare class SfnStateMachineEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnStateMachineEncryptionConfiguration | undefined;
    set internalValue(value: SfnStateMachineEncryptionConfiguration | undefined);
    private _kmsDataKeyReusePeriodSeconds?;
    get kmsDataKeyReusePeriodSeconds(): number;
    set kmsDataKeyReusePeriodSeconds(value: number);
    resetKmsDataKeyReusePeriodSeconds(): void;
    get kmsDataKeyReusePeriodSecondsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface SfnStateMachineLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}
    */
    readonly includeExecutionData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#level SfnStateMachine#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}
    */
    readonly logDestination?: string;
}
export declare function sfnStateMachineLoggingConfigurationToTerraform(struct?: SfnStateMachineLoggingConfigurationOutputReference | SfnStateMachineLoggingConfiguration): any;
export declare function sfnStateMachineLoggingConfigurationToHclTerraform(struct?: SfnStateMachineLoggingConfigurationOutputReference | SfnStateMachineLoggingConfiguration): any;
export declare class SfnStateMachineLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnStateMachineLoggingConfiguration | undefined;
    set internalValue(value: SfnStateMachineLoggingConfiguration | undefined);
    private _includeExecutionData?;
    get includeExecutionData(): boolean | cdktf.IResolvable;
    set includeExecutionData(value: boolean | cdktf.IResolvable);
    resetIncludeExecutionData(): void;
    get includeExecutionDataInput(): boolean | cdktf.IResolvable | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string | undefined;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string | undefined;
}
export interface SfnStateMachineTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#create SfnStateMachine#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#delete SfnStateMachine#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#update SfnStateMachine#update}
    */
    readonly update?: string;
}
export declare function sfnStateMachineTimeoutsToTerraform(struct?: SfnStateMachineTimeouts | cdktf.IResolvable): any;
export declare function sfnStateMachineTimeoutsToHclTerraform(struct?: SfnStateMachineTimeouts | cdktf.IResolvable): any;
export declare class SfnStateMachineTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnStateMachineTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SfnStateMachineTimeouts | cdktf.IResolvable | undefined);
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
export interface SfnStateMachineTracingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#enabled SfnStateMachine#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function sfnStateMachineTracingConfigurationToTerraform(struct?: SfnStateMachineTracingConfigurationOutputReference | SfnStateMachineTracingConfiguration): any;
export declare function sfnStateMachineTracingConfigurationToHclTerraform(struct?: SfnStateMachineTracingConfigurationOutputReference | SfnStateMachineTracingConfiguration): any;
export declare class SfnStateMachineTracingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnStateMachineTracingConfiguration | undefined;
    set internalValue(value: SfnStateMachineTracingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine aws_sfn_state_machine}
*/
export declare class SfnStateMachine extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sfn_state_machine";
    /**
    * Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SfnStateMachine to import
    * @param importFromId The id of the existing SfnStateMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SfnStateMachine to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_state_machine aws_sfn_state_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SfnStateMachineConfig
    */
    constructor(scope: Construct, id: string, config: SfnStateMachineConfig);
    get arn(): string;
    get creationDate(): string;
    private _definition?;
    get definition(): string;
    set definition(value: string);
    get definitionInput(): string | undefined;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _publish?;
    get publish(): boolean | cdktf.IResolvable;
    set publish(value: boolean | cdktf.IResolvable);
    resetPublish(): void;
    get publishInput(): boolean | cdktf.IResolvable | undefined;
    get revisionId(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    get stateMachineVersionArn(): string;
    get status(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    get versionDescription(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): SfnStateMachineEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: SfnStateMachineEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): SfnStateMachineEncryptionConfiguration | undefined;
    private _loggingConfiguration;
    get loggingConfiguration(): SfnStateMachineLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: SfnStateMachineLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): SfnStateMachineLoggingConfiguration | undefined;
    private _timeouts;
    get timeouts(): SfnStateMachineTimeoutsOutputReference;
    putTimeouts(value: SfnStateMachineTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SfnStateMachineTimeouts | undefined;
    private _tracingConfiguration;
    get tracingConfiguration(): SfnStateMachineTracingConfigurationOutputReference;
    putTracingConfiguration(value: SfnStateMachineTracingConfiguration): void;
    resetTracingConfiguration(): void;
    get tracingConfigurationInput(): SfnStateMachineTracingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
