/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#alpn_policy AlbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#certificate_arn AlbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#id AlbListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#port AlbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_issuer_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertIssuerHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_leaf_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertLeafHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_serial_number_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertSerialNumberHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_subject_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertSubjectHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name AlbListener#routing_http_request_x_amzn_mtls_clientcert_validity_header_name}
    */
    readonly routingHttpRequestXAmznMtlsClientcertValidityHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_cipher_suite_header_name AlbListener#routing_http_request_x_amzn_tls_cipher_suite_header_name}
    */
    readonly routingHttpRequestXAmznTlsCipherSuiteHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_request_x_amzn_tls_version_header_name AlbListener#routing_http_request_x_amzn_tls_version_header_name}
    */
    readonly routingHttpRequestXAmznTlsVersionHeaderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_allow_credentials_header_value AlbListener#routing_http_response_access_control_allow_credentials_header_value}
    */
    readonly routingHttpResponseAccessControlAllowCredentialsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_allow_headers_header_value AlbListener#routing_http_response_access_control_allow_headers_header_value}
    */
    readonly routingHttpResponseAccessControlAllowHeadersHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_allow_methods_header_value AlbListener#routing_http_response_access_control_allow_methods_header_value}
    */
    readonly routingHttpResponseAccessControlAllowMethodsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_allow_origin_header_value AlbListener#routing_http_response_access_control_allow_origin_header_value}
    */
    readonly routingHttpResponseAccessControlAllowOriginHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_expose_headers_header_value AlbListener#routing_http_response_access_control_expose_headers_header_value}
    */
    readonly routingHttpResponseAccessControlExposeHeadersHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_access_control_max_age_header_value AlbListener#routing_http_response_access_control_max_age_header_value}
    */
    readonly routingHttpResponseAccessControlMaxAgeHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_content_security_policy_header_value AlbListener#routing_http_response_content_security_policy_header_value}
    */
    readonly routingHttpResponseContentSecurityPolicyHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_server_enabled AlbListener#routing_http_response_server_enabled}
    */
    readonly routingHttpResponseServerEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_strict_transport_security_header_value AlbListener#routing_http_response_strict_transport_security_header_value}
    */
    readonly routingHttpResponseStrictTransportSecurityHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_x_content_type_options_header_value AlbListener#routing_http_response_x_content_type_options_header_value}
    */
    readonly routingHttpResponseXContentTypeOptionsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#routing_http_response_x_frame_options_header_value AlbListener#routing_http_response_x_frame_options_header_value}
    */
    readonly routingHttpResponseXFrameOptionsHeaderValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#ssl_policy AlbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#tags AlbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#tags_all AlbListener#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#tcp_idle_timeout_seconds AlbListener#tcp_idle_timeout_seconds}
    */
    readonly tcpIdleTimeoutSeconds?: number;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#default_action AlbListener#default_action}
    */
    readonly defaultAction: AlbListenerDefaultAction[] | cdktf.IResolvable;
    /**
    * mutual_authentication block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#mutual_authentication AlbListener#mutual_authentication}
    */
    readonly mutualAuthentication?: AlbListenerMutualAuthentication;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#timeouts AlbListener#timeouts}
    */
    readonly timeouts?: AlbListenerTimeouts;
}
export interface AlbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#user_pool_arn AlbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#user_pool_domain AlbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
}
export declare function albListenerDefaultActionAuthenticateCognitoToTerraform(struct?: AlbListenerDefaultActionAuthenticateCognitoOutputReference | AlbListenerDefaultActionAuthenticateCognito): any;
export declare function albListenerDefaultActionAuthenticateCognitoToHclTerraform(struct?: AlbListenerDefaultActionAuthenticateCognitoOutputReference | AlbListenerDefaultActionAuthenticateCognito): any;
export declare class AlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: AlbListenerDefaultActionAuthenticateCognito | undefined);
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
export interface AlbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#client_id AlbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#client_secret AlbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#issuer AlbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#token_endpoint AlbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function albListenerDefaultActionAuthenticateOidcToTerraform(struct?: AlbListenerDefaultActionAuthenticateOidcOutputReference | AlbListenerDefaultActionAuthenticateOidc): any;
export declare function albListenerDefaultActionAuthenticateOidcToHclTerraform(struct?: AlbListenerDefaultActionAuthenticateOidcOutputReference | AlbListenerDefaultActionAuthenticateOidc): any;
export declare class AlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: AlbListenerDefaultActionAuthenticateOidc | undefined);
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
export interface AlbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#content_type AlbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#message_body AlbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#status_code AlbListener#status_code}
    */
    readonly statusCode?: string;
}
export declare function albListenerDefaultActionFixedResponseToTerraform(struct?: AlbListenerDefaultActionFixedResponseOutputReference | AlbListenerDefaultActionFixedResponse): any;
export declare function albListenerDefaultActionFixedResponseToHclTerraform(struct?: AlbListenerDefaultActionFixedResponseOutputReference | AlbListenerDefaultActionFixedResponse): any;
export declare class AlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: AlbListenerDefaultActionFixedResponse | undefined);
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
export interface AlbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#duration AlbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#enabled AlbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function albListenerDefaultActionForwardStickinessToTerraform(struct?: AlbListenerDefaultActionForwardStickinessOutputReference | AlbListenerDefaultActionForwardStickiness): any;
export declare function albListenerDefaultActionForwardStickinessToHclTerraform(struct?: AlbListenerDefaultActionForwardStickinessOutputReference | AlbListenerDefaultActionForwardStickiness): any;
export declare class AlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: AlbListenerDefaultActionForwardStickiness | undefined);
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
export interface AlbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#arn AlbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#weight AlbListener#weight}
    */
    readonly weight?: number;
}
export declare function albListenerDefaultActionForwardTargetGroupToTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any;
export declare function albListenerDefaultActionForwardTargetGroupToHclTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable): any;
export declare class AlbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerDefaultActionForwardTargetGroup | cdktf.IResolvable | undefined);
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
export declare class AlbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerDefaultActionForwardTargetGroupOutputReference;
}
export interface AlbListenerDefaultActionForward {
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#stickiness AlbListener#stickiness}
    */
    readonly stickiness?: AlbListenerDefaultActionForwardStickiness;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#target_group AlbListener#target_group}
    */
    readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable;
}
export declare function albListenerDefaultActionForwardToTerraform(struct?: AlbListenerDefaultActionForwardOutputReference | AlbListenerDefaultActionForward): any;
export declare function albListenerDefaultActionForwardToHclTerraform(struct?: AlbListenerDefaultActionForwardOutputReference | AlbListenerDefaultActionForward): any;
export declare class AlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionForward | undefined;
    set internalValue(value: AlbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): AlbListenerDefaultActionForwardStickinessOutputReference;
    putStickiness(value: AlbListenerDefaultActionForwardStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbListenerDefaultActionForwardStickiness | undefined;
    private _targetGroup;
    get targetGroup(): AlbListenerDefaultActionForwardTargetGroupList;
    putTargetGroup(value: AlbListenerDefaultActionForwardTargetGroup[] | cdktf.IResolvable): void;
    get targetGroupInput(): cdktf.IResolvable | AlbListenerDefaultActionForwardTargetGroup[] | undefined;
}
export interface AlbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#host AlbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#path AlbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#port AlbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#query AlbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#status_code AlbListener#status_code}
    */
    readonly statusCode: string;
}
export declare function albListenerDefaultActionRedirectToTerraform(struct?: AlbListenerDefaultActionRedirectOutputReference | AlbListenerDefaultActionRedirect): any;
export declare function albListenerDefaultActionRedirectToHclTerraform(struct?: AlbListenerDefaultActionRedirectOutputReference | AlbListenerDefaultActionRedirect): any;
export declare class AlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerDefaultActionRedirect | undefined;
    set internalValue(value: AlbListenerDefaultActionRedirect | undefined);
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
export interface AlbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#order AlbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#target_group_arn AlbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#type AlbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#authenticate_cognito AlbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito;
    /**
    * authenticate_oidc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#authenticate_oidc AlbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc;
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#fixed_response AlbListener#fixed_response}
    */
    readonly fixedResponse?: AlbListenerDefaultActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#forward AlbListener#forward}
    */
    readonly forward?: AlbListenerDefaultActionForward;
    /**
    * redirect block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#redirect AlbListener#redirect}
    */
    readonly redirect?: AlbListenerDefaultActionRedirect;
}
export declare function albListenerDefaultActionToTerraform(struct?: AlbListenerDefaultAction | cdktf.IResolvable): any;
export declare function albListenerDefaultActionToHclTerraform(struct?: AlbListenerDefaultAction | cdktf.IResolvable): any;
export declare class AlbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbListenerDefaultAction | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerDefaultAction | cdktf.IResolvable | undefined);
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
    get authenticateCognito(): AlbListenerDefaultActionAuthenticateCognitoOutputReference;
    putAuthenticateCognito(value: AlbListenerDefaultActionAuthenticateCognito): void;
    resetAuthenticateCognito(): void;
    get authenticateCognitoInput(): AlbListenerDefaultActionAuthenticateCognito | undefined;
    private _authenticateOidc;
    get authenticateOidc(): AlbListenerDefaultActionAuthenticateOidcOutputReference;
    putAuthenticateOidc(value: AlbListenerDefaultActionAuthenticateOidc): void;
    resetAuthenticateOidc(): void;
    get authenticateOidcInput(): AlbListenerDefaultActionAuthenticateOidc | undefined;
    private _fixedResponse;
    get fixedResponse(): AlbListenerDefaultActionFixedResponseOutputReference;
    putFixedResponse(value: AlbListenerDefaultActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): AlbListenerDefaultActionFixedResponse | undefined;
    private _forward;
    get forward(): AlbListenerDefaultActionForwardOutputReference;
    putForward(value: AlbListenerDefaultActionForward): void;
    resetForward(): void;
    get forwardInput(): AlbListenerDefaultActionForward | undefined;
    private _redirect;
    get redirect(): AlbListenerDefaultActionRedirectOutputReference;
    putRedirect(value: AlbListenerDefaultActionRedirect): void;
    resetRedirect(): void;
    get redirectInput(): AlbListenerDefaultActionRedirect | undefined;
}
export declare class AlbListenerDefaultActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbListenerDefaultAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbListenerDefaultActionOutputReference;
}
export interface AlbListenerMutualAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#advertise_trust_store_ca_names AlbListener#advertise_trust_store_ca_names}
    */
    readonly advertiseTrustStoreCaNames?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#ignore_client_certificate_expiry AlbListener#ignore_client_certificate_expiry}
    */
    readonly ignoreClientCertificateExpiry?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#mode AlbListener#mode}
    */
    readonly mode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#trust_store_arn AlbListener#trust_store_arn}
    */
    readonly trustStoreArn?: string;
}
export declare function albListenerMutualAuthenticationToTerraform(struct?: AlbListenerMutualAuthenticationOutputReference | AlbListenerMutualAuthentication): any;
export declare function albListenerMutualAuthenticationToHclTerraform(struct?: AlbListenerMutualAuthenticationOutputReference | AlbListenerMutualAuthentication): any;
export declare class AlbListenerMutualAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerMutualAuthentication | undefined;
    set internalValue(value: AlbListenerMutualAuthentication | undefined);
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
export interface AlbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#create AlbListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#update AlbListener#update}
    */
    readonly update?: string;
}
export declare function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeouts | cdktf.IResolvable): any;
export declare function albListenerTimeoutsToHclTerraform(struct?: AlbListenerTimeouts | cdktf.IResolvable): any;
export declare class AlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AlbListenerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener aws_alb_listener}
*/
export declare class AlbListener extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_alb_listener";
    /**
    * Generates CDKTF code for importing a AlbListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AlbListener to import
    * @param importFromId The id of the existing AlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AlbListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_listener aws_alb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerConfig
    */
    constructor(scope: Construct, id: string, config: AlbListenerConfig);
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
    get defaultAction(): AlbListenerDefaultActionList;
    putDefaultAction(value: AlbListenerDefaultAction[] | cdktf.IResolvable): void;
    get defaultActionInput(): cdktf.IResolvable | AlbListenerDefaultAction[] | undefined;
    private _mutualAuthentication;
    get mutualAuthentication(): AlbListenerMutualAuthenticationOutputReference;
    putMutualAuthentication(value: AlbListenerMutualAuthentication): void;
    resetMutualAuthentication(): void;
    get mutualAuthenticationInput(): AlbListenerMutualAuthentication | undefined;
    private _timeouts;
    get timeouts(): AlbListenerTimeoutsOutputReference;
    putTimeouts(value: AlbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AlbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
