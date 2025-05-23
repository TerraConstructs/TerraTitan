import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ApiGatewayV2::Api` resource creates an API.
 *
 * WebSocket APIs and HTTP APIs are supported. For more information about WebSocket APIs, see [About WebSocket APIs in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-overview.html) in the *API Gateway Developer Guide* . For more information about HTTP APIs, see [HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) in the *API Gateway Developer Guide.*
 *
 * @cloudformationResource AWS::ApiGatewayV2::Api
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html
 */
export declare class CfnApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApi from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApi;
    /**
     * The default endpoint for an API. For example: `https://abcdef.execute-api.us-west-2.amazonaws.com` .
     *
     * @cloudformationAttribute ApiEndpoint
     */
    readonly attrApiEndpoint: string;
    /**
     * The API identifier.
     *
     * @cloudformationAttribute ApiId
     */
    readonly attrApiId: string;
    /**
     * An API key selection expression.
     */
    apiKeySelectionExpression?: string;
    /**
     * Specifies how to interpret the base path of the API during import.
     */
    basePath?: string;
    /**
     * The OpenAPI definition.
     */
    body?: any | cdk.IResolvable;
    /**
     * The S3 location of an OpenAPI definition.
     */
    bodyS3Location?: CfnApi.BodyS3LocationProperty | cdk.IResolvable;
    /**
     * A CORS configuration.
     */
    corsConfiguration?: CfnApi.CorsProperty | cdk.IResolvable;
    /**
     * This property is part of quick create.
     */
    credentialsArn?: string;
    /**
     * The description of the API.
     */
    description?: string;
    /**
     * Specifies whether clients can invoke your API by using the default `execute-api` endpoint.
     */
    disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * Avoid validating models when creating a deployment.
     */
    disableSchemaValidation?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to rollback the API creation when a warning is encountered.
     */
    failOnWarnings?: boolean | cdk.IResolvable;
    /**
     * The name of the API.
     */
    name?: string;
    /**
     * The API protocol.
     */
    protocolType?: string;
    /**
     * This property is part of quick create.
     */
    routeKey?: string;
    /**
     * The route selection expression for the API.
     */
    routeSelectionExpression?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Record<string, string>;
    /**
     * This property is part of quick create.
     */
    target?: string;
    /**
     * A version identifier for the API.
     */
    version?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnApiProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApi {
    /**
     * The `BodyS3Location` property specifies an S3 location from which to import an OpenAPI definition.
     *
     * Supported only for HTTP APIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html
     */
    interface BodyS3LocationProperty {
        /**
         * The S3 bucket that contains the OpenAPI definition to import.
         *
         * Required if you specify a `BodyS3Location` for an API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html#cfn-apigatewayv2-api-bodys3location-bucket
         */
        readonly bucket?: string;
        /**
         * The Etag of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html#cfn-apigatewayv2-api-bodys3location-etag
         */
        readonly etag?: string;
        /**
         * The key of the S3 object.
         *
         * Required if you specify a `BodyS3Location` for an API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html#cfn-apigatewayv2-api-bodys3location-key
         */
        readonly key?: string;
        /**
         * The version of the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-bodys3location.html#cfn-apigatewayv2-api-bodys3location-version
         */
        readonly version?: string;
    }
    /**
     * The `Cors` property specifies a CORS configuration for an API.
     *
     * Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html
     */
    interface CorsProperty {
        /**
         * Specifies whether credentials are included in the CORS request.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-allowcredentials
         */
        readonly allowCredentials?: boolean | cdk.IResolvable;
        /**
         * Represents a collection of allowed headers.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-allowheaders
         */
        readonly allowHeaders?: Array<string>;
        /**
         * Represents a collection of allowed HTTP methods.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-allowmethods
         */
        readonly allowMethods?: Array<string>;
        /**
         * Represents a collection of allowed origins.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-alloworigins
         */
        readonly allowOrigins?: Array<string>;
        /**
         * Represents a collection of exposed headers.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-exposeheaders
         */
        readonly exposeHeaders?: Array<string>;
        /**
         * The number of seconds that the browser should cache preflight request results.
         *
         * Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-api-cors.html#cfn-apigatewayv2-api-cors-maxage
         */
        readonly maxAge?: number;
    }
}
/**
 * Properties for defining a `CfnApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html
 */
export interface CfnApiProps {
    /**
     * An API key selection expression.
     *
     * Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-apikeyselectionexpression
     */
    readonly apiKeySelectionExpression?: string;
    /**
     * Specifies how to interpret the base path of the API during import.
     *
     * Valid values are `ignore` , `prepend` , and `split` . The default value is `ignore` . To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html) . Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-basepath
     */
    readonly basePath?: string;
    /**
     * The OpenAPI definition.
     *
     * Supported only for HTTP APIs. To import an HTTP API, you must specify a `Body` or `BodyS3Location` . If you specify a `Body` or `BodyS3Location` , don't specify CloudFormation resources such as `AWS::ApiGatewayV2::Authorizer` or `AWS::ApiGatewayV2::Route` . API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-body
     */
    readonly body?: any | cdk.IResolvable;
    /**
     * The S3 location of an OpenAPI definition.
     *
     * Supported only for HTTP APIs. To import an HTTP API, you must specify a `Body` or `BodyS3Location` . If you specify a `Body` or `BodyS3Location` , don't specify CloudFormation resources such as `AWS::ApiGatewayV2::Authorizer` or `AWS::ApiGatewayV2::Route` . API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-bodys3location
     */
    readonly bodyS3Location?: CfnApi.BodyS3LocationProperty | cdk.IResolvable;
    /**
     * A CORS configuration.
     *
     * Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-corsconfiguration
     */
    readonly corsConfiguration?: CfnApi.CorsProperty | cdk.IResolvable;
    /**
     * This property is part of quick create.
     *
     * It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify `arn:aws:iam::*:user/*` . To use resource-based permissions on supported AWS services, specify `null` . Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-credentialsarn
     */
    readonly credentialsArn?: string;
    /**
     * The description of the API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-description
     */
    readonly description?: string;
    /**
     * Specifies whether clients can invoke your API by using the default `execute-api` endpoint.
     *
     * By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-disableexecuteapiendpoint
     */
    readonly disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * Avoid validating models when creating a deployment.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-disableschemavalidation
     */
    readonly disableSchemaValidation?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to rollback the API creation when a warning is encountered.
     *
     * By default, API creation continues if a warning is encountered.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-failonwarnings
     */
    readonly failOnWarnings?: boolean | cdk.IResolvable;
    /**
     * The name of the API.
     *
     * Required unless you specify an OpenAPI definition for `Body` or `S3BodyLocation` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-name
     */
    readonly name?: string;
    /**
     * The API protocol.
     *
     * Valid values are `WEBSOCKET` or `HTTP` . Required unless you specify an OpenAPI definition for `Body` or `S3BodyLocation` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-protocoltype
     */
    readonly protocolType?: string;
    /**
     * This property is part of quick create.
     *
     * If you don't specify a `routeKey` , a default route of `$default` is created. The `$default` route acts as a catch-all for any request made to your API, for a particular stage. The `$default` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-routekey
     */
    readonly routeKey?: string;
    /**
     * The route selection expression for the API.
     *
     * For HTTP APIs, the `routeSelectionExpression` must be `${request.method} ${request.path}` . If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-routeselectionexpression
     */
    readonly routeSelectionExpression?: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * This property is part of quick create.
     *
     * Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-target
     */
    readonly target?: string;
    /**
     * A version identifier for the API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-api.html#cfn-apigatewayv2-api-version
     */
    readonly version?: string;
}
/**
 * The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource overrides the default properties of API Gateway-managed resources that are implicitly configured for you when you use quick create.
 *
 * When you create an API by using quick create, an `AWS::ApiGatewayV2::Route` , `AWS::ApiGatewayV2::Integration` , and `AWS::ApiGatewayV2::Stage` are created for you and associated with your `AWS::ApiGatewayV2::Api` . The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource enables you to set, or override the properties of these implicit resources. Supported only for HTTP APIs.
 *
 * @cloudformationResource AWS::ApiGatewayV2::ApiGatewayManagedOverrides
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html
 */
export declare class CfnApiGatewayManagedOverrides extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiGatewayManagedOverrides from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiGatewayManagedOverrides;
    /**
     * The identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ID of the API for which to override the configuration of API Gateway-managed resources.
     */
    apiId: string;
    /**
     * Overrides the integration configuration for an API Gateway-managed integration.
     */
    integration?: CfnApiGatewayManagedOverrides.IntegrationOverridesProperty | cdk.IResolvable;
    /**
     * Overrides the route configuration for an API Gateway-managed route.
     */
    route?: cdk.IResolvable | CfnApiGatewayManagedOverrides.RouteOverridesProperty;
    /**
     * Overrides the stage configuration for an API Gateway-managed stage.
     */
    stage?: cdk.IResolvable | CfnApiGatewayManagedOverrides.StageOverridesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiGatewayManagedOverridesProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApiGatewayManagedOverrides {
    /**
     * The `IntegrationOverrides` property overrides the integration settings for an API Gateway-managed integration.
     *
     * If you remove this property, API Gateway restores the default values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html
     */
    interface IntegrationOverridesProperty {
        /**
         * The description of the integration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-description
         */
        readonly description?: string;
        /**
         * Specifies the integration's HTTP method type.
         *
         * For WebSocket APIs, if you use a Lambda integration, you must set the integration method to `POST` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-integrationmethod
         */
        readonly integrationMethod?: string;
        /**
         * Specifies the format of the payload sent to an integration.
         *
         * Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are `1.0` and `2.0` . For all other integrations, `1.0` is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-payloadformatversion
         */
        readonly payloadFormatVersion?: string;
        /**
         * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.
         *
         * The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides-timeoutinmillis
         */
        readonly timeoutInMillis?: number;
    }
    /**
     * The `StageOverrides` property overrides the stage configuration for an API Gateway-managed stage.
     *
     * If you remove this property, API Gateway restores the default values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html
     */
    interface StageOverridesProperty {
        /**
         * Settings for logging access in a stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-accesslogsettings
         */
        readonly accessLogSettings?: CfnApiGatewayManagedOverrides.AccessLogSettingsProperty | cdk.IResolvable;
        /**
         * Specifies whether updates to an API automatically trigger a new deployment.
         *
         * The default value is `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-autodeploy
         */
        readonly autoDeploy?: boolean | cdk.IResolvable;
        /**
         * The default route settings for the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-defaultroutesettings
         */
        readonly defaultRouteSettings?: cdk.IResolvable | CfnApiGatewayManagedOverrides.RouteSettingsProperty;
        /**
         * The description for the API stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-description
         */
        readonly description?: string;
        /**
         * Route settings for the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-routesettings
         */
        readonly routeSettings?: any | cdk.IResolvable;
        /**
         * A map that defines the stage variables for a `Stage` .
         *
         * Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stageoverrides-stagevariables
         */
        readonly stageVariables?: any | cdk.IResolvable;
    }
    /**
     * The `AccessLogSettings` property overrides the access log settings for an API Gateway-managed stage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html
     */
    interface AccessLogSettingsProperty {
        /**
         * The ARN of the CloudWatch Logs log group to receive access logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * A single line format of the access logs of data, as specified by selected $context variables.
         *
         * The format must include at least $context.requestId.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings-format
         */
        readonly format?: string;
    }
    /**
     * The `RouteSettings` property overrides the route settings for an API Gateway-managed route.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html
     */
    interface RouteSettingsProperty {
        /**
         * Specifies whether ( `true` ) or not ( `false` ) data trace logging is enabled for this route.
         *
         * This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routesettings-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether detailed metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routesettings-detailedmetricsenabled
         */
        readonly detailedMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the logging level for this route: `INFO` , `ERROR` , or `OFF` .
         *
         * This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routesettings-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * Specifies the throttling burst limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routesettings-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * Specifies the throttling rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routesettings-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
    /**
     * The `RouteOverrides` property overrides the route configuration for an API Gateway-managed route.
     *
     * If you remove this property, API Gateway restores the default values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html
     */
    interface RouteOverridesProperty {
        /**
         * The authorization scopes supported by this route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizationscopes
         */
        readonly authorizationScopes?: Array<string>;
        /**
         * The authorization type for the route.
         *
         * To learn more, see [AuthorizationType](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-authorizationtype) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizationtype
         */
        readonly authorizationType?: string;
        /**
         * The identifier of the `Authorizer` resource to be associated with this route.
         *
         * The authorizer identifier is generated by API Gateway when you created the authorizer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-authorizerid
         */
        readonly authorizerId?: string;
        /**
         * The operation name for the route.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-operationname
         */
        readonly operationName?: string;
        /**
         * For HTTP integrations, specify a fully qualified URL.
         *
         * For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-routeoverrides-target
         */
        readonly target?: string;
    }
}
/**
 * Properties for defining a `CfnApiGatewayManagedOverrides`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html
 */
export interface CfnApiGatewayManagedOverridesProps {
    /**
     * The ID of the API for which to override the configuration of API Gateway-managed resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-apiid
     */
    readonly apiId: string;
    /**
     * Overrides the integration configuration for an API Gateway-managed integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-integration
     */
    readonly integration?: CfnApiGatewayManagedOverrides.IntegrationOverridesProperty | cdk.IResolvable;
    /**
     * Overrides the route configuration for an API Gateway-managed route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-route
     */
    readonly route?: cdk.IResolvable | CfnApiGatewayManagedOverrides.RouteOverridesProperty;
    /**
     * Overrides the stage configuration for an API Gateway-managed stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html#cfn-apigatewayv2-apigatewaymanagedoverrides-stage
     */
    readonly stage?: cdk.IResolvable | CfnApiGatewayManagedOverrides.StageOverridesProperty;
}
/**
 * The `AWS::ApiGatewayV2::ApiMapping` resource contains an API mapping.
 *
 * An API mapping relates a path of your custom domain name to a stage of your API. A custom domain name can have multiple API mappings, but the paths can't overlap. A custom domain can map only to APIs of the same protocol type. For more information, see [CreateApiMapping](https://docs.aws.amazon.com/apigatewayv2/latest/api-reference/domainnames-domainname-apimappings.html#CreateApiMapping) in the *Amazon API Gateway V2 API Reference* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::ApiMapping
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html
 */
export declare class CfnApiMapping extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiMapping from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiMapping;
    /**
     * The API mapping resource ID.
     *
     * @cloudformationAttribute ApiMappingId
     */
    readonly attrApiMappingId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The API mapping key.
     */
    apiMappingKey?: string;
    /**
     * The domain name.
     */
    domainName: string;
    /**
     * The API stage.
     */
    stage: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiMappingProps);
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
 * Properties for defining a `CfnApiMapping`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html
 */
export interface CfnApiMappingProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-apiid
     */
    readonly apiId: string;
    /**
     * The API mapping key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-apimappingkey
     */
    readonly apiMappingKey?: string;
    /**
     * The domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-domainname
     */
    readonly domainName: string;
    /**
     * The API stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apimapping.html#cfn-apigatewayv2-apimapping-stage
     */
    readonly stage: string;
}
/**
 * The `AWS::ApiGatewayV2::Authorizer` resource creates an authorizer for a WebSocket API or an HTTP API.
 *
 * To learn more, see [Controlling and managing access to a WebSocket API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-control-access.html) and [Controlling and managing access to an HTTP API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-access-control.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::Authorizer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html
 */
export declare class CfnAuthorizer extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAuthorizer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAuthorizer;
    /**
     * The authorizer ID.
     *
     * @cloudformationAttribute AuthorizerId
     */
    readonly attrAuthorizerId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.
     */
    authorizerCredentialsArn?: string;
    /**
     * Specifies the format of the payload sent to an HTTP API Lambda authorizer.
     */
    authorizerPayloadFormatVersion?: string;
    /**
     * The time to live (TTL) for cached authorizer results, in seconds.
     */
    authorizerResultTtlInSeconds?: number;
    /**
     * The authorizer type.
     */
    authorizerType: string;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
     */
    authorizerUri?: string;
    /**
     * Specifies whether a Lambda authorizer returns a response in a simple format.
     */
    enableSimpleResponses?: boolean | cdk.IResolvable;
    /**
     * The identity source for which authorization is requested.
     */
    identitySource?: Array<string>;
    /**
     * This parameter is not used.
     */
    identityValidationExpression?: string;
    /**
     * The `JWTConfiguration` property specifies the configuration of a JWT authorizer.
     */
    jwtConfiguration?: cdk.IResolvable | CfnAuthorizer.JWTConfigurationProperty;
    /**
     * The name of the authorizer.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAuthorizerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAuthorizer {
    /**
     * The `JWTConfiguration` property specifies the configuration of a JWT authorizer.
     *
     * Required for the `JWT` authorizer type. Supported only for HTTP APIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-authorizer-jwtconfiguration.html
     */
    interface JWTConfigurationProperty {
        /**
         * A list of the intended recipients of the JWT.
         *
         * A valid JWT must provide an `aud` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3) . Required for the `JWT` authorizer type. Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-authorizer-jwtconfiguration.html#cfn-apigatewayv2-authorizer-jwtconfiguration-audience
         */
        readonly audience?: Array<string>;
        /**
         * The base domain of the identity provider that issues JSON Web Tokens.
         *
         * For example, an Amazon Cognito user pool has the following format: `https://cognito-idp. {region} .amazonaws.com/ {userPoolId}` . Required for the `JWT` authorizer type. Supported only for HTTP APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-authorizer-jwtconfiguration.html#cfn-apigatewayv2-authorizer-jwtconfiguration-issuer
         */
        readonly issuer?: string;
    }
}
/**
 * Properties for defining a `CfnAuthorizer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html
 */
export interface CfnAuthorizerProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-apiid
     */
    readonly apiId: string;
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.
     *
     * To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for `REQUEST` authorizers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-authorizercredentialsarn
     */
    readonly authorizerCredentialsArn?: string;
    /**
     * Specifies the format of the payload sent to an HTTP API Lambda authorizer.
     *
     * Required for HTTP API Lambda authorizers. Supported values are `1.0` and `2.0` . To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-authorizerpayloadformatversion
     */
    readonly authorizerPayloadFormatVersion?: string;
    /**
     * The time to live (TTL) for cached authorizer results, in seconds.
     *
     * If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-authorizerresultttlinseconds
     */
    readonly authorizerResultTtlInSeconds?: number;
    /**
     * The authorizer type.
     *
     * Specify `REQUEST` for a Lambda function using incoming request parameters. Specify `JWT` to use JSON Web Tokens (supported only for HTTP APIs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-authorizertype
     */
    readonly authorizerType: string;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
     *
     * For `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2: *{account_id}* :function: *{lambda_function_name}* /invocations` . In general, the URI has this form: `arn:aws:apigateway: *{region}* :lambda:path/ *{service_api}*` , where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/` . For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-authorizeruri
     */
    readonly authorizerUri?: string;
    /**
     * Specifies whether a Lambda authorizer returns a response in a simple format.
     *
     * By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-enablesimpleresponses
     */
    readonly enableSimpleResponses?: boolean | cdk.IResolvable;
    /**
     * The identity source for which authorization is requested.
     *
     * For a `REQUEST` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with `$` , for example, `$request.header.Auth` , `$request.querystring.Name` . These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html) .
     *
     * For `JWT` , a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example `$request.header.Authorization` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-identitysource
     */
    readonly identitySource?: Array<string>;
    /**
     * This parameter is not used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-identityvalidationexpression
     */
    readonly identityValidationExpression?: string;
    /**
     * The `JWTConfiguration` property specifies the configuration of a JWT authorizer.
     *
     * Required for the `JWT` authorizer type. Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-jwtconfiguration
     */
    readonly jwtConfiguration?: cdk.IResolvable | CfnAuthorizer.JWTConfigurationProperty;
    /**
     * The name of the authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-authorizer.html#cfn-apigatewayv2-authorizer-name
     */
    readonly name: string;
}
/**
 * The `AWS::ApiGatewayV2::Deployment` resource creates a deployment for an API.
 *
 * @cloudformationResource AWS::ApiGatewayV2::Deployment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html
 */
export declare class CfnDeployment extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeployment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeployment;
    /**
     * The deployment ID.
     *
     * @cloudformationAttribute DeploymentId
     */
    readonly attrDeploymentId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The description for the deployment resource.
     */
    description?: string;
    /**
     * The name of an existing stage to associate with the deployment.
     */
    stageName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeploymentProps);
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
 * Properties for defining a `CfnDeployment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html
 */
export interface CfnDeploymentProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-apiid
     */
    readonly apiId: string;
    /**
     * The description for the deployment resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-description
     */
    readonly description?: string;
    /**
     * The name of an existing stage to associate with the deployment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-deployment.html#cfn-apigatewayv2-deployment-stagename
     */
    readonly stageName?: string;
}
/**
 * The `AWS::ApiGatewayV2::DomainName` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 *
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::DomainName
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html
 */
export declare class CfnDomainName extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainName from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainName;
    /**
     * The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name.
     *
     * @cloudformationAttribute RegionalDomainName
     */
    readonly attrRegionalDomainName: string;
    /**
     * The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint.
     *
     * @cloudformationAttribute RegionalHostedZoneId
     */
    readonly attrRegionalHostedZoneId: string;
    /**
     * The custom domain name for your API in Amazon API Gateway.
     */
    domainName: string;
    /**
     * The domain name configurations.
     */
    domainNameConfigurations?: Array<CfnDomainName.DomainNameConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     */
    mutualTlsAuthentication?: cdk.IResolvable | CfnDomainName.MutualTlsAuthenticationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags associated with a domain name.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainNameProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomainName {
    /**
     * If specified, API Gateway performs two-way authentication between the client and the server.
     *
     * Clients must present a trusted certificate to access your API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html
     */
    interface MutualTlsAuthenticationProperty {
        /**
         * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3:// bucket-name / key-name` .
         *
         * The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html#cfn-apigatewayv2-domainname-mutualtlsauthentication-truststoreuri
         */
        readonly truststoreUri?: string;
        /**
         * The version of the S3 object that contains your truststore.
         *
         * To specify a version, you must have versioning enabled for the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html#cfn-apigatewayv2-domainname-mutualtlsauthentication-truststoreversion
         */
        readonly truststoreVersion?: string;
    }
    /**
     * The `DomainNameConfiguration` property type specifies the configuration for an API's domain name.
     *
     * `DomainNameConfiguration` is a property of the [AWS::ApiGatewayV2::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html
     */
    interface DomainNameConfigurationProperty {
        /**
         * An AWS -managed certificate that will be used by the edge-optimized endpoint for this domain name.
         *
         * AWS Certificate Manager is the only supported source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html#cfn-apigatewayv2-domainname-domainnameconfiguration-certificatearn
         */
        readonly certificateArn?: string;
        /**
         * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html#cfn-apigatewayv2-domainname-domainnameconfiguration-certificatename
         */
        readonly certificateName?: string;
        /**
         * The endpoint type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html#cfn-apigatewayv2-domainname-domainnameconfiguration-endpointtype
         */
        readonly endpointType?: string;
        /**
         * The Amazon resource name (ARN) for the public certificate issued by AWS Certificate Manager .
         *
         * This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html#cfn-apigatewayv2-domainname-domainnameconfiguration-ownershipverificationcertificatearn
         */
        readonly ownershipVerificationCertificateArn?: string;
        /**
         * The Transport Layer Security (TLS) version of the security policy for this domain name.
         *
         * The valid values are `TLS_1_0` and `TLS_1_2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html#cfn-apigatewayv2-domainname-domainnameconfiguration-securitypolicy
         */
        readonly securityPolicy?: string;
    }
}
/**
 * Properties for defining a `CfnDomainName`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html
 */
export interface CfnDomainNameProps {
    /**
     * The custom domain name for your API in Amazon API Gateway.
     *
     * Uppercase letters and the underscore ( `_` ) character are not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainname
     */
    readonly domainName: string;
    /**
     * The domain name configurations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfigurations
     */
    readonly domainNameConfigurations?: Array<CfnDomainName.DomainNameConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-mutualtlsauthentication
     */
    readonly mutualTlsAuthentication?: cdk.IResolvable | CfnDomainName.MutualTlsAuthenticationProperty;
    /**
     * The collection of tags associated with a domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The `AWS::ApiGatewayV2::Integration` resource creates an integration for an API.
 *
 * @cloudformationResource AWS::ApiGatewayV2::Integration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html
 */
export declare class CfnIntegration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegration;
    /**
     * The integration ID.
     *
     * @cloudformationAttribute IntegrationId
     */
    readonly attrIntegrationId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The ID of the VPC link for a private integration.
     */
    connectionId?: string;
    /**
     * The type of the network connection to the integration endpoint.
     */
    connectionType?: string;
    /**
     * Supported only for WebSocket APIs.
     */
    contentHandlingStrategy?: string;
    /**
     * Specifies the credentials required for the integration, if any.
     */
    credentialsArn?: string;
    /**
     * The description of the integration.
     */
    description?: string;
    /**
     * Specifies the integration's HTTP method type.
     */
    integrationMethod?: string;
    /**
     * Supported only for HTTP API `AWS_PROXY` integrations.
     */
    integrationSubtype?: string;
    /**
     * The integration type of an integration. One of the following:.
     */
    integrationType: string;
    /**
     * For a Lambda integration, specify the URI of a Lambda function.
     */
    integrationUri?: string;
    /**
     * Specifies the pass-through behavior for incoming requests based on the `Content-Type` header in the request, and the available mapping templates specified as the `requestTemplates` property on the `Integration` resource.
     */
    passthroughBehavior?: string;
    /**
     * Specifies the format of the payload sent to an integration.
     */
    payloadFormatVersion?: string;
    /**
     * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend.
     */
    requestParameters?: any | cdk.IResolvable;
    /**
     * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
     */
    requestTemplates?: any | cdk.IResolvable;
    /**
     * Supported only for HTTP APIs.
     */
    responseParameters?: any | cdk.IResolvable;
    /**
     * The template selection expression for the integration.
     */
    templateSelectionExpression?: string;
    /**
     * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.
     */
    timeoutInMillis?: number;
    /**
     * The TLS configuration for a private integration.
     */
    tlsConfig?: cdk.IResolvable | CfnIntegration.TlsConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIntegration {
    /**
     * map of response parameter lists.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparametermap.html
     */
    interface ResponseParameterMapProperty {
        /**
         * list of response parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparametermap.html#cfn-apigatewayv2-integration-responseparametermap-responseparameters
         */
        readonly responseParameters?: Array<cdk.IResolvable | CfnIntegration.ResponseParameterProperty> | cdk.IResolvable;
    }
    /**
     * Supported only for HTTP APIs.
     *
     * You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match the pattern `<action>:<header>.<location>` or `overwrite.statuscode` . The action can be `append` , `overwrite` or `remove` . The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameter.html
     */
    interface ResponseParameterProperty {
        /**
         * Specifies the location of the response to modify, and how to modify it.
         *
         * To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameter.html#cfn-apigatewayv2-integration-responseparameter-destination
         */
        readonly destination?: string;
        /**
         * Specifies the data to update the parameter with.
         *
         * To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameter.html#cfn-apigatewayv2-integration-responseparameter-source
         */
        readonly source?: string;
    }
    /**
     * The `TlsConfig` property specifies the TLS configuration for a private integration.
     *
     * If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html
     */
    interface TlsConfigProperty {
        /**
         * If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate.
         *
         * The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-tlsconfig.html#cfn-apigatewayv2-integration-tlsconfig-servernametoverify
         */
        readonly serverNameToVerify?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameterlist.html
     */
    interface ResponseParameterListProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameterlist.html#cfn-apigatewayv2-integration-responseparameterlist-responseparameters
         */
        readonly responseParameters?: Array<cdk.IResolvable | CfnIntegration.ResponseParameterProperty> | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html
 */
export interface CfnIntegrationProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-apiid
     */
    readonly apiId: string;
    /**
     * The ID of the VPC link for a private integration.
     *
     * Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-connectionid
     */
    readonly connectionId?: string;
    /**
     * The type of the network connection to the integration endpoint.
     *
     * Specify `INTERNET` for connections through the public routable internet or `VPC_LINK` for private connections between API Gateway and resources in a VPC. The default value is `INTERNET` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-connectiontype
     */
    readonly connectionType?: string;
    /**
     * Supported only for WebSocket APIs.
     *
     * Specifies how to handle response payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT` , with the following behaviors:
     *
     * `CONVERT_TO_BINARY` : Converts a response payload from a Base64-encoded string to the corresponding binary blob.
     *
     * `CONVERT_TO_TEXT` : Converts a response payload from a binary blob to a Base64-encoded string.
     *
     * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-contenthandlingstrategy
     */
    readonly contentHandlingStrategy?: string;
    /**
     * Specifies the credentials required for the integration, if any.
     *
     * For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::*:user/*` . To use resource-based permissions on supported AWS services, don't specify this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-credentialsarn
     */
    readonly credentialsArn?: string;
    /**
     * The description of the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-description
     */
    readonly description?: string;
    /**
     * Specifies the integration's HTTP method type.
     *
     * For WebSocket APIs, if you use a Lambda integration, you must set the integration method to `POST` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-integrationmethod
     */
    readonly integrationMethod?: string;
    /**
     * Supported only for HTTP API `AWS_PROXY` integrations.
     *
     * Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-integrationsubtype
     */
    readonly integrationSubtype?: string;
    /**
     * The integration type of an integration. One of the following:.
     *
     * `AWS` : for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
     *
     * `AWS_PROXY` : for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
     *
     * `HTTP` : for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
     *
     * `HTTP_PROXY` : for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an `HTTP_PROXY` integration.
     *
     * `MOCK` : for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-integrationtype
     */
    readonly integrationType: string;
    /**
     * For a Lambda integration, specify the URI of a Lambda function.
     *
     * For an HTTP integration, specify a fully-qualified URL.
     *
     * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses `DiscoverInstances` to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html) . For private integrations, all resources must be owned by the same AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-integrationuri
     */
    readonly integrationUri?: string;
    /**
     * Specifies the pass-through behavior for incoming requests based on the `Content-Type` header in the request, and the available mapping templates specified as the `requestTemplates` property on the `Integration` resource.
     *
     * There are three valid values: `WHEN_NO_MATCH` , `WHEN_NO_TEMPLATES` , and `NEVER` . Supported only for WebSocket APIs.
     *
     * `WHEN_NO_MATCH` passes the request body for unmapped content types through to the integration backend without transformation.
     *
     * `NEVER` rejects unmapped content types with an `HTTP 415 Unsupported Media Type` response.
     *
     * `WHEN_NO_TEMPLATES` allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same `HTTP 415 Unsupported Media Type` response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-passthroughbehavior
     */
    readonly passthroughBehavior?: string;
    /**
     * Specifies the format of the payload sent to an integration.
     *
     * Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are `1.0` and `2.0` . For all other integrations, `1.0` is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-payloadformatversion
     */
    readonly payloadFormatVersion?: string;
    /**
     * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend.
     *
     * The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of `method.request. {location} . {name}` , where `{location}` is `querystring` , `path` , or `header` ; and `{name}` must be a valid and unique method request parameter name.
     *
     * For HTTP API integrations with a specified `integrationSubtype` , request parameters are a key-value map specifying parameters that are passed to `AWS_PROXY` integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html) .
     *
     * For HTTP API integrations without a specified `integrationSubtype` request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern <action>:<header|querystring|path>.<location> where action can be `append` , `overwrite` or `remove` . For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-requestparameters
     */
    readonly requestParameters?: any | cdk.IResolvable;
    /**
     * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
     *
     * The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-requesttemplates
     */
    readonly requestTemplates?: any | cdk.IResolvable;
    /**
     * Supported only for HTTP APIs.
     *
     * You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. The value is of type [`ResponseParameterList`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-integration-responseparameterlist.html) . To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-responseparameters
     */
    readonly responseParameters?: any | cdk.IResolvable;
    /**
     * The template selection expression for the integration.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-templateselectionexpression
     */
    readonly templateSelectionExpression?: string;
    /**
     * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs.
     *
     * The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-timeoutinmillis
     */
    readonly timeoutInMillis?: number;
    /**
     * The TLS configuration for a private integration.
     *
     * If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integration.html#cfn-apigatewayv2-integration-tlsconfig
     */
    readonly tlsConfig?: cdk.IResolvable | CfnIntegration.TlsConfigProperty;
}
/**
 * The `AWS::ApiGatewayV2::IntegrationResponse` resource updates an integration response for an WebSocket API.
 *
 * For more information, see [Set up WebSocket API Integration Responses in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::IntegrationResponse
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html
 */
export declare class CfnIntegrationResponse extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegrationResponse from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegrationResponse;
    /**
     * The integration response ID.
     *
     * @cloudformationAttribute IntegrationResponseId
     */
    readonly attrIntegrationResponseId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * Supported only for WebSocket APIs.
     */
    contentHandlingStrategy?: string;
    /**
     * The integration ID.
     */
    integrationId: string;
    /**
     * The integration response key.
     */
    integrationResponseKey: string;
    /**
     * A key-value map specifying response parameters that are passed to the method response from the backend.
     */
    responseParameters?: any | cdk.IResolvable;
    /**
     * The collection of response templates for the integration response as a string-to-string map of key-value pairs.
     */
    responseTemplates?: any | cdk.IResolvable;
    /**
     * The template selection expression for the integration response.
     */
    templateSelectionExpression?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationResponseProps);
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
 * Properties for defining a `CfnIntegrationResponse`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html
 */
export interface CfnIntegrationResponseProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-apiid
     */
    readonly apiId: string;
    /**
     * Supported only for WebSocket APIs.
     *
     * Specifies how to handle response payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT` , with the following behaviors:
     *
     * `CONVERT_TO_BINARY` : Converts a response payload from a Base64-encoded string to the corresponding binary blob.
     *
     * `CONVERT_TO_TEXT` : Converts a response payload from a binary blob to a Base64-encoded string.
     *
     * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-contenthandlingstrategy
     */
    readonly contentHandlingStrategy?: string;
    /**
     * The integration ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-integrationid
     */
    readonly integrationId: string;
    /**
     * The integration response key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-integrationresponsekey
     */
    readonly integrationResponseKey: string;
    /**
     * A key-value map specifying response parameters that are passed to the method response from the backend.
     *
     * The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of `method.response.header. *{name}*` , where name is a valid and unique header name. The mapped non-static value must match the pattern of `integration.response.header. *{name}*` or `integration.response.body. *{JSON-expression}*` , where `*{name}*` is a valid and unique response header name and `*{JSON-expression}*` is a valid JSON expression without the `$` prefix.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-responseparameters
     */
    readonly responseParameters?: any | cdk.IResolvable;
    /**
     * The collection of response templates for the integration response as a string-to-string map of key-value pairs.
     *
     * Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-responsetemplates
     */
    readonly responseTemplates?: any | cdk.IResolvable;
    /**
     * The template selection expression for the integration response.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html#cfn-apigatewayv2-integrationresponse-templateselectionexpression
     */
    readonly templateSelectionExpression?: string;
}
/**
 * The `AWS::ApiGatewayV2::Model` resource updates data model for a WebSocket API.
 *
 * For more information, see [Model Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-model-selection-expressions) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::Model
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html
 */
export declare class CfnModel extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnModel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnModel;
    /**
     * The model ID.
     *
     * @cloudformationAttribute ModelId
     */
    readonly attrModelId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The content-type for the model, for example, "application/json".
     */
    contentType?: string;
    /**
     * The description of the model.
     */
    description?: string;
    /**
     * The name of the model.
     */
    name: string;
    /**
     * The schema for the model.
     */
    schema: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnModelProps);
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
 * Properties for defining a `CfnModel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html
 */
export interface CfnModelProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-apiid
     */
    readonly apiId: string;
    /**
     * The content-type for the model, for example, "application/json".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-contenttype
     */
    readonly contentType?: string;
    /**
     * The description of the model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-description
     */
    readonly description?: string;
    /**
     * The name of the model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-name
     */
    readonly name: string;
    /**
     * The schema for the model.
     *
     * For application/json models, this should be JSON schema draft 4 model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-model.html#cfn-apigatewayv2-model-schema
     */
    readonly schema: any | cdk.IResolvable;
}
/**
 * The `AWS::ApiGatewayV2::Route` resource creates a route for an API.
 *
 * @cloudformationResource AWS::ApiGatewayV2::Route
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html
 */
export declare class CfnRoute extends cdk.CfnResource implements cdk.IInspectable {
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
     * The route ID.
     *
     * @cloudformationAttribute RouteId
     */
    readonly attrRouteId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * Specifies whether an API key is required for the route.
     */
    apiKeyRequired?: boolean | cdk.IResolvable;
    /**
     * The authorization scopes supported by this route.
     */
    authorizationScopes?: Array<string>;
    /**
     * The authorization type for the route.
     */
    authorizationType?: string;
    /**
     * The identifier of the `Authorizer` resource to be associated with this route.
     */
    authorizerId?: string;
    /**
     * The model selection expression for the route.
     */
    modelSelectionExpression?: string;
    /**
     * The operation name for the route.
     */
    operationName?: string;
    /**
     * The request models for the route.
     */
    requestModels?: any | cdk.IResolvable;
    /**
     * The request parameters for the route.
     */
    requestParameters?: any | cdk.IResolvable;
    /**
     * The route key for the route.
     */
    routeKey: string;
    /**
     * The route response selection expression for the route.
     */
    routeResponseSelectionExpression?: string;
    /**
     * The target for the route.
     */
    target?: string;
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
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-route-parameterconstraints.html
     */
    interface ParameterConstraintsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-route-parameterconstraints.html#cfn-apigatewayv2-route-parameterconstraints-required
         */
        readonly required: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnRoute`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html
 */
export interface CfnRouteProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-apiid
     */
    readonly apiId: string;
    /**
     * Specifies whether an API key is required for the route.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-apikeyrequired
     */
    readonly apiKeyRequired?: boolean | cdk.IResolvable;
    /**
     * The authorization scopes supported by this route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-authorizationscopes
     */
    readonly authorizationScopes?: Array<string>;
    /**
     * The authorization type for the route.
     *
     * For WebSocket APIs, valid values are `NONE` for open access, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer. For HTTP APIs, valid values are `NONE` for open access, `JWT` for using JSON Web Tokens, `AWS_IAM` for using AWS IAM permissions, and `CUSTOM` for using a Lambda authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-authorizationtype
     */
    readonly authorizationType?: string;
    /**
     * The identifier of the `Authorizer` resource to be associated with this route.
     *
     * The authorizer identifier is generated by API Gateway when you created the authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-authorizerid
     */
    readonly authorizerId?: string;
    /**
     * The model selection expression for the route.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-modelselectionexpression
     */
    readonly modelSelectionExpression?: string;
    /**
     * The operation name for the route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-operationname
     */
    readonly operationName?: string;
    /**
     * The request models for the route.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-requestmodels
     */
    readonly requestModels?: any | cdk.IResolvable;
    /**
     * The request parameters for the route.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-requestparameters
     */
    readonly requestParameters?: any | cdk.IResolvable;
    /**
     * The route key for the route.
     *
     * For HTTP APIs, the route key can be either `$default` , or a combination of an HTTP method and resource path, for example, `GET /pets` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-routekey
     */
    readonly routeKey: string;
    /**
     * The route response selection expression for the route.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-routeresponseselectionexpression
     */
    readonly routeResponseSelectionExpression?: string;
    /**
     * The target for the route.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-target
     */
    readonly target?: string;
}
/**
 * The `AWS::ApiGatewayV2::RouteResponse` resource creates a route response for a WebSocket API.
 *
 * For more information, see [Set up Route Responses for a WebSocket API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-route-response.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::RouteResponse
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html
 */
export declare class CfnRouteResponse extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRouteResponse from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRouteResponse;
    /**
     * The route response ID.
     *
     * @cloudformationAttribute RouteResponseId
     */
    readonly attrRouteResponseId: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The model selection expression for the route response.
     */
    modelSelectionExpression?: string;
    /**
     * The response models for the route response.
     */
    responseModels?: any | cdk.IResolvable;
    /**
     * The route response parameters.
     */
    responseParameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnRouteResponse.ParameterConstraintsProperty>;
    /**
     * The route ID.
     */
    routeId: string;
    /**
     * The route response key.
     */
    routeResponseKey: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRouteResponseProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRouteResponse {
    /**
     * Specifies whether the parameter is required.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routeresponse-parameterconstraints.html
     */
    interface ParameterConstraintsProperty {
        /**
         * Specifies whether the parameter is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-routeresponse-parameterconstraints.html#cfn-apigatewayv2-routeresponse-parameterconstraints-required
         */
        readonly required: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnRouteResponse`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html
 */
export interface CfnRouteResponseProps {
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-apiid
     */
    readonly apiId: string;
    /**
     * The model selection expression for the route response.
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-modelselectionexpression
     */
    readonly modelSelectionExpression?: string;
    /**
     * The response models for the route response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-responsemodels
     */
    readonly responseModels?: any | cdk.IResolvable;
    /**
     * The route response parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-responseparameters
     */
    readonly responseParameters?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnRouteResponse.ParameterConstraintsProperty>;
    /**
     * The route ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-routeid
     */
    readonly routeId: string;
    /**
     * The route response key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-routeresponse.html#cfn-apigatewayv2-routeresponse-routeresponsekey
     */
    readonly routeResponseKey: string;
}
/**
 * The `AWS::ApiGatewayV2::Stage` resource specifies a stage for an API.
 *
 * Each stage is a named reference to a deployment of the API and is made available for client applications to call. To learn more, see [Working with stages for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-stages.html) and [Deploy a WebSocket API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-set-up-websocket-deployment.html) .
 *
 * @cloudformationResource AWS::ApiGatewayV2::Stage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html
 */
export declare class CfnStage extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStage from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStage;
    /**
     * The identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Settings for logging access in this stage.
     */
    accessLogSettings?: CfnStage.AccessLogSettingsProperty | cdk.IResolvable;
    /**
     * This parameter is not currently supported.
     */
    accessPolicyId?: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * Specifies whether updates to an API automatically trigger a new deployment.
     */
    autoDeploy?: boolean | cdk.IResolvable;
    /**
     * The identifier of a client certificate for a `Stage` .
     */
    clientCertificateId?: string;
    /**
     * The default route settings for the stage.
     */
    defaultRouteSettings?: cdk.IResolvable | CfnStage.RouteSettingsProperty;
    /**
     * The deployment identifier for the API stage.
     */
    deploymentId?: string;
    /**
     * The description for the API stage.
     */
    description?: string;
    /**
     * Route settings for the stage.
     */
    routeSettings?: any | cdk.IResolvable;
    /**
     * The stage name.
     */
    stageName: string;
    /**
     * A map that defines the stage variables for a `Stage` .
     */
    stageVariables?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStageProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStage {
    /**
     * Settings for logging access in a stage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-accesslogsettings.html
     */
    interface AccessLogSettingsProperty {
        /**
         * The ARN of the CloudWatch Logs log group to receive access logs.
         *
         * This parameter is required to enable access logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-accesslogsettings.html#cfn-apigatewayv2-stage-accesslogsettings-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * A single line format of the access logs of data, as specified by selected $context variables.
         *
         * The format must include at least $context.requestId. This parameter is required to enable access logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-accesslogsettings.html#cfn-apigatewayv2-stage-accesslogsettings-format
         */
        readonly format?: string;
    }
    /**
     * Represents a collection of route settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html
     */
    interface RouteSettingsProperty {
        /**
         * Specifies whether ( `true` ) or not ( `false` ) data trace logging is enabled for this route.
         *
         * This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html#cfn-apigatewayv2-stage-routesettings-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether detailed metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html#cfn-apigatewayv2-stage-routesettings-detailedmetricsenabled
         */
        readonly detailedMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the logging level for this route: `INFO` , `ERROR` , or `OFF` .
         *
         * This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html#cfn-apigatewayv2-stage-routesettings-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * Specifies the throttling burst limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html#cfn-apigatewayv2-stage-routesettings-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * Specifies the throttling rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-stage-routesettings.html#cfn-apigatewayv2-stage-routesettings-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
}
/**
 * Properties for defining a `CfnStage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html
 */
export interface CfnStageProps {
    /**
     * Settings for logging access in this stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-accesslogsettings
     */
    readonly accessLogSettings?: CfnStage.AccessLogSettingsProperty | cdk.IResolvable;
    /**
     * This parameter is not currently supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-accesspolicyid
     */
    readonly accessPolicyId?: string;
    /**
     * The API identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-apiid
     */
    readonly apiId: string;
    /**
     * Specifies whether updates to an API automatically trigger a new deployment.
     *
     * The default value is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-autodeploy
     */
    readonly autoDeploy?: boolean | cdk.IResolvable;
    /**
     * The identifier of a client certificate for a `Stage` .
     *
     * Supported only for WebSocket APIs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-clientcertificateid
     */
    readonly clientCertificateId?: string;
    /**
     * The default route settings for the stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-defaultroutesettings
     */
    readonly defaultRouteSettings?: cdk.IResolvable | CfnStage.RouteSettingsProperty;
    /**
     * The deployment identifier for the API stage.
     *
     * Can't be updated if `autoDeploy` is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-deploymentid
     */
    readonly deploymentId?: string;
    /**
     * The description for the API stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-description
     */
    readonly description?: string;
    /**
     * Route settings for the stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-routesettings
     */
    readonly routeSettings?: any | cdk.IResolvable;
    /**
     * The stage name.
     *
     * Stage names can contain only alphanumeric characters, hyphens, and underscores, or be `$default` . Maximum length is 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-stagename
     */
    readonly stageName: string;
    /**
     * A map that defines the stage variables for a `Stage` .
     *
     * Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-stagevariables
     */
    readonly stageVariables?: any | cdk.IResolvable;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-stage.html#cfn-apigatewayv2-stage-tags
     */
    readonly tags?: any;
}
/**
 * The `AWS::ApiGatewayV2::VpcLink` resource creates a VPC link.
 *
 * Supported only for HTTP APIs. The VPC link status must transition from `PENDING` to `AVAILABLE` to successfully create a VPC link, which can take up to 10 minutes. To learn more, see [Working with VPC Links for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vpc-links.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGatewayV2::VpcLink
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html
 */
export declare class CfnVpcLink extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcLink from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcLink;
    /**
     * The VPC link ID.
     *
     * @cloudformationAttribute VpcLinkId
     */
    readonly attrVpcLinkId: string;
    /**
     * The name of the VPC link.
     */
    name: string;
    /**
     * A list of security group IDs for the VPC link.
     */
    securityGroupIds?: Array<string>;
    /**
     * A list of subnet IDs to include in the VPC link.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcLinkProps);
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
 * Properties for defining a `CfnVpcLink`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html
 */
export interface CfnVpcLinkProps {
    /**
     * The name of the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-name
     */
    readonly name: string;
    /**
     * A list of security group IDs for the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * A list of subnet IDs to include in the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-vpclink.html#cfn-apigatewayv2-vpclink-tags
     */
    readonly tags?: Record<string, string>;
}
