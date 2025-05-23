/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointEmailChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}
    */
    readonly fromAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#id PinpointEmailChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#identity PinpointEmailChannel#identity}
    */
    readonly identity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#orchestration_sending_role_arn PinpointEmailChannel#orchestration_sending_role_arn}
    */
    readonly orchestrationSendingRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}
    */
    readonly roleArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel aws_pinpoint_email_channel}
*/
export declare class PinpointEmailChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_email_channel";
    /**
    * Generates CDKTF code for importing a PinpointEmailChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointEmailChannel to import
    * @param importFromId The id of the existing PinpointEmailChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointEmailChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_email_channel aws_pinpoint_email_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEmailChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointEmailChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _configurationSet?;
    get configurationSet(): string;
    set configurationSet(value: string);
    resetConfigurationSet(): void;
    get configurationSetInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _fromAddress?;
    get fromAddress(): string;
    set fromAddress(value: string);
    get fromAddressInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identity?;
    get identity(): string;
    set identity(value: string);
    get identityInput(): string | undefined;
    get messagesPerSecond(): number;
    private _orchestrationSendingRoleArn?;
    get orchestrationSendingRoleArn(): string;
    set orchestrationSendingRoleArn(value: string);
    resetOrchestrationSendingRoleArn(): void;
    get orchestrationSendingRoleArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
