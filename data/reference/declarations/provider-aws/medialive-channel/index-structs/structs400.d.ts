/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
import { MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings, MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference } from './structs0';
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_threshold_msec MedialiveChannel#input_loss_threshold_msec}
    */
    readonly inputLossThresholdMsec?: number;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings | undefined);
    private _inputLossThresholdMsec?;
    get inputLossThresholdMsec(): number;
    set inputLossThresholdMsec(value: number);
    resetInputLossThresholdMsec(): void;
    get inputLossThresholdMsecInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#black_detect_threshold MedialiveChannel#black_detect_threshold}
    */
    readonly blackDetectThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_black_threshold_msec MedialiveChannel#video_black_threshold_msec}
    */
    readonly videoBlackThresholdMsec?: number;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings | undefined);
    private _blackDetectThreshold?;
    get blackDetectThreshold(): number;
    set blackDetectThreshold(value: number);
    resetBlackDetectThreshold(): void;
    get blackDetectThresholdInput(): number | undefined;
    private _videoBlackThresholdMsec?;
    get videoBlackThresholdMsec(): number;
    set videoBlackThresholdMsec(value: number);
    resetVideoBlackThresholdMsec(): void;
    get videoBlackThresholdMsecInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings {
    /**
    * audio_silence_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_silence_settings MedialiveChannel#audio_silence_settings}
    */
    readonly audioSilenceSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings;
    /**
    * input_loss_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_loss_settings MedialiveChannel#input_loss_settings}
    */
    readonly inputLossSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings;
    /**
    * video_black_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_black_settings MedialiveChannel#video_black_settings}
    */
    readonly videoBlackSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings | undefined);
    private _audioSilenceSettings;
    get audioSilenceSettings(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettingsOutputReference;
    putAudioSilenceSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings): void;
    resetAudioSilenceSettings(): void;
    get audioSilenceSettingsInput(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsAudioSilenceSettings | undefined;
    private _inputLossSettings;
    get inputLossSettings(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettingsOutputReference;
    putInputLossSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings): void;
    resetInputLossSettings(): void;
    get inputLossSettingsInput(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings | undefined;
    private _videoBlackSettings;
    get videoBlackSettings(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettingsOutputReference;
    putVideoBlackSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings): void;
    resetVideoBlackSettings(): void;
    get videoBlackSettingsInput(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsVideoBlackSettings | undefined;
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition {
    /**
    * failover_condition_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#failover_condition_settings MedialiveChannel#failover_condition_settings}
    */
    readonly failoverConditionSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition | cdktf.IResolvable | undefined);
    private _failoverConditionSettings;
    get failoverConditionSettings(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsOutputReference;
    putFailoverConditionSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings): void;
    resetFailoverConditionSettings(): void;
    get failoverConditionSettingsInput(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings | undefined;
}
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionOutputReference;
}
export interface MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#error_clear_time_msec MedialiveChannel#error_clear_time_msec}
    */
    readonly errorClearTimeMsec?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_preference MedialiveChannel#input_preference}
    */
    readonly inputPreference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#secondary_input_id MedialiveChannel#secondary_input_id}
    */
    readonly secondaryInputId: string;
    /**
    * failover_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#failover_condition MedialiveChannel#failover_condition}
    */
    readonly failoverCondition?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable;
}
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings): any;
export declare function medialiveChannelInputAttachmentsAutomaticInputFailoverSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings): any;
export declare class MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings | undefined);
    private _errorClearTimeMsec?;
    get errorClearTimeMsec(): number;
    set errorClearTimeMsec(value: number);
    resetErrorClearTimeMsec(): void;
    get errorClearTimeMsecInput(): number | undefined;
    private _inputPreference?;
    get inputPreference(): string;
    set inputPreference(value: string);
    resetInputPreference(): void;
    get inputPreferenceInput(): string | undefined;
    private _secondaryInputId?;
    get secondaryInputId(): string;
    set secondaryInputId(value: string);
    get secondaryInputIdInput(): string | undefined;
    private _failoverCondition;
    get failoverCondition(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverConditionList;
    putFailoverCondition(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | cdktf.IResolvable): void;
    resetFailoverCondition(): void;
    get failoverConditionInput(): cdktf.IResolvable | MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsFailoverCondition[] | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#group_id MedialiveChannel#group_id}
    */
    readonly groupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection | undefined);
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    get groupIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_selection_policy MedialiveChannel#language_selection_policy}
    */
    readonly languageSelectionPolicy?: string;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection | undefined);
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _languageSelectionPolicy?;
    get languageSelectionPolicy(): string;
    set languageSelectionPolicy(value: string);
    resetLanguageSelectionPolicy(): void;
    get languageSelectionPolicyInput(): string | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
    */
    readonly pid: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection | undefined);
    private _pid?;
    get pid(): number;
    set pid(value: number);
    get pidInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#program_selection MedialiveChannel#program_selection}
    */
    readonly programSelection: string;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode | undefined);
    private _programSelection?;
    get programSelection(): string;
    set programSelection(value: string);
    get programSelectionInput(): string | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#track MedialiveChannel#track}
    */
    readonly track: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks | cdktf.IResolvable | undefined);
    private _track?;
    get track(): number;
    set track(value: number);
    get trackInput(): number | undefined;
}
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksOutputReference;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection {
    /**
    * dolby_e_decode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dolby_e_decode MedialiveChannel#dolby_e_decode}
    */
    readonly dolbyEDecode?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode;
    /**
    * tracks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tracks MedialiveChannel#tracks}
    */
    readonly tracks: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined);
    private _dolbyEDecode;
    get dolbyEDecode(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecodeOutputReference;
    putDolbyEDecode(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode): void;
    resetDolbyEDecode(): void;
    get dolbyEDecodeInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionDolbyEDecode | undefined;
    private _tracks;
    get tracks(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracksList;
    putTracks(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | cdktf.IResolvable): void;
    get tracksInput(): cdktf.IResolvable | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionTracks[] | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings {
    /**
    * audio_hls_rendition_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_hls_rendition_selection MedialiveChannel#audio_hls_rendition_selection}
    */
    readonly audioHlsRenditionSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection;
    /**
    * audio_language_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_language_selection MedialiveChannel#audio_language_selection}
    */
    readonly audioLanguageSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection;
    /**
    * audio_pid_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_pid_selection MedialiveChannel#audio_pid_selection}
    */
    readonly audioPidSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection;
    /**
    * audio_track_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_track_selection MedialiveChannel#audio_track_selection}
    */
    readonly audioTrackSelection?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings | undefined);
    private _audioHlsRenditionSelection;
    get audioHlsRenditionSelection(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelectionOutputReference;
    putAudioHlsRenditionSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection): void;
    resetAudioHlsRenditionSelection(): void;
    get audioHlsRenditionSelectionInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioHlsRenditionSelection | undefined;
    private _audioLanguageSelection;
    get audioLanguageSelection(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelectionOutputReference;
    putAudioLanguageSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection): void;
    resetAudioLanguageSelection(): void;
    get audioLanguageSelectionInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioLanguageSelection | undefined;
    private _audioPidSelection;
    get audioPidSelection(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelectionOutputReference;
    putAudioPidSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection): void;
    resetAudioPidSelection(): void;
    get audioPidSelectionInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioPidSelection | undefined;
    private _audioTrackSelection;
    get audioTrackSelection(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelectionOutputReference;
    putAudioTrackSelection(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection): void;
    resetAudioTrackSelection(): void;
    get audioTrackSelectionInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsAudioTrackSelection | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsAudioSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * selector_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#selector_settings MedialiveChannel#selector_settings}
    */
    readonly selectorSettings?: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings;
}
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable): any;
export declare function medialiveChannelInputAttachmentsInputSettingsAudioSelectorToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelector | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _selectorSettings;
    get selectorSettings(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettingsOutputReference;
    putSelectorSettings(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings): void;
    resetSelectorSettings(): void;
    get selectorSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorSelectorSettings | undefined;
}
export declare class MedialiveChannelInputAttachmentsInputSettingsAudioSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorOutputReference;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#source_ancillary_channel_number MedialiveChannel#source_ancillary_channel_number}
    */
    readonly sourceAncillaryChannelNumber?: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings | undefined);
    private _sourceAncillaryChannelNumber?;
    get sourceAncillaryChannelNumber(): number;
    set sourceAncillaryChannelNumber(value: number);
    resetSourceAncillaryChannelNumber(): void;
    get sourceAncillaryChannelNumberInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings {
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings | undefined);
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ocr_language MedialiveChannel#ocr_language}
    */
    readonly ocrLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
    */
    readonly pid?: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings | undefined);
    private _ocrLanguage?;
    get ocrLanguage(): string;
    set ocrLanguage(value: string);
    resetOcrLanguage(): void;
    get ocrLanguageInput(): string | undefined;
    private _pid?;
    get pid(): number;
    set pid(value: number);
    resetPid(): void;
    get pidInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
    */
    readonly convert608To708?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte20_detection MedialiveChannel#scte20_detection}
    */
    readonly scte20Detection?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
    */
    readonly source608ChannelNumber?: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined);
    private _convert608To708?;
    get convert608To708(): string;
    set convert608To708(value: string);
    resetConvert608To708(): void;
    get convert608To708Input(): string | undefined;
    private _scte20Detection?;
    get scte20Detection(): string;
    set scte20Detection(value: string);
    resetScte20Detection(): void;
    get scte20DetectionInput(): string | undefined;
    private _source608ChannelNumber?;
    get source608ChannelNumber(): number;
    set source608ChannelNumber(value: number);
    resetSource608ChannelNumber(): void;
    get source608ChannelNumberInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#convert_608_to_708 MedialiveChannel#convert_608_to_708}
    */
    readonly convert608To708?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#source_608_channel_number MedialiveChannel#source_608_channel_number}
    */
    readonly source608ChannelNumber?: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings | undefined);
    private _convert608To708?;
    get convert608To708(): string;
    set convert608To708(value: string);
    resetConvert608To708(): void;
    get convert608To708Input(): string | undefined;
    private _source608ChannelNumber?;
    get source608ChannelNumber(): number;
    set source608ChannelNumber(value: number);
    resetSource608ChannelNumber(): void;
    get source608ChannelNumberInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ocr_language MedialiveChannel#ocr_language}
    */
    readonly ocrLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#pid MedialiveChannel#pid}
    */
    readonly pid?: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings | undefined);
    private _ocrLanguage?;
    get ocrLanguage(): string;
    set ocrLanguage(value: string);
    resetOcrLanguage(): void;
    get ocrLanguageInput(): string | undefined;
    private _pid?;
    get pid(): number;
    set pid(value: number);
    resetPid(): void;
    get pidInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#height MedialiveChannel#height}
    */
    readonly height: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#left_offset MedialiveChannel#left_offset}
    */
    readonly leftOffset: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#top_offset MedialiveChannel#top_offset}
    */
    readonly topOffset: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#width MedialiveChannel#width}
    */
    readonly width: number;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle | undefined);
    private _height?;
    get height(): number;
    set height(value: number);
    get heightInput(): number | undefined;
    private _leftOffset?;
    get leftOffset(): number;
    set leftOffset(value: number);
    get leftOffsetInput(): number | undefined;
    private _topOffset?;
    get topOffset(): number;
    set topOffset(value: number);
    get topOffsetInput(): number | undefined;
    private _width?;
    get width(): number;
    set width(value: number);
    get widthInput(): number | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#page_number MedialiveChannel#page_number}
    */
    readonly pageNumber?: string;
    /**
    * output_rectangle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#output_rectangle MedialiveChannel#output_rectangle}
    */
    readonly outputRectangle?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings | undefined);
    private _pageNumber?;
    get pageNumber(): string;
    set pageNumber(value: string);
    resetPageNumber(): void;
    get pageNumberInput(): string | undefined;
    private _outputRectangle;
    get outputRectangle(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangleOutputReference;
    putOutputRectangle(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle): void;
    resetOutputRectangle(): void;
    get outputRectangleInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputRectangle | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings {
    /**
    * ancillary_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#ancillary_source_settings MedialiveChannel#ancillary_source_settings}
    */
    readonly ancillarySourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings;
    /**
    * arib_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#arib_source_settings MedialiveChannel#arib_source_settings}
    */
    readonly aribSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings;
    /**
    * dvb_sub_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#dvb_sub_source_settings MedialiveChannel#dvb_sub_source_settings}
    */
    readonly dvbSubSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings;
    /**
    * embedded_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#embedded_source_settings MedialiveChannel#embedded_source_settings}
    */
    readonly embeddedSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings;
    /**
    * scte20_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte20_source_settings MedialiveChannel#scte20_source_settings}
    */
    readonly scte20SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings;
    /**
    * scte27_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte27_source_settings MedialiveChannel#scte27_source_settings}
    */
    readonly scte27SourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings;
    /**
    * teletext_source_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#teletext_source_settings MedialiveChannel#teletext_source_settings}
    */
    readonly teletextSourceSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings | undefined);
    private _ancillarySourceSettings;
    get ancillarySourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettingsOutputReference;
    putAncillarySourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings): void;
    resetAncillarySourceSettings(): void;
    get ancillarySourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAncillarySourceSettings | undefined;
    private _aribSourceSettings;
    get aribSourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettingsOutputReference;
    putAribSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings): void;
    resetAribSourceSettings(): void;
    get aribSourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsAribSourceSettings | undefined;
    private _dvbSubSourceSettings;
    get dvbSubSourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettingsOutputReference;
    putDvbSubSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings): void;
    resetDvbSubSourceSettings(): void;
    get dvbSubSourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsDvbSubSourceSettings | undefined;
    private _embeddedSourceSettings;
    get embeddedSourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettingsOutputReference;
    putEmbeddedSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings): void;
    resetEmbeddedSourceSettings(): void;
    get embeddedSourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsEmbeddedSourceSettings | undefined;
    private _scte20SourceSettings;
    get scte20SourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettingsOutputReference;
    putScte20SourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings): void;
    resetScte20SourceSettings(): void;
    get scte20SourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte20SourceSettings | undefined;
    private _scte27SourceSettings;
    get scte27SourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettingsOutputReference;
    putScte27SourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings): void;
    resetScte27SourceSettings(): void;
    get scte27SourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsScte27SourceSettings | undefined;
    private _teletextSourceSettings;
    get teletextSourceSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettingsOutputReference;
    putTeletextSourceSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings): void;
    resetTeletextSourceSettings(): void;
    get teletextSourceSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsTeletextSourceSettings | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsCaptionSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#language_code MedialiveChannel#language_code}
    */
    readonly languageCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * selector_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#selector_settings MedialiveChannel#selector_settings}
    */
    readonly selectorSettings?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings;
}
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable): any;
export declare function medialiveChannelInputAttachmentsInputSettingsCaptionSelectorToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector | cdktf.IResolvable | undefined);
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _selectorSettings;
    get selectorSettings(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettingsOutputReference;
    putSelectorSettings(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings): void;
    resetSelectorSettings(): void;
    get selectorSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorSelectorSettings | undefined;
}
export declare class MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorOutputReference;
}
export interface MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#bandwidth MedialiveChannel#bandwidth}
    */
    readonly bandwidth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#buffer_segments MedialiveChannel#buffer_segments}
    */
    readonly bufferSegments?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#retries MedialiveChannel#retries}
    */
    readonly retries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#retry_interval MedialiveChannel#retry_interval}
    */
    readonly retryInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_source MedialiveChannel#scte35_source}
    */
    readonly scte35Source?: string;
}
export declare function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings | undefined);
    private _bandwidth?;
    get bandwidth(): number;
    set bandwidth(value: number);
    resetBandwidth(): void;
    get bandwidthInput(): number | undefined;
    private _bufferSegments?;
    get bufferSegments(): number;
    set bufferSegments(value: number);
    resetBufferSegments(): void;
    get bufferSegmentsInput(): number | undefined;
    private _retries?;
    get retries(): number;
    set retries(value: number);
    resetRetries(): void;
    get retriesInput(): number | undefined;
    private _retryInterval?;
    get retryInterval(): number;
    set retryInterval(value: number);
    resetRetryInterval(): void;
    get retryIntervalInput(): number | undefined;
    private _scte35Source?;
    get scte35Source(): string;
    set scte35Source(value: string);
    resetScte35Source(): void;
    get scte35SourceInput(): string | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#server_validation MedialiveChannel#server_validation}
    */
    readonly serverValidation?: string;
    /**
    * hls_input_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#hls_input_settings MedialiveChannel#hls_input_settings}
    */
    readonly hlsInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings;
}
export declare function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings | undefined);
    private _serverValidation?;
    get serverValidation(): string;
    set serverValidation(value: string);
    resetServerValidation(): void;
    get serverValidationInput(): string | undefined;
    private _hlsInputSettings;
    get hlsInputSettings(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettingsOutputReference;
    putHlsInputSettings(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings): void;
    resetHlsInputSettings(): void;
    get hlsInputSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsHlsInputSettings | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettingsVideoSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_space MedialiveChannel#color_space}
    */
    readonly colorSpace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#color_space_usage MedialiveChannel#color_space_usage}
    */
    readonly colorSpaceUsage?: string;
}
export declare function medialiveChannelInputAttachmentsInputSettingsVideoSelectorToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference | MedialiveChannelInputAttachmentsInputSettingsVideoSelector): any;
export declare function medialiveChannelInputAttachmentsInputSettingsVideoSelectorToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference | MedialiveChannelInputAttachmentsInputSettingsVideoSelector): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettingsVideoSelector | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettingsVideoSelector | undefined);
    private _colorSpace?;
    get colorSpace(): string;
    set colorSpace(value: string);
    resetColorSpace(): void;
    get colorSpaceInput(): string | undefined;
    private _colorSpaceUsage?;
    get colorSpaceUsage(): string;
    set colorSpaceUsage(value: string);
    resetColorSpaceUsage(): void;
    get colorSpaceUsageInput(): string | undefined;
}
export interface MedialiveChannelInputAttachmentsInputSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#deblock_filter MedialiveChannel#deblock_filter}
    */
    readonly deblockFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#denoise_filter MedialiveChannel#denoise_filter}
    */
    readonly denoiseFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#filter_strength MedialiveChannel#filter_strength}
    */
    readonly filterStrength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_filter MedialiveChannel#input_filter}
    */
    readonly inputFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#scte35_pid MedialiveChannel#scte35_pid}
    */
    readonly scte35Pid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#smpte2038_data_preference MedialiveChannel#smpte2038_data_preference}
    */
    readonly smpte2038DataPreference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#source_end_behavior MedialiveChannel#source_end_behavior}
    */
    readonly sourceEndBehavior?: string;
    /**
    * audio_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#audio_selector MedialiveChannel#audio_selector}
    */
    readonly audioSelector?: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable;
    /**
    * caption_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#caption_selector MedialiveChannel#caption_selector}
    */
    readonly captionSelector?: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable;
    /**
    * network_input_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#network_input_settings MedialiveChannel#network_input_settings}
    */
    readonly networkInputSettings?: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings;
    /**
    * video_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#video_selector MedialiveChannel#video_selector}
    */
    readonly videoSelector?: MedialiveChannelInputAttachmentsInputSettingsVideoSelector;
}
export declare function medialiveChannelInputAttachmentsInputSettingsToTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettings): any;
export declare function medialiveChannelInputAttachmentsInputSettingsToHclTerraform(struct?: MedialiveChannelInputAttachmentsInputSettingsOutputReference | MedialiveChannelInputAttachmentsInputSettings): any;
export declare class MedialiveChannelInputAttachmentsInputSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputAttachmentsInputSettings | undefined;
    set internalValue(value: MedialiveChannelInputAttachmentsInputSettings | undefined);
    private _deblockFilter?;
    get deblockFilter(): string;
    set deblockFilter(value: string);
    resetDeblockFilter(): void;
    get deblockFilterInput(): string | undefined;
    private _denoiseFilter?;
    get denoiseFilter(): string;
    set denoiseFilter(value: string);
    resetDenoiseFilter(): void;
    get denoiseFilterInput(): string | undefined;
    private _filterStrength?;
    get filterStrength(): number;
    set filterStrength(value: number);
    resetFilterStrength(): void;
    get filterStrengthInput(): number | undefined;
    private _inputFilter?;
    get inputFilter(): string;
    set inputFilter(value: string);
    resetInputFilter(): void;
    get inputFilterInput(): string | undefined;
    private _scte35Pid?;
    get scte35Pid(): number;
    set scte35Pid(value: number);
    resetScte35Pid(): void;
    get scte35PidInput(): number | undefined;
    private _smpte2038DataPreference?;
    get smpte2038DataPreference(): string;
    set smpte2038DataPreference(value: string);
    resetSmpte2038DataPreference(): void;
    get smpte2038DataPreferenceInput(): string | undefined;
    private _sourceEndBehavior?;
    get sourceEndBehavior(): string;
    set sourceEndBehavior(value: string);
    resetSourceEndBehavior(): void;
    get sourceEndBehaviorInput(): string | undefined;
    private _audioSelector;
    get audioSelector(): MedialiveChannelInputAttachmentsInputSettingsAudioSelectorList;
    putAudioSelector(value: MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | cdktf.IResolvable): void;
    resetAudioSelector(): void;
    get audioSelectorInput(): cdktf.IResolvable | MedialiveChannelInputAttachmentsInputSettingsAudioSelector[] | undefined;
    private _captionSelector;
    get captionSelector(): MedialiveChannelInputAttachmentsInputSettingsCaptionSelectorList;
    putCaptionSelector(value: MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | cdktf.IResolvable): void;
    resetCaptionSelector(): void;
    get captionSelectorInput(): cdktf.IResolvable | MedialiveChannelInputAttachmentsInputSettingsCaptionSelector[] | undefined;
    private _networkInputSettings;
    get networkInputSettings(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettingsOutputReference;
    putNetworkInputSettings(value: MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings): void;
    resetNetworkInputSettings(): void;
    get networkInputSettingsInput(): MedialiveChannelInputAttachmentsInputSettingsNetworkInputSettings | undefined;
    private _videoSelector;
    get videoSelector(): MedialiveChannelInputAttachmentsInputSettingsVideoSelectorOutputReference;
    putVideoSelector(value: MedialiveChannelInputAttachmentsInputSettingsVideoSelector): void;
    resetVideoSelector(): void;
    get videoSelectorInput(): MedialiveChannelInputAttachmentsInputSettingsVideoSelector | undefined;
}
export interface MedialiveChannelInputAttachments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_attachment_name MedialiveChannel#input_attachment_name}
    */
    readonly inputAttachmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_id MedialiveChannel#input_id}
    */
    readonly inputId: string;
    /**
    * automatic_input_failover_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#automatic_input_failover_settings MedialiveChannel#automatic_input_failover_settings}
    */
    readonly automaticInputFailoverSettings?: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings;
    /**
    * input_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_settings MedialiveChannel#input_settings}
    */
    readonly inputSettings?: MedialiveChannelInputAttachmentsInputSettings;
}
export declare function medialiveChannelInputAttachmentsToTerraform(struct?: MedialiveChannelInputAttachments | cdktf.IResolvable): any;
export declare function medialiveChannelInputAttachmentsToHclTerraform(struct?: MedialiveChannelInputAttachments | cdktf.IResolvable): any;
export declare class MedialiveChannelInputAttachmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveChannelInputAttachments | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelInputAttachments | cdktf.IResolvable | undefined);
    private _inputAttachmentName?;
    get inputAttachmentName(): string;
    set inputAttachmentName(value: string);
    get inputAttachmentNameInput(): string | undefined;
    private _inputId?;
    get inputId(): string;
    set inputId(value: string);
    get inputIdInput(): string | undefined;
    private _automaticInputFailoverSettings;
    get automaticInputFailoverSettings(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettingsOutputReference;
    putAutomaticInputFailoverSettings(value: MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings): void;
    resetAutomaticInputFailoverSettings(): void;
    get automaticInputFailoverSettingsInput(): MedialiveChannelInputAttachmentsAutomaticInputFailoverSettings | undefined;
    private _inputSettings;
    get inputSettings(): MedialiveChannelInputAttachmentsInputSettingsOutputReference;
    putInputSettings(value: MedialiveChannelInputAttachmentsInputSettings): void;
    resetInputSettings(): void;
    get inputSettingsInput(): MedialiveChannelInputAttachmentsInputSettings | undefined;
}
export declare class MedialiveChannelInputAttachmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveChannelInputAttachments[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveChannelInputAttachmentsOutputReference;
}
export interface MedialiveChannelInputSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#codec MedialiveChannel#codec}
    */
    readonly codec: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_resolution MedialiveChannel#input_resolution}
    */
    readonly inputResolution: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#maximum_bitrate MedialiveChannel#maximum_bitrate}
    */
    readonly maximumBitrate: string;
}
export declare function medialiveChannelInputSpecificationToTerraform(struct?: MedialiveChannelInputSpecificationOutputReference | MedialiveChannelInputSpecification): any;
export declare function medialiveChannelInputSpecificationToHclTerraform(struct?: MedialiveChannelInputSpecificationOutputReference | MedialiveChannelInputSpecification): any;
export declare class MedialiveChannelInputSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelInputSpecification | undefined;
    set internalValue(value: MedialiveChannelInputSpecification | undefined);
    private _codec?;
    get codec(): string;
    set codec(value: string);
    get codecInput(): string | undefined;
    private _inputResolution?;
    get inputResolution(): string;
    set inputResolution(value: string);
    get inputResolutionInput(): string | undefined;
    private _maximumBitrate?;
    get maximumBitrate(): string;
    set maximumBitrate(value: string);
    get maximumBitrateInput(): string | undefined;
}
export interface MedialiveChannelMaintenance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#maintenance_day MedialiveChannel#maintenance_day}
    */
    readonly maintenanceDay: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#maintenance_start_time MedialiveChannel#maintenance_start_time}
    */
    readonly maintenanceStartTime: string;
}
export declare function medialiveChannelMaintenanceToTerraform(struct?: MedialiveChannelMaintenanceOutputReference | MedialiveChannelMaintenance): any;
export declare function medialiveChannelMaintenanceToHclTerraform(struct?: MedialiveChannelMaintenanceOutputReference | MedialiveChannelMaintenance): any;
export declare class MedialiveChannelMaintenanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelMaintenance | undefined;
    set internalValue(value: MedialiveChannelMaintenance | undefined);
    private _maintenanceDay?;
    get maintenanceDay(): string;
    set maintenanceDay(value: string);
    get maintenanceDayInput(): string | undefined;
    private _maintenanceStartTime?;
    get maintenanceStartTime(): string;
    set maintenanceStartTime(value: string);
    get maintenanceStartTimeInput(): string | undefined;
}
export interface MedialiveChannelTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#create MedialiveChannel#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#delete MedialiveChannel#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#update MedialiveChannel#update}
    */
    readonly update?: string;
}
export declare function medialiveChannelTimeoutsToTerraform(struct?: MedialiveChannelTimeouts | cdktf.IResolvable): any;
export declare function medialiveChannelTimeoutsToHclTerraform(struct?: MedialiveChannelTimeouts | cdktf.IResolvable): any;
export declare class MedialiveChannelTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveChannelTimeouts | cdktf.IResolvable | undefined);
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
export interface MedialiveChannelVpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#public_address_allocation_ids MedialiveChannel#public_address_allocation_ids}
    */
    readonly publicAddressAllocationIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#security_group_ids MedialiveChannel#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#subnet_ids MedialiveChannel#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function medialiveChannelVpcToTerraform(struct?: MedialiveChannelVpcOutputReference | MedialiveChannelVpc): any;
export declare function medialiveChannelVpcToHclTerraform(struct?: MedialiveChannelVpcOutputReference | MedialiveChannelVpc): any;
export declare class MedialiveChannelVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveChannelVpc | undefined;
    set internalValue(value: MedialiveChannelVpc | undefined);
    get availabilityZones(): string[];
    get networkInterfaceIds(): string[];
    private _publicAddressAllocationIds?;
    get publicAddressAllocationIds(): string[];
    set publicAddressAllocationIds(value: string[]);
    get publicAddressAllocationIdsInput(): string[] | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
