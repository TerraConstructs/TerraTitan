/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoResourceServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#id CognitoResourceServer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#identifier CognitoResourceServer#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#name CognitoResourceServer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#user_pool_id CognitoResourceServer#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#scope CognitoResourceServer#scope}
    */
    readonly scope?: CognitoResourceServerScope[] | cdktf.IResolvable;
}
export interface CognitoResourceServerScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#scope_description CognitoResourceServer#scope_description}
    */
    readonly scopeDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#scope_name CognitoResourceServer#scope_name}
    */
    readonly scopeName: string;
}
export declare function cognitoResourceServerScopeToTerraform(struct?: CognitoResourceServerScope | cdktf.IResolvable): any;
export declare function cognitoResourceServerScopeToHclTerraform(struct?: CognitoResourceServerScope | cdktf.IResolvable): any;
export declare class CognitoResourceServerScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoResourceServerScope | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoResourceServerScope | cdktf.IResolvable | undefined);
    private _scopeDescription?;
    get scopeDescription(): string;
    set scopeDescription(value: string);
    get scopeDescriptionInput(): string | undefined;
    private _scopeName?;
    get scopeName(): string;
    set scopeName(value: string);
    get scopeNameInput(): string | undefined;
}
export declare class CognitoResourceServerScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoResourceServerScope[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoResourceServerScopeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server aws_cognito_resource_server}
*/
export declare class CognitoResourceServer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_resource_server";
    /**
    * Generates CDKTF code for importing a CognitoResourceServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoResourceServer to import
    * @param importFromId The id of the existing CognitoResourceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoResourceServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_resource_server aws_cognito_resource_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoResourceServerConfig
    */
    constructor(scope: Construct, id: string, config: CognitoResourceServerConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get scopeIdentifiers(): string[];
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    private _scope;
    get scope(): CognitoResourceServerScopeList;
    putScope(value: CognitoResourceServerScope[] | cdktf.IResolvable): void;
    resetScope(): void;
    get scopeInput(): cdktf.IResolvable | CognitoResourceServerScope[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
