/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerLinkAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#device_id NetworkmanagerLinkAssociation#device_id}
    */
    readonly deviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#global_network_id NetworkmanagerLinkAssociation#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#id NetworkmanagerLinkAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#link_id NetworkmanagerLinkAssociation#link_id}
    */
    readonly linkId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#timeouts NetworkmanagerLinkAssociation#timeouts}
    */
    readonly timeouts?: NetworkmanagerLinkAssociationTimeouts;
}
export interface NetworkmanagerLinkAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#create NetworkmanagerLinkAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#delete NetworkmanagerLinkAssociation#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerLinkAssociationTimeoutsToTerraform(struct?: NetworkmanagerLinkAssociationTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerLinkAssociationTimeoutsToHclTerraform(struct?: NetworkmanagerLinkAssociationTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerLinkAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerLinkAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerLinkAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association aws_networkmanager_link_association}
*/
export declare class NetworkmanagerLinkAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_link_association";
    /**
    * Generates CDKTF code for importing a NetworkmanagerLinkAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerLinkAssociation to import
    * @param importFromId The id of the existing NetworkmanagerLinkAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerLinkAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link_association aws_networkmanager_link_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerLinkAssociationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerLinkAssociationConfig);
    private _deviceId?;
    get deviceId(): string;
    set deviceId(value: string);
    get deviceIdInput(): string | undefined;
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _linkId?;
    get linkId(): string;
    set linkId(value: string);
    get linkIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerLinkAssociationTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerLinkAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerLinkAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
