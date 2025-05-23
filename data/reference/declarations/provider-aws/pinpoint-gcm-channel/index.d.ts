/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointGcmChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#api_key PinpointGcmChannel#api_key}
    */
    readonly apiKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#application_id PinpointGcmChannel#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#default_authentication_method PinpointGcmChannel#default_authentication_method}
    */
    readonly defaultAuthenticationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#enabled PinpointGcmChannel#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#id PinpointGcmChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#service_json PinpointGcmChannel#service_json}
    */
    readonly serviceJson?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel aws_pinpoint_gcm_channel}
*/
export declare class PinpointGcmChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_gcm_channel";
    /**
    * Generates CDKTF code for importing a PinpointGcmChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointGcmChannel to import
    * @param importFromId The id of the existing PinpointGcmChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointGcmChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_gcm_channel aws_pinpoint_gcm_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointGcmChannelConfig
    */
    constructor(scope: Construct, id: string, config: PinpointGcmChannelConfig);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    resetApiKey(): void;
    get apiKeyInput(): string | undefined;
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
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
    private _serviceJson?;
    get serviceJson(): string;
    set serviceJson(value: string);
    resetServiceJson(): void;
    get serviceJsonInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
