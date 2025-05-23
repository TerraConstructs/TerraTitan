/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#api_type AppsyncGraphqlApi#api_type}
    */
    readonly apiType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#introspection_config AppsyncGraphqlApi#introspection_config}
    */
    readonly introspectionConfig?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#merged_api_execution_role_arn AppsyncGraphqlApi#merged_api_execution_role_arn}
    */
    readonly mergedApiExecutionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#name AppsyncGraphqlApi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#query_depth_limit AppsyncGraphqlApi#query_depth_limit}
    */
    readonly queryDepthLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#resolver_count_limit AppsyncGraphqlApi#resolver_count_limit}
    */
    readonly resolverCountLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#schema AppsyncGraphqlApi#schema}
    */
    readonly schema?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#tags AppsyncGraphqlApi#tags}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#visibility AppsyncGraphqlApi#visibility}
    */
    readonly visibility?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#xray_enabled AppsyncGraphqlApi#xray_enabled}
    */
    readonly xrayEnabled?: boolean | cdktf.IResolvable;
    /**
    * additional_authentication_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#additional_authentication_provider AppsyncGraphqlApi#additional_authentication_provider}
    */
    readonly additionalAuthenticationProvider?: AppsyncGraphqlApiAdditionalAuthenticationProvider[] | cdktf.IResolvable;
    /**
    * enhanced_metrics_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#enhanced_metrics_config AppsyncGraphqlApi#enhanced_metrics_config}
    */
    readonly enhancedMetricsConfig?: AppsyncGraphqlApiEnhancedMetricsConfig;
    /**
    * lambda_authorizer_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}
    */
    readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiLambdaAuthorizerConfig;
    /**
    * log_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#log_config AppsyncGraphqlApi#log_config}
    */
    readonly logConfig?: AppsyncGraphqlApiLogConfig;
    /**
    * openid_connect_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}
    */
    readonly userPoolConfig?: AppsyncGraphqlApiUserPoolConfig;
}
export interface AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}
    */
    readonly authorizerUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authentication_type AppsyncGraphqlApi#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * lambda_authorizer_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#lambda_authorizer_config AppsyncGraphqlApi#lambda_authorizer_config}
    */
    readonly lambdaAuthorizerConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderLambdaAuthorizerConfig;
    /**
    * openid_connect_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#openid_connect_config AppsyncGraphqlApi#openid_connect_config}
    */
    readonly openidConnectConfig?: AppsyncGraphqlApiAdditionalAuthenticationProviderOpenidConnectConfig;
    /**
    * user_pool_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#user_pool_config AppsyncGraphqlApi#user_pool_config}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#data_source_level_metrics_behavior AppsyncGraphqlApi#data_source_level_metrics_behavior}
    */
    readonly dataSourceLevelMetricsBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#operation_level_metrics_config AppsyncGraphqlApi#operation_level_metrics_config}
    */
    readonly operationLevelMetricsConfig: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#resolver_level_metrics_behavior AppsyncGraphqlApi#resolver_level_metrics_behavior}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authorizer_result_ttl_in_seconds AppsyncGraphqlApi#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#authorizer_uri AppsyncGraphqlApi#authorizer_uri}
    */
    readonly authorizerUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#identity_validation_expression AppsyncGraphqlApi#identity_validation_expression}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#cloudwatch_logs_role_arn AppsyncGraphqlApi#cloudwatch_logs_role_arn}
    */
    readonly cloudwatchLogsRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#exclude_verbose_content AppsyncGraphqlApi#exclude_verbose_content}
    */
    readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#field_log_level AppsyncGraphqlApi#field_log_level}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#auth_ttl AppsyncGraphqlApi#auth_ttl}
    */
    readonly authTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#client_id AppsyncGraphqlApi#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#iat_ttl AppsyncGraphqlApi#iat_ttl}
    */
    readonly iatTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#issuer AppsyncGraphqlApi#issuer}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#app_id_client_regex AppsyncGraphqlApi#app_id_client_regex}
    */
    readonly appIdClientRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#aws_region AppsyncGraphqlApi#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#default_action AppsyncGraphqlApi#default_action}
    */
    readonly defaultAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appsync_graphql_api#user_pool_id AppsyncGraphqlApi#user_pool_id}
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
