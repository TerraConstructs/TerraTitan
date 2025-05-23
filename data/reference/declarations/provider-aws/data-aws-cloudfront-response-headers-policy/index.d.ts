/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_response_headers_policy#id DataAwsCloudfrontResponseHeadersPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_response_headers_policy#name DataAwsCloudfrontResponseHeadersPolicy#name}
    */
    readonly name?: string;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCorsConfig {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfig): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCorsConfigToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCorsConfig): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCorsConfig | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCorsConfig | undefined);
    get accessControlAllowCredentials(): cdktf.IResolvable;
    private _accessControlAllowHeaders;
    get accessControlAllowHeaders(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersList;
    private _accessControlAllowMethods;
    get accessControlAllowMethods(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsList;
    private _accessControlAllowOrigins;
    get accessControlAllowOrigins(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsList;
    private _accessControlExposeHeaders;
    get accessControlExposeHeaders(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersList;
    get accessControlMaxAgeSec(): number;
    get originOverride(): cdktf.IResolvable;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCorsConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCorsConfigOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItems | undefined);
    get header(): string;
    get override(): cdktf.IResolvable;
    get value(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined);
    private _items;
    get items(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigItemsList;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItems {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItems): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItems): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItems | undefined);
    get header(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfig {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfig): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfig): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfig | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfig | undefined);
    private _items;
    get items(): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigItemsList;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined);
    get contentSecurityPolicy(): string;
    get override(): cdktf.IResolvable;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined);
    get override(): cdktf.IResolvable;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined);
    get frameOption(): string;
    get override(): cdktf.IResolvable;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined);
    get override(): cdktf.IResolvable;
    get referrerPolicy(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined);
    get accessControlMaxAgeSec(): number;
    get includeSubdomains(): cdktf.IResolvable;
    get override(): cdktf.IResolvable;
    get preload(): cdktf.IResolvable;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined);
    get modeBlock(): cdktf.IResolvable;
    get override(): cdktf.IResolvable;
    get protection(): cdktf.IResolvable;
    get reportUri(): string;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig {
}
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig): any;
export declare function dataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig): any;
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined);
    private _contentSecurityPolicy;
    get contentSecurityPolicy(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyList;
    private _contentTypeOptions;
    get contentTypeOptions(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsList;
    private _frameOptions;
    get frameOptions(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsList;
    private _referrerPolicy;
    get referrerPolicy(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyList;
    private _strictTransportSecurity;
    get strictTransportSecurity(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityList;
    private _xssProtection;
    get xssProtection(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionList;
}
export declare class DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference;
}
export interface DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig {
}
export declare function dataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigToTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any;
export declare function dataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigToHclTerraform(struct?: DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig): any;
export declare class DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined;
    set internalValue(value: DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfig | undefined);
    get enabled(): cdktf.IResolvable;
    get samplingRate(): number;
}
export declare class DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy}
*/
export declare class DataAwsCloudfrontResponseHeadersPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudfront_response_headers_policy";
    /**
    * Generates CDKTF code for importing a DataAwsCloudfrontResponseHeadersPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudfrontResponseHeadersPolicy to import
    * @param importFromId The id of the existing DataAwsCloudfrontResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudfrontResponseHeadersPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_response_headers_policy aws_cloudfront_response_headers_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontResponseHeadersPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontResponseHeadersPolicyConfig);
    get comment(): string;
    private _corsConfig;
    get corsConfig(): DataAwsCloudfrontResponseHeadersPolicyCorsConfigList;
    private _customHeadersConfig;
    get customHeadersConfig(): DataAwsCloudfrontResponseHeadersPolicyCustomHeadersConfigList;
    get etag(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _removeHeadersConfig;
    get removeHeadersConfig(): DataAwsCloudfrontResponseHeadersPolicyRemoveHeadersConfigList;
    private _securityHeadersConfig;
    get securityHeadersConfig(): DataAwsCloudfrontResponseHeadersPolicySecurityHeadersConfigList;
    private _serverTimingHeadersConfig;
    get serverTimingHeadersConfig(): DataAwsCloudfrontResponseHeadersPolicyServerTimingHeadersConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
