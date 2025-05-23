/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectInstanceStorageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#id ConnectInstanceStorageConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#instance_id ConnectInstanceStorageConfig#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}
    */
    readonly resourceType: string;
    /**
    * storage_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#storage_config ConnectInstanceStorageConfig#storage_config}
    */
    readonly storageConfig: ConnectInstanceStorageConfigStorageConfig;
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}
    */
    readonly firehoseArn: string;
}
export declare function connectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): any;
export declare function connectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined);
    private _firehoseArn?;
    get firehoseArn(): string;
    set firehoseArn(value: string);
    get firehoseArnInput(): string | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}
    */
    readonly streamArn: string;
}
export declare function connectInstanceStorageConfigStorageConfigKinesisStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): any;
export declare function connectInstanceStorageConfigStorageConfigKinesisStreamConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined);
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
    */
    readonly encryptionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
    */
    readonly keyId: string;
}
export declare function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): any;
export declare function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined);
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    get encryptionTypeInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}
    */
    readonly prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}
    */
    readonly retentionPeriodHours: number;
    /**
    * encryption_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
    */
    readonly encryptionConfig: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig;
}
export declare function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): any;
export declare function connectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference | ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
    private _retentionPeriodHours?;
    get retentionPeriodHours(): number;
    set retentionPeriodHours(value: number);
    get retentionPeriodHoursInput(): number | undefined;
    private _encryptionConfig;
    get encryptionConfig(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;
    putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): void;
    get encryptionConfigInput(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}
    */
    readonly encryptionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}
    */
    readonly keyId: string;
}
export declare function connectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): any;
export declare function connectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined);
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    get encryptionTypeInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfigS3Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}
    */
    readonly bucketPrefix: string;
    /**
    * encryption_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}
    */
    readonly encryptionConfig?: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig;
}
export declare function connectInstanceStorageConfigStorageConfigS3ConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3Config): any;
export declare function connectInstanceStorageConfigStorageConfigS3ConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference | ConnectInstanceStorageConfigStorageConfigS3Config): any;
export declare class ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfigS3Config | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfigS3Config | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    get bucketPrefixInput(): string | undefined;
    private _encryptionConfig;
    get encryptionConfig(): ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference;
    putEncryptionConfig(value: ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): void;
    resetEncryptionConfig(): void;
    get encryptionConfigInput(): ConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined;
}
export interface ConnectInstanceStorageConfigStorageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}
    */
    readonly storageType: string;
    /**
    * kinesis_firehose_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}
    */
    readonly kinesisFirehoseConfig?: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig;
    /**
    * kinesis_stream_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig?: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig;
    /**
    * kinesis_video_stream_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}
    */
    readonly kinesisVideoStreamConfig?: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig;
    /**
    * s3_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}
    */
    readonly s3Config?: ConnectInstanceStorageConfigStorageConfigS3Config;
}
export declare function connectInstanceStorageConfigStorageConfigToTerraform(struct?: ConnectInstanceStorageConfigStorageConfigOutputReference | ConnectInstanceStorageConfigStorageConfig): any;
export declare function connectInstanceStorageConfigStorageConfigToHclTerraform(struct?: ConnectInstanceStorageConfigStorageConfigOutputReference | ConnectInstanceStorageConfigStorageConfig): any;
export declare class ConnectInstanceStorageConfigStorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectInstanceStorageConfigStorageConfig | undefined;
    set internalValue(value: ConnectInstanceStorageConfigStorageConfig | undefined);
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    get storageTypeInput(): string | undefined;
    private _kinesisFirehoseConfig;
    get kinesisFirehoseConfig(): ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference;
    putKinesisFirehoseConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): void;
    resetKinesisFirehoseConfig(): void;
    get kinesisFirehoseConfigInput(): ConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined;
    private _kinesisStreamConfig;
    get kinesisStreamConfig(): ConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference;
    putKinesisStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): void;
    resetKinesisStreamConfig(): void;
    get kinesisStreamConfigInput(): ConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined;
    private _kinesisVideoStreamConfig;
    get kinesisVideoStreamConfig(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference;
    putKinesisVideoStreamConfig(value: ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): void;
    resetKinesisVideoStreamConfig(): void;
    get kinesisVideoStreamConfigInput(): ConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined;
    private _s3Config;
    get s3Config(): ConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference;
    putS3Config(value: ConnectInstanceStorageConfigStorageConfigS3Config): void;
    resetS3Config(): void;
    get s3ConfigInput(): ConnectInstanceStorageConfigStorageConfigS3Config | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config aws_connect_instance_storage_config}
*/
export declare class ConnectInstanceStorageConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_instance_storage_config";
    /**
    * Generates CDKTF code for importing a ConnectInstanceStorageConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectInstanceStorageConfig to import
    * @param importFromId The id of the existing ConnectInstanceStorageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_instance_storage_config aws_connect_instance_storage_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceStorageConfigConfig
    */
    constructor(scope: Construct, id: string, config: ConnectInstanceStorageConfigConfig);
    get associationId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _storageConfig;
    get storageConfig(): ConnectInstanceStorageConfigStorageConfigOutputReference;
    putStorageConfig(value: ConnectInstanceStorageConfigStorageConfig): void;
    get storageConfigInput(): ConnectInstanceStorageConfigStorageConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
