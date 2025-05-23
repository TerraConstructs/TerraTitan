/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsS3EndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#add_column_name DmsS3Endpoint#add_column_name}
    */
    readonly addColumnName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#add_trailing_padding_character DmsS3Endpoint#add_trailing_padding_character}
    */
    readonly addTrailingPaddingCharacter?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#bucket_folder DmsS3Endpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#bucket_name DmsS3Endpoint#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#canned_acl_for_objects DmsS3Endpoint#canned_acl_for_objects}
    */
    readonly cannedAclForObjects?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#cdc_inserts_and_updates DmsS3Endpoint#cdc_inserts_and_updates}
    */
    readonly cdcInsertsAndUpdates?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#cdc_inserts_only DmsS3Endpoint#cdc_inserts_only}
    */
    readonly cdcInsertsOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#cdc_max_batch_interval DmsS3Endpoint#cdc_max_batch_interval}
    */
    readonly cdcMaxBatchInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#cdc_min_file_size DmsS3Endpoint#cdc_min_file_size}
    */
    readonly cdcMinFileSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#cdc_path DmsS3Endpoint#cdc_path}
    */
    readonly cdcPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#certificate_arn DmsS3Endpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#compression_type DmsS3Endpoint#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#csv_delimiter DmsS3Endpoint#csv_delimiter}
    */
    readonly csvDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#csv_no_sup_value DmsS3Endpoint#csv_no_sup_value}
    */
    readonly csvNoSupValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#csv_null_value DmsS3Endpoint#csv_null_value}
    */
    readonly csvNullValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#csv_row_delimiter DmsS3Endpoint#csv_row_delimiter}
    */
    readonly csvRowDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#data_format DmsS3Endpoint#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#data_page_size DmsS3Endpoint#data_page_size}
    */
    readonly dataPageSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#date_partition_delimiter DmsS3Endpoint#date_partition_delimiter}
    */
    readonly datePartitionDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#date_partition_enabled DmsS3Endpoint#date_partition_enabled}
    */
    readonly datePartitionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#date_partition_sequence DmsS3Endpoint#date_partition_sequence}
    */
    readonly datePartitionSequence?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#date_partition_timezone DmsS3Endpoint#date_partition_timezone}
    */
    readonly datePartitionTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#detach_target_on_lob_lookup_failure_parquet DmsS3Endpoint#detach_target_on_lob_lookup_failure_parquet}
    */
    readonly detachTargetOnLobLookupFailureParquet?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#dict_page_size_limit DmsS3Endpoint#dict_page_size_limit}
    */
    readonly dictPageSizeLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#enable_statistics DmsS3Endpoint#enable_statistics}
    */
    readonly enableStatistics?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#encoding_type DmsS3Endpoint#encoding_type}
    */
    readonly encodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#encryption_mode DmsS3Endpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#endpoint_id DmsS3Endpoint#endpoint_id}
    */
    readonly endpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#endpoint_type DmsS3Endpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#expected_bucket_owner DmsS3Endpoint#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#external_table_definition DmsS3Endpoint#external_table_definition}
    */
    readonly externalTableDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#glue_catalog_generation DmsS3Endpoint#glue_catalog_generation}
    */
    readonly glueCatalogGeneration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#id DmsS3Endpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#ignore_header_rows DmsS3Endpoint#ignore_header_rows}
    */
    readonly ignoreHeaderRows?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#include_op_for_full_load DmsS3Endpoint#include_op_for_full_load}
    */
    readonly includeOpForFullLoad?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#kms_key_arn DmsS3Endpoint#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#max_file_size DmsS3Endpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#parquet_timestamp_in_millisecond DmsS3Endpoint#parquet_timestamp_in_millisecond}
    */
    readonly parquetTimestampInMillisecond?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#parquet_version DmsS3Endpoint#parquet_version}
    */
    readonly parquetVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#preserve_transactions DmsS3Endpoint#preserve_transactions}
    */
    readonly preserveTransactions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#rfc_4180 DmsS3Endpoint#rfc_4180}
    */
    readonly rfc4180?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#row_group_length DmsS3Endpoint#row_group_length}
    */
    readonly rowGroupLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#server_side_encryption_kms_key_id DmsS3Endpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#service_access_role_arn DmsS3Endpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#ssl_mode DmsS3Endpoint#ssl_mode}
    */
    readonly sslMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#tags DmsS3Endpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#tags_all DmsS3Endpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#timestamp_column_name DmsS3Endpoint#timestamp_column_name}
    */
    readonly timestampColumnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#use_csv_no_sup_value DmsS3Endpoint#use_csv_no_sup_value}
    */
    readonly useCsvNoSupValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#use_task_start_time_for_full_load_timestamp DmsS3Endpoint#use_task_start_time_for_full_load_timestamp}
    */
    readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#timeouts DmsS3Endpoint#timeouts}
    */
    readonly timeouts?: DmsS3EndpointTimeouts;
}
export interface DmsS3EndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#create DmsS3Endpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#delete DmsS3Endpoint#delete}
    */
    readonly delete?: string;
}
export declare function dmsS3EndpointTimeoutsToTerraform(struct?: DmsS3EndpointTimeouts | cdktf.IResolvable): any;
export declare function dmsS3EndpointTimeoutsToHclTerraform(struct?: DmsS3EndpointTimeouts | cdktf.IResolvable): any;
export declare class DmsS3EndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DmsS3EndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DmsS3EndpointTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint aws_dms_s3_endpoint}
*/
export declare class DmsS3Endpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_s3_endpoint";
    /**
    * Generates CDKTF code for importing a DmsS3Endpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsS3Endpoint to import
    * @param importFromId The id of the existing DmsS3Endpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsS3Endpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_s3_endpoint aws_dms_s3_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsS3EndpointConfig
    */
    constructor(scope: Construct, id: string, config: DmsS3EndpointConfig);
    private _addColumnName?;
    get addColumnName(): boolean | cdktf.IResolvable;
    set addColumnName(value: boolean | cdktf.IResolvable);
    resetAddColumnName(): void;
    get addColumnNameInput(): boolean | cdktf.IResolvable | undefined;
    private _addTrailingPaddingCharacter?;
    get addTrailingPaddingCharacter(): boolean | cdktf.IResolvable;
    set addTrailingPaddingCharacter(value: boolean | cdktf.IResolvable);
    resetAddTrailingPaddingCharacter(): void;
    get addTrailingPaddingCharacterInput(): boolean | cdktf.IResolvable | undefined;
    private _bucketFolder?;
    get bucketFolder(): string;
    set bucketFolder(value: string);
    resetBucketFolder(): void;
    get bucketFolderInput(): string | undefined;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _cannedAclForObjects?;
    get cannedAclForObjects(): string;
    set cannedAclForObjects(value: string);
    resetCannedAclForObjects(): void;
    get cannedAclForObjectsInput(): string | undefined;
    private _cdcInsertsAndUpdates?;
    get cdcInsertsAndUpdates(): boolean | cdktf.IResolvable;
    set cdcInsertsAndUpdates(value: boolean | cdktf.IResolvable);
    resetCdcInsertsAndUpdates(): void;
    get cdcInsertsAndUpdatesInput(): boolean | cdktf.IResolvable | undefined;
    private _cdcInsertsOnly?;
    get cdcInsertsOnly(): boolean | cdktf.IResolvable;
    set cdcInsertsOnly(value: boolean | cdktf.IResolvable);
    resetCdcInsertsOnly(): void;
    get cdcInsertsOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _cdcMaxBatchInterval?;
    get cdcMaxBatchInterval(): number;
    set cdcMaxBatchInterval(value: number);
    resetCdcMaxBatchInterval(): void;
    get cdcMaxBatchIntervalInput(): number | undefined;
    private _cdcMinFileSize?;
    get cdcMinFileSize(): number;
    set cdcMinFileSize(value: number);
    resetCdcMinFileSize(): void;
    get cdcMinFileSizeInput(): number | undefined;
    private _cdcPath?;
    get cdcPath(): string;
    set cdcPath(value: string);
    resetCdcPath(): void;
    get cdcPathInput(): string | undefined;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _compressionType?;
    get compressionType(): string;
    set compressionType(value: string);
    resetCompressionType(): void;
    get compressionTypeInput(): string | undefined;
    private _csvDelimiter?;
    get csvDelimiter(): string;
    set csvDelimiter(value: string);
    resetCsvDelimiter(): void;
    get csvDelimiterInput(): string | undefined;
    private _csvNoSupValue?;
    get csvNoSupValue(): string;
    set csvNoSupValue(value: string);
    resetCsvNoSupValue(): void;
    get csvNoSupValueInput(): string | undefined;
    private _csvNullValue?;
    get csvNullValue(): string;
    set csvNullValue(value: string);
    resetCsvNullValue(): void;
    get csvNullValueInput(): string | undefined;
    private _csvRowDelimiter?;
    get csvRowDelimiter(): string;
    set csvRowDelimiter(value: string);
    resetCsvRowDelimiter(): void;
    get csvRowDelimiterInput(): string | undefined;
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    resetDataFormat(): void;
    get dataFormatInput(): string | undefined;
    private _dataPageSize?;
    get dataPageSize(): number;
    set dataPageSize(value: number);
    resetDataPageSize(): void;
    get dataPageSizeInput(): number | undefined;
    private _datePartitionDelimiter?;
    get datePartitionDelimiter(): string;
    set datePartitionDelimiter(value: string);
    resetDatePartitionDelimiter(): void;
    get datePartitionDelimiterInput(): string | undefined;
    private _datePartitionEnabled?;
    get datePartitionEnabled(): boolean | cdktf.IResolvable;
    set datePartitionEnabled(value: boolean | cdktf.IResolvable);
    resetDatePartitionEnabled(): void;
    get datePartitionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _datePartitionSequence?;
    get datePartitionSequence(): string;
    set datePartitionSequence(value: string);
    resetDatePartitionSequence(): void;
    get datePartitionSequenceInput(): string | undefined;
    private _datePartitionTimezone?;
    get datePartitionTimezone(): string;
    set datePartitionTimezone(value: string);
    resetDatePartitionTimezone(): void;
    get datePartitionTimezoneInput(): string | undefined;
    private _detachTargetOnLobLookupFailureParquet?;
    get detachTargetOnLobLookupFailureParquet(): boolean | cdktf.IResolvable;
    set detachTargetOnLobLookupFailureParquet(value: boolean | cdktf.IResolvable);
    resetDetachTargetOnLobLookupFailureParquet(): void;
    get detachTargetOnLobLookupFailureParquetInput(): boolean | cdktf.IResolvable | undefined;
    private _dictPageSizeLimit?;
    get dictPageSizeLimit(): number;
    set dictPageSizeLimit(value: number);
    resetDictPageSizeLimit(): void;
    get dictPageSizeLimitInput(): number | undefined;
    private _enableStatistics?;
    get enableStatistics(): boolean | cdktf.IResolvable;
    set enableStatistics(value: boolean | cdktf.IResolvable);
    resetEnableStatistics(): void;
    get enableStatisticsInput(): boolean | cdktf.IResolvable | undefined;
    private _encodingType?;
    get encodingType(): string;
    set encodingType(value: string);
    resetEncodingType(): void;
    get encodingTypeInput(): string | undefined;
    private _encryptionMode?;
    get encryptionMode(): string;
    set encryptionMode(value: string);
    resetEncryptionMode(): void;
    get encryptionModeInput(): string | undefined;
    get endpointArn(): string;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    get endpointIdInput(): string | undefined;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string | undefined;
    get engineDisplayName(): string;
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    get externalId(): string;
    private _externalTableDefinition?;
    get externalTableDefinition(): string;
    set externalTableDefinition(value: string);
    resetExternalTableDefinition(): void;
    get externalTableDefinitionInput(): string | undefined;
    private _glueCatalogGeneration?;
    get glueCatalogGeneration(): boolean | cdktf.IResolvable;
    set glueCatalogGeneration(value: boolean | cdktf.IResolvable);
    resetGlueCatalogGeneration(): void;
    get glueCatalogGenerationInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignoreHeaderRows?;
    get ignoreHeaderRows(): number;
    set ignoreHeaderRows(value: number);
    resetIgnoreHeaderRows(): void;
    get ignoreHeaderRowsInput(): number | undefined;
    private _includeOpForFullLoad?;
    get includeOpForFullLoad(): boolean | cdktf.IResolvable;
    set includeOpForFullLoad(value: boolean | cdktf.IResolvable);
    resetIncludeOpForFullLoad(): void;
    get includeOpForFullLoadInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _maxFileSize?;
    get maxFileSize(): number;
    set maxFileSize(value: number);
    resetMaxFileSize(): void;
    get maxFileSizeInput(): number | undefined;
    private _parquetTimestampInMillisecond?;
    get parquetTimestampInMillisecond(): boolean | cdktf.IResolvable;
    set parquetTimestampInMillisecond(value: boolean | cdktf.IResolvable);
    resetParquetTimestampInMillisecond(): void;
    get parquetTimestampInMillisecondInput(): boolean | cdktf.IResolvable | undefined;
    private _parquetVersion?;
    get parquetVersion(): string;
    set parquetVersion(value: string);
    resetParquetVersion(): void;
    get parquetVersionInput(): string | undefined;
    private _preserveTransactions?;
    get preserveTransactions(): boolean | cdktf.IResolvable;
    set preserveTransactions(value: boolean | cdktf.IResolvable);
    resetPreserveTransactions(): void;
    get preserveTransactionsInput(): boolean | cdktf.IResolvable | undefined;
    private _rfc4180?;
    get rfc4180(): boolean | cdktf.IResolvable;
    set rfc4180(value: boolean | cdktf.IResolvable);
    resetRfc4180(): void;
    get rfc4180Input(): boolean | cdktf.IResolvable | undefined;
    private _rowGroupLength?;
    get rowGroupLength(): number;
    set rowGroupLength(value: number);
    resetRowGroupLength(): void;
    get rowGroupLengthInput(): number | undefined;
    private _serverSideEncryptionKmsKeyId?;
    get serverSideEncryptionKmsKeyId(): string;
    set serverSideEncryptionKmsKeyId(value: string);
    resetServerSideEncryptionKmsKeyId(): void;
    get serverSideEncryptionKmsKeyIdInput(): string | undefined;
    private _serviceAccessRoleArn?;
    get serviceAccessRoleArn(): string;
    set serviceAccessRoleArn(value: string);
    get serviceAccessRoleArnInput(): string | undefined;
    private _sslMode?;
    get sslMode(): string;
    set sslMode(value: string);
    resetSslMode(): void;
    get sslModeInput(): string | undefined;
    get status(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _timestampColumnName?;
    get timestampColumnName(): string;
    set timestampColumnName(value: string);
    resetTimestampColumnName(): void;
    get timestampColumnNameInput(): string | undefined;
    private _useCsvNoSupValue?;
    get useCsvNoSupValue(): boolean | cdktf.IResolvable;
    set useCsvNoSupValue(value: boolean | cdktf.IResolvable);
    resetUseCsvNoSupValue(): void;
    get useCsvNoSupValueInput(): boolean | cdktf.IResolvable | undefined;
    private _useTaskStartTimeForFullLoadTimestamp?;
    get useTaskStartTimeForFullLoadTimestamp(): boolean | cdktf.IResolvable;
    set useTaskStartTimeForFullLoadTimestamp(value: boolean | cdktf.IResolvable);
    resetUseTaskStartTimeForFullLoadTimestamp(): void;
    get useTaskStartTimeForFullLoadTimestampInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): DmsS3EndpointTimeoutsOutputReference;
    putTimeouts(value: DmsS3EndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DmsS3EndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
