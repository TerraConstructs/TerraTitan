/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key#grant_tokens DataAwsKmsPublicKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key#id DataAwsKmsPublicKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key#key_id DataAwsKmsPublicKey#key_id}
    */
    readonly keyId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key aws_kms_public_key}
*/
export declare class DataAwsKmsPublicKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kms_public_key";
    /**
    * Generates CDKTF code for importing a DataAwsKmsPublicKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKmsPublicKey to import
    * @param importFromId The id of the existing DataAwsKmsPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKmsPublicKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_public_key aws_kms_public_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsPublicKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsPublicKeyConfig);
    get arn(): string;
    get customerMasterKeySpec(): string;
    get encryptionAlgorithms(): string[];
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
    get keyUsage(): string;
    get publicKey(): string;
    get publicKeyPem(): string;
    get signingAlgorithms(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
