/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointApnsVoipChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}
    */
    readonly teamId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}
    */
    readonly tokenKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}
    */
    readonly tokenKeyId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel}
*/
export declare class PinpointApnsVoipChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_apns_voip_channel";
    /**
    * Generates CDKTF code for importing a PinpointApnsVoipChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointApnsVoipChannel to import
    * @param importFromId The id of the existing PinpointApnsVoipChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointApnsVoipChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsVoipChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointApnsVoipChannelConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    resetBundleId(): void;
    get bundleIdInput(): string | undefined;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string | undefined;
    private _defaultAuthenticationMethod?;
    get defaultAuthenticationMethod(): string;
    set defaultAuthenticationMethod(value: string);
    resetDefaultAuthenticationMethod(): void;
    get defaultAuthenticationMethodInput(): string | undefined;
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
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    resetTeamId(): void;
    get teamIdInput(): string | undefined;
    private _tokenKey?;
    get tokenKey(): string;
    set tokenKey(value: string);
    resetTokenKey(): void;
    get tokenKeyInput(): string | undefined;
    private _tokenKeyId?;
    get tokenKeyId(): string;
    set tokenKeyId(value: string);
    resetTokenKeyId(): void;
    get tokenKeyIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
