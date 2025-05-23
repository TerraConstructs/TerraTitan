/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightRefreshScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}
    */
    readonly scheduleId: string;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}
    */
    readonly schedule?: QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable;
}
export interface QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}
    */
    readonly dayOfMonth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}
    */
    readonly dayOfWeek?: string;
}
export declare function quicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayToTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable): any;
export declare function quicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayToHclTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable): any;
export declare class QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay | cdktf.IResolvable | undefined);
    private _dayOfMonth?;
    get dayOfMonth(): string;
    set dayOfMonth(value: string);
    resetDayOfMonth(): void;
    get dayOfMonthInput(): string | undefined;
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    resetDayOfWeek(): void;
    get dayOfWeekInput(): string | undefined;
}
export declare class QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference;
}
export interface QuicksightRefreshScheduleScheduleScheduleFrequency {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}
    */
    readonly interval: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}
    */
    readonly timeOfTheDay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#timezone QuicksightRefreshSchedule#timezone}
    */
    readonly timezone?: string;
    /**
    * refresh_on_day block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}
    */
    readonly refreshOnDay?: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable;
}
export declare function quicksightRefreshScheduleScheduleScheduleFrequencyToTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable): any;
export declare function quicksightRefreshScheduleScheduleScheduleFrequencyToHclTerraform(struct?: QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable): any;
export declare class QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightRefreshScheduleScheduleScheduleFrequency | cdktf.IResolvable | undefined);
    private _interval?;
    get interval(): string;
    set interval(value: string);
    get intervalInput(): string | undefined;
    private _timeOfTheDay?;
    get timeOfTheDay(): string;
    set timeOfTheDay(value: string);
    resetTimeOfTheDay(): void;
    get timeOfTheDayInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
    private _refreshOnDay;
    get refreshOnDay(): QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayList;
    putRefreshOnDay(value: QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | cdktf.IResolvable): void;
    resetRefreshOnDay(): void;
    get refreshOnDayInput(): cdktf.IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay[] | undefined;
}
export declare class QuicksightRefreshScheduleScheduleScheduleFrequencyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference;
}
export interface QuicksightRefreshScheduleSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}
    */
    readonly refreshType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}
    */
    readonly startAfterDateTime?: string;
    /**
    * schedule_frequency block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}
    */
    readonly scheduleFrequency?: QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable;
}
export declare function quicksightRefreshScheduleScheduleToTerraform(struct?: QuicksightRefreshScheduleSchedule | cdktf.IResolvable): any;
export declare function quicksightRefreshScheduleScheduleToHclTerraform(struct?: QuicksightRefreshScheduleSchedule | cdktf.IResolvable): any;
export declare class QuicksightRefreshScheduleScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightRefreshScheduleSchedule | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightRefreshScheduleSchedule | cdktf.IResolvable | undefined);
    private _refreshType?;
    get refreshType(): string;
    set refreshType(value: string);
    get refreshTypeInput(): string | undefined;
    private _startAfterDateTime?;
    get startAfterDateTime(): string;
    set startAfterDateTime(value: string);
    resetStartAfterDateTime(): void;
    get startAfterDateTimeInput(): string | undefined;
    private _scheduleFrequency;
    get scheduleFrequency(): QuicksightRefreshScheduleScheduleScheduleFrequencyList;
    putScheduleFrequency(value: QuicksightRefreshScheduleScheduleScheduleFrequency[] | cdktf.IResolvable): void;
    resetScheduleFrequency(): void;
    get scheduleFrequencyInput(): cdktf.IResolvable | QuicksightRefreshScheduleScheduleScheduleFrequency[] | undefined;
}
export declare class QuicksightRefreshScheduleScheduleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightRefreshScheduleScheduleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule}
*/
export declare class QuicksightRefreshSchedule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_refresh_schedule";
    /**
    * Generates CDKTF code for importing a QuicksightRefreshSchedule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightRefreshSchedule to import
    * @param importFromId The id of the existing QuicksightRefreshSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightRefreshSchedule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_refresh_schedule aws_quicksight_refresh_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightRefreshScheduleConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightRefreshScheduleConfig);
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
    get id(): string;
    private _scheduleId?;
    get scheduleId(): string;
    set scheduleId(value: string);
    get scheduleIdInput(): string | undefined;
    private _schedule;
    get schedule(): QuicksightRefreshScheduleScheduleList;
    putSchedule(value: QuicksightRefreshScheduleSchedule[] | cdktf.IResolvable): void;
    resetSchedule(): void;
    get scheduleInput(): cdktf.IResolvable | QuicksightRefreshScheduleSchedule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
