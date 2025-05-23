/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store#custom_key_store_id DataAwsKmsCustomKeyStore#custom_key_store_id}
    */
    readonly customKeyStoreId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store#custom_key_store_name DataAwsKmsCustomKeyStore#custom_key_store_name}
    */
    readonly customKeyStoreName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store#id DataAwsKmsCustomKeyStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store aws_kms_custom_key_store}
*/
export declare class DataAwsKmsCustomKeyStore extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kms_custom_key_store";
    /**
    * Generates CDKTF code for importing a DataAwsKmsCustomKeyStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKmsCustomKeyStore to import
    * @param importFromId The id of the existing DataAwsKmsCustomKeyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKmsCustomKeyStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_custom_key_store aws_kms_custom_key_store} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsCustomKeyStoreConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsKmsCustomKeyStoreConfig);
    get cloudHsmClusterId(): string;
    get connectionState(): string;
    get creationDate(): string;
    private _customKeyStoreId?;
    get customKeyStoreId(): string;
    set customKeyStoreId(value: string);
    resetCustomKeyStoreId(): void;
    get customKeyStoreIdInput(): string | undefined;
    private _customKeyStoreName?;
    get customKeyStoreName(): string;
    set customKeyStoreName(value: string);
    resetCustomKeyStoreName(): void;
    get customKeyStoreNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get trustAnchorCertificate(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
