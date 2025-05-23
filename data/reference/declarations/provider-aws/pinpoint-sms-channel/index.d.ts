/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointSmsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#application_id PinpointSmsChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#enabled PinpointSmsChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#id PinpointSmsChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#sender_id PinpointSmsChannel#sender_id}
    */
    readonly senderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#short_code PinpointSmsChannel#short_code}
    */
    readonly shortCode?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel aws_pinpoint_sms_channel}
*/
export declare class PinpointSmsChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_sms_channel";
    /**
    * Generates CDKTF code for importing a PinpointSmsChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointSmsChannel to import
    * @param importFromId The id of the existing PinpointSmsChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointSmsChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_sms_channel aws_pinpoint_sms_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointSmsChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointSmsChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get promotionalMessagesPerSecond(): number;
    private _senderId?;
    get senderId(): string;
    set senderId(value: string);
    resetSenderId(): void;
    get senderIdInput(): string | undefined;
    private _shortCode?;
    get shortCode(): string;
    set shortCode(value: string);
    resetShortCode(): void;
    get shortCodeInput(): string | undefined;
    get transactionalMessagesPerSecond(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
