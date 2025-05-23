/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevicefarmNetworkProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#description DevicefarmNetworkProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}
    */
    readonly downlinkBandwidthBits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}
    */
    readonly downlinkDelayMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}
    */
    readonly downlinkJitterMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}
    */
    readonly downlinkLossPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#id DevicefarmNetworkProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#name DevicefarmNetworkProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}
    */
    readonly projectArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#type DevicefarmNetworkProfile#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}
    */
    readonly uplinkBandwidthBits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}
    */
    readonly uplinkDelayMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}
    */
    readonly uplinkJitterMs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}
    */
    readonly uplinkLossPercent?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile aws_devicefarm_network_profile}
*/
export declare class DevicefarmNetworkProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devicefarm_network_profile";
    /**
    * Generates CDKTF code for importing a DevicefarmNetworkProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevicefarmNetworkProfile to import
    * @param importFromId The id of the existing DevicefarmNetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevicefarmNetworkProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devicefarm_network_profile aws_devicefarm_network_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevicefarmNetworkProfileConfig
    */
    constructor(scope: Construct, id: string, config: DevicefarmNetworkProfileConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _downlinkBandwidthBits?;
    get downlinkBandwidthBits(): number;
    set downlinkBandwidthBits(value: number);
    resetDownlinkBandwidthBits(): void;
    get downlinkBandwidthBitsInput(): number | undefined;
    private _downlinkDelayMs?;
    get downlinkDelayMs(): number;
    set downlinkDelayMs(value: number);
    resetDownlinkDelayMs(): void;
    get downlinkDelayMsInput(): number | undefined;
    private _downlinkJitterMs?;
    get downlinkJitterMs(): number;
    set downlinkJitterMs(value: number);
    resetDownlinkJitterMs(): void;
    get downlinkJitterMsInput(): number | undefined;
    private _downlinkLossPercent?;
    get downlinkLossPercent(): number;
    set downlinkLossPercent(value: number);
    resetDownlinkLossPercent(): void;
    get downlinkLossPercentInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _projectArn?;
    get projectArn(): string;
    set projectArn(value: string);
    get projectArnInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _uplinkBandwidthBits?;
    get uplinkBandwidthBits(): number;
    set uplinkBandwidthBits(value: number);
    resetUplinkBandwidthBits(): void;
    get uplinkBandwidthBitsInput(): number | undefined;
    private _uplinkDelayMs?;
    get uplinkDelayMs(): number;
    set uplinkDelayMs(value: number);
    resetUplinkDelayMs(): void;
    get uplinkDelayMsInput(): number | undefined;
    private _uplinkJitterMs?;
    get uplinkJitterMs(): number;
    set uplinkJitterMs(value: number);
    resetUplinkJitterMs(): void;
    get uplinkJitterMsInput(): number | undefined;
    private _uplinkLossPercent?;
    get uplinkLossPercent(): number;
    set uplinkLossPercent(value: number);
    resetUplinkLossPercent(): void;
    get uplinkLossPercentInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
