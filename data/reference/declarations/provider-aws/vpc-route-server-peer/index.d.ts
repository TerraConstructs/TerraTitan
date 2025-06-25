/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcRouteServerPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_address VpcRouteServerPeer#peer_address}
    */
    readonly peerAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#route_server_endpoint_id VpcRouteServerPeer#route_server_endpoint_id}
    */
    readonly routeServerEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#tags VpcRouteServerPeer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * bgp_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#bgp_options VpcRouteServerPeer#bgp_options}
    */
    readonly bgpOptions?: VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#timeouts VpcRouteServerPeer#timeouts}
    */
    readonly timeouts?: VpcRouteServerPeerTimeouts;
}
export interface VpcRouteServerPeerBgpOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_asn VpcRouteServerPeer#peer_asn}
    */
    readonly peerAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#peer_liveness_detection VpcRouteServerPeer#peer_liveness_detection}
    */
    readonly peerLivenessDetection?: string;
}
export declare function vpcRouteServerPeerBgpOptionsToTerraform(struct?: VpcRouteServerPeerBgpOptions | cdktf.IResolvable): any;
export declare function vpcRouteServerPeerBgpOptionsToHclTerraform(struct?: VpcRouteServerPeerBgpOptions | cdktf.IResolvable): any;
export declare class VpcRouteServerPeerBgpOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcRouteServerPeerBgpOptions | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerPeerBgpOptions | cdktf.IResolvable | undefined);
    private _peerAsn?;
    get peerAsn(): number;
    set peerAsn(value: number);
    get peerAsnInput(): number | undefined;
    private _peerLivenessDetection?;
    get peerLivenessDetection(): string;
    set peerLivenessDetection(value: string);
    resetPeerLivenessDetection(): void;
    get peerLivenessDetectionInput(): string | undefined;
}
export declare class VpcRouteServerPeerBgpOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpcRouteServerPeerBgpOptionsOutputReference;
}
export interface VpcRouteServerPeerTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#create VpcRouteServerPeer#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#delete VpcRouteServerPeer#delete}
    */
    readonly delete?: string;
}
export declare function vpcRouteServerPeerTimeoutsToTerraform(struct?: VpcRouteServerPeerTimeouts | cdktf.IResolvable): any;
export declare function vpcRouteServerPeerTimeoutsToHclTerraform(struct?: VpcRouteServerPeerTimeouts | cdktf.IResolvable): any;
export declare class VpcRouteServerPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcRouteServerPeerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerPeerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer}
*/
export declare class VpcRouteServerPeer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_route_server_peer";
    /**
    * Generates CDKTF code for importing a VpcRouteServerPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcRouteServerPeer to import
    * @param importFromId The id of the existing VpcRouteServerPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcRouteServerPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_peer aws_vpc_route_server_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcRouteServerPeerConfig
    */
    constructor(scope: Construct, id: string, config: VpcRouteServerPeerConfig);
    get arn(): string;
    get endpointEniAddress(): string;
    get endpointEniId(): string;
    private _peerAddress?;
    get peerAddress(): string;
    set peerAddress(value: string);
    get peerAddressInput(): string | undefined;
    private _routeServerEndpointId?;
    get routeServerEndpointId(): string;
    set routeServerEndpointId(value: string);
    get routeServerEndpointIdInput(): string | undefined;
    get routeServerId(): string;
    get routeServerPeerId(): string;
    get subnetId(): string;
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
    private _bgpOptions;
    get bgpOptions(): VpcRouteServerPeerBgpOptionsList;
    putBgpOptions(value: VpcRouteServerPeerBgpOptions[] | cdktf.IResolvable): void;
    resetBgpOptions(): void;
    get bgpOptionsInput(): cdktf.IResolvable | VpcRouteServerPeerBgpOptions[] | undefined;
    private _timeouts;
    get timeouts(): VpcRouteServerPeerTimeoutsOutputReference;
    putTimeouts(value: VpcRouteServerPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcRouteServerPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
