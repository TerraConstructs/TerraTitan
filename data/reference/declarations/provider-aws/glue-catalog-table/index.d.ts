/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}
    */
    readonly owner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}
    */
    readonly retention?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}
    */
    readonly tableType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}
    */
    readonly viewExpandedText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}
    */
    readonly viewOriginalText?: string;
    /**
    * open_table_format_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#open_table_format_input GlueCatalogTable#open_table_format_input}
    */
    readonly openTableFormatInput?: GlueCatalogTableOpenTableFormatInput;
    /**
    * partition_index block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#partition_index GlueCatalogTable#partition_index}
    */
    readonly partitionIndex?: GlueCatalogTablePartitionIndex[] | cdktf.IResolvable;
    /**
    * partition_keys block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}
    */
    readonly partitionKeys?: GlueCatalogTablePartitionKeys[] | cdktf.IResolvable;
    /**
    * storage_descriptor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}
    */
    readonly storageDescriptor?: GlueCatalogTableStorageDescriptor;
    /**
    * target_table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#target_table GlueCatalogTable#target_table}
    */
    readonly targetTable?: GlueCatalogTableTargetTable;
}
export interface GlueCatalogTableOpenTableFormatInputIcebergInput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}
    */
    readonly metadataOperation: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}
    */
    readonly version?: string;
}
export declare function glueCatalogTableOpenTableFormatInputIcebergInputToTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInput): any;
export declare function glueCatalogTableOpenTableFormatInputIcebergInputToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference | GlueCatalogTableOpenTableFormatInputIcebergInput): any;
export declare class GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableOpenTableFormatInputIcebergInput | undefined;
    set internalValue(value: GlueCatalogTableOpenTableFormatInputIcebergInput | undefined);
    private _metadataOperation?;
    get metadataOperation(): string;
    set metadataOperation(value: string);
    get metadataOperationInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface GlueCatalogTableOpenTableFormatInput {
    /**
    * iceberg_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#iceberg_input GlueCatalogTable#iceberg_input}
    */
    readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
}
export declare function glueCatalogTableOpenTableFormatInputToTerraform(struct?: GlueCatalogTableOpenTableFormatInputOutputReference | GlueCatalogTableOpenTableFormatInput): any;
export declare function glueCatalogTableOpenTableFormatInputToHclTerraform(struct?: GlueCatalogTableOpenTableFormatInputOutputReference | GlueCatalogTableOpenTableFormatInput): any;
export declare class GlueCatalogTableOpenTableFormatInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableOpenTableFormatInput | undefined;
    set internalValue(value: GlueCatalogTableOpenTableFormatInput | undefined);
    private _icebergInput;
    get icebergInput(): GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference;
    putIcebergInput(value: GlueCatalogTableOpenTableFormatInputIcebergInput): void;
    get icebergInputInput(): GlueCatalogTableOpenTableFormatInputIcebergInput | undefined;
}
export interface GlueCatalogTablePartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}
    */
    readonly keys: string[];
}
export declare function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex | cdktf.IResolvable): any;
export declare function glueCatalogTablePartitionIndexToHclTerraform(struct?: GlueCatalogTablePartitionIndex | cdktf.IResolvable): any;
export declare class GlueCatalogTablePartitionIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTablePartitionIndex | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTablePartitionIndex | cdktf.IResolvable | undefined);
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string | undefined;
    get indexStatus(): string;
    private _keys?;
    get keys(): string[];
    set keys(value: string[]);
    get keysInput(): string[] | undefined;
}
export declare class GlueCatalogTablePartitionIndexList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTablePartitionIndex[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTablePartitionIndexOutputReference;
}
export interface GlueCatalogTablePartitionKeys {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
    */
    readonly type?: string;
}
export declare function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys | cdktf.IResolvable): any;
export declare function glueCatalogTablePartitionKeysToHclTerraform(struct?: GlueCatalogTablePartitionKeys | cdktf.IResolvable): any;
export declare class GlueCatalogTablePartitionKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTablePartitionKeys | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTablePartitionKeys | cdktf.IResolvable | undefined);
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
export declare class GlueCatalogTablePartitionKeysList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTablePartitionKeys[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTablePartitionKeysOutputReference;
}
export interface GlueCatalogTableStorageDescriptorColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}
    */
    readonly type?: string;
}
export declare function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns | cdktf.IResolvable): any;
export declare function glueCatalogTableStorageDescriptorColumnsToHclTerraform(struct?: GlueCatalogTableStorageDescriptorColumns | cdktf.IResolvable): any;
export declare class GlueCatalogTableStorageDescriptorColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorColumns | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorColumns | cdktf.IResolvable | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class GlueCatalogTableStorageDescriptorColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableStorageDescriptorColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableStorageDescriptorColumnsOutputReference;
}
export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}
    */
    readonly registryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}
    */
    readonly schemaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}
    */
    readonly schemaName?: string;
}
export declare function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any;
export declare function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any;
export declare class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined);
    private _registryName?;
    get registryName(): string;
    set registryName(value: string);
    resetRegistryName(): void;
    get registryNameInput(): string | undefined;
    private _schemaArn?;
    get schemaArn(): string;
    set schemaArn(value: string);
    resetSchemaArn(): void;
    get schemaArnInput(): string | undefined;
    private _schemaName?;
    get schemaName(): string;
    set schemaName(value: string);
    resetSchemaName(): void;
    get schemaNameInput(): string | undefined;
}
export interface GlueCatalogTableStorageDescriptorSchemaReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}
    */
    readonly schemaVersionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}
    */
    readonly schemaVersionNumber: number;
    /**
    * schema_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}
    */
    readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
}
export declare function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any;
export declare function glueCatalogTableStorageDescriptorSchemaReferenceToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any;
export declare class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableStorageDescriptorSchemaReference | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSchemaReference | undefined);
    private _schemaVersionId?;
    get schemaVersionId(): string;
    set schemaVersionId(value: string);
    resetSchemaVersionId(): void;
    get schemaVersionIdInput(): string | undefined;
    private _schemaVersionNumber?;
    get schemaVersionNumber(): number;
    set schemaVersionNumber(value: number);
    get schemaVersionNumberInput(): number | undefined;
    private _schemaId;
    get schemaId(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
    putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): void;
    resetSchemaId(): void;
    get schemaIdInput(): GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined;
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}
    */
    readonly serializationLibrary?: string;
}
export declare function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any;
export declare function glueCatalogTableStorageDescriptorSerDeInfoToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any;
export declare class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableStorageDescriptorSerDeInfo | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSerDeInfo | undefined);
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
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}
    */
    readonly skewedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
    */
    readonly skewedColumnValueLocationMaps?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}
    */
    readonly skewedColumnValues?: string[];
}
export declare function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any;
export declare function glueCatalogTableStorageDescriptorSkewedInfoToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any;
export declare class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableStorageDescriptorSkewedInfo | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSkewedInfo | undefined);
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
export interface GlueCatalogTableStorageDescriptorSortColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}
    */
    readonly column: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}
    */
    readonly sortOrder: number;
}
export declare function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns | cdktf.IResolvable): any;
export declare function glueCatalogTableStorageDescriptorSortColumnsToHclTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns | cdktf.IResolvable): any;
export declare class GlueCatalogTableStorageDescriptorSortColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueCatalogTableStorageDescriptorSortColumns | cdktf.IResolvable | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptorSortColumns | cdktf.IResolvable | undefined);
    private _column?;
    get column(): string;
    set column(value: string);
    get columnInput(): string | undefined;
    private _sortOrder?;
    get sortOrder(): number;
    set sortOrder(value: number);
    get sortOrderInput(): number | undefined;
}
export declare class GlueCatalogTableStorageDescriptorSortColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueCatalogTableStorageDescriptorSortColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueCatalogTableStorageDescriptorSortColumnsOutputReference;
}
export interface GlueCatalogTableStorageDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}
    */
    readonly additionalLocations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}
    */
    readonly bucketColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}
    */
    readonly compressed?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}
    */
    readonly numberOfBuckets?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
    */
    readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#columns GlueCatalogTable#columns}
    */
    readonly columns?: GlueCatalogTableStorageDescriptorColumns[] | cdktf.IResolvable;
    /**
    * schema_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}
    */
    readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference;
    /**
    * ser_de_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}
    */
    readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo;
    /**
    * skewed_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}
    */
    readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo;
    /**
    * sort_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}
    */
    readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[] | cdktf.IResolvable;
}
export declare function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any;
export declare function glueCatalogTableStorageDescriptorToHclTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any;
export declare class GlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableStorageDescriptor | undefined;
    set internalValue(value: GlueCatalogTableStorageDescriptor | undefined);
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
    get columns(): GlueCatalogTableStorageDescriptorColumnsList;
    putColumns(value: GlueCatalogTableStorageDescriptorColumns[] | cdktf.IResolvable): void;
    resetColumns(): void;
    get columnsInput(): cdktf.IResolvable | GlueCatalogTableStorageDescriptorColumns[] | undefined;
    private _schemaReference;
    get schemaReference(): GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
    putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference): void;
    resetSchemaReference(): void;
    get schemaReferenceInput(): GlueCatalogTableStorageDescriptorSchemaReference | undefined;
    private _serDeInfo;
    get serDeInfo(): GlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
    putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo): void;
    resetSerDeInfo(): void;
    get serDeInfoInput(): GlueCatalogTableStorageDescriptorSerDeInfo | undefined;
    private _skewedInfo;
    get skewedInfo(): GlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
    putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo): void;
    resetSkewedInfo(): void;
    get skewedInfoInput(): GlueCatalogTableStorageDescriptorSkewedInfo | undefined;
    private _sortColumns;
    get sortColumns(): GlueCatalogTableStorageDescriptorSortColumnsList;
    putSortColumns(value: GlueCatalogTableStorageDescriptorSortColumns[] | cdktf.IResolvable): void;
    resetSortColumns(): void;
    get sortColumnsInput(): cdktf.IResolvable | GlueCatalogTableStorageDescriptorSortColumns[] | undefined;
}
export interface GlueCatalogTableTargetTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}
    */
    readonly region?: string;
}
export declare function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any;
export declare function glueCatalogTableTargetTableToHclTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any;
export declare class GlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueCatalogTableTargetTable | undefined;
    set internalValue(value: GlueCatalogTableTargetTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table aws_glue_catalog_table}
*/
export declare class GlueCatalogTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_catalog_table";
    /**
    * Generates CDKTF code for importing a GlueCatalogTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueCatalogTable to import
    * @param importFromId The id of the existing GlueCatalogTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueCatalogTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_catalog_table aws_glue_catalog_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueCatalogTableConfig
    */
    constructor(scope: Construct, id: string, config: GlueCatalogTableConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
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
    private _retention?;
    get retention(): number;
    set retention(value: number);
    resetRetention(): void;
    get retentionInput(): number | undefined;
    private _tableType?;
    get tableType(): string;
    set tableType(value: string);
    resetTableType(): void;
    get tableTypeInput(): string | undefined;
    private _viewExpandedText?;
    get viewExpandedText(): string;
    set viewExpandedText(value: string);
    resetViewExpandedText(): void;
    get viewExpandedTextInput(): string | undefined;
    private _viewOriginalText?;
    get viewOriginalText(): string;
    set viewOriginalText(value: string);
    resetViewOriginalText(): void;
    get viewOriginalTextInput(): string | undefined;
    private _openTableFormatInput;
    get openTableFormatInput(): GlueCatalogTableOpenTableFormatInputOutputReference;
    putOpenTableFormatInput(value: GlueCatalogTableOpenTableFormatInput): void;
    resetOpenTableFormatInput(): void;
    get openTableFormatInputInput(): GlueCatalogTableOpenTableFormatInput | undefined;
    private _partitionIndex;
    get partitionIndex(): GlueCatalogTablePartitionIndexList;
    putPartitionIndex(value: GlueCatalogTablePartitionIndex[] | cdktf.IResolvable): void;
    resetPartitionIndex(): void;
    get partitionIndexInput(): cdktf.IResolvable | GlueCatalogTablePartitionIndex[] | undefined;
    private _partitionKeys;
    get partitionKeys(): GlueCatalogTablePartitionKeysList;
    putPartitionKeys(value: GlueCatalogTablePartitionKeys[] | cdktf.IResolvable): void;
    resetPartitionKeys(): void;
    get partitionKeysInput(): cdktf.IResolvable | GlueCatalogTablePartitionKeys[] | undefined;
    private _storageDescriptor;
    get storageDescriptor(): GlueCatalogTableStorageDescriptorOutputReference;
    putStorageDescriptor(value: GlueCatalogTableStorageDescriptor): void;
    resetStorageDescriptor(): void;
    get storageDescriptorInput(): GlueCatalogTableStorageDescriptor | undefined;
    private _targetTable;
    get targetTable(): GlueCatalogTableTargetTableOutputReference;
    putTargetTable(value: GlueCatalogTableTargetTable): void;
    resetTargetTable(): void;
    get targetTableInput(): GlueCatalogTableTargetTable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
