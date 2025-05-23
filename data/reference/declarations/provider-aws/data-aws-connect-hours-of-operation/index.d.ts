/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectHoursOfOperationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#hours_of_operation_id DataAwsConnectHoursOfOperation#hours_of_operation_id}
    */
    readonly hoursOfOperationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#id DataAwsConnectHoursOfOperation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#instance_id DataAwsConnectHoursOfOperation#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#name DataAwsConnectHoursOfOperation#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#tags DataAwsConnectHoursOfOperation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsConnectHoursOfOperationConfigEndTime {
}
export declare function dataAwsConnectHoursOfOperationConfigEndTimeToTerraform(struct?: DataAwsConnectHoursOfOperationConfigEndTime): any;
export declare function dataAwsConnectHoursOfOperationConfigEndTimeToHclTerraform(struct?: DataAwsConnectHoursOfOperationConfigEndTime): any;
export declare class DataAwsConnectHoursOfOperationConfigEndTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectHoursOfOperationConfigEndTime | undefined;
    set internalValue(value: DataAwsConnectHoursOfOperationConfigEndTime | undefined);
    get hours(): number;
    get minutes(): number;
}
export declare class DataAwsConnectHoursOfOperationConfigEndTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectHoursOfOperationConfigEndTimeOutputReference;
}
export interface DataAwsConnectHoursOfOperationConfigStartTime {
}
export declare function dataAwsConnectHoursOfOperationConfigStartTimeToTerraform(struct?: DataAwsConnectHoursOfOperationConfigStartTime): any;
export declare function dataAwsConnectHoursOfOperationConfigStartTimeToHclTerraform(struct?: DataAwsConnectHoursOfOperationConfigStartTime): any;
export declare class DataAwsConnectHoursOfOperationConfigStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectHoursOfOperationConfigStartTime | undefined;
    set internalValue(value: DataAwsConnectHoursOfOperationConfigStartTime | undefined);
    get hours(): number;
    get minutes(): number;
}
export declare class DataAwsConnectHoursOfOperationConfigStartTimeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectHoursOfOperationConfigStartTimeOutputReference;
}
export interface DataAwsConnectHoursOfOperationConfigA {
}
export declare function dataAwsConnectHoursOfOperationConfigAToTerraform(struct?: DataAwsConnectHoursOfOperationConfigA): any;
export declare function dataAwsConnectHoursOfOperationConfigAToHclTerraform(struct?: DataAwsConnectHoursOfOperationConfigA): any;
export declare class DataAwsConnectHoursOfOperationConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectHoursOfOperationConfigA | undefined;
    set internalValue(value: DataAwsConnectHoursOfOperationConfigA | undefined);
    get day(): string;
    private _endTime;
    get endTime(): DataAwsConnectHoursOfOperationConfigEndTimeList;
    private _startTime;
    get startTime(): DataAwsConnectHoursOfOperationConfigStartTimeList;
}
export declare class DataAwsConnectHoursOfOperationConfigAList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectHoursOfOperationConfigAOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation aws_connect_hours_of_operation}
*/
export declare class DataAwsConnectHoursOfOperation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_hours_of_operation";
    /**
    * Generates CDKTF code for importing a DataAwsConnectHoursOfOperation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectHoursOfOperation to import
    * @param importFromId The id of the existing DataAwsConnectHoursOfOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectHoursOfOperation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_hours_of_operation aws_connect_hours_of_operation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectHoursOfOperationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectHoursOfOperationConfig);
    get arn(): string;
    private _config;
    get config(): DataAwsConnectHoursOfOperationConfigAList;
    get description(): string;
    private _hoursOfOperationId?;
    get hoursOfOperationId(): string;
    set hoursOfOperationId(value: string);
    resetHoursOfOperationId(): void;
    get hoursOfOperationIdInput(): string | undefined;
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
    resetName(): void;
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
    get timeZone(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
