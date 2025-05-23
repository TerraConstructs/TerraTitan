/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}
    */
    readonly identityPoolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsCognitoIdentityPoolCognitoIdentityProviders {
}
export declare function dataAwsCognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: DataAwsCognitoIdentityPoolCognitoIdentityProviders): any;
export declare function dataAwsCognitoIdentityPoolCognitoIdentityProvidersToHclTerraform(struct?: DataAwsCognitoIdentityPoolCognitoIdentityProviders): any;
export declare class DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoIdentityPoolCognitoIdentityProviders | undefined;
    set internalValue(value: DataAwsCognitoIdentityPoolCognitoIdentityProviders | undefined);
    get clientId(): string;
    get providerName(): string;
    get serverSideTokenCheck(): cdktf.IResolvable;
}
export declare class DataAwsCognitoIdentityPoolCognitoIdentityProvidersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool aws_cognito_identity_pool}
*/
export declare class DataAwsCognitoIdentityPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cognito_identity_pool";
    /**
    * Generates CDKTF code for importing a DataAwsCognitoIdentityPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCognitoIdentityPool to import
    * @param importFromId The id of the existing DataAwsCognitoIdentityPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCognitoIdentityPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_identity_pool aws_cognito_identity_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoIdentityPoolConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCognitoIdentityPoolConfig);
    get allowClassicFlow(): cdktf.IResolvable;
    get allowUnauthenticatedIdentities(): cdktf.IResolvable;
    get arn(): string;
    private _cognitoIdentityProviders;
    get cognitoIdentityProviders(): DataAwsCognitoIdentityPoolCognitoIdentityProvidersList;
    get developerProviderName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityPoolName?;
    get identityPoolName(): string;
    set identityPoolName(value: string);
    get identityPoolNameInput(): string | undefined;
    get openidConnectProviderArns(): string[];
    get samlProviderArns(): string[];
    private _supportedLoginProviders;
    get supportedLoginProviders(): cdktf.StringMap;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
