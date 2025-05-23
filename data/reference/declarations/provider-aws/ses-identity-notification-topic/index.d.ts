/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesIdentityNotificationTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#id SesIdentityNotificationTopic#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#identity SesIdentityNotificationTopic#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#include_original_headers SesIdentityNotificationTopic#include_original_headers}
    */
    readonly includeOriginalHeaders?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#notification_type SesIdentityNotificationTopic#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#topic_arn SesIdentityNotificationTopic#topic_arn}
    */
    readonly topicArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic aws_ses_identity_notification_topic}
*/
export declare class SesIdentityNotificationTopic extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_identity_notification_topic";
    /**
    * Generates CDKTF code for importing a SesIdentityNotificationTopic resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesIdentityNotificationTopic to import
    * @param importFromId The id of the existing SesIdentityNotificationTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesIdentityNotificationTopic to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_identity_notification_topic aws_ses_identity_notification_topic} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesIdentityNotificationTopicConfig
    */
    constructor(scope: Construct, id: string, config: SesIdentityNotificationTopicConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identity?;
    get identity(): string;
    set identity(value: string);
    get identityInput(): string | undefined;
    private _includeOriginalHeaders?;
    get includeOriginalHeaders(): boolean | cdktf.IResolvable;
    set includeOriginalHeaders(value: boolean | cdktf.IResolvable);
    resetIncludeOriginalHeaders(): void;
    get includeOriginalHeadersInput(): boolean | cdktf.IResolvable | undefined;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string | undefined;
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    resetTopicArn(): void;
    get topicArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
