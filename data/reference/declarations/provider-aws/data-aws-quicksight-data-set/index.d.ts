/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsQuicksightDataSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#id DataAwsQuicksightDataSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
}
export declare function dataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToTerraform(struct?: DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export declare function dataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupToHclTerraform(struct?: DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup): any;
export declare class DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined;
    set internalValue(value: DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup | undefined);
    get columns(): string[];
    get countryCode(): string;
    get name(): string;
}
export declare class DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference;
}
export interface DataAwsQuicksightDataSetColumnGroups {
}
export declare function dataAwsQuicksightDataSetColumnGroupsToTerraform(struct?: DataAwsQuicksightDataSetColumnGroups): any;
export declare function dataAwsQuicksightDataSetColumnGroupsToHclTerraform(struct?: DataAwsQuicksightDataSetColumnGroups): any;
export declare class DataAwsQuicksightDataSetColumnGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetColumnGroups | undefined;
    set internalValue(value: DataAwsQuicksightDataSetColumnGroups | undefined);
    private _geoSpatialColumnGroup;
    get geoSpatialColumnGroup(): DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList;
}
export declare class DataAwsQuicksightDataSetColumnGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetColumnGroupsOutputReference;
}
export interface DataAwsQuicksightDataSetColumnLevelPermissionRules {
}
export declare function dataAwsQuicksightDataSetColumnLevelPermissionRulesToTerraform(struct?: DataAwsQuicksightDataSetColumnLevelPermissionRules): any;
export declare function dataAwsQuicksightDataSetColumnLevelPermissionRulesToHclTerraform(struct?: DataAwsQuicksightDataSetColumnLevelPermissionRules): any;
export declare class DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetColumnLevelPermissionRules | undefined;
    set internalValue(value: DataAwsQuicksightDataSetColumnLevelPermissionRules | undefined);
    get columnNames(): string[];
    get principals(): string[];
}
export declare class DataAwsQuicksightDataSetColumnLevelPermissionRulesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference;
}
export interface DataAwsQuicksightDataSetDataSetUsageConfiguration {
}
export declare function dataAwsQuicksightDataSetDataSetUsageConfigurationToTerraform(struct?: DataAwsQuicksightDataSetDataSetUsageConfiguration): any;
export declare function dataAwsQuicksightDataSetDataSetUsageConfigurationToHclTerraform(struct?: DataAwsQuicksightDataSetDataSetUsageConfiguration): any;
export declare class DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetDataSetUsageConfiguration | undefined;
    set internalValue(value: DataAwsQuicksightDataSetDataSetUsageConfiguration | undefined);
    get disableUseAsDirectQuerySource(): cdktf.IResolvable;
    get disableUseAsImportedSource(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightDataSetDataSetUsageConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference;
}
export interface DataAwsQuicksightDataSetFieldFolders {
}
export declare function dataAwsQuicksightDataSetFieldFoldersToTerraform(struct?: DataAwsQuicksightDataSetFieldFolders): any;
export declare function dataAwsQuicksightDataSetFieldFoldersToHclTerraform(struct?: DataAwsQuicksightDataSetFieldFolders): any;
export declare class DataAwsQuicksightDataSetFieldFoldersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetFieldFolders | undefined;
    set internalValue(value: DataAwsQuicksightDataSetFieldFolders | undefined);
    get columns(): string[];
    get description(): string;
    get fieldFoldersId(): string;
}
export declare class DataAwsQuicksightDataSetFieldFoldersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetFieldFoldersOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation | undefined);
    get columnName(): string;
    get format(): string;
    get newColumnType(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns | undefined);
    get columnId(): string;
    get columnName(): string;
    get expression(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation | undefined);
    private _columns;
    get columns(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation | undefined);
    get conditionExpression(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation | undefined);
    get projectedColumns(): string[];
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation | undefined);
    get columnName(): string;
    get newColumnName(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription | undefined);
    get text(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags | undefined);
    private _columnDescription;
    get columnDescription(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList;
    get columnGeographicRole(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation | undefined);
    get columnName(): string;
    private _tags;
    get tags(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation | undefined);
    get columnName(): string;
    get tagNames(): string[];
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapDataTransforms {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransforms): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapDataTransformsToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapDataTransforms): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapDataTransforms | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapDataTransforms | undefined);
    private _castColumnTypeOperation;
    get castColumnTypeOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList;
    private _createColumnsOperation;
    get createColumnsOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList;
    private _filterOperation;
    get filterOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList;
    private _projectOperation;
    get projectOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList;
    private _renameColumnOperation;
    get renameColumnOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList;
    private _tagColumnOperation;
    get tagColumnOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList;
    private _untagColumnOperation;
    get untagColumnOperation(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapDataTransformsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties | undefined);
    get uniqueKey(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties | undefined);
    get uniqueKey(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction | undefined);
    private _leftJoinKeyProperties;
    get leftJoinKeyProperties(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList;
    get leftOperand(): string;
    get onClause(): string;
    private _rightJoinKeyProperties;
    get rightJoinKeyProperties(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList;
    get rightOperand(): string;
    get type(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMapSource {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSource): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapSourceToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMapSource): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMapSource | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMapSource | undefined);
    get dataSetArn(): string;
    private _joinInstruction;
    get joinInstruction(): DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList;
    get physicalTableId(): string;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapSourceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference;
}
export interface DataAwsQuicksightDataSetLogicalTableMap {
}
export declare function dataAwsQuicksightDataSetLogicalTableMapToTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMap): any;
export declare function dataAwsQuicksightDataSetLogicalTableMapToHclTerraform(struct?: DataAwsQuicksightDataSetLogicalTableMap): any;
export declare class DataAwsQuicksightDataSetLogicalTableMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetLogicalTableMap | undefined;
    set internalValue(value: DataAwsQuicksightDataSetLogicalTableMap | undefined);
    get alias(): string;
    private _dataTransforms;
    get dataTransforms(): DataAwsQuicksightDataSetLogicalTableMapDataTransformsList;
    get logicalTableMapId(): string;
    private _source;
    get source(): DataAwsQuicksightDataSetLogicalTableMapSourceList;
}
export declare class DataAwsQuicksightDataSetLogicalTableMapList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetLogicalTableMapOutputReference;
}
export interface DataAwsQuicksightDataSetPermissions {
}
export declare function dataAwsQuicksightDataSetPermissionsToTerraform(struct?: DataAwsQuicksightDataSetPermissions): any;
export declare function dataAwsQuicksightDataSetPermissionsToHclTerraform(struct?: DataAwsQuicksightDataSetPermissions): any;
export declare class DataAwsQuicksightDataSetPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPermissions | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPermissions | undefined);
    get actions(): string[];
    get principal(): string;
}
export declare class DataAwsQuicksightDataSetPermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPermissionsOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns | undefined);
    get name(): string;
    get type(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapCustomSql {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapCustomSqlToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapCustomSql): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapCustomSqlToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapCustomSql): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapCustomSql | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapCustomSql | undefined);
    private _columns;
    get columns(): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList;
    get dataSourceArn(): string;
    get name(): string;
    get sqlQuery(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns | undefined);
    get name(): string;
    get type(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapRelationalTable {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapRelationalTableToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapRelationalTable): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapRelationalTableToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapRelationalTable): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapRelationalTable | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapRelationalTable | undefined);
    get catalog(): string;
    get dataSourceArn(): string;
    private _inputColumns;
    get inputColumns(): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList;
    get name(): string;
    get schema(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns | undefined);
    get name(): string;
    get type(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings | undefined);
    get containsHeader(): cdktf.IResolvable;
    get delimiter(): string;
    get format(): string;
    get startFromRow(): number;
    get textQualifier(): string;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMapS3Source {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3Source): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapS3SourceToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMapS3Source): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMapS3Source | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMapS3Source | undefined);
    get dataSourceArn(): string;
    private _inputColumns;
    get inputColumns(): DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList;
    private _uploadSettings;
    get uploadSettings(): DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapS3SourceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference;
}
export interface DataAwsQuicksightDataSetPhysicalTableMap {
}
export declare function dataAwsQuicksightDataSetPhysicalTableMapToTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMap): any;
export declare function dataAwsQuicksightDataSetPhysicalTableMapToHclTerraform(struct?: DataAwsQuicksightDataSetPhysicalTableMap): any;
export declare class DataAwsQuicksightDataSetPhysicalTableMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetPhysicalTableMap | undefined;
    set internalValue(value: DataAwsQuicksightDataSetPhysicalTableMap | undefined);
    private _customSql;
    get customSql(): DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList;
    get physicalTableMapId(): string;
    private _relationalTable;
    get relationalTable(): DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList;
    private _s3Source;
    get s3Source(): DataAwsQuicksightDataSetPhysicalTableMapS3SourceList;
}
export declare class DataAwsQuicksightDataSetPhysicalTableMapList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetPhysicalTableMapOutputReference;
}
export interface DataAwsQuicksightDataSetRowLevelPermissionDataSet {
}
export declare function dataAwsQuicksightDataSetRowLevelPermissionDataSetToTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionDataSet): any;
export declare function dataAwsQuicksightDataSetRowLevelPermissionDataSetToHclTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionDataSet): any;
export declare class DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetRowLevelPermissionDataSet | undefined;
    set internalValue(value: DataAwsQuicksightDataSetRowLevelPermissionDataSet | undefined);
    get arn(): string;
    get formatVersion(): string;
    get namespace(): string;
    get permissionPolicy(): string;
    get status(): string;
}
export declare class DataAwsQuicksightDataSetRowLevelPermissionDataSetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference;
}
export interface DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules {
}
export declare function dataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesToTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules): any;
export declare function dataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesToHclTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules): any;
export declare class DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules | undefined;
    set internalValue(value: DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules | undefined);
    get columnName(): string;
    get matchAllValue(): string;
    get tagKey(): string;
    get tagMultiValueDelimiter(): string;
}
export declare class DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference;
}
export interface DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration {
}
export declare function dataAwsQuicksightDataSetRowLevelPermissionTagConfigurationToTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration): any;
export declare function dataAwsQuicksightDataSetRowLevelPermissionTagConfigurationToHclTerraform(struct?: DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration): any;
export declare class DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration | undefined;
    set internalValue(value: DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration | undefined);
    get status(): string;
    private _tagRules;
    get tagRules(): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList;
}
export declare class DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set aws_quicksight_data_set}
*/
export declare class DataAwsQuicksightDataSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_quicksight_data_set";
    /**
    * Generates CDKTF code for importing a DataAwsQuicksightDataSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsQuicksightDataSet to import
    * @param importFromId The id of the existing DataAwsQuicksightDataSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsQuicksightDataSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_data_set aws_quicksight_data_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsQuicksightDataSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsQuicksightDataSetConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _columnGroups;
    get columnGroups(): DataAwsQuicksightDataSetColumnGroupsList;
    private _columnLevelPermissionRules;
    get columnLevelPermissionRules(): DataAwsQuicksightDataSetColumnLevelPermissionRulesList;
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    get dataSetIdInput(): string | undefined;
    private _dataSetUsageConfiguration;
    get dataSetUsageConfiguration(): DataAwsQuicksightDataSetDataSetUsageConfigurationList;
    private _fieldFolders;
    get fieldFolders(): DataAwsQuicksightDataSetFieldFoldersList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get importMode(): string;
    private _logicalTableMap;
    get logicalTableMap(): DataAwsQuicksightDataSetLogicalTableMapList;
    get name(): string;
    private _permissions;
    get permissions(): DataAwsQuicksightDataSetPermissionsList;
    private _physicalTableMap;
    get physicalTableMap(): DataAwsQuicksightDataSetPhysicalTableMapList;
    private _rowLevelPermissionDataSet;
    get rowLevelPermissionDataSet(): DataAwsQuicksightDataSetRowLevelPermissionDataSetList;
    private _rowLevelPermissionTagConfiguration;
    get rowLevelPermissionTagConfiguration(): DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
