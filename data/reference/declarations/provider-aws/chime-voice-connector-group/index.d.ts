/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimeVoiceConnectorGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}
    */
    readonly name: string;
    /**
    * connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}
    */
    readonly connector?: ChimeVoiceConnectorGroupConnector[] | cdktf.IResolvable;
}
export interface ChimeVoiceConnectorGroupConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}
    */
    readonly voiceConnectorId: string;
}
export declare function chimeVoiceConnectorGroupConnectorToTerraform(struct?: ChimeVoiceConnectorGroupConnector | cdktf.IResolvable): any;
export declare function chimeVoiceConnectorGroupConnectorToHclTerraform(struct?: ChimeVoiceConnectorGroupConnector | cdktf.IResolvable): any;
export declare class ChimeVoiceConnectorGroupConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimeVoiceConnectorGroupConnector | cdktf.IResolvable | undefined;
    set internalValue(value: ChimeVoiceConnectorGroupConnector | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string | undefined;
}
export declare class ChimeVoiceConnectorGroupConnectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimeVoiceConnectorGroupConnector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimeVoiceConnectorGroupConnectorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group aws_chime_voice_connector_group}
*/
export declare class ChimeVoiceConnectorGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chime_voice_connector_group";
    /**
    * Generates CDKTF code for importing a ChimeVoiceConnectorGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorGroup to import
    * @param importFromId The id of the existing ChimeVoiceConnectorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimeVoiceConnectorGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_group aws_chime_voice_connector_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorGroupConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _connector;
    get connector(): ChimeVoiceConnectorGroupConnectorList;
    putConnector(value: ChimeVoiceConnectorGroupConnector[] | cdktf.IResolvable): void;
    resetConnector(): void;
    get connectorInput(): cdktf.IResolvable | ChimeVoiceConnectorGroupConnector[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
