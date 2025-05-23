/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#id AlbListenerRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#listener_arn AlbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#priority AlbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#tags AlbListenerRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#tags_all AlbListenerRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#action AlbListenerRule#action}
    */
    readonly action: AlbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#condition AlbListenerRule#condition}
    */
    readonly condition: AlbListenerRuleCondition[] | cdktf.IResolvable;
}
export interface AlbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#user_pool_arn AlbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#user_pool_client_id AlbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#user_pool_domain AlbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function albListenerRuleActionAuthenticateCognitoToTerraform(struct?: AlbListenerRuleActionAuthenticateCognitoOutputReference | AlbListenerRuleActionAuthenticateCognito): any;
export declare function albListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: AlbListenerRuleActionAuthenticateCognitoOutputReference | AlbListenerRuleActionAuthenticateCognito): any;
export declare class AlbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionAuthenticateCognito | undefined;
    set internalValue(value: AlbListenerRuleActionAuthenticateCognito | undefined);
    private _authenticationRequestExtraParams?;
    get authenticationRequestExtraParams(): {
        [key: string]: string;
    };
    set authenticationRequestExtraParams(value: {
        [key: string]: string;
    });
    resetAuthenticationRequestExtraParams(): void;
    get authenticationRequestExtraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _onUnauthenticatedRequest?;
    get onUnauthenticatedRequest(): string;
    set onUnauthenticatedRequest(value: string);
    resetOnUnauthenticatedRequest(): void;
    get onUnauthenticatedRequestInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
    private _sessionCookieName?;
    get sessionCookieName(): string;
    set sessionCookieName(value: string);
    resetSessionCookieName(): void;
    get sessionCookieNameInput(): string | undefined;
    private _sessionTimeout?;
    get sessionTimeout(): number;
    set sessionTimeout(value: number);
    resetSessionTimeout(): void;
    get sessionTimeoutInput(): number | undefined;
    private _userPoolArn?;
    get userPoolArn(): string;
    set userPoolArn(value: string);
    get userPoolArnInput(): string | undefined;
    private _userPoolClientId?;
    get userPoolClientId(): string;
    set userPoolClientId(value: string);
    get userPoolClientIdInput(): string | undefined;
    private _userPoolDomain?;
    get userPoolDomain(): string;
    set userPoolDomain(value: string);
    get userPoolDomainInput(): string | undefined;
}
export interface AlbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#authorization_endpoint AlbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#client_id AlbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#client_secret AlbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#issuer AlbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#token_endpoint AlbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#user_info_endpoint AlbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function albListenerRuleActionAuthenticateOidcToTerraform(struct?: AlbListenerRuleActionAuthenticateOidcOutputReference | AlbListenerRuleActionAuthenticateOidc): any;
export declare function albListenerRuleActionAuthenticateOidcToHclTerraform(struct?: AlbListenerRuleActionAuthenticateOidcOutputReference | AlbListenerRuleActionAuthenticateOidc): any;
export declare class AlbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionAuthenticateOidc | undefined;
    set internalValue(value: AlbListenerRuleActionAuthenticateOidc | undefined);
    private _authenticationRequestExtraParams?;
    get authenticationRequestExtraParams(): {
        [key: string]: string;
    };
    set authenticationRequestExtraParams(value: {
        [key: string]: string;
    });
    resetAuthenticationRequestExtraParams(): void;
    get authenticationRequestExtraParamsInput(): {
        [key: string]: string;
    } | undefined;
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
    private _onUnauthenticatedRequest?;
    get onUnauthenticatedRequest(): string;
    set onUnauthenticatedRequest(value: string);
    resetOnUnauthenticatedRequest(): void;
    get onUnauthenticatedRequestInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
    private _sessionCookieName?;
    get sessionCookieName(): string;
    set sessionCookieName(value: string);
    resetSessionCookieName(): void;
    get sessionCookieNameInput(): string | undefined;
    private _sessionTimeout?;
    get sessionTimeout(): number;
    set sessionTimeout(value: number);
    resetSessionTimeout(): void;
    get sessionTimeoutInput(): number | undefined;
    private _tokenEndpoint?;
    get tokenEndpoint(): string;
    set tokenEndpoint(value: string);
    get tokenEndpointInput(): string | undefined;
    private _userInfoEndpoint?;
    get userInfoEndpoint(): string;
    set userInfoEndpoint(value: string);
    get userInfoEndpointInput(): string | undefined;
}
export interface AlbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#content_type AlbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#message_body AlbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export declare function albListenerRuleActionFixedResponseToTerraform(struct?: AlbListenerRuleActionFixedResponseOutputReference | AlbListenerRuleActionFixedResponse): any;
export declare function albListenerRuleActionFixedResponseToHclTerraform(struct?: AlbListenerRuleActionFixedResponseOutputReference | AlbListenerRuleActionFixedResponse): any;
export declare class AlbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionFixedResponse | undefined;
    set internalValue(value: AlbListenerRuleActionFixedResponse | undefined);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _messageBody?;
    get messageBody(): string;
    set messageBody(value: string);
    resetMessageBody(): void;
    get messageBodyInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string | undefined;
}
export interface AlbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#duration AlbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#enabled AlbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function albListenerRuleActionForwardStickinessToTerraform(struct?: AlbListenerRuleActionForwardStickinessOutputReference | AlbListenerRuleActionForwardStickiness): any;
export declare function albListenerRuleActionForwardStickinessToHclTerraform(struct?: AlbListenerRuleActionForwardStickinessOutputReference | AlbListenerRuleActionForwardStickiness): any;
export declare class AlbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionForwardStickiness | undefined;
    set internalValue(value: AlbListenerRuleActionForwardStickiness | undefined);
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AlbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#arn AlbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#weight AlbListenerRule#weight}
    */
    readonly weight?: number;
}
export declare function albListenerRuleActionForwardTargetGroupToTerraform(struct?: AlbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare function albListenerRuleActionForwardTargetGroupToHclTerraform(struct?: AlbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare class AlbListenerRuleActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class AlbListenerRuleActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerRuleActionForwardTargetGroupOutputReference;
}
export interface AlbListenerRuleActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#stickiness AlbListenerRule#stickiness}
    */
    readonly stickiness?: AlbListenerRuleActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#target_group AlbListenerRule#target_group}
    */
    readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
}
export declare function albListenerRuleActionForwardToTerraform(struct?: AlbListenerRuleActionForwardOutputReference | AlbListenerRuleActionForward): any;
export declare function albListenerRuleActionForwardToHclTerraform(struct?: AlbListenerRuleActionForwardOutputReference | AlbListenerRuleActionForward): any;
export declare class AlbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionForward | undefined;
    set internalValue(value: AlbListenerRuleActionForward | undefined);
    private _stickiness;
    get stickiness(): AlbListenerRuleActionForwardStickinessOutputReference;
    putStickiness(value: AlbListenerRuleActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbListenerRuleActionForwardStickiness | undefined;
    private _targetGroup;
    get targetGroup(): AlbListenerRuleActionForwardTargetGroupList;
    putTargetGroup(value: AlbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable): void;
    get targetGroupInput(): cdktf.IResolvable | AlbListenerRuleActionForwardTargetGroup[] | undefined;
}
export interface AlbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#host AlbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#path AlbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#port AlbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#protocol AlbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#query AlbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#status_code AlbListenerRule#status_code}
    */
    readonly statusCode: string;
}
export declare function albListenerRuleActionRedirectToTerraform(struct?: AlbListenerRuleActionRedirectOutputReference | AlbListenerRuleActionRedirect): any;
export declare function albListenerRuleActionRedirectToHclTerraform(struct?: AlbListenerRuleActionRedirectOutputReference | AlbListenerRuleActionRedirect): any;
export declare class AlbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleActionRedirect | undefined;
    set internalValue(value: AlbListenerRuleActionRedirect | undefined);
    private _host?;
    get host(): string;
    set host(value: string);
    resetHost(): void;
    get hostInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _query?;
    get query(): string;
    set query(value: string);
    resetQuery(): void;
    get queryInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string | undefined;
}
export interface AlbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#order AlbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#target_group_arn AlbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#type AlbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#authenticate_cognito AlbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#authenticate_oidc AlbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#fixed_response AlbListenerRule#fixed_response}
    */
    readonly fixedResponse?: AlbListenerRuleActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#forward AlbListenerRule#forward}
    */
    readonly forward?: AlbListenerRuleActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#redirect AlbListenerRule#redirect}
    */
    readonly redirect?: AlbListenerRuleActionRedirect;
}
export declare function albListenerRuleActionToTerraform(struct?: AlbListenerRuleAction | cdktf.IResolvable): any;
export declare function albListenerRuleActionToHclTerraform(struct?: AlbListenerRuleAction | cdktf.IResolvable): any;
export declare class AlbListenerRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerRuleAction | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerRuleAction | cdktf.IResolvable | undefined);
    private _order?;
    get order(): number;
    set order(value: number);
    resetOrder(): void;
    get orderInput(): number | undefined;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    resetTargetGroupArn(): void;
    get targetGroupArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _authenticateCognito;
    get authenticateCognito(): AlbListenerRuleActionAuthenticateCognitoOutputReference;
    putAuthenticateCognito(value: AlbListenerRuleActionAuthenticateCognito): void;
    resetAuthenticateCognito(): void;
    get authenticateCognitoInput(): AlbListenerRuleActionAuthenticateCognito | undefined;
    private _authenticateOidc;
    get authenticateOidc(): AlbListenerRuleActionAuthenticateOidcOutputReference;
    putAuthenticateOidc(value: AlbListenerRuleActionAuthenticateOidc): void;
    resetAuthenticateOidc(): void;
    get authenticateOidcInput(): AlbListenerRuleActionAuthenticateOidc | undefined;
    private _fixedResponse;
    get fixedResponse(): AlbListenerRuleActionFixedResponseOutputReference;
    putFixedResponse(value: AlbListenerRuleActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): AlbListenerRuleActionFixedResponse | undefined;
    private _forward;
    get forward(): AlbListenerRuleActionForwardOutputReference;
    putForward(value: AlbListenerRuleActionForward): void;
    resetForward(): void;
    get forwardInput(): AlbListenerRuleActionForward | undefined;
    private _redirect;
    get redirect(): AlbListenerRuleActionRedirectOutputReference;
    putRedirect(value: AlbListenerRuleActionRedirect): void;
    resetRedirect(): void;
    get redirectInput(): AlbListenerRuleActionRedirect | undefined;
}
export declare class AlbListenerRuleActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerRuleActionOutputReference;
}
export interface AlbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHostHeaderToTerraform(struct?: AlbListenerRuleConditionHostHeaderOutputReference | AlbListenerRuleConditionHostHeader): any;
export declare function albListenerRuleConditionHostHeaderToHclTerraform(struct?: AlbListenerRuleConditionHostHeaderOutputReference | AlbListenerRuleConditionHostHeader): any;
export declare class AlbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleConditionHostHeader | undefined;
    set internalValue(value: AlbListenerRuleConditionHostHeader | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface AlbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#http_header_name AlbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHttpHeaderToTerraform(struct?: AlbListenerRuleConditionHttpHeaderOutputReference | AlbListenerRuleConditionHttpHeader): any;
export declare function albListenerRuleConditionHttpHeaderToHclTerraform(struct?: AlbListenerRuleConditionHttpHeaderOutputReference | AlbListenerRuleConditionHttpHeader): any;
export declare class AlbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleConditionHttpHeader | undefined;
    set internalValue(value: AlbListenerRuleConditionHttpHeader | undefined);
    private _httpHeaderName?;
    get httpHeaderName(): string;
    set httpHeaderName(value: string);
    get httpHeaderNameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface AlbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionHttpRequestMethodToTerraform(struct?: AlbListenerRuleConditionHttpRequestMethodOutputReference | AlbListenerRuleConditionHttpRequestMethod): any;
export declare function albListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: AlbListenerRuleConditionHttpRequestMethodOutputReference | AlbListenerRuleConditionHttpRequestMethod): any;
export declare class AlbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleConditionHttpRequestMethod | undefined;
    set internalValue(value: AlbListenerRuleConditionHttpRequestMethod | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface AlbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionPathPatternToTerraform(struct?: AlbListenerRuleConditionPathPatternOutputReference | AlbListenerRuleConditionPathPattern): any;
export declare function albListenerRuleConditionPathPatternToHclTerraform(struct?: AlbListenerRuleConditionPathPatternOutputReference | AlbListenerRuleConditionPathPattern): any;
export declare class AlbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleConditionPathPattern | undefined;
    set internalValue(value: AlbListenerRuleConditionPathPattern | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface AlbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#key AlbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#value AlbListenerRule#value}
    */
    readonly value: string;
}
export declare function albListenerRuleConditionQueryStringToTerraform(struct?: AlbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare function albListenerRuleConditionQueryStringToHclTerraform(struct?: AlbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare class AlbListenerRuleConditionQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerRuleConditionQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerRuleConditionQueryString | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AlbListenerRuleConditionQueryStringList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerRuleConditionQueryString[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerRuleConditionQueryStringOutputReference;
}
export interface AlbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#values AlbListenerRule#values}
    */
    readonly values: string[];
}
export declare function albListenerRuleConditionSourceIpToTerraform(struct?: AlbListenerRuleConditionSourceIpOutputReference | AlbListenerRuleConditionSourceIp): any;
export declare function albListenerRuleConditionSourceIpToHclTerraform(struct?: AlbListenerRuleConditionSourceIpOutputReference | AlbListenerRuleConditionSourceIp): any;
export declare class AlbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerRuleConditionSourceIp | undefined;
    set internalValue(value: AlbListenerRuleConditionSourceIp | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface AlbListenerRuleCondition {
    /**
    * host_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#host_header AlbListenerRule#host_header}
    */
    readonly hostHeader?: AlbListenerRuleConditionHostHeader;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#http_header AlbListenerRule#http_header}
    */
    readonly httpHeader?: AlbListenerRuleConditionHttpHeader;
    /**
    * http_request_method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#http_request_method AlbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod;
    /**
    * path_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#path_pattern AlbListenerRule#path_pattern}
    */
    readonly pathPattern?: AlbListenerRuleConditionPathPattern;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#query_string AlbListenerRule#query_string}
    */
    readonly queryString?: AlbListenerRuleConditionQueryString[] | cdktf.IResolvable;
    /**
    * source_ip block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#source_ip AlbListenerRule#source_ip}
    */
    readonly sourceIp?: AlbListenerRuleConditionSourceIp;
}
export declare function albListenerRuleConditionToTerraform(struct?: AlbListenerRuleCondition | cdktf.IResolvable): any;
export declare function albListenerRuleConditionToHclTerraform(struct?: AlbListenerRuleCondition | cdktf.IResolvable): any;
export declare class AlbListenerRuleConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerRuleCondition | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerRuleCondition | cdktf.IResolvable | undefined);
    private _hostHeader;
    get hostHeader(): AlbListenerRuleConditionHostHeaderOutputReference;
    putHostHeader(value: AlbListenerRuleConditionHostHeader): void;
    resetHostHeader(): void;
    get hostHeaderInput(): AlbListenerRuleConditionHostHeader | undefined;
    private _httpHeader;
    get httpHeader(): AlbListenerRuleConditionHttpHeaderOutputReference;
    putHttpHeader(value: AlbListenerRuleConditionHttpHeader): void;
    resetHttpHeader(): void;
    get httpHeaderInput(): AlbListenerRuleConditionHttpHeader | undefined;
    private _httpRequestMethod;
    get httpRequestMethod(): AlbListenerRuleConditionHttpRequestMethodOutputReference;
    putHttpRequestMethod(value: AlbListenerRuleConditionHttpRequestMethod): void;
    resetHttpRequestMethod(): void;
    get httpRequestMethodInput(): AlbListenerRuleConditionHttpRequestMethod | undefined;
    private _pathPattern;
    get pathPattern(): AlbListenerRuleConditionPathPatternOutputReference;
    putPathPattern(value: AlbListenerRuleConditionPathPattern): void;
    resetPathPattern(): void;
    get pathPatternInput(): AlbListenerRuleConditionPathPattern | undefined;
    private _queryString;
    get queryString(): AlbListenerRuleConditionQueryStringList;
    putQueryString(value: AlbListenerRuleConditionQueryString[] | cdktf.IResolvable): void;
    resetQueryString(): void;
    get queryStringInput(): cdktf.IResolvable | AlbListenerRuleConditionQueryString[] | undefined;
    private _sourceIp;
    get sourceIp(): AlbListenerRuleConditionSourceIpOutputReference;
    putSourceIp(value: AlbListenerRuleConditionSourceIp): void;
    resetSourceIp(): void;
    get sourceIpInput(): AlbListenerRuleConditionSourceIp | undefined;
}
export declare class AlbListenerRuleConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerRuleCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerRuleConditionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule aws_alb_listener_rule}
*/
export declare class AlbListenerRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_alb_listener_rule";
    /**
    * Generates CDKTF code for importing a AlbListenerRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AlbListenerRule to import
    * @param importFromId The id of the existing AlbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AlbListenerRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener_rule aws_alb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerRuleConfig
    */
    constructor(scope: Construct, id: string, config: AlbListenerRuleConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _action;
    get action(): AlbListenerRuleActionList;
    putAction(value: AlbListenerRuleAction[] | cdktf.IResolvable): void;
    get actionInput(): cdktf.IResolvable | AlbListenerRuleAction[] | undefined;
    private _condition;
    get condition(): AlbListenerRuleConditionList;
    putCondition(value: AlbListenerRuleCondition[] | cdktf.IResolvable): void;
    get conditionInput(): cdktf.IResolvable | AlbListenerRuleCondition[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
