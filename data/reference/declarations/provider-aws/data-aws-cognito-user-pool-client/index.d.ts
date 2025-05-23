/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
}
export interface DataAwsCognitoUserPoolClientAnalyticsConfiguration {
}
export declare function dataAwsCognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: DataAwsCognitoUserPoolClientAnalyticsConfiguration): any;
export declare function dataAwsCognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: DataAwsCognitoUserPoolClientAnalyticsConfiguration): any;
export declare class DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolClientAnalyticsConfiguration | undefined;
    set internalValue(value: DataAwsCognitoUserPoolClientAnalyticsConfiguration | undefined);
    get applicationArn(): string;
    get applicationId(): string;
    get externalId(): string;
    get roleArn(): string;
    get userDataShared(): cdktf.IResolvable;
}
export declare class DataAwsCognitoUserPoolClientAnalyticsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference;
}
export interface DataAwsCognitoUserPoolClientTokenValidityUnits {
}
export declare function dataAwsCognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: DataAwsCognitoUserPoolClientTokenValidityUnits): any;
export declare function dataAwsCognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct?: DataAwsCognitoUserPoolClientTokenValidityUnits): any;
export declare class DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCognitoUserPoolClientTokenValidityUnits | undefined;
    set internalValue(value: DataAwsCognitoUserPoolClientTokenValidityUnits | undefined);
    get accessToken(): string;
    get idToken(): string;
    get refreshToken(): string;
}
export declare class DataAwsCognitoUserPoolClientTokenValidityUnitsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client aws_cognito_user_pool_client}
*/
export declare class DataAwsCognitoUserPoolClient extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cognito_user_pool_client";
    /**
    * Generates CDKTF code for importing a DataAwsCognitoUserPoolClient resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCognitoUserPoolClient to import
    * @param importFromId The id of the existing DataAwsCognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCognitoUserPoolClient to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cognito_user_pool_client aws_cognito_user_pool_client} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCognitoUserPoolClientConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolClientConfig);
    get accessTokenValidity(): number;
    get allowedOauthFlows(): string[];
    get allowedOauthFlowsUserPoolClient(): cdktf.IResolvable;
    get allowedOauthScopes(): string[];
    private _analyticsConfiguration;
    get analyticsConfiguration(): DataAwsCognitoUserPoolClientAnalyticsConfigurationList;
    get callbackUrls(): string[];
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    get clientSecret(): string;
    get defaultRedirectUri(): string;
    get enablePropagateAdditionalUserContextData(): cdktf.IResolvable;
    get enableTokenRevocation(): cdktf.IResolvable;
    get explicitAuthFlows(): string[];
    get generateSecret(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get idTokenValidity(): number;
    get logoutUrls(): string[];
    get name(): string;
    get preventUserExistenceErrors(): string;
    get readAttributes(): string[];
    get refreshTokenValidity(): number;
    get supportedIdentityProviders(): string[];
    private _tokenValidityUnits;
    get tokenValidityUnits(): DataAwsCognitoUserPoolClientTokenValidityUnitsList;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    get writeAttributes(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
