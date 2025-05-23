/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxBgpPeerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#address_family DxBgpPeer#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#amazon_address DxBgpPeer#amazon_address}
    */
    readonly amazonAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#bgp_asn DxBgpPeer#bgp_asn}
    */
    readonly bgpAsn: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#bgp_auth_key DxBgpPeer#bgp_auth_key}
    */
    readonly bgpAuthKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#customer_address DxBgpPeer#customer_address}
    */
    readonly customerAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#id DxBgpPeer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#virtual_interface_id DxBgpPeer#virtual_interface_id}
    */
    readonly virtualInterfaceId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#timeouts DxBgpPeer#timeouts}
    */
    readonly timeouts?: DxBgpPeerTimeouts;
}
export interface DxBgpPeerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#create DxBgpPeer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#delete DxBgpPeer#delete}
    */
    readonly delete?: string;
}
export declare function dxBgpPeerTimeoutsToTerraform(struct?: DxBgpPeerTimeouts | cdktf.IResolvable): any;
export declare function dxBgpPeerTimeoutsToHclTerraform(struct?: DxBgpPeerTimeouts | cdktf.IResolvable): any;
export declare class DxBgpPeerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DxBgpPeerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DxBgpPeerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer aws_dx_bgp_peer}
*/
export declare class DxBgpPeer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dx_bgp_peer";
    /**
    * Generates CDKTF code for importing a DxBgpPeer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxBgpPeer to import
    * @param importFromId The id of the existing DxBgpPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxBgpPeer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_bgp_peer aws_dx_bgp_peer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxBgpPeerConfig
    */
    constructor(scope: Construct, id: string, config: DxBgpPeerConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string | undefined;
    private _amazonAddress?;
    get amazonAddress(): string;
    set amazonAddress(value: string);
    resetAmazonAddress(): void;
    get amazonAddressInput(): string | undefined;
    get awsDevice(): string;
    private _bgpAsn?;
    get bgpAsn(): number;
    set bgpAsn(value: number);
    get bgpAsnInput(): number | undefined;
    private _bgpAuthKey?;
    get bgpAuthKey(): string;
    set bgpAuthKey(value: string);
    resetBgpAuthKey(): void;
    get bgpAuthKeyInput(): string | undefined;
    get bgpPeerId(): string;
    get bgpStatus(): string;
    private _customerAddress?;
    get customerAddress(): string;
    set customerAddress(value: string);
    resetCustomerAddress(): void;
    get customerAddressInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _virtualInterfaceId?;
    get virtualInterfaceId(): string;
    set virtualInterfaceId(value: string);
    get virtualInterfaceIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): DxBgpPeerTimeoutsOutputReference;
    putTimeouts(value: DxBgpPeerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DxBgpPeerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
