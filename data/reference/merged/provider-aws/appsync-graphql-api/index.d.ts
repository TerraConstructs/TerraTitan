/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * (Optional) API type. Valid values are `GRAPHQL` or `MERGED`. A `MERGED` type requires `mergedApiExecutionRoleArn` to be set.
    */
    readonly apiType?: string;
    /**
    * (Required) Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#id AppsyncGraphqlApi#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * (Optional) Sets the value of the GraphQL API to enable (`ENABLED`) or disable (`DISABLED`) introspection. If no value is provided, the introspection configuration will be set to ENABLED by default. This field will produce an error if the operation attempts to use the introspection feature while this field is disabled. For more information about introspection, see [GraphQL introspection](https://graphql.org/learn/introspection/).
    */
    readonly introspectionConfig?: string;
    /**
    * (Optional) ARN of the execution role when `apiType` is set to `MERGED`.
    */
    readonly mergedApiExecutionRoleArn?: string;
    /**
    * (Required) User-supplied name for the GraphQL API.
    */
    readonly name: string;
    /**
    * (Optional) The maximum depth a query can have in a single request. Depth refers to the amount of nested levels allowed in the body of query. The default value is `0` (or unspecified), which indicates there's no depth limit. If you set a limit, it can be between `1` and `75` nested levels. This field will produce a limit error if the operation falls out of bounds.
    */
    readonly queryDepthLimit?: number;
    /**
    * (Optional) The maximum number of resolvers that can be invoked in a single request. The default value is `0` (or unspecified), which will set the limit to `10000`. When specified, the limit value can be between `1` and `10000`. This field will produce a limit error if the operation falls out of bounds.
    */
    readonly resolverCountLimit?: number;
    /**
    * (Optional) Schema definition, in GraphQL schema language format. Terraform cannot perform drift detection of this configuration.
    */
    readonly schema?: string;
    /**
    * (Optional) Map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level.
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#tags_all AppsyncGraphqlApi#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * (Optional) Sets the value of the GraphQL API to public (`GLOBAL`) or private (`PRIVATE`). If no value is provided, the visibility will be set to `GLOBAL` by default. This value cannot be changed once the API has been created.
    */
    readonly visibility?: string;
    /**
    * (Optional) Whether tracing with X-ray is enabled. Defaults to false.
    */
    readonly xrayEnabled?: boolean | cdktf.IResolvable;
    /**
    * additional_authentication_provider block
    *
    * (Optional) One or more additional authentication providers for the GraphQL API.
    */
    readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable;
    /**
    * enhanced_metrics_config block
    *
    * (Optional) Enables and controls the enhanced metrics feature.
    */
    readonly enhancedMetricsConfig?: AppsyncGraphqlApiEnhancedMetricsConfig;
    /**
    * lambda_authorizer_config block
    *
    * (Optional) Nested argument containing Lambda authorizer configuration.
    */
    readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiLambdaAuthorizerConfig;
    /**
    * log_config block
    *
    * (Optional) Nested argument containing logging configuration.
    */
    readonly logConfig?: AppsyncGraphqlApiLogConfig;
    /**
    * openid_connect_config block
    *
    * (Optional) Nested argument containing OpenID Connect configuration.
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * (Optional) Amazon Cognito User Pool configuration.
    */
    readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig {
    /**
    * (Optional) Number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600.
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * (Required) ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`.
    */
    readonly authorizerUri: string;
    /**
    * (Optional) Regular expression for validation of tokens before the Lambda function is called.
    */
    readonly identityValidationExpression?: string;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): any;
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig | undefined);
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    get authorizerUriInput(): string | undefined;
    private _identityValidationExpression?;
    get identityValidationExpression(): string;
    set identityValidationExpression(value: string);
    resetIdentityValidationExpression(): void;
    get identityValidationExpressionInput(): string | undefined;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig {
    /**
    * (Optional) Number of milliseconds a token is valid after being authenticated.
    */
    readonly authTtl?: number;
    /**
    * (Optional) Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
    */
    readonly clientId?: string;
    /**
    * (Optional) Number of milliseconds a token is valid after being issued to a user.
    */
    readonly iatTtl?: number;
    /**
    * (Required) Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
    */
    readonly issuer: string;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any;
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined);
    private _authTtl?;
    get authTtl(): number;
    set authTtl(value: number);
    resetAuthTtl(): void;
    get authTtlInput(): number | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _iatTtl?;
    get iatTtl(): number;
    set iatTtl(value: number);
    resetIatTtl(): void;
    get iatTtlInput(): number | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig {
    /**
    * (Optional) Regular expression for validating the incoming Amazon Cognito User Pool app client ID.
    */
    readonly appIdClientRegex?: string;
    /**
    * (Optional) AWS region in which the user pool was created.
    */
    readonly awsRegion?: string;
    /**
    * (Required) User pool ID.
    */
    readonly userPoolId: string;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any;
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference | AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined);
    private _appIdClientRegex?;
    get appIdClientRegex(): string;
    set appIdClientRegex(value: string);
    resetAppIdClientRegex(): void;
    get appIdClientRegexInput(): string | undefined;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProvider {
    /**
    *  (Required) Authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`, `AWS_LAMBDA`
    */
    readonly authenticationType: string;
    /**
    * lambda_authorizer_config block
    *
    * (Optional) Nested argument containing Lambda authorizer configuration.
    */
    readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
    /**
    * openid_connect_config block
    *
    * (Optional) Nested argument containing OpenID Connect configuration. See [`openidConnectConfig` Block](#openid_connect_config-block) for details.
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * (Optional) Amazon Cognito User Pool configuration. See [`userPoolConfig` Block](#user_pool_config-block) for details.
    */
    readonly userPoolConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig;
}
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderToTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable): any;
export declare function appsyncGraphqlApiAdditionalAuthenticationProviderToHclTerraform(struct?: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable): any;
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable | undefined;
    set internalValue(value: AppsyncGraphqlApiAdditionalAuthenticationProvider | cdktf.IResolvable | undefined);
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string | undefined;
    private _lambdaAuthorizerConfig;
    get lambdaAuthorizerConfig(): AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfigOutputReference;
    putLambdaAuthorizerConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig): void;
    resetLambdaAuthorizerConfig(): void;
    get lambdaAuthorizerConfigInput(): AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig | undefined;
    private _openidConnectConfig;
    get openidConnectConfig(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfigOutputReference;
    putOpenidConnectConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig): void;
    resetOpenidConnectConfig(): void;
    get openidConnectConfigInput(): AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig | undefined;
    private _userPoolConfig;
    get userPoolConfig(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfigOutputReference;
    putUserPoolConfig(value: AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig): void;
    resetUserPoolConfig(): void;
    get userPoolConfigInput(): AppsyncGraphqlApiAdditionalAuthenticationProviderUserPoolConfig | undefined;
}
export declare class AppsyncGraphqlApiAdditionalAuthenticationProviderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppsyncGraphqlApiAdditionalAuthenticationProviderOutputReference;
}
export interface AppsyncGraphqlApiEnhancedMetricsConfig {
    /**
    * (Optional) How data source metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_DATA_SOURCE_METRICS`, `PER_DATA_SOURCE_METRICS`
    */
    readonly dataSourceLevelMetricsBehavior: string;
    /**
    * (Optional) How operation metrics will be emitted to CloudWatch. Valid values: `ENABLED`, `DISABLED`
    */
    readonly operationLevelMetricsConfig: string;
    /**
    * D(Optional) How resolver metrics will be emitted to CloudWatch. Valid values: `FULL_REQUEST_RESOLVER_METRICS`, `PER_RESOLVER_METRICS`
    */
    readonly resolverLevelMetricsBehavior: string;
}
export declare function appsyncGraphqlApiEnhancedMetricsConfigToTerraform(struct?: AppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AppsyncGraphqlApiEnhancedMetricsConfig): any;
export declare function appsyncGraphqlApiEnhancedMetricsConfigToHclTerraform(struct?: AppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AppsyncGraphqlApiEnhancedMetricsConfig): any;
export declare class AppsyncGraphqlApiEnhancedMetricsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiEnhancedMetricsConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiEnhancedMetricsConfig | undefined);
    private _dataSourceLevelMetricsBehavior?;
    get dataSourceLevelMetricsBehavior(): string;
    set dataSourceLevelMetricsBehavior(value: string);
    get dataSourceLevelMetricsBehaviorInput(): string | undefined;
    private _operationLevelMetricsConfig?;
    get operationLevelMetricsConfig(): string;
    set operationLevelMetricsConfig(value: string);
    get operationLevelMetricsConfigInput(): string | undefined;
    private _resolverLevelMetricsBehavior?;
    get resolverLevelMetricsBehavior(): string;
    set resolverLevelMetricsBehavior(value: string);
    get resolverLevelMetricsBehaviorInput(): string | undefined;
}
export interface AppsyncGraphqlApiLambdaAuthorizerConfig {
    /**
    * (Optional) Number of seconds a response should be cached for. The default is 5 minutes (300 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response. A value of 0 disables caching of responses. Minimum value of 0. Maximum value of 3600.
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * (Required) ARN of the Lambda function to be called for authorization. Note: This Lambda function must have a resource-based policy assigned to it, to allow `lambda:InvokeFunction` from service principal `appsync.amazonaws.com`.
    */
    readonly authorizerUri: string;
    /**
    * (Optional) Regular expression for validation of tokens before the Lambda function is called.
    */
    readonly identityValidationExpression?: string;
}
export declare function appsyncGraphqlApiLambdaAuthorizerConfigToTerraform(struct?: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiLambdaAuthorizerConfig): any;
export declare function appsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(struct?: AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AppsyncGraphqlApiLambdaAuthorizerConfig): any;
export declare class AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiLambdaAuthorizerConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiLambdaAuthorizerConfig | undefined);
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    get authorizerUriInput(): string | undefined;
    private _identityValidationExpression?;
    get identityValidationExpression(): string;
    set identityValidationExpression(value: string);
    resetIdentityValidationExpression(): void;
    get identityValidationExpressionInput(): string | undefined;
}
export interface AppsyncGraphqlApiLogConfig {
    /**
    * (Required) Amazon Resource Name of the service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account.
    */
    readonly cloudwatchLogsRoleArn: string;
    /**
    * (Optional) Set to TRUE to exclude sections that contain information such as headers, context, and evaluated mapping templates, regardless of logging  level. Valid values: `true`, `false`. Default value: `false`
    */
    readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
    /**
    * (Required) Field logging level. Valid values: `ALL`, `ERROR`, `NONE`.
    */
    readonly fieldLogLevel: string;
}
export declare function appsyncGraphqlApiLogConfigToTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any;
export declare function appsyncGraphqlApiLogConfigToHclTerraform(struct?: AppsyncGraphqlApiLogConfigOutputReference | AppsyncGraphqlApiLogConfig): any;
export declare class AppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiLogConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiLogConfig | undefined);
    private _cloudwatchLogsRoleArn?;
    get cloudwatchLogsRoleArn(): string;
    set cloudwatchLogsRoleArn(value: string);
    get cloudwatchLogsRoleArnInput(): string | undefined;
    private _excludeVerboseContent?;
    get excludeVerboseContent(): boolean | cdktf.IResolvable;
    set excludeVerboseContent(value: boolean | cdktf.IResolvable);
    resetExcludeVerboseContent(): void;
    get excludeVerboseContentInput(): boolean | cdktf.IResolvable | undefined;
    private _fieldLogLevel?;
    get fieldLogLevel(): string;
    set fieldLogLevel(value: string);
    get fieldLogLevelInput(): string | undefined;
}
export interface AppsyncGraphqlApiOpenidConnectConfig {
    /**
    * (Optional) Number of milliseconds a token is valid after being authenticated.
    */
    readonly authTtl?: number;
    /**
    * (Optional) Client identifier of the Relying party at the OpenID identity provider. This identifier is typically obtained when the Relying party is registered with the OpenID identity provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time.
    */
    readonly clientId?: string;
    /**
    * (Optional) Number of milliseconds a token is valid after being issued to a user.
    */
    readonly iatTtl?: number;
    /**
    * (Required) Issuer for the OpenID Connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
    */
    readonly issuer: string;
}
export declare function appsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any;
export declare function appsyncGraphqlApiOpenidConnectConfigToHclTerraform(struct?: AppsyncGraphqlApiOpenidConnectConfigOutputReference | AppsyncGraphqlApiOpenidConnectConfig): any;
export declare class AppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiOpenidConnectConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiOpenidConnectConfig | undefined);
    private _authTtl?;
    get authTtl(): number;
    set authTtl(value: number);
    resetAuthTtl(): void;
    get authTtlInput(): number | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _iatTtl?;
    get iatTtl(): number;
    set iatTtl(value: number);
    resetIatTtl(): void;
    get iatTtlInput(): number | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
}
export interface AppsyncGraphqlApiUserPoolConfig {
    /**
    * (Optional) Regular expression for validating the incoming Amazon Cognito User Pool app client ID.
    */
    readonly appIdClientRegex?: string;
    /**
    * (Optional) AWS region in which the user pool was created.
    */
    readonly awsRegion?: string;
    /**
    * (Required only if Cognito is used as the default auth provider) Action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration. Valid: `ALLOW` and `DENY`
    */
    readonly defaultAction: string;
    /**
    * (Required) User pool ID.
    */
    readonly userPoolId: string;
}
export declare function appsyncGraphqlApiUserPoolConfigToTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any;
export declare function appsyncGraphqlApiUserPoolConfigToHclTerraform(struct?: AppsyncGraphqlApiUserPoolConfigOutputReference | AppsyncGraphqlApiUserPoolConfig): any;
export declare class AppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppsyncGraphqlApiUserPoolConfig | undefined;
    set internalValue(value: AppsyncGraphqlApiUserPoolConfig | undefined);
    private _appIdClientRegex?;
    get appIdClientRegex(): string;
    set appIdClientRegex(value: string);
    resetAppIdClientRegex(): void;
    get appIdClientRegexInput(): string | undefined;
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string | undefined;
    private _defaultAction?;
    get defaultAction(): string;
    set defaultAction(value: string);
    get defaultActionInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api aws_appsync_graphql_api}
*/
export declare class AppsyncGraphqlApi extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appsync_graphql_api";
    /**
    * Generates CDKTF code for importing a AppsyncGraphqlApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppsyncGraphqlApi to import
    * @param importFromId The id of the existing AppsyncGraphqlApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppsyncGraphqlApi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api aws_appsync_graphql_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncGraphqlApiConfig
    */
    constructor(scope: Construct, id: string, config: AppsyncGraphqlApiConfig);
    private _apiType?;
    get apiType(): string;
    set apiType(value: string);
    resetApiType(): void;
    get apiTypeInput(): string | undefined;
    get arn(): string;
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _introspectionConfig?;
    get introspectionConfig(): string;
    set introspectionConfig(value: string);
    resetIntrospectionConfig(): void;
    get introspectionConfigInput(): string | undefined;
    private _mergedApiExecutionRoleArn?;
    get mergedApiExecutionRoleArn(): string;
    set mergedApiExecutionRoleArn(value: string);
    resetMergedApiExecutionRoleArn(): void;
    get mergedApiExecutionRoleArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _queryDepthLimit?;
    get queryDepthLimit(): number;
    set queryDepthLimit(value: number);
    resetQueryDepthLimit(): void;
    get queryDepthLimitInput(): number | undefined;
    private _resolverCountLimit?;
    get resolverCountLimit(): number;
    set resolverCountLimit(value: number);
    resetResolverCountLimit(): void;
    get resolverCountLimitInput(): number | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string | undefined;
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
    private _uris;
    get uris(): cdktf.StringMap;
    private _visibility?;
    get visibility(): string;
    set visibility(value: string);
    resetVisibility(): void;
    get visibilityInput(): string | undefined;
    private _xrayEnabled?;
    get xrayEnabled(): boolean | cdktf.IResolvable;
    set xrayEnabled(value: boolean | cdktf.IResolvable);
    resetXrayEnabled(): void;
    get xrayEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _additionalAuthenticationProvider;
    get additionalAuthenticationProvider(): AppsyncGraphqlApiAdditionalAuthenticationProviderList;
    putAdditionalAuthenticationProvider(value: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable): void;
    resetAdditionalAuthenticationProvider(): void;
    get additionalAuthenticationProviderInput(): cdktf.IResolvable | AppsyncGraphqlApiAdditionalAuthenticationProvider[] | undefined;
    private _enhancedMetricsConfig;
    get enhancedMetricsConfig(): AppsyncGraphqlApiEnhancedMetricsConfigOutputReference;
    putEnhancedMetricsConfig(value: AppsyncGraphqlApiEnhancedMetricsConfig): void;
    resetEnhancedMetricsConfig(): void;
    get enhancedMetricsConfigInput(): AppsyncGraphqlApiEnhancedMetricsConfig | undefined;
    private _lambdaAuthorizerConfig;
    get lambdaAuthorizerConfig(): AppsyncGraphqlApiLambdaAuthorizerConfigOutputReference;
    putLambdaAuthorizerConfig(value: AppsyncGraphqlApiLambdaAuthorizerConfig): void;
    resetLambdaAuthorizerConfig(): void;
    get lambdaAuthorizerConfigInput(): AppsyncGraphqlApiLambdaAuthorizerConfig | undefined;
    private _logConfig;
    get logConfig(): AppsyncGraphqlApiLogConfigOutputReference;
    putLogConfig(value: AppsyncGraphqlApiLogConfig): void;
    resetLogConfig(): void;
    get logConfigInput(): AppsyncGraphqlApiLogConfig | undefined;
    private _openidConnectConfig;
    get openidConnectConfig(): AppsyncGraphqlApiOpenidConnectConfigOutputReference;
    putOpenidConnectConfig(value: AppsyncGraphqlApiOpenidConnectConfig): void;
    resetOpenidConnectConfig(): void;
    get openidConnectConfigInput(): AppsyncGraphqlApiOpenidConnectConfig | undefined;
    private _userPoolConfig;
    get userPoolConfig(): AppsyncGraphqlApiUserPoolConfigOutputReference;
    putUserPoolConfig(value: AppsyncGraphqlApiUserPoolConfig): void;
    resetUserPoolConfig(): void;
    get userPoolConfigInput(): AppsyncGraphqlApiUserPoolConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
