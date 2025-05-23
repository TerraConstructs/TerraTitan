/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimeVoiceConnectorTerminationCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}
    */
    readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable;
}
export interface ChimeVoiceConnectorTerminationCredentialsCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}
    */
    readonly username: string;
}
export declare function chimeVoiceConnectorTerminationCredentialsCredentialsToTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable): any;
export declare function chimeVoiceConnectorTerminationCredentialsCredentialsToHclTerraform(struct?: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable): any;
export declare class ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable | undefined;
    set internalValue(value: ChimeVoiceConnectorTerminationCredentialsCredentials | cdktf.IResolvable | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export declare class ChimeVoiceConnectorTerminationCredentialsCredentialsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials}
*/
export declare class ChimeVoiceConnectorTerminationCredentials extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chime_voice_connector_termination_credentials";
    /**
    * Generates CDKTF code for importing a ChimeVoiceConnectorTerminationCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorTerminationCredentials to import
    * @param importFromId The id of the existing ChimeVoiceConnectorTerminationCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimeVoiceConnectorTerminationCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorTerminationCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string | undefined;
    private _credentials;
    get credentials(): ChimeVoiceConnectorTerminationCredentialsCredentialsList;
    putCredentials(value: ChimeVoiceConnectorTerminationCredentialsCredentials[] | cdktf.IResolvable): void;
    get credentialsInput(): cdktf.IResolvable | ChimeVoiceConnectorTerminationCredentialsCredentials[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
