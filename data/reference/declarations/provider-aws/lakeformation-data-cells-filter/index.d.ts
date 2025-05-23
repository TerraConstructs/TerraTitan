/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationDataCellsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * table_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#table_data LakeformationDataCellsFilter#table_data}
    */
    readonly tableData?: LakeformationDataCellsFilterTableData[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#timeouts LakeformationDataCellsFilter#timeouts}
    */
    readonly timeouts?: LakeformationDataCellsFilterTimeouts;
}
export interface LakeformationDataCellsFilterTableDataColumnWildcard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
}
export declare function lakeformationDataCellsFilterTableDataColumnWildcardToTerraform(struct?: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable): any;
export declare function lakeformationDataCellsFilterTableDataColumnWildcardToHclTerraform(struct?: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable): any;
export declare class LakeformationDataCellsFilterTableDataColumnWildcardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataCellsFilterTableDataColumnWildcard | cdktf.IResolvable | undefined);
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[] | undefined;
}
export declare class LakeformationDataCellsFilterTableDataColumnWildcardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataCellsFilterTableDataColumnWildcardOutputReference;
}
export interface LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard {
}
export declare function lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable): any;
export declare function lakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardToHclTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable): any;
export declare class LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard | cdktf.IResolvable | undefined);
}
export declare class LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardOutputReference;
}
export interface LakeformationDataCellsFilterTableDataRowFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}
    */
    readonly filterExpression?: string;
    /**
    * all_rows_wildcard block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}
    */
    readonly allRowsWildcard?: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable;
}
export declare function lakeformationDataCellsFilterTableDataRowFilterToTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable): any;
export declare function lakeformationDataCellsFilterTableDataRowFilterToHclTerraform(struct?: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable): any;
export declare class LakeformationDataCellsFilterTableDataRowFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataCellsFilterTableDataRowFilter | cdktf.IResolvable | undefined);
    private _filterExpression?;
    get filterExpression(): string;
    set filterExpression(value: string);
    resetFilterExpression(): void;
    get filterExpressionInput(): string | undefined;
    private _allRowsWildcard;
    get allRowsWildcard(): LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcardList;
    putAllRowsWildcard(value: LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | cdktf.IResolvable): void;
    resetAllRowsWildcard(): void;
    get allRowsWildcardInput(): cdktf.IResolvable | LakeformationDataCellsFilterTableDataRowFilterAllRowsWildcard[] | undefined;
}
export declare class LakeformationDataCellsFilterTableDataRowFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataCellsFilterTableDataRowFilterOutputReference;
}
export interface LakeformationDataCellsFilterTableData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}
    */
    readonly tableCatalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#version_id LakeformationDataCellsFilter#version_id}
    */
    readonly versionId?: string;
    /**
    * column_wildcard block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}
    */
    readonly columnWildcard?: LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable;
    /**
    * row_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}
    */
    readonly rowFilter?: LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable;
}
export declare function lakeformationDataCellsFilterTableDataToTerraform(struct?: LakeformationDataCellsFilterTableData | cdktf.IResolvable): any;
export declare function lakeformationDataCellsFilterTableDataToHclTerraform(struct?: LakeformationDataCellsFilterTableData | cdktf.IResolvable): any;
export declare class LakeformationDataCellsFilterTableDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationDataCellsFilterTableData | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataCellsFilterTableData | cdktf.IResolvable | undefined);
    private _columnNames?;
    get columnNames(): string[];
    set columnNames(value: string[]);
    resetColumnNames(): void;
    get columnNamesInput(): string[] | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tableCatalogId?;
    get tableCatalogId(): string;
    set tableCatalogId(value: string);
    get tableCatalogIdInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    private _columnWildcard;
    get columnWildcard(): LakeformationDataCellsFilterTableDataColumnWildcardList;
    putColumnWildcard(value: LakeformationDataCellsFilterTableDataColumnWildcard[] | cdktf.IResolvable): void;
    resetColumnWildcard(): void;
    get columnWildcardInput(): cdktf.IResolvable | LakeformationDataCellsFilterTableDataColumnWildcard[] | undefined;
    private _rowFilter;
    get rowFilter(): LakeformationDataCellsFilterTableDataRowFilterList;
    putRowFilter(value: LakeformationDataCellsFilterTableDataRowFilter[] | cdktf.IResolvable): void;
    resetRowFilter(): void;
    get rowFilterInput(): cdktf.IResolvable | LakeformationDataCellsFilterTableDataRowFilter[] | undefined;
}
export declare class LakeformationDataCellsFilterTableDataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationDataCellsFilterTableData[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationDataCellsFilterTableDataOutputReference;
}
export interface LakeformationDataCellsFilterTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#create LakeformationDataCellsFilter#create}
    */
    readonly create?: string;
}
export declare function lakeformationDataCellsFilterTimeoutsToTerraform(struct?: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable): any;
export declare function lakeformationDataCellsFilterTimeoutsToHclTerraform(struct?: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable): any;
export declare class LakeformationDataCellsFilterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationDataCellsFilterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationDataCellsFilterTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter}
*/
export declare class LakeformationDataCellsFilter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_data_cells_filter";
    /**
    * Generates CDKTF code for importing a LakeformationDataCellsFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationDataCellsFilter to import
    * @param importFromId The id of the existing LakeformationDataCellsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationDataCellsFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_data_cells_filter aws_lakeformation_data_cells_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationDataCellsFilterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LakeformationDataCellsFilterConfig);
    get id(): string;
    private _tableData;
    get tableData(): LakeformationDataCellsFilterTableDataList;
    putTableData(value: LakeformationDataCellsFilterTableData[] | cdktf.IResolvable): void;
    resetTableData(): void;
    get tableDataInput(): cdktf.IResolvable | LakeformationDataCellsFilterTableData[] | undefined;
    private _timeouts;
    get timeouts(): LakeformationDataCellsFilterTimeoutsOutputReference;
    putTimeouts(value: LakeformationDataCellsFilterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LakeformationDataCellsFilterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
