/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * custom_response_body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}
    */
    readonly customResponseBody?: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}
    */
    readonly rule?: Wafv2RuleGroupRule[] | cdktf.IResolvable;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
    */
    readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
}
export interface Wafv2RuleGroupCustomResponseBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}
    */
    readonly key: string;
}
export declare function wafv2RuleGroupCustomResponseBodyToTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any;
export declare function wafv2RuleGroupCustomResponseBodyToHclTerraform(struct?: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupCustomResponseBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupCustomResponseBody | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export declare class Wafv2RuleGroupCustomResponseBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupCustomResponseBodyOutputReference;
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionAllowCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionAllowCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionAllow {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionAllowToTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any;
export declare function wafv2RuleGroupRuleActionAllowToHclTerraform(struct?: Wafv2RuleGroupRuleActionAllowOutputReference | Wafv2RuleGroupRuleActionAllow): any;
export declare class Wafv2RuleGroupRuleActionAllowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionAllow | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionAllow | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionAllowCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionBlockCustomResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}
    */
    readonly customResponseBodyKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}
    */
    readonly responseCode: number;
    /**
    * response_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}
    */
    readonly responseHeader?: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any;
export declare function wafv2RuleGroupRuleActionBlockCustomResponseToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference | Wafv2RuleGroupRuleActionBlockCustomResponse): any;
export declare class Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionBlockCustomResponse | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlockCustomResponse | undefined);
    private _customResponseBodyKey?;
    get customResponseBodyKey(): string;
    set customResponseBodyKey(value: string);
    resetCustomResponseBodyKey(): void;
    get customResponseBodyKeyInput(): string | undefined;
    private _responseCode?;
    get responseCode(): number;
    set responseCode(value: number);
    get responseCodeInput(): number | undefined;
    private _responseHeader;
    get responseHeader(): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList;
    putResponseHeader(value: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable): void;
    resetResponseHeader(): void;
    get responseHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionBlock {
    /**
    * custom_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}
    */
    readonly customResponse?: Wafv2RuleGroupRuleActionBlockCustomResponse;
}
export declare function wafv2RuleGroupRuleActionBlockToTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any;
export declare function wafv2RuleGroupRuleActionBlockToHclTerraform(struct?: Wafv2RuleGroupRuleActionBlockOutputReference | Wafv2RuleGroupRuleActionBlock): any;
export declare class Wafv2RuleGroupRuleActionBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionBlock | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionBlock | undefined);
    private _customResponse;
    get customResponse(): Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference;
    putCustomResponse(value: Wafv2RuleGroupRuleActionBlockCustomResponse): void;
    resetCustomResponse(): void;
    get customResponseInput(): Wafv2RuleGroupRuleActionBlockCustomResponse | undefined;
}
export interface Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionCaptcha {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionCaptchaToTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaOutputReference | Wafv2RuleGroupRuleActionCaptcha): any;
export declare function wafv2RuleGroupRuleActionCaptchaToHclTerraform(struct?: Wafv2RuleGroupRuleActionCaptchaOutputReference | Wafv2RuleGroupRuleActionCaptcha): any;
export declare class Wafv2RuleGroupRuleActionCaptchaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCaptcha | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCaptcha | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionChallengeCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionChallenge {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionChallengeToTerraform(struct?: Wafv2RuleGroupRuleActionChallengeOutputReference | Wafv2RuleGroupRuleActionChallenge): any;
export declare function wafv2RuleGroupRuleActionChallengeToHclTerraform(struct?: Wafv2RuleGroupRuleActionChallengeOutputReference | Wafv2RuleGroupRuleActionChallenge): any;
export declare class Wafv2RuleGroupRuleActionChallengeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionChallenge | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionChallenge | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionChallengeCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}
    */
    readonly value: string;
}
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2RuleGroupRuleActionCountCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}
    */
    readonly insertHeader: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any;
export declare function wafv2RuleGroupRuleActionCountCustomRequestHandlingToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference | Wafv2RuleGroupRuleActionCountCustomRequestHandling): any;
export declare class Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2RuleGroupRuleActionCount {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
}
export declare function wafv2RuleGroupRuleActionCountToTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any;
export declare function wafv2RuleGroupRuleActionCountToHclTerraform(struct?: Wafv2RuleGroupRuleActionCountOutputReference | Wafv2RuleGroupRuleActionCount): any;
export declare class Wafv2RuleGroupRuleActionCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleActionCount | undefined;
    set internalValue(value: Wafv2RuleGroupRuleActionCount | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2RuleGroupRuleActionCountCustomRequestHandling | undefined;
}
export interface Wafv2RuleGroupRuleAction {
    /**
    * allow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}
    */
    readonly allow?: Wafv2RuleGroupRuleActionAllow;
    /**
    * block block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}
    */
    readonly block?: Wafv2RuleGroupRuleActionBlock;
    /**
    * captcha block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}
    */
    readonly captcha?: Wafv2RuleGroupRuleActionCaptcha;
    /**
    * challenge block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}
    */
    readonly challenge?: Wafv2RuleGroupRuleActionChallenge;
    /**
    * count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}
    */
    readonly count?: Wafv2RuleGroupRuleActionCount;
}
export declare function wafv2RuleGroupRuleActionToTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any;
export declare function wafv2RuleGroupRuleActionToHclTerraform(struct?: Wafv2RuleGroupRuleActionOutputReference | Wafv2RuleGroupRuleAction): any;
export declare class Wafv2RuleGroupRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleAction | undefined;
    set internalValue(value: Wafv2RuleGroupRuleAction | undefined);
    private _allow;
    get allow(): Wafv2RuleGroupRuleActionAllowOutputReference;
    putAllow(value: Wafv2RuleGroupRuleActionAllow): void;
    resetAllow(): void;
    get allowInput(): Wafv2RuleGroupRuleActionAllow | undefined;
    private _block;
    get block(): Wafv2RuleGroupRuleActionBlockOutputReference;
    putBlock(value: Wafv2RuleGroupRuleActionBlock): void;
    resetBlock(): void;
    get blockInput(): Wafv2RuleGroupRuleActionBlock | undefined;
    private _captcha;
    get captcha(): Wafv2RuleGroupRuleActionCaptchaOutputReference;
    putCaptcha(value: Wafv2RuleGroupRuleActionCaptcha): void;
    resetCaptcha(): void;
    get captchaInput(): Wafv2RuleGroupRuleActionCaptcha | undefined;
    private _challenge;
    get challenge(): Wafv2RuleGroupRuleActionChallengeOutputReference;
    putChallenge(value: Wafv2RuleGroupRuleActionChallenge): void;
    resetChallenge(): void;
    get challengeInput(): Wafv2RuleGroupRuleActionChallenge | undefined;
    private _count;
    get count(): Wafv2RuleGroupRuleActionCountOutputReference;
    putCount(value: Wafv2RuleGroupRuleActionCount): void;
    resetCount(): void;
    get countInput(): Wafv2RuleGroupRuleActionCount | undefined;
}
export interface Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}
    */
    readonly immunityTime?: number;
}
export declare function wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): any;
export declare function wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): any;
export declare class Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty | undefined;
    set internalValue(value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty | undefined);
    private _immunityTime?;
    get immunityTime(): number;
    set immunityTime(value: number);
    resetImmunityTime(): void;
    get immunityTimeInput(): number | undefined;
}
export interface Wafv2RuleGroupRuleCaptchaConfig {
    /**
    * immunity_time_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}
    */
    readonly immunityTimeProperty?: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty;
}
export declare function wafv2RuleGroupRuleCaptchaConfigToTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigOutputReference | Wafv2RuleGroupRuleCaptchaConfig): any;
export declare function wafv2RuleGroupRuleCaptchaConfigToHclTerraform(struct?: Wafv2RuleGroupRuleCaptchaConfigOutputReference | Wafv2RuleGroupRuleCaptchaConfig): any;
export declare class Wafv2RuleGroupRuleCaptchaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleCaptchaConfig | undefined;
    set internalValue(value: Wafv2RuleGroupRuleCaptchaConfig | undefined);
    private _immunityTimeProperty;
    get immunityTimeProperty(): Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference;
    putImmunityTimeProperty(value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): void;
    resetImmunityTimeProperty(): void;
    get immunityTimePropertyInput(): Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty | undefined;
}
export interface Wafv2RuleGroupRuleRuleLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
}
export declare function wafv2RuleGroupRuleRuleLabelToTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleRuleLabelToHclTerraform(struct?: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleRuleLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRuleRuleLabel | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Wafv2RuleGroupRuleRuleLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleRuleLabelOutputReference;
}
export interface Wafv2RuleGroupRuleVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any;
export declare function wafv2RuleGroupRuleVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfigOutputReference | Wafv2RuleGroupRuleVisibilityConfig): any;
export declare class Wafv2RuleGroupRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupRuleVisibilityConfig | undefined;
    set internalValue(value: Wafv2RuleGroupRuleVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Wafv2RuleGroupRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}
    */
    readonly priority: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}
    */
    readonly action: Wafv2RuleGroupRuleAction;
    /**
    * captcha_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}
    */
    readonly captchaConfig?: Wafv2RuleGroupRuleCaptchaConfig;
    /**
    * rule_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}
    */
    readonly ruleLabel?: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}
    */
    readonly statement?: any;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}
    */
    readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig;
}
export declare function wafv2RuleGroupRuleToTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any;
export declare function wafv2RuleGroupRuleToHclTerraform(struct?: Wafv2RuleGroupRule | cdktf.IResolvable): any;
export declare class Wafv2RuleGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RuleGroupRule | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RuleGroupRule | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _action;
    get action(): Wafv2RuleGroupRuleActionOutputReference;
    putAction(value: Wafv2RuleGroupRuleAction): void;
    get actionInput(): Wafv2RuleGroupRuleAction | undefined;
    private _captchaConfig;
    get captchaConfig(): Wafv2RuleGroupRuleCaptchaConfigOutputReference;
    putCaptchaConfig(value: Wafv2RuleGroupRuleCaptchaConfig): void;
    resetCaptchaConfig(): void;
    get captchaConfigInput(): Wafv2RuleGroupRuleCaptchaConfig | undefined;
    private _ruleLabel;
    get ruleLabel(): Wafv2RuleGroupRuleRuleLabelList;
    putRuleLabel(value: Wafv2RuleGroupRuleRuleLabel[] | cdktf.IResolvable): void;
    resetRuleLabel(): void;
    get ruleLabelInput(): cdktf.IResolvable | Wafv2RuleGroupRuleRuleLabel[] | undefined;
    private _statement?;
    get statement(): any;
    set statement(value: any);
    resetStatement(): void;
    get statementInput(): any;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupRuleVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2RuleGroupRuleVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2RuleGroupRuleVisibilityConfig | undefined;
}
export declare class Wafv2RuleGroupRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RuleGroupRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RuleGroupRuleOutputReference;
}
export interface Wafv2RuleGroupVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2RuleGroupVisibilityConfigToTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any;
export declare function wafv2RuleGroupVisibilityConfigToHclTerraform(struct?: Wafv2RuleGroupVisibilityConfigOutputReference | Wafv2RuleGroupVisibilityConfig): any;
export declare class Wafv2RuleGroupVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2RuleGroupVisibilityConfig | undefined;
    set internalValue(value: Wafv2RuleGroupVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}
*/
export declare class Wafv2RuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_rule_group";
    /**
    * Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2RuleGroup to import
    * @param importFromId The id of the existing Wafv2RuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2RuleGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig);
    get arn(): string;
    private _capacity?;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number | undefined;
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
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
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
    private _customResponseBody;
    get customResponseBody(): Wafv2RuleGroupCustomResponseBodyList;
    putCustomResponseBody(value: Wafv2RuleGroupCustomResponseBody[] | cdktf.IResolvable): void;
    resetCustomResponseBody(): void;
    get customResponseBodyInput(): cdktf.IResolvable | Wafv2RuleGroupCustomResponseBody[] | undefined;
    private _rule;
    get rule(): Wafv2RuleGroupRuleList;
    putRule(value: Wafv2RuleGroupRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | Wafv2RuleGroupRule[] | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2RuleGroupVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2RuleGroupVisibilityConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
