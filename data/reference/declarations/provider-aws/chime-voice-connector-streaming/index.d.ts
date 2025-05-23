/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}
    */
    readonly dataRetention: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
    */
    readonly streamingNotificationTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
    */
    readonly voiceConnectorId: string;
    /**
    * media_insights_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}
    */
    readonly mediaInsightsConfiguration?: ChimeVoiceConnectorStreamingMediaInsightsConfiguration;
}
export interface ChimeVoiceConnectorStreamingMediaInsightsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}
    */
    readonly configurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
}
export declare function chimeVoiceConnectorStreamingMediaInsightsConfigurationToTerraform(struct?: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference | ChimeVoiceConnectorStreamingMediaInsightsConfiguration): any;
export declare function chimeVoiceConnectorStreamingMediaInsightsConfigurationToHclTerraform(struct?: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference | ChimeVoiceConnectorStreamingMediaInsightsConfiguration): any;
export declare class ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimeVoiceConnectorStreamingMediaInsightsConfiguration | undefined;
    set internalValue(value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration | undefined);
    private _configurationArn?;
    get configurationArn(): string;
    set configurationArn(value: string);
    resetConfigurationArn(): void;
    get configurationArnInput(): string | undefined;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}
*/
export declare class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chime_voice_connector_streaming";
    /**
    * Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import
    * @param importFromId The id of the existing ChimeVoiceConnectorStreaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimeVoiceConnectorStreamingConfig
    */
    constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig);
    private _dataRetention?;
    get dataRetention(): number;
    set dataRetention(value: number);
    get dataRetentionInput(): number | undefined;
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
    private _streamingNotificationTargets?;
    get streamingNotificationTargets(): string[];
    set streamingNotificationTargets(value: string[]);
    resetStreamingNotificationTargets(): void;
    get streamingNotificationTargetsInput(): string[] | undefined;
    private _voiceConnectorId?;
    get voiceConnectorId(): string;
    set voiceConnectorId(value: string);
    get voiceConnectorIdInput(): string | undefined;
    private _mediaInsightsConfiguration;
    get mediaInsightsConfiguration(): ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference;
    putMediaInsightsConfiguration(value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration): void;
    resetMediaInsightsConfiguration(): void;
    get mediaInsightsConfigurationInput(): ChimeVoiceConnectorStreamingMediaInsightsConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
