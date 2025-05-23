/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppflowConnectorProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connection_mode AppflowConnectorProfile#connection_mode}
    */
    readonly connectionMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connector_label AppflowConnectorProfile#connector_label}
    */
    readonly connectorLabel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connector_type AppflowConnectorProfile#connector_type}
    */
    readonly connectorType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#id AppflowConnectorProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#kms_arn AppflowConnectorProfile#kms_arn}
    */
    readonly kmsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#name AppflowConnectorProfile#name}
    */
    readonly name: string;
    /**
    * connector_profile_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connector_profile_config AppflowConnectorProfile#connector_profile_config}
    */
    readonly connectorProfileConfig: AppflowConnectorProfileConnectorProfileConfig;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#secret_key AppflowConnectorProfile#secret_key}
    */
    readonly secretKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string | undefined;
    private _secretKey?;
    get secretKey(): string;
    set secretKey(value: string);
    get secretKeyInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
    */
    readonly apiSecretKey?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string | undefined;
    private _apiSecretKey?;
    get apiSecretKey(): string;
    set apiSecretKey(value: string);
    resetApiSecretKey(): void;
    get apiSecretKeyInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#credentials_map AppflowConnectorProfile#credentials_map}
    */
    readonly credentialsMap?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#custom_authentication_type AppflowConnectorProfile#custom_authentication_type}
    */
    readonly customAuthenticationType: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined);
    private _credentialsMap?;
    get credentialsMap(): {
        [key: string]: string;
    };
    set credentialsMap(value: {
        [key: string]: string;
    });
    resetCredentialsMap(): void;
    get credentialsMapInput(): {
        [key: string]: string;
    } | undefined;
    private _customAuthenticationType?;
    get customAuthenticationType(): string;
    set customAuthenticationType(value: string);
    get customAuthenticationTypeInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2ToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    resetClientSecret(): void;
    get clientSecretInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#authentication_type AppflowConnectorProfile#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * api_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey;
    /**
    * basic block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#basic AppflowConnectorProfile#basic}
    */
    readonly basic?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic;
    /**
    * custom block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#custom AppflowConnectorProfile#custom}
    */
    readonly custom?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom;
    /**
    * oauth2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth2 AppflowConnectorProfile#oauth2}
    */
    readonly oauth2?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined);
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string | undefined;
    private _apiKey;
    get apiKey(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKeyOutputReference;
    putApiKey(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey): void;
    resetApiKey(): void;
    get apiKeyInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorApiKey | undefined;
    private _basic;
    get basic(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasicOutputReference;
    putBasic(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic): void;
    resetBasic(): void;
    get basicInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorBasic | undefined;
    private _custom;
    get custom(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustomOutputReference;
    putCustom(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom): void;
    resetCustom(): void;
    get customInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom | undefined;
    private _oauth2;
    get oauth2(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2OutputReference;
    putOauth2(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2): void;
    resetOauth2(): void;
    get oauth2Input(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOauth2 | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#application_key AppflowConnectorProfile#application_key}
    */
    readonly applicationKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string | undefined;
    private _applicationKey?;
    get applicationKey(): string;
    set applicationKey(value: string);
    get applicationKeyInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_token AppflowConnectorProfile#api_token}
    */
    readonly apiToken: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined);
    private _apiToken?;
    get apiToken(): string;
    set apiToken(value: string);
    get apiTokenInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_key_id AppflowConnectorProfile#access_key_id}
    */
    readonly accessKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#datakey AppflowConnectorProfile#datakey}
    */
    readonly datakey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#secret_access_key AppflowConnectorProfile#secret_access_key}
    */
    readonly secretAccessKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#user_id AppflowConnectorProfile#user_id}
    */
    readonly userId: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    get accessKeyIdInput(): string | undefined;
    private _datakey?;
    get datakey(): string;
    set datakey(value: string);
    get datakeyInput(): string | undefined;
    private _secretAccessKey?;
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    get secretAccessKeyInput(): string | undefined;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_credentials_arn AppflowConnectorProfile#client_credentials_arn}
    */
    readonly clientCredentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#jwt_token AppflowConnectorProfile#jwt_token}
    */
    readonly jwtToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth2_grant_type AppflowConnectorProfile#oauth2_grant_type}
    */
    readonly oauth2GrantType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientCredentialsArn?;
    get clientCredentialsArn(): string;
    set clientCredentialsArn(value: string);
    resetClientCredentialsArn(): void;
    get clientCredentialsArnInput(): string | undefined;
    private _jwtToken?;
    get jwtToken(): string;
    set jwtToken(value: string);
    resetJwtToken(): void;
    get jwtTokenInput(): string | undefined;
    private _oauth2GrantType?;
    get oauth2GrantType(): string;
    set oauth2GrantType(value: string);
    resetOauth2GrantType(): void;
    get oauth2GrantTypeInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#refresh_token AppflowConnectorProfile#refresh_token}
    */
    readonly refreshToken?: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData {
    /**
    * basic_auth_credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#basic_auth_credentials AppflowConnectorProfile#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials;
    /**
    * oauth_credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_credentials AppflowConnectorProfile#oauth_credentials}
    */
    readonly oauthCredentials?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined);
    private _basicAuthCredentials;
    get basicAuthCredentials(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentialsOutputReference;
    putBasicAuthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials): void;
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataBasicAuthCredentials | undefined;
    private _oauthCredentials;
    get oauthCredentials(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentialsOutputReference;
    putOauthCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials): void;
    resetOauthCredentials(): void;
    get oauthCredentialsInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOauthCredentials | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_key AppflowConnectorProfile#api_key}
    */
    readonly apiKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#api_secret_key AppflowConnectorProfile#api_secret_key}
    */
    readonly apiSecretKey: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined);
    private _apiSecretKey?;
    get apiSecretKey(): string;
    set apiSecretKey(value: string);
    get apiSecretKeyInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#password AppflowConnectorProfile#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#username AppflowConnectorProfile#username}
    */
    readonly username: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code AppflowConnectorProfile#auth_code}
    */
    readonly authCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redirect_uri AppflowConnectorProfile#redirect_uri}
    */
    readonly redirectUri?: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest | undefined);
    private _authCode?;
    get authCode(): string;
    set authCode(value: string);
    resetAuthCode(): void;
    get authCodeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    resetRedirectUri(): void;
    get redirectUriInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#access_token AppflowConnectorProfile#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_id AppflowConnectorProfile#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_secret AppflowConnectorProfile#client_secret}
    */
    readonly clientSecret: string;
    /**
    * oauth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_request AppflowConnectorProfile#oauth_request}
    */
    readonly oauthRequest?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _oauthRequest;
    get oauthRequest(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequestOutputReference;
    putOauthRequest(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest): void;
    resetOauthRequest(): void;
    get oauthRequestInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOauthRequest | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials {
    /**
    * amplitude block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#amplitude AppflowConnectorProfile#amplitude}
    */
    readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude;
    /**
    * custom_connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
    */
    readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector;
    /**
    * datadog block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
    */
    readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog;
    /**
    * dynatrace block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
    */
    readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace;
    /**
    * google_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#google_analytics AppflowConnectorProfile#google_analytics}
    */
    readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics;
    /**
    * honeycode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#honeycode AppflowConnectorProfile#honeycode}
    */
    readonly honeycode?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode;
    /**
    * infor_nexus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus;
    /**
    * marketo block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
    */
    readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo;
    /**
    * redshift block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
    */
    readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift;
    /**
    * salesforce block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
    */
    readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce;
    /**
    * sapo_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
    */
    readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData;
    /**
    * service_now block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
    */
    readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow;
    /**
    * singular block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#singular AppflowConnectorProfile#singular}
    */
    readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular;
    /**
    * slack block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#slack AppflowConnectorProfile#slack}
    */
    readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack;
    /**
    * snowflake block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
    */
    readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake;
    /**
    * trendmicro block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#trendmicro AppflowConnectorProfile#trendmicro}
    */
    readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro;
    /**
    * veeva block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
    */
    readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva;
    /**
    * zendesk block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
    */
    readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined);
    private _amplitude;
    get amplitude(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitudeOutputReference;
    putAmplitude(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude): void;
    resetAmplitude(): void;
    get amplitudeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude | undefined;
    private _customConnector;
    get customConnector(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorOutputReference;
    putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector): void;
    resetCustomConnector(): void;
    get customConnectorInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnector | undefined;
    private _datadog;
    get datadog(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadogOutputReference;
    putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog): void;
    resetDatadog(): void;
    get datadogInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog | undefined;
    private _dynatrace;
    get dynatrace(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatraceOutputReference;
    putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace): void;
    resetDynatrace(): void;
    get dynatraceInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDynatrace | undefined;
    private _googleAnalytics;
    get googleAnalytics(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalyticsOutputReference;
    putGoogleAnalytics(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics): void;
    resetGoogleAnalytics(): void;
    get googleAnalyticsInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsGoogleAnalytics | undefined;
    private _honeycode;
    get honeycode(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycodeOutputReference;
    putHoneycode(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode): void;
    resetHoneycode(): void;
    get honeycodeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsHoneycode | undefined;
    private _inforNexus;
    get inforNexus(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexusOutputReference;
    putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus): void;
    resetInforNexus(): void;
    get inforNexusInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus | undefined;
    private _marketo;
    get marketo(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketoOutputReference;
    putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo): void;
    resetMarketo(): void;
    get marketoInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsMarketo | undefined;
    private _redshift;
    get redshift(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshiftOutputReference;
    putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift): void;
    resetRedshift(): void;
    get redshiftInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsRedshift | undefined;
    private _salesforce;
    get salesforce(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforceOutputReference;
    putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce): void;
    resetSalesforce(): void;
    get salesforceInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSalesforce | undefined;
    private _sapoData;
    get sapoData(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoDataOutputReference;
    putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData): void;
    resetSapoData(): void;
    get sapoDataInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSapoData | undefined;
    private _serviceNow;
    get serviceNow(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNowOutputReference;
    putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow): void;
    resetServiceNow(): void;
    get serviceNowInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsServiceNow | undefined;
    private _singular;
    get singular(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingularOutputReference;
    putSingular(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular): void;
    resetSingular(): void;
    get singularInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular | undefined;
    private _slack;
    get slack(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlackOutputReference;
    putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack): void;
    resetSlack(): void;
    get slackInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSlack | undefined;
    private _snowflake;
    get snowflake(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflakeOutputReference;
    putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake): void;
    resetSnowflake(): void;
    get snowflakeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSnowflake | undefined;
    private _trendmicro;
    get trendmicro(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicroOutputReference;
    putTrendmicro(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro): void;
    resetTrendmicro(): void;
    get trendmicroInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro | undefined;
    private _veeva;
    get veeva(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeevaOutputReference;
    putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva): void;
    resetVeeva(): void;
    get veevaInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsVeeva | undefined;
    private _zendesk;
    get zendesk(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendeskOutputReference;
    putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk): void;
    resetZendesk(): void;
    get zendeskInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsZendesk | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude {
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude | undefined);
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth2_grant_type AppflowConnectorProfile#oauth2_grant_type}
    */
    readonly oauth2GrantType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
    */
    readonly tokenUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#token_url_custom_properties AppflowConnectorProfile#token_url_custom_properties}
    */
    readonly tokenUrlCustomProperties?: {
        [key: string]: string;
    };
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties | undefined);
    private _oauth2GrantType?;
    get oauth2GrantType(): string;
    set oauth2GrantType(value: string);
    get oauth2GrantTypeInput(): string | undefined;
    private _tokenUrl?;
    get tokenUrl(): string;
    set tokenUrl(value: string);
    get tokenUrlInput(): string | undefined;
    private _tokenUrlCustomProperties?;
    get tokenUrlCustomProperties(): {
        [key: string]: string;
    };
    set tokenUrlCustomProperties(value: {
        [key: string]: string;
    });
    resetTokenUrlCustomProperties(): void;
    get tokenUrlCustomPropertiesInput(): {
        [key: string]: string;
    } | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#profile_properties AppflowConnectorProfile#profile_properties}
    */
    readonly profileProperties?: {
        [key: string]: string;
    };
    /**
    * oauth2_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth2_properties AppflowConnectorProfile#oauth2_properties}
    */
    readonly oauth2Properties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined);
    private _profileProperties?;
    get profileProperties(): {
        [key: string]: string;
    };
    set profileProperties(value: {
        [key: string]: string;
    });
    resetProfileProperties(): void;
    get profilePropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _oauth2Properties;
    get oauth2Properties(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2PropertiesOutputReference;
    putOauth2Properties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties): void;
    resetOauth2Properties(): void;
    get oauth2PropertiesInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOauth2Properties | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics {
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics | undefined);
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode {
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode | undefined);
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#cluster_identifier AppflowConnectorProfile#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#data_api_role_arn AppflowConnectorProfile#data_api_role_arn}
    */
    readonly dataApiRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#database_name AppflowConnectorProfile#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#database_url AppflowConnectorProfile#database_url}
    */
    readonly databaseUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#role_arn AppflowConnectorProfile#role_arn}
    */
    readonly roleArn: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string | undefined;
    private _dataApiRoleArn?;
    get dataApiRoleArn(): string;
    set dataApiRoleArn(value: string);
    resetDataApiRoleArn(): void;
    get dataApiRoleArnInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _databaseUrl?;
    get databaseUrl(): string;
    set databaseUrl(value: string);
    resetDatabaseUrl(): void;
    get databaseUrlInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#is_sandbox_environment AppflowConnectorProfile#is_sandbox_environment}
    */
    readonly isSandboxEnvironment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#use_privatelink_for_metadata_and_authorization AppflowConnectorProfile#use_privatelink_for_metadata_and_authorization}
    */
    readonly usePrivatelinkForMetadataAndAuthorization?: boolean | cdktf.IResolvable;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    resetInstanceUrl(): void;
    get instanceUrlInput(): string | undefined;
    private _isSandboxEnvironment?;
    get isSandboxEnvironment(): boolean | cdktf.IResolvable;
    set isSandboxEnvironment(value: boolean | cdktf.IResolvable);
    resetIsSandboxEnvironment(): void;
    get isSandboxEnvironmentInput(): boolean | cdktf.IResolvable | undefined;
    private _usePrivatelinkForMetadataAndAuthorization?;
    get usePrivatelinkForMetadataAndAuthorization(): boolean | cdktf.IResolvable;
    set usePrivatelinkForMetadataAndAuthorization(value: boolean | cdktf.IResolvable);
    resetUsePrivatelinkForMetadataAndAuthorization(): void;
    get usePrivatelinkForMetadataAndAuthorizationInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#auth_code_url AppflowConnectorProfile#auth_code_url}
    */
    readonly authCodeUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_scopes AppflowConnectorProfile#oauth_scopes}
    */
    readonly oauthScopes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#token_url AppflowConnectorProfile#token_url}
    */
    readonly tokenUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties | undefined);
    private _authCodeUrl?;
    get authCodeUrl(): string;
    set authCodeUrl(value: string);
    get authCodeUrlInput(): string | undefined;
    private _oauthScopes?;
    get oauthScopes(): string[];
    set oauthScopes(value: string[]);
    get oauthScopesInput(): string[] | undefined;
    private _tokenUrl?;
    get tokenUrl(): string;
    set tokenUrl(value: string);
    get tokenUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#application_host_url AppflowConnectorProfile#application_host_url}
    */
    readonly applicationHostUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#application_service_path AppflowConnectorProfile#application_service_path}
    */
    readonly applicationServicePath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#client_number AppflowConnectorProfile#client_number}
    */
    readonly clientNumber: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#logon_language AppflowConnectorProfile#logon_language}
    */
    readonly logonLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#port_number AppflowConnectorProfile#port_number}
    */
    readonly portNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
    */
    readonly privateLinkServiceName?: string;
    /**
    * oauth_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#oauth_properties AppflowConnectorProfile#oauth_properties}
    */
    readonly oauthProperties?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined);
    private _applicationHostUrl?;
    get applicationHostUrl(): string;
    set applicationHostUrl(value: string);
    get applicationHostUrlInput(): string | undefined;
    private _applicationServicePath?;
    get applicationServicePath(): string;
    set applicationServicePath(value: string);
    get applicationServicePathInput(): string | undefined;
    private _clientNumber?;
    get clientNumber(): string;
    set clientNumber(value: string);
    get clientNumberInput(): string | undefined;
    private _logonLanguage?;
    get logonLanguage(): string;
    set logonLanguage(value: string);
    resetLogonLanguage(): void;
    get logonLanguageInput(): string | undefined;
    private _portNumber?;
    get portNumber(): number;
    set portNumber(value: number);
    get portNumberInput(): number | undefined;
    private _privateLinkServiceName?;
    get privateLinkServiceName(): string;
    set privateLinkServiceName(value: string);
    resetPrivateLinkServiceName(): void;
    get privateLinkServiceNameInput(): string | undefined;
    private _oauthProperties;
    get oauthProperties(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthPropertiesOutputReference;
    putOauthProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties): void;
    resetOauthProperties(): void;
    get oauthPropertiesInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOauthProperties | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular {
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular | undefined);
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#account_name AppflowConnectorProfile#account_name}
    */
    readonly accountName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#bucket_name AppflowConnectorProfile#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#bucket_prefix AppflowConnectorProfile#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#private_link_service_name AppflowConnectorProfile#private_link_service_name}
    */
    readonly privateLinkServiceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#region AppflowConnectorProfile#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#stage AppflowConnectorProfile#stage}
    */
    readonly stage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#warehouse AppflowConnectorProfile#warehouse}
    */
    readonly warehouse: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined);
    private _accountName?;
    get accountName(): string;
    set accountName(value: string);
    resetAccountName(): void;
    get accountNameInput(): string | undefined;
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _privateLinkServiceName?;
    get privateLinkServiceName(): string;
    set privateLinkServiceName(value: string);
    resetPrivateLinkServiceName(): void;
    get privateLinkServiceNameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    get stageInput(): string | undefined;
    private _warehouse?;
    get warehouse(): string;
    set warehouse(value: string);
    get warehouseInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro {
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro | undefined);
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#instance_url AppflowConnectorProfile#instance_url}
    */
    readonly instanceUrl: string;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined);
    private _instanceUrl?;
    get instanceUrl(): string;
    set instanceUrl(value: string);
    get instanceUrlInput(): string | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties {
    /**
    * amplitude block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#amplitude AppflowConnectorProfile#amplitude}
    */
    readonly amplitude?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude;
    /**
    * custom_connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#custom_connector AppflowConnectorProfile#custom_connector}
    */
    readonly customConnector?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector;
    /**
    * datadog block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#datadog AppflowConnectorProfile#datadog}
    */
    readonly datadog?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog;
    /**
    * dynatrace block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#dynatrace AppflowConnectorProfile#dynatrace}
    */
    readonly dynatrace?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace;
    /**
    * google_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#google_analytics AppflowConnectorProfile#google_analytics}
    */
    readonly googleAnalytics?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics;
    /**
    * honeycode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#honeycode AppflowConnectorProfile#honeycode}
    */
    readonly honeycode?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode;
    /**
    * infor_nexus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#infor_nexus AppflowConnectorProfile#infor_nexus}
    */
    readonly inforNexus?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus;
    /**
    * marketo block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#marketo AppflowConnectorProfile#marketo}
    */
    readonly marketo?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo;
    /**
    * redshift block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#redshift AppflowConnectorProfile#redshift}
    */
    readonly redshift?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift;
    /**
    * salesforce block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#salesforce AppflowConnectorProfile#salesforce}
    */
    readonly salesforce?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce;
    /**
    * sapo_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#sapo_data AppflowConnectorProfile#sapo_data}
    */
    readonly sapoData?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData;
    /**
    * service_now block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#service_now AppflowConnectorProfile#service_now}
    */
    readonly serviceNow?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow;
    /**
    * singular block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#singular AppflowConnectorProfile#singular}
    */
    readonly singular?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular;
    /**
    * slack block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#slack AppflowConnectorProfile#slack}
    */
    readonly slack?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack;
    /**
    * snowflake block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#snowflake AppflowConnectorProfile#snowflake}
    */
    readonly snowflake?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake;
    /**
    * trendmicro block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#trendmicro AppflowConnectorProfile#trendmicro}
    */
    readonly trendmicro?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro;
    /**
    * veeva block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#veeva AppflowConnectorProfile#veeva}
    */
    readonly veeva?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva;
    /**
    * zendesk block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#zendesk AppflowConnectorProfile#zendesk}
    */
    readonly zendesk?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk;
}
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any;
export declare function appflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference | AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): any;
export declare class AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined);
    private _amplitude;
    get amplitude(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitudeOutputReference;
    putAmplitude(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude): void;
    resetAmplitude(): void;
    get amplitudeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesAmplitude | undefined;
    private _customConnector;
    get customConnector(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnectorOutputReference;
    putCustomConnector(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector): void;
    resetCustomConnector(): void;
    get customConnectorInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesCustomConnector | undefined;
    private _datadog;
    get datadog(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadogOutputReference;
    putDatadog(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog): void;
    resetDatadog(): void;
    get datadogInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDatadog | undefined;
    private _dynatrace;
    get dynatrace(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatraceOutputReference;
    putDynatrace(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace): void;
    resetDynatrace(): void;
    get dynatraceInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace | undefined;
    private _googleAnalytics;
    get googleAnalytics(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalyticsOutputReference;
    putGoogleAnalytics(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics): void;
    resetGoogleAnalytics(): void;
    get googleAnalyticsInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesGoogleAnalytics | undefined;
    private _honeycode;
    get honeycode(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycodeOutputReference;
    putHoneycode(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode): void;
    resetHoneycode(): void;
    get honeycodeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesHoneycode | undefined;
    private _inforNexus;
    get inforNexus(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexusOutputReference;
    putInforNexus(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus): void;
    resetInforNexus(): void;
    get inforNexusInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesInforNexus | undefined;
    private _marketo;
    get marketo(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketoOutputReference;
    putMarketo(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo): void;
    resetMarketo(): void;
    get marketoInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesMarketo | undefined;
    private _redshift;
    get redshift(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshiftOutputReference;
    putRedshift(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift): void;
    resetRedshift(): void;
    get redshiftInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift | undefined;
    private _salesforce;
    get salesforce(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforceOutputReference;
    putSalesforce(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce): void;
    resetSalesforce(): void;
    get salesforceInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce | undefined;
    private _sapoData;
    get sapoData(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoDataOutputReference;
    putSapoData(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData): void;
    resetSapoData(): void;
    get sapoDataInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSapoData | undefined;
    private _serviceNow;
    get serviceNow(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNowOutputReference;
    putServiceNow(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow): void;
    resetServiceNow(): void;
    get serviceNowInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesServiceNow | undefined;
    private _singular;
    get singular(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingularOutputReference;
    putSingular(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular): void;
    resetSingular(): void;
    get singularInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSingular | undefined;
    private _slack;
    get slack(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlackOutputReference;
    putSlack(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack): void;
    resetSlack(): void;
    get slackInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSlack | undefined;
    private _snowflake;
    get snowflake(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflakeOutputReference;
    putSnowflake(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake): void;
    resetSnowflake(): void;
    get snowflakeInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake | undefined;
    private _trendmicro;
    get trendmicro(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicroOutputReference;
    putTrendmicro(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro): void;
    resetTrendmicro(): void;
    get trendmicroInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesTrendmicro | undefined;
    private _veeva;
    get veeva(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeevaOutputReference;
    putVeeva(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva): void;
    resetVeeva(): void;
    get veevaInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesVeeva | undefined;
    private _zendesk;
    get zendesk(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendeskOutputReference;
    putZendesk(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk): void;
    resetZendesk(): void;
    get zendeskInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesZendesk | undefined;
}
export interface AppflowConnectorProfileConnectorProfileConfig {
    /**
    * connector_profile_credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connector_profile_credentials AppflowConnectorProfile#connector_profile_credentials}
    */
    readonly connectorProfileCredentials: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials;
    /**
    * connector_profile_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#connector_profile_properties AppflowConnectorProfile#connector_profile_properties}
    */
    readonly connectorProfileProperties: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties;
}
export declare function appflowConnectorProfileConnectorProfileConfigToTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigOutputReference | AppflowConnectorProfileConnectorProfileConfig): any;
export declare function appflowConnectorProfileConnectorProfileConfigToHclTerraform(struct?: AppflowConnectorProfileConnectorProfileConfigOutputReference | AppflowConnectorProfileConnectorProfileConfig): any;
export declare class AppflowConnectorProfileConnectorProfileConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppflowConnectorProfileConnectorProfileConfig | undefined;
    set internalValue(value: AppflowConnectorProfileConnectorProfileConfig | undefined);
    private _connectorProfileCredentials;
    get connectorProfileCredentials(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentialsOutputReference;
    putConnectorProfileCredentials(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials): void;
    get connectorProfileCredentialsInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileCredentials | undefined;
    private _connectorProfileProperties;
    get connectorProfileProperties(): AppflowConnectorProfileConnectorProfileConfigConnectorProfilePropertiesOutputReference;
    putConnectorProfileProperties(value: AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties): void;
    get connectorProfilePropertiesInput(): AppflowConnectorProfileConnectorProfileConfigConnectorProfileProperties | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile aws_appflow_connector_profile}
*/
export declare class AppflowConnectorProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appflow_connector_profile";
    /**
    * Generates CDKTF code for importing a AppflowConnectorProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppflowConnectorProfile to import
    * @param importFromId The id of the existing AppflowConnectorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppflowConnectorProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appflow_connector_profile aws_appflow_connector_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppflowConnectorProfileConfig
    */
    constructor(scope: Construct, id: string, config: AppflowConnectorProfileConfig);
    get arn(): string;
    private _connectionMode?;
    get connectionMode(): string;
    set connectionMode(value: string);
    get connectionModeInput(): string | undefined;
    private _connectorLabel?;
    get connectorLabel(): string;
    set connectorLabel(value: string);
    resetConnectorLabel(): void;
    get connectorLabelInput(): string | undefined;
    private _connectorType?;
    get connectorType(): string;
    set connectorType(value: string);
    get connectorTypeInput(): string | undefined;
    get credentialsArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsArn?;
    get kmsArn(): string;
    set kmsArn(value: string);
    resetKmsArn(): void;
    get kmsArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _connectorProfileConfig;
    get connectorProfileConfig(): AppflowConnectorProfileConnectorProfileConfigOutputReference;
    putConnectorProfileConfig(value: AppflowConnectorProfileConnectorProfileConfig): void;
    get connectorProfileConfigInput(): AppflowConnectorProfileConnectorProfileConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
