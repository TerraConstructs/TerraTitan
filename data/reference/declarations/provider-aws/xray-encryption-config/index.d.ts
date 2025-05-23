/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config#id XrayEncryptionConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config#key_id XrayEncryptionConfig#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config#type XrayEncryptionConfig#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config aws_xray_encryption_config}
*/
export declare class XrayEncryptionConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_xray_encryption_config";
    /**
    * Generates CDKTF code for importing a XrayEncryptionConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the XrayEncryptionConfig to import
    * @param importFromId The id of the existing XrayEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the XrayEncryptionConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_encryption_config aws_xray_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XrayEncryptionConfigConfig
    */
    constructor(scope: Construct, id: string, config: XrayEncryptionConfigConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
