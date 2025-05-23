/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}
    */
    readonly accessTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
    */
    readonly allowedOauthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
    */
    readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
    */
    readonly allowedOauthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#auth_session_validity CognitoUserPoolClient#auth_session_validity}
    */
    readonly authSessionValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}
    */
    readonly callbackUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
    */
    readonly defaultRedirectUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#enable_propagate_additional_user_context_data CognitoUserPoolClient#enable_propagate_additional_user_context_data}
    */
    readonly enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
    */
    readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
    */
    readonly explicitAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}
    */
    readonly generateSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}
    */
    readonly idTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}
    */
    readonly logoutUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
    */
    readonly preventUserExistenceErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}
    */
    readonly readAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
    */
    readonly refreshTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
    */
    readonly supportedIdentityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}
    */
    readonly writeAttributes?: string[];
    /**
    * analytics_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}
    */
    readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable;
    /**
    * token_validity_units block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}
    */
    readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable;
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}
    */
    readonly userDataShared?: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any;
export declare function cognitoUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any;
export declare class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    resetApplicationArn(): void;
    get applicationArnInput(): string | undefined;
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    resetApplicationId(): void;
    get applicationIdInput(): string | undefined;
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    resetExternalId(): void;
    get externalIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _userDataShared?;
    get userDataShared(): boolean | cdktf.IResolvable;
    set userDataShared(value: boolean | cdktf.IResolvable);
    resetUserDataShared(): void;
    get userDataSharedInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class CognitoUserPoolClientAnalyticsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoUserPoolClientAnalyticsConfigurationOutputReference;
}
export interface CognitoUserPoolClientTokenValidityUnits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}
    */
    readonly idToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}
    */
    readonly refreshToken?: string;
}
export declare function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable): any;
export declare function cognitoUserPoolClientTokenValidityUnitsToHclTerraform(struct?: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable): any;
export declare class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _idToken?;
    get idToken(): string;
    set idToken(value: string);
    resetIdToken(): void;
    get idTokenInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
}
export declare class CognitoUserPoolClientTokenValidityUnitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoUserPoolClientTokenValidityUnitsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client}
*/
export declare class CognitoUserPoolClient extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_user_pool_client";
    /**
    * Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoUserPoolClient to import
    * @param importFromId The id of the existing CognitoUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoUserPoolClient to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig);
    private _accessTokenValidity?;
    get accessTokenValidity(): number;
    set accessTokenValidity(value: number);
    resetAccessTokenValidity(): void;
    get accessTokenValidityInput(): number | undefined;
    private _allowedOauthFlows?;
    get allowedOauthFlows(): string[];
    set allowedOauthFlows(value: string[]);
    resetAllowedOauthFlows(): void;
    get allowedOauthFlowsInput(): string[] | undefined;
    private _allowedOauthFlowsUserPoolClient?;
    get allowedOauthFlowsUserPoolClient(): boolean | cdktf.IResolvable;
    set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable);
    resetAllowedOauthFlowsUserPoolClient(): void;
    get allowedOauthFlowsUserPoolClientInput(): boolean | cdktf.IResolvable | undefined;
    private _allowedOauthScopes?;
    get allowedOauthScopes(): string[];
    set allowedOauthScopes(value: string[]);
    resetAllowedOauthScopes(): void;
    get allowedOauthScopesInput(): string[] | undefined;
    private _authSessionValidity?;
    get authSessionValidity(): number;
    set authSessionValidity(value: number);
    resetAuthSessionValidity(): void;
    get authSessionValidityInput(): number | undefined;
    private _callbackUrls?;
    get callbackUrls(): string[];
    set callbackUrls(value: string[]);
    resetCallbackUrls(): void;
    get callbackUrlsInput(): string[] | undefined;
    get clientSecret(): string;
    private _defaultRedirectUri?;
    get defaultRedirectUri(): string;
    set defaultRedirectUri(value: string);
    resetDefaultRedirectUri(): void;
    get defaultRedirectUriInput(): string | undefined;
    private _enablePropagateAdditionalUserContextData?;
    get enablePropagateAdditionalUserContextData(): boolean | cdktf.IResolvable;
    set enablePropagateAdditionalUserContextData(value: boolean | cdktf.IResolvable);
    resetEnablePropagateAdditionalUserContextData(): void;
    get enablePropagateAdditionalUserContextDataInput(): boolean | cdktf.IResolvable | undefined;
    private _enableTokenRevocation?;
    get enableTokenRevocation(): boolean | cdktf.IResolvable;
    set enableTokenRevocation(value: boolean | cdktf.IResolvable);
    resetEnableTokenRevocation(): void;
    get enableTokenRevocationInput(): boolean | cdktf.IResolvable | undefined;
    private _explicitAuthFlows?;
    get explicitAuthFlows(): string[];
    set explicitAuthFlows(value: string[]);
    resetExplicitAuthFlows(): void;
    get explicitAuthFlowsInput(): string[] | undefined;
    private _generateSecret?;
    get generateSecret(): boolean | cdktf.IResolvable;
    set generateSecret(value: boolean | cdktf.IResolvable);
    resetGenerateSecret(): void;
    get generateSecretInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _idTokenValidity?;
    get idTokenValidity(): number;
    set idTokenValidity(value: number);
    resetIdTokenValidity(): void;
    get idTokenValidityInput(): number | undefined;
    private _logoutUrls?;
    get logoutUrls(): string[];
    set logoutUrls(value: string[]);
    resetLogoutUrls(): void;
    get logoutUrlsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _preventUserExistenceErrors?;
    get preventUserExistenceErrors(): string;
    set preventUserExistenceErrors(value: string);
    resetPreventUserExistenceErrors(): void;
    get preventUserExistenceErrorsInput(): string | undefined;
    private _readAttributes?;
    get readAttributes(): string[];
    set readAttributes(value: string[]);
    resetReadAttributes(): void;
    get readAttributesInput(): string[] | undefined;
    private _refreshTokenValidity?;
    get refreshTokenValidity(): number;
    set refreshTokenValidity(value: number);
    resetRefreshTokenValidity(): void;
    get refreshTokenValidityInput(): number | undefined;
    private _supportedIdentityProviders?;
    get supportedIdentityProviders(): string[];
    set supportedIdentityProviders(value: string[]);
    resetSupportedIdentityProviders(): void;
    get supportedIdentityProvidersInput(): string[] | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    private _writeAttributes?;
    get writeAttributes(): string[];
    set writeAttributes(value: string[]);
    resetWriteAttributes(): void;
    get writeAttributesInput(): string[] | undefined;
    private _analyticsConfiguration;
    get analyticsConfiguration(): CognitoUserPoolClientAnalyticsConfigurationList;
    putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable): void;
    resetAnalyticsConfiguration(): void;
    get analyticsConfigurationInput(): cdktf.IResolvable | CognitoUserPoolClientAnalyticsConfiguration[] | undefined;
    private _tokenValidityUnits;
    get tokenValidityUnits(): CognitoUserPoolClientTokenValidityUnitsList;
    putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits[] | cdktf.IResolvable): void;
    resetTokenValidityUnits(): void;
    get tokenValidityUnitsInput(): cdktf.IResolvable | CognitoUserPoolClientTokenValidityUnits[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
