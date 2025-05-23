/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#comment CloudfrontCachePolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#default_ttl CloudfrontCachePolicy#default_ttl}
    */
    readonly defaultTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#id CloudfrontCachePolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#max_ttl CloudfrontCachePolicy#max_ttl}
    */
    readonly maxTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#min_ttl CloudfrontCachePolicy#min_ttl}
    */
    readonly minTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#name CloudfrontCachePolicy#name}
    */
    readonly name: string;
    /**
    * parameters_in_cache_key_and_forwarded_to_origin block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
    */
    readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#cookies CloudfrontCachePolicy#cookies}
    */
    readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined);
    private _cookieBehavior?;
    get cookieBehavior(): string;
    set cookieBehavior(value: string);
    get cookieBehaviorInput(): string | undefined;
    private _cookies;
    get cookies(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference;
    putCookies(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): void;
    resetCookies(): void;
    get cookiesInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#header_behavior CloudfrontCachePolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#headers CloudfrontCachePolicy#headers}
    */
    readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined);
    private _headerBehavior?;
    get headerBehavior(): string;
    set headerBehavior(value: string);
    resetHeaderBehavior(): void;
    get headerBehaviorInput(): string | undefined;
    private _headers;
    get headers(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference;
    putHeaders(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): void;
    resetHeaders(): void;
    get headersInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#items CloudfrontCachePolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#query_strings CloudfrontCachePolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined);
    private _queryStringBehavior?;
    get queryStringBehavior(): string;
    set queryStringBehavior(value: string);
    get queryStringBehaviorInput(): string | undefined;
    private _queryStrings;
    get queryStrings(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference;
    putQueryStrings(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): void;
    resetQueryStrings(): void;
    get queryStringsInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
    */
    readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
    */
    readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
    /**
    * cookies_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#cookies_config CloudfrontCachePolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
    /**
    * headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#headers_config CloudfrontCachePolicy#headers_config}
    */
    readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
    /**
    * query_strings_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#query_strings_config CloudfrontCachePolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any;
export declare function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToHclTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any;
export declare class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined;
    set internalValue(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined);
    private _enableAcceptEncodingBrotli?;
    get enableAcceptEncodingBrotli(): boolean | cdktf.IResolvable;
    set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable);
    resetEnableAcceptEncodingBrotli(): void;
    get enableAcceptEncodingBrotliInput(): boolean | cdktf.IResolvable | undefined;
    private _enableAcceptEncodingGzip?;
    get enableAcceptEncodingGzip(): boolean | cdktf.IResolvable;
    set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable);
    resetEnableAcceptEncodingGzip(): void;
    get enableAcceptEncodingGzipInput(): boolean | cdktf.IResolvable | undefined;
    private _cookiesConfig;
    get cookiesConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference;
    putCookiesConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): void;
    get cookiesConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig | undefined;
    private _headersConfig;
    get headersConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference;
    putHeadersConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): void;
    get headersConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig | undefined;
    private _queryStringsConfig;
    get queryStringsConfig(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference;
    putQueryStringsConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): void;
    get queryStringsConfigInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy}
*/
export declare class CloudfrontCachePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_cache_policy";
    /**
    * Generates CDKTF code for importing a CloudfrontCachePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontCachePolicy to import
    * @param importFromId The id of the existing CloudfrontCachePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontCachePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_cache_policy aws_cloudfront_cache_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontCachePolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _defaultTtl?;
    get defaultTtl(): number;
    set defaultTtl(value: number);
    resetDefaultTtl(): void;
    get defaultTtlInput(): number | undefined;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parametersInCacheKeyAndForwardedToOrigin;
    get parametersInCacheKeyAndForwardedToOrigin(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference;
    putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): void;
    get parametersInCacheKeyAndForwardedToOriginInput(): CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
