/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDevopsguruNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}
    */
    readonly filters?: DataAwsDevopsguruNotificationChannelFilters[] | cdktf.IResolvable;
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}
    */
    readonly sns?: DataAwsDevopsguruNotificationChannelSns[] | cdktf.IResolvable;
}
export interface DataAwsDevopsguruNotificationChannelFilters {
}
export declare function dataAwsDevopsguruNotificationChannelFiltersToTerraform(struct?: DataAwsDevopsguruNotificationChannelFilters | cdktf.IResolvable): any;
export declare function dataAwsDevopsguruNotificationChannelFiltersToHclTerraform(struct?: DataAwsDevopsguruNotificationChannelFilters | cdktf.IResolvable): any;
export declare class DataAwsDevopsguruNotificationChannelFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDevopsguruNotificationChannelFilters | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsDevopsguruNotificationChannelFilters | cdktf.IResolvable | undefined);
    get messageTypes(): string[];
    get severities(): string[];
}
export declare class DataAwsDevopsguruNotificationChannelFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsDevopsguruNotificationChannelFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDevopsguruNotificationChannelFiltersOutputReference;
}
export interface DataAwsDevopsguruNotificationChannelSns {
}
export declare function dataAwsDevopsguruNotificationChannelSnsToTerraform(struct?: DataAwsDevopsguruNotificationChannelSns | cdktf.IResolvable): any;
export declare function dataAwsDevopsguruNotificationChannelSnsToHclTerraform(struct?: DataAwsDevopsguruNotificationChannelSns | cdktf.IResolvable): any;
export declare class DataAwsDevopsguruNotificationChannelSnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDevopsguruNotificationChannelSns | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsDevopsguruNotificationChannelSns | cdktf.IResolvable | undefined);
    get topicArn(): string;
}
export declare class DataAwsDevopsguruNotificationChannelSnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsDevopsguruNotificationChannelSns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDevopsguruNotificationChannelSnsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel}
*/
export declare class DataAwsDevopsguruNotificationChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_devopsguru_notification_channel";
    /**
    * Generates CDKTF code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDevopsguruNotificationChannel to import
    * @param importFromId The id of the existing DataAwsDevopsguruNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDevopsguruNotificationChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDevopsguruNotificationChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDevopsguruNotificationChannelConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _filters;
    get filters(): DataAwsDevopsguruNotificationChannelFiltersList;
    putFilters(value: DataAwsDevopsguruNotificationChannelFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | DataAwsDevopsguruNotificationChannelFilters[] | undefined;
    private _sns;
    get sns(): DataAwsDevopsguruNotificationChannelSnsList;
    putSns(value: DataAwsDevopsguruNotificationChannelSns[] | cdktf.IResolvable): void;
    resetSns(): void;
    get snsInput(): cdktf.IResolvable | DataAwsDevopsguruNotificationChannelSns[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
