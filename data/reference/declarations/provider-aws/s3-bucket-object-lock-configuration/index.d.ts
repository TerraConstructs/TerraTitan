/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketObjectLockConfigurationAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#expected_bucket_owner S3BucketObjectLockConfigurationA#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#id S3BucketObjectLockConfigurationA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfigurationA#object_lock_enabled}
    */
    readonly objectLockEnabled?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#token S3BucketObjectLockConfigurationA#token}
    */
    readonly token?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfigurationA#rule}
    */
    readonly rule?: S3BucketObjectLockConfigurationRuleA;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetentionA {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfigurationA#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfigurationA#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfigurationA#years}
    */
    readonly years?: number;
}
export declare function s3BucketObjectLockConfigurationRuleDefaultRetentionAToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetentionA): any;
export declare function s3BucketObjectLockConfigurationRuleDefaultRetentionAToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetentionA): any;
export declare class S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetentionA | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetentionA | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _years?;
    get years(): number;
    set years(value: number);
    resetYears(): void;
    get yearsInput(): number | undefined;
}
export interface S3BucketObjectLockConfigurationRuleA {
    /**
    * default_retention block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfigurationA#default_retention}
    */
    readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetentionA;
}
export declare function s3BucketObjectLockConfigurationRuleAToTerraform(struct?: S3BucketObjectLockConfigurationRuleAOutputReference | S3BucketObjectLockConfigurationRuleA): any;
export declare function s3BucketObjectLockConfigurationRuleAToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleAOutputReference | S3BucketObjectLockConfigurationRuleA): any;
export declare class S3BucketObjectLockConfigurationRuleAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketObjectLockConfigurationRuleA | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRuleA | undefined);
    private _defaultRetention;
    get defaultRetention(): S3BucketObjectLockConfigurationRuleDefaultRetentionAOutputReference;
    putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetentionA): void;
    get defaultRetentionInput(): S3BucketObjectLockConfigurationRuleDefaultRetentionA | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}
*/
export declare class S3BucketObjectLockConfigurationA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_object_lock_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketObjectLockConfigurationA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketObjectLockConfigurationA to import
    * @param importFromId The id of the existing S3BucketObjectLockConfigurationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketObjectLockConfigurationA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketObjectLockConfigurationAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketObjectLockConfigurationAConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _objectLockEnabled?;
    get objectLockEnabled(): string;
    set objectLockEnabled(value: string);
    resetObjectLockEnabled(): void;
    get objectLockEnabledInput(): string | undefined;
    private _token?;
    get token(): string;
    set token(value: string);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _rule;
    get rule(): S3BucketObjectLockConfigurationRuleAOutputReference;
    putRule(value: S3BucketObjectLockConfigurationRuleA): void;
    resetRule(): void;
    get ruleInput(): S3BucketObjectLockConfigurationRuleA | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
