/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightThemeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}
    */
    readonly baseThemeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#id QuicksightTheme#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#name QuicksightTheme#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}
    */
    readonly themeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}
    */
    readonly versionDescription?: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}
    */
    readonly configuration?: QuicksightThemeConfiguration;
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}
    */
    readonly permissions?: QuicksightThemePermissions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#timeouts QuicksightTheme#timeouts}
    */
    readonly timeouts?: QuicksightThemeTimeouts;
}
export interface QuicksightThemeConfigurationDataColorPalette {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}
    */
    readonly colors?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}
    */
    readonly emptyFillColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}
    */
    readonly minMaxGradient?: string[];
}
export declare function quicksightThemeConfigurationDataColorPaletteToTerraform(struct?: QuicksightThemeConfigurationDataColorPaletteOutputReference | QuicksightThemeConfigurationDataColorPalette): any;
export declare function quicksightThemeConfigurationDataColorPaletteToHclTerraform(struct?: QuicksightThemeConfigurationDataColorPaletteOutputReference | QuicksightThemeConfigurationDataColorPalette): any;
export declare class QuicksightThemeConfigurationDataColorPaletteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationDataColorPalette | undefined;
    set internalValue(value: QuicksightThemeConfigurationDataColorPalette | undefined);
    private _colors?;
    get colors(): string[];
    set colors(value: string[]);
    resetColors(): void;
    get colorsInput(): string[] | undefined;
    private _emptyFillColor?;
    get emptyFillColor(): string;
    set emptyFillColor(value: string);
    resetEmptyFillColor(): void;
    get emptyFillColorInput(): string | undefined;
    private _minMaxGradient?;
    get minMaxGradient(): string[];
    set minMaxGradient(value: string[]);
    resetMinMaxGradient(): void;
    get minMaxGradientInput(): string[] | undefined;
}
export interface QuicksightThemeConfigurationSheetTileBorder {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileBorderToTerraform(struct?: QuicksightThemeConfigurationSheetTileBorderOutputReference | QuicksightThemeConfigurationSheetTileBorder): any;
export declare function quicksightThemeConfigurationSheetTileBorderToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileBorderOutputReference | QuicksightThemeConfigurationSheetTileBorder): any;
export declare class QuicksightThemeConfigurationSheetTileBorderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheetTileBorder | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheetTileBorder | undefined);
    private _show?;
    get show(): boolean | cdktf.IResolvable;
    set show(value: boolean | cdktf.IResolvable);
    resetShow(): void;
    get showInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightThemeConfigurationSheetTile {
    /**
    * border block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#border QuicksightTheme#border}
    */
    readonly border?: QuicksightThemeConfigurationSheetTileBorder;
}
export declare function quicksightThemeConfigurationSheetTileToTerraform(struct?: QuicksightThemeConfigurationSheetTileOutputReference | QuicksightThemeConfigurationSheetTile): any;
export declare function quicksightThemeConfigurationSheetTileToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileOutputReference | QuicksightThemeConfigurationSheetTile): any;
export declare class QuicksightThemeConfigurationSheetTileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheetTile | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheetTile | undefined);
    private _border;
    get border(): QuicksightThemeConfigurationSheetTileBorderOutputReference;
    putBorder(value: QuicksightThemeConfigurationSheetTileBorder): void;
    resetBorder(): void;
    get borderInput(): QuicksightThemeConfigurationSheetTileBorder | undefined;
}
export interface QuicksightThemeConfigurationSheetTileLayoutGutter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileLayoutGutterToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference | QuicksightThemeConfigurationSheetTileLayoutGutter): any;
export declare function quicksightThemeConfigurationSheetTileLayoutGutterToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference | QuicksightThemeConfigurationSheetTileLayoutGutter): any;
export declare class QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheetTileLayoutGutter | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutGutter | undefined);
    private _show?;
    get show(): boolean | cdktf.IResolvable;
    set show(value: boolean | cdktf.IResolvable);
    resetShow(): void;
    get showInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightThemeConfigurationSheetTileLayoutMargin {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#show QuicksightTheme#show}
    */
    readonly show?: boolean | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationSheetTileLayoutMarginToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference | QuicksightThemeConfigurationSheetTileLayoutMargin): any;
export declare function quicksightThemeConfigurationSheetTileLayoutMarginToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference | QuicksightThemeConfigurationSheetTileLayoutMargin): any;
export declare class QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheetTileLayoutMargin | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheetTileLayoutMargin | undefined);
    private _show?;
    get show(): boolean | cdktf.IResolvable;
    set show(value: boolean | cdktf.IResolvable);
    resetShow(): void;
    get showInput(): boolean | cdktf.IResolvable | undefined;
}
export interface QuicksightThemeConfigurationSheetTileLayout {
    /**
    * gutter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}
    */
    readonly gutter?: QuicksightThemeConfigurationSheetTileLayoutGutter;
    /**
    * margin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}
    */
    readonly margin?: QuicksightThemeConfigurationSheetTileLayoutMargin;
}
export declare function quicksightThemeConfigurationSheetTileLayoutToTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutOutputReference | QuicksightThemeConfigurationSheetTileLayout): any;
export declare function quicksightThemeConfigurationSheetTileLayoutToHclTerraform(struct?: QuicksightThemeConfigurationSheetTileLayoutOutputReference | QuicksightThemeConfigurationSheetTileLayout): any;
export declare class QuicksightThemeConfigurationSheetTileLayoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheetTileLayout | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheetTileLayout | undefined);
    private _gutter;
    get gutter(): QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference;
    putGutter(value: QuicksightThemeConfigurationSheetTileLayoutGutter): void;
    resetGutter(): void;
    get gutterInput(): QuicksightThemeConfigurationSheetTileLayoutGutter | undefined;
    private _margin;
    get margin(): QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference;
    putMargin(value: QuicksightThemeConfigurationSheetTileLayoutMargin): void;
    resetMargin(): void;
    get marginInput(): QuicksightThemeConfigurationSheetTileLayoutMargin | undefined;
}
export interface QuicksightThemeConfigurationSheet {
    /**
    * tile block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}
    */
    readonly tile?: QuicksightThemeConfigurationSheetTile;
    /**
    * tile_layout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}
    */
    readonly tileLayout?: QuicksightThemeConfigurationSheetTileLayout;
}
export declare function quicksightThemeConfigurationSheetToTerraform(struct?: QuicksightThemeConfigurationSheetOutputReference | QuicksightThemeConfigurationSheet): any;
export declare function quicksightThemeConfigurationSheetToHclTerraform(struct?: QuicksightThemeConfigurationSheetOutputReference | QuicksightThemeConfigurationSheet): any;
export declare class QuicksightThemeConfigurationSheetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationSheet | undefined;
    set internalValue(value: QuicksightThemeConfigurationSheet | undefined);
    private _tile;
    get tile(): QuicksightThemeConfigurationSheetTileOutputReference;
    putTile(value: QuicksightThemeConfigurationSheetTile): void;
    resetTile(): void;
    get tileInput(): QuicksightThemeConfigurationSheetTile | undefined;
    private _tileLayout;
    get tileLayout(): QuicksightThemeConfigurationSheetTileLayoutOutputReference;
    putTileLayout(value: QuicksightThemeConfigurationSheetTileLayout): void;
    resetTileLayout(): void;
    get tileLayoutInput(): QuicksightThemeConfigurationSheetTileLayout | undefined;
}
export interface QuicksightThemeConfigurationTypographyFontFamilies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}
    */
    readonly fontFamily?: string;
}
export declare function quicksightThemeConfigurationTypographyFontFamiliesToTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable): any;
export declare function quicksightThemeConfigurationTypographyFontFamiliesToHclTerraform(struct?: QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable): any;
export declare class QuicksightThemeConfigurationTypographyFontFamiliesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightThemeConfigurationTypographyFontFamilies | cdktf.IResolvable | undefined);
    private _fontFamily?;
    get fontFamily(): string;
    set fontFamily(value: string);
    resetFontFamily(): void;
    get fontFamilyInput(): string | undefined;
}
export declare class QuicksightThemeConfigurationTypographyFontFamiliesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightThemeConfigurationTypographyFontFamiliesOutputReference;
}
export interface QuicksightThemeConfigurationTypography {
    /**
    * font_families block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}
    */
    readonly fontFamilies?: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable;
}
export declare function quicksightThemeConfigurationTypographyToTerraform(struct?: QuicksightThemeConfigurationTypographyOutputReference | QuicksightThemeConfigurationTypography): any;
export declare function quicksightThemeConfigurationTypographyToHclTerraform(struct?: QuicksightThemeConfigurationTypographyOutputReference | QuicksightThemeConfigurationTypography): any;
export declare class QuicksightThemeConfigurationTypographyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationTypography | undefined;
    set internalValue(value: QuicksightThemeConfigurationTypography | undefined);
    private _fontFamilies;
    get fontFamilies(): QuicksightThemeConfigurationTypographyFontFamiliesList;
    putFontFamilies(value: QuicksightThemeConfigurationTypographyFontFamilies[] | cdktf.IResolvable): void;
    resetFontFamilies(): void;
    get fontFamiliesInput(): cdktf.IResolvable | QuicksightThemeConfigurationTypographyFontFamilies[] | undefined;
}
export interface QuicksightThemeConfigurationUiColorPalette {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}
    */
    readonly accent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}
    */
    readonly accentForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}
    */
    readonly danger?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}
    */
    readonly dangerForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}
    */
    readonly dimension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}
    */
    readonly dimensionForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}
    */
    readonly measure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}
    */
    readonly measureForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}
    */
    readonly primaryBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}
    */
    readonly primaryForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}
    */
    readonly secondaryBackground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}
    */
    readonly secondaryForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#success QuicksightTheme#success}
    */
    readonly success?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}
    */
    readonly successForeground?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}
    */
    readonly warning?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}
    */
    readonly warningForeground?: string;
}
export declare function quicksightThemeConfigurationUiColorPaletteToTerraform(struct?: QuicksightThemeConfigurationUiColorPaletteOutputReference | QuicksightThemeConfigurationUiColorPalette): any;
export declare function quicksightThemeConfigurationUiColorPaletteToHclTerraform(struct?: QuicksightThemeConfigurationUiColorPaletteOutputReference | QuicksightThemeConfigurationUiColorPalette): any;
export declare class QuicksightThemeConfigurationUiColorPaletteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfigurationUiColorPalette | undefined;
    set internalValue(value: QuicksightThemeConfigurationUiColorPalette | undefined);
    private _accent?;
    get accent(): string;
    set accent(value: string);
    resetAccent(): void;
    get accentInput(): string | undefined;
    private _accentForeground?;
    get accentForeground(): string;
    set accentForeground(value: string);
    resetAccentForeground(): void;
    get accentForegroundInput(): string | undefined;
    private _danger?;
    get danger(): string;
    set danger(value: string);
    resetDanger(): void;
    get dangerInput(): string | undefined;
    private _dangerForeground?;
    get dangerForeground(): string;
    set dangerForeground(value: string);
    resetDangerForeground(): void;
    get dangerForegroundInput(): string | undefined;
    private _dimension?;
    get dimension(): string;
    set dimension(value: string);
    resetDimension(): void;
    get dimensionInput(): string | undefined;
    private _dimensionForeground?;
    get dimensionForeground(): string;
    set dimensionForeground(value: string);
    resetDimensionForeground(): void;
    get dimensionForegroundInput(): string | undefined;
    private _measure?;
    get measure(): string;
    set measure(value: string);
    resetMeasure(): void;
    get measureInput(): string | undefined;
    private _measureForeground?;
    get measureForeground(): string;
    set measureForeground(value: string);
    resetMeasureForeground(): void;
    get measureForegroundInput(): string | undefined;
    private _primaryBackground?;
    get primaryBackground(): string;
    set primaryBackground(value: string);
    resetPrimaryBackground(): void;
    get primaryBackgroundInput(): string | undefined;
    private _primaryForeground?;
    get primaryForeground(): string;
    set primaryForeground(value: string);
    resetPrimaryForeground(): void;
    get primaryForegroundInput(): string | undefined;
    private _secondaryBackground?;
    get secondaryBackground(): string;
    set secondaryBackground(value: string);
    resetSecondaryBackground(): void;
    get secondaryBackgroundInput(): string | undefined;
    private _secondaryForeground?;
    get secondaryForeground(): string;
    set secondaryForeground(value: string);
    resetSecondaryForeground(): void;
    get secondaryForegroundInput(): string | undefined;
    private _success?;
    get success(): string;
    set success(value: string);
    resetSuccess(): void;
    get successInput(): string | undefined;
    private _successForeground?;
    get successForeground(): string;
    set successForeground(value: string);
    resetSuccessForeground(): void;
    get successForegroundInput(): string | undefined;
    private _warning?;
    get warning(): string;
    set warning(value: string);
    resetWarning(): void;
    get warningInput(): string | undefined;
    private _warningForeground?;
    get warningForeground(): string;
    set warningForeground(value: string);
    resetWarningForeground(): void;
    get warningForegroundInput(): string | undefined;
}
export interface QuicksightThemeConfiguration {
    /**
    * data_color_palette block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}
    */
    readonly dataColorPalette?: QuicksightThemeConfigurationDataColorPalette;
    /**
    * sheet block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}
    */
    readonly sheet?: QuicksightThemeConfigurationSheet;
    /**
    * typography block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}
    */
    readonly typography?: QuicksightThemeConfigurationTypography;
    /**
    * ui_color_palette block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}
    */
    readonly uiColorPalette?: QuicksightThemeConfigurationUiColorPalette;
}
export declare function quicksightThemeConfigurationToTerraform(struct?: QuicksightThemeConfigurationOutputReference | QuicksightThemeConfiguration): any;
export declare function quicksightThemeConfigurationToHclTerraform(struct?: QuicksightThemeConfigurationOutputReference | QuicksightThemeConfiguration): any;
export declare class QuicksightThemeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeConfiguration | undefined;
    set internalValue(value: QuicksightThemeConfiguration | undefined);
    private _dataColorPalette;
    get dataColorPalette(): QuicksightThemeConfigurationDataColorPaletteOutputReference;
    putDataColorPalette(value: QuicksightThemeConfigurationDataColorPalette): void;
    resetDataColorPalette(): void;
    get dataColorPaletteInput(): QuicksightThemeConfigurationDataColorPalette | undefined;
    private _sheet;
    get sheet(): QuicksightThemeConfigurationSheetOutputReference;
    putSheet(value: QuicksightThemeConfigurationSheet): void;
    resetSheet(): void;
    get sheetInput(): QuicksightThemeConfigurationSheet | undefined;
    private _typography;
    get typography(): QuicksightThemeConfigurationTypographyOutputReference;
    putTypography(value: QuicksightThemeConfigurationTypography): void;
    resetTypography(): void;
    get typographyInput(): QuicksightThemeConfigurationTypography | undefined;
    private _uiColorPalette;
    get uiColorPalette(): QuicksightThemeConfigurationUiColorPaletteOutputReference;
    putUiColorPalette(value: QuicksightThemeConfigurationUiColorPalette): void;
    resetUiColorPalette(): void;
    get uiColorPaletteInput(): QuicksightThemeConfigurationUiColorPalette | undefined;
}
export interface QuicksightThemePermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}
    */
    readonly principal: string;
}
export declare function quicksightThemePermissionsToTerraform(struct?: QuicksightThemePermissions | cdktf.IResolvable): any;
export declare function quicksightThemePermissionsToHclTerraform(struct?: QuicksightThemePermissions | cdktf.IResolvable): any;
export declare class QuicksightThemePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightThemePermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightThemePermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightThemePermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightThemePermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightThemePermissionsOutputReference;
}
export interface QuicksightThemeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#create QuicksightTheme#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#update QuicksightTheme#update}
    */
    readonly update?: string;
}
export declare function quicksightThemeTimeoutsToTerraform(struct?: QuicksightThemeTimeouts | cdktf.IResolvable): any;
export declare function quicksightThemeTimeoutsToHclTerraform(struct?: QuicksightThemeTimeouts | cdktf.IResolvable): any;
export declare class QuicksightThemeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightThemeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightThemeTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme aws_quicksight_theme}
*/
export declare class QuicksightTheme extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_theme";
    /**
    * Generates CDKTF code for importing a QuicksightTheme resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightTheme to import
    * @param importFromId The id of the existing QuicksightTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightTheme to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_theme aws_quicksight_theme} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightThemeConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightThemeConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _baseThemeId?;
    get baseThemeId(): string;
    set baseThemeId(value: string);
    get baseThemeIdInput(): string | undefined;
    get createdTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _themeId?;
    get themeId(): string;
    set themeId(value: string);
    get themeIdInput(): string | undefined;
    private _versionDescription?;
    get versionDescription(): string;
    set versionDescription(value: string);
    resetVersionDescription(): void;
    get versionDescriptionInput(): string | undefined;
    get versionNumber(): number;
    private _configuration;
    get configuration(): QuicksightThemeConfigurationOutputReference;
    putConfiguration(value: QuicksightThemeConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): QuicksightThemeConfiguration | undefined;
    private _permissions;
    get permissions(): QuicksightThemePermissionsList;
    putPermissions(value: QuicksightThemePermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightThemePermissions[] | undefined;
    private _timeouts;
    get timeouts(): QuicksightThemeTimeoutsOutputReference;
    putTimeouts(value: QuicksightThemeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightThemeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
