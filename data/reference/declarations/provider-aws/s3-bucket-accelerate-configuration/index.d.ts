/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3BucketAccelerateConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration#bucket S3BucketAccelerateConfiguration#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration#expected_bucket_owner S3BucketAccelerateConfiguration#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration#id S3BucketAccelerateConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration#status S3BucketAccelerateConfiguration#status}
    */
    readonly status: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration aws_s3_bucket_accelerate_configuration}
*/
export declare class S3BucketAccelerateConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3_bucket_accelerate_configuration";
    /**
    * Generates CDKTF code for importing a S3BucketAccelerateConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3BucketAccelerateConfiguration to import
    * @param importFromId The id of the existing S3BucketAccelerateConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3BucketAccelerateConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket_accelerate_configuration aws_s3_bucket_accelerate_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketAccelerateConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketAccelerateConfigurationConfig);
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
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
