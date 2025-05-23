/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification#group_names AutoscalingNotification#group_names}
    */
    readonly groupNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification#id AutoscalingNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification#notifications AutoscalingNotification#notifications}
    */
    readonly notifications: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification#topic_arn AutoscalingNotification#topic_arn}
    */
    readonly topicArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification aws_autoscaling_notification}
*/
export declare class AutoscalingNotification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_notification";
    /**
    * Generates CDKTF code for importing a AutoscalingNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingNotification to import
    * @param importFromId The id of the existing AutoscalingNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_notification aws_autoscaling_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingNotificationConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingNotificationConfig);
    private _groupNames?;
    get groupNames(): string[];
    set groupNames(value: string[]);
    get groupNamesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _notifications?;
    get notifications(): string[];
    set notifications(value: string[]);
    get notificationsInput(): string[] | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
