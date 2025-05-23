/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}
    */
    readonly applicationFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}
    */
    readonly applicationSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}
    */
    readonly applicationSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}
    */
    readonly archivePolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}
    */
    readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#delivery_policy SnsTopic#delivery_policy}
    */
    readonly deliveryPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#display_name SnsTopic#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}
    */
    readonly fifoTopic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}
    */
    readonly firehoseFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}
    */
    readonly firehoseSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}
    */
    readonly firehoseSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}
    */
    readonly httpFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}
    */
    readonly httpSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}
    */
    readonly httpSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#id SnsTopic#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}
    */
    readonly lambdaFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}
    */
    readonly lambdaSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}
    */
    readonly lambdaSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#name SnsTopic#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#name_prefix SnsTopic#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#policy SnsTopic#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}
    */
    readonly signatureVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}
    */
    readonly sqsFailureFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}
    */
    readonly sqsSuccessFeedbackRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}
    */
    readonly sqsSuccessFeedbackSampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#tags SnsTopic#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#tags_all SnsTopic#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}
    */
    readonly tracingConfig?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic aws_sns_topic}
*/
export declare class SnsTopic extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sns_topic";
    /**
    * Generates CDKTF code for importing a SnsTopic resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsTopic to import
    * @param importFromId The id of the existing SnsTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsTopic to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_topic aws_sns_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsTopicConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SnsTopicConfig);
    private _applicationFailureFeedbackRoleArn?;
    get applicationFailureFeedbackRoleArn(): string;
    set applicationFailureFeedbackRoleArn(value: string);
    resetApplicationFailureFeedbackRoleArn(): void;
    get applicationFailureFeedbackRoleArnInput(): string | undefined;
    private _applicationSuccessFeedbackRoleArn?;
    get applicationSuccessFeedbackRoleArn(): string;
    set applicationSuccessFeedbackRoleArn(value: string);
    resetApplicationSuccessFeedbackRoleArn(): void;
    get applicationSuccessFeedbackRoleArnInput(): string | undefined;
    private _applicationSuccessFeedbackSampleRate?;
    get applicationSuccessFeedbackSampleRate(): number;
    set applicationSuccessFeedbackSampleRate(value: number);
    resetApplicationSuccessFeedbackSampleRate(): void;
    get applicationSuccessFeedbackSampleRateInput(): number | undefined;
    private _archivePolicy?;
    get archivePolicy(): string;
    set archivePolicy(value: string);
    resetArchivePolicy(): void;
    get archivePolicyInput(): string | undefined;
    get arn(): string;
    get beginningArchiveTime(): string;
    private _contentBasedDeduplication?;
    get contentBasedDeduplication(): boolean | cdktf.IResolvable;
    set contentBasedDeduplication(value: boolean | cdktf.IResolvable);
    resetContentBasedDeduplication(): void;
    get contentBasedDeduplicationInput(): boolean | cdktf.IResolvable | undefined;
    private _deliveryPolicy?;
    get deliveryPolicy(): string;
    set deliveryPolicy(value: string);
    resetDeliveryPolicy(): void;
    get deliveryPolicyInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _fifoTopic?;
    get fifoTopic(): boolean | cdktf.IResolvable;
    set fifoTopic(value: boolean | cdktf.IResolvable);
    resetFifoTopic(): void;
    get fifoTopicInput(): boolean | cdktf.IResolvable | undefined;
    private _firehoseFailureFeedbackRoleArn?;
    get firehoseFailureFeedbackRoleArn(): string;
    set firehoseFailureFeedbackRoleArn(value: string);
    resetFirehoseFailureFeedbackRoleArn(): void;
    get firehoseFailureFeedbackRoleArnInput(): string | undefined;
    private _firehoseSuccessFeedbackRoleArn?;
    get firehoseSuccessFeedbackRoleArn(): string;
    set firehoseSuccessFeedbackRoleArn(value: string);
    resetFirehoseSuccessFeedbackRoleArn(): void;
    get firehoseSuccessFeedbackRoleArnInput(): string | undefined;
    private _firehoseSuccessFeedbackSampleRate?;
    get firehoseSuccessFeedbackSampleRate(): number;
    set firehoseSuccessFeedbackSampleRate(value: number);
    resetFirehoseSuccessFeedbackSampleRate(): void;
    get firehoseSuccessFeedbackSampleRateInput(): number | undefined;
    private _httpFailureFeedbackRoleArn?;
    get httpFailureFeedbackRoleArn(): string;
    set httpFailureFeedbackRoleArn(value: string);
    resetHttpFailureFeedbackRoleArn(): void;
    get httpFailureFeedbackRoleArnInput(): string | undefined;
    private _httpSuccessFeedbackRoleArn?;
    get httpSuccessFeedbackRoleArn(): string;
    set httpSuccessFeedbackRoleArn(value: string);
    resetHttpSuccessFeedbackRoleArn(): void;
    get httpSuccessFeedbackRoleArnInput(): string | undefined;
    private _httpSuccessFeedbackSampleRate?;
    get httpSuccessFeedbackSampleRate(): number;
    set httpSuccessFeedbackSampleRate(value: number);
    resetHttpSuccessFeedbackSampleRate(): void;
    get httpSuccessFeedbackSampleRateInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _lambdaFailureFeedbackRoleArn?;
    get lambdaFailureFeedbackRoleArn(): string;
    set lambdaFailureFeedbackRoleArn(value: string);
    resetLambdaFailureFeedbackRoleArn(): void;
    get lambdaFailureFeedbackRoleArnInput(): string | undefined;
    private _lambdaSuccessFeedbackRoleArn?;
    get lambdaSuccessFeedbackRoleArn(): string;
    set lambdaSuccessFeedbackRoleArn(value: string);
    resetLambdaSuccessFeedbackRoleArn(): void;
    get lambdaSuccessFeedbackRoleArnInput(): string | undefined;
    private _lambdaSuccessFeedbackSampleRate?;
    get lambdaSuccessFeedbackSampleRate(): number;
    set lambdaSuccessFeedbackSampleRate(value: number);
    resetLambdaSuccessFeedbackSampleRate(): void;
    get lambdaSuccessFeedbackSampleRateInput(): number | undefined;
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
    get owner(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _signatureVersion?;
    get signatureVersion(): number;
    set signatureVersion(value: number);
    resetSignatureVersion(): void;
    get signatureVersionInput(): number | undefined;
    private _sqsFailureFeedbackRoleArn?;
    get sqsFailureFeedbackRoleArn(): string;
    set sqsFailureFeedbackRoleArn(value: string);
    resetSqsFailureFeedbackRoleArn(): void;
    get sqsFailureFeedbackRoleArnInput(): string | undefined;
    private _sqsSuccessFeedbackRoleArn?;
    get sqsSuccessFeedbackRoleArn(): string;
    set sqsSuccessFeedbackRoleArn(value: string);
    resetSqsSuccessFeedbackRoleArn(): void;
    get sqsSuccessFeedbackRoleArnInput(): string | undefined;
    private _sqsSuccessFeedbackSampleRate?;
    get sqsSuccessFeedbackSampleRate(): number;
    set sqsSuccessFeedbackSampleRate(value: number);
    resetSqsSuccessFeedbackSampleRate(): void;
    get sqsSuccessFeedbackSampleRateInput(): number | undefined;
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
    private _tracingConfig?;
    get tracingConfig(): string;
    set tracingConfig(value: string);
    resetTracingConfig(): void;
    get tracingConfigInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
