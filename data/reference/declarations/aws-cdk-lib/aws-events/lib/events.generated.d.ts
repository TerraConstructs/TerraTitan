import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
 *
 * When using ApiDesinations with OAuth authentication we recommend these best practices:
 *
 * - Create a secret in Secrets Manager with your OAuth credentials.
 * - Reference that secret in your CloudFormation template for `AWS::Events::Connection` using CloudFormation dynamic reference syntax. For more information, see [Secrets Manager secrets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) .
 *
 * When the Connection resource is created the secret will be passed to EventBridge and stored in the customer account using “Service Linked Secrets,” effectively creating two secrets. This will minimize the cost because the original secret is only accessed when a CloudFormation template is created or updated, not every time an event is sent to the ApiDestination. The secret stored in the customer account by EventBridge is the one used for each event sent to the ApiDestination and AWS is responsible for the fees.
 *
 * > The secret stored in the customer account by EventBridge can’t be updated directly, only when a CloudFormation template is updated.
 *
 * For examples of CloudFormation templates that use secrets, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#aws-resource-events-connection--examples) .
 *
 * @cloudformationResource AWS::Events::ApiDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html
 */
export declare class CfnApiDestination extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiDestination;
    /**
     * The ARN of the API destination that was created by the request.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the connection to use for the API destination.
     */
    connectionArn: string;
    /**
     * A description for the API destination to create.
     */
    description?: string;
    /**
     * The method to use for the request to the HTTP invocation endpoint.
     */
    httpMethod: string;
    /**
     * The URL to the HTTP invocation endpoint for the API destination.
     */
    invocationEndpoint: string;
    /**
     * The maximum number of requests per second to send to the HTTP invocation endpoint.
     */
    invocationRateLimitPerSecond?: number;
    /**
     * The name for the API destination to create.
     */
    name?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApiDestinationProps);
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
 * Properties for defining a `CfnApiDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html
 */
export interface CfnApiDestinationProps {
    /**
     * The ARN of the connection to use for the API destination.
     *
     * The destination endpoint must support the authorization type specified for the connection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-connectionarn
     */
    readonly connectionArn: string;
    /**
     * A description for the API destination to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-description
     */
    readonly description?: string;
    /**
     * The method to use for the request to the HTTP invocation endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-httpmethod
     */
    readonly httpMethod: string;
    /**
     * The URL to the HTTP invocation endpoint for the API destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationendpoint
     */
    readonly invocationEndpoint: string;
    /**
     * The maximum number of requests per second to send to the HTTP invocation endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationratelimitpersecond
     */
    readonly invocationRateLimitPerSecond?: number;
    /**
     * The name for the API destination to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-name
     */
    readonly name?: string;
}
/**
 * Creates an archive of events with the specified settings.
 *
 * When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
 *
 * > Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:
 * >
 * > - You call `[CreateArchive](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html)` on an event bus set to use a customer managed key for encryption.
 * > - You call `[CreateDiscoverer](https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#CreateDiscoverer)` on an event bus set to use a customer managed key for encryption.
 * > - You call `[UpdatedEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdatedEventBus.html)` to set a customer managed key on an event bus with an archives or schema discovery enabled.
 * >
 * > To enable archives or schema discovery on an event bus, choose to use an AWS owned key . For more information, see [Data encryption in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html) in the *Amazon EventBridge User Guide* .
 *
 * @cloudformationResource AWS::Events::Archive
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html
 */
export declare class CfnArchive extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnArchive from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnArchive;
    /**
     * The ARN of the archive created.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name for the archive to create.
     */
    archiveName?: string;
    /**
     * A description for the archive.
     */
    description?: string;
    /**
     * An event pattern to use to filter events sent to the archive.
     */
    eventPattern?: any | cdk.IResolvable;
    /**
     * The number of days to retain events for.
     */
    retentionDays?: number;
    /**
     * The ARN of the event bus that sends events to the archive.
     */
    sourceArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnArchiveProps);
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
 * Properties for defining a `CfnArchive`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html
 */
export interface CfnArchiveProps {
    /**
     * The name for the archive to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-archivename
     */
    readonly archiveName?: string;
    /**
     * A description for the archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-description
     */
    readonly description?: string;
    /**
     * An event pattern to use to filter events sent to the archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-eventpattern
     */
    readonly eventPattern?: any | cdk.IResolvable;
    /**
     * The number of days to retain events for.
     *
     * Default value is 0. If set to 0, events are retained indefinitely
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-retentiondays
     */
    readonly retentionDays?: number;
    /**
     * The ARN of the event bus that sends events to the archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-sourcearn
     */
    readonly sourceArn: string;
}
/**
 * Creates a connection.
 *
 * A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
 *
 * For more information, see [Connections for endpoint targets](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection.html) in the *Amazon EventBridge User Guide* .
 *
 * @cloudformationResource AWS::Events::Connection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html
 */
export declare class CfnConnection extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnection;
    /**
     * The ARN of the connection that was created by the request.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * For connections to private APIs, the Amazon Resource Name (ARN) of the resource association EventBridge created between the connection and the private API's resource configuration.
     *
     * > The value of this property is set by EventBridge . Any value you specify in your template is ignored.
     *
     * @cloudformationAttribute AuthParameters.ConnectivityParameters.ResourceParameters.ResourceAssociationArn
     */
    readonly attrAuthParametersConnectivityParametersResourceParametersResourceAssociationArn: string;
    /**
     * For connections to private APIs, the Amazon Resource Name (ARN) of the resource association EventBridge created between the connection and the private API's resource configuration.
     *
     * > The value of this property is set by EventBridge . Any value you specify in your template is ignored.
     *
     * @cloudformationAttribute InvocationConnectivityParameters.ResourceParameters.ResourceAssociationArn
     */
    readonly attrInvocationConnectivityParametersResourceParametersResourceAssociationArn: string;
    /**
     * The ARN for the secret created for the connection.
     *
     * @cloudformationAttribute SecretArn
     */
    readonly attrSecretArn: string;
    /**
     * The type of authorization to use for the connection.
     */
    authorizationType?: string;
    /**
     * The authorization parameters to use to authorize with the endpoint.
     */
    authParameters?: CfnConnection.AuthParametersProperty | cdk.IResolvable;
    /**
     * A description for the connection to create.
     */
    description?: string;
    /**
     * For connections to private APIs, the parameters to use for invoking the API.
     */
    invocationConnectivityParameters?: CfnConnection.InvocationConnectivityParametersProperty | cdk.IResolvable;
    /**
     * The name for the connection to create.
     */
    name?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnConnectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnection {
    /**
     * Tthe authorization parameters to use for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html
     */
    interface AuthParametersProperty {
        /**
         * The API Key parameters to use for authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html#cfn-events-connection-authparameters-apikeyauthparameters
         */
        readonly apiKeyAuthParameters?: CfnConnection.ApiKeyAuthParametersProperty | cdk.IResolvable;
        /**
         * The authorization parameters for Basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html#cfn-events-connection-authparameters-basicauthparameters
         */
        readonly basicAuthParameters?: CfnConnection.BasicAuthParametersProperty | cdk.IResolvable;
        /**
         * For private OAuth authentication endpoints. The parameters EventBridge uses to authenticate against the endpoint.
         *
         * For more information, see [Authorization methods for connections](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html) in the **Amazon EventBridge User Guide** .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html#cfn-events-connection-authparameters-connectivityparameters
         */
        readonly connectivityParameters?: CfnConnection.ConnectivityParametersProperty | cdk.IResolvable;
        /**
         * Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html#cfn-events-connection-authparameters-invocationhttpparameters
         */
        readonly invocationHttpParameters?: CfnConnection.ConnectionHttpParametersProperty | cdk.IResolvable;
        /**
         * The OAuth parameters to use for authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html#cfn-events-connection-authparameters-oauthparameters
         */
        readonly oAuthParameters?: cdk.IResolvable | CfnConnection.OAuthParametersProperty;
    }
    /**
     * Any additional parameters for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html
     */
    interface ConnectionHttpParametersProperty {
        /**
         * Any additional body string parameters for the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html#cfn-events-connection-connectionhttpparameters-bodyparameters
         */
        readonly bodyParameters?: Array<cdk.IResolvable | CfnConnection.ParameterProperty> | cdk.IResolvable;
        /**
         * Any additional header parameters for the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html#cfn-events-connection-connectionhttpparameters-headerparameters
         */
        readonly headerParameters?: Array<cdk.IResolvable | CfnConnection.ParameterProperty> | cdk.IResolvable;
        /**
         * Any additional query string parameters for the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html#cfn-events-connection-connectionhttpparameters-querystringparameters
         */
        readonly queryStringParameters?: Array<cdk.IResolvable | CfnConnection.ParameterProperty> | cdk.IResolvable;
    }
    /**
     * Any additional query string parameter for the connection.
     *
     * You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html
     */
    interface ParameterProperty {
        /**
         * Specifies whether the value is secret.
         *
         * @default - true
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html#cfn-events-connection-parameter-isvaluesecret
         */
        readonly isValueSecret?: boolean | cdk.IResolvable;
        /**
         * The key for a query string parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html#cfn-events-connection-parameter-key
         */
        readonly key: string;
        /**
         * The value associated with the key for the query string parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html#cfn-events-connection-parameter-value
         */
        readonly value: string;
    }
    /**
     * The Basic authorization parameters for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html
     */
    interface BasicAuthParametersProperty {
        /**
         * The password associated with the user name to use for Basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html#cfn-events-connection-basicauthparameters-password
         */
        readonly password: string;
        /**
         * The user name to use for Basic authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html#cfn-events-connection-basicauthparameters-username
         */
        readonly username: string;
    }
    /**
     * The API key authorization parameters for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html
     */
    interface ApiKeyAuthParametersProperty {
        /**
         * The name of the API key to use for authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html#cfn-events-connection-apikeyauthparameters-apikeyname
         */
        readonly apiKeyName: string;
        /**
         * The value for the API key to use for authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html#cfn-events-connection-apikeyauthparameters-apikeyvalue
         */
        readonly apiKeyValue: string;
    }
    /**
     * Contains the OAuth authorization parameters to use for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html
     */
    interface OAuthParametersProperty {
        /**
         * The URL to the authorization endpoint when OAuth is specified as the authorization type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html#cfn-events-connection-oauthparameters-authorizationendpoint
         */
        readonly authorizationEndpoint: string;
        /**
         * The client parameters for OAuth authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html#cfn-events-connection-oauthparameters-clientparameters
         */
        readonly clientParameters: CfnConnection.ClientParametersProperty | cdk.IResolvable;
        /**
         * The method to use for the authorization request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html#cfn-events-connection-oauthparameters-httpmethod
         */
        readonly httpMethod: string;
        /**
         * Details about the additional parameters to use for the connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html#cfn-events-connection-oauthparameters-oauthhttpparameters
         */
        readonly oAuthHttpParameters?: CfnConnection.ConnectionHttpParametersProperty | cdk.IResolvable;
    }
    /**
     * The OAuth authorization parameters to use for the connection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html
     */
    interface ClientParametersProperty {
        /**
         * The client ID to use for OAuth authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html#cfn-events-connection-clientparameters-clientid
         */
        readonly clientId: string;
        /**
         * The client secret assciated with the client ID to use for OAuth authorization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html#cfn-events-connection-clientparameters-clientsecret
         */
        readonly clientSecret: string;
    }
    /**
     * If you specify a private OAuth endpoint, the parameters for EventBridge to use when authenticating against the endpoint.
     *
     * For more information, see [Authorization methods for connections](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html) in the **Amazon EventBridge User Guide** .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectivityparameters.html
     */
    interface ConnectivityParametersProperty {
        /**
         * The parameters for EventBridge to use when invoking the resource endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectivityparameters.html#cfn-events-connection-connectivityparameters-resourceparameters
         */
        readonly resourceParameters: cdk.IResolvable | CfnConnection.ResourceParametersProperty;
    }
    /**
     * The parameters for EventBridge to use when invoking the resource endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-resourceparameters.html
     */
    interface ResourceParametersProperty {
        /**
         * For connections to private APIs, the Amazon Resource Name (ARN) of the resource association EventBridge created between the connection and the private API's resource configuration.
         *
         * > The value of this property is set by EventBridge . Any value you specify in your template is ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-resourceparameters.html#cfn-events-connection-resourceparameters-resourceassociationarn
         */
        readonly resourceAssociationArn?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon VPC Lattice resource configuration for the resource endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-resourceparameters.html#cfn-events-connection-resourceparameters-resourceconfigurationarn
         */
        readonly resourceConfigurationArn: string;
    }
    /**
     * For connections to private APIs, the parameters to use for invoking the API.
     *
     * For more information, see [Connecting to private APIs](https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html) in the **Amazon EventBridge User Guide** .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-invocationconnectivityparameters.html
     */
    interface InvocationConnectivityParametersProperty {
        /**
         * The parameters for EventBridge to use when invoking the resource endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-invocationconnectivityparameters.html#cfn-events-connection-invocationconnectivityparameters-resourceparameters
         */
        readonly resourceParameters: cdk.IResolvable | CfnConnection.ResourceParametersProperty;
    }
}
/**
 * Properties for defining a `CfnConnection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html
 */
export interface CfnConnectionProps {
    /**
     * The type of authorization to use for the connection.
     *
     * > OAUTH tokens are refreshed when a 401 or 407 response is returned.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authorizationtype
     */
    readonly authorizationType?: string;
    /**
     * The authorization parameters to use to authorize with the endpoint.
     *
     * You must include only authorization parameters for the `AuthorizationType` you specify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters
     */
    readonly authParameters?: CfnConnection.AuthParametersProperty | cdk.IResolvable;
    /**
     * A description for the connection to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-description
     */
    readonly description?: string;
    /**
     * For connections to private APIs, the parameters to use for invoking the API.
     *
     * For more information, see [Connecting to private APIs](https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html) in the **Amazon EventBridge User Guide** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-invocationconnectivityparameters
     */
    readonly invocationConnectivityParameters?: CfnConnection.InvocationConnectivityParametersProperty | cdk.IResolvable;
    /**
     * The name for the connection to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-name
     */
    readonly name?: string;
}
/**
 * A global endpoint used to improve your application's availability by making it regional-fault tolerant.
 *
 * For more information about global endpoints, see [Making applications Regional-fault tolerant with global endpoints and event replication](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html) in the **Amazon EventBridge User Guide** .
 *
 * @cloudformationResource AWS::Events::Endpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html
 */
export declare class CfnEndpoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpoint;
    /**
     * The ARN of the endpoint.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the endpoint.
     *
     * @cloudformationAttribute EndpointId
     */
    readonly attrEndpointId: string;
    /**
     * The URL of the endpoint.
     *
     * @cloudformationAttribute EndpointUrl
     */
    readonly attrEndpointUrl: string;
    /**
     * The main Region of the endpoint.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The reason the endpoint is in its current state.
     *
     * @cloudformationAttribute StateReason
     */
    readonly attrStateReason: string;
    /**
     * A description for the endpoint.
     */
    description?: string;
    /**
     * The event buses being used by the endpoint.
     */
    eventBuses: Array<CfnEndpoint.EndpointEventBusProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the endpoint.
     */
    name?: string;
    /**
     * Whether event replication was enabled or disabled for this endpoint.
     */
    replicationConfig?: cdk.IResolvable | CfnEndpoint.ReplicationConfigProperty;
    /**
     * The ARN of the role used by event replication for the endpoint.
     */
    roleArn?: string;
    /**
     * The routing configuration of the endpoint.
     */
    routingConfig: cdk.IResolvable | CfnEndpoint.RoutingConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpoint {
    /**
     * The event buses the endpoint is associated with.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-endpointeventbus.html
     */
    interface EndpointEventBusProperty {
        /**
         * The ARN of the event bus the endpoint is associated with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-endpointeventbus.html#cfn-events-endpoint-endpointeventbus-eventbusarn
         */
        readonly eventBusArn: string;
    }
    /**
     * Endpoints can replicate all events to the secondary Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationconfig.html
     */
    interface ReplicationConfigProperty {
        /**
         * The state of event replication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-replicationconfig.html#cfn-events-endpoint-replicationconfig-state
         */
        readonly state: string;
    }
    /**
     * The routing configuration of the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-routingconfig.html
     */
    interface RoutingConfigProperty {
        /**
         * The failover configuration for an endpoint.
         *
         * This includes what triggers failover and what happens when it's triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-routingconfig.html#cfn-events-endpoint-routingconfig-failoverconfig
         */
        readonly failoverConfig: CfnEndpoint.FailoverConfigProperty | cdk.IResolvable;
    }
    /**
     * The failover configuration for an endpoint.
     *
     * This includes what triggers failover and what happens when it's triggered.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html
     */
    interface FailoverConfigProperty {
        /**
         * The main Region of the endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html#cfn-events-endpoint-failoverconfig-primary
         */
        readonly primary: cdk.IResolvable | CfnEndpoint.PrimaryProperty;
        /**
         * The Region that events are routed to when failover is triggered or event replication is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-failoverconfig.html#cfn-events-endpoint-failoverconfig-secondary
         */
        readonly secondary: cdk.IResolvable | CfnEndpoint.SecondaryProperty;
    }
    /**
     * The secondary Region that processes events when failover is triggered or replication is enabled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-secondary.html
     */
    interface SecondaryProperty {
        /**
         * Defines the secondary Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-secondary.html#cfn-events-endpoint-secondary-route
         */
        readonly route: string;
    }
    /**
     * The primary Region of the endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-primary.html
     */
    interface PrimaryProperty {
        /**
         * The ARN of the health check used by the endpoint to determine whether failover is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-endpoint-primary.html#cfn-events-endpoint-primary-healthcheck
         */
        readonly healthCheck: string;
    }
}
/**
 * Properties for defining a `CfnEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html
 */
export interface CfnEndpointProps {
    /**
     * A description for the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-description
     */
    readonly description?: string;
    /**
     * The event buses being used by the endpoint.
     *
     * *Exactly* : `2`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-eventbuses
     */
    readonly eventBuses: Array<CfnEndpoint.EndpointEventBusProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-name
     */
    readonly name?: string;
    /**
     * Whether event replication was enabled or disabled for this endpoint.
     *
     * The default state is `ENABLED` which means you must supply a `RoleArn` . If you don't have a `RoleArn` or you don't want event replication enabled, set the state to `DISABLED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-replicationconfig
     */
    readonly replicationConfig?: cdk.IResolvable | CfnEndpoint.ReplicationConfigProperty;
    /**
     * The ARN of the role used by event replication for the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-rolearn
     */
    readonly roleArn?: string;
    /**
     * The routing configuration of the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-routingconfig
     */
    readonly routingConfig: cdk.IResolvable | CfnEndpoint.RoutingConfigProperty;
}
/**
 * Specifies an event bus within your account.
 *
 * This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
 *
 * > As an aid to help you jumpstart developing CloudFormation templates, the EventBridge console enables you to create templates from the existing event buses in your account. For more information, see [Generating CloudFormation templates from an EventBridge event bus](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-generate-event-bus-template.html) in the *Amazon EventBridge User Guide* .
 *
 * @cloudformationResource AWS::Events::EventBus
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html
 */
export declare class CfnEventBus extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventBus from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventBus;
    /**
     * The ARN of the event bus, such as `arn:aws:events:us-east-2:123456789012:event-bus/aws.partner/PartnerName/acct1/repo1` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the event bus, such as `PartnerName/acct1/repo1` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * @cloudformationAttribute Policy
     */
    readonly attrPolicy: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ).
     */
    deadLetterConfig?: CfnEventBus.DeadLetterConfigProperty | cdk.IResolvable;
    /**
     * The event bus description.
     */
    description?: string;
    /**
     * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
     */
    eventSourceName?: string;
    /**
     * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus.
     */
    kmsKeyIdentifier?: string;
    /**
     * The name of the new event bus.
     */
    name: string;
    /**
     * The permissions policy of the event bus, describing which other AWS accounts can write events to this event bus.
     */
    policy?: any | cdk.IResolvable | string;
    /**
     * Tags to associate with the event bus.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventBusProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventBus {
    /**
     * Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ).
     *
     * For more information, see [Using dead-letter queues to process undelivered events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq) in the *EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbus-deadletterconfig.html
     */
    interface DeadLetterConfigProperty {
        /**
         * The ARN of the SQS queue specified as the target for the dead-letter queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbus-deadletterconfig.html#cfn-events-eventbus-deadletterconfig-arn
         */
        readonly arn?: string;
    }
}
/**
 * Properties for defining a `CfnEventBus`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html
 */
export interface CfnEventBusProps {
    /**
     * Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ).
     *
     * For more information, see [Using dead-letter queues to process undelivered events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq) in the *EventBridge User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-deadletterconfig
     */
    readonly deadLetterConfig?: CfnEventBus.DeadLetterConfigProperty | cdk.IResolvable;
    /**
     * The event bus description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-description
     */
    readonly description?: string;
    /**
     * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-eventsourcename
     */
    readonly eventSourceName?: string;
    /**
     * The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus.
     *
     * The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
     *
     * If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.
     *
     * For more information, see [Managing keys](https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html) in the *AWS Key Management Service Developer Guide* .
     *
     * > Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:
     * >
     * > - You call `[CreateArchive](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html)` on an event bus set to use a customer managed key for encryption.
     * > - You call `[CreateDiscoverer](https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#CreateDiscoverer)` on an event bus set to use a customer managed key for encryption.
     * > - You call `[UpdatedEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdatedEventBus.html)` to set a customer managed key on an event bus with an archives or schema discovery enabled.
     * >
     * > To enable archives or schema discovery on an event bus, choose to use an AWS owned key . For more information, see [Data encryption in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html) in the *Amazon EventBridge User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-kmskeyidentifier
     */
    readonly kmsKeyIdentifier?: string;
    /**
     * The name of the new event bus.
     *
     * Custom event bus names can't contain the `/` character, but you can use the `/` character in partner event bus names. In addition, for partner event buses, the name must exactly match the name of the partner event source that this event bus is matched to.
     *
     * You can't use the name `default` for a custom event bus, as this name is already used for your account's default event bus.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-name
     */
    readonly name: string;
    /**
     * The permissions policy of the event bus, describing which other AWS accounts can write events to this event bus.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-policy
     */
    readonly policy?: any | cdk.IResolvable | string;
    /**
     * Tags to associate with the event bus.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbus.html#cfn-events-eventbus-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Running `PutPermission` permits the specified AWS account or AWS organization to put events to the specified *event bus* .
 *
 * Amazon EventBridge rules in your account are triggered by these events arriving to an event bus in your account.
 *
 * For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.
 *
 * To enable multiple AWS accounts to put events to your event bus, run `PutPermission` once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run `PutPermission` once specifying `Principal` as "*" and specifying the AWS organization ID in `Condition` , to grant permissions to all accounts in that organization.
 *
 * If you grant permissions using an organization, then accounts in that organization must specify a `RoleArn` with proper permissions when they use `PutTarget` to add your account's event bus as a target. For more information, see [Sending and Receiving Events Between AWS Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the *Amazon EventBridge User Guide* .
 *
 * The permission policy on the event bus cannot exceed 10 KB in size.
 *
 * @cloudformationResource AWS::Events::EventBusPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html
 */
export declare class CfnEventBusPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventBusPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventBusPolicy;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The action that you are enabling the other account to perform.
     */
    action?: string;
    /**
     * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.
     */
    condition?: CfnEventBusPolicy.ConditionProperty | cdk.IResolvable;
    /**
     * The name of the event bus associated with the rule.
     */
    eventBusName?: string;
    /**
     * The 12-digit AWS account ID that you are permitting to put events to your default event bus.
     */
    principal?: string;
    /**
     * A JSON string that describes the permission policy statement.
     */
    statement?: any | cdk.IResolvable;
    /**
     * An identifier string for the external account that you are granting permissions to.
     */
    statementId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventBusPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventBusPolicy {
    /**
     * A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition.
     *
     * Currently, the only supported condition is membership in a certain AWS organization. The string must contain `Type` , `Key` , and `Value` fields. The `Value` field specifies the ID of the AWS organization. Following is an example value for `Condition` :
     *
     * `'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html
     */
    interface ConditionProperty {
        /**
         * Specifies the key for the condition.
         *
         * Currently the only supported key is `aws:PrincipalOrgID` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html#cfn-events-eventbuspolicy-condition-key
         */
        readonly key?: string;
        /**
         * Specifies the type of condition.
         *
         * Currently the only supported value is `StringEquals` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html#cfn-events-eventbuspolicy-condition-type
         */
        readonly type?: string;
        /**
         * Specifies the value for the key.
         *
         * Currently, this must be the ID of the organization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-eventbuspolicy-condition.html#cfn-events-eventbuspolicy-condition-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnEventBusPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html
 */
export interface CfnEventBusPolicyProps {
    /**
     * The action that you are enabling the other account to perform.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-action
     */
    readonly action?: string;
    /**
     * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.
     *
     * For more information about AWS Organizations, see [What Is AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) in the *AWS Organizations User Guide* .
     *
     * If you specify `Condition` with an AWS organization ID, and specify "*" as the value for `Principal` , you grant permission to all the accounts in the named organization.
     *
     * The `Condition` is a JSON string which must contain `Type` , `Key` , and `Value` fields.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-condition
     */
    readonly condition?: CfnEventBusPolicy.ConditionProperty | cdk.IResolvable;
    /**
     * The name of the event bus associated with the rule.
     *
     * If you omit this, the default event bus is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-eventbusname
     */
    readonly eventBusName?: string;
    /**
     * The 12-digit AWS account ID that you are permitting to put events to your default event bus.
     *
     * Specify "*" to permit any account to put events to your default event bus.
     *
     * If you specify "*" without specifying `Condition` , avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an `account` field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-principal
     */
    readonly principal?: string;
    /**
     * A JSON string that describes the permission policy statement.
     *
     * You can include a `Policy` parameter in the request instead of using the `StatementId` , `Action` , `Principal` , or `Condition` parameters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-statement
     */
    readonly statement?: any | cdk.IResolvable;
    /**
     * An identifier string for the external account that you are granting permissions to.
     *
     * If you later want to revoke the permission for this external account, specify this `StatementId` when you run [RemovePermission](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html) .
     *
     * > Each `StatementId` must be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-eventbuspolicy.html#cfn-events-eventbuspolicy-statementid
     */
    readonly statementId: string;
}
/**
 * Creates or updates the specified rule.
 *
 * Rules are enabled by default, or based on value of the state. You can disable a rule using [DisableRule](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html) .
 *
 * A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see [CreateEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html) .
 *
 * If you are updating an existing rule, the rule is replaced with what you specify in this `PutRule` command. If you omit arguments in `PutRule` , the old values for those arguments are not kept. Instead, they are replaced with null values.
 *
 * When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.
 *
 * A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.
 *
 * Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
 *
 * In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.
 *
 * To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change.
 *
 * An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) .
 *
 * > As an aid to help you jumpstart developing CloudFormation templates, the EventBridge console enables you to create templates from the existing rules in your account. For more information, see [Generating CloudFormation templates from an EventBridge rule](https://docs.aws.amazon.com/eventbridge/latest/userguide/rule-generate-template.html) in the *Amazon EventBridge User Guide* .
 *
 * @cloudformationResource AWS::Events::Rule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html
 */
export declare class CfnRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRule;
    /**
     * The ARN of the rule, such as `arn:aws:events:us-east-2:123456789012:rule/example` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description of the rule.
     */
    description?: string;
    /**
     * The name or ARN of the event bus associated with the rule.
     */
    eventBusName?: string;
    /**
     * The event pattern of the rule.
     */
    eventPattern?: any | cdk.IResolvable;
    /**
     * The name of the rule.
     */
    name?: string;
    /**
     * The Amazon Resource Name (ARN) of the role that is used for target invocation.
     */
    roleArn?: string;
    /**
     * The scheduling expression.
     */
    scheduleExpression?: string;
    /**
     * The state of the rule.
     */
    state?: string;
    /**
     * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
     */
    targets?: Array<cdk.IResolvable | CfnRule.TargetProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRule {
    /**
     * Targets are the resources to be invoked when a rule is triggered.
     *
     * For a complete list of services and resources that can be set as a target, see [PutTargets](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html) .
     *
     * If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a `RoleArn` with proper permissions in the `Target` structure. For more information, see [Sending and Receiving Events Between AWS Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the *Amazon EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html
     */
    interface TargetProperty {
        /**
         * Contains the GraphQL operation to be parsed and executed, if the event target is an AWS AppSync API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-appsyncparameters
         */
        readonly appSyncParameters?: CfnRule.AppSyncParametersProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-arn
         */
        readonly arn: string;
        /**
         * If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters.
         *
         * For more information, see [Jobs](https://docs.aws.amazon.com/batch/latest/userguide/jobs.html) in the *AWS Batch User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-batchparameters
         */
        readonly batchParameters?: CfnRule.BatchParametersProperty | cdk.IResolvable;
        /**
         * The `DeadLetterConfig` that defines the target queue to send dead-letter queue events to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-deadletterconfig
         */
        readonly deadLetterConfig?: CfnRule.DeadLetterConfigProperty | cdk.IResolvable;
        /**
         * Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task.
         *
         * For more information about Amazon ECS tasks, see [Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon EC2 Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-ecsparameters
         */
        readonly ecsParameters?: CfnRule.EcsParametersProperty | cdk.IResolvable;
        /**
         * Contains the HTTP parameters to use when the target is a API Gateway endpoint or EventBridge ApiDestination.
         *
         * If you specify an API Gateway API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-httpparameters
         */
        readonly httpParameters?: CfnRule.HttpParametersProperty | cdk.IResolvable;
        /**
         * The ID of the target within the specified rule.
         *
         * Use this ID to reference the target when updating the rule. We recommend using a memorable and unique string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-id
         */
        readonly id: string;
        /**
         * Valid JSON text passed to the target.
         *
         * In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](https://docs.aws.amazon.com/http://www.rfc-editor.org/rfc/rfc7159.txt) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-input
         */
        readonly input?: string;
        /**
         * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target.
         *
         * You may use JSON dot notation or bracket notation. For more information about JSON paths, see [JSONPath](https://docs.aws.amazon.com/http://goessner.net/articles/JsonPath/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-inputpath
         */
        readonly inputPath?: string;
        /**
         * Settings to enable you to provide custom input to a target based on certain event data.
         *
         * You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-inputtransformer
         */
        readonly inputTransformer?: CfnRule.InputTransformerProperty | cdk.IResolvable;
        /**
         * The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream.
         *
         * If you do not include this parameter, the default is to use the `eventId` as the partition key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-kinesisparameters
         */
        readonly kinesisParameters?: cdk.IResolvable | CfnRule.KinesisParametersProperty;
        /**
         * Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift cluster.
         *
         * If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-redshiftdataparameters
         */
        readonly redshiftDataParameters?: cdk.IResolvable | CfnRule.RedshiftDataParametersProperty;
        /**
         * The retry policy configuration to use for the dead-letter queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-retrypolicy
         */
        readonly retryPolicy?: cdk.IResolvable | CfnRule.RetryPolicyProperty;
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered.
         *
         * If one rule triggers multiple targets, you can use a different IAM role for each target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-rolearn
         */
        readonly roleArn?: string;
        /**
         * Parameters used when you are using the rule to invoke Amazon EC2 Run Command.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-runcommandparameters
         */
        readonly runCommandParameters?: cdk.IResolvable | CfnRule.RunCommandParametersProperty;
        /**
         * Contains the SageMaker AI Model Building Pipeline parameters to start execution of a SageMaker AI Model Building Pipeline.
         *
         * If you specify a SageMaker AI Model Building Pipeline as a target, you can use this to specify parameters to start a pipeline execution based on EventBridge events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-sagemakerpipelineparameters
         */
        readonly sageMakerPipelineParameters?: cdk.IResolvable | CfnRule.SageMakerPipelineParametersProperty;
        /**
         * Contains the message group ID to use when the target is a FIFO queue.
         *
         * If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html#cfn-events-rule-target-sqsparameters
         */
        readonly sqsParameters?: cdk.IResolvable | CfnRule.SqsParametersProperty;
    }
    /**
     * The custom parameters to be used when the target is an AWS Batch job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html
     */
    interface BatchParametersProperty {
        /**
         * The array properties for the submitted job, such as the size of the array.
         *
         * The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html#cfn-events-rule-batchparameters-arrayproperties
         */
        readonly arrayProperties?: CfnRule.BatchArrayPropertiesProperty | cdk.IResolvable;
        /**
         * The ARN or name of the job definition to use if the event target is an AWS Batch job.
         *
         * This job definition must already exist.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html#cfn-events-rule-batchparameters-jobdefinition
         */
        readonly jobDefinition: string;
        /**
         * The name to use for this execution of the job, if the target is an AWS Batch job.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html#cfn-events-rule-batchparameters-jobname
         */
        readonly jobName: string;
        /**
         * The retry strategy to use for failed jobs, if the target is an AWS Batch job.
         *
         * The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html#cfn-events-rule-batchparameters-retrystrategy
         */
        readonly retryStrategy?: CfnRule.BatchRetryStrategyProperty | cdk.IResolvable;
    }
    /**
     * The array properties for the submitted job, such as the size of the array.
     *
     * The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batcharrayproperties.html
     */
    interface BatchArrayPropertiesProperty {
        /**
         * The size of the array, if this is an array batch job.
         *
         * Valid values are integers between 2 and 10,000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batcharrayproperties.html#cfn-events-rule-batcharrayproperties-size
         */
        readonly size?: number;
    }
    /**
     * The retry strategy to use for failed jobs, if the target is an AWS Batch job.
     *
     * If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchretrystrategy.html
     */
    interface BatchRetryStrategyProperty {
        /**
         * The number of times to attempt to retry, if the job fails.
         *
         * Valid values are 1–10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchretrystrategy.html#cfn-events-rule-batchretrystrategy-attempts
         */
        readonly attempts?: number;
    }
    /**
     * Configuration details of the Amazon SQS queue for EventBridge to use as a dead-letter queue (DLQ).
     *
     * For more information, see [Using dead-letter queues to process undelivered events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq) in the *EventBridge User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-deadletterconfig.html
     */
    interface DeadLetterConfigProperty {
        /**
         * The ARN of the SQS queue specified as the target for the dead-letter queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-deadletterconfig.html#cfn-events-rule-deadletterconfig-arn
         */
        readonly arn?: string;
    }
    /**
     * The custom parameters to be used when the target is an Amazon ECS task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html
     */
    interface EcsParametersProperty {
        /**
         * The capacity provider strategy to use for the task.
         *
         * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-capacityproviderstrategy
         */
        readonly capacityProviderStrategy?: Array<CfnRule.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies whether to enable Amazon ECS managed tags for the task.
         *
         * For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-enableecsmanagedtags
         */
        readonly enableEcsManagedTags?: boolean | cdk.IResolvable;
        /**
         * Whether or not to enable the execute command functionality for the containers in this task.
         *
         * If true, this enables execute command functionality on all containers in the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-enableexecutecommand
         */
        readonly enableExecuteCommand?: boolean | cdk.IResolvable;
        /**
         * Specifies an ECS task group for the task.
         *
         * The maximum length is 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-group
         */
        readonly group?: string;
        /**
         * Specifies the launch type on which your task is running.
         *
         * The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-launchtype
         */
        readonly launchType?: string;
        /**
         * Use this structure if the Amazon ECS task uses the `awsvpc` network mode.
         *
         * This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
         *
         * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-networkconfiguration
         */
        readonly networkConfiguration?: cdk.IResolvable | CfnRule.NetworkConfigurationProperty;
        /**
         * An array of placement constraint objects to use for the task.
         *
         * You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-placementconstraints
         */
        readonly placementConstraints?: Array<cdk.IResolvable | CfnRule.PlacementConstraintProperty> | cdk.IResolvable;
        /**
         * The placement strategy objects to use for the task.
         *
         * You can specify a maximum of five strategy rules per task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-placementstrategies
         */
        readonly placementStrategies?: Array<cdk.IResolvable | CfnRule.PlacementStrategyProperty> | cdk.IResolvable;
        /**
         * Specifies the platform version for the task.
         *
         * Specify only the numeric portion of the platform version, such as `1.1.0` .
         *
         * This structure is used only if `LaunchType` is `FARGATE` . For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-platformversion
         */
        readonly platformVersion?: string;
        /**
         * Specifies whether to propagate the tags from the task definition to the task.
         *
         * If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-propagatetags
         */
        readonly propagateTags?: string;
        /**
         * The reference ID to use for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-referenceid
         */
        readonly referenceId?: string;
        /**
         * The metadata that you apply to the task to help you categorize and organize them.
         *
         * Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-taglist
         */
        readonly tagList?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The number of tasks to create based on `TaskDefinition` .
         *
         * The default is 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-taskcount
         */
        readonly taskCount?: number;
        /**
         * The ARN of the task definition to use if the event target is an Amazon ECS task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html#cfn-events-rule-ecsparameters-taskdefinitionarn
         */
        readonly taskDefinitionArn: string;
    }
    /**
     * The details of a capacity provider strategy.
     *
     * To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The base value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html#cfn-events-rule-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html#cfn-events-rule-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider: string;
        /**
         * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The weight value is taken into consideration after the base value, if defined, is satisfied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html#cfn-events-rule-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * This structure specifies the network configuration for an ECS task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used.
         *
         * This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-networkconfiguration.html#cfn-events-rule-networkconfiguration-awsvpcconfiguration
         */
        readonly awsVpcConfiguration?: CfnRule.AwsVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.
     *
     * This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html
     */
    interface AwsVpcConfigurationProperty {
        /**
         * Specifies whether the task's elastic network interface receives a public IP address.
         *
         * You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html#cfn-events-rule-awsvpcconfiguration-assignpublicip
         */
        readonly assignPublicIp?: string;
        /**
         * Specifies the security groups associated with the task.
         *
         * These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html#cfn-events-rule-awsvpcconfiguration-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Specifies the subnets associated with the task.
         *
         * These subnets must all be in the same VPC. You can specify as many as 16 subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html#cfn-events-rule-awsvpcconfiguration-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * An object representing a constraint on task placement.
     *
     * To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html
     */
    interface PlacementConstraintProperty {
        /**
         * A cluster query language expression to apply to the constraint.
         *
         * You cannot specify an expression if the constraint type is `distinctInstance` . To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html#cfn-events-rule-placementconstraint-expression
         */
        readonly expression?: string;
        /**
         * The type of constraint.
         *
         * Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html#cfn-events-rule-placementconstraint-type
         */
        readonly type?: string;
    }
    /**
     * The task placement strategy for a task or service.
     *
     * To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html
     */
    interface PlacementStrategyProperty {
        /**
         * The field to apply the placement strategy against.
         *
         * For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html#cfn-events-rule-placementstrategy-field
         */
        readonly field?: string;
        /**
         * The type of placement strategy.
         *
         * The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html#cfn-events-rule-placementstrategy-type
         */
        readonly type?: string;
    }
    /**
     * These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations.
     *
     * In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html
     */
    interface HttpParametersProperty {
        /**
         * The headers that need to be sent as part of request invoking the API Gateway API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html#cfn-events-rule-httpparameters-headerparameters
         */
        readonly headerParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * The path parameter values to be used to populate API Gateway API or EventBridge ApiDestination path wildcards ("*").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html#cfn-events-rule-httpparameters-pathparametervalues
         */
        readonly pathParameterValues?: Array<string>;
        /**
         * The query string keys/values that need to be sent as part of request invoking the API Gateway API or EventBridge ApiDestination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html#cfn-events-rule-httpparameters-querystringparameters
         */
        readonly queryStringParameters?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html
     */
    interface InputTransformerProperty {
        /**
         * Map of JSON paths to be extracted from the event.
         *
         * You can then insert these in the template in `InputTemplate` to produce the output you want to be sent to the target.
         *
         * `InputPathsMap` is an array key-value pairs, where each value is a valid JSON path. You can have as many as 100 key-value pairs. You must use JSON dot notation, not bracket notation.
         *
         * The keys cannot start with " AWS ."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html#cfn-events-rule-inputtransformer-inputpathsmap
         */
        readonly inputPathsMap?: cdk.IResolvable | Record<string, string>;
        /**
         * Input template where you specify placeholders that will be filled with the values of the keys from `InputPathsMap` to customize the data sent to the target.
         *
         * Enclose each `InputPathsMaps` value in brackets: < *value* >
         *
         * If `InputTemplate` is a JSON object (surrounded by curly braces), the following restrictions apply:
         *
         * - The placeholder cannot be used as an object key.
         *
         * The following example shows the syntax for using `InputPathsMap` and `InputTemplate` .
         *
         * `"InputTransformer":`
         *
         * `{`
         *
         * `"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},`
         *
         * `"InputTemplate": "<instance> is in state <status>"`
         *
         * `}`
         *
         * To have the `InputTemplate` include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:
         *
         * `"InputTransformer":`
         *
         * `{`
         *
         * `"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},`
         *
         * `"InputTemplate": "<instance> is in state \"<status>\""`
         *
         * `}`
         *
         * The `InputTemplate` can also be valid JSON with varibles in quotes or out, as in the following example:
         *
         * `"InputTransformer":`
         *
         * `{`
         *
         * `"InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},`
         *
         * `"InputTemplate": '{"myInstance": <instance>,"myStatus": "<instance> is in state \"<status>\""}'`
         *
         * `}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html#cfn-events-rule-inputtransformer-inputtemplate
         */
        readonly inputTemplate: string;
    }
    /**
     * This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes.
     *
     * If you do not include this parameter, the default is to use the `eventId` as the partition key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-kinesisparameters.html
     */
    interface KinesisParametersProperty {
        /**
         * The JSON path to be extracted from the event and used as the partition key.
         *
         * For more information, see [Amazon Kinesis Streams Key Concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key) in the *Amazon Kinesis Streams Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-kinesisparameters.html#cfn-events-rule-kinesisparameters-partitionkeypath
         */
        readonly partitionKeyPath: string;
    }
    /**
     * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html
     */
    interface RedshiftDataParametersProperty {
        /**
         * The name of the database.
         *
         * Required when authenticating using temporary credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-database
         */
        readonly database: string;
        /**
         * The database user name.
         *
         * Required when authenticating using temporary credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-dbuser
         */
        readonly dbUser?: string;
        /**
         * The name or ARN of the secret that enables access to the database.
         *
         * Required when authenticating using AWS Secrets Manager.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-secretmanagerarn
         */
        readonly secretManagerArn?: string;
        /**
         * The SQL statement text to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-sql
         */
        readonly sql?: string;
        /**
         * One or more SQL statements to run.
         *
         * The SQL statements are run as a single transaction. They run serially in the order of the array. Subsequent SQL statements don't start until the previous statement in the array completes. If any SQL statement fails, then because they are run as one transaction, all work is rolled back.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-sqls
         */
        readonly sqls?: Array<string>;
        /**
         * The name of the SQL statement.
         *
         * You can name the SQL statement when you create it to identify the query.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-statementname
         */
        readonly statementName?: string;
        /**
         * Indicates whether to send an event back to EventBridge after the SQL statement runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html#cfn-events-rule-redshiftdataparameters-withevent
         */
        readonly withEvent?: boolean | cdk.IResolvable;
    }
    /**
     * A `RetryPolicy` object that includes information about the retry policy settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html
     */
    interface RetryPolicyProperty {
        /**
         * The maximum amount of time, in seconds, to continue to make retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html#cfn-events-rule-retrypolicy-maximumeventageinseconds
         */
        readonly maximumEventAgeInSeconds?: number;
        /**
         * The maximum number of retry attempts to make before the request fails.
         *
         * Retry attempts continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is met.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html#cfn-events-rule-retrypolicy-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
    }
    /**
     * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandparameters.html
     */
    interface RunCommandParametersProperty {
        /**
         * Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandparameters.html#cfn-events-rule-runcommandparameters-runcommandtargets
         */
        readonly runCommandTargets: Array<cdk.IResolvable | CfnRule.RunCommandTargetProperty> | cdk.IResolvable;
    }
    /**
     * Information about the EC2 instances that are to be sent the command, specified as key-value pairs.
     *
     * Each `RunCommandTarget` block can include only one key, but this key may specify multiple values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html
     */
    interface RunCommandTargetProperty {
        /**
         * Can be either `tag:` *tag-key* or `InstanceIds` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html#cfn-events-rule-runcommandtarget-key
         */
        readonly key: string;
        /**
         * If `Key` is `tag:` *tag-key* , `Values` is a list of tag values.
         *
         * If `Key` is `InstanceIds` , `Values` is a list of Amazon EC2 instance IDs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html#cfn-events-rule-runcommandtarget-values
         */
        readonly values: Array<string>;
    }
    /**
     * These are custom parameters to use when the target is a SageMaker AI Model Building Pipeline that starts based on EventBridge events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameters.html
     */
    interface SageMakerPipelineParametersProperty {
        /**
         * List of Parameter names and values for SageMaker AI Model Building Pipeline execution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameters.html#cfn-events-rule-sagemakerpipelineparameters-pipelineparameterlist
         */
        readonly pipelineParameterList?: Array<cdk.IResolvable | CfnRule.SageMakerPipelineParameterProperty> | cdk.IResolvable;
    }
    /**
     * Name/Value pair of a parameter to start execution of a SageMaker AI Model Building Pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html
     */
    interface SageMakerPipelineParameterProperty {
        /**
         * Name of parameter to start execution of a SageMaker AI Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html#cfn-events-rule-sagemakerpipelineparameter-name
         */
        readonly name: string;
        /**
         * Value of parameter to start execution of a SageMaker AI Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html#cfn-events-rule-sagemakerpipelineparameter-value
         */
        readonly value: string;
    }
    /**
     * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sqsparameters.html
     */
    interface SqsParametersProperty {
        /**
         * The FIFO message group ID to use as the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sqsparameters.html#cfn-events-rule-sqsparameters-messagegroupid
         */
        readonly messageGroupId: string;
    }
    /**
     * Contains the GraphQL operation to be parsed and executed, if the event target is an AWS AppSync API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-appsyncparameters.html
     */
    interface AppSyncParametersProperty {
        /**
         * The GraphQL operation; that is, the query, mutation, or subscription to be parsed and executed by the GraphQL service.
         *
         * For more information, see [Operations](https://docs.aws.amazon.com/appsync/latest/devguide/graphql-architecture.html#graphql-operations) in the *AWS AppSync User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-appsyncparameters.html#cfn-events-rule-appsyncparameters-graphqloperation
         */
        readonly graphQlOperation: string;
    }
    /**
     * A key-value pair associated with an ECS Target of an EventBridge rule.
     *
     * The tag will be propagated to ECS by EventBridge when starting an ECS task based on a matched event.
     *
     * > Currently, tags are only available when using ECS with EventBridge .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html
     */
    interface TagProperty {
        /**
         * A string you can use to assign a value.
         *
         * The combination of tag keys and values can help you organize and categorize your resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html#cfn-events-rule-tag-key
         */
        readonly key?: string;
        /**
         * The value for the specified tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html#cfn-events-rule-tag-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html
 */
export interface CfnRuleProps {
    /**
     * The description of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-description
     */
    readonly description?: string;
    /**
     * The name or ARN of the event bus associated with the rule.
     *
     * If you omit this, the default event bus is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-eventbusname
     */
    readonly eventBusName?: string;
    /**
     * The event pattern of the rule.
     *
     * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the **Amazon EventBridge User Guide** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-eventpattern
     */
    readonly eventPattern?: any | cdk.IResolvable;
    /**
     * The name of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-name
     */
    readonly name?: string;
    /**
     * The Amazon Resource Name (ARN) of the role that is used for target invocation.
     *
     * If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a `RoleArn` with proper permissions in the `Target` structure, instead of here in this parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-rolearn
     */
    readonly roleArn?: string;
    /**
     * The scheduling expression.
     *
     * For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see [Creating an Amazon EventBridge rule that runs on a schedule](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-scheduleexpression
     */
    readonly scheduleExpression?: string;
    /**
     * The state of the rule.
     *
     * Valid values include:
     *
     * - `DISABLED` : The rule is disabled. EventBridge does not match any events against the rule.
     * - `ENABLED` : The rule is enabled. EventBridge matches events against the rule, *except* for AWS management events delivered through CloudTrail.
     * - `ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS` : The rule is enabled for all events, including AWS management events delivered through CloudTrail.
     *
     * Management events provide visibility into management operations that are performed on resources in your AWS account. These are also known as control plane operations. For more information, see [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html#logging-management-events) in the *CloudTrail User Guide* , and [Filtering management events from AWS services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-cloudtrail) in the **Amazon EventBridge User Guide** .
     *
     * This value is only valid for rules on the [default](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is-how-it-works-concepts.html#eb-bus-concepts-buses) event bus or [custom event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-event-bus.html) . It does not apply to [partner event buses](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-saas.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-state
     */
    readonly state?: string;
    /**
     * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
     *
     * Targets are the resources that are invoked when a rule is triggered.
     *
     * The maximum number of entries per request is 10.
     *
     * > Each rule can have up to five (5) targets associated with it at one time.
     *
     * For a list of services you can configure as targets for events, see [EventBridge targets](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html) in the **Amazon EventBridge User Guide** .
     *
     * Creating rules with built-in targets is supported only in the AWS Management Console . The built-in targets are:
     *
     * - `Amazon EBS CreateSnapshot API call`
     * - `Amazon EC2 RebootInstances API call`
     * - `Amazon EC2 StopInstances API call`
     * - `Amazon EC2 TerminateInstances API call`
     *
     * For some target types, `PutTargets` provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the `KinesisParameters` argument. To invoke a command on multiple EC2 instances with one rule, you can use the `RunCommandParameters` field.
     *
     * To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions:
     *
     * - For AWS Lambda and Amazon SNS resources, EventBridge relies on resource-based policies.
     * - For EC2 instances, Kinesis Data Streams, AWS Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the `RoleARN` argument in `PutTargets` .
     *
     * For more information, see [Authentication and Access Control](https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html) in the **Amazon EventBridge User Guide** .
     *
     * If another AWS account is in the same region and has granted you permission (using `PutPermission` ), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the `Arn` value when you run `PutTargets` . If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see [Amazon EventBridge Pricing](https://docs.aws.amazon.com/eventbridge/pricing/) .
     *
     * > `Input` , `InputPath` , and `InputTransformer` are not available with `PutTarget` if the target is an event bus of a different AWS account.
     *
     * If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a `RoleArn` with proper permissions in the `Target` structure. For more information, see [Sending and Receiving Events Between AWS Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the *Amazon EventBridge User Guide* .
     *
     * > If you have an IAM role on a cross-account event bus target, a `PutTargets` call without a role on the same target (same `Id` and `Arn` ) will not remove the role.
     *
     * For more information about enabling cross-account events, see [PutPermission](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html) .
     *
     * *Input* , *InputPath* , and *InputTransformer* are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:
     *
     * - If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).
     * - If *Input* is specified in the form of valid JSON, then the matched event is overridden with this constant.
     * - If *InputPath* is specified in the form of JSONPath (for example, `$.detail` ), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).
     * - If *InputTransformer* is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.
     *
     * When you specify `InputPath` or `InputTransformer` , you must use JSON dot notation, not bracket notation.
     *
     * When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.
     *
     * This action can partially fail if too many requests are made at the same time. If that happens, `FailedEntryCount` is non-zero in the response and each entry in `FailedEntries` provides the ID of the failed target and the error code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html#cfn-events-rule-targets
     */
    readonly targets?: Array<cdk.IResolvable | CfnRule.TargetProperty> | cdk.IResolvable;
}
