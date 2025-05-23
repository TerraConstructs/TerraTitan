/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#etag CloudfrontResponseHeadersPolicy#etag}
    */
    readonly etag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#id CloudfrontResponseHeadersPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}
    */
    readonly name: string;
    /**
    * cors_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}
    */
    readonly corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig;
    /**
    * custom_headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
    */
    readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig;
    /**
    * remove_headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#remove_headers_config CloudfrontResponseHeadersPolicy#remove_headers_config}
    */
    readonly removeHeadersConfig?: CloudfrontResponseHeadersPolicyRemoveHeadersConfig;
    /**
    * security_headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
    */
    readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig;
    /**
    * server_timing_headers_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}
    */
    readonly serverTimingHeadersConfig?: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any;
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any;
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any;
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any;
export declare function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[] | undefined;
}
export interface CloudfrontResponseHeadersPolicyCorsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
    */
    readonly accessControlAllowCredentials: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}
    */
    readonly originOverride: boolean | cdktf.IResolvable;
    /**
    * access_control_allow_headers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
    */
    readonly accessControlAllowHeaders: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
    /**
    * access_control_allow_methods block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
    */
    readonly accessControlAllowMethods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
    /**
    * access_control_allow_origins block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
    */
    readonly accessControlAllowOrigins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
    /**
    * access_control_expose_headers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
    */
    readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}
export declare function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigOutputReference | CloudfrontResponseHeadersPolicyCorsConfig): any;
export declare function cloudfrontResponseHeadersPolicyCorsConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigOutputReference | CloudfrontResponseHeadersPolicyCorsConfig): any;
export declare class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCorsConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCorsConfig | undefined);
    private _accessControlAllowCredentials?;
    get accessControlAllowCredentials(): boolean | cdktf.IResolvable;
    set accessControlAllowCredentials(value: boolean | cdktf.IResolvable);
    get accessControlAllowCredentialsInput(): boolean | cdktf.IResolvable | undefined;
    private _accessControlMaxAgeSec?;
    get accessControlMaxAgeSec(): number;
    set accessControlMaxAgeSec(value: number);
    resetAccessControlMaxAgeSec(): void;
    get accessControlMaxAgeSecInput(): number | undefined;
    private _originOverride?;
    get originOverride(): boolean | cdktf.IResolvable;
    set originOverride(value: boolean | cdktf.IResolvable);
    get originOverrideInput(): boolean | cdktf.IResolvable | undefined;
    private _accessControlAllowHeaders;
    get accessControlAllowHeaders(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
    putAccessControlAllowHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): void;
    get accessControlAllowHeadersInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined;
    private _accessControlAllowMethods;
    get accessControlAllowMethods(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
    putAccessControlAllowMethods(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): void;
    get accessControlAllowMethodsInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined;
    private _accessControlAllowOrigins;
    get accessControlAllowOrigins(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
    putAccessControlAllowOrigins(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): void;
    get accessControlAllowOriginsInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined;
    private _accessControlExposeHeaders;
    get accessControlExposeHeaders(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
    putAccessControlExposeHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): void;
    resetAccessControlExposeHeaders(): void;
    get accessControlExposeHeadersInput(): CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined;
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}
    */
    readonly header: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}
    */
    readonly value: string;
}
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable): any;
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable): any;
export declare class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems | cdktf.IResolvable | undefined);
    private _header?;
    get header(): string;
    set header(value: string);
    get headerInput(): string | undefined;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference;
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfig {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyCustomHeadersConfig): any;
export declare function cloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyCustomHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined);
    private _items;
    get items(): CloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList;
    putItems(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): cdktf.IResolvable | CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | undefined;
}
export interface CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}
    */
    readonly header: string;
}
export declare function cloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | cdktf.IResolvable): any;
export declare function cloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsToHclTerraform(struct?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | cdktf.IResolvable): any;
export declare class CloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | cdktf.IResolvable | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | cdktf.IResolvable | undefined);
    private _header?;
    get header(): string;
    set header(value: string);
    get headerInput(): string | undefined;
}
export declare class CloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsOutputReference;
}
export interface CloudfrontResponseHeadersPolicyRemoveHeadersConfig {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}
    */
    readonly items?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems[] | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicyRemoveHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyRemoveHeadersConfig): any;
export declare function cloudfrontResponseHeadersPolicyRemoveHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyRemoveHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyRemoveHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyRemoveHeadersConfig | undefined);
    private _items;
    get items(): CloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsList;
    putItems(value: CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems[] | cdktf.IResolvable): void;
    resetItems(): void;
    get itemsInput(): cdktf.IResolvable | CloudfrontResponseHeadersPolicyRemoveHeadersConfigItems[] | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined);
    private _contentSecurityPolicy?;
    get contentSecurityPolicy(): string;
    set contentSecurityPolicy(value: string);
    get contentSecurityPolicyInput(): string | undefined;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined);
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}
    */
    readonly frameOption: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined);
    private _frameOption?;
    get frameOption(): string;
    set frameOption(value: string);
    get frameOptionInput(): string | undefined;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy: string;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined);
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
    private _referrerPolicy?;
    get referrerPolicy(): string;
    set referrerPolicy(value: string);
    get referrerPolicyInput(): string | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}
    */
    readonly preload?: boolean | cdktf.IResolvable;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined);
    private _accessControlMaxAgeSec?;
    get accessControlMaxAgeSec(): number;
    set accessControlMaxAgeSec(value: number);
    get accessControlMaxAgeSecInput(): number | undefined;
    private _includeSubdomains?;
    get includeSubdomains(): boolean | cdktf.IResolvable;
    set includeSubdomains(value: boolean | cdktf.IResolvable);
    resetIncludeSubdomains(): void;
    get includeSubdomainsInput(): boolean | cdktf.IResolvable | undefined;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
    private _preload?;
    get preload(): boolean | cdktf.IResolvable;
    set preload(value: boolean | cdktf.IResolvable);
    resetPreload(): void;
    get preloadInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}
    */
    readonly modeBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}
    */
    readonly override: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}
    */
    readonly protection: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}
    */
    readonly reportUri?: string;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined);
    private _modeBlock?;
    get modeBlock(): boolean | cdktf.IResolvable;
    set modeBlock(value: boolean | cdktf.IResolvable);
    resetModeBlock(): void;
    get modeBlockInput(): boolean | cdktf.IResolvable | undefined;
    private _override?;
    get override(): boolean | cdktf.IResolvable;
    set override(value: boolean | cdktf.IResolvable);
    get overrideInput(): boolean | cdktf.IResolvable | undefined;
    private _protection?;
    get protection(): boolean | cdktf.IResolvable;
    set protection(value: boolean | cdktf.IResolvable);
    get protectionInput(): boolean | cdktf.IResolvable | undefined;
    private _reportUri?;
    get reportUri(): string;
    set reportUri(value: string);
    resetReportUri(): void;
    get reportUriInput(): string | undefined;
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfig {
    /**
    * content_security_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
    /**
    * content_type_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
    */
    readonly contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
    /**
    * frame_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}
    */
    readonly frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
    /**
    * referrer_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
    /**
    * strict_transport_security block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
    */
    readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
    /**
    * xss_protection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
    */
    readonly xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfig): any;
export declare function cloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined);
    private _contentSecurityPolicy;
    get contentSecurityPolicy(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
    putContentSecurityPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): void;
    resetContentSecurityPolicy(): void;
    get contentSecurityPolicyInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined;
    private _contentTypeOptions;
    get contentTypeOptions(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
    putContentTypeOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): void;
    resetContentTypeOptions(): void;
    get contentTypeOptionsInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined;
    private _frameOptions;
    get frameOptions(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
    putFrameOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): void;
    resetFrameOptions(): void;
    get frameOptionsInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined;
    private _referrerPolicy;
    get referrerPolicy(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
    putReferrerPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): void;
    resetReferrerPolicy(): void;
    get referrerPolicyInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined;
    private _strictTransportSecurity;
    get strictTransportSecurity(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
    putStrictTransportSecurity(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): void;
    resetStrictTransportSecurity(): void;
    get strictTransportSecurityInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined;
    private _xssProtection;
    get xssProtection(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
    putXssProtection(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): void;
    resetXssProtection(): void;
    get xssProtectionInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined;
}
export interface CloudfrontResponseHeadersPolicyServerTimingHeadersConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}
    */
    readonly samplingRate: number;
}
export declare function cloudfrontResponseHeadersPolicyServerTimingHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any;
export declare function cloudfrontResponseHeadersPolicyServerTimingHeadersConfigToHclTerraform(struct?: CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any;
export declare class CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined;
    set internalValue(value: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _samplingRate?;
    get samplingRate(): number;
    set samplingRate(value: number);
    get samplingRateInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
export declare class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudfront_response_headers_policy";
    /**
    * Generates CDKTF code for importing a CloudfrontResponseHeadersPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudfrontResponseHeadersPolicy to import
    * @param importFromId The id of the existing CloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudfrontResponseHeadersPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontResponseHeadersPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _corsConfig;
    get corsConfig(): CloudfrontResponseHeadersPolicyCorsConfigOutputReference;
    putCorsConfig(value: CloudfrontResponseHeadersPolicyCorsConfig): void;
    resetCorsConfig(): void;
    get corsConfigInput(): CloudfrontResponseHeadersPolicyCorsConfig | undefined;
    private _customHeadersConfig;
    get customHeadersConfig(): CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
    putCustomHeadersConfig(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig): void;
    resetCustomHeadersConfig(): void;
    get customHeadersConfigInput(): CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined;
    private _removeHeadersConfig;
    get removeHeadersConfig(): CloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference;
    putRemoveHeadersConfig(value: CloudfrontResponseHeadersPolicyRemoveHeadersConfig): void;
    resetRemoveHeadersConfig(): void;
    get removeHeadersConfigInput(): CloudfrontResponseHeadersPolicyRemoveHeadersConfig | undefined;
    private _securityHeadersConfig;
    get securityHeadersConfig(): CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
    putSecurityHeadersConfig(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig): void;
    resetSecurityHeadersConfig(): void;
    get securityHeadersConfigInput(): CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined;
    private _serverTimingHeadersConfig;
    get serverTimingHeadersConfig(): CloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference;
    putServerTimingHeadersConfig(value: CloudfrontResponseHeadersPolicyServerTimingHeadersConfig): void;
    resetServerTimingHeadersConfig(): void;
    get serverTimingHeadersConfigInput(): CloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
