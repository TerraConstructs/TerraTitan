/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#acceleration_status S3Bucket#acceleration_status}
    */
    readonly accelerationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#acl S3Bucket#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#bucket S3Bucket#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#id S3Bucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
    */
    readonly objectLockEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#policy S3Bucket#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#request_payer S3Bucket#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#tags_all S3Bucket#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cors_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}
    */
    readonly corsRule?: S3BucketCorsRule[] | cdktf.IResolvable;
    /**
    * grant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#grant S3Bucket#grant}
    */
    readonly grant?: S3BucketGrant[] | cdktf.IResolvable;
    /**
    * lifecycle_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}
    */
    readonly lifecycleRule?: S3BucketLifecycleRule[] | cdktf.IResolvable;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#logging S3Bucket#logging}
    */
    readonly logging?: S3BucketLogging;
    /**
    * object_lock_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}
    */
    readonly objectLockConfiguration?: S3BucketObjectLockConfiguration;
    /**
    * replication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#replication_configuration S3Bucket#replication_configuration}
    */
    readonly replicationConfiguration?: S3BucketReplicationConfiguration;
    /**
    * server_side_encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#timeouts S3Bucket#timeouts}
    */
    readonly timeouts?: S3BucketTimeouts;
    /**
    * versioning block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#versioning S3Bucket#versioning}
    */
    readonly versioning?: S3BucketVersioning;
    /**
    * website block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#website S3Bucket#website}
    */
    readonly website?: S3BucketWebsite;
}
export interface S3BucketCorsRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}
    */
    readonly allowedOrigins: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}
    */
    readonly maxAgeSeconds?: number;
}
export declare function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule | cdktf.IResolvable): any;
export declare function s3BucketCorsRuleToHclTerraform(struct?: S3BucketCorsRule | cdktf.IResolvable): any;
export declare class S3BucketCorsRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketCorsRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketCorsRule | cdktf.IResolvable | undefined);
    private _allowedHeaders?;
    get allowedHeaders(): string[];
    set allowedHeaders(value: string[]);
    resetAllowedHeaders(): void;
    get allowedHeadersInput(): string[] | undefined;
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    get allowedMethodsInput(): string[] | undefined;
    private _allowedOrigins?;
    get allowedOrigins(): string[];
    set allowedOrigins(value: string[]);
    get allowedOriginsInput(): string[] | undefined;
    private _exposeHeaders?;
    get exposeHeaders(): string[];
    set exposeHeaders(value: string[]);
    resetExposeHeaders(): void;
    get exposeHeadersInput(): string[] | undefined;
    private _maxAgeSeconds?;
    get maxAgeSeconds(): number;
    set maxAgeSeconds(value: number);
    resetMaxAgeSeconds(): void;
    get maxAgeSecondsInput(): number | undefined;
}
export declare class S3BucketCorsRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketCorsRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketCorsRuleOutputReference;
}
export interface S3BucketGrant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#id S3Bucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#permissions S3Bucket#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#type S3Bucket#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#uri S3Bucket#uri}
    */
    readonly uri?: string;
}
export declare function s3BucketGrantToTerraform(struct?: S3BucketGrant | cdktf.IResolvable): any;
export declare function s3BucketGrantToHclTerraform(struct?: S3BucketGrant | cdktf.IResolvable): any;
export declare class S3BucketGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketGrant | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketGrant | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    get permissionsInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
}
export declare class S3BucketGrantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketGrant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketGrantOutputReference;
}
export interface S3BucketLifecycleRuleExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}
export declare function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any;
export declare function s3BucketLifecycleRuleExpirationToHclTerraform(struct?: S3BucketLifecycleRuleExpirationOutputReference | S3BucketLifecycleRuleExpiration): any;
export declare class S3BucketLifecycleRuleExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLifecycleRuleExpiration | undefined;
    set internalValue(value: S3BucketLifecycleRuleExpiration | undefined);
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
export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#days S3Bucket#days}
    */
    readonly days?: number;
}
export declare function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any;
export declare function s3BucketLifecycleRuleNoncurrentVersionExpirationToHclTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference | S3BucketLifecycleRuleNoncurrentVersionExpiration): any;
export declare class S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined;
    set internalValue(value: S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
}
export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any;
export declare function s3BucketLifecycleRuleNoncurrentVersionTransitionToHclTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable): any;
export declare class S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleRuleNoncurrentVersionTransition | cdktf.IResolvable | undefined);
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
export declare class S3BucketLifecycleRuleNoncurrentVersionTransitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference;
}
export interface S3BucketLifecycleRuleTransition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#date S3Bucket#date}
    */
    readonly date?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
    */
    readonly storageClass: string;
}
export declare function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition | cdktf.IResolvable): any;
export declare function s3BucketLifecycleRuleTransitionToHclTerraform(struct?: S3BucketLifecycleRuleTransition | cdktf.IResolvable): any;
export declare class S3BucketLifecycleRuleTransitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleRuleTransition | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleRuleTransition | cdktf.IResolvable | undefined);
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
export declare class S3BucketLifecycleRuleTransitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleRuleTransition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleRuleTransitionOutputReference;
}
export interface S3BucketLifecycleRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
    */
    readonly abortIncompleteMultipartUploadDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#id S3Bucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#expiration S3Bucket#expiration}
    */
    readonly expiration?: S3BucketLifecycleRuleExpiration;
    /**
    * noncurrent_version_expiration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
    */
    readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration;
    /**
    * noncurrent_version_transition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
    */
    readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable;
    /**
    * transition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#transition S3Bucket#transition}
    */
    readonly transition?: S3BucketLifecycleRuleTransition[] | cdktf.IResolvable;
}
export declare function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule | cdktf.IResolvable): any;
export declare function s3BucketLifecycleRuleToHclTerraform(struct?: S3BucketLifecycleRule | cdktf.IResolvable): any;
export declare class S3BucketLifecycleRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketLifecycleRule | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketLifecycleRule | cdktf.IResolvable | undefined);
    private _abortIncompleteMultipartUploadDays?;
    get abortIncompleteMultipartUploadDays(): number;
    set abortIncompleteMultipartUploadDays(value: number);
    resetAbortIncompleteMultipartUploadDays(): void;
    get abortIncompleteMultipartUploadDaysInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _expiration;
    get expiration(): S3BucketLifecycleRuleExpirationOutputReference;
    putExpiration(value: S3BucketLifecycleRuleExpiration): void;
    resetExpiration(): void;
    get expirationInput(): S3BucketLifecycleRuleExpiration | undefined;
    private _noncurrentVersionExpiration;
    get noncurrentVersionExpiration(): S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference;
    putNoncurrentVersionExpiration(value: S3BucketLifecycleRuleNoncurrentVersionExpiration): void;
    resetNoncurrentVersionExpiration(): void;
    get noncurrentVersionExpirationInput(): S3BucketLifecycleRuleNoncurrentVersionExpiration | undefined;
    private _noncurrentVersionTransition;
    get noncurrentVersionTransition(): S3BucketLifecycleRuleNoncurrentVersionTransitionList;
    putNoncurrentVersionTransition(value: S3BucketLifecycleRuleNoncurrentVersionTransition[] | cdktf.IResolvable): void;
    resetNoncurrentVersionTransition(): void;
    get noncurrentVersionTransitionInput(): cdktf.IResolvable | S3BucketLifecycleRuleNoncurrentVersionTransition[] | undefined;
    private _transition;
    get transition(): S3BucketLifecycleRuleTransitionList;
    putTransition(value: S3BucketLifecycleRuleTransition[] | cdktf.IResolvable): void;
    resetTransition(): void;
    get transitionInput(): cdktf.IResolvable | S3BucketLifecycleRuleTransition[] | undefined;
}
export declare class S3BucketLifecycleRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketLifecycleRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketLifecycleRuleOutputReference;
}
export interface S3BucketLogging {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}
    */
    readonly targetBucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}
    */
    readonly targetPrefix?: string;
}
export declare function s3BucketLoggingToTerraform(struct?: S3BucketLoggingOutputReference | S3BucketLogging): any;
export declare function s3BucketLoggingToHclTerraform(struct?: S3BucketLoggingOutputReference | S3BucketLogging): any;
export declare class S3BucketLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketLogging | undefined;
    set internalValue(value: S3BucketLogging | undefined);
    private _targetBucket?;
    get targetBucket(): string;
    set targetBucket(value: string);
    get targetBucketInput(): string | undefined;
    private _targetPrefix?;
    get targetPrefix(): string;
    set targetPrefix(value: string);
    resetTargetPrefix(): void;
    get targetPrefixInput(): string | undefined;
}
export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#days S3Bucket#days}
    */
    readonly days?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#mode S3Bucket#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#years S3Bucket#years}
    */
    readonly years?: number;
}
export declare function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any;
export declare function s3BucketObjectLockConfigurationRuleDefaultRetentionToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference | S3BucketObjectLockConfigurationRuleDefaultRetention): any;
export declare class S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketObjectLockConfigurationRuleDefaultRetention | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRuleDefaultRetention | undefined);
    private _days?;
    get days(): number;
    set days(value: number);
    resetDays(): void;
    get daysInput(): number | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
    private _years?;
    get years(): number;
    set years(value: number);
    resetYears(): void;
    get yearsInput(): number | undefined;
}
export interface S3BucketObjectLockConfigurationRule {
    /**
    * default_retention block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#default_retention S3Bucket#default_retention}
    */
    readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention;
}
export declare function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any;
export declare function s3BucketObjectLockConfigurationRuleToHclTerraform(struct?: S3BucketObjectLockConfigurationRuleOutputReference | S3BucketObjectLockConfigurationRule): any;
export declare class S3BucketObjectLockConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketObjectLockConfigurationRule | undefined;
    set internalValue(value: S3BucketObjectLockConfigurationRule | undefined);
    private _defaultRetention;
    get defaultRetention(): S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference;
    putDefaultRetention(value: S3BucketObjectLockConfigurationRuleDefaultRetention): void;
    get defaultRetentionInput(): S3BucketObjectLockConfigurationRuleDefaultRetention | undefined;
}
export interface S3BucketObjectLockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}
    */
    readonly objectLockEnabled?: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#rule S3Bucket#rule}
    */
    readonly rule?: S3BucketObjectLockConfigurationRule;
}
export declare function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any;
export declare function s3BucketObjectLockConfigurationToHclTerraform(struct?: S3BucketObjectLockConfigurationOutputReference | S3BucketObjectLockConfiguration): any;
export declare class S3BucketObjectLockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketObjectLockConfiguration | undefined;
    set internalValue(value: S3BucketObjectLockConfiguration | undefined);
    private _objectLockEnabled?;
    get objectLockEnabled(): string;
    set objectLockEnabled(value: string);
    resetObjectLockEnabled(): void;
    get objectLockEnabledInput(): string | undefined;
    private _rule;
    get rule(): S3BucketObjectLockConfigurationRuleOutputReference;
    putRule(value: S3BucketObjectLockConfigurationRule): void;
    resetRule(): void;
    get ruleInput(): S3BucketObjectLockConfigurationRule | undefined;
}
export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#owner S3Bucket#owner}
    */
    readonly owner: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any;
export declare function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any;
export declare class S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRulesDestinationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
    */
    readonly minutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#status S3Bucket#status}
    */
    readonly status?: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference | S3BucketReplicationConfigurationRulesDestinationMetrics): any;
export declare function s3BucketReplicationConfigurationRulesDestinationMetricsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference | S3BucketReplicationConfigurationRulesDestinationMetrics): any;
export declare class S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationMetrics | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationMetrics | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRulesDestinationReplicationTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#minutes S3Bucket#minutes}
    */
    readonly minutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#status S3Bucket#status}
    */
    readonly status?: string;
}
export declare function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRulesDestinationReplicationTime): any;
export declare function s3BucketReplicationConfigurationRulesDestinationReplicationTimeToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRulesDestinationReplicationTime): any;
export declare class S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    resetMinutes(): void;
    get minutesInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface S3BucketReplicationConfigurationRulesDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#account_id S3Bucket#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#bucket S3Bucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}
    */
    readonly replicaKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#storage_class S3Bucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * access_control_translation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#access_control_translation S3Bucket#access_control_translation}
    */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation;
    /**
    * metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#metrics S3Bucket#metrics}
    */
    readonly metrics?: S3BucketReplicationConfigurationRulesDestinationMetrics;
    /**
    * replication_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#replication_time S3Bucket#replication_time}
    */
    readonly replicationTime?: S3BucketReplicationConfigurationRulesDestinationReplicationTime;
}
export declare function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any;
export declare function s3BucketReplicationConfigurationRulesDestinationToHclTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationOutputReference | S3BucketReplicationConfigurationRulesDestination): any;
export declare class S3BucketReplicationConfigurationRulesDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesDestination | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesDestination | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _replicaKmsKeyId?;
    get replicaKmsKeyId(): string;
    set replicaKmsKeyId(value: string);
    resetReplicaKmsKeyId(): void;
    get replicaKmsKeyIdInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
    private _accessControlTranslation;
    get accessControlTranslation(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference;
    putAccessControlTranslation(value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): void;
    resetAccessControlTranslation(): void;
    get accessControlTranslationInput(): S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation | undefined;
    private _metrics;
    get metrics(): S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference;
    putMetrics(value: S3BucketReplicationConfigurationRulesDestinationMetrics): void;
    resetMetrics(): void;
    get metricsInput(): S3BucketReplicationConfigurationRulesDestinationMetrics | undefined;
    private _replicationTime;
    get replicationTime(): S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference;
    putReplicationTime(value: S3BucketReplicationConfigurationRulesDestinationReplicationTime): void;
    resetReplicationTime(): void;
    get replicationTimeInput(): S3BucketReplicationConfigurationRulesDestinationReplicationTime | undefined;
}
export interface S3BucketReplicationConfigurationRulesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#tags S3Bucket#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any;
export declare function s3BucketReplicationConfigurationRulesFilterToHclTerraform(struct?: S3BucketReplicationConfigurationRulesFilterOutputReference | S3BucketReplicationConfigurationRulesFilter): any;
export declare class S3BucketReplicationConfigurationRulesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesFilter | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesFilter | undefined);
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
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
    /**
    * sse_kms_encrypted_objects block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any;
export declare function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToHclTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any;
export declare class S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined);
    private _sseKmsEncryptedObjects;
    get sseKmsEncryptedObjects(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
    putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): void;
    resetSseKmsEncryptedObjects(): void;
    get sseKmsEncryptedObjectsInput(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
}
export interface S3BucketReplicationConfigurationRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}
    */
    readonly deleteMarkerReplicationStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#id S3Bucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#prefix S3Bucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#priority S3Bucket#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#status S3Bucket#status}
    */
    readonly status: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#destination S3Bucket#destination}
    */
    readonly destination: S3BucketReplicationConfigurationRulesDestination;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#filter S3Bucket#filter}
    */
    readonly filter?: S3BucketReplicationConfigurationRulesFilter;
    /**
    * source_selection_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#source_selection_criteria S3Bucket#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria;
}
export declare function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules | cdktf.IResolvable): any;
export declare function s3BucketReplicationConfigurationRulesToHclTerraform(struct?: S3BucketReplicationConfigurationRules | cdktf.IResolvable): any;
export declare class S3BucketReplicationConfigurationRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3BucketReplicationConfigurationRules | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRules | cdktf.IResolvable | undefined);
    private _deleteMarkerReplicationStatus?;
    get deleteMarkerReplicationStatus(): string;
    set deleteMarkerReplicationStatus(value: string);
    resetDeleteMarkerReplicationStatus(): void;
    get deleteMarkerReplicationStatusInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _destination;
    get destination(): S3BucketReplicationConfigurationRulesDestinationOutputReference;
    putDestination(value: S3BucketReplicationConfigurationRulesDestination): void;
    get destinationInput(): S3BucketReplicationConfigurationRulesDestination | undefined;
    private _filter;
    get filter(): S3BucketReplicationConfigurationRulesFilterOutputReference;
    putFilter(value: S3BucketReplicationConfigurationRulesFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketReplicationConfigurationRulesFilter | undefined;
    private _sourceSelectionCriteria;
    get sourceSelectionCriteria(): S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference;
    putSourceSelectionCriteria(value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria): void;
    resetSourceSelectionCriteria(): void;
    get sourceSelectionCriteriaInput(): S3BucketReplicationConfigurationRulesSourceSelectionCriteria | undefined;
}
export declare class S3BucketReplicationConfigurationRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3BucketReplicationConfigurationRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3BucketReplicationConfigurationRulesOutputReference;
}
export interface S3BucketReplicationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#role S3Bucket#role}
    */
    readonly role: string;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#rules S3Bucket#rules}
    */
    readonly rules: S3BucketReplicationConfigurationRules[] | cdktf.IResolvable;
}
export declare function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any;
export declare function s3BucketReplicationConfigurationToHclTerraform(struct?: S3BucketReplicationConfigurationOutputReference | S3BucketReplicationConfiguration): any;
export declare class S3BucketReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketReplicationConfiguration | undefined;
    set internalValue(value: S3BucketReplicationConfiguration | undefined);
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string | undefined;
    private _rules;
    get rules(): S3BucketReplicationConfigurationRulesList;
    putRules(value: S3BucketReplicationConfigurationRules[] | cdktf.IResolvable): void;
    get rulesInput(): cdktf.IResolvable | S3BucketReplicationConfigurationRules[] | undefined;
}
export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}
    */
    readonly sseAlgorithm: string;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any;
export declare function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference | S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined);
    private _kmsMasterKeyId?;
    get kmsMasterKeyId(): string;
    set kmsMasterKeyId(value: string);
    resetKmsMasterKeyId(): void;
    get kmsMasterKeyIdInput(): string | undefined;
    private _sseAlgorithm?;
    get sseAlgorithm(): string;
    set sseAlgorithm(value: string);
    get sseAlgorithmInput(): string | undefined;
}
export interface S3BucketServerSideEncryptionConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * apply_server_side_encryption_by_default block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
    */
    readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault;
}
export declare function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any;
export declare function s3BucketServerSideEncryptionConfigurationRuleToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleOutputReference | S3BucketServerSideEncryptionConfigurationRule): any;
export declare class S3BucketServerSideEncryptionConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketServerSideEncryptionConfigurationRule | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfigurationRule | undefined);
    private _bucketKeyEnabled?;
    get bucketKeyEnabled(): boolean | cdktf.IResolvable;
    set bucketKeyEnabled(value: boolean | cdktf.IResolvable);
    resetBucketKeyEnabled(): void;
    get bucketKeyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _applyServerSideEncryptionByDefault;
    get applyServerSideEncryptionByDefault(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference;
    putApplyServerSideEncryptionByDefault(value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): void;
    get applyServerSideEncryptionByDefaultInput(): S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault | undefined;
}
export interface S3BucketServerSideEncryptionConfiguration {
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#rule S3Bucket#rule}
    */
    readonly rule: S3BucketServerSideEncryptionConfigurationRule;
}
export declare function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any;
export declare function s3BucketServerSideEncryptionConfigurationToHclTerraform(struct?: S3BucketServerSideEncryptionConfigurationOutputReference | S3BucketServerSideEncryptionConfiguration): any;
export declare class S3BucketServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketServerSideEncryptionConfiguration | undefined;
    set internalValue(value: S3BucketServerSideEncryptionConfiguration | undefined);
    private _rule;
    get rule(): S3BucketServerSideEncryptionConfigurationRuleOutputReference;
    putRule(value: S3BucketServerSideEncryptionConfigurationRule): void;
    get ruleInput(): S3BucketServerSideEncryptionConfigurationRule | undefined;
}
export interface S3BucketTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#create S3Bucket#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#delete S3Bucket#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#read S3Bucket#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#update S3Bucket#update}
    */
    readonly update?: string;
}
export declare function s3BucketTimeoutsToTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any;
export declare function s3BucketTimeoutsToHclTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any;
export declare class S3BucketTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: S3BucketTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface S3BucketVersioning {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#enabled S3Bucket#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}
    */
    readonly mfaDelete?: boolean | cdktf.IResolvable;
}
export declare function s3BucketVersioningToTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any;
export declare function s3BucketVersioningToHclTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any;
export declare class S3BucketVersioningOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketVersioning | undefined;
    set internalValue(value: S3BucketVersioning | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _mfaDelete?;
    get mfaDelete(): boolean | cdktf.IResolvable;
    set mfaDelete(value: boolean | cdktf.IResolvable);
    resetMfaDelete(): void;
    get mfaDeleteInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3BucketWebsite {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#error_document S3Bucket#error_document}
    */
    readonly errorDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#index_document S3Bucket#index_document}
    */
    readonly indexDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
    */
    readonly redirectAllRequestsTo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}
    */
    readonly routingRules?: string;
}
export declare function s3BucketWebsiteToTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any;
export declare function s3BucketWebsiteToHclTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any;
export declare class S3BucketWebsiteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3BucketWebsite | undefined;
    set internalValue(value: S3BucketWebsite | undefined);
    private _errorDocument?;
    get errorDocument(): string;
    set errorDocument(value: string);
    resetErrorDocument(): void;
    get errorDocumentInput(): string | undefined;
    private _indexDocument?;
    get indexDocument(): string;
    set indexDocument(value: string);
    resetIndexDocument(): void;
    get indexDocumentInput(): string | undefined;
    private _redirectAllRequestsTo?;
    get redirectAllRequestsTo(): string;
    set redirectAllRequestsTo(value: string);
    resetRedirectAllRequestsTo(): void;
    get redirectAllRequestsToInput(): string | undefined;
    private _routingRules?;
    get routingRules(): string;
    set routingRules(value: string);
    resetRoutingRules(): void;
    get routingRulesInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket aws_s3_bucket}
*/
export declare class S3Bucket extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket";
    /**
    * Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3Bucket to import
    * @param importFromId The id of the existing S3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3Bucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket aws_s3_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketConfig = {}
    */
    constructor(scope: Construct, id: string, config?: S3BucketConfig);
    private _accelerationStatus?;
    get accelerationStatus(): string;
    set accelerationStatus(value: string);
    resetAccelerationStatus(): void;
    get accelerationStatusInput(): string | undefined;
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string | undefined;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    get bucketDomainName(): string;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    get bucketRegionalDomainName(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    get hostedZoneId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _objectLockEnabled?;
    get objectLockEnabled(): boolean | cdktf.IResolvable;
    set objectLockEnabled(value: boolean | cdktf.IResolvable);
    resetObjectLockEnabled(): void;
    get objectLockEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    get region(): string;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string | undefined;
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
    get websiteDomain(): string;
    get websiteEndpoint(): string;
    private _corsRule;
    get corsRule(): S3BucketCorsRuleList;
    putCorsRule(value: S3BucketCorsRule[] | cdktf.IResolvable): void;
    resetCorsRule(): void;
    get corsRuleInput(): cdktf.IResolvable | S3BucketCorsRule[] | undefined;
    private _grant;
    get grant(): S3BucketGrantList;
    putGrant(value: S3BucketGrant[] | cdktf.IResolvable): void;
    resetGrant(): void;
    get grantInput(): cdktf.IResolvable | S3BucketGrant[] | undefined;
    private _lifecycleRule;
    get lifecycleRule(): S3BucketLifecycleRuleList;
    putLifecycleRule(value: S3BucketLifecycleRule[] | cdktf.IResolvable): void;
    resetLifecycleRule(): void;
    get lifecycleRuleInput(): cdktf.IResolvable | S3BucketLifecycleRule[] | undefined;
    private _logging;
    get logging(): S3BucketLoggingOutputReference;
    putLogging(value: S3BucketLogging): void;
    resetLogging(): void;
    get loggingInput(): S3BucketLogging | undefined;
    private _objectLockConfiguration;
    get objectLockConfiguration(): S3BucketObjectLockConfigurationOutputReference;
    putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void;
    resetObjectLockConfiguration(): void;
    get objectLockConfigurationInput(): S3BucketObjectLockConfiguration | undefined;
    private _replicationConfiguration;
    get replicationConfiguration(): S3BucketReplicationConfigurationOutputReference;
    putReplicationConfiguration(value: S3BucketReplicationConfiguration): void;
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): S3BucketReplicationConfiguration | undefined;
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): S3BucketServerSideEncryptionConfigurationOutputReference;
    putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void;
    resetServerSideEncryptionConfiguration(): void;
    get serverSideEncryptionConfigurationInput(): S3BucketServerSideEncryptionConfiguration | undefined;
    private _timeouts;
    get timeouts(): S3BucketTimeoutsOutputReference;
    putTimeouts(value: S3BucketTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | S3BucketTimeouts | undefined;
    private _versioning;
    get versioning(): S3BucketVersioningOutputReference;
    putVersioning(value: S3BucketVersioning): void;
    resetVersioning(): void;
    get versioningInput(): S3BucketVersioning | undefined;
    private _website;
    get website(): S3BucketWebsiteOutputReference;
    putWebsite(value: S3BucketWebsite): void;
    resetWebsite(): void;
    get websiteInput(): S3BucketWebsite | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
