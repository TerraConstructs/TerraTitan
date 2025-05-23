/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterActivityStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#engine_native_audit_fields_included RdsClusterActivityStream#engine_native_audit_fields_included}
    */
    readonly engineNativeAuditFieldsIncluded?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#id RdsClusterActivityStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#kms_key_id RdsClusterActivityStream#kms_key_id}
    */
    readonly kmsKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#mode RdsClusterActivityStream#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#resource_arn RdsClusterActivityStream#resource_arn}
    */
    readonly resourceArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream aws_rds_cluster_activity_stream}
*/
export declare class RdsClusterActivityStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_activity_stream";
    /**
    * Generates CDKTF code for importing a RdsClusterActivityStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterActivityStream to import
    * @param importFromId The id of the existing RdsClusterActivityStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterActivityStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_cluster_activity_stream aws_rds_cluster_activity_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterActivityStreamConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterActivityStreamConfig);
    private _engineNativeAuditFieldsIncluded?;
    get engineNativeAuditFieldsIncluded(): boolean | cdktf.IResolvable;
    set engineNativeAuditFieldsIncluded(value: boolean | cdktf.IResolvable);
    resetEngineNativeAuditFieldsIncluded(): void;
    get engineNativeAuditFieldsIncludedInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kinesisStreamName(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    get kmsKeyIdInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
