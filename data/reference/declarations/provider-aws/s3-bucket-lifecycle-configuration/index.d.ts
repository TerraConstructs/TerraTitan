/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#bucket S3BucketLifecycleConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#expected_bucket_owner S3BucketLifecycleConfiguration#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#transition_default_minimum_object_size S3BucketLifecycleConfiguration#transition_default_minimum_object_size}
    */
    readonly transitionDefaultMinimumObjectSize?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#rule S3BucketLifecycleConfiguration#rule}
    */
    readonly rule?: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#timeouts S3BucketLifecycleConfiguration#timeouts}
    */
    readonly timeouts?: S3BucketLifecycleConfigurationTimeouts;
}
export interface S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#days_after_initiation S3BucketLifecycleConfiguration#days_after_initiation}
    */
    readonly daysAfterInitiation?: number;
}
export declare function s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToTerraform(struct?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload | cdktf.IResolvable | undefined);
    private _daysAfterInitiation?;
    get daysAfterInitiation(): number;
    set daysAfterInitiation(value: number);
    resetDaysAfterInitiation(): void;
    get daysAfterInitiationInput(): number | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#expired_object_delete_marker S3BucketLifecycleConfiguration#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}
export declare function s3BucketLifecycleConfigurationRuleExpirationToTerraform(struct?: S3BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleExpirationToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleExpiration | cdktf.IResolvable | undefined);
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
export declare class S3BucketLifecycleConfigurationRuleExpirationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleExpiration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleExpirationOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleFilterAnd {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}
    */
    readonly objectSizeGreaterThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}
    */
    readonly objectSizeLessThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#tags S3BucketLifecycleConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketLifecycleConfigurationRuleFilterAndToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleFilterAndToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleFilterAnd | cdktf.IResolvable | undefined);
    private _objectSizeGreaterThan?;
    get objectSizeGreaterThan(): number;
    set objectSizeGreaterThan(value: number);
    resetObjectSizeGreaterThan(): void;
    get objectSizeGreaterThanInput(): number | undefined;
    private _objectSizeLessThan?;
    get objectSizeLessThan(): number;
    set objectSizeLessThan(value: number);
    resetObjectSizeLessThan(): void;
    get objectSizeLessThanInput(): number | undefined;
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
export declare class S3BucketLifecycleConfigurationRuleFilterAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleFilterAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleFilterAndOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleFilterTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#key S3BucketLifecycleConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#value S3BucketLifecycleConfiguration#value}
    */
    readonly value: string;
}
export declare function s3BucketLifecycleConfigurationRuleFilterTagToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleFilterTagToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleFilterTag | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleFilterTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleFilterTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleFilterTagOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_greater_than S3BucketLifecycleConfiguration#object_size_greater_than}
    */
    readonly objectSizeGreaterThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#object_size_less_than S3BucketLifecycleConfiguration#object_size_less_than}
    */
    readonly objectSizeLessThan?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#and S3BucketLifecycleConfiguration#and}
    */
    readonly and?: S3BucketLifecycleConfigurationRuleFilterAnd[] | cdktf.IResolvable;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#tag S3BucketLifecycleConfiguration#tag}
    */
    readonly tag?: S3BucketLifecycleConfigurationRuleFilterTag[] | cdktf.IResolvable;
}
export declare function s3BucketLifecycleConfigurationRuleFilterToTerraform(struct?: S3BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleFilterToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleFilter | cdktf.IResolvable | undefined);
    private _objectSizeGreaterThan?;
    get objectSizeGreaterThan(): number;
    set objectSizeGreaterThan(value: number);
    resetObjectSizeGreaterThan(): void;
    get objectSizeGreaterThanInput(): number | undefined;
    private _objectSizeLessThan?;
    get objectSizeLessThan(): number;
    set objectSizeLessThan(value: number);
    resetObjectSizeLessThan(): void;
    get objectSizeLessThanInput(): number | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _and;
    get and(): S3BucketLifecycleConfigurationRuleFilterAndList;
    putAnd(value: S3BucketLifecycleConfigurationRuleFilterAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleFilterAnd[] | undefined;
    private _tag;
    get tag(): S3BucketLifecycleConfigurationRuleFilterTagList;
    putTag(value: S3BucketLifecycleConfigurationRuleFilterTag[] | cdktf.IResolvable): void;
    resetTag(): void;
    get tagInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleFilterTag[] | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleFilterOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}
    */
    readonly newerNoncurrentVersions?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}
    */
    readonly noncurrentDays: number;
}
export declare function s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration | cdktf.IResolvable | undefined);
    private _newerNoncurrentVersions?;
    get newerNoncurrentVersions(): number;
    set newerNoncurrentVersions(value: number);
    resetNewerNoncurrentVersions(): void;
    get newerNoncurrentVersionsInput(): number | undefined;
    private _noncurrentDays?;
    get noncurrentDays(): number;
    set noncurrentDays(value: number);
    get noncurrentDaysInput(): number | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#newer_noncurrent_versions S3BucketLifecycleConfiguration#newer_noncurrent_versions}
    */
    readonly newerNoncurrentVersions?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_days S3BucketLifecycleConfiguration#noncurrent_days}
    */
    readonly noncurrentDays: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined);
    private _newerNoncurrentVersions?;
    get newerNoncurrentVersions(): number;
    set newerNoncurrentVersions(value: number);
    resetNewerNoncurrentVersions(): void;
    get newerNoncurrentVersionsInput(): number | undefined;
    private _noncurrentDays?;
    get noncurrentDays(): number;
    set noncurrentDays(value: number);
    get noncurrentDaysInput(): number | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    get storageClassInput(): string | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionOutputReference;
}
export interface S3BucketLifecycleConfigurationRuleTransition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#date S3BucketLifecycleConfiguration#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#days S3BucketLifecycleConfiguration#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#storage_class S3BucketLifecycleConfiguration#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleConfigurationRuleTransitionToTerraform(struct?: S3BucketLifecycleConfigurationRuleTransition | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleTransitionToHclTerraform(struct?: S3BucketLifecycleConfigurationRuleTransition | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRuleTransition | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRuleTransition | cdktf.IResolvable | undefined);
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
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    get storageClassInput(): string | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleTransitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleTransitionOutputReference;
}
export interface S3BucketLifecycleConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#id S3BucketLifecycleConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#prefix S3BucketLifecycleConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#status S3BucketLifecycleConfiguration#status}
    */
    readonly status: string;
    /**
    * abort_incomplete_multipart_upload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#abort_incomplete_multipart_upload S3BucketLifecycleConfiguration#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[] | cdktf.IResolvable;
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#expiration S3BucketLifecycleConfiguration#expiration}
    */
    readonly expiration?: S3BucketLifecycleConfigurationRuleExpiration[] | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#filter S3BucketLifecycleConfiguration#filter}
    */
    readonly filter?: S3BucketLifecycleConfigurationRuleFilter[] | cdktf.IResolvable;
    /**
    * noncurrent_version_expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_version_expiration S3BucketLifecycleConfiguration#noncurrent_version_expiration}
    */
    readonly noncurrentVersionExpiration?: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration[] | cdktf.IResolvable;
    /**
    * noncurrent_version_transition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#noncurrent_version_transition S3BucketLifecycleConfiguration#noncurrent_version_transition}
    */
    readonly noncurrentVersionTransition?: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
    /**
    * transition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#transition S3BucketLifecycleConfiguration#transition}
    */
    readonly transition?: S3BucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable;
}
export declare function s3BucketLifecycleConfigurationRuleToTerraform(struct?: S3BucketLifecycleConfigurationRule | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationRuleToHclTerraform(struct?: S3BucketLifecycleConfigurationRule | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleConfigurationRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationRule | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _abortIncompleteMultipartUpload;
    get abortIncompleteMultipartUpload(): S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUploadList;
    putAbortIncompleteMultipartUpload(value: S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[] | cdktf.IResolvable): void;
    resetAbortIncompleteMultipartUpload(): void;
    get abortIncompleteMultipartUploadInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload[] | undefined;
    private _expiration;
    get expiration(): S3BucketLifecycleConfigurationRuleExpirationList;
    putExpiration(value: S3BucketLifecycleConfigurationRuleExpiration[] | cdktf.IResolvable): void;
    resetExpiration(): void;
    get expirationInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleExpiration[] | undefined;
    private _filter;
    get filter(): S3BucketLifecycleConfigurationRuleFilterList;
    putFilter(value: S3BucketLifecycleConfigurationRuleFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleFilter[] | undefined;
    private _noncurrentVersionExpiration;
    get noncurrentVersionExpiration(): S3BucketLifecycleConfigurationRuleNoncurrentVersionExpirationList;
    putNoncurrentVersionExpiration(value: S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration[] | cdktf.IResolvable): void;
    resetNoncurrentVersionExpiration(): void;
    get noncurrentVersionExpirationInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleNoncurrentVersionExpiration[] | undefined;
    private _noncurrentVersionTransition;
    get noncurrentVersionTransition(): S3BucketLifecycleConfigurationRuleNoncurrentVersionTransitionList;
    putNoncurrentVersionTransition(value: S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | cdktf.IResolvable): void;
    resetNoncurrentVersionTransition(): void;
    get noncurrentVersionTransitionInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleNoncurrentVersionTransition[] | undefined;
    private _transition;
    get transition(): S3BucketLifecycleConfigurationRuleTransitionList;
    putTransition(value: S3BucketLifecycleConfigurationRuleTransition[] | cdktf.IResolvable): void;
    resetTransition(): void;
    get transitionInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRuleTransition[] | undefined;
}
export declare class S3BucketLifecycleConfigurationRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleConfigurationRuleOutputReference;
}
export interface S3BucketLifecycleConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#create S3BucketLifecycleConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#update S3BucketLifecycleConfiguration#update}
    */
    readonly update?: string;
}
export declare function s3BucketLifecycleConfigurationTimeoutsToTerraform(struct?: S3BucketLifecycleConfigurationTimeouts | cdktf.IResolvable): any;
export declare function s3BucketLifecycleConfigurationTimeoutsToHclTerraform(struct?: S3BucketLifecycleConfigurationTimeouts | cdktf.IResolvable): any;
export declare class S3BucketLifecycleConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLifecycleConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleConfigurationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration}
*/
export declare class S3BucketLifecycleConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_lifecycle_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketLifecycleConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketLifecycleConfiguration to import
    * @param importFromId The id of the existing S3BucketLifecycleConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketLifecycleConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3_bucket_lifecycle_configuration aws_s3_bucket_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketLifecycleConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketLifecycleConfigurationConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    get id(): string;
    private _transitionDefaultMinimumObjectSize?;
    get transitionDefaultMinimumObjectSize(): string;
    set transitionDefaultMinimumObjectSize(value: string);
    resetTransitionDefaultMinimumObjectSize(): void;
    get transitionDefaultMinimumObjectSizeInput(): string | undefined;
    private _rule;
    get rule(): S3BucketLifecycleConfigurationRuleList;
    putRule(value: S3BucketLifecycleConfigurationRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationRule[] | undefined;
    private _timeouts;
    get timeouts(): S3BucketLifecycleConfigurationTimeoutsOutputReference;
    putTimeouts(value: S3BucketLifecycleConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | S3BucketLifecycleConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
