/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightDashboardConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}
    */
    readonly dashboardId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}
    */
    readonly themeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}
    */
    readonly versionDescription: string;
    /**
    * dashboard_publish_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}
    */
    readonly dashboardPublishOptions?: QuicksightDashboardDashboardPublishOptions;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}
    */
    readonly definition?: any;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}
    */
    readonly parameters?: QuicksightDashboardParameters;
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}
    */
    readonly permissions?: QuicksightDashboardPermissions[] | cdktf.IResolvable;
    /**
    * source_entity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}
    */
    readonly sourceEntity?: QuicksightDashboardSourceEntity;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}
    */
    readonly timeouts?: QuicksightDashboardTimeouts;
}
export interface QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference | QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any;
export declare function quicksightDashboardDashboardPublishOptionsAdHocFilteringOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference | QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption): any;
export declare function quicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption): any;
export declare function quicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsDataPointTooltipOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption): any;
export declare function quicksightDashboardDashboardPublishOptionsDataPointTooltipOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference | QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportToCsvOption): any;
export declare function quicksightDashboardDashboardPublishOptionsExportToCsvOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportToCsvOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsExportToCsvOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption): any;
export declare function quicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}
    */
    readonly visibilityState?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetControlsOption): any;
export declare function quicksightDashboardDashboardPublishOptionsSheetControlsOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetControlsOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsSheetControlsOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption | undefined);
    private _visibilityState?;
    get visibilityState(): string;
    set visibilityState(value: string);
    resetVisibilityState(): void;
    get visibilityStateInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption): any;
export declare function quicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference | QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsVisualAxisSortOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption): any;
export declare function quicksightDashboardDashboardPublishOptionsVisualAxisSortOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptionsVisualMenuOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}
    */
    readonly availabilityStatus?: string;
}
export declare function quicksightDashboardDashboardPublishOptionsVisualMenuOptionToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualMenuOption): any;
export declare function quicksightDashboardDashboardPublishOptionsVisualMenuOptionToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference | QuicksightDashboardDashboardPublishOptionsVisualMenuOption): any;
export declare class QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptionsVisualMenuOption | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptionsVisualMenuOption | undefined);
    private _availabilityStatus?;
    get availabilityStatus(): string;
    set availabilityStatus(value: string);
    resetAvailabilityStatus(): void;
    get availabilityStatusInput(): string | undefined;
}
export interface QuicksightDashboardDashboardPublishOptions {
    /**
    * ad_hoc_filtering_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}
    */
    readonly adHocFilteringOption?: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption;
    /**
    * data_point_drill_up_down_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}
    */
    readonly dataPointDrillUpDownOption?: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption;
    /**
    * data_point_menu_label_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}
    */
    readonly dataPointMenuLabelOption?: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption;
    /**
    * data_point_tooltip_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}
    */
    readonly dataPointTooltipOption?: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption;
    /**
    * export_to_csv_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}
    */
    readonly exportToCsvOption?: QuicksightDashboardDashboardPublishOptionsExportToCsvOption;
    /**
    * export_with_hidden_fields_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}
    */
    readonly exportWithHiddenFieldsOption?: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption;
    /**
    * sheet_controls_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}
    */
    readonly sheetControlsOption?: QuicksightDashboardDashboardPublishOptionsSheetControlsOption;
    /**
    * sheet_layout_element_maximization_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}
    */
    readonly sheetLayoutElementMaximizationOption?: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption;
    /**
    * visual_axis_sort_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}
    */
    readonly visualAxisSortOption?: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption;
    /**
    * visual_menu_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}
    */
    readonly visualMenuOption?: QuicksightDashboardDashboardPublishOptionsVisualMenuOption;
}
export declare function quicksightDashboardDashboardPublishOptionsToTerraform(struct?: QuicksightDashboardDashboardPublishOptionsOutputReference | QuicksightDashboardDashboardPublishOptions): any;
export declare function quicksightDashboardDashboardPublishOptionsToHclTerraform(struct?: QuicksightDashboardDashboardPublishOptionsOutputReference | QuicksightDashboardDashboardPublishOptions): any;
export declare class QuicksightDashboardDashboardPublishOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardDashboardPublishOptions | undefined;
    set internalValue(value: QuicksightDashboardDashboardPublishOptions | undefined);
    private _adHocFilteringOption;
    get adHocFilteringOption(): QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference;
    putAdHocFilteringOption(value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption): void;
    resetAdHocFilteringOption(): void;
    get adHocFilteringOptionInput(): QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption | undefined;
    private _dataPointDrillUpDownOption;
    get dataPointDrillUpDownOption(): QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference;
    putDataPointDrillUpDownOption(value: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption): void;
    resetDataPointDrillUpDownOption(): void;
    get dataPointDrillUpDownOptionInput(): QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption | undefined;
    private _dataPointMenuLabelOption;
    get dataPointMenuLabelOption(): QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference;
    putDataPointMenuLabelOption(value: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption): void;
    resetDataPointMenuLabelOption(): void;
    get dataPointMenuLabelOptionInput(): QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption | undefined;
    private _dataPointTooltipOption;
    get dataPointTooltipOption(): QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference;
    putDataPointTooltipOption(value: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption): void;
    resetDataPointTooltipOption(): void;
    get dataPointTooltipOptionInput(): QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption | undefined;
    private _exportToCsvOption;
    get exportToCsvOption(): QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference;
    putExportToCsvOption(value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption): void;
    resetExportToCsvOption(): void;
    get exportToCsvOptionInput(): QuicksightDashboardDashboardPublishOptionsExportToCsvOption | undefined;
    private _exportWithHiddenFieldsOption;
    get exportWithHiddenFieldsOption(): QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference;
    putExportWithHiddenFieldsOption(value: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption): void;
    resetExportWithHiddenFieldsOption(): void;
    get exportWithHiddenFieldsOptionInput(): QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption | undefined;
    private _sheetControlsOption;
    get sheetControlsOption(): QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference;
    putSheetControlsOption(value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption): void;
    resetSheetControlsOption(): void;
    get sheetControlsOptionInput(): QuicksightDashboardDashboardPublishOptionsSheetControlsOption | undefined;
    private _sheetLayoutElementMaximizationOption;
    get sheetLayoutElementMaximizationOption(): QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference;
    putSheetLayoutElementMaximizationOption(value: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption): void;
    resetSheetLayoutElementMaximizationOption(): void;
    get sheetLayoutElementMaximizationOptionInput(): QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption | undefined;
    private _visualAxisSortOption;
    get visualAxisSortOption(): QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference;
    putVisualAxisSortOption(value: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption): void;
    resetVisualAxisSortOption(): void;
    get visualAxisSortOptionInput(): QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption | undefined;
    private _visualMenuOption;
    get visualMenuOption(): QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference;
    putVisualMenuOption(value: QuicksightDashboardDashboardPublishOptionsVisualMenuOption): void;
    resetVisualMenuOption(): void;
    get visualMenuOptionInput(): QuicksightDashboardDashboardPublishOptionsVisualMenuOption | undefined;
}
export interface QuicksightDashboardParametersDateTimeParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
    */
    readonly values: string[];
}
export declare function quicksightDashboardParametersDateTimeParametersToTerraform(struct?: QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable): any;
export declare function quicksightDashboardParametersDateTimeParametersToHclTerraform(struct?: QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable): any;
export declare class QuicksightDashboardParametersDateTimeParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardParametersDateTimeParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class QuicksightDashboardParametersDateTimeParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardParametersDateTimeParametersOutputReference;
}
export interface QuicksightDashboardParametersDecimalParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
    */
    readonly values: number[];
}
export declare function quicksightDashboardParametersDecimalParametersToTerraform(struct?: QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable): any;
export declare function quicksightDashboardParametersDecimalParametersToHclTerraform(struct?: QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable): any;
export declare class QuicksightDashboardParametersDecimalParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardParametersDecimalParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): number[];
    set values(value: number[]);
    get valuesInput(): number[] | undefined;
}
export declare class QuicksightDashboardParametersDecimalParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardParametersDecimalParametersOutputReference;
}
export interface QuicksightDashboardParametersIntegerParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
    */
    readonly values: number[];
}
export declare function quicksightDashboardParametersIntegerParametersToTerraform(struct?: QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable): any;
export declare function quicksightDashboardParametersIntegerParametersToHclTerraform(struct?: QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable): any;
export declare class QuicksightDashboardParametersIntegerParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardParametersIntegerParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): number[];
    set values(value: number[]);
    get valuesInput(): number[] | undefined;
}
export declare class QuicksightDashboardParametersIntegerParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardParametersIntegerParametersOutputReference;
}
export interface QuicksightDashboardParametersStringParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}
    */
    readonly values: string[];
}
export declare function quicksightDashboardParametersStringParametersToTerraform(struct?: QuicksightDashboardParametersStringParameters | cdktf.IResolvable): any;
export declare function quicksightDashboardParametersStringParametersToHclTerraform(struct?: QuicksightDashboardParametersStringParameters | cdktf.IResolvable): any;
export declare class QuicksightDashboardParametersStringParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardParametersStringParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardParametersStringParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class QuicksightDashboardParametersStringParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardParametersStringParametersOutputReference;
}
export interface QuicksightDashboardParameters {
    /**
    * date_time_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}
    */
    readonly dateTimeParameters?: QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable;
    /**
    * decimal_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}
    */
    readonly decimalParameters?: QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable;
    /**
    * integer_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}
    */
    readonly integerParameters?: QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable;
    /**
    * string_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}
    */
    readonly stringParameters?: QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable;
}
export declare function quicksightDashboardParametersToTerraform(struct?: QuicksightDashboardParametersOutputReference | QuicksightDashboardParameters): any;
export declare function quicksightDashboardParametersToHclTerraform(struct?: QuicksightDashboardParametersOutputReference | QuicksightDashboardParameters): any;
export declare class QuicksightDashboardParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardParameters | undefined;
    set internalValue(value: QuicksightDashboardParameters | undefined);
    private _dateTimeParameters;
    get dateTimeParameters(): QuicksightDashboardParametersDateTimeParametersList;
    putDateTimeParameters(value: QuicksightDashboardParametersDateTimeParameters[] | cdktf.IResolvable): void;
    resetDateTimeParameters(): void;
    get dateTimeParametersInput(): cdktf.IResolvable | QuicksightDashboardParametersDateTimeParameters[] | undefined;
    private _decimalParameters;
    get decimalParameters(): QuicksightDashboardParametersDecimalParametersList;
    putDecimalParameters(value: QuicksightDashboardParametersDecimalParameters[] | cdktf.IResolvable): void;
    resetDecimalParameters(): void;
    get decimalParametersInput(): cdktf.IResolvable | QuicksightDashboardParametersDecimalParameters[] | undefined;
    private _integerParameters;
    get integerParameters(): QuicksightDashboardParametersIntegerParametersList;
    putIntegerParameters(value: QuicksightDashboardParametersIntegerParameters[] | cdktf.IResolvable): void;
    resetIntegerParameters(): void;
    get integerParametersInput(): cdktf.IResolvable | QuicksightDashboardParametersIntegerParameters[] | undefined;
    private _stringParameters;
    get stringParameters(): QuicksightDashboardParametersStringParametersList;
    putStringParameters(value: QuicksightDashboardParametersStringParameters[] | cdktf.IResolvable): void;
    resetStringParameters(): void;
    get stringParametersInput(): cdktf.IResolvable | QuicksightDashboardParametersStringParameters[] | undefined;
}
export interface QuicksightDashboardPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}
    */
    readonly principal: string;
}
export declare function quicksightDashboardPermissionsToTerraform(struct?: QuicksightDashboardPermissions | cdktf.IResolvable): any;
export declare function quicksightDashboardPermissionsToHclTerraform(struct?: QuicksightDashboardPermissions | cdktf.IResolvable): any;
export declare class QuicksightDashboardPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardPermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightDashboardPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardPermissionsOutputReference;
}
export interface QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}
    */
    readonly dataSetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}
    */
    readonly dataSetPlaceholder: string;
}
export declare function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable): any;
export declare function quicksightDashboardSourceEntitySourceTemplateDataSetReferencesToHclTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable): any;
export declare class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined);
    private _dataSetArn?;
    get dataSetArn(): string;
    set dataSetArn(value: string);
    get dataSetArnInput(): string | undefined;
    private _dataSetPlaceholder?;
    get dataSetPlaceholder(): string;
    set dataSetPlaceholder(value: string);
    get dataSetPlaceholderInput(): string | undefined;
}
export declare class QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference;
}
export interface QuicksightDashboardSourceEntitySourceTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}
    */
    readonly arn: string;
    /**
    * data_set_references block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}
    */
    readonly dataSetReferences: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable;
}
export declare function quicksightDashboardSourceEntitySourceTemplateToTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateOutputReference | QuicksightDashboardSourceEntitySourceTemplate): any;
export declare function quicksightDashboardSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightDashboardSourceEntitySourceTemplateOutputReference | QuicksightDashboardSourceEntitySourceTemplate): any;
export declare class QuicksightDashboardSourceEntitySourceTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardSourceEntitySourceTemplate | undefined;
    set internalValue(value: QuicksightDashboardSourceEntitySourceTemplate | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _dataSetReferences;
    get dataSetReferences(): QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList;
    putDataSetReferences(value: QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable): void;
    get dataSetReferencesInput(): cdktf.IResolvable | QuicksightDashboardSourceEntitySourceTemplateDataSetReferences[] | undefined;
}
export interface QuicksightDashboardSourceEntity {
    /**
    * source_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}
    */
    readonly sourceTemplate?: QuicksightDashboardSourceEntitySourceTemplate;
}
export declare function quicksightDashboardSourceEntityToTerraform(struct?: QuicksightDashboardSourceEntityOutputReference | QuicksightDashboardSourceEntity): any;
export declare function quicksightDashboardSourceEntityToHclTerraform(struct?: QuicksightDashboardSourceEntityOutputReference | QuicksightDashboardSourceEntity): any;
export declare class QuicksightDashboardSourceEntityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardSourceEntity | undefined;
    set internalValue(value: QuicksightDashboardSourceEntity | undefined);
    private _sourceTemplate;
    get sourceTemplate(): QuicksightDashboardSourceEntitySourceTemplateOutputReference;
    putSourceTemplate(value: QuicksightDashboardSourceEntitySourceTemplate): void;
    resetSourceTemplate(): void;
    get sourceTemplateInput(): QuicksightDashboardSourceEntitySourceTemplate | undefined;
}
export interface QuicksightDashboardTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}
    */
    readonly update?: string;
}
export declare function quicksightDashboardTimeoutsToTerraform(struct?: QuicksightDashboardTimeouts | cdktf.IResolvable): any;
export declare function quicksightDashboardTimeoutsToHclTerraform(struct?: QuicksightDashboardTimeouts | cdktf.IResolvable): any;
export declare class QuicksightDashboardTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightDashboardTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightDashboardTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard aws_quicksight_dashboard}
*/
export declare class QuicksightDashboard extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_dashboard";
    /**
    * Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightDashboard to import
    * @param importFromId The id of the existing QuicksightDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightDashboard to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_dashboard aws_quicksight_dashboard} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightDashboardConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightDashboardConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    private _dashboardId?;
    get dashboardId(): string;
    set dashboardId(value: string);
    get dashboardIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastPublishedTime(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get sourceEntityArn(): string;
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
    private _themeArn?;
    get themeArn(): string;
    set themeArn(value: string);
    resetThemeArn(): void;
    get themeArnInput(): string | undefined;
    private _versionDescription?;
    get versionDescription(): string;
    set versionDescription(value: string);
    get versionDescriptionInput(): string | undefined;
    get versionNumber(): number;
    private _dashboardPublishOptions;
    get dashboardPublishOptions(): QuicksightDashboardDashboardPublishOptionsOutputReference;
    putDashboardPublishOptions(value: QuicksightDashboardDashboardPublishOptions): void;
    resetDashboardPublishOptions(): void;
    get dashboardPublishOptionsInput(): QuicksightDashboardDashboardPublishOptions | undefined;
    private _definition?;
    get definition(): any;
    set definition(value: any);
    resetDefinition(): void;
    get definitionInput(): any;
    private _parameters;
    get parameters(): QuicksightDashboardParametersOutputReference;
    putParameters(value: QuicksightDashboardParameters): void;
    resetParameters(): void;
    get parametersInput(): QuicksightDashboardParameters | undefined;
    private _permissions;
    get permissions(): QuicksightDashboardPermissionsList;
    putPermissions(value: QuicksightDashboardPermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightDashboardPermissions[] | undefined;
    private _sourceEntity;
    get sourceEntity(): QuicksightDashboardSourceEntityOutputReference;
    putSourceEntity(value: QuicksightDashboardSourceEntity): void;
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightDashboardSourceEntity | undefined;
    private _timeouts;
    get timeouts(): QuicksightDashboardTimeoutsOutputReference;
    putTimeouts(value: QuicksightDashboardTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightDashboardTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
