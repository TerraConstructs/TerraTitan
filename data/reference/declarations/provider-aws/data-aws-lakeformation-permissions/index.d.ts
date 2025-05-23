/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_resource DataAwsLakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#id DataAwsLakeformationPermissions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#principal DataAwsLakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_cells_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#data_cells_filter DataAwsLakeformationPermissions#data_cells_filter}
    */
    readonly dataCellsFilter?: DataAwsLakeformationPermissionsDataCellsFilter;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#data_location DataAwsLakeformationPermissions#data_location}
    */
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#database DataAwsLakeformationPermissions#database}
    */
    readonly database?: DataAwsLakeformationPermissionsDatabase;
    /**
    * lf_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#lf_tag DataAwsLakeformationPermissions#lf_tag}
    */
    readonly lfTag?: DataAwsLakeformationPermissionsLfTag;
    /**
    * lf_tag_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#lf_tag_policy DataAwsLakeformationPermissions#lf_tag_policy}
    */
    readonly lfTagPolicy?: DataAwsLakeformationPermissionsLfTagPolicy;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#table DataAwsLakeformationPermissions#table}
    */
    readonly table?: DataAwsLakeformationPermissionsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns;
}
export interface DataAwsLakeformationPermissionsDataCellsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#table_catalog_id DataAwsLakeformationPermissions#table_catalog_id}
    */
    readonly tableCatalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#table_name DataAwsLakeformationPermissions#table_name}
    */
    readonly tableName: string;
}
export declare function dataAwsLakeformationPermissionsDataCellsFilterToTerraform(struct?: DataAwsLakeformationPermissionsDataCellsFilterOutputReference | DataAwsLakeformationPermissionsDataCellsFilter): any;
export declare function dataAwsLakeformationPermissionsDataCellsFilterToHclTerraform(struct?: DataAwsLakeformationPermissionsDataCellsFilterOutputReference | DataAwsLakeformationPermissionsDataCellsFilter): any;
export declare class DataAwsLakeformationPermissionsDataCellsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsDataCellsFilter | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDataCellsFilter | undefined);
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
}
export interface DataAwsLakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#arn DataAwsLakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
}
export declare function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any;
export declare function dataAwsLakeformationPermissionsDataLocationToHclTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any;
export declare class DataAwsLakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsDataLocation | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDataLocation | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
}
export interface DataAwsLakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
}
export declare function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any;
export declare function dataAwsLakeformationPermissionsDatabaseToHclTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any;
export declare class DataAwsLakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsDatabase | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsDatabase | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface DataAwsLakeformationPermissionsLfTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#key DataAwsLakeformationPermissions#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#values DataAwsLakeformationPermissions#values}
    */
    readonly values: string[];
}
export declare function dataAwsLakeformationPermissionsLfTagToTerraform(struct?: DataAwsLakeformationPermissionsLfTagOutputReference | DataAwsLakeformationPermissionsLfTag): any;
export declare function dataAwsLakeformationPermissionsLfTagToHclTerraform(struct?: DataAwsLakeformationPermissionsLfTagOutputReference | DataAwsLakeformationPermissionsLfTag): any;
export declare class DataAwsLakeformationPermissionsLfTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsLfTag | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsLfTag | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface DataAwsLakeformationPermissionsLfTagPolicyExpression {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#key DataAwsLakeformationPermissions#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#values DataAwsLakeformationPermissions#values}
    */
    readonly values: string[];
}
export declare function dataAwsLakeformationPermissionsLfTagPolicyExpressionToTerraform(struct?: DataAwsLakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable): any;
export declare function dataAwsLakeformationPermissionsLfTagPolicyExpressionToHclTerraform(struct?: DataAwsLakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable): any;
export declare class DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsLfTagPolicyExpression | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsLakeformationPermissionsLfTagPolicyExpressionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLakeformationPermissionsLfTagPolicyExpressionOutputReference;
}
export interface DataAwsLakeformationPermissionsLfTagPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#resource_type DataAwsLakeformationPermissions#resource_type}
    */
    readonly resourceType: string;
    /**
    * expression block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#expression DataAwsLakeformationPermissions#expression}
    */
    readonly expression: DataAwsLakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsLfTagPolicyToTerraform(struct?: DataAwsLakeformationPermissionsLfTagPolicyOutputReference | DataAwsLakeformationPermissionsLfTagPolicy): any;
export declare function dataAwsLakeformationPermissionsLfTagPolicyToHclTerraform(struct?: DataAwsLakeformationPermissionsLfTagPolicyOutputReference | DataAwsLakeformationPermissionsLfTagPolicy): any;
export declare class DataAwsLakeformationPermissionsLfTagPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsLfTagPolicy | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsLfTagPolicy | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _expression;
    get expression(): DataAwsLakeformationPermissionsLfTagPolicyExpressionList;
    putExpression(value: DataAwsLakeformationPermissionsLfTagPolicyExpression[] | cdktf.IResolvable): void;
    get expressionInput(): cdktf.IResolvable | DataAwsLakeformationPermissionsLfTagPolicyExpression[] | undefined;
}
export interface DataAwsLakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any;
export declare function dataAwsLakeformationPermissionsTableToHclTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any;
export declare class DataAwsLakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsTable | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable | undefined;
}
export interface DataAwsLakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#catalog_id DataAwsLakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#column_names DataAwsLakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#database_name DataAwsLakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#name DataAwsLakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#wildcard DataAwsLakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any;
export declare function dataAwsLakeformationPermissionsTableWithColumnsToHclTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any;
export declare class DataAwsLakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLakeformationPermissionsTableWithColumns | undefined;
    set internalValue(value: DataAwsLakeformationPermissionsTableWithColumns | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _columnNames?;
    get columnNames(): string[];
    set columnNames(value: string[]);
    resetColumnNames(): void;
    get columnNamesInput(): string[] | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions aws_lakeformation_permissions}
*/
export declare class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lakeformation_permissions";
    /**
    * Generates CDKTF code for importing a DataAwsLakeformationPermissions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLakeformationPermissions to import
    * @param importFromId The id of the existing DataAwsLakeformationPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLakeformationPermissions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lakeformation_permissions aws_lakeformation_permissions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationPermissionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _catalogResource?;
    get catalogResource(): boolean | cdktf.IResolvable;
    set catalogResource(value: boolean | cdktf.IResolvable);
    resetCatalogResource(): void;
    get catalogResourceInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get permissions(): string[];
    get permissionsWithGrantOption(): string[];
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _dataCellsFilter;
    get dataCellsFilter(): DataAwsLakeformationPermissionsDataCellsFilterOutputReference;
    putDataCellsFilter(value: DataAwsLakeformationPermissionsDataCellsFilter): void;
    resetDataCellsFilter(): void;
    get dataCellsFilterInput(): DataAwsLakeformationPermissionsDataCellsFilter | undefined;
    private _dataLocation;
    get dataLocation(): DataAwsLakeformationPermissionsDataLocationOutputReference;
    putDataLocation(value: DataAwsLakeformationPermissionsDataLocation): void;
    resetDataLocation(): void;
    get dataLocationInput(): DataAwsLakeformationPermissionsDataLocation | undefined;
    private _database;
    get database(): DataAwsLakeformationPermissionsDatabaseOutputReference;
    putDatabase(value: DataAwsLakeformationPermissionsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): DataAwsLakeformationPermissionsDatabase | undefined;
    private _lfTag;
    get lfTag(): DataAwsLakeformationPermissionsLfTagOutputReference;
    putLfTag(value: DataAwsLakeformationPermissionsLfTag): void;
    resetLfTag(): void;
    get lfTagInput(): DataAwsLakeformationPermissionsLfTag | undefined;
    private _lfTagPolicy;
    get lfTagPolicy(): DataAwsLakeformationPermissionsLfTagPolicyOutputReference;
    putLfTagPolicy(value: DataAwsLakeformationPermissionsLfTagPolicy): void;
    resetLfTagPolicy(): void;
    get lfTagPolicyInput(): DataAwsLakeformationPermissionsLfTagPolicy | undefined;
    private _table;
    get table(): DataAwsLakeformationPermissionsTableOutputReference;
    putTable(value: DataAwsLakeformationPermissionsTable): void;
    resetTable(): void;
    get tableInput(): DataAwsLakeformationPermissionsTable | undefined;
    private _tableWithColumns;
    get tableWithColumns(): DataAwsLakeformationPermissionsTableWithColumnsOutputReference;
    putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): DataAwsLakeformationPermissionsTableWithColumns | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
