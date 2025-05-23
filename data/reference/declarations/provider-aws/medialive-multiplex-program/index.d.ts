/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveMultiplexProgramConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}
    */
    readonly multiplexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}
    */
    readonly programName: string;
    /**
    * multiplex_program_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}
    */
    readonly multiplexProgramSettings?: MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#timeouts MedialiveMultiplexProgram#timeouts}
    */
    readonly timeouts?: MedialiveMultiplexProgramTimeouts;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}
    */
    readonly serviceName: string;
}
export declare function medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable): any;
export declare function medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable): any;
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | cdktf.IResolvable | undefined);
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}
    */
    readonly maximumBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}
    */
    readonly minimumBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}
    */
    readonly priority?: number;
}
export declare function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable): any;
export declare function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable): any;
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | cdktf.IResolvable | undefined);
    private _maximumBitrate?;
    get maximumBitrate(): number;
    set maximumBitrate(value: number);
    resetMaximumBitrate(): void;
    get maximumBitrateInput(): number | undefined;
    private _minimumBitrate?;
    get minimumBitrate(): number;
    set minimumBitrate(value: number);
    resetMinimumBitrate(): void;
    get minimumBitrateInput(): number | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
}
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}
    */
    readonly constantBitrate?: number;
    /**
    * statmux_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}
    */
    readonly statmuxSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable;
}
export declare function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable): any;
export declare function medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable): any;
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | cdktf.IResolvable | undefined);
    private _constantBitrate?;
    get constantBitrate(): number;
    set constantBitrate(value: number);
    resetConstantBitrate(): void;
    get constantBitrateInput(): number | undefined;
    private _statmuxSettings;
    get statmuxSettings(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList;
    putStatmuxSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | cdktf.IResolvable): void;
    resetStatmuxSettings(): void;
    get statmuxSettingsInput(): cdktf.IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[] | undefined;
}
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference;
}
export interface MedialiveMultiplexProgramMultiplexProgramSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}
    */
    readonly preferredChannelPipeline: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}
    */
    readonly programNumber: number;
    /**
    * service_descriptor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}
    */
    readonly serviceDescriptor?: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable;
    /**
    * video_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}
    */
    readonly videoSettings?: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable;
}
export declare function medialiveMultiplexProgramMultiplexProgramSettingsToTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable): any;
export declare function medialiveMultiplexProgramMultiplexProgramSettingsToHclTerraform(struct?: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable): any;
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexProgramMultiplexProgramSettings | cdktf.IResolvable | undefined);
    private _preferredChannelPipeline?;
    get preferredChannelPipeline(): string;
    set preferredChannelPipeline(value: string);
    get preferredChannelPipelineInput(): string | undefined;
    private _programNumber?;
    get programNumber(): number;
    set programNumber(value: number);
    get programNumberInput(): number | undefined;
    private _serviceDescriptor;
    get serviceDescriptor(): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList;
    putServiceDescriptor(value: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | cdktf.IResolvable): void;
    resetServiceDescriptor(): void;
    get serviceDescriptorInput(): cdktf.IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[] | undefined;
    private _videoSettings;
    get videoSettings(): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList;
    putVideoSettings(value: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | cdktf.IResolvable): void;
    resetVideoSettings(): void;
    get videoSettingsInput(): cdktf.IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[] | undefined;
}
export declare class MedialiveMultiplexProgramMultiplexProgramSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference;
}
export interface MedialiveMultiplexProgramTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#create MedialiveMultiplexProgram#create}
    */
    readonly create?: string;
}
export declare function medialiveMultiplexProgramTimeoutsToTerraform(struct?: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable): any;
export declare function medialiveMultiplexProgramTimeoutsToHclTerraform(struct?: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable): any;
export declare class MedialiveMultiplexProgramTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveMultiplexProgramTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveMultiplexProgramTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program}
*/
export declare class MedialiveMultiplexProgram extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_medialive_multiplex_program";
    /**
    * Generates CDKTF code for importing a MedialiveMultiplexProgram resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MedialiveMultiplexProgram to import
    * @param importFromId The id of the existing MedialiveMultiplexProgram that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MedialiveMultiplexProgram to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_multiplex_program aws_medialive_multiplex_program} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MedialiveMultiplexProgramConfig
    */
    constructor(scope: Construct, id: string, config: MedialiveMultiplexProgramConfig);
    get id(): string;
    private _multiplexId?;
    get multiplexId(): string;
    set multiplexId(value: string);
    get multiplexIdInput(): string | undefined;
    private _programName?;
    get programName(): string;
    set programName(value: string);
    get programNameInput(): string | undefined;
    private _multiplexProgramSettings;
    get multiplexProgramSettings(): MedialiveMultiplexProgramMultiplexProgramSettingsList;
    putMultiplexProgramSettings(value: MedialiveMultiplexProgramMultiplexProgramSettings[] | cdktf.IResolvable): void;
    resetMultiplexProgramSettings(): void;
    get multiplexProgramSettingsInput(): cdktf.IResolvable | MedialiveMultiplexProgramMultiplexProgramSettings[] | undefined;
    private _timeouts;
    get timeouts(): MedialiveMultiplexProgramTimeoutsOutputReference;
    putTimeouts(value: MedialiveMultiplexProgramTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MedialiveMultiplexProgramTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
