/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimeVoiceConnectorTerminationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#calling_regions ChimeVoiceConnectorTermination#calling_regions}
    */
    readonly callingRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#cidr_allow_list ChimeVoiceConnectorTermination#cidr_allow_list}
    */
    readonly cidrAllowList: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#cps_limit ChimeVoiceConnectorTermination#cps_limit}
    */
    readonly cpsLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#default_phone_number ChimeVoiceConnectorTermination#default_phone_number}
    */
    readonly defaultPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#disabled ChimeVoiceConnectorTermination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#id ChimeVoiceConnectorTermination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#voice_connector_id ChimeVoiceConnectorTermination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination}
*/
export declare class ChimeVoiceConnectorTermination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chime_voice_connector_termination";
    /**
    * Generates CDKTF code for importing a ChimeVoiceConnectorTermination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorTermination to import
    * @param importFromId The id of the existing ChimeVoiceConnectorTermination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimeVoiceConnectorTermination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination aws_chime_voice_connector_termination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationConfig);
    private _callingRegions?;
    get callingRegions(): string[];
    set callingRegions(value: string[]);
    get callingRegionsInput(): string[] | undefined;
    private _cidrAllowList?;
    get cidrAllowList(): string[];
    set cidrAllowList(value: string[]);
    get cidrAllowListInput(): string[] | undefined;
    private _cpsLimit?;
    get cpsLimit(): number;
    set cpsLimit(value: number);
    resetCpsLimit(): void;
    get cpsLimitInput(): number | undefined;
    private _defaultPhoneNumber?;
    get defaultPhoneNumber(): string;
    set defaultPhoneNumber(value: string);
    resetDefaultPhoneNumber(): void;
    get defaultPhoneNumberInput(): string | undefined;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
