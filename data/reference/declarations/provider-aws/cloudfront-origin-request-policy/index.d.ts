/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}
    */
    readonly name: string;
    /**
    * cookies_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
    */
    readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig;
    /**
    * headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}
    */
    readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig;
    /**
    * query_strings_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
    */
    readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig;
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any;
export declare function cloudfrontOriginRequestPolicyCookiesConfigCookiesToHclTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any;
export declare class CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontOriginRequestPolicyCookiesConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
    */
    readonly cookieBehavior: string;
    /**
    * cookies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}
    */
    readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies;
}
export declare function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any;
export declare function cloudfrontOriginRequestPolicyCookiesConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any;
export declare class CloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyCookiesConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyCookiesConfig | undefined);
    private _cookieBehavior?;
    get cookieBehavior(): string;
    set cookieBehavior(value: string);
    get cookieBehaviorInput(): string | undefined;
    private _cookies;
    get cookies(): CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference;
    putCookies(value: CloudfrontOriginRequestPolicyCookiesConfigCookies): void;
    resetCookies(): void;
    get cookiesInput(): CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined;
}
export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any;
export declare function cloudfrontOriginRequestPolicyHeadersConfigHeadersToHclTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any;
export declare class CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontOriginRequestPolicyHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
    */
    readonly headerBehavior?: string;
    /**
    * headers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}
    */
    readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders;
}
export declare function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any;
export declare function cloudfrontOriginRequestPolicyHeadersConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any;
export declare class CloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyHeadersConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyHeadersConfig | undefined);
    private _headerBehavior?;
    get headerBehavior(): string;
    set headerBehavior(value: string);
    resetHeaderBehavior(): void;
    get headerBehaviorInput(): string | undefined;
    private _headers;
    get headers(): CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference;
    putHeaders(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders): void;
    resetHeaders(): void;
    get headersInput(): CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined;
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any;
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToHclTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any;
export declare class CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
    */
    readonly queryStringBehavior: string;
    /**
    * query_strings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}
    */
    readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any;
export declare function cloudfrontOriginRequestPolicyQueryStringsConfigToHclTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any;
export declare class CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontOriginRequestPolicyQueryStringsConfig | undefined;
    set internalValue(value: CloudfrontOriginRequestPolicyQueryStringsConfig | undefined);
    private _queryStringBehavior?;
    get queryStringBehavior(): string;
    set queryStringBehavior(value: string);
    get queryStringBehaviorInput(): string | undefined;
    private _queryStrings;
    get queryStrings(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference;
    putQueryStrings(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): void;
    resetQueryStrings(): void;
    get queryStringsInput(): CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}
*/
export declare class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_origin_request_policy";
    /**
    * Generates CDKTF code for importing a CloudfrontOriginRequestPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontOriginRequestPolicy to import
    * @param importFromId The id of the existing CloudfrontOriginRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontOriginRequestPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginRequestPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _cookiesConfig;
    get cookiesConfig(): CloudfrontOriginRequestPolicyCookiesConfigOutputReference;
    putCookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig): void;
    get cookiesConfigInput(): CloudfrontOriginRequestPolicyCookiesConfig | undefined;
    private _headersConfig;
    get headersConfig(): CloudfrontOriginRequestPolicyHeadersConfigOutputReference;
    putHeadersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig): void;
    get headersConfigInput(): CloudfrontOriginRequestPolicyHeadersConfig | undefined;
    private _queryStringsConfig;
    get queryStringsConfig(): CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference;
    putQueryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig): void;
    get queryStringsConfigInput(): CloudfrontOriginRequestPolicyQueryStringsConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
