/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#filters DevopsguruNotificationChannel#filters}
    */
    readonly filters?: DevopsguruNotificationChannelFilters[] | cdktf.IResolvable;
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#sns DevopsguruNotificationChannel#sns}
    */
    readonly sns?: DevopsguruNotificationChannelSns[] | cdktf.IResolvable;
}
export interface DevopsguruNotificationChannelFilters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#message_types DevopsguruNotificationChannel#message_types}
    */
    readonly messageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#severities DevopsguruNotificationChannel#severities}
    */
    readonly severities?: string[];
}
export declare function devopsguruNotificationChannelFiltersToTerraform(struct?: DevopsguruNotificationChannelFilters | cdktf.IResolvable): any;
export declare function devopsguruNotificationChannelFiltersToHclTerraform(struct?: DevopsguruNotificationChannelFilters | cdktf.IResolvable): any;
export declare class DevopsguruNotificationChannelFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruNotificationChannelFilters | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruNotificationChannelFilters | cdktf.IResolvable | undefined);
    private _messageTypes?;
    get messageTypes(): string[];
    set messageTypes(value: string[]);
    resetMessageTypes(): void;
    get messageTypesInput(): string[] | undefined;
    private _severities?;
    get severities(): string[];
    set severities(value: string[]);
    resetSeverities(): void;
    get severitiesInput(): string[] | undefined;
}
export declare class DevopsguruNotificationChannelFiltersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruNotificationChannelFilters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruNotificationChannelFiltersOutputReference;
}
export interface DevopsguruNotificationChannelSns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#topic_arn DevopsguruNotificationChannel#topic_arn}
    */
    readonly topicArn: string;
}
export declare function devopsguruNotificationChannelSnsToTerraform(struct?: DevopsguruNotificationChannelSns | cdktf.IResolvable): any;
export declare function devopsguruNotificationChannelSnsToHclTerraform(struct?: DevopsguruNotificationChannelSns | cdktf.IResolvable): any;
export declare class DevopsguruNotificationChannelSnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruNotificationChannelSns | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruNotificationChannelSns | cdktf.IResolvable | undefined);
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export declare class DevopsguruNotificationChannelSnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruNotificationChannelSns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruNotificationChannelSnsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel aws_devopsguru_notification_channel}
*/
export declare class DevopsguruNotificationChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devopsguru_notification_channel";
    /**
    * Generates CDKTF code for importing a DevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevopsguruNotificationChannel to import
    * @param importFromId The id of the existing DevopsguruNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevopsguruNotificationChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_notification_channel aws_devopsguru_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruNotificationChannelConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DevopsguruNotificationChannelConfig);
    get id(): string;
    private _filters;
    get filters(): DevopsguruNotificationChannelFiltersList;
    putFilters(value: DevopsguruNotificationChannelFilters[] | cdktf.IResolvable): void;
    resetFilters(): void;
    get filtersInput(): cdktf.IResolvable | DevopsguruNotificationChannelFilters[] | undefined;
    private _sns;
    get sns(): DevopsguruNotificationChannelSnsList;
    putSns(value: DevopsguruNotificationChannelSns[] | cdktf.IResolvable): void;
    resetSns(): void;
    get snsInput(): cdktf.IResolvable | DevopsguruNotificationChannelSns[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
