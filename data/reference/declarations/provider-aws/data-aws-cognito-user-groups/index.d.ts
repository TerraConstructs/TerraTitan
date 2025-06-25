/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoUserGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_groups#user_pool_id DataAwsCognitoUserGroups#user_pool_id}
    */
    readonly userPoolId: string;
}
export interface DataAwsCognitoUserGroupsGroups {
}
export declare function dataAwsCognitoUserGroupsGroupsToTerraform(struct?: DataAwsCognitoUserGroupsGroups): any;
export declare function dataAwsCognitoUserGroupsGroupsToHclTerraform(struct?: DataAwsCognitoUserGroupsGroups): any;
export declare class DataAwsCognitoUserGroupsGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserGroupsGroups | undefined;
    set internalValue(value: DataAwsCognitoUserGroupsGroups | undefined);
    get description(): string;
    get groupName(): string;
    get precedence(): number;
    get roleArn(): string;
}
export declare class DataAwsCognitoUserGroupsGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserGroupsGroupsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_groups aws_cognito_user_groups}
*/
export declare class DataAwsCognitoUserGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cognito_user_groups";
    /**
    * Generates CDKTF code for importing a DataAwsCognitoUserGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCognitoUserGroups to import
    * @param importFromId The id of the existing DataAwsCognitoUserGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCognitoUserGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/cognito_user_groups aws_cognito_user_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoUserGroupsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCognitoUserGroupsConfig);
    private _groups;
    get groups(): DataAwsCognitoUserGroupsGroupsList;
    get id(): string;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
