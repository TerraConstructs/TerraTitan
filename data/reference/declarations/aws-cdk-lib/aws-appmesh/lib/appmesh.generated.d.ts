import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a gateway route.
 *
 * A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.
 *
 * For more information about gateway routes, see [Gateway routes](https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html) .
 *
 * @cloudformationResource AWS::AppMesh::GatewayRoute
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html
 */
export declare class CfnGatewayRoute extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGatewayRoute from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGatewayRoute;
    /**
     * The full Amazon Resource Name (ARN) for the gateway route.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the gateway route.
     *
     * @cloudformationAttribute GatewayRouteName
     */
    readonly attrGatewayRouteName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the gateway route resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the gateway route.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual gateway that the gateway route is associated with.
     *
     * @cloudformationAttribute VirtualGatewayName
     */
    readonly attrVirtualGatewayName: string;
    /**
     * The name of the gateway route.
     */
    gatewayRouteName?: string;
    /**
     * The name of the service mesh that the resource resides in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The specifications of the gateway route.
     */
    spec: CfnGatewayRoute.GatewayRouteSpecProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the gateway route to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The virtual gateway that the gateway route is associated with.
     */
    virtualGatewayName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGatewayRouteProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGatewayRoute {
    /**
     * An object that represents a gateway route specification.
     *
     * Specify one gateway route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html
     */
    interface GatewayRouteSpecProperty {
        /**
         * An object that represents the specification of a gRPC gateway route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html#cfn-appmesh-gatewayroute-gatewayroutespec-grpcroute
         */
        readonly grpcRoute?: CfnGatewayRoute.GrpcGatewayRouteProperty | cdk.IResolvable;
        /**
         * An object that represents the specification of an HTTP/2 gateway route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html#cfn-appmesh-gatewayroute-gatewayroutespec-http2route
         */
        readonly http2Route?: CfnGatewayRoute.HttpGatewayRouteProperty | cdk.IResolvable;
        /**
         * An object that represents the specification of an HTTP gateway route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html#cfn-appmesh-gatewayroute-gatewayroutespec-httproute
         */
        readonly httpRoute?: CfnGatewayRoute.HttpGatewayRouteProperty | cdk.IResolvable;
        /**
         * The ordering of the gateway routes spec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutespec.html#cfn-appmesh-gatewayroute-gatewayroutespec-priority
         */
        readonly priority?: number;
    }
    /**
     * An object that represents an HTTP gateway route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html
     */
    interface HttpGatewayRouteProperty {
        /**
         * An object that represents the action to take if a match is determined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroute-action
         */
        readonly action: CfnGatewayRoute.HttpGatewayRouteActionProperty | cdk.IResolvable;
        /**
         * An object that represents the criteria for determining a request match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroute-match
         */
        readonly match: CfnGatewayRoute.HttpGatewayRouteMatchProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the action to take if a match is determined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html
     */
    interface HttpGatewayRouteActionProperty {
        /**
         * The gateway route action to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html#cfn-appmesh-gatewayroute-httpgatewayrouteaction-rewrite
         */
        readonly rewrite?: CfnGatewayRoute.HttpGatewayRouteRewriteProperty | cdk.IResolvable;
        /**
         * An object that represents the target that traffic is routed to when a request matches the gateway route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html#cfn-appmesh-gatewayroute-httpgatewayrouteaction-target
         */
        readonly target: CfnGatewayRoute.GatewayRouteTargetProperty | cdk.IResolvable;
    }
    /**
     * An object that represents a gateway route target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html
     */
    interface GatewayRouteTargetProperty {
        /**
         * The port number of the gateway route target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html#cfn-appmesh-gatewayroute-gatewayroutetarget-port
         */
        readonly port?: number;
        /**
         * An object that represents a virtual service gateway route target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutetarget.html#cfn-appmesh-gatewayroute-gatewayroutetarget-virtualservice
         */
        readonly virtualService: CfnGatewayRoute.GatewayRouteVirtualServiceProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the virtual service that traffic is routed to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html
     */
    interface GatewayRouteVirtualServiceProperty {
        /**
         * The name of the virtual service that traffic is routed to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html#cfn-appmesh-gatewayroute-gatewayroutevirtualservice-virtualservicename
         */
        readonly virtualServiceName: string;
    }
    /**
     * An object representing the gateway route to rewrite.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html
     */
    interface HttpGatewayRouteRewriteProperty {
        /**
         * The host name to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-hostname
         */
        readonly hostname?: CfnGatewayRoute.GatewayRouteHostnameRewriteProperty | cdk.IResolvable;
        /**
         * The path to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-path
         */
        readonly path?: CfnGatewayRoute.HttpGatewayRoutePathRewriteProperty | cdk.IResolvable;
        /**
         * The specified beginning characters to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-prefix
         */
        readonly prefix?: CfnGatewayRoute.HttpGatewayRoutePrefixRewriteProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the path to rewrite.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html
     */
    interface HttpGatewayRoutePathRewriteProperty {
        /**
         * The exact path to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html#cfn-appmesh-gatewayroute-httpgatewayroutepathrewrite-exact
         */
        readonly exact?: string;
    }
    /**
     * An object representing the gateway route host name to rewrite.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html
     */
    interface GatewayRouteHostnameRewriteProperty {
        /**
         * The default target host name to write to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html#cfn-appmesh-gatewayroute-gatewayroutehostnamerewrite-defaulttargethostname
         */
        readonly defaultTargetHostname?: string;
    }
    /**
     * An object representing the beginning characters of the route to rewrite.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html
     */
    interface HttpGatewayRoutePrefixRewriteProperty {
        /**
         * The default prefix used to replace the incoming route prefix when rewritten.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html#cfn-appmesh-gatewayroute-httpgatewayrouteprefixrewrite-defaultprefix
         */
        readonly defaultPrefix?: string;
        /**
         * The value used to replace the incoming route prefix when rewritten.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html#cfn-appmesh-gatewayroute-httpgatewayrouteprefixrewrite-value
         */
        readonly value?: string;
    }
    /**
     * An object that represents the criteria for determining a request match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html
     */
    interface HttpGatewayRouteMatchProperty {
        /**
         * The client request headers to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-headers
         */
        readonly headers?: Array<CfnGatewayRoute.HttpGatewayRouteHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The host name to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-hostname
         */
        readonly hostname?: CfnGatewayRoute.GatewayRouteHostnameMatchProperty | cdk.IResolvable;
        /**
         * The method to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-method
         */
        readonly method?: string;
        /**
         * The path to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-path
         */
        readonly path?: CfnGatewayRoute.HttpPathMatchProperty | cdk.IResolvable;
        /**
         * The port number to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-port
         */
        readonly port?: number;
        /**
         * Specifies the path to match requests with.
         *
         * This parameter must always start with `/` , which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics` , your prefix should be `/metrics` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-prefix
         */
        readonly prefix?: string;
        /**
         * The query parameter to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-queryparameters
         */
        readonly queryParameters?: Array<cdk.IResolvable | CfnGatewayRoute.QueryParameterProperty> | cdk.IResolvable;
    }
    /**
     * An object representing the path to match in the request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html
     */
    interface HttpPathMatchProperty {
        /**
         * The exact path to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html#cfn-appmesh-gatewayroute-httppathmatch-exact
         */
        readonly exact?: string;
        /**
         * The regex used to match the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httppathmatch.html#cfn-appmesh-gatewayroute-httppathmatch-regex
         */
        readonly regex?: string;
    }
    /**
     * An object that represents the HTTP header in the gateway route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html
     */
    interface HttpGatewayRouteHeaderProperty {
        /**
         * Specify `True` to match anything except the match criteria.
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-invert
         */
        readonly invert?: boolean | cdk.IResolvable;
        /**
         * An object that represents the method and value to match with the header value sent in a request.
         *
         * Specify one match method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-match
         */
        readonly match?: CfnGatewayRoute.HttpGatewayRouteHeaderMatchProperty | cdk.IResolvable;
        /**
         * A name for the HTTP header in the gateway route that will be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-name
         */
        readonly name: string;
    }
    /**
     * An object that represents the method and value to match with the header value sent in a request.
     *
     * Specify one match method.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html
     */
    interface HttpGatewayRouteHeaderMatchProperty {
        /**
         * The value sent by the client must match the specified value exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-exact
         */
        readonly exact?: string;
        /**
         * The value sent by the client must begin with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-prefix
         */
        readonly prefix?: string;
        /**
         * An object that represents the range of values to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-range
         */
        readonly range?: CfnGatewayRoute.GatewayRouteRangeMatchProperty | cdk.IResolvable;
        /**
         * The value sent by the client must include the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-regex
         */
        readonly regex?: string;
        /**
         * The value sent by the client must end with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-suffix
         */
        readonly suffix?: string;
    }
    /**
     * An object that represents the range of values to match on.
     *
     * The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html
     */
    interface GatewayRouteRangeMatchProperty {
        /**
         * The end of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html#cfn-appmesh-gatewayroute-gatewayrouterangematch-end
         */
        readonly end: number;
        /**
         * The start of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html#cfn-appmesh-gatewayroute-gatewayrouterangematch-start
         */
        readonly start: number;
    }
    /**
     * An object representing the gateway route host name to match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html
     */
    interface GatewayRouteHostnameMatchProperty {
        /**
         * The exact host name to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html#cfn-appmesh-gatewayroute-gatewayroutehostnamematch-exact
         */
        readonly exact?: string;
        /**
         * The specified ending characters of the host name to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html#cfn-appmesh-gatewayroute-gatewayroutehostnamematch-suffix
         */
        readonly suffix?: string;
    }
    /**
     * An object that represents the query parameter in the request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html
     */
    interface QueryParameterProperty {
        /**
         * The query parameter to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html#cfn-appmesh-gatewayroute-queryparameter-match
         */
        readonly match?: CfnGatewayRoute.HttpQueryParameterMatchProperty | cdk.IResolvable;
        /**
         * A name for the query parameter that will be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-queryparameter.html#cfn-appmesh-gatewayroute-queryparameter-name
         */
        readonly name: string;
    }
    /**
     * An object representing the query parameter to match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html
     */
    interface HttpQueryParameterMatchProperty {
        /**
         * The exact query parameter to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html#cfn-appmesh-gatewayroute-httpqueryparametermatch-exact
         */
        readonly exact?: string;
    }
    /**
     * An object that represents a gRPC gateway route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html
     */
    interface GrpcGatewayRouteProperty {
        /**
         * An object that represents the action to take if a match is determined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroute-action
         */
        readonly action: CfnGatewayRoute.GrpcGatewayRouteActionProperty | cdk.IResolvable;
        /**
         * An object that represents the criteria for determining a request match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroute-match
         */
        readonly match: CfnGatewayRoute.GrpcGatewayRouteMatchProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the action to take if a match is determined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html
     */
    interface GrpcGatewayRouteActionProperty {
        /**
         * The gateway route action to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html#cfn-appmesh-gatewayroute-grpcgatewayrouteaction-rewrite
         */
        readonly rewrite?: CfnGatewayRoute.GrpcGatewayRouteRewriteProperty | cdk.IResolvable;
        /**
         * An object that represents the target that traffic is routed to when a request matches the gateway route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html#cfn-appmesh-gatewayroute-grpcgatewayrouteaction-target
         */
        readonly target: CfnGatewayRoute.GatewayRouteTargetProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the gateway route to rewrite.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html
     */
    interface GrpcGatewayRouteRewriteProperty {
        /**
         * The host name of the gateway route to rewrite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html#cfn-appmesh-gatewayroute-grpcgatewayrouterewrite-hostname
         */
        readonly hostname?: CfnGatewayRoute.GatewayRouteHostnameRewriteProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the criteria for determining a request match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html
     */
    interface GrpcGatewayRouteMatchProperty {
        /**
         * The gateway route host name to be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-hostname
         */
        readonly hostname?: CfnGatewayRoute.GatewayRouteHostnameMatchProperty | cdk.IResolvable;
        /**
         * The gateway route metadata to be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-metadata
         */
        readonly metadata?: Array<CfnGatewayRoute.GrpcGatewayRouteMetadataProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The gateway route port to be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-port
         */
        readonly port?: number;
        /**
         * The fully qualified domain name for the service to match from the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-servicename
         */
        readonly serviceName?: string;
    }
    /**
     * An object representing the metadata of the gateway route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html
     */
    interface GrpcGatewayRouteMetadataProperty {
        /**
         * Specify `True` to match anything except the match criteria.
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-invert
         */
        readonly invert?: boolean | cdk.IResolvable;
        /**
         * The criteria for determining a metadata match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-match
         */
        readonly match?: CfnGatewayRoute.GatewayRouteMetadataMatchProperty | cdk.IResolvable;
        /**
         * A name for the gateway route metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-name
         */
        readonly name: string;
    }
    /**
     * An object representing the method header to be matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html
     */
    interface GatewayRouteMetadataMatchProperty {
        /**
         * The exact method header to be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-exact
         */
        readonly exact?: string;
        /**
         * The specified beginning characters of the method header to be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-prefix
         */
        readonly prefix?: string;
        /**
         * An object that represents the range of values to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-range
         */
        readonly range?: CfnGatewayRoute.GatewayRouteRangeMatchProperty | cdk.IResolvable;
        /**
         * The regex used to match the method header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-regex
         */
        readonly regex?: string;
        /**
         * The specified ending characters of the method header to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-suffix
         */
        readonly suffix?: string;
    }
}
/**
 * Properties for defining a `CfnGatewayRoute`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html
 */
export interface CfnGatewayRouteProps {
    /**
     * The name of the gateway route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutename
     */
    readonly gatewayRouteName?: string;
    /**
     * The name of the service mesh that the resource resides in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The specifications of the gateway route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-spec
     */
    readonly spec: CfnGatewayRoute.GatewayRouteSpecProperty | cdk.IResolvable;
    /**
     * Optional metadata that you can apply to the gateway route to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The virtual gateway that the gateway route is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-virtualgatewayname
     */
    readonly virtualGatewayName: string;
}
/**
 * Creates a service mesh.
 *
 * A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.
 *
 * For more information about service meshes, see [Service meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html) .
 *
 * @cloudformationResource AWS::AppMesh::Mesh
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html
 */
export declare class CfnMesh extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMesh from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMesh;
    /**
     * The full Amazon Resource Name (ARN) for the mesh.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the mesh.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name to use for the service mesh.
     */
    meshName?: string;
    /**
     * The service mesh specification to apply.
     */
    spec?: cdk.IResolvable | CfnMesh.MeshSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the service mesh to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnMeshProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMesh {
    /**
     * An object that represents the specification of a service mesh.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html
     */
    interface MeshSpecProperty {
        /**
         * The egress filter rules for the service mesh.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html#cfn-appmesh-mesh-meshspec-egressfilter
         */
        readonly egressFilter?: CfnMesh.EgressFilterProperty | cdk.IResolvable;
        /**
         * An object that represents the service discovery information for a service mesh.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshspec.html#cfn-appmesh-mesh-meshspec-servicediscovery
         */
        readonly serviceDiscovery?: cdk.IResolvable | CfnMesh.MeshServiceDiscoveryProperty;
    }
    /**
     * An object that represents the egress filter rules for a service mesh.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html
     */
    interface EgressFilterProperty {
        /**
         * The egress filter type.
         *
         * By default, the type is `DROP_ALL` , which allows egress only from virtual nodes to other defined resources in the service mesh (and any traffic to `*.amazonaws.com` for AWS API calls). You can set the egress filter type to `ALLOW_ALL` to allow egress to any endpoint inside or outside of the service mesh.
         *
         * > If you specify any backends on a virtual node when using `ALLOW_ALL` , you must specifiy all egress for that virtual node as backends. Otherwise, `ALLOW_ALL` will no longer work for that virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-egressfilter.html#cfn-appmesh-mesh-egressfilter-type
         */
        readonly type: string;
    }
    /**
     * An object that represents the service discovery information for a service mesh.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshservicediscovery.html
     */
    interface MeshServiceDiscoveryProperty {
        /**
         * The IP version to use to control traffic within the mesh.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-mesh-meshservicediscovery.html#cfn-appmesh-mesh-meshservicediscovery-ippreference
         */
        readonly ipPreference?: string;
    }
}
/**
 * Properties for defining a `CfnMesh`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html
 */
export interface CfnMeshProps {
    /**
     * The name to use for the service mesh.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-meshname
     */
    readonly meshName?: string;
    /**
     * The service mesh specification to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-spec
     */
    readonly spec?: cdk.IResolvable | CfnMesh.MeshSpecProperty;
    /**
     * Optional metadata that you can apply to the service mesh to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-mesh.html#cfn-appmesh-mesh-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a route that is associated with a virtual router.
 *
 * You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.
 *
 * For more information about routes, see [Routes](https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html) .
 *
 * @cloudformationResource AWS::AppMesh::Route
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html
 */
export declare class CfnRoute extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRoute from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRoute;
    /**
     * The full Amazon Resource Name (ARN) for the route.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the route resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The name of the route.
     *
     * @cloudformationAttribute RouteName
     */
    readonly attrRouteName: string;
    /**
     * The unique identifier for the route.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual router that the route is associated with.
     *
     * @cloudformationAttribute VirtualRouterName
     */
    readonly attrVirtualRouterName: string;
    /**
     * The name of the service mesh to create the route in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The name to use for the route.
     */
    routeName?: string;
    /**
     * The route specification to apply.
     */
    spec: cdk.IResolvable | CfnRoute.RouteSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the route to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the virtual router in which to create the route.
     */
    virtualRouterName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRouteProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRoute {
    /**
     * An object that represents a route specification.
     *
     * Specify one route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html
     */
    interface RouteSpecProperty {
        /**
         * An object that represents the specification of a gRPC route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html#cfn-appmesh-route-routespec-grpcroute
         */
        readonly grpcRoute?: CfnRoute.GrpcRouteProperty | cdk.IResolvable;
        /**
         * An object that represents the specification of an HTTP/2 route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html#cfn-appmesh-route-routespec-http2route
         */
        readonly http2Route?: CfnRoute.HttpRouteProperty | cdk.IResolvable;
        /**
         * An object that represents the specification of an HTTP route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html#cfn-appmesh-route-routespec-httproute
         */
        readonly httpRoute?: CfnRoute.HttpRouteProperty | cdk.IResolvable;
        /**
         * The priority for the route.
         *
         * Routes are matched based on the specified value, where 0 is the highest priority.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html#cfn-appmesh-route-routespec-priority
         */
        readonly priority?: number;
        /**
         * An object that represents the specification of a TCP route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-routespec.html#cfn-appmesh-route-routespec-tcproute
         */
        readonly tcpRoute?: cdk.IResolvable | CfnRoute.TcpRouteProperty;
    }
    /**
     * An object that represents an HTTP or HTTP/2 route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html
     */
    interface HttpRouteProperty {
        /**
         * An object that represents the action to take if a match is determined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html#cfn-appmesh-route-httproute-action
         */
        readonly action: CfnRoute.HttpRouteActionProperty | cdk.IResolvable;
        /**
         * An object that represents the criteria for determining a request match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html#cfn-appmesh-route-httproute-match
         */
        readonly match: CfnRoute.HttpRouteMatchProperty | cdk.IResolvable;
        /**
         * An object that represents a retry policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html#cfn-appmesh-route-httproute-retrypolicy
         */
        readonly retryPolicy?: CfnRoute.HttpRetryPolicyProperty | cdk.IResolvable;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproute.html#cfn-appmesh-route-httproute-timeout
         */
        readonly timeout?: CfnRoute.HttpTimeoutProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the action to take if a match is determined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteaction.html
     */
    interface HttpRouteActionProperty {
        /**
         * An object that represents the targets that traffic is routed to when a request matches the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteaction.html#cfn-appmesh-route-httprouteaction-weightedtargets
         */
        readonly weightedTargets: Array<cdk.IResolvable | CfnRoute.WeightedTargetProperty> | cdk.IResolvable;
    }
    /**
     * An object that represents a target and its relative weight.
     *
     * Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html
     */
    interface WeightedTargetProperty {
        /**
         * The targeted port of the weighted object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html#cfn-appmesh-route-weightedtarget-port
         */
        readonly port?: number;
        /**
         * The virtual node to associate with the weighted target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html#cfn-appmesh-route-weightedtarget-virtualnode
         */
        readonly virtualNode: string;
        /**
         * The relative weight of the weighted target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-weightedtarget.html#cfn-appmesh-route-weightedtarget-weight
         */
        readonly weight: number;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html
     */
    interface HttpTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html#cfn-appmesh-route-httptimeout-idle
         */
        readonly idle?: CfnRoute.DurationProperty | cdk.IResolvable;
        /**
         * An object that represents a per request timeout.
         *
         * The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httptimeout.html#cfn-appmesh-route-httptimeout-perrequest
         */
        readonly perRequest?: CfnRoute.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object that represents a duration of time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html
     */
    interface DurationProperty {
        /**
         * A unit of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html#cfn-appmesh-route-duration-unit
         */
        readonly unit: string;
        /**
         * A number of time units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-duration.html#cfn-appmesh-route-duration-value
         */
        readonly value: number;
    }
    /**
     * An object that represents a retry policy.
     *
     * Specify at least one value for at least one of the types of `RetryEvents` , a value for `maxRetries` , and a value for `perRetryTimeout` . Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://docs.aws.amazon.com/https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html
     */
    interface HttpRetryPolicyProperty {
        /**
         * Specify at least one of the following values.
         *
         * - *server-error* – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511
         * - *gateway-error* – HTTP status codes 502, 503, and 504
         * - *client-error* – HTTP status code 409
         * - *stream-error* – Retry on refused stream
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html#cfn-appmesh-route-httpretrypolicy-httpretryevents
         */
        readonly httpRetryEvents?: Array<string>;
        /**
         * The maximum number of retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html#cfn-appmesh-route-httpretrypolicy-maxretries
         */
        readonly maxRetries: number;
        /**
         * The timeout for each retry attempt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html#cfn-appmesh-route-httpretrypolicy-perretrytimeout
         */
        readonly perRetryTimeout: CfnRoute.DurationProperty | cdk.IResolvable;
        /**
         * Specify a valid value.
         *
         * The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpretrypolicy.html#cfn-appmesh-route-httpretrypolicy-tcpretryevents
         */
        readonly tcpRetryEvents?: Array<string>;
    }
    /**
     * An object that represents the requirements for a route to match HTTP requests for a virtual router.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html
     */
    interface HttpRouteMatchProperty {
        /**
         * The client request headers to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-headers
         */
        readonly headers?: Array<CfnRoute.HttpRouteHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The client request method to match on.
         *
         * Specify only one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-method
         */
        readonly method?: string;
        /**
         * The client request path to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-path
         */
        readonly path?: CfnRoute.HttpPathMatchProperty | cdk.IResolvable;
        /**
         * The port number to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-port
         */
        readonly port?: number;
        /**
         * Specifies the path to match requests with.
         *
         * This parameter must always start with `/` , which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics` , your prefix should be `/metrics` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-prefix
         */
        readonly prefix?: string;
        /**
         * The client request query parameters to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-queryparameters
         */
        readonly queryParameters?: Array<cdk.IResolvable | CfnRoute.QueryParameterProperty> | cdk.IResolvable;
        /**
         * The client request scheme to match on.
         *
         * Specify only one. Applicable only for HTTP2 routes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httproutematch.html#cfn-appmesh-route-httproutematch-scheme
         */
        readonly scheme?: string;
    }
    /**
     * An object representing the path to match in the request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html
     */
    interface HttpPathMatchProperty {
        /**
         * The exact path to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html#cfn-appmesh-route-httppathmatch-exact
         */
        readonly exact?: string;
        /**
         * The regex used to match the path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httppathmatch.html#cfn-appmesh-route-httppathmatch-regex
         */
        readonly regex?: string;
    }
    /**
     * An object that represents the HTTP header in the request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html
     */
    interface HttpRouteHeaderProperty {
        /**
         * Specify `True` to match anything except the match criteria.
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html#cfn-appmesh-route-httprouteheader-invert
         */
        readonly invert?: boolean | cdk.IResolvable;
        /**
         * The `HeaderMatchMethod` object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html#cfn-appmesh-route-httprouteheader-match
         */
        readonly match?: CfnRoute.HeaderMatchMethodProperty | cdk.IResolvable;
        /**
         * A name for the HTTP header in the client request that will be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httprouteheader.html#cfn-appmesh-route-httprouteheader-name
         */
        readonly name: string;
    }
    /**
     * An object that represents the method and value to match with the header value sent in a request.
     *
     * Specify one match method.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html
     */
    interface HeaderMatchMethodProperty {
        /**
         * The value sent by the client must match the specified value exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html#cfn-appmesh-route-headermatchmethod-exact
         */
        readonly exact?: string;
        /**
         * The value sent by the client must begin with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html#cfn-appmesh-route-headermatchmethod-prefix
         */
        readonly prefix?: string;
        /**
         * An object that represents the range of values to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html#cfn-appmesh-route-headermatchmethod-range
         */
        readonly range?: cdk.IResolvable | CfnRoute.MatchRangeProperty;
        /**
         * The value sent by the client must include the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html#cfn-appmesh-route-headermatchmethod-regex
         */
        readonly regex?: string;
        /**
         * The value sent by the client must end with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-headermatchmethod.html#cfn-appmesh-route-headermatchmethod-suffix
         */
        readonly suffix?: string;
    }
    /**
     * An object that represents the range of values to match on.
     *
     * The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html
     */
    interface MatchRangeProperty {
        /**
         * The end of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html#cfn-appmesh-route-matchrange-end
         */
        readonly end: number;
        /**
         * The start of the range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-matchrange.html#cfn-appmesh-route-matchrange-start
         */
        readonly start: number;
    }
    /**
     * An object that represents the query parameter in the request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html
     */
    interface QueryParameterProperty {
        /**
         * The query parameter to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html#cfn-appmesh-route-queryparameter-match
         */
        readonly match?: CfnRoute.HttpQueryParameterMatchProperty | cdk.IResolvable;
        /**
         * A name for the query parameter that will be matched on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-queryparameter.html#cfn-appmesh-route-queryparameter-name
         */
        readonly name: string;
    }
    /**
     * An object representing the query parameter to match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpqueryparametermatch.html
     */
    interface HttpQueryParameterMatchProperty {
        /**
         * The exact query parameter to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-httpqueryparametermatch.html#cfn-appmesh-route-httpqueryparametermatch-exact
         */
        readonly exact?: string;
    }
    /**
     * An object that represents a gRPC route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html
     */
    interface GrpcRouteProperty {
        /**
         * An object that represents the action to take if a match is determined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html#cfn-appmesh-route-grpcroute-action
         */
        readonly action: CfnRoute.GrpcRouteActionProperty | cdk.IResolvable;
        /**
         * An object that represents the criteria for determining a request match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html#cfn-appmesh-route-grpcroute-match
         */
        readonly match: CfnRoute.GrpcRouteMatchProperty | cdk.IResolvable;
        /**
         * An object that represents a retry policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html#cfn-appmesh-route-grpcroute-retrypolicy
         */
        readonly retryPolicy?: CfnRoute.GrpcRetryPolicyProperty | cdk.IResolvable;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroute.html#cfn-appmesh-route-grpcroute-timeout
         */
        readonly timeout?: CfnRoute.GrpcTimeoutProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the action to take if a match is determined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcrouteaction.html
     */
    interface GrpcRouteActionProperty {
        /**
         * An object that represents the targets that traffic is routed to when a request matches the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcrouteaction.html#cfn-appmesh-route-grpcrouteaction-weightedtargets
         */
        readonly weightedTargets: Array<cdk.IResolvable | CfnRoute.WeightedTargetProperty> | cdk.IResolvable;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html
     */
    interface GrpcTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html#cfn-appmesh-route-grpctimeout-idle
         */
        readonly idle?: CfnRoute.DurationProperty | cdk.IResolvable;
        /**
         * An object that represents a per request timeout.
         *
         * The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpctimeout.html#cfn-appmesh-route-grpctimeout-perrequest
         */
        readonly perRequest?: CfnRoute.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object that represents a retry policy.
     *
     * Specify at least one value for at least one of the types of `RetryEvents` , a value for `maxRetries` , and a value for `perRetryTimeout` . Both `server-error` and `gateway-error` under `httpRetryEvents` include the Envoy `reset` policy. For more information on the `reset` policy, see the [Envoy documentation](https://docs.aws.amazon.com/https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html
     */
    interface GrpcRetryPolicyProperty {
        /**
         * Specify at least one of the valid values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html#cfn-appmesh-route-grpcretrypolicy-grpcretryevents
         */
        readonly grpcRetryEvents?: Array<string>;
        /**
         * Specify at least one of the following values.
         *
         * - *server-error* – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511
         * - *gateway-error* – HTTP status codes 502, 503, and 504
         * - *client-error* – HTTP status code 409
         * - *stream-error* – Retry on refused stream
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html#cfn-appmesh-route-grpcretrypolicy-httpretryevents
         */
        readonly httpRetryEvents?: Array<string>;
        /**
         * The maximum number of retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html#cfn-appmesh-route-grpcretrypolicy-maxretries
         */
        readonly maxRetries: number;
        /**
         * The timeout for each retry attempt.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html#cfn-appmesh-route-grpcretrypolicy-perretrytimeout
         */
        readonly perRetryTimeout: CfnRoute.DurationProperty | cdk.IResolvable;
        /**
         * Specify a valid value.
         *
         * The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcretrypolicy.html#cfn-appmesh-route-grpcretrypolicy-tcpretryevents
         */
        readonly tcpRetryEvents?: Array<string>;
    }
    /**
     * An object that represents the criteria for determining a request match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html
     */
    interface GrpcRouteMatchProperty {
        /**
         * An object that represents the data to match from the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html#cfn-appmesh-route-grpcroutematch-metadata
         */
        readonly metadata?: Array<CfnRoute.GrpcRouteMetadataProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The method name to match from the request.
         *
         * If you specify a name, you must also specify a `serviceName` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html#cfn-appmesh-route-grpcroutematch-methodname
         */
        readonly methodName?: string;
        /**
         * The port number to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html#cfn-appmesh-route-grpcroutematch-port
         */
        readonly port?: number;
        /**
         * The fully qualified domain name for the service to match from the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutematch.html#cfn-appmesh-route-grpcroutematch-servicename
         */
        readonly serviceName?: string;
    }
    /**
     * An object that represents the match metadata for the route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html
     */
    interface GrpcRouteMetadataProperty {
        /**
         * Specify `True` to match anything except the match criteria.
         *
         * The default value is `False` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html#cfn-appmesh-route-grpcroutemetadata-invert
         */
        readonly invert?: boolean | cdk.IResolvable;
        /**
         * An object that represents the data to match from the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html#cfn-appmesh-route-grpcroutemetadata-match
         */
        readonly match?: CfnRoute.GrpcRouteMetadataMatchMethodProperty | cdk.IResolvable;
        /**
         * The name of the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadata.html#cfn-appmesh-route-grpcroutemetadata-name
         */
        readonly name: string;
    }
    /**
     * An object that represents the match method.
     *
     * Specify one of the match values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html
     */
    interface GrpcRouteMetadataMatchMethodProperty {
        /**
         * The value sent by the client must match the specified value exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html#cfn-appmesh-route-grpcroutemetadatamatchmethod-exact
         */
        readonly exact?: string;
        /**
         * The value sent by the client must begin with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html#cfn-appmesh-route-grpcroutemetadatamatchmethod-prefix
         */
        readonly prefix?: string;
        /**
         * An object that represents the range of values to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html#cfn-appmesh-route-grpcroutemetadatamatchmethod-range
         */
        readonly range?: cdk.IResolvable | CfnRoute.MatchRangeProperty;
        /**
         * The value sent by the client must include the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html#cfn-appmesh-route-grpcroutemetadatamatchmethod-regex
         */
        readonly regex?: string;
        /**
         * The value sent by the client must end with the specified characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-grpcroutemetadatamatchmethod.html#cfn-appmesh-route-grpcroutemetadatamatchmethod-suffix
         */
        readonly suffix?: string;
    }
    /**
     * An object that represents a TCP route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html
     */
    interface TcpRouteProperty {
        /**
         * The action to take if a match is determined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html#cfn-appmesh-route-tcproute-action
         */
        readonly action: cdk.IResolvable | CfnRoute.TcpRouteActionProperty;
        /**
         * An object that represents the criteria for determining a request match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html#cfn-appmesh-route-tcproute-match
         */
        readonly match?: cdk.IResolvable | CfnRoute.TcpRouteMatchProperty;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproute.html#cfn-appmesh-route-tcproute-timeout
         */
        readonly timeout?: cdk.IResolvable | CfnRoute.TcpTimeoutProperty;
    }
    /**
     * An object that represents the action to take if a match is determined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcprouteaction.html
     */
    interface TcpRouteActionProperty {
        /**
         * An object that represents the targets that traffic is routed to when a request matches the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcprouteaction.html#cfn-appmesh-route-tcprouteaction-weightedtargets
         */
        readonly weightedTargets: Array<cdk.IResolvable | CfnRoute.WeightedTargetProperty> | cdk.IResolvable;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcptimeout.html
     */
    interface TcpTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcptimeout.html#cfn-appmesh-route-tcptimeout-idle
         */
        readonly idle?: CfnRoute.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object representing the TCP route to match.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproutematch.html
     */
    interface TcpRouteMatchProperty {
        /**
         * The port number to match on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-route-tcproutematch.html#cfn-appmesh-route-tcproutematch-port
         */
        readonly port?: number;
    }
}
/**
 * Properties for defining a `CfnRoute`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html
 */
export interface CfnRouteProps {
    /**
     * The name of the service mesh to create the route in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The name to use for the route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-routename
     */
    readonly routeName?: string;
    /**
     * The route specification to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-spec
     */
    readonly spec: cdk.IResolvable | CfnRoute.RouteSpecProperty;
    /**
     * Optional metadata that you can apply to the route to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the virtual router in which to create the route.
     *
     * If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-route.html#cfn-appmesh-route-virtualroutername
     */
    readonly virtualRouterName: string;
}
/**
 * Creates a virtual gateway.
 *
 * A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.
 *
 * For more information about virtual gateways, see [Virtual gateways](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html) .
 *
 * @cloudformationResource AWS::AppMesh::VirtualGateway
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html
 */
export declare class CfnVirtualGateway extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVirtualGateway from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVirtualGateway;
    /**
     * The full Amazon Resource Name (ARN) for the virtual gateway.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the virtual gateway resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the virtual gateway.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual gateway.
     *
     * @cloudformationAttribute VirtualGatewayName
     */
    readonly attrVirtualGatewayName: string;
    /**
     * The name of the service mesh that the virtual gateway resides in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The specifications of the virtual gateway.
     */
    spec: cdk.IResolvable | CfnVirtualGateway.VirtualGatewaySpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the virtual gateway.
     */
    virtualGatewayName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVirtualGatewayProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVirtualGateway {
    /**
     * An object that represents the specification of a service mesh resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html
     */
    interface VirtualGatewaySpecProperty {
        /**
         * A reference to an object that represents the defaults for backends.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html#cfn-appmesh-virtualgateway-virtualgatewayspec-backenddefaults
         */
        readonly backendDefaults?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayBackendDefaultsProperty;
        /**
         * The listeners that the mesh endpoint is expected to receive inbound traffic from.
         *
         * You can specify one listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html#cfn-appmesh-virtualgateway-virtualgatewayspec-listeners
         */
        readonly listeners: Array<cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerProperty> | cdk.IResolvable;
        /**
         * An object that represents logging information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayspec.html#cfn-appmesh-virtualgateway-virtualgatewayspec-logging
         */
        readonly logging?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayLoggingProperty;
    }
    /**
     * An object that represents logging information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html
     */
    interface VirtualGatewayLoggingProperty {
        /**
         * The access log configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html#cfn-appmesh-virtualgateway-virtualgatewaylogging-accesslog
         */
        readonly accessLog?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayAccessLogProperty;
    }
    /**
     * The access log configuration for a virtual gateway.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html
     */
    interface VirtualGatewayAccessLogProperty {
        /**
         * The file object to send virtual gateway access logs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html#cfn-appmesh-virtualgateway-virtualgatewayaccesslog-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayFileAccessLogProperty;
    }
    /**
     * An object that represents an access log file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html
     */
    interface VirtualGatewayFileAccessLogProperty {
        /**
         * The specified format for the virtual gateway access logs.
         *
         * It can be either `json_format` or `text_format` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html#cfn-appmesh-virtualgateway-virtualgatewayfileaccesslog-format
         */
        readonly format?: cdk.IResolvable | CfnVirtualGateway.LoggingFormatProperty;
        /**
         * The file path to write access logs to.
         *
         * You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs` , to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html#cfn-appmesh-virtualgateway-virtualgatewayfileaccesslog-path
         */
        readonly path: string;
    }
    /**
     * An object that represents the format for the logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html
     */
    interface LoggingFormatProperty {
        /**
         * The logging format for JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html#cfn-appmesh-virtualgateway-loggingformat-json
         */
        readonly json?: Array<cdk.IResolvable | CfnVirtualGateway.JsonFormatRefProperty> | cdk.IResolvable;
        /**
         * The logging format for text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-loggingformat.html#cfn-appmesh-virtualgateway-loggingformat-text
         */
        readonly text?: string;
    }
    /**
     * An object that represents the key value pairs for the JSON.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html
     */
    interface JsonFormatRefProperty {
        /**
         * The specified key for the JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html#cfn-appmesh-virtualgateway-jsonformatref-key
         */
        readonly key: string;
        /**
         * The specified value for the JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-jsonformatref.html#cfn-appmesh-virtualgateway-jsonformatref-value
         */
        readonly value: string;
    }
    /**
     * An object that represents a listener for a virtual gateway.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html
     */
    interface VirtualGatewayListenerProperty {
        /**
         * The connection pool information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-connectionpool
         */
        readonly connectionPool?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayConnectionPoolProperty;
        /**
         * The health check information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-healthcheck
         */
        readonly healthCheck?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayHealthCheckPolicyProperty;
        /**
         * The port mapping information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-portmapping
         */
        readonly portMapping: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayPortMappingProperty;
        /**
         * A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-tls
         */
        readonly tls?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsProperty;
    }
    /**
     * An object that represents the type of virtual gateway connection pool.
     *
     * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
     *
     * If not present the default value for `maxPendingRequests` is `2147483647` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html
     */
    interface VirtualGatewayConnectionPoolProperty {
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-grpc
         */
        readonly grpc?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayGrpcConnectionPoolProperty;
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-http
         */
        readonly http?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayHttpConnectionPoolProperty;
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-http2
         */
        readonly http2?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayHttp2ConnectionPoolProperty;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html
     */
    interface VirtualGatewayHttp2ConnectionPoolProperty {
        /**
         * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayhttp2connectionpool-maxrequests
         */
        readonly maxRequests: number;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html
     */
    interface VirtualGatewayHttpConnectionPoolProperty {
        /**
         * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayhttpconnectionpool-maxconnections
         */
        readonly maxConnections: number;
        /**
         * Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewayhttpconnectionpool-maxpendingrequests
         */
        readonly maxPendingRequests?: number;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html
     */
    interface VirtualGatewayGrpcConnectionPoolProperty {
        /**
         * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html#cfn-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool-maxrequests
         */
        readonly maxRequests: number;
    }
    /**
     * An object that represents the health check policy for a virtual gateway's listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html
     */
    interface VirtualGatewayHealthCheckPolicyProperty {
        /**
         * The number of consecutive successful health checks that must occur before declaring the listener healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-healthythreshold
         */
        readonly healthyThreshold: number;
        /**
         * The time period in milliseconds between each health check execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-intervalmillis
         */
        readonly intervalMillis: number;
        /**
         * The destination path for the health check request.
         *
         * This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-path
         */
        readonly path?: string;
        /**
         * The destination port for the health check request.
         *
         * This port must match the port defined in the `PortMapping` for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-port
         */
        readonly port?: number;
        /**
         * The protocol for the health check request.
         *
         * If you specify `grpc` , then your service must conform to the [GRPC Health Checking Protocol](https://docs.aws.amazon.com/https://github.com/grpc/grpc/blob/master/doc/health-checking.md) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-protocol
         */
        readonly protocol: string;
        /**
         * The amount of time to wait when receiving a response from the health check, in milliseconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-timeoutmillis
         */
        readonly timeoutMillis: number;
        /**
         * The number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-unhealthythreshold
         */
        readonly unhealthyThreshold: number;
    }
    /**
     * An object that represents the Transport Layer Security (TLS) properties for a listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html
     */
    interface VirtualGatewayListenerTlsProperty {
        /**
         * An object that represents a Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-certificate
         */
        readonly certificate: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsCertificateProperty;
        /**
         * Specify one of the following modes.
         *
         * - ** STRICT – Listener only accepts connections with TLS enabled.
         * - ** PERMISSIVE – Listener accepts connections with or without TLS enabled.
         * - ** DISABLED – Listener only accepts connections without TLS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-mode
         */
        readonly mode: string;
        /**
         * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-validation
         */
        readonly validation?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsValidationContextProperty;
    }
    /**
     * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html
     */
    interface VirtualGatewayListenerTlsValidationContextProperty {
        /**
         * A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext-subjectalternativenames
         */
        readonly subjectAlternativeNames?: cdk.IResolvable | CfnVirtualGateway.SubjectAlternativeNamesProperty;
        /**
         * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext-trust
         */
        readonly trust: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsValidationContextTrustProperty;
    }
    /**
     * An object that represents the subject alternative names secured by the certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenames.html
     */
    interface SubjectAlternativeNamesProperty {
        /**
         * An object that represents the criteria for determining a SANs match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenames.html#cfn-appmesh-virtualgateway-subjectalternativenames-match
         */
        readonly match: cdk.IResolvable | CfnVirtualGateway.SubjectAlternativeNameMatchersProperty;
    }
    /**
     * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html
     */
    interface SubjectAlternativeNameMatchersProperty {
        /**
         * The values sent must match the specified values exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html#cfn-appmesh-virtualgateway-subjectalternativenamematchers-exact
         */
        readonly exact?: Array<string>;
    }
    /**
     * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html
     */
    interface VirtualGatewayListenerTlsValidationContextTrustProperty {
        /**
         * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextFileTrustProperty;
        /**
         * A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextSdsTrustProperty;
    }
    /**
     * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
     *
     * The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html
     */
    interface VirtualGatewayTlsValidationContextSdsTrustProperty {
        /**
         * A reference to an object that represents the name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust-secretname
         */
        readonly secretName: string;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html
     */
    interface VirtualGatewayTlsValidationContextFileTrustProperty {
        /**
         * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust-certificatechain
         */
        readonly certificateChain: string;
    }
    /**
     * An object that represents a listener's Transport Layer Security (TLS) certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html
     */
    interface VirtualGatewayListenerTlsCertificateProperty {
        /**
         * A reference to an object that represents an AWS Certificate Manager certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-acm
         */
        readonly acm?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsAcmCertificateProperty;
        /**
         * A reference to an object that represents a local file certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsFileCertificateProperty;
        /**
         * A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsSdsCertificateProperty;
    }
    /**
     * An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html
     */
    interface VirtualGatewayListenerTlsSdsCertificateProperty {
        /**
         * A reference to an object that represents the name of the secret secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate-secretname
         */
        readonly secretName: string;
    }
    /**
     * An object that represents an AWS Certificate Manager certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html
     */
    interface VirtualGatewayListenerTlsAcmCertificateProperty {
        /**
         * The Amazon Resource Name (ARN) for the certificate.
         *
         * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate-certificatearn
         */
        readonly certificateArn: string;
    }
    /**
     * An object that represents a local file certificate.
     *
     * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html
     */
    interface VirtualGatewayListenerTlsFileCertificateProperty {
        /**
         * The certificate chain for the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate-certificatechain
         */
        readonly certificateChain: string;
        /**
         * The private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate-privatekey
         */
        readonly privateKey: string;
    }
    /**
     * An object that represents a port mapping.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html
     */
    interface VirtualGatewayPortMappingProperty {
        /**
         * The port used for the port mapping.
         *
         * Specify one protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html#cfn-appmesh-virtualgateway-virtualgatewayportmapping-port
         */
        readonly port: number;
        /**
         * The protocol used for the port mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html#cfn-appmesh-virtualgateway-virtualgatewayportmapping-protocol
         */
        readonly protocol: string;
    }
    /**
     * An object that represents the default properties for a backend.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html
     */
    interface VirtualGatewayBackendDefaultsProperty {
        /**
         * A reference to an object that represents a client policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html#cfn-appmesh-virtualgateway-virtualgatewaybackenddefaults-clientpolicy
         */
        readonly clientPolicy?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayClientPolicyProperty;
    }
    /**
     * An object that represents a client policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html
     */
    interface VirtualGatewayClientPolicyProperty {
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) client policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicy-tls
         */
        readonly tls?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayClientPolicyTlsProperty;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) client policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html
     */
    interface VirtualGatewayClientPolicyTlsProperty {
        /**
         * A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-certificate
         */
        readonly certificate?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayClientTlsCertificateProperty;
        /**
         * Whether the policy is enforced.
         *
         * The default is `True` , if a value isn't specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-enforce
         */
        readonly enforce?: boolean | cdk.IResolvable;
        /**
         * One or more ports that the policy is enforced for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-ports
         */
        readonly ports?: Array<number> | cdk.IResolvable;
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-validation
         */
        readonly validation: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextProperty;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html
     */
    interface VirtualGatewayTlsValidationContextProperty {
        /**
         * A reference to an object that represents the SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext-subjectalternativenames
         */
        readonly subjectAlternativeNames?: cdk.IResolvable | CfnVirtualGateway.SubjectAlternativeNamesProperty;
        /**
         * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext-trust
         */
        readonly trust: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextTrustProperty;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html
     */
    interface VirtualGatewayTlsValidationContextTrustProperty {
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-acm
         */
        readonly acm?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextAcmTrustProperty;
        /**
         * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextFileTrustProperty;
        /**
         * A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayTlsValidationContextSdsTrustProperty;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html
     */
    interface VirtualGatewayTlsValidationContextAcmTrustProperty {
        /**
         * One or more ACM Amazon Resource Name (ARN)s.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust-certificateauthorityarns
         */
        readonly certificateAuthorityArns: Array<string>;
    }
    /**
     * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html
     */
    interface VirtualGatewayClientTlsCertificateProperty {
        /**
         * An object that represents a local file certificate.
         *
         * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html#cfn-appmesh-virtualgateway-virtualgatewayclienttlscertificate-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsFileCertificateProperty;
        /**
         * A reference to an object that represents a virtual gateway's client's Secret Discovery Service certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html#cfn-appmesh-virtualgateway-virtualgatewayclienttlscertificate-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualGateway.VirtualGatewayListenerTlsSdsCertificateProperty;
    }
}
/**
 * Properties for defining a `CfnVirtualGateway`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html
 */
export interface CfnVirtualGatewayProps {
    /**
     * The name of the service mesh that the virtual gateway resides in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The specifications of the virtual gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-spec
     */
    readonly spec: cdk.IResolvable | CfnVirtualGateway.VirtualGatewaySpecProperty;
    /**
     * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the virtual gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayname
     */
    readonly virtualGatewayName?: string;
}
/**
 * Creates a virtual node within a service mesh.
 *
 * A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).
 *
 * You define a `listener` for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a `backend` .
 *
 * The response metadata for your new virtual node contains the `arn` that is associated with the virtual node. Set this value to the full ARN; for example, `arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp` ) as the `APPMESH_RESOURCE_ARN` environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the `node.id` and `node.cluster` Envoy parameters.
 *
 * > By default, App Mesh uses the name of the resource you specified in `APPMESH_RESOURCE_ARN` when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the `APPMESH_RESOURCE_CLUSTER` environment variable with your own name.
 *
 * For more information about virtual nodes, see [Virtual nodes](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html) . You must be using `1.15.0` or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see [Envoy image](https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html) in the AWS App Mesh User Guide.
 *
 * @cloudformationResource AWS::AppMesh::VirtualNode
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html
 */
export declare class CfnVirtualNode extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVirtualNode from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVirtualNode;
    /**
     * The full Amazon Resource Name (ARN) for the virtual node.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the virtual node resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the virtual node.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual node.
     *
     * @cloudformationAttribute VirtualNodeName
     */
    readonly attrVirtualNodeName: string;
    /**
     * The name of the service mesh to create the virtual node in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The virtual node specification to apply.
     */
    spec: cdk.IResolvable | CfnVirtualNode.VirtualNodeSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the virtual node to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual node.
     */
    virtualNodeName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVirtualNodeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVirtualNode {
    /**
     * An object that represents the specification of a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html
     */
    interface VirtualNodeSpecProperty {
        /**
         * A reference to an object that represents the defaults for backends.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html#cfn-appmesh-virtualnode-virtualnodespec-backenddefaults
         */
        readonly backendDefaults?: CfnVirtualNode.BackendDefaultsProperty | cdk.IResolvable;
        /**
         * The backends that the virtual node is expected to send outbound traffic to.
         *
         * > App Mesh doesn't validate the existence of those virtual services specified in backends. This is to prevent a cyclic dependency between virtual nodes and virtual services creation. Make sure the virtual service name is correct. The virtual service can be created afterwards if it doesn't already exist.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html#cfn-appmesh-virtualnode-virtualnodespec-backends
         */
        readonly backends?: Array<CfnVirtualNode.BackendProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The listener that the virtual node is expected to receive inbound traffic from.
         *
         * You can specify one listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html#cfn-appmesh-virtualnode-virtualnodespec-listeners
         */
        readonly listeners?: Array<cdk.IResolvable | CfnVirtualNode.ListenerProperty> | cdk.IResolvable;
        /**
         * The inbound and outbound access logging information for the virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html#cfn-appmesh-virtualnode-virtualnodespec-logging
         */
        readonly logging?: cdk.IResolvable | CfnVirtualNode.LoggingProperty;
        /**
         * The service discovery information for the virtual node.
         *
         * If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a `listener` , then you must specify service discovery information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodespec.html#cfn-appmesh-virtualnode-virtualnodespec-servicediscovery
         */
        readonly serviceDiscovery?: cdk.IResolvable | CfnVirtualNode.ServiceDiscoveryProperty;
    }
    /**
     * An object that represents the logging information for a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-logging.html
     */
    interface LoggingProperty {
        /**
         * The access log configuration for a virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-logging.html#cfn-appmesh-virtualnode-logging-accesslog
         */
        readonly accessLog?: CfnVirtualNode.AccessLogProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the access logging information for a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-accesslog.html
     */
    interface AccessLogProperty {
        /**
         * The file object to send virtual node access logs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-accesslog.html#cfn-appmesh-virtualnode-accesslog-file
         */
        readonly file?: CfnVirtualNode.FileAccessLogProperty | cdk.IResolvable;
    }
    /**
     * An object that represents an access log file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html
     */
    interface FileAccessLogProperty {
        /**
         * The specified format for the logs.
         *
         * The format is either `json_format` or `text_format` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html#cfn-appmesh-virtualnode-fileaccesslog-format
         */
        readonly format?: cdk.IResolvable | CfnVirtualNode.LoggingFormatProperty;
        /**
         * The file path to write access logs to.
         *
         * You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs` , to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
         *
         * > The Envoy process must have write permissions to the path that you specify here. Otherwise, Envoy fails to bootstrap properly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-fileaccesslog.html#cfn-appmesh-virtualnode-fileaccesslog-path
         */
        readonly path: string;
    }
    /**
     * An object that represents the format for the logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html
     */
    interface LoggingFormatProperty {
        /**
         * The logging format for JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html#cfn-appmesh-virtualnode-loggingformat-json
         */
        readonly json?: Array<cdk.IResolvable | CfnVirtualNode.JsonFormatRefProperty> | cdk.IResolvable;
        /**
         * The logging format for text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-loggingformat.html#cfn-appmesh-virtualnode-loggingformat-text
         */
        readonly text?: string;
    }
    /**
     * An object that represents the key value pairs for the JSON.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html
     */
    interface JsonFormatRefProperty {
        /**
         * The specified key for the JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html#cfn-appmesh-virtualnode-jsonformatref-key
         */
        readonly key: string;
        /**
         * The specified value for the JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-jsonformatref.html#cfn-appmesh-virtualnode-jsonformatref-value
         */
        readonly value: string;
    }
    /**
     * An object that represents the backends that a virtual node is expected to send outbound traffic to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backend.html
     */
    interface BackendProperty {
        /**
         * Specifies a virtual service to use as a backend.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backend.html#cfn-appmesh-virtualnode-backend-virtualservice
         */
        readonly virtualService?: cdk.IResolvable | CfnVirtualNode.VirtualServiceBackendProperty;
    }
    /**
     * An object that represents a virtual service backend for a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html
     */
    interface VirtualServiceBackendProperty {
        /**
         * A reference to an object that represents the client policy for a backend.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html#cfn-appmesh-virtualnode-virtualservicebackend-clientpolicy
         */
        readonly clientPolicy?: CfnVirtualNode.ClientPolicyProperty | cdk.IResolvable;
        /**
         * The name of the virtual service that is acting as a virtual node backend.
         *
         * > App Mesh doesn't validate the existence of those virtual services specified in backends. This is to prevent a cyclic dependency between virtual nodes and virtual services creation. Make sure the virtual service name is correct. The virtual service can be created afterwards if it doesn't already exist.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualservicebackend.html#cfn-appmesh-virtualnode-virtualservicebackend-virtualservicename
         */
        readonly virtualServiceName: string;
    }
    /**
     * An object that represents a client policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicy.html
     */
    interface ClientPolicyProperty {
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) client policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicy.html#cfn-appmesh-virtualnode-clientpolicy-tls
         */
        readonly tls?: CfnVirtualNode.ClientPolicyTlsProperty | cdk.IResolvable;
    }
    /**
     * A reference to an object that represents a Transport Layer Security (TLS) client policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html
     */
    interface ClientPolicyTlsProperty {
        /**
         * A reference to an object that represents a client's TLS certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html#cfn-appmesh-virtualnode-clientpolicytls-certificate
         */
        readonly certificate?: CfnVirtualNode.ClientTlsCertificateProperty | cdk.IResolvable;
        /**
         * Whether the policy is enforced.
         *
         * The default is `True` , if a value isn't specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html#cfn-appmesh-virtualnode-clientpolicytls-enforce
         */
        readonly enforce?: boolean | cdk.IResolvable;
        /**
         * One or more ports that the policy is enforced for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html#cfn-appmesh-virtualnode-clientpolicytls-ports
         */
        readonly ports?: Array<number> | cdk.IResolvable;
        /**
         * A reference to an object that represents a TLS validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clientpolicytls.html#cfn-appmesh-virtualnode-clientpolicytls-validation
         */
        readonly validation: cdk.IResolvable | CfnVirtualNode.TlsValidationContextProperty;
    }
    /**
     * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html
     */
    interface TlsValidationContextProperty {
        /**
         * A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context.
         *
         * If you don't specify SANs on the *terminating* mesh endpoint, the Envoy proxy for that node doesn't verify the SAN on a peer client certificate. If you don't specify SANs on the *originating* mesh endpoint, the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the SAN since the name doesn't match the service discovery name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html#cfn-appmesh-virtualnode-tlsvalidationcontext-subjectalternativenames
         */
        readonly subjectAlternativeNames?: cdk.IResolvable | CfnVirtualNode.SubjectAlternativeNamesProperty;
        /**
         * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontext.html#cfn-appmesh-virtualnode-tlsvalidationcontext-trust
         */
        readonly trust: cdk.IResolvable | CfnVirtualNode.TlsValidationContextTrustProperty;
    }
    /**
     * An object that represents the subject alternative names secured by the certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenames.html
     */
    interface SubjectAlternativeNamesProperty {
        /**
         * An object that represents the criteria for determining a SANs match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenames.html#cfn-appmesh-virtualnode-subjectalternativenames-match
         */
        readonly match: cdk.IResolvable | CfnVirtualNode.SubjectAlternativeNameMatchersProperty;
    }
    /**
     * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html
     */
    interface SubjectAlternativeNameMatchersProperty {
        /**
         * The values sent must match the specified values exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html#cfn-appmesh-virtualnode-subjectalternativenamematchers-exact
         */
        readonly exact?: Array<string>;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html
     */
    interface TlsValidationContextTrustProperty {
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-acm
         */
        readonly acm?: cdk.IResolvable | CfnVirtualNode.TlsValidationContextAcmTrustProperty;
        /**
         * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualNode.TlsValidationContextFileTrustProperty;
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualNode.TlsValidationContextSdsTrustProperty;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
     *
     * The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html
     */
    interface TlsValidationContextSdsTrustProperty {
        /**
         * A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html#cfn-appmesh-virtualnode-tlsvalidationcontextsdstrust-secretname
         */
        readonly secretName: string;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html
     */
    interface TlsValidationContextAcmTrustProperty {
        /**
         * One or more ACM Amazon Resource Name (ARN)s.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html#cfn-appmesh-virtualnode-tlsvalidationcontextacmtrust-certificateauthorityarns
         */
        readonly certificateAuthorityArns: Array<string>;
    }
    /**
     * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html
     */
    interface TlsValidationContextFileTrustProperty {
        /**
         * The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html#cfn-appmesh-virtualnode-tlsvalidationcontextfiletrust-certificatechain
         */
        readonly certificateChain: string;
    }
    /**
     * An object that represents the client's certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html
     */
    interface ClientTlsCertificateProperty {
        /**
         * An object that represents a local file certificate.
         *
         * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html#cfn-appmesh-virtualnode-clienttlscertificate-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualNode.ListenerTlsFileCertificateProperty;
        /**
         * A reference to an object that represents a client's TLS Secret Discovery Service certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-clienttlscertificate.html#cfn-appmesh-virtualnode-clienttlscertificate-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualNode.ListenerTlsSdsCertificateProperty;
    }
    /**
     * An object that represents the listener's Secret Discovery Service certificate.
     *
     * The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlssdscertificate.html
     */
    interface ListenerTlsSdsCertificateProperty {
        /**
         * A reference to an object that represents the name of the secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlssdscertificate.html#cfn-appmesh-virtualnode-listenertlssdscertificate-secretname
         */
        readonly secretName: string;
    }
    /**
     * An object that represents a local file certificate.
     *
     * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html
     */
    interface ListenerTlsFileCertificateProperty {
        /**
         * The certificate chain for the certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html#cfn-appmesh-virtualnode-listenertlsfilecertificate-certificatechain
         */
        readonly certificateChain: string;
        /**
         * The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html#cfn-appmesh-virtualnode-listenertlsfilecertificate-privatekey
         */
        readonly privateKey: string;
    }
    /**
     * An object that represents a listener for a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html
     */
    interface ListenerProperty {
        /**
         * The connection pool information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-connectionpool
         */
        readonly connectionPool?: cdk.IResolvable | CfnVirtualNode.VirtualNodeConnectionPoolProperty;
        /**
         * The health check information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-healthcheck
         */
        readonly healthCheck?: CfnVirtualNode.HealthCheckProperty | cdk.IResolvable;
        /**
         * The outlier detection information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-outlierdetection
         */
        readonly outlierDetection?: cdk.IResolvable | CfnVirtualNode.OutlierDetectionProperty;
        /**
         * The port mapping information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-portmapping
         */
        readonly portMapping: cdk.IResolvable | CfnVirtualNode.PortMappingProperty;
        /**
         * An object that represents timeouts for different protocols.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-timeout
         */
        readonly timeout?: cdk.IResolvable | CfnVirtualNode.ListenerTimeoutProperty;
        /**
         * A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-tls
         */
        readonly tls?: cdk.IResolvable | CfnVirtualNode.ListenerTlsProperty;
    }
    /**
     * An object that represents the type of virtual node connection pool.
     *
     * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
     *
     * If not present the default value for `maxPendingRequests` is `2147483647` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html
     */
    interface VirtualNodeConnectionPoolProperty {
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-grpc
         */
        readonly grpc?: cdk.IResolvable | CfnVirtualNode.VirtualNodeGrpcConnectionPoolProperty;
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http
         */
        readonly http?: cdk.IResolvable | CfnVirtualNode.VirtualNodeHttpConnectionPoolProperty;
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http2
         */
        readonly http2?: cdk.IResolvable | CfnVirtualNode.VirtualNodeHttp2ConnectionPoolProperty;
        /**
         * An object that represents a type of connection pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-tcp
         */
        readonly tcp?: cdk.IResolvable | CfnVirtualNode.VirtualNodeTcpConnectionPoolProperty;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html
     */
    interface VirtualNodeTcpConnectionPoolProperty {
        /**
         * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html#cfn-appmesh-virtualnode-virtualnodetcpconnectionpool-maxconnections
         */
        readonly maxConnections: number;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html
     */
    interface VirtualNodeHttp2ConnectionPoolProperty {
        /**
         * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html#cfn-appmesh-virtualnode-virtualnodehttp2connectionpool-maxrequests
         */
        readonly maxRequests: number;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html
     */
    interface VirtualNodeHttpConnectionPoolProperty {
        /**
         * Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html#cfn-appmesh-virtualnode-virtualnodehttpconnectionpool-maxconnections
         */
        readonly maxConnections: number;
        /**
         * Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html#cfn-appmesh-virtualnode-virtualnodehttpconnectionpool-maxpendingrequests
         */
        readonly maxPendingRequests?: number;
    }
    /**
     * An object that represents a type of connection pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html
     */
    interface VirtualNodeGrpcConnectionPoolProperty {
        /**
         * Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html#cfn-appmesh-virtualnode-virtualnodegrpcconnectionpool-maxrequests
         */
        readonly maxRequests: number;
    }
    /**
     * An object that represents timeouts for different protocols.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html
     */
    interface ListenerTimeoutProperty {
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html#cfn-appmesh-virtualnode-listenertimeout-grpc
         */
        readonly grpc?: CfnVirtualNode.GrpcTimeoutProperty | cdk.IResolvable;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html#cfn-appmesh-virtualnode-listenertimeout-http
         */
        readonly http?: CfnVirtualNode.HttpTimeoutProperty | cdk.IResolvable;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html#cfn-appmesh-virtualnode-listenertimeout-http2
         */
        readonly http2?: CfnVirtualNode.HttpTimeoutProperty | cdk.IResolvable;
        /**
         * An object that represents types of timeouts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertimeout.html#cfn-appmesh-virtualnode-listenertimeout-tcp
         */
        readonly tcp?: cdk.IResolvable | CfnVirtualNode.TcpTimeoutProperty;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tcptimeout.html
     */
    interface TcpTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-tcptimeout.html#cfn-appmesh-virtualnode-tcptimeout-idle
         */
        readonly idle?: CfnVirtualNode.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object that represents a duration of time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html
     */
    interface DurationProperty {
        /**
         * A unit of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html#cfn-appmesh-virtualnode-duration-unit
         */
        readonly unit: string;
        /**
         * A number of time units.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-duration.html#cfn-appmesh-virtualnode-duration-value
         */
        readonly value: number;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html
     */
    interface HttpTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html#cfn-appmesh-virtualnode-httptimeout-idle
         */
        readonly idle?: CfnVirtualNode.DurationProperty | cdk.IResolvable;
        /**
         * An object that represents a per request timeout.
         *
         * The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-httptimeout.html#cfn-appmesh-virtualnode-httptimeout-perrequest
         */
        readonly perRequest?: CfnVirtualNode.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object that represents types of timeouts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html
     */
    interface GrpcTimeoutProperty {
        /**
         * An object that represents an idle timeout.
         *
         * An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html#cfn-appmesh-virtualnode-grpctimeout-idle
         */
        readonly idle?: CfnVirtualNode.DurationProperty | cdk.IResolvable;
        /**
         * An object that represents a per request timeout.
         *
         * The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-grpctimeout.html#cfn-appmesh-virtualnode-grpctimeout-perrequest
         */
        readonly perRequest?: CfnVirtualNode.DurationProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the health check policy for a virtual node's listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html
     */
    interface HealthCheckProperty {
        /**
         * The number of consecutive successful health checks that must occur before declaring listener healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-healthythreshold
         */
        readonly healthyThreshold: number;
        /**
         * The time period in milliseconds between each health check execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-intervalmillis
         */
        readonly intervalMillis: number;
        /**
         * The destination path for the health check request.
         *
         * This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-path
         */
        readonly path?: string;
        /**
         * The destination port for the health check request.
         *
         * This port must match the port defined in the `PortMapping` for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-port
         */
        readonly port?: number;
        /**
         * The protocol for the health check request.
         *
         * If you specify `grpc` , then your service must conform to the [GRPC Health Checking Protocol](https://docs.aws.amazon.com/https://github.com/grpc/grpc/blob/master/doc/health-checking.md) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-protocol
         */
        readonly protocol: string;
        /**
         * The amount of time to wait when receiving a response from the health check, in milliseconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-timeoutmillis
         */
        readonly timeoutMillis: number;
        /**
         * The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-healthcheck.html#cfn-appmesh-virtualnode-healthcheck-unhealthythreshold
         */
        readonly unhealthyThreshold: number;
    }
    /**
     * An object that represents the Transport Layer Security (TLS) properties for a listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html
     */
    interface ListenerTlsProperty {
        /**
         * A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html#cfn-appmesh-virtualnode-listenertls-certificate
         */
        readonly certificate: cdk.IResolvable | CfnVirtualNode.ListenerTlsCertificateProperty;
        /**
         * Specify one of the following modes.
         *
         * - ** STRICT – Listener only accepts connections with TLS enabled.
         * - ** PERMISSIVE – Listener accepts connections with or without TLS enabled.
         * - ** DISABLED – Listener only accepts connections without TLS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html#cfn-appmesh-virtualnode-listenertls-mode
         */
        readonly mode: string;
        /**
         * A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertls.html#cfn-appmesh-virtualnode-listenertls-validation
         */
        readonly validation?: cdk.IResolvable | CfnVirtualNode.ListenerTlsValidationContextProperty;
    }
    /**
     * An object that represents a listener's Transport Layer Security (TLS) validation context.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html
     */
    interface ListenerTlsValidationContextProperty {
        /**
         * A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation context.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html#cfn-appmesh-virtualnode-listenertlsvalidationcontext-subjectalternativenames
         */
        readonly subjectAlternativeNames?: cdk.IResolvable | CfnVirtualNode.SubjectAlternativeNamesProperty;
        /**
         * A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html#cfn-appmesh-virtualnode-listenertlsvalidationcontext-trust
         */
        readonly trust: cdk.IResolvable | CfnVirtualNode.ListenerTlsValidationContextTrustProperty;
    }
    /**
     * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html
     */
    interface ListenerTlsValidationContextTrustProperty {
        /**
         * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualNode.TlsValidationContextFileTrustProperty;
        /**
         * A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualNode.TlsValidationContextSdsTrustProperty;
    }
    /**
     * An object that represents a listener's Transport Layer Security (TLS) certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html
     */
    interface ListenerTlsCertificateProperty {
        /**
         * A reference to an object that represents an AWS Certificate Manager certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html#cfn-appmesh-virtualnode-listenertlscertificate-acm
         */
        readonly acm?: cdk.IResolvable | CfnVirtualNode.ListenerTlsAcmCertificateProperty;
        /**
         * A reference to an object that represents a local file certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html#cfn-appmesh-virtualnode-listenertlscertificate-file
         */
        readonly file?: cdk.IResolvable | CfnVirtualNode.ListenerTlsFileCertificateProperty;
        /**
         * A reference to an object that represents a listener's Secret Discovery Service certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlscertificate.html#cfn-appmesh-virtualnode-listenertlscertificate-sds
         */
        readonly sds?: cdk.IResolvable | CfnVirtualNode.ListenerTlsSdsCertificateProperty;
    }
    /**
     * An object that represents an AWS Certificate Manager certificate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html
     */
    interface ListenerTlsAcmCertificateProperty {
        /**
         * The Amazon Resource Name (ARN) for the certificate.
         *
         * The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html#cfn-appmesh-virtualnode-listenertlsacmcertificate-certificatearn
         */
        readonly certificateArn: string;
    }
    /**
     * An object representing a virtual node or virtual router listener port mapping.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html
     */
    interface PortMappingProperty {
        /**
         * The port used for the port mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html#cfn-appmesh-virtualnode-portmapping-port
         */
        readonly port: number;
        /**
         * The protocol used for the port mapping.
         *
         * Specify `http` , `http2` , `grpc` , or `tcp` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-portmapping.html#cfn-appmesh-virtualnode-portmapping-protocol
         */
        readonly protocol: string;
    }
    /**
     * An object that represents the outlier detection for a virtual node's listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html
     */
    interface OutlierDetectionProperty {
        /**
         * The base amount of time for which a host is ejected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html#cfn-appmesh-virtualnode-outlierdetection-baseejectionduration
         */
        readonly baseEjectionDuration: CfnVirtualNode.DurationProperty | cdk.IResolvable;
        /**
         * The time interval between ejection sweep analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html#cfn-appmesh-virtualnode-outlierdetection-interval
         */
        readonly interval: CfnVirtualNode.DurationProperty | cdk.IResolvable;
        /**
         * Maximum percentage of hosts in load balancing pool for upstream service that can be ejected.
         *
         * Will eject at least one host regardless of the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html#cfn-appmesh-virtualnode-outlierdetection-maxejectionpercent
         */
        readonly maxEjectionPercent: number;
        /**
         * Number of consecutive `5xx` errors required for ejection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-outlierdetection.html#cfn-appmesh-virtualnode-outlierdetection-maxservererrors
         */
        readonly maxServerErrors: number;
    }
    /**
     * An object that represents the default properties for a backend.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backenddefaults.html
     */
    interface BackendDefaultsProperty {
        /**
         * A reference to an object that represents a client policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-backenddefaults.html#cfn-appmesh-virtualnode-backenddefaults-clientpolicy
         */
        readonly clientPolicy?: CfnVirtualNode.ClientPolicyProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the service discovery information for a virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html
     */
    interface ServiceDiscoveryProperty {
        /**
         * Specifies any AWS Cloud Map information for the virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html#cfn-appmesh-virtualnode-servicediscovery-awscloudmap
         */
        readonly awsCloudMap?: CfnVirtualNode.AwsCloudMapServiceDiscoveryProperty | cdk.IResolvable;
        /**
         * Specifies the DNS information for the virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-servicediscovery.html#cfn-appmesh-virtualnode-servicediscovery-dns
         */
        readonly dns?: CfnVirtualNode.DnsServiceDiscoveryProperty | cdk.IResolvable;
    }
    /**
     * An object that represents the DNS service discovery information for your virtual node.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html
     */
    interface DnsServiceDiscoveryProperty {
        /**
         * Specifies the DNS service discovery hostname for the virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html#cfn-appmesh-virtualnode-dnsservicediscovery-hostname
         */
        readonly hostname: string;
        /**
         * The preferred IP version that this virtual node uses.
         *
         * Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html#cfn-appmesh-virtualnode-dnsservicediscovery-ippreference
         */
        readonly ipPreference?: string;
        /**
         * Specifies the DNS response type for the virtual node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-dnsservicediscovery.html#cfn-appmesh-virtualnode-dnsservicediscovery-responsetype
         */
        readonly responseType?: string;
    }
    /**
     * An object that represents the AWS Cloud Map service discovery information for your virtual node.
     *
     * > AWS Cloud Map is not available in the eu-south-1 Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html
     */
    interface AwsCloudMapServiceDiscoveryProperty {
        /**
         * A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance.
         *
         * Only instances that match all of the specified key/value pairs will be returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-attributes
         */
        readonly attributes?: Array<CfnVirtualNode.AwsCloudMapInstanceAttributeProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The preferred IP version that this virtual node uses.
         *
         * Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-ippreference
         */
        readonly ipPreference?: string;
        /**
         * The HTTP name of the AWS Cloud Map namespace to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-namespacename
         */
        readonly namespaceName: string;
        /**
         * The name of the AWS Cloud Map service to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-servicename
         */
        readonly serviceName: string;
    }
    /**
     * An object that represents the AWS Cloud Map attribute information for your virtual node.
     *
     * > AWS Cloud Map is not available in the eu-south-1 Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html
     */
    interface AwsCloudMapInstanceAttributeProperty {
        /**
         * The name of an AWS Cloud Map service instance attribute key.
         *
         * Any AWS Cloud Map service instance that contains the specified key and value is returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html#cfn-appmesh-virtualnode-awscloudmapinstanceattribute-key
         */
        readonly key: string;
        /**
         * The value of an AWS Cloud Map service instance attribute key.
         *
         * Any AWS Cloud Map service instance that contains the specified key and value is returned.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html#cfn-appmesh-virtualnode-awscloudmapinstanceattribute-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnVirtualNode`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html
 */
export interface CfnVirtualNodeProps {
    /**
     * The name of the service mesh to create the virtual node in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The virtual node specification to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-spec
     */
    readonly spec: cdk.IResolvable | CfnVirtualNode.VirtualNodeSpecProperty;
    /**
     * Optional metadata that you can apply to the virtual node to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual node.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodename
     */
    readonly virtualNodeName?: string;
}
/**
 * Creates a virtual router within a service mesh.
 *
 * Specify a `listener` for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.
 *
 * For more information about virtual routers, see [Virtual routers](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html) .
 *
 * @cloudformationResource AWS::AppMesh::VirtualRouter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html
 */
export declare class CfnVirtualRouter extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVirtualRouter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVirtualRouter;
    /**
     * The full Amazon Resource Name (ARN) for the virtual router.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the virtual router resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the virtual router.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual router.
     *
     * @cloudformationAttribute VirtualRouterName
     */
    readonly attrVirtualRouterName: string;
    /**
     * The name of the service mesh to create the virtual router in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The virtual router specification to apply.
     */
    spec: cdk.IResolvable | CfnVirtualRouter.VirtualRouterSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the virtual router to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual router.
     */
    virtualRouterName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVirtualRouterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVirtualRouter {
    /**
     * An object that represents the specification of a virtual router.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterspec.html
     */
    interface VirtualRouterSpecProperty {
        /**
         * The listeners that the virtual router is expected to receive inbound traffic from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterspec.html#cfn-appmesh-virtualrouter-virtualrouterspec-listeners
         */
        readonly listeners: Array<cdk.IResolvable | CfnVirtualRouter.VirtualRouterListenerProperty> | cdk.IResolvable;
    }
    /**
     * An object that represents a virtual router listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterlistener.html
     */
    interface VirtualRouterListenerProperty {
        /**
         * The port mapping information for the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-virtualrouterlistener.html#cfn-appmesh-virtualrouter-virtualrouterlistener-portmapping
         */
        readonly portMapping: cdk.IResolvable | CfnVirtualRouter.PortMappingProperty;
    }
    /**
     * An object representing a virtual router listener port mapping.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html
     */
    interface PortMappingProperty {
        /**
         * The port used for the port mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html#cfn-appmesh-virtualrouter-portmapping-port
         */
        readonly port: number;
        /**
         * The protocol used for the port mapping.
         *
         * Specify one protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualrouter-portmapping.html#cfn-appmesh-virtualrouter-portmapping-protocol
         */
        readonly protocol: string;
    }
}
/**
 * Properties for defining a `CfnVirtualRouter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html
 */
export interface CfnVirtualRouterProps {
    /**
     * The name of the service mesh to create the virtual router in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#cfn-appmesh-virtualrouter-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#cfn-appmesh-virtualrouter-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The virtual router specification to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#cfn-appmesh-virtualrouter-spec
     */
    readonly spec: cdk.IResolvable | CfnVirtualRouter.VirtualRouterSpecProperty;
    /**
     * Optional metadata that you can apply to the virtual router to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#cfn-appmesh-virtualrouter-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual router.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualrouter.html#cfn-appmesh-virtualrouter-virtualroutername
     */
    readonly virtualRouterName?: string;
}
/**
 * Creates a virtual service within a service mesh.
 *
 * A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its `virtualServiceName` , and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.
 *
 * For more information about virtual services, see [Virtual services](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html) .
 *
 * @cloudformationResource AWS::AppMesh::VirtualService
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html
 */
export declare class CfnVirtualService extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVirtualService from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVirtualService;
    /**
     * The full Amazon Resource Name (ARN) for the virtual service.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the service mesh that the virtual service resides in.
     *
     * @cloudformationAttribute MeshName
     */
    readonly attrMeshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute MeshOwner
     */
    readonly attrMeshOwner: string;
    /**
     * The AWS IAM account ID of the resource owner. If the account ID is not your own, then it's the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see [Working with Shared Meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @cloudformationAttribute ResourceOwner
     */
    readonly attrResourceOwner: string;
    /**
     * The unique identifier for the virtual service.
     *
     * @cloudformationAttribute Uid
     */
    readonly attrUid: string;
    /**
     * The name of the virtual service.
     *
     * @cloudformationAttribute VirtualServiceName
     */
    readonly attrVirtualServiceName: string;
    /**
     * The name of the service mesh to create the virtual service in.
     */
    meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     */
    meshOwner?: string;
    /**
     * The virtual service specification to apply.
     */
    spec: cdk.IResolvable | CfnVirtualService.VirtualServiceSpecProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Optional metadata that you can apply to the virtual service to assist with categorization and organization.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual service.
     */
    virtualServiceName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVirtualServiceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVirtualService {
    /**
     * An object that represents the specification of a virtual service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualservicespec.html
     */
    interface VirtualServiceSpecProperty {
        /**
         * The App Mesh object that is acting as the provider for a virtual service.
         *
         * You can specify a single virtual node or virtual router.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualservicespec.html#cfn-appmesh-virtualservice-virtualservicespec-provider
         */
        readonly provider?: cdk.IResolvable | CfnVirtualService.VirtualServiceProviderProperty;
    }
    /**
     * An object that represents the provider for a virtual service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html
     */
    interface VirtualServiceProviderProperty {
        /**
         * The virtual node associated with a virtual service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html#cfn-appmesh-virtualservice-virtualserviceprovider-virtualnode
         */
        readonly virtualNode?: cdk.IResolvable | CfnVirtualService.VirtualNodeServiceProviderProperty;
        /**
         * The virtual router associated with a virtual service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualserviceprovider.html#cfn-appmesh-virtualservice-virtualserviceprovider-virtualrouter
         */
        readonly virtualRouter?: cdk.IResolvable | CfnVirtualService.VirtualRouterServiceProviderProperty;
    }
    /**
     * An object that represents a virtual node service provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.html
     */
    interface VirtualNodeServiceProviderProperty {
        /**
         * The name of the virtual node that is acting as a service provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualnodeserviceprovider.html#cfn-appmesh-virtualservice-virtualnodeserviceprovider-virtualnodename
         */
        readonly virtualNodeName: string;
    }
    /**
     * An object that represents a virtual node service provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.html
     */
    interface VirtualRouterServiceProviderProperty {
        /**
         * The name of the virtual router that is acting as a service provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualservice-virtualrouterserviceprovider.html#cfn-appmesh-virtualservice-virtualrouterserviceprovider-virtualroutername
         */
        readonly virtualRouterName: string;
    }
}
/**
 * Properties for defining a `CfnVirtualService`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html
 */
export interface CfnVirtualServiceProps {
    /**
     * The name of the service mesh to create the virtual service in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#cfn-appmesh-virtualservice-meshname
     */
    readonly meshName: string;
    /**
     * The AWS IAM account ID of the service mesh owner.
     *
     * If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#cfn-appmesh-virtualservice-meshowner
     */
    readonly meshOwner?: string;
    /**
     * The virtual service specification to apply.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#cfn-appmesh-virtualservice-spec
     */
    readonly spec: cdk.IResolvable | CfnVirtualService.VirtualServiceSpecProperty;
    /**
     * Optional metadata that you can apply to the virtual service to assist with categorization and organization.
     *
     * Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#cfn-appmesh-virtualservice-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name to use for the virtual service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualservice.html#cfn-appmesh-virtualservice-virtualservicename
     */
    readonly virtualServiceName: string;
}
