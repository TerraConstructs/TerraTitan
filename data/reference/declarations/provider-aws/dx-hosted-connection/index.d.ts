/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxHostedConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#bandwidth DxHostedConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#connection_id DxHostedConnection#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#id DxHostedConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#name DxHostedConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#owner_account_id DxHostedConnection#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#vlan DxHostedConnection#vlan}
    */
    readonly vlan: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection aws_dx_hosted_connection}
*/
export declare class DxHostedConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dx_hosted_connection";
    /**
    * Generates CDKTF code for importing a DxHostedConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxHostedConnection to import
    * @param importFromId The id of the existing DxHostedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxHostedConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_hosted_connection aws_dx_hosted_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DxHostedConnectionConfig);
    get awsDevice(): string;
    private _bandwidth?;
    get bandwidth(): string;
    set bandwidth(value: string);
    get bandwidthInput(): string | undefined;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string | undefined;
    get hasLogicalRedundancy(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get jumboFrameCapable(): cdktf.IResolvable;
    get lagId(): string;
    get loaIssueTime(): string;
    get location(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ownerAccountId?;
    get ownerAccountId(): string;
    set ownerAccountId(value: string);
    get ownerAccountIdInput(): string | undefined;
    get partnerName(): string;
    get providerName(): string;
    get region(): string;
    get state(): string;
    private _vlan?;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
