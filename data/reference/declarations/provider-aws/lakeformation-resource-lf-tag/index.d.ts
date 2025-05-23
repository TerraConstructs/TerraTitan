/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationResourceLfTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#database LakeformationResourceLfTag#database}
    */
    readonly database?: LakeformationResourceLfTagDatabase[] | cdktf.IResolvable;
    /**
    * lf_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#lf_tag LakeformationResourceLfTag#lf_tag}
    */
    readonly lfTag?: LakeformationResourceLfTagLfTag[] | cdktf.IResolvable;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#table LakeformationResourceLfTag#table}
    */
    readonly table?: LakeformationResourceLfTagTable[] | cdktf.IResolvable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#table_with_columns LakeformationResourceLfTag#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationResourceLfTagTableWithColumns[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#timeouts LakeformationResourceLfTag#timeouts}
    */
    readonly timeouts?: LakeformationResourceLfTagTimeouts;
}
export interface LakeformationResourceLfTagDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}
    */
    readonly name: string;
}
export declare function lakeformationResourceLfTagDatabaseToTerraform(struct?: LakeformationResourceLfTagDatabase | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagDatabaseToHclTerraform(struct?: LakeformationResourceLfTagDatabase | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagDatabase | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagDatabase | cdktf.IResolvable | undefined);
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
export declare class LakeformationResourceLfTagDatabaseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagDatabase[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagDatabaseOutputReference;
}
export interface LakeformationResourceLfTagLfTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#key LakeformationResourceLfTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#value LakeformationResourceLfTag#value}
    */
    readonly value: string;
}
export declare function lakeformationResourceLfTagLfTagToTerraform(struct?: LakeformationResourceLfTagLfTag | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagLfTagToHclTerraform(struct?: LakeformationResourceLfTagLfTag | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagLfTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagLfTag | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagLfTag | cdktf.IResolvable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class LakeformationResourceLfTagLfTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagLfTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagLfTagOutputReference;
}
export interface LakeformationResourceLfTagTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#wildcard LakeformationResourceLfTag#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationResourceLfTagTableToTerraform(struct?: LakeformationResourceLfTagTable | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagTableToHclTerraform(struct?: LakeformationResourceLfTagTable | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagTable | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagTable | cdktf.IResolvable | undefined);
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
export declare class LakeformationResourceLfTagTableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagTable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagTableOutputReference;
}
export interface LakeformationResourceLfTagTableWithColumnsColumnWildcard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#excluded_column_names LakeformationResourceLfTag#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
}
export declare function lakeformationResourceLfTagTableWithColumnsColumnWildcardToTerraform(struct?: LakeformationResourceLfTagTableWithColumnsColumnWildcard | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagTableWithColumnsColumnWildcardToHclTerraform(struct?: LakeformationResourceLfTagTableWithColumnsColumnWildcard | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined);
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[] | undefined;
}
export declare class LakeformationResourceLfTagTableWithColumnsColumnWildcardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagTableWithColumnsColumnWildcard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagTableWithColumnsColumnWildcardOutputReference;
}
export interface LakeformationResourceLfTagTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#catalog_id LakeformationResourceLfTag#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#column_names LakeformationResourceLfTag#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#database_name LakeformationResourceLfTag#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#name LakeformationResourceLfTag#name}
    */
    readonly name: string;
    /**
    * column_wildcard block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#column_wildcard LakeformationResourceLfTag#column_wildcard}
    */
    readonly columnWildcard?: LakeformationResourceLfTagTableWithColumnsColumnWildcard[] | cdktf.IResolvable;
}
export declare function lakeformationResourceLfTagTableWithColumnsToTerraform(struct?: LakeformationResourceLfTagTableWithColumns | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagTableWithColumnsToHclTerraform(struct?: LakeformationResourceLfTagTableWithColumns | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagTableWithColumns | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagTableWithColumns | cdktf.IResolvable | undefined);
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _columnWildcard;
    get columnWildcard(): LakeformationResourceLfTagTableWithColumnsColumnWildcardList;
    putColumnWildcard(value: LakeformationResourceLfTagTableWithColumnsColumnWildcard[] | cdktf.IResolvable): void;
    resetColumnWildcard(): void;
    get columnWildcardInput(): cdktf.IResolvable | LakeformationResourceLfTagTableWithColumnsColumnWildcard[] | undefined;
}
export declare class LakeformationResourceLfTagTableWithColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagTableWithColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagTableWithColumnsOutputReference;
}
export interface LakeformationResourceLfTagTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#create LakeformationResourceLfTag#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#delete LakeformationResourceLfTag#delete}
    */
    readonly delete?: string;
}
export declare function lakeformationResourceLfTagTimeoutsToTerraform(struct?: LakeformationResourceLfTagTimeouts | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagTimeoutsToHclTerraform(struct?: LakeformationResourceLfTagTimeouts | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationResourceLfTagTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag aws_lakeformation_resource_lf_tag}
*/
export declare class LakeformationResourceLfTag extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_resource_lf_tag";
    /**
    * Generates CDKTF code for importing a LakeformationResourceLfTag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationResourceLfTag to import
    * @param importFromId The id of the existing LakeformationResourceLfTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationResourceLfTag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tag aws_lakeformation_resource_lf_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceLfTagConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LakeformationResourceLfTagConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    get id(): string;
    private _database;
    get database(): LakeformationResourceLfTagDatabaseList;
    putDatabase(value: LakeformationResourceLfTagDatabase[] | cdktf.IResolvable): void;
    resetDatabase(): void;
    get databaseInput(): cdktf.IResolvable | LakeformationResourceLfTagDatabase[] | undefined;
    private _lfTag;
    get lfTag(): LakeformationResourceLfTagLfTagList;
    putLfTag(value: LakeformationResourceLfTagLfTag[] | cdktf.IResolvable): void;
    resetLfTag(): void;
    get lfTagInput(): cdktf.IResolvable | LakeformationResourceLfTagLfTag[] | undefined;
    private _table;
    get table(): LakeformationResourceLfTagTableList;
    putTable(value: LakeformationResourceLfTagTable[] | cdktf.IResolvable): void;
    resetTable(): void;
    get tableInput(): cdktf.IResolvable | LakeformationResourceLfTagTable[] | undefined;
    private _tableWithColumns;
    get tableWithColumns(): LakeformationResourceLfTagTableWithColumnsList;
    putTableWithColumns(value: LakeformationResourceLfTagTableWithColumns[] | cdktf.IResolvable): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): cdktf.IResolvable | LakeformationResourceLfTagTableWithColumns[] | undefined;
    private _timeouts;
    get timeouts(): LakeformationResourceLfTagTimeoutsOutputReference;
    putTimeouts(value: LakeformationResourceLfTagTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LakeformationResourceLfTagTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
