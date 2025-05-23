/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#id QuicksightDataSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}
    */
    readonly importMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tags_all QuicksightDataSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * column_groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}
    */
    readonly columnGroups?: QuicksightDataSetColumnGroups[] | cdktf.IResolvable;
    /**
    * column_level_permission_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}
    */
    readonly columnLevelPermissionRules?: QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable;
    /**
    * data_set_usage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}
    */
    readonly dataSetUsageConfiguration?: QuicksightDataSetDataSetUsageConfiguration;
    /**
    * field_folders block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}
    */
    readonly fieldFolders?: QuicksightDataSetFieldFolders[] | cdktf.IResolvable;
    /**
    * logical_table_map block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}
    */
    readonly logicalTableMap?: QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable;
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}
    */
    readonly permissions?: QuicksightDataSetPermissions[] | cdktf.IResolvable;
    /**
    * physical_table_map block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}
    */
    readonly physicalTableMap?: QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable;
    /**
    * refresh_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#refresh_properties QuicksightDataSet#refresh_properties}
    */
    readonly refreshProperties?: QuicksightDataSetRefreshProperties;
    /**
    * row_level_permission_data_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}
    */
    readonly rowLevelPermissionDataSet?: QuicksightDataSetRowLevelPermissionDataSet;
    /**
    * row_level_permission_tag_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#row_level_permission_tag_configuration QuicksightDataSet#row_level_permission_tag_configuration}
    */
    readonly rowLevelPermissionTagConfiguration?: QuicksightDataSetRowLevelPermissionTagConfiguration;
}
export interface QuicksightDataSetOutputColumns {
}
export declare function quicksightDataSetOutputColumnsToTerraform(struct?: QuicksightDataSetOutputColumns): any;
export declare function quicksightDataSetOutputColumnsToHclTerraform(struct?: QuicksightDataSetOutputColumns): any;
export declare class QuicksightDataSetOutputColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetOutputColumns | undefined;
    set internalValue(value: QuicksightDataSetOutputColumns | undefined);
    get description(): string;
    get name(): string;
    get type(): string;
}
export declare class QuicksightDataSetOutputColumnsList extends cdktf.ComplexList {
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
    get(index: number): QuicksightDataSetOutputColumnsOutputReference;
}
export interface QuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
    */
    readonly columns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}
    */
    readonly countryCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
}
export declare function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference | QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export declare function quicksightDataSetColumnGroupsGeoSpatialColumnGroupToHclTerraform(struct?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference | QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export declare class QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined;
    set internalValue(value: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined);
    private _columns?;
    get columns(): string[];
    set columns(value: string[]);
    get columnsInput(): string[] | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    get countryCodeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface QuicksightDataSetColumnGroups {
    /**
    * geo_spatial_column_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}
    */
    readonly geoSpatialColumnGroup?: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup;
}
export declare function quicksightDataSetColumnGroupsToTerraform(struct?: QuicksightDataSetColumnGroups | cdktf.IResolvable): any;
export declare function quicksightDataSetColumnGroupsToHclTerraform(struct?: QuicksightDataSetColumnGroups | cdktf.IResolvable): any;
export declare class QuicksightDataSetColumnGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetColumnGroups | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetColumnGroups | cdktf.IResolvable | undefined);
    private _geoSpatialColumnGroup;
    get geoSpatialColumnGroup(): QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference;
    putGeoSpatialColumnGroup(value: QuicksightDataSetColumnGroupsGeoSpatialColumnGroup): void;
    resetGeoSpatialColumnGroup(): void;
    get geoSpatialColumnGroupInput(): QuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined;
}
export declare class QuicksightDataSetColumnGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetColumnGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetColumnGroupsOutputReference;
}
export interface QuicksightDataSetColumnLevelPermissionRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}
    */
    readonly principals?: string[];
}
export declare function quicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable): any;
export declare function quicksightDataSetColumnLevelPermissionRulesToHclTerraform(struct?: QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable): any;
export declare class QuicksightDataSetColumnLevelPermissionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetColumnLevelPermissionRules | cdktf.IResolvable | undefined);
    private _columnNames?;
    get columnNames(): string[];
    set columnNames(value: string[]);
    resetColumnNames(): void;
    get columnNamesInput(): string[] | undefined;
    private _principals?;
    get principals(): string[];
    set principals(value: string[]);
    resetPrincipals(): void;
    get principalsInput(): string[] | undefined;
}
export declare class QuicksightDataSetColumnLevelPermissionRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetColumnLevelPermissionRulesOutputReference;
}
export interface QuicksightDataSetDataSetUsageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}
    */
    readonly disableUseAsDirectQuerySource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}
    */
    readonly disableUseAsImportedSource?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSetDataSetUsageConfigurationToTerraform(struct?: QuicksightDataSetDataSetUsageConfigurationOutputReference | QuicksightDataSetDataSetUsageConfiguration): any;
export declare function quicksightDataSetDataSetUsageConfigurationToHclTerraform(struct?: QuicksightDataSetDataSetUsageConfigurationOutputReference | QuicksightDataSetDataSetUsageConfiguration): any;
export declare class QuicksightDataSetDataSetUsageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetDataSetUsageConfiguration | undefined;
    set internalValue(value: QuicksightDataSetDataSetUsageConfiguration | undefined);
    private _disableUseAsDirectQuerySource?;
    get disableUseAsDirectQuerySource(): boolean | cdktf.IResolvable;
    set disableUseAsDirectQuerySource(value: boolean | cdktf.IResolvable);
    resetDisableUseAsDirectQuerySource(): void;
    get disableUseAsDirectQuerySourceInput(): boolean | cdktf.IResolvable | undefined;
    private _disableUseAsImportedSource?;
    get disableUseAsImportedSource(): boolean | cdktf.IResolvable;
    set disableUseAsImportedSource(value: boolean | cdktf.IResolvable);
    resetDisableUseAsImportedSource(): void;
    get disableUseAsImportedSourceInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightDataSetFieldFolders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
    */
    readonly columns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}
    */
    readonly fieldFoldersId: string;
}
export declare function quicksightDataSetFieldFoldersToTerraform(struct?: QuicksightDataSetFieldFolders | cdktf.IResolvable): any;
export declare function quicksightDataSetFieldFoldersToHclTerraform(struct?: QuicksightDataSetFieldFolders | cdktf.IResolvable): any;
export declare class QuicksightDataSetFieldFoldersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetFieldFolders | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetFieldFolders | cdktf.IResolvable | undefined);
    private _columns?;
    get columns(): string[];
    set columns(value: string[]);
    resetColumns(): void;
    get columnsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _fieldFoldersId?;
    get fieldFoldersId(): string;
    set fieldFoldersId(value: string);
    get fieldFoldersIdInput(): string | undefined;
}
export declare class QuicksightDataSetFieldFoldersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetFieldFolders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetFieldFoldersOutputReference;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}
    */
    readonly newColumnType: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string | undefined;
    private _newColumnType?;
    get newColumnType(): string;
    set newColumnType(value: string);
    get newColumnTypeInput(): string | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}
    */
    readonly columnId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}
    */
    readonly expression: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | cdktf.IResolvable | undefined);
    private _columnId?;
    get columnId(): string;
    set columnId(value: string);
    get columnIdInput(): string | undefined;
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _expression?;
    get expression(): string;
    set expression(value: string);
    get expressionInput(): string | undefined;
}
export declare class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
    */
    readonly columns: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined);
    private _columns;
    get columns(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList;
    putColumns(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | cdktf.IResolvable): void;
    get columnsInput(): cdktf.IResolvable | QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns[] | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}
    */
    readonly conditionExpression: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsFilterOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined);
    private _conditionExpression?;
    get conditionExpression(): string;
    set conditionExpression(value: string);
    get conditionExpressionInput(): string | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}
    */
    readonly projectedColumns: string[];
}
export declare function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsProjectOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined);
    private _projectedColumns?;
    get projectedColumns(): string[];
    set projectedColumns(value: string[]);
    get projectedColumnsInput(): string[] | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}
    */
    readonly newColumnName: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _newColumnName?;
    get newColumnName(): string;
    set newColumnName(value: string);
    get newColumnNameInput(): string | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}
    */
    readonly text?: string;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    resetText(): void;
    get textInput(): string | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}
    */
    readonly columnGeographicRole?: string;
    /**
    * column_description block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_description QuicksightDataSet#column_description}
    */
    readonly columnDescription?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | cdktf.IResolvable | undefined);
    private _columnGeographicRole?;
    get columnGeographicRole(): string;
    set columnGeographicRole(value: string);
    resetColumnGeographicRole(): void;
    get columnGeographicRoleInput(): string | undefined;
    private _columnDescription;
    get columnDescription(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference;
    putColumnDescription(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): void;
    resetColumnDescription(): void;
    get columnDescriptionInput(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined;
}
export declare class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}
    */
    readonly tags: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _tags;
    get tags(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList;
    putTags(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | cdktf.IResolvable): void;
    get tagsInput(): cdktf.IResolvable | QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags[] | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tag_names QuicksightDataSet#tag_names}
    */
    readonly tagNames: string[];
}
export declare function quicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference | QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _tagNames?;
    get tagNames(): string[];
    set tagNames(value: string[]);
    get tagNamesInput(): string[] | undefined;
}
export interface QuicksightDataSetLogicalTableMapDataTransforms {
    /**
    * cast_column_type_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}
    */
    readonly castColumnTypeOperation?: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation;
    /**
    * create_columns_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}
    */
    readonly createColumnsOperation?: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation;
    /**
    * filter_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}
    */
    readonly filterOperation?: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation;
    /**
    * project_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#project_operation QuicksightDataSet#project_operation}
    */
    readonly projectOperation?: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation;
    /**
    * rename_column_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}
    */
    readonly renameColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation;
    /**
    * tag_column_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}
    */
    readonly tagColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation;
    /**
    * untag_column_operation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#untag_column_operation QuicksightDataSet#untag_column_operation}
    */
    readonly untagColumnOperation?: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation;
}
export declare function quicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable): any;
export declare function quicksightDataSetLogicalTableMapDataTransformsToHclTerraform(struct?: QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable): any;
export declare class QuicksightDataSetLogicalTableMapDataTransformsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapDataTransforms | cdktf.IResolvable | undefined);
    private _castColumnTypeOperation;
    get castColumnTypeOperation(): QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference;
    putCastColumnTypeOperation(value: QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): void;
    resetCastColumnTypeOperation(): void;
    get castColumnTypeOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined;
    private _createColumnsOperation;
    get createColumnsOperation(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference;
    putCreateColumnsOperation(value: QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): void;
    resetCreateColumnsOperation(): void;
    get createColumnsOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined;
    private _filterOperation;
    get filterOperation(): QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference;
    putFilterOperation(value: QuicksightDataSetLogicalTableMapDataTransformsFilterOperation): void;
    resetFilterOperation(): void;
    get filterOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined;
    private _projectOperation;
    get projectOperation(): QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference;
    putProjectOperation(value: QuicksightDataSetLogicalTableMapDataTransformsProjectOperation): void;
    resetProjectOperation(): void;
    get projectOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined;
    private _renameColumnOperation;
    get renameColumnOperation(): QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference;
    putRenameColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): void;
    resetRenameColumnOperation(): void;
    get renameColumnOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined;
    private _tagColumnOperation;
    get tagColumnOperation(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference;
    putTagColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): void;
    resetTagColumnOperation(): void;
    get tagColumnOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined;
    private _untagColumnOperation;
    get untagColumnOperation(): QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference;
    putUntagColumnOperation(value: QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): void;
    resetUntagColumnOperation(): void;
    get untagColumnOperationInput(): QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined;
}
export declare class QuicksightDataSetLogicalTableMapDataTransformsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetLogicalTableMapDataTransformsOutputReference;
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToHclTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export declare class QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined);
    private _uniqueKey?;
    get uniqueKey(): boolean | cdktf.IResolvable;
    set uniqueKey(value: boolean | cdktf.IResolvable);
    resetUniqueKey(): void;
    get uniqueKeyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktf.IResolvable;
}
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToHclTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
export declare class QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined);
    private _uniqueKey?;
    get uniqueKey(): boolean | cdktf.IResolvable;
    set uniqueKey(value: boolean | cdktf.IResolvable);
    resetUniqueKey(): void;
    get uniqueKeyInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightDataSetLogicalTableMapSourceJoinInstruction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}
    */
    readonly leftOperand: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}
    */
    readonly onClause: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}
    */
    readonly rightOperand: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
    */
    readonly type: string;
    /**
    * left_join_key_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}
    */
    readonly leftJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;
    /**
    * right_join_key_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}
    */
    readonly rightJoinKeyProperties?: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;
}
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
export declare function quicksightDataSetLogicalTableMapSourceJoinInstructionToHclTerraform(struct?: QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference | QuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
export declare class QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined);
    private _leftOperand?;
    get leftOperand(): string;
    set leftOperand(value: string);
    get leftOperandInput(): string | undefined;
    private _onClause?;
    get onClause(): string;
    set onClause(value: string);
    get onClauseInput(): string | undefined;
    private _rightOperand?;
    get rightOperand(): string;
    set rightOperand(value: string);
    get rightOperandInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _leftJoinKeyProperties;
    get leftJoinKeyProperties(): QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference;
    putLeftJoinKeyProperties(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): void;
    resetLeftJoinKeyProperties(): void;
    get leftJoinKeyPropertiesInput(): QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined;
    private _rightJoinKeyProperties;
    get rightJoinKeyProperties(): QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference;
    putRightJoinKeyProperties(value: QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): void;
    resetRightJoinKeyProperties(): void;
    get rightJoinKeyPropertiesInput(): QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined;
}
export interface QuicksightDataSetLogicalTableMapSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}
    */
    readonly dataSetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}
    */
    readonly physicalTableId?: string;
    /**
    * join_instruction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}
    */
    readonly joinInstruction?: QuicksightDataSetLogicalTableMapSourceJoinInstruction;
}
export declare function quicksightDataSetLogicalTableMapSourceToTerraform(struct?: QuicksightDataSetLogicalTableMapSourceOutputReference | QuicksightDataSetLogicalTableMapSource): any;
export declare function quicksightDataSetLogicalTableMapSourceToHclTerraform(struct?: QuicksightDataSetLogicalTableMapSourceOutputReference | QuicksightDataSetLogicalTableMapSource): any;
export declare class QuicksightDataSetLogicalTableMapSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetLogicalTableMapSource | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMapSource | undefined);
    private _dataSetArn?;
    get dataSetArn(): string;
    set dataSetArn(value: string);
    resetDataSetArn(): void;
    get dataSetArnInput(): string | undefined;
    private _physicalTableId?;
    get physicalTableId(): string;
    set physicalTableId(value: string);
    resetPhysicalTableId(): void;
    get physicalTableIdInput(): string | undefined;
    private _joinInstruction;
    get joinInstruction(): QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference;
    putJoinInstruction(value: QuicksightDataSetLogicalTableMapSourceJoinInstruction): void;
    resetJoinInstruction(): void;
    get joinInstructionInput(): QuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined;
}
export interface QuicksightDataSetLogicalTableMap {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}
    */
    readonly alias: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}
    */
    readonly logicalTableMapId: string;
    /**
    * data_transforms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}
    */
    readonly dataTransforms?: QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#source QuicksightDataSet#source}
    */
    readonly source: QuicksightDataSetLogicalTableMapSource;
}
export declare function quicksightDataSetLogicalTableMapToTerraform(struct?: QuicksightDataSetLogicalTableMap | cdktf.IResolvable): any;
export declare function quicksightDataSetLogicalTableMapToHclTerraform(struct?: QuicksightDataSetLogicalTableMap | cdktf.IResolvable): any;
export declare class QuicksightDataSetLogicalTableMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetLogicalTableMap | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetLogicalTableMap | cdktf.IResolvable | undefined);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    get aliasInput(): string | undefined;
    private _logicalTableMapId?;
    get logicalTableMapId(): string;
    set logicalTableMapId(value: string);
    get logicalTableMapIdInput(): string | undefined;
    private _dataTransforms;
    get dataTransforms(): QuicksightDataSetLogicalTableMapDataTransformsList;
    putDataTransforms(value: QuicksightDataSetLogicalTableMapDataTransforms[] | cdktf.IResolvable): void;
    resetDataTransforms(): void;
    get dataTransformsInput(): cdktf.IResolvable | QuicksightDataSetLogicalTableMapDataTransforms[] | undefined;
    private _source;
    get source(): QuicksightDataSetLogicalTableMapSourceOutputReference;
    putSource(value: QuicksightDataSetLogicalTableMapSource): void;
    get sourceInput(): QuicksightDataSetLogicalTableMapSource | undefined;
}
export declare class QuicksightDataSetLogicalTableMapList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetLogicalTableMapOutputReference;
}
export interface QuicksightDataSetPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}
    */
    readonly principal: string;
}
export declare function quicksightDataSetPermissionsToTerraform(struct?: QuicksightDataSetPermissions | cdktf.IResolvable): any;
export declare function quicksightDataSetPermissionsToHclTerraform(struct?: QuicksightDataSetPermissions | cdktf.IResolvable): any;
export declare class QuicksightDataSetPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetPermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightDataSetPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetPermissionsOutputReference;
}
export interface QuicksightDataSetPhysicalTableMapCustomSqlColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
    */
    readonly type: string;
}
export declare function quicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable): any;
export declare function quicksightDataSetPhysicalTableMapCustomSqlColumnsToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable): any;
export declare class QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapCustomSqlColumns | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class QuicksightDataSetPhysicalTableMapCustomSqlColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference;
}
export interface QuicksightDataSetPhysicalTableMapCustomSql {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
    */
    readonly dataSourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}
    */
    readonly sqlQuery: string;
    /**
    * columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}
    */
    readonly columns?: QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable;
}
export declare function quicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlOutputReference | QuicksightDataSetPhysicalTableMapCustomSql): any;
export declare function quicksightDataSetPhysicalTableMapCustomSqlToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapCustomSqlOutputReference | QuicksightDataSetPhysicalTableMapCustomSql): any;
export declare class QuicksightDataSetPhysicalTableMapCustomSqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetPhysicalTableMapCustomSql | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapCustomSql | undefined);
    private _dataSourceArn?;
    get dataSourceArn(): string;
    set dataSourceArn(value: string);
    get dataSourceArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sqlQuery?;
    get sqlQuery(): string;
    set sqlQuery(value: string);
    get sqlQueryInput(): string | undefined;
    private _columns;
    get columns(): QuicksightDataSetPhysicalTableMapCustomSqlColumnsList;
    putColumns(value: QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | cdktf.IResolvable): void;
    resetColumns(): void;
    get columnsInput(): cdktf.IResolvable | QuicksightDataSetPhysicalTableMapCustomSqlColumns[] | undefined;
}
export interface QuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
    */
    readonly type: string;
}
export declare function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable): any;
export declare function quicksightDataSetPhysicalTableMapRelationalTableInputColumnsToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable): any;
export declare class QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference;
}
export interface QuicksightDataSetPhysicalTableMapRelationalTable {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
    */
    readonly dataSourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}
    */
    readonly schema?: string;
    /**
    * input_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}
    */
    readonly inputColumns: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable;
}
export declare function quicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableOutputReference | QuicksightDataSetPhysicalTableMapRelationalTable): any;
export declare function quicksightDataSetPhysicalTableMapRelationalTableToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapRelationalTableOutputReference | QuicksightDataSetPhysicalTableMapRelationalTable): any;
export declare class QuicksightDataSetPhysicalTableMapRelationalTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetPhysicalTableMapRelationalTable | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapRelationalTable | undefined);
    private _catalog?;
    get catalog(): string;
    set catalog(value: string);
    resetCatalog(): void;
    get catalogInput(): string | undefined;
    private _dataSourceArn?;
    get dataSourceArn(): string;
    set dataSourceArn(value: string);
    get dataSourceArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
    private _inputColumns;
    get inputColumns(): QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList;
    putInputColumns(value: QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | cdktf.IResolvable): void;
    get inputColumnsInput(): cdktf.IResolvable | QuicksightDataSetPhysicalTableMapRelationalTableInputColumns[] | undefined;
}
export interface QuicksightDataSetPhysicalTableMapS3SourceInputColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}
    */
    readonly type: string;
}
export declare function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable): any;
export declare function quicksightDataSetPhysicalTableMapS3SourceInputColumnsToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable): any;
export declare class QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapS3SourceInputColumns | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference;
}
export interface QuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}
    */
    readonly containsHeader?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}
    */
    readonly startFromRow?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}
    */
    readonly textQualifier?: string;
}
export declare function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference | QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
export declare function quicksightDataSetPhysicalTableMapS3SourceUploadSettingsToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference | QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
export declare class QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined);
    private _containsHeader?;
    get containsHeader(): boolean | cdktf.IResolvable;
    set containsHeader(value: boolean | cdktf.IResolvable);
    resetContainsHeader(): void;
    get containsHeaderInput(): boolean | cdktf.IResolvable | undefined;
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string | undefined;
    private _startFromRow?;
    get startFromRow(): number;
    set startFromRow(value: number);
    resetStartFromRow(): void;
    get startFromRowInput(): number | undefined;
    private _textQualifier?;
    get textQualifier(): string;
    set textQualifier(value: string);
    resetTextQualifier(): void;
    get textQualifierInput(): string | undefined;
}
export interface QuicksightDataSetPhysicalTableMapS3Source {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}
    */
    readonly dataSourceArn: string;
    /**
    * input_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}
    */
    readonly inputColumns: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable;
    /**
    * upload_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}
    */
    readonly uploadSettings: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings;
}
export declare function quicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceOutputReference | QuicksightDataSetPhysicalTableMapS3Source): any;
export declare function quicksightDataSetPhysicalTableMapS3SourceToHclTerraform(struct?: QuicksightDataSetPhysicalTableMapS3SourceOutputReference | QuicksightDataSetPhysicalTableMapS3Source): any;
export declare class QuicksightDataSetPhysicalTableMapS3SourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetPhysicalTableMapS3Source | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMapS3Source | undefined);
    private _dataSourceArn?;
    get dataSourceArn(): string;
    set dataSourceArn(value: string);
    get dataSourceArnInput(): string | undefined;
    private _inputColumns;
    get inputColumns(): QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList;
    putInputColumns(value: QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | cdktf.IResolvable): void;
    get inputColumnsInput(): cdktf.IResolvable | QuicksightDataSetPhysicalTableMapS3SourceInputColumns[] | undefined;
    private _uploadSettings;
    get uploadSettings(): QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference;
    putUploadSettings(value: QuicksightDataSetPhysicalTableMapS3SourceUploadSettings): void;
    get uploadSettingsInput(): QuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined;
}
export interface QuicksightDataSetPhysicalTableMap {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}
    */
    readonly physicalTableMapId: string;
    /**
    * custom_sql block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}
    */
    readonly customSql?: QuicksightDataSetPhysicalTableMapCustomSql;
    /**
    * relational_table block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#relational_table QuicksightDataSet#relational_table}
    */
    readonly relationalTable?: QuicksightDataSetPhysicalTableMapRelationalTable;
    /**
    * s3_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#s3_source QuicksightDataSet#s3_source}
    */
    readonly s3Source?: QuicksightDataSetPhysicalTableMapS3Source;
}
export declare function quicksightDataSetPhysicalTableMapToTerraform(struct?: QuicksightDataSetPhysicalTableMap | cdktf.IResolvable): any;
export declare function quicksightDataSetPhysicalTableMapToHclTerraform(struct?: QuicksightDataSetPhysicalTableMap | cdktf.IResolvable): any;
export declare class QuicksightDataSetPhysicalTableMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetPhysicalTableMap | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetPhysicalTableMap | cdktf.IResolvable | undefined);
    private _physicalTableMapId?;
    get physicalTableMapId(): string;
    set physicalTableMapId(value: string);
    get physicalTableMapIdInput(): string | undefined;
    private _customSql;
    get customSql(): QuicksightDataSetPhysicalTableMapCustomSqlOutputReference;
    putCustomSql(value: QuicksightDataSetPhysicalTableMapCustomSql): void;
    resetCustomSql(): void;
    get customSqlInput(): QuicksightDataSetPhysicalTableMapCustomSql | undefined;
    private _relationalTable;
    get relationalTable(): QuicksightDataSetPhysicalTableMapRelationalTableOutputReference;
    putRelationalTable(value: QuicksightDataSetPhysicalTableMapRelationalTable): void;
    resetRelationalTable(): void;
    get relationalTableInput(): QuicksightDataSetPhysicalTableMapRelationalTable | undefined;
    private _s3Source;
    get s3Source(): QuicksightDataSetPhysicalTableMapS3SourceOutputReference;
    putS3Source(value: QuicksightDataSetPhysicalTableMapS3Source): void;
    resetS3Source(): void;
    get s3SourceInput(): QuicksightDataSetPhysicalTableMapS3Source | undefined;
}
export declare class QuicksightDataSetPhysicalTableMapList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetPhysicalTableMapOutputReference;
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#size QuicksightDataSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#size_unit QuicksightDataSet#size_unit}
    */
    readonly sizeUnit: string;
}
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow): any;
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowToHclTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow): any;
export declare class QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow | undefined;
    set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _sizeUnit?;
    get sizeUnit(): string;
    set sizeUnit(value: string);
    get sizeUnitInput(): string | undefined;
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh {
    /**
    * lookback_window block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#lookback_window QuicksightDataSet#lookback_window}
    */
    readonly lookbackWindow: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow;
}
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh): any;
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshToHclTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh): any;
export declare class QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh | undefined;
    set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh | undefined);
    private _lookbackWindow;
    get lookbackWindow(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference;
    putLookbackWindow(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow): void;
    get lookbackWindowInput(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow | undefined;
}
export interface QuicksightDataSetRefreshPropertiesRefreshConfiguration {
    /**
    * incremental_refresh block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#incremental_refresh QuicksightDataSet#incremental_refresh}
    */
    readonly incrementalRefresh: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh;
}
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationToTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfiguration): any;
export declare function quicksightDataSetRefreshPropertiesRefreshConfigurationToHclTerraform(struct?: QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference | QuicksightDataSetRefreshPropertiesRefreshConfiguration): any;
export declare class QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRefreshPropertiesRefreshConfiguration | undefined;
    set internalValue(value: QuicksightDataSetRefreshPropertiesRefreshConfiguration | undefined);
    private _incrementalRefresh;
    get incrementalRefresh(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference;
    putIncrementalRefresh(value: QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh): void;
    get incrementalRefreshInput(): QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh | undefined;
}
export interface QuicksightDataSetRefreshProperties {
    /**
    * refresh_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#refresh_configuration QuicksightDataSet#refresh_configuration}
    */
    readonly refreshConfiguration: QuicksightDataSetRefreshPropertiesRefreshConfiguration;
}
export declare function quicksightDataSetRefreshPropertiesToTerraform(struct?: QuicksightDataSetRefreshPropertiesOutputReference | QuicksightDataSetRefreshProperties): any;
export declare function quicksightDataSetRefreshPropertiesToHclTerraform(struct?: QuicksightDataSetRefreshPropertiesOutputReference | QuicksightDataSetRefreshProperties): any;
export declare class QuicksightDataSetRefreshPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRefreshProperties | undefined;
    set internalValue(value: QuicksightDataSetRefreshProperties | undefined);
    private _refreshConfiguration;
    get refreshConfiguration(): QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference;
    putRefreshConfiguration(value: QuicksightDataSetRefreshPropertiesRefreshConfiguration): void;
    get refreshConfigurationInput(): QuicksightDataSetRefreshPropertiesRefreshConfiguration | undefined;
}
export interface QuicksightDataSetRowLevelPermissionDataSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}
    */
    readonly formatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}
    */
    readonly permissionPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}
    */
    readonly status?: string;
}
export declare function quicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: QuicksightDataSetRowLevelPermissionDataSetOutputReference | QuicksightDataSetRowLevelPermissionDataSet): any;
export declare function quicksightDataSetRowLevelPermissionDataSetToHclTerraform(struct?: QuicksightDataSetRowLevelPermissionDataSetOutputReference | QuicksightDataSetRowLevelPermissionDataSet): any;
export declare class QuicksightDataSetRowLevelPermissionDataSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRowLevelPermissionDataSet | undefined;
    set internalValue(value: QuicksightDataSetRowLevelPermissionDataSet | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _formatVersion?;
    get formatVersion(): string;
    set formatVersion(value: string);
    resetFormatVersion(): void;
    get formatVersionInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _permissionPolicy?;
    get permissionPolicy(): string;
    set permissionPolicy(value: string);
    get permissionPolicyInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface QuicksightDataSetRowLevelPermissionTagConfigurationTagRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}
    */
    readonly matchAllValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tag_key QuicksightDataSet#tag_key}
    */
    readonly tagKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}
    */
    readonly tagMultiValueDelimiter?: string;
}
export declare function quicksightDataSetRowLevelPermissionTagConfigurationTagRulesToTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable): any;
export declare function quicksightDataSetRowLevelPermissionTagConfigurationTagRulesToHclTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable): any;
export declare class QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules | cdktf.IResolvable | undefined);
    private _columnName?;
    get columnName(): string;
    set columnName(value: string);
    get columnNameInput(): string | undefined;
    private _matchAllValue?;
    get matchAllValue(): string;
    set matchAllValue(value: string);
    resetMatchAllValue(): void;
    get matchAllValueInput(): string | undefined;
    private _tagKey?;
    get tagKey(): string;
    set tagKey(value: string);
    get tagKeyInput(): string | undefined;
    private _tagMultiValueDelimiter?;
    get tagMultiValueDelimiter(): string;
    set tagMultiValueDelimiter(value: string);
    resetTagMultiValueDelimiter(): void;
    get tagMultiValueDelimiterInput(): string | undefined;
}
export declare class QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference;
}
export interface QuicksightDataSetRowLevelPermissionTagConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}
    */
    readonly status?: string;
    /**
    * tag_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#tag_rules QuicksightDataSet#tag_rules}
    */
    readonly tagRules: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable;
}
export declare function quicksightDataSetRowLevelPermissionTagConfigurationToTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference | QuicksightDataSetRowLevelPermissionTagConfiguration): any;
export declare function quicksightDataSetRowLevelPermissionTagConfigurationToHclTerraform(struct?: QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference | QuicksightDataSetRowLevelPermissionTagConfiguration): any;
export declare class QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDataSetRowLevelPermissionTagConfiguration | undefined;
    set internalValue(value: QuicksightDataSetRowLevelPermissionTagConfiguration | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tagRules;
    get tagRules(): QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList;
    putTagRules(value: QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | cdktf.IResolvable): void;
    get tagRulesInput(): cdktf.IResolvable | QuicksightDataSetRowLevelPermissionTagConfigurationTagRules[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set aws_quicksight_data_set}
*/
export declare class QuicksightDataSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_data_set";
    /**
    * Generates CDKTF code for importing a QuicksightDataSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightDataSet to import
    * @param importFromId The id of the existing QuicksightDataSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightDataSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_data_set aws_quicksight_data_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDataSetConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightDataSetConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    get dataSetIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _importMode?;
    get importMode(): string;
    set importMode(value: string);
    get importModeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _outputColumns;
    get outputColumns(): QuicksightDataSetOutputColumnsList;
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
    private _columnGroups;
    get columnGroups(): QuicksightDataSetColumnGroupsList;
    putColumnGroups(value: QuicksightDataSetColumnGroups[] | cdktf.IResolvable): void;
    resetColumnGroups(): void;
    get columnGroupsInput(): cdktf.IResolvable | QuicksightDataSetColumnGroups[] | undefined;
    private _columnLevelPermissionRules;
    get columnLevelPermissionRules(): QuicksightDataSetColumnLevelPermissionRulesList;
    putColumnLevelPermissionRules(value: QuicksightDataSetColumnLevelPermissionRules[] | cdktf.IResolvable): void;
    resetColumnLevelPermissionRules(): void;
    get columnLevelPermissionRulesInput(): cdktf.IResolvable | QuicksightDataSetColumnLevelPermissionRules[] | undefined;
    private _dataSetUsageConfiguration;
    get dataSetUsageConfiguration(): QuicksightDataSetDataSetUsageConfigurationOutputReference;
    putDataSetUsageConfiguration(value: QuicksightDataSetDataSetUsageConfiguration): void;
    resetDataSetUsageConfiguration(): void;
    get dataSetUsageConfigurationInput(): QuicksightDataSetDataSetUsageConfiguration | undefined;
    private _fieldFolders;
    get fieldFolders(): QuicksightDataSetFieldFoldersList;
    putFieldFolders(value: QuicksightDataSetFieldFolders[] | cdktf.IResolvable): void;
    resetFieldFolders(): void;
    get fieldFoldersInput(): cdktf.IResolvable | QuicksightDataSetFieldFolders[] | undefined;
    private _logicalTableMap;
    get logicalTableMap(): QuicksightDataSetLogicalTableMapList;
    putLogicalTableMap(value: QuicksightDataSetLogicalTableMap[] | cdktf.IResolvable): void;
    resetLogicalTableMap(): void;
    get logicalTableMapInput(): cdktf.IResolvable | QuicksightDataSetLogicalTableMap[] | undefined;
    private _permissions;
    get permissions(): QuicksightDataSetPermissionsList;
    putPermissions(value: QuicksightDataSetPermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightDataSetPermissions[] | undefined;
    private _physicalTableMap;
    get physicalTableMap(): QuicksightDataSetPhysicalTableMapList;
    putPhysicalTableMap(value: QuicksightDataSetPhysicalTableMap[] | cdktf.IResolvable): void;
    resetPhysicalTableMap(): void;
    get physicalTableMapInput(): cdktf.IResolvable | QuicksightDataSetPhysicalTableMap[] | undefined;
    private _refreshProperties;
    get refreshProperties(): QuicksightDataSetRefreshPropertiesOutputReference;
    putRefreshProperties(value: QuicksightDataSetRefreshProperties): void;
    resetRefreshProperties(): void;
    get refreshPropertiesInput(): QuicksightDataSetRefreshProperties | undefined;
    private _rowLevelPermissionDataSet;
    get rowLevelPermissionDataSet(): QuicksightDataSetRowLevelPermissionDataSetOutputReference;
    putRowLevelPermissionDataSet(value: QuicksightDataSetRowLevelPermissionDataSet): void;
    resetRowLevelPermissionDataSet(): void;
    get rowLevelPermissionDataSetInput(): QuicksightDataSetRowLevelPermissionDataSet | undefined;
    private _rowLevelPermissionTagConfiguration;
    get rowLevelPermissionTagConfiguration(): QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference;
    putRowLevelPermissionTagConfiguration(value: QuicksightDataSetRowLevelPermissionTagConfiguration): void;
    resetRowLevelPermissionTagConfiguration(): void;
    get rowLevelPermissionTagConfigurationInput(): QuicksightDataSetRowLevelPermissionTagConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
