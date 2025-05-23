/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#device_name VolumeAttachment#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#force_detach VolumeAttachment#force_detach}
    */
    readonly forceDetach?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#id VolumeAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#instance_id VolumeAttachment#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#skip_destroy VolumeAttachment#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#stop_instance_before_detaching VolumeAttachment#stop_instance_before_detaching}
    */
    readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#volume_id VolumeAttachment#volume_id}
    */
    readonly volumeId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#timeouts VolumeAttachment#timeouts}
    */
    readonly timeouts?: VolumeAttachmentTimeouts;
}
export interface VolumeAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#create VolumeAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#delete VolumeAttachment#delete}
    */
    readonly delete?: string;
}
export declare function volumeAttachmentTimeoutsToTerraform(struct?: VolumeAttachmentTimeouts | cdktf.IResolvable): any;
export declare function volumeAttachmentTimeoutsToHclTerraform(struct?: VolumeAttachmentTimeouts | cdktf.IResolvable): any;
export declare class VolumeAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VolumeAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VolumeAttachmentTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment aws_volume_attachment}
*/
export declare class VolumeAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_volume_attachment";
    /**
    * Generates CDKTF code for importing a VolumeAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VolumeAttachment to import
    * @param importFromId The id of the existing VolumeAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VolumeAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/volume_attachment aws_volume_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: VolumeAttachmentConfig);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _forceDetach?;
    get forceDetach(): boolean | cdktf.IResolvable;
    set forceDetach(value: boolean | cdktf.IResolvable);
    resetForceDetach(): void;
    get forceDetachInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _stopInstanceBeforeDetaching?;
    get stopInstanceBeforeDetaching(): boolean | cdktf.IResolvable;
    set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable);
    resetStopInstanceBeforeDetaching(): void;
    get stopInstanceBeforeDetachingInput(): boolean | cdktf.IResolvable | undefined;
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VolumeAttachmentTimeoutsOutputReference;
    putTimeouts(value: VolumeAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VolumeAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
