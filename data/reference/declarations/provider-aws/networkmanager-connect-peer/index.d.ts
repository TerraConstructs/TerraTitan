/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerConnectPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#connect_attachment_id NetworkmanagerConnectPeer#connect_attachment_id}
    */
    readonly connectAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#core_network_address NetworkmanagerConnectPeer#core_network_address}
    */
    readonly coreNetworkAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#id NetworkmanagerConnectPeer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#inside_cidr_blocks NetworkmanagerConnectPeer#inside_cidr_blocks}
    */
    readonly insideCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#peer_address NetworkmanagerConnectPeer#peer_address}
    */
    readonly peerAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#subnet_arn NetworkmanagerConnectPeer#subnet_arn}
    */
    readonly subnetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#tags NetworkmanagerConnectPeer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#tags_all NetworkmanagerConnectPeer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * bgp_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#bgp_options NetworkmanagerConnectPeer#bgp_options}
    */
    readonly bgpOptions?: NetworkmanagerConnectPeerBgpOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#timeouts NetworkmanagerConnectPeer#timeouts}
    */
    readonly timeouts?: NetworkmanagerConnectPeerTimeouts;
}
export interface NetworkmanagerConnectPeerConfigurationBgpConfigurations {
}
export declare function networkmanagerConnectPeerConfigurationBgpConfigurationsToTerraform(struct?: NetworkmanagerConnectPeerConfigurationBgpConfigurations): any;
export declare function networkmanagerConnectPeerConfigurationBgpConfigurationsToHclTerraform(struct?: NetworkmanagerConnectPeerConfigurationBgpConfigurations): any;
export declare class NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkmanagerConnectPeerConfigurationBgpConfigurations | undefined;
    set internalValue(value: NetworkmanagerConnectPeerConfigurationBgpConfigurations | undefined);
    get coreNetworkAddress(): string;
    get coreNetworkAsn(): number;
    get peerAddress(): string;
    get peerAsn(): number;
}
export declare class NetworkmanagerConnectPeerConfigurationBgpConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkmanagerConnectPeerConfigurationBgpConfigurationsOutputReference;
}
export interface NetworkmanagerConnectPeerConfiguration {
}
export declare function networkmanagerConnectPeerConfigurationToTerraform(struct?: NetworkmanagerConnectPeerConfiguration): any;
export declare function networkmanagerConnectPeerConfigurationToHclTerraform(struct?: NetworkmanagerConnectPeerConfiguration): any;
export declare class NetworkmanagerConnectPeerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkmanagerConnectPeerConfiguration | undefined;
    set internalValue(value: NetworkmanagerConnectPeerConfiguration | undefined);
    private _bgpConfigurations;
    get bgpConfigurations(): NetworkmanagerConnectPeerConfigurationBgpConfigurationsList;
    get coreNetworkAddress(): string;
    get insideCidrBlocks(): string[];
    get peerAddress(): string;
    get protocol(): string;
}
export declare class NetworkmanagerConnectPeerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkmanagerConnectPeerConfigurationOutputReference;
}
export interface NetworkmanagerConnectPeerBgpOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#peer_asn NetworkmanagerConnectPeer#peer_asn}
    */
    readonly peerAsn?: number;
}
export declare function networkmanagerConnectPeerBgpOptionsToTerraform(struct?: NetworkmanagerConnectPeerBgpOptionsOutputReference | NetworkmanagerConnectPeerBgpOptions): any;
export declare function networkmanagerConnectPeerBgpOptionsToHclTerraform(struct?: NetworkmanagerConnectPeerBgpOptionsOutputReference | NetworkmanagerConnectPeerBgpOptions): any;
export declare class NetworkmanagerConnectPeerBgpOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerConnectPeerBgpOptions | undefined;
    set internalValue(value: NetworkmanagerConnectPeerBgpOptions | undefined);
    private _peerAsn?;
    get peerAsn(): number;
    set peerAsn(value: number);
    resetPeerAsn(): void;
    get peerAsnInput(): number | undefined;
}
export interface NetworkmanagerConnectPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#create NetworkmanagerConnectPeer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#delete NetworkmanagerConnectPeer#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerConnectPeerTimeoutsToTerraform(struct?: NetworkmanagerConnectPeerTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerConnectPeerTimeoutsToHclTerraform(struct?: NetworkmanagerConnectPeerTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerConnectPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerConnectPeerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerConnectPeerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer aws_networkmanager_connect_peer}
*/
export declare class NetworkmanagerConnectPeer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_connect_peer";
    /**
    * Generates CDKTF code for importing a NetworkmanagerConnectPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerConnectPeer to import
    * @param importFromId The id of the existing NetworkmanagerConnectPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerConnectPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_peer aws_networkmanager_connect_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerConnectPeerConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerConnectPeerConfig);
    get arn(): string;
    private _configuration;
    get configuration(): NetworkmanagerConnectPeerConfigurationList;
    private _connectAttachmentId?;
    get connectAttachmentId(): string;
    set connectAttachmentId(value: string);
    get connectAttachmentIdInput(): string | undefined;
    get connectPeerId(): string;
    private _coreNetworkAddress?;
    get coreNetworkAddress(): string;
    set coreNetworkAddress(value: string);
    resetCoreNetworkAddress(): void;
    get coreNetworkAddressInput(): string | undefined;
    get coreNetworkId(): string;
    get createdAt(): string;
    get edgeLocation(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _insideCidrBlocks?;
    get insideCidrBlocks(): string[];
    set insideCidrBlocks(value: string[]);
    resetInsideCidrBlocks(): void;
    get insideCidrBlocksInput(): string[] | undefined;
    private _peerAddress?;
    get peerAddress(): string;
    set peerAddress(value: string);
    get peerAddressInput(): string | undefined;
    get state(): string;
    private _subnetArn?;
    get subnetArn(): string;
    set subnetArn(value: string);
    resetSubnetArn(): void;
    get subnetArnInput(): string | undefined;
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
    private _bgpOptions;
    get bgpOptions(): NetworkmanagerConnectPeerBgpOptionsOutputReference;
    putBgpOptions(value: NetworkmanagerConnectPeerBgpOptions): void;
    resetBgpOptions(): void;
    get bgpOptionsInput(): NetworkmanagerConnectPeerBgpOptions | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerConnectPeerTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerConnectPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerConnectPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
