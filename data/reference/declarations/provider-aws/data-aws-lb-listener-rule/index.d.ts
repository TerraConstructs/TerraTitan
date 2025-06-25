/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#arn DataAwsLbListenerRule#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#listener_arn DataAwsLbListenerRule#listener_arn}
    */
    readonly listenerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#priority DataAwsLbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#action DataAwsLbListenerRule#action}
    */
    readonly action?: DataAwsLbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#condition DataAwsLbListenerRule#condition}
    */
    readonly condition?: DataAwsLbListenerRuleCondition[] | cdktf.IResolvable;
}
export interface DataAwsLbListenerRuleActionAuthenticateCognito {
}
export declare function dataAwsLbListenerRuleActionAuthenticateCognitoToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionAuthenticateCognito | cdktf.IResolvable | undefined);
    private _authenticationRequestExtraParams;
    get authenticationRequestExtraParams(): cdktf.StringMap;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get userPoolArn(): string;
    get userPoolClientId(): string;
    get userPoolDomain(): string;
}
export interface DataAwsLbListenerRuleActionAuthenticateOidc {
}
export declare function dataAwsLbListenerRuleActionAuthenticateOidcToTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionAuthenticateOidcToHclTerraform(struct?: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionAuthenticateOidc | cdktf.IResolvable | undefined);
    private _authenticationRequestExtraParams;
    get authenticationRequestExtraParams(): cdktf.StringMap;
    get authorizationEndpoint(): string;
    get clientId(): string;
    get issuer(): string;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get tokenEndpoint(): string;
    get userInfoEndpoint(): string;
}
export interface DataAwsLbListenerRuleActionFixedResponse {
}
export declare function dataAwsLbListenerRuleActionFixedResponseToTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionFixedResponseToHclTerraform(struct?: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionFixedResponse | cdktf.IResolvable | undefined);
    get contentType(): string;
    get messageBody(): string;
    get statusCode(): string;
}
export interface DataAwsLbListenerRuleActionForwardStickiness {
}
export declare function dataAwsLbListenerRuleActionForwardStickinessToTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionForwardStickinessToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionForwardStickiness | cdktf.IResolvable | undefined);
    get duration(): number;
    get enabled(): cdktf.IResolvable;
}
export interface DataAwsLbListenerRuleActionForwardTargetGroup {
}
export declare function dataAwsLbListenerRuleActionForwardTargetGroupToTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionForwardTargetGroupToHclTerraform(struct?: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined);
    get arn(): string;
    get weight(): number;
}
export declare class DataAwsLbListenerRuleActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLbListenerRuleActionForwardTargetGroupOutputReference;
}
export interface DataAwsLbListenerRuleActionForward {
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#target_group DataAwsLbListenerRule#target_group}
    */
    readonly targetGroup?: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
}
export declare function dataAwsLbListenerRuleActionForwardToTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionForwardToHclTerraform(struct?: DataAwsLbListenerRuleActionForward | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionForward | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionForward | cdktf.IResolvable | undefined);
    private _stickiness;
    get stickiness(): DataAwsLbListenerRuleActionForwardStickinessOutputReference;
    private _targetGroup;
    get targetGroup(): DataAwsLbListenerRuleActionForwardTargetGroupList;
    putTargetGroup(value: DataAwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable): void;
    resetTargetGroup(): void;
    get targetGroupInput(): cdktf.IResolvable | DataAwsLbListenerRuleActionForwardTargetGroup[] | undefined;
}
export interface DataAwsLbListenerRuleActionRedirect {
}
export declare function dataAwsLbListenerRuleActionRedirectToTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionRedirectToHclTerraform(struct?: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleActionRedirect | cdktf.IResolvable | undefined);
    get host(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get query(): string;
    get statusCode(): string;
}
export interface DataAwsLbListenerRuleAction {
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#forward DataAwsLbListenerRule#forward}
    */
    readonly forward?: DataAwsLbListenerRuleActionForward;
}
export declare function dataAwsLbListenerRuleActionToTerraform(struct?: DataAwsLbListenerRuleAction | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleActionToHclTerraform(struct?: DataAwsLbListenerRuleAction | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerRuleAction | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleAction | cdktf.IResolvable | undefined);
    get order(): number;
    get type(): string;
    private _authenticateCognito;
    get authenticateCognito(): DataAwsLbListenerRuleActionAuthenticateCognitoOutputReference;
    private _authenticateOidc;
    get authenticateOidc(): DataAwsLbListenerRuleActionAuthenticateOidcOutputReference;
    private _fixedResponse;
    get fixedResponse(): DataAwsLbListenerRuleActionFixedResponseOutputReference;
    private _forward;
    get forward(): DataAwsLbListenerRuleActionForwardOutputReference;
    putForward(value: DataAwsLbListenerRuleActionForward): void;
    resetForward(): void;
    get forwardInput(): cdktf.IResolvable | DataAwsLbListenerRuleActionForward | undefined;
    private _redirect;
    get redirect(): DataAwsLbListenerRuleActionRedirectOutputReference;
}
export declare class DataAwsLbListenerRuleActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLbListenerRuleAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLbListenerRuleActionOutputReference;
}
export interface DataAwsLbListenerRuleConditionHostHeader {
}
export declare function dataAwsLbListenerRuleConditionHostHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionHostHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionHostHeader | cdktf.IResolvable | undefined);
    get values(): string[];
}
export interface DataAwsLbListenerRuleConditionHttpHeader {
}
export declare function dataAwsLbListenerRuleConditionHttpHeaderToTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionHttpHeaderToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionHttpHeader | cdktf.IResolvable | undefined);
    get httpHeaderName(): string;
    get values(): string[];
}
export interface DataAwsLbListenerRuleConditionHttpRequestMethod {
}
export declare function dataAwsLbListenerRuleConditionHttpRequestMethodToTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionHttpRequestMethod | cdktf.IResolvable | undefined);
    get values(): string[];
}
export interface DataAwsLbListenerRuleConditionPathPattern {
}
export declare function dataAwsLbListenerRuleConditionPathPatternToTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionPathPatternToHclTerraform(struct?: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionPathPattern | cdktf.IResolvable | undefined);
    get values(): string[];
}
export interface DataAwsLbListenerRuleConditionQueryStringValues {
}
export declare function dataAwsLbListenerRuleConditionQueryStringValuesToTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionQueryStringValuesToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionQueryStringValuesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionQueryStringValues | cdktf.IResolvable | undefined);
    get key(): string;
    get value(): string;
}
export declare class DataAwsLbListenerRuleConditionQueryStringValuesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLbListenerRuleConditionQueryStringValuesOutputReference;
}
export interface DataAwsLbListenerRuleConditionQueryString {
    /**
    * values block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#values DataAwsLbListenerRule#values}
    */
    readonly values?: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable;
}
export declare function dataAwsLbListenerRuleConditionQueryStringToTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionQueryStringToHclTerraform(struct?: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined);
    private _values;
    get values(): DataAwsLbListenerRuleConditionQueryStringValuesList;
    putValues(value: DataAwsLbListenerRuleConditionQueryStringValues[] | cdktf.IResolvable): void;
    resetValues(): void;
    get valuesInput(): cdktf.IResolvable | DataAwsLbListenerRuleConditionQueryStringValues[] | undefined;
}
export interface DataAwsLbListenerRuleConditionSourceIp {
}
export declare function dataAwsLbListenerRuleConditionSourceIpToTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionSourceIpToHclTerraform(struct?: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleConditionSourceIp | cdktf.IResolvable | undefined);
    get values(): string[];
}
export interface DataAwsLbListenerRuleCondition {
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#query_string DataAwsLbListenerRule#query_string}
    */
    readonly queryString?: DataAwsLbListenerRuleConditionQueryString;
}
export declare function dataAwsLbListenerRuleConditionToTerraform(struct?: DataAwsLbListenerRuleCondition | cdktf.IResolvable): any;
export declare function dataAwsLbListenerRuleConditionToHclTerraform(struct?: DataAwsLbListenerRuleCondition | cdktf.IResolvable): any;
export declare class DataAwsLbListenerRuleConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerRuleCondition | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerRuleCondition | cdktf.IResolvable | undefined);
    private _hostHeader;
    get hostHeader(): DataAwsLbListenerRuleConditionHostHeaderOutputReference;
    private _httpHeader;
    get httpHeader(): DataAwsLbListenerRuleConditionHttpHeaderOutputReference;
    private _httpRequestMethod;
    get httpRequestMethod(): DataAwsLbListenerRuleConditionHttpRequestMethodOutputReference;
    private _pathPattern;
    get pathPattern(): DataAwsLbListenerRuleConditionPathPatternOutputReference;
    private _queryString;
    get queryString(): DataAwsLbListenerRuleConditionQueryStringOutputReference;
    putQueryString(value: DataAwsLbListenerRuleConditionQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): cdktf.IResolvable | DataAwsLbListenerRuleConditionQueryString | undefined;
    private _sourceIp;
    get sourceIp(): DataAwsLbListenerRuleConditionSourceIpOutputReference;
}
export declare class DataAwsLbListenerRuleConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLbListenerRuleCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLbListenerRuleConditionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule}
*/
export declare class DataAwsLbListenerRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lb_listener_rule";
    /**
    * Generates CDKTF code for importing a DataAwsLbListenerRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLbListenerRule to import
    * @param importFromId The id of the existing DataAwsLbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLbListenerRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/lb_listener_rule aws_lb_listener_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbListenerRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbListenerRuleConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    resetListenerArn(): void;
    get listenerArnInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    private _action;
    get action(): DataAwsLbListenerRuleActionList;
    putAction(value: DataAwsLbListenerRuleAction[] | cdktf.IResolvable): void;
    resetAction(): void;
    get actionInput(): cdktf.IResolvable | DataAwsLbListenerRuleAction[] | undefined;
    private _condition;
    get condition(): DataAwsLbListenerRuleConditionList;
    putCondition(value: DataAwsLbListenerRuleCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | DataAwsLbListenerRuleCondition[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
