/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftLoggingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#bucket_name RedshiftLogging#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#cluster_identifier RedshiftLogging#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#log_destination_type RedshiftLogging#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#log_exports RedshiftLogging#log_exports}
    */
    readonly logExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#s3_key_prefix RedshiftLogging#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging aws_redshift_logging}
*/
export declare class RedshiftLogging extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_logging";
    /**
    * Generates CDKTF code for importing a RedshiftLogging resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftLogging to import
    * @param importFromId The id of the existing RedshiftLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftLogging to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_logging aws_redshift_logging} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftLoggingConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftLoggingConfig);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    get id(): string;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string | undefined;
    private _logExports?;
    get logExports(): string[];
    set logExports(value: string[]);
    resetLogExports(): void;
    get logExportsInput(): string[] | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
