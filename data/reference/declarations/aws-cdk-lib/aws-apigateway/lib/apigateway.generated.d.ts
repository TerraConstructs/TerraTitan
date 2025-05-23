import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ApiGateway::Account` resource specifies the IAM role that Amazon API Gateway uses to write API logs to Amazon CloudWatch Logs.
 *
 * To avoid overwriting other roles, you should only have one `AWS::ApiGateway::Account` resource per region per account.
 *
 * @cloudformationResource AWS::ApiGateway::Account
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html
 */
export declare class CfnAccount extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccount from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccount;
    /**
     * The ID for the account. For example: `abc123` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of an Amazon CloudWatch role for the current Account.
     */
    cloudWatchRoleArn?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAccountProps);
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
 * Properties for defining a `CfnAccount`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html
 */
export interface CfnAccountProps {
    /**
     * The ARN of an Amazon CloudWatch role for the current Account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-account.html#cfn-apigateway-account-cloudwatchrolearn
     */
    readonly cloudWatchRoleArn?: string;
}
/**
 * The `AWS::ApiGateway::ApiKey` resource creates a unique key that you can distribute to clients who are executing API Gateway `Method` resources that require an API key.
 *
 * To specify which API key clients must use, map the API key with the `RestApi` and `Stage` resources that include the methods that require a key.
 *
 * @cloudformationResource AWS::ApiGateway::ApiKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html
 */
export declare class CfnApiKey extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApiKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApiKey;
    /**
     * The ID for the API key. For example: `abc123` .
     *
     * @cloudformationAttribute APIKeyId
     */
    readonly attrApiKeyId: string;
    /**
     * An AWS Marketplace customer identifier, when integrating with the AWS SaaS Marketplace.
     */
    customerId?: string;
    /**
     * The description of the ApiKey.
     */
    description?: string;
    /**
     * Specifies whether the ApiKey can be used by callers.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies whether ( `true` ) or not ( `false` ) the key identifier is distinct from the created API key value.
     */
    generateDistinctId?: boolean | cdk.IResolvable;
    /**
     * A name for the API key.
     */
    name?: string;
    /**
     * DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
     */
    stageKeys?: Array<cdk.IResolvable | CfnApiKey.StageKeyProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value map of strings.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies a value of the API key.
     */
    value?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnApiKeyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApiKey {
    /**
     * `StageKey` is a property of the [AWS::ApiGateway::ApiKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html) resource that specifies the stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-stagekey.html
     */
    interface StageKeyProperty {
        /**
         * The string identifier of the associated RestApi.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-stagekey.html#cfn-apigateway-apikey-stagekey-restapiid
         */
        readonly restApiId?: string;
        /**
         * The stage name associated with the stage key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-apikey-stagekey.html#cfn-apigateway-apikey-stagekey-stagename
         */
        readonly stageName?: string;
    }
}
/**
 * Properties for defining a `CfnApiKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html
 */
export interface CfnApiKeyProps {
    /**
     * An AWS Marketplace customer identifier, when integrating with the AWS SaaS Marketplace.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-customerid
     */
    readonly customerId?: string;
    /**
     * The description of the ApiKey.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-description
     */
    readonly description?: string;
    /**
     * Specifies whether the ApiKey can be used by callers.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Specifies whether ( `true` ) or not ( `false` ) the key identifier is distinct from the created API key value.
     *
     * This parameter is deprecated and should not be used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-generatedistinctid
     */
    readonly generateDistinctId?: boolean | cdk.IResolvable;
    /**
     * A name for the API key.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the API key name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-name
     */
    readonly name?: string;
    /**
     * DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-stagekeys
     */
    readonly stageKeys?: Array<cdk.IResolvable | CfnApiKey.StageKeyProperty> | cdk.IResolvable;
    /**
     * The key-value map of strings.
     *
     * The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:` . The tag value can be up to 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies a value of the API key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-apikey.html#cfn-apigateway-apikey-value
     */
    readonly value?: string;
}
/**
 * The `AWS::ApiGateway::Authorizer` resource creates an authorization layer that API Gateway activates for methods that have authorization enabled.
 *
 * API Gateway activates the authorizer when a client calls those methods.
 *
 * @cloudformationResource AWS::ApiGateway::Authorizer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html
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
     * The ID for the authorizer. For example: `abc123` .
     *
     * @cloudformationAttribute AuthorizerId
     */
    readonly attrAuthorizerId: string;
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.
     */
    authorizerCredentials?: string;
    /**
     * The TTL in seconds of cached authorizer results.
     */
    authorizerResultTtlInSeconds?: number;
    /**
     * Specifies the authorizer's Uniform Resource Identifier (URI).
     */
    authorizerUri?: string;
    /**
     * Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
     */
    authType?: string;
    /**
     * The identity source for which authorization is requested.
     */
    identitySource?: string;
    /**
     * A validation expression for the incoming identity token.
     */
    identityValidationExpression?: string;
    /**
     * The name of the authorizer.
     */
    name: string;
    /**
     * A list of the Amazon Cognito user pool ARNs for the `COGNITO_USER_POOLS` authorizer.
     */
    providerArns?: Array<string>;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * The authorizer type.
     */
    type: string;
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
/**
 * Properties for defining a `CfnAuthorizer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html
 */
export interface CfnAuthorizerProps {
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer.
     *
     * To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-authorizercredentials
     */
    readonly authorizerCredentials?: string;
    /**
     * The TTL in seconds of cached authorizer results.
     *
     * If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-authorizerresultttlinseconds
     */
    readonly authorizerResultTtlInSeconds?: number;
    /**
     * Specifies the authorizer's Uniform Resource Identifier (URI).
     *
     * For `TOKEN` or `REQUEST` authorizers, this must be a well-formed Lambda function URI, for example, `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations` . In general, the URI has this form `arn:aws:apigateway:{region}:lambda:path/{service_api}` , where `{region}` is the same as the region hosting the Lambda function, `path` indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial `/` . For Lambda functions, this is usually of the form `/2015-03-31/functions/[FunctionARN]/invocations` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-authorizeruri
     */
    readonly authorizerUri?: string;
    /**
     * Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-authtype
     */
    readonly authType?: string;
    /**
     * The identity source for which authorization is requested.
     *
     * For a `TOKEN` or `COGNITO_USER_POOLS` authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is `Auth` , the header mapping expression is `method.request.header.Auth` . For the `REQUEST` authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an `Auth` header, a `Name` query string parameter are defined as identity sources, this value is `method.request.header.Auth, method.request.querystring.Name` . These parameters will be used to derive the authorization caching key and to perform runtime validation of the `REQUEST` authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-identitysource
     */
    readonly identitySource?: string;
    /**
     * A validation expression for the incoming identity token.
     *
     * For `TOKEN` authorizers, this value is a regular expression. For `COGNITO_USER_POOLS` authorizers, API Gateway will match the `aud` field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the `REQUEST` authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-identityvalidationexpression
     */
    readonly identityValidationExpression?: string;
    /**
     * The name of the authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-name
     */
    readonly name: string;
    /**
     * A list of the Amazon Cognito user pool ARNs for the `COGNITO_USER_POOLS` authorizer.
     *
     * Each element is of this format: `arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}` . For a `TOKEN` or `REQUEST` authorizer, this is not defined.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-providerarns
     */
    readonly providerArns?: Array<string>;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-restapiid
     */
    readonly restApiId: string;
    /**
     * The authorizer type.
     *
     * Valid values are `TOKEN` for a Lambda function using a single authorization token submitted in a custom header, `REQUEST` for a Lambda function using incoming request parameters, and `COGNITO_USER_POOLS` for using an Amazon Cognito user pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-authorizer.html#cfn-apigateway-authorizer-type
     */
    readonly type: string;
}
/**
 * The `AWS::ApiGateway::BasePathMapping` resource creates a base path that clients who call your API must use in the invocation URL.
 *
 * Supported only for public custom domain names.
 *
 * @cloudformationResource AWS::ApiGateway::BasePathMapping
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html
 */
export declare class CfnBasePathMapping extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBasePathMapping from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBasePathMapping;
    /**
     * The base path name that callers of the API must provide as part of the URL after the domain name.
     */
    basePath?: string;
    /**
     * The domain name of the BasePathMapping resource to be described.
     */
    domainName: string;
    id?: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId?: string;
    /**
     * The name of the associated stage.
     */
    stage?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBasePathMappingProps);
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
 * Properties for defining a `CfnBasePathMapping`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html
 */
export interface CfnBasePathMappingProps {
    /**
     * The base path name that callers of the API must provide as part of the URL after the domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-basepath
     */
    readonly basePath?: string;
    /**
     * The domain name of the BasePathMapping resource to be described.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-domainname
     */
    readonly domainName: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-id
     */
    readonly id?: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-restapiid
     */
    readonly restApiId?: string;
    /**
     * The name of the associated stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmapping.html#cfn-apigateway-basepathmapping-stage
     */
    readonly stage?: string;
}
/**
 * The `AWS::ApiGateway::ClientCertificate` resource creates a client certificate that API Gateway uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 *
 * @cloudformationResource AWS::ApiGateway::ClientCertificate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html
 */
export declare class CfnClientCertificate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClientCertificate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClientCertificate;
    /**
     * The ID for the client certificate. For example: `abc123` .
     *
     * @cloudformationAttribute ClientCertificateId
     */
    readonly attrClientCertificateId: string;
    /**
     * The description of the client certificate.
     */
    description?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnClientCertificateProps);
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
 * Properties for defining a `CfnClientCertificate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html
 */
export interface CfnClientCertificateProps {
    /**
     * The description of the client certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html#cfn-apigateway-clientcertificate-description
     */
    readonly description?: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-clientcertificate.html#cfn-apigateway-clientcertificate-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ApiGateway::Deployment` resource deploys an API Gateway `RestApi` resource to a stage so that clients can call the API over the internet.
 *
 * The stage acts as an environment.
 *
 * @cloudformationResource AWS::ApiGateway::Deployment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html
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
     * The ID for the deployment. For example: `abc123` .
     *
     * @cloudformationAttribute DeploymentId
     */
    readonly attrDeploymentId: string;
    /**
     * The input configuration for a canary deployment.
     */
    deploymentCanarySettings?: CfnDeployment.DeploymentCanarySettingsProperty | cdk.IResolvable;
    /**
     * The description for the Deployment resource to create.
     */
    description?: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * The description of the Stage resource for the Deployment resource to create.
     */
    stageDescription?: cdk.IResolvable | CfnDeployment.StageDescriptionProperty;
    /**
     * The name of the Stage resource for the Deployment resource to create.
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
export declare namespace CfnDeployment {
    /**
     * `StageDescription` is a property of the [AWS::ApiGateway::Deployment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html) resource that configures a deployment stage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html
     */
    interface StageDescriptionProperty {
        /**
         * Specifies settings for logging access in this stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-accesslogsetting
         */
        readonly accessLogSetting?: CfnDeployment.AccessLogSettingProperty | cdk.IResolvable;
        /**
         * Specifies whether a cache cluster is enabled for the stage.
         *
         * To activate a method-level cache, set `CachingEnabled` to `true` for a method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-cacheclusterenabled
         */
        readonly cacheClusterEnabled?: boolean | cdk.IResolvable;
        /**
         * The size of the stage's cache cluster.
         *
         * For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-cacheclustersize
         */
        readonly cacheClusterSize?: string;
        /**
         * Indicates whether the cached responses are encrypted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-cachedataencrypted
         */
        readonly cacheDataEncrypted?: boolean | cdk.IResolvable;
        /**
         * The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-cachettlinseconds
         */
        readonly cacheTtlInSeconds?: number;
        /**
         * Indicates whether responses are cached and returned for requests.
         *
         * You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-cachingenabled
         */
        readonly cachingEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies settings for the canary deployment in this stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-canarysetting
         */
        readonly canarySetting?: CfnDeployment.CanarySettingProperty | cdk.IResolvable;
        /**
         * The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-clientcertificateid
         */
        readonly clientCertificateId?: string;
        /**
         * Indicates whether data trace logging is enabled for methods in the stage.
         *
         * API Gateway pushes these logs to Amazon CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * A description of the purpose of the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-description
         */
        readonly description?: string;
        /**
         * The version identifier of the API documentation snapshot.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-documentationversion
         */
        readonly documentationVersion?: string;
        /**
         * The logging level for this method.
         *
         * For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * Configures settings for all of the stage's methods.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-methodsettings
         */
        readonly methodSettings?: Array<cdk.IResolvable | CfnDeployment.MethodSettingProperty> | cdk.IResolvable;
        /**
         * Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-metricsenabled
         */
        readonly metricsEnabled?: boolean | cdk.IResolvable;
        /**
         * An array of arbitrary tags (key-value pairs) to associate with the stage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
        /**
         * The target request burst rate limit.
         *
         * This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * The target request steady-state rate limit.
         *
         * For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
        /**
         * Specifies whether active tracing with X-ray is enabled for this stage.
         *
         * For more information, see [Trace API Gateway API Execution with AWS X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-tracingenabled
         */
        readonly tracingEnabled?: boolean | cdk.IResolvable;
        /**
         * A map that defines the stage variables.
         *
         * Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html#cfn-apigateway-deployment-stagedescription-variables
         */
        readonly variables?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The `CanarySetting` property type specifies settings for the canary deployment in this stage.
     *
     * `CanarySetting` is a property of the [StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html
     */
    interface CanarySettingProperty {
        /**
         * The percent (0-100) of traffic diverted to a canary deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html#cfn-apigateway-deployment-canarysetting-percenttraffic
         */
        readonly percentTraffic?: number;
        /**
         * Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary.
         *
         * These stage variables are represented as a string-to-string map between stage variable names and their values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html#cfn-apigateway-deployment-canarysetting-stagevariableoverrides
         */
        readonly stageVariableOverrides?: cdk.IResolvable | Record<string, string>;
        /**
         * A Boolean flag to indicate whether the canary deployment uses the stage cache or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-canarysetting.html#cfn-apigateway-deployment-canarysetting-usestagecache
         */
        readonly useStageCache?: boolean | cdk.IResolvable;
    }
    /**
     * The `MethodSetting` property type configures settings for all methods in a stage.
     *
     * The `MethodSettings` property of the [Amazon API Gateway Deployment StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type contains a list of `MethodSetting` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html
     */
    interface MethodSettingProperty {
        /**
         * Specifies whether the cached responses are encrypted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-cachedataencrypted
         */
        readonly cacheDataEncrypted?: boolean | cdk.IResolvable;
        /**
         * Specifies the time to live (TTL), in seconds, for cached responses.
         *
         * The higher the TTL, the longer the response will be cached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-cachettlinseconds
         */
        readonly cacheTtlInSeconds?: number;
        /**
         * Specifies whether responses should be cached and returned for requests.
         *
         * A cache cluster must be enabled on the stage for responses to be cached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-cachingenabled
         */
        readonly cachingEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs.
         *
         * This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * The HTTP method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-httpmethod
         */
        readonly httpMethod?: string;
        /**
         * Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs.
         *
         * Valid values are `OFF` , `ERROR` , and `INFO` . Choose `ERROR` to write only error-level entries to CloudWatch Logs, or choose `INFO` to include all `ERROR` events as well as extra informational events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * Specifies whether Amazon CloudWatch metrics are enabled for this method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-metricsenabled
         */
        readonly metricsEnabled?: boolean | cdk.IResolvable;
        /**
         * The resource path for this method.
         *
         * Forward slashes ( `/` ) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource` . To specify the root path, use only a slash ( `/` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-resourcepath
         */
        readonly resourcePath?: string;
        /**
         * Specifies the throttling burst limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * Specifies the throttling rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-methodsetting.html#cfn-apigateway-deployment-methodsetting-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
    /**
     * The `AccessLogSetting` property type specifies settings for logging access in this stage.
     *
     * `AccessLogSetting` is a property of the [StageDescription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-stagedescription.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-accesslogsetting.html
     */
    interface AccessLogSettingProperty {
        /**
         * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.
         *
         * If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-accesslogsetting.html#cfn-apigateway-deployment-accesslogsetting-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * A single line format of the access logs of data, as specified by selected $context variables.
         *
         * The format must include at least `$context.requestId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-accesslogsetting.html#cfn-apigateway-deployment-accesslogsetting-format
         */
        readonly format?: string;
    }
    /**
     * The `DeploymentCanarySettings` property type specifies settings for the canary deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html
     */
    interface DeploymentCanarySettingsProperty {
        /**
         * The percentage (0.0-100.0) of traffic routed to the canary deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html#cfn-apigateway-deployment-deploymentcanarysettings-percenttraffic
         */
        readonly percentTraffic?: number;
        /**
         * A stage variable overrides used for the canary release deployment.
         *
         * They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html#cfn-apigateway-deployment-deploymentcanarysettings-stagevariableoverrides
         */
        readonly stageVariableOverrides?: cdk.IResolvable | Record<string, string>;
        /**
         * A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-deployment-deploymentcanarysettings.html#cfn-apigateway-deployment-deploymentcanarysettings-usestagecache
         */
        readonly useStageCache?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnDeployment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html
 */
export interface CfnDeploymentProps {
    /**
     * The input configuration for a canary deployment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#cfn-apigateway-deployment-deploymentcanarysettings
     */
    readonly deploymentCanarySettings?: CfnDeployment.DeploymentCanarySettingsProperty | cdk.IResolvable;
    /**
     * The description for the Deployment resource to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#cfn-apigateway-deployment-description
     */
    readonly description?: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#cfn-apigateway-deployment-restapiid
     */
    readonly restApiId: string;
    /**
     * The description of the Stage resource for the Deployment resource to create.
     *
     * To specify a stage description, you must also provide a stage name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#cfn-apigateway-deployment-stagedescription
     */
    readonly stageDescription?: cdk.IResolvable | CfnDeployment.StageDescriptionProperty;
    /**
     * The name of the Stage resource for the Deployment resource to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-deployment.html#cfn-apigateway-deployment-stagename
     */
    readonly stageName?: string;
}
/**
 * The `AWS::ApiGateway::DocumentationPart` resource creates a documentation part for an API.
 *
 * For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGateway::DocumentationPart
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html
 */
export declare class CfnDocumentationPart extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDocumentationPart from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDocumentationPart;
    /**
     * The ID for the documentation part.
     *
     * @cloudformationAttribute DocumentationPartId
     */
    readonly attrDocumentationPartId: string;
    /**
     * The location of the targeted API entity of the to-be-created documentation part.
     */
    location: cdk.IResolvable | CfnDocumentationPart.LocationProperty;
    /**
     * The new documentation content map of the targeted API entity.
     */
    properties: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDocumentationPartProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDocumentationPart {
    /**
     * The `Location` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.
     *
     * `Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
     *
     * > For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html
     */
    interface LocationProperty {
        /**
         * The HTTP verb of a method.
         *
         * It is a valid field for the API entity types of `METHOD` , `PATH_PARAMETER` , `QUERY_PARAMETER` , `REQUEST_HEADER` , `REQUEST_BODY` , `RESPONSE` , `RESPONSE_HEADER` , and `RESPONSE_BODY` . The default value is `*` for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other `location` attributes, the child entity's `method` attribute must match that of the parent entity exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html#cfn-apigateway-documentationpart-location-method
         */
        readonly method?: string;
        /**
         * The name of the targeted API entity.
         *
         * It is a valid and required field for the API entity types of `AUTHORIZER` , `MODEL` , `PATH_PARAMETER` , `QUERY_PARAMETER` , `REQUEST_HEADER` , `REQUEST_BODY` and `RESPONSE_HEADER` . It is an invalid field for any other entity type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html#cfn-apigateway-documentationpart-location-name
         */
        readonly name?: string;
        /**
         * The URL path of the target.
         *
         * It is a valid field for the API entity types of `RESOURCE` , `METHOD` , `PATH_PARAMETER` , `QUERY_PARAMETER` , `REQUEST_HEADER` , `REQUEST_BODY` , `RESPONSE` , `RESPONSE_HEADER` , and `RESPONSE_BODY` . The default value is `/` for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other `location` attributes, the child entity's `path` attribute must match that of the parent entity as a prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html#cfn-apigateway-documentationpart-location-path
         */
        readonly path?: string;
        /**
         * The HTTP status code of a response.
         *
         * It is a valid field for the API entity types of `RESPONSE` , `RESPONSE_HEADER` , and `RESPONSE_BODY` . The default value is `*` for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other `location` attributes, the child entity's `statusCode` attribute must match that of the parent entity exactly.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html#cfn-apigateway-documentationpart-location-statuscode
         */
        readonly statusCode?: string;
        /**
         * The type of API entity to which the documentation content applies.
         *
         * Valid values are `API` , `AUTHORIZER` , `MODEL` , `RESOURCE` , `METHOD` , `PATH_PARAMETER` , `QUERY_PARAMETER` , `REQUEST_HEADER` , `REQUEST_BODY` , `RESPONSE` , `RESPONSE_HEADER` , and `RESPONSE_BODY` . Content inheritance does not apply to any entity of the `API` , `AUTHORIZER` , `METHOD` , `MODEL` , `REQUEST_BODY` , or `RESOURCE` type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-documentationpart-location.html#cfn-apigateway-documentationpart-location-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnDocumentationPart`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html
 */
export interface CfnDocumentationPartProps {
    /**
     * The location of the targeted API entity of the to-be-created documentation part.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html#cfn-apigateway-documentationpart-location
     */
    readonly location: cdk.IResolvable | CfnDocumentationPart.LocationProperty;
    /**
     * The new documentation content map of the targeted API entity.
     *
     * Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html#cfn-apigateway-documentationpart-properties
     */
    readonly properties: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html#cfn-apigateway-documentationpart-restapiid
     */
    readonly restApiId: string;
}
/**
 * The `AWS::ApiGateway::DocumentationVersion` resource creates a snapshot of the documentation for an API.
 *
 * For more information, see [Representation of API Documentation in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api-content-representation.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGateway::DocumentationVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html
 */
export declare class CfnDocumentationVersion extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDocumentationVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDocumentationVersion;
    /**
     * A description about the new documentation snapshot.
     */
    description?: string;
    /**
     * The version identifier of the to-be-updated documentation version.
     */
    documentationVersion: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDocumentationVersionProps);
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
 * Properties for defining a `CfnDocumentationVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html
 */
export interface CfnDocumentationVersionProps {
    /**
     * A description about the new documentation snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-description
     */
    readonly description?: string;
    /**
     * The version identifier of the to-be-updated documentation version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-documentationversion
     */
    readonly documentationVersion: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationversion.html#cfn-apigateway-documentationversion-restapiid
     */
    readonly restApiId: string;
}
/**
 * The `AWS::ApiGateway::DomainName` resource specifies a public custom domain name for your API in API Gateway.
 *
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGateway::DomainName
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html
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
     * The Amazon CloudFront distribution domain name that's mapped to the custom domain name. This is only applicable for endpoints whose type is `EDGE` .
     *
     * Example: `d111111abcdef8.cloudfront.net`
     *
     * @cloudformationAttribute DistributionDomainName
     */
    readonly attrDistributionDomainName: string;
    /**
     * The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The only valid value is `Z2FDTNDATAQYW2` for all regions.
     *
     * @cloudformationAttribute DistributionHostedZoneId
     */
    readonly attrDistributionHostedZoneId: string;
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
     * The reference to an AWS -managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.
     */
    certificateArn?: string;
    /**
     * The custom domain name as an API host name, for example, `my-api.example.com` .
     */
    domainName?: string;
    /**
     * The endpoint configuration of this DomainName showing the endpoint types of the domain name.
     */
    endpointConfiguration?: CfnDomainName.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     */
    mutualTlsAuthentication?: cdk.IResolvable | CfnDomainName.MutualTlsAuthenticationProperty;
    /**
     * The ARN of the public certificate issued by ACM to validate ownership of your custom domain.
     */
    ownershipVerificationCertificateArn?: string;
    /**
     * The reference to an AWS -managed certificate that will be used for validating the regional domain name.
     */
    regionalCertificateArn?: string;
    /**
     * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
     */
    securityPolicy?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDomainNameProps);
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
     * The mutual TLS authentication configuration for a custom domain name.
     *
     * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html
     */
    interface MutualTlsAuthenticationProperty {
        /**
         * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example `s3://bucket-name/key-name` .
         *
         * The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html#cfn-apigateway-domainname-mutualtlsauthentication-truststoreuri
         */
        readonly truststoreUri?: string;
        /**
         * The version of the S3 object that contains your truststore.
         *
         * To specify a version, you must have versioning enabled for the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html#cfn-apigateway-domainname-mutualtlsauthentication-truststoreversion
         */
        readonly truststoreVersion?: string;
    }
    /**
     * The `EndpointConfiguration` property type specifies the endpoint types of an Amazon API Gateway domain name.
     *
     * `EndpointConfiguration` is a property of the [AWS::ApiGateway::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html
     */
    interface EndpointConfigurationProperty {
        /**
         * A list of endpoint types of an API (RestApi) or its custom domain name (DomainName).
         *
         * For an edge-optimized API and its custom domain name, the endpoint type is `"EDGE"` . For a regional API and its custom domain name, the endpoint type is `REGIONAL` . For a private API, the endpoint type is `PRIVATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html#cfn-apigateway-domainname-endpointconfiguration-types
         */
        readonly types?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDomainName`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html
 */
export interface CfnDomainNameProps {
    /**
     * The reference to an AWS -managed certificate that will be used by edge-optimized endpoint or private endpoint for this domain name.
     *
     * AWS Certificate Manager is the only supported source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-certificatearn
     */
    readonly certificateArn?: string;
    /**
     * The custom domain name as an API host name, for example, `my-api.example.com` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-domainname
     */
    readonly domainName?: string;
    /**
     * The endpoint configuration of this DomainName showing the endpoint types of the domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-endpointconfiguration
     */
    readonly endpointConfiguration?: CfnDomainName.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * The mutual TLS authentication configuration for a custom domain name.
     *
     * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-mutualtlsauthentication
     */
    readonly mutualTlsAuthentication?: cdk.IResolvable | CfnDomainName.MutualTlsAuthenticationProperty;
    /**
     * The ARN of the public certificate issued by ACM to validate ownership of your custom domain.
     *
     * Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-ownershipverificationcertificatearn
     */
    readonly ownershipVerificationCertificateArn?: string;
    /**
     * The reference to an AWS -managed certificate that will be used for validating the regional domain name.
     *
     * AWS Certificate Manager is the only supported source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-regionalcertificatearn
     */
    readonly regionalCertificateArn?: string;
    /**
     * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
     *
     * The valid values are `TLS_1_0` and `TLS_1_2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-securitypolicy
     */
    readonly securityPolicy?: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html#cfn-apigateway-domainname-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ApiGateway::GatewayResponse` resource creates a gateway response for your API.
 *
 * For more information, see [API Gateway Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html#api-gateway-gatewayResponse-definition) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGateway::GatewayResponse
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html
 */
export declare class CfnGatewayResponse extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGatewayResponse from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGatewayResponse;
    /**
     * The ID for the gateway response. For example: `abc123` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseParameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
     */
    responseTemplates?: cdk.IResolvable | Record<string, string>;
    /**
     * The response type of the associated GatewayResponse.
     */
    responseType: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * The HTTP status code for this GatewayResponse.
     */
    statusCode?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGatewayResponseProps);
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
 * Properties for defining a `CfnGatewayResponse`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html
 */
export interface CfnGatewayResponseProps {
    /**
     * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responseparameters
     */
    readonly responseParameters?: cdk.IResolvable | Record<string, string>;
    /**
     * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetemplates
     */
    readonly responseTemplates?: cdk.IResolvable | Record<string, string>;
    /**
     * The response type of the associated GatewayResponse.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetype
     */
    readonly responseType: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-restapiid
     */
    readonly restApiId: string;
    /**
     * The HTTP status code for this GatewayResponse.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-statuscode
     */
    readonly statusCode?: string;
}
/**
 * The `AWS::ApiGateway::Method` resource creates API Gateway methods that define the parameters and body that clients must send in their requests.
 *
 * @cloudformationResource AWS::ApiGateway::Method
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html
 */
export declare class CfnMethod extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMethod from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMethod;
    /**
     * A boolean flag specifying whether a valid ApiKey is required to invoke this method.
     */
    apiKeyRequired?: boolean | cdk.IResolvable;
    /**
     * A list of authorization scopes configured on the method.
     */
    authorizationScopes?: Array<string>;
    /**
     * The method's authorization type.
     */
    authorizationType?: string;
    /**
     * The identifier of an authorizer to use on this method.
     */
    authorizerId?: string;
    /**
     * The method's HTTP verb.
     */
    httpMethod: string;
    /**
     * Represents an `HTTP` , `HTTP_PROXY` , `AWS` , `AWS_PROXY` , or Mock integration.
     */
    integration?: CfnMethod.IntegrationProperty | cdk.IResolvable;
    /**
     * Gets a method response associated with a given HTTP status code.
     */
    methodResponses?: Array<cdk.IResolvable | CfnMethod.MethodResponseProperty> | cdk.IResolvable;
    /**
     * A human-friendly operation identifier for the method.
     */
    operationName?: string;
    /**
     * A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
     */
    requestModels?: cdk.IResolvable | Record<string, string>;
    /**
     * A key-value map defining required or optional method request parameters that can be accepted by API Gateway.
     */
    requestParameters?: cdk.IResolvable | Record<string, boolean | cdk.IResolvable>;
    /**
     * The identifier of a RequestValidator for request validation.
     */
    requestValidatorId?: string;
    /**
     * The Resource identifier for the MethodResponse resource.
     */
    resourceId: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMethodProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMethod {
    /**
     * `Integration` is a property of the [AWS::ApiGateway::Method](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html) resource that specifies information about the target backend that a method calls.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html
     */
    interface IntegrationProperty {
        /**
         * A list of request parameters whose values API Gateway caches.
         *
         * To be valid values for `cacheKeyParameters` , these parameters must also be specified for Method `requestParameters` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-cachekeyparameters
         */
        readonly cacheKeyParameters?: Array<string>;
        /**
         * Specifies a group of related cached parameters.
         *
         * By default, API Gateway uses the resource ID as the `cacheNamespace` . You can specify the same `cacheNamespace` across resources to return the same cached data for requests to different resources.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-cachenamespace
         */
        readonly cacheNamespace?: string;
        /**
         * The ID of the VpcLink used for the integration when `connectionType=VPC_LINK` and undefined, otherwise.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-connectionid
         */
        readonly connectionId?: string;
        /**
         * The type of the network connection to the integration endpoint.
         *
         * The valid value is `INTERNET` for connections through the public routable internet or `VPC_LINK` for private connections between API Gateway and a network load balancer in a VPC. The default value is `INTERNET` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-connectiontype
         */
        readonly connectionType?: string;
        /**
         * Specifies how to handle request payload content type conversions.
         *
         * Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT` , with the following behaviors:
         *
         * If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the `passthroughBehavior` is configured to support payload pass-through.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-contenthandling
         */
        readonly contentHandling?: string;
        /**
         * Specifies the credentials required for the integration, if any.
         *
         * For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string `arn:aws:iam::\*:user/\*` . To use resource-based permissions on supported AWS services, specify null.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-credentials
         */
        readonly credentials?: string;
        /**
         * Specifies the integration's HTTP method type.
         *
         * For the Type property, if you specify `MOCK` , this property is optional. For Lambda integrations, you must set the integration method to `POST` . For all other types, you must specify this property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-integrationhttpmethod
         */
        readonly integrationHttpMethod?: string;
        /**
         * Specifies the integration's responses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-integrationresponses
         */
        readonly integrationResponses?: Array<CfnMethod.IntegrationResponseProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation.
         *
         * A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in `requestTemplates` . The valid value is one of the following: `WHEN_NO_MATCH` : passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. `WHEN_NO_TEMPLATES` : passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response. `NEVER` : rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-passthroughbehavior
         */
        readonly passthroughBehavior?: string;
        /**
         * A key-value map specifying request parameters that are passed from the method request to the back end.
         *
         * The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of `method.request.{location}.{name}` , where `location` is `querystring` , `path` , or `header` and `name` must be a valid and unique method request parameter name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-requestparameters
         */
        readonly requestParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
         *
         * The content type value is the key in this map, and the template (as a String) is the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-requesttemplates
         */
        readonly requestTemplates?: cdk.IResolvable | Record<string, string>;
        /**
         * Custom timeout between 50 and 29,000 milliseconds.
         *
         * The default value is 29,000 milliseconds or 29 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-timeoutinmillis
         */
        readonly timeoutInMillis?: number;
        /**
         * Specifies an API method integration type. The valid value is one of the following:.
         *
         * For the HTTP and HTTP proxy integrations, each integration can specify a protocol ( `http/https` ), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a `connectionType` of `VPC_LINK` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-type
         */
        readonly type: string;
        /**
         * Specifies Uniform Resource Identifier (URI) of the integration endpoint.
         *
         * For `HTTP` or `HTTP_PROXY` integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification for standard integrations. If `connectionType` is `VPC_LINK` specify the Network Load Balancer DNS name. For `AWS` or `AWS_PROXY` integrations, the URI is of the form `arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}` . Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated AWS service (e.g., s3); and {subdomain} is a designated subdomain supported by certain AWS service for fast host-name lookup. action can be used for an AWS service action-based API, using an Action={name}&{p1}={v1}&p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an AWS service path-based API. The ensuing service_api refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either `arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}` or `arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integration.html#cfn-apigateway-method-integration-uri
         */
        readonly uri?: string;
    }
    /**
     * `IntegrationResponse` is a property of the [Amazon API Gateway Method Integration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apitgateway-method-integration.html) property type that specifies the response that API Gateway sends after a method's backend finishes processing a request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html
     */
    interface IntegrationResponseProperty {
        /**
         * Specifies how to handle response payload content type conversions.
         *
         * Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT` , with the following behaviors:
         *
         * If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html#cfn-apigateway-method-integrationresponse-contenthandling
         */
        readonly contentHandling?: string;
        /**
         * A key-value map specifying response parameters that are passed to the method response from the back end.
         *
         * The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of `method.response.header.{name}` , where `name` is a valid and unique header name. The mapped non-static value must match the pattern of `integration.response.header.{name}` or `integration.response.body.{JSON-expression}` , where `name` is a valid and unique response header name and `JSON-expression` is a valid JSON expression without the `$` prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html#cfn-apigateway-method-integrationresponse-responseparameters
         */
        readonly responseParameters?: cdk.IResolvable | Record<string, string>;
        /**
         * Specifies the templates used to transform the integration response body.
         *
         * Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html#cfn-apigateway-method-integrationresponse-responsetemplates
         */
        readonly responseTemplates?: cdk.IResolvable | Record<string, string>;
        /**
         * Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end.
         *
         * For example, if the success response returns nothing and the error response returns some string, you could use the `.+` regex to match error response. However, make sure that the error response does not contain any newline ( `\n` ) character in such cases. If the back end is an AWS Lambda function, the AWS Lambda function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html#cfn-apigateway-method-integrationresponse-selectionpattern
         */
        readonly selectionPattern?: string;
        /**
         * Specifies the status code that is used to map the integration response to an existing MethodResponse.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-integrationresponse.html#cfn-apigateway-method-integrationresponse-statuscode
         */
        readonly statusCode: string;
    }
    /**
     * Represents a method response of a given HTTP status code returned to the client.
     *
     * The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html
     */
    interface MethodResponseProperty {
        /**
         * Specifies the Model resources used for the response's content-type.
         *
         * Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html#cfn-apigateway-method-methodresponse-responsemodels
         */
        readonly responseModels?: cdk.IResolvable | Record<string, string>;
        /**
         * A key-value map specifying required or optional response parameters that API Gateway can send back to the caller.
         *
         * A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern `method.response.header.{name}` , where `name` is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in `integration.response.header.{name}` , a static value enclosed within a pair of single quotes (e.g., `'application/json'` ), or a JSON expression from the back-end response payload in the form of `integration.response.body.{JSON-expression}` , where `JSON-expression` is a valid JSON expression without the `$` prefix.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html#cfn-apigateway-method-methodresponse-responseparameters
         */
        readonly responseParameters?: cdk.IResolvable | Record<string, boolean | cdk.IResolvable>;
        /**
         * The method response's status code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-method-methodresponse.html#cfn-apigateway-method-methodresponse-statuscode
         */
        readonly statusCode: string;
    }
}
/**
 * Properties for defining a `CfnMethod`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html
 */
export interface CfnMethodProps {
    /**
     * A boolean flag specifying whether a valid ApiKey is required to invoke this method.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-apikeyrequired
     */
    readonly apiKeyRequired?: boolean | cdk.IResolvable;
    /**
     * A list of authorization scopes configured on the method.
     *
     * The scopes are used with a `COGNITO_USER_POOLS` authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-authorizationscopes
     */
    readonly authorizationScopes?: Array<string>;
    /**
     * The method's authorization type.
     *
     * This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference* .
     *
     * > If you specify the `AuthorizerId` property, specify `CUSTOM` or `COGNITO_USER_POOLS` for this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-authorizationtype
     */
    readonly authorizationType?: string;
    /**
     * The identifier of an authorizer to use on this method.
     *
     * The method's authorization type must be `CUSTOM` or `COGNITO_USER_POOLS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-authorizerid
     */
    readonly authorizerId?: string;
    /**
     * The method's HTTP verb.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-httpmethod
     */
    readonly httpMethod: string;
    /**
     * Represents an `HTTP` , `HTTP_PROXY` , `AWS` , `AWS_PROXY` , or Mock integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-integration
     */
    readonly integration?: CfnMethod.IntegrationProperty | cdk.IResolvable;
    /**
     * Gets a method response associated with a given HTTP status code.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-methodresponses
     */
    readonly methodResponses?: Array<cdk.IResolvable | CfnMethod.MethodResponseProperty> | cdk.IResolvable;
    /**
     * A human-friendly operation identifier for the method.
     *
     * For example, you can assign the `operationName` of `ListPets` for the `GET /pets` method in the `PetStore` example.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-operationname
     */
    readonly operationName?: string;
    /**
     * A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-requestmodels
     */
    readonly requestModels?: cdk.IResolvable | Record<string, string>;
    /**
     * A key-value map defining required or optional method request parameters that can be accepted by API Gateway.
     *
     * A key is a method request parameter name matching the pattern of `method.request.{location}.{name}` , where `location` is `querystring` , `path` , or `header` and `name` is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required ( `true` ) or optional ( `false` ). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-requestparameters
     */
    readonly requestParameters?: cdk.IResolvable | Record<string, boolean | cdk.IResolvable>;
    /**
     * The identifier of a RequestValidator for request validation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-requestvalidatorid
     */
    readonly requestValidatorId?: string;
    /**
     * The Resource identifier for the MethodResponse resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-resourceid
     */
    readonly resourceId: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-method.html#cfn-apigateway-method-restapiid
     */
    readonly restApiId: string;
}
/**
 * The `AWS::ApiGateway::Model` resource defines the structure of a request or response payload for an API method.
 *
 * @cloudformationResource AWS::ApiGateway::Model
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html
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
     * The content-type for the model.
     */
    contentType?: string;
    /**
     * The description of the model.
     */
    description?: string;
    /**
     * A name for the model.
     */
    name?: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * The schema for the model.
     */
    schema?: any | cdk.IResolvable;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html
 */
export interface CfnModelProps {
    /**
     * The content-type for the model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-contenttype
     */
    readonly contentType?: string;
    /**
     * The description of the model.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-description
     */
    readonly description?: string;
    /**
     * A name for the model.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the model name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-name
     */
    readonly name?: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-restapiid
     */
    readonly restApiId: string;
    /**
     * The schema for the model.
     *
     * For `application/json` models, this should be JSON schema draft 4 model. Do not include "\* /" characters in the description of any properties because such "\* /" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-model.html#cfn-apigateway-model-schema
     */
    readonly schema?: any | cdk.IResolvable;
}
/**
 * The `AWS::ApiGateway::RequestValidator` resource sets up basic validation rules for incoming requests to your API.
 *
 * For more information, see [Enable Basic Request Validation for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html) in the *API Gateway Developer Guide* .
 *
 * @cloudformationResource AWS::ApiGateway::RequestValidator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html
 */
export declare class CfnRequestValidator extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRequestValidator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRequestValidator;
    /**
     * The ID for the request validator. For example: `abc123` .
     *
     * @cloudformationAttribute RequestValidatorId
     */
    readonly attrRequestValidatorId: string;
    /**
     * The name of this RequestValidator.
     */
    name?: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * A Boolean flag to indicate whether to validate a request body according to the configured Model schema.
     */
    validateRequestBody?: boolean | cdk.IResolvable;
    /**
     * A Boolean flag to indicate whether to validate request parameters ( `true` ) or not ( `false` ).
     */
    validateRequestParameters?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRequestValidatorProps);
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
 * Properties for defining a `CfnRequestValidator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html
 */
export interface CfnRequestValidatorProps {
    /**
     * The name of this RequestValidator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-name
     */
    readonly name?: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-restapiid
     */
    readonly restApiId: string;
    /**
     * A Boolean flag to indicate whether to validate a request body according to the configured Model schema.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestbody
     */
    readonly validateRequestBody?: boolean | cdk.IResolvable;
    /**
     * A Boolean flag to indicate whether to validate request parameters ( `true` ) or not ( `false` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-requestvalidator.html#cfn-apigateway-requestvalidator-validaterequestparameters
     */
    readonly validateRequestParameters?: boolean | cdk.IResolvable;
}
/**
 * The `AWS::ApiGateway::Resource` resource creates a resource in an API.
 *
 * @cloudformationResource AWS::ApiGateway::Resource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html
 */
export declare class CfnResource extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResource;
    /**
     * The ID for the resource. For example: `abc123` .
     *
     * @cloudformationAttribute ResourceId
     */
    readonly attrResourceId: string;
    /**
     * The parent resource's identifier.
     */
    parentId: string;
    /**
     * The last path segment for this resource.
     */
    pathPart: string;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourceProps);
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
 * Properties for defining a `CfnResource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html
 */
export interface CfnResourceProps {
    /**
     * The parent resource's identifier.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-parentid
     */
    readonly parentId: string;
    /**
     * The last path segment for this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-pathpart
     */
    readonly pathPart: string;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-resource.html#cfn-apigateway-resource-restapiid
     */
    readonly restApiId: string;
}
/**
 * The `AWS::ApiGateway::RestApi` resource creates a REST API.
 *
 * For more information, see [restapi:create](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateRestApi.html) in the *Amazon API Gateway REST API Reference* .
 *
 * > On January 1, 2016, the Swagger Specification was donated to the [OpenAPI initiative](https://docs.aws.amazon.com/https://www.openapis.org/) , becoming the foundation of the OpenAPI Specification.
 *
 * @cloudformationResource AWS::ApiGateway::RestApi
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html
 */
export declare class CfnRestApi extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRestApi from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRestApi;
    /**
     * The string identifier of the associated RestApi.
     *
     * @cloudformationAttribute RestApiId
     */
    readonly attrRestApiId: string;
    /**
     * The root resource ID for a `RestApi` resource, such as `a0bc123d4e` .
     *
     * @cloudformationAttribute RootResourceId
     */
    readonly attrRootResourceId: string;
    /**
     * The source of the API key for metering requests according to a usage plan.
     */
    apiKeySourceType?: string;
    /**
     * The list of binary media types supported by the RestApi.
     */
    binaryMediaTypes?: Array<string>;
    /**
     * An OpenAPI specification that defines a set of RESTful APIs in JSON format.
     */
    body?: any | cdk.IResolvable;
    /**
     * The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
     */
    bodyS3Location?: cdk.IResolvable | CfnRestApi.S3LocationProperty;
    /**
     * The ID of the RestApi that you want to clone from.
     */
    cloneFrom?: string;
    /**
     * The description of the RestApi.
     */
    description?: string;
    /**
     * Specifies whether clients can invoke your API by using the default `execute-api` endpoint.
     */
    disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * A list of the endpoint types of the API.
     */
    endpointConfiguration?: CfnRestApi.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * A query parameter to indicate whether to rollback the API update ( `true` ) or not ( `false` ) when a warning is encountered.
     */
    failOnWarnings?: boolean | cdk.IResolvable;
    /**
     * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API.
     */
    minimumCompressionSize?: number;
    /**
     * This property applies only when you use OpenAPI to define your REST API.
     */
    mode?: string;
    /**
     * The name of the RestApi.
     */
    name?: string;
    /**
     * Custom header parameters as part of the request.
     */
    parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * A policy document that contains the permissions for the `RestApi` resource.
     */
    policy?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value map of strings.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRestApiProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRestApi {
    /**
     * `S3Location` is a property of the [AWS::ApiGateway::RestApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html) resource that specifies the Amazon S3 location of a OpenAPI (formerly Swagger) file that defines a set of RESTful APIs in JSON or YAML.
     *
     * > On January 1, 2016, the Swagger Specification was donated to the [OpenAPI initiative](https://docs.aws.amazon.com/https://www.openapis.org/) , becoming the foundation of the OpenAPI Specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The name of the S3 bucket where the OpenAPI file is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html#cfn-apigateway-restapi-s3location-bucket
         */
        readonly bucket?: string;
        /**
         * The Amazon S3 ETag (a file checksum) of the OpenAPI file.
         *
         * If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html#cfn-apigateway-restapi-s3location-etag
         */
        readonly eTag?: string;
        /**
         * The file name of the OpenAPI file (Amazon S3 object name).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html#cfn-apigateway-restapi-s3location-key
         */
        readonly key?: string;
        /**
         * For versioning-enabled buckets, a specific version of the OpenAPI file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html#cfn-apigateway-restapi-s3location-version
         */
        readonly version?: string;
    }
    /**
     * The `EndpointConfiguration` property type specifies the endpoint types of a REST API.
     *
     * `EndpointConfiguration` is a property of the [AWS::ApiGateway::RestApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-endpointconfiguration.html
     */
    interface EndpointConfigurationProperty {
        /**
         * A list of endpoint types of an API (RestApi) or its custom domain name (DomainName).
         *
         * For an edge-optimized API and its custom domain name, the endpoint type is `"EDGE"` . For a regional API and its custom domain name, the endpoint type is `REGIONAL` . For a private API, the endpoint type is `PRIVATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-endpointconfiguration.html#cfn-apigateway-restapi-endpointconfiguration-types
         */
        readonly types?: Array<string>;
        /**
         * A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes.
         *
         * It is only supported for `PRIVATE` endpoint type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-endpointconfiguration.html#cfn-apigateway-restapi-endpointconfiguration-vpcendpointids
         */
        readonly vpcEndpointIds?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnRestApi`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html
 */
export interface CfnRestApiProps {
    /**
     * The source of the API key for metering requests according to a usage plan.
     *
     * Valid values are: `HEADER` to read the API key from the `X-API-Key` header of a request. `AUTHORIZER` to read the API key from the `UsageIdentifierKey` from a custom authorizer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-apikeysourcetype
     */
    readonly apiKeySourceType?: string;
    /**
     * The list of binary media types supported by the RestApi.
     *
     * By default, the RestApi supports only UTF-8-encoded text payloads.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-binarymediatypes
     */
    readonly binaryMediaTypes?: Array<string>;
    /**
     * An OpenAPI specification that defines a set of RESTful APIs in JSON format.
     *
     * For YAML templates, you can also provide the specification in YAML format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-body
     */
    readonly body?: any | cdk.IResolvable;
    /**
     * The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-bodys3location
     */
    readonly bodyS3Location?: cdk.IResolvable | CfnRestApi.S3LocationProperty;
    /**
     * The ID of the RestApi that you want to clone from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-clonefrom
     */
    readonly cloneFrom?: string;
    /**
     * The description of the RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-description
     */
    readonly description?: string;
    /**
     * Specifies whether clients can invoke your API by using the default `execute-api` endpoint.
     *
     * By default, clients can invoke your API with the default `https://{api_id}.execute-api.{region}.amazonaws.com` endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-disableexecuteapiendpoint
     */
    readonly disableExecuteApiEndpoint?: boolean | cdk.IResolvable;
    /**
     * A list of the endpoint types of the API.
     *
     * Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-endpointconfiguration
     */
    readonly endpointConfiguration?: CfnRestApi.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * A query parameter to indicate whether to rollback the API update ( `true` ) or not ( `false` ) when a warning is encountered.
     *
     * The default value is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-failonwarnings
     */
    readonly failOnWarnings?: boolean | cdk.IResolvable;
    /**
     * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API.
     *
     * When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-minimumcompressionsize
     */
    readonly minimumCompressionSize?: number;
    /**
     * This property applies only when you use OpenAPI to define your REST API.
     *
     * The `Mode` determines how API Gateway handles resource updates.
     *
     * Valid values are `overwrite` or `merge` .
     *
     * For `overwrite` , the new API definition replaces the existing one. The existing API identifier remains unchanged.
     *
     * For `merge` , the new API definition is merged with the existing API.
     *
     * If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite` . For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API.
     *
     * Use the default mode to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-mode
     */
    readonly mode?: string;
    /**
     * The name of the RestApi.
     *
     * A name is required if the REST API is not based on an OpenAPI specification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-name
     */
    readonly name?: string;
    /**
     * Custom header parameters as part of the request.
     *
     * For example, to exclude DocumentationParts from an imported API, set `ignore=documentation` as a `parameters` value, as in the AWS CLI command of `aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-parameters
     */
    readonly parameters?: cdk.IResolvable | Record<string, string>;
    /**
     * A policy document that contains the permissions for the `RestApi` resource.
     *
     * To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-policy
     */
    readonly policy?: any | cdk.IResolvable;
    /**
     * The key-value map of strings.
     *
     * The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:` . The tag value can be up to 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html#cfn-apigateway-restapi-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ApiGateway::Stage` resource creates a stage for a deployment.
 *
 * @cloudformationResource AWS::ApiGateway::Stage
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html
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
     * Access log settings, including the access log format and access log destination ARN.
     */
    accessLogSetting?: CfnStage.AccessLogSettingProperty | cdk.IResolvable;
    /**
     * Specifies whether a cache cluster is enabled for the stage.
     */
    cacheClusterEnabled?: boolean | cdk.IResolvable;
    /**
     * The stage's cache capacity in GB.
     */
    cacheClusterSize?: string;
    /**
     * Settings for the canary deployment in this stage.
     */
    canarySetting?: CfnStage.CanarySettingProperty | cdk.IResolvable;
    /**
     * The identifier of a client certificate for an API stage.
     */
    clientCertificateId?: string;
    /**
     * The identifier of the Deployment that the stage points to.
     */
    deploymentId?: string;
    /**
     * The stage's description.
     */
    description?: string;
    /**
     * The version of the associated API documentation.
     */
    documentationVersion?: string;
    /**
     * A map that defines the method settings for a Stage resource.
     */
    methodSettings?: Array<cdk.IResolvable | CfnStage.MethodSettingProperty> | cdk.IResolvable;
    /**
     * The string identifier of the associated RestApi.
     */
    restApiId: string;
    /**
     * The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway.
     */
    stageName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies whether active tracing with X-ray is enabled for the Stage.
     */
    tracingEnabled?: boolean | cdk.IResolvable;
    /**
     * A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.
     */
    variables?: cdk.IResolvable | Record<string, string>;
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
     * Configuration settings of a canary deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html
     */
    interface CanarySettingProperty {
        /**
         * The ID of the canary deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html#cfn-apigateway-stage-canarysetting-deploymentid
         */
        readonly deploymentId?: string;
        /**
         * The percent (0-100) of traffic diverted to a canary deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html#cfn-apigateway-stage-canarysetting-percenttraffic
         */
        readonly percentTraffic?: number;
        /**
         * Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary.
         *
         * These stage variables are represented as a string-to-string map between stage variable names and their values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html#cfn-apigateway-stage-canarysetting-stagevariableoverrides
         */
        readonly stageVariableOverrides?: cdk.IResolvable | Record<string, string>;
        /**
         * A Boolean flag to indicate whether the canary deployment uses the stage cache or not.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-canarysetting.html#cfn-apigateway-stage-canarysetting-usestagecache
         */
        readonly useStageCache?: boolean | cdk.IResolvable;
    }
    /**
     * The `MethodSetting` property type configures settings for all methods in a stage.
     *
     * The `MethodSettings` property of the `AWS::ApiGateway::Stage` resource contains a list of `MethodSetting` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html
     */
    interface MethodSettingProperty {
        /**
         * Specifies whether the cached responses are encrypted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-cachedataencrypted
         */
        readonly cacheDataEncrypted?: boolean | cdk.IResolvable;
        /**
         * Specifies the time to live (TTL), in seconds, for cached responses.
         *
         * The higher the TTL, the longer the response will be cached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-cachettlinseconds
         */
        readonly cacheTtlInSeconds?: number;
        /**
         * Specifies whether responses should be cached and returned for requests.
         *
         * A cache cluster must be enabled on the stage for responses to be cached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-cachingenabled
         */
        readonly cachingEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs.
         *
         * This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-datatraceenabled
         */
        readonly dataTraceEnabled?: boolean | cdk.IResolvable;
        /**
         * The HTTP method.
         *
         * To apply settings to multiple resources and methods, specify an asterisk ( `*` ) for the `HttpMethod` and `/*` for the `ResourcePath` . This parameter is required when you specify a `MethodSetting` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-httpmethod
         */
        readonly httpMethod?: string;
        /**
         * Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs.
         *
         * Valid values are `OFF` , `ERROR` , and `INFO` . Choose `ERROR` to write only error-level entries to CloudWatch Logs, or choose `INFO` to include all `ERROR` events as well as extra informational events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-logginglevel
         */
        readonly loggingLevel?: string;
        /**
         * Specifies whether Amazon CloudWatch metrics are enabled for this method.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-metricsenabled
         */
        readonly metricsEnabled?: boolean | cdk.IResolvable;
        /**
         * The resource path for this method.
         *
         * Forward slashes ( `/` ) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource` . To specify the root path, use only a slash ( `/` ). To apply settings to multiple resources and methods, specify an asterisk ( `*` ) for the `HttpMethod` and `/*` for the `ResourcePath` . This parameter is required when you specify a `MethodSetting` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-resourcepath
         */
        readonly resourcePath?: string;
        /**
         * Specifies the throttling burst limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-throttlingburstlimit
         */
        readonly throttlingBurstLimit?: number;
        /**
         * Specifies the throttling rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-methodsetting.html#cfn-apigateway-stage-methodsetting-throttlingratelimit
         */
        readonly throttlingRateLimit?: number;
    }
    /**
     * The `AccessLogSetting` property type specifies settings for logging access in this stage.
     *
     * `AccessLogSetting` is a property of the [AWS::ApiGateway::Stage](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-accesslogsetting.html
     */
    interface AccessLogSettingProperty {
        /**
         * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs.
         *
         * If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-` . This parameter is required to enable access logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-accesslogsetting.html#cfn-apigateway-stage-accesslogsetting-destinationarn
         */
        readonly destinationArn?: string;
        /**
         * A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference) . The format must include at least `$context.requestId` . This parameter is required to enable access logging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-stage-accesslogsetting.html#cfn-apigateway-stage-accesslogsetting-format
         */
        readonly format?: string;
    }
}
/**
 * Properties for defining a `CfnStage`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html
 */
export interface CfnStageProps {
    /**
     * Access log settings, including the access log format and access log destination ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-accesslogsetting
     */
    readonly accessLogSetting?: CfnStage.AccessLogSettingProperty | cdk.IResolvable;
    /**
     * Specifies whether a cache cluster is enabled for the stage.
     *
     * To activate a method-level cache, set `CachingEnabled` to `true` for a method.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-cacheclusterenabled
     */
    readonly cacheClusterEnabled?: boolean | cdk.IResolvable;
    /**
     * The stage's cache capacity in GB.
     *
     * For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-cacheclustersize
     */
    readonly cacheClusterSize?: string;
    /**
     * Settings for the canary deployment in this stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-canarysetting
     */
    readonly canarySetting?: CfnStage.CanarySettingProperty | cdk.IResolvable;
    /**
     * The identifier of a client certificate for an API stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-clientcertificateid
     */
    readonly clientCertificateId?: string;
    /**
     * The identifier of the Deployment that the stage points to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-deploymentid
     */
    readonly deploymentId?: string;
    /**
     * The stage's description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-description
     */
    readonly description?: string;
    /**
     * The version of the associated API documentation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-documentationversion
     */
    readonly documentationVersion?: string;
    /**
     * A map that defines the method settings for a Stage resource.
     *
     * Keys (designated as `/{method_setting_key` below) are method paths defined as `{resource_path}/{http_method}` for an individual method override, or `/\* /\*` for overriding all methods in the stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-methodsettings
     */
    readonly methodSettings?: Array<cdk.IResolvable | CfnStage.MethodSettingProperty> | cdk.IResolvable;
    /**
     * The string identifier of the associated RestApi.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-restapiid
     */
    readonly restApiId: string;
    /**
     * The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway.
     *
     * Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-stagename
     */
    readonly stageName?: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether active tracing with X-ray is enabled for the Stage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-tracingenabled
     */
    readonly tracingEnabled?: boolean | cdk.IResolvable;
    /**
     * A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value.
     *
     * Variable names are limited to alphanumeric characters. Values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-stage.html#cfn-apigateway-stage-variables
     */
    readonly variables?: cdk.IResolvable | Record<string, string>;
}
/**
 * The `AWS::ApiGateway::UsagePlan` resource creates a usage plan for deployed APIs.
 *
 * A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see [Creating and Using API Usage Plans in Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html) in the *API Gateway Developer Guide* .
 *
 * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 *
 * @cloudformationResource AWS::ApiGateway::UsagePlan
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html
 */
export declare class CfnUsagePlan extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUsagePlan from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUsagePlan;
    /**
     * The ID for the usage plan. For example: `abc123` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The associated API stages of a usage plan.
     */
    apiStages?: Array<CfnUsagePlan.ApiStageProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of a usage plan.
     */
    description?: string;
    /**
     * The target maximum number of permitted requests per a given unit time interval.
     */
    quota?: cdk.IResolvable | CfnUsagePlan.QuotaSettingsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The collection of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A map containing method level throttling information for API stage in a usage plan.
     */
    throttle?: cdk.IResolvable | CfnUsagePlan.ThrottleSettingsProperty;
    /**
     * The name of a usage plan.
     */
    usagePlanName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnUsagePlanProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUsagePlan {
    /**
     * `QuotaSettings` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.
     *
     * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html
     */
    interface QuotaSettingsProperty {
        /**
         * The target maximum number of requests that can be made in a given time period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html#cfn-apigateway-usageplan-quotasettings-limit
         */
        readonly limit?: number;
        /**
         * The number of requests subtracted from the given limit in the initial time period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html#cfn-apigateway-usageplan-quotasettings-offset
         */
        readonly offset?: number;
        /**
         * The time period in which the limit applies.
         *
         * Valid values are "DAY", "WEEK" or "MONTH".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-quotasettings.html#cfn-apigateway-usageplan-quotasettings-period
         */
        readonly period?: string;
    }
    /**
     * API stage name of the associated API stage in a usage plan.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html
     */
    interface ApiStageProperty {
        /**
         * API Id of the associated API stage in a usage plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html#cfn-apigateway-usageplan-apistage-apiid
         */
        readonly apiId?: string;
        /**
         * API stage name of the associated API stage in a usage plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html#cfn-apigateway-usageplan-apistage-stage
         */
        readonly stage?: string;
        /**
         * Map containing method level throttling information for API stage in a usage plan.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-apistage.html#cfn-apigateway-usageplan-apistage-throttle
         */
        readonly throttle?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnUsagePlan.ThrottleSettingsProperty>;
    }
    /**
     * `ThrottleSettings` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html
     */
    interface ThrottleSettingsProperty {
        /**
         * The API target request burst rate limit.
         *
         * This allows more requests through for a period of time than the target rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html#cfn-apigateway-usageplan-throttlesettings-burstlimit
         */
        readonly burstLimit?: number;
        /**
         * The API target request rate limit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-usageplan-throttlesettings.html#cfn-apigateway-usageplan-throttlesettings-ratelimit
         */
        readonly rateLimit?: number;
    }
}
/**
 * Properties for defining a `CfnUsagePlan`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html
 */
export interface CfnUsagePlanProps {
    /**
     * The associated API stages of a usage plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-apistages
     */
    readonly apiStages?: Array<CfnUsagePlan.ApiStageProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The description of a usage plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-description
     */
    readonly description?: string;
    /**
     * The target maximum number of permitted requests per a given unit time interval.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-quota
     */
    readonly quota?: cdk.IResolvable | CfnUsagePlan.QuotaSettingsProperty;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A map containing method level throttling information for API stage in a usage plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-throttle
     */
    readonly throttle?: cdk.IResolvable | CfnUsagePlan.ThrottleSettingsProperty;
    /**
     * The name of a usage plan.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html#cfn-apigateway-usageplan-usageplanname
     */
    readonly usagePlanName?: string;
}
/**
 * The `AWS::ApiGateway::UsagePlanKey` resource associates an API key with a usage plan.
 *
 * This association determines which users the usage plan is applied to.
 *
 * @cloudformationResource AWS::ApiGateway::UsagePlanKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html
 */
export declare class CfnUsagePlanKey extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUsagePlanKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUsagePlanKey;
    /**
     * The ID for the usage plan key. For example: `abc123` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Id of the UsagePlanKey resource.
     */
    keyId: string;
    /**
     * The type of a UsagePlanKey resource for a plan customer.
     */
    keyType: string;
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.
     */
    usagePlanId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUsagePlanKeyProps);
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
 * Properties for defining a `CfnUsagePlanKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html
 */
export interface CfnUsagePlanKeyProps {
    /**
     * The Id of the UsagePlanKey resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-keyid
     */
    readonly keyId: string;
    /**
     * The type of a UsagePlanKey resource for a plan customer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-keytype
     */
    readonly keyType: string;
    /**
     * The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplankey.html#cfn-apigateway-usageplankey-usageplanid
     */
    readonly usagePlanId: string;
}
/**
 * The `AWS::ApiGateway::VpcLink` resource creates an API Gateway VPC link for a REST API to access resources in an Amazon Virtual Private Cloud (VPC).
 *
 * For more information, see [vpclink:create](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateVpcLink.html) in the `Amazon API Gateway REST API Reference` .
 *
 * @cloudformationResource AWS::ApiGateway::VpcLink
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html
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
     * The ID for the VPC link. For example: `abc123` .
     *
     * @cloudformationAttribute VpcLinkId
     */
    readonly attrVpcLinkId: string;
    /**
     * The description of the VPC link.
     */
    description?: string;
    /**
     * The name used to label and identify the VPC link.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of arbitrary tags (key-value pairs) to associate with the VPC link.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the network load balancer of the VPC targeted by the VPC link.
     */
    targetArns: Array<string>;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html
 */
export interface CfnVpcLinkProps {
    /**
     * The description of the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-description
     */
    readonly description?: string;
    /**
     * The name used to label and identify the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-name
     */
    readonly name: string;
    /**
     * An array of arbitrary tags (key-value pairs) to associate with the VPC link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the network load balancer of the VPC targeted by the VPC link.
     *
     * The network load balancer must be owned by the same AWS account of the API owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-vpclink.html#cfn-apigateway-vpclink-targetarns
     */
    readonly targetArns: Array<string>;
}
/**
 * The `AWS::ApiGateway::BasePathMappingV2` resource creates a base path that clients who call your API must use in the invocation URL.
 *
 * Supported only for private custom domain names.
 *
 * @cloudformationResource AWS::ApiGateway::BasePathMappingV2
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html
 */
export declare class CfnBasePathMappingV2 extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBasePathMappingV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBasePathMappingV2;
    /**
     * Amazon Resource Name (ARN) of the resource.
     *
     * @cloudformationAttribute BasePathMappingArn
     */
    readonly attrBasePathMappingArn: string;
    /**
     * The base path name that callers of the private API must provide as part of the URL after the domain name.
     */
    basePath?: string;
    /**
     * The ARN of the domain name for the BasePathMappingV2 resource to be described.
     */
    domainNameArn: string;
    /**
     * The private API's identifier.
     */
    restApiId: string;
    /**
     * Represents a unique identifier for a version of a deployed private RestApi that is callable by users.
     */
    stage?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBasePathMappingV2Props);
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
 * Properties for defining a `CfnBasePathMappingV2`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html
 */
export interface CfnBasePathMappingV2Props {
    /**
     * The base path name that callers of the private API must provide as part of the URL after the domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-basepath
     */
    readonly basePath?: string;
    /**
     * The ARN of the domain name for the BasePathMappingV2 resource to be described.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-domainnamearn
     */
    readonly domainNameArn: string;
    /**
     * The private API's identifier.
     *
     * This identifier is unique across all of your APIs in API Gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-restapiid
     */
    readonly restApiId: string;
    /**
     * Represents a unique identifier for a version of a deployed private RestApi that is callable by users.
     *
     * The Stage must depend on the `RestApi` 's stage. To create a dependency, add a DependsOn attribute to the BasePathMappingV2 resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-stage
     */
    readonly stage?: string;
}
/**
 * The `AWS::ApiGateway::DomainNameAccessAssociation` resource creates a domain name access association between an access association source and a private custom domain name.
 *
 * Use a domain name access association to invoke a private custom domain name while isolated from the public internet.
 *
 * You can only create or delete a DomainNameAccessAssociation using CloudFormation. To reject a domain name access association, use the AWS CLI.
 *
 * @cloudformationResource AWS::ApiGateway::DomainNameAccessAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html
 */
export declare class CfnDomainNameAccessAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainNameAccessAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainNameAccessAssociation;
    /**
     * The access association ARN. For example: `arn:aws:apigateway:us-west-2:111122223333:/accessassociations/domainname/private.example.com+abcd1234/vpcesource/vpce-abcd1234efg` .
     *
     * @cloudformationAttribute DomainNameAccessAssociationArn
     */
    readonly attrDomainNameAccessAssociationArn: string;
    /**
     * The identifier of the domain name access association source.
     */
    accessAssociationSource: string;
    /**
     * The type of the domain name access association source.
     */
    accessAssociationSourceType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN of the domain name.
     */
    domainNameArn: string;
    /**
     * The collection of tags.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDomainNameAccessAssociationProps);
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
 * Properties for defining a `CfnDomainNameAccessAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html
 */
export interface CfnDomainNameAccessAssociationProps {
    /**
     * The identifier of the domain name access association source.
     *
     * For a `VPCE` , the value is the VPC endpoint ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-accessassociationsource
     */
    readonly accessAssociationSource: string;
    /**
     * The type of the domain name access association source.
     *
     * Only `VPCE` is currently supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-accessassociationsourcetype
     */
    readonly accessAssociationSourceType: string;
    /**
     * The ARN of the domain name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-domainnamearn
     */
    readonly domainNameArn: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ApiGateway::DomainNameV2` resource specifies a custom domain name for your private APIs in API Gateway.
 *
 * You can use a private custom domain name to provide a URL for your private API that's more intuitive and easier to recall.
 *
 * @cloudformationResource AWS::ApiGateway::DomainNameV2
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html
 */
export declare class CfnDomainNameV2 extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDomainNameV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDomainNameV2;
    /**
     * The ARN of the domain name.
     *
     * @cloudformationAttribute DomainNameArn
     */
    readonly attrDomainNameArn: string;
    /**
     * The domain name ID.
     *
     * @cloudformationAttribute DomainNameId
     */
    readonly attrDomainNameId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The reference to an AWS -managed certificate that will be used by the private endpoint for this domain name.
     */
    certificateArn?: string;
    /**
     * Represents a custom domain name as a user-friendly host name of an API (RestApi).
     */
    domainName?: string;
    /**
     * The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.
     */
    endpointConfiguration?: CfnDomainNameV2.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * A stringified JSON policy document that applies to the `execute-api` service for this DomainName regardless of the caller and Method configuration.
     */
    policy?: any | cdk.IResolvable | string;
    /**
     * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
     */
    securityPolicy?: string;
    /**
     * The collection of tags.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDomainNameV2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDomainNameV2 {
    /**
     * The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainnamev2-endpointconfiguration.html
     */
    interface EndpointConfigurationProperty {
        /**
         * A list of endpoint types of an API (RestApi) or its custom domain name (DomainName).
         *
         * For an edge-optimized API and its custom domain name, the endpoint type is `"EDGE"` . For a regional API and its custom domain name, the endpoint type is `REGIONAL` . For a private API, the endpoint type is `PRIVATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainnamev2-endpointconfiguration.html#cfn-apigateway-domainnamev2-endpointconfiguration-types
         */
        readonly types?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDomainNameV2`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html
 */
export interface CfnDomainNameV2Props {
    /**
     * The reference to an AWS -managed certificate that will be used by the private endpoint for this domain name.
     *
     * AWS Certificate Manager is the only supported source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-certificatearn
     */
    readonly certificateArn?: string;
    /**
     * Represents a custom domain name as a user-friendly host name of an API (RestApi).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-domainname
     */
    readonly domainName?: string;
    /**
     * The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-endpointconfiguration
     */
    readonly endpointConfiguration?: CfnDomainNameV2.EndpointConfigurationProperty | cdk.IResolvable;
    /**
     * A stringified JSON policy document that applies to the `execute-api` service for this DomainName regardless of the caller and Method configuration.
     *
     * You can use `Fn::ToJsonString` to enter your `policy` . For more information, see [Fn::ToJsonString](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ToJsonString.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-policy
     */
    readonly policy?: any | cdk.IResolvable | string;
    /**
     * The Transport Layer Security (TLS) version + cipher suite for this DomainName.
     *
     * Only `TLS_1_2` is supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-securitypolicy
     */
    readonly securityPolicy?: string;
    /**
     * The collection of tags.
     *
     * Each tag element is associated with a given resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnamev2.html#cfn-apigateway-domainnamev2-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
