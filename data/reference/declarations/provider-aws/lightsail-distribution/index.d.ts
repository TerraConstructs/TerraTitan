/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailDistributionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The bundle ID to use for the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}
    */
    readonly bundleId: string;
    /**
    * The name of the SSL/TLS certificate attached to the distribution, if any.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#id LightsailDistribution#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The IP address type of the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Indicates whether the distribution is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * The name of the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#tags_all LightsailDistribution#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#cache_behavior LightsailDistribution#cache_behavior}
    */
    readonly cacheBehavior?: LightsailDistributionCacheBehavior[] | cdktf.IResolvable;
    /**
    * cache_behavior_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}
    */
    readonly cacheBehaviorSettings?: LightsailDistributionCacheBehaviorSettings;
    /**
    * default_cache_behavior block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}
    */
    readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehavior;
    /**
    * origin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}
    */
    readonly origin: LightsailDistributionOrigin;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#timeouts LightsailDistribution#timeouts}
    */
    readonly timeouts?: LightsailDistributionTimeouts;
}
export interface LightsailDistributionLocation {
}
export declare function lightsailDistributionLocationToTerraform(struct?: LightsailDistributionLocation): any;
export declare function lightsailDistributionLocationToHclTerraform(struct?: LightsailDistributionLocation): any;
export declare class LightsailDistributionLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailDistributionLocation | undefined;
    set internalValue(value: LightsailDistributionLocation | undefined);
    get availabilityZone(): string;
    get regionName(): string;
}
export declare class LightsailDistributionLocationList extends cdktf.ComplexList {
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
    get(index: number): LightsailDistributionLocationOutputReference;
}
export interface LightsailDistributionCacheBehavior {
    /**
    * The cache behavior for the specified path.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}
    */
    readonly behavior: string;
    /**
    * The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#path LightsailDistribution#path}
    */
    readonly path: string;
}
export declare function lightsailDistributionCacheBehaviorToTerraform(struct?: LightsailDistributionCacheBehavior | cdktf.IResolvable): any;
export declare function lightsailDistributionCacheBehaviorToHclTerraform(struct?: LightsailDistributionCacheBehavior | cdktf.IResolvable): any;
export declare class LightsailDistributionCacheBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailDistributionCacheBehavior | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailDistributionCacheBehavior | cdktf.IResolvable | undefined);
    private _behavior?;
    get behavior(): string;
    set behavior(value: string);
    get behaviorInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
}
export declare class LightsailDistributionCacheBehaviorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LightsailDistributionCacheBehavior[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LightsailDistributionCacheBehaviorOutputReference;
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedCookies {
    /**
    * The specific cookies to forward to your distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}
    */
    readonly cookiesAllowList?: string[];
    /**
    * Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}
    */
    readonly option?: string;
}
export declare function lightsailDistributionCacheBehaviorSettingsForwardedCookiesToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedCookies): any;
export declare function lightsailDistributionCacheBehaviorSettingsForwardedCookiesToHclTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedCookies): any;
export declare class LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined;
    set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined);
    private _cookiesAllowList?;
    get cookiesAllowList(): string[];
    set cookiesAllowList(value: string[]);
    resetCookiesAllowList(): void;
    get cookiesAllowListInput(): string[] | undefined;
    private _option?;
    get option(): string;
    set option(value: string);
    resetOption(): void;
    get optionInput(): string | undefined;
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedHeaders {
    /**
    * The specific headers to forward to your distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}
    */
    readonly headersAllowList?: string[];
    /**
    * The headers that you want your distribution to forward to your origin and base caching on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}
    */
    readonly option?: string;
}
export declare function lightsailDistributionCacheBehaviorSettingsForwardedHeadersToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedHeaders): any;
export declare function lightsailDistributionCacheBehaviorSettingsForwardedHeadersToHclTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedHeaders): any;
export declare class LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined;
    set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined);
    private _headersAllowList?;
    get headersAllowList(): string[];
    set headersAllowList(value: string[]);
    resetHeadersAllowList(): void;
    get headersAllowListInput(): string[] | undefined;
    private _option?;
    get option(): string;
    set option(value: string);
    resetOption(): void;
    get optionInput(): string | undefined;
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings {
    /**
    * Indicates whether the distribution forwards and caches based on query strings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}
    */
    readonly option?: boolean | cdktf.IResolvable;
    /**
    * The specific query strings that the distribution forwards to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#query_strings_allowed_list LightsailDistribution#query_strings_allowed_list}
    */
    readonly queryStringsAllowedList?: string[];
}
export declare function lightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): any;
export declare function lightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToHclTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): any;
export declare class LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined;
    set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined);
    private _option?;
    get option(): boolean | cdktf.IResolvable;
    set option(value: boolean | cdktf.IResolvable);
    resetOption(): void;
    get optionInput(): boolean | cdktf.IResolvable | undefined;
    private _queryStringsAllowedList?;
    get queryStringsAllowedList(): string[];
    set queryStringsAllowedList(value: string[]);
    resetQueryStringsAllowedList(): void;
    get queryStringsAllowedListInput(): string[] | undefined;
}
export interface LightsailDistributionCacheBehaviorSettings {
    /**
    * The HTTP methods that are processed and forwarded to the distribution's origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}
    */
    readonly allowedHttpMethods?: string;
    /**
    * The HTTP method responses that are cached by your distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}
    */
    readonly cachedHttpMethods?: string;
    /**
    * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}
    */
    readonly maximumTtl?: number;
    /**
    * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}
    */
    readonly minimumTtl?: number;
    /**
    * forwarded_cookies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}
    */
    readonly forwardedCookies?: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
    /**
    * forwarded_headers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}
    */
    readonly forwardedHeaders?: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
    /**
    * forwarded_query_strings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}
    */
    readonly forwardedQueryStrings?: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
}
export declare function lightsailDistributionCacheBehaviorSettingsToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsOutputReference | LightsailDistributionCacheBehaviorSettings): any;
export declare function lightsailDistributionCacheBehaviorSettingsToHclTerraform(struct?: LightsailDistributionCacheBehaviorSettingsOutputReference | LightsailDistributionCacheBehaviorSettings): any;
export declare class LightsailDistributionCacheBehaviorSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionCacheBehaviorSettings | undefined;
    set internalValue(value: LightsailDistributionCacheBehaviorSettings | undefined);
    private _allowedHttpMethods?;
    get allowedHttpMethods(): string;
    set allowedHttpMethods(value: string);
    resetAllowedHttpMethods(): void;
    get allowedHttpMethodsInput(): string | undefined;
    private _cachedHttpMethods?;
    get cachedHttpMethods(): string;
    set cachedHttpMethods(value: string);
    resetCachedHttpMethods(): void;
    get cachedHttpMethodsInput(): string | undefined;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number | undefined;
    private _maximumTtl?;
    get maximumTtl(): number;
    set maximumTtl(value: number);
    resetMaximumTtl(): void;
    get maximumTtlInput(): number | undefined;
    private _minimumTtl?;
    get minimumTtl(): number;
    set minimumTtl(value: number);
    resetMinimumTtl(): void;
    get minimumTtlInput(): number | undefined;
    private _forwardedCookies;
    get forwardedCookies(): LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference;
    putForwardedCookies(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies): void;
    resetForwardedCookies(): void;
    get forwardedCookiesInput(): LightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined;
    private _forwardedHeaders;
    get forwardedHeaders(): LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference;
    putForwardedHeaders(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders): void;
    resetForwardedHeaders(): void;
    get forwardedHeadersInput(): LightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined;
    private _forwardedQueryStrings;
    get forwardedQueryStrings(): LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference;
    putForwardedQueryStrings(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): void;
    resetForwardedQueryStrings(): void;
    get forwardedQueryStringsInput(): LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined;
}
export interface LightsailDistributionDefaultCacheBehavior {
    /**
    * The cache behavior of the distribution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}
    */
    readonly behavior: string;
}
export declare function lightsailDistributionDefaultCacheBehaviorToTerraform(struct?: LightsailDistributionDefaultCacheBehaviorOutputReference | LightsailDistributionDefaultCacheBehavior): any;
export declare function lightsailDistributionDefaultCacheBehaviorToHclTerraform(struct?: LightsailDistributionDefaultCacheBehaviorOutputReference | LightsailDistributionDefaultCacheBehavior): any;
export declare class LightsailDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionDefaultCacheBehavior | undefined;
    set internalValue(value: LightsailDistributionDefaultCacheBehavior | undefined);
    private _behavior?;
    get behavior(): string;
    set behavior(value: string);
    get behaviorInput(): string | undefined;
}
export interface LightsailDistributionOrigin {
    /**
    * The name of the origin resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}
    */
    readonly name: string;
    /**
    * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}
    */
    readonly protocolPolicy?: string;
    /**
    * The AWS Region name of the origin resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}
    */
    readonly regionName: string;
}
export declare function lightsailDistributionOriginToTerraform(struct?: LightsailDistributionOriginOutputReference | LightsailDistributionOrigin): any;
export declare function lightsailDistributionOriginToHclTerraform(struct?: LightsailDistributionOriginOutputReference | LightsailDistributionOrigin): any;
export declare class LightsailDistributionOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionOrigin | undefined;
    set internalValue(value: LightsailDistributionOrigin | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _protocolPolicy?;
    get protocolPolicy(): string;
    set protocolPolicy(value: string);
    resetProtocolPolicy(): void;
    get protocolPolicyInput(): string | undefined;
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
    get resourceType(): string;
}
export interface LightsailDistributionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#create LightsailDistribution#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#delete LightsailDistribution#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#update LightsailDistribution#update}
    */
    readonly update?: string;
}
export declare function lightsailDistributionTimeoutsToTerraform(struct?: LightsailDistributionTimeouts | cdktf.IResolvable): any;
export declare function lightsailDistributionTimeoutsToHclTerraform(struct?: LightsailDistributionTimeouts | cdktf.IResolvable): any;
export declare class LightsailDistributionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailDistributionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailDistributionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution aws_lightsail_distribution}
*/
export declare class LightsailDistribution extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_distribution";
    /**
    * Generates CDKTF code for importing a LightsailDistribution resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailDistribution to import
    * @param importFromId The id of the existing LightsailDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailDistribution to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_distribution aws_lightsail_distribution} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailDistributionConfig
    */
    constructor(scope: Construct, id: string, config: LightsailDistributionConfig);
    get alternativeDomainNames(): string[];
    get arn(): string;
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string | undefined;
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    resetCertificateName(): void;
    get certificateNameInput(): string | undefined;
    get createdAt(): string;
    get domainName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _isEnabled?;
    get isEnabled(): boolean | cdktf.IResolvable;
    set isEnabled(value: boolean | cdktf.IResolvable);
    resetIsEnabled(): void;
    get isEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _location;
    get location(): LightsailDistributionLocationList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get originPublicDns(): string;
    get resourceType(): string;
    get status(): string;
    get supportCode(): string;
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
    private _cacheBehavior;
    get cacheBehavior(): LightsailDistributionCacheBehaviorList;
    putCacheBehavior(value: LightsailDistributionCacheBehavior[] | cdktf.IResolvable): void;
    resetCacheBehavior(): void;
    get cacheBehaviorInput(): cdktf.IResolvable | LightsailDistributionCacheBehavior[] | undefined;
    private _cacheBehaviorSettings;
    get cacheBehaviorSettings(): LightsailDistributionCacheBehaviorSettingsOutputReference;
    putCacheBehaviorSettings(value: LightsailDistributionCacheBehaviorSettings): void;
    resetCacheBehaviorSettings(): void;
    get cacheBehaviorSettingsInput(): LightsailDistributionCacheBehaviorSettings | undefined;
    private _defaultCacheBehavior;
    get defaultCacheBehavior(): LightsailDistributionDefaultCacheBehaviorOutputReference;
    putDefaultCacheBehavior(value: LightsailDistributionDefaultCacheBehavior): void;
    get defaultCacheBehaviorInput(): LightsailDistributionDefaultCacheBehavior | undefined;
    private _origin;
    get origin(): LightsailDistributionOriginOutputReference;
    putOrigin(value: LightsailDistributionOrigin): void;
    get originInput(): LightsailDistributionOrigin | undefined;
    private _timeouts;
    get timeouts(): LightsailDistributionTimeoutsOutputReference;
    putTimeouts(value: LightsailDistributionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LightsailDistributionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
