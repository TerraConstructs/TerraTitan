/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoManagedUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#access_token_validity CognitoManagedUserPoolClient#access_token_validity}
    */
    readonly accessTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows CognitoManagedUserPoolClient#allowed_oauth_flows}
    */
    readonly allowedOauthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_flows_user_pool_client CognitoManagedUserPoolClient#allowed_oauth_flows_user_pool_client}
    */
    readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#allowed_oauth_scopes CognitoManagedUserPoolClient#allowed_oauth_scopes}
    */
    readonly allowedOauthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#auth_session_validity CognitoManagedUserPoolClient#auth_session_validity}
    */
    readonly authSessionValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#callback_urls CognitoManagedUserPoolClient#callback_urls}
    */
    readonly callbackUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#default_redirect_uri CognitoManagedUserPoolClient#default_redirect_uri}
    */
    readonly defaultRedirectUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#enable_propagate_additional_user_context_data CognitoManagedUserPoolClient#enable_propagate_additional_user_context_data}
    */
    readonly enablePropagateAdditionalUserContextData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#enable_token_revocation CognitoManagedUserPoolClient#enable_token_revocation}
    */
    readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#explicit_auth_flows CognitoManagedUserPoolClient#explicit_auth_flows}
    */
    readonly explicitAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#id_token_validity CognitoManagedUserPoolClient#id_token_validity}
    */
    readonly idTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#logout_urls CognitoManagedUserPoolClient#logout_urls}
    */
    readonly logoutUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#name_pattern CognitoManagedUserPoolClient#name_pattern}
    */
    readonly namePattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#name_prefix CognitoManagedUserPoolClient#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#prevent_user_existence_errors CognitoManagedUserPoolClient#prevent_user_existence_errors}
    */
    readonly preventUserExistenceErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#read_attributes CognitoManagedUserPoolClient#read_attributes}
    */
    readonly readAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#refresh_token_validity CognitoManagedUserPoolClient#refresh_token_validity}
    */
    readonly refreshTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#supported_identity_providers CognitoManagedUserPoolClient#supported_identity_providers}
    */
    readonly supportedIdentityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#user_pool_id CognitoManagedUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#write_attributes CognitoManagedUserPoolClient#write_attributes}
    */
    readonly writeAttributes?: string[];
    /**
    * analytics_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#analytics_configuration CognitoManagedUserPoolClient#analytics_configuration}
    */
    readonly analyticsConfiguration?: CognitoManagedUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable;
    /**
    * token_validity_units block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#token_validity_units CognitoManagedUserPoolClient#token_validity_units}
    */
    readonly tokenValidityUnits?: CognitoManagedUserPoolClientTokenValidityUnits[] | cdktf.IResolvable;
}
export interface CognitoManagedUserPoolClientAnalyticsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#application_arn CognitoManagedUserPoolClient#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#application_id CognitoManagedUserPoolClient#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#external_id CognitoManagedUserPoolClient#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#role_arn CognitoManagedUserPoolClient#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#user_data_shared CognitoManagedUserPoolClient#user_data_shared}
    */
    readonly userDataShared?: boolean | cdktf.IResolvable;
}
export declare function cognitoManagedUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoManagedUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any;
export declare function cognitoManagedUserPoolClientAnalyticsConfigurationToHclTerraform(struct?: CognitoManagedUserPoolClientAnalyticsConfiguration | cdktf.IResolvable): any;
export declare class CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoManagedUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoManagedUserPoolClientAnalyticsConfiguration | cdktf.IResolvable | undefined);
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
export declare class CognitoManagedUserPoolClientAnalyticsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoManagedUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoManagedUserPoolClientAnalyticsConfigurationOutputReference;
}
export interface CognitoManagedUserPoolClientTokenValidityUnits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#access_token CognitoManagedUserPoolClient#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#id_token CognitoManagedUserPoolClient#id_token}
    */
    readonly idToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#refresh_token CognitoManagedUserPoolClient#refresh_token}
    */
    readonly refreshToken?: string;
}
export declare function cognitoManagedUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoManagedUserPoolClientTokenValidityUnits | cdktf.IResolvable): any;
export declare function cognitoManagedUserPoolClientTokenValidityUnitsToHclTerraform(struct?: CognitoManagedUserPoolClientTokenValidityUnits | cdktf.IResolvable): any;
export declare class CognitoManagedUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoManagedUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoManagedUserPoolClientTokenValidityUnits | cdktf.IResolvable | undefined);
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
export declare class CognitoManagedUserPoolClientTokenValidityUnitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoManagedUserPoolClientTokenValidityUnits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoManagedUserPoolClientTokenValidityUnitsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client}
*/
export declare class CognitoManagedUserPoolClient extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_managed_user_pool_client";
    /**
    * Generates CDKTF code for importing a CognitoManagedUserPoolClient resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoManagedUserPoolClient to import
    * @param importFromId The id of the existing CognitoManagedUserPoolClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoManagedUserPoolClient to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_managed_user_pool_client aws_cognito_managed_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoManagedUserPoolClientConfig
    */
    constructor(scope: Construct, id: string, config: CognitoManagedUserPoolClientConfig);
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
    get name(): string;
    private _namePattern?;
    get namePattern(): string;
    set namePattern(value: string);
    resetNamePattern(): void;
    get namePatternInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    get analyticsConfiguration(): CognitoManagedUserPoolClientAnalyticsConfigurationList;
    putAnalyticsConfiguration(value: CognitoManagedUserPoolClientAnalyticsConfiguration[] | cdktf.IResolvable): void;
    resetAnalyticsConfiguration(): void;
    get analyticsConfigurationInput(): cdktf.IResolvable | CognitoManagedUserPoolClientAnalyticsConfiguration[] | undefined;
    private _tokenValidityUnits;
    get tokenValidityUnits(): CognitoManagedUserPoolClientTokenValidityUnitsList;
    putTokenValidityUnits(value: CognitoManagedUserPoolClientTokenValidityUnits[] | cdktf.IResolvable): void;
    resetTokenValidityUnits(): void;
    get tokenValidityUnitsInput(): cdktf.IResolvable | CognitoManagedUserPoolClientTokenValidityUnits[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
