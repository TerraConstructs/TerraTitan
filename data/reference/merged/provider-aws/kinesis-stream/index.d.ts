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
    /** (Optional) The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`. */
    readonly encryptionType?: string;
    /** (Optional) A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`. */
    readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#id KinesisStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`. */
    readonly kmsKeyId?: string;
    /** (Required) A name to identify the stream. This is unique to the AWS account and region the Stream is created in. * `shardCount` – (Optional) The number of shards that the stream will use. If the `streamMode` is `PROVISIONED`, this field is required. Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams][2] for more. */
    readonly name: string;
    /** (Optional) Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours. Minimum value is 24. Default is 24. */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#shard_count KinesisStream#shard_count}
    */
    readonly shardCount?: number;
    /** (Optional) A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch][3] for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable. */
    readonly shardLevelMetrics?: string[];
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. ### stream_mode_details Configuration Block */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_stream#tags_all KinesisStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Indicates the [capacity mode](https://docs.aws.amazon.com/streams/latest/dev/how-do-i-size-a-stream.html) of the data stream. Detailed below. */
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
    * (Required) Specifies the capacity mode of the stream. Must be either `PROVISIONED` or `ON_DEMAND`.
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
