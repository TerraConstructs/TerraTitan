/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#billing_mode DynamodbTable#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#deletion_protection_enabled DynamodbTable#deletion_protection_enabled}
    */
    readonly deletionProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#id DynamodbTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}
    */
    readonly restoreDateTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}
    */
    readonly restoreSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#restore_source_table_arn DynamodbTable#restore_source_table_arn}
    */
    readonly restoreSourceTableArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}
    */
    readonly restoreToLatestTime?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}
    */
    readonly streamEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}
    */
    readonly streamViewType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#table_class DynamodbTable#table_class}
    */
    readonly tableClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#tags DynamodbTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#tags_all DynamodbTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
    /**
    * attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#attribute DynamodbTable#attribute}
    */
    readonly attribute?: DynamodbTableAttribute[] | cdktf.IResolvable;
    /**
    * global_secondary_index block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}
    */
    readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[] | cdktf.IResolvable;
    /**
    * import_table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#import_table DynamodbTable#import_table}
    */
    readonly importTable?: DynamodbTableImportTable;
    /**
    * local_secondary_index block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}
    */
    readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[] | cdktf.IResolvable;
    /**
    * on_demand_throughput block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}
    */
    readonly onDemandThroughput?: DynamodbTableOnDemandThroughput;
    /**
    * point_in_time_recovery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery;
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#replica DynamodbTable#replica}
    */
    readonly replica?: DynamodbTableReplica[] | cdktf.IResolvable;
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}
    */
    readonly serverSideEncryption?: DynamodbTableServerSideEncryption;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#timeouts DynamodbTable#timeouts}
    */
    readonly timeouts?: DynamodbTableTimeouts;
    /**
    * ttl block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#ttl DynamodbTable#ttl}
    */
    readonly ttl?: DynamodbTableTtl;
}
export interface DynamodbTableAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#type DynamodbTable#type}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
    /**
    * on_demand_throughput block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#on_demand_throughput DynamodbTable#on_demand_throughput}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#delimiter DynamodbTable#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#header_list DynamodbTable#header_list}
    */
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
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#csv DynamodbTable#csv}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#bucket DynamodbTable#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#bucket_owner DynamodbTable#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#key_prefix DynamodbTable#key_prefix}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#input_compression_type DynamodbTable#input_compression_type}
    */
    readonly inputCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#input_format DynamodbTable#input_format}
    */
    readonly inputFormat: string;
    /**
    * input_format_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#input_format_options DynamodbTable#input_format_options}
    */
    readonly inputFormatOptions?: DynamodbTableImportTableInputFormatOptions;
    /**
    * s3_bucket_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#s3_bucket_source DynamodbTable#s3_bucket_source}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#range_key DynamodbTable#range_key}
    */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#max_read_request_units DynamodbTable#max_read_request_units}
    */
    readonly maxReadRequestUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#max_write_request_units DynamodbTable#max_write_request_units}
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
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
}
export interface DynamodbTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}
    */
    readonly propagateTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#region_name DynamodbTable#region_name}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#create DynamodbTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#delete DynamodbTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#update DynamodbTable#update}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#attribute_name DynamodbTable#attribute_name}
    */
    readonly attributeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#enabled DynamodbTable#enabled}
    */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table aws_dynamodb_table}
*/
export declare class DynamodbTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_table";
    /**
    * Generates CDKTF code for importing a DynamodbTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbTable to import
    * @param importFromId The id of the existing DynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_table aws_dynamodb_table} Resource
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
