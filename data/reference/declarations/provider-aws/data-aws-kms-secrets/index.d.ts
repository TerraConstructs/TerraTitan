/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#id DataAwsKmsSecrets#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * secret block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#secret DataAwsKmsSecrets#secret}
    */
    readonly secret: DataAwsKmsSecretsSecret[] | cdktf.IResolvable;
}
export interface DataAwsKmsSecretsSecret {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#context DataAwsKmsSecrets#context}
    */
    readonly context?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#encryption_algorithm DataAwsKmsSecrets#encryption_algorithm}
    */
    readonly encryptionAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#grant_tokens DataAwsKmsSecrets#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#key_id DataAwsKmsSecrets#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#name DataAwsKmsSecrets#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#payload DataAwsKmsSecrets#payload}
    */
    readonly payload: string;
}
export declare function dataAwsKmsSecretsSecretToTerraform(struct?: DataAwsKmsSecretsSecret | cdktf.IResolvable): any;
export declare function dataAwsKmsSecretsSecretToHclTerraform(struct?: DataAwsKmsSecretsSecret | cdktf.IResolvable): any;
export declare class DataAwsKmsSecretsSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsSecretsSecret | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsKmsSecretsSecret | cdktf.IResolvable | undefined);
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
    private _encryptionAlgorithm?;
    get encryptionAlgorithm(): string;
    set encryptionAlgorithm(value: string);
    resetEncryptionAlgorithm(): void;
    get encryptionAlgorithmInput(): string | undefined;
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[] | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _payload?;
    get payload(): string;
    set payload(value: string);
    get payloadInput(): string | undefined;
}
export declare class DataAwsKmsSecretsSecretList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsKmsSecretsSecret[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsKmsSecretsSecretOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets aws_kms_secrets}
*/
export declare class DataAwsKmsSecrets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kms_secrets";
    /**
    * Generates CDKTF code for importing a DataAwsKmsSecrets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKmsSecrets to import
    * @param importFromId The id of the existing DataAwsKmsSecrets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKmsSecrets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secrets aws_kms_secrets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsSecretsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsSecretsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _plaintext;
    get plaintext(): cdktf.StringMap;
    private _secret;
    get secret(): DataAwsKmsSecretsSecretList;
    putSecret(value: DataAwsKmsSecretsSecret[] | cdktf.IResolvable): void;
    get secretInput(): cdktf.IResolvable | DataAwsKmsSecretsSecret[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
