/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3DirectoryBucketsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_directory_buckets aws_s3_directory_buckets}
*/
export declare class DataAwsS3DirectoryBuckets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3_directory_buckets";
    /**
    * Generates CDKTF code for importing a DataAwsS3DirectoryBuckets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3DirectoryBuckets to import
    * @param importFromId The id of the existing DataAwsS3DirectoryBuckets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_directory_buckets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3DirectoryBuckets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_directory_buckets aws_s3_directory_buckets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3DirectoryBucketsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsS3DirectoryBucketsConfig);
    get arns(): string[];
    get buckets(): string[];
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
