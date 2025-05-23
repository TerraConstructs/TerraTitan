/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#aliases CloudfrontDistribution#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#comment CloudfrontDistribution#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#continuous_deployment_policy_id CloudfrontDistribution#continuous_deployment_policy_id}
    */
    readonly continuousDeploymentPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}
    */
    readonly defaultRootObject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#http_version CloudfrontDistribution#http_version}
    */
    readonly httpVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#id CloudfrontDistribution#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}
    */
    readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#price_class CloudfrontDistribution#price_class}
    */
    readonly priceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}
    */
    readonly retainOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#staging CloudfrontDistribution#staging}
    */
    readonly staging?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#tags CloudfrontDistribution#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}
    */
    readonly waitForDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}
    */
    readonly webAclId?: string;
    /**
    * custom_error_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}
    */
    readonly customErrorResponse?: CloudfrontDistributionCustomErrorResponse[] | cdktf.IResolvable;
    /**
    * default_cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}
    */
    readonly defaultCacheBehavior: CloudfrontDistributionDefaultCacheBehavior;
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}
    */
    readonly loggingConfig?: CloudfrontDistributionLoggingConfig;
    /**
    * ordered_cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}
    */
    readonly orderedCacheBehavior?: CloudfrontDistributionOrderedCacheBehavior[] | cdktf.IResolvable;
    /**
    * origin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin CloudfrontDistribution#origin}
    */
    readonly origin: CloudfrontDistributionOrigin[] | cdktf.IResolvable;
    /**
    * origin_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}
    */
    readonly originGroup?: CloudfrontDistributionOriginGroup[] | cdktf.IResolvable;
    /**
    * restrictions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}
    */
    readonly restrictions: CloudfrontDistributionRestrictions;
    /**
    * viewer_certificate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}
    */
    readonly viewerCertificate: CloudfrontDistributionViewerCertificate;
}
export interface CloudfrontDistributionTrustedKeyGroupsItems {
}
export declare function cloudfrontDistributionTrustedKeyGroupsItemsToTerraform(struct?: CloudfrontDistributionTrustedKeyGroupsItems): any;
export declare function cloudfrontDistributionTrustedKeyGroupsItemsToHclTerraform(struct?: CloudfrontDistributionTrustedKeyGroupsItems): any;
export declare class CloudfrontDistributionTrustedKeyGroupsItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionTrustedKeyGroupsItems | undefined;
    set internalValue(value: CloudfrontDistributionTrustedKeyGroupsItems | undefined);
    get keyGroupId(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedKeyGroupsItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionTrustedKeyGroupsItemsOutputReference;
}
export interface CloudfrontDistributionTrustedKeyGroups {
}
export declare function cloudfrontDistributionTrustedKeyGroupsToTerraform(struct?: CloudfrontDistributionTrustedKeyGroups): any;
export declare function cloudfrontDistributionTrustedKeyGroupsToHclTerraform(struct?: CloudfrontDistributionTrustedKeyGroups): any;
export declare class CloudfrontDistributionTrustedKeyGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionTrustedKeyGroups | undefined;
    set internalValue(value: CloudfrontDistributionTrustedKeyGroups | undefined);
    get enabled(): cdktf.IResolvable;
    private _items;
    get items(): CloudfrontDistributionTrustedKeyGroupsItemsList;
}
export declare class CloudfrontDistributionTrustedKeyGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionTrustedKeyGroupsOutputReference;
}
export interface CloudfrontDistributionTrustedSignersItems {
}
export declare function cloudfrontDistributionTrustedSignersItemsToTerraform(struct?: CloudfrontDistributionTrustedSignersItems): any;
export declare function cloudfrontDistributionTrustedSignersItemsToHclTerraform(struct?: CloudfrontDistributionTrustedSignersItems): any;
export declare class CloudfrontDistributionTrustedSignersItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionTrustedSignersItems | undefined;
    set internalValue(value: CloudfrontDistributionTrustedSignersItems | undefined);
    get awsAccountNumber(): string;
    get keyPairIds(): string[];
}
export declare class CloudfrontDistributionTrustedSignersItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionTrustedSignersItemsOutputReference;
}
export interface CloudfrontDistributionTrustedSigners {
}
export declare function cloudfrontDistributionTrustedSignersToTerraform(struct?: CloudfrontDistributionTrustedSigners): any;
export declare function cloudfrontDistributionTrustedSignersToHclTerraform(struct?: CloudfrontDistributionTrustedSigners): any;
export declare class CloudfrontDistributionTrustedSignersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionTrustedSigners | undefined;
    set internalValue(value: CloudfrontDistributionTrustedSigners | undefined);
    get enabled(): cdktf.IResolvable;
    private _items;
    get items(): CloudfrontDistributionTrustedSignersItemsList;
}
export declare class CloudfrontDistributionTrustedSignersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionTrustedSignersOutputReference;
}
export interface CloudfrontDistributionCustomErrorResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}
    */
    readonly errorCachingMinTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#error_code CloudfrontDistribution#error_code}
    */
    readonly errorCode: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#response_code CloudfrontDistribution#response_code}
    */
    readonly responseCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}
    */
    readonly responsePagePath?: string;
}
export declare function cloudfrontDistributionCustomErrorResponseToTerraform(struct?: CloudfrontDistributionCustomErrorResponse | cdktf.IResolvable): any;
export declare function cloudfrontDistributionCustomErrorResponseToHclTerraform(struct?: CloudfrontDistributionCustomErrorResponse | cdktf.IResolvable): any;
export declare class CloudfrontDistributionCustomErrorResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionCustomErrorResponse | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionCustomErrorResponse | cdktf.IResolvable | undefined);
    private _errorCachingMinTtl?;
    get errorCachingMinTtl(): number;
    set errorCachingMinTtl(value: number);
    resetErrorCachingMinTtl(): void;
    get errorCachingMinTtlInput(): number | undefined;
    private _errorCode?;
    get errorCode(): number;
    set errorCode(value: number);
    get errorCodeInput(): number | undefined;
    private _responseCode?;
    get responseCode(): number;
    set responseCode(value: number);
    resetResponseCode(): void;
    get responseCodeInput(): number | undefined;
    private _responsePagePath?;
    get responsePagePath(): string;
    set responsePagePath(value: string);
    resetResponsePagePath(): void;
    get responsePagePathInput(): string | undefined;
}
export declare class CloudfrontDistributionCustomErrorResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionCustomErrorResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionCustomErrorResponseOutputReference;
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
}
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined);
    private _forward?;
    get forward(): string;
    set forward(value: string);
    get forwardInput(): string | undefined;
    private _whitelistedNames?;
    get whitelistedNames(): string[];
    set whitelistedNames(value: string[]);
    resetWhitelistedNames(): void;
    get whitelistedNamesInput(): string[] | undefined;
}
export interface CloudfrontDistributionDefaultCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorForwardedValuesToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionDefaultCacheBehaviorForwardedValues): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined);
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[] | undefined;
    private _queryString?;
    get queryString(): boolean | cdktf.IResolvable;
    set queryString(value: boolean | cdktf.IResolvable);
    get queryStringInput(): boolean | cdktf.IResolvable | undefined;
    private _queryStringCacheKeys?;
    get queryStringCacheKeys(): string[];
    set queryStringCacheKeys(value: string[]);
    resetQueryStringCacheKeys(): void;
    get queryStringCacheKeysInput(): string[] | undefined;
    private _cookies;
    get cookies(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference;
    putCookies(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies): void;
    get cookiesInput(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies | undefined;
}
export interface CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined);
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
}
export declare class CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference;
}
export interface CloudfrontDistributionDefaultCacheBehaviorGrpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionDefaultCacheBehaviorGrpcConfig): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorGrpcConfigToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionDefaultCacheBehaviorGrpcConfig): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorGrpcConfig | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined);
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _includeBody?;
    get includeBody(): boolean | cdktf.IResolvable;
    set includeBody(value: boolean | cdktf.IResolvable);
    resetIncludeBody(): void;
    get includeBodyInput(): boolean | cdktf.IResolvable | undefined;
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
}
export declare class CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference;
}
export interface CloudfrontDistributionDefaultCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
    */
    readonly responseHeadersPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionDefaultCacheBehaviorForwardedValues;
    /**
    * function_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
    /**
    * grpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#grpc_config CloudfrontDistribution#grpc_config}
    */
    readonly grpcConfig?: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig;
    /**
    * lambda_function_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
}
export declare function cloudfrontDistributionDefaultCacheBehaviorToTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any;
export declare function cloudfrontDistributionDefaultCacheBehaviorToHclTerraform(struct?: CloudfrontDistributionDefaultCacheBehaviorOutputReference | CloudfrontDistributionDefaultCacheBehavior): any;
export declare class CloudfrontDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionDefaultCacheBehavior | undefined;
    set internalValue(value: CloudfrontDistributionDefaultCacheBehavior | undefined);
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    get allowedMethodsInput(): string[] | undefined;
    private _cachePolicyId?;
    get cachePolicyId(): string;
    set cachePolicyId(value: string);
    resetCachePolicyId(): void;
    get cachePolicyIdInput(): string | undefined;
    private _cachedMethods?;
    get cachedMethods(): string[];
    set cachedMethods(value: string[]);
    get cachedMethodsInput(): string[] | undefined;
    private _compress?;
    get compress(): boolean | cdktf.IResolvable;
    set compress(value: boolean | cdktf.IResolvable);
    resetCompress(): void;
    get compressInput(): boolean | cdktf.IResolvable | undefined;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number | undefined;
    private _fieldLevelEncryptionId?;
    get fieldLevelEncryptionId(): string;
    set fieldLevelEncryptionId(value: string);
    resetFieldLevelEncryptionId(): void;
    get fieldLevelEncryptionIdInput(): string | undefined;
    private _maxTtl?;
    get maxTtl(): number;
    set maxTtl(value: number);
    resetMaxTtl(): void;
    get maxTtlInput(): number | undefined;
    private _minTtl?;
    get minTtl(): number;
    set minTtl(value: number);
    resetMinTtl(): void;
    get minTtlInput(): number | undefined;
    private _originRequestPolicyId?;
    get originRequestPolicyId(): string;
    set originRequestPolicyId(value: string);
    resetOriginRequestPolicyId(): void;
    get originRequestPolicyIdInput(): string | undefined;
    private _realtimeLogConfigArn?;
    get realtimeLogConfigArn(): string;
    set realtimeLogConfigArn(value: string);
    resetRealtimeLogConfigArn(): void;
    get realtimeLogConfigArnInput(): string | undefined;
    private _responseHeadersPolicyId?;
    get responseHeadersPolicyId(): string;
    set responseHeadersPolicyId(value: string);
    resetResponseHeadersPolicyId(): void;
    get responseHeadersPolicyIdInput(): string | undefined;
    private _smoothStreaming?;
    get smoothStreaming(): boolean | cdktf.IResolvable;
    set smoothStreaming(value: boolean | cdktf.IResolvable);
    resetSmoothStreaming(): void;
    get smoothStreamingInput(): boolean | cdktf.IResolvable | undefined;
    private _targetOriginId?;
    get targetOriginId(): string;
    set targetOriginId(value: string);
    get targetOriginIdInput(): string | undefined;
    private _trustedKeyGroups?;
    get trustedKeyGroups(): string[];
    set trustedKeyGroups(value: string[]);
    resetTrustedKeyGroups(): void;
    get trustedKeyGroupsInput(): string[] | undefined;
    private _trustedSigners?;
    get trustedSigners(): string[];
    set trustedSigners(value: string[]);
    resetTrustedSigners(): void;
    get trustedSignersInput(): string[] | undefined;
    private _viewerProtocolPolicy?;
    get viewerProtocolPolicy(): string;
    set viewerProtocolPolicy(value: string);
    get viewerProtocolPolicyInput(): string | undefined;
    private _forwardedValues;
    get forwardedValues(): CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference;
    putForwardedValues(value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues): void;
    resetForwardedValues(): void;
    get forwardedValuesInput(): CloudfrontDistributionDefaultCacheBehaviorForwardedValues | undefined;
    private _functionAssociation;
    get functionAssociation(): CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList;
    putFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | cdktf.IResolvable): void;
    resetFunctionAssociation(): void;
    get functionAssociationInput(): cdktf.IResolvable | CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation[] | undefined;
    private _grpcConfig;
    get grpcConfig(): CloudfrontDistributionDefaultCacheBehaviorGrpcConfigOutputReference;
    putGrpcConfig(value: CloudfrontDistributionDefaultCacheBehaviorGrpcConfig): void;
    resetGrpcConfig(): void;
    get grpcConfigInput(): CloudfrontDistributionDefaultCacheBehaviorGrpcConfig | undefined;
    private _lambdaFunctionAssociation;
    get lambdaFunctionAssociation(): CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList;
    putLambdaFunctionAssociation(value: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable): void;
    resetLambdaFunctionAssociation(): void;
    get lambdaFunctionAssociationInput(): cdktf.IResolvable | CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation[] | undefined;
}
export interface CloudfrontDistributionLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#bucket CloudfrontDistribution#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}
    */
    readonly includeCookies?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#prefix CloudfrontDistribution#prefix}
    */
    readonly prefix?: string;
}
export declare function cloudfrontDistributionLoggingConfigToTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any;
export declare function cloudfrontDistributionLoggingConfigToHclTerraform(struct?: CloudfrontDistributionLoggingConfigOutputReference | CloudfrontDistributionLoggingConfig): any;
export declare class CloudfrontDistributionLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionLoggingConfig | undefined;
    set internalValue(value: CloudfrontDistributionLoggingConfig | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _includeCookies?;
    get includeCookies(): boolean | cdktf.IResolvable;
    set includeCookies(value: boolean | cdktf.IResolvable);
    resetIncludeCookies(): void;
    get includeCookiesInput(): boolean | cdktf.IResolvable | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#forward CloudfrontDistribution#forward}
    */
    readonly forward: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}
    */
    readonly whitelistedNames?: string[];
}
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined);
    private _forward?;
    get forward(): string;
    set forward(value: string);
    get forwardInput(): string | undefined;
    private _whitelistedNames?;
    get whitelistedNames(): string[];
    set whitelistedNames(value: string[]);
    resetWhitelistedNames(): void;
    get whitelistedNamesInput(): string[] | undefined;
}
export interface CloudfrontDistributionOrderedCacheBehaviorForwardedValues {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#headers CloudfrontDistribution#headers}
    */
    readonly headers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#query_string CloudfrontDistribution#query_string}
    */
    readonly queryString: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}
    */
    readonly queryStringCacheKeys?: string[];
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cookies CloudfrontDistribution#cookies}
    */
    readonly cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorForwardedValuesToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference | CloudfrontDistributionOrderedCacheBehaviorForwardedValues): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined);
    private _headers?;
    get headers(): string[];
    set headers(value: string[]);
    resetHeaders(): void;
    get headersInput(): string[] | undefined;
    private _queryString?;
    get queryString(): boolean | cdktf.IResolvable;
    set queryString(value: boolean | cdktf.IResolvable);
    get queryStringInput(): boolean | cdktf.IResolvable | undefined;
    private _queryStringCacheKeys?;
    get queryStringCacheKeys(): string[];
    set queryStringCacheKeys(value: string[]);
    resetQueryStringCacheKeys(): void;
    get queryStringCacheKeysInput(): string[] | undefined;
    private _cookies;
    get cookies(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference;
    putCookies(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies): void;
    get cookiesInput(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies | undefined;
}
export interface CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}
    */
    readonly functionArn: string;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation | cdktf.IResolvable | undefined);
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
}
export declare class CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference;
}
export interface CloudfrontDistributionOrderedCacheBehaviorGrpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionOrderedCacheBehaviorGrpcConfig): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorGrpcConfigToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference | CloudfrontDistributionOrderedCacheBehaviorGrpcConfig): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorGrpcConfig | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#event_type CloudfrontDistribution#event_type}
    */
    readonly eventType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#include_body CloudfrontDistribution#include_body}
    */
    readonly includeBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}
    */
    readonly lambdaArn: string;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation | cdktf.IResolvable | undefined);
    private _eventType?;
    get eventType(): string;
    set eventType(value: string);
    get eventTypeInput(): string | undefined;
    private _includeBody?;
    get includeBody(): boolean | cdktf.IResolvable;
    set includeBody(value: boolean | cdktf.IResolvable);
    resetIncludeBody(): void;
    get includeBodyInput(): boolean | cdktf.IResolvable | undefined;
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string | undefined;
}
export declare class CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference;
}
export interface CloudfrontDistributionOrderedCacheBehavior {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}
    */
    readonly allowedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}
    */
    readonly cachePolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}
    */
    readonly cachedMethods: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#compress CloudfrontDistribution#compress}
    */
    readonly compress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}
    */
    readonly fieldLevelEncryptionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}
    */
    readonly originRequestPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}
    */
    readonly pathPattern: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}
    */
    readonly realtimeLogConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}
    */
    readonly responseHeadersPolicyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}
    */
    readonly smoothStreaming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}
    */
    readonly targetOriginId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}
    */
    readonly trustedKeyGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}
    */
    readonly trustedSigners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}
    */
    readonly viewerProtocolPolicy: string;
    /**
    * forwarded_values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}
    */
    readonly forwardedValues?: CloudfrontDistributionOrderedCacheBehaviorForwardedValues;
    /**
    * function_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#function_association CloudfrontDistribution#function_association}
    */
    readonly functionAssociation?: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktf.IResolvable;
    /**
    * grpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#grpc_config CloudfrontDistribution#grpc_config}
    */
    readonly grpcConfig?: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig;
    /**
    * lambda_function_association block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}
    */
    readonly lambdaFunctionAssociation?: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable;
}
export declare function cloudfrontDistributionOrderedCacheBehaviorToTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOrderedCacheBehaviorToHclTerraform(struct?: CloudfrontDistributionOrderedCacheBehavior | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOrderedCacheBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOrderedCacheBehavior | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOrderedCacheBehavior | cdktf.IResolvable | undefined);
    private _allowedMethods?;
    get allowedMethods(): string[];
    set allowedMethods(value: string[]);
    get allowedMethodsInput(): string[] | undefined;
    private _cachePolicyId?;
    get cachePolicyId(): string;
    set cachePolicyId(value: string);
    resetCachePolicyId(): void;
    get cachePolicyIdInput(): string | undefined;
    private _cachedMethods?;
    get cachedMethods(): string[];
    set cachedMethods(value: string[]);
    get cachedMethodsInput(): string[] | undefined;
    private _compress?;
    get compress(): boolean | cdktf.IResolvable;
    set compress(value: boolean | cdktf.IResolvable);
    resetCompress(): void;
    get compressInput(): boolean | cdktf.IResolvable | undefined;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number | undefined;
    private _fieldLevelEncryptionId?;
    get fieldLevelEncryptionId(): string;
    set fieldLevelEncryptionId(value: string);
    resetFieldLevelEncryptionId(): void;
    get fieldLevelEncryptionIdInput(): string | undefined;
    private _maxTtl?;
    get maxTtl(): number;
    set maxTtl(value: number);
    resetMaxTtl(): void;
    get maxTtlInput(): number | undefined;
    private _minTtl?;
    get minTtl(): number;
    set minTtl(value: number);
    resetMinTtl(): void;
    get minTtlInput(): number | undefined;
    private _originRequestPolicyId?;
    get originRequestPolicyId(): string;
    set originRequestPolicyId(value: string);
    resetOriginRequestPolicyId(): void;
    get originRequestPolicyIdInput(): string | undefined;
    private _pathPattern?;
    get pathPattern(): string;
    set pathPattern(value: string);
    get pathPatternInput(): string | undefined;
    private _realtimeLogConfigArn?;
    get realtimeLogConfigArn(): string;
    set realtimeLogConfigArn(value: string);
    resetRealtimeLogConfigArn(): void;
    get realtimeLogConfigArnInput(): string | undefined;
    private _responseHeadersPolicyId?;
    get responseHeadersPolicyId(): string;
    set responseHeadersPolicyId(value: string);
    resetResponseHeadersPolicyId(): void;
    get responseHeadersPolicyIdInput(): string | undefined;
    private _smoothStreaming?;
    get smoothStreaming(): boolean | cdktf.IResolvable;
    set smoothStreaming(value: boolean | cdktf.IResolvable);
    resetSmoothStreaming(): void;
    get smoothStreamingInput(): boolean | cdktf.IResolvable | undefined;
    private _targetOriginId?;
    get targetOriginId(): string;
    set targetOriginId(value: string);
    get targetOriginIdInput(): string | undefined;
    private _trustedKeyGroups?;
    get trustedKeyGroups(): string[];
    set trustedKeyGroups(value: string[]);
    resetTrustedKeyGroups(): void;
    get trustedKeyGroupsInput(): string[] | undefined;
    private _trustedSigners?;
    get trustedSigners(): string[];
    set trustedSigners(value: string[]);
    resetTrustedSigners(): void;
    get trustedSignersInput(): string[] | undefined;
    private _viewerProtocolPolicy?;
    get viewerProtocolPolicy(): string;
    set viewerProtocolPolicy(value: string);
    get viewerProtocolPolicyInput(): string | undefined;
    private _forwardedValues;
    get forwardedValues(): CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference;
    putForwardedValues(value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues): void;
    resetForwardedValues(): void;
    get forwardedValuesInput(): CloudfrontDistributionOrderedCacheBehaviorForwardedValues | undefined;
    private _functionAssociation;
    get functionAssociation(): CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList;
    putFunctionAssociation(value: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | cdktf.IResolvable): void;
    resetFunctionAssociation(): void;
    get functionAssociationInput(): cdktf.IResolvable | CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation[] | undefined;
    private _grpcConfig;
    get grpcConfig(): CloudfrontDistributionOrderedCacheBehaviorGrpcConfigOutputReference;
    putGrpcConfig(value: CloudfrontDistributionOrderedCacheBehaviorGrpcConfig): void;
    resetGrpcConfig(): void;
    get grpcConfigInput(): CloudfrontDistributionOrderedCacheBehaviorGrpcConfig | undefined;
    private _lambdaFunctionAssociation;
    get lambdaFunctionAssociation(): CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList;
    putLambdaFunctionAssociation(value: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | cdktf.IResolvable): void;
    resetLambdaFunctionAssociation(): void;
    get lambdaFunctionAssociationInput(): cdktf.IResolvable | CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation[] | undefined;
}
export declare class CloudfrontDistributionOrderedCacheBehaviorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOrderedCacheBehavior[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOrderedCacheBehaviorOutputReference;
}
export interface CloudfrontDistributionOriginCustomHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#name CloudfrontDistribution#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#value CloudfrontDistribution#value}
    */
    readonly value: string;
}
export declare function cloudfrontDistributionOriginCustomHeaderToTerraform(struct?: CloudfrontDistributionOriginCustomHeader | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOriginCustomHeaderToHclTerraform(struct?: CloudfrontDistributionOriginCustomHeader | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOriginCustomHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOriginCustomHeader | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOriginCustomHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CloudfrontDistributionOriginCustomHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOriginCustomHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOriginCustomHeaderOutputReference;
}
export interface CloudfrontDistributionOriginCustomOriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#http_port CloudfrontDistribution#http_port}
    */
    readonly httpPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#https_port CloudfrontDistribution#https_port}
    */
    readonly httpsPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
    */
    readonly originKeepaliveTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}
    */
    readonly originProtocolPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
    */
    readonly originReadTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}
    */
    readonly originSslProtocols: string[];
}
export declare function cloudfrontDistributionOriginCustomOriginConfigToTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any;
export declare function cloudfrontDistributionOriginCustomOriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginCustomOriginConfigOutputReference | CloudfrontDistributionOriginCustomOriginConfig): any;
export declare class CloudfrontDistributionOriginCustomOriginConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOriginCustomOriginConfig | undefined;
    set internalValue(value: CloudfrontDistributionOriginCustomOriginConfig | undefined);
    private _httpPort?;
    get httpPort(): number;
    set httpPort(value: number);
    get httpPortInput(): number | undefined;
    private _httpsPort?;
    get httpsPort(): number;
    set httpsPort(value: number);
    get httpsPortInput(): number | undefined;
    private _originKeepaliveTimeout?;
    get originKeepaliveTimeout(): number;
    set originKeepaliveTimeout(value: number);
    resetOriginKeepaliveTimeout(): void;
    get originKeepaliveTimeoutInput(): number | undefined;
    private _originProtocolPolicy?;
    get originProtocolPolicy(): string;
    set originProtocolPolicy(value: string);
    get originProtocolPolicyInput(): string | undefined;
    private _originReadTimeout?;
    get originReadTimeout(): number;
    set originReadTimeout(value: number);
    resetOriginReadTimeout(): void;
    get originReadTimeoutInput(): number | undefined;
    private _originSslProtocols?;
    get originSslProtocols(): string[];
    set originSslProtocols(value: string[]);
    get originSslProtocolsInput(): string[] | undefined;
}
export interface CloudfrontDistributionOriginOriginShield {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#enabled CloudfrontDistribution#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}
    */
    readonly originShieldRegion?: string;
}
export declare function cloudfrontDistributionOriginOriginShieldToTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any;
export declare function cloudfrontDistributionOriginOriginShieldToHclTerraform(struct?: CloudfrontDistributionOriginOriginShieldOutputReference | CloudfrontDistributionOriginOriginShield): any;
export declare class CloudfrontDistributionOriginOriginShieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOriginOriginShield | undefined;
    set internalValue(value: CloudfrontDistributionOriginOriginShield | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _originShieldRegion?;
    get originShieldRegion(): string;
    set originShieldRegion(value: string);
    resetOriginShieldRegion(): void;
    get originShieldRegionInput(): string | undefined;
}
export interface CloudfrontDistributionOriginS3OriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}
    */
    readonly originAccessIdentity: string;
}
export declare function cloudfrontDistributionOriginS3OriginConfigToTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any;
export declare function cloudfrontDistributionOriginS3OriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginS3OriginConfigOutputReference | CloudfrontDistributionOriginS3OriginConfig): any;
export declare class CloudfrontDistributionOriginS3OriginConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOriginS3OriginConfig | undefined;
    set internalValue(value: CloudfrontDistributionOriginS3OriginConfig | undefined);
    private _originAccessIdentity?;
    get originAccessIdentity(): string;
    set originAccessIdentity(value: string);
    get originAccessIdentityInput(): string | undefined;
}
export interface CloudfrontDistributionOriginVpcOriginConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}
    */
    readonly originKeepaliveTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}
    */
    readonly originReadTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#vpc_origin_id CloudfrontDistribution#vpc_origin_id}
    */
    readonly vpcOriginId: string;
}
export declare function cloudfrontDistributionOriginVpcOriginConfigToTerraform(struct?: CloudfrontDistributionOriginVpcOriginConfigOutputReference | CloudfrontDistributionOriginVpcOriginConfig): any;
export declare function cloudfrontDistributionOriginVpcOriginConfigToHclTerraform(struct?: CloudfrontDistributionOriginVpcOriginConfigOutputReference | CloudfrontDistributionOriginVpcOriginConfig): any;
export declare class CloudfrontDistributionOriginVpcOriginConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOriginVpcOriginConfig | undefined;
    set internalValue(value: CloudfrontDistributionOriginVpcOriginConfig | undefined);
    private _originKeepaliveTimeout?;
    get originKeepaliveTimeout(): number;
    set originKeepaliveTimeout(value: number);
    resetOriginKeepaliveTimeout(): void;
    get originKeepaliveTimeoutInput(): number | undefined;
    private _originReadTimeout?;
    get originReadTimeout(): number;
    set originReadTimeout(value: number);
    resetOriginReadTimeout(): void;
    get originReadTimeoutInput(): number | undefined;
    private _vpcOriginId?;
    get vpcOriginId(): string;
    set vpcOriginId(value: string);
    get vpcOriginIdInput(): string | undefined;
}
export interface CloudfrontDistributionOrigin {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}
    */
    readonly connectionAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}
    */
    readonly connectionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}
    */
    readonly originAccessControlId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}
    */
    readonly originPath?: string;
    /**
    * custom_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}
    */
    readonly customHeader?: CloudfrontDistributionOriginCustomHeader[] | cdktf.IResolvable;
    /**
    * custom_origin_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}
    */
    readonly customOriginConfig?: CloudfrontDistributionOriginCustomOriginConfig;
    /**
    * origin_shield block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}
    */
    readonly originShield?: CloudfrontDistributionOriginOriginShield;
    /**
    * s3_origin_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}
    */
    readonly s3OriginConfig?: CloudfrontDistributionOriginS3OriginConfig;
    /**
    * vpc_origin_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#vpc_origin_config CloudfrontDistribution#vpc_origin_config}
    */
    readonly vpcOriginConfig?: CloudfrontDistributionOriginVpcOriginConfig;
}
export declare function cloudfrontDistributionOriginToTerraform(struct?: CloudfrontDistributionOrigin | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOriginToHclTerraform(struct?: CloudfrontDistributionOrigin | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOrigin | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOrigin | cdktf.IResolvable | undefined);
    private _connectionAttempts?;
    get connectionAttempts(): number;
    set connectionAttempts(value: number);
    resetConnectionAttempts(): void;
    get connectionAttemptsInput(): number | undefined;
    private _connectionTimeout?;
    get connectionTimeout(): number;
    set connectionTimeout(value: number);
    resetConnectionTimeout(): void;
    get connectionTimeoutInput(): number | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _originAccessControlId?;
    get originAccessControlId(): string;
    set originAccessControlId(value: string);
    resetOriginAccessControlId(): void;
    get originAccessControlIdInput(): string | undefined;
    private _originId?;
    get originId(): string;
    set originId(value: string);
    get originIdInput(): string | undefined;
    private _originPath?;
    get originPath(): string;
    set originPath(value: string);
    resetOriginPath(): void;
    get originPathInput(): string | undefined;
    private _customHeader;
    get customHeader(): CloudfrontDistributionOriginCustomHeaderList;
    putCustomHeader(value: CloudfrontDistributionOriginCustomHeader[] | cdktf.IResolvable): void;
    resetCustomHeader(): void;
    get customHeaderInput(): cdktf.IResolvable | CloudfrontDistributionOriginCustomHeader[] | undefined;
    private _customOriginConfig;
    get customOriginConfig(): CloudfrontDistributionOriginCustomOriginConfigOutputReference;
    putCustomOriginConfig(value: CloudfrontDistributionOriginCustomOriginConfig): void;
    resetCustomOriginConfig(): void;
    get customOriginConfigInput(): CloudfrontDistributionOriginCustomOriginConfig | undefined;
    private _originShield;
    get originShield(): CloudfrontDistributionOriginOriginShieldOutputReference;
    putOriginShield(value: CloudfrontDistributionOriginOriginShield): void;
    resetOriginShield(): void;
    get originShieldInput(): CloudfrontDistributionOriginOriginShield | undefined;
    private _s3OriginConfig;
    get s3OriginConfig(): CloudfrontDistributionOriginS3OriginConfigOutputReference;
    putS3OriginConfig(value: CloudfrontDistributionOriginS3OriginConfig): void;
    resetS3OriginConfig(): void;
    get s3OriginConfigInput(): CloudfrontDistributionOriginS3OriginConfig | undefined;
    private _vpcOriginConfig;
    get vpcOriginConfig(): CloudfrontDistributionOriginVpcOriginConfigOutputReference;
    putVpcOriginConfig(value: CloudfrontDistributionOriginVpcOriginConfig): void;
    resetVpcOriginConfig(): void;
    get vpcOriginConfigInput(): CloudfrontDistributionOriginVpcOriginConfig | undefined;
}
export declare class CloudfrontDistributionOriginList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOrigin[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOriginOutputReference;
}
export interface CloudfrontDistributionOriginGroupFailoverCriteria {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}
    */
    readonly statusCodes: number[];
}
export declare function cloudfrontDistributionOriginGroupFailoverCriteriaToTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any;
export declare function cloudfrontDistributionOriginGroupFailoverCriteriaToHclTerraform(struct?: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference | CloudfrontDistributionOriginGroupFailoverCriteria): any;
export declare class CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionOriginGroupFailoverCriteria | undefined;
    set internalValue(value: CloudfrontDistributionOriginGroupFailoverCriteria | undefined);
    private _statusCodes?;
    get statusCodes(): number[];
    set statusCodes(value: number[]);
    get statusCodesInput(): number[] | undefined;
}
export interface CloudfrontDistributionOriginGroupMember {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
}
export declare function cloudfrontDistributionOriginGroupMemberToTerraform(struct?: CloudfrontDistributionOriginGroupMember | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOriginGroupMemberToHclTerraform(struct?: CloudfrontDistributionOriginGroupMember | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOriginGroupMemberOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOriginGroupMember | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOriginGroupMember | cdktf.IResolvable | undefined);
    private _originId?;
    get originId(): string;
    set originId(value: string);
    get originIdInput(): string | undefined;
}
export declare class CloudfrontDistributionOriginGroupMemberList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOriginGroupMember[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOriginGroupMemberOutputReference;
}
export interface CloudfrontDistributionOriginGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}
    */
    readonly originId: string;
    /**
    * failover_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}
    */
    readonly failoverCriteria: CloudfrontDistributionOriginGroupFailoverCriteria;
    /**
    * member block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#member CloudfrontDistribution#member}
    */
    readonly member: CloudfrontDistributionOriginGroupMember[] | cdktf.IResolvable;
}
export declare function cloudfrontDistributionOriginGroupToTerraform(struct?: CloudfrontDistributionOriginGroup | cdktf.IResolvable): any;
export declare function cloudfrontDistributionOriginGroupToHclTerraform(struct?: CloudfrontDistributionOriginGroup | cdktf.IResolvable): any;
export declare class CloudfrontDistributionOriginGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontDistributionOriginGroup | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontDistributionOriginGroup | cdktf.IResolvable | undefined);
    private _originId?;
    get originId(): string;
    set originId(value: string);
    get originIdInput(): string | undefined;
    private _failoverCriteria;
    get failoverCriteria(): CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference;
    putFailoverCriteria(value: CloudfrontDistributionOriginGroupFailoverCriteria): void;
    get failoverCriteriaInput(): CloudfrontDistributionOriginGroupFailoverCriteria | undefined;
    private _member;
    get member(): CloudfrontDistributionOriginGroupMemberList;
    putMember(value: CloudfrontDistributionOriginGroupMember[] | cdktf.IResolvable): void;
    get memberInput(): cdktf.IResolvable | CloudfrontDistributionOriginGroupMember[] | undefined;
}
export declare class CloudfrontDistributionOriginGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontDistributionOriginGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontDistributionOriginGroupOutputReference;
}
export interface CloudfrontDistributionRestrictionsGeoRestriction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#locations CloudfrontDistribution#locations}
    */
    readonly locations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}
    */
    readonly restrictionType: string;
}
export declare function cloudfrontDistributionRestrictionsGeoRestrictionToTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any;
export declare function cloudfrontDistributionRestrictionsGeoRestrictionToHclTerraform(struct?: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference | CloudfrontDistributionRestrictionsGeoRestriction): any;
export declare class CloudfrontDistributionRestrictionsGeoRestrictionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionRestrictionsGeoRestriction | undefined;
    set internalValue(value: CloudfrontDistributionRestrictionsGeoRestriction | undefined);
    private _locations?;
    get locations(): string[];
    set locations(value: string[]);
    resetLocations(): void;
    get locationsInput(): string[] | undefined;
    private _restrictionType?;
    get restrictionType(): string;
    set restrictionType(value: string);
    get restrictionTypeInput(): string | undefined;
}
export interface CloudfrontDistributionRestrictions {
    /**
    * geo_restriction block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}
    */
    readonly geoRestriction: CloudfrontDistributionRestrictionsGeoRestriction;
}
export declare function cloudfrontDistributionRestrictionsToTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any;
export declare function cloudfrontDistributionRestrictionsToHclTerraform(struct?: CloudfrontDistributionRestrictionsOutputReference | CloudfrontDistributionRestrictions): any;
export declare class CloudfrontDistributionRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionRestrictions | undefined;
    set internalValue(value: CloudfrontDistributionRestrictions | undefined);
    private _geoRestriction;
    get geoRestriction(): CloudfrontDistributionRestrictionsGeoRestrictionOutputReference;
    putGeoRestriction(value: CloudfrontDistributionRestrictionsGeoRestriction): void;
    get geoRestrictionInput(): CloudfrontDistributionRestrictionsGeoRestriction | undefined;
}
export interface CloudfrontDistributionViewerCertificate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}
    */
    readonly acmCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}
    */
    readonly cloudfrontDefaultCertificate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}
    */
    readonly iamCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}
    */
    readonly minimumProtocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}
    */
    readonly sslSupportMethod?: string;
}
export declare function cloudfrontDistributionViewerCertificateToTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any;
export declare function cloudfrontDistributionViewerCertificateToHclTerraform(struct?: CloudfrontDistributionViewerCertificateOutputReference | CloudfrontDistributionViewerCertificate): any;
export declare class CloudfrontDistributionViewerCertificateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontDistributionViewerCertificate | undefined;
    set internalValue(value: CloudfrontDistributionViewerCertificate | undefined);
    private _acmCertificateArn?;
    get acmCertificateArn(): string;
    set acmCertificateArn(value: string);
    resetAcmCertificateArn(): void;
    get acmCertificateArnInput(): string | undefined;
    private _cloudfrontDefaultCertificate?;
    get cloudfrontDefaultCertificate(): boolean | cdktf.IResolvable;
    set cloudfrontDefaultCertificate(value: boolean | cdktf.IResolvable);
    resetCloudfrontDefaultCertificate(): void;
    get cloudfrontDefaultCertificateInput(): boolean | cdktf.IResolvable | undefined;
    private _iamCertificateId?;
    get iamCertificateId(): string;
    set iamCertificateId(value: string);
    resetIamCertificateId(): void;
    get iamCertificateIdInput(): string | undefined;
    private _minimumProtocolVersion?;
    get minimumProtocolVersion(): string;
    set minimumProtocolVersion(value: string);
    resetMinimumProtocolVersion(): void;
    get minimumProtocolVersionInput(): string | undefined;
    private _sslSupportMethod?;
    get sslSupportMethod(): string;
    set sslSupportMethod(value: string);
    resetSslSupportMethod(): void;
    get sslSupportMethodInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution}
*/
export declare class CloudfrontDistribution extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_distribution";
    /**
    * Generates CDKTF code for importing a CloudfrontDistribution resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontDistribution to import
    * @param importFromId The id of the existing CloudfrontDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontDistribution to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_distribution aws_cloudfront_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontDistributionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontDistributionConfig);
    private _aliases?;
    get aliases(): string[];
    set aliases(value: string[]);
    resetAliases(): void;
    get aliasesInput(): string[] | undefined;
    get arn(): string;
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _continuousDeploymentPolicyId?;
    get continuousDeploymentPolicyId(): string;
    set continuousDeploymentPolicyId(value: string);
    resetContinuousDeploymentPolicyId(): void;
    get continuousDeploymentPolicyIdInput(): string | undefined;
    private _defaultRootObject?;
    get defaultRootObject(): string;
    set defaultRootObject(value: string);
    resetDefaultRootObject(): void;
    get defaultRootObjectInput(): string | undefined;
    get domainName(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get etag(): string;
    get hostedZoneId(): string;
    private _httpVersion?;
    get httpVersion(): string;
    set httpVersion(value: string);
    resetHttpVersion(): void;
    get httpVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get inProgressValidationBatches(): number;
    private _isIpv6Enabled?;
    get isIpv6Enabled(): boolean | cdktf.IResolvable;
    set isIpv6Enabled(value: boolean | cdktf.IResolvable);
    resetIsIpv6Enabled(): void;
    get isIpv6EnabledInput(): boolean | cdktf.IResolvable | undefined;
    get lastModifiedTime(): string;
    private _priceClass?;
    get priceClass(): string;
    set priceClass(value: string);
    resetPriceClass(): void;
    get priceClassInput(): string | undefined;
    private _retainOnDelete?;
    get retainOnDelete(): boolean | cdktf.IResolvable;
    set retainOnDelete(value: boolean | cdktf.IResolvable);
    resetRetainOnDelete(): void;
    get retainOnDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _staging?;
    get staging(): boolean | cdktf.IResolvable;
    set staging(value: boolean | cdktf.IResolvable);
    resetStaging(): void;
    get stagingInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
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
    private _trustedKeyGroups;
    get trustedKeyGroups(): CloudfrontDistributionTrustedKeyGroupsList;
    private _trustedSigners;
    get trustedSigners(): CloudfrontDistributionTrustedSignersList;
    private _waitForDeployment?;
    get waitForDeployment(): boolean | cdktf.IResolvable;
    set waitForDeployment(value: boolean | cdktf.IResolvable);
    resetWaitForDeployment(): void;
    get waitForDeploymentInput(): boolean | cdktf.IResolvable | undefined;
    private _webAclId?;
    get webAclId(): string;
    set webAclId(value: string);
    resetWebAclId(): void;
    get webAclIdInput(): string | undefined;
    private _customErrorResponse;
    get customErrorResponse(): CloudfrontDistributionCustomErrorResponseList;
    putCustomErrorResponse(value: CloudfrontDistributionCustomErrorResponse[] | cdktf.IResolvable): void;
    resetCustomErrorResponse(): void;
    get customErrorResponseInput(): cdktf.IResolvable | CloudfrontDistributionCustomErrorResponse[] | undefined;
    private _defaultCacheBehavior;
    get defaultCacheBehavior(): CloudfrontDistributionDefaultCacheBehaviorOutputReference;
    putDefaultCacheBehavior(value: CloudfrontDistributionDefaultCacheBehavior): void;
    get defaultCacheBehaviorInput(): CloudfrontDistributionDefaultCacheBehavior | undefined;
    private _loggingConfig;
    get loggingConfig(): CloudfrontDistributionLoggingConfigOutputReference;
    putLoggingConfig(value: CloudfrontDistributionLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudfrontDistributionLoggingConfig | undefined;
    private _orderedCacheBehavior;
    get orderedCacheBehavior(): CloudfrontDistributionOrderedCacheBehaviorList;
    putOrderedCacheBehavior(value: CloudfrontDistributionOrderedCacheBehavior[] | cdktf.IResolvable): void;
    resetOrderedCacheBehavior(): void;
    get orderedCacheBehaviorInput(): cdktf.IResolvable | CloudfrontDistributionOrderedCacheBehavior[] | undefined;
    private _origin;
    get origin(): CloudfrontDistributionOriginList;
    putOrigin(value: CloudfrontDistributionOrigin[] | cdktf.IResolvable): void;
    get originInput(): cdktf.IResolvable | CloudfrontDistributionOrigin[] | undefined;
    private _originGroup;
    get originGroup(): CloudfrontDistributionOriginGroupList;
    putOriginGroup(value: CloudfrontDistributionOriginGroup[] | cdktf.IResolvable): void;
    resetOriginGroup(): void;
    get originGroupInput(): cdktf.IResolvable | CloudfrontDistributionOriginGroup[] | undefined;
    private _restrictions;
    get restrictions(): CloudfrontDistributionRestrictionsOutputReference;
    putRestrictions(value: CloudfrontDistributionRestrictions): void;
    get restrictionsInput(): CloudfrontDistributionRestrictions | undefined;
    private _viewerCertificate;
    get viewerCertificate(): CloudfrontDistributionViewerCertificateOutputReference;
    putViewerCertificate(value: CloudfrontDistributionViewerCertificate): void;
    get viewerCertificateInput(): CloudfrontDistributionViewerCertificate | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
