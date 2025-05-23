/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#id LbListenerRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#listener_arn LbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#priority LbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#tags LbListenerRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#tags_all LbListenerRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#action LbListenerRule#action}
    */
    readonly action: LbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#condition LbListenerRule#condition}
    */
    readonly condition: LbListenerRuleCondition[] | cdktf.IResolvable;
}
export interface LbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#user_pool_arn LbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#user_pool_client_id LbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#user_pool_domain LbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function lbListenerRuleActionAuthenticateCognitoToTerraform(struct?: LbListenerRuleActionAuthenticateCognitoOutputReference | LbListenerRuleActionAuthenticateCognito): any;
export declare function lbListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: LbListenerRuleActionAuthenticateCognitoOutputReference | LbListenerRuleActionAuthenticateCognito): any;
export declare class LbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionAuthenticateCognito | undefined;
    set internalValue(value: LbListenerRuleActionAuthenticateCognito | undefined);
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
export interface LbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#authorization_endpoint LbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#client_id LbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#client_secret LbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#issuer LbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#token_endpoint LbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#user_info_endpoint LbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function lbListenerRuleActionAuthenticateOidcToTerraform(struct?: LbListenerRuleActionAuthenticateOidcOutputReference | LbListenerRuleActionAuthenticateOidc): any;
export declare function lbListenerRuleActionAuthenticateOidcToHclTerraform(struct?: LbListenerRuleActionAuthenticateOidcOutputReference | LbListenerRuleActionAuthenticateOidc): any;
export declare class LbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionAuthenticateOidc | undefined;
    set internalValue(value: LbListenerRuleActionAuthenticateOidc | undefined);
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
export interface LbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#content_type LbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#message_body LbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}
    */
    readonly statusCode?: string;
}
export declare function lbListenerRuleActionFixedResponseToTerraform(struct?: LbListenerRuleActionFixedResponseOutputReference | LbListenerRuleActionFixedResponse): any;
export declare function lbListenerRuleActionFixedResponseToHclTerraform(struct?: LbListenerRuleActionFixedResponseOutputReference | LbListenerRuleActionFixedResponse): any;
export declare class LbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionFixedResponse | undefined;
    set internalValue(value: LbListenerRuleActionFixedResponse | undefined);
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
export interface LbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#duration LbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#enabled LbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function lbListenerRuleActionForwardStickinessToTerraform(struct?: LbListenerRuleActionForwardStickinessOutputReference | LbListenerRuleActionForwardStickiness): any;
export declare function lbListenerRuleActionForwardStickinessToHclTerraform(struct?: LbListenerRuleActionForwardStickinessOutputReference | LbListenerRuleActionForwardStickiness): any;
export declare class LbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionForwardStickiness | undefined;
    set internalValue(value: LbListenerRuleActionForwardStickiness | undefined);
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
export interface LbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#arn LbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#weight LbListenerRule#weight}
    */
    readonly weight?: number;
}
export declare function lbListenerRuleActionForwardTargetGroupToTerraform(struct?: LbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare function lbListenerRuleActionForwardTargetGroupToHclTerraform(struct?: LbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare class LbListenerRuleActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined);
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
export declare class LbListenerRuleActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerRuleActionForwardTargetGroupOutputReference;
}
export interface LbListenerRuleActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#stickiness LbListenerRule#stickiness}
    */
    readonly stickiness?: LbListenerRuleActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#target_group LbListenerRule#target_group}
    */
    readonly targetGroup: LbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
}
export declare function lbListenerRuleActionForwardToTerraform(struct?: LbListenerRuleActionForwardOutputReference | LbListenerRuleActionForward): any;
export declare function lbListenerRuleActionForwardToHclTerraform(struct?: LbListenerRuleActionForwardOutputReference | LbListenerRuleActionForward): any;
export declare class LbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionForward | undefined;
    set internalValue(value: LbListenerRuleActionForward | undefined);
    private _stickiness;
    get stickiness(): LbListenerRuleActionForwardStickinessOutputReference;
    putStickiness(value: LbListenerRuleActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbListenerRuleActionForwardStickiness | undefined;
    private _targetGroup;
    get targetGroup(): LbListenerRuleActionForwardTargetGroupList;
    putTargetGroup(value: LbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable): void;
    get targetGroupInput(): cdktf.IResolvable | LbListenerRuleActionForwardTargetGroup[] | undefined;
}
export interface LbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#host LbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#path LbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#port LbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#protocol LbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#query LbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#status_code LbListenerRule#status_code}
    */
    readonly statusCode: string;
}
export declare function lbListenerRuleActionRedirectToTerraform(struct?: LbListenerRuleActionRedirectOutputReference | LbListenerRuleActionRedirect): any;
export declare function lbListenerRuleActionRedirectToHclTerraform(struct?: LbListenerRuleActionRedirectOutputReference | LbListenerRuleActionRedirect): any;
export declare class LbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleActionRedirect | undefined;
    set internalValue(value: LbListenerRuleActionRedirect | undefined);
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
export interface LbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#order LbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#target_group_arn LbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#type LbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#authenticate_cognito LbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#authenticate_oidc LbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#fixed_response LbListenerRule#fixed_response}
    */
    readonly fixedResponse?: LbListenerRuleActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#forward LbListenerRule#forward}
    */
    readonly forward?: LbListenerRuleActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#redirect LbListenerRule#redirect}
    */
    readonly redirect?: LbListenerRuleActionRedirect;
}
export declare function lbListenerRuleActionToTerraform(struct?: LbListenerRuleAction | cdktf.IResolvable): any;
export declare function lbListenerRuleActionToHclTerraform(struct?: LbListenerRuleAction | cdktf.IResolvable): any;
export declare class LbListenerRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerRuleAction | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerRuleAction | cdktf.IResolvable | undefined);
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
    get authenticateCognito(): LbListenerRuleActionAuthenticateCognitoOutputReference;
    putAuthenticateCognito(value: LbListenerRuleActionAuthenticateCognito): void;
    resetAuthenticateCognito(): void;
    get authenticateCognitoInput(): LbListenerRuleActionAuthenticateCognito | undefined;
    private _authenticateOidc;
    get authenticateOidc(): LbListenerRuleActionAuthenticateOidcOutputReference;
    putAuthenticateOidc(value: LbListenerRuleActionAuthenticateOidc): void;
    resetAuthenticateOidc(): void;
    get authenticateOidcInput(): LbListenerRuleActionAuthenticateOidc | undefined;
    private _fixedResponse;
    get fixedResponse(): LbListenerRuleActionFixedResponseOutputReference;
    putFixedResponse(value: LbListenerRuleActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): LbListenerRuleActionFixedResponse | undefined;
    private _forward;
    get forward(): LbListenerRuleActionForwardOutputReference;
    putForward(value: LbListenerRuleActionForward): void;
    resetForward(): void;
    get forwardInput(): LbListenerRuleActionForward | undefined;
    private _redirect;
    get redirect(): LbListenerRuleActionRedirectOutputReference;
    putRedirect(value: LbListenerRuleActionRedirect): void;
    resetRedirect(): void;
    get redirectInput(): LbListenerRuleActionRedirect | undefined;
}
export declare class LbListenerRuleActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerRuleActionOutputReference;
}
export interface LbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHostHeaderToTerraform(struct?: LbListenerRuleConditionHostHeaderOutputReference | LbListenerRuleConditionHostHeader): any;
export declare function lbListenerRuleConditionHostHeaderToHclTerraform(struct?: LbListenerRuleConditionHostHeaderOutputReference | LbListenerRuleConditionHostHeader): any;
export declare class LbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleConditionHostHeader | undefined;
    set internalValue(value: LbListenerRuleConditionHostHeader | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface LbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#http_header_name LbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHttpHeaderToTerraform(struct?: LbListenerRuleConditionHttpHeaderOutputReference | LbListenerRuleConditionHttpHeader): any;
export declare function lbListenerRuleConditionHttpHeaderToHclTerraform(struct?: LbListenerRuleConditionHttpHeaderOutputReference | LbListenerRuleConditionHttpHeader): any;
export declare class LbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleConditionHttpHeader | undefined;
    set internalValue(value: LbListenerRuleConditionHttpHeader | undefined);
    private _httpHeaderName?;
    get httpHeaderName(): string;
    set httpHeaderName(value: string);
    get httpHeaderNameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface LbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionHttpRequestMethodToTerraform(struct?: LbListenerRuleConditionHttpRequestMethodOutputReference | LbListenerRuleConditionHttpRequestMethod): any;
export declare function lbListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: LbListenerRuleConditionHttpRequestMethodOutputReference | LbListenerRuleConditionHttpRequestMethod): any;
export declare class LbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleConditionHttpRequestMethod | undefined;
    set internalValue(value: LbListenerRuleConditionHttpRequestMethod | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface LbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionPathPatternToTerraform(struct?: LbListenerRuleConditionPathPatternOutputReference | LbListenerRuleConditionPathPattern): any;
export declare function lbListenerRuleConditionPathPatternToHclTerraform(struct?: LbListenerRuleConditionPathPatternOutputReference | LbListenerRuleConditionPathPattern): any;
export declare class LbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleConditionPathPattern | undefined;
    set internalValue(value: LbListenerRuleConditionPathPattern | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface LbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#key LbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#value LbListenerRule#value}
    */
    readonly value: string;
}
export declare function lbListenerRuleConditionQueryStringToTerraform(struct?: LbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare function lbListenerRuleConditionQueryStringToHclTerraform(struct?: LbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare class LbListenerRuleConditionQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerRuleConditionQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerRuleConditionQueryString | cdktf.IResolvable | undefined);
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
export declare class LbListenerRuleConditionQueryStringList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerRuleConditionQueryString[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerRuleConditionQueryStringOutputReference;
}
export interface LbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#values LbListenerRule#values}
    */
    readonly values: string[];
}
export declare function lbListenerRuleConditionSourceIpToTerraform(struct?: LbListenerRuleConditionSourceIpOutputReference | LbListenerRuleConditionSourceIp): any;
export declare function lbListenerRuleConditionSourceIpToHclTerraform(struct?: LbListenerRuleConditionSourceIpOutputReference | LbListenerRuleConditionSourceIp): any;
export declare class LbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerRuleConditionSourceIp | undefined;
    set internalValue(value: LbListenerRuleConditionSourceIp | undefined);
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export interface LbListenerRuleCondition {
    /**
    * host_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#host_header LbListenerRule#host_header}
    */
    readonly hostHeader?: LbListenerRuleConditionHostHeader;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#http_header LbListenerRule#http_header}
    */
    readonly httpHeader?: LbListenerRuleConditionHttpHeader;
    /**
    * http_request_method block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#http_request_method LbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod;
    /**
    * path_pattern block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#path_pattern LbListenerRule#path_pattern}
    */
    readonly pathPattern?: LbListenerRuleConditionPathPattern;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#query_string LbListenerRule#query_string}
    */
    readonly queryString?: LbListenerRuleConditionQueryString[] | cdktf.IResolvable;
    /**
    * source_ip block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#source_ip LbListenerRule#source_ip}
    */
    readonly sourceIp?: LbListenerRuleConditionSourceIp;
}
export declare function lbListenerRuleConditionToTerraform(struct?: LbListenerRuleCondition | cdktf.IResolvable): any;
export declare function lbListenerRuleConditionToHclTerraform(struct?: LbListenerRuleCondition | cdktf.IResolvable): any;
export declare class LbListenerRuleConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerRuleCondition | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerRuleCondition | cdktf.IResolvable | undefined);
    private _hostHeader;
    get hostHeader(): LbListenerRuleConditionHostHeaderOutputReference;
    putHostHeader(value: LbListenerRuleConditionHostHeader): void;
    resetHostHeader(): void;
    get hostHeaderInput(): LbListenerRuleConditionHostHeader | undefined;
    private _httpHeader;
    get httpHeader(): LbListenerRuleConditionHttpHeaderOutputReference;
    putHttpHeader(value: LbListenerRuleConditionHttpHeader): void;
    resetHttpHeader(): void;
    get httpHeaderInput(): LbListenerRuleConditionHttpHeader | undefined;
    private _httpRequestMethod;
    get httpRequestMethod(): LbListenerRuleConditionHttpRequestMethodOutputReference;
    putHttpRequestMethod(value: LbListenerRuleConditionHttpRequestMethod): void;
    resetHttpRequestMethod(): void;
    get httpRequestMethodInput(): LbListenerRuleConditionHttpRequestMethod | undefined;
    private _pathPattern;
    get pathPattern(): LbListenerRuleConditionPathPatternOutputReference;
    putPathPattern(value: LbListenerRuleConditionPathPattern): void;
    resetPathPattern(): void;
    get pathPatternInput(): LbListenerRuleConditionPathPattern | undefined;
    private _queryString;
    get queryString(): LbListenerRuleConditionQueryStringList;
    putQueryString(value: LbListenerRuleConditionQueryString[] | cdktf.IResolvable): void;
    resetQueryString(): void;
    get queryStringInput(): cdktf.IResolvable | LbListenerRuleConditionQueryString[] | undefined;
    private _sourceIp;
    get sourceIp(): LbListenerRuleConditionSourceIpOutputReference;
    putSourceIp(value: LbListenerRuleConditionSourceIp): void;
    resetSourceIp(): void;
    get sourceIpInput(): LbListenerRuleConditionSourceIp | undefined;
}
export declare class LbListenerRuleConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerRuleCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerRuleConditionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule aws_lb_listener_rule}
*/
export declare class LbListenerRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_listener_rule";
    /**
    * Generates CDKTF code for importing a LbListenerRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbListenerRule to import
    * @param importFromId The id of the existing LbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbListenerRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener_rule aws_lb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerRuleConfig
    */
    constructor(scope: Construct, id: string, config: LbListenerRuleConfig);
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
    get action(): LbListenerRuleActionList;
    putAction(value: LbListenerRuleAction[] | cdktf.IResolvable): void;
    get actionInput(): cdktf.IResolvable | LbListenerRuleAction[] | undefined;
    private _condition;
    get condition(): LbListenerRuleConditionList;
    putCondition(value: LbListenerRuleCondition[] | cdktf.IResolvable): void;
    get conditionInput(): cdktf.IResolvable | LbListenerRuleCondition[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
