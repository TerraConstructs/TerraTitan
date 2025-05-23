/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsCiphertextConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext#context KmsCiphertext#context}
    */
    readonly context?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext#id KmsCiphertext#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext#key_id KmsCiphertext#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext#plaintext KmsCiphertext#plaintext}
    */
    readonly plaintext: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext aws_kms_ciphertext}
*/
export declare class KmsCiphertext extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kms_ciphertext";
    /**
    * Generates CDKTF code for importing a KmsCiphertext resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsCiphertext to import
    * @param importFromId The id of the existing KmsCiphertext that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsCiphertext to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_ciphertext aws_kms_ciphertext} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsCiphertextConfig
    */
    constructor(scope: Construct, id: string, config: KmsCiphertextConfig);
    get ciphertextBlob(): string;
    private _context?;
    get context(): {
        [key: string]: string;
    };
    set context(value: {
        [key: string]: string;
    });
    resetContext(): void;
    get contextInput(): {
        [key: string]: string;
    } | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
    private _plaintext?;
    get plaintext(): string;
    set plaintext(value: string);
    get plaintextInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
