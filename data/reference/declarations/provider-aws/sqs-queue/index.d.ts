/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SqsQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#content_based_deduplication SqsQueue#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#deduplication_scope SqsQueue#deduplication_scope}
    */
    readonly deduplicationScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#delay_seconds SqsQueue#delay_seconds}
    */
    readonly delaySeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#fifo_queue SqsQueue#fifo_queue}
    */
    readonly fifoQueue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#fifo_throughput_limit SqsQueue#fifo_throughput_limit}
    */
    readonly fifoThroughputLimit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#id SqsQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}
    */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#kms_master_key_id SqsQueue#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#max_message_size SqsQueue#max_message_size}
    */
    readonly maxMessageSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#message_retention_seconds SqsQueue#message_retention_seconds}
    */
    readonly messageRetentionSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#name SqsQueue#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#name_prefix SqsQueue#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#policy SqsQueue#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}
    */
    readonly receiveWaitTimeSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#redrive_allow_policy SqsQueue#redrive_allow_policy}
    */
    readonly redriveAllowPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#redrive_policy SqsQueue#redrive_policy}
    */
    readonly redrivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#sqs_managed_sse_enabled SqsQueue#sqs_managed_sse_enabled}
    */
    readonly sqsManagedSseEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#tags SqsQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#tags_all SqsQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}
    */
    readonly visibilityTimeoutSeconds?: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#timeouts SqsQueue#timeouts}
    */
    readonly timeouts?: SqsQueueTimeouts;
}
export interface SqsQueueTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#create SqsQueue#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#delete SqsQueue#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#update SqsQueue#update}
    */
    readonly update?: string;
}
export declare function sqsQueueTimeoutsToTerraform(struct?: SqsQueueTimeouts | cdktf.IResolvable): any;
export declare function sqsQueueTimeoutsToHclTerraform(struct?: SqsQueueTimeouts | cdktf.IResolvable): any;
export declare class SqsQueueTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SqsQueueTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SqsQueueTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue aws_sqs_queue}
*/
export declare class SqsQueue extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sqs_queue";
    /**
    * Generates CDKTF code for importing a SqsQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SqsQueue to import
    * @param importFromId The id of the existing SqsQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SqsQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sqs_queue aws_sqs_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueueConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SqsQueueConfig);
    get arn(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean | cdktf.IResolvable;
    set contentBasedDeduplication(value: boolean | cdktf.IResolvable);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | cdktf.IResolvable | undefined;
    private _deduplicationScope?;
    get deduplicationScope(): string;
    set deduplicationScope(value: string);
    resetDeduplicationScope(): void;
    get deduplicationScopeInput(): string | undefined;
    private _delaySeconds?;
    get delaySeconds(): number;
    set delaySeconds(value: number);
    resetDelaySeconds(): void;
    get delaySecondsInput(): number | undefined;
    private _fifoQueue?;
    get fifoQueue(): boolean | cdktf.IResolvable;
    set fifoQueue(value: boolean | cdktf.IResolvable);
    resetFifoQueue(): void;
    get fifoQueueInput(): boolean | cdktf.IResolvable | undefined;
    private _fifoThroughputLimit?;
    get fifoThroughputLimit(): string;
    set fifoThroughputLimit(value: string);
    resetFifoThroughputLimit(): void;
    get fifoThroughputLimitInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsDataKeyReusePeriodSeconds?;
    get kmsDataKeyReusePeriodSeconds(): number;
    set kmsDataKeyReusePeriodSeconds(value: number);
    resetKmsDataKeyReusePeriodSeconds(): void;
    get kmsDataKeyReusePeriodSecondsInput(): number | undefined;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _maxMessageSize?;
    get maxMessageSize(): number;
    set maxMessageSize(value: number);
    resetMaxMessageSize(): void;
    get maxMessageSizeInput(): number | undefined;
    private _messageRetentionSeconds?;
    get messageRetentionSeconds(): number;
    set messageRetentionSeconds(value: number);
    resetMessageRetentionSeconds(): void;
    get messageRetentionSecondsInput(): number | undefined;
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
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _receiveWaitTimeSeconds?;
    get receiveWaitTimeSeconds(): number;
    set receiveWaitTimeSeconds(value: number);
    resetReceiveWaitTimeSeconds(): void;
    get receiveWaitTimeSecondsInput(): number | undefined;
    private _redriveAllowPolicy?;
    get redriveAllowPolicy(): string;
    set redriveAllowPolicy(value: string);
    resetRedriveAllowPolicy(): void;
    get redriveAllowPolicyInput(): string | undefined;
    private _redrivePolicy?;
    get redrivePolicy(): string;
    set redrivePolicy(value: string);
    resetRedrivePolicy(): void;
    get redrivePolicyInput(): string | undefined;
    private _sqsManagedSseEnabled?;
    get sqsManagedSseEnabled(): boolean | cdktf.IResolvable;
    set sqsManagedSseEnabled(value: boolean | cdktf.IResolvable);
    resetSqsManagedSseEnabled(): void;
    get sqsManagedSseEnabledInput(): boolean | cdktf.IResolvable | undefined;
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
    get url(): string;
    private _visibilityTimeoutSeconds?;
    get visibilityTimeoutSeconds(): number;
    set visibilityTimeoutSeconds(value: number);
    resetVisibilityTimeoutSeconds(): void;
    get visibilityTimeoutSecondsInput(): number | undefined;
    private _timeouts;
    get timeouts(): SqsQueueTimeoutsOutputReference;
    putTimeouts(value: SqsQueueTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SqsQueueTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
