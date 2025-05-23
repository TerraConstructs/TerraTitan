/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlBucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#bucket S3ControlBucketLifecycleConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#rule S3ControlBucketLifecycleConfiguration#rule}
    */
    readonly rule: S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable;
}
export interface S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#days_after_initiation S3ControlBucketLifecycleConfiguration#days_after_initiation}
    */
    readonly daysAfterInitiation: number;
}
export declare function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any;
export declare function s3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference | S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): any;
export declare class S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined);
    private _daysAfterInitiation?;
    get daysAfterInitiation(): number;
    set daysAfterInitiation(value: number);
    get daysAfterInitiationInput(): number | undefined;
}
export interface S3ControlBucketLifecycleConfigurationRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#date S3ControlBucketLifecycleConfiguration#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#days S3ControlBucketLifecycleConfiguration#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#expired_object_delete_marker S3ControlBucketLifecycleConfiguration#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}
export declare function s3ControlBucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference | S3ControlBucketLifecycleConfigurationRuleExpiration): any;
export declare function s3ControlBucketLifecycleConfigurationRuleExpirationToHclTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference | S3ControlBucketLifecycleConfigurationRuleExpiration): any;
export declare class S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleExpiration | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleExpiration | undefined);
    private _date?;
    get date(): string;
    set date(value: string);
    resetDate(): void;
    get dateInput(): string | undefined;
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
    private _expiredObjectDeleteMarker?;
    get expiredObjectDeleteMarker(): boolean | cdktf.IResolvable;
    set expiredObjectDeleteMarker(value: boolean | cdktf.IResolvable);
    resetExpiredObjectDeleteMarker(): void;
    get expiredObjectDeleteMarkerInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlBucketLifecycleConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#prefix S3ControlBucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#tags S3ControlBucketLifecycleConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3ControlBucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference | S3ControlBucketLifecycleConfigurationRuleFilter): any;
export declare function s3ControlBucketLifecycleConfigurationRuleFilterToHclTerraform(struct?: S3ControlBucketLifecycleConfigurationRuleFilterOutputReference | S3ControlBucketLifecycleConfigurationRuleFilter): any;
export declare class S3ControlBucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlBucketLifecycleConfigurationRuleFilter | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRuleFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
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
}
export interface S3ControlBucketLifecycleConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#id S3ControlBucketLifecycleConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#status S3ControlBucketLifecycleConfiguration#status}
    */
    readonly status?: string;
    /**
    * abort_incomplete_multipart_upload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3ControlBucketLifecycleConfiguration#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#expiration S3ControlBucketLifecycleConfiguration#expiration}
    */
    readonly expiration?: S3ControlBucketLifecycleConfigurationRuleExpiration;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#filter S3ControlBucketLifecycleConfiguration#filter}
    */
    readonly filter?: S3ControlBucketLifecycleConfigurationRuleFilter;
}
export declare function s3ControlBucketLifecycleConfigurationRuleToTerraform(struct?: S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable): any;
export declare function s3ControlBucketLifecycleConfigurationRuleToHclTerraform(struct?: S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable): any;
export declare class S3ControlBucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlBucketLifecycleConfigurationRule | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _abortIncompleteMultipartUpload;
    get abortIncompleteMultipartUpload(): S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference;
    putAbortIncompleteMultipartUpload(value: S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload): void;
    resetAbortIncompleteMultipartUpload(): void;
    get abortIncompleteMultipartUploadInput(): S3ControlBucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | undefined;
    private _expiration;
    get expiration(): S3ControlBucketLifecycleConfigurationRuleExpirationOutputReference;
    putExpiration(value: S3ControlBucketLifecycleConfigurationRuleExpiration): void;
    resetExpiration(): void;
    get expirationInput(): S3ControlBucketLifecycleConfigurationRuleExpiration | undefined;
    private _filter;
    get filter(): S3ControlBucketLifecycleConfigurationRuleFilterOutputReference;
    putFilter(value: S3ControlBucketLifecycleConfigurationRuleFilter): void;
    resetFilter(): void;
    get filterInput(): S3ControlBucketLifecycleConfigurationRuleFilter | undefined;
}
export declare class S3ControlBucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlBucketLifecycleConfigurationRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration}
*/
export declare class S3ControlBucketLifecycleConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_bucket_lifecycle_configuration";
    /**
    * Generates CDKTF code for importing a S3ControlBucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlBucketLifecycleConfiguration to import
    * @param importFromId The id of the existing S3ControlBucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlBucketLifecycleConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_bucket_lifecycle_configuration aws_s3control_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlBucketLifecycleConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlBucketLifecycleConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _rule;
    get rule(): S3ControlBucketLifecycleConfigurationRuleList;
    putRule(value: S3ControlBucketLifecycleConfigurationRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | S3ControlBucketLifecycleConfigurationRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
