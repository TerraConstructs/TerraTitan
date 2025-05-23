/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsExportTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#export_only RdsExportTask#export_only}
    */
    readonly exportOnly?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#export_task_identifier RdsExportTask#export_task_identifier}
    */
    readonly exportTaskIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#iam_role_arn RdsExportTask#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#kms_key_id RdsExportTask#kms_key_id}
    */
    readonly kmsKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#s3_bucket_name RdsExportTask#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#s3_prefix RdsExportTask#s3_prefix}
    */
    readonly s3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#source_arn RdsExportTask#source_arn}
    */
    readonly sourceArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#timeouts RdsExportTask#timeouts}
    */
    readonly timeouts?: RdsExportTaskTimeouts;
}
export interface RdsExportTaskTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#create RdsExportTask#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#delete RdsExportTask#delete}
    */
    readonly delete?: string;
}
export declare function rdsExportTaskTimeoutsToTerraform(struct?: RdsExportTaskTimeouts | cdktf.IResolvable): any;
export declare function rdsExportTaskTimeoutsToHclTerraform(struct?: RdsExportTaskTimeouts | cdktf.IResolvable): any;
export declare class RdsExportTaskTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsExportTaskTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsExportTaskTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task aws_rds_export_task}
*/
export declare class RdsExportTask extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_export_task";
    /**
    * Generates CDKTF code for importing a RdsExportTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsExportTask to import
    * @param importFromId The id of the existing RdsExportTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsExportTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_export_task aws_rds_export_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsExportTaskConfig
    */
    constructor(scope: Construct, id: string, config: RdsExportTaskConfig);
    private _exportOnly?;
    get exportOnly(): string[];
    set exportOnly(value: string[]);
    resetExportOnly(): void;
    get exportOnlyInput(): string[] | undefined;
    private _exportTaskIdentifier?;
    get exportTaskIdentifier(): string;
    set exportTaskIdentifier(value: string);
    get exportTaskIdentifierInput(): string | undefined;
    get failureCause(): string;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    get kmsKeyIdInput(): string | undefined;
    get percentProgress(): number;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    resetS3Prefix(): void;
    get s3PrefixInput(): string | undefined;
    get snapshotTime(): string;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string | undefined;
    get sourceType(): string;
    get status(): string;
    get taskEndTime(): string;
    get taskStartTime(): string;
    get warningMessage(): string;
    private _timeouts;
    get timeouts(): RdsExportTaskTimeoutsOutputReference;
    putTimeouts(value: RdsExportTaskTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsExportTaskTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
