/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3TablesTablePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy#name S3TablesTablePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy#namespace S3TablesTablePolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy#resource_policy S3TablesTablePolicy#resource_policy}
    */
    readonly resourcePolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy#table_bucket_arn S3TablesTablePolicy#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy aws_s3tables_table_policy}
*/
export declare class S3TablesTablePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3tables_table_policy";
    /**
    * Generates CDKTF code for importing a S3TablesTablePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3TablesTablePolicy to import
    * @param importFromId The id of the existing S3TablesTablePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3TablesTablePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table_policy aws_s3tables_table_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3TablesTablePolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3TablesTablePolicyConfig);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
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
