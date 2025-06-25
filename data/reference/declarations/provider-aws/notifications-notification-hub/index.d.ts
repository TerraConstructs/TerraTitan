/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationsNotificationHubConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub#notification_hub_region NotificationsNotificationHub#notification_hub_region}
    */
    readonly notificationHubRegion: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub#timeouts NotificationsNotificationHub#timeouts}
    */
    readonly timeouts?: NotificationsNotificationHubTimeouts;
}
export interface NotificationsNotificationHubTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub#create NotificationsNotificationHub#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub#delete NotificationsNotificationHub#delete}
    */
    readonly delete?: string;
}
export declare function notificationsNotificationHubTimeoutsToTerraform(struct?: NotificationsNotificationHubTimeouts | cdktf.IResolvable): any;
export declare function notificationsNotificationHubTimeoutsToHclTerraform(struct?: NotificationsNotificationHubTimeouts | cdktf.IResolvable): any;
export declare class NotificationsNotificationHubTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NotificationsNotificationHubTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NotificationsNotificationHubTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub aws_notifications_notification_hub}
*/
export declare class NotificationsNotificationHub extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_notifications_notification_hub";
    /**
    * Generates CDKTF code for importing a NotificationsNotificationHub resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationsNotificationHub to import
    * @param importFromId The id of the existing NotificationsNotificationHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationsNotificationHub to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_notification_hub aws_notifications_notification_hub} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationsNotificationHubConfig
    */
    constructor(scope: Construct, id: string, config: NotificationsNotificationHubConfig);
    private _notificationHubRegion?;
    get notificationHubRegion(): string;
    set notificationHubRegion(value: string);
    get notificationHubRegionInput(): string | undefined;
    private _timeouts;
    get timeouts(): NotificationsNotificationHubTimeoutsOutputReference;
    putTimeouts(value: NotificationsNotificationHubTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NotificationsNotificationHubTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
