/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#catalog_id DataAwsGlueCatalogTable#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#database_name DataAwsGlueCatalogTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#id DataAwsGlueCatalogTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#name DataAwsGlueCatalogTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#query_as_of_time DataAwsGlueCatalogTable#query_as_of_time}
    */
    readonly queryAsOfTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#transaction_id DataAwsGlueCatalogTable#transaction_id}
    */
    readonly transactionId?: number;
}
export interface DataAwsGlueCatalogTablePartitionIndex {
}
export declare function dataAwsGlueCatalogTablePartitionIndexToTerraform(struct?: DataAwsGlueCatalogTablePartitionIndex): any;
export declare function dataAwsGlueCatalogTablePartitionIndexToHclTerraform(struct?: DataAwsGlueCatalogTablePartitionIndex): any;
export declare class DataAwsGlueCatalogTablePartitionIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTablePartitionIndex | undefined;
    set internalValue(value: DataAwsGlueCatalogTablePartitionIndex | undefined);
    get indexName(): string;
    get indexStatus(): string;
    get keys(): string[];
}
export declare class DataAwsGlueCatalogTablePartitionIndexList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTablePartitionIndexOutputReference;
}
export interface DataAwsGlueCatalogTablePartitionKeys {
}
export declare function dataAwsGlueCatalogTablePartitionKeysToTerraform(struct?: DataAwsGlueCatalogTablePartitionKeys): any;
export declare function dataAwsGlueCatalogTablePartitionKeysToHclTerraform(struct?: DataAwsGlueCatalogTablePartitionKeys): any;
export declare class DataAwsGlueCatalogTablePartitionKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTablePartitionKeys | undefined;
    set internalValue(value: DataAwsGlueCatalogTablePartitionKeys | undefined);
    get comment(): string;
    get name(): string;
    get type(): string;
}
export declare class DataAwsGlueCatalogTablePartitionKeysList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTablePartitionKeysOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorColumns {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorColumnsToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorColumns): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorColumnsToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorColumns): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorColumns | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorColumns | undefined);
    get comment(): string;
    get name(): string;
    private _parameters;
    get parameters(): cdktf.StringMap;
    get type(): string;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorColumnsOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined);
    get registryName(): string;
    get schemaArn(): string;
    get schemaName(): string;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorSchemaReference {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReference): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorSchemaReferenceToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSchemaReference): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSchemaReference | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSchemaReference | undefined);
    private _schemaId;
    get schemaId(): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdList;
    get schemaVersionId(): string;
    get schemaVersionNumber(): number;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorSerDeInfo {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSerDeInfo): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorSerDeInfoToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSerDeInfo): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSerDeInfo | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSerDeInfo | undefined);
    get name(): string;
    private _parameters;
    get parameters(): cdktf.StringMap;
    get serializationLibrary(): string;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorSkewedInfo {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSkewedInfo): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorSkewedInfoToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSkewedInfo): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSkewedInfo | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSkewedInfo | undefined);
    get skewedColumnNames(): string[];
    private _skewedColumnValueLocationMaps;
    get skewedColumnValueLocationMaps(): cdktf.StringMap;
    get skewedColumnValues(): string[];
}
export declare class DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptorSortColumns {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSortColumns): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorSortColumnsToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptorSortColumns): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptorSortColumns | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptorSortColumns | undefined);
    get column(): string;
    get sortOrder(): number;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorSortColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorSortColumnsOutputReference;
}
export interface DataAwsGlueCatalogTableStorageDescriptor {
}
export declare function dataAwsGlueCatalogTableStorageDescriptorToTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptor): any;
export declare function dataAwsGlueCatalogTableStorageDescriptorToHclTerraform(struct?: DataAwsGlueCatalogTableStorageDescriptor): any;
export declare class DataAwsGlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableStorageDescriptor | undefined;
    set internalValue(value: DataAwsGlueCatalogTableStorageDescriptor | undefined);
    get additionalLocations(): string[];
    get bucketColumns(): string[];
    private _columns;
    get columns(): DataAwsGlueCatalogTableStorageDescriptorColumnsList;
    get compressed(): cdktf.IResolvable;
    get inputFormat(): string;
    get location(): string;
    get numberOfBuckets(): number;
    get outputFormat(): string;
    private _parameters;
    get parameters(): cdktf.StringMap;
    private _schemaReference;
    get schemaReference(): DataAwsGlueCatalogTableStorageDescriptorSchemaReferenceList;
    private _serDeInfo;
    get serDeInfo(): DataAwsGlueCatalogTableStorageDescriptorSerDeInfoList;
    private _skewedInfo;
    get skewedInfo(): DataAwsGlueCatalogTableStorageDescriptorSkewedInfoList;
    private _sortColumns;
    get sortColumns(): DataAwsGlueCatalogTableStorageDescriptorSortColumnsList;
    get storedAsSubDirectories(): cdktf.IResolvable;
}
export declare class DataAwsGlueCatalogTableStorageDescriptorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableStorageDescriptorOutputReference;
}
export interface DataAwsGlueCatalogTableTargetTable {
}
export declare function dataAwsGlueCatalogTableTargetTableToTerraform(struct?: DataAwsGlueCatalogTableTargetTable): any;
export declare function dataAwsGlueCatalogTableTargetTableToHclTerraform(struct?: DataAwsGlueCatalogTableTargetTable): any;
export declare class DataAwsGlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueCatalogTableTargetTable | undefined;
    set internalValue(value: DataAwsGlueCatalogTableTargetTable | undefined);
    get catalogId(): string;
    get databaseName(): string;
    get name(): string;
    get region(): string;
}
export declare class DataAwsGlueCatalogTableTargetTableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueCatalogTableTargetTableOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table aws_glue_catalog_table}
*/
export declare class DataAwsGlueCatalogTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_glue_catalog_table";
    /**
    * Generates CDKTF code for importing a DataAwsGlueCatalogTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGlueCatalogTable to import
    * @param importFromId The id of the existing DataAwsGlueCatalogTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGlueCatalogTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_catalog_table aws_glue_catalog_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueCatalogTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGlueCatalogTableConfig);
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
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get owner(): string;
    private _parameters;
    get parameters(): cdktf.StringMap;
    private _partitionIndex;
    get partitionIndex(): DataAwsGlueCatalogTablePartitionIndexList;
    private _partitionKeys;
    get partitionKeys(): DataAwsGlueCatalogTablePartitionKeysList;
    private _queryAsOfTime?;
    get queryAsOfTime(): string;
    set queryAsOfTime(value: string);
    resetQueryAsOfTime(): void;
    get queryAsOfTimeInput(): string | undefined;
    get retention(): number;
    private _storageDescriptor;
    get storageDescriptor(): DataAwsGlueCatalogTableStorageDescriptorList;
    get tableType(): string;
    private _targetTable;
    get targetTable(): DataAwsGlueCatalogTableTargetTableList;
    private _transactionId?;
    get transactionId(): number;
    set transactionId(value: number);
    resetTransactionId(): void;
    get transactionIdInput(): number | undefined;
    get viewExpandedText(): string;
    get viewOriginalText(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
