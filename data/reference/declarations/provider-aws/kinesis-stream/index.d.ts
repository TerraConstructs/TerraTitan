/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#arn KinesisStream#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#encryption_type KinesisStream#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}
    */
    readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#id KinesisStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#kms_key_id KinesisStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#name KinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#retention_period KinesisStream#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}
    */
    readonly shardCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#shard_level_metrics KinesisStream#shard_level_metrics}
    */
    readonly shardLevelMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#tags KinesisStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#tags_all KinesisStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * stream_mode_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#stream_mode_details KinesisStream#stream_mode_details}
    */
    readonly streamModeDetails?: KinesisStreamStreamModeDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#timeouts KinesisStream#timeouts}
    */
    readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamStreamModeDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#stream_mode KinesisStream#stream_mode}
    */
    readonly streamMode: string;
}
export declare function kinesisStreamStreamModeDetailsToTerraform(struct?: KinesisStreamStreamModeDetailsOutputReference | KinesisStreamStreamModeDetails): any;
export declare function kinesisStreamStreamModeDetailsToHclTerraform(struct?: KinesisStreamStreamModeDetailsOutputReference | KinesisStreamStreamModeDetails): any;
export declare class KinesisStreamStreamModeDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisStreamStreamModeDetails | undefined;
    set internalValue(value: KinesisStreamStreamModeDetails | undefined);
    private _streamMode?;
    get streamMode(): string;
    set streamMode(value: string);
    get streamModeInput(): string | undefined;
}
export interface KinesisStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#create KinesisStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#delete KinesisStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#update KinesisStream#update}
    */
    readonly update?: string;
}
export declare function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeouts | cdktf.IResolvable): any;
export declare function kinesisStreamTimeoutsToHclTerraform(struct?: KinesisStreamTimeouts | cdktf.IResolvable): any;
export declare class KinesisStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisStreamTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisStreamTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream aws_kinesis_stream}
*/
export declare class KinesisStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kinesis_stream";
    /**
    * Generates CDKTF code for importing a KinesisStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KinesisStream to import
    * @param importFromId The id of the existing KinesisStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KinesisStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream aws_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisStreamConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
    private _enforceConsumerDeletion?;
    get enforceConsumerDeletion(): boolean | cdktf.IResolvable;
    set enforceConsumerDeletion(value: boolean | cdktf.IResolvable);
    resetEnforceConsumerDeletion(): void;
    get enforceConsumerDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _shardCount?;
    get shardCount(): number;
    set shardCount(value: number);
    resetShardCount(): void;
    get shardCountInput(): number | undefined;
    private _shardLevelMetrics?;
    get shardLevelMetrics(): string[];
    set shardLevelMetrics(value: string[]);
    resetShardLevelMetrics(): void;
    get shardLevelMetricsInput(): string[] | undefined;
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
    private _streamModeDetails;
    get streamModeDetails(): KinesisStreamStreamModeDetailsOutputReference;
    putStreamModeDetails(value: KinesisStreamStreamModeDetails): void;
    resetStreamModeDetails(): void;
    get streamModeDetailsInput(): KinesisStreamStreamModeDetails | undefined;
    private _timeouts;
    get timeouts(): KinesisStreamTimeoutsOutputReference;
    putTimeouts(value: KinesisStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KinesisStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
