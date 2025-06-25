/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationsChannelAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_channel_association#arn NotificationsChannelAssociation#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_channel_association#notification_configuration_arn NotificationsChannelAssociation#notification_configuration_arn}
    */
    readonly notificationConfigurationArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_channel_association aws_notifications_channel_association}
*/
export declare class NotificationsChannelAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_notifications_channel_association";
    /**
    * Generates CDKTF code for importing a NotificationsChannelAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationsChannelAssociation to import
    * @param importFromId The id of the existing NotificationsChannelAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_channel_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationsChannelAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_channel_association aws_notifications_channel_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationsChannelAssociationConfig
    */
    constructor(scope: Construct, id: string, config: NotificationsChannelAssociationConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _notificationConfigurationArn?;
    get notificationConfigurationArn(): string;
    set notificationConfigurationArn(value: string);
    get notificationConfigurationArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
