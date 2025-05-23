/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
export interface MedialiveChannelCdiInputSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#resolution MedialiveChannel#resolution}
    */
    readonly resolution: string;
}
export declare function medialiveChannelCdiInputSpecificationToTerraform(struct?: MedialiveChannelCdiInputSpecificationOutputReference | MedialiveChannelCdiInputSpecification): any;
export declare function medialiveChannelCdiInputSpecificationToHclTerraform(struct?: MedialiveChannelCdiInputSpecificationOutputReference | MedialiveChannelCdiInputSpecification): any;
export declare class MedialiveChannelCdiInputSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelCdiInputSpecification | undefined;
    set internalValue(value: MedialiveChannelCdiInputSpecification | undefined);
    private _resolution?;
    get resolution(): string;
    set resolution(value: string);
    get resolutionInput(): string | undefined;
}
export interface MedialiveChannelDestinationsMediaPackageSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#channel_id MedialiveChannel#channel_id}
    */
    readonly channelId: string;
}
export declare function medialiveChannelDestinationsMediaPackageSettingsToTerraform(struct?: MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable): any;
export declare function medialiveChannelDestinationsMediaPackageSettingsToHclTerraform(struct?: MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable): any;
export declare class MedialiveChannelDestinationsMediaPackageSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelDestinationsMediaPackageSettings | cdktf.IResolvable | undefined);
    private _channelId?;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string | undefined;
}
export declare class MedialiveChannelDestinationsMediaPackageSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelDestinationsMediaPackageSettingsOutputReference;
}
export interface MedialiveChannelDestinationsMultiplexSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#multiplex_id MedialiveChannel#multiplex_id}
    */
    readonly multiplexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_name MedialiveChannel#program_name}
    */
    readonly programName: string;
}
export declare function medialiveChannelDestinationsMultiplexSettingsToTerraform(struct?: MedialiveChannelDestinationsMultiplexSettingsOutputReference | MedialiveChannelDestinationsMultiplexSettings): any;
export declare function medialiveChannelDestinationsMultiplexSettingsToHclTerraform(struct?: MedialiveChannelDestinationsMultiplexSettingsOutputReference | MedialiveChannelDestinationsMultiplexSettings): any;
export declare class MedialiveChannelDestinationsMultiplexSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelDestinationsMultiplexSettings | undefined;
    set internalValue(value: MedialiveChannelDestinationsMultiplexSettings | undefined);
    private _multiplexId?;
    get multiplexId(): string;
    set multiplexId(value: string);
    get multiplexIdInput(): string | undefined;
    private _programName?;
    get programName(): string;
    set programName(value: string);
    get programNameInput(): string | undefined;
}
export interface MedialiveChannelDestinationsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#stream_name MedialiveChannel#stream_name}
    */
    readonly streamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#url MedialiveChannel#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelDestinationsSettingsToTerraform(struct?: MedialiveChannelDestinationsSettings | cdktf.IResolvable): any;
export declare function medialiveChannelDestinationsSettingsToHclTerraform(struct?: MedialiveChannelDestinationsSettings | cdktf.IResolvable): any;
export declare class MedialiveChannelDestinationsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelDestinationsSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelDestinationsSettings | cdktf.IResolvable | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    resetStreamName(): void;
    get streamNameInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export declare class MedialiveChannelDestinationsSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelDestinationsSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelDestinationsSettingsOutputReference;
}
export interface MedialiveChannelDestinations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#id MedialiveChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * media_package_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#media_package_settings MedialiveChannel#media_package_settings}
    */
    readonly mediaPackageSettings?: MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable;
    /**
    * multiplex_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#multiplex_settings MedialiveChannel#multiplex_settings}
    */
    readonly multiplexSettings?: MedialiveChannelDestinationsMultiplexSettings;
    /**
    * settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#settings MedialiveChannel#settings}
    */
    readonly settings?: MedialiveChannelDestinationsSettings[] | cdktf.IResolvable;
}
export declare function medialiveChannelDestinationsToTerraform(struct?: MedialiveChannelDestinations | cdktf.IResolvable): any;
export declare function medialiveChannelDestinationsToHclTerraform(struct?: MedialiveChannelDestinations | cdktf.IResolvable): any;
export declare class MedialiveChannelDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelDestinations | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelDestinations | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _mediaPackageSettings;
    get mediaPackageSettings(): MedialiveChannelDestinationsMediaPackageSettingsList;
    putMediaPackageSettings(value: MedialiveChannelDestinationsMediaPackageSettings[] | cdktf.IResolvable): void;
    resetMediaPackageSettings(): void;
    get mediaPackageSettingsInput(): cdktf.IResolvable | MedialiveChannelDestinationsMediaPackageSettings[] | undefined;
    private _multiplexSettings;
    get multiplexSettings(): MedialiveChannelDestinationsMultiplexSettingsOutputReference;
    putMultiplexSettings(value: MedialiveChannelDestinationsMultiplexSettings): void;
    resetMultiplexSettings(): void;
    get multiplexSettingsInput(): MedialiveChannelDestinationsMultiplexSettings | undefined;
    private _settings;
    get settings(): MedialiveChannelDestinationsSettingsList;
    putSettings(value: MedialiveChannelDestinationsSettings[] | cdktf.IResolvable): void;
    resetSettings(): void;
    get settingsInput(): cdktf.IResolvable | MedialiveChannelDestinationsSettings[] | undefined;
}
export declare class MedialiveChannelDestinationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelDestinations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelDestinationsOutputReference;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#algorithm MedialiveChannel#algorithm}
    */
    readonly algorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#algorithm_control MedialiveChannel#algorithm_control}
    */
    readonly algorithmControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#target_lkfs MedialiveChannel#target_lkfs}
    */
    readonly targetLkfs?: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings | undefined);
    private _algorithm?;
    get algorithm(): string;
    set algorithm(value: string);
    resetAlgorithm(): void;
    get algorithmInput(): string | undefined;
    private _algorithmControl?;
    get algorithmControl(): string;
    set algorithmControl(value: string);
    resetAlgorithmControl(): void;
    get algorithmControlInput(): string | undefined;
    private _targetLkfs?;
    get targetLkfs(): number;
    set targetLkfs(value: number);
    resetTargetLkfs(): void;
    get targetLkfsInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cbet_check_digit_string MedialiveChannel#cbet_check_digit_string}
    */
    readonly cbetCheckDigitString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cbet_stepaside MedialiveChannel#cbet_stepaside}
    */
    readonly cbetStepaside: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#csid MedialiveChannel#csid}
    */
    readonly csid: string;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings | undefined);
    private _cbetCheckDigitString?;
    get cbetCheckDigitString(): string;
    set cbetCheckDigitString(value: string);
    get cbetCheckDigitStringInput(): string | undefined;
    private _cbetStepaside?;
    get cbetStepaside(): string;
    set cbetStepaside(value: string);
    get cbetStepasideInput(): string | undefined;
    private _csid?;
    get csid(): string;
    set csid(value: string);
    get csidInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#check_digit_string MedialiveChannel#check_digit_string}
    */
    readonly checkDigitString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sid MedialiveChannel#sid}
    */
    readonly sid: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings | cdktf.IResolvable | undefined);
    private _checkDigitString?;
    get checkDigitString(): string;
    set checkDigitString(value: string);
    get checkDigitStringInput(): string | undefined;
    private _sid?;
    get sid(): number;
    set sid(value: number);
    get sidInput(): number | undefined;
}
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_distribution_type MedialiveChannel#nielsen_distribution_type}
    */
    readonly nielsenDistributionType?: string;
    /**
    * nielsen_cbet_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_cbet_settings MedialiveChannel#nielsen_cbet_settings}
    */
    readonly nielsenCbetSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings;
    /**
    * nielsen_naes_ii_nw_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_naes_ii_nw_settings MedialiveChannel#nielsen_naes_ii_nw_settings}
    */
    readonly nielsenNaesIiNwSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings | undefined);
    private _nielsenDistributionType?;
    get nielsenDistributionType(): string;
    set nielsenDistributionType(value: string);
    resetNielsenDistributionType(): void;
    get nielsenDistributionTypeInput(): string | undefined;
    private _nielsenCbetSettings;
    get nielsenCbetSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettingsOutputReference;
    putNielsenCbetSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings): void;
    resetNielsenCbetSettings(): void;
    get nielsenCbetSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenCbetSettings | undefined;
    private _nielsenNaesIiNwSettings;
    get nielsenNaesIiNwSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettingsList;
    putNielsenNaesIiNwSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | cdktf.IResolvable): void;
    resetNielsenNaesIiNwSettings(): void;
    get nielsenNaesIiNwSettingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsNielsenNaesIiNwSettings[] | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings {
    /**
    * nielsen_watermarks_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_watermarks_settings MedialiveChannel#nielsen_watermarks_settings}
    */
    readonly nielsenWatermarksSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings | undefined);
    private _nielsenWatermarksSettings;
    get nielsenWatermarksSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettingsOutputReference;
    putNielsenWatermarksSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings): void;
    resetNielsenWatermarksSettings(): void;
    get nielsenWatermarksSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsNielsenWatermarksSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_type MedialiveChannel#input_type}
    */
    readonly inputType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#profile MedialiveChannel#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rate_control_mode MedialiveChannel#rate_control_mode}
    */
    readonly rateControlMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#raw_format MedialiveChannel#raw_format}
    */
    readonly rawFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sample_rate MedialiveChannel#sample_rate}
    */
    readonly sampleRate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#spec MedialiveChannel#spec}
    */
    readonly spec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#vbr_quality MedialiveChannel#vbr_quality}
    */
    readonly vbrQuality?: string;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings | undefined);
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _inputType?;
    get inputType(): string;
    set inputType(value: string);
    resetInputType(): void;
    get inputTypeInput(): string | undefined;
    private _profile?;
    get profile(): string;
    set profile(value: string);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _rateControlMode?;
    get rateControlMode(): string;
    set rateControlMode(value: string);
    resetRateControlMode(): void;
    get rateControlModeInput(): string | undefined;
    private _rawFormat?;
    get rawFormat(): string;
    set rawFormat(value: string);
    resetRawFormat(): void;
    get rawFormatInput(): string | undefined;
    private _sampleRate?;
    get sampleRate(): number;
    set sampleRate(value: number);
    resetSampleRate(): void;
    get sampleRateInput(): number | undefined;
    private _spec?;
    get spec(): string;
    set spec(value: string);
    resetSpec(): void;
    get specInput(): string | undefined;
    private _vbrQuality?;
    get vbrQuality(): string;
    set vbrQuality(value: string);
    resetVbrQuality(): void;
    get vbrQualityInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitstream_mode MedialiveChannel#bitstream_mode}
    */
    readonly bitstreamMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dialnorm MedialiveChannel#dialnorm}
    */
    readonly dialnorm?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#drc_profile MedialiveChannel#drc_profile}
    */
    readonly drcProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lfe_filter MedialiveChannel#lfe_filter}
    */
    readonly lfeFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#metadata_control MedialiveChannel#metadata_control}
    */
    readonly metadataControl?: string;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings | undefined);
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _bitstreamMode?;
    get bitstreamMode(): string;
    set bitstreamMode(value: string);
    resetBitstreamMode(): void;
    get bitstreamModeInput(): string | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _dialnorm?;
    get dialnorm(): number;
    set dialnorm(value: number);
    resetDialnorm(): void;
    get dialnormInput(): number | undefined;
    private _drcProfile?;
    get drcProfile(): string;
    set drcProfile(value: string);
    resetDrcProfile(): void;
    get drcProfileInput(): string | undefined;
    private _lfeFilter?;
    get lfeFilter(): string;
    set lfeFilter(value: string);
    resetLfeFilter(): void;
    get lfeFilterInput(): string | undefined;
    private _metadataControl?;
    get metadataControl(): string;
    set metadataControl(value: string);
    resetMetadataControl(): void;
    get metadataControlInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dialnorm MedialiveChannel#dialnorm}
    */
    readonly dialnorm?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#drc_line MedialiveChannel#drc_line}
    */
    readonly drcLine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#drc_rf MedialiveChannel#drc_rf}
    */
    readonly drcRf?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#height_trim MedialiveChannel#height_trim}
    */
    readonly heightTrim?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#surround_trim MedialiveChannel#surround_trim}
    */
    readonly surroundTrim?: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings | undefined);
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _dialnorm?;
    get dialnorm(): number;
    set dialnorm(value: number);
    resetDialnorm(): void;
    get dialnormInput(): number | undefined;
    private _drcLine?;
    get drcLine(): string;
    set drcLine(value: string);
    resetDrcLine(): void;
    get drcLineInput(): string | undefined;
    private _drcRf?;
    get drcRf(): string;
    set drcRf(value: string);
    resetDrcRf(): void;
    get drcRfInput(): string | undefined;
    private _heightTrim?;
    get heightTrim(): number;
    set heightTrim(value: number);
    resetHeightTrim(): void;
    get heightTrimInput(): number | undefined;
    private _surroundTrim?;
    get surroundTrim(): number;
    set surroundTrim(value: number);
    resetSurroundTrim(): void;
    get surroundTrimInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#attenuation_control MedialiveChannel#attenuation_control}
    */
    readonly attenuationControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitstream_mode MedialiveChannel#bitstream_mode}
    */
    readonly bitstreamMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dc_filter MedialiveChannel#dc_filter}
    */
    readonly dcFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dialnorm MedialiveChannel#dialnorm}
    */
    readonly dialnorm?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#drc_line MedialiveChannel#drc_line}
    */
    readonly drcLine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#drc_rf MedialiveChannel#drc_rf}
    */
    readonly drcRf?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lfe_control MedialiveChannel#lfe_control}
    */
    readonly lfeControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lfe_filter MedialiveChannel#lfe_filter}
    */
    readonly lfeFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lo_ro_center_mix_level MedialiveChannel#lo_ro_center_mix_level}
    */
    readonly loRoCenterMixLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lo_ro_surround_mix_level MedialiveChannel#lo_ro_surround_mix_level}
    */
    readonly loRoSurroundMixLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lt_rt_center_mix_level MedialiveChannel#lt_rt_center_mix_level}
    */
    readonly ltRtCenterMixLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#lt_rt_surround_mix_level MedialiveChannel#lt_rt_surround_mix_level}
    */
    readonly ltRtSurroundMixLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#metadata_control MedialiveChannel#metadata_control}
    */
    readonly metadataControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#passthrough_control MedialiveChannel#passthrough_control}
    */
    readonly passthroughControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#phase_control MedialiveChannel#phase_control}
    */
    readonly phaseControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#stereo_downmix MedialiveChannel#stereo_downmix}
    */
    readonly stereoDownmix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#surround_ex_mode MedialiveChannel#surround_ex_mode}
    */
    readonly surroundExMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#surround_mode MedialiveChannel#surround_mode}
    */
    readonly surroundMode?: string;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings | undefined);
    private _attenuationControl?;
    get attenuationControl(): string;
    set attenuationControl(value: string);
    resetAttenuationControl(): void;
    get attenuationControlInput(): string | undefined;
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _bitstreamMode?;
    get bitstreamMode(): string;
    set bitstreamMode(value: string);
    resetBitstreamMode(): void;
    get bitstreamModeInput(): string | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _dcFilter?;
    get dcFilter(): string;
    set dcFilter(value: string);
    resetDcFilter(): void;
    get dcFilterInput(): string | undefined;
    private _dialnorm?;
    get dialnorm(): number;
    set dialnorm(value: number);
    resetDialnorm(): void;
    get dialnormInput(): number | undefined;
    private _drcLine?;
    get drcLine(): string;
    set drcLine(value: string);
    resetDrcLine(): void;
    get drcLineInput(): string | undefined;
    private _drcRf?;
    get drcRf(): string;
    set drcRf(value: string);
    resetDrcRf(): void;
    get drcRfInput(): string | undefined;
    private _lfeControl?;
    get lfeControl(): string;
    set lfeControl(value: string);
    resetLfeControl(): void;
    get lfeControlInput(): string | undefined;
    private _lfeFilter?;
    get lfeFilter(): string;
    set lfeFilter(value: string);
    resetLfeFilter(): void;
    get lfeFilterInput(): string | undefined;
    private _loRoCenterMixLevel?;
    get loRoCenterMixLevel(): number;
    set loRoCenterMixLevel(value: number);
    resetLoRoCenterMixLevel(): void;
    get loRoCenterMixLevelInput(): number | undefined;
    private _loRoSurroundMixLevel?;
    get loRoSurroundMixLevel(): number;
    set loRoSurroundMixLevel(value: number);
    resetLoRoSurroundMixLevel(): void;
    get loRoSurroundMixLevelInput(): number | undefined;
    private _ltRtCenterMixLevel?;
    get ltRtCenterMixLevel(): number;
    set ltRtCenterMixLevel(value: number);
    resetLtRtCenterMixLevel(): void;
    get ltRtCenterMixLevelInput(): number | undefined;
    private _ltRtSurroundMixLevel?;
    get ltRtSurroundMixLevel(): number;
    set ltRtSurroundMixLevel(value: number);
    resetLtRtSurroundMixLevel(): void;
    get ltRtSurroundMixLevelInput(): number | undefined;
    private _metadataControl?;
    get metadataControl(): string;
    set metadataControl(value: string);
    resetMetadataControl(): void;
    get metadataControlInput(): string | undefined;
    private _passthroughControl?;
    get passthroughControl(): string;
    set passthroughControl(value: string);
    resetPassthroughControl(): void;
    get passthroughControlInput(): string | undefined;
    private _phaseControl?;
    get phaseControl(): string;
    set phaseControl(value: string);
    resetPhaseControl(): void;
    get phaseControlInput(): string | undefined;
    private _stereoDownmix?;
    get stereoDownmix(): string;
    set stereoDownmix(value: string);
    resetStereoDownmix(): void;
    get stereoDownmixInput(): string | undefined;
    private _surroundExMode?;
    get surroundExMode(): string;
    set surroundExMode(value: string);
    resetSurroundExMode(): void;
    get surroundExModeInput(): string | undefined;
    private _surroundMode?;
    get surroundMode(): string;
    set surroundMode(value: string);
    resetSurroundMode(): void;
    get surroundModeInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sample_rate MedialiveChannel#sample_rate}
    */
    readonly sampleRate?: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings | undefined);
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _sampleRate?;
    get sampleRate(): number;
    set sampleRate(value: number);
    resetSampleRate(): void;
    get sampleRateInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings {
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bit_depth MedialiveChannel#bit_depth}
    */
    readonly bitDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#coding_mode MedialiveChannel#coding_mode}
    */
    readonly codingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sample_rate MedialiveChannel#sample_rate}
    */
    readonly sampleRate?: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings | undefined);
    private _bitDepth?;
    get bitDepth(): number;
    set bitDepth(value: number);
    resetBitDepth(): void;
    get bitDepthInput(): number | undefined;
    private _codingMode?;
    get codingMode(): string;
    set codingMode(value: string);
    resetCodingMode(): void;
    get codingModeInput(): string | undefined;
    private _sampleRate?;
    get sampleRate(): number;
    set sampleRate(value: number);
    resetSampleRate(): void;
    get sampleRateInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings {
    /**
    * aac_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#aac_settings MedialiveChannel#aac_settings}
    */
    readonly aacSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings;
    /**
    * ac3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ac3_settings MedialiveChannel#ac3_settings}
    */
    readonly ac3Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings;
    /**
    * eac3_atmos_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#eac3_atmos_settings MedialiveChannel#eac3_atmos_settings}
    */
    readonly eac3AtmosSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings;
    /**
    * eac3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#eac3_settings MedialiveChannel#eac3_settings}
    */
    readonly eac3Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings;
    /**
    * mp2_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#mp2_settings MedialiveChannel#mp2_settings}
    */
    readonly mp2Settings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings;
    /**
    * pass_through_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pass_through_settings MedialiveChannel#pass_through_settings}
    */
    readonly passThroughSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings;
    /**
    * wav_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#wav_settings MedialiveChannel#wav_settings}
    */
    readonly wavSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings | undefined);
    private _aacSettings;
    get aacSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettingsOutputReference;
    putAacSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings): void;
    resetAacSettings(): void;
    get aacSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAacSettings | undefined;
    private _ac3Settings;
    get ac3Settings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3SettingsOutputReference;
    putAc3Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings): void;
    resetAc3Settings(): void;
    get ac3SettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsAc3Settings | undefined;
    private _eac3AtmosSettings;
    get eac3AtmosSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettingsOutputReference;
    putEac3AtmosSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings): void;
    resetEac3AtmosSettings(): void;
    get eac3AtmosSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3AtmosSettings | undefined;
    private _eac3Settings;
    get eac3Settings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3SettingsOutputReference;
    putEac3Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings): void;
    resetEac3Settings(): void;
    get eac3SettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsEac3Settings | undefined;
    private _mp2Settings;
    get mp2Settings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2SettingsOutputReference;
    putMp2Settings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings): void;
    resetMp2Settings(): void;
    get mp2SettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsMp2Settings | undefined;
    private _passThroughSettings;
    get passThroughSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettingsOutputReference;
    putPassThroughSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings): void;
    resetPassThroughSettings(): void;
    get passThroughSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsPassThroughSettings | undefined;
    private _wavSettings;
    get wavSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettingsOutputReference;
    putWavSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings): void;
    resetWavSettings(): void;
    get wavSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsWavSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gain MedialiveChannel#gain}
    */
    readonly gain: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_channel MedialiveChannel#input_channel}
    */
    readonly inputChannel: number;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels | cdktf.IResolvable | undefined);
    private _gain?;
    get gain(): number;
    set gain(value: number);
    get gainInput(): number | undefined;
    private _inputChannel?;
    get inputChannel(): number;
    set inputChannel(value: number);
    get inputChannelInput(): number | undefined;
}
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsOutputReference;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_channel MedialiveChannel#output_channel}
    */
    readonly outputChannel: number;
    /**
    * input_channel_levels block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_channel_levels MedialiveChannel#input_channel_levels}
    */
    readonly inputChannelLevels: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings | cdktf.IResolvable | undefined);
    private _outputChannel?;
    get outputChannel(): number;
    set outputChannel(value: number);
    get outputChannelInput(): number | undefined;
    private _inputChannelLevels;
    get inputChannelLevels(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevelsList;
    putInputChannelLevels(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | cdktf.IResolvable): void;
    get inputChannelLevelsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsInputChannelLevels[] | undefined;
}
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#channels_in MedialiveChannel#channels_in}
    */
    readonly channelsIn?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#channels_out MedialiveChannel#channels_out}
    */
    readonly channelsOut?: number;
    /**
    * channel_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#channel_mappings MedialiveChannel#channel_mappings}
    */
    readonly channelMappings: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference | MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings | undefined);
    private _channelsIn?;
    get channelsIn(): number;
    set channelsIn(value: number);
    resetChannelsIn(): void;
    get channelsInInput(): number | undefined;
    private _channelsOut?;
    get channelsOut(): number;
    set channelsOut(value: number);
    resetChannelsOut(): void;
    get channelsOutInput(): number | undefined;
    private _channelMappings;
    get channelMappings(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappingsList;
    putChannelMappings(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | cdktf.IResolvable): void;
    get channelMappingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsChannelMappings[] | undefined;
}
export interface MedialiveChannelEncoderSettingsAudioDescriptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_selector_name MedialiveChannel#audio_selector_name}
    */
    readonly audioSelectorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_type MedialiveChannel#audio_type}
    */
    readonly audioType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_type_control MedialiveChannel#audio_type_control}
    */
    readonly audioTypeControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
    */
    readonly languageCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code_control MedialiveChannel#language_code_control}
    */
    readonly languageCodeControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#stream_name MedialiveChannel#stream_name}
    */
    readonly streamName?: string;
    /**
    * audio_normalization_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_normalization_settings MedialiveChannel#audio_normalization_settings}
    */
    readonly audioNormalizationSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings;
    /**
    * audio_watermark_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_watermark_settings MedialiveChannel#audio_watermark_settings}
    */
    readonly audioWatermarkSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings;
    /**
    * codec_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#codec_settings MedialiveChannel#codec_settings}
    */
    readonly codecSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings;
    /**
    * remix_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#remix_settings MedialiveChannel#remix_settings}
    */
    readonly remixSettings?: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings;
}
export declare function medialiveChannelEncoderSettingsAudioDescriptionsToTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsAudioDescriptionsToHclTerraform(struct?: MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAudioDescriptions | cdktf.IResolvable | undefined);
    private _audioSelectorName?;
    get audioSelectorName(): string;
    set audioSelectorName(value: string);
    get audioSelectorNameInput(): string | undefined;
    private _audioType?;
    get audioType(): string;
    set audioType(value: string);
    resetAudioType(): void;
    get audioTypeInput(): string | undefined;
    private _audioTypeControl?;
    get audioTypeControl(): string;
    set audioTypeControl(value: string);
    resetAudioTypeControl(): void;
    get audioTypeControlInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _languageCodeControl?;
    get languageCodeControl(): string;
    set languageCodeControl(value: string);
    resetLanguageCodeControl(): void;
    get languageCodeControlInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    resetStreamName(): void;
    get streamNameInput(): string | undefined;
    private _audioNormalizationSettings;
    get audioNormalizationSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettingsOutputReference;
    putAudioNormalizationSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings): void;
    resetAudioNormalizationSettings(): void;
    get audioNormalizationSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioNormalizationSettings | undefined;
    private _audioWatermarkSettings;
    get audioWatermarkSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettingsOutputReference;
    putAudioWatermarkSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings): void;
    resetAudioWatermarkSettings(): void;
    get audioWatermarkSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsAudioWatermarkSettings | undefined;
    private _codecSettings;
    get codecSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettingsOutputReference;
    putCodecSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings): void;
    resetCodecSettings(): void;
    get codecSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsCodecSettings | undefined;
    private _remixSettings;
    get remixSettings(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettingsOutputReference;
    putRemixSettings(value: MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings): void;
    resetRemixSettings(): void;
    get remixSettingsInput(): MedialiveChannelEncoderSettingsAudioDescriptionsRemixSettings | undefined;
}
export declare class MedialiveChannelEncoderSettingsAudioDescriptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsAudioDescriptionsOutputReference;
}
export interface MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageToTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference | MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage): any;
export declare function medialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageToHclTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference | MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage): any;
export declare class MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsAvailBlanking {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#state MedialiveChannel#state}
    */
    readonly state?: string;
    /**
    * avail_blanking_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#avail_blanking_image MedialiveChannel#avail_blanking_image}
    */
    readonly availBlankingImage?: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage;
}
export declare function medialiveChannelEncoderSettingsAvailBlankingToTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingOutputReference | MedialiveChannelEncoderSettingsAvailBlanking): any;
export declare function medialiveChannelEncoderSettingsAvailBlankingToHclTerraform(struct?: MedialiveChannelEncoderSettingsAvailBlankingOutputReference | MedialiveChannelEncoderSettingsAvailBlanking): any;
export declare class MedialiveChannelEncoderSettingsAvailBlankingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsAvailBlanking | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsAvailBlanking | undefined);
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _availBlankingImage;
    get availBlankingImage(): MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImageOutputReference;
    putAvailBlankingImage(value: MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage): void;
    resetAvailBlankingImage(): void;
    get availBlankingImageInput(): MedialiveChannelEncoderSettingsAvailBlankingAvailBlankingImage | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#alignment MedialiveChannel#alignment}
    */
    readonly alignment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#background_color MedialiveChannel#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#background_opacity MedialiveChannel#background_opacity}
    */
    readonly backgroundOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_color MedialiveChannel#font_color}
    */
    readonly fontColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_opacity MedialiveChannel#font_opacity}
    */
    readonly fontOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_resolution MedialiveChannel#font_resolution}
    */
    readonly fontResolution?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_size MedialiveChannel#font_size}
    */
    readonly fontSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#outline_color MedialiveChannel#outline_color}
    */
    readonly outlineColor: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#outline_size MedialiveChannel#outline_size}
    */
    readonly outlineSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_color MedialiveChannel#shadow_color}
    */
    readonly shadowColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_opacity MedialiveChannel#shadow_opacity}
    */
    readonly shadowOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_x_offset MedialiveChannel#shadow_x_offset}
    */
    readonly shadowXOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_y_offset MedialiveChannel#shadow_y_offset}
    */
    readonly shadowYOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#teletext_grid_control MedialiveChannel#teletext_grid_control}
    */
    readonly teletextGridControl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#x_position MedialiveChannel#x_position}
    */
    readonly xPosition?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#y_position MedialiveChannel#y_position}
    */
    readonly yPosition?: number;
    /**
    * font block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font MedialiveChannel#font}
    */
    readonly font?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings | undefined);
    private _alignment?;
    get alignment(): string;
    set alignment(value: string);
    resetAlignment(): void;
    get alignmentInput(): string | undefined;
    private _backgroundColor?;
    get backgroundColor(): string;
    set backgroundColor(value: string);
    resetBackgroundColor(): void;
    get backgroundColorInput(): string | undefined;
    private _backgroundOpacity?;
    get backgroundOpacity(): number;
    set backgroundOpacity(value: number);
    resetBackgroundOpacity(): void;
    get backgroundOpacityInput(): number | undefined;
    private _fontColor?;
    get fontColor(): string;
    set fontColor(value: string);
    resetFontColor(): void;
    get fontColorInput(): string | undefined;
    private _fontOpacity?;
    get fontOpacity(): number;
    set fontOpacity(value: number);
    resetFontOpacity(): void;
    get fontOpacityInput(): number | undefined;
    private _fontResolution?;
    get fontResolution(): number;
    set fontResolution(value: number);
    resetFontResolution(): void;
    get fontResolutionInput(): number | undefined;
    private _fontSize?;
    get fontSize(): string;
    set fontSize(value: string);
    resetFontSize(): void;
    get fontSizeInput(): string | undefined;
    private _outlineColor?;
    get outlineColor(): string;
    set outlineColor(value: string);
    get outlineColorInput(): string | undefined;
    private _outlineSize?;
    get outlineSize(): number;
    set outlineSize(value: number);
    resetOutlineSize(): void;
    get outlineSizeInput(): number | undefined;
    private _shadowColor?;
    get shadowColor(): string;
    set shadowColor(value: string);
    resetShadowColor(): void;
    get shadowColorInput(): string | undefined;
    private _shadowOpacity?;
    get shadowOpacity(): number;
    set shadowOpacity(value: number);
    resetShadowOpacity(): void;
    get shadowOpacityInput(): number | undefined;
    private _shadowXOffset?;
    get shadowXOffset(): number;
    set shadowXOffset(value: number);
    resetShadowXOffset(): void;
    get shadowXOffsetInput(): number | undefined;
    private _shadowYOffset?;
    get shadowYOffset(): number;
    set shadowYOffset(value: number);
    resetShadowYOffset(): void;
    get shadowYOffsetInput(): number | undefined;
    private _teletextGridControl?;
    get teletextGridControl(): string;
    set teletextGridControl(value: string);
    get teletextGridControlInput(): string | undefined;
    private _xPosition?;
    get xPosition(): number;
    set xPosition(value: number);
    resetXPosition(): void;
    get xPositionInput(): number | undefined;
    private _yPosition?;
    get yPosition(): number;
    set yPosition(value: number);
    resetYPosition(): void;
    get yPositionInput(): number | undefined;
    private _font;
    get font(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFontOutputReference;
    putFont(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont): void;
    resetFont(): void;
    get fontInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsFont | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#alignment MedialiveChannel#alignment}
    */
    readonly alignment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#background_color MedialiveChannel#background_color}
    */
    readonly backgroundColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#background_opacity MedialiveChannel#background_opacity}
    */
    readonly backgroundOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_color MedialiveChannel#font_color}
    */
    readonly fontColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_opacity MedialiveChannel#font_opacity}
    */
    readonly fontOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_resolution MedialiveChannel#font_resolution}
    */
    readonly fontResolution?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_size MedialiveChannel#font_size}
    */
    readonly fontSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#outline_color MedialiveChannel#outline_color}
    */
    readonly outlineColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#outline_size MedialiveChannel#outline_size}
    */
    readonly outlineSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_color MedialiveChannel#shadow_color}
    */
    readonly shadowColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_opacity MedialiveChannel#shadow_opacity}
    */
    readonly shadowOpacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_x_offset MedialiveChannel#shadow_x_offset}
    */
    readonly shadowXOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#shadow_y_offset MedialiveChannel#shadow_y_offset}
    */
    readonly shadowYOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#teletext_grid_control MedialiveChannel#teletext_grid_control}
    */
    readonly teletextGridControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#x_position MedialiveChannel#x_position}
    */
    readonly xPosition?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#y_position MedialiveChannel#y_position}
    */
    readonly yPosition?: number;
    /**
    * font block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font MedialiveChannel#font}
    */
    readonly font?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings | undefined);
    private _alignment?;
    get alignment(): string;
    set alignment(value: string);
    resetAlignment(): void;
    get alignmentInput(): string | undefined;
    private _backgroundColor?;
    get backgroundColor(): string;
    set backgroundColor(value: string);
    resetBackgroundColor(): void;
    get backgroundColorInput(): string | undefined;
    private _backgroundOpacity?;
    get backgroundOpacity(): number;
    set backgroundOpacity(value: number);
    resetBackgroundOpacity(): void;
    get backgroundOpacityInput(): number | undefined;
    private _fontColor?;
    get fontColor(): string;
    set fontColor(value: string);
    resetFontColor(): void;
    get fontColorInput(): string | undefined;
    private _fontOpacity?;
    get fontOpacity(): number;
    set fontOpacity(value: number);
    resetFontOpacity(): void;
    get fontOpacityInput(): number | undefined;
    private _fontResolution?;
    get fontResolution(): number;
    set fontResolution(value: number);
    resetFontResolution(): void;
    get fontResolutionInput(): number | undefined;
    private _fontSize?;
    get fontSize(): string;
    set fontSize(value: string);
    resetFontSize(): void;
    get fontSizeInput(): string | undefined;
    private _outlineColor?;
    get outlineColor(): string;
    set outlineColor(value: string);
    resetOutlineColor(): void;
    get outlineColorInput(): string | undefined;
    private _outlineSize?;
    get outlineSize(): number;
    set outlineSize(value: number);
    resetOutlineSize(): void;
    get outlineSizeInput(): number | undefined;
    private _shadowColor?;
    get shadowColor(): string;
    set shadowColor(value: string);
    resetShadowColor(): void;
    get shadowColorInput(): string | undefined;
    private _shadowOpacity?;
    get shadowOpacity(): number;
    set shadowOpacity(value: number);
    resetShadowOpacity(): void;
    get shadowOpacityInput(): number | undefined;
    private _shadowXOffset?;
    get shadowXOffset(): number;
    set shadowXOffset(value: number);
    resetShadowXOffset(): void;
    get shadowXOffsetInput(): number | undefined;
    private _shadowYOffset?;
    get shadowYOffset(): number;
    set shadowYOffset(value: number);
    resetShadowYOffset(): void;
    get shadowYOffsetInput(): number | undefined;
    private _teletextGridControl?;
    get teletextGridControl(): string;
    set teletextGridControl(value: string);
    resetTeletextGridControl(): void;
    get teletextGridControlInput(): string | undefined;
    private _xPosition?;
    get xPosition(): number;
    set xPosition(value: number);
    resetXPosition(): void;
    get xPositionInput(): number | undefined;
    private _yPosition?;
    get yPosition(): number;
    set yPosition(value: number);
    resetYPosition(): void;
    get yPositionInput(): number | undefined;
    private _font;
    get font(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFontOutputReference;
    putFont(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont): void;
    resetFont(): void;
    get fontInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsFont | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#copyright_holder MedialiveChannel#copyright_holder}
    */
    readonly copyrightHolder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fill_line_gap MedialiveChannel#fill_line_gap}
    */
    readonly fillLineGap?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#font_family MedialiveChannel#font_family}
    */
    readonly fontFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#style_control MedialiveChannel#style_control}
    */
    readonly styleControl?: string;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings | undefined);
    private _copyrightHolder?;
    get copyrightHolder(): string;
    set copyrightHolder(value: string);
    resetCopyrightHolder(): void;
    get copyrightHolderInput(): string | undefined;
    private _fillLineGap?;
    get fillLineGap(): string;
    set fillLineGap(value: string);
    resetFillLineGap(): void;
    get fillLineGapInput(): string | undefined;
    private _fontFamily?;
    get fontFamily(): string;
    set fontFamily(value: string);
    resetFontFamily(): void;
    get fontFamilyInput(): string | undefined;
    private _styleControl?;
    get styleControl(): string;
    set styleControl(value: string);
    resetStyleControl(): void;
    get styleControlInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings {
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#style_control MedialiveChannel#style_control}
    */
    readonly styleControl: string;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings | undefined);
    private _styleControl?;
    get styleControl(): string;
    set styleControl(value: string);
    get styleControlInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#style_control MedialiveChannel#style_control}
    */
    readonly styleControl: string;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings | undefined);
    private _styleControl?;
    get styleControl(): string;
    set styleControl(value: string);
    get styleControlInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings {
    /**
    * arib_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_destination_settings MedialiveChannel#arib_destination_settings}
    */
    readonly aribDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings;
    /**
    * burn_in_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#burn_in_destination_settings MedialiveChannel#burn_in_destination_settings}
    */
    readonly burnInDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings;
    /**
    * dvb_sub_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sub_destination_settings MedialiveChannel#dvb_sub_destination_settings}
    */
    readonly dvbSubDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings;
    /**
    * ebu_tt_d_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebu_tt_d_destination_settings MedialiveChannel#ebu_tt_d_destination_settings}
    */
    readonly ebuTtDDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings;
    /**
    * embedded_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#embedded_destination_settings MedialiveChannel#embedded_destination_settings}
    */
    readonly embeddedDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings;
    /**
    * embedded_plus_scte20_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#embedded_plus_scte20_destination_settings MedialiveChannel#embedded_plus_scte20_destination_settings}
    */
    readonly embeddedPlusScte20DestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings;
    /**
    * rtmp_caption_info_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rtmp_caption_info_destination_settings MedialiveChannel#rtmp_caption_info_destination_settings}
    */
    readonly rtmpCaptionInfoDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings;
    /**
    * scte20_plus_embedded_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte20_plus_embedded_destination_settings MedialiveChannel#scte20_plus_embedded_destination_settings}
    */
    readonly scte20PlusEmbeddedDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings;
    /**
    * scte27_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte27_destination_settings MedialiveChannel#scte27_destination_settings}
    */
    readonly scte27DestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings;
    /**
    * smpte_tt_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#smpte_tt_destination_settings MedialiveChannel#smpte_tt_destination_settings}
    */
    readonly smpteTtDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings;
    /**
    * teletext_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#teletext_destination_settings MedialiveChannel#teletext_destination_settings}
    */
    readonly teletextDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings;
    /**
    * ttml_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ttml_destination_settings MedialiveChannel#ttml_destination_settings}
    */
    readonly ttmlDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings;
    /**
    * webvtt_destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#webvtt_destination_settings MedialiveChannel#webvtt_destination_settings}
    */
    readonly webvttDestinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsOutputReference | MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings | undefined);
    private _aribDestinationSettings;
    get aribDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettingsOutputReference;
    putAribDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings): void;
    resetAribDestinationSettings(): void;
    get aribDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsAribDestinationSettings | undefined;
    private _burnInDestinationSettings;
    get burnInDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettingsOutputReference;
    putBurnInDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings): void;
    resetBurnInDestinationSettings(): void;
    get burnInDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsBurnInDestinationSettings | undefined;
    private _dvbSubDestinationSettings;
    get dvbSubDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettingsOutputReference;
    putDvbSubDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings): void;
    resetDvbSubDestinationSettings(): void;
    get dvbSubDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsDvbSubDestinationSettings | undefined;
    private _ebuTtDDestinationSettings;
    get ebuTtDDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettingsOutputReference;
    putEbuTtDDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings): void;
    resetEbuTtDDestinationSettings(): void;
    get ebuTtDDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEbuTtDDestinationSettings | undefined;
    private _embeddedDestinationSettings;
    get embeddedDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettingsOutputReference;
    putEmbeddedDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings): void;
    resetEmbeddedDestinationSettings(): void;
    get embeddedDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedDestinationSettings | undefined;
    private _embeddedPlusScte20DestinationSettings;
    get embeddedPlusScte20DestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettingsOutputReference;
    putEmbeddedPlusScte20DestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings): void;
    resetEmbeddedPlusScte20DestinationSettings(): void;
    get embeddedPlusScte20DestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsEmbeddedPlusScte20DestinationSettings | undefined;
    private _rtmpCaptionInfoDestinationSettings;
    get rtmpCaptionInfoDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettingsOutputReference;
    putRtmpCaptionInfoDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings): void;
    resetRtmpCaptionInfoDestinationSettings(): void;
    get rtmpCaptionInfoDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsRtmpCaptionInfoDestinationSettings | undefined;
    private _scte20PlusEmbeddedDestinationSettings;
    get scte20PlusEmbeddedDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettingsOutputReference;
    putScte20PlusEmbeddedDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings): void;
    resetScte20PlusEmbeddedDestinationSettings(): void;
    get scte20PlusEmbeddedDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte20PlusEmbeddedDestinationSettings | undefined;
    private _scte27DestinationSettings;
    get scte27DestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettingsOutputReference;
    putScte27DestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings): void;
    resetScte27DestinationSettings(): void;
    get scte27DestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsScte27DestinationSettings | undefined;
    private _smpteTtDestinationSettings;
    get smpteTtDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettingsOutputReference;
    putSmpteTtDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings): void;
    resetSmpteTtDestinationSettings(): void;
    get smpteTtDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsSmpteTtDestinationSettings | undefined;
    private _teletextDestinationSettings;
    get teletextDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettingsOutputReference;
    putTeletextDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings): void;
    resetTeletextDestinationSettings(): void;
    get teletextDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTeletextDestinationSettings | undefined;
    private _ttmlDestinationSettings;
    get ttmlDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettingsOutputReference;
    putTtmlDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings): void;
    resetTtmlDestinationSettings(): void;
    get ttmlDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsTtmlDestinationSettings | undefined;
    private _webvttDestinationSettings;
    get webvttDestinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettingsOutputReference;
    putWebvttDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings): void;
    resetWebvttDestinationSettings(): void;
    get webvttDestinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsWebvttDestinationSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsCaptionDescriptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#accessibility MedialiveChannel#accessibility}
    */
    readonly accessibility?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_selector_name MedialiveChannel#caption_selector_name}
    */
    readonly captionSelectorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
    */
    readonly languageCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_description MedialiveChannel#language_description}
    */
    readonly languageDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * destination_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_settings MedialiveChannel#destination_settings}
    */
    readonly destinationSettings?: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings;
}
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsToTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptions | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsCaptionDescriptionsToHclTerraform(struct?: MedialiveChannelEncoderSettingsCaptionDescriptions | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsCaptionDescriptions | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsCaptionDescriptions | cdktf.IResolvable | undefined);
    private _accessibility?;
    get accessibility(): string;
    set accessibility(value: string);
    resetAccessibility(): void;
    get accessibilityInput(): string | undefined;
    private _captionSelectorName?;
    get captionSelectorName(): string;
    set captionSelectorName(value: string);
    get captionSelectorNameInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _languageDescription?;
    get languageDescription(): string;
    set languageDescription(value: string);
    resetLanguageDescription(): void;
    get languageDescriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _destinationSettings;
    get destinationSettings(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettingsOutputReference;
    putDestinationSettings(value: MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings): void;
    resetDestinationSettings(): void;
    get destinationSettingsInput(): MedialiveChannelEncoderSettingsCaptionDescriptionsDestinationSettings | undefined;
}
export declare class MedialiveChannelEncoderSettingsCaptionDescriptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsCaptionDescriptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsCaptionDescriptionsOutputReference;
}
export interface MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateToTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateOutputReference | MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate): any;
export declare function medialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateToHclTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateOutputReference | MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate): any;
export declare class MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#black_frame_msec MedialiveChannel#black_frame_msec}
    */
    readonly blackFrameMsec?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_image_color MedialiveChannel#input_loss_image_color}
    */
    readonly inputLossImageColor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_image_type MedialiveChannel#input_loss_image_type}
    */
    readonly inputLossImageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#repeat_frame_msec MedialiveChannel#repeat_frame_msec}
    */
    readonly repeatFrameMsec?: number;
    /**
    * input_loss_image_slate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_image_slate MedialiveChannel#input_loss_image_slate}
    */
    readonly inputLossImageSlate?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate;
}
export declare function medialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorToTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorOutputReference | MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior): any;
export declare function medialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorToHclTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorOutputReference | MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior): any;
export declare class MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior | undefined);
    private _blackFrameMsec?;
    get blackFrameMsec(): number;
    set blackFrameMsec(value: number);
    resetBlackFrameMsec(): void;
    get blackFrameMsecInput(): number | undefined;
    private _inputLossImageColor?;
    get inputLossImageColor(): string;
    set inputLossImageColor(value: string);
    resetInputLossImageColor(): void;
    get inputLossImageColorInput(): string | undefined;
    private _inputLossImageType?;
    get inputLossImageType(): string;
    set inputLossImageType(value: string);
    resetInputLossImageType(): void;
    get inputLossImageTypeInput(): string | undefined;
    private _repeatFrameMsec?;
    get repeatFrameMsec(): number;
    set repeatFrameMsec(value: number);
    resetRepeatFrameMsec(): void;
    get repeatFrameMsecInput(): number | undefined;
    private _inputLossImageSlate;
    get inputLossImageSlate(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlateOutputReference;
    putInputLossImageSlate(value: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate): void;
    resetInputLossImageSlate(): void;
    get inputLossImageSlateInput(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate | undefined;
}
export interface MedialiveChannelEncoderSettingsGlobalConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#initial_audio_gain MedialiveChannel#initial_audio_gain}
    */
    readonly initialAudioGain?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_end_action MedialiveChannel#input_end_action}
    */
    readonly inputEndAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_locking_mode MedialiveChannel#output_locking_mode}
    */
    readonly outputLockingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_timing_source MedialiveChannel#output_timing_source}
    */
    readonly outputTimingSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#support_low_framerate_inputs MedialiveChannel#support_low_framerate_inputs}
    */
    readonly supportLowFramerateInputs?: string;
    /**
    * input_loss_behavior block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_behavior MedialiveChannel#input_loss_behavior}
    */
    readonly inputLossBehavior?: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior;
}
export declare function medialiveChannelEncoderSettingsGlobalConfigurationToTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationOutputReference | MedialiveChannelEncoderSettingsGlobalConfiguration): any;
export declare function medialiveChannelEncoderSettingsGlobalConfigurationToHclTerraform(struct?: MedialiveChannelEncoderSettingsGlobalConfigurationOutputReference | MedialiveChannelEncoderSettingsGlobalConfiguration): any;
export declare class MedialiveChannelEncoderSettingsGlobalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsGlobalConfiguration | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsGlobalConfiguration | undefined);
    private _initialAudioGain?;
    get initialAudioGain(): number;
    set initialAudioGain(value: number);
    resetInitialAudioGain(): void;
    get initialAudioGainInput(): number | undefined;
    private _inputEndAction?;
    get inputEndAction(): string;
    set inputEndAction(value: string);
    resetInputEndAction(): void;
    get inputEndActionInput(): string | undefined;
    private _outputLockingMode?;
    get outputLockingMode(): string;
    set outputLockingMode(value: string);
    resetOutputLockingMode(): void;
    get outputLockingModeInput(): string | undefined;
    private _outputTimingSource?;
    get outputTimingSource(): string;
    set outputTimingSource(value: string);
    resetOutputTimingSource(): void;
    get outputTimingSourceInput(): string | undefined;
    private _supportLowFramerateInputs?;
    get supportLowFramerateInputs(): string;
    set supportLowFramerateInputs(value: string);
    resetSupportLowFramerateInputs(): void;
    get supportLowFramerateInputsInput(): string | undefined;
    private _inputLossBehavior;
    get inputLossBehavior(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehaviorOutputReference;
    putInputLossBehavior(value: MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior): void;
    resetInputLossBehavior(): void;
    get inputLossBehaviorInput(): MedialiveChannelEncoderSettingsGlobalConfigurationInputLossBehavior | undefined;
}
export interface MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings {
}
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings): any;
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings): any;
export declare class MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings {
    /**
    * html_motion_graphics_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#html_motion_graphics_settings MedialiveChannel#html_motion_graphics_settings}
    */
    readonly htmlMotionGraphicsSettings?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings;
}
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings): any;
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings): any;
export declare class MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings | undefined);
    private _htmlMotionGraphicsSettings;
    get htmlMotionGraphicsSettings(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettingsOutputReference;
    putHtmlMotionGraphicsSettings(value: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings): void;
    resetHtmlMotionGraphicsSettings(): void;
    get htmlMotionGraphicsSettingsInput(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsHtmlMotionGraphicsSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsMotionGraphicsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#motion_graphics_insertion MedialiveChannel#motion_graphics_insertion}
    */
    readonly motionGraphicsInsertion?: string;
    /**
    * motion_graphics_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#motion_graphics_settings MedialiveChannel#motion_graphics_settings}
    */
    readonly motionGraphicsSettings: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings;
}
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationToTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfiguration): any;
export declare function medialiveChannelEncoderSettingsMotionGraphicsConfigurationToHclTerraform(struct?: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationOutputReference | MedialiveChannelEncoderSettingsMotionGraphicsConfiguration): any;
export declare class MedialiveChannelEncoderSettingsMotionGraphicsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsMotionGraphicsConfiguration | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsMotionGraphicsConfiguration | undefined);
    private _motionGraphicsInsertion?;
    get motionGraphicsInsertion(): string;
    set motionGraphicsInsertion(value: string);
    resetMotionGraphicsInsertion(): void;
    get motionGraphicsInsertionInput(): string | undefined;
    private _motionGraphicsSettings;
    get motionGraphicsSettings(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettingsOutputReference;
    putMotionGraphicsSettings(value: MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings): void;
    get motionGraphicsSettingsInput(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationMotionGraphicsSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsNielsenConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#distributor_id MedialiveChannel#distributor_id}
    */
    readonly distributorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_pcm_to_id3_tagging MedialiveChannel#nielsen_pcm_to_id3_tagging}
    */
    readonly nielsenPcmToId3Tagging?: string;
}
export declare function medialiveChannelEncoderSettingsNielsenConfigurationToTerraform(struct?: MedialiveChannelEncoderSettingsNielsenConfigurationOutputReference | MedialiveChannelEncoderSettingsNielsenConfiguration): any;
export declare function medialiveChannelEncoderSettingsNielsenConfigurationToHclTerraform(struct?: MedialiveChannelEncoderSettingsNielsenConfigurationOutputReference | MedialiveChannelEncoderSettingsNielsenConfiguration): any;
export declare class MedialiveChannelEncoderSettingsNielsenConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsNielsenConfiguration | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsNielsenConfiguration | undefined);
    private _distributorId?;
    get distributorId(): string;
    set distributorId(value: string);
    resetDistributorId(): void;
    get distributorIdInput(): string | undefined;
    private _nielsenPcmToId3Tagging?;
    get nielsenPcmToId3Tagging(): string;
    set nielsenPcmToId3Tagging(value: string);
    resetNielsenPcmToId3Tagging(): void;
    get nielsenPcmToId3TaggingInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#canned_acl MedialiveChannel#canned_acl}
    */
    readonly cannedAcl?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings | undefined);
    private _cannedAcl?;
    get cannedAcl(): string;
    set cannedAcl(value: string);
    resetCannedAcl(): void;
    get cannedAclInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings {
    /**
    * archive_s3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#archive_s3_settings MedialiveChannel#archive_s3_settings}
    */
    readonly archiveS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings | undefined);
    private _archiveS3Settings;
    get archiveS3Settings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3SettingsOutputReference;
    putArchiveS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings): void;
    resetArchiveS3Settings(): void;
    get archiveS3SettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsArchiveS3Settings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rollover_interval MedialiveChannel#rollover_interval}
    */
    readonly rolloverInterval?: number;
    /**
    * archive_cdn_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#archive_cdn_settings MedialiveChannel#archive_cdn_settings}
    */
    readonly archiveCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings | cdktf.IResolvable | undefined);
    private _rolloverInterval?;
    get rolloverInterval(): number;
    set rolloverInterval(value: number);
    resetRolloverInterval(): void;
    get rolloverIntervalInput(): number | undefined;
    private _archiveCdnSettings;
    get archiveCdnSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettingsOutputReference;
    putArchiveCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings): void;
    resetArchiveCdnSettings(): void;
    get archiveCdnSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsArchiveCdnSettings | undefined;
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsDestination | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#canned_acl MedialiveChannel#canned_acl}
    */
    readonly cannedAcl?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings | undefined);
    private _cannedAcl?;
    get cannedAcl(): string;
    set cannedAcl(value: string);
    resetCannedAcl(): void;
    get cannedAclInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings {
    /**
    * frame_capture_s3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_s3_settings MedialiveChannel#frame_capture_s3_settings}
    */
    readonly frameCaptureS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings | undefined);
    private _frameCaptureS3Settings;
    get frameCaptureS3Settings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3SettingsOutputReference;
    putFrameCaptureS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings): void;
    resetFrameCaptureS3Settings(): void;
    get frameCaptureS3SettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsFrameCaptureS3Settings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination;
    /**
    * frame_capture_cdn_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_cdn_settings MedialiveChannel#frame_capture_cdn_settings}
    */
    readonly frameCaptureCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings | undefined);
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsDestination | undefined;
    private _frameCaptureCdnSettings;
    get frameCaptureCdnSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettingsOutputReference;
    putFrameCaptureCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings): void;
    resetFrameCaptureCdnSettings(): void;
    get frameCaptureCdnSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsFrameCaptureCdnSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_channel MedialiveChannel#caption_channel}
    */
    readonly captionChannel: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_description MedialiveChannel#language_description}
    */
    readonly languageDescription: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings | cdktf.IResolvable | undefined);
    private _captionChannel?;
    get captionChannel(): number;
    set captionChannel(value: number);
    get captionChannelInput(): number | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _languageDescription?;
    get languageDescription(): string;
    set languageDescription(value: string);
    get languageDescriptionInput(): string | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
    */
    readonly filecacheDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#http_transfer_mode MedialiveChannel#http_transfer_mode}
    */
    readonly httpTransferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#salt MedialiveChannel#salt}
    */
    readonly salt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#token MedialiveChannel#token}
    */
    readonly token?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings | undefined);
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _filecacheDuration?;
    get filecacheDuration(): number;
    set filecacheDuration(value: number);
    resetFilecacheDuration(): void;
    get filecacheDurationInput(): number | undefined;
    private _httpTransferMode?;
    get httpTransferMode(): string;
    set httpTransferMode(value: string);
    resetHttpTransferMode(): void;
    get httpTransferModeInput(): string | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
    private _salt?;
    get salt(): string;
    set salt(value: string);
    resetSalt(): void;
    get saltInput(): string | undefined;
    private _token?;
    get token(): string;
    set token(value: string);
    resetToken(): void;
    get tokenInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
    */
    readonly filecacheDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings | undefined);
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _filecacheDuration?;
    get filecacheDuration(): number;
    set filecacheDuration(value: number);
    resetFilecacheDuration(): void;
    get filecacheDurationInput(): number | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
    */
    readonly filecacheDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#media_store_storage_class MedialiveChannel#media_store_storage_class}
    */
    readonly mediaStoreStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings | undefined);
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _filecacheDuration?;
    get filecacheDuration(): number;
    set filecacheDuration(value: number);
    resetFilecacheDuration(): void;
    get filecacheDurationInput(): number | undefined;
    private _mediaStoreStorageClass?;
    get mediaStoreStorageClass(): string;
    set mediaStoreStorageClass(value: string);
    resetMediaStoreStorageClass(): void;
    get mediaStoreStorageClassInput(): string | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#canned_acl MedialiveChannel#canned_acl}
    */
    readonly cannedAcl?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings | undefined);
    private _cannedAcl?;
    get cannedAcl(): string;
    set cannedAcl(value: string);
    resetCannedAcl(): void;
    get cannedAclInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
    */
    readonly filecacheDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#http_transfer_mode MedialiveChannel#http_transfer_mode}
    */
    readonly httpTransferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings | undefined);
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _filecacheDuration?;
    get filecacheDuration(): number;
    set filecacheDuration(value: number);
    resetFilecacheDuration(): void;
    get filecacheDurationInput(): number | undefined;
    private _httpTransferMode?;
    get httpTransferMode(): string;
    set httpTransferMode(value: string);
    resetHttpTransferMode(): void;
    get httpTransferModeInput(): string | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings {
    /**
    * hls_akamai_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_akamai_settings MedialiveChannel#hls_akamai_settings}
    */
    readonly hlsAkamaiSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings;
    /**
    * hls_basic_put_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_basic_put_settings MedialiveChannel#hls_basic_put_settings}
    */
    readonly hlsBasicPutSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings;
    /**
    * hls_media_store_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_media_store_settings MedialiveChannel#hls_media_store_settings}
    */
    readonly hlsMediaStoreSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings;
    /**
    * hls_s3_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_s3_settings MedialiveChannel#hls_s3_settings}
    */
    readonly hlsS3Settings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings;
    /**
    * hls_webdav_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_webdav_settings MedialiveChannel#hls_webdav_settings}
    */
    readonly hlsWebdavSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings | cdktf.IResolvable | undefined);
    private _hlsAkamaiSettings;
    get hlsAkamaiSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettingsOutputReference;
    putHlsAkamaiSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings): void;
    resetHlsAkamaiSettings(): void;
    get hlsAkamaiSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsAkamaiSettings | undefined;
    private _hlsBasicPutSettings;
    get hlsBasicPutSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettingsOutputReference;
    putHlsBasicPutSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings): void;
    resetHlsBasicPutSettings(): void;
    get hlsBasicPutSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsBasicPutSettings | undefined;
    private _hlsMediaStoreSettings;
    get hlsMediaStoreSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettingsOutputReference;
    putHlsMediaStoreSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings): void;
    resetHlsMediaStoreSettings(): void;
    get hlsMediaStoreSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsMediaStoreSettings | undefined;
    private _hlsS3Settings;
    get hlsS3Settings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3SettingsOutputReference;
    putHlsS3Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings): void;
    resetHlsS3Settings(): void;
    get hlsS3SettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsS3Settings | undefined;
    private _hlsWebdavSettings;
    get hlsWebdavSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettingsOutputReference;
    putHlsWebdavSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings): void;
    resetHlsWebdavSettings(): void;
    get hlsWebdavSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsHlsWebdavSettings | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#static_key_value MedialiveChannel#static_key_value}
    */
    readonly staticKeyValue: string;
    /**
    * key_provider_server block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#key_provider_server MedialiveChannel#key_provider_server}
    */
    readonly keyProviderServer?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings | cdktf.IResolvable | undefined);
    private _staticKeyValue?;
    get staticKeyValue(): string;
    set staticKeyValue(value: string);
    get staticKeyValueInput(): string | undefined;
    private _keyProviderServer;
    get keyProviderServer(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServerOutputReference;
    putKeyProviderServer(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer): void;
    resetKeyProviderServer(): void;
    get keyProviderServerInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsKeyProviderServer | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsOutputReference;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings {
    /**
    * static_key_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#static_key_settings MedialiveChannel#static_key_settings}
    */
    readonly staticKeySettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings | undefined);
    private _staticKeySettings;
    get staticKeySettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettingsList;
    putStaticKeySettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | cdktf.IResolvable): void;
    resetStaticKeySettings(): void;
    get staticKeySettingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsStaticKeySettings[] | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ad_markers MedialiveChannel#ad_markers}
    */
    readonly adMarkers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#base_url_content MedialiveChannel#base_url_content}
    */
    readonly baseUrlContent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#base_url_content1 MedialiveChannel#base_url_content1}
    */
    readonly baseUrlContent1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#base_url_manifest MedialiveChannel#base_url_manifest}
    */
    readonly baseUrlManifest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#base_url_manifest1 MedialiveChannel#base_url_manifest1}
    */
    readonly baseUrlManifest1?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_language_setting MedialiveChannel#caption_language_setting}
    */
    readonly captionLanguageSetting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#client_cache MedialiveChannel#client_cache}
    */
    readonly clientCache?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#codec_specification MedialiveChannel#codec_specification}
    */
    readonly codecSpecification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#constant_iv MedialiveChannel#constant_iv}
    */
    readonly constantIv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#directory_structure MedialiveChannel#directory_structure}
    */
    readonly directoryStructure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#discontinuity_tags MedialiveChannel#discontinuity_tags}
    */
    readonly discontinuityTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#encryption_type MedialiveChannel#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_id3_segment_tagging MedialiveChannel#hls_id3_segment_tagging}
    */
    readonly hlsId3SegmentTagging?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#iframe_only_playlists MedialiveChannel#iframe_only_playlists}
    */
    readonly iframeOnlyPlaylists?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#incomplete_segment_behavior MedialiveChannel#incomplete_segment_behavior}
    */
    readonly incompleteSegmentBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#index_n_segments MedialiveChannel#index_n_segments}
    */
    readonly indexNSegments?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
    */
    readonly inputLossAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#iv_in_manifest MedialiveChannel#iv_in_manifest}
    */
    readonly ivInManifest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#iv_source MedialiveChannel#iv_source}
    */
    readonly ivSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#keep_segments MedialiveChannel#keep_segments}
    */
    readonly keepSegments?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#key_format MedialiveChannel#key_format}
    */
    readonly keyFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#key_format_versions MedialiveChannel#key_format_versions}
    */
    readonly keyFormatVersions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#manifest_compression MedialiveChannel#manifest_compression}
    */
    readonly manifestCompression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#manifest_duration_format MedialiveChannel#manifest_duration_format}
    */
    readonly manifestDurationFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#min_segment_length MedialiveChannel#min_segment_length}
    */
    readonly minSegmentLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#mode MedialiveChannel#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_selection MedialiveChannel#output_selection}
    */
    readonly outputSelection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_date_time MedialiveChannel#program_date_time}
    */
    readonly programDateTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_date_time_clock MedialiveChannel#program_date_time_clock}
    */
    readonly programDateTimeClock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_date_time_period MedialiveChannel#program_date_time_period}
    */
    readonly programDateTimePeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#redundant_manifest MedialiveChannel#redundant_manifest}
    */
    readonly redundantManifest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segment_length MedialiveChannel#segment_length}
    */
    readonly segmentLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segments_per_subdirectory MedialiveChannel#segments_per_subdirectory}
    */
    readonly segmentsPerSubdirectory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#stream_inf_resolution MedialiveChannel#stream_inf_resolution}
    */
    readonly streamInfResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_id3_frame MedialiveChannel#timed_metadata_id3_frame}
    */
    readonly timedMetadataId3Frame?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_id3_period MedialiveChannel#timed_metadata_id3_period}
    */
    readonly timedMetadataId3Period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timestamp_delta_milliseconds MedialiveChannel#timestamp_delta_milliseconds}
    */
    readonly timestampDeltaMilliseconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ts_file_mode MedialiveChannel#ts_file_mode}
    */
    readonly tsFileMode?: string;
    /**
    * caption_language_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_language_mappings MedialiveChannel#caption_language_mappings}
    */
    readonly captionLanguageMappings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination;
    /**
    * hls_cdn_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_cdn_settings MedialiveChannel#hls_cdn_settings}
    */
    readonly hlsCdnSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable;
    /**
    * key_provider_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#key_provider_settings MedialiveChannel#key_provider_settings}
    */
    readonly keyProviderSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings | undefined);
    private _adMarkers?;
    get adMarkers(): string[];
    set adMarkers(value: string[]);
    resetAdMarkers(): void;
    get adMarkersInput(): string[] | undefined;
    private _baseUrlContent?;
    get baseUrlContent(): string;
    set baseUrlContent(value: string);
    resetBaseUrlContent(): void;
    get baseUrlContentInput(): string | undefined;
    private _baseUrlContent1?;
    get baseUrlContent1(): string;
    set baseUrlContent1(value: string);
    resetBaseUrlContent1(): void;
    get baseUrlContent1Input(): string | undefined;
    private _baseUrlManifest?;
    get baseUrlManifest(): string;
    set baseUrlManifest(value: string);
    resetBaseUrlManifest(): void;
    get baseUrlManifestInput(): string | undefined;
    private _baseUrlManifest1?;
    get baseUrlManifest1(): string;
    set baseUrlManifest1(value: string);
    resetBaseUrlManifest1(): void;
    get baseUrlManifest1Input(): string | undefined;
    private _captionLanguageSetting?;
    get captionLanguageSetting(): string;
    set captionLanguageSetting(value: string);
    resetCaptionLanguageSetting(): void;
    get captionLanguageSettingInput(): string | undefined;
    private _clientCache?;
    get clientCache(): string;
    set clientCache(value: string);
    resetClientCache(): void;
    get clientCacheInput(): string | undefined;
    private _codecSpecification?;
    get codecSpecification(): string;
    set codecSpecification(value: string);
    resetCodecSpecification(): void;
    get codecSpecificationInput(): string | undefined;
    private _constantIv?;
    get constantIv(): string;
    set constantIv(value: string);
    resetConstantIv(): void;
    get constantIvInput(): string | undefined;
    private _directoryStructure?;
    get directoryStructure(): string;
    set directoryStructure(value: string);
    resetDirectoryStructure(): void;
    get directoryStructureInput(): string | undefined;
    private _discontinuityTags?;
    get discontinuityTags(): string;
    set discontinuityTags(value: string);
    resetDiscontinuityTags(): void;
    get discontinuityTagsInput(): string | undefined;
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
    private _hlsId3SegmentTagging?;
    get hlsId3SegmentTagging(): string;
    set hlsId3SegmentTagging(value: string);
    resetHlsId3SegmentTagging(): void;
    get hlsId3SegmentTaggingInput(): string | undefined;
    private _iframeOnlyPlaylists?;
    get iframeOnlyPlaylists(): string;
    set iframeOnlyPlaylists(value: string);
    resetIframeOnlyPlaylists(): void;
    get iframeOnlyPlaylistsInput(): string | undefined;
    private _incompleteSegmentBehavior?;
    get incompleteSegmentBehavior(): string;
    set incompleteSegmentBehavior(value: string);
    resetIncompleteSegmentBehavior(): void;
    get incompleteSegmentBehaviorInput(): string | undefined;
    private _indexNSegments?;
    get indexNSegments(): number;
    set indexNSegments(value: number);
    resetIndexNSegments(): void;
    get indexNSegmentsInput(): number | undefined;
    private _inputLossAction?;
    get inputLossAction(): string;
    set inputLossAction(value: string);
    resetInputLossAction(): void;
    get inputLossActionInput(): string | undefined;
    private _ivInManifest?;
    get ivInManifest(): string;
    set ivInManifest(value: string);
    resetIvInManifest(): void;
    get ivInManifestInput(): string | undefined;
    private _ivSource?;
    get ivSource(): string;
    set ivSource(value: string);
    resetIvSource(): void;
    get ivSourceInput(): string | undefined;
    private _keepSegments?;
    get keepSegments(): number;
    set keepSegments(value: number);
    resetKeepSegments(): void;
    get keepSegmentsInput(): number | undefined;
    private _keyFormat?;
    get keyFormat(): string;
    set keyFormat(value: string);
    resetKeyFormat(): void;
    get keyFormatInput(): string | undefined;
    private _keyFormatVersions?;
    get keyFormatVersions(): string;
    set keyFormatVersions(value: string);
    resetKeyFormatVersions(): void;
    get keyFormatVersionsInput(): string | undefined;
    private _manifestCompression?;
    get manifestCompression(): string;
    set manifestCompression(value: string);
    resetManifestCompression(): void;
    get manifestCompressionInput(): string | undefined;
    private _manifestDurationFormat?;
    get manifestDurationFormat(): string;
    set manifestDurationFormat(value: string);
    resetManifestDurationFormat(): void;
    get manifestDurationFormatInput(): string | undefined;
    private _minSegmentLength?;
    get minSegmentLength(): number;
    set minSegmentLength(value: number);
    resetMinSegmentLength(): void;
    get minSegmentLengthInput(): number | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _outputSelection?;
    get outputSelection(): string;
    set outputSelection(value: string);
    resetOutputSelection(): void;
    get outputSelectionInput(): string | undefined;
    private _programDateTime?;
    get programDateTime(): string;
    set programDateTime(value: string);
    resetProgramDateTime(): void;
    get programDateTimeInput(): string | undefined;
    private _programDateTimeClock?;
    get programDateTimeClock(): string;
    set programDateTimeClock(value: string);
    resetProgramDateTimeClock(): void;
    get programDateTimeClockInput(): string | undefined;
    private _programDateTimePeriod?;
    get programDateTimePeriod(): number;
    set programDateTimePeriod(value: number);
    resetProgramDateTimePeriod(): void;
    get programDateTimePeriodInput(): number | undefined;
    private _redundantManifest?;
    get redundantManifest(): string;
    set redundantManifest(value: string);
    resetRedundantManifest(): void;
    get redundantManifestInput(): string | undefined;
    private _segmentLength?;
    get segmentLength(): number;
    set segmentLength(value: number);
    resetSegmentLength(): void;
    get segmentLengthInput(): number | undefined;
    private _segmentsPerSubdirectory?;
    get segmentsPerSubdirectory(): number;
    set segmentsPerSubdirectory(value: number);
    resetSegmentsPerSubdirectory(): void;
    get segmentsPerSubdirectoryInput(): number | undefined;
    private _streamInfResolution?;
    get streamInfResolution(): string;
    set streamInfResolution(value: string);
    resetStreamInfResolution(): void;
    get streamInfResolutionInput(): string | undefined;
    private _timedMetadataId3Frame?;
    get timedMetadataId3Frame(): string;
    set timedMetadataId3Frame(value: string);
    resetTimedMetadataId3Frame(): void;
    get timedMetadataId3FrameInput(): string | undefined;
    private _timedMetadataId3Period?;
    get timedMetadataId3Period(): number;
    set timedMetadataId3Period(value: number);
    resetTimedMetadataId3Period(): void;
    get timedMetadataId3PeriodInput(): number | undefined;
    private _timestampDeltaMilliseconds?;
    get timestampDeltaMilliseconds(): number;
    set timestampDeltaMilliseconds(value: number);
    resetTimestampDeltaMilliseconds(): void;
    get timestampDeltaMillisecondsInput(): number | undefined;
    private _tsFileMode?;
    get tsFileMode(): string;
    set tsFileMode(value: string);
    resetTsFileMode(): void;
    get tsFileModeInput(): string | undefined;
    private _captionLanguageMappings;
    get captionLanguageMappings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappingsList;
    putCaptionLanguageMappings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | cdktf.IResolvable): void;
    resetCaptionLanguageMappings(): void;
    get captionLanguageMappingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsCaptionLanguageMappings[] | undefined;
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsDestination | undefined;
    private _hlsCdnSettings;
    get hlsCdnSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettingsList;
    putHlsCdnSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | cdktf.IResolvable): void;
    resetHlsCdnSettings(): void;
    get hlsCdnSettingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsHlsCdnSettings[] | undefined;
    private _keyProviderSettings;
    get keyProviderSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettingsOutputReference;
    putKeyProviderSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings): void;
    resetKeyProviderSettings(): void;
    get keyProviderSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsKeyProviderSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings | undefined);
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsDestination | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#acquisition_point_id MedialiveChannel#acquisition_point_id}
    */
    readonly acquisitionPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_only_timecode_control MedialiveChannel#audio_only_timecode_control}
    */
    readonly audioOnlyTimecodeControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#certificate_mode MedialiveChannel#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#event_id MedialiveChannel#event_id}
    */
    readonly eventId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#event_id_mode MedialiveChannel#event_id_mode}
    */
    readonly eventIdMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#event_stop_behavior MedialiveChannel#event_stop_behavior}
    */
    readonly eventStopBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filecache_duration MedialiveChannel#filecache_duration}
    */
    readonly filecacheDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fragment_length MedialiveChannel#fragment_length}
    */
    readonly fragmentLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
    */
    readonly inputLossAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_mode MedialiveChannel#segmentation_mode}
    */
    readonly segmentationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#send_delay_ms MedialiveChannel#send_delay_ms}
    */
    readonly sendDelayMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sparse_track_type MedialiveChannel#sparse_track_type}
    */
    readonly sparseTrackType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#stream_manifest_behavior MedialiveChannel#stream_manifest_behavior}
    */
    readonly streamManifestBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timestamp_offset MedialiveChannel#timestamp_offset}
    */
    readonly timestampOffset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timestamp_offset_mode MedialiveChannel#timestamp_offset_mode}
    */
    readonly timestampOffsetMode?: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings | undefined);
    private _acquisitionPointId?;
    get acquisitionPointId(): string;
    set acquisitionPointId(value: string);
    resetAcquisitionPointId(): void;
    get acquisitionPointIdInput(): string | undefined;
    private _audioOnlyTimecodeControl?;
    get audioOnlyTimecodeControl(): string;
    set audioOnlyTimecodeControl(value: string);
    resetAudioOnlyTimecodeControl(): void;
    get audioOnlyTimecodeControlInput(): string | undefined;
    private _certificateMode?;
    get certificateMode(): string;
    set certificateMode(value: string);
    resetCertificateMode(): void;
    get certificateModeInput(): string | undefined;
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _eventId?;
    get eventId(): string;
    set eventId(value: string);
    resetEventId(): void;
    get eventIdInput(): string | undefined;
    private _eventIdMode?;
    get eventIdMode(): string;
    set eventIdMode(value: string);
    resetEventIdMode(): void;
    get eventIdModeInput(): string | undefined;
    private _eventStopBehavior?;
    get eventStopBehavior(): string;
    set eventStopBehavior(value: string);
    resetEventStopBehavior(): void;
    get eventStopBehaviorInput(): string | undefined;
    private _filecacheDuration?;
    get filecacheDuration(): number;
    set filecacheDuration(value: number);
    resetFilecacheDuration(): void;
    get filecacheDurationInput(): number | undefined;
    private _fragmentLength?;
    get fragmentLength(): number;
    set fragmentLength(value: number);
    resetFragmentLength(): void;
    get fragmentLengthInput(): number | undefined;
    private _inputLossAction?;
    get inputLossAction(): string;
    set inputLossAction(value: string);
    resetInputLossAction(): void;
    get inputLossActionInput(): string | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
    private _segmentationMode?;
    get segmentationMode(): string;
    set segmentationMode(value: string);
    resetSegmentationMode(): void;
    get segmentationModeInput(): string | undefined;
    private _sendDelayMs?;
    get sendDelayMs(): number;
    set sendDelayMs(value: number);
    resetSendDelayMs(): void;
    get sendDelayMsInput(): number | undefined;
    private _sparseTrackType?;
    get sparseTrackType(): string;
    set sparseTrackType(value: string);
    resetSparseTrackType(): void;
    get sparseTrackTypeInput(): string | undefined;
    private _streamManifestBehavior?;
    get streamManifestBehavior(): string;
    set streamManifestBehavior(value: string);
    resetStreamManifestBehavior(): void;
    get streamManifestBehaviorInput(): string | undefined;
    private _timestampOffset?;
    get timestampOffset(): string;
    set timestampOffset(value: string);
    resetTimestampOffset(): void;
    get timestampOffsetInput(): string | undefined;
    private _timestampOffsetMode?;
    get timestampOffsetMode(): string;
    set timestampOffsetMode(value: string);
    resetTimestampOffsetMode(): void;
    get timestampOffsetModeInput(): string | undefined;
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsDestination | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings {
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ad_markers MedialiveChannel#ad_markers}
    */
    readonly adMarkers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#authentication_scheme MedialiveChannel#authentication_scheme}
    */
    readonly authenticationScheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cache_full_behavior MedialiveChannel#cache_full_behavior}
    */
    readonly cacheFullBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cache_length MedialiveChannel#cache_length}
    */
    readonly cacheLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_data MedialiveChannel#caption_data}
    */
    readonly captionData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
    */
    readonly inputLossAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#restart_delay MedialiveChannel#restart_delay}
    */
    readonly restartDelay?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings | undefined);
    private _adMarkers?;
    get adMarkers(): string[];
    set adMarkers(value: string[]);
    resetAdMarkers(): void;
    get adMarkersInput(): string[] | undefined;
    private _authenticationScheme?;
    get authenticationScheme(): string;
    set authenticationScheme(value: string);
    resetAuthenticationScheme(): void;
    get authenticationSchemeInput(): string | undefined;
    private _cacheFullBehavior?;
    get cacheFullBehavior(): string;
    set cacheFullBehavior(value: string);
    resetCacheFullBehavior(): void;
    get cacheFullBehaviorInput(): string | undefined;
    private _cacheLength?;
    get cacheLength(): number;
    set cacheLength(value: number);
    resetCacheLength(): void;
    get cacheLengthInput(): number | undefined;
    private _captionData?;
    get captionData(): string;
    set captionData(value: string);
    resetCaptionData(): void;
    get captionDataInput(): string | undefined;
    private _inputLossAction?;
    get inputLossAction(): string;
    set inputLossAction(value: string);
    resetInputLossAction(): void;
    get inputLossActionInput(): string | undefined;
    private _restartDelay?;
    get restartDelay(): number;
    set restartDelay(value: number);
    resetRestartDelay(): void;
    get restartDelayInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_action MedialiveChannel#input_loss_action}
    */
    readonly inputLossAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_id3_frame MedialiveChannel#timed_metadata_id3_frame}
    */
    readonly timedMetadataId3Frame?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_id3_period MedialiveChannel#timed_metadata_id3_period}
    */
    readonly timedMetadataId3Period?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings | undefined);
    private _inputLossAction?;
    get inputLossAction(): string;
    set inputLossAction(value: string);
    resetInputLossAction(): void;
    get inputLossActionInput(): string | undefined;
    private _timedMetadataId3Frame?;
    get timedMetadataId3Frame(): string;
    set timedMetadataId3Frame(value: string);
    resetTimedMetadataId3Frame(): void;
    get timedMetadataId3FrameInput(): string | undefined;
    private _timedMetadataId3Period?;
    get timedMetadataId3Period(): number;
    set timedMetadataId3Period(value: number);
    resetTimedMetadataId3Period(): void;
    get timedMetadataId3PeriodInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings {
    /**
    * archive_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#archive_group_settings MedialiveChannel#archive_group_settings}
    */
    readonly archiveGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable;
    /**
    * frame_capture_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_group_settings MedialiveChannel#frame_capture_group_settings}
    */
    readonly frameCaptureGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings;
    /**
    * hls_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_group_settings MedialiveChannel#hls_group_settings}
    */
    readonly hlsGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings;
    /**
    * media_package_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#media_package_group_settings MedialiveChannel#media_package_group_settings}
    */
    readonly mediaPackageGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings;
    /**
    * ms_smooth_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ms_smooth_group_settings MedialiveChannel#ms_smooth_group_settings}
    */
    readonly msSmoothGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings;
    /**
    * multiplex_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#multiplex_group_settings MedialiveChannel#multiplex_group_settings}
    */
    readonly multiplexGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings;
    /**
    * rtmp_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rtmp_group_settings MedialiveChannel#rtmp_group_settings}
    */
    readonly rtmpGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings;
    /**
    * udp_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#udp_group_settings MedialiveChannel#udp_group_settings}
    */
    readonly udpGroupSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings | undefined);
    private _archiveGroupSettings;
    get archiveGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettingsList;
    putArchiveGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | cdktf.IResolvable): void;
    resetArchiveGroupSettings(): void;
    get archiveGroupSettingsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsArchiveGroupSettings[] | undefined;
    private _frameCaptureGroupSettings;
    get frameCaptureGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettingsOutputReference;
    putFrameCaptureGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings): void;
    resetFrameCaptureGroupSettings(): void;
    get frameCaptureGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsFrameCaptureGroupSettings | undefined;
    private _hlsGroupSettings;
    get hlsGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettingsOutputReference;
    putHlsGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings): void;
    resetHlsGroupSettings(): void;
    get hlsGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsHlsGroupSettings | undefined;
    private _mediaPackageGroupSettings;
    get mediaPackageGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettingsOutputReference;
    putMediaPackageGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings): void;
    resetMediaPackageGroupSettings(): void;
    get mediaPackageGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMediaPackageGroupSettings | undefined;
    private _msSmoothGroupSettings;
    get msSmoothGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettingsOutputReference;
    putMsSmoothGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings): void;
    resetMsSmoothGroupSettings(): void;
    get msSmoothGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMsSmoothGroupSettings | undefined;
    private _multiplexGroupSettings;
    get multiplexGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettingsOutputReference;
    putMultiplexGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings): void;
    resetMultiplexGroupSettings(): void;
    get multiplexGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsMultiplexGroupSettings | undefined;
    private _rtmpGroupSettings;
    get rtmpGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettingsOutputReference;
    putRtmpGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings): void;
    resetRtmpGroupSettings(): void;
    get rtmpGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsRtmpGroupSettings | undefined;
    private _udpGroupSettings;
    get udpGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettingsOutputReference;
    putUdpGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings): void;
    resetUdpGroupSettings(): void;
    get udpGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsUdpGroupSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#network_id MedialiveChannel#network_id}
    */
    readonly networkId: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#network_name MedialiveChannel#network_name}
    */
    readonly networkName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined);
    private _networkId?;
    get networkId(): number;
    set networkId(value: number);
    get networkIdInput(): number | undefined;
    private _networkName?;
    get networkName(): string;
    set networkName(value: string);
    get networkNameInput(): string | undefined;
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_sdt MedialiveChannel#output_sdt}
    */
    readonly outputSdt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#service_name MedialiveChannel#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#service_provider_name MedialiveChannel#service_provider_name}
    */
    readonly serviceProviderName?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined);
    private _outputSdt?;
    get outputSdt(): string;
    set outputSdt(value: string);
    resetOutputSdt(): void;
    get outputSdtInput(): string | undefined;
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _serviceProviderName?;
    get serviceProviderName(): string;
    set serviceProviderName(value: string);
    resetServiceProviderName(): void;
    get serviceProviderNameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined);
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#absent_input_audio_behavior MedialiveChannel#absent_input_audio_behavior}
    */
    readonly absentInputAudioBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib MedialiveChannel#arib}
    */
    readonly arib?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_captions_pid MedialiveChannel#arib_captions_pid}
    */
    readonly aribCaptionsPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_captions_pid_control MedialiveChannel#arib_captions_pid_control}
    */
    readonly aribCaptionsPidControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_buffer_model MedialiveChannel#audio_buffer_model}
    */
    readonly audioBufferModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
    */
    readonly audioFramesPerPes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_pids MedialiveChannel#audio_pids}
    */
    readonly audioPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_stream_type MedialiveChannel#audio_stream_type}
    */
    readonly audioStreamType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buffer_model MedialiveChannel#buffer_model}
    */
    readonly bufferModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cc_descriptor MedialiveChannel#cc_descriptor}
    */
    readonly ccDescriptor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sub_pids MedialiveChannel#dvb_sub_pids}
    */
    readonly dvbSubPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_teletext_pid MedialiveChannel#dvb_teletext_pid}
    */
    readonly dvbTeletextPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebif MedialiveChannel#ebif}
    */
    readonly ebif?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_audio_interval MedialiveChannel#ebp_audio_interval}
    */
    readonly ebpAudioInterval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_lookahead_ms MedialiveChannel#ebp_lookahead_ms}
    */
    readonly ebpLookaheadMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_placement MedialiveChannel#ebp_placement}
    */
    readonly ebpPlacement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
    */
    readonly ecmPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#es_rate_in_pes MedialiveChannel#es_rate_in_pes}
    */
    readonly esRateInPes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#etv_platform_pid MedialiveChannel#etv_platform_pid}
    */
    readonly etvPlatformPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#etv_signal_pid MedialiveChannel#etv_signal_pid}
    */
    readonly etvSignalPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fragment_time MedialiveChannel#fragment_time}
    */
    readonly fragmentTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#klv MedialiveChannel#klv}
    */
    readonly klv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#klv_data_pids MedialiveChannel#klv_data_pids}
    */
    readonly klvDataPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
    */
    readonly nielsenId3Behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#null_packet_bitrate MedialiveChannel#null_packet_bitrate}
    */
    readonly nullPacketBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pat_interval MedialiveChannel#pat_interval}
    */
    readonly patInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_control MedialiveChannel#pcr_control}
    */
    readonly pcrControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_period MedialiveChannel#pcr_period}
    */
    readonly pcrPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
    */
    readonly pcrPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
    */
    readonly pmtInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
    */
    readonly pmtPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_num MedialiveChannel#program_num}
    */
    readonly programNum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rate_mode MedialiveChannel#rate_mode}
    */
    readonly rateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte27_pids MedialiveChannel#scte27_pids}
    */
    readonly scte27Pids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_control MedialiveChannel#scte35_control}
    */
    readonly scte35Control?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
    */
    readonly scte35Pid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_markers MedialiveChannel#segmentation_markers}
    */
    readonly segmentationMarkers?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_style MedialiveChannel#segmentation_style}
    */
    readonly segmentationStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_time MedialiveChannel#segmentation_time}
    */
    readonly segmentationTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
    */
    readonly timedMetadataBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
    */
    readonly timedMetadataPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
    */
    readonly transportStreamId?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_pid MedialiveChannel#video_pid}
    */
    readonly videoPid?: string;
    /**
    * dvb_nit_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_nit_settings MedialiveChannel#dvb_nit_settings}
    */
    readonly dvbNitSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings;
    /**
    * dvb_sdt_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sdt_settings MedialiveChannel#dvb_sdt_settings}
    */
    readonly dvbSdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings;
    /**
    * dvb_tdt_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_tdt_settings MedialiveChannel#dvb_tdt_settings}
    */
    readonly dvbTdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings | undefined);
    private _absentInputAudioBehavior?;
    get absentInputAudioBehavior(): string;
    set absentInputAudioBehavior(value: string);
    resetAbsentInputAudioBehavior(): void;
    get absentInputAudioBehaviorInput(): string | undefined;
    private _arib?;
    get arib(): string;
    set arib(value: string);
    resetArib(): void;
    get aribInput(): string | undefined;
    private _aribCaptionsPid?;
    get aribCaptionsPid(): string;
    set aribCaptionsPid(value: string);
    resetAribCaptionsPid(): void;
    get aribCaptionsPidInput(): string | undefined;
    private _aribCaptionsPidControl?;
    get aribCaptionsPidControl(): string;
    set aribCaptionsPidControl(value: string);
    resetAribCaptionsPidControl(): void;
    get aribCaptionsPidControlInput(): string | undefined;
    private _audioBufferModel?;
    get audioBufferModel(): string;
    set audioBufferModel(value: string);
    resetAudioBufferModel(): void;
    get audioBufferModelInput(): string | undefined;
    private _audioFramesPerPes?;
    get audioFramesPerPes(): number;
    set audioFramesPerPes(value: number);
    resetAudioFramesPerPes(): void;
    get audioFramesPerPesInput(): number | undefined;
    private _audioPids?;
    get audioPids(): string;
    set audioPids(value: string);
    resetAudioPids(): void;
    get audioPidsInput(): string | undefined;
    private _audioStreamType?;
    get audioStreamType(): string;
    set audioStreamType(value: string);
    resetAudioStreamType(): void;
    get audioStreamTypeInput(): string | undefined;
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _bufferModel?;
    get bufferModel(): string;
    set bufferModel(value: string);
    resetBufferModel(): void;
    get bufferModelInput(): string | undefined;
    private _ccDescriptor?;
    get ccDescriptor(): string;
    set ccDescriptor(value: string);
    resetCcDescriptor(): void;
    get ccDescriptorInput(): string | undefined;
    private _dvbSubPids?;
    get dvbSubPids(): string;
    set dvbSubPids(value: string);
    resetDvbSubPids(): void;
    get dvbSubPidsInput(): string | undefined;
    private _dvbTeletextPid?;
    get dvbTeletextPid(): string;
    set dvbTeletextPid(value: string);
    resetDvbTeletextPid(): void;
    get dvbTeletextPidInput(): string | undefined;
    private _ebif?;
    get ebif(): string;
    set ebif(value: string);
    resetEbif(): void;
    get ebifInput(): string | undefined;
    private _ebpAudioInterval?;
    get ebpAudioInterval(): string;
    set ebpAudioInterval(value: string);
    resetEbpAudioInterval(): void;
    get ebpAudioIntervalInput(): string | undefined;
    private _ebpLookaheadMs?;
    get ebpLookaheadMs(): number;
    set ebpLookaheadMs(value: number);
    resetEbpLookaheadMs(): void;
    get ebpLookaheadMsInput(): number | undefined;
    private _ebpPlacement?;
    get ebpPlacement(): string;
    set ebpPlacement(value: string);
    resetEbpPlacement(): void;
    get ebpPlacementInput(): string | undefined;
    private _ecmPid?;
    get ecmPid(): string;
    set ecmPid(value: string);
    resetEcmPid(): void;
    get ecmPidInput(): string | undefined;
    private _esRateInPes?;
    get esRateInPes(): string;
    set esRateInPes(value: string);
    resetEsRateInPes(): void;
    get esRateInPesInput(): string | undefined;
    private _etvPlatformPid?;
    get etvPlatformPid(): string;
    set etvPlatformPid(value: string);
    resetEtvPlatformPid(): void;
    get etvPlatformPidInput(): string | undefined;
    private _etvSignalPid?;
    get etvSignalPid(): string;
    set etvSignalPid(value: string);
    resetEtvSignalPid(): void;
    get etvSignalPidInput(): string | undefined;
    private _fragmentTime?;
    get fragmentTime(): number;
    set fragmentTime(value: number);
    resetFragmentTime(): void;
    get fragmentTimeInput(): number | undefined;
    private _klv?;
    get klv(): string;
    set klv(value: string);
    resetKlv(): void;
    get klvInput(): string | undefined;
    private _klvDataPids?;
    get klvDataPids(): string;
    set klvDataPids(value: string);
    resetKlvDataPids(): void;
    get klvDataPidsInput(): string | undefined;
    private _nielsenId3Behavior?;
    get nielsenId3Behavior(): string;
    set nielsenId3Behavior(value: string);
    resetNielsenId3Behavior(): void;
    get nielsenId3BehaviorInput(): string | undefined;
    private _nullPacketBitrate?;
    get nullPacketBitrate(): number;
    set nullPacketBitrate(value: number);
    resetNullPacketBitrate(): void;
    get nullPacketBitrateInput(): number | undefined;
    private _patInterval?;
    get patInterval(): number;
    set patInterval(value: number);
    resetPatInterval(): void;
    get patIntervalInput(): number | undefined;
    private _pcrControl?;
    get pcrControl(): string;
    set pcrControl(value: string);
    resetPcrControl(): void;
    get pcrControlInput(): string | undefined;
    private _pcrPeriod?;
    get pcrPeriod(): number;
    set pcrPeriod(value: number);
    resetPcrPeriod(): void;
    get pcrPeriodInput(): number | undefined;
    private _pcrPid?;
    get pcrPid(): string;
    set pcrPid(value: string);
    resetPcrPid(): void;
    get pcrPidInput(): string | undefined;
    private _pmtInterval?;
    get pmtInterval(): number;
    set pmtInterval(value: number);
    resetPmtInterval(): void;
    get pmtIntervalInput(): number | undefined;
    private _pmtPid?;
    get pmtPid(): string;
    set pmtPid(value: string);
    resetPmtPid(): void;
    get pmtPidInput(): string | undefined;
    private _programNum?;
    get programNum(): number;
    set programNum(value: number);
    resetProgramNum(): void;
    get programNumInput(): number | undefined;
    private _rateMode?;
    get rateMode(): string;
    set rateMode(value: string);
    resetRateMode(): void;
    get rateModeInput(): string | undefined;
    private _scte27Pids?;
    get scte27Pids(): string;
    set scte27Pids(value: string);
    resetScte27Pids(): void;
    get scte27PidsInput(): string | undefined;
    private _scte35Control?;
    get scte35Control(): string;
    set scte35Control(value: string);
    resetScte35Control(): void;
    get scte35ControlInput(): string | undefined;
    private _scte35Pid?;
    get scte35Pid(): string;
    set scte35Pid(value: string);
    resetScte35Pid(): void;
    get scte35PidInput(): string | undefined;
    private _segmentationMarkers?;
    get segmentationMarkers(): string;
    set segmentationMarkers(value: string);
    resetSegmentationMarkers(): void;
    get segmentationMarkersInput(): string | undefined;
    private _segmentationStyle?;
    get segmentationStyle(): string;
    set segmentationStyle(value: string);
    resetSegmentationStyle(): void;
    get segmentationStyleInput(): string | undefined;
    private _segmentationTime?;
    get segmentationTime(): number;
    set segmentationTime(value: number);
    resetSegmentationTime(): void;
    get segmentationTimeInput(): number | undefined;
    private _timedMetadataBehavior?;
    get timedMetadataBehavior(): string;
    set timedMetadataBehavior(value: string);
    resetTimedMetadataBehavior(): void;
    get timedMetadataBehaviorInput(): string | undefined;
    private _timedMetadataPid?;
    get timedMetadataPid(): string;
    set timedMetadataPid(value: string);
    resetTimedMetadataPid(): void;
    get timedMetadataPidInput(): string | undefined;
    private _transportStreamId?;
    get transportStreamId(): number;
    set transportStreamId(value: number);
    resetTransportStreamId(): void;
    get transportStreamIdInput(): number | undefined;
    private _videoPid?;
    get videoPid(): string;
    set videoPid(value: string);
    resetVideoPid(): void;
    get videoPidInput(): string | undefined;
    private _dvbNitSettings;
    get dvbNitSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference;
    putDvbNitSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): void;
    resetDvbNitSettings(): void;
    get dvbNitSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined;
    private _dvbSdtSettings;
    get dvbSdtSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference;
    putDvbSdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): void;
    resetDvbSdtSettings(): void;
    get dvbSdtSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined;
    private _dvbTdtSettings;
    get dvbTdtSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference;
    putDvbTdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): void;
    resetDvbTdtSettings(): void;
    get dvbTdtSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings {
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings {
    /**
    * m2ts_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#m2ts_settings MedialiveChannel#m2ts_settings}
    */
    readonly m2TsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings;
    /**
    * raw_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#raw_settings MedialiveChannel#raw_settings}
    */
    readonly rawSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings | undefined);
    private _m2TsSettings;
    get m2TsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettingsOutputReference;
    putM2TsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings): void;
    resetM2TsSettings(): void;
    get m2TsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsM2TsSettings | undefined;
    private _rawSettings;
    get rawSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettingsOutputReference;
    putRawSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings): void;
    resetRawSettings(): void;
    get rawSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsRawSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#extension MedialiveChannel#extension}
    */
    readonly extension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name_modifier MedialiveChannel#name_modifier}
    */
    readonly nameModifier?: string;
    /**
    * container_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#container_settings MedialiveChannel#container_settings}
    */
    readonly containerSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings | undefined);
    private _extension?;
    get extension(): string;
    set extension(value: string);
    resetExtension(): void;
    get extensionInput(): string | undefined;
    private _nameModifier?;
    get nameModifier(): string;
    set nameModifier(value: string);
    resetNameModifier(): void;
    get nameModifierInput(): string | undefined;
    private _containerSettings;
    get containerSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettingsOutputReference;
    putContainerSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings): void;
    resetContainerSettings(): void;
    get containerSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsContainerSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name_modifier MedialiveChannel#name_modifier}
    */
    readonly nameModifier?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings | undefined);
    private _nameModifier?;
    get nameModifier(): string;
    set nameModifier(value: string);
    resetNameModifier(): void;
    get nameModifierInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#password_param MedialiveChannel#password_param}
    */
    readonly passwordParam?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#uri MedialiveChannel#uri}
    */
    readonly uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#username MedialiveChannel#username}
    */
    readonly username?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    resetPasswordParam(): void;
    get passwordParamInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_group_id MedialiveChannel#audio_group_id}
    */
    readonly audioGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_track_type MedialiveChannel#audio_track_type}
    */
    readonly audioTrackType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segment_type MedialiveChannel#segment_type}
    */
    readonly segmentType?: string;
    /**
    * audio_only_image block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_only_image MedialiveChannel#audio_only_image}
    */
    readonly audioOnlyImage?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings | undefined);
    private _audioGroupId?;
    get audioGroupId(): string;
    set audioGroupId(value: string);
    resetAudioGroupId(): void;
    get audioGroupIdInput(): string | undefined;
    private _audioTrackType?;
    get audioTrackType(): string;
    set audioTrackType(value: string);
    resetAudioTrackType(): void;
    get audioTrackTypeInput(): string | undefined;
    private _segmentType?;
    get segmentType(): string;
    set segmentType(value: string);
    resetSegmentType(): void;
    get segmentTypeInput(): string | undefined;
    private _audioOnlyImage;
    get audioOnlyImage(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImageOutputReference;
    putAudioOnlyImage(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage): void;
    resetAudioOnlyImage(): void;
    get audioOnlyImageInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsAudioOnlyImage | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_rendition_sets MedialiveChannel#audio_rendition_sets}
    */
    readonly audioRenditionSets?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
    */
    readonly nielsenId3Behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
    */
    readonly timedMetadataBehavior?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings | undefined);
    private _audioRenditionSets?;
    get audioRenditionSets(): string;
    set audioRenditionSets(value: string);
    resetAudioRenditionSets(): void;
    get audioRenditionSetsInput(): string | undefined;
    private _nielsenId3Behavior?;
    get nielsenId3Behavior(): string;
    set nielsenId3Behavior(value: string);
    resetNielsenId3Behavior(): void;
    get nielsenId3BehaviorInput(): string | undefined;
    private _timedMetadataBehavior?;
    get timedMetadataBehavior(): string;
    set timedMetadataBehavior(value: string);
    resetTimedMetadataBehavior(): void;
    get timedMetadataBehaviorInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings {
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
    */
    readonly audioFramesPerPes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_pids MedialiveChannel#audio_pids}
    */
    readonly audioPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
    */
    readonly ecmPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
    */
    readonly nielsenId3Behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pat_interval MedialiveChannel#pat_interval}
    */
    readonly patInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_control MedialiveChannel#pcr_control}
    */
    readonly pcrControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_period MedialiveChannel#pcr_period}
    */
    readonly pcrPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
    */
    readonly pcrPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
    */
    readonly pmtInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
    */
    readonly pmtPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_num MedialiveChannel#program_num}
    */
    readonly programNum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_behavior MedialiveChannel#scte35_behavior}
    */
    readonly scte35Behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
    */
    readonly scte35Pid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
    */
    readonly timedMetadataBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
    */
    readonly timedMetadataPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
    */
    readonly transportStreamId?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_pid MedialiveChannel#video_pid}
    */
    readonly videoPid?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings | undefined);
    private _audioFramesPerPes?;
    get audioFramesPerPes(): number;
    set audioFramesPerPes(value: number);
    resetAudioFramesPerPes(): void;
    get audioFramesPerPesInput(): number | undefined;
    private _audioPids?;
    get audioPids(): string;
    set audioPids(value: string);
    resetAudioPids(): void;
    get audioPidsInput(): string | undefined;
    private _ecmPid?;
    get ecmPid(): string;
    set ecmPid(value: string);
    resetEcmPid(): void;
    get ecmPidInput(): string | undefined;
    private _nielsenId3Behavior?;
    get nielsenId3Behavior(): string;
    set nielsenId3Behavior(value: string);
    resetNielsenId3Behavior(): void;
    get nielsenId3BehaviorInput(): string | undefined;
    private _patInterval?;
    get patInterval(): number;
    set patInterval(value: number);
    resetPatInterval(): void;
    get patIntervalInput(): number | undefined;
    private _pcrControl?;
    get pcrControl(): string;
    set pcrControl(value: string);
    resetPcrControl(): void;
    get pcrControlInput(): string | undefined;
    private _pcrPeriod?;
    get pcrPeriod(): number;
    set pcrPeriod(value: number);
    resetPcrPeriod(): void;
    get pcrPeriodInput(): number | undefined;
    private _pcrPid?;
    get pcrPid(): string;
    set pcrPid(value: string);
    resetPcrPid(): void;
    get pcrPidInput(): string | undefined;
    private _pmtInterval?;
    get pmtInterval(): number;
    set pmtInterval(value: number);
    resetPmtInterval(): void;
    get pmtIntervalInput(): number | undefined;
    private _pmtPid?;
    get pmtPid(): string;
    set pmtPid(value: string);
    resetPmtPid(): void;
    get pmtPidInput(): string | undefined;
    private _programNum?;
    get programNum(): number;
    set programNum(value: number);
    resetProgramNum(): void;
    get programNumInput(): number | undefined;
    private _scte35Behavior?;
    get scte35Behavior(): string;
    set scte35Behavior(value: string);
    resetScte35Behavior(): void;
    get scte35BehaviorInput(): string | undefined;
    private _scte35Pid?;
    get scte35Pid(): string;
    set scte35Pid(value: string);
    resetScte35Pid(): void;
    get scte35PidInput(): string | undefined;
    private _timedMetadataBehavior?;
    get timedMetadataBehavior(): string;
    set timedMetadataBehavior(value: string);
    resetTimedMetadataBehavior(): void;
    get timedMetadataBehaviorInput(): string | undefined;
    private _timedMetadataPid?;
    get timedMetadataPid(): string;
    set timedMetadataPid(value: string);
    resetTimedMetadataPid(): void;
    get timedMetadataPidInput(): string | undefined;
    private _transportStreamId?;
    get transportStreamId(): number;
    set transportStreamId(value: number);
    resetTransportStreamId(): void;
    get transportStreamIdInput(): number | undefined;
    private _videoPid?;
    get videoPid(): string;
    set videoPid(value: string);
    resetVideoPid(): void;
    get videoPidInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_rendition_sets MedialiveChannel#audio_rendition_sets}
    */
    readonly audioRenditionSets?: string;
    /**
    * m3u8_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#m3u8_settings MedialiveChannel#m3u8_settings}
    */
    readonly m3U8Settings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings | undefined);
    private _audioRenditionSets?;
    get audioRenditionSets(): string;
    set audioRenditionSets(value: string);
    resetAudioRenditionSets(): void;
    get audioRenditionSetsInput(): string | undefined;
    private _m3U8Settings;
    get m3U8Settings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8SettingsOutputReference;
    putM3U8Settings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings): void;
    get m3U8SettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsM3U8Settings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings {
    /**
    * audio_only_hls_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_only_hls_settings MedialiveChannel#audio_only_hls_settings}
    */
    readonly audioOnlyHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings;
    /**
    * fmp4_hls_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fmp4_hls_settings MedialiveChannel#fmp4_hls_settings}
    */
    readonly fmp4HlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings;
    /**
    * frame_capture_hls_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_hls_settings MedialiveChannel#frame_capture_hls_settings}
    */
    readonly frameCaptureHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings;
    /**
    * standard_hls_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#standard_hls_settings MedialiveChannel#standard_hls_settings}
    */
    readonly standardHlsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings | undefined);
    private _audioOnlyHlsSettings;
    get audioOnlyHlsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettingsOutputReference;
    putAudioOnlyHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings): void;
    resetAudioOnlyHlsSettings(): void;
    get audioOnlyHlsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsAudioOnlyHlsSettings | undefined;
    private _fmp4HlsSettings;
    get fmp4HlsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettingsOutputReference;
    putFmp4HlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings): void;
    resetFmp4HlsSettings(): void;
    get fmp4HlsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFmp4HlsSettings | undefined;
    private _frameCaptureHlsSettings;
    get frameCaptureHlsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettingsOutputReference;
    putFrameCaptureHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings): void;
    resetFrameCaptureHlsSettings(): void;
    get frameCaptureHlsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsFrameCaptureHlsSettings | undefined;
    private _standardHlsSettings;
    get standardHlsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettingsOutputReference;
    putStandardHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings): void;
    resetStandardHlsSettings(): void;
    get standardHlsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsStandardHlsSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#h265_packaging_type MedialiveChannel#h265_packaging_type}
    */
    readonly h265PackagingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name_modifier MedialiveChannel#name_modifier}
    */
    readonly nameModifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segment_modifier MedialiveChannel#segment_modifier}
    */
    readonly segmentModifier?: string;
    /**
    * hls_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_settings MedialiveChannel#hls_settings}
    */
    readonly hlsSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings | undefined);
    private _h265PackagingType?;
    get h265PackagingType(): string;
    set h265PackagingType(value: string);
    resetH265PackagingType(): void;
    get h265PackagingTypeInput(): string | undefined;
    private _nameModifier?;
    get nameModifier(): string;
    set nameModifier(value: string);
    resetNameModifier(): void;
    get nameModifierInput(): string | undefined;
    private _segmentModifier?;
    get segmentModifier(): string;
    set segmentModifier(value: string);
    resetSegmentModifier(): void;
    get segmentModifierInput(): string | undefined;
    private _hlsSettings;
    get hlsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettingsOutputReference;
    putHlsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings): void;
    get hlsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsHlsSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings {
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#h265_packaging_type MedialiveChannel#h265_packaging_type}
    */
    readonly h265PackagingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name_modifier MedialiveChannel#name_modifier}
    */
    readonly nameModifier?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings | undefined);
    private _h265PackagingType?;
    get h265PackagingType(): string;
    set h265PackagingType(value: string);
    resetH265PackagingType(): void;
    get h265PackagingTypeInput(): string | undefined;
    private _nameModifier?;
    get nameModifier(): string;
    set nameModifier(value: string);
    resetNameModifier(): void;
    get nameModifierInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings | undefined);
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsDestination | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#certificate_mode MedialiveChannel#certificate_mode}
    */
    readonly certificateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#connection_retry_interval MedialiveChannel#connection_retry_interval}
    */
    readonly connectionRetryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_retries MedialiveChannel#num_retries}
    */
    readonly numRetries?: number;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings | undefined);
    private _certificateMode?;
    get certificateMode(): string;
    set certificateMode(value: string);
    resetCertificateMode(): void;
    get certificateModeInput(): string | undefined;
    private _connectionRetryInterval?;
    get connectionRetryInterval(): number;
    set connectionRetryInterval(value: number);
    resetConnectionRetryInterval(): void;
    get connectionRetryIntervalInput(): number | undefined;
    private _numRetries?;
    get numRetries(): number;
    set numRetries(value: number);
    resetNumRetries(): void;
    get numRetriesInput(): number | undefined;
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsDestination | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#network_id MedialiveChannel#network_id}
    */
    readonly networkId: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#network_name MedialiveChannel#network_name}
    */
    readonly networkName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined);
    private _networkId?;
    get networkId(): number;
    set networkId(value: number);
    get networkIdInput(): number | undefined;
    private _networkName?;
    get networkName(): string;
    set networkName(value: string);
    get networkNameInput(): string | undefined;
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_sdt MedialiveChannel#output_sdt}
    */
    readonly outputSdt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#service_name MedialiveChannel#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#service_provider_name MedialiveChannel#service_provider_name}
    */
    readonly serviceProviderName?: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined);
    private _outputSdt?;
    get outputSdt(): string;
    set outputSdt(value: string);
    resetOutputSdt(): void;
    get outputSdtInput(): string | undefined;
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _serviceProviderName?;
    get serviceProviderName(): string;
    set serviceProviderName(value: string);
    resetServiceProviderName(): void;
    get serviceProviderNameInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rep_interval MedialiveChannel#rep_interval}
    */
    readonly repInterval?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined);
    private _repInterval?;
    get repInterval(): number;
    set repInterval(value: number);
    resetRepInterval(): void;
    get repIntervalInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#absent_input_audio_behavior MedialiveChannel#absent_input_audio_behavior}
    */
    readonly absentInputAudioBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib MedialiveChannel#arib}
    */
    readonly arib?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_captions_pid MedialiveChannel#arib_captions_pid}
    */
    readonly aribCaptionsPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_captions_pid_control MedialiveChannel#arib_captions_pid_control}
    */
    readonly aribCaptionsPidControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_buffer_model MedialiveChannel#audio_buffer_model}
    */
    readonly audioBufferModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_frames_per_pes MedialiveChannel#audio_frames_per_pes}
    */
    readonly audioFramesPerPes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_pids MedialiveChannel#audio_pids}
    */
    readonly audioPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_stream_type MedialiveChannel#audio_stream_type}
    */
    readonly audioStreamType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buffer_model MedialiveChannel#buffer_model}
    */
    readonly bufferModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cc_descriptor MedialiveChannel#cc_descriptor}
    */
    readonly ccDescriptor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sub_pids MedialiveChannel#dvb_sub_pids}
    */
    readonly dvbSubPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_teletext_pid MedialiveChannel#dvb_teletext_pid}
    */
    readonly dvbTeletextPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebif MedialiveChannel#ebif}
    */
    readonly ebif?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_audio_interval MedialiveChannel#ebp_audio_interval}
    */
    readonly ebpAudioInterval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_lookahead_ms MedialiveChannel#ebp_lookahead_ms}
    */
    readonly ebpLookaheadMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ebp_placement MedialiveChannel#ebp_placement}
    */
    readonly ebpPlacement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ecm_pid MedialiveChannel#ecm_pid}
    */
    readonly ecmPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#es_rate_in_pes MedialiveChannel#es_rate_in_pes}
    */
    readonly esRateInPes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#etv_platform_pid MedialiveChannel#etv_platform_pid}
    */
    readonly etvPlatformPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#etv_signal_pid MedialiveChannel#etv_signal_pid}
    */
    readonly etvSignalPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fragment_time MedialiveChannel#fragment_time}
    */
    readonly fragmentTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#klv MedialiveChannel#klv}
    */
    readonly klv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#klv_data_pids MedialiveChannel#klv_data_pids}
    */
    readonly klvDataPids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_id3_behavior MedialiveChannel#nielsen_id3_behavior}
    */
    readonly nielsenId3Behavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#null_packet_bitrate MedialiveChannel#null_packet_bitrate}
    */
    readonly nullPacketBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pat_interval MedialiveChannel#pat_interval}
    */
    readonly patInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_control MedialiveChannel#pcr_control}
    */
    readonly pcrControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_period MedialiveChannel#pcr_period}
    */
    readonly pcrPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pcr_pid MedialiveChannel#pcr_pid}
    */
    readonly pcrPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_interval MedialiveChannel#pmt_interval}
    */
    readonly pmtInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pmt_pid MedialiveChannel#pmt_pid}
    */
    readonly pmtPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_num MedialiveChannel#program_num}
    */
    readonly programNum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rate_mode MedialiveChannel#rate_mode}
    */
    readonly rateMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte27_pids MedialiveChannel#scte27_pids}
    */
    readonly scte27Pids?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_control MedialiveChannel#scte35_control}
    */
    readonly scte35Control?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
    */
    readonly scte35Pid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_markers MedialiveChannel#segmentation_markers}
    */
    readonly segmentationMarkers?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_style MedialiveChannel#segmentation_style}
    */
    readonly segmentationStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#segmentation_time MedialiveChannel#segmentation_time}
    */
    readonly segmentationTime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_behavior MedialiveChannel#timed_metadata_behavior}
    */
    readonly timedMetadataBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timed_metadata_pid MedialiveChannel#timed_metadata_pid}
    */
    readonly timedMetadataPid?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#transport_stream_id MedialiveChannel#transport_stream_id}
    */
    readonly transportStreamId?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_pid MedialiveChannel#video_pid}
    */
    readonly videoPid?: string;
    /**
    * dvb_nit_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_nit_settings MedialiveChannel#dvb_nit_settings}
    */
    readonly dvbNitSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings;
    /**
    * dvb_sdt_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sdt_settings MedialiveChannel#dvb_sdt_settings}
    */
    readonly dvbSdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings;
    /**
    * dvb_tdt_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_tdt_settings MedialiveChannel#dvb_tdt_settings}
    */
    readonly dvbTdtSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings | undefined);
    private _absentInputAudioBehavior?;
    get absentInputAudioBehavior(): string;
    set absentInputAudioBehavior(value: string);
    resetAbsentInputAudioBehavior(): void;
    get absentInputAudioBehaviorInput(): string | undefined;
    private _arib?;
    get arib(): string;
    set arib(value: string);
    resetArib(): void;
    get aribInput(): string | undefined;
    private _aribCaptionsPid?;
    get aribCaptionsPid(): string;
    set aribCaptionsPid(value: string);
    resetAribCaptionsPid(): void;
    get aribCaptionsPidInput(): string | undefined;
    private _aribCaptionsPidControl?;
    get aribCaptionsPidControl(): string;
    set aribCaptionsPidControl(value: string);
    resetAribCaptionsPidControl(): void;
    get aribCaptionsPidControlInput(): string | undefined;
    private _audioBufferModel?;
    get audioBufferModel(): string;
    set audioBufferModel(value: string);
    resetAudioBufferModel(): void;
    get audioBufferModelInput(): string | undefined;
    private _audioFramesPerPes?;
    get audioFramesPerPes(): number;
    set audioFramesPerPes(value: number);
    resetAudioFramesPerPes(): void;
    get audioFramesPerPesInput(): number | undefined;
    private _audioPids?;
    get audioPids(): string;
    set audioPids(value: string);
    resetAudioPids(): void;
    get audioPidsInput(): string | undefined;
    private _audioStreamType?;
    get audioStreamType(): string;
    set audioStreamType(value: string);
    resetAudioStreamType(): void;
    get audioStreamTypeInput(): string | undefined;
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _bufferModel?;
    get bufferModel(): string;
    set bufferModel(value: string);
    resetBufferModel(): void;
    get bufferModelInput(): string | undefined;
    private _ccDescriptor?;
    get ccDescriptor(): string;
    set ccDescriptor(value: string);
    resetCcDescriptor(): void;
    get ccDescriptorInput(): string | undefined;
    private _dvbSubPids?;
    get dvbSubPids(): string;
    set dvbSubPids(value: string);
    resetDvbSubPids(): void;
    get dvbSubPidsInput(): string | undefined;
    private _dvbTeletextPid?;
    get dvbTeletextPid(): string;
    set dvbTeletextPid(value: string);
    resetDvbTeletextPid(): void;
    get dvbTeletextPidInput(): string | undefined;
    private _ebif?;
    get ebif(): string;
    set ebif(value: string);
    resetEbif(): void;
    get ebifInput(): string | undefined;
    private _ebpAudioInterval?;
    get ebpAudioInterval(): string;
    set ebpAudioInterval(value: string);
    resetEbpAudioInterval(): void;
    get ebpAudioIntervalInput(): string | undefined;
    private _ebpLookaheadMs?;
    get ebpLookaheadMs(): number;
    set ebpLookaheadMs(value: number);
    resetEbpLookaheadMs(): void;
    get ebpLookaheadMsInput(): number | undefined;
    private _ebpPlacement?;
    get ebpPlacement(): string;
    set ebpPlacement(value: string);
    resetEbpPlacement(): void;
    get ebpPlacementInput(): string | undefined;
    private _ecmPid?;
    get ecmPid(): string;
    set ecmPid(value: string);
    resetEcmPid(): void;
    get ecmPidInput(): string | undefined;
    private _esRateInPes?;
    get esRateInPes(): string;
    set esRateInPes(value: string);
    resetEsRateInPes(): void;
    get esRateInPesInput(): string | undefined;
    private _etvPlatformPid?;
    get etvPlatformPid(): string;
    set etvPlatformPid(value: string);
    resetEtvPlatformPid(): void;
    get etvPlatformPidInput(): string | undefined;
    private _etvSignalPid?;
    get etvSignalPid(): string;
    set etvSignalPid(value: string);
    resetEtvSignalPid(): void;
    get etvSignalPidInput(): string | undefined;
    private _fragmentTime?;
    get fragmentTime(): number;
    set fragmentTime(value: number);
    resetFragmentTime(): void;
    get fragmentTimeInput(): number | undefined;
    private _klv?;
    get klv(): string;
    set klv(value: string);
    resetKlv(): void;
    get klvInput(): string | undefined;
    private _klvDataPids?;
    get klvDataPids(): string;
    set klvDataPids(value: string);
    resetKlvDataPids(): void;
    get klvDataPidsInput(): string | undefined;
    private _nielsenId3Behavior?;
    get nielsenId3Behavior(): string;
    set nielsenId3Behavior(value: string);
    resetNielsenId3Behavior(): void;
    get nielsenId3BehaviorInput(): string | undefined;
    private _nullPacketBitrate?;
    get nullPacketBitrate(): number;
    set nullPacketBitrate(value: number);
    resetNullPacketBitrate(): void;
    get nullPacketBitrateInput(): number | undefined;
    private _patInterval?;
    get patInterval(): number;
    set patInterval(value: number);
    resetPatInterval(): void;
    get patIntervalInput(): number | undefined;
    private _pcrControl?;
    get pcrControl(): string;
    set pcrControl(value: string);
    resetPcrControl(): void;
    get pcrControlInput(): string | undefined;
    private _pcrPeriod?;
    get pcrPeriod(): number;
    set pcrPeriod(value: number);
    resetPcrPeriod(): void;
    get pcrPeriodInput(): number | undefined;
    private _pcrPid?;
    get pcrPid(): string;
    set pcrPid(value: string);
    resetPcrPid(): void;
    get pcrPidInput(): string | undefined;
    private _pmtInterval?;
    get pmtInterval(): number;
    set pmtInterval(value: number);
    resetPmtInterval(): void;
    get pmtIntervalInput(): number | undefined;
    private _pmtPid?;
    get pmtPid(): string;
    set pmtPid(value: string);
    resetPmtPid(): void;
    get pmtPidInput(): string | undefined;
    private _programNum?;
    get programNum(): number;
    set programNum(value: number);
    resetProgramNum(): void;
    get programNumInput(): number | undefined;
    private _rateMode?;
    get rateMode(): string;
    set rateMode(value: string);
    resetRateMode(): void;
    get rateModeInput(): string | undefined;
    private _scte27Pids?;
    get scte27Pids(): string;
    set scte27Pids(value: string);
    resetScte27Pids(): void;
    get scte27PidsInput(): string | undefined;
    private _scte35Control?;
    get scte35Control(): string;
    set scte35Control(value: string);
    resetScte35Control(): void;
    get scte35ControlInput(): string | undefined;
    private _scte35Pid?;
    get scte35Pid(): string;
    set scte35Pid(value: string);
    resetScte35Pid(): void;
    get scte35PidInput(): string | undefined;
    private _segmentationMarkers?;
    get segmentationMarkers(): string;
    set segmentationMarkers(value: string);
    resetSegmentationMarkers(): void;
    get segmentationMarkersInput(): string | undefined;
    private _segmentationStyle?;
    get segmentationStyle(): string;
    set segmentationStyle(value: string);
    resetSegmentationStyle(): void;
    get segmentationStyleInput(): string | undefined;
    private _segmentationTime?;
    get segmentationTime(): number;
    set segmentationTime(value: number);
    resetSegmentationTime(): void;
    get segmentationTimeInput(): number | undefined;
    private _timedMetadataBehavior?;
    get timedMetadataBehavior(): string;
    set timedMetadataBehavior(value: string);
    resetTimedMetadataBehavior(): void;
    get timedMetadataBehaviorInput(): string | undefined;
    private _timedMetadataPid?;
    get timedMetadataPid(): string;
    set timedMetadataPid(value: string);
    resetTimedMetadataPid(): void;
    get timedMetadataPidInput(): string | undefined;
    private _transportStreamId?;
    get transportStreamId(): number;
    set transportStreamId(value: number);
    resetTransportStreamId(): void;
    get transportStreamIdInput(): number | undefined;
    private _videoPid?;
    get videoPid(): string;
    set videoPid(value: string);
    resetVideoPid(): void;
    get videoPidInput(): string | undefined;
    private _dvbNitSettings;
    get dvbNitSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettingsOutputReference;
    putDvbNitSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings): void;
    resetDvbNitSettings(): void;
    get dvbNitSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbNitSettings | undefined;
    private _dvbSdtSettings;
    get dvbSdtSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettingsOutputReference;
    putDvbSdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings): void;
    resetDvbSdtSettings(): void;
    get dvbSdtSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbSdtSettings | undefined;
    private _dvbTdtSettings;
    get dvbTdtSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettingsOutputReference;
    putDvbTdtSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings): void;
    resetDvbTdtSettings(): void;
    get dvbTdtSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsDvbTdtSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings {
    /**
    * m2ts_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#m2ts_settings MedialiveChannel#m2ts_settings}
    */
    readonly m2TsSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings | undefined);
    private _m2TsSettings;
    get m2TsSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettingsOutputReference;
    putM2TsSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings): void;
    resetM2TsSettings(): void;
    get m2TsSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsM2TsSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination_ref_id MedialiveChannel#destination_ref_id}
    */
    readonly destinationRefId: string;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination | undefined);
    private _destinationRefId?;
    get destinationRefId(): string;
    set destinationRefId(value: string);
    get destinationRefIdInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#column_depth MedialiveChannel#column_depth}
    */
    readonly columnDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#include_fec MedialiveChannel#include_fec}
    */
    readonly includeFec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#row_length MedialiveChannel#row_length}
    */
    readonly rowLength?: number;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings | undefined);
    private _columnDepth?;
    get columnDepth(): number;
    set columnDepth(value: number);
    resetColumnDepth(): void;
    get columnDepthInput(): number | undefined;
    private _includeFec?;
    get includeFec(): string;
    set includeFec(value: string);
    resetIncludeFec(): void;
    get includeFecInput(): string | undefined;
    private _rowLength?;
    get rowLength(): number;
    set rowLength(value: number);
    resetRowLength(): void;
    get rowLengthInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buffer_msec MedialiveChannel#buffer_msec}
    */
    readonly bufferMsec?: number;
    /**
    * container_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#container_settings MedialiveChannel#container_settings}
    */
    readonly containerSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destination MedialiveChannel#destination}
    */
    readonly destination: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination;
    /**
    * fec_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fec_output_settings MedialiveChannel#fec_output_settings}
    */
    readonly fecOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings | undefined);
    private _bufferMsec?;
    get bufferMsec(): number;
    set bufferMsec(value: number);
    resetBufferMsec(): void;
    get bufferMsecInput(): number | undefined;
    private _containerSettings;
    get containerSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettingsOutputReference;
    putContainerSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings): void;
    get containerSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsContainerSettings | undefined;
    private _destination;
    get destination(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestinationOutputReference;
    putDestination(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination): void;
    get destinationInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsDestination | undefined;
    private _fecOutputSettings;
    get fecOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettingsOutputReference;
    putFecOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings): void;
    resetFecOutputSettings(): void;
    get fecOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsFecOutputSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings {
    /**
    * archive_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#archive_output_settings MedialiveChannel#archive_output_settings}
    */
    readonly archiveOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings;
    /**
    * frame_capture_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_output_settings MedialiveChannel#frame_capture_output_settings}
    */
    readonly frameCaptureOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings;
    /**
    * hls_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_output_settings MedialiveChannel#hls_output_settings}
    */
    readonly hlsOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings;
    /**
    * media_package_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#media_package_output_settings MedialiveChannel#media_package_output_settings}
    */
    readonly mediaPackageOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings;
    /**
    * ms_smooth_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ms_smooth_output_settings MedialiveChannel#ms_smooth_output_settings}
    */
    readonly msSmoothOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings;
    /**
    * multiplex_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#multiplex_output_settings MedialiveChannel#multiplex_output_settings}
    */
    readonly multiplexOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings;
    /**
    * rtmp_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rtmp_output_settings MedialiveChannel#rtmp_output_settings}
    */
    readonly rtmpOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings;
    /**
    * udp_output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#udp_output_settings MedialiveChannel#udp_output_settings}
    */
    readonly udpOutputSettings?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference | MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings | undefined);
    private _archiveOutputSettings;
    get archiveOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettingsOutputReference;
    putArchiveOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings): void;
    resetArchiveOutputSettings(): void;
    get archiveOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsArchiveOutputSettings | undefined;
    private _frameCaptureOutputSettings;
    get frameCaptureOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettingsOutputReference;
    putFrameCaptureOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings): void;
    resetFrameCaptureOutputSettings(): void;
    get frameCaptureOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsFrameCaptureOutputSettings | undefined;
    private _hlsOutputSettings;
    get hlsOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettingsOutputReference;
    putHlsOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings): void;
    resetHlsOutputSettings(): void;
    get hlsOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsHlsOutputSettings | undefined;
    private _mediaPackageOutputSettings;
    get mediaPackageOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettingsOutputReference;
    putMediaPackageOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings): void;
    resetMediaPackageOutputSettings(): void;
    get mediaPackageOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMediaPackageOutputSettings | undefined;
    private _msSmoothOutputSettings;
    get msSmoothOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettingsOutputReference;
    putMsSmoothOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings): void;
    resetMsSmoothOutputSettings(): void;
    get msSmoothOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMsSmoothOutputSettings | undefined;
    private _multiplexOutputSettings;
    get multiplexOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettingsOutputReference;
    putMultiplexOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings): void;
    resetMultiplexOutputSettings(): void;
    get multiplexOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsMultiplexOutputSettings | undefined;
    private _rtmpOutputSettings;
    get rtmpOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettingsOutputReference;
    putRtmpOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings): void;
    resetRtmpOutputSettings(): void;
    get rtmpOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsRtmpOutputSettings | undefined;
    private _udpOutputSettings;
    get udpOutputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettingsOutputReference;
    putUdpOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings): void;
    resetUdpOutputSettings(): void;
    get udpOutputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsUdpOutputSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsOutputGroupsOutputs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_description_names MedialiveChannel#audio_description_names}
    */
    readonly audioDescriptionNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_description_names MedialiveChannel#caption_description_names}
    */
    readonly captionDescriptionNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_name MedialiveChannel#output_name}
    */
    readonly outputName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_description_name MedialiveChannel#video_description_name}
    */
    readonly videoDescriptionName?: string;
    /**
    * output_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_settings MedialiveChannel#output_settings}
    */
    readonly outputSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsOutputsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroupsOutputs | cdktf.IResolvable | undefined);
    private _audioDescriptionNames?;
    get audioDescriptionNames(): string[];
    set audioDescriptionNames(value: string[]);
    resetAudioDescriptionNames(): void;
    get audioDescriptionNamesInput(): string[] | undefined;
    private _captionDescriptionNames?;
    get captionDescriptionNames(): string[];
    set captionDescriptionNames(value: string[]);
    resetCaptionDescriptionNames(): void;
    get captionDescriptionNamesInput(): string[] | undefined;
    private _outputName?;
    get outputName(): string;
    set outputName(value: string);
    resetOutputName(): void;
    get outputNameInput(): string | undefined;
    private _videoDescriptionName?;
    get videoDescriptionName(): string;
    set videoDescriptionName(value: string);
    resetVideoDescriptionName(): void;
    get videoDescriptionNameInput(): string | undefined;
    private _outputSettings;
    get outputSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettingsOutputReference;
    putOutputSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings): void;
    get outputSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputSettings | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputsOutputReference;
}
export interface MedialiveChannelEncoderSettingsOutputGroups {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name?: string;
    /**
    * output_group_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_group_settings MedialiveChannel#output_group_settings}
    */
    readonly outputGroupSettings: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings;
    /**
    * outputs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#outputs MedialiveChannel#outputs}
    */
    readonly outputs: MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsOutputGroupsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsOutputGroupsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsOutputGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsOutputGroups | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _outputGroupSettings;
    get outputGroupSettings(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettingsOutputReference;
    putOutputGroupSettings(value: MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings): void;
    get outputGroupSettingsInput(): MedialiveChannelEncoderSettingsOutputGroupsOutputGroupSettings | undefined;
    private _outputs;
    get outputs(): MedialiveChannelEncoderSettingsOutputGroupsOutputsList;
    putOutputs(value: MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | cdktf.IResolvable): void;
    get outputsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroupsOutputs[] | undefined;
}
export declare class MedialiveChannelEncoderSettingsOutputGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsOutputGroupsOutputReference;
}
export interface MedialiveChannelEncoderSettingsTimecodeConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#source MedialiveChannel#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sync_threshold MedialiveChannel#sync_threshold}
    */
    readonly syncThreshold?: number;
}
export declare function medialiveChannelEncoderSettingsTimecodeConfigToTerraform(struct?: MedialiveChannelEncoderSettingsTimecodeConfigOutputReference | MedialiveChannelEncoderSettingsTimecodeConfig): any;
export declare function medialiveChannelEncoderSettingsTimecodeConfigToHclTerraform(struct?: MedialiveChannelEncoderSettingsTimecodeConfigOutputReference | MedialiveChannelEncoderSettingsTimecodeConfig): any;
export declare class MedialiveChannelEncoderSettingsTimecodeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsTimecodeConfig | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsTimecodeConfig | undefined);
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _syncThreshold?;
    get syncThreshold(): number;
    set syncThreshold(value: number);
    resetSyncThreshold(): void;
    get syncThresholdInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#capture_interval MedialiveChannel#capture_interval}
    */
    readonly captureInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#capture_interval_units MedialiveChannel#capture_interval_units}
    */
    readonly captureIntervalUnits?: string;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings | undefined);
    private _captureInterval?;
    get captureInterval(): number;
    set captureInterval(value: number);
    resetCaptureInterval(): void;
    get captureIntervalInput(): number | undefined;
    private _captureIntervalUnits?;
    get captureIntervalUnits(): string;
    set captureIntervalUnits(value: string);
    resetCaptureIntervalUnits(): void;
    get captureIntervalUnitsInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#post_filter_sharpening MedialiveChannel#post_filter_sharpening}
    */
    readonly postFilterSharpening?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#strength MedialiveChannel#strength}
    */
    readonly strength?: string;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings | undefined);
    private _postFilterSharpening?;
    get postFilterSharpening(): string;
    set postFilterSharpening(value: string);
    resetPostFilterSharpening(): void;
    get postFilterSharpeningInput(): string | undefined;
    private _strength?;
    get strength(): string;
    set strength(value: string);
    resetStrength(): void;
    get strengthInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings {
    /**
    * temporal_filter_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#temporal_filter_settings MedialiveChannel#temporal_filter_settings}
    */
    readonly temporalFilterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings | undefined);
    private _temporalFilterSettings;
    get temporalFilterSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettingsOutputReference;
    putTemporalFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings): void;
    resetTemporalFilterSettings(): void;
    get temporalFilterSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsTemporalFilterSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#adaptive_quantization MedialiveChannel#adaptive_quantization}
    */
    readonly adaptiveQuantization?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#afd_signaling MedialiveChannel#afd_signaling}
    */
    readonly afdSignaling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buf_fill_pct MedialiveChannel#buf_fill_pct}
    */
    readonly bufFillPct?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buf_size MedialiveChannel#buf_size}
    */
    readonly bufSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_metadata MedialiveChannel#color_metadata}
    */
    readonly colorMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#entropy_encoding MedialiveChannel#entropy_encoding}
    */
    readonly entropyEncoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fixed_afd MedialiveChannel#fixed_afd}
    */
    readonly fixedAfd?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#flicker_aq MedialiveChannel#flicker_aq}
    */
    readonly flickerAq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#force_field_pictures MedialiveChannel#force_field_pictures}
    */
    readonly forceFieldPictures?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#framerate_control MedialiveChannel#framerate_control}
    */
    readonly framerateControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#framerate_denominator MedialiveChannel#framerate_denominator}
    */
    readonly framerateDenominator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#framerate_numerator MedialiveChannel#framerate_numerator}
    */
    readonly framerateNumerator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_b_reference MedialiveChannel#gop_b_reference}
    */
    readonly gopBReference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_closed_cadence MedialiveChannel#gop_closed_cadence}
    */
    readonly gopClosedCadence?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_num_b_frames MedialiveChannel#gop_num_b_frames}
    */
    readonly gopNumBFrames?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_size MedialiveChannel#gop_size}
    */
    readonly gopSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_size_units MedialiveChannel#gop_size_units}
    */
    readonly gopSizeUnits?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#level MedialiveChannel#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#look_ahead_rate_control MedialiveChannel#look_ahead_rate_control}
    */
    readonly lookAheadRateControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#max_bitrate MedialiveChannel#max_bitrate}
    */
    readonly maxBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#min_i_interval MedialiveChannel#min_i_interval}
    */
    readonly minIInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#num_ref_frames MedialiveChannel#num_ref_frames}
    */
    readonly numRefFrames?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#par_control MedialiveChannel#par_control}
    */
    readonly parControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#par_denominator MedialiveChannel#par_denominator}
    */
    readonly parDenominator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#par_numerator MedialiveChannel#par_numerator}
    */
    readonly parNumerator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#profile MedialiveChannel#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#quality_level MedialiveChannel#quality_level}
    */
    readonly qualityLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#qvbr_quality_level MedialiveChannel#qvbr_quality_level}
    */
    readonly qvbrQualityLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rate_control_mode MedialiveChannel#rate_control_mode}
    */
    readonly rateControlMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scan_type MedialiveChannel#scan_type}
    */
    readonly scanType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scene_change_detect MedialiveChannel#scene_change_detect}
    */
    readonly sceneChangeDetect?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#slices MedialiveChannel#slices}
    */
    readonly slices?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#softness MedialiveChannel#softness}
    */
    readonly softness?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#spatial_aq MedialiveChannel#spatial_aq}
    */
    readonly spatialAq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#subgop_length MedialiveChannel#subgop_length}
    */
    readonly subgopLength?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#syntax MedialiveChannel#syntax}
    */
    readonly syntax?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#temporal_aq MedialiveChannel#temporal_aq}
    */
    readonly temporalAq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_insertion MedialiveChannel#timecode_insertion}
    */
    readonly timecodeInsertion?: string;
    /**
    * filter_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filter_settings MedialiveChannel#filter_settings}
    */
    readonly filterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings | undefined);
    private _adaptiveQuantization?;
    get adaptiveQuantization(): string;
    set adaptiveQuantization(value: string);
    resetAdaptiveQuantization(): void;
    get adaptiveQuantizationInput(): string | undefined;
    private _afdSignaling?;
    get afdSignaling(): string;
    set afdSignaling(value: string);
    resetAfdSignaling(): void;
    get afdSignalingInput(): string | undefined;
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    resetBitrate(): void;
    get bitrateInput(): number | undefined;
    private _bufFillPct?;
    get bufFillPct(): number;
    set bufFillPct(value: number);
    resetBufFillPct(): void;
    get bufFillPctInput(): number | undefined;
    private _bufSize?;
    get bufSize(): number;
    set bufSize(value: number);
    resetBufSize(): void;
    get bufSizeInput(): number | undefined;
    private _colorMetadata?;
    get colorMetadata(): string;
    set colorMetadata(value: string);
    resetColorMetadata(): void;
    get colorMetadataInput(): string | undefined;
    private _entropyEncoding?;
    get entropyEncoding(): string;
    set entropyEncoding(value: string);
    resetEntropyEncoding(): void;
    get entropyEncodingInput(): string | undefined;
    private _fixedAfd?;
    get fixedAfd(): string;
    set fixedAfd(value: string);
    resetFixedAfd(): void;
    get fixedAfdInput(): string | undefined;
    private _flickerAq?;
    get flickerAq(): string;
    set flickerAq(value: string);
    resetFlickerAq(): void;
    get flickerAqInput(): string | undefined;
    private _forceFieldPictures?;
    get forceFieldPictures(): string;
    set forceFieldPictures(value: string);
    resetForceFieldPictures(): void;
    get forceFieldPicturesInput(): string | undefined;
    private _framerateControl?;
    get framerateControl(): string;
    set framerateControl(value: string);
    resetFramerateControl(): void;
    get framerateControlInput(): string | undefined;
    private _framerateDenominator?;
    get framerateDenominator(): number;
    set framerateDenominator(value: number);
    resetFramerateDenominator(): void;
    get framerateDenominatorInput(): number | undefined;
    private _framerateNumerator?;
    get framerateNumerator(): number;
    set framerateNumerator(value: number);
    resetFramerateNumerator(): void;
    get framerateNumeratorInput(): number | undefined;
    private _gopBReference?;
    get gopBReference(): string;
    set gopBReference(value: string);
    resetGopBReference(): void;
    get gopBReferenceInput(): string | undefined;
    private _gopClosedCadence?;
    get gopClosedCadence(): number;
    set gopClosedCadence(value: number);
    resetGopClosedCadence(): void;
    get gopClosedCadenceInput(): number | undefined;
    private _gopNumBFrames?;
    get gopNumBFrames(): number;
    set gopNumBFrames(value: number);
    resetGopNumBFrames(): void;
    get gopNumBFramesInput(): number | undefined;
    private _gopSize?;
    get gopSize(): number;
    set gopSize(value: number);
    resetGopSize(): void;
    get gopSizeInput(): number | undefined;
    private _gopSizeUnits?;
    get gopSizeUnits(): string;
    set gopSizeUnits(value: string);
    resetGopSizeUnits(): void;
    get gopSizeUnitsInput(): string | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string | undefined;
    private _lookAheadRateControl?;
    get lookAheadRateControl(): string;
    set lookAheadRateControl(value: string);
    resetLookAheadRateControl(): void;
    get lookAheadRateControlInput(): string | undefined;
    private _maxBitrate?;
    get maxBitrate(): number;
    set maxBitrate(value: number);
    resetMaxBitrate(): void;
    get maxBitrateInput(): number | undefined;
    private _minIInterval?;
    get minIInterval(): number;
    set minIInterval(value: number);
    resetMinIInterval(): void;
    get minIIntervalInput(): number | undefined;
    private _numRefFrames?;
    get numRefFrames(): number;
    set numRefFrames(value: number);
    resetNumRefFrames(): void;
    get numRefFramesInput(): number | undefined;
    private _parControl?;
    get parControl(): string;
    set parControl(value: string);
    resetParControl(): void;
    get parControlInput(): string | undefined;
    private _parDenominator?;
    get parDenominator(): number;
    set parDenominator(value: number);
    resetParDenominator(): void;
    get parDenominatorInput(): number | undefined;
    private _parNumerator?;
    get parNumerator(): number;
    set parNumerator(value: number);
    resetParNumerator(): void;
    get parNumeratorInput(): number | undefined;
    private _profile?;
    get profile(): string;
    set profile(value: string);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _qualityLevel?;
    get qualityLevel(): string;
    set qualityLevel(value: string);
    resetQualityLevel(): void;
    get qualityLevelInput(): string | undefined;
    private _qvbrQualityLevel?;
    get qvbrQualityLevel(): number;
    set qvbrQualityLevel(value: number);
    resetQvbrQualityLevel(): void;
    get qvbrQualityLevelInput(): number | undefined;
    private _rateControlMode?;
    get rateControlMode(): string;
    set rateControlMode(value: string);
    resetRateControlMode(): void;
    get rateControlModeInput(): string | undefined;
    private _scanType?;
    get scanType(): string;
    set scanType(value: string);
    resetScanType(): void;
    get scanTypeInput(): string | undefined;
    private _sceneChangeDetect?;
    get sceneChangeDetect(): string;
    set sceneChangeDetect(value: string);
    resetSceneChangeDetect(): void;
    get sceneChangeDetectInput(): string | undefined;
    private _slices?;
    get slices(): number;
    set slices(value: number);
    resetSlices(): void;
    get slicesInput(): number | undefined;
    private _softness?;
    get softness(): number;
    set softness(value: number);
    resetSoftness(): void;
    get softnessInput(): number | undefined;
    private _spatialAq?;
    get spatialAq(): string;
    set spatialAq(value: string);
    resetSpatialAq(): void;
    get spatialAqInput(): string | undefined;
    private _subgopLength?;
    get subgopLength(): string;
    set subgopLength(value: string);
    resetSubgopLength(): void;
    get subgopLengthInput(): string | undefined;
    private _syntax?;
    get syntax(): string;
    set syntax(value: string);
    resetSyntax(): void;
    get syntaxInput(): string | undefined;
    private _temporalAq?;
    get temporalAq(): string;
    set temporalAq(value: string);
    resetTemporalAq(): void;
    get temporalAqInput(): string | undefined;
    private _timecodeInsertion?;
    get timecodeInsertion(): string;
    set timecodeInsertion(value: string);
    resetTimecodeInsertion(): void;
    get timecodeInsertionInput(): string | undefined;
    private _filterSettings;
    get filterSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettingsOutputReference;
    putFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings): void;
    resetFilterSettings(): void;
    get filterSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsFilterSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings {
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings | undefined);
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings {
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings | undefined);
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#max_cll MedialiveChannel#max_cll}
    */
    readonly maxCll?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#max_fall MedialiveChannel#max_fall}
    */
    readonly maxFall?: number;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings | undefined);
    private _maxCll?;
    get maxCll(): number;
    set maxCll(value: number);
    resetMaxCll(): void;
    get maxCllInput(): number | undefined;
    private _maxFall?;
    get maxFall(): number;
    set maxFall(value: number);
    resetMaxFall(): void;
    get maxFallInput(): number | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings {
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings | undefined);
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings {
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings | undefined);
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings {
    /**
    * color_space_passthrough_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_space_passthrough_settings MedialiveChannel#color_space_passthrough_settings}
    */
    readonly colorSpacePassthroughSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings;
    /**
    * dolby_vision81_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dolby_vision81_settings MedialiveChannel#dolby_vision81_settings}
    */
    readonly dolbyVision81Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings;
    /**
    * hdr10_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hdr10_settings MedialiveChannel#hdr10_settings}
    */
    readonly hdr10Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings;
    /**
    * rec601_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rec601_settings MedialiveChannel#rec601_settings}
    */
    readonly rec601Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings;
    /**
    * rec709_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rec709_settings MedialiveChannel#rec709_settings}
    */
    readonly rec709Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings | undefined);
    private _colorSpacePassthroughSettings;
    get colorSpacePassthroughSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettingsOutputReference;
    putColorSpacePassthroughSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings): void;
    resetColorSpacePassthroughSettings(): void;
    get colorSpacePassthroughSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsColorSpacePassthroughSettings | undefined;
    private _dolbyVision81Settings;
    get dolbyVision81Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81SettingsOutputReference;
    putDolbyVision81Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings): void;
    resetDolbyVision81Settings(): void;
    get dolbyVision81SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsDolbyVision81Settings | undefined;
    private _hdr10Settings;
    get hdr10Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10SettingsOutputReference;
    putHdr10Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings): void;
    resetHdr10Settings(): void;
    get hdr10SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsHdr10Settings | undefined;
    private _rec601Settings;
    get rec601Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601SettingsOutputReference;
    putRec601Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings): void;
    resetRec601Settings(): void;
    get rec601SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec601Settings | undefined;
    private _rec709Settings;
    get rec709Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709SettingsOutputReference;
    putRec709Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings): void;
    resetRec709Settings(): void;
    get rec709SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsRec709Settings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#post_filter_sharpening MedialiveChannel#post_filter_sharpening}
    */
    readonly postFilterSharpening?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#strength MedialiveChannel#strength}
    */
    readonly strength?: string;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings | undefined);
    private _postFilterSharpening?;
    get postFilterSharpening(): string;
    set postFilterSharpening(value: string);
    resetPostFilterSharpening(): void;
    get postFilterSharpeningInput(): string | undefined;
    private _strength?;
    get strength(): string;
    set strength(value: string);
    resetStrength(): void;
    get strengthInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings {
    /**
    * temporal_filter_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#temporal_filter_settings MedialiveChannel#temporal_filter_settings}
    */
    readonly temporalFilterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings | undefined);
    private _temporalFilterSettings;
    get temporalFilterSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettingsOutputReference;
    putTemporalFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings): void;
    resetTemporalFilterSettings(): void;
    get temporalFilterSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsTemporalFilterSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#prefix MedialiveChannel#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_burnin_font_size MedialiveChannel#timecode_burnin_font_size}
    */
    readonly timecodeBurninFontSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_burnin_position MedialiveChannel#timecode_burnin_position}
    */
    readonly timecodeBurninPosition?: string;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _timecodeBurninFontSize?;
    get timecodeBurninFontSize(): string;
    set timecodeBurninFontSize(value: string);
    resetTimecodeBurninFontSize(): void;
    get timecodeBurninFontSizeInput(): string | undefined;
    private _timecodeBurninPosition?;
    get timecodeBurninPosition(): string;
    set timecodeBurninPosition(value: string);
    resetTimecodeBurninPosition(): void;
    get timecodeBurninPositionInput(): string | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#adaptive_quantization MedialiveChannel#adaptive_quantization}
    */
    readonly adaptiveQuantization?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#afd_signaling MedialiveChannel#afd_signaling}
    */
    readonly afdSignaling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#alternative_transfer_function MedialiveChannel#alternative_transfer_function}
    */
    readonly alternativeTransferFunction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bitrate MedialiveChannel#bitrate}
    */
    readonly bitrate: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buf_size MedialiveChannel#buf_size}
    */
    readonly bufSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_metadata MedialiveChannel#color_metadata}
    */
    readonly colorMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#fixed_afd MedialiveChannel#fixed_afd}
    */
    readonly fixedAfd?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#flicker_aq MedialiveChannel#flicker_aq}
    */
    readonly flickerAq?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#framerate_denominator MedialiveChannel#framerate_denominator}
    */
    readonly framerateDenominator: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#framerate_numerator MedialiveChannel#framerate_numerator}
    */
    readonly framerateNumerator: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_closed_cadence MedialiveChannel#gop_closed_cadence}
    */
    readonly gopClosedCadence?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_size MedialiveChannel#gop_size}
    */
    readonly gopSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#gop_size_units MedialiveChannel#gop_size_units}
    */
    readonly gopSizeUnits?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#level MedialiveChannel#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#look_ahead_rate_control MedialiveChannel#look_ahead_rate_control}
    */
    readonly lookAheadRateControl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#max_bitrate MedialiveChannel#max_bitrate}
    */
    readonly maxBitrate?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#min_i_interval MedialiveChannel#min_i_interval}
    */
    readonly minIInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#min_qp MedialiveChannel#min_qp}
    */
    readonly minQp?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#mv_over_picture_boundaries MedialiveChannel#mv_over_picture_boundaries}
    */
    readonly mvOverPictureBoundaries?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#mv_temporal_predictor MedialiveChannel#mv_temporal_predictor}
    */
    readonly mvTemporalPredictor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#par_denominator MedialiveChannel#par_denominator}
    */
    readonly parDenominator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#par_numerator MedialiveChannel#par_numerator}
    */
    readonly parNumerator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#profile MedialiveChannel#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#qvbr_quality_level MedialiveChannel#qvbr_quality_level}
    */
    readonly qvbrQualityLevel?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#rate_control_mode MedialiveChannel#rate_control_mode}
    */
    readonly rateControlMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scan_type MedialiveChannel#scan_type}
    */
    readonly scanType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scene_change_detect MedialiveChannel#scene_change_detect}
    */
    readonly sceneChangeDetect?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#slices MedialiveChannel#slices}
    */
    readonly slices?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tier MedialiveChannel#tier}
    */
    readonly tier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tile_height MedialiveChannel#tile_height}
    */
    readonly tileHeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tile_padding MedialiveChannel#tile_padding}
    */
    readonly tilePadding?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tile_width MedialiveChannel#tile_width}
    */
    readonly tileWidth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_insertion MedialiveChannel#timecode_insertion}
    */
    readonly timecodeInsertion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#treeblock_size MedialiveChannel#treeblock_size}
    */
    readonly treeblockSize?: string;
    /**
    * color_space_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_space_settings MedialiveChannel#color_space_settings}
    */
    readonly colorSpaceSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings;
    /**
    * filter_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filter_settings MedialiveChannel#filter_settings}
    */
    readonly filterSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings;
    /**
    * timecode_burnin_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_burnin_settings MedialiveChannel#timecode_burnin_settings}
    */
    readonly timecodeBurninSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings | undefined);
    private _adaptiveQuantization?;
    get adaptiveQuantization(): string;
    set adaptiveQuantization(value: string);
    resetAdaptiveQuantization(): void;
    get adaptiveQuantizationInput(): string | undefined;
    private _afdSignaling?;
    get afdSignaling(): string;
    set afdSignaling(value: string);
    resetAfdSignaling(): void;
    get afdSignalingInput(): string | undefined;
    private _alternativeTransferFunction?;
    get alternativeTransferFunction(): string;
    set alternativeTransferFunction(value: string);
    resetAlternativeTransferFunction(): void;
    get alternativeTransferFunctionInput(): string | undefined;
    private _bitrate?;
    get bitrate(): number;
    set bitrate(value: number);
    get bitrateInput(): number | undefined;
    private _bufSize?;
    get bufSize(): number;
    set bufSize(value: number);
    resetBufSize(): void;
    get bufSizeInput(): number | undefined;
    private _colorMetadata?;
    get colorMetadata(): string;
    set colorMetadata(value: string);
    resetColorMetadata(): void;
    get colorMetadataInput(): string | undefined;
    private _fixedAfd?;
    get fixedAfd(): string;
    set fixedAfd(value: string);
    resetFixedAfd(): void;
    get fixedAfdInput(): string | undefined;
    private _flickerAq?;
    get flickerAq(): string;
    set flickerAq(value: string);
    resetFlickerAq(): void;
    get flickerAqInput(): string | undefined;
    private _framerateDenominator?;
    get framerateDenominator(): number;
    set framerateDenominator(value: number);
    get framerateDenominatorInput(): number | undefined;
    private _framerateNumerator?;
    get framerateNumerator(): number;
    set framerateNumerator(value: number);
    get framerateNumeratorInput(): number | undefined;
    private _gopClosedCadence?;
    get gopClosedCadence(): number;
    set gopClosedCadence(value: number);
    resetGopClosedCadence(): void;
    get gopClosedCadenceInput(): number | undefined;
    private _gopSize?;
    get gopSize(): number;
    set gopSize(value: number);
    resetGopSize(): void;
    get gopSizeInput(): number | undefined;
    private _gopSizeUnits?;
    get gopSizeUnits(): string;
    set gopSizeUnits(value: string);
    resetGopSizeUnits(): void;
    get gopSizeUnitsInput(): string | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    resetLevel(): void;
    get levelInput(): string | undefined;
    private _lookAheadRateControl?;
    get lookAheadRateControl(): string;
    set lookAheadRateControl(value: string);
    resetLookAheadRateControl(): void;
    get lookAheadRateControlInput(): string | undefined;
    private _maxBitrate?;
    get maxBitrate(): number;
    set maxBitrate(value: number);
    resetMaxBitrate(): void;
    get maxBitrateInput(): number | undefined;
    private _minIInterval?;
    get minIInterval(): number;
    set minIInterval(value: number);
    resetMinIInterval(): void;
    get minIIntervalInput(): number | undefined;
    private _minQp?;
    get minQp(): number;
    set minQp(value: number);
    resetMinQp(): void;
    get minQpInput(): number | undefined;
    private _mvOverPictureBoundaries?;
    get mvOverPictureBoundaries(): string;
    set mvOverPictureBoundaries(value: string);
    resetMvOverPictureBoundaries(): void;
    get mvOverPictureBoundariesInput(): string | undefined;
    private _mvTemporalPredictor?;
    get mvTemporalPredictor(): string;
    set mvTemporalPredictor(value: string);
    resetMvTemporalPredictor(): void;
    get mvTemporalPredictorInput(): string | undefined;
    private _parDenominator?;
    get parDenominator(): number;
    set parDenominator(value: number);
    resetParDenominator(): void;
    get parDenominatorInput(): number | undefined;
    private _parNumerator?;
    get parNumerator(): number;
    set parNumerator(value: number);
    resetParNumerator(): void;
    get parNumeratorInput(): number | undefined;
    private _profile?;
    get profile(): string;
    set profile(value: string);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _qvbrQualityLevel?;
    get qvbrQualityLevel(): number;
    set qvbrQualityLevel(value: number);
    resetQvbrQualityLevel(): void;
    get qvbrQualityLevelInput(): number | undefined;
    private _rateControlMode?;
    get rateControlMode(): string;
    set rateControlMode(value: string);
    resetRateControlMode(): void;
    get rateControlModeInput(): string | undefined;
    private _scanType?;
    get scanType(): string;
    set scanType(value: string);
    resetScanType(): void;
    get scanTypeInput(): string | undefined;
    private _sceneChangeDetect?;
    get sceneChangeDetect(): string;
    set sceneChangeDetect(value: string);
    resetSceneChangeDetect(): void;
    get sceneChangeDetectInput(): string | undefined;
    private _slices?;
    get slices(): number;
    set slices(value: number);
    resetSlices(): void;
    get slicesInput(): number | undefined;
    private _tier?;
    get tier(): string;
    set tier(value: string);
    resetTier(): void;
    get tierInput(): string | undefined;
    private _tileHeight?;
    get tileHeight(): number;
    set tileHeight(value: number);
    resetTileHeight(): void;
    get tileHeightInput(): number | undefined;
    private _tilePadding?;
    get tilePadding(): string;
    set tilePadding(value: string);
    resetTilePadding(): void;
    get tilePaddingInput(): string | undefined;
    private _tileWidth?;
    get tileWidth(): number;
    set tileWidth(value: number);
    resetTileWidth(): void;
    get tileWidthInput(): number | undefined;
    private _timecodeInsertion?;
    get timecodeInsertion(): string;
    set timecodeInsertion(value: string);
    resetTimecodeInsertion(): void;
    get timecodeInsertionInput(): string | undefined;
    private _treeblockSize?;
    get treeblockSize(): string;
    set treeblockSize(value: string);
    resetTreeblockSize(): void;
    get treeblockSizeInput(): string | undefined;
    private _colorSpaceSettings;
    get colorSpaceSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettingsOutputReference;
    putColorSpaceSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings): void;
    resetColorSpaceSettings(): void;
    get colorSpaceSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsColorSpaceSettings | undefined;
    private _filterSettings;
    get filterSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettingsOutputReference;
    putFilterSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings): void;
    resetFilterSettings(): void;
    get filterSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsFilterSettings | undefined;
    private _timecodeBurninSettings;
    get timecodeBurninSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettingsOutputReference;
    putTimecodeBurninSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings): void;
    resetTimecodeBurninSettings(): void;
    get timecodeBurninSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsTimecodeBurninSettings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings {
    /**
    * frame_capture_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#frame_capture_settings MedialiveChannel#frame_capture_settings}
    */
    readonly frameCaptureSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings;
    /**
    * h264_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#h264_settings MedialiveChannel#h264_settings}
    */
    readonly h264Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings;
    /**
    * h265_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#h265_settings MedialiveChannel#h265_settings}
    */
    readonly h265Settings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference | MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings | undefined);
    private _frameCaptureSettings;
    get frameCaptureSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettingsOutputReference;
    putFrameCaptureSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings): void;
    resetFrameCaptureSettings(): void;
    get frameCaptureSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsFrameCaptureSettings | undefined;
    private _h264Settings;
    get h264Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264SettingsOutputReference;
    putH264Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings): void;
    resetH264Settings(): void;
    get h264SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH264Settings | undefined;
    private _h265Settings;
    get h265Settings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265SettingsOutputReference;
    putH265Settings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings): void;
    resetH265Settings(): void;
    get h265SettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsH265Settings | undefined;
}
export interface MedialiveChannelEncoderSettingsVideoDescriptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#height MedialiveChannel#height}
    */
    readonly height?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#respond_to_afd MedialiveChannel#respond_to_afd}
    */
    readonly respondToAfd?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scaling_behavior MedialiveChannel#scaling_behavior}
    */
    readonly scalingBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#sharpness MedialiveChannel#sharpness}
    */
    readonly sharpness?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#width MedialiveChannel#width}
    */
    readonly width?: number;
    /**
    * codec_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#codec_settings MedialiveChannel#codec_settings}
    */
    readonly codecSettings?: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings;
}
export declare function medialiveChannelEncoderSettingsVideoDescriptionsToTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable): any;
export declare function medialiveChannelEncoderSettingsVideoDescriptionsToHclTerraform(struct?: MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable): any;
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelEncoderSettingsVideoDescriptions | cdktf.IResolvable | undefined);
    private _height?;
    get height(): number;
    set height(value: number);
    resetHeight(): void;
    get heightInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _respondToAfd?;
    get respondToAfd(): string;
    set respondToAfd(value: string);
    resetRespondToAfd(): void;
    get respondToAfdInput(): string | undefined;
    private _scalingBehavior?;
    get scalingBehavior(): string;
    set scalingBehavior(value: string);
    resetScalingBehavior(): void;
    get scalingBehaviorInput(): string | undefined;
    private _sharpness?;
    get sharpness(): number;
    set sharpness(value: number);
    resetSharpness(): void;
    get sharpnessInput(): number | undefined;
    private _width?;
    get width(): number;
    set width(value: number);
    resetWidth(): void;
    get widthInput(): number | undefined;
    private _codecSettings;
    get codecSettings(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettingsOutputReference;
    putCodecSettings(value: MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings): void;
    resetCodecSettings(): void;
    get codecSettingsInput(): MedialiveChannelEncoderSettingsVideoDescriptionsCodecSettings | undefined;
}
export declare class MedialiveChannelEncoderSettingsVideoDescriptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelEncoderSettingsVideoDescriptionsOutputReference;
}
export interface MedialiveChannelEncoderSettings {
    /**
    * audio_descriptions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_descriptions MedialiveChannel#audio_descriptions}
    */
    readonly audioDescriptions?: MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable;
    /**
    * avail_blanking block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#avail_blanking MedialiveChannel#avail_blanking}
    */
    readonly availBlanking?: MedialiveChannelEncoderSettingsAvailBlanking;
    /**
    * caption_descriptions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_descriptions MedialiveChannel#caption_descriptions}
    */
    readonly captionDescriptions?: MedialiveChannelEncoderSettingsCaptionDescriptions[] | cdktf.IResolvable;
    /**
    * global_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#global_configuration MedialiveChannel#global_configuration}
    */
    readonly globalConfiguration?: MedialiveChannelEncoderSettingsGlobalConfiguration;
    /**
    * motion_graphics_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#motion_graphics_configuration MedialiveChannel#motion_graphics_configuration}
    */
    readonly motionGraphicsConfiguration?: MedialiveChannelEncoderSettingsMotionGraphicsConfiguration;
    /**
    * nielsen_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#nielsen_configuration MedialiveChannel#nielsen_configuration}
    */
    readonly nielsenConfiguration?: MedialiveChannelEncoderSettingsNielsenConfiguration;
    /**
    * output_groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_groups MedialiveChannel#output_groups}
    */
    readonly outputGroups: MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable;
    /**
    * timecode_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timecode_config MedialiveChannel#timecode_config}
    */
    readonly timecodeConfig: MedialiveChannelEncoderSettingsTimecodeConfig;
    /**
    * video_descriptions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_descriptions MedialiveChannel#video_descriptions}
    */
    readonly videoDescriptions?: MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable;
}
export declare function medialiveChannelEncoderSettingsToTerraform(struct?: MedialiveChannelEncoderSettingsOutputReference | MedialiveChannelEncoderSettings): any;
export declare function medialiveChannelEncoderSettingsToHclTerraform(struct?: MedialiveChannelEncoderSettingsOutputReference | MedialiveChannelEncoderSettings): any;
export declare class MedialiveChannelEncoderSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelEncoderSettings | undefined;
    set internalValue(value: MedialiveChannelEncoderSettings | undefined);
    private _audioDescriptions;
    get audioDescriptions(): MedialiveChannelEncoderSettingsAudioDescriptionsList;
    putAudioDescriptions(value: MedialiveChannelEncoderSettingsAudioDescriptions[] | cdktf.IResolvable): void;
    resetAudioDescriptions(): void;
    get audioDescriptionsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsAudioDescriptions[] | undefined;
    private _availBlanking;
    get availBlanking(): MedialiveChannelEncoderSettingsAvailBlankingOutputReference;
    putAvailBlanking(value: MedialiveChannelEncoderSettingsAvailBlanking): void;
    resetAvailBlanking(): void;
    get availBlankingInput(): MedialiveChannelEncoderSettingsAvailBlanking | undefined;
    private _captionDescriptions;
    get captionDescriptions(): MedialiveChannelEncoderSettingsCaptionDescriptionsList;
    putCaptionDescriptions(value: MedialiveChannelEncoderSettingsCaptionDescriptions[] | cdktf.IResolvable): void;
    resetCaptionDescriptions(): void;
    get captionDescriptionsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsCaptionDescriptions[] | undefined;
    private _globalConfiguration;
    get globalConfiguration(): MedialiveChannelEncoderSettingsGlobalConfigurationOutputReference;
    putGlobalConfiguration(value: MedialiveChannelEncoderSettingsGlobalConfiguration): void;
    resetGlobalConfiguration(): void;
    get globalConfigurationInput(): MedialiveChannelEncoderSettingsGlobalConfiguration | undefined;
    private _motionGraphicsConfiguration;
    get motionGraphicsConfiguration(): MedialiveChannelEncoderSettingsMotionGraphicsConfigurationOutputReference;
    putMotionGraphicsConfiguration(value: MedialiveChannelEncoderSettingsMotionGraphicsConfiguration): void;
    resetMotionGraphicsConfiguration(): void;
    get motionGraphicsConfigurationInput(): MedialiveChannelEncoderSettingsMotionGraphicsConfiguration | undefined;
    private _nielsenConfiguration;
    get nielsenConfiguration(): MedialiveChannelEncoderSettingsNielsenConfigurationOutputReference;
    putNielsenConfiguration(value: MedialiveChannelEncoderSettingsNielsenConfiguration): void;
    resetNielsenConfiguration(): void;
    get nielsenConfigurationInput(): MedialiveChannelEncoderSettingsNielsenConfiguration | undefined;
    private _outputGroups;
    get outputGroups(): MedialiveChannelEncoderSettingsOutputGroupsList;
    putOutputGroups(value: MedialiveChannelEncoderSettingsOutputGroups[] | cdktf.IResolvable): void;
    get outputGroupsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsOutputGroups[] | undefined;
    private _timecodeConfig;
    get timecodeConfig(): MedialiveChannelEncoderSettingsTimecodeConfigOutputReference;
    putTimecodeConfig(value: MedialiveChannelEncoderSettingsTimecodeConfig): void;
    get timecodeConfigInput(): MedialiveChannelEncoderSettingsTimecodeConfig | undefined;
    private _videoDescriptions;
    get videoDescriptions(): MedialiveChannelEncoderSettingsVideoDescriptionsList;
    putVideoDescriptions(value: MedialiveChannelEncoderSettingsVideoDescriptions[] | cdktf.IResolvable): void;
    resetVideoDescriptions(): void;
    get videoDescriptionsInput(): cdktf.IResolvable | MedialiveChannelEncoderSettingsVideoDescriptions[] | undefined;
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_selector_name MedialiveChannel#audio_selector_name}
    */
    readonly audioSelectorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_silence_threshold_msec MedialiveChannel#audio_silence_threshold_msec}
    */
    readonly audioSilenceThresholdMsec?: number;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings | undefined);
    private _audioSelectorName?;
    get audioSelectorName(): string;
    set audioSelectorName(value: string);
    get audioSelectorNameInput(): string | undefined;
    private _audioSilenceThresholdMsec?;
    get audioSilenceThresholdMsec(): number;
    set audioSilenceThresholdMsec(value: number);
    resetAudioSilenceThresholdMsec(): void;
    get audioSilenceThresholdMsecInput(): number | undefined;
}
