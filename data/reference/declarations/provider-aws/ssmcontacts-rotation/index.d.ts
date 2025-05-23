/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmcontactsRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}
    */
    readonly contactIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}
    */
    readonly startTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}
    */
    readonly timeZoneId: string;
    /**
    * recurrence block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}
    */
    readonly recurrence?: SsmcontactsRotationRecurrence[] | cdktf.IResolvable;
}
export interface SsmcontactsRotationRecurrenceDailySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
    */
    readonly minuteOfHour: number;
}
export declare function ssmcontactsRotationRecurrenceDailySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceDailySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceDailySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceDailySettings | cdktf.IResolvable | undefined);
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    get minuteOfHourInput(): number | undefined;
}
export declare class SsmcontactsRotationRecurrenceDailySettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceDailySettingsOutputReference;
}
export interface SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
    */
    readonly minuteOfHour: number;
}
export declare function ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceMonthlySettingsHandOffTimeToHclTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime | cdktf.IResolvable | undefined);
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    get minuteOfHourInput(): number | undefined;
}
export declare class SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference;
}
export interface SsmcontactsRotationRecurrenceMonthlySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}
    */
    readonly dayOfMonth: number;
    /**
    * hand_off_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}
    */
    readonly handOffTime?: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable;
}
export declare function ssmcontactsRotationRecurrenceMonthlySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceMonthlySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceMonthlySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceMonthlySettings | cdktf.IResolvable | undefined);
    private _dayOfMonth?;
    get dayOfMonth(): number;
    set dayOfMonth(value: number);
    get dayOfMonthInput(): number | undefined;
    private _handOffTime;
    get handOffTime(): SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList;
    putHandOffTime(value: SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | cdktf.IResolvable): void;
    resetHandOffTime(): void;
    get handOffTimeInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime[] | undefined;
}
export declare class SsmcontactsRotationRecurrenceMonthlySettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceMonthlySettingsOutputReference;
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
    */
    readonly minuteOfHour: number;
}
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd | cdktf.IResolvable | undefined);
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    get minuteOfHourInput(): number | undefined;
}
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference;
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
    */
    readonly minuteOfHour: number;
}
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart | cdktf.IResolvable | undefined);
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    get minuteOfHourInput(): number | undefined;
}
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference;
}
export interface SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
    /**
    * end block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#end SsmcontactsRotation#end}
    */
    readonly end?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable;
    /**
    * start block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#start SsmcontactsRotation#start}
    */
    readonly start?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable;
}
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceShiftCoveragesCoverageTimesToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes | cdktf.IResolvable | undefined);
    private _end;
    get end(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList;
    putEnd(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | cdktf.IResolvable): void;
    resetEnd(): void;
    get endInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd[] | undefined;
    private _start;
    get start(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList;
    putStart(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | cdktf.IResolvable): void;
    resetStart(): void;
    get startInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart[] | undefined;
}
export declare class SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference;
}
export interface SsmcontactsRotationRecurrenceShiftCoverages {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * coverage_times block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}
    */
    readonly coverageTimes?: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable;
}
export declare function ssmcontactsRotationRecurrenceShiftCoveragesToTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceShiftCoveragesToHclTerraform(struct?: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceShiftCoveragesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceShiftCoverages | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _coverageTimes;
    get coverageTimes(): SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList;
    putCoverageTimes(value: SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | cdktf.IResolvable): void;
    resetCoverageTimes(): void;
    get coverageTimesInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes[] | undefined;
}
export declare class SsmcontactsRotationRecurrenceShiftCoveragesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceShiftCoveragesOutputReference;
}
export interface SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}
    */
    readonly hourOfDay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}
    */
    readonly minuteOfHour: number;
}
export declare function ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceWeeklySettingsHandOffTimeToHclTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime | cdktf.IResolvable | undefined);
    private _hourOfDay?;
    get hourOfDay(): number;
    set hourOfDay(value: number);
    get hourOfDayInput(): number | undefined;
    private _minuteOfHour?;
    get minuteOfHour(): number;
    set minuteOfHour(value: number);
    get minuteOfHourInput(): number | undefined;
}
export declare class SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference;
}
export interface SsmcontactsRotationRecurrenceWeeklySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}
    */
    readonly dayOfWeek: string;
    /**
    * hand_off_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}
    */
    readonly handOffTime?: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable;
}
export declare function ssmcontactsRotationRecurrenceWeeklySettingsToTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceWeeklySettingsToHclTerraform(struct?: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceWeeklySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrenceWeeklySettings | cdktf.IResolvable | undefined);
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    get dayOfWeekInput(): string | undefined;
    private _handOffTime;
    get handOffTime(): SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList;
    putHandOffTime(value: SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | cdktf.IResolvable): void;
    resetHandOffTime(): void;
    get handOffTimeInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime[] | undefined;
}
export declare class SsmcontactsRotationRecurrenceWeeklySettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceWeeklySettingsOutputReference;
}
export interface SsmcontactsRotationRecurrence {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}
    */
    readonly numberOfOnCalls: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}
    */
    readonly recurrenceMultiplier: number;
    /**
    * daily_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}
    */
    readonly dailySettings?: SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable;
    /**
    * monthly_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}
    */
    readonly monthlySettings?: SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable;
    /**
    * shift_coverages block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}
    */
    readonly shiftCoverages?: SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable;
    /**
    * weekly_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}
    */
    readonly weeklySettings?: SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable;
}
export declare function ssmcontactsRotationRecurrenceToTerraform(struct?: SsmcontactsRotationRecurrence | cdktf.IResolvable): any;
export declare function ssmcontactsRotationRecurrenceToHclTerraform(struct?: SsmcontactsRotationRecurrence | cdktf.IResolvable): any;
export declare class SsmcontactsRotationRecurrenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsRotationRecurrence | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsRotationRecurrence | cdktf.IResolvable | undefined);
    private _numberOfOnCalls?;
    get numberOfOnCalls(): number;
    set numberOfOnCalls(value: number);
    get numberOfOnCallsInput(): number | undefined;
    private _recurrenceMultiplier?;
    get recurrenceMultiplier(): number;
    set recurrenceMultiplier(value: number);
    get recurrenceMultiplierInput(): number | undefined;
    private _dailySettings;
    get dailySettings(): SsmcontactsRotationRecurrenceDailySettingsList;
    putDailySettings(value: SsmcontactsRotationRecurrenceDailySettings[] | cdktf.IResolvable): void;
    resetDailySettings(): void;
    get dailySettingsInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceDailySettings[] | undefined;
    private _monthlySettings;
    get monthlySettings(): SsmcontactsRotationRecurrenceMonthlySettingsList;
    putMonthlySettings(value: SsmcontactsRotationRecurrenceMonthlySettings[] | cdktf.IResolvable): void;
    resetMonthlySettings(): void;
    get monthlySettingsInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceMonthlySettings[] | undefined;
    private _shiftCoverages;
    get shiftCoverages(): SsmcontactsRotationRecurrenceShiftCoveragesList;
    putShiftCoverages(value: SsmcontactsRotationRecurrenceShiftCoverages[] | cdktf.IResolvable): void;
    resetShiftCoverages(): void;
    get shiftCoveragesInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceShiftCoverages[] | undefined;
    private _weeklySettings;
    get weeklySettings(): SsmcontactsRotationRecurrenceWeeklySettingsList;
    putWeeklySettings(value: SsmcontactsRotationRecurrenceWeeklySettings[] | cdktf.IResolvable): void;
    resetWeeklySettings(): void;
    get weeklySettingsInput(): cdktf.IResolvable | SsmcontactsRotationRecurrenceWeeklySettings[] | undefined;
}
export declare class SsmcontactsRotationRecurrenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsRotationRecurrence[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsRotationRecurrenceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}
*/
export declare class SsmcontactsRotation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmcontacts_rotation";
    /**
    * Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmcontactsRotation to import
    * @param importFromId The id of the existing SsmcontactsRotation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmcontactsRotation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsRotationConfig
    */
    constructor(scope: Construct, id: string, config: SsmcontactsRotationConfig);
    get arn(): string;
    private _contactIds?;
    get contactIds(): string[];
    set contactIds(value: string[]);
    get contactIdsInput(): string[] | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeZoneId?;
    get timeZoneId(): string;
    set timeZoneId(value: string);
    get timeZoneIdInput(): string | undefined;
    private _recurrence;
    get recurrence(): SsmcontactsRotationRecurrenceList;
    putRecurrence(value: SsmcontactsRotationRecurrence[] | cdktf.IResolvable): void;
    resetRecurrence(): void;
    get recurrenceInput(): cdktf.IResolvable | SsmcontactsRotationRecurrence[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
