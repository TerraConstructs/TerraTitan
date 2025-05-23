/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#amazon_side_asn Ec2TransitGateway#amazon_side_asn}
    */
    readonly amazonSideAsn?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#auto_accept_shared_attachments Ec2TransitGateway#auto_accept_shared_attachments}
    */
    readonly autoAcceptSharedAttachments?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#default_route_table_association Ec2TransitGateway#default_route_table_association}
    */
    readonly defaultRouteTableAssociation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#default_route_table_propagation Ec2TransitGateway#default_route_table_propagation}
    */
    readonly defaultRouteTablePropagation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#description Ec2TransitGateway#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#dns_support Ec2TransitGateway#dns_support}
    */
    readonly dnsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#id Ec2TransitGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#multicast_support Ec2TransitGateway#multicast_support}
    */
    readonly multicastSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#security_group_referencing_support Ec2TransitGateway#security_group_referencing_support}
    */
    readonly securityGroupReferencingSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#tags Ec2TransitGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#tags_all Ec2TransitGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#transit_gateway_cidr_blocks Ec2TransitGateway#transit_gateway_cidr_blocks}
    */
    readonly transitGatewayCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#vpn_ecmp_support Ec2TransitGateway#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#timeouts Ec2TransitGateway#timeouts}
    */
    readonly timeouts?: Ec2TransitGatewayTimeouts;
}
export interface Ec2TransitGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#create Ec2TransitGateway#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#delete Ec2TransitGateway#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#update Ec2TransitGateway#update}
    */
    readonly update?: string;
}
export declare function ec2TransitGatewayTimeoutsToTerraform(struct?: Ec2TransitGatewayTimeouts | cdktf.IResolvable): any;
export declare function ec2TransitGatewayTimeoutsToHclTerraform(struct?: Ec2TransitGatewayTimeouts | cdktf.IResolvable): any;
export declare class Ec2TransitGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TransitGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2TransitGatewayTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway aws_ec2_transit_gateway}
*/
export declare class Ec2TransitGateway extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway";
    /**
    * Generates CDKTF code for importing a Ec2TransitGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGateway to import
    * @param importFromId The id of the existing Ec2TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway aws_ec2_transit_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TransitGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): number;
    set amazonSideAsn(value: number);
    resetAmazonSideAsn(): void;
    get amazonSideAsnInput(): number | undefined;
    get arn(): string;
    get associationDefaultRouteTableId(): string;
    private _autoAcceptSharedAttachments?;
    get autoAcceptSharedAttachments(): string;
    set autoAcceptSharedAttachments(value: string);
    resetAutoAcceptSharedAttachments(): void;
    get autoAcceptSharedAttachmentsInput(): string | undefined;
    private _defaultRouteTableAssociation?;
    get defaultRouteTableAssociation(): string;
    set defaultRouteTableAssociation(value: string);
    resetDefaultRouteTableAssociation(): void;
    get defaultRouteTableAssociationInput(): string | undefined;
    private _defaultRouteTablePropagation?;
    get defaultRouteTablePropagation(): string;
    set defaultRouteTablePropagation(value: string);
    resetDefaultRouteTablePropagation(): void;
    get defaultRouteTablePropagationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _dnsSupport?;
    get dnsSupport(): string;
    set dnsSupport(value: string);
    resetDnsSupport(): void;
    get dnsSupportInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _multicastSupport?;
    get multicastSupport(): string;
    set multicastSupport(value: string);
    resetMulticastSupport(): void;
    get multicastSupportInput(): string | undefined;
    get ownerId(): string;
    get propagationDefaultRouteTableId(): string;
    private _securityGroupReferencingSupport?;
    get securityGroupReferencingSupport(): string;
    set securityGroupReferencingSupport(value: string);
    resetSecurityGroupReferencingSupport(): void;
    get securityGroupReferencingSupportInput(): string | undefined;
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
    private _transitGatewayCidrBlocks?;
    get transitGatewayCidrBlocks(): string[];
    set transitGatewayCidrBlocks(value: string[]);
    resetTransitGatewayCidrBlocks(): void;
    get transitGatewayCidrBlocksInput(): string[] | undefined;
    private _vpnEcmpSupport?;
    get vpnEcmpSupport(): string;
    set vpnEcmpSupport(value: string);
    resetVpnEcmpSupport(): void;
    get vpnEcmpSupportInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2TransitGatewayTimeoutsOutputReference;
    putTimeouts(value: Ec2TransitGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2TransitGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
