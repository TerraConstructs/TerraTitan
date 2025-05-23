/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3ObjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#bucket DataAwsS3Object#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#checksum_mode DataAwsS3Object#checksum_mode}
    */
    readonly checksumMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#id DataAwsS3Object#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#key DataAwsS3Object#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#range DataAwsS3Object#range}
    */
    readonly range?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#tags DataAwsS3Object#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#version_id DataAwsS3Object#version_id}
    */
    readonly versionId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object aws_s3_object}
*/
export declare class DataAwsS3Object extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3_object";
    /**
    * Generates CDKTF code for importing a DataAwsS3Object resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3Object to import
    * @param importFromId The id of the existing DataAwsS3Object that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3Object to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_object aws_s3_object} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3ObjectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsS3ObjectConfig);
    get arn(): string;
    get body(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    get bucketKeyEnabled(): cdktf.IResolvable;
    get cacheControl(): string;
    get checksumCrc32(): string;
    get checksumCrc32C(): string;
    private _checksumMode?;
    get checksumMode(): string;
    set checksumMode(value: string);
    resetChecksumMode(): void;
    get checksumModeInput(): string | undefined;
    get checksumSha1(): string;
    get checksumSha256(): string;
    get contentDisposition(): string;
    get contentEncoding(): string;
    get contentLanguage(): string;
    get contentLength(): number;
    get contentType(): string;
    get etag(): string;
    get expiration(): string;
    get expires(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    get lastModified(): string;
    private _metadata;
    get metadata(): cdktf.StringMap;
    get objectLockLegalHoldStatus(): string;
    get objectLockMode(): string;
    get objectLockRetainUntilDate(): string;
    private _range?;
    get range(): string;
    set range(value: string);
    resetRange(): void;
    get rangeInput(): string | undefined;
    get serverSideEncryption(): string;
    get sseKmsKeyId(): string;
    get storageClass(): string;
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
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    get websiteRedirectLocation(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
