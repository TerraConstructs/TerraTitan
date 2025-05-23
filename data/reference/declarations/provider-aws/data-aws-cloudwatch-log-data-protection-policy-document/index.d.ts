/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#description DataAwsCloudwatchLogDataProtectionPolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#id DataAwsCloudwatchLogDataProtectionPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#name DataAwsCloudwatchLogDataProtectionPolicyDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#version DataAwsCloudwatchLogDataProtectionPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#statement DataAwsCloudwatchLogDataProtectionPolicyDocument#statement}
    */
    readonly statement: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#log_group DataAwsCloudwatchLogDataProtectionPolicyDocument#log_group}
    */
    readonly logGroup: string;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs | undefined);
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    get logGroupInput(): string | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#delivery_stream DataAwsCloudwatchLogDataProtectionPolicyDocument#delivery_stream}
    */
    readonly deliveryStream: string;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose | undefined);
    private _deliveryStream?;
    get deliveryStream(): string;
    set deliveryStream(value: string);
    get deliveryStreamInput(): string | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#bucket DataAwsCloudwatchLogDataProtectionPolicyDocument#bucket}
    */
    readonly bucket: string;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3ToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3ToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#cloudwatch_logs DataAwsCloudwatchLogDataProtectionPolicyDocument#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#firehose DataAwsCloudwatchLogDataProtectionPolicyDocument#firehose}
    */
    readonly firehose?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#s3 DataAwsCloudwatchLogDataProtectionPolicyDocument#s3}
    */
    readonly s3?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs | undefined;
    private _firehose;
    get firehose(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehoseOutputReference;
    putFirehose(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose | undefined;
    private _s3;
    get s3(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3OutputReference;
    putS3(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3): void;
    resetS3(): void;
    get s3Input(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit {
    /**
    * findings_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#findings_destination DataAwsCloudwatchLogDataProtectionPolicyDocument#findings_destination}
    */
    readonly findingsDestination: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit | undefined);
    private _findingsDestination;
    get findingsDestination(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationOutputReference;
    putFindingsDestination(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination): void;
    get findingsDestinationInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig {
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig | undefined);
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify {
    /**
    * mask_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#mask_config DataAwsCloudwatchLogDataProtectionPolicyDocument#mask_config}
    */
    readonly maskConfig: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify | undefined);
    private _maskConfig;
    get maskConfig(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfigOutputReference;
    putMaskConfig(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig): void;
    get maskConfigInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyMaskConfig | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation {
    /**
    * audit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#audit DataAwsCloudwatchLogDataProtectionPolicyDocument#audit}
    */
    readonly audit?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit;
    /**
    * deidentify block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#deidentify DataAwsCloudwatchLogDataProtectionPolicyDocument#deidentify}
    */
    readonly deidentify?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation | undefined);
    private _audit;
    get audit(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAuditOutputReference;
    putAudit(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit): void;
    resetAudit(): void;
    get auditInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationAudit | undefined;
    private _deidentify;
    get deidentify(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentifyOutputReference;
    putDeidentify(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify): void;
    resetDeidentify(): void;
    get deidentifyInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationDeidentify | undefined;
}
export interface DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#data_identifiers DataAwsCloudwatchLogDataProtectionPolicyDocument#data_identifiers}
    */
    readonly dataIdentifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#sid DataAwsCloudwatchLogDataProtectionPolicyDocument#sid}
    */
    readonly sid?: string;
    /**
    * operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#operation DataAwsCloudwatchLogDataProtectionPolicyDocument#operation}
    */
    readonly operation: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation;
}
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementToTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement | cdktf.IResolvable): any;
export declare function dataAwsCloudwatchLogDataProtectionPolicyDocumentStatementToHclTerraform(struct?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement | cdktf.IResolvable): any;
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement | cdktf.IResolvable | undefined);
    private _dataIdentifiers?;
    get dataIdentifiers(): string[];
    set dataIdentifiers(value: string[]);
    get dataIdentifiersInput(): string[] | undefined;
    private _sid?;
    get sid(): string;
    set sid(value: string);
    resetSid(): void;
    get sidInput(): string | undefined;
    private _operation;
    get operation(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperationOutputReference;
    putOperation(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation): void;
    get operationInput(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOperation | undefined;
}
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document aws_cloudwatch_log_data_protection_policy_document}
*/
export declare class DataAwsCloudwatchLogDataProtectionPolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudwatch_log_data_protection_policy_document";
    /**
    * Generates CDKTF code for importing a DataAwsCloudwatchLogDataProtectionPolicyDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudwatchLogDataProtectionPolicyDocument to import
    * @param importFromId The id of the existing DataAwsCloudwatchLogDataProtectionPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudwatchLogDataProtectionPolicyDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudwatch_log_data_protection_policy_document aws_cloudwatch_log_data_protection_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogDataProtectionPolicyDocumentConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _statement;
    get statement(): DataAwsCloudwatchLogDataProtectionPolicyDocumentStatementList;
    putStatement(value: DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement[] | cdktf.IResolvable): void;
    get statementInput(): cdktf.IResolvable | DataAwsCloudwatchLogDataProtectionPolicyDocumentStatement[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
