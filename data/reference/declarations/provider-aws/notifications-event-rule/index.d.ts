/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationsEventRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}
    */
    readonly notificationConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}
    */
    readonly regions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}
    */
    readonly source: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule aws_notifications_event_rule}
*/
export declare class NotificationsEventRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_notifications_event_rule";
    /**
    * Generates CDKTF code for importing a NotificationsEventRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationsEventRule to import
    * @param importFromId The id of the existing NotificationsEventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationsEventRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notifications_event_rule aws_notifications_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationsEventRuleConfig
    */
    constructor(scope: Construct, id: string, config: NotificationsEventRuleConfig);
    get arn(): string;
    private _eventPattern?;
    get eventPattern(): string;
    set eventPattern(value: string);
    resetEventPattern(): void;
    get eventPatternInput(): string | undefined;
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _notificationConfigurationArn?;
    get notificationConfigurationArn(): string;
    set notificationConfigurationArn(value: string);
    get notificationConfigurationArnInput(): string | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    get regionsInput(): string[] | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
