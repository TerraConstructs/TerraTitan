/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_format DynamodbTableExport#export_format}
    */
    readonly exportFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_time DynamodbTableExport#export_time}
    */
    readonly exportTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_type DynamodbTableExport#export_type}
    */
    readonly exportType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#id DynamodbTableExport#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#s3_bucket DynamodbTableExport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#s3_bucket_owner DynamodbTableExport#s3_bucket_owner}
    */
    readonly s3BucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#s3_prefix DynamodbTableExport#s3_prefix}
    */
    readonly s3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#s3_sse_algorithm DynamodbTableExport#s3_sse_algorithm}
    */
    readonly s3SseAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#s3_sse_kms_key_id DynamodbTableExport#s3_sse_kms_key_id}
    */
    readonly s3SseKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#table_arn DynamodbTableExport#table_arn}
    */
    readonly tableArn: string;
    /**
    * incremental_export_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#incremental_export_specification DynamodbTableExport#incremental_export_specification}
    */
    readonly incrementalExportSpecification?: DynamodbTableExportIncrementalExportSpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#timeouts DynamodbTableExport#timeouts}
    */
    readonly timeouts?: DynamodbTableExportTimeouts;
}
export interface DynamodbTableExportIncrementalExportSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_from_time DynamodbTableExport#export_from_time}
    */
    readonly exportFromTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_to_time DynamodbTableExport#export_to_time}
    */
    readonly exportToTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#export_view_type DynamodbTableExport#export_view_type}
    */
    readonly exportViewType?: string;
}
export declare function dynamodbTableExportIncrementalExportSpecificationToTerraform(struct?: DynamodbTableExportIncrementalExportSpecificationOutputReference | DynamodbTableExportIncrementalExportSpecification): any;
export declare function dynamodbTableExportIncrementalExportSpecificationToHclTerraform(struct?: DynamodbTableExportIncrementalExportSpecificationOutputReference | DynamodbTableExportIncrementalExportSpecification): any;
export declare class DynamodbTableExportIncrementalExportSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableExportIncrementalExportSpecification | undefined;
    set internalValue(value: DynamodbTableExportIncrementalExportSpecification | undefined);
    private _exportFromTime?;
    get exportFromTime(): string;
    set exportFromTime(value: string);
    resetExportFromTime(): void;
    get exportFromTimeInput(): string | undefined;
    private _exportToTime?;
    get exportToTime(): string;
    set exportToTime(value: string);
    resetExportToTime(): void;
    get exportToTimeInput(): string | undefined;
    private _exportViewType?;
    get exportViewType(): string;
    set exportViewType(value: string);
    resetExportViewType(): void;
    get exportViewTypeInput(): string | undefined;
}
export interface DynamodbTableExportTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#create DynamodbTableExport#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#delete DynamodbTableExport#delete}
    */
    readonly delete?: string;
}
export declare function dynamodbTableExportTimeoutsToTerraform(struct?: DynamodbTableExportTimeouts | cdktf.IResolvable): any;
export declare function dynamodbTableExportTimeoutsToHclTerraform(struct?: DynamodbTableExportTimeouts | cdktf.IResolvable): any;
export declare class DynamodbTableExportTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableExportTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableExportTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export}
*/
export declare class DynamodbTableExport extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_table_export";
    /**
    * Generates CDKTF code for importing a DynamodbTableExport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbTableExport to import
    * @param importFromId The id of the existing DynamodbTableExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbTableExport to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table_export aws_dynamodb_table_export} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableExportConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTableExportConfig);
    get arn(): string;
    get billedSizeInBytes(): number;
    get endTime(): string;
    private _exportFormat?;
    get exportFormat(): string;
    set exportFormat(value: string);
    resetExportFormat(): void;
    get exportFormatInput(): string | undefined;
    get exportStatus(): string;
    private _exportTime?;
    get exportTime(): string;
    set exportTime(value: string);
    resetExportTime(): void;
    get exportTimeInput(): string | undefined;
    private _exportType?;
    get exportType(): string;
    set exportType(value: string);
    resetExportType(): void;
    get exportTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get itemCount(): number;
    get manifestFilesS3Key(): string;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _s3BucketOwner?;
    get s3BucketOwner(): string;
    set s3BucketOwner(value: string);
    resetS3BucketOwner(): void;
    get s3BucketOwnerInput(): string | undefined;
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    resetS3Prefix(): void;
    get s3PrefixInput(): string | undefined;
    private _s3SseAlgorithm?;
    get s3SseAlgorithm(): string;
    set s3SseAlgorithm(value: string);
    resetS3SseAlgorithm(): void;
    get s3SseAlgorithmInput(): string | undefined;
    private _s3SseKmsKeyId?;
    get s3SseKmsKeyId(): string;
    set s3SseKmsKeyId(value: string);
    resetS3SseKmsKeyId(): void;
    get s3SseKmsKeyIdInput(): string | undefined;
    get startTime(): string;
    private _tableArn?;
    get tableArn(): string;
    set tableArn(value: string);
    get tableArnInput(): string | undefined;
    private _incrementalExportSpecification;
    get incrementalExportSpecification(): DynamodbTableExportIncrementalExportSpecificationOutputReference;
    putIncrementalExportSpecification(value: DynamodbTableExportIncrementalExportSpecification): void;
    resetIncrementalExportSpecification(): void;
    get incrementalExportSpecificationInput(): DynamodbTableExportIncrementalExportSpecification | undefined;
    private _timeouts;
    get timeouts(): DynamodbTableExportTimeoutsOutputReference;
    putTimeouts(value: DynamodbTableExportTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DynamodbTableExportTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
