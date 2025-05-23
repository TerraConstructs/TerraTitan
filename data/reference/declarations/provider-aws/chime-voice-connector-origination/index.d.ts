/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimeVoiceConnectorOriginationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#disabled ChimeVoiceConnectorOrigination#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#id ChimeVoiceConnectorOrigination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#voice_connector_id ChimeVoiceConnectorOrigination#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#route ChimeVoiceConnectorOrigination#route}
    */
    readonly route: ChimeVoiceConnectorOriginationRoute[] | cdktf.IResolvable;
}
export interface ChimeVoiceConnectorOriginationRoute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#host ChimeVoiceConnectorOrigination#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#port ChimeVoiceConnectorOrigination#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#priority ChimeVoiceConnectorOrigination#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#protocol ChimeVoiceConnectorOrigination#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#weight ChimeVoiceConnectorOrigination#weight}
    */
    readonly weight: number;
}
export declare function chimeVoiceConnectorOriginationRouteToTerraform(struct?: ChimeVoiceConnectorOriginationRoute | cdktf.IResolvable): any;
export declare function chimeVoiceConnectorOriginationRouteToHclTerraform(struct?: ChimeVoiceConnectorOriginationRoute | cdktf.IResolvable): any;
export declare class ChimeVoiceConnectorOriginationRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimeVoiceConnectorOriginationRoute | cdktf.IResolvable | undefined;
    set internalValue(value: ChimeVoiceConnectorOriginationRoute | cdktf.IResolvable | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class ChimeVoiceConnectorOriginationRouteList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimeVoiceConnectorOriginationRoute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimeVoiceConnectorOriginationRouteOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination aws_chime_voice_connector_origination}
*/
export declare class ChimeVoiceConnectorOrigination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chime_voice_connector_origination";
    /**
    * Generates CDKTF code for importing a ChimeVoiceConnectorOrigination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorOrigination to import
    * @param importFromId The id of the existing ChimeVoiceConnectorOrigination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimeVoiceConnectorOrigination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_origination aws_chime_voice_connector_origination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorOriginationConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorOriginationConfig);
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
    private _route;
    get route(): ChimeVoiceConnectorOriginationRouteList;
    putRoute(value: ChimeVoiceConnectorOriginationRoute[] | cdktf.IResolvable): void;
    get routeInput(): cdktf.IResolvable | ChimeVoiceConnectorOriginationRoute[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
