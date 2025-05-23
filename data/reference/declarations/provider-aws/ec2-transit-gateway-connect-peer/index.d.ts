/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayConnectPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#bgp_asn Ec2TransitGatewayConnectPeer#bgp_asn}
    */
    readonly bgpAsn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#id Ec2TransitGatewayConnectPeer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#inside_cidr_blocks Ec2TransitGatewayConnectPeer#inside_cidr_blocks}
    */
    readonly insideCidrBlocks: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#peer_address Ec2TransitGatewayConnectPeer#peer_address}
    */
    readonly peerAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#tags Ec2TransitGatewayConnectPeer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#tags_all Ec2TransitGatewayConnectPeer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_address Ec2TransitGatewayConnectPeer#transit_gateway_address}
    */
    readonly transitGatewayAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#transit_gateway_attachment_id Ec2TransitGatewayConnectPeer#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#timeouts Ec2TransitGatewayConnectPeer#timeouts}
    */
    readonly timeouts?: Ec2TransitGatewayConnectPeerTimeouts;
}
export interface Ec2TransitGatewayConnectPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#create Ec2TransitGatewayConnectPeer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#delete Ec2TransitGatewayConnectPeer#delete}
    */
    readonly delete?: string;
}
export declare function ec2TransitGatewayConnectPeerTimeoutsToTerraform(struct?: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any;
export declare function ec2TransitGatewayConnectPeerTimeoutsToHclTerraform(struct?: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable): any;
export declare class Ec2TransitGatewayConnectPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2TransitGatewayConnectPeerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer}
*/
export declare class Ec2TransitGatewayConnectPeer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_connect_peer";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayConnectPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayConnectPeer to import
    * @param importFromId The id of the existing Ec2TransitGatewayConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayConnectPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_connect_peer aws_ec2_transit_gateway_connect_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConnectPeerConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayConnectPeerConfig);
    get arn(): string;
    private _bgpAsn?;
    get bgpAsn(): string;
    set bgpAsn(value: string);
    resetBgpAsn(): void;
    get bgpAsnInput(): string | undefined;
    get bgpPeerAddress(): string;
    get bgpTransitGatewayAddresses(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _insideCidrBlocks?;
    get insideCidrBlocks(): string[];
    set insideCidrBlocks(value: string[]);
    get insideCidrBlocksInput(): string[] | undefined;
    private _peerAddress?;
    get peerAddress(): string;
    set peerAddress(value: string);
    get peerAddressInput(): string | undefined;
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
    private _transitGatewayAddress?;
    get transitGatewayAddress(): string;
    set transitGatewayAddress(value: string);
    resetTransitGatewayAddress(): void;
    get transitGatewayAddressInput(): string | undefined;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2TransitGatewayConnectPeerTimeoutsOutputReference;
    putTimeouts(value: Ec2TransitGatewayConnectPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2TransitGatewayConnectPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
