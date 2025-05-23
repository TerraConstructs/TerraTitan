/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}
    */
    readonly name?: string;
}
export interface DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies {
}
export declare function dataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies): any;
export declare function dataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies): any;
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference;
}
export interface DataAwsCloudfrontOriginRequestPolicyCookiesConfig {
}
export declare function dataAwsCloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyCookiesConfig): any;
export declare function dataAwsCloudfrontOriginRequestPolicyCookiesConfigToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyCookiesConfig): any;
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyCookiesConfig | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyCookiesConfig | undefined);
    get cookieBehavior(): string;
    private _cookies;
    get cookies(): DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList;
}
export declare class DataAwsCloudfrontOriginRequestPolicyCookiesConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference;
}
export interface DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders {
}
export declare function dataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders): any;
export declare function dataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders): any;
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference;
}
export interface DataAwsCloudfrontOriginRequestPolicyHeadersConfig {
}
export declare function dataAwsCloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyHeadersConfig): any;
export declare function dataAwsCloudfrontOriginRequestPolicyHeadersConfigToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyHeadersConfig): any;
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyHeadersConfig | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyHeadersConfig | undefined);
    get headerBehavior(): string;
    private _headers;
    get headers(): DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList;
}
export declare class DataAwsCloudfrontOriginRequestPolicyHeadersConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference;
}
export interface DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
}
export declare function dataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any;
export declare function dataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any;
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined);
    get items(): string[];
}
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference;
}
export interface DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig {
}
export declare function dataAwsCloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig): any;
export declare function dataAwsCloudfrontOriginRequestPolicyQueryStringsConfigToHclTerraform(struct?: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig): any;
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig | undefined;
    set internalValue(value: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig | undefined);
    get queryStringBehavior(): string;
    private _queryStrings;
    get queryStrings(): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList;
}
export declare class DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}
*/
export declare class DataAwsCloudfrontOriginRequestPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudfront_origin_request_policy";
    /**
    * Generates CDKTF code for importing a DataAwsCloudfrontOriginRequestPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudfrontOriginRequestPolicy to import
    * @param importFromId The id of the existing DataAwsCloudfrontOriginRequestPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_request_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudfrontOriginRequestPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontOriginRequestPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontOriginRequestPolicyConfig);
    get comment(): string;
    private _cookiesConfig;
    get cookiesConfig(): DataAwsCloudfrontOriginRequestPolicyCookiesConfigList;
    get etag(): string;
    private _headersConfig;
    get headersConfig(): DataAwsCloudfrontOriginRequestPolicyHeadersConfigList;
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
    private _queryStringsConfig;
    get queryStringsConfig(): DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
