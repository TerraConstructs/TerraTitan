/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxGatewayAssociationProposalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}
    */
    readonly allowedPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}
    */
    readonly associatedGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}
    */
    readonly dxGatewayOwnerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal aws_dx_gateway_association_proposal}
*/
export declare class DxGatewayAssociationProposal extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dx_gateway_association_proposal";
    /**
    * Generates CDKTF code for importing a DxGatewayAssociationProposal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxGatewayAssociationProposal to import
    * @param importFromId The id of the existing DxGatewayAssociationProposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxGatewayAssociationProposal to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_gateway_association_proposal aws_dx_gateway_association_proposal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationProposalConfig
    */
    constructor(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig);
    private _allowedPrefixes?;
    get allowedPrefixes(): string[];
    set allowedPrefixes(value: string[]);
    resetAllowedPrefixes(): void;
    get allowedPrefixesInput(): string[] | undefined;
    private _associatedGatewayId?;
    get associatedGatewayId(): string;
    set associatedGatewayId(value: string);
    get associatedGatewayIdInput(): string | undefined;
    get associatedGatewayOwnerAccountId(): string;
    get associatedGatewayType(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string | undefined;
    private _dxGatewayOwnerAccountId?;
    get dxGatewayOwnerAccountId(): string;
    set dxGatewayOwnerAccountId(value: string);
    get dxGatewayOwnerAccountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
