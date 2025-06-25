/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmonitorProbeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#destination NetworkmonitorProbe#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#destination_port NetworkmonitorProbe#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#monitor_name NetworkmonitorProbe#monitor_name}
    */
    readonly monitorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#packet_size NetworkmonitorProbe#packet_size}
    */
    readonly packetSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#protocol NetworkmonitorProbe#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#source_arn NetworkmonitorProbe#source_arn}
    */
    readonly sourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#tags NetworkmonitorProbe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe aws_networkmonitor_probe}
*/
export declare class NetworkmonitorProbe extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmonitor_probe";
    /**
    * Generates CDKTF code for importing a NetworkmonitorProbe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmonitorProbe to import
    * @param importFromId The id of the existing NetworkmonitorProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmonitorProbe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmonitor_probe aws_networkmonitor_probe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmonitorProbeConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmonitorProbeConfig);
    get addressFamily(): string;
    get arn(): string;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _destinationPort?;
    get destinationPort(): number;
    set destinationPort(value: number);
    resetDestinationPort(): void;
    get destinationPortInput(): number | undefined;
    get id(): string;
    private _monitorName?;
    get monitorName(): string;
    set monitorName(value: string);
    get monitorNameInput(): string | undefined;
    private _packetSize?;
    get packetSize(): number;
    set packetSize(value: number);
    resetPacketSize(): void;
    get packetSizeInput(): number | undefined;
    get probeId(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    get sourceArnInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
