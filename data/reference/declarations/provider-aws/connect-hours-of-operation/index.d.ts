/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectHoursOfOperationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}
    */
    readonly timeZone: string;
    /**
    * config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}
    */
    readonly config: ConnectHoursOfOperationConfigA[] | cdktf.IResolvable;
}
export interface ConnectHoursOfOperationConfigEndTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
    */
    readonly hours: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
    */
    readonly minutes: number;
}
export declare function connectHoursOfOperationConfigEndTimeToTerraform(struct?: ConnectHoursOfOperationConfigEndTimeOutputReference | ConnectHoursOfOperationConfigEndTime): any;
export declare function connectHoursOfOperationConfigEndTimeToHclTerraform(struct?: ConnectHoursOfOperationConfigEndTimeOutputReference | ConnectHoursOfOperationConfigEndTime): any;
export declare class ConnectHoursOfOperationConfigEndTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectHoursOfOperationConfigEndTime | undefined;
    set internalValue(value: ConnectHoursOfOperationConfigEndTime | undefined);
    private _hours?;
    get hours(): number;
    set hours(value: number);
    get hoursInput(): number | undefined;
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number | undefined;
}
export interface ConnectHoursOfOperationConfigStartTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}
    */
    readonly hours: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}
    */
    readonly minutes: number;
}
export declare function connectHoursOfOperationConfigStartTimeToTerraform(struct?: ConnectHoursOfOperationConfigStartTimeOutputReference | ConnectHoursOfOperationConfigStartTime): any;
export declare function connectHoursOfOperationConfigStartTimeToHclTerraform(struct?: ConnectHoursOfOperationConfigStartTimeOutputReference | ConnectHoursOfOperationConfigStartTime): any;
export declare class ConnectHoursOfOperationConfigStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectHoursOfOperationConfigStartTime | undefined;
    set internalValue(value: ConnectHoursOfOperationConfigStartTime | undefined);
    private _hours?;
    get hours(): number;
    set hours(value: number);
    get hoursInput(): number | undefined;
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number | undefined;
}
export interface ConnectHoursOfOperationConfigA {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}
    */
    readonly day: string;
    /**
    * end_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}
    */
    readonly endTime: ConnectHoursOfOperationConfigEndTime;
    /**
    * start_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}
    */
    readonly startTime: ConnectHoursOfOperationConfigStartTime;
}
export declare function connectHoursOfOperationConfigAToTerraform(struct?: ConnectHoursOfOperationConfigA | cdktf.IResolvable): any;
export declare function connectHoursOfOperationConfigAToHclTerraform(struct?: ConnectHoursOfOperationConfigA | cdktf.IResolvable): any;
export declare class ConnectHoursOfOperationConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectHoursOfOperationConfigA | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectHoursOfOperationConfigA | cdktf.IResolvable | undefined);
    private _day?;
    get day(): string;
    set day(value: string);
    get dayInput(): string | undefined;
    private _endTime;
    get endTime(): ConnectHoursOfOperationConfigEndTimeOutputReference;
    putEndTime(value: ConnectHoursOfOperationConfigEndTime): void;
    get endTimeInput(): ConnectHoursOfOperationConfigEndTime | undefined;
    private _startTime;
    get startTime(): ConnectHoursOfOperationConfigStartTimeOutputReference;
    putStartTime(value: ConnectHoursOfOperationConfigStartTime): void;
    get startTimeInput(): ConnectHoursOfOperationConfigStartTime | undefined;
}
export declare class ConnectHoursOfOperationConfigAList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectHoursOfOperationConfigA[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectHoursOfOperationConfigAOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation aws_connect_hours_of_operation}
*/
export declare class ConnectHoursOfOperation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_hours_of_operation";
    /**
    * Generates CDKTF code for importing a ConnectHoursOfOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectHoursOfOperation to import
    * @param importFromId The id of the existing ConnectHoursOfOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectHoursOfOperation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_hours_of_operation aws_connect_hours_of_operation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectHoursOfOperationConfig
    */
    constructor(scope: Construct, id: string, config: ConnectHoursOfOperationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get hoursOfOperationId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    get timeZoneInput(): string | undefined;
    private _config;
    get config(): ConnectHoursOfOperationConfigAList;
    putConfig(value: ConnectHoursOfOperationConfigA[] | cdktf.IResolvable): void;
    get configInput(): cdktf.IResolvable | ConnectHoursOfOperationConfigA[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
