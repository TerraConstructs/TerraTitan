/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3TablesTableBucketPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket_policy#resource_policy S3TablesTableBucketPolicy#resource_policy}
    */
    readonly resourcePolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket_policy#table_bucket_arn S3TablesTableBucketPolicy#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket_policy aws_s3tables_table_bucket_policy}
*/
export declare class S3TablesTableBucketPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3tables_table_bucket_policy";
    /**
    * Generates CDKTF code for importing a S3TablesTableBucketPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3TablesTableBucketPolicy to import
    * @param importFromId The id of the existing S3TablesTableBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3TablesTableBucketPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_bucket_policy aws_s3tables_table_bucket_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3TablesTableBucketPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3TablesTableBucketPolicyConfig);
    private _resourcePolicy?;
    get resourcePolicy(): string;
    set resourcePolicy(value: string);
    get resourcePolicyInput(): string | undefined;
    private _tableBucketArn?;
    get tableBucketArn(): string;
    set tableBucketArn(value: string);
    get tableBucketArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
