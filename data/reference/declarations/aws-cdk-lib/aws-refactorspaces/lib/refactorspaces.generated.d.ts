import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an AWS Migration Hub Refactor Spaces application.
 *
 * The account that owns the environment also owns the applications created inside the environment, regardless of the account that creates the application. Refactor Spaces provisions an Amazon API Gateway, API Gateway VPC link, and Network Load Balancer for the application proxy inside your account.
 *
 * In environments created with a [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) of `NONE` you need to configure [VPC to VPC connectivity](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html) between your service VPC and the application proxy VPC to route traffic through the application proxy to a service with a private URL endpoint. For more information, see [Create an application](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-application.html) in the *Refactor Spaces User Guide* .
 *
 * @cloudformationResource AWS::RefactorSpaces::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The resource ID of the API Gateway for the proxy.
     *
     * @cloudformationAttribute ApiGatewayId
     */
    readonly attrApiGatewayId: string;
    /**
     * The unique identifier of the application.
     *
     * @cloudformationAttribute ApplicationIdentifier
     */
    readonly attrApplicationIdentifier: string;
    /**
     * The Amazon Resource Name (ARN) of the application.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the Network Load Balancer .
     *
     * @cloudformationAttribute NlbArn
     */
    readonly attrNlbArn: string;
    /**
     * The name of the Network Load Balancer configured by the API Gateway proxy.
     *
     * @cloudformationAttribute NlbName
     */
    readonly attrNlbName: string;
    /**
     * The endpoint URL of the Amazon API Gateway proxy.
     *
     * @cloudformationAttribute ProxyUrl
     */
    readonly attrProxyUrl: string;
    /**
     * The name of the API Gateway stage. The name defaults to `prod` .
     *
     * @cloudformationAttribute StageName
     */
    readonly attrStageName: string;
    /**
     * The `VpcLink` ID of the API Gateway proxy.
     *
     * @cloudformationAttribute VpcLinkId
     */
    readonly attrVpcLinkId: string;
    /**
     * The endpoint URL of the Amazon API Gateway proxy.
     */
    apiGatewayProxy?: CfnApplication.ApiGatewayProxyInputProperty | cdk.IResolvable;
    /**
     * The unique identifier of the environment.
     */
    environmentIdentifier: string;
    /**
     * The name of the application.
     */
    name: string;
    /**
     * The proxy type of the proxy created within the application.
     */
    proxyType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the application.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the virtual private cloud (VPC).
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * A wrapper object holding the Amazon API Gateway endpoint input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html
     */
    interface ApiGatewayProxyInputProperty {
        /**
         * The type of endpoint to use for the API Gateway proxy.
         *
         * If no value is specified in the request, the value is set to `REGIONAL` by default.
         *
         * If the value is set to `PRIVATE` in the request, this creates a private API endpoint that is isolated from the public internet. The private endpoint can only be accessed by using Amazon Virtual Private Cloud (Amazon VPC) interface endpoints for the Amazon API Gateway that has been granted access. For more information about creating a private connection with Refactor Spaces and interface endpoint ( AWS PrivateLink ) availability, see [Access Refactor Spaces using an interface endpoint ( AWS PrivateLink )](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/vpc-interface-endpoints.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html#cfn-refactorspaces-application-apigatewayproxyinput-endpointtype
         */
        readonly endpointType?: string;
        /**
         * The name of the API Gateway stage.
         *
         * The name defaults to `prod` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-application-apigatewayproxyinput.html#cfn-refactorspaces-application-apigatewayproxyinput-stagename
         */
        readonly stageName?: string;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html
 */
export interface CfnApplicationProps {
    /**
     * The endpoint URL of the Amazon API Gateway proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-apigatewayproxy
     */
    readonly apiGatewayProxy?: CfnApplication.ApiGatewayProxyInputProperty | cdk.IResolvable;
    /**
     * The unique identifier of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-environmentidentifier
     */
    readonly environmentIdentifier: string;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-name
     */
    readonly name: string;
    /**
     * The proxy type of the proxy created within the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-proxytype
     */
    readonly proxyType: string;
    /**
     * The tags assigned to the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the virtual private cloud (VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-application.html#cfn-refactorspaces-application-vpcid
     */
    readonly vpcId: string;
}
/**
 * Creates an AWS Migration Hub Refactor Spaces environment.
 *
 * The caller owns the environment resource, and all Refactor Spaces applications, services, and routes created within the environment. They are referred to as the *environment owner* . The environment owner has cross-account visibility and control of Refactor Spaces resources that are added to the environment by other accounts that the environment is shared with.
 *
 * When creating an environment with a [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) of `TRANSIT_GATEWAY` , Refactor Spaces provisions a transit gateway to enable services in VPCs to communicate directly across accounts. If [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) is `NONE` , Refactor Spaces does not create a transit gateway and you must use your network infrastructure to route traffic to services with private URL endpoints.
 *
 * @cloudformationResource AWS::RefactorSpaces::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironment;
    /**
     * The Amazon Resource Name (ARN) of the environment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the environment.
     *
     * @cloudformationAttribute EnvironmentIdentifier
     */
    readonly attrEnvironmentIdentifier: string;
    /**
     * The ID of the AWS Transit Gateway set up by the environment.
     *
     * @cloudformationAttribute TransitGatewayId
     */
    readonly attrTransitGatewayId: string;
    /**
     * A description of the environment.
     */
    description?: string;
    /**
     * The name of the environment.
     */
    name?: string;
    /**
     * The network fabric type of the environment.
     */
    networkFabricType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the environment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEnvironmentProps);
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
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * A description of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-description
     */
    readonly description?: string;
    /**
     * The name of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-name
     */
    readonly name?: string;
    /**
     * The network fabric type of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-networkfabrictype
     */
    readonly networkFabricType?: string;
    /**
     * The tags assigned to the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an AWS Migration Hub Refactor Spaces route.
 *
 * The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a `DEFAULT` `RouteType` .
 *
 * When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active.
 *
 * > In the `AWS::RefactorSpaces::Route` resource, you can only update the `ActivationState` property, which resides under the `UriPathRoute` and `DefaultRoute` properties. All other properties associated with the `AWS::RefactorSpaces::Route` cannot be updated, even though the property description might indicate otherwise. Updating all other properties will result in the replacement of Route.
 *
 * When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic to the target service as follows:
 *
 * - *URL Endpoints*
 *
 * If the service has a URL endpoint, and the endpoint resolves to a private IP address, Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint resolves to a public IP address, Refactor Spaces routes traffic over the public internet. Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed certificates are supported. Private Certificate Authorities (CAs) are permitted only if the CA's domain is also publicly resolvable.
 *
 * Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are set in `CreateService:UrlEndpoint` when you create a service. The DNS names resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds. This periodic DNS resolution ensures that the route configuration remains up-to-date.
 *
 * *One-time health check*
 *
 * A one-time health check is performed on the service when either the route is updated from inactive to active, or when it is created with an active state. If the health check fails, the route transitions the route state to `FAILED` , an error code of `SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE` is provided, and no traffic is sent to the service.
 *
 * For private URLs, a target group is created on the Network Load Balancer and the load balancer target group runs default target health checks. By default, the health check is run against the service endpoint URL. Optionally, the health check can be performed against a different protocol, port, and/or path using the [CreateService:UrlEndpoint](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html#migrationhubrefactorspaces-CreateService-request-UrlEndpoint) parameter. All other health check settings for the load balancer use the default values described in the [Health checks for your target groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html) in the *Elastic Load Balancing guide* . The health check is considered successful if at least one target within the target group transitions to a healthy state.
 * - *AWS Lambda function endpoints*
 *
 * If the service has an AWS Lambda function endpoint, then Refactor Spaces configures the Lambda function's resource policy to allow the application's API Gateway to invoke the function.
 *
 * The Lambda function state is checked. If the function is not active, the function configuration is updated so that Lambda resources are provisioned. If the Lambda state is `Failed` , then the route creation fails. For more information, see the [GetFunctionConfiguration's State response parameter](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html#SSS-GetFunctionConfiguration-response-State) in the *AWS Lambda Developer Guide* .
 *
 * A check is performed to determine that a Lambda function with the specified ARN exists. If it does not exist, the health check fails. For public URLs, a connection is opened to the public endpoint. If the URL is not reachable, the health check fails.
 *
 * *Environments without a network bridge*
 *
 * When you create environments without a network bridge ( [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) is `NONE)` and you use your own networking infrastructure, you need to configure [VPC to VPC connectivity](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html) between your network and the application proxy VPC. Route creation from the application proxy to service endpoints will fail if your network is not configured to connect to the application proxy VPC. For more information, see [Create a route](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-role.html) in the *Refactor Spaces User Guide* .
 *
 * @cloudformationResource AWS::RefactorSpaces::Route
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html
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
     * The Amazon Resource Name (ARN) of the route.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A mapping of Amazon API Gateway path resources to resource IDs.
     *
     * @cloudformationAttribute PathResourceToId
     */
    readonly attrPathResourceToId: string;
    /**
     * The unique identifier of the route.
     *
     * @cloudformationAttribute RouteIdentifier
     */
    readonly attrRouteIdentifier: string;
    /**
     * The unique identifier of the application.
     */
    applicationIdentifier: string;
    /**
     * Configuration for the default route type.
     */
    defaultRoute?: CfnRoute.DefaultRouteInputProperty | cdk.IResolvable;
    /**
     * The unique identifier of the environment.
     */
    environmentIdentifier: string;
    /**
     * The route type of the route.
     */
    routeType: string;
    /**
     * The unique identifier of the service.
     */
    serviceIdentifier: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the route.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The configuration for the URI path route type.
     */
    uriPathRoute?: cdk.IResolvable | CfnRoute.UriPathRouteInputProperty;
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
     * The configuration for the URI path route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html
     */
    interface UriPathRouteInputProperty {
        /**
         * If set to `ACTIVE` , traffic is forwarded to this route’s service after the route is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html#cfn-refactorspaces-route-uripathrouteinput-activationstate
         */
        readonly activationState: string;
        /**
         * If set to `true` , this option appends the source path to the service URL endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html#cfn-refactorspaces-route-uripathrouteinput-appendsourcepath
         */
        readonly appendSourcePath?: boolean | cdk.IResolvable;
        /**
         * Indicates whether to match all subpaths of the given source path.
         *
         * If this value is `false` , requests must match the source path exactly before they are forwarded to this route's service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html#cfn-refactorspaces-route-uripathrouteinput-includechildpaths
         */
        readonly includeChildPaths?: boolean | cdk.IResolvable;
        /**
         * A list of HTTP methods to match.
         *
         * An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html#cfn-refactorspaces-route-uripathrouteinput-methods
         */
        readonly methods?: Array<string>;
        /**
         * This is the path that Refactor Spaces uses to match traffic.
         *
         * Paths must start with `/` and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path {user} represents a path parameter called 'user'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-uripathrouteinput.html#cfn-refactorspaces-route-uripathrouteinput-sourcepath
         */
        readonly sourcePath?: string;
    }
    /**
     * The configuration for the default route type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-defaultrouteinput.html
     */
    interface DefaultRouteInputProperty {
        /**
         * If set to `ACTIVE` , traffic is forwarded to this route’s service after the route is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-route-defaultrouteinput.html#cfn-refactorspaces-route-defaultrouteinput-activationstate
         */
        readonly activationState: string;
    }
}
/**
 * Properties for defining a `CfnRoute`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html
 */
export interface CfnRouteProps {
    /**
     * The unique identifier of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-applicationidentifier
     */
    readonly applicationIdentifier: string;
    /**
     * Configuration for the default route type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-defaultroute
     */
    readonly defaultRoute?: CfnRoute.DefaultRouteInputProperty | cdk.IResolvable;
    /**
     * The unique identifier of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-environmentidentifier
     */
    readonly environmentIdentifier: string;
    /**
     * The route type of the route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-routetype
     */
    readonly routeType: string;
    /**
     * The unique identifier of the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-serviceidentifier
     */
    readonly serviceIdentifier: string;
    /**
     * The tags assigned to the route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The configuration for the URI path route type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathroute
     */
    readonly uriPathRoute?: cdk.IResolvable | CfnRoute.UriPathRouteInputProperty;
}
/**
 * Creates an AWS Migration Hub Refactor Spaces service.
 *
 * The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint.
 *
 * > If an AWS resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the `RefactorSpacesSecurityGroup` to the resource. Alternatively, to add more cross-account constraints, apply your own security group.
 *
 * @cloudformationResource AWS::RefactorSpaces::Service
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html
 */
export declare class CfnService extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnService from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnService;
    /**
     * The Amazon Resource Name (ARN) of the service.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the service.
     *
     * @cloudformationAttribute ServiceIdentifier
     */
    readonly attrServiceIdentifier: string;
    /**
     * The unique identifier of the application.
     */
    applicationIdentifier: string;
    /**
     * A description of the service.
     */
    description?: string;
    /**
     * The endpoint type of the service.
     */
    endpointType: string;
    /**
     * The unique identifier of the environment.
     */
    environmentIdentifier: string;
    /**
     * A summary of the configuration for the AWS Lambda endpoint type.
     */
    lambdaEndpoint?: cdk.IResolvable | CfnService.LambdaEndpointInputProperty;
    /**
     * The name of the service.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the service.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The summary of the configuration for the URL endpoint type.
     */
    urlEndpoint?: cdk.IResolvable | CfnService.UrlEndpointInputProperty;
    /**
     * The ID of the virtual private cloud (VPC).
     */
    vpcId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServiceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnService {
    /**
     * The input for the AWS Lambda endpoint type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-lambdaendpointinput.html
     */
    interface LambdaEndpointInputProperty {
        /**
         * The Amazon Resource Name (ARN) of the Lambda function or alias.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-lambdaendpointinput.html#cfn-refactorspaces-service-lambdaendpointinput-arn
         */
        readonly arn: string;
    }
    /**
     * The configuration for the URL endpoint type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html
     */
    interface UrlEndpointInputProperty {
        /**
         * The health check URL of the URL endpoint type.
         *
         * If the URL is a public endpoint, the `HealthUrl` must also be a public endpoint. If the URL is a private endpoint inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the host must be the same as the URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html#cfn-refactorspaces-service-urlendpointinput-healthurl
         */
        readonly healthUrl?: string;
        /**
         * The URL to route traffic to.
         *
         * The URL must be an [rfc3986-formatted URL](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc3986) . If the host is a domain name, the name must be resolvable over the public internet. If the scheme is `https` , the top level domain of the host must be listed in the [IANA root zone database](https://docs.aws.amazon.com/https://www.iana.org/domains/root/db) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-refactorspaces-service-urlendpointinput.html#cfn-refactorspaces-service-urlendpointinput-url
         */
        readonly url: string;
    }
}
/**
 * Properties for defining a `CfnService`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html
 */
export interface CfnServiceProps {
    /**
     * The unique identifier of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-applicationidentifier
     */
    readonly applicationIdentifier: string;
    /**
     * A description of the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-description
     */
    readonly description?: string;
    /**
     * The endpoint type of the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-endpointtype
     */
    readonly endpointType: string;
    /**
     * The unique identifier of the environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-environmentidentifier
     */
    readonly environmentIdentifier: string;
    /**
     * A summary of the configuration for the AWS Lambda endpoint type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-lambdaendpoint
     */
    readonly lambdaEndpoint?: cdk.IResolvable | CfnService.LambdaEndpointInputProperty;
    /**
     * The name of the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-name
     */
    readonly name: string;
    /**
     * The tags assigned to the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The summary of the configuration for the URL endpoint type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-urlendpoint
     */
    readonly urlEndpoint?: cdk.IResolvable | CfnService.UrlEndpointInputProperty;
    /**
     * The ID of the virtual private cloud (VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-vpcid
     */
    readonly vpcId?: string;
}
