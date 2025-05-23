/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TrafficMirrorTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#description Ec2TrafficMirrorTarget#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#gateway_load_balancer_endpoint_id Ec2TrafficMirrorTarget#gateway_load_balancer_endpoint_id}
    */
    readonly gatewayLoadBalancerEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#id Ec2TrafficMirrorTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}
    */
    readonly networkLoadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#tags Ec2TrafficMirrorTarget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#tags_all Ec2TrafficMirrorTarget#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target aws_ec2_traffic_mirror_target}
*/
export declare class Ec2TrafficMirrorTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_traffic_mirror_target";
    /**
    * Generates CDKTF code for importing a Ec2TrafficMirrorTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TrafficMirrorTarget to import
    * @param importFromId The id of the existing Ec2TrafficMirrorTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TrafficMirrorTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_traffic_mirror_target aws_ec2_traffic_mirror_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorTargetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TrafficMirrorTargetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _gatewayLoadBalancerEndpointId?;
    get gatewayLoadBalancerEndpointId(): string;
    set gatewayLoadBalancerEndpointId(value: string);
    resetGatewayLoadBalancerEndpointId(): void;
    get gatewayLoadBalancerEndpointIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    private _networkLoadBalancerArn?;
    get networkLoadBalancerArn(): string;
    set networkLoadBalancerArn(value: string);
    resetNetworkLoadBalancerArn(): void;
    get networkLoadBalancerArnInput(): string | undefined;
    get ownerId(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
