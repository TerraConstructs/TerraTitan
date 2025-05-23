/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationResourceLfTagsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#id LakeformationResourceLfTags#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#database LakeformationResourceLfTags#database}
    */
    readonly database?: LakeformationResourceLfTagsDatabase;
    /**
    * lf_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#lf_tag LakeformationResourceLfTags#lf_tag}
    */
    readonly lfTag: LakeformationResourceLfTagsLfTag[] | cdktf.IResolvable;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#table LakeformationResourceLfTags#table}
    */
    readonly table?: LakeformationResourceLfTagsTable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#table_with_columns LakeformationResourceLfTags#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationResourceLfTagsTableWithColumns;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#timeouts LakeformationResourceLfTags#timeouts}
    */
    readonly timeouts?: LakeformationResourceLfTagsTimeouts;
}
export interface LakeformationResourceLfTagsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}
    */
    readonly name: string;
}
export declare function lakeformationResourceLfTagsDatabaseToTerraform(struct?: LakeformationResourceLfTagsDatabaseOutputReference | LakeformationResourceLfTagsDatabase): any;
export declare function lakeformationResourceLfTagsDatabaseToHclTerraform(struct?: LakeformationResourceLfTagsDatabaseOutputReference | LakeformationResourceLfTagsDatabase): any;
export declare class LakeformationResourceLfTagsDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationResourceLfTagsDatabase | undefined;
    set internalValue(value: LakeformationResourceLfTagsDatabase | undefined);
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
export interface LakeformationResourceLfTagsLfTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#key LakeformationResourceLfTags#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#value LakeformationResourceLfTags#value}
    */
    readonly value: string;
}
export declare function lakeformationResourceLfTagsLfTagToTerraform(struct?: LakeformationResourceLfTagsLfTag | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagsLfTagToHclTerraform(struct?: LakeformationResourceLfTagsLfTag | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagsLfTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationResourceLfTagsLfTag | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagsLfTag | cdktf.IResolvable | undefined);
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
export declare class LakeformationResourceLfTagsLfTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationResourceLfTagsLfTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationResourceLfTagsLfTagOutputReference;
}
export interface LakeformationResourceLfTagsTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationResourceLfTagsTableToTerraform(struct?: LakeformationResourceLfTagsTableOutputReference | LakeformationResourceLfTagsTable): any;
export declare function lakeformationResourceLfTagsTableToHclTerraform(struct?: LakeformationResourceLfTagsTableOutputReference | LakeformationResourceLfTagsTable): any;
export declare class LakeformationResourceLfTagsTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationResourceLfTagsTable | undefined;
    set internalValue(value: LakeformationResourceLfTagsTable | undefined);
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
export interface LakeformationResourceLfTagsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#catalog_id LakeformationResourceLfTags#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#column_names LakeformationResourceLfTags#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#database_name LakeformationResourceLfTags#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#excluded_column_names LakeformationResourceLfTags#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#name LakeformationResourceLfTags#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#wildcard LakeformationResourceLfTags#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationResourceLfTagsTableWithColumnsToTerraform(struct?: LakeformationResourceLfTagsTableWithColumnsOutputReference | LakeformationResourceLfTagsTableWithColumns): any;
export declare function lakeformationResourceLfTagsTableWithColumnsToHclTerraform(struct?: LakeformationResourceLfTagsTableWithColumnsOutputReference | LakeformationResourceLfTagsTableWithColumns): any;
export declare class LakeformationResourceLfTagsTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationResourceLfTagsTableWithColumns | undefined;
    set internalValue(value: LakeformationResourceLfTagsTableWithColumns | undefined);
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
export interface LakeformationResourceLfTagsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#create LakeformationResourceLfTags#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#delete LakeformationResourceLfTags#delete}
    */
    readonly delete?: string;
}
export declare function lakeformationResourceLfTagsTimeoutsToTerraform(struct?: LakeformationResourceLfTagsTimeouts | cdktf.IResolvable): any;
export declare function lakeformationResourceLfTagsTimeoutsToHclTerraform(struct?: LakeformationResourceLfTagsTimeouts | cdktf.IResolvable): any;
export declare class LakeformationResourceLfTagsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LakeformationResourceLfTagsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationResourceLfTagsTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags}
*/
export declare class LakeformationResourceLfTags extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_resource_lf_tags";
    /**
    * Generates CDKTF code for importing a LakeformationResourceLfTags resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationResourceLfTags to import
    * @param importFromId The id of the existing LakeformationResourceLfTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationResourceLfTags to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lakeformation_resource_lf_tags aws_lakeformation_resource_lf_tags} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceLfTagsConfig
    */
    constructor(scope: Construct, id: string, config: LakeformationResourceLfTagsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _database;
    get database(): LakeformationResourceLfTagsDatabaseOutputReference;
    putDatabase(value: LakeformationResourceLfTagsDatabase): void;
    resetDatabase(): void;
    get databaseInput(): LakeformationResourceLfTagsDatabase | undefined;
    private _lfTag;
    get lfTag(): LakeformationResourceLfTagsLfTagList;
    putLfTag(value: LakeformationResourceLfTagsLfTag[] | cdktf.IResolvable): void;
    get lfTagInput(): cdktf.IResolvable | LakeformationResourceLfTagsLfTag[] | undefined;
    private _table;
    get table(): LakeformationResourceLfTagsTableOutputReference;
    putTable(value: LakeformationResourceLfTagsTable): void;
    resetTable(): void;
    get tableInput(): LakeformationResourceLfTagsTable | undefined;
    private _tableWithColumns;
    get tableWithColumns(): LakeformationResourceLfTagsTableWithColumnsOutputReference;
    putTableWithColumns(value: LakeformationResourceLfTagsTableWithColumns): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): LakeformationResourceLfTagsTableWithColumns | undefined;
    private _timeouts;
    get timeouts(): LakeformationResourceLfTagsTimeoutsOutputReference;
    putTimeouts(value: LakeformationResourceLfTagsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LakeformationResourceLfTagsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
