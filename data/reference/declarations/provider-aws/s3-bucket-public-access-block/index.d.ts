/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#block_public_acls S3BucketPublicAccessBlock#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#block_public_policy S3BucketPublicAccessBlock#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#bucket S3BucketPublicAccessBlock#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#id S3BucketPublicAccessBlock#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#ignore_public_acls S3BucketPublicAccessBlock#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#restrict_public_buckets S3BucketPublicAccessBlock#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block aws_s3_bucket_public_access_block}
*/
export declare class S3BucketPublicAccessBlock extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_public_access_block";
    /**
    * Generates CDKTF code for importing a S3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketPublicAccessBlock to import
    * @param importFromId The id of the existing S3BucketPublicAccessBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketPublicAccessBlock to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_public_access_block aws_s3_bucket_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketPublicAccessBlockConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketPublicAccessBlockConfig);
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean | cdktf.IResolvable;
    set blockPublicAcls(value: boolean | cdktf.IResolvable);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable | undefined;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean | cdktf.IResolvable;
    set ignorePublicAcls(value: boolean | cdktf.IResolvable);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | cdktf.IResolvable | undefined;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean | cdktf.IResolvable;
    set restrictPublicBuckets(value: boolean | cdktf.IResolvable);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
