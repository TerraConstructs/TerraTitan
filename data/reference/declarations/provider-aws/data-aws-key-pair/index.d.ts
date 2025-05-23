/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#id DataAwsKeyPair#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#include_public_key DataAwsKeyPair#include_public_key}
    */
    readonly includePublicKey?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#key_name DataAwsKeyPair#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#key_pair_id DataAwsKeyPair#key_pair_id}
    */
    readonly keyPairId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#tags DataAwsKeyPair#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#filter DataAwsKeyPair#filter}
    */
    readonly filter?: DataAwsKeyPairFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#timeouts DataAwsKeyPair#timeouts}
    */
    readonly timeouts?: DataAwsKeyPairTimeouts;
}
export interface DataAwsKeyPairFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#name DataAwsKeyPair#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#values DataAwsKeyPair#values}
    */
    readonly values: string[];
}
export declare function dataAwsKeyPairFilterToTerraform(struct?: DataAwsKeyPairFilter | cdktf.IResolvable): any;
export declare function dataAwsKeyPairFilterToHclTerraform(struct?: DataAwsKeyPairFilter | cdktf.IResolvable): any;
export declare class DataAwsKeyPairFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKeyPairFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsKeyPairFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsKeyPairFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsKeyPairFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsKeyPairFilterOutputReference;
}
export interface DataAwsKeyPairTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#read DataAwsKeyPair#read}
    */
    readonly read?: string;
}
export declare function dataAwsKeyPairTimeoutsToTerraform(struct?: DataAwsKeyPairTimeouts | cdktf.IResolvable): any;
export declare function dataAwsKeyPairTimeoutsToHclTerraform(struct?: DataAwsKeyPairTimeouts | cdktf.IResolvable): any;
export declare class DataAwsKeyPairTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsKeyPairTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsKeyPairTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair aws_key_pair}
*/
export declare class DataAwsKeyPair extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_key_pair";
    /**
    * Generates CDKTF code for importing a DataAwsKeyPair resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKeyPair to import
    * @param importFromId The id of the existing DataAwsKeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKeyPair to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/key_pair aws_key_pair} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKeyPairConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsKeyPairConfig);
    get arn(): string;
    get createTime(): string;
    get fingerprint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includePublicKey?;
    get includePublicKey(): boolean | cdktf.IResolvable;
    set includePublicKey(value: boolean | cdktf.IResolvable);
    resetIncludePublicKey(): void;
    get includePublicKeyInput(): boolean | cdktf.IResolvable | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _keyPairId?;
    get keyPairId(): string;
    set keyPairId(value: string);
    resetKeyPairId(): void;
    get keyPairIdInput(): string | undefined;
    get keyType(): string;
    get publicKey(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _filter;
    get filter(): DataAwsKeyPairFilterList;
    putFilter(value: DataAwsKeyPairFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsKeyPairFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsKeyPairTimeoutsOutputReference;
    putTimeouts(value: DataAwsKeyPairTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsKeyPairTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
