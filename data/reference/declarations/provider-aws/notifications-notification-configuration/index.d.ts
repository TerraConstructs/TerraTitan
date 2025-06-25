/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationsNotificationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration#aggregation_duration NotificationsNotificationConfiguration#aggregation_duration}
    */
    readonly aggregationDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration#description NotificationsNotificationConfiguration#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration#name NotificationsNotificationConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration#tags NotificationsNotificationConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration aws_notifications_notification_configuration}
*/
export declare class NotificationsNotificationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_notifications_notification_configuration";
    /**
    * Generates CDKTF code for importing a NotificationsNotificationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationsNotificationConfiguration to import
    * @param importFromId The id of the existing NotificationsNotificationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationsNotificationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_configuration aws_notifications_notification_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationsNotificationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: NotificationsNotificationConfigurationConfig);
    private _aggregationDuration?;
    get aggregationDuration(): string;
    set aggregationDuration(value: string);
    resetAggregationDuration(): void;
    get aggregationDurationInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
