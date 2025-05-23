/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveMultiplexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}
    */
    readonly availabilityZones: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#id MedialiveMultiplex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#start_multiplex MedialiveMultiplex#start_multiplex}
    */
    readonly startMultiplex?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#tags_all MedialiveMultiplex#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * multiplex_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}
    */
    readonly multiplexSettings?: MedialiveMultiplexMultiplexSettings;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#timeouts MedialiveMultiplex#timeouts}
    */
    readonly timeouts?: MedialiveMultiplexTimeouts;
}
export interface MedialiveMultiplexMultiplexSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}
    */
    readonly maximumVideoBufferDelayMilliseconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}
    */
    readonly transportStreamBitrate: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}
    */
    readonly transportStreamId: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}
    */
    readonly transportStreamReservedBitrate?: number;
}
export declare function medialiveMultiplexMultiplexSettingsToTerraform(struct?: MedialiveMultiplexMultiplexSettingsOutputReference | MedialiveMultiplexMultiplexSettings): any;
export declare function medialiveMultiplexMultiplexSettingsToHclTerraform(struct?: MedialiveMultiplexMultiplexSettingsOutputReference | MedialiveMultiplexMultiplexSettings): any;
export declare class MedialiveMultiplexMultiplexSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveMultiplexMultiplexSettings | undefined;
    set internalValue(value: MedialiveMultiplexMultiplexSettings | undefined);
    private _maximumVideoBufferDelayMilliseconds?;
    get maximumVideoBufferDelayMilliseconds(): number;
    set maximumVideoBufferDelayMilliseconds(value: number);
    resetMaximumVideoBufferDelayMilliseconds(): void;
    get maximumVideoBufferDelayMillisecondsInput(): number | undefined;
    private _transportStreamBitrate?;
    get transportStreamBitrate(): number;
    set transportStreamBitrate(value: number);
    get transportStreamBitrateInput(): number | undefined;
    private _transportStreamId?;
    get transportStreamId(): number;
    set transportStreamId(value: number);
    get transportStreamIdInput(): number | undefined;
    private _transportStreamReservedBitrate?;
    get transportStreamReservedBitrate(): number;
    set transportStreamReservedBitrate(value: number);
    resetTransportStreamReservedBitrate(): void;
    get transportStreamReservedBitrateInput(): number | undefined;
}
export interface MedialiveMultiplexTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#create MedialiveMultiplex#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#delete MedialiveMultiplex#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#update MedialiveMultiplex#update}
    */
    readonly update?: string;
}
export declare function medialiveMultiplexTimeoutsToTerraform(struct?: MedialiveMultiplexTimeouts | cdktf.IResolvable): any;
export declare function medialiveMultiplexTimeoutsToHclTerraform(struct?: MedialiveMultiplexTimeouts | cdktf.IResolvable): any;
export declare class MedialiveMultiplexTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveMultiplexTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex aws_medialive_multiplex}
*/
export declare class MedialiveMultiplex extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_medialive_multiplex";
    /**
    * Generates CDKTF code for importing a MedialiveMultiplex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MedialiveMultiplex to import
    * @param importFromId The id of the existing MedialiveMultiplex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MedialiveMultiplex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex aws_medialive_multiplex} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MedialiveMultiplexConfig
    */
    constructor(scope: Construct, id: string, config: MedialiveMultiplexConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    get availabilityZonesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _startMultiplex?;
    get startMultiplex(): boolean | cdktf.IResolvable;
    set startMultiplex(value: boolean | cdktf.IResolvable);
    resetStartMultiplex(): void;
    get startMultiplexInput(): boolean | cdktf.IResolvable | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _multiplexSettings;
    get multiplexSettings(): MedialiveMultiplexMultiplexSettingsOutputReference;
    putMultiplexSettings(value: MedialiveMultiplexMultiplexSettings): void;
    resetMultiplexSettings(): void;
    get multiplexSettingsInput(): MedialiveMultiplexMultiplexSettings | undefined;
    private _timeouts;
    get timeouts(): MedialiveMultiplexTimeoutsOutputReference;
    putTimeouts(value: MedialiveMultiplexTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MedialiveMultiplexTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
