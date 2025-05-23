/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamAccessKeysConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_access_keys#id DataAwsIamAccessKeys#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_access_keys#user DataAwsIamAccessKeys#user}
    */
    readonly user: string;
}
export interface DataAwsIamAccessKeysAccessKeys {
}
export declare function dataAwsIamAccessKeysAccessKeysToTerraform(struct?: DataAwsIamAccessKeysAccessKeys): any;
export declare function dataAwsIamAccessKeysAccessKeysToHclTerraform(struct?: DataAwsIamAccessKeysAccessKeys): any;
export declare class DataAwsIamAccessKeysAccessKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamAccessKeysAccessKeys | undefined;
    set internalValue(value: DataAwsIamAccessKeysAccessKeys | undefined);
    get accessKeyId(): string;
    get createDate(): string;
    get status(): string;
}
export declare class DataAwsIamAccessKeysAccessKeysList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamAccessKeysAccessKeysOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_access_keys aws_iam_access_keys}
*/
export declare class DataAwsIamAccessKeys extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_access_keys";
    /**
    * Generates CDKTF code for importing a DataAwsIamAccessKeys resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamAccessKeys to import
    * @param importFromId The id of the existing DataAwsIamAccessKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_access_keys#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamAccessKeys to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_access_keys aws_iam_access_keys} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamAccessKeysConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamAccessKeysConfig);
    private _accessKeys;
    get accessKeys(): DataAwsIamAccessKeysAccessKeysList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
