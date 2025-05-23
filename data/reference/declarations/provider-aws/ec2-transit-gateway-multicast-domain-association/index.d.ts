/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#id Ec2TransitGatewayMulticastDomainAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#subnet_id Ec2TransitGatewayMulticastDomainAssociation#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_attachment_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastDomainAssociation#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#timeouts Ec2TransitGatewayMulticastDomainAssociation#timeouts}
    */
    readonly timeouts?: Ec2TransitGatewayMulticastDomainAssociationTimeouts;
}
export interface Ec2TransitGatewayMulticastDomainAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#create Ec2TransitGatewayMulticastDomainAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#delete Ec2TransitGatewayMulticastDomainAssociation#delete}
    */
    readonly delete?: string;
}
export declare function ec2TransitGatewayMulticastDomainAssociationTimeoutsToTerraform(struct?: Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable): any;
export declare function ec2TransitGatewayMulticastDomainAssociationTimeoutsToHclTerraform(struct?: Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable): any;
export declare class Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2TransitGatewayMulticastDomainAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association aws_ec2_transit_gateway_multicast_domain_association}
*/
export declare class Ec2TransitGatewayMulticastDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_domain_association";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayMulticastDomainAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMulticastDomainAssociation to import
    * @param importFromId The id of the existing Ec2TransitGatewayMulticastDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayMulticastDomainAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain_association aws_ec2_transit_gateway_multicast_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _transitGatewayMulticastDomainId?;
    get transitGatewayMulticastDomainId(): string;
    set transitGatewayMulticastDomainId(value: string);
    get transitGatewayMulticastDomainIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2TransitGatewayMulticastDomainAssociationTimeoutsOutputReference;
    putTimeouts(value: Ec2TransitGatewayMulticastDomainAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2TransitGatewayMulticastDomainAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
