/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PaymentcryptographyKeyAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}
    */
    readonly keyArn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key_alias aws_paymentcryptography_key_alias}
*/
export declare class PaymentcryptographyKeyAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_paymentcryptography_key_alias";
    /**
    * Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PaymentcryptographyKeyAlias to import
    * @param importFromId The id of the existing PaymentcryptographyKeyAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PaymentcryptographyKeyAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/paymentcryptography_key_alias aws_paymentcryptography_key_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PaymentcryptographyKeyAliasConfig
    */
    constructor(scope: Construct, id: string, config: PaymentcryptographyKeyAliasConfig);
    private _aliasName?;
    get aliasName(): string;
    set aliasName(value: string);
    get aliasNameInput(): string | undefined;
    get id(): string;
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    resetKeyArn(): void;
    get keyArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
