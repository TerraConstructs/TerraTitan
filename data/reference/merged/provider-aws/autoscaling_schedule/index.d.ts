/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingScheduleConfig extends cdktf.TerraformMetaArguments {
    /** (Required) The name of the Auto Scaling group. */
    readonly autoscalingGroupName: string;
    /** (Optional) The initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. Set to `-1` if you don't want to change the desired capacity at the scheduled time. Defaults to `0`. */
    readonly desiredCapacity?: number;
    /** (Optional) The date and time for the recurring schedule to end, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`). */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The maximum size of the Auto Scaling group. Set to `-1` if you don't want to change the maximum size at the scheduled time. Defaults to `0`. */
    readonly maxSize?: number;
    /** (Optional) The minimum size of the Auto Scaling group. Set to `-1` if you don't want to change the minimum size at the scheduled time. Defaults to `0`. */
    readonly minSize?: number;
    /** (Optional) The recurring schedule for this action specified using the Unix cron syntax format. */
    readonly recurrence?: string;
    /** (Required) The name of this scaling action. The following arguments are optional: */
    readonly scheduledActionName: string;
    /** (Optional) The date and time for the recurring schedule to start, in UTC with the format `"YYYY-MM-DDThh:mm:ssZ"` (e.g. `"2021-06-01T00:00:00Z"`). */
    readonly startTime?: string;
    /** (Optional)  Specifies the time zone for a cron expression. Valid values are the canonical names of the IANA time zones (such as `Etc/GMT+9` or `Pacific/Tahiti`). ~> **NOTE:** When `startTime` and `endTime` are specified with `recurrence` , they form the boundaries of when the recurring action will start and stop. */
    readonly timeZone?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_schedule aws_autoscaling_schedule}
*/
export declare class AutoscalingSchedule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_schedule";
    /**
    * Generates CDKTF code for importing a AutoscalingSchedule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingSchedule to import
    * @param importFromId The id of the existing AutoscalingSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingSchedule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/autoscaling_schedule aws_autoscaling_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingScheduleConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingScheduleConfig);
    get arn(): string;
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number | undefined;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    resetMaxSize(): void;
    get maxSizeInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _recurrence?;
    get recurrence(): string;
    set recurrence(value: string);
    resetRecurrence(): void;
    get recurrenceInput(): string | undefined;
    private _scheduledActionName?;
    get scheduledActionName(): string;
    set scheduledActionName(value: string);
    get scheduledActionNameInput(): string | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    resetTimeZone(): void;
    get timeZoneInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
