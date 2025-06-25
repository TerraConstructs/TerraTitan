/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`. */
    readonly billingMode?: string;
    /** (Optional) Enables deletion protection for table. Defaults to `false`. */
    readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
    /** (Required, Forces new resource) Attribute to use as the hash (partition) key. Must also be defined as an `attribute`. See below. */
    readonly hashKey?: string;
    /** */
    readonly id?: string;
    /** (Required) Unique within a region name of the table. */
    readonly name: string;
    /** (Optional, Forces new resource) Attribute to use as the range (sort) key. Must also be defined as an `attribute`, see below. */
    readonly rangeKey?: string;
    /** (Optional) Number of read units for this table. If the `billingMode` is `PROVISIONED`, this field is required. */
    readonly readCapacity?: number;
    /** (Optional) Time of the point-in-time recovery point to restore. */
    readonly restoreDateTime?: string;
    /** (Optional) Name of the table to restore. Must match the name of an existing table. */
    readonly restoreSourceName?: string;
    /** (Optional) ARN of the source table to restore. Must be supplied for cross-region restores. */
    readonly restoreSourceTableArn?: string;
    /** (Optional) If set, restores table to the most recent point-in-time recovery point. */
    readonly restoreToLatestTime?: boolean | cdktf.IResolvable;
    /** (Optional) Whether Streams are enabled. */
    readonly streamEnabled?: boolean | cdktf.IResolvable;
    /** (Optional) When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`. */
    readonly streamViewType?: string;
    /** (Optional) Storage class of the table. */
    readonly tableClass?: string;
    /** (Optional) A map of tags to populate on the created table. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Number of write units for this table. If the `billingMode` is `PROVISIONED`, this field is required. */
    readonly writeCapacity?: number;
    /** */
    readonly attribute?: DynamodbTableAttribute[] | cdktf.IResolvable;
    /** */
    readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable;
    /** */
    readonly importTable?: DynamodbTableImportTable;
    /** */
    readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable;
    /** */
    readonly onDemandThroughput?: DynamodbTableOnDemandThroughput;
    /** */
    readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery;
    /** */
    readonly replica?: DynamodbTableReplica[] | cdktf.IResolvable;
    /** */
    readonly serverSideEncryption?: DynamodbTableServerSideEncryption;
    /** */
    readonly timeouts?: DynamodbTableTimeouts;
    /** */
    readonly ttl?: DynamodbTableTtl;
}
export interface DynamodbTableAttribute {
    /** (Required) Name of the attribute */
    readonly name: string;
    /** (Required) Attribute type. Valid values are `S` (string), `N` (number), `B` (binary). */
    readonly type: string;
}
export declare function dynamodbTableAttributeToTerraform(struct?: DynamodbTableAttribute | cdktf.IResolvable): any;
export declare function dynamodbTableAttributeToHclTerraform(struct?: DynamodbTableAttribute | cdktf.IResolvable): any;
export declare class DynamodbTableAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamodbTableAttribute | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableAttribute | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class DynamodbTableAttributeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamodbTableAttribute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamodbTableAttributeOutputReference;
}
export interface DynamodbTableGlobalSecondaryIndexOnDemandThroughput {
    /** (Optional) Maximum number of read request units for the specified table. To specify set the value greater than or equal to 1. To remove set the value to -1. */
    readonly maxReadRequestUnits?: number;
    /** (Optional) Maximum number of write request units for the specified table. To specify set the value greater than or equal to 1. To remove set the value to -1. */
    readonly maxWriteRequestUnits?: number;
}
export declare function dynamodbTableGlobalSecondaryIndexOnDemandThroughputToTerraform(struct?: DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference | DynamodbTableGlobalSecondaryIndexOnDemandThroughput): any;
export declare function dynamodbTableGlobalSecondaryIndexOnDemandThroughputToHclTerraform(struct?: DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference | DynamodbTableGlobalSecondaryIndexOnDemandThroughput): any;
export declare class DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableGlobalSecondaryIndexOnDemandThroughput | undefined;
    set internalValue(value: DynamodbTableGlobalSecondaryIndexOnDemandThroughput | undefined);
    private _maxReadRequestUnits?;
    get maxReadRequestUnits(): number;
    set maxReadRequestUnits(value: number);
    resetMaxReadRequestUnits(): void;
    get maxReadRequestUnitsInput(): number | undefined;
    private _maxWriteRequestUnits?;
    get maxWriteRequestUnits(): number;
    set maxWriteRequestUnits(value: number);
    resetMaxWriteRequestUnits(): void;
    get maxWriteRequestUnitsInput(): number | undefined;
}
export interface DynamodbTableGlobalSecondaryIndex {
    /** (Required) Name of the hash key in the index; must be defined as an attribute in the resource. */
    readonly hashKey: string;
    /** (Required) Name of the index. */
    readonly name: string;
    /** (Optional) Only required with `INCLUDE` as a projection type; a list of attributes to project into the index. These do not need to be defined as attributes on the table. */
    readonly nonKeyAttributes?: string[];
    /** (Required) One of `ALL`, `INCLUDE` or `KEYS_ONLY` where `ALL` projects every attribute into the index, `KEYS_ONLY` projects  into the index only the table and index hash_key and sort_key attributes ,  `INCLUDE` projects into the index all of the attributes that are defined in `nonKeyAttributes` in addition to the attributes that that`KEYS_ONLY` project. */
    readonly projectionType: string;
    /** (Optional) Name of the range key; must be defined */
    readonly rangeKey?: string;
    /** (Optional) Number of read units for this index. Must be set if billing_mode is set to PROVISIONED. */
    readonly readCapacity?: number;
    /** (Optional) Number of write units for this index. Must be set if billing_mode is set to PROVISIONED. */
    readonly writeCapacity?: number;
    /** */
    readonly onDemandThroughput?: DynamodbTableGlobalSecondaryIndexOnDemandThroughput;
}
export declare function dynamodbTableGlobalSecondaryIndexToTerraform(struct?: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable): any;
export declare function dynamodbTableGlobalSecondaryIndexToHclTerraform(struct?: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable): any;
export declare class DynamodbTableGlobalSecondaryIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableGlobalSecondaryIndex | cdktf.IResolvable | undefined);
    private _hashKey?;
    get hashKey(): string;
    set hashKey(value: string);
    get hashKeyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _nonKeyAttributes?;
    get nonKeyAttributes(): string[];
    set nonKeyAttributes(value: string[]);
    resetNonKeyAttributes(): void;
    get nonKeyAttributesInput(): string[] | undefined;
    private _projectionType?;
    get projectionType(): string;
    set projectionType(value: string);
    get projectionTypeInput(): string | undefined;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string | undefined;
    private _readCapacity?;
    get readCapacity(): number;
    set readCapacity(value: number);
    resetReadCapacity(): void;
    get readCapacityInput(): number | undefined;
    private _writeCapacity?;
    get writeCapacity(): number;
    set writeCapacity(value: number);
    resetWriteCapacity(): void;
    get writeCapacityInput(): number | undefined;
    private _onDemandThroughput;
    get onDemandThroughput(): DynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference;
    putOnDemandThroughput(value: DynamodbTableGlobalSecondaryIndexOnDemandThroughput): void;
    resetOnDemandThroughput(): void;
    get onDemandThroughputInput(): DynamodbTableGlobalSecondaryIndexOnDemandThroughput | undefined;
}
export declare class DynamodbTableGlobalSecondaryIndexList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamodbTableGlobalSecondaryIndexOutputReference;
}
export interface DynamodbTableImportTableInputFormatOptionsCsv {
    /** (Optional) The delimiter used for separating items in the CSV file being imported. */
    readonly delimiter?: string;
    /** (Optional) List of the headers used to specify a common header for all source CSV files being imported. */
    readonly headerList?: string[];
}
export declare function dynamodbTableImportTableInputFormatOptionsCsvToTerraform(struct?: DynamodbTableImportTableInputFormatOptionsCsvOutputReference | DynamodbTableImportTableInputFormatOptionsCsv): any;
export declare function dynamodbTableImportTableInputFormatOptionsCsvToHclTerraform(struct?: DynamodbTableImportTableInputFormatOptionsCsvOutputReference | DynamodbTableImportTableInputFormatOptionsCsv): any;
export declare class DynamodbTableImportTableInputFormatOptionsCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableImportTableInputFormatOptionsCsv | undefined;
    set internalValue(value: DynamodbTableImportTableInputFormatOptionsCsv | undefined);
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _headerList?;
    get headerList(): string[];
    set headerList(value: string[]);
    resetHeaderList(): void;
    get headerListInput(): string[] | undefined;
}
export interface DynamodbTableImportTableInputFormatOptions {
    /** */
    readonly csv?: DynamodbTableImportTableInputFormatOptionsCsv;
}
export declare function dynamodbTableImportTableInputFormatOptionsToTerraform(struct?: DynamodbTableImportTableInputFormatOptionsOutputReference | DynamodbTableImportTableInputFormatOptions): any;
export declare function dynamodbTableImportTableInputFormatOptionsToHclTerraform(struct?: DynamodbTableImportTableInputFormatOptionsOutputReference | DynamodbTableImportTableInputFormatOptions): any;
export declare class DynamodbTableImportTableInputFormatOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableImportTableInputFormatOptions | undefined;
    set internalValue(value: DynamodbTableImportTableInputFormatOptions | undefined);
    private _csv;
    get csv(): DynamodbTableImportTableInputFormatOptionsCsvOutputReference;
    putCsv(value: DynamodbTableImportTableInputFormatOptionsCsv): void;
    resetCsv(): void;
    get csvInput(): DynamodbTableImportTableInputFormatOptionsCsv | undefined;
}
export interface DynamodbTableImportTableS3BucketSource {
    /** (Required) The S3 bucket that is being imported from. */
    readonly bucket: string;
    /** (Optional) The account number of the S3 bucket that is being imported from. */
    readonly bucketOwner?: string;
    /** (Optional) The key prefix shared by all S3 Objects that are being imported. */
    readonly keyPrefix?: string;
}
export declare function dynamodbTableImportTableS3BucketSourceToTerraform(struct?: DynamodbTableImportTableS3BucketSourceOutputReference | DynamodbTableImportTableS3BucketSource): any;
export declare function dynamodbTableImportTableS3BucketSourceToHclTerraform(struct?: DynamodbTableImportTableS3BucketSourceOutputReference | DynamodbTableImportTableS3BucketSource): any;
export declare class DynamodbTableImportTableS3BucketSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableImportTableS3BucketSource | undefined;
    set internalValue(value: DynamodbTableImportTableS3BucketSource | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _bucketOwner?;
    get bucketOwner(): string;
    set bucketOwner(value: string);
    resetBucketOwner(): void;
    get bucketOwnerInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
}
export interface DynamodbTableImportTable {
    /** (Optional) Type of compression to be used on the input coming from the imported table. */
    readonly inputCompressionType?: string;
    /** (Required) The format of the source data. */
    readonly inputFormat: string;
    /** */
    readonly inputFormatOptions?: DynamodbTableImportTableInputFormatOptions;
    /** */
    readonly s3BucketSource: DynamodbTableImportTableS3BucketSource;
}
export declare function dynamodbTableImportTableToTerraform(struct?: DynamodbTableImportTableOutputReference | DynamodbTableImportTable): any;
export declare function dynamodbTableImportTableToHclTerraform(struct?: DynamodbTableImportTableOutputReference | DynamodbTableImportTable): any;
export declare class DynamodbTableImportTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableImportTable | undefined;
    set internalValue(value: DynamodbTableImportTable | undefined);
    private _inputCompressionType?;
    get inputCompressionType(): string;
    set inputCompressionType(value: string);
    resetInputCompressionType(): void;
    get inputCompressionTypeInput(): string | undefined;
    private _inputFormat?;
    get inputFormat(): string;
    set inputFormat(value: string);
    get inputFormatInput(): string | undefined;
    private _inputFormatOptions;
    get inputFormatOptions(): DynamodbTableImportTableInputFormatOptionsOutputReference;
    putInputFormatOptions(value: DynamodbTableImportTableInputFormatOptions): void;
    resetInputFormatOptions(): void;
    get inputFormatOptionsInput(): DynamodbTableImportTableInputFormatOptions | undefined;
    private _s3BucketSource;
    get s3BucketSource(): DynamodbTableImportTableS3BucketSourceOutputReference;
    putS3BucketSource(value: DynamodbTableImportTableS3BucketSource): void;
    get s3BucketSourceInput(): DynamodbTableImportTableS3BucketSource | undefined;
}
export interface DynamodbTableLocalSecondaryIndex {
    /** (Required) Name of the index. */
    readonly name: string;
    /** (Optional) Only required with `INCLUDE` as a projection type; a list of attributes to project into the index. These do not need to be defined as attributes on the table. */
    readonly nonKeyAttributes?: string[];
    /** (Required) One of `ALL`, `INCLUDE` or `KEYS_ONLY` where `ALL` projects every attribute into the index, `KEYS_ONLY` projects  into the index only the table and index hash_key and sort_key attributes ,  `INCLUDE` projects into the index all of the attributes that are defined in `nonKeyAttributes` in addition to the attributes that that`KEYS_ONLY` project. */
    readonly projectionType: string;
    /** (Required) Name of the range key. */
    readonly rangeKey: string;
}
export declare function dynamodbTableLocalSecondaryIndexToTerraform(struct?: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable): any;
export declare function dynamodbTableLocalSecondaryIndexToHclTerraform(struct?: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable): any;
export declare class DynamodbTableLocalSecondaryIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamodbTableLocalSecondaryIndex | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableLocalSecondaryIndex | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _nonKeyAttributes?;
    get nonKeyAttributes(): string[];
    set nonKeyAttributes(value: string[]);
    resetNonKeyAttributes(): void;
    get nonKeyAttributesInput(): string[] | undefined;
    private _projectionType?;
    get projectionType(): string;
    set projectionType(value: string);
    get projectionTypeInput(): string | undefined;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    get rangeKeyInput(): string | undefined;
}
export declare class DynamodbTableLocalSecondaryIndexList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamodbTableLocalSecondaryIndexOutputReference;
}
export interface DynamodbTableOnDemandThroughput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}
    */
    readonly maxWriteRequestUnits?: number;
}
export declare function dynamodbTableOnDemandThroughputToTerraform(struct?: DynamodbTableOnDemandThroughputOutputReference | DynamodbTableOnDemandThroughput): any;
export declare function dynamodbTableOnDemandThroughputToHclTerraform(struct?: DynamodbTableOnDemandThroughputOutputReference | DynamodbTableOnDemandThroughput): any;
export declare class DynamodbTableOnDemandThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableOnDemandThroughput | undefined;
    set internalValue(value: DynamodbTableOnDemandThroughput | undefined);
    private _maxReadRequestUnits?;
    get maxReadRequestUnits(): number;
    set maxReadRequestUnits(value: number);
    resetMaxReadRequestUnits(): void;
    get maxReadRequestUnitsInput(): number | undefined;
    private _maxWriteRequestUnits?;
    get maxWriteRequestUnits(): number;
    set maxWriteRequestUnits(value: number);
    resetMaxWriteRequestUnits(): void;
    get maxWriteRequestUnitsInput(): number | undefined;
}
export interface DynamodbTablePointInTimeRecovery {
    /** (Required) Whether to enable point-in-time recovery. It can take 10 minutes to enable for new tables. If the `pointInTimeRecovery` block is not provided, this defaults to `false`. */
    readonly enabled: boolean | cdktf.IResolvable;
    /** (Optional) Number of preceding days for which continuous backups are taken and maintained. Default is 35. */
    readonly recoveryPeriodInDays?: number;
}
export declare function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any;
export declare function dynamodbTablePointInTimeRecoveryToHclTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any;
export declare class DynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTablePointInTimeRecovery | undefined;
    set internalValue(value: DynamodbTablePointInTimeRecovery | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _recoveryPeriodInDays?;
    get recoveryPeriodInDays(): number;
    set recoveryPeriodInDays(value: number);
    resetRecoveryPeriodInDays(): void;
    get recoveryPeriodInDaysInput(): number | undefined;
}
export interface DynamodbTableReplica {
    /** (Optional) ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys. */
    readonly kmsKeyArn?: string;
    /** (Optional) Whether to enable Point In Time Recovery for the replica. Default is `false`. */
    readonly pointInTimeRecovery?: boolean | cdktf.IResolvable;
    /** (Optional) Whether to propagate the global table's tags to a replica. */
    readonly propagateTags?: boolean | cdktf.IResolvable;
    /** (Required) Region name of the replica. */
    readonly regionName: string;
}
export declare function dynamodbTableReplicaToTerraform(struct?: DynamodbTableReplica | cdktf.IResolvable): any;
export declare function dynamodbTableReplicaToHclTerraform(struct?: DynamodbTableReplica | cdktf.IResolvable): any;
export declare class DynamodbTableReplicaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamodbTableReplica | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableReplica | cdktf.IResolvable | undefined);
    get arn(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _pointInTimeRecovery?;
    get pointInTimeRecovery(): boolean | cdktf.IResolvable;
    set pointInTimeRecovery(value: boolean | cdktf.IResolvable);
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): boolean | cdktf.IResolvable | undefined;
    private _propagateTags?;
    get propagateTags(): boolean | cdktf.IResolvable;
    set propagateTags(value: boolean | cdktf.IResolvable);
    resetPropagateTags(): void;
    get propagateTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
    get streamArn(): string;
    get streamLabel(): string;
}
export declare class DynamodbTableReplicaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamodbTableReplica[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamodbTableReplicaOutputReference;
}
export interface DynamodbTableServerSideEncryption {
    /** (Required) Whether or not to enable encryption at rest using an AWS managed KMS customer master key (CMK). If `enabled` is `false` then server-side encryption is set to AWS-_owned_ key (shown as `DEFAULT` in the AWS console). Potentially confusingly, if `enabled` is `true` and no `kmsKeyArn` is specified then server-side encryption is set to the _default_ KMS-_managed_ key (shown as `KMS` in the AWS console). The [AWS KMS documentation](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) explains the difference between AWS-_owned_ and KMS-_managed_ keys. */
    readonly enabled: boolean | cdktf.IResolvable;
    /** (Optional) ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys. */
    readonly kmsKeyArn?: string;
}
export declare function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any;
export declare function dynamodbTableServerSideEncryptionToHclTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any;
export declare class DynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableServerSideEncryption | undefined;
    set internalValue(value: DynamodbTableServerSideEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface DynamodbTableTimeouts {
    /** (Default `30m`) */
    readonly create?: string;
    /** (Default `10m`) */
    readonly delete?: string;
    /** (Default `60m`) */
    readonly update?: string;
}
export declare function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeouts | cdktf.IResolvable): any;
export declare function dynamodbTableTimeoutsToHclTerraform(struct?: DynamodbTableTimeouts | cdktf.IResolvable): any;
export declare class DynamodbTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbTableTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface DynamodbTableTtl {
    /** (Optional) Name of the table attribute to store the TTL timestamp in. */
    readonly attributeName?: string;
    /** (Optional) Whether TTL is enabled. */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any;
export declare function dynamodbTableTtlToHclTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any;
export declare class DynamodbTableTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbTableTtl | undefined;
    set internalValue(value: DynamodbTableTtl | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    resetAttributeName(): void;
    get attributeNameInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_table aws_dynamodb_table}
*/
export declare class DynamodbTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_table";
    /**
    * Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbTable to import
    * @param importFromId The id of the existing DynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_table aws_dynamodb_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTableConfig);
    get arn(): string;
    private _billingMode?;
    get billingMode(): string;
    set billingMode(value: string);
    resetBillingMode(): void;
    get billingModeInput(): string | undefined;
    private _deletionProtectionEnabled?;
    get deletionProtectionEnabled(): boolean | cdktf.IResolvable;
    set deletionProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetDeletionProtectionEnabled(): void;
    get deletionProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _hashKey?;
    get hashKey(): string;
    set hashKey(value: string);
    resetHashKey(): void;
    get hashKeyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string | undefined;
    private _readCapacity?;
    get readCapacity(): number;
    set readCapacity(value: number);
    resetReadCapacity(): void;
    get readCapacityInput(): number | undefined;
    private _restoreDateTime?;
    get restoreDateTime(): string;
    set restoreDateTime(value: string);
    resetRestoreDateTime(): void;
    get restoreDateTimeInput(): string | undefined;
    private _restoreSourceName?;
    get restoreSourceName(): string;
    set restoreSourceName(value: string);
    resetRestoreSourceName(): void;
    get restoreSourceNameInput(): string | undefined;
    private _restoreSourceTableArn?;
    get restoreSourceTableArn(): string;
    set restoreSourceTableArn(value: string);
    resetRestoreSourceTableArn(): void;
    get restoreSourceTableArnInput(): string | undefined;
    private _restoreToLatestTime?;
    get restoreToLatestTime(): boolean | cdktf.IResolvable;
    set restoreToLatestTime(value: boolean | cdktf.IResolvable);
    resetRestoreToLatestTime(): void;
    get restoreToLatestTimeInput(): boolean | cdktf.IResolvable | undefined;
    get streamArn(): string;
    private _streamEnabled?;
    get streamEnabled(): boolean | cdktf.IResolvable;
    set streamEnabled(value: boolean | cdktf.IResolvable);
    resetStreamEnabled(): void;
    get streamEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get streamLabel(): string;
    private _streamViewType?;
    get streamViewType(): string;
    set streamViewType(value: string);
    resetStreamViewType(): void;
    get streamViewTypeInput(): string | undefined;
    private _tableClass?;
    get tableClass(): string;
    set tableClass(value: string);
    resetTableClass(): void;
    get tableClassInput(): string | undefined;
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
    private _writeCapacity?;
    get writeCapacity(): number;
    set writeCapacity(value: number);
    resetWriteCapacity(): void;
    get writeCapacityInput(): number | undefined;
    private _attribute;
    get attribute(): DynamodbTableAttributeList;
    putAttribute(value: DynamodbTableAttribute[] | cdktf.IResolvable): void;
    resetAttribute(): void;
    get attributeInput(): cdktf.IResolvable | DynamodbTableAttribute[] | undefined;
    private _globalSecondaryIndex;
    get globalSecondaryIndex(): DynamodbTableGlobalSecondaryIndexList;
    putGlobalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable): void;
    resetGlobalSecondaryIndex(): void;
    get globalSecondaryIndexInput(): cdktf.IResolvable | DynamodbTableGlobalSecondaryIndex[] | undefined;
    private _importTable;
    get importTable(): DynamodbTableImportTableOutputReference;
    putImportTable(value: DynamodbTableImportTable): void;
    resetImportTable(): void;
    get importTableInput(): DynamodbTableImportTable | undefined;
    private _localSecondaryIndex;
    get localSecondaryIndex(): DynamodbTableLocalSecondaryIndexList;
    putLocalSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable): void;
    resetLocalSecondaryIndex(): void;
    get localSecondaryIndexInput(): cdktf.IResolvable | DynamodbTableLocalSecondaryIndex[] | undefined;
    private _onDemandThroughput;
    get onDemandThroughput(): DynamodbTableOnDemandThroughputOutputReference;
    putOnDemandThroughput(value: DynamodbTableOnDemandThroughput): void;
    resetOnDemandThroughput(): void;
    get onDemandThroughputInput(): DynamodbTableOnDemandThroughput | undefined;
    private _pointInTimeRecovery;
    get pointInTimeRecovery(): DynamodbTablePointInTimeRecoveryOutputReference;
    putPointInTimeRecovery(value: DynamodbTablePointInTimeRecovery): void;
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): DynamodbTablePointInTimeRecovery | undefined;
    private _replica;
    get replica(): DynamodbTableReplicaList;
    putReplica(value: DynamodbTableReplica[] | cdktf.IResolvable): void;
    resetReplica(): void;
    get replicaInput(): cdktf.IResolvable | DynamodbTableReplica[] | undefined;
    private _serverSideEncryption;
    get serverSideEncryption(): DynamodbTableServerSideEncryptionOutputReference;
    putServerSideEncryption(value: DynamodbTableServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DynamodbTableServerSideEncryption | undefined;
    private _timeouts;
    get timeouts(): DynamodbTableTimeoutsOutputReference;
    putTimeouts(value: DynamodbTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DynamodbTableTimeouts | undefined;
    private _ttl;
    get ttl(): DynamodbTableTtlOutputReference;
    putTtl(value: DynamodbTableTtl): void;
    resetTtl(): void;
    get ttlInput(): DynamodbTableTtl | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
