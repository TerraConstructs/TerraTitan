/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudwatchEventBusesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_event_buses#name_prefix DataAwsCloudwatchEventBuses#name_prefix}
    */
    readonly namePrefix?: string;
}
export interface DataAwsCloudwatchEventBusesEventBuses {
}
export declare function dataAwsCloudwatchEventBusesEventBusesToTerraform(struct?: DataAwsCloudwatchEventBusesEventBuses): any;
export declare function dataAwsCloudwatchEventBusesEventBusesToHclTerraform(struct?: DataAwsCloudwatchEventBusesEventBuses): any;
export declare class DataAwsCloudwatchEventBusesEventBusesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudwatchEventBusesEventBuses | undefined;
    set internalValue(value: DataAwsCloudwatchEventBusesEventBuses | undefined);
    get arn(): string;
    get creationTime(): string;
    get description(): string;
    get lastModifiedTime(): string;
    get name(): string;
    get policy(): string;
}
export declare class DataAwsCloudwatchEventBusesEventBusesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudwatchEventBusesEventBusesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_event_buses aws_cloudwatch_event_buses}
*/
export declare class DataAwsCloudwatchEventBuses extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudwatch_event_buses";
    /**
    * Generates CDKTF code for importing a DataAwsCloudwatchEventBuses resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudwatchEventBuses to import
    * @param importFromId The id of the existing DataAwsCloudwatchEventBuses that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_event_buses#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudwatchEventBuses to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cloudwatch_event_buses aws_cloudwatch_event_buses} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventBusesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudwatchEventBusesConfig);
    private _eventBuses;
    get eventBuses(): DataAwsCloudwatchEventBusesEventBusesList;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
