/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AwsProviderConfig {
    /**
    * The access key for API operations. You can retrieve this
    * from the 'Security & Credentials' section of the AWS console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#access_key AwsProvider#access_key}
    */
    readonly accessKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#allowed_account_ids AwsProvider#allowed_account_ids}
    */
    readonly allowedAccountIds?: string[];
    /**
    * File containing custom root and intermediate certificates. Can also be configured using the `AWS_CA_BUNDLE` environment variable. (Setting `ca_bundle` in the shared config file is not supported.)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#custom_ca_bundle AwsProvider#custom_ca_bundle}
    */
    readonly customCaBundle?: string;
    /**
    * Address of the EC2 metadata service endpoint to use. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT` environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ec2_metadata_service_endpoint AwsProvider#ec2_metadata_service_endpoint}
    */
    readonly ec2MetadataServiceEndpoint?: string;
    /**
    * Protocol to use with EC2 metadata service endpoint.Valid values are `IPv4` and `IPv6`. Can also be configured using the `AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE` environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ec2_metadata_service_endpoint_mode AwsProvider#ec2_metadata_service_endpoint_mode}
    */
    readonly ec2MetadataServiceEndpointMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}
    */
    readonly forbiddenAccountIds?: string[];
    /**
    * URL of a proxy to use for HTTP requests when accessing the AWS API. Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#http_proxy AwsProvider#http_proxy}
    */
    readonly httpProxy?: string;
    /**
    * URL of a proxy to use for HTTPS requests when accessing the AWS API. Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#https_proxy AwsProvider#https_proxy}
    */
    readonly httpsProxy?: string;
    /**
    * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#insecure AwsProvider#insecure}
    */
    readonly insecure?: boolean | cdktf.IResolvable;
    /**
    * The maximum number of times an AWS API request is
    * being executed. If the API request still fails, an error is
    * thrown.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#max_retries AwsProvider#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Comma-separated list of hosts that should not use HTTP or HTTPS proxies. Can also be set using the `NO_PROXY` or `no_proxy` environment variables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#no_proxy AwsProvider#no_proxy}
    */
    readonly noProxy?: string;
    /**
    * The profile for API operations. If not set, the default profile
    * created with `aws configure` will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#profile AwsProvider#profile}
    */
    readonly profile?: string;
    /**
    * The region where AWS operations will take place. Examples
    * are us-east-1, us-west-2, etc.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#region AwsProvider#region}
    */
    readonly region?: string;
    /**
    * Specifies how retries are attempted. Valid values are `standard` and `adaptive`. Can also be configured using the `AWS_RETRY_MODE` environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#retry_mode AwsProvider#retry_mode}
    */
    readonly retryMode?: string;
    /**
    * Specifies whether S3 API calls in the `us-east-1` region use the legacy global endpoint or a regional endpoint. Valid values are `legacy` or `regional`. Can also be configured using the `AWS_S3_US_EAST_1_REGIONAL_ENDPOINT` environment variable or the `s3_us_east_1_regional_endpoint` shared config file parameter
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3_us_east_1_regional_endpoint AwsProvider#s3_us_east_1_regional_endpoint}
    */
    readonly s3UsEast1RegionalEndpoint?: string;
    /**
    * Set this to true to enable the request to use path-style addressing,
    * i.e., https://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
    * use virtual hosted bucket addressing when possible
    * (https://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3_use_path_style AwsProvider#s3_use_path_style}
    */
    readonly s3UsePathStyle?: boolean | cdktf.IResolvable;
    /**
    * The secret key for API operations. You can retrieve this
    * from the 'Security & Credentials' section of the AWS console.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#secret_key AwsProvider#secret_key}
    */
    readonly secretKey?: string;
    /**
    * List of paths to shared config files. If not set, defaults to [~/.aws/config].
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#shared_config_files AwsProvider#shared_config_files}
    */
    readonly sharedConfigFiles?: string[];
    /**
    * List of paths to shared credentials files. If not set, defaults to [~/.aws/credentials].
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#shared_credentials_files AwsProvider#shared_credentials_files}
    */
    readonly sharedCredentialsFiles?: string[];
    /**
    * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}
    */
    readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
    /**
    * Skip the AWS Metadata API check. Used for AWS API implementations that do not have a metadata api endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
    */
    readonly skipMetadataApiCheck?: string;
    /**
    * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#skip_region_validation AwsProvider#skip_region_validation}
    */
    readonly skipRegionValidation?: boolean | cdktf.IResolvable;
    /**
    * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
    */
    readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
    /**
    * The region where AWS STS operations will take place. Examples
    * are us-east-1 and us-west-2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sts_region AwsProvider#sts_region}
    */
    readonly stsRegion?: string;
    /**
    * session token. A session token is only required if you are
    * using temporary security credentials.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#token AwsProvider#token}
    */
    readonly token?: string;
    /**
    * The capacity of the AWS SDK's token bucket rate limiter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#token_bucket_rate_limiter_capacity AwsProvider#token_bucket_rate_limiter_capacity}
    */
    readonly tokenBucketRateLimiterCapacity?: number;
    /**
    * Resolve an endpoint with DualStack capability
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#use_dualstack_endpoint AwsProvider#use_dualstack_endpoint}
    */
    readonly useDualstackEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Resolve an endpoint with FIPS capability
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#use_fips_endpoint AwsProvider#use_fips_endpoint}
    */
    readonly useFipsEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#alias AwsProvider#alias}
    */
    readonly alias?: string;
    /**
    * assume_role block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#assume_role AwsProvider#assume_role}
    */
    readonly assumeRole?: AwsProviderAssumeRole[] | cdktf.IResolvable;
    /**
    * assume_role_with_web_identity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#assume_role_with_web_identity AwsProvider#assume_role_with_web_identity}
    */
    readonly assumeRoleWithWebIdentity?: AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable;
    /**
    * default_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#default_tags AwsProvider#default_tags}
    */
    readonly defaultTags?: AwsProviderDefaultTags[] | cdktf.IResolvable;
    /**
    * endpoints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#endpoints AwsProvider#endpoints}
    */
    readonly endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable;
    /**
    * ignore_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ignore_tags AwsProvider#ignore_tags}
    */
    readonly ignoreTags?: AwsProviderIgnoreTags[] | cdktf.IResolvable;
}
export interface AwsProviderAssumeRole {
    /**
    * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#duration AwsProvider#duration}
    */
    readonly duration?: string;
    /**
    * A unique identifier that might be required when you assume a role in another account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#external_id AwsProvider#external_id}
    */
    readonly externalId?: string;
    /**
    * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#policy AwsProvider#policy}
    */
    readonly policy?: string;
    /**
    * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#policy_arns AwsProvider#policy_arns}
    */
    readonly policyArns?: string[];
    /**
    * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#role_arn AwsProvider#role_arn}
    */
    readonly roleArn?: string;
    /**
    * An identifier for the assumed role session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#session_name AwsProvider#session_name}
    */
    readonly sessionName?: string;
    /**
    * Source identity specified by the principal assuming the role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#source_identity AwsProvider#source_identity}
    */
    readonly sourceIdentity?: string;
    /**
    * Assume role session tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#tags AwsProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Assume role session tag keys to pass to any subsequent sessions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}
    */
    readonly transitiveTagKeys?: string[];
}
export declare function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole | cdktf.IResolvable): any;
export declare function awsProviderAssumeRoleToHclTerraform(struct?: AwsProviderAssumeRole | cdktf.IResolvable): any;
export interface AwsProviderAssumeRoleWithWebIdentity {
    /**
    * The duration, between 15 minutes and 12 hours, of the role session. Valid time units are ns, us (or µs), ms, s, h, or m.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#duration AwsProvider#duration}
    */
    readonly duration?: string;
    /**
    * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#policy AwsProvider#policy}
    */
    readonly policy?: string;
    /**
    * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#policy_arns AwsProvider#policy_arns}
    */
    readonly policyArns?: string[];
    /**
    * Amazon Resource Name (ARN) of an IAM Role to assume prior to making API calls.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#role_arn AwsProvider#role_arn}
    */
    readonly roleArn?: string;
    /**
    * An identifier for the assumed role session.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#session_name AwsProvider#session_name}
    */
    readonly sessionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#web_identity_token AwsProvider#web_identity_token}
    */
    readonly webIdentityToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#web_identity_token_file AwsProvider#web_identity_token_file}
    */
    readonly webIdentityTokenFile?: string;
}
export declare function awsProviderAssumeRoleWithWebIdentityToTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktf.IResolvable): any;
export declare function awsProviderAssumeRoleWithWebIdentityToHclTerraform(struct?: AwsProviderAssumeRoleWithWebIdentity | cdktf.IResolvable): any;
export interface AwsProviderDefaultTags {
    /**
    * Resource tags to default across all resources. Can also be configured with environment variables like `TF_AWS_DEFAULT_TAGS_<tag_name>`.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#tags AwsProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTags | cdktf.IResolvable): any;
export declare function awsProviderDefaultTagsToHclTerraform(struct?: AwsProviderDefaultTags | cdktf.IResolvable): any;
export interface AwsProviderEndpoints {
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#accessanalyzer AwsProvider#accessanalyzer}
    */
    readonly accessanalyzer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#account AwsProvider#account}
    */
    readonly account?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#acm AwsProvider#acm}
    */
    readonly acm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#acmpca AwsProvider#acmpca}
    */
    readonly acmpca?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#amg AwsProvider#amg}
    */
    readonly amg?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#amp AwsProvider#amp}
    */
    readonly amp?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#amplify AwsProvider#amplify}
    */
    readonly amplify?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#apigateway AwsProvider#apigateway}
    */
    readonly apigateway?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#apigatewayv2 AwsProvider#apigatewayv2}
    */
    readonly apigatewayv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appautoscaling AwsProvider#appautoscaling}
    */
    readonly appautoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appconfig AwsProvider#appconfig}
    */
    readonly appconfig?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appfabric AwsProvider#appfabric}
    */
    readonly appfabric?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appflow AwsProvider#appflow}
    */
    readonly appflow?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appintegrations AwsProvider#appintegrations}
    */
    readonly appintegrations?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appintegrationsservice AwsProvider#appintegrationsservice}
    */
    readonly appintegrationsservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#applicationautoscaling AwsProvider#applicationautoscaling}
    */
    readonly applicationautoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#applicationinsights AwsProvider#applicationinsights}
    */
    readonly applicationinsights?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#applicationsignals AwsProvider#applicationsignals}
    */
    readonly applicationsignals?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appmesh AwsProvider#appmesh}
    */
    readonly appmesh?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appregistry AwsProvider#appregistry}
    */
    readonly appregistry?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#apprunner AwsProvider#apprunner}
    */
    readonly apprunner?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appstream AwsProvider#appstream}
    */
    readonly appstream?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#appsync AwsProvider#appsync}
    */
    readonly appsync?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#athena AwsProvider#athena}
    */
    readonly athena?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#auditmanager AwsProvider#auditmanager}
    */
    readonly auditmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#autoscaling AwsProvider#autoscaling}
    */
    readonly autoscaling?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#autoscalingplans AwsProvider#autoscalingplans}
    */
    readonly autoscalingplans?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#backup AwsProvider#backup}
    */
    readonly backup?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#batch AwsProvider#batch}
    */
    readonly batch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#bcmdataexports AwsProvider#bcmdataexports}
    */
    readonly bcmdataexports?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#beanstalk AwsProvider#beanstalk}
    */
    readonly beanstalk?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#bedrock AwsProvider#bedrock}
    */
    readonly bedrock?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#bedrockagent AwsProvider#bedrockagent}
    */
    readonly bedrockagent?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#billing AwsProvider#billing}
    */
    readonly billing?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#budgets AwsProvider#budgets}
    */
    readonly budgets?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ce AwsProvider#ce}
    */
    readonly ce?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#chatbot AwsProvider#chatbot}
    */
    readonly chatbot?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#chime AwsProvider#chime}
    */
    readonly chime?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#chimesdkmediapipelines AwsProvider#chimesdkmediapipelines}
    */
    readonly chimesdkmediapipelines?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#chimesdkvoice AwsProvider#chimesdkvoice}
    */
    readonly chimesdkvoice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cleanrooms AwsProvider#cleanrooms}
    */
    readonly cleanrooms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloud9 AwsProvider#cloud9}
    */
    readonly cloud9?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudcontrol AwsProvider#cloudcontrol}
    */
    readonly cloudcontrol?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}
    */
    readonly cloudcontrolapi?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudformation AwsProvider#cloudformation}
    */
    readonly cloudformation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudfront AwsProvider#cloudfront}
    */
    readonly cloudfront?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudfrontkeyvaluestore AwsProvider#cloudfrontkeyvaluestore}
    */
    readonly cloudfrontkeyvaluestore?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudhsm AwsProvider#cloudhsm}
    */
    readonly cloudhsm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudhsmv2 AwsProvider#cloudhsmv2}
    */
    readonly cloudhsmv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudsearch AwsProvider#cloudsearch}
    */
    readonly cloudsearch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudtrail AwsProvider#cloudtrail}
    */
    readonly cloudtrail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatch AwsProvider#cloudwatch}
    */
    readonly cloudwatch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchevents AwsProvider#cloudwatchevents}
    */
    readonly cloudwatchevents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchevidently AwsProvider#cloudwatchevidently}
    */
    readonly cloudwatchevidently?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchlog AwsProvider#cloudwatchlog}
    */
    readonly cloudwatchlog?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}
    */
    readonly cloudwatchlogs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchobservabilityaccessmanager AwsProvider#cloudwatchobservabilityaccessmanager}
    */
    readonly cloudwatchobservabilityaccessmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cloudwatchrum AwsProvider#cloudwatchrum}
    */
    readonly cloudwatchrum?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codeartifact AwsProvider#codeartifact}
    */
    readonly codeartifact?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codebuild AwsProvider#codebuild}
    */
    readonly codebuild?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codecatalyst AwsProvider#codecatalyst}
    */
    readonly codecatalyst?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codecommit AwsProvider#codecommit}
    */
    readonly codecommit?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codeconnections AwsProvider#codeconnections}
    */
    readonly codeconnections?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codedeploy AwsProvider#codedeploy}
    */
    readonly codedeploy?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codeguruprofiler AwsProvider#codeguruprofiler}
    */
    readonly codeguruprofiler?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codegurureviewer AwsProvider#codegurureviewer}
    */
    readonly codegurureviewer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codepipeline AwsProvider#codepipeline}
    */
    readonly codepipeline?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codestarconnections AwsProvider#codestarconnections}
    */
    readonly codestarconnections?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#codestarnotifications AwsProvider#codestarnotifications}
    */
    readonly codestarnotifications?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cognitoidentity AwsProvider#cognitoidentity}
    */
    readonly cognitoidentity?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}
    */
    readonly cognitoidentityprovider?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cognitoidp AwsProvider#cognitoidp}
    */
    readonly cognitoidp?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#comprehend AwsProvider#comprehend}
    */
    readonly comprehend?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#computeoptimizer AwsProvider#computeoptimizer}
    */
    readonly computeoptimizer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#config AwsProvider#config}
    */
    readonly config?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#configservice AwsProvider#configservice}
    */
    readonly configservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#connect AwsProvider#connect}
    */
    readonly connect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#connectcases AwsProvider#connectcases}
    */
    readonly connectcases?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#controltower AwsProvider#controltower}
    */
    readonly controltower?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#costandusagereportservice AwsProvider#costandusagereportservice}
    */
    readonly costandusagereportservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#costexplorer AwsProvider#costexplorer}
    */
    readonly costexplorer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#costoptimizationhub AwsProvider#costoptimizationhub}
    */
    readonly costoptimizationhub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#cur AwsProvider#cur}
    */
    readonly cur?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#customerprofiles AwsProvider#customerprofiles}
    */
    readonly customerprofiles?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#databasemigration AwsProvider#databasemigration}
    */
    readonly databasemigration?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#databasemigrationservice AwsProvider#databasemigrationservice}
    */
    readonly databasemigrationservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#databrew AwsProvider#databrew}
    */
    readonly databrew?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#dataexchange AwsProvider#dataexchange}
    */
    readonly dataexchange?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#datapipeline AwsProvider#datapipeline}
    */
    readonly datapipeline?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#datasync AwsProvider#datasync}
    */
    readonly datasync?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#datazone AwsProvider#datazone}
    */
    readonly datazone?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#dax AwsProvider#dax}
    */
    readonly dax?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#deploy AwsProvider#deploy}
    */
    readonly deploy?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#detective AwsProvider#detective}
    */
    readonly detective?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#devicefarm AwsProvider#devicefarm}
    */
    readonly devicefarm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#devopsguru AwsProvider#devopsguru}
    */
    readonly devopsguru?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#directconnect AwsProvider#directconnect}
    */
    readonly directconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#directoryservice AwsProvider#directoryservice}
    */
    readonly directoryservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#dlm AwsProvider#dlm}
    */
    readonly dlm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#dms AwsProvider#dms}
    */
    readonly dms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#docdb AwsProvider#docdb}
    */
    readonly docdb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#docdbelastic AwsProvider#docdbelastic}
    */
    readonly docdbelastic?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#drs AwsProvider#drs}
    */
    readonly drs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ds AwsProvider#ds}
    */
    readonly ds?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#dynamodb AwsProvider#dynamodb}
    */
    readonly dynamodb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ec2 AwsProvider#ec2}
    */
    readonly ec2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ecr AwsProvider#ecr}
    */
    readonly ecr?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ecrpublic AwsProvider#ecrpublic}
    */
    readonly ecrpublic?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ecs AwsProvider#ecs}
    */
    readonly ecs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#efs AwsProvider#efs}
    */
    readonly efs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#eks AwsProvider#eks}
    */
    readonly eks?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticache AwsProvider#elasticache}
    */
    readonly elasticache?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}
    */
    readonly elasticbeanstalk?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticloadbalancing AwsProvider#elasticloadbalancing}
    */
    readonly elasticloadbalancing?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticloadbalancingv2 AwsProvider#elasticloadbalancingv2}
    */
    readonly elasticloadbalancingv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticsearch AwsProvider#elasticsearch}
    */
    readonly elasticsearch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elasticsearchservice AwsProvider#elasticsearchservice}
    */
    readonly elasticsearchservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elastictranscoder AwsProvider#elastictranscoder}
    */
    readonly elastictranscoder?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elb AwsProvider#elb}
    */
    readonly elb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#elbv2 AwsProvider#elbv2}
    */
    readonly elbv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#emr AwsProvider#emr}
    */
    readonly emr?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#emrcontainers AwsProvider#emrcontainers}
    */
    readonly emrcontainers?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#emrserverless AwsProvider#emrserverless}
    */
    readonly emrserverless?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#es AwsProvider#es}
    */
    readonly es?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#eventbridge AwsProvider#eventbridge}
    */
    readonly eventbridge?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#events AwsProvider#events}
    */
    readonly events?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#evidently AwsProvider#evidently}
    */
    readonly evidently?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#finspace AwsProvider#finspace}
    */
    readonly finspace?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#firehose AwsProvider#firehose}
    */
    readonly firehose?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#fis AwsProvider#fis}
    */
    readonly fis?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#fms AwsProvider#fms}
    */
    readonly fms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#fsx AwsProvider#fsx}
    */
    readonly fsx?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#gamelift AwsProvider#gamelift}
    */
    readonly gamelift?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#glacier AwsProvider#glacier}
    */
    readonly glacier?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#globalaccelerator AwsProvider#globalaccelerator}
    */
    readonly globalaccelerator?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#glue AwsProvider#glue}
    */
    readonly glue?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#gluedatabrew AwsProvider#gluedatabrew}
    */
    readonly gluedatabrew?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#grafana AwsProvider#grafana}
    */
    readonly grafana?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#greengrass AwsProvider#greengrass}
    */
    readonly greengrass?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#groundstation AwsProvider#groundstation}
    */
    readonly groundstation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#guardduty AwsProvider#guardduty}
    */
    readonly guardduty?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#healthlake AwsProvider#healthlake}
    */
    readonly healthlake?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#iam AwsProvider#iam}
    */
    readonly iam?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#identitystore AwsProvider#identitystore}
    */
    readonly identitystore?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#imagebuilder AwsProvider#imagebuilder}
    */
    readonly imagebuilder?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#inspector AwsProvider#inspector}
    */
    readonly inspector?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#inspector2 AwsProvider#inspector2}
    */
    readonly inspector2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#inspectorv2 AwsProvider#inspectorv2}
    */
    readonly inspectorv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#internetmonitor AwsProvider#internetmonitor}
    */
    readonly internetmonitor?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#invoicing AwsProvider#invoicing}
    */
    readonly invoicing?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#iot AwsProvider#iot}
    */
    readonly iot?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#iotanalytics AwsProvider#iotanalytics}
    */
    readonly iotanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#iotevents AwsProvider#iotevents}
    */
    readonly iotevents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ivs AwsProvider#ivs}
    */
    readonly ivs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ivschat AwsProvider#ivschat}
    */
    readonly ivschat?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kafka AwsProvider#kafka}
    */
    readonly kafka?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kafkaconnect AwsProvider#kafkaconnect}
    */
    readonly kafkaconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kendra AwsProvider#kendra}
    */
    readonly kendra?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#keyspaces AwsProvider#keyspaces}
    */
    readonly keyspaces?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kinesis AwsProvider#kinesis}
    */
    readonly kinesis?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kinesisanalytics AwsProvider#kinesisanalytics}
    */
    readonly kinesisanalytics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
    */
    readonly kinesisanalyticsv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kinesisvideo AwsProvider#kinesisvideo}
    */
    readonly kinesisvideo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#kms AwsProvider#kms}
    */
    readonly kms?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lakeformation AwsProvider#lakeformation}
    */
    readonly lakeformation?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lambda AwsProvider#lambda}
    */
    readonly lambda?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#launchwizard AwsProvider#launchwizard}
    */
    readonly launchwizard?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lex AwsProvider#lex}
    */
    readonly lex?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}
    */
    readonly lexmodelbuilding?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}
    */
    readonly lexmodelbuildingservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lexmodels AwsProvider#lexmodels}
    */
    readonly lexmodels?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lexmodelsv2 AwsProvider#lexmodelsv2}
    */
    readonly lexmodelsv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lexv2models AwsProvider#lexv2models}
    */
    readonly lexv2Models?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#licensemanager AwsProvider#licensemanager}
    */
    readonly licensemanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lightsail AwsProvider#lightsail}
    */
    readonly lightsail?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#location AwsProvider#location}
    */
    readonly location?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#locationservice AwsProvider#locationservice}
    */
    readonly locationservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#logs AwsProvider#logs}
    */
    readonly logs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#lookoutmetrics AwsProvider#lookoutmetrics}
    */
    readonly lookoutmetrics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#m2 AwsProvider#m2}
    */
    readonly m2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#macie2 AwsProvider#macie2}
    */
    readonly macie2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#managedgrafana AwsProvider#managedgrafana}
    */
    readonly managedgrafana?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediaconnect AwsProvider#mediaconnect}
    */
    readonly mediaconnect?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediaconvert AwsProvider#mediaconvert}
    */
    readonly mediaconvert?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#medialive AwsProvider#medialive}
    */
    readonly medialive?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediapackage AwsProvider#mediapackage}
    */
    readonly mediapackage?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediapackagev2 AwsProvider#mediapackagev2}
    */
    readonly mediapackagev2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediapackagevod AwsProvider#mediapackagevod}
    */
    readonly mediapackagevod?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mediastore AwsProvider#mediastore}
    */
    readonly mediastore?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#memorydb AwsProvider#memorydb}
    */
    readonly memorydb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mgn AwsProvider#mgn}
    */
    readonly mgn?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mq AwsProvider#mq}
    */
    readonly mq?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#msk AwsProvider#msk}
    */
    readonly msk?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#mwaa AwsProvider#mwaa}
    */
    readonly mwaa?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#neptune AwsProvider#neptune}
    */
    readonly neptune?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#neptunegraph AwsProvider#neptunegraph}
    */
    readonly neptunegraph?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#networkfirewall AwsProvider#networkfirewall}
    */
    readonly networkfirewall?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#networkmanager AwsProvider#networkmanager}
    */
    readonly networkmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#networkmonitor AwsProvider#networkmonitor}
    */
    readonly networkmonitor?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#oam AwsProvider#oam}
    */
    readonly oam?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#opensearch AwsProvider#opensearch}
    */
    readonly opensearch?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#opensearchingestion AwsProvider#opensearchingestion}
    */
    readonly opensearchingestion?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#opensearchserverless AwsProvider#opensearchserverless}
    */
    readonly opensearchserverless?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#opensearchservice AwsProvider#opensearchservice}
    */
    readonly opensearchservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#opsworks AwsProvider#opsworks}
    */
    readonly opsworks?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#organizations AwsProvider#organizations}
    */
    readonly organizations?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#osis AwsProvider#osis}
    */
    readonly osis?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#outposts AwsProvider#outposts}
    */
    readonly outposts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#paymentcryptography AwsProvider#paymentcryptography}
    */
    readonly paymentcryptography?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pcaconnectorad AwsProvider#pcaconnectorad}
    */
    readonly pcaconnectorad?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pcs AwsProvider#pcs}
    */
    readonly pcs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pinpoint AwsProvider#pinpoint}
    */
    readonly pinpoint?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pinpointsmsvoicev2 AwsProvider#pinpointsmsvoicev2}
    */
    readonly pinpointsmsvoicev2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pipes AwsProvider#pipes}
    */
    readonly pipes?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#polly AwsProvider#polly}
    */
    readonly polly?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#pricing AwsProvider#pricing}
    */
    readonly pricing?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#prometheus AwsProvider#prometheus}
    */
    readonly prometheus?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#prometheusservice AwsProvider#prometheusservice}
    */
    readonly prometheusservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#qbusiness AwsProvider#qbusiness}
    */
    readonly qbusiness?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#qldb AwsProvider#qldb}
    */
    readonly qldb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#quicksight AwsProvider#quicksight}
    */
    readonly quicksight?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ram AwsProvider#ram}
    */
    readonly ram?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#rbin AwsProvider#rbin}
    */
    readonly rbin?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#rds AwsProvider#rds}
    */
    readonly rds?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#recyclebin AwsProvider#recyclebin}
    */
    readonly recyclebin?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#redshift AwsProvider#redshift}
    */
    readonly redshift?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#redshiftdata AwsProvider#redshiftdata}
    */
    readonly redshiftdata?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#redshiftdataapiservice AwsProvider#redshiftdataapiservice}
    */
    readonly redshiftdataapiservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#redshiftserverless AwsProvider#redshiftserverless}
    */
    readonly redshiftserverless?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#rekognition AwsProvider#rekognition}
    */
    readonly rekognition?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#resiliencehub AwsProvider#resiliencehub}
    */
    readonly resiliencehub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#resourceexplorer2 AwsProvider#resourceexplorer2}
    */
    readonly resourceexplorer2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#resourcegroups AwsProvider#resourcegroups}
    */
    readonly resourcegroups?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}
    */
    readonly resourcegroupstagging?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
    */
    readonly resourcegroupstaggingapi?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#rolesanywhere AwsProvider#rolesanywhere}
    */
    readonly rolesanywhere?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53 AwsProvider#route53}
    */
    readonly route53?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53domains AwsProvider#route53domains}
    */
    readonly route53Domains?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53profiles AwsProvider#route53profiles}
    */
    readonly route53Profiles?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}
    */
    readonly route53Recoverycontrolconfig?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}
    */
    readonly route53Recoveryreadiness?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#route53resolver AwsProvider#route53resolver}
    */
    readonly route53Resolver?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#rum AwsProvider#rum}
    */
    readonly rum?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3 AwsProvider#s3}
    */
    readonly s3?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3api AwsProvider#s3api}
    */
    readonly s3Api?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3control AwsProvider#s3control}
    */
    readonly s3Control?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3outposts AwsProvider#s3outposts}
    */
    readonly s3Outposts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#s3tables AwsProvider#s3tables}
    */
    readonly s3Tables?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sagemaker AwsProvider#sagemaker}
    */
    readonly sagemaker?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#scheduler AwsProvider#scheduler}
    */
    readonly scheduler?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#schemas AwsProvider#schemas}
    */
    readonly schemas?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sdb AwsProvider#sdb}
    */
    readonly sdb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#secretsmanager AwsProvider#secretsmanager}
    */
    readonly secretsmanager?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#securityhub AwsProvider#securityhub}
    */
    readonly securityhub?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#securitylake AwsProvider#securitylake}
    */
    readonly securitylake?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}
    */
    readonly serverlessapplicationrepository?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#serverlessapprepo AwsProvider#serverlessapprepo}
    */
    readonly serverlessapprepo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#serverlessrepo AwsProvider#serverlessrepo}
    */
    readonly serverlessrepo?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#servicecatalog AwsProvider#servicecatalog}
    */
    readonly servicecatalog?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#servicecatalogappregistry AwsProvider#servicecatalogappregistry}
    */
    readonly servicecatalogappregistry?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#servicediscovery AwsProvider#servicediscovery}
    */
    readonly servicediscovery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#servicequotas AwsProvider#servicequotas}
    */
    readonly servicequotas?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ses AwsProvider#ses}
    */
    readonly ses?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sesv2 AwsProvider#sesv2}
    */
    readonly sesv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sfn AwsProvider#sfn}
    */
    readonly sfn?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#shield AwsProvider#shield}
    */
    readonly shield?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#signer AwsProvider#signer}
    */
    readonly signer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#simpledb AwsProvider#simpledb}
    */
    readonly simpledb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sns AwsProvider#sns}
    */
    readonly sns?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sqs AwsProvider#sqs}
    */
    readonly sqs?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssm AwsProvider#ssm}
    */
    readonly ssm?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssmcontacts AwsProvider#ssmcontacts}
    */
    readonly ssmcontacts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssmincidents AwsProvider#ssmincidents}
    */
    readonly ssmincidents?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssmquicksetup AwsProvider#ssmquicksetup}
    */
    readonly ssmquicksetup?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssmsap AwsProvider#ssmsap}
    */
    readonly ssmsap?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sso AwsProvider#sso}
    */
    readonly sso?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#ssoadmin AwsProvider#ssoadmin}
    */
    readonly ssoadmin?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#stepfunctions AwsProvider#stepfunctions}
    */
    readonly stepfunctions?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#storagegateway AwsProvider#storagegateway}
    */
    readonly storagegateway?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#sts AwsProvider#sts}
    */
    readonly sts?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#swf AwsProvider#swf}
    */
    readonly swf?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#synthetics AwsProvider#synthetics}
    */
    readonly synthetics?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#taxsettings AwsProvider#taxsettings}
    */
    readonly taxsettings?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#timestreaminfluxdb AwsProvider#timestreaminfluxdb}
    */
    readonly timestreaminfluxdb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#timestreamquery AwsProvider#timestreamquery}
    */
    readonly timestreamquery?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#timestreamwrite AwsProvider#timestreamwrite}
    */
    readonly timestreamwrite?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#transcribe AwsProvider#transcribe}
    */
    readonly transcribe?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#transcribeservice AwsProvider#transcribeservice}
    */
    readonly transcribeservice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#transfer AwsProvider#transfer}
    */
    readonly transfer?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#verifiedpermissions AwsProvider#verifiedpermissions}
    */
    readonly verifiedpermissions?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#vpclattice AwsProvider#vpclattice}
    */
    readonly vpclattice?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#waf AwsProvider#waf}
    */
    readonly waf?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#wafregional AwsProvider#wafregional}
    */
    readonly wafregional?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#wafv2 AwsProvider#wafv2}
    */
    readonly wafv2?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#wellarchitected AwsProvider#wellarchitected}
    */
    readonly wellarchitected?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#worklink AwsProvider#worklink}
    */
    readonly worklink?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#workspaces AwsProvider#workspaces}
    */
    readonly workspaces?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#workspacesweb AwsProvider#workspacesweb}
    */
    readonly workspacesweb?: string;
    /**
    * Use this to override the default service endpoint URL
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#xray AwsProvider#xray}
    */
    readonly xray?: string;
}
export declare function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any;
export declare function awsProviderEndpointsToHclTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any;
export interface AwsProviderIgnoreTags {
    /**
    * Resource tag key prefixes to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEY_PREFIXES environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#key_prefixes AwsProvider#key_prefixes}
    */
    readonly keyPrefixes?: string[];
    /**
    * Resource tag keys to ignore across all resources. Can also be configured with the TF_AWS_IGNORE_TAGS_KEYS environment variable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#keys AwsProvider#keys}
    */
    readonly keys?: string[];
}
export declare function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags | cdktf.IResolvable): any;
export declare function awsProviderIgnoreTagsToHclTerraform(struct?: AwsProviderIgnoreTags | cdktf.IResolvable): any;
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs aws}
*/
export declare class AwsProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType = "aws";
    /**
    * Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AwsProvider to import
    * @param importFromId The id of the existing AwsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AwsProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs aws} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AwsProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AwsProviderConfig);
    private _accessKey?;
    get accessKey(): string | undefined;
    set accessKey(value: string | undefined);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _allowedAccountIds?;
    get allowedAccountIds(): string[] | undefined;
    set allowedAccountIds(value: string[] | undefined);
    resetAllowedAccountIds(): void;
    get allowedAccountIdsInput(): string[] | undefined;
    private _customCaBundle?;
    get customCaBundle(): string | undefined;
    set customCaBundle(value: string | undefined);
    resetCustomCaBundle(): void;
    get customCaBundleInput(): string | undefined;
    private _ec2MetadataServiceEndpoint?;
    get ec2MetadataServiceEndpoint(): string | undefined;
    set ec2MetadataServiceEndpoint(value: string | undefined);
    resetEc2MetadataServiceEndpoint(): void;
    get ec2MetadataServiceEndpointInput(): string | undefined;
    private _ec2MetadataServiceEndpointMode?;
    get ec2MetadataServiceEndpointMode(): string | undefined;
    set ec2MetadataServiceEndpointMode(value: string | undefined);
    resetEc2MetadataServiceEndpointMode(): void;
    get ec2MetadataServiceEndpointModeInput(): string | undefined;
    private _forbiddenAccountIds?;
    get forbiddenAccountIds(): string[] | undefined;
    set forbiddenAccountIds(value: string[] | undefined);
    resetForbiddenAccountIds(): void;
    get forbiddenAccountIdsInput(): string[] | undefined;
    private _httpProxy?;
    get httpProxy(): string | undefined;
    set httpProxy(value: string | undefined);
    resetHttpProxy(): void;
    get httpProxyInput(): string | undefined;
    private _httpsProxy?;
    get httpsProxy(): string | undefined;
    set httpsProxy(value: string | undefined);
    resetHttpsProxy(): void;
    get httpsProxyInput(): string | undefined;
    private _insecure?;
    get insecure(): boolean | cdktf.IResolvable | undefined;
    set insecure(value: boolean | cdktf.IResolvable | undefined);
    resetInsecure(): void;
    get insecureInput(): boolean | cdktf.IResolvable | undefined;
    private _maxRetries?;
    get maxRetries(): number | undefined;
    set maxRetries(value: number | undefined);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _noProxy?;
    get noProxy(): string | undefined;
    set noProxy(value: string | undefined);
    resetNoProxy(): void;
    get noProxyInput(): string | undefined;
    private _profile?;
    get profile(): string | undefined;
    set profile(value: string | undefined);
    resetProfile(): void;
    get profileInput(): string | undefined;
    private _region?;
    get region(): string | undefined;
    set region(value: string | undefined);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _retryMode?;
    get retryMode(): string | undefined;
    set retryMode(value: string | undefined);
    resetRetryMode(): void;
    get retryModeInput(): string | undefined;
    private _s3UsEast1RegionalEndpoint?;
    get s3UsEast1RegionalEndpoint(): string | undefined;
    set s3UsEast1RegionalEndpoint(value: string | undefined);
    resetS3UsEast1RegionalEndpoint(): void;
    get s3UsEast1RegionalEndpointInput(): string | undefined;
    private _s3UsePathStyle?;
    get s3UsePathStyle(): boolean | cdktf.IResolvable | undefined;
    set s3UsePathStyle(value: boolean | cdktf.IResolvable | undefined);
    resetS3UsePathStyle(): void;
    get s3UsePathStyleInput(): boolean | cdktf.IResolvable | undefined;
    private _secretKey?;
    get secretKey(): string | undefined;
    set secretKey(value: string | undefined);
    resetSecretKey(): void;
    get secretKeyInput(): string | undefined;
    private _sharedConfigFiles?;
    get sharedConfigFiles(): string[] | undefined;
    set sharedConfigFiles(value: string[] | undefined);
    resetSharedConfigFiles(): void;
    get sharedConfigFilesInput(): string[] | undefined;
    private _sharedCredentialsFiles?;
    get sharedCredentialsFiles(): string[] | undefined;
    set sharedCredentialsFiles(value: string[] | undefined);
    resetSharedCredentialsFiles(): void;
    get sharedCredentialsFilesInput(): string[] | undefined;
    private _skipCredentialsValidation?;
    get skipCredentialsValidation(): boolean | cdktf.IResolvable | undefined;
    set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined);
    resetSkipCredentialsValidation(): void;
    get skipCredentialsValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _skipMetadataApiCheck?;
    get skipMetadataApiCheck(): string | undefined;
    set skipMetadataApiCheck(value: string | undefined);
    resetSkipMetadataApiCheck(): void;
    get skipMetadataApiCheckInput(): string | undefined;
    private _skipRegionValidation?;
    get skipRegionValidation(): boolean | cdktf.IResolvable | undefined;
    set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined);
    resetSkipRegionValidation(): void;
    get skipRegionValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _skipRequestingAccountId?;
    get skipRequestingAccountId(): boolean | cdktf.IResolvable | undefined;
    set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined);
    resetSkipRequestingAccountId(): void;
    get skipRequestingAccountIdInput(): boolean | cdktf.IResolvable | undefined;
    private _stsRegion?;
    get stsRegion(): string | undefined;
    set stsRegion(value: string | undefined);
    resetStsRegion(): void;
    get stsRegionInput(): string | undefined;
    private _token?;
    get token(): string | undefined;
    set token(value: string | undefined);
    resetToken(): void;
    get tokenInput(): string | undefined;
    private _tokenBucketRateLimiterCapacity?;
    get tokenBucketRateLimiterCapacity(): number | undefined;
    set tokenBucketRateLimiterCapacity(value: number | undefined);
    resetTokenBucketRateLimiterCapacity(): void;
    get tokenBucketRateLimiterCapacityInput(): number | undefined;
    private _useDualstackEndpoint?;
    get useDualstackEndpoint(): boolean | cdktf.IResolvable | undefined;
    set useDualstackEndpoint(value: boolean | cdktf.IResolvable | undefined);
    resetUseDualstackEndpoint(): void;
    get useDualstackEndpointInput(): boolean | cdktf.IResolvable | undefined;
    private _useFipsEndpoint?;
    get useFipsEndpoint(): boolean | cdktf.IResolvable | undefined;
    set useFipsEndpoint(value: boolean | cdktf.IResolvable | undefined);
    resetUseFipsEndpoint(): void;
    get useFipsEndpointInput(): boolean | cdktf.IResolvable | undefined;
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _assumeRole?;
    get assumeRole(): AwsProviderAssumeRole[] | cdktf.IResolvable | undefined;
    set assumeRole(value: AwsProviderAssumeRole[] | cdktf.IResolvable | undefined);
    resetAssumeRole(): void;
    get assumeRoleInput(): cdktf.IResolvable | AwsProviderAssumeRole[] | undefined;
    private _assumeRoleWithWebIdentity?;
    get assumeRoleWithWebIdentity(): AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable | undefined;
    set assumeRoleWithWebIdentity(value: AwsProviderAssumeRoleWithWebIdentity[] | cdktf.IResolvable | undefined);
    resetAssumeRoleWithWebIdentity(): void;
    get assumeRoleWithWebIdentityInput(): cdktf.IResolvable | AwsProviderAssumeRoleWithWebIdentity[] | undefined;
    private _defaultTags?;
    get defaultTags(): AwsProviderDefaultTags[] | cdktf.IResolvable | undefined;
    set defaultTags(value: AwsProviderDefaultTags[] | cdktf.IResolvable | undefined);
    resetDefaultTags(): void;
    get defaultTagsInput(): cdktf.IResolvable | AwsProviderDefaultTags[] | undefined;
    private _endpoints?;
    get endpoints(): AwsProviderEndpoints[] | cdktf.IResolvable | undefined;
    set endpoints(value: AwsProviderEndpoints[] | cdktf.IResolvable | undefined);
    resetEndpoints(): void;
    get endpointsInput(): cdktf.IResolvable | AwsProviderEndpoints[] | undefined;
    private _ignoreTags?;
    get ignoreTags(): AwsProviderIgnoreTags[] | cdktf.IResolvable | undefined;
    set ignoreTags(value: AwsProviderIgnoreTags[] | cdktf.IResolvable | undefined);
    resetIgnoreTags(): void;
    get ignoreTagsInput(): cdktf.IResolvable | AwsProviderIgnoreTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
