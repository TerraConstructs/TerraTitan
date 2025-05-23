/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerTransitGatewayRegistrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#global_network_id NetworkmanagerTransitGatewayRegistration#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#id NetworkmanagerTransitGatewayRegistration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#transit_gateway_arn NetworkmanagerTransitGatewayRegistration#transit_gateway_arn}
    */
    readonly transitGatewayArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#timeouts NetworkmanagerTransitGatewayRegistration#timeouts}
    */
    readonly timeouts?: NetworkmanagerTransitGatewayRegistrationTimeouts;
}
export interface NetworkmanagerTransitGatewayRegistrationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#create NetworkmanagerTransitGatewayRegistration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#delete NetworkmanagerTransitGatewayRegistration#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerTransitGatewayRegistrationTimeoutsToTerraform(struct?: NetworkmanagerTransitGatewayRegistrationTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerTransitGatewayRegistrationTimeoutsToHclTerraform(struct?: NetworkmanagerTransitGatewayRegistrationTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerTransitGatewayRegistrationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerTransitGatewayRegistrationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration aws_networkmanager_transit_gateway_registration}
*/
export declare class NetworkmanagerTransitGatewayRegistration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_transit_gateway_registration";
    /**
    * Generates CDKTF code for importing a NetworkmanagerTransitGatewayRegistration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerTransitGatewayRegistration to import
    * @param importFromId The id of the existing NetworkmanagerTransitGatewayRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerTransitGatewayRegistration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_registration aws_networkmanager_transit_gateway_registration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerTransitGatewayRegistrationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayRegistrationConfig);
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _transitGatewayArn?;
    get transitGatewayArn(): string;
    set transitGatewayArn(value: string);
    get transitGatewayArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerTransitGatewayRegistrationTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerTransitGatewayRegistrationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerTransitGatewayRegistrationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
