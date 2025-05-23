/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#allowed_prefixes DxGatewayAssociation#allowed_prefixes}
    */
    readonly allowedPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#associated_gateway_id DxGatewayAssociation#associated_gateway_id}
    */
    readonly associatedGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}
    */
    readonly associatedGatewayOwnerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#dx_gateway_id DxGatewayAssociation#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#id DxGatewayAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#proposal_id DxGatewayAssociation#proposal_id}
    */
    readonly proposalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#timeouts DxGatewayAssociation#timeouts}
    */
    readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#create DxGatewayAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#delete DxGatewayAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#update DxGatewayAssociation#update}
    */
    readonly update?: string;
}
export declare function dxGatewayAssociationTimeoutsToTerraform(struct?: DxGatewayAssociationTimeouts | cdktf.IResolvable): any;
export declare function dxGatewayAssociationTimeoutsToHclTerraform(struct?: DxGatewayAssociationTimeouts | cdktf.IResolvable): any;
export declare class DxGatewayAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DxGatewayAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DxGatewayAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association aws_dx_gateway_association}
*/
export declare class DxGatewayAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dx_gateway_association";
    /**
    * Generates CDKTF code for importing a DxGatewayAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxGatewayAssociation to import
    * @param importFromId The id of the existing DxGatewayAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxGatewayAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association aws_dx_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig);
    private _allowedPrefixes?;
    get allowedPrefixes(): string[];
    set allowedPrefixes(value: string[]);
    resetAllowedPrefixes(): void;
    get allowedPrefixesInput(): string[] | undefined;
    private _associatedGatewayId?;
    get associatedGatewayId(): string;
    set associatedGatewayId(value: string);
    resetAssociatedGatewayId(): void;
    get associatedGatewayIdInput(): string | undefined;
    private _associatedGatewayOwnerAccountId?;
    get associatedGatewayOwnerAccountId(): string;
    set associatedGatewayOwnerAccountId(value: string);
    resetAssociatedGatewayOwnerAccountId(): void;
    get associatedGatewayOwnerAccountIdInput(): string | undefined;
    get associatedGatewayType(): string;
    get dxGatewayAssociationId(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string | undefined;
    get dxGatewayOwnerAccountId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _proposalId?;
    get proposalId(): string;
    set proposalId(value: string);
    resetProposalId(): void;
    get proposalIdInput(): string | undefined;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): DxGatewayAssociationTimeoutsOutputReference;
    putTimeouts(value: DxGatewayAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DxGatewayAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
