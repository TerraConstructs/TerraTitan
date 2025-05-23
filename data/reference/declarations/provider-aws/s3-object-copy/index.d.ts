/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ObjectCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#acl S3ObjectCopy#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}
    */
    readonly cacheControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#checksum_algorithm S3ObjectCopy#checksum_algorithm}
    */
    readonly checksumAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}
    */
    readonly contentDisposition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}
    */
    readonly contentLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}
    */
    readonly copyIfMatch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}
    */
    readonly copyIfModifiedSince?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}
    */
    readonly copyIfNoneMatch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}
    */
    readonly copyIfUnmodifiedSince?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}
    */
    readonly customerAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#customer_key S3ObjectCopy#customer_key}
    */
    readonly customerKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}
    */
    readonly customerKeyMd5?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}
    */
    readonly expectedSourceBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}
    */
    readonly expires?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#id S3ObjectCopy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#key S3ObjectCopy#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}
    */
    readonly kmsEncryptionContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}
    */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}
    */
    readonly metadataDirective?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}
    */
    readonly objectLockLegalHoldStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}
    */
    readonly objectLockMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}
    */
    readonly objectLockRetainUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#request_payer S3ObjectCopy#request_payer}
    */
    readonly requestPayer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}
    */
    readonly serverSideEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#source S3ObjectCopy#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}
    */
    readonly sourceCustomerAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}
    */
    readonly sourceCustomerKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}
    */
    readonly sourceCustomerKeyMd5?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}
    */
    readonly taggingDirective?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#tags_all S3ObjectCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}
    */
    readonly websiteRedirect?: string;
    /**
    * grant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#grant S3ObjectCopy#grant}
    */
    readonly grant?: S3ObjectCopyGrant[] | cdktf.IResolvable;
    /**
    * override_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#override_provider S3ObjectCopy#override_provider}
    */
    readonly overrideProvider?: S3ObjectCopyOverrideProvider;
}
export interface S3ObjectCopyGrant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#email S3ObjectCopy#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#id S3ObjectCopy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#permissions S3ObjectCopy#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#type S3ObjectCopy#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#uri S3ObjectCopy#uri}
    */
    readonly uri?: string;
}
export declare function s3ObjectCopyGrantToTerraform(struct?: S3ObjectCopyGrant | cdktf.IResolvable): any;
export declare function s3ObjectCopyGrantToHclTerraform(struct?: S3ObjectCopyGrant | cdktf.IResolvable): any;
export declare class S3ObjectCopyGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ObjectCopyGrant | cdktf.IResolvable | undefined;
    set internalValue(value: S3ObjectCopyGrant | cdktf.IResolvable | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
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
export declare class S3ObjectCopyGrantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ObjectCopyGrant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ObjectCopyGrantOutputReference;
}
export interface S3ObjectCopyOverrideProviderDefaultTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3ObjectCopyOverrideProviderDefaultTagsToTerraform(struct?: S3ObjectCopyOverrideProviderDefaultTagsOutputReference | S3ObjectCopyOverrideProviderDefaultTags): any;
export declare function s3ObjectCopyOverrideProviderDefaultTagsToHclTerraform(struct?: S3ObjectCopyOverrideProviderDefaultTagsOutputReference | S3ObjectCopyOverrideProviderDefaultTags): any;
export declare class S3ObjectCopyOverrideProviderDefaultTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ObjectCopyOverrideProviderDefaultTags | undefined;
    set internalValue(value: S3ObjectCopyOverrideProviderDefaultTags | undefined);
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
export interface S3ObjectCopyOverrideProvider {
    /**
    * default_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#default_tags S3ObjectCopy#default_tags}
    */
    readonly defaultTags?: S3ObjectCopyOverrideProviderDefaultTags;
}
export declare function s3ObjectCopyOverrideProviderToTerraform(struct?: S3ObjectCopyOverrideProviderOutputReference | S3ObjectCopyOverrideProvider): any;
export declare function s3ObjectCopyOverrideProviderToHclTerraform(struct?: S3ObjectCopyOverrideProviderOutputReference | S3ObjectCopyOverrideProvider): any;
export declare class S3ObjectCopyOverrideProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ObjectCopyOverrideProvider | undefined;
    set internalValue(value: S3ObjectCopyOverrideProvider | undefined);
    private _defaultTags;
    get defaultTags(): S3ObjectCopyOverrideProviderDefaultTagsOutputReference;
    putDefaultTags(value: S3ObjectCopyOverrideProviderDefaultTags): void;
    resetDefaultTags(): void;
    get defaultTagsInput(): S3ObjectCopyOverrideProviderDefaultTags | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy aws_s3_object_copy}
*/
export declare class S3ObjectCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_object_copy";
    /**
    * Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ObjectCopy to import
    * @param importFromId The id of the existing S3ObjectCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ObjectCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object_copy aws_s3_object_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectCopyConfig
    */
    constructor(scope: Construct, id: string, config: S3ObjectCopyConfig);
    private _acl?;
    get acl(): string;
    set acl(value: string);
    resetAcl(): void;
    get aclInput(): string | undefined;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _bucketKeyEnabled?;
    get bucketKeyEnabled(): boolean | cdktf.IResolvable;
    set bucketKeyEnabled(value: boolean | cdktf.IResolvable);
    resetBucketKeyEnabled(): void;
    get bucketKeyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cacheControl?;
    get cacheControl(): string;
    set cacheControl(value: string);
    resetCacheControl(): void;
    get cacheControlInput(): string | undefined;
    private _checksumAlgorithm?;
    get checksumAlgorithm(): string;
    set checksumAlgorithm(value: string);
    resetChecksumAlgorithm(): void;
    get checksumAlgorithmInput(): string | undefined;
    get checksumCrc32(): string;
    get checksumCrc32C(): string;
    get checksumSha1(): string;
    get checksumSha256(): string;
    private _contentDisposition?;
    get contentDisposition(): string;
    set contentDisposition(value: string);
    resetContentDisposition(): void;
    get contentDispositionInput(): string | undefined;
    private _contentEncoding?;
    get contentEncoding(): string;
    set contentEncoding(value: string);
    resetContentEncoding(): void;
    get contentEncodingInput(): string | undefined;
    private _contentLanguage?;
    get contentLanguage(): string;
    set contentLanguage(value: string);
    resetContentLanguage(): void;
    get contentLanguageInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string | undefined;
    private _copyIfMatch?;
    get copyIfMatch(): string;
    set copyIfMatch(value: string);
    resetCopyIfMatch(): void;
    get copyIfMatchInput(): string | undefined;
    private _copyIfModifiedSince?;
    get copyIfModifiedSince(): string;
    set copyIfModifiedSince(value: string);
    resetCopyIfModifiedSince(): void;
    get copyIfModifiedSinceInput(): string | undefined;
    private _copyIfNoneMatch?;
    get copyIfNoneMatch(): string;
    set copyIfNoneMatch(value: string);
    resetCopyIfNoneMatch(): void;
    get copyIfNoneMatchInput(): string | undefined;
    private _copyIfUnmodifiedSince?;
    get copyIfUnmodifiedSince(): string;
    set copyIfUnmodifiedSince(value: string);
    resetCopyIfUnmodifiedSince(): void;
    get copyIfUnmodifiedSinceInput(): string | undefined;
    private _customerAlgorithm?;
    get customerAlgorithm(): string;
    set customerAlgorithm(value: string);
    resetCustomerAlgorithm(): void;
    get customerAlgorithmInput(): string | undefined;
    private _customerKey?;
    get customerKey(): string;
    set customerKey(value: string);
    resetCustomerKey(): void;
    get customerKeyInput(): string | undefined;
    private _customerKeyMd5?;
    get customerKeyMd5(): string;
    set customerKeyMd5(value: string);
    resetCustomerKeyMd5(): void;
    get customerKeyMd5Input(): string | undefined;
    get etag(): string;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _expectedSourceBucketOwner?;
    get expectedSourceBucketOwner(): string;
    set expectedSourceBucketOwner(value: string);
    resetExpectedSourceBucketOwner(): void;
    get expectedSourceBucketOwnerInput(): string | undefined;
    get expiration(): string;
    private _expires?;
    get expires(): string;
    set expires(value: string);
    resetExpires(): void;
    get expiresInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _kmsEncryptionContext?;
    get kmsEncryptionContext(): string;
    set kmsEncryptionContext(value: string);
    resetKmsEncryptionContext(): void;
    get kmsEncryptionContextInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get lastModified(): string;
    private _metadata?;
    get metadata(): {
        [key: string]: string;
    };
    set metadata(value: {
        [key: string]: string;
    });
    resetMetadata(): void;
    get metadataInput(): {
        [key: string]: string;
    } | undefined;
    private _metadataDirective?;
    get metadataDirective(): string;
    set metadataDirective(value: string);
    resetMetadataDirective(): void;
    get metadataDirectiveInput(): string | undefined;
    private _objectLockLegalHoldStatus?;
    get objectLockLegalHoldStatus(): string;
    set objectLockLegalHoldStatus(value: string);
    resetObjectLockLegalHoldStatus(): void;
    get objectLockLegalHoldStatusInput(): string | undefined;
    private _objectLockMode?;
    get objectLockMode(): string;
    set objectLockMode(value: string);
    resetObjectLockMode(): void;
    get objectLockModeInput(): string | undefined;
    private _objectLockRetainUntilDate?;
    get objectLockRetainUntilDate(): string;
    set objectLockRetainUntilDate(value: string);
    resetObjectLockRetainUntilDate(): void;
    get objectLockRetainUntilDateInput(): string | undefined;
    get requestCharged(): cdktf.IResolvable;
    private _requestPayer?;
    get requestPayer(): string;
    set requestPayer(value: string);
    resetRequestPayer(): void;
    get requestPayerInput(): string | undefined;
    private _serverSideEncryption?;
    get serverSideEncryption(): string;
    set serverSideEncryption(value: string);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _sourceCustomerAlgorithm?;
    get sourceCustomerAlgorithm(): string;
    set sourceCustomerAlgorithm(value: string);
    resetSourceCustomerAlgorithm(): void;
    get sourceCustomerAlgorithmInput(): string | undefined;
    private _sourceCustomerKey?;
    get sourceCustomerKey(): string;
    set sourceCustomerKey(value: string);
    resetSourceCustomerKey(): void;
    get sourceCustomerKeyInput(): string | undefined;
    private _sourceCustomerKeyMd5?;
    get sourceCustomerKeyMd5(): string;
    set sourceCustomerKeyMd5(value: string);
    resetSourceCustomerKeyMd5(): void;
    get sourceCustomerKeyMd5Input(): string | undefined;
    get sourceVersionId(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
    private _taggingDirective?;
    get taggingDirective(): string;
    set taggingDirective(value: string);
    resetTaggingDirective(): void;
    get taggingDirectiveInput(): string | undefined;
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
    get versionId(): string;
    private _websiteRedirect?;
    get websiteRedirect(): string;
    set websiteRedirect(value: string);
    resetWebsiteRedirect(): void;
    get websiteRedirectInput(): string | undefined;
    private _grant;
    get grant(): S3ObjectCopyGrantList;
    putGrant(value: S3ObjectCopyGrant[] | cdktf.IResolvable): void;
    resetGrant(): void;
    get grantInput(): cdktf.IResolvable | S3ObjectCopyGrant[] | undefined;
    private _overrideProvider;
    get overrideProvider(): S3ObjectCopyOverrideProviderOutputReference;
    putOverrideProvider(value: S3ObjectCopyOverrideProvider): void;
    resetOverrideProvider(): void;
    get overrideProviderInput(): S3ObjectCopyOverrideProvider | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
