/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EipAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#allocation_id EipAssociation#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#allow_reassociation EipAssociation#allow_reassociation}
    */
    readonly allowReassociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#id EipAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#instance_id EipAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#network_interface_id EipAssociation#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#private_ip_address EipAssociation#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#public_ip EipAssociation#public_ip}
    */
    readonly publicIp?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association aws_eip_association}
*/
export declare class EipAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eip_association";
    /**
    * Generates CDKTF code for importing a EipAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EipAssociation to import
    * @param importFromId The id of the existing EipAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EipAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip_association aws_eip_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipAssociationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EipAssociationConfig);
    private _allocationId?;
    get allocationId(): string;
    set allocationId(value: string);
    resetAllocationId(): void;
    get allocationIdInput(): string | undefined;
    private _allowReassociation?;
    get allowReassociation(): boolean | cdktf.IResolvable;
    set allowReassociation(value: boolean | cdktf.IResolvable);
    resetAllowReassociation(): void;
    get allowReassociationInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    private _privateIpAddress?;
    get privateIpAddress(): string;
    set privateIpAddress(value: string);
    resetPrivateIpAddress(): void;
    get privateIpAddressInput(): string | undefined;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
