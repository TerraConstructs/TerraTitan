/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmcontactsRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_rotation#arn DataAwsSsmcontactsRotation#arn}
    */
    readonly arn: string;
}
export interface DataAwsSsmcontactsRotationRecurrenceDailySettings {
}
export declare function dataAwsSsmcontactsRotationRecurrenceDailySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceDailySettings): any;
export declare function dataAwsSsmcontactsRotationRecurrenceDailySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceDailySettings): any;
export declare class DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceDailySettings | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceDailySettings | undefined);
    get hourOfDay(): number;
    get minuteOfHour(): number;
}
export declare class DataAwsSsmcontactsRotationRecurrenceDailySettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceDailySettingsOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {
}
export declare function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime): any;
export declare function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime): any;
export declare class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | undefined);
    get hourOfDay(): number;
    get minuteOfHour(): number;
}
export declare class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceMonthlySettings {
}
export declare function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettings): any;
export declare function dataAwsSsmcontactsRotationRecurrenceMonthlySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceMonthlySettings): any;
export declare class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceMonthlySettings | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceMonthlySettings | undefined);
    get dayOfMonth(): number;
    private _handOffTime;
    get handOffTime(): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList;
}
export declare class DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {
}
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd): any;
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd): any;
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | undefined);
    get hourOfDay(): number;
    get minuteOfHour(): number;
}
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {
}
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart): any;
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart): any;
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | undefined);
    get hourOfDay(): number;
    get minuteOfHour(): number;
}
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
}
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any;
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes): any;
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | undefined);
    private _end;
    get end(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList;
    private _start;
    get start(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList;
}
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceShiftCoverages {
}
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoverages): any;
export declare function dataAwsSsmcontactsRotationRecurrenceShiftCoveragesToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceShiftCoverages): any;
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceShiftCoverages | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceShiftCoverages | undefined);
    private _coverageTimes;
    get coverageTimes(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList;
    get mapBlockKey(): string;
}
export declare class DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {
}
export declare function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime): any;
export declare function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime): any;
export declare class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | undefined);
    get hourOfDay(): number;
    get minuteOfHour(): number;
}
export declare class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrenceWeeklySettings {
}
export declare function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsToTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettings): any;
export declare function dataAwsSsmcontactsRotationRecurrenceWeeklySettingsToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrenceWeeklySettings): any;
export declare class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrenceWeeklySettings | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrenceWeeklySettings | undefined);
    get dayOfWeek(): string;
    private _handOffTime;
    get handOffTime(): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList;
}
export declare class DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsOutputReference;
}
export interface DataAwsSsmcontactsRotationRecurrence {
}
export declare function dataAwsSsmcontactsRotationRecurrenceToTerraform(struct?: DataAwsSsmcontactsRotationRecurrence): any;
export declare function dataAwsSsmcontactsRotationRecurrenceToHclTerraform(struct?: DataAwsSsmcontactsRotationRecurrence): any;
export declare class DataAwsSsmcontactsRotationRecurrenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsRotationRecurrence | undefined;
    set internalValue(value: DataAwsSsmcontactsRotationRecurrence | undefined);
    private _dailySettings;
    get dailySettings(): DataAwsSsmcontactsRotationRecurrenceDailySettingsList;
    private _monthlySettings;
    get monthlySettings(): DataAwsSsmcontactsRotationRecurrenceMonthlySettingsList;
    get numberOfOnCalls(): number;
    get recurrenceMultiplier(): number;
    private _shiftCoverages;
    get shiftCoverages(): DataAwsSsmcontactsRotationRecurrenceShiftCoveragesList;
    private _weeklySettings;
    get weeklySettings(): DataAwsSsmcontactsRotationRecurrenceWeeklySettingsList;
}
export declare class DataAwsSsmcontactsRotationRecurrenceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmcontactsRotationRecurrenceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation}
*/
export declare class DataAwsSsmcontactsRotation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssmcontacts_rotation";
    /**
    * Generates CDKTF code for importing a DataAwsSsmcontactsRotation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmcontactsRotation to import
    * @param importFromId The id of the existing DataAwsSsmcontactsRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmcontactsRotation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_rotation aws_ssmcontacts_rotation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmcontactsRotationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmcontactsRotationConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get contactIds(): string[];
    get id(): string;
    get name(): string;
    private _recurrence;
    get recurrence(): DataAwsSsmcontactsRotationRecurrenceList;
    get startTime(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    get timeZoneId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
