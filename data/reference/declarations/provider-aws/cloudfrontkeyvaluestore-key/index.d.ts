/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontkeyvaluestoreKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The key to put.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key#key CloudfrontkeyvaluestoreKey#key}
    */
    readonly key: string;
    /**
    * The Amazon Resource Name (ARN) of the Key Value Store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key#key_value_store_arn CloudfrontkeyvaluestoreKey#key_value_store_arn}
    */
    readonly keyValueStoreArn: string;
    /**
    * The value to put.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key#value CloudfrontkeyvaluestoreKey#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key aws_cloudfrontkeyvaluestore_key}
*/
export declare class CloudfrontkeyvaluestoreKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfrontkeyvaluestore_key";
    /**
    * Generates CDKTF code for importing a CloudfrontkeyvaluestoreKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontkeyvaluestoreKey to import
    * @param importFromId The id of the existing CloudfrontkeyvaluestoreKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontkeyvaluestoreKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfrontkeyvaluestore_key aws_cloudfrontkeyvaluestore_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontkeyvaluestoreKeyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontkeyvaluestoreKeyConfig);
    get id(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _keyValueStoreArn?;
    get keyValueStoreArn(): string;
    set keyValueStoreArn(value: string);
    get keyValueStoreArnInput(): string | undefined;
    get totalSizeInBytes(): number;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
