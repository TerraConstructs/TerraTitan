/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnsSmsPreferencesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}
    */
    readonly defaultSenderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}
    */
    readonly defaultSmsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}
    */
    readonly deliveryStatusIamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}
    */
    readonly deliveryStatusSuccessSamplingRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#id SnsSmsPreferences#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}
    */
    readonly monthlySpendLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}
    */
    readonly usageReportS3Bucket?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences aws_sns_sms_preferences}
*/
export declare class SnsSmsPreferences extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sns_sms_preferences";
    /**
    * Generates CDKTF code for importing a SnsSmsPreferences resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnsSmsPreferences to import
    * @param importFromId The id of the existing SnsSmsPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnsSmsPreferences to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sns_sms_preferences aws_sns_sms_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnsSmsPreferencesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SnsSmsPreferencesConfig);
    private _defaultSenderId?;
    get defaultSenderId(): string;
    set defaultSenderId(value: string);
    resetDefaultSenderId(): void;
    get defaultSenderIdInput(): string | undefined;
    private _defaultSmsType?;
    get defaultSmsType(): string;
    set defaultSmsType(value: string);
    resetDefaultSmsType(): void;
    get defaultSmsTypeInput(): string | undefined;
    private _deliveryStatusIamRoleArn?;
    get deliveryStatusIamRoleArn(): string;
    set deliveryStatusIamRoleArn(value: string);
    resetDeliveryStatusIamRoleArn(): void;
    get deliveryStatusIamRoleArnInput(): string | undefined;
    private _deliveryStatusSuccessSamplingRate?;
    get deliveryStatusSuccessSamplingRate(): string;
    set deliveryStatusSuccessSamplingRate(value: string);
    resetDeliveryStatusSuccessSamplingRate(): void;
    get deliveryStatusSuccessSamplingRateInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _monthlySpendLimit?;
    get monthlySpendLimit(): number;
    set monthlySpendLimit(value: number);
    resetMonthlySpendLimit(): void;
    get monthlySpendLimitInput(): number | undefined;
    private _usageReportS3Bucket?;
    get usageReportS3Bucket(): string;
    set usageReportS3Bucket(value: string);
    resetUsageReportS3Bucket(): void;
    get usageReportS3BucketInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
