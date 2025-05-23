/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#alpn_policy LbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#certificate_arn LbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#id LbListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#load_balancer_arn LbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#port LbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name LbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name LbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}
    */
    readonly routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_request_x_amzn_tls_version_header_name LbListener#routing_http_request_x_amzn_tls_version_header_name}
    */
    readonly routingHttpRequestXAmznTlsVersionHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_allow_credentials_header_value LbListener#routing_http_response_access_control_allow_credentials_header_value}
    */
    readonly routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_allow_headers_header_value LbListener#routing_http_response_access_control_allow_headers_header_value}
    */
    readonly routingHttpResponseAccessControlAllowHeadersHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_allow_methods_header_value LbListener#routing_http_response_access_control_allow_methods_header_value}
    */
    readonly routingHttpResponseAccessControlAllowMethodsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_allow_origin_header_value LbListener#routing_http_response_access_control_allow_origin_header_value}
    */
    readonly routingHttpResponseAccessControlAllowOriginHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_expose_headers_header_value LbListener#routing_http_response_access_control_expose_headers_header_value}
    */
    readonly routingHttpResponseAccessControlExposeHeadersHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_access_control_max_age_header_value LbListener#routing_http_response_access_control_max_age_header_value}
    */
    readonly routingHttpResponseAccessControlMaxAgeHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_content_security_policy_header_value LbListener#routing_http_response_content_security_policy_header_value}
    */
    readonly routingHttpResponseContentSecurityPolicyHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_server_enabled LbListener#routing_http_response_server_enabled}
    */
    readonly routingHttpResponseServerEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_strict_transport_security_header_value LbListener#routing_http_response_strict_transport_security_header_value}
    */
    readonly routingHttpResponseStrictTransportSecurityHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_x_content_type_options_header_value LbListener#routing_http_response_x_content_type_options_header_value}
    */
    readonly routingHttpResponseXContentTypeOptionsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#routing_http_response_x_frame_options_header_value LbListener#routing_http_response_x_frame_options_header_value}
    */
    readonly routingHttpResponseXFrameOptionsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#ssl_policy LbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#tags LbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#tags_all LbListener#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#tcp_idle_timeout_seconds LbListener#tcp_idle_timeout_seconds}
    */
    readonly tcpIdleTimeoutSeconds?: number;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#default_action LbListener#default_action}
    */
    readonly defaultAction: LbListenerDefaultAction[] | cdktf.IResolvable;
    /**
    * mutual_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#mutual_authentication LbListener#mutual_authentication}
    */
    readonly mutualAuthentication?: LbListenerMutualAuthentication;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#timeouts LbListener#timeouts}
    */
    readonly timeouts?: LbListenerTimeouts;
}
export interface LbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#user_pool_arn LbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#user_pool_client_id LbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#user_pool_domain LbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: LbListenerDefaultActionAuthenticateCognitoOutputReference | LbListenerDefaultActionAuthenticateCognito): any;
export declare function lbListenerDefaultActionAuthenticateCognitoToHclTerraform(struct?: LbListenerDefaultActionAuthenticateCognitoOutputReference | LbListenerDefaultActionAuthenticateCognito): any;
export declare class LbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: LbListenerDefaultActionAuthenticateCognito | undefined);
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
export interface LbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#authorization_endpoint LbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#client_id LbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#client_secret LbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#issuer LbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#token_endpoint LbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#user_info_endpoint LbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function lbListenerDefaultActionAuthenticateOidcToTerraform(struct?: LbListenerDefaultActionAuthenticateOidcOutputReference | LbListenerDefaultActionAuthenticateOidc): any;
export declare function lbListenerDefaultActionAuthenticateOidcToHclTerraform(struct?: LbListenerDefaultActionAuthenticateOidcOutputReference | LbListenerDefaultActionAuthenticateOidc): any;
export declare class LbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: LbListenerDefaultActionAuthenticateOidc | undefined);
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
export interface LbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#content_type LbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#message_body LbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#status_code LbListener#status_code}
    */
    readonly statusCode?: string;
}
export declare function lbListenerDefaultActionFixedResponseToTerraform(struct?: LbListenerDefaultActionFixedResponseOutputReference | LbListenerDefaultActionFixedResponse): any;
export declare function lbListenerDefaultActionFixedResponseToHclTerraform(struct?: LbListenerDefaultActionFixedResponseOutputReference | LbListenerDefaultActionFixedResponse): any;
export declare class LbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: LbListenerDefaultActionFixedResponse | undefined);
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
export interface LbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#duration LbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#enabled LbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickinessOutputReference | LbListenerDefaultActionForwardStickiness): any;
export declare function lbListenerDefaultActionForwardStickinessToHclTerraform(struct?: LbListenerDefaultActionForwardStickinessOutputReference | LbListenerDefaultActionForwardStickiness): any;
export declare class LbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: LbListenerDefaultActionForwardStickiness | undefined);
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
export interface LbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#arn LbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#weight LbListener#weight}
    */
    readonly weight?: number;
}
export declare function lbListenerDefaultActionForwardTargetGroupToTerraform(struct?: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any;
export declare function lbListenerDefaultActionForwardTargetGroupToHclTerraform(struct?: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any;
export declare class LbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined);
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
export declare class LbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerDefaultActionForwardTargetGroupOutputReference;
}
export interface LbListenerDefaultActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#stickiness LbListener#stickiness}
    */
    readonly stickiness?: LbListenerDefaultActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#target_group LbListener#target_group}
    */
    readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable;
}
export declare function lbListenerDefaultActionForwardToTerraform(struct?: LbListenerDefaultActionForwardOutputReference | LbListenerDefaultActionForward): any;
export declare function lbListenerDefaultActionForwardToHclTerraform(struct?: LbListenerDefaultActionForwardOutputReference | LbListenerDefaultActionForward): any;
export declare class LbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionForward | undefined;
    set internalValue(value: LbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): LbListenerDefaultActionForwardStickinessOutputReference;
    putStickiness(value: LbListenerDefaultActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbListenerDefaultActionForwardStickiness | undefined;
    private _targetGroup;
    get targetGroup(): LbListenerDefaultActionForwardTargetGroupList;
    putTargetGroup(value: LbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable): void;
    get targetGroupInput(): cdktf.IResolvable | LbListenerDefaultActionForwardTargetGroup[] | undefined;
}
export interface LbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#host LbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#path LbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#port LbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#query LbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#status_code LbListener#status_code}
    */
    readonly statusCode: string;
}
export declare function lbListenerDefaultActionRedirectToTerraform(struct?: LbListenerDefaultActionRedirectOutputReference | LbListenerDefaultActionRedirect): any;
export declare function lbListenerDefaultActionRedirectToHclTerraform(struct?: LbListenerDefaultActionRedirectOutputReference | LbListenerDefaultActionRedirect): any;
export declare class LbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerDefaultActionRedirect | undefined;
    set internalValue(value: LbListenerDefaultActionRedirect | undefined);
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
export interface LbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#order LbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#target_group_arn LbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#type LbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#authenticate_cognito LbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#authenticate_oidc LbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#fixed_response LbListener#fixed_response}
    */
    readonly fixedResponse?: LbListenerDefaultActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#forward LbListener#forward}
    */
    readonly forward?: LbListenerDefaultActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#redirect LbListener#redirect}
    */
    readonly redirect?: LbListenerDefaultActionRedirect;
}
export declare function lbListenerDefaultActionToTerraform(struct?: LbListenerDefaultAction | cdktf.IResolvable): any;
export declare function lbListenerDefaultActionToHclTerraform(struct?: LbListenerDefaultAction | cdktf.IResolvable): any;
export declare class LbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbListenerDefaultAction | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerDefaultAction | cdktf.IResolvable | undefined);
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
    get authenticateCognito(): LbListenerDefaultActionAuthenticateCognitoOutputReference;
    putAuthenticateCognito(value: LbListenerDefaultActionAuthenticateCognito): void;
    resetAuthenticateCognito(): void;
    get authenticateCognitoInput(): LbListenerDefaultActionAuthenticateCognito | undefined;
    private _authenticateOidc;
    get authenticateOidc(): LbListenerDefaultActionAuthenticateOidcOutputReference;
    putAuthenticateOidc(value: LbListenerDefaultActionAuthenticateOidc): void;
    resetAuthenticateOidc(): void;
    get authenticateOidcInput(): LbListenerDefaultActionAuthenticateOidc | undefined;
    private _fixedResponse;
    get fixedResponse(): LbListenerDefaultActionFixedResponseOutputReference;
    putFixedResponse(value: LbListenerDefaultActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): LbListenerDefaultActionFixedResponse | undefined;
    private _forward;
    get forward(): LbListenerDefaultActionForwardOutputReference;
    putForward(value: LbListenerDefaultActionForward): void;
    resetForward(): void;
    get forwardInput(): LbListenerDefaultActionForward | undefined;
    private _redirect;
    get redirect(): LbListenerDefaultActionRedirectOutputReference;
    putRedirect(value: LbListenerDefaultActionRedirect): void;
    resetRedirect(): void;
    get redirectInput(): LbListenerDefaultActionRedirect | undefined;
}
export declare class LbListenerDefaultActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbListenerDefaultAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbListenerDefaultActionOutputReference;
}
export interface LbListenerMutualAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#advertise_trust_store_ca_names LbListener#advertise_trust_store_ca_names}
    */
    readonly advertiseTrustStoreCaNames?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#ignore_client_certificate_expiry LbListener#ignore_client_certificate_expiry}
    */
    readonly ignoreClientCertificateExpiry?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#mode LbListener#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#trust_store_arn LbListener#trust_store_arn}
    */
    readonly trustStoreArn?: string;
}
export declare function lbListenerMutualAuthenticationToTerraform(struct?: LbListenerMutualAuthenticationOutputReference | LbListenerMutualAuthentication): any;
export declare function lbListenerMutualAuthenticationToHclTerraform(struct?: LbListenerMutualAuthenticationOutputReference | LbListenerMutualAuthentication): any;
export declare class LbListenerMutualAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerMutualAuthentication | undefined;
    set internalValue(value: LbListenerMutualAuthentication | undefined);
    private _advertiseTrustStoreCaNames?;
    get advertiseTrustStoreCaNames(): string;
    set advertiseTrustStoreCaNames(value: string);
    resetAdvertiseTrustStoreCaNames(): void;
    get advertiseTrustStoreCaNamesInput(): string | undefined;
    private _ignoreClientCertificateExpiry?;
    get ignoreClientCertificateExpiry(): boolean | cdktf.IResolvable;
    set ignoreClientCertificateExpiry(value: boolean | cdktf.IResolvable);
    resetIgnoreClientCertificateExpiry(): void;
    get ignoreClientCertificateExpiryInput(): boolean | cdktf.IResolvable | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
    private _trustStoreArn?;
    get trustStoreArn(): string;
    set trustStoreArn(value: string);
    resetTrustStoreArn(): void;
    get trustStoreArnInput(): string | undefined;
}
export interface LbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#create LbListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#update LbListener#update}
    */
    readonly update?: string;
}
export declare function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeouts | cdktf.IResolvable): any;
export declare function lbListenerTimeoutsToHclTerraform(struct?: LbListenerTimeouts | cdktf.IResolvable): any;
export declare class LbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LbListenerTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener aws_lb_listener}
*/
export declare class LbListener extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_listener";
    /**
    * Generates CDKTF code for importing a LbListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbListener to import
    * @param importFromId The id of the existing LbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_listener aws_lb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerConfig
    */
    constructor(scope: Construct, id: string, config: LbListenerConfig);
    private _alpnPolicy?;
    get alpnPolicy(): string;
    set alpnPolicy(value: string);
    resetAlpnPolicy(): void;
    get alpnPolicyInput(): string | undefined;
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    get loadBalancerArnInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertIssuerHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertIssuerHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertIssuerHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertIssuerHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertLeafHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertLeafHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertLeafHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertLeafHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertLeafHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertSubjectHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertSubjectHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertSubjectHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertSubjectHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznMtlsClientcertValidityHeaderName?;
    get routingHttpRequestXAmznMtlsClientcertValidityHeaderName(): string;
    set routingHttpRequestXAmznMtlsClientcertValidityHeaderName(value: string);
    resetRoutingHttpRequestXAmznMtlsClientcertValidityHeaderName(): void;
    get routingHttpRequestXAmznMtlsClientcertValidityHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznTlsCipherSuiteHeaderName?;
    get routingHttpRequestXAmznTlsCipherSuiteHeaderName(): string;
    set routingHttpRequestXAmznTlsCipherSuiteHeaderName(value: string);
    resetRoutingHttpRequestXAmznTlsCipherSuiteHeaderName(): void;
    get routingHttpRequestXAmznTlsCipherSuiteHeaderNameInput(): string | undefined;
    private _routingHttpRequestXAmznTlsVersionHeaderName?;
    get routingHttpRequestXAmznTlsVersionHeaderName(): string;
    set routingHttpRequestXAmznTlsVersionHeaderName(value: string);
    resetRoutingHttpRequestXAmznTlsVersionHeaderName(): void;
    get routingHttpRequestXAmznTlsVersionHeaderNameInput(): string | undefined;
    private _routingHttpResponseAccessControlAllowCredentialsHeaderValue?;
    get routingHttpResponseAccessControlAllowCredentialsHeaderValue(): string;
    set routingHttpResponseAccessControlAllowCredentialsHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlAllowCredentialsHeaderValue(): void;
    get routingHttpResponseAccessControlAllowCredentialsHeaderValueInput(): string | undefined;
    private _routingHttpResponseAccessControlAllowHeadersHeaderValue?;
    get routingHttpResponseAccessControlAllowHeadersHeaderValue(): string;
    set routingHttpResponseAccessControlAllowHeadersHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlAllowHeadersHeaderValue(): void;
    get routingHttpResponseAccessControlAllowHeadersHeaderValueInput(): string | undefined;
    private _routingHttpResponseAccessControlAllowMethodsHeaderValue?;
    get routingHttpResponseAccessControlAllowMethodsHeaderValue(): string;
    set routingHttpResponseAccessControlAllowMethodsHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlAllowMethodsHeaderValue(): void;
    get routingHttpResponseAccessControlAllowMethodsHeaderValueInput(): string | undefined;
    private _routingHttpResponseAccessControlAllowOriginHeaderValue?;
    get routingHttpResponseAccessControlAllowOriginHeaderValue(): string;
    set routingHttpResponseAccessControlAllowOriginHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlAllowOriginHeaderValue(): void;
    get routingHttpResponseAccessControlAllowOriginHeaderValueInput(): string | undefined;
    private _routingHttpResponseAccessControlExposeHeadersHeaderValue?;
    get routingHttpResponseAccessControlExposeHeadersHeaderValue(): string;
    set routingHttpResponseAccessControlExposeHeadersHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlExposeHeadersHeaderValue(): void;
    get routingHttpResponseAccessControlExposeHeadersHeaderValueInput(): string | undefined;
    private _routingHttpResponseAccessControlMaxAgeHeaderValue?;
    get routingHttpResponseAccessControlMaxAgeHeaderValue(): string;
    set routingHttpResponseAccessControlMaxAgeHeaderValue(value: string);
    resetRoutingHttpResponseAccessControlMaxAgeHeaderValue(): void;
    get routingHttpResponseAccessControlMaxAgeHeaderValueInput(): string | undefined;
    private _routingHttpResponseContentSecurityPolicyHeaderValue?;
    get routingHttpResponseContentSecurityPolicyHeaderValue(): string;
    set routingHttpResponseContentSecurityPolicyHeaderValue(value: string);
    resetRoutingHttpResponseContentSecurityPolicyHeaderValue(): void;
    get routingHttpResponseContentSecurityPolicyHeaderValueInput(): string | undefined;
    private _routingHttpResponseServerEnabled?;
    get routingHttpResponseServerEnabled(): boolean | cdktf.IResolvable;
    set routingHttpResponseServerEnabled(value: boolean | cdktf.IResolvable);
    resetRoutingHttpResponseServerEnabled(): void;
    get routingHttpResponseServerEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _routingHttpResponseStrictTransportSecurityHeaderValue?;
    get routingHttpResponseStrictTransportSecurityHeaderValue(): string;
    set routingHttpResponseStrictTransportSecurityHeaderValue(value: string);
    resetRoutingHttpResponseStrictTransportSecurityHeaderValue(): void;
    get routingHttpResponseStrictTransportSecurityHeaderValueInput(): string | undefined;
    private _routingHttpResponseXContentTypeOptionsHeaderValue?;
    get routingHttpResponseXContentTypeOptionsHeaderValue(): string;
    set routingHttpResponseXContentTypeOptionsHeaderValue(value: string);
    resetRoutingHttpResponseXContentTypeOptionsHeaderValue(): void;
    get routingHttpResponseXContentTypeOptionsHeaderValueInput(): string | undefined;
    private _routingHttpResponseXFrameOptionsHeaderValue?;
    get routingHttpResponseXFrameOptionsHeaderValue(): string;
    set routingHttpResponseXFrameOptionsHeaderValue(value: string);
    resetRoutingHttpResponseXFrameOptionsHeaderValue(): void;
    get routingHttpResponseXFrameOptionsHeaderValueInput(): string | undefined;
    private _sslPolicy?;
    get sslPolicy(): string;
    set sslPolicy(value: string);
    resetSslPolicy(): void;
    get sslPolicyInput(): string | undefined;
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
    private _tcpIdleTimeoutSeconds?;
    get tcpIdleTimeoutSeconds(): number;
    set tcpIdleTimeoutSeconds(value: number);
    resetTcpIdleTimeoutSeconds(): void;
    get tcpIdleTimeoutSecondsInput(): number | undefined;
    private _defaultAction;
    get defaultAction(): LbListenerDefaultActionList;
    putDefaultAction(value: LbListenerDefaultAction[] | cdktf.IResolvable): void;
    get defaultActionInput(): cdktf.IResolvable | LbListenerDefaultAction[] | undefined;
    private _mutualAuthentication;
    get mutualAuthentication(): LbListenerMutualAuthenticationOutputReference;
    putMutualAuthentication(value: LbListenerMutualAuthentication): void;
    resetMutualAuthentication(): void;
    get mutualAuthenticationInput(): LbListenerMutualAuthentication | undefined;
    private _timeouts;
    get timeouts(): LbListenerTimeoutsOutputReference;
    putTimeouts(value: LbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
