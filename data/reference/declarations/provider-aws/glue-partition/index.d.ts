/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#database_name GluePartition#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#id GluePartition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#partition_values GluePartition#partition_values}
    */
    readonly partitionValues: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#table_name GluePartition#table_name}
    */
    readonly tableName: string;
    /**
    * storage_descriptor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}
    */
    readonly storageDescriptor?: GluePartitionStorageDescriptor;
}
export interface GluePartitionStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#comment GluePartition#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#name GluePartition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#type GluePartition#type}
    */
    readonly type?: string;
}
export declare function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns | cdktf.IResolvable): any;
export declare function gluePartitionStorageDescriptorColumnsToHclTerraform(struct?: GluePartitionStorageDescriptorColumns | cdktf.IResolvable): any;
export declare class GluePartitionStorageDescriptorColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GluePartitionStorageDescriptorColumns | cdktf.IResolvable | undefined;
    set internalValue(value: GluePartitionStorageDescriptorColumns | cdktf.IResolvable | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class GluePartitionStorageDescriptorColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GluePartitionStorageDescriptorColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GluePartitionStorageDescriptorColumnsOutputReference;
}
export interface GluePartitionStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#name GluePartition#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}
    */
    readonly serializationLibrary?: string;
}
export declare function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any;
export declare function gluePartitionStorageDescriptorSerDeInfoToHclTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any;
export declare class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GluePartitionStorageDescriptorSerDeInfo | undefined;
    set internalValue(value: GluePartitionStorageDescriptorSerDeInfo | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _serializationLibrary?;
    get serializationLibrary(): string;
    set serializationLibrary(value: string);
    resetSerializationLibrary(): void;
    get serializationLibraryInput(): string | undefined;
}
export interface GluePartitionStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
}
export declare function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any;
export declare function gluePartitionStorageDescriptorSkewedInfoToHclTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any;
export declare class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GluePartitionStorageDescriptorSkewedInfo | undefined;
    set internalValue(value: GluePartitionStorageDescriptorSkewedInfo | undefined);
    private _skewedColumnNames?;
    get skewedColumnNames(): string[];
    set skewedColumnNames(value: string[]);
    resetSkewedColumnNames(): void;
    get skewedColumnNamesInput(): string[] | undefined;
    private _skewedColumnValueLocationMaps?;
    get skewedColumnValueLocationMaps(): {
        [key: string]: string;
    };
    set skewedColumnValueLocationMaps(value: {
        [key: string]: string;
    });
    resetSkewedColumnValueLocationMaps(): void;
    get skewedColumnValueLocationMapsInput(): {
        [key: string]: string;
    } | undefined;
    private _skewedColumnValues?;
    get skewedColumnValues(): string[];
    set skewedColumnValues(value: string[]);
    resetSkewedColumnValues(): void;
    get skewedColumnValuesInput(): string[] | undefined;
}
export interface GluePartitionStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#column GluePartition#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}
    */
    readonly sortOrder: number;
}
export declare function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns | cdktf.IResolvable): any;
export declare function gluePartitionStorageDescriptorSortColumnsToHclTerraform(struct?: GluePartitionStorageDescriptorSortColumns | cdktf.IResolvable): any;
export declare class GluePartitionStorageDescriptorSortColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GluePartitionStorageDescriptorSortColumns | cdktf.IResolvable | undefined;
    set internalValue(value: GluePartitionStorageDescriptorSortColumns | cdktf.IResolvable | undefined);
    private _column?;
    get column(): string;
    set column(value: string);
    get columnInput(): string | undefined;
    private _sortOrder?;
    get sortOrder(): number;
    set sortOrder(value: number);
    get sortOrderInput(): number | undefined;
}
export declare class GluePartitionStorageDescriptorSortColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GluePartitionStorageDescriptorSortColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GluePartitionStorageDescriptorSortColumnsOutputReference;
}
export interface GluePartitionStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#additional_locations GluePartition#additional_locations}
    */
    readonly additionalLocations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#compressed GluePartition#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#input_format GluePartition#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#location GluePartition#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#output_format GluePartition#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#parameters GluePartition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#columns GluePartition#columns}
    */
    readonly columns?: GluePartitionStorageDescriptorColumns[] | cdktf.IResolvable;
    /**
    * ser_de_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#ser_de_info GluePartition#ser_de_info}
    */
    readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}
    */
    readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}
    */
    readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[] | cdktf.IResolvable;
}
export declare function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any;
export declare function gluePartitionStorageDescriptorToHclTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any;
export declare class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GluePartitionStorageDescriptor | undefined;
    set internalValue(value: GluePartitionStorageDescriptor | undefined);
    private _additionalLocations?;
    get additionalLocations(): string[];
    set additionalLocations(value: string[]);
    resetAdditionalLocations(): void;
    get additionalLocationsInput(): string[] | undefined;
    private _bucketColumns?;
    get bucketColumns(): string[];
    set bucketColumns(value: string[]);
    resetBucketColumns(): void;
    get bucketColumnsInput(): string[] | undefined;
    private _compressed?;
    get compressed(): boolean | cdktf.IResolvable;
    set compressed(value: boolean | cdktf.IResolvable);
    resetCompressed(): void;
    get compressedInput(): boolean | cdktf.IResolvable | undefined;
    private _inputFormat?;
    get inputFormat(): string;
    set inputFormat(value: string);
    resetInputFormat(): void;
    get inputFormatInput(): string | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string | undefined;
    private _numberOfBuckets?;
    get numberOfBuckets(): number;
    set numberOfBuckets(value: number);
    resetNumberOfBuckets(): void;
    get numberOfBucketsInput(): number | undefined;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    resetOutputFormat(): void;
    get outputFormatInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _storedAsSubDirectories?;
    get storedAsSubDirectories(): boolean | cdktf.IResolvable;
    set storedAsSubDirectories(value: boolean | cdktf.IResolvable);
    resetStoredAsSubDirectories(): void;
    get storedAsSubDirectoriesInput(): boolean | cdktf.IResolvable | undefined;
    private _columns;
    get columns(): GluePartitionStorageDescriptorColumnsList;
    putColumns(value: GluePartitionStorageDescriptorColumns[] | cdktf.IResolvable): void;
    resetColumns(): void;
    get columnsInput(): cdktf.IResolvable | GluePartitionStorageDescriptorColumns[] | undefined;
    private _serDeInfo;
    get serDeInfo(): GluePartitionStorageDescriptorSerDeInfoOutputReference;
    putSerDeInfo(value: GluePartitionStorageDescriptorSerDeInfo): void;
    resetSerDeInfo(): void;
    get serDeInfoInput(): GluePartitionStorageDescriptorSerDeInfo | undefined;
    private _skewedInfo;
    get skewedInfo(): GluePartitionStorageDescriptorSkewedInfoOutputReference;
    putSkewedInfo(value: GluePartitionStorageDescriptorSkewedInfo): void;
    resetSkewedInfo(): void;
    get skewedInfoInput(): GluePartitionStorageDescriptorSkewedInfo | undefined;
    private _sortColumns;
    get sortColumns(): GluePartitionStorageDescriptorSortColumnsList;
    putSortColumns(value: GluePartitionStorageDescriptorSortColumns[] | cdktf.IResolvable): void;
    resetSortColumns(): void;
    get sortColumnsInput(): cdktf.IResolvable | GluePartitionStorageDescriptorSortColumns[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition aws_glue_partition}
*/
export declare class GluePartition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_partition";
    /**
    * Generates CDKTF code for importing a GluePartition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GluePartition to import
    * @param importFromId The id of the existing GluePartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GluePartition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition aws_glue_partition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionConfig
    */
    constructor(scope: Construct, id: string, config: GluePartitionConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    get creationTime(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastAccessedTime(): string;
    get lastAnalyzedTime(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _partitionValues?;
    get partitionValues(): string[];
    set partitionValues(value: string[]);
    get partitionValuesInput(): string[] | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _storageDescriptor;
    get storageDescriptor(): GluePartitionStorageDescriptorOutputReference;
    putStorageDescriptor(value: GluePartitionStorageDescriptor): void;
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GluePartitionStorageDescriptor | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
