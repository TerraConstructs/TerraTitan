import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a listener for an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::Listener
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html
 */
export declare class CfnListener extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnListener from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnListener;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     *
     * @cloudformationAttribute ListenerArn
     */
    readonly attrListenerArn: string;
    /**
     * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
     */
    alpnPolicy?: Array<string>;
    /**
     * The default SSL server certificate for a secure listener.
     */
    certificates?: Array<CfnListener.CertificateProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The actions for the default rule. You cannot define a condition for a default rule.
     */
    defaultActions: Array<CfnListener.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The listener attributes.
     */
    listenerAttributes?: Array<cdk.IResolvable | CfnListener.ListenerAttributeProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    loadBalancerArn: string;
    /**
     * The mutual authentication configuration information.
     */
    mutualAuthentication?: cdk.IResolvable | CfnListener.MutualAuthenticationProperty;
    /**
     * The port on which the load balancer is listening.
     */
    port?: number;
    /**
     * The protocol for connections from clients to the load balancer.
     */
    protocol?: string;
    /**
     * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
     */
    sslPolicy?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnListenerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnListener {
    /**
     * Specifies an action for a listener rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html
     */
    interface ActionProperty {
        /**
         * [HTTPS listeners] Information for using Amazon Cognito to authenticate users.
         *
         * Specify only when `Type` is `authenticate-cognito` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-authenticatecognitoconfig
         */
        readonly authenticateCognitoConfig?: CfnListener.AuthenticateCognitoConfigProperty | cdk.IResolvable;
        /**
         * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).
         *
         * Specify only when `Type` is `authenticate-oidc` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-authenticateoidcconfig
         */
        readonly authenticateOidcConfig?: CfnListener.AuthenticateOidcConfigProperty | cdk.IResolvable;
        /**
         * [Application Load Balancer] Information for creating an action that returns a custom HTTP response.
         *
         * Specify only when `Type` is `fixed-response` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-fixedresponseconfig
         */
        readonly fixedResponseConfig?: CfnListener.FixedResponseConfigProperty | cdk.IResolvable;
        /**
         * Information for creating an action that distributes requests among one or more target groups.
         *
         * For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward` . If you specify both `ForwardConfig` and `TargetGroupArn` , you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-forwardconfig
         */
        readonly forwardConfig?: CfnListener.ForwardConfigProperty | cdk.IResolvable;
        /**
         * The order for the action.
         *
         * This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-order
         */
        readonly order?: number;
        /**
         * [Application Load Balancer] Information for creating a redirect action.
         *
         * Specify only when `Type` is `redirect` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-redirectconfig
         */
        readonly redirectConfig?: cdk.IResolvable | CfnListener.RedirectConfigProperty;
        /**
         * The Amazon Resource Name (ARN) of the target group.
         *
         * Specify only when `Type` is `forward` and you want to route to a single target group. To route to one or more target groups, use `ForwardConfig` instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-targetgrouparn
         */
        readonly targetGroupArn?: string;
        /**
         * The type of action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-action.html#cfn-elasticloadbalancingv2-listener-action-type
         */
        readonly type: string;
    }
    /**
     * Specifies information required when returning a custom HTTP response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html
     */
    interface FixedResponseConfigProperty {
        /**
         * The content type.
         *
         * Valid Values: text/plain | text/css | text/html | application/javascript | application/json
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listener-fixedresponseconfig-contenttype
         */
        readonly contentType?: string;
        /**
         * The message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listener-fixedresponseconfig-messagebody
         */
        readonly messageBody?: string;
        /**
         * The HTTP response code (2XX, 4XX, or 5XX).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listener-fixedresponseconfig-statuscode
         */
        readonly statusCode: string;
    }
    /**
     * Specifies information required when integrating with Amazon Cognito to authenticate users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html
     */
    interface AuthenticateCognitoConfigProperty {
        /**
         * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-authenticationrequestextraparams
         */
        readonly authenticationRequestExtraParams?: cdk.IResolvable | Record<string, string>;
        /**
         * The behavior if the user is not authenticated. The following are possible values:.
         *
         * - deny `` - Return an HTTP 401 Unauthorized error.
         * - allow `` - Allow the request to be forwarded to the target.
         * - authenticate `` - Redirect the request to the IdP authorization endpoint. This is the default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-onunauthenticatedrequest
         */
        readonly onUnauthenticatedRequest?: string;
        /**
         * The set of user claims to be requested from the IdP. The default is `openid` .
         *
         * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-scope
         */
        readonly scope?: string;
        /**
         * The name of the cookie used to maintain session information.
         *
         * The default is AWSELBAuthSessionCookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-sessioncookiename
         */
        readonly sessionCookieName?: string;
        /**
         * The maximum duration of the authentication session, in seconds.
         *
         * The default is 604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-sessiontimeout
         */
        readonly sessionTimeout?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-userpoolarn
         */
        readonly userPoolArn: string;
        /**
         * The ID of the Amazon Cognito user pool client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-userpoolclientid
         */
        readonly userPoolClientId: string;
        /**
         * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listener-authenticatecognitoconfig-userpooldomain
         */
        readonly userPoolDomain: string;
    }
    /**
     * Information about a redirect action.
     *
     * A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
     *
     * You can reuse URI components using the following reserved keywords:
     *
     * - #{protocol}
     * - #{host}
     * - #{port}
     * - #{path} (the leading "/" is removed)
     * - #{query}
     *
     * For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html
     */
    interface RedirectConfigProperty {
        /**
         * The hostname.
         *
         * This component is not percent-encoded. The hostname can contain #{host}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-host
         */
        readonly host?: string;
        /**
         * The absolute path, starting with the leading "/".
         *
         * This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-path
         */
        readonly path?: string;
        /**
         * The port.
         *
         * You can specify a value from 1 to 65535 or #{port}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-port
         */
        readonly port?: string;
        /**
         * The protocol.
         *
         * You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-protocol
         */
        readonly protocol?: string;
        /**
         * The query parameters, URL-encoded when necessary, but not percent-encoded.
         *
         * Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-query
         */
        readonly query?: string;
        /**
         * The HTTP redirect code.
         *
         * The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-redirectconfig.html#cfn-elasticloadbalancingv2-listener-redirectconfig-statuscode
         */
        readonly statusCode: string;
    }
    /**
     * Information for creating an action that distributes requests among one or more target groups.
     *
     * For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward` . If you specify both `ForwardConfig` and `TargetGroupArn` , you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html
     */
    interface ForwardConfigProperty {
        /**
         * Information about how traffic will be distributed between multiple target groups in a forward rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html#cfn-elasticloadbalancingv2-listener-forwardconfig-targetgroups
         */
        readonly targetGroups?: Array<cdk.IResolvable | CfnListener.TargetGroupTupleProperty> | cdk.IResolvable;
        /**
         * Information about the target group stickiness for a rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-forwardconfig.html#cfn-elasticloadbalancingv2-listener-forwardconfig-targetgroupstickinessconfig
         */
        readonly targetGroupStickinessConfig?: cdk.IResolvable | CfnListener.TargetGroupStickinessConfigProperty;
    }
    /**
     * Information about the target group stickiness for a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html
     */
    interface TargetGroupStickinessConfigProperty {
        /**
         * The time period, in seconds, during which requests from a client should be routed to the same target group.
         *
         * The range is 1-604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html#cfn-elasticloadbalancingv2-listener-targetgroupstickinessconfig-durationseconds
         */
        readonly durationSeconds?: number;
        /**
         * Indicates whether target group stickiness is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgroupstickinessconfig.html#cfn-elasticloadbalancingv2-listener-targetgroupstickinessconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Information about how traffic will be distributed between multiple target groups in a forward rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html
     */
    interface TargetGroupTupleProperty {
        /**
         * The Amazon Resource Name (ARN) of the target group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html#cfn-elasticloadbalancingv2-listener-targetgrouptuple-targetgrouparn
         */
        readonly targetGroupArn?: string;
        /**
         * The weight.
         *
         * The range is 0 to 999.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-targetgrouptuple.html#cfn-elasticloadbalancingv2-listener-targetgrouptuple-weight
         */
        readonly weight?: number;
    }
    /**
     * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html
     */
    interface AuthenticateOidcConfigProperty {
        /**
         * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-authenticationrequestextraparams
         */
        readonly authenticationRequestExtraParams?: cdk.IResolvable | Record<string, string>;
        /**
         * The authorization endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-authorizationendpoint
         */
        readonly authorizationEndpoint: string;
        /**
         * The OAuth 2.0 client identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-clientid
         */
        readonly clientId: string;
        /**
         * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set `UseExistingClientSecret` to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-clientsecret
         */
        readonly clientSecret?: string;
        /**
         * The OIDC issuer identifier of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-issuer
         */
        readonly issuer: string;
        /**
         * The behavior if the user is not authenticated. The following are possible values:.
         *
         * - deny `` - Return an HTTP 401 Unauthorized error.
         * - allow `` - Allow the request to be forwarded to the target.
         * - authenticate `` - Redirect the request to the IdP authorization endpoint. This is the default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-onunauthenticatedrequest
         */
        readonly onUnauthenticatedRequest?: string;
        /**
         * The set of user claims to be requested from the IdP. The default is `openid` .
         *
         * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-scope
         */
        readonly scope?: string;
        /**
         * The name of the cookie used to maintain session information.
         *
         * The default is AWSELBAuthSessionCookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-sessioncookiename
         */
        readonly sessionCookieName?: string;
        /**
         * The maximum duration of the authentication session, in seconds.
         *
         * The default is 604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-sessiontimeout
         */
        readonly sessionTimeout?: string;
        /**
         * The token endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-tokenendpoint
         */
        readonly tokenEndpoint: string;
        /**
         * Indicates whether to use the existing client secret when modifying a rule.
         *
         * If you are creating a rule, you can omit this parameter or set it to false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-useexistingclientsecret
         */
        readonly useExistingClientSecret?: boolean | cdk.IResolvable;
        /**
         * The user info endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listener-authenticateoidcconfig-userinfoendpoint
         */
        readonly userInfoEndpoint: string;
    }
    /**
     * Specifies an SSL server certificate to use as the default certificate for a secure listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html
     */
    interface CertificateProperty {
        /**
         * The Amazon Resource Name (ARN) of the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificate.html#cfn-elasticloadbalancingv2-listener-certificate-certificatearn
         */
        readonly certificateArn?: string;
    }
    /**
     * The mutual authentication configuration information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html
     */
    interface MutualAuthenticationProperty {
        /**
         * Indicates whether trust store CA certificate names are advertised.
         *
         * The default value is `off` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html#cfn-elasticloadbalancingv2-listener-mutualauthentication-advertisetruststorecanames
         */
        readonly advertiseTrustStoreCaNames?: string;
        /**
         * Indicates whether expired client certificates are ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html#cfn-elasticloadbalancingv2-listener-mutualauthentication-ignoreclientcertificateexpiry
         */
        readonly ignoreClientCertificateExpiry?: boolean | cdk.IResolvable;
        /**
         * The client certificate handling method.
         *
         * The possible values are `off` , `passthrough` , and `verify` . The default value is `off` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html#cfn-elasticloadbalancingv2-listener-mutualauthentication-mode
         */
        readonly mode?: string;
        /**
         * The Amazon Resource Name (ARN) of the trust store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-mutualauthentication.html#cfn-elasticloadbalancingv2-listener-mutualauthentication-truststorearn
         */
        readonly trustStoreArn?: string;
    }
    /**
     * Information about a listener attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-listenerattribute.html
     */
    interface ListenerAttributeProperty {
        /**
         * The name of the attribute.
         *
         * The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.
         *
         * - `tcp.idle_timeout.seconds` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.
         *
         * The following attributes are only supported by Application Load Balancers.
         *
         * - `routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
         * - `routing.http.request.x_amzn_mtls_clientcert_issuer.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
         * - `routing.http.request.x_amzn_mtls_clientcert_subject.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
         * - `routing.http.request.x_amzn_mtls_clientcert_validity.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
         * - `routing.http.request.x_amzn_mtls_clientcert_leaf.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
         * - `routing.http.request.x_amzn_mtls_clientcert.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
         * - `routing.http.request.x_amzn_tls_version.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
         * - `routing.http.request.x_amzn_tls_cipher_suite.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
         * - `routing.http.response.server.enabled` - Enables you to allow or remove the HTTP response server header.
         * - `routing.http.response.strict_transport_security.header_value` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
         * - `routing.http.response.access_control_allow_origin.header_value` - Specifies which origins are allowed to access the server.
         * - `routing.http.response.access_control_allow_methods.header_value` - Returns which HTTP methods are allowed when accessing the server from a different origin.
         * - `routing.http.response.access_control_allow_headers.header_value` - Specifies which headers can be used during the request.
         * - `routing.http.response.access_control_allow_credentials.header_value` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
         * - `routing.http.response.access_control_expose_headers.header_value` - Returns which headers the browser can expose to the requesting client.
         * - `routing.http.response.access_control_max_age.header_value` - Specifies how long the results of a preflight request can be cached, in seconds.
         * - `routing.http.response.content_security_policy.header_value` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
         * - `routing.http.response.x_content_type_options.header_value` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
         * - `routing.http.response.x_frame_options.header_value` - Indicates whether the browser is allowed to render a page in a *frame* , *iframe* , *embed* or *object* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-listenerattribute.html#cfn-elasticloadbalancingv2-listener-listenerattribute-key
         */
        readonly key?: string;
        /**
         * The value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-listenerattribute.html#cfn-elasticloadbalancingv2-listener-listenerattribute-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnListener`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html
 */
export interface CfnListenerProps {
    /**
     * [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-alpnpolicy
     */
    readonly alpnPolicy?: Array<string>;
    /**
     * The default SSL server certificate for a secure listener.
     *
     * You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
     *
     * To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-certificates
     */
    readonly certificates?: Array<CfnListener.CertificateProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The actions for the default rule. You cannot define a condition for a default rule.
     *
     * To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-defaultactions
     */
    readonly defaultActions: Array<CfnListener.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The listener attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-listenerattributes
     */
    readonly listenerAttributes?: Array<cdk.IResolvable | CfnListener.ListenerAttributeProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-loadbalancerarn
     */
    readonly loadBalancerArn: string;
    /**
     * The mutual authentication configuration information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-mutualauthentication
     */
    readonly mutualAuthentication?: cdk.IResolvable | CfnListener.MutualAuthenticationProperty;
    /**
     * The port on which the load balancer is listening.
     *
     * You can't specify a port for a Gateway Load Balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-port
     */
    readonly port?: number;
    /**
     * The protocol for connections from clients to the load balancer.
     *
     * For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can’t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-protocol
     */
    readonly protocol?: string;
    /**
     * [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
     *
     * Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic.
     *
     * For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies) in the *Network Load Balancers Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listener.html#cfn-elasticloadbalancingv2-listener-sslpolicy
     */
    readonly sslPolicy?: string;
}
/**
 * Specifies an SSL server certificate to add to the certificate list for an HTTPS or TLS listener.
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::ListenerCertificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html
 */
export declare class CfnListenerCertificate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnListenerCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnListenerCertificate;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The certificate.
     */
    certificates: Array<CfnListenerCertificate.CertificateProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    listenerArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnListenerCertificateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnListenerCertificate {
    /**
     * Specifies an SSL server certificate for the certificate list of a secure listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenercertificate-certificate.html
     */
    interface CertificateProperty {
        /**
         * The Amazon Resource Name (ARN) of the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenercertificate-certificate.html#cfn-elasticloadbalancingv2-listenercertificate-certificate-certificatearn
         */
        readonly certificateArn?: string;
    }
}
/**
 * Properties for defining a `CfnListenerCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html
 */
export interface CfnListenerCertificateProps {
    /**
     * The certificate.
     *
     * You can specify one certificate per resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-certificates
     */
    readonly certificates: Array<CfnListenerCertificate.CertificateProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-listenerarn
     */
    readonly listenerArn: string;
}
/**
 * Specifies a listener rule.
 *
 * The listener must be associated with an Application Load Balancer. Each rule consists of a priority, one or more actions, and one or more conditions.
 *
 * For more information, see [Quotas for your Application Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html) in the *User Guide for Application Load Balancers* .
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::ListenerRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html
 */
export declare class CfnListenerRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnListenerRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnListenerRule;
    /**
     * Indicates whether this is the default rule.
     *
     * @cloudformationAttribute IsDefault
     */
    readonly attrIsDefault: cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     *
     * @cloudformationAttribute RuleArn
     */
    readonly attrRuleArn: string;
    /**
     * The actions.
     */
    actions: Array<CfnListenerRule.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The conditions.
     */
    conditions: Array<cdk.IResolvable | CfnListenerRule.RuleConditionProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    listenerArn?: string;
    /**
     * The rule priority. A listener can't have multiple rules with the same priority.
     */
    priority: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnListenerRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnListenerRule {
    /**
     * Specifies an action for a listener rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html
     */
    interface ActionProperty {
        /**
         * [HTTPS listeners] Information for using Amazon Cognito to authenticate users.
         *
         * Specify only when `Type` is `authenticate-cognito` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-authenticatecognitoconfig
         */
        readonly authenticateCognitoConfig?: CfnListenerRule.AuthenticateCognitoConfigProperty | cdk.IResolvable;
        /**
         * [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).
         *
         * Specify only when `Type` is `authenticate-oidc` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-authenticateoidcconfig
         */
        readonly authenticateOidcConfig?: CfnListenerRule.AuthenticateOidcConfigProperty | cdk.IResolvable;
        /**
         * [Application Load Balancer] Information for creating an action that returns a custom HTTP response.
         *
         * Specify only when `Type` is `fixed-response` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-fixedresponseconfig
         */
        readonly fixedResponseConfig?: CfnListenerRule.FixedResponseConfigProperty | cdk.IResolvable;
        /**
         * Information for creating an action that distributes requests among one or more target groups.
         *
         * For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward` . If you specify both `ForwardConfig` and `TargetGroupArn` , you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-forwardconfig
         */
        readonly forwardConfig?: CfnListenerRule.ForwardConfigProperty | cdk.IResolvable;
        /**
         * The order for the action.
         *
         * This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-order
         */
        readonly order?: number;
        /**
         * [Application Load Balancer] Information for creating a redirect action.
         *
         * Specify only when `Type` is `redirect` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-redirectconfig
         */
        readonly redirectConfig?: cdk.IResolvable | CfnListenerRule.RedirectConfigProperty;
        /**
         * The Amazon Resource Name (ARN) of the target group.
         *
         * Specify only when `Type` is `forward` and you want to route to a single target group. To route to one or more target groups, use `ForwardConfig` instead.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-targetgrouparn
         */
        readonly targetGroupArn?: string;
        /**
         * The type of action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-action.html#cfn-elasticloadbalancingv2-listenerrule-action-type
         */
        readonly type: string;
    }
    /**
     * Specifies information required when returning a custom HTTP response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html
     */
    interface FixedResponseConfigProperty {
        /**
         * The content type.
         *
         * Valid Values: text/plain | text/css | text/html | application/javascript | application/json
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-contenttype
         */
        readonly contentType?: string;
        /**
         * The message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-messagebody
         */
        readonly messageBody?: string;
        /**
         * The HTTP response code (2XX, 4XX, or 5XX).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-fixedresponseconfig.html#cfn-elasticloadbalancingv2-listenerrule-fixedresponseconfig-statuscode
         */
        readonly statusCode: string;
    }
    /**
     * Specifies information required when integrating with Amazon Cognito to authenticate users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html
     */
    interface AuthenticateCognitoConfigProperty {
        /**
         * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-authenticationrequestextraparams
         */
        readonly authenticationRequestExtraParams?: cdk.IResolvable | Record<string, string>;
        /**
         * The behavior if the user is not authenticated. The following are possible values:.
         *
         * - deny `` - Return an HTTP 401 Unauthorized error.
         * - allow `` - Allow the request to be forwarded to the target.
         * - authenticate `` - Redirect the request to the IdP authorization endpoint. This is the default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-onunauthenticatedrequest
         */
        readonly onUnauthenticatedRequest?: string;
        /**
         * The set of user claims to be requested from the IdP. The default is `openid` .
         *
         * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-scope
         */
        readonly scope?: string;
        /**
         * The name of the cookie used to maintain session information.
         *
         * The default is AWSELBAuthSessionCookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-sessioncookiename
         */
        readonly sessionCookieName?: string;
        /**
         * The maximum duration of the authentication session, in seconds.
         *
         * The default is 604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-sessiontimeout
         */
        readonly sessionTimeout?: number;
        /**
         * The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-userpoolarn
         */
        readonly userPoolArn: string;
        /**
         * The ID of the Amazon Cognito user pool client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-userpoolclientid
         */
        readonly userPoolClientId: string;
        /**
         * The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticatecognitoconfig-userpooldomain
         */
        readonly userPoolDomain: string;
    }
    /**
     * Information about a redirect action.
     *
     * A URI consists of the following components: protocol://hostname:port/path?query. You must modify at least one of the following components to avoid a redirect loop: protocol, hostname, port, or path. Any components that you do not modify retain their original values.
     *
     * You can reuse URI components using the following reserved keywords:
     *
     * - #{protocol}
     * - #{host}
     * - #{port}
     * - #{path} (the leading "/" is removed)
     * - #{query}
     *
     * For example, you can change the path to "/new/#{path}", the hostname to "example.#{host}", or the query to "#{query}&value=xyz".
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html
     */
    interface RedirectConfigProperty {
        /**
         * The hostname.
         *
         * This component is not percent-encoded. The hostname can contain #{host}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-host
         */
        readonly host?: string;
        /**
         * The absolute path, starting with the leading "/".
         *
         * This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-path
         */
        readonly path?: string;
        /**
         * The port.
         *
         * You can specify a value from 1 to 65535 or #{port}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-port
         */
        readonly port?: string;
        /**
         * The protocol.
         *
         * You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-protocol
         */
        readonly protocol?: string;
        /**
         * The query parameters, URL-encoded when necessary, but not percent-encoded.
         *
         * Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-query
         */
        readonly query?: string;
        /**
         * The HTTP redirect code.
         *
         * The redirect is either permanent (HTTP 301) or temporary (HTTP 302).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-redirectconfig.html#cfn-elasticloadbalancingv2-listenerrule-redirectconfig-statuscode
         */
        readonly statusCode: string;
    }
    /**
     * Information for creating an action that distributes requests among one or more target groups.
     *
     * For Network Load Balancers, you can specify a single target group. Specify only when `Type` is `forward` . If you specify both `ForwardConfig` and `TargetGroupArn` , you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html
     */
    interface ForwardConfigProperty {
        /**
         * Information about how traffic will be distributed between multiple target groups in a forward rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html#cfn-elasticloadbalancingv2-listenerrule-forwardconfig-targetgroups
         */
        readonly targetGroups?: Array<cdk.IResolvable | CfnListenerRule.TargetGroupTupleProperty> | cdk.IResolvable;
        /**
         * Information about the target group stickiness for a rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-forwardconfig.html#cfn-elasticloadbalancingv2-listenerrule-forwardconfig-targetgroupstickinessconfig
         */
        readonly targetGroupStickinessConfig?: cdk.IResolvable | CfnListenerRule.TargetGroupStickinessConfigProperty;
    }
    /**
     * Information about the target group stickiness for a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html
     */
    interface TargetGroupStickinessConfigProperty {
        /**
         * The time period, in seconds, during which requests from a client should be routed to the same target group.
         *
         * The range is 1-604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html#cfn-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig-durationseconds
         */
        readonly durationSeconds?: number;
        /**
         * Indicates whether target group stickiness is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig.html#cfn-elasticloadbalancingv2-listenerrule-targetgroupstickinessconfig-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * Information about how traffic will be distributed between multiple target groups in a forward rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html
     */
    interface TargetGroupTupleProperty {
        /**
         * The Amazon Resource Name (ARN) of the target group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html#cfn-elasticloadbalancingv2-listenerrule-targetgrouptuple-targetgrouparn
         */
        readonly targetGroupArn?: string;
        /**
         * The weight.
         *
         * The range is 0 to 999.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-targetgrouptuple.html#cfn-elasticloadbalancingv2-listenerrule-targetgrouptuple-weight
         */
        readonly weight?: number;
    }
    /**
     * Specifies information required using an identity provide (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html
     */
    interface AuthenticateOidcConfigProperty {
        /**
         * The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-authenticationrequestextraparams
         */
        readonly authenticationRequestExtraParams?: cdk.IResolvable | Record<string, string>;
        /**
         * The authorization endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-authorizationendpoint
         */
        readonly authorizationEndpoint: string;
        /**
         * The OAuth 2.0 client identifier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-clientid
         */
        readonly clientId: string;
        /**
         * The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set `UseExistingClientSecret` to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-clientsecret
         */
        readonly clientSecret?: string;
        /**
         * The OIDC issuer identifier of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-issuer
         */
        readonly issuer: string;
        /**
         * The behavior if the user is not authenticated. The following are possible values:.
         *
         * - deny `` - Return an HTTP 401 Unauthorized error.
         * - allow `` - Allow the request to be forwarded to the target.
         * - authenticate `` - Redirect the request to the IdP authorization endpoint. This is the default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-onunauthenticatedrequest
         */
        readonly onUnauthenticatedRequest?: string;
        /**
         * The set of user claims to be requested from the IdP. The default is `openid` .
         *
         * To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-scope
         */
        readonly scope?: string;
        /**
         * The name of the cookie used to maintain session information.
         *
         * The default is AWSELBAuthSessionCookie.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-sessioncookiename
         */
        readonly sessionCookieName?: string;
        /**
         * The maximum duration of the authentication session, in seconds.
         *
         * The default is 604800 seconds (7 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-sessiontimeout
         */
        readonly sessionTimeout?: number;
        /**
         * The token endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-tokenendpoint
         */
        readonly tokenEndpoint: string;
        /**
         * Indicates whether to use the existing client secret when modifying a rule.
         *
         * If you are creating a rule, you can omit this parameter or set it to false.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-useexistingclientsecret
         */
        readonly useExistingClientSecret?: boolean | cdk.IResolvable;
        /**
         * The user info endpoint of the IdP.
         *
         * This must be a full URL, including the HTTPS protocol, the domain, and the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-authenticateoidcconfig.html#cfn-elasticloadbalancingv2-listenerrule-authenticateoidcconfig-userinfoendpoint
         */
        readonly userInfoEndpoint: string;
    }
    /**
     * Specifies a condition for a listener rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html
     */
    interface RuleConditionProperty {
        /**
         * The field in the HTTP request. The following are the possible values:.
         *
         * - `http-header`
         * - `http-request-method`
         * - `host-header`
         * - `path-pattern`
         * - `query-string`
         * - `source-ip`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-field
         */
        readonly field?: string;
        /**
         * Information for a host header condition.
         *
         * Specify only when `Field` is `host-header` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-hostheaderconfig
         */
        readonly hostHeaderConfig?: CfnListenerRule.HostHeaderConfigProperty | cdk.IResolvable;
        /**
         * Information for an HTTP header condition.
         *
         * Specify only when `Field` is `http-header` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httpheaderconfig
         */
        readonly httpHeaderConfig?: CfnListenerRule.HttpHeaderConfigProperty | cdk.IResolvable;
        /**
         * Information for an HTTP method condition.
         *
         * Specify only when `Field` is `http-request-method` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-httprequestmethodconfig
         */
        readonly httpRequestMethodConfig?: CfnListenerRule.HttpRequestMethodConfigProperty | cdk.IResolvable;
        /**
         * Information for a path pattern condition.
         *
         * Specify only when `Field` is `path-pattern` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-pathpatternconfig
         */
        readonly pathPatternConfig?: cdk.IResolvable | CfnListenerRule.PathPatternConfigProperty;
        /**
         * Information for a query string condition.
         *
         * Specify only when `Field` is `query-string` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-querystringconfig
         */
        readonly queryStringConfig?: cdk.IResolvable | CfnListenerRule.QueryStringConfigProperty;
        /**
         * Information for a source IP condition.
         *
         * Specify only when `Field` is `source-ip` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-sourceipconfig
         */
        readonly sourceIpConfig?: cdk.IResolvable | CfnListenerRule.SourceIpConfigProperty;
        /**
         * The condition value.
         *
         * Specify only when `Field` is `host-header` or `path-pattern` . Alternatively, to specify multiple host names or multiple path patterns, use `HostHeaderConfig` or `PathPatternConfig` .
         *
         * If `Field` is `host-header` and you're not using `HostHeaderConfig` , you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
         *
         * - A-Z, a-z, 0-9
         * - - .
         * - * (matches 0 or more characters)
         * - ? (matches exactly 1 character)
         *
         * If `Field` is `path-pattern` and you're not using `PathPatternConfig` , you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
         *
         * - A-Z, a-z, 0-9
         * - _ - . $ / ~ " ' @ : +
         * - & (using &amp;)
         * - * (matches 0 or more characters)
         * - ? (matches exactly 1 character)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-rulecondition.html#cfn-elasticloadbalancingv2-listenerrule-rulecondition-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Information about an HTTP header condition.
     *
     * There is a set of standard HTTP header fields. You can also define custom HTTP header fields.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html
     */
    interface HttpHeaderConfigProperty {
        /**
         * The name of the HTTP header field.
         *
         * The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html#cfn-elasticloadbalancingv2-listenerrule-httpheaderconfig-httpheadername
         */
        readonly httpHeaderName?: string;
        /**
         * The strings to compare against the value of the HTTP header.
         *
         * The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
         *
         * If the same header appears multiple times in the request, we search them in order until a match is found.
         *
         * If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httpheaderconfig.html#cfn-elasticloadbalancingv2-listenerrule-httpheaderconfig-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Information about a query string condition.
     *
     * The query string component of a URI starts after the first '?' character and is terminated by either a '#' character or the end of the URI. A typical query string contains key/value pairs separated by '&' characters. The allowed characters are specified by RFC 3986. Any character can be percentage encoded.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html
     */
    interface QueryStringConfigProperty {
        /**
         * The key/value pairs or values to find in the query string.
         *
         * The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in `Values` using a '\' character.
         *
         * If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringconfig.html#cfn-elasticloadbalancingv2-listenerrule-querystringconfig-values
         */
        readonly values?: Array<cdk.IResolvable | CfnListenerRule.QueryStringKeyValueProperty> | cdk.IResolvable;
    }
    /**
     * Information about a key/value pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html
     */
    interface QueryStringKeyValueProperty {
        /**
         * The key.
         *
         * You can omit the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html#cfn-elasticloadbalancingv2-listenerrule-querystringkeyvalue-key
         */
        readonly key?: string;
        /**
         * The value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-querystringkeyvalue.html#cfn-elasticloadbalancingv2-listenerrule-querystringkeyvalue-value
         */
        readonly value?: string;
    }
    /**
     * Information about a host header condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html
     */
    interface HostHeaderConfigProperty {
        /**
         * The host names.
         *
         * The maximum size of each name is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
         *
         * If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-hostheaderconfig.html#cfn-elasticloadbalancingv2-listenerrule-hostheaderconfig-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Information about an HTTP method condition.
     *
     * HTTP defines a set of request methods, also referred to as HTTP verbs. For more information, see the [HTTP Method Registry](https://docs.aws.amazon.com/https://www.iana.org/assignments/http-methods/http-methods.xhtml) . You can also define custom HTTP methods.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html
     */
    interface HttpRequestMethodConfigProperty {
        /**
         * The name of the request method.
         *
         * The maximum size is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
         *
         * If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-httprequestmethodconfig.html#cfn-elasticloadbalancingv2-listenerrule-httprequestmethodconfig-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Information about a path pattern condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html
     */
    interface PathPatternConfigProperty {
        /**
         * The path patterns to compare against the request URL.
         *
         * The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
         *
         * If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-pathpatternconfig.html#cfn-elasticloadbalancingv2-listenerrule-pathpatternconfig-values
         */
        readonly values?: Array<string>;
    }
    /**
     * Information about a source IP condition.
     *
     * You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html
     */
    interface SourceIpConfigProperty {
        /**
         * The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
         *
         * If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listenerrule-sourceipconfig.html#cfn-elasticloadbalancingv2-listenerrule-sourceipconfig-values
         */
        readonly values?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnListenerRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html
 */
export interface CfnListenerRuleProps {
    /**
     * The actions.
     *
     * The rule must include exactly one of the following types of actions: `forward` , `fixed-response` , or `redirect` , and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html#cfn-elasticloadbalancingv2-listenerrule-actions
     */
    readonly actions: Array<CfnListenerRule.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The conditions.
     *
     * The rule can optionally include up to one of each of the following conditions: `http-request-method` , `host-header` , `path-pattern` , and `source-ip` . A rule can also optionally include one or more of each of the following conditions: `http-header` and `query-string` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html#cfn-elasticloadbalancingv2-listenerrule-conditions
     */
    readonly conditions: Array<cdk.IResolvable | CfnListenerRule.RuleConditionProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html#cfn-elasticloadbalancingv2-listenerrule-listenerarn
     */
    readonly listenerArn?: string;
    /**
     * The rule priority. A listener can't have multiple rules with the same priority.
     *
     * If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html#cfn-elasticloadbalancingv2-listenerrule-priority
     */
    readonly priority: number;
}
/**
 * Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::LoadBalancer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html
 */
export declare class CfnLoadBalancer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoadBalancer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoadBalancer;
    /**
     * The ID of the Amazon Route 53 hosted zone associated with the load balancer. For example, `Z2P70J7EXAMPLE` .
     *
     * @cloudformationAttribute CanonicalHostedZoneID
     */
    readonly attrCanonicalHostedZoneId: string;
    /**
     * The DNS name for the load balancer. For example, `my-load-balancer-424835706.us-west-2.elb.amazonaws.com` .
     *
     * @cloudformationAttribute DNSName
     */
    readonly attrDnsName: string;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     *
     * @cloudformationAttribute LoadBalancerArn
     */
    readonly attrLoadBalancerArn: string;
    /**
     * The full name of the load balancer. For example, `app/my-load-balancer/50dc6c495c0c9188` .
     *
     * @cloudformationAttribute LoadBalancerFullName
     */
    readonly attrLoadBalancerFullName: string;
    /**
     * The name of the load balancer. For example, `my-load-balancer` .
     *
     * @cloudformationAttribute LoadBalancerName
     */
    readonly attrLoadBalancerName: string;
    /**
     * The IDs of the security groups for the load balancer.
     *
     * @cloudformationAttribute SecurityGroups
     */
    readonly attrSecurityGroups: Array<string>;
    /**
     * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.
     */
    enablePrefixForIpv6SourceNat?: string;
    /**
     * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through AWS PrivateLink .
     */
    enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
    /**
     * The IP address type. Internal load balancers must use `ipv4` .
     */
    ipAddressType?: string;
    /**
     * The load balancer attributes.
     */
    loadBalancerAttributes?: Array<cdk.IResolvable | CfnLoadBalancer.LoadBalancerAttributeProperty> | cdk.IResolvable;
    /**
     * The minimum capacity for a load balancer.
     */
    minimumLoadBalancerCapacity?: cdk.IResolvable | CfnLoadBalancer.MinimumLoadBalancerCapacityProperty;
    /**
     * The name of the load balancer.
     */
    name?: string;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses.
     */
    scheme?: string;
    /**
     * [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
     */
    securityGroups?: Array<string>;
    /**
     * The IDs of the subnets.
     */
    subnetMappings?: Array<cdk.IResolvable | CfnLoadBalancer.SubnetMappingProperty> | cdk.IResolvable;
    /**
     * The IDs of the subnets.
     */
    subnets?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to assign to the load balancer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of load balancer.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnLoadBalancerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoadBalancer {
    /**
     * Specifies an attribute for an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html
     */
    interface LoadBalancerAttributeProperty {
        /**
         * The name of the attribute.
         *
         * The following attributes are supported by all load balancers:
         *
         * - `deletion_protection.enabled` - Indicates whether deletion protection is enabled. The value is `true` or `false` . The default is `false` .
         * - `load_balancing.cross_zone.enabled` - Indicates whether cross-zone load balancing is enabled. The possible values are `true` and `false` . The default for Network Load Balancers and Gateway Load Balancers is `false` . The default for Application Load Balancers is `true` , and can't be changed.
         *
         * The following attributes are supported by both Application Load Balancers and Network Load Balancers:
         *
         * - `access_logs.s3.enabled` - Indicates whether access logs are enabled. The value is `true` or `false` . The default is `false` .
         * - `access_logs.s3.bucket` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
         * - `access_logs.s3.prefix` - The prefix for the location in the S3 bucket for the access logs.
         * - `ipv6.deny_all_igw_traffic` - Blocks internet gateway (IGW) access to the load balancer. It is set to `false` for internet-facing load balancers and `true` for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway.
         * - `zonal_shift.config.enabled` - Indicates whether zonal shift is enabled. The possible values are `true` and `false` . The default is `false` .
         *
         * The following attributes are supported by only Application Load Balancers:
         *
         * - `idle_timeout.timeout_seconds` - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds.
         * - `client_keep_alive.seconds` - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds.
         * - `connection_logs.s3.enabled` - Indicates whether connection logs are enabled. The value is `true` or `false` . The default is `false` .
         * - `connection_logs.s3.bucket` - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket.
         * - `connection_logs.s3.prefix` - The prefix for the location in the S3 bucket for the connection logs.
         * - `routing.http.desync_mitigation_mode` - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are `monitor` , `defensive` , and `strictest` . The default is `defensive` .
         * - `routing.http.drop_invalid_header_fields.enabled` - Indicates whether HTTP headers with invalid header fields are removed by the load balancer ( `true` ) or routed to targets ( `false` ). The default is `false` .
         * - `routing.http.preserve_host_header.enabled` - Indicates whether the Application Load Balancer should preserve the `Host` header in the HTTP request and send it to the target without any change. The possible values are `true` and `false` . The default is `false` .
         * - `routing.http.x_amzn_tls_version_and_cipher_suite.enabled` - Indicates whether the two headers ( `x-amzn-tls-version` and `x-amzn-tls-cipher-suite` ), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The `x-amzn-tls-version` header has information about the TLS protocol version negotiated with the client, and the `x-amzn-tls-cipher-suite` header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are `true` and `false` . The default is `false` .
         * - `routing.http.xff_client_port.enabled` - Indicates whether the `X-Forwarded-For` header should preserve the source port that the client used to connect to the load balancer. The possible values are `true` and `false` . The default is `false` .
         * - `routing.http.xff_header_processing.mode` - Enables you to modify, preserve, or remove the `X-Forwarded-For` header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are `append` , `preserve` , and `remove` . The default is `append` .
         *
         * - If the value is `append` , the Application Load Balancer adds the client IP address (of the last hop) to the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
         * - If the value is `preserve` the Application Load Balancer preserves the `X-Forwarded-For` header in the HTTP request, and sends it to targets without any change.
         * - If the value is `remove` , the Application Load Balancer removes the `X-Forwarded-For` header in the HTTP request before it sends it to targets.
         * - `routing.http2.enabled` - Indicates whether HTTP/2 is enabled. The possible values are `true` and `false` . The default is `true` . Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens.
         * - `waf.fail_open.enabled` - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. The possible values are `true` and `false` . The default is `false` .
         *
         * The following attributes are supported by only Network Load Balancers:
         *
         * - `dns_record.client_routing_policy` - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are `availability_zone_affinity` with 100 percent zonal affinity, `partial_availability_zone_affinity` with 85 percent zonal affinity, and `any_availability_zone` with 0 percent zonal affinity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattribute-key
         */
        readonly key?: string;
        /**
         * The value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattribute-value
         */
        readonly value?: string;
    }
    /**
     * Specifies a subnet for a load balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html
     */
    interface SubnetMappingProperty {
        /**
         * [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-allocationid
         */
        readonly allocationId?: string;
        /**
         * [Network Load Balancers] The IPv6 address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-ipv6address
         */
        readonly iPv6Address?: string;
        /**
         * [Network Load Balancers] The private IPv4 address for an internal load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-privateipv4address
         */
        readonly privateIPv4Address?: string;
        /**
         * [Network Load Balancers with UDP listeners] The IPv6 prefix to use for source NAT.
         *
         * Specify an IPv6 prefix (/80 netmask) from the subnet CIDR block or `auto_assigned` to use an IPv6 prefix selected at random from the subnet CIDR block.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-sourcenatipv6prefix
         */
        readonly sourceNatIpv6Prefix?: string;
        /**
         * The ID of the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-subnetid
         */
        readonly subnetId: string;
    }
    /**
     * The minimum capacity for a load balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-minimumloadbalancercapacity.html
     */
    interface MinimumLoadBalancerCapacityProperty {
        /**
         * The number of capacity units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-minimumloadbalancercapacity.html#cfn-elasticloadbalancingv2-loadbalancer-minimumloadbalancercapacity-capacityunits
         */
        readonly capacityUnits: number;
    }
}
/**
 * Properties for defining a `CfnLoadBalancer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html
 */
export interface CfnLoadBalancerProps {
    /**
     * [Network Load Balancers with UDP listeners] Indicates whether to use an IPv6 prefix from each subnet for source NAT.
     *
     * The IP address type must be `dualstack` . The default value is `off` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-enableprefixforipv6sourcenat
     */
    readonly enablePrefixForIpv6SourceNat?: string;
    /**
     * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through AWS PrivateLink .
     *
     * The default is `on` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-enforcesecuritygroupinboundrulesonprivatelinktraffic
     */
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
    /**
     * The IP address type. Internal load balancers must use `ipv4` .
     *
     * [Application Load Balancers] The possible values are `ipv4` (IPv4 addresses), `dualstack` (IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (public IPv6 addresses and private IPv4 and IPv6 addresses).
     *
     * Application Load Balancer authentication supports IPv4 addresses only when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer can't complete the authentication process, resulting in HTTP 500 errors.
     *
     * [Network Load Balancers and Gateway Load Balancers] The possible values are `ipv4` (IPv4 addresses) and `dualstack` (IPv4 and IPv6 addresses).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * The load balancer attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattributes
     */
    readonly loadBalancerAttributes?: Array<cdk.IResolvable | CfnLoadBalancer.LoadBalancerAttributeProperty> | cdk.IResolvable;
    /**
     * The minimum capacity for a load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-minimumloadbalancercapacity
     */
    readonly minimumLoadBalancerCapacity?: cdk.IResolvable | CfnLoadBalancer.MinimumLoadBalancerCapacityProperty;
    /**
     * The name of the load balancer.
     *
     * This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-name
     */
    readonly name?: string;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses.
     *
     * The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
     *
     * The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
     *
     * The default is an Internet-facing load balancer.
     *
     * You can't specify a scheme for a Gateway Load Balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-scheme
     */
    readonly scheme?: string;
    /**
     * [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-securitygroups
     */
    readonly securityGroups?: Array<string>;
    /**
     * The IDs of the subnets.
     *
     * You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
     *
     * [Application Load Balancers] You must specify subnets from at least two Availability Zones. You can't specify Elastic IP addresses for your subnets.
     *
     * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
     *
     * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
     *
     * [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
     *
     * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You can't specify Elastic IP addresses for your subnets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmappings
     */
    readonly subnetMappings?: Array<cdk.IResolvable | CfnLoadBalancer.SubnetMappingProperty> | cdk.IResolvable;
    /**
     * The IDs of the subnets.
     *
     * You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
     *
     * [Application Load Balancers] You must specify subnets from at least two Availability Zones.
     *
     * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
     *
     * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
     *
     * [Network Load Balancers and Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnets
     */
    readonly subnets?: Array<string>;
    /**
     * The tags to assign to the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of load balancer.
     *
     * The default is `application` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-type
     */
    readonly type?: string;
}
/**
 * Specifies a target group for an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 *
 * Before you register a Lambda function as a target, you must create a `AWS::Lambda::Permission` resource that grants the Elastic Load Balancing service principal permission to invoke the Lambda function.
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::TargetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html
 */
export declare class CfnTargetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTargetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTargetGroup;
    /**
     * The Amazon Resource Name (ARN) of the load balancer that routes traffic to this target group.
     *
     * @cloudformationAttribute LoadBalancerArns
     */
    readonly attrLoadBalancerArns: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the target group.
     *
     * @cloudformationAttribute TargetGroupArn
     */
    readonly attrTargetGroupArn: string;
    /**
     * The full name of the target group. For example, `targetgroup/my-target-group/cbf133c568e0d028` .
     *
     * @cloudformationAttribute TargetGroupFullName
     */
    readonly attrTargetGroupFullName: string;
    /**
     * The name of the target group. For example, `my-target-group` .
     *
     * @cloudformationAttribute TargetGroupName
     */
    readonly attrTargetGroupName: string;
    /**
     * Indicates whether health checks are enabled.
     */
    healthCheckEnabled?: boolean | cdk.IResolvable;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     */
    healthCheckIntervalSeconds?: number;
    /**
     * [HTTP/HTTPS health checks] The destination for health checks on the targets.
     */
    healthCheckPath?: string;
    /**
     * The port the load balancer uses when performing health checks on targets.
     */
    healthCheckPort?: string;
    /**
     * The protocol the load balancer uses when performing health checks on targets.
     */
    healthCheckProtocol?: string;
    /**
     * The amount of time, in seconds, during which no response from a target means a failed health check.
     */
    healthCheckTimeoutSeconds?: number;
    /**
     * The number of consecutive health check successes required before considering a target healthy.
     */
    healthyThresholdCount?: number;
    /**
     * The IP address type.
     */
    ipAddressType?: string;
    /**
     * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
     */
    matcher?: cdk.IResolvable | CfnTargetGroup.MatcherProperty;
    /**
     * The name of the target group.
     */
    name?: string;
    /**
     * The port on which the targets receive traffic.
     */
    port?: number;
    /**
     * The protocol to use for routing traffic to the targets.
     */
    protocol?: string;
    /**
     * [HTTP/HTTPS protocol] The protocol version.
     */
    protocolVersion?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The target group attributes.
     */
    targetGroupAttributes?: Array<cdk.IResolvable | CfnTargetGroup.TargetGroupAttributeProperty> | cdk.IResolvable;
    /**
     * The targets.
     */
    targets?: Array<cdk.IResolvable | CfnTargetGroup.TargetDescriptionProperty> | cdk.IResolvable;
    /**
     * The type of target that you must specify when registering targets with this target group.
     */
    targetType?: string;
    /**
     * The number of consecutive health check failures required before considering a target unhealthy.
     */
    unhealthyThresholdCount?: number;
    /**
     * The identifier of the virtual private cloud (VPC).
     */
    vpcId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTargetGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTargetGroup {
    /**
     * Specifies the HTTP codes that healthy targets must use when responding to an HTTP health check.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-matcher.html
     */
    interface MatcherProperty {
        /**
         * You can specify values between 0 and 99.
         *
         * You can specify multiple values (for example, "0,1") or a range of values (for example, "0-5"). The default value is 12.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-matcher.html#cfn-elasticloadbalancingv2-targetgroup-matcher-grpccode
         */
        readonly grpcCode?: string;
        /**
         * For Application Load Balancers, you can specify values between 200 and 499, with the default value being 200.
         *
         * You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").
         *
         * For Network Load Balancers, you can specify values between 200 and 599, with the default value being 200-399. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").
         *
         * For Gateway Load Balancers, this must be "200–399".
         *
         * Note that when using shorthand syntax, some values such as commas need to be escaped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-matcher.html#cfn-elasticloadbalancingv2-targetgroup-matcher-httpcode
         */
        readonly httpCode?: string;
    }
    /**
     * Specifies a target to add to a target group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html
     */
    interface TargetDescriptionProperty {
        /**
         * An Availability Zone or `all` .
         *
         * This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
         *
         * For Application Load Balancer target groups, the specified Availability Zone value is only applicable when cross-zone load balancing is off. Otherwise the parameter is ignored and treated as `all` .
         *
         * This parameter is not supported if the target type of the target group is `instance` or `alb` .
         *
         * If the target type is `ip` and the IP address is in a subnet of the VPC for the target group, the Availability Zone is automatically detected and this parameter is optional. If the IP address is outside the VPC, this parameter is required.
         *
         * For Application Load Balancer target groups with cross-zone load balancing off, if the target type is `ip` and the IP address is outside of the VPC for the target group, this should be an Availability Zone inside the VPC for the target group.
         *
         * If the target type is `lambda` , this parameter is optional and the only supported value is `all` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html#cfn-elasticloadbalancingv2-targetgroup-targetdescription-availabilityzone
         */
        readonly availabilityZone?: string;
        /**
         * The ID of the target.
         *
         * If the target type of the target group is `instance` , specify an instance ID. If the target type is `ip` , specify an IP address. If the target type is `lambda` , specify the ARN of the Lambda function. If the target type is `alb` , specify the ARN of the Application Load Balancer target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html#cfn-elasticloadbalancingv2-targetgroup-targetdescription-id
         */
        readonly id: string;
        /**
         * The port on which the target is listening.
         *
         * If the target group protocol is GENEVE, the supported port is 6081. If the target type is `alb` , the targeted Application Load Balancer must have at least one listener whose port matches the target group port. This parameter is not used if the target is a Lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetdescription.html#cfn-elasticloadbalancingv2-targetgroup-targetdescription-port
         */
        readonly port?: number;
    }
    /**
     * Specifies a target group attribute.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattribute.html
     */
    interface TargetGroupAttributeProperty {
        /**
         * The name of the attribute.
         *
         * The following attributes are supported by all load balancers:
         *
         * - `deregistration_delay.timeout_seconds` - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from `draining` to `unused` . The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported.
         * - `stickiness.enabled` - Indicates whether target stickiness is enabled. The value is `true` or `false` . The default is `false` .
         * - `stickiness.type` - Indicates the type of stickiness. The possible values are:
         *
         * - `lb_cookie` and `app_cookie` for Application Load Balancers.
         * - `source_ip` for Network Load Balancers.
         * - `source_ip_dest_ip` and `source_ip_dest_ip_proto` for Gateway Load Balancers.
         *
         * The following attributes are supported by Application Load Balancers and Network Load Balancers:
         *
         * - `load_balancing.cross_zone.enabled` - Indicates whether cross zone load balancing is enabled. The value is `true` , `false` or `use_load_balancer_configuration` . The default is `use_load_balancer_configuration` .
         * - `target_group_health.dns_failover.minimum_healthy_targets.count` - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are `off` or an integer from 1 to the maximum number of targets. The default is `off` .
         * - `target_group_health.dns_failover.minimum_healthy_targets.percentage` - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, mark the zone as unhealthy in DNS, so that traffic is routed only to healthy zones. The possible values are `off` or an integer from 1 to 100. The default is `off` .
         * - `target_group_health.unhealthy_state_routing.minimum_healthy_targets.count` - The minimum number of targets that must be healthy. If the number of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are 1 to the maximum number of targets. The default is 1.
         * - `target_group_health.unhealthy_state_routing.minimum_healthy_targets.percentage` - The minimum percentage of targets that must be healthy. If the percentage of healthy targets is below this value, send traffic to all targets, including unhealthy targets. The possible values are `off` or an integer from 1 to 100. The default is `off` .
         *
         * The following attributes are supported only if the load balancer is an Application Load Balancer and the target is an instance or an IP address:
         *
         * - `load_balancing.algorithm.type` - The load balancing algorithm determines how the load balancer selects targets when routing requests. The value is `round_robin` , `least_outstanding_requests` , or `weighted_random` . The default is `round_robin` .
         * - `load_balancing.algorithm.anomaly_mitigation` - Only available when `load_balancing.algorithm.type` is `weighted_random` . Indicates whether anomaly mitigation is enabled. The value is `on` or `off` . The default is `off` .
         * - `slow_start.duration_seconds` - The time period, in seconds, during which a newly registered target receives an increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). The default is 0 seconds (disabled).
         * - `stickiness.app_cookie.cookie_name` - Indicates the name of the application-based cookie. Names that start with the following prefixes are not allowed: `AWSALB` , `AWSALBAPP` , and `AWSALBTG` ; they're reserved for use by the load balancer.
         * - `stickiness.app_cookie.duration_seconds` - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the application-based cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).
         * - `stickiness.lb_cookie.duration_seconds` - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).
         *
         * The following attribute is supported only if the load balancer is an Application Load Balancer and the target is a Lambda function:
         *
         * - `lambda.multi_value_headers.enabled` - Indicates whether the request and response headers that are exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is `true` or `false` . The default is `false` . If the value is `false` and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client.
         *
         * The following attributes are supported only by Network Load Balancers:
         *
         * - `deregistration_delay.connection_termination.enabled` - Indicates whether the load balancer terminates connections at the end of the deregistration timeout. The value is `true` or `false` . For new UDP/TCP_UDP target groups the default is `true` . Otherwise, the default is `false` .
         * - `preserve_client_ip.enabled` - Indicates whether client IP preservation is enabled. The value is `true` or `false` . The default is disabled if the target group type is IP address and the target group protocol is TCP or TLS. Otherwise, the default is enabled. Client IP preservation can't be disabled for UDP and TCP_UDP target groups.
         * - `proxy_protocol_v2.enabled` - Indicates whether Proxy Protocol version 2 is enabled. The value is `true` or `false` . The default is `false` .
         * - `target_health_state.unhealthy.connection_termination.enabled` - Indicates whether the load balancer terminates connections to unhealthy targets. The value is `true` or `false` . The default is `true` . This attribute can't be enabled for UDP and TCP_UDP target groups.
         * - `target_health_state.unhealthy.draining_interval_seconds` - The amount of time for Elastic Load Balancing to wait before changing the state of an unhealthy target from `unhealthy.draining` to `unhealthy` . The range is 0-360000 seconds. The default value is 0 seconds.
         *
         * Note: This attribute can only be configured when `target_health_state.unhealthy.connection_termination.enabled` is `false` .
         *
         * The following attributes are supported only by Gateway Load Balancers:
         *
         * - `target_failover.on_deregistration` - Indicates how the Gateway Load Balancer handles existing flows when a target is deregistered. The possible values are `rebalance` and `no_rebalance` . The default is `no_rebalance` . The two attributes ( `target_failover.on_deregistration` and `target_failover.on_unhealthy` ) can't be set independently. The value you set for both attributes must be the same.
         * - `target_failover.on_unhealthy` - Indicates how the Gateway Load Balancer handles existing flows when a target is unhealthy. The possible values are `rebalance` and `no_rebalance` . The default is `no_rebalance` . The two attributes ( `target_failover.on_deregistration` and `target_failover.on_unhealthy` ) can't be set independently. The value you set for both attributes must be the same.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattribute.html#cfn-elasticloadbalancingv2-targetgroup-targetgroupattribute-key
         */
        readonly key?: string;
        /**
         * The value of the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattribute.html#cfn-elasticloadbalancingv2-targetgroup-targetgroupattribute-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnTargetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html
 */
export interface CfnTargetGroupProps {
    /**
     * Indicates whether health checks are enabled.
     *
     * If the target type is `lambda` , health checks are disabled by default but can be enabled. If the target type is `instance` , `ip` , or `alb` , health checks are always enabled and can't be disabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthcheckenabled
     */
    readonly healthCheckEnabled?: boolean | cdk.IResolvable;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     *
     * The range is 5-300. If the target group protocol is TCP, TLS, UDP, TCP_UDP, HTTP or HTTPS, the default is 30 seconds. If the target group protocol is GENEVE, the default is 10 seconds. If the target type is `lambda` , the default is 35 seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthcheckintervalseconds
     */
    readonly healthCheckIntervalSeconds?: number;
    /**
     * [HTTP/HTTPS health checks] The destination for health checks on the targets.
     *
     * [HTTP1 or HTTP2 protocol version] The ping path. The default is /.
     *
     * [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is / AWS .ALB/healthcheck.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthcheckpath
     */
    readonly healthCheckPath?: string;
    /**
     * The port the load balancer uses when performing health checks on targets.
     *
     * If the protocol is HTTP, HTTPS, TCP, TLS, UDP, or TCP_UDP, the default is `traffic-port` , which is the port on which each target receives traffic from the load balancer. If the protocol is GENEVE, the default is port 80.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthcheckport
     */
    readonly healthCheckPort?: string;
    /**
     * The protocol the load balancer uses when performing health checks on targets.
     *
     * For Application Load Balancers, the default is HTTP. For Network Load Balancers and Gateway Load Balancers, the default is TCP. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. The GENEVE, TLS, UDP, and TCP_UDP protocols are not supported for health checks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthcheckprotocol
     */
    readonly healthCheckProtocol?: string;
    /**
     * The amount of time, in seconds, during which no response from a target means a failed health check.
     *
     * The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is `lambda` , the default is 30 seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthchecktimeoutseconds
     */
    readonly healthCheckTimeoutSeconds?: number;
    /**
     * The number of consecutive health check successes required before considering a target healthy.
     *
     * The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 5. For target groups with a protocol of GENEVE, the default is 5. If the target type is `lambda` , the default is 5.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-healthythresholdcount
     */
    readonly healthyThresholdCount?: number;
    /**
     * The IP address type.
     *
     * The default value is `ipv4` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
     *
     * For target groups with a protocol of TCP, TCP_UDP, UDP or TLS the range is 200-599. For target groups with a protocol of HTTP or HTTPS, the range is 200-499. For target groups with a protocol of GENEVE, the range is 200-399.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-matcher
     */
    readonly matcher?: cdk.IResolvable | CfnTargetGroup.MatcherProperty;
    /**
     * The name of the target group.
     *
     * This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-name
     */
    readonly name?: string;
    /**
     * The port on which the targets receive traffic.
     *
     * This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-port
     */
    readonly port?: number;
    /**
     * The protocol to use for routing traffic to the targets.
     *
     * For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, or TCP_UDP. For Gateway Load Balancers, the supported protocol is GENEVE. A TCP_UDP listener must be associated with a TCP_UDP target group. If the target is a Lambda function, this parameter does not apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-protocol
     */
    readonly protocol?: string;
    /**
     * [HTTP/HTTPS protocol] The protocol version.
     *
     * The possible values are `GRPC` , `HTTP1` , and `HTTP2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-protocolversion
     */
    readonly protocolVersion?: string;
    /**
     * The tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The target group attributes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-targetgroupattributes
     */
    readonly targetGroupAttributes?: Array<cdk.IResolvable | CfnTargetGroup.TargetGroupAttributeProperty> | cdk.IResolvable;
    /**
     * The targets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-targets
     */
    readonly targets?: Array<cdk.IResolvable | CfnTargetGroup.TargetDescriptionProperty> | cdk.IResolvable;
    /**
     * The type of target that you must specify when registering targets with this target group.
     *
     * You can't specify targets for a target group using more than one target type.
     *
     * - `instance` - Register targets by instance ID. This is the default value.
     * - `ip` - Register targets by IP address. You can specify IP addresses from the subnets of the virtual private cloud (VPC) for the target group, the RFC 1918 range (10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16), and the RFC 6598 range (100.64.0.0/10). You can't specify publicly routable IP addresses.
     * - `lambda` - Register a single Lambda function as a target.
     * - `alb` - Register a single Application Load Balancer as a target.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-targettype
     */
    readonly targetType?: string;
    /**
     * The number of consecutive health check failures required before considering a target unhealthy.
     *
     * The range is 2-10. If the target group protocol is TCP, TCP_UDP, UDP, TLS, HTTP or HTTPS, the default is 2. For target groups with a protocol of GENEVE, the default is 2. If the target type is `lambda` , the default is 5.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-unhealthythresholdcount
     */
    readonly unhealthyThresholdCount?: number;
    /**
     * The identifier of the virtual private cloud (VPC).
     *
     * If the target is a Lambda function, this parameter does not apply. Otherwise, this parameter is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-targetgroup.html#cfn-elasticloadbalancingv2-targetgroup-vpcid
     */
    readonly vpcId?: string;
}
/**
 * Creates a trust store.
 *
 * You must specify `CaCertificatesBundleS3Bucket` and `CaCertificatesBundleS3Key` .
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::TrustStore
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html
 */
export declare class CfnTrustStore extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrustStore from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrustStore;
    /**
     * The number of ca certificates in the trust store.
     *
     * @cloudformationAttribute NumberOfCaCertificates
     */
    readonly attrNumberOfCaCertificates: number;
    /**
     * The current status of the trust store.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the trust store.
     *
     * @cloudformationAttribute TrustStoreArn
     */
    readonly attrTrustStoreArn: string;
    /**
     * The Amazon S3 bucket for the ca certificates bundle.
     */
    caCertificatesBundleS3Bucket?: string;
    /**
     * The Amazon S3 path for the ca certificates bundle.
     */
    caCertificatesBundleS3Key?: string;
    /**
     * The Amazon S3 object version for the ca certificates bundle.
     */
    caCertificatesBundleS3ObjectVersion?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the trust store.
     */
    name?: string;
    /**
     * The tags to assign to the trust store.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTrustStoreProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnTrustStore`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html
 */
export interface CfnTrustStoreProps {
    /**
     * The Amazon S3 bucket for the ca certificates bundle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html#cfn-elasticloadbalancingv2-truststore-cacertificatesbundles3bucket
     */
    readonly caCertificatesBundleS3Bucket?: string;
    /**
     * The Amazon S3 path for the ca certificates bundle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html#cfn-elasticloadbalancingv2-truststore-cacertificatesbundles3key
     */
    readonly caCertificatesBundleS3Key?: string;
    /**
     * The Amazon S3 object version for the ca certificates bundle.
     *
     * If undefined the current version is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html#cfn-elasticloadbalancingv2-truststore-cacertificatesbundles3objectversion
     */
    readonly caCertificatesBundleS3ObjectVersion?: string;
    /**
     * The name of the trust store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html#cfn-elasticloadbalancingv2-truststore-name
     */
    readonly name?: string;
    /**
     * The tags to assign to the trust store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststore.html#cfn-elasticloadbalancingv2-truststore-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Adds the specified revocation contents to the specified trust store.
 *
 * You must specify `TrustStoreArn` .
 *
 * @cloudformationResource AWS::ElasticLoadBalancingV2::TrustStoreRevocation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html
 */
export declare class CfnTrustStoreRevocation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTrustStoreRevocation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTrustStoreRevocation;
    /**
     * The revocation ID of the revocation file.
     *
     * @cloudformationAttribute RevocationId
     */
    readonly attrRevocationId: number;
    /**
     * Information about the revocation file in the trust store.
     *
     * @cloudformationAttribute TrustStoreRevocations
     */
    readonly attrTrustStoreRevocations: cdk.IResolvable;
    /**
     * The revocation file to add.
     */
    revocationContents?: Array<cdk.IResolvable | CfnTrustStoreRevocation.RevocationContentProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the trust store.
     */
    trustStoreArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTrustStoreRevocationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTrustStoreRevocation {
    /**
     * Information about a revocation file.
     *
     * You must specify `S3Bucket` and `S3Key` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html
     */
    interface RevocationContentProperty {
        /**
         * The type of revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-revocationtype
         */
        readonly revocationType?: string;
        /**
         * The Amazon S3 bucket for the revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3bucket
         */
        readonly s3Bucket?: string;
        /**
         * The Amazon S3 path for the revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3key
         */
        readonly s3Key?: string;
        /**
         * The Amazon S3 object version of the revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3objectversion
         */
        readonly s3ObjectVersion?: string;
    }
    /**
     * Information about a revocation file in use by a trust store.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html
     */
    interface TrustStoreRevocationProperty {
        /**
         * The number of revoked certificates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorerevocation-numberofrevokedentries
         */
        readonly numberOfRevokedEntries?: number;
        /**
         * The revocation ID of the revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorerevocation-revocationid
         */
        readonly revocationId?: string;
        /**
         * The type of revocation file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorerevocation-revocationtype
         */
        readonly revocationType?: string;
        /**
         * The Amazon Resource Name (ARN) of the trust store.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-truststorerevocation-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorerevocation-truststorearn
         */
        readonly trustStoreArn?: string;
    }
}
/**
 * Properties for defining a `CfnTrustStoreRevocation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html
 */
export interface CfnTrustStoreRevocationProps {
    /**
     * The revocation file to add.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontents
     */
    readonly revocationContents?: Array<cdk.IResolvable | CfnTrustStoreRevocation.RevocationContentProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the trust store.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorearn
     */
    readonly trustStoreArn?: string;
}
