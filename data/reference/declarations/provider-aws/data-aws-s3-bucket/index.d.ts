/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3BucketConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_bucket#bucket DataAwsS3Bucket#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_bucket#id DataAwsS3Bucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_bucket aws_s3_bucket}
*/
export declare class DataAwsS3Bucket extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3_bucket";
    /**
    * Generates CDKTF code for importing a DataAwsS3Bucket resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3Bucket to import
    * @param importFromId The id of the existing DataAwsS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3Bucket to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3_bucket aws_s3_bucket} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3BucketConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsS3BucketConfig);
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    get bucketDomainName(): string;
    get bucketRegionalDomainName(): string;
    get hostedZoneId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get region(): string;
    get websiteDomain(): string;
    get websiteEndpoint(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
