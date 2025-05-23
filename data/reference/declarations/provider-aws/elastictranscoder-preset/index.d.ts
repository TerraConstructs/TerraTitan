/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#container ElastictranscoderPreset#container}
    */
    readonly container: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#description ElastictranscoderPreset#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#id ElastictranscoderPreset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#name ElastictranscoderPreset#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#type ElastictranscoderPreset#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#video_codec_options ElastictranscoderPreset#video_codec_options}
    */
    readonly videoCodecOptions?: {
        [key: string]: string;
    };
    /**
    * audio block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#audio ElastictranscoderPreset#audio}
    */
    readonly audio?: ElastictranscoderPresetAudio;
    /**
    * audio_codec_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#audio_codec_options ElastictranscoderPreset#audio_codec_options}
    */
    readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions;
    /**
    * thumbnails block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#thumbnails ElastictranscoderPreset#thumbnails}
    */
    readonly thumbnails?: ElastictranscoderPresetThumbnails;
    /**
    * video block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#video ElastictranscoderPreset#video}
    */
    readonly video?: ElastictranscoderPresetVideo;
    /**
    * video_watermarks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#video_watermarks ElastictranscoderPreset#video_watermarks}
    */
    readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable;
}
export interface ElastictranscoderPresetAudio {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}
    */
    readonly audioPackingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#channels ElastictranscoderPreset#channels}
    */
    readonly channels?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#sample_rate ElastictranscoderPreset#sample_rate}
    */
    readonly sampleRate?: string;
}
export declare function elastictranscoderPresetAudioToTerraform(struct?: ElastictranscoderPresetAudioOutputReference | ElastictranscoderPresetAudio): any;
export declare function elastictranscoderPresetAudioToHclTerraform(struct?: ElastictranscoderPresetAudioOutputReference | ElastictranscoderPresetAudio): any;
export declare class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPresetAudio | undefined;
    set internalValue(value: ElastictranscoderPresetAudio | undefined);
    private _audioPackingMode?;
    get audioPackingMode(): string;
    set audioPackingMode(value: string);
    resetAudioPackingMode(): void;
    get audioPackingModeInput(): string | undefined;
    private _bitRate?;
    get bitRate(): string;
    set bitRate(value: string);
    resetBitRate(): void;
    get bitRateInput(): string | undefined;
    private _channels?;
    get channels(): string;
    set channels(value: string);
    resetChannels(): void;
    get channelsInput(): string | undefined;
    private _codec?;
    get codec(): string;
    set codec(value: string);
    resetCodec(): void;
    get codecInput(): string | undefined;
    private _sampleRate?;
    get sampleRate(): string;
    set sampleRate(value: string);
    resetSampleRate(): void;
    get sampleRateInput(): string | undefined;
}
export interface ElastictranscoderPresetAudioCodecOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#bit_depth ElastictranscoderPreset#bit_depth}
    */
    readonly bitDepth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#bit_order ElastictranscoderPreset#bit_order}
    */
    readonly bitOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#profile ElastictranscoderPreset#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#signed ElastictranscoderPreset#signed}
    */
    readonly signed?: string;
}
export declare function elastictranscoderPresetAudioCodecOptionsToTerraform(struct?: ElastictranscoderPresetAudioCodecOptionsOutputReference | ElastictranscoderPresetAudioCodecOptions): any;
export declare function elastictranscoderPresetAudioCodecOptionsToHclTerraform(struct?: ElastictranscoderPresetAudioCodecOptionsOutputReference | ElastictranscoderPresetAudioCodecOptions): any;
export declare class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPresetAudioCodecOptions | undefined;
    set internalValue(value: ElastictranscoderPresetAudioCodecOptions | undefined);
    private _bitDepth?;
    get bitDepth(): string;
    set bitDepth(value: string);
    resetBitDepth(): void;
    get bitDepthInput(): string | undefined;
    private _bitOrder?;
    get bitOrder(): string;
    set bitOrder(value: string);
    resetBitOrder(): void;
    get bitOrderInput(): string | undefined;
    private _profile?;
    get profile(): string;
    set profile(value: string);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _signed?;
    get signed(): string;
    set signed(value: string);
    resetSigned(): void;
    get signedInput(): string | undefined;
}
export interface ElastictranscoderPresetThumbnails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#format ElastictranscoderPreset#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#interval ElastictranscoderPreset#interval}
    */
    readonly interval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
}
export declare function elastictranscoderPresetThumbnailsToTerraform(struct?: ElastictranscoderPresetThumbnailsOutputReference | ElastictranscoderPresetThumbnails): any;
export declare function elastictranscoderPresetThumbnailsToHclTerraform(struct?: ElastictranscoderPresetThumbnailsOutputReference | ElastictranscoderPresetThumbnails): any;
export declare class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPresetThumbnails | undefined;
    set internalValue(value: ElastictranscoderPresetThumbnails | undefined);
    private _aspectRatio?;
    get aspectRatio(): string;
    set aspectRatio(value: string);
    resetAspectRatio(): void;
    get aspectRatioInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string | undefined;
    private _interval?;
    get interval(): string;
    set interval(value: string);
    resetInterval(): void;
    get intervalInput(): string | undefined;
    private _maxHeight?;
    get maxHeight(): string;
    set maxHeight(value: string);
    resetMaxHeight(): void;
    get maxHeightInput(): string | undefined;
    private _maxWidth?;
    get maxWidth(): string;
    set maxWidth(value: string);
    resetMaxWidth(): void;
    get maxWidthInput(): string | undefined;
    private _paddingPolicy?;
    get paddingPolicy(): string;
    set paddingPolicy(value: string);
    resetPaddingPolicy(): void;
    get paddingPolicyInput(): string | undefined;
    private _resolution?;
    get resolution(): string;
    set resolution(value: string);
    resetResolution(): void;
    get resolutionInput(): string | undefined;
    private _sizingPolicy?;
    get sizingPolicy(): string;
    set sizingPolicy(value: string);
    resetSizingPolicy(): void;
    get sizingPolicyInput(): string | undefined;
}
export interface ElastictranscoderPresetVideo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}
    */
    readonly displayAspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#fixed_gop ElastictranscoderPreset#fixed_gop}
    */
    readonly fixedGop?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#frame_rate ElastictranscoderPreset#frame_rate}
    */
    readonly frameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}
    */
    readonly keyframesMaxDist?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_frame_rate ElastictranscoderPreset#max_frame_rate}
    */
    readonly maxFrameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
}
export declare function elastictranscoderPresetVideoToTerraform(struct?: ElastictranscoderPresetVideoOutputReference | ElastictranscoderPresetVideo): any;
export declare function elastictranscoderPresetVideoToHclTerraform(struct?: ElastictranscoderPresetVideoOutputReference | ElastictranscoderPresetVideo): any;
export declare class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElastictranscoderPresetVideo | undefined;
    set internalValue(value: ElastictranscoderPresetVideo | undefined);
    private _aspectRatio?;
    get aspectRatio(): string;
    set aspectRatio(value: string);
    resetAspectRatio(): void;
    get aspectRatioInput(): string | undefined;
    private _bitRate?;
    get bitRate(): string;
    set bitRate(value: string);
    resetBitRate(): void;
    get bitRateInput(): string | undefined;
    private _codec?;
    get codec(): string;
    set codec(value: string);
    resetCodec(): void;
    get codecInput(): string | undefined;
    private _displayAspectRatio?;
    get displayAspectRatio(): string;
    set displayAspectRatio(value: string);
    resetDisplayAspectRatio(): void;
    get displayAspectRatioInput(): string | undefined;
    private _fixedGop?;
    get fixedGop(): string;
    set fixedGop(value: string);
    resetFixedGop(): void;
    get fixedGopInput(): string | undefined;
    private _frameRate?;
    get frameRate(): string;
    set frameRate(value: string);
    resetFrameRate(): void;
    get frameRateInput(): string | undefined;
    private _keyframesMaxDist?;
    get keyframesMaxDist(): string;
    set keyframesMaxDist(value: string);
    resetKeyframesMaxDist(): void;
    get keyframesMaxDistInput(): string | undefined;
    private _maxFrameRate?;
    get maxFrameRate(): string;
    set maxFrameRate(value: string);
    resetMaxFrameRate(): void;
    get maxFrameRateInput(): string | undefined;
    private _maxHeight?;
    get maxHeight(): string;
    set maxHeight(value: string);
    resetMaxHeight(): void;
    get maxHeightInput(): string | undefined;
    private _maxWidth?;
    get maxWidth(): string;
    set maxWidth(value: string);
    resetMaxWidth(): void;
    get maxWidthInput(): string | undefined;
    private _paddingPolicy?;
    get paddingPolicy(): string;
    set paddingPolicy(value: string);
    resetPaddingPolicy(): void;
    get paddingPolicyInput(): string | undefined;
    private _resolution?;
    get resolution(): string;
    set resolution(value: string);
    resetResolution(): void;
    get resolutionInput(): string | undefined;
    private _sizingPolicy?;
    get sizingPolicy(): string;
    set sizingPolicy(value: string);
    resetSizingPolicy(): void;
    get sizingPolicyInput(): string | undefined;
}
export interface ElastictranscoderPresetVideoWatermarks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#horizontal_align ElastictranscoderPreset#horizontal_align}
    */
    readonly horizontalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#horizontal_offset ElastictranscoderPreset#horizontal_offset}
    */
    readonly horizontalOffset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#id ElastictranscoderPreset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#opacity ElastictranscoderPreset#opacity}
    */
    readonly opacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#target ElastictranscoderPreset#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#vertical_align ElastictranscoderPreset#vertical_align}
    */
    readonly verticalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#vertical_offset ElastictranscoderPreset#vertical_offset}
    */
    readonly verticalOffset?: string;
}
export declare function elastictranscoderPresetVideoWatermarksToTerraform(struct?: ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable): any;
export declare function elastictranscoderPresetVideoWatermarksToHclTerraform(struct?: ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable): any;
export declare class ElastictranscoderPresetVideoWatermarksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable | undefined;
    set internalValue(value: ElastictranscoderPresetVideoWatermarks | cdktf.IResolvable | undefined);
    private _horizontalAlign?;
    get horizontalAlign(): string;
    set horizontalAlign(value: string);
    resetHorizontalAlign(): void;
    get horizontalAlignInput(): string | undefined;
    private _horizontalOffset?;
    get horizontalOffset(): string;
    set horizontalOffset(value: string);
    resetHorizontalOffset(): void;
    get horizontalOffsetInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxHeight?;
    get maxHeight(): string;
    set maxHeight(value: string);
    resetMaxHeight(): void;
    get maxHeightInput(): string | undefined;
    private _maxWidth?;
    get maxWidth(): string;
    set maxWidth(value: string);
    resetMaxWidth(): void;
    get maxWidthInput(): string | undefined;
    private _opacity?;
    get opacity(): string;
    set opacity(value: string);
    resetOpacity(): void;
    get opacityInput(): string | undefined;
    private _sizingPolicy?;
    get sizingPolicy(): string;
    set sizingPolicy(value: string);
    resetSizingPolicy(): void;
    get sizingPolicyInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _verticalAlign?;
    get verticalAlign(): string;
    set verticalAlign(value: string);
    resetVerticalAlign(): void;
    get verticalAlignInput(): string | undefined;
    private _verticalOffset?;
    get verticalOffset(): string;
    set verticalOffset(value: string);
    resetVerticalOffset(): void;
    get verticalOffsetInput(): string | undefined;
}
export declare class ElastictranscoderPresetVideoWatermarksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElastictranscoderPresetVideoWatermarksOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset aws_elastictranscoder_preset}
*/
export declare class ElastictranscoderPreset extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elastictranscoder_preset";
    /**
    * Generates CDKTF code for importing a ElastictranscoderPreset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElastictranscoderPreset to import
    * @param importFromId The id of the existing ElastictranscoderPreset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElastictranscoderPreset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastictranscoder_preset aws_elastictranscoder_preset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPresetConfig
    */
    constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig);
    get arn(): string;
    private _container?;
    get container(): string;
    set container(value: string);
    get containerInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _videoCodecOptions?;
    get videoCodecOptions(): {
        [key: string]: string;
    };
    set videoCodecOptions(value: {
        [key: string]: string;
    });
    resetVideoCodecOptions(): void;
    get videoCodecOptionsInput(): {
        [key: string]: string;
    } | undefined;
    private _audio;
    get audio(): ElastictranscoderPresetAudioOutputReference;
    putAudio(value: ElastictranscoderPresetAudio): void;
    resetAudio(): void;
    get audioInput(): ElastictranscoderPresetAudio | undefined;
    private _audioCodecOptions;
    get audioCodecOptions(): ElastictranscoderPresetAudioCodecOptionsOutputReference;
    putAudioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions): void;
    resetAudioCodecOptions(): void;
    get audioCodecOptionsInput(): ElastictranscoderPresetAudioCodecOptions | undefined;
    private _thumbnails;
    get thumbnails(): ElastictranscoderPresetThumbnailsOutputReference;
    putThumbnails(value: ElastictranscoderPresetThumbnails): void;
    resetThumbnails(): void;
    get thumbnailsInput(): ElastictranscoderPresetThumbnails | undefined;
    private _video;
    get video(): ElastictranscoderPresetVideoOutputReference;
    putVideo(value: ElastictranscoderPresetVideo): void;
    resetVideo(): void;
    get videoInput(): ElastictranscoderPresetVideo | undefined;
    private _videoWatermarks;
    get videoWatermarks(): ElastictranscoderPresetVideoWatermarksList;
    putVideoWatermarks(value: ElastictranscoderPresetVideoWatermarks[] | cdktf.IResolvable): void;
    resetVideoWatermarks(): void;
    get videoWatermarksInput(): cdktf.IResolvable | ElastictranscoderPresetVideoWatermarks[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
