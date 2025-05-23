/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsQuicksightThemeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme#aws_account_id DataAwsQuicksightTheme#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme#id DataAwsQuicksightTheme#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme#tags DataAwsQuicksightTheme#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme#theme_id DataAwsQuicksightTheme#theme_id}
    */
    readonly themeId: string;
}
export interface DataAwsQuicksightThemeConfigurationDataColorPalette {
}
export declare function dataAwsQuicksightThemeConfigurationDataColorPaletteToTerraform(struct?: DataAwsQuicksightThemeConfigurationDataColorPalette): any;
export declare function dataAwsQuicksightThemeConfigurationDataColorPaletteToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationDataColorPalette): any;
export declare class DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationDataColorPalette | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationDataColorPalette | undefined);
    get colors(): string[];
    get emptyFillColor(): string;
    get minMaxGradient(): string[];
}
export declare class DataAwsQuicksightThemeConfigurationDataColorPaletteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationDataColorPaletteOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheetTileBorder {
}
export declare function dataAwsQuicksightThemeConfigurationSheetTileBorderToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileBorder): any;
export declare function dataAwsQuicksightThemeConfigurationSheetTileBorderToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileBorder): any;
export declare class DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheetTileBorder | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheetTileBorder | undefined);
    get show(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightThemeConfigurationSheetTileBorderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetTileBorderOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheetTile {
}
export declare function dataAwsQuicksightThemeConfigurationSheetTileToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTile): any;
export declare function dataAwsQuicksightThemeConfigurationSheetTileToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTile): any;
export declare class DataAwsQuicksightThemeConfigurationSheetTileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheetTile | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheetTile | undefined);
    private _border;
    get border(): DataAwsQuicksightThemeConfigurationSheetTileBorderList;
}
export declare class DataAwsQuicksightThemeConfigurationSheetTileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetTileOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter {
}
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter): any;
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutGutterToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter): any;
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheetTileLayoutGutter | undefined);
    get show(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin {
}
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin): any;
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutMarginToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin): any;
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheetTileLayoutMargin | undefined);
    get show(): cdktf.IResolvable;
}
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheetTileLayout {
}
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayout): any;
export declare function dataAwsQuicksightThemeConfigurationSheetTileLayoutToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheetTileLayout): any;
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheetTileLayout | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheetTileLayout | undefined);
    private _gutter;
    get gutter(): DataAwsQuicksightThemeConfigurationSheetTileLayoutGutterList;
    private _margin;
    get margin(): DataAwsQuicksightThemeConfigurationSheetTileLayoutMarginList;
}
export declare class DataAwsQuicksightThemeConfigurationSheetTileLayoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetTileLayoutOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationSheet {
}
export declare function dataAwsQuicksightThemeConfigurationSheetToTerraform(struct?: DataAwsQuicksightThemeConfigurationSheet): any;
export declare function dataAwsQuicksightThemeConfigurationSheetToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationSheet): any;
export declare class DataAwsQuicksightThemeConfigurationSheetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationSheet | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationSheet | undefined);
    private _tile;
    get tile(): DataAwsQuicksightThemeConfigurationSheetTileList;
    private _tileLayout;
    get tileLayout(): DataAwsQuicksightThemeConfigurationSheetTileLayoutList;
}
export declare class DataAwsQuicksightThemeConfigurationSheetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationSheetOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationTypographyFontFamilies {
}
export declare function dataAwsQuicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: DataAwsQuicksightThemeConfigurationTypographyFontFamilies): any;
export declare function dataAwsQuicksightThemeConfigurationTypographyFontFamiliesToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationTypographyFontFamilies): any;
export declare class DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationTypographyFontFamilies | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationTypographyFontFamilies | undefined);
    get fontFamily(): string;
}
export declare class DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationTypographyFontFamiliesOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationTypography {
}
export declare function dataAwsQuicksightThemeConfigurationTypographyToTerraform(struct?: DataAwsQuicksightThemeConfigurationTypography): any;
export declare function dataAwsQuicksightThemeConfigurationTypographyToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationTypography): any;
export declare class DataAwsQuicksightThemeConfigurationTypographyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationTypography | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationTypography | undefined);
    private _fontFamilies;
    get fontFamilies(): DataAwsQuicksightThemeConfigurationTypographyFontFamiliesList;
}
export declare class DataAwsQuicksightThemeConfigurationTypographyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationTypographyOutputReference;
}
export interface DataAwsQuicksightThemeConfigurationUiColorPalette {
}
export declare function dataAwsQuicksightThemeConfigurationUiColorPaletteToTerraform(struct?: DataAwsQuicksightThemeConfigurationUiColorPalette): any;
export declare function dataAwsQuicksightThemeConfigurationUiColorPaletteToHclTerraform(struct?: DataAwsQuicksightThemeConfigurationUiColorPalette): any;
export declare class DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfigurationUiColorPalette | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfigurationUiColorPalette | undefined);
    get accent(): string;
    get accentForeground(): string;
    get danger(): string;
    get dangerForeground(): string;
    get dimension(): string;
    get dimensionForeground(): string;
    get measure(): string;
    get measureForeground(): string;
    get primaryBackground(): string;
    get primaryForeground(): string;
    get secondaryBackground(): string;
    get secondaryForeground(): string;
    get success(): string;
    get successForeground(): string;
    get warning(): string;
    get warningForeground(): string;
}
export declare class DataAwsQuicksightThemeConfigurationUiColorPaletteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationUiColorPaletteOutputReference;
}
export interface DataAwsQuicksightThemeConfiguration {
}
export declare function dataAwsQuicksightThemeConfigurationToTerraform(struct?: DataAwsQuicksightThemeConfiguration): any;
export declare function dataAwsQuicksightThemeConfigurationToHclTerraform(struct?: DataAwsQuicksightThemeConfiguration): any;
export declare class DataAwsQuicksightThemeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemeConfiguration | undefined;
    set internalValue(value: DataAwsQuicksightThemeConfiguration | undefined);
    private _dataColorPalette;
    get dataColorPalette(): DataAwsQuicksightThemeConfigurationDataColorPaletteList;
    private _sheet;
    get sheet(): DataAwsQuicksightThemeConfigurationSheetList;
    private _typography;
    get typography(): DataAwsQuicksightThemeConfigurationTypographyList;
    private _uiColorPalette;
    get uiColorPalette(): DataAwsQuicksightThemeConfigurationUiColorPaletteList;
}
export declare class DataAwsQuicksightThemeConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemeConfigurationOutputReference;
}
export interface DataAwsQuicksightThemePermissions {
}
export declare function dataAwsQuicksightThemePermissionsToTerraform(struct?: DataAwsQuicksightThemePermissions): any;
export declare function dataAwsQuicksightThemePermissionsToHclTerraform(struct?: DataAwsQuicksightThemePermissions): any;
export declare class DataAwsQuicksightThemePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightThemePermissions | undefined;
    set internalValue(value: DataAwsQuicksightThemePermissions | undefined);
    get actions(): string[];
    get principal(): string;
}
export declare class DataAwsQuicksightThemePermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightThemePermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme aws_quicksight_theme}
*/
export declare class DataAwsQuicksightTheme extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_quicksight_theme";
    /**
    * Generates CDKTF code for importing a DataAwsQuicksightTheme resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsQuicksightTheme to import
    * @param importFromId The id of the existing DataAwsQuicksightTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsQuicksightTheme to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/quicksight_theme aws_quicksight_theme} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsQuicksightThemeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsQuicksightThemeConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get baseThemeId(): string;
    private _configuration;
    get configuration(): DataAwsQuicksightThemeConfigurationList;
    get createdTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    get name(): string;
    private _permissions;
    get permissions(): DataAwsQuicksightThemePermissionsList;
    get status(): string;
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
    private _themeId?;
    get themeId(): string;
    set themeId(value: string);
    get themeIdInput(): string | undefined;
    get versionDescription(): string;
    get versionNumber(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
