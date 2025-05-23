/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#id ConfigDeliveryChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#name ConfigDeliveryChannel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
    */
    readonly s3KmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * snapshot_delivery_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
    */
    readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties;
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
    */
    readonly deliveryFrequency?: string;
}
export declare function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any;
export declare function configDeliveryChannelSnapshotDeliveryPropertiesToHclTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any;
export declare class ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigDeliveryChannelSnapshotDeliveryProperties | undefined;
    set internalValue(value: ConfigDeliveryChannelSnapshotDeliveryProperties | undefined);
    private _deliveryFrequency?;
    get deliveryFrequency(): string;
    set deliveryFrequency(value: string);
    resetDeliveryFrequency(): void;
    get deliveryFrequencyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel aws_config_delivery_channel}
*/
export declare class ConfigDeliveryChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_delivery_channel";
    /**
    * Generates CDKTF code for importing a ConfigDeliveryChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigDeliveryChannel to import
    * @param importFromId The id of the existing ConfigDeliveryChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigDeliveryChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_delivery_channel aws_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigDeliveryChannelConfig
    */
    constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig);
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
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    private _s3KmsKeyArn?;
    get s3KmsKeyArn(): string;
    set s3KmsKeyArn(value: string);
    resetS3KmsKeyArn(): void;
    get s3KmsKeyArnInput(): string | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _snapshotDeliveryProperties;
    get snapshotDeliveryProperties(): ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference;
    putSnapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties): void;
    resetSnapshotDeliveryProperties(): void;
    get snapshotDeliveryPropertiesInput(): ConfigDeliveryChannelSnapshotDeliveryProperties | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
