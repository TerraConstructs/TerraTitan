/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LakeformationOptInConfig extends cdktf.TerraformMetaArguments {
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#condition LakeformationOptIn#condition}
    */
    readonly condition?: LakeformationOptInCondition[] | cdktf.IResolvable;
    /**
    * principal block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#principal LakeformationOptIn#principal}
    */
    readonly principal?: LakeformationOptInPrincipal[] | cdktf.IResolvable;
    /**
    * resource_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#resource_data LakeformationOptIn#resource_data}
    */
    readonly resourceData?: LakeformationOptInResourceData[] | cdktf.IResolvable;
}
export interface LakeformationOptInCondition {
}
export declare function lakeformationOptInConditionToTerraform(struct?: LakeformationOptInCondition | cdktf.IResolvable): any;
export declare function lakeformationOptInConditionToHclTerraform(struct?: LakeformationOptInCondition | cdktf.IResolvable): any;
export declare class LakeformationOptInConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInCondition | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInCondition | cdktf.IResolvable | undefined);
    get expression(): string;
}
export declare class LakeformationOptInConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInConditionOutputReference;
}
export interface LakeformationOptInPrincipal {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#data_lake_principal_identifier LakeformationOptIn#data_lake_principal_identifier}
    */
    readonly dataLakePrincipalIdentifier: string;
}
export declare function lakeformationOptInPrincipalToTerraform(struct?: LakeformationOptInPrincipal | cdktf.IResolvable): any;
export declare function lakeformationOptInPrincipalToHclTerraform(struct?: LakeformationOptInPrincipal | cdktf.IResolvable): any;
export declare class LakeformationOptInPrincipalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInPrincipal | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInPrincipal | cdktf.IResolvable | undefined);
    private _dataLakePrincipalIdentifier?;
    get dataLakePrincipalIdentifier(): string;
    set dataLakePrincipalIdentifier(value: string);
    get dataLakePrincipalIdentifierInput(): string | undefined;
}
export declare class LakeformationOptInPrincipalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInPrincipal[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInPrincipalOutputReference;
}
export interface LakeformationOptInResourceDataCatalog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#id LakeformationOptIn#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export declare function lakeformationOptInResourceDataCatalogToTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataCatalogToHclTerraform(struct?: LakeformationOptInResourceDataCatalog | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataCatalogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataCatalog | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataCatalog | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
}
export declare class LakeformationOptInResourceDataCatalogList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataCatalogOutputReference;
}
export interface LakeformationOptInResourceDataDataCellsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#table_catalog_id LakeformationOptIn#table_catalog_id}
    */
    readonly tableCatalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#table_name LakeformationOptIn#table_name}
    */
    readonly tableName?: string;
}
export declare function lakeformationOptInResourceDataDataCellsFilterToTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataDataCellsFilterToHclTerraform(struct?: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataDataCellsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataDataCellsFilter | cdktf.IResolvable | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tableCatalogId?;
    get tableCatalogId(): string;
    set tableCatalogId(value: string);
    resetTableCatalogId(): void;
    get tableCatalogIdInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    resetTableName(): void;
    get tableNameInput(): string | undefined;
}
export declare class LakeformationOptInResourceDataDataCellsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataDataCellsFilterOutputReference;
}
export interface LakeformationOptInResourceDataDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#resource_arn LakeformationOptIn#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function lakeformationOptInResourceDataDataLocationToTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataDataLocationToHclTerraform(struct?: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataDataLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataDataLocation | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataDataLocation | cdktf.IResolvable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
}
export declare class LakeformationOptInResourceDataDataLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataDataLocationOutputReference;
}
export interface LakeformationOptInResourceDataDatabase {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
    */
    readonly name: string;
}
export declare function lakeformationOptInResourceDataDatabaseToTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataDatabaseToHclTerraform(struct?: LakeformationOptInResourceDataDatabase | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataDatabaseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataDatabase | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataDatabase | cdktf.IResolvable | undefined);
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
export declare class LakeformationOptInResourceDataDatabaseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataDatabaseOutputReference;
}
export interface LakeformationOptInResourceDataLfTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#key LakeformationOptIn#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#value LakeformationOptIn#value}
    */
    readonly value: string;
}
export declare function lakeformationOptInResourceDataLfTagToTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataLfTagToHclTerraform(struct?: LakeformationOptInResourceDataLfTag | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataLfTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataLfTag | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataLfTag | cdktf.IResolvable | undefined);
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
export declare class LakeformationOptInResourceDataLfTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataLfTagOutputReference;
}
export interface LakeformationOptInResourceDataLfTagExpression {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
    */
    readonly name: string;
}
export declare function lakeformationOptInResourceDataLfTagExpressionToTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataLfTagExpressionToHclTerraform(struct?: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataLfTagExpressionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataLfTagExpression | cdktf.IResolvable | undefined);
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
export declare class LakeformationOptInResourceDataLfTagExpressionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataLfTagExpressionOutputReference;
}
export interface LakeformationOptInResourceDataLfTagPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#expression LakeformationOptIn#expression}
    */
    readonly expression?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#expression_name LakeformationOptIn#expression_name}
    */
    readonly expressionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#resource_type LakeformationOptIn#resource_type}
    */
    readonly resourceType: string;
}
export declare function lakeformationOptInResourceDataLfTagPolicyToTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataLfTagPolicyToHclTerraform(struct?: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataLfTagPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataLfTagPolicy | cdktf.IResolvable | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _expression?;
    get expression(): string[];
    set expression(value: string[]);
    resetExpression(): void;
    get expressionInput(): string[] | undefined;
    private _expressionName?;
    get expressionName(): string;
    set expressionName(value: string);
    resetExpressionName(): void;
    get expressionNameInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
}
export declare class LakeformationOptInResourceDataLfTagPolicyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataLfTagPolicyOutputReference;
}
export interface LakeformationOptInResourceDataTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#wildcard LakeformationOptIn#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function lakeformationOptInResourceDataTableToTerraform(struct?: LakeformationOptInResourceDataTable | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataTableToHclTerraform(struct?: LakeformationOptInResourceDataTable | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataTable | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataTable | cdktf.IResolvable | undefined);
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
export declare class LakeformationOptInResourceDataTableList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataTable[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataTableOutputReference;
}
export interface LakeformationOptInResourceDataTableWithColumnsColumnWildcard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#excluded_column_names LakeformationOptIn#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
}
export declare function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataTableWithColumnsColumnWildcardToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard | cdktf.IResolvable | undefined);
    private _excludedColumnNames?;
    get excludedColumnNames(): string[];
    set excludedColumnNames(value: string[]);
    resetExcludedColumnNames(): void;
    get excludedColumnNamesInput(): string[] | undefined;
}
export declare class LakeformationOptInResourceDataTableWithColumnsColumnWildcardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataTableWithColumnsColumnWildcardOutputReference;
}
export interface LakeformationOptInResourceDataTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog_id LakeformationOptIn#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#column_names LakeformationOptIn#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#database_name LakeformationOptIn#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#name LakeformationOptIn#name}
    */
    readonly name: string;
    /**
    * column_wildcard block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#column_wildcard LakeformationOptIn#column_wildcard}
    */
    readonly columnWildcard?: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable;
}
export declare function lakeformationOptInResourceDataTableWithColumnsToTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataTableWithColumnsToHclTerraform(struct?: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataTableWithColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceDataTableWithColumns | cdktf.IResolvable | undefined);
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
    get columnWildcard(): LakeformationOptInResourceDataTableWithColumnsColumnWildcardList;
    putColumnWildcard(value: LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | cdktf.IResolvable): void;
    resetColumnWildcard(): void;
    get columnWildcardInput(): cdktf.IResolvable | LakeformationOptInResourceDataTableWithColumnsColumnWildcard[] | undefined;
}
export declare class LakeformationOptInResourceDataTableWithColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataTableWithColumnsOutputReference;
}
export interface LakeformationOptInResourceData {
    /**
    * catalog block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#catalog LakeformationOptIn#catalog}
    */
    readonly catalog?: LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable;
    /**
    * data_cells_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#data_cells_filter LakeformationOptIn#data_cells_filter}
    */
    readonly dataCellsFilter?: LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable;
    /**
    * data_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#data_location LakeformationOptIn#data_location}
    */
    readonly dataLocation?: LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable;
    /**
    * database block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#database LakeformationOptIn#database}
    */
    readonly database?: LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable;
    /**
    * lf_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#lf_tag LakeformationOptIn#lf_tag}
    */
    readonly lfTag?: LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable;
    /**
    * lf_tag_expression block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#lf_tag_expression LakeformationOptIn#lf_tag_expression}
    */
    readonly lfTagExpression?: LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable;
    /**
    * lf_tag_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#lf_tag_policy LakeformationOptIn#lf_tag_policy}
    */
    readonly lfTagPolicy?: LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable;
    /**
    * table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#table LakeformationOptIn#table}
    */
    readonly table?: LakeformationOptInResourceDataTable[] | cdktf.IResolvable;
    /**
    * table_with_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#table_with_columns LakeformationOptIn#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable;
}
export declare function lakeformationOptInResourceDataToTerraform(struct?: LakeformationOptInResourceData | cdktf.IResolvable): any;
export declare function lakeformationOptInResourceDataToHclTerraform(struct?: LakeformationOptInResourceData | cdktf.IResolvable): any;
export declare class LakeformationOptInResourceDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LakeformationOptInResourceData | cdktf.IResolvable | undefined;
    set internalValue(value: LakeformationOptInResourceData | cdktf.IResolvable | undefined);
    private _catalog;
    get catalog(): LakeformationOptInResourceDataCatalogList;
    putCatalog(value: LakeformationOptInResourceDataCatalog[] | cdktf.IResolvable): void;
    resetCatalog(): void;
    get catalogInput(): cdktf.IResolvable | LakeformationOptInResourceDataCatalog[] | undefined;
    private _dataCellsFilter;
    get dataCellsFilter(): LakeformationOptInResourceDataDataCellsFilterList;
    putDataCellsFilter(value: LakeformationOptInResourceDataDataCellsFilter[] | cdktf.IResolvable): void;
    resetDataCellsFilter(): void;
    get dataCellsFilterInput(): cdktf.IResolvable | LakeformationOptInResourceDataDataCellsFilter[] | undefined;
    private _dataLocation;
    get dataLocation(): LakeformationOptInResourceDataDataLocationList;
    putDataLocation(value: LakeformationOptInResourceDataDataLocation[] | cdktf.IResolvable): void;
    resetDataLocation(): void;
    get dataLocationInput(): cdktf.IResolvable | LakeformationOptInResourceDataDataLocation[] | undefined;
    private _database;
    get database(): LakeformationOptInResourceDataDatabaseList;
    putDatabase(value: LakeformationOptInResourceDataDatabase[] | cdktf.IResolvable): void;
    resetDatabase(): void;
    get databaseInput(): cdktf.IResolvable | LakeformationOptInResourceDataDatabase[] | undefined;
    private _lfTag;
    get lfTag(): LakeformationOptInResourceDataLfTagList;
    putLfTag(value: LakeformationOptInResourceDataLfTag[] | cdktf.IResolvable): void;
    resetLfTag(): void;
    get lfTagInput(): cdktf.IResolvable | LakeformationOptInResourceDataLfTag[] | undefined;
    private _lfTagExpression;
    get lfTagExpression(): LakeformationOptInResourceDataLfTagExpressionList;
    putLfTagExpression(value: LakeformationOptInResourceDataLfTagExpression[] | cdktf.IResolvable): void;
    resetLfTagExpression(): void;
    get lfTagExpressionInput(): cdktf.IResolvable | LakeformationOptInResourceDataLfTagExpression[] | undefined;
    private _lfTagPolicy;
    get lfTagPolicy(): LakeformationOptInResourceDataLfTagPolicyList;
    putLfTagPolicy(value: LakeformationOptInResourceDataLfTagPolicy[] | cdktf.IResolvable): void;
    resetLfTagPolicy(): void;
    get lfTagPolicyInput(): cdktf.IResolvable | LakeformationOptInResourceDataLfTagPolicy[] | undefined;
    private _table;
    get table(): LakeformationOptInResourceDataTableList;
    putTable(value: LakeformationOptInResourceDataTable[] | cdktf.IResolvable): void;
    resetTable(): void;
    get tableInput(): cdktf.IResolvable | LakeformationOptInResourceDataTable[] | undefined;
    private _tableWithColumns;
    get tableWithColumns(): LakeformationOptInResourceDataTableWithColumnsList;
    putTableWithColumns(value: LakeformationOptInResourceDataTableWithColumns[] | cdktf.IResolvable): void;
    resetTableWithColumns(): void;
    get tableWithColumnsInput(): cdktf.IResolvable | LakeformationOptInResourceDataTableWithColumns[] | undefined;
}
export declare class LakeformationOptInResourceDataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LakeformationOptInResourceData[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LakeformationOptInResourceDataOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in}
*/
export declare class LakeformationOptIn extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lakeformation_opt_in";
    /**
    * Generates CDKTF code for importing a LakeformationOptIn resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LakeformationOptIn to import
    * @param importFromId The id of the existing LakeformationOptIn that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LakeformationOptIn to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lakeformation_opt_in aws_lakeformation_opt_in} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationOptInConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LakeformationOptInConfig);
    get lastModified(): string;
    get lastUpdatedBy(): string;
    private _condition;
    get condition(): LakeformationOptInConditionList;
    putCondition(value: LakeformationOptInCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | LakeformationOptInCondition[] | undefined;
    private _principal;
    get principal(): LakeformationOptInPrincipalList;
    putPrincipal(value: LakeformationOptInPrincipal[] | cdktf.IResolvable): void;
    resetPrincipal(): void;
    get principalInput(): cdktf.IResolvable | LakeformationOptInPrincipal[] | undefined;
    private _resourceData;
    get resourceData(): LakeformationOptInResourceDataList;
    putResourceData(value: LakeformationOptInResourceData[] | cdktf.IResolvable): void;
    resetResourceData(): void;
    get resourceDataInput(): cdktf.IResolvable | LakeformationOptInResourceData[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
