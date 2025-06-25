/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3TablesNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_namespace#namespace S3TablesNamespace#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_namespace#table_bucket_arn S3TablesNamespace#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_namespace aws_s3tables_namespace}
*/
export declare class S3TablesNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3tables_namespace";
    /**
    * Generates CDKTF code for importing a S3TablesNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3TablesNamespace to import
    * @param importFromId The id of the existing S3TablesNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3TablesNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_namespace aws_s3tables_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3TablesNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: S3TablesNamespaceConfig);
    get createdAt(): string;
    get createdBy(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    get ownerAccountId(): string;
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
