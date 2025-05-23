/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_group#group_name DataAwsIamGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_group#id DataAwsIamGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsIamGroupUsers {
}
export declare function dataAwsIamGroupUsersToTerraform(struct?: DataAwsIamGroupUsers): any;
export declare function dataAwsIamGroupUsersToHclTerraform(struct?: DataAwsIamGroupUsers): any;
export declare class DataAwsIamGroupUsersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamGroupUsers | undefined;
    set internalValue(value: DataAwsIamGroupUsers | undefined);
    get arn(): string;
    get path(): string;
    get userId(): string;
    get userName(): string;
}
export declare class DataAwsIamGroupUsersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsIamGroupUsersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_group aws_iam_group}
*/
export declare class DataAwsIamGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_group";
    /**
    * Generates CDKTF code for importing a DataAwsIamGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamGroup to import
    * @param importFromId The id of the existing DataAwsIamGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_group aws_iam_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamGroupConfig);
    get arn(): string;
    get groupId(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get path(): string;
    private _users;
    get users(): DataAwsIamGroupUsersList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
