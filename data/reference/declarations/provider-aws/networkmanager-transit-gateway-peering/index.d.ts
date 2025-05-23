/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerTransitGatewayPeeringConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#id NetworkmanagerTransitGatewayPeering#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#tags_all NetworkmanagerTransitGatewayPeering#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}
    */
    readonly transitGatewayArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#timeouts NetworkmanagerTransitGatewayPeering#timeouts}
    */
    readonly timeouts?: NetworkmanagerTransitGatewayPeeringTimeouts;
}
export interface NetworkmanagerTransitGatewayPeeringTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#create NetworkmanagerTransitGatewayPeering#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#delete NetworkmanagerTransitGatewayPeering#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerTransitGatewayPeeringTimeoutsToTerraform(struct?: NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerTransitGatewayPeeringTimeoutsToHclTerraform(struct?: NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerTransitGatewayPeeringTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering aws_networkmanager_transit_gateway_peering}
*/
export declare class NetworkmanagerTransitGatewayPeering extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_transit_gateway_peering";
    /**
    * Generates CDKTF code for importing a NetworkmanagerTransitGatewayPeering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerTransitGatewayPeering to import
    * @param importFromId The id of the existing NetworkmanagerTransitGatewayPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerTransitGatewayPeering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_peering aws_networkmanager_transit_gateway_peering} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerTransitGatewayPeeringConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayPeeringConfig);
    get arn(): string;
    get coreNetworkArn(): string;
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    get edgeLocation(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
    get peeringType(): string;
    get resourceArn(): string;
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
    private _transitGatewayArn?;
    get transitGatewayArn(): string;
    set transitGatewayArn(value: string);
    get transitGatewayArnInput(): string | undefined;
    get transitGatewayPeeringAttachmentId(): string;
    private _timeouts;
    get timeouts(): NetworkmanagerTransitGatewayPeeringTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerTransitGatewayPeeringTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerTransitGatewayPeeringTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
