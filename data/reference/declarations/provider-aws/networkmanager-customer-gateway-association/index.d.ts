/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerCustomerGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#customer_gateway_arn NetworkmanagerCustomerGatewayAssociation#customer_gateway_arn}
    */
    readonly customerGatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#device_id NetworkmanagerCustomerGatewayAssociation#device_id}
    */
    readonly deviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#global_network_id NetworkmanagerCustomerGatewayAssociation#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#id NetworkmanagerCustomerGatewayAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#link_id NetworkmanagerCustomerGatewayAssociation#link_id}
    */
    readonly linkId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#timeouts NetworkmanagerCustomerGatewayAssociation#timeouts}
    */
    readonly timeouts?: NetworkmanagerCustomerGatewayAssociationTimeouts;
}
export interface NetworkmanagerCustomerGatewayAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#create NetworkmanagerCustomerGatewayAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#delete NetworkmanagerCustomerGatewayAssociation#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerCustomerGatewayAssociationTimeoutsToTerraform(struct?: NetworkmanagerCustomerGatewayAssociationTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerCustomerGatewayAssociationTimeoutsToHclTerraform(struct?: NetworkmanagerCustomerGatewayAssociationTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerCustomerGatewayAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerCustomerGatewayAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association}
*/
export declare class NetworkmanagerCustomerGatewayAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_customer_gateway_association";
    /**
    * Generates CDKTF code for importing a NetworkmanagerCustomerGatewayAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerCustomerGatewayAssociation to import
    * @param importFromId The id of the existing NetworkmanagerCustomerGatewayAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerCustomerGatewayAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_customer_gateway_association aws_networkmanager_customer_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerCustomerGatewayAssociationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerCustomerGatewayAssociationConfig);
    private _customerGatewayArn?;
    get customerGatewayArn(): string;
    set customerGatewayArn(value: string);
    get customerGatewayArnInput(): string | undefined;
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
    resetLinkId(): void;
    get linkIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerCustomerGatewayAssociationTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerCustomerGatewayAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerCustomerGatewayAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
