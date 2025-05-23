/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ObjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#acl S3Object#acl}
    */
    readonly acl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#bucket S3Object#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#cache_control S3Object#cache_control}
    */
    readonly cacheControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}
    */
    readonly checksumAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content S3Object#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content_base64 S3Object#content_base64}
    */
    readonly contentBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content_disposition S3Object#content_disposition}
    */
    readonly contentDisposition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content_encoding S3Object#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content_language S3Object#content_language}
    */
    readonly contentLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#content_type S3Object#content_type}
    */
    readonly contentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#etag S3Object#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#force_destroy S3Object#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#id S3Object#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#key S3Object#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#metadata S3Object#metadata}
    */
    readonly metadata?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}
    */
    readonly objectLockLegalHoldStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}
    */
    readonly objectLockMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}
    */
    readonly objectLockRetainUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}
    */
    readonly serverSideEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#source S3Object#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#source_hash S3Object#source_hash}
    */
    readonly sourceHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#storage_class S3Object#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#tags S3Object#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#tags_all S3Object#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#website_redirect S3Object#website_redirect}
    */
    readonly websiteRedirect?: string;
    /**
    * override_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#override_provider S3Object#override_provider}
    */
    readonly overrideProvider?: S3ObjectOverrideProvider;
}
export interface S3ObjectOverrideProviderDefaultTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#tags S3Object#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function s3ObjectOverrideProviderDefaultTagsToTerraform(struct?: S3ObjectOverrideProviderDefaultTagsOutputReference | S3ObjectOverrideProviderDefaultTags): any;
export declare function s3ObjectOverrideProviderDefaultTagsToHclTerraform(struct?: S3ObjectOverrideProviderDefaultTagsOutputReference | S3ObjectOverrideProviderDefaultTags): any;
export declare class S3ObjectOverrideProviderDefaultTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ObjectOverrideProviderDefaultTags | undefined;
    set internalValue(value: S3ObjectOverrideProviderDefaultTags | undefined);
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
export interface S3ObjectOverrideProvider {
    /**
    * default_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#default_tags S3Object#default_tags}
    */
    readonly defaultTags?: S3ObjectOverrideProviderDefaultTags;
}
export declare function s3ObjectOverrideProviderToTerraform(struct?: S3ObjectOverrideProviderOutputReference | S3ObjectOverrideProvider): any;
export declare function s3ObjectOverrideProviderToHclTerraform(struct?: S3ObjectOverrideProviderOutputReference | S3ObjectOverrideProvider): any;
export declare class S3ObjectOverrideProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ObjectOverrideProvider | undefined;
    set internalValue(value: S3ObjectOverrideProvider | undefined);
    private _defaultTags;
    get defaultTags(): S3ObjectOverrideProviderDefaultTagsOutputReference;
    putDefaultTags(value: S3ObjectOverrideProviderDefaultTags): void;
    resetDefaultTags(): void;
    get defaultTagsInput(): S3ObjectOverrideProviderDefaultTags | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object aws_s3_object}
*/
export declare class S3Object extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_object";
    /**
    * Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3Object to import
    * @param importFromId The id of the existing S3Object that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3Object to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_object aws_s3_object} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ObjectConfig
    */
    constructor(scope: Construct, id: string, config: S3ObjectConfig);
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
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string | undefined;
    private _contentBase64?;
    get contentBase64(): string;
    set contentBase64(value: string);
    resetContentBase64(): void;
    get contentBase64Input(): string | undefined;
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
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string | undefined;
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
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
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
    private _serverSideEncryption?;
    get serverSideEncryption(): string;
    set serverSideEncryption(value: string);
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string | undefined;
    private _sourceHash?;
    get sourceHash(): string;
    set sourceHash(value: string);
    resetSourceHash(): void;
    get sourceHashInput(): string | undefined;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string | undefined;
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
    private _overrideProvider;
    get overrideProvider(): S3ObjectOverrideProviderOutputReference;
    putOverrideProvider(value: S3ObjectOverrideProvider): void;
    resetOverrideProvider(): void;
    get overrideProviderInput(): S3ObjectOverrideProvider | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
