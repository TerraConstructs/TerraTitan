/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessInstanceLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}
    */
    readonly verifiedaccessInstanceId: string;
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#access_logs VerifiedaccessInstanceLoggingConfiguration#access_logs}
    */
    readonly accessLogs: VerifiedaccessInstanceLoggingConfigurationAccessLogs;
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group VerifiedaccessInstanceLoggingConfiguration#log_group}
    */
    readonly logGroup?: string;
}
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs): any;
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs): any;
export declare class VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs | undefined;
    set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    resetLogGroup(): void;
    get logGroupInput(): string | undefined;
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream VerifiedaccessInstanceLoggingConfiguration#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose): any;
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose): any;
export declare class VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose | undefined;
    set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose | undefined);
    private _deliveryStream?;
    get deliveryStream(): string;
    set deliveryStream(value: string);
    resetDeliveryStream(): void;
    get deliveryStreamInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name VerifiedaccessInstanceLoggingConfiguration#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner VerifiedaccessInstanceLoggingConfiguration#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix VerifiedaccessInstanceLoggingConfiguration#prefix}
    */
    readonly prefix?: string;
}
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsS3): any;
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsS3ToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogsS3): any;
export declare class VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 | undefined;
    set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketOwner?;
    get bucketOwner(): string;
    set bucketOwner(value: string);
    resetBucketOwner(): void;
    get bucketOwnerInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface VerifiedaccessInstanceLoggingConfigurationAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context VerifiedaccessInstanceLoggingConfiguration#include_trust_context}
    */
    readonly includeTrustContext?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version VerifiedaccessInstanceLoggingConfiguration#log_version}
    */
    readonly logVersion?: string;
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#cloudwatch_logs VerifiedaccessInstanceLoggingConfiguration#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs;
    /**
    * kinesis_data_firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#kinesis_data_firehose VerifiedaccessInstanceLoggingConfiguration#kinesis_data_firehose}
    */
    readonly kinesisDataFirehose?: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#s3 VerifiedaccessInstanceLoggingConfiguration#s3}
    */
    readonly s3?: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3;
}
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsToTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogs): any;
export declare function verifiedaccessInstanceLoggingConfigurationAccessLogsToHclTerraform(struct?: VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference | VerifiedaccessInstanceLoggingConfigurationAccessLogs): any;
export declare class VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessInstanceLoggingConfigurationAccessLogs | undefined;
    set internalValue(value: VerifiedaccessInstanceLoggingConfigurationAccessLogs | undefined);
    private _includeTrustContext?;
    get includeTrustContext(): boolean | cdktf.IResolvable;
    set includeTrustContext(value: boolean | cdktf.IResolvable);
    resetIncludeTrustContext(): void;
    get includeTrustContextInput(): boolean | cdktf.IResolvable | undefined;
    private _logVersion?;
    get logVersion(): string;
    set logVersion(value: string);
    resetLogVersion(): void;
    get logVersionInput(): string | undefined;
    private _cloudwatchLogs;
    get cloudwatchLogs(): VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs | undefined;
    private _kinesisDataFirehose;
    get kinesisDataFirehose(): VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference;
    putKinesisDataFirehose(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose): void;
    resetKinesisDataFirehose(): void;
    get kinesisDataFirehoseInput(): VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose | undefined;
    private _s3;
    get s3(): VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference;
    putS3(value: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3): void;
    resetS3(): void;
    get s3Input(): VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration}
*/
export declare class VerifiedaccessInstanceLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_instance_logging_configuration";
    /**
    * Generates CDKTF code for importing a VerifiedaccessInstanceLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessInstanceLoggingConfiguration to import
    * @param importFromId The id of the existing VerifiedaccessInstanceLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessInstanceLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessInstanceLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedaccessInstanceLoggingConfigurationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _verifiedaccessInstanceId?;
    get verifiedaccessInstanceId(): string;
    set verifiedaccessInstanceId(value: string);
    get verifiedaccessInstanceIdInput(): string | undefined;
    private _accessLogs;
    get accessLogs(): VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference;
    putAccessLogs(value: VerifiedaccessInstanceLoggingConfigurationAccessLogs): void;
    get accessLogsInput(): VerifiedaccessInstanceLoggingConfigurationAccessLogs | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
