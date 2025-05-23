/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}
    */
    readonly authorizationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#description CloudwatchEventConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#id CloudwatchEventConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#name CloudwatchEventConnection#name}
    */
    readonly name: string;
    /**
    * auth_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}
    */
    readonly authParameters: CloudwatchEventConnectionAuthParameters;
    /**
    * invocation_connectivity_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#invocation_connectivity_parameters CloudwatchEventConnection#invocation_connectivity_parameters}
    */
    readonly invocationConnectivityParameters?: CloudwatchEventConnectionInvocationConnectivityParameters;
}
export interface CloudwatchEventConnectionAuthParametersApiKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value: string;
}
export declare function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any;
export declare function cloudwatchEventConnectionAuthParametersApiKeyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any;
export declare class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersApiKey | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersApiKey | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface CloudwatchEventConnectionAuthParametersBasic {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#password CloudwatchEventConnection#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#username CloudwatchEventConnection#username}
    */
    readonly username: string;
}
export declare function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any;
export declare function cloudwatchEventConnectionAuthParametersBasicToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any;
export declare class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersBasic | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersBasic | undefined);
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable;
}
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any;
export declare function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any;
export declare class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined);
    private _body;
    get body(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList;
    putBody(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | cdktf.IResolvable): void;
    resetBody(): void;
    get bodyInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | undefined;
    private _header;
    get header(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList;
    putHeader(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | undefined;
    private _queryString;
    get queryString(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList;
    putQueryString(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | cdktf.IResolvable): void;
    resetQueryString(): void;
    get queryStringInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | undefined;
}
export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}
    */
    readonly clientSecret: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any;
export declare function cloudwatchEventConnectionAuthParametersOauthClientParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable): any;
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | cdktf.IResolvable | undefined);
    private _isValueSecret?;
    get isValueSecret(): boolean | cdktf.IResolvable;
    set isValueSecret(value: boolean | cdktf.IResolvable);
    resetIsValueSecret(): void;
    get isValueSecretInput(): boolean | cdktf.IResolvable | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference;
}
export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable;
}
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any;
export declare function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined);
    private _body;
    get body(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList;
    putBody(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | cdktf.IResolvable): void;
    resetBody(): void;
    get bodyInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | undefined;
    private _header;
    get header(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList;
    putHeader(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | undefined;
    private _queryString;
    get queryString(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList;
    putQueryString(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | cdktf.IResolvable): void;
    resetQueryString(): void;
    get queryStringInput(): cdktf.IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | undefined;
}
export interface CloudwatchEventConnectionAuthParametersOauth {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}
    */
    readonly httpMethod: string;
    /**
    * client_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}
    */
    readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters;
    /**
    * oauth_http_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
    */
    readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
}
export declare function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any;
export declare function cloudwatchEventConnectionAuthParametersOauthToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any;
export declare class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParametersOauth | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParametersOauth | undefined);
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _clientParameters;
    get clientParameters(): CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference;
    putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters): void;
    resetClientParameters(): void;
    get clientParametersInput(): CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined;
    private _oauthHttpParameters;
    get oauthHttpParameters(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference;
    putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): void;
    get oauthHttpParametersInput(): CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters | undefined;
}
export interface CloudwatchEventConnectionAuthParameters {
    /**
    * api_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}
    */
    readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey;
    /**
    * basic block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}
    */
    readonly basic?: CloudwatchEventConnectionAuthParametersBasic;
    /**
    * invocation_http_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
    */
    readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
    /**
    * oauth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}
    */
    readonly oauth?: CloudwatchEventConnectionAuthParametersOauth;
}
export declare function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any;
export declare function cloudwatchEventConnectionAuthParametersToHclTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any;
export declare class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionAuthParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionAuthParameters | undefined);
    private _apiKey;
    get apiKey(): CloudwatchEventConnectionAuthParametersApiKeyOutputReference;
    putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey): void;
    resetApiKey(): void;
    get apiKeyInput(): CloudwatchEventConnectionAuthParametersApiKey | undefined;
    private _basic;
    get basic(): CloudwatchEventConnectionAuthParametersBasicOutputReference;
    putBasic(value: CloudwatchEventConnectionAuthParametersBasic): void;
    resetBasic(): void;
    get basicInput(): CloudwatchEventConnectionAuthParametersBasic | undefined;
    private _invocationHttpParameters;
    get invocationHttpParameters(): CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference;
    putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters): void;
    resetInvocationHttpParameters(): void;
    get invocationHttpParametersInput(): CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined;
    private _oauth;
    get oauth(): CloudwatchEventConnectionAuthParametersOauthOutputReference;
    putOauth(value: CloudwatchEventConnectionAuthParametersOauth): void;
    resetOauth(): void;
    get oauthInput(): CloudwatchEventConnectionAuthParametersOauth | undefined;
}
export interface CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#resource_configuration_arn CloudwatchEventConnection#resource_configuration_arn}
    */
    readonly resourceConfigurationArn: string;
}
export declare function cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters): any;
export declare function cloudwatchEventConnectionInvocationConnectivityParametersResourceParametersToHclTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters): any;
export declare class CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters | undefined);
    get resourceAssociationArn(): string;
    private _resourceConfigurationArn?;
    get resourceConfigurationArn(): string;
    set resourceConfigurationArn(value: string);
    get resourceConfigurationArnInput(): string | undefined;
}
export interface CloudwatchEventConnectionInvocationConnectivityParameters {
    /**
    * resource_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#resource_parameters CloudwatchEventConnection#resource_parameters}
    */
    readonly resourceParameters: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters;
}
export declare function cloudwatchEventConnectionInvocationConnectivityParametersToTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParameters): any;
export declare function cloudwatchEventConnectionInvocationConnectivityParametersToHclTerraform(struct?: CloudwatchEventConnectionInvocationConnectivityParametersOutputReference | CloudwatchEventConnectionInvocationConnectivityParameters): any;
export declare class CloudwatchEventConnectionInvocationConnectivityParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventConnectionInvocationConnectivityParameters | undefined;
    set internalValue(value: CloudwatchEventConnectionInvocationConnectivityParameters | undefined);
    private _resourceParameters;
    get resourceParameters(): CloudwatchEventConnectionInvocationConnectivityParametersResourceParametersOutputReference;
    putResourceParameters(value: CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters): void;
    get resourceParametersInput(): CloudwatchEventConnectionInvocationConnectivityParametersResourceParameters | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection}
*/
export declare class CloudwatchEventConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_connection";
    /**
    * Generates CDKTF code for importing a CloudwatchEventConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventConnection to import
    * @param importFromId The id of the existing CloudwatchEventConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_connection aws_cloudwatch_event_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventConnectionConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig);
    get arn(): string;
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    get authorizationTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get secretArn(): string;
    private _authParameters;
    get authParameters(): CloudwatchEventConnectionAuthParametersOutputReference;
    putAuthParameters(value: CloudwatchEventConnectionAuthParameters): void;
    get authParametersInput(): CloudwatchEventConnectionAuthParameters | undefined;
    private _invocationConnectivityParameters;
    get invocationConnectivityParameters(): CloudwatchEventConnectionInvocationConnectivityParametersOutputReference;
    putInvocationConnectivityParameters(value: CloudwatchEventConnectionInvocationConnectivityParameters): void;
    resetInvocationConnectivityParameters(): void;
    get invocationConnectivityParametersInput(): CloudwatchEventConnectionInvocationConnectivityParameters | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
