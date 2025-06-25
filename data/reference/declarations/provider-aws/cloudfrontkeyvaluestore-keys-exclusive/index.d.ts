/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontkeyvaluestoreKeysExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the Key Value Store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key_value_store_arn CloudfrontkeyvaluestoreKeysExclusive#key_value_store_arn}
    */
    readonly keyValueStoreArn: string;
    /**
    * Maximum resource key values pairs that you wills update in a single API request. AWS has a default quota of 50 keys or a 3 MB payload, whichever is reached first
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#max_batch_size CloudfrontkeyvaluestoreKeysExclusive#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * resource_key_value_pair block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#resource_key_value_pair CloudfrontkeyvaluestoreKeysExclusive#resource_key_value_pair}
    */
    readonly resourceKeyValuePair?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable;
}
export interface CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair {
    /**
    * The key to put.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#key CloudfrontkeyvaluestoreKeysExclusive#key}
    */
    readonly key: string;
    /**
    * The value to put.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#value CloudfrontkeyvaluestoreKeysExclusive#value}
    */
    readonly value: string;
}
export declare function cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToTerraform(struct?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable): any;
export declare function cloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairToHclTerraform(struct?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable): any;
export declare class CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive}
*/
export declare class CloudfrontkeyvaluestoreKeysExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfrontkeyvaluestore_keys_exclusive";
    /**
    * Generates CDKTF code for importing a CloudfrontkeyvaluestoreKeysExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontkeyvaluestoreKeysExclusive to import
    * @param importFromId The id of the existing CloudfrontkeyvaluestoreKeysExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontkeyvaluestoreKeysExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive aws_cloudfrontkeyvaluestore_keys_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontkeyvaluestoreKeysExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontkeyvaluestoreKeysExclusiveConfig);
    private _keyValueStoreArn?;
    get keyValueStoreArn(): string;
    set keyValueStoreArn(value: string);
    get keyValueStoreArnInput(): string | undefined;
    private _maxBatchSize?;
    get maxBatchSize(): number;
    set maxBatchSize(value: number);
    resetMaxBatchSize(): void;
    get maxBatchSizeInput(): number | undefined;
    get totalSizeInBytes(): number;
    private _resourceKeyValuePair;
    get resourceKeyValuePair(): CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePairList;
    putResourceKeyValuePair(value: CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | cdktf.IResolvable): void;
    resetResourceKeyValuePair(): void;
    get resourceKeyValuePairInput(): cdktf.IResolvable | CloudfrontkeyvaluestoreKeysExclusiveResourceKeyValuePair[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
