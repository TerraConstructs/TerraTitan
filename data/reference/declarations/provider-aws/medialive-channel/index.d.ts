/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { MedialiveChannelCdiInputSpecification, MedialiveChannelCdiInputSpecificationOutputReference, MedialiveChannelDestinations, MedialiveChannelDestinationsList, MedialiveChannelEncoderSettings, MedialiveChannelEncoderSettingsOutputReference, MedialiveChannelInputAttachments, MedialiveChannelInputAttachmentsList, MedialiveChannelInputSpecification, MedialiveChannelInputSpecificationOutputReference, MedialiveChannelMaintenance, MedialiveChannelMaintenanceOutputReference, MedialiveChannelTimeouts, MedialiveChannelTimeoutsOutputReference, MedialiveChannelVpc, MedialiveChannelVpcOutputReference } from './index-structs';
export * from './index-structs';
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#channel_class MedialiveChannel#channel_class}
    */
    readonly channelClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#id MedialiveChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#log_level MedialiveChannel#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#name MedialiveChannel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#role_arn MedialiveChannel#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#start_channel MedialiveChannel#start_channel}
    */
    readonly startChannel?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tags MedialiveChannel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#tags_all MedialiveChannel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cdi_input_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#cdi_input_specification MedialiveChannel#cdi_input_specification}
    */
    readonly cdiInputSpecification?: MedialiveChannelCdiInputSpecification;
    /**
    * destinations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#destinations MedialiveChannel#destinations}
    */
    readonly destinations: MedialiveChannelDestinations[] | cdktf.IResolvable;
    /**
    * encoder_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#encoder_settings MedialiveChannel#encoder_settings}
    */
    readonly encoderSettings: MedialiveChannelEncoderSettings;
    /**
    * input_attachments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_attachments MedialiveChannel#input_attachments}
    */
    readonly inputAttachments: MedialiveChannelInputAttachments[] | cdktf.IResolvable;
    /**
    * input_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#input_specification MedialiveChannel#input_specification}
    */
    readonly inputSpecification: MedialiveChannelInputSpecification;
    /**
    * maintenance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#maintenance MedialiveChannel#maintenance}
    */
    readonly maintenance?: MedialiveChannelMaintenance;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#timeouts MedialiveChannel#timeouts}
    */
    readonly timeouts?: MedialiveChannelTimeouts;
    /**
    * vpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#vpc MedialiveChannel#vpc}
    */
    readonly vpc?: MedialiveChannelVpc;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel aws_medialive_channel}
*/
export declare class MedialiveChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_medialive_channel";
    /**
    * Generates CDKTF code for importing a MedialiveChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MedialiveChannel to import
    * @param importFromId The id of the existing MedialiveChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MedialiveChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_channel aws_medialive_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MedialiveChannelConfig
    */
    constructor(scope: Construct, id: string, config: MedialiveChannelConfig);
    get arn(): string;
    private _channelClass?;
    get channelClass(): string;
    set channelClass(value: string);
    get channelClassInput(): string | undefined;
    get channelId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _startChannel?;
    get startChannel(): boolean | cdktf.IResolvable;
    set startChannel(value: boolean | cdktf.IResolvable);
    resetStartChannel(): void;
    get startChannelInput(): boolean | cdktf.IResolvable | undefined;
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
    private _cdiInputSpecification;
    get cdiInputSpecification(): MedialiveChannelCdiInputSpecificationOutputReference;
    putCdiInputSpecification(value: MedialiveChannelCdiInputSpecification): void;
    resetCdiInputSpecification(): void;
    get cdiInputSpecificationInput(): MedialiveChannelCdiInputSpecification | undefined;
    private _destinations;
    get destinations(): MedialiveChannelDestinationsList;
    putDestinations(value: MedialiveChannelDestinations[] | cdktf.IResolvable): void;
    get destinationsInput(): cdktf.IResolvable | MedialiveChannelDestinations[] | undefined;
    private _encoderSettings;
    get encoderSettings(): MedialiveChannelEncoderSettingsOutputReference;
    putEncoderSettings(value: MedialiveChannelEncoderSettings): void;
    get encoderSettingsInput(): MedialiveChannelEncoderSettings | undefined;
    private _inputAttachments;
    get inputAttachments(): MedialiveChannelInputAttachmentsList;
    putInputAttachments(value: MedialiveChannelInputAttachments[] | cdktf.IResolvable): void;
    get inputAttachmentsInput(): cdktf.IResolvable | MedialiveChannelInputAttachments[] | undefined;
    private _inputSpecification;
    get inputSpecification(): MedialiveChannelInputSpecificationOutputReference;
    putInputSpecification(value: MedialiveChannelInputSpecification): void;
    get inputSpecificationInput(): MedialiveChannelInputSpecification | undefined;
    private _maintenance;
    get maintenance(): MedialiveChannelMaintenanceOutputReference;
    putMaintenance(value: MedialiveChannelMaintenance): void;
    resetMaintenance(): void;
    get maintenanceInput(): MedialiveChannelMaintenance | undefined;
    private _timeouts;
    get timeouts(): MedialiveChannelTimeoutsOutputReference;
    putTimeouts(value: MedialiveChannelTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MedialiveChannelTimeouts | undefined;
    private _vpc;
    get vpc(): MedialiveChannelVpcOutputReference;
    putVpc(value: MedialiveChannelVpc): void;
    resetVpc(): void;
    get vpcInput(): MedialiveChannelVpc | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
