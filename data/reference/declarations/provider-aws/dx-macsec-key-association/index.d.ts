/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxMacsecKeyAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#cak DxMacsecKeyAssociation#cak}
    */
    readonly cak?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#ckn DxMacsecKeyAssociation#ckn}
    */
    readonly ckn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#connection_id DxMacsecKeyAssociation#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#id DxMacsecKeyAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#secret_arn DxMacsecKeyAssociation#secret_arn}
    */
    readonly secretArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association aws_dx_macsec_key_association}
*/
export declare class DxMacsecKeyAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dx_macsec_key_association";
    /**
    * Generates CDKTF code for importing a DxMacsecKeyAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DxMacsecKeyAssociation to import
    * @param importFromId The id of the existing DxMacsecKeyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DxMacsecKeyAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dx_macsec_key_association aws_dx_macsec_key_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxMacsecKeyAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DxMacsecKeyAssociationConfig);
    private _cak?;
    get cak(): string;
    set cak(value: string);
    resetCak(): void;
    get cakInput(): string | undefined;
    private _ckn?;
    get ckn(): string;
    set ckn(value: string);
    resetCkn(): void;
    get cknInput(): string | undefined;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
    get startOn(): string;
    get state(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
