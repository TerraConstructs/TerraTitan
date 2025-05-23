/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#id VpclatticeListenerRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#listener_identifier VpclatticeListenerRule#listener_identifier}
    */
    readonly listenerIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#priority VpclatticeListenerRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#service_identifier VpclatticeListenerRule#service_identifier}
    */
    readonly serviceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#tags VpclatticeListenerRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#tags_all VpclatticeListenerRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#action VpclatticeListenerRule#action}
    */
    readonly action: VpclatticeListenerRuleAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}
    */
    readonly match: VpclatticeListenerRuleMatch;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#timeouts VpclatticeListenerRule#timeouts}
    */
    readonly timeouts?: VpclatticeListenerRuleTimeouts;
}
export interface VpclatticeListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#status_code VpclatticeListenerRule#status_code}
    */
    readonly statusCode: number;
}
export declare function vpclatticeListenerRuleActionFixedResponseToTerraform(struct?: VpclatticeListenerRuleActionFixedResponseOutputReference | VpclatticeListenerRuleActionFixedResponse): any;
export declare function vpclatticeListenerRuleActionFixedResponseToHclTerraform(struct?: VpclatticeListenerRuleActionFixedResponseOutputReference | VpclatticeListenerRuleActionFixedResponse): any;
export declare class VpclatticeListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleActionFixedResponse | undefined;
    set internalValue(value: VpclatticeListenerRuleActionFixedResponse | undefined);
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    get statusCodeInput(): number | undefined;
}
export interface VpclatticeListenerRuleActionForwardTargetGroups {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#target_group_identifier VpclatticeListenerRule#target_group_identifier}
    */
    readonly targetGroupIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#weight VpclatticeListenerRule#weight}
    */
    readonly weight?: number;
}
export declare function vpclatticeListenerRuleActionForwardTargetGroupsToTerraform(struct?: VpclatticeListenerRuleActionForwardTargetGroups | cdktf.IResolvable): any;
export declare function vpclatticeListenerRuleActionForwardTargetGroupsToHclTerraform(struct?: VpclatticeListenerRuleActionForwardTargetGroups | cdktf.IResolvable): any;
export declare class VpclatticeListenerRuleActionForwardTargetGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeListenerRuleActionForwardTargetGroups | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerRuleActionForwardTargetGroups | cdktf.IResolvable | undefined);
    private _targetGroupIdentifier?;
    get targetGroupIdentifier(): string;
    set targetGroupIdentifier(value: string);
    get targetGroupIdentifierInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class VpclatticeListenerRuleActionForwardTargetGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeListenerRuleActionForwardTargetGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeListenerRuleActionForwardTargetGroupsOutputReference;
}
export interface VpclatticeListenerRuleActionForward {
    /**
    * target_groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#target_groups VpclatticeListenerRule#target_groups}
    */
    readonly targetGroups: VpclatticeListenerRuleActionForwardTargetGroups[] | cdktf.IResolvable;
}
export declare function vpclatticeListenerRuleActionForwardToTerraform(struct?: VpclatticeListenerRuleActionForwardOutputReference | VpclatticeListenerRuleActionForward): any;
export declare function vpclatticeListenerRuleActionForwardToHclTerraform(struct?: VpclatticeListenerRuleActionForwardOutputReference | VpclatticeListenerRuleActionForward): any;
export declare class VpclatticeListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleActionForward | undefined;
    set internalValue(value: VpclatticeListenerRuleActionForward | undefined);
    private _targetGroups;
    get targetGroups(): VpclatticeListenerRuleActionForwardTargetGroupsList;
    putTargetGroups(value: VpclatticeListenerRuleActionForwardTargetGroups[] | cdktf.IResolvable): void;
    get targetGroupsInput(): cdktf.IResolvable | VpclatticeListenerRuleActionForwardTargetGroups[] | undefined;
}
export interface VpclatticeListenerRuleAction {
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#fixed_response VpclatticeListenerRule#fixed_response}
    */
    readonly fixedResponse?: VpclatticeListenerRuleActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#forward VpclatticeListenerRule#forward}
    */
    readonly forward?: VpclatticeListenerRuleActionForward;
}
export declare function vpclatticeListenerRuleActionToTerraform(struct?: VpclatticeListenerRuleActionOutputReference | VpclatticeListenerRuleAction): any;
export declare function vpclatticeListenerRuleActionToHclTerraform(struct?: VpclatticeListenerRuleActionOutputReference | VpclatticeListenerRuleAction): any;
export declare class VpclatticeListenerRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleAction | undefined;
    set internalValue(value: VpclatticeListenerRuleAction | undefined);
    private _fixedResponse;
    get fixedResponse(): VpclatticeListenerRuleActionFixedResponseOutputReference;
    putFixedResponse(value: VpclatticeListenerRuleActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): VpclatticeListenerRuleActionFixedResponse | undefined;
    private _forward;
    get forward(): VpclatticeListenerRuleActionForwardOutputReference;
    putForward(value: VpclatticeListenerRuleActionForward): void;
    resetForward(): void;
    get forwardInput(): VpclatticeListenerRuleActionForward | undefined;
}
export interface VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#contains VpclatticeListenerRule#contains}
    */
    readonly contains?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}
    */
    readonly prefix?: string;
}
export declare function vpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchToTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch): any;
export declare function vpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchToHclTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch): any;
export declare class VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch | undefined;
    set internalValue(value: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch | undefined);
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string | undefined;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface VpclatticeListenerRuleMatchHttpMatchHeaderMatches {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}
    */
    readonly caseSensitive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#name VpclatticeListenerRule#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}
    */
    readonly match: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch;
}
export declare function vpclatticeListenerRuleMatchHttpMatchHeaderMatchesToTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchHeaderMatches | cdktf.IResolvable): any;
export declare function vpclatticeListenerRuleMatchHttpMatchHeaderMatchesToHclTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchHeaderMatches | cdktf.IResolvable): any;
export declare class VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeListenerRuleMatchHttpMatchHeaderMatches | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerRuleMatchHttpMatchHeaderMatches | cdktf.IResolvable | undefined);
    private _caseSensitive?;
    get caseSensitive(): boolean | cdktf.IResolvable;
    set caseSensitive(value: boolean | cdktf.IResolvable);
    resetCaseSensitive(): void;
    get caseSensitiveInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatchOutputReference;
    putMatch(value: VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch): void;
    get matchInput(): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesMatch | undefined;
}
export declare class VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeListenerRuleMatchHttpMatchHeaderMatches[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesOutputReference;
}
export interface VpclatticeListenerRuleMatchHttpMatchPathMatchMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#exact VpclatticeListenerRule#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#prefix VpclatticeListenerRule#prefix}
    */
    readonly prefix?: string;
}
export declare function vpclatticeListenerRuleMatchHttpMatchPathMatchMatchToTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchPathMatchMatch): any;
export declare function vpclatticeListenerRuleMatchHttpMatchPathMatchMatchToHclTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchPathMatchMatch): any;
export declare class VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleMatchHttpMatchPathMatchMatch | undefined;
    set internalValue(value: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface VpclatticeListenerRuleMatchHttpMatchPathMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#case_sensitive VpclatticeListenerRule#case_sensitive}
    */
    readonly caseSensitive?: boolean | cdktf.IResolvable;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#match VpclatticeListenerRule#match}
    */
    readonly match: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch;
}
export declare function vpclatticeListenerRuleMatchHttpMatchPathMatchToTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchPathMatch): any;
export declare function vpclatticeListenerRuleMatchHttpMatchPathMatchToHclTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference | VpclatticeListenerRuleMatchHttpMatchPathMatch): any;
export declare class VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleMatchHttpMatchPathMatch | undefined;
    set internalValue(value: VpclatticeListenerRuleMatchHttpMatchPathMatch | undefined);
    private _caseSensitive?;
    get caseSensitive(): boolean | cdktf.IResolvable;
    set caseSensitive(value: boolean | cdktf.IResolvable);
    resetCaseSensitive(): void;
    get caseSensitiveInput(): boolean | cdktf.IResolvable | undefined;
    private _match;
    get match(): VpclatticeListenerRuleMatchHttpMatchPathMatchMatchOutputReference;
    putMatch(value: VpclatticeListenerRuleMatchHttpMatchPathMatchMatch): void;
    get matchInput(): VpclatticeListenerRuleMatchHttpMatchPathMatchMatch | undefined;
}
export interface VpclatticeListenerRuleMatchHttpMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#method VpclatticeListenerRule#method}
    */
    readonly method?: string;
    /**
    * header_matches block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#header_matches VpclatticeListenerRule#header_matches}
    */
    readonly headerMatches?: VpclatticeListenerRuleMatchHttpMatchHeaderMatches[] | cdktf.IResolvable;
    /**
    * path_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#path_match VpclatticeListenerRule#path_match}
    */
    readonly pathMatch?: VpclatticeListenerRuleMatchHttpMatchPathMatch;
}
export declare function vpclatticeListenerRuleMatchHttpMatchToTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchOutputReference | VpclatticeListenerRuleMatchHttpMatch): any;
export declare function vpclatticeListenerRuleMatchHttpMatchToHclTerraform(struct?: VpclatticeListenerRuleMatchHttpMatchOutputReference | VpclatticeListenerRuleMatchHttpMatch): any;
export declare class VpclatticeListenerRuleMatchHttpMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleMatchHttpMatch | undefined;
    set internalValue(value: VpclatticeListenerRuleMatchHttpMatch | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string | undefined;
    private _headerMatches;
    get headerMatches(): VpclatticeListenerRuleMatchHttpMatchHeaderMatchesList;
    putHeaderMatches(value: VpclatticeListenerRuleMatchHttpMatchHeaderMatches[] | cdktf.IResolvable): void;
    resetHeaderMatches(): void;
    get headerMatchesInput(): cdktf.IResolvable | VpclatticeListenerRuleMatchHttpMatchHeaderMatches[] | undefined;
    private _pathMatch;
    get pathMatch(): VpclatticeListenerRuleMatchHttpMatchPathMatchOutputReference;
    putPathMatch(value: VpclatticeListenerRuleMatchHttpMatchPathMatch): void;
    resetPathMatch(): void;
    get pathMatchInput(): VpclatticeListenerRuleMatchHttpMatchPathMatch | undefined;
}
export interface VpclatticeListenerRuleMatch {
    /**
    * http_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#http_match VpclatticeListenerRule#http_match}
    */
    readonly httpMatch?: VpclatticeListenerRuleMatchHttpMatch;
}
export declare function vpclatticeListenerRuleMatchToTerraform(struct?: VpclatticeListenerRuleMatchOutputReference | VpclatticeListenerRuleMatch): any;
export declare function vpclatticeListenerRuleMatchToHclTerraform(struct?: VpclatticeListenerRuleMatchOutputReference | VpclatticeListenerRuleMatch): any;
export declare class VpclatticeListenerRuleMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleMatch | undefined;
    set internalValue(value: VpclatticeListenerRuleMatch | undefined);
    private _httpMatch;
    get httpMatch(): VpclatticeListenerRuleMatchHttpMatchOutputReference;
    putHttpMatch(value: VpclatticeListenerRuleMatchHttpMatch): void;
    resetHttpMatch(): void;
    get httpMatchInput(): VpclatticeListenerRuleMatchHttpMatch | undefined;
}
export interface VpclatticeListenerRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#create VpclatticeListenerRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#delete VpclatticeListenerRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#update VpclatticeListenerRule#update}
    */
    readonly update?: string;
}
export declare function vpclatticeListenerRuleTimeoutsToTerraform(struct?: VpclatticeListenerRuleTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeListenerRuleTimeoutsToHclTerraform(struct?: VpclatticeListenerRuleTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeListenerRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule aws_vpclattice_listener_rule}
*/
export declare class VpclatticeListenerRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_listener_rule";
    /**
    * Generates CDKTF code for importing a VpclatticeListenerRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeListenerRule to import
    * @param importFromId The id of the existing VpclatticeListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeListenerRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener_rule aws_vpclattice_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeListenerRuleConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeListenerRuleConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _listenerIdentifier?;
    get listenerIdentifier(): string;
    set listenerIdentifier(value: string);
    get listenerIdentifierInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    get ruleId(): string;
    private _serviceIdentifier?;
    get serviceIdentifier(): string;
    set serviceIdentifier(value: string);
    get serviceIdentifierInput(): string | undefined;
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
    private _action;
    get action(): VpclatticeListenerRuleActionOutputReference;
    putAction(value: VpclatticeListenerRuleAction): void;
    get actionInput(): VpclatticeListenerRuleAction | undefined;
    private _match;
    get match(): VpclatticeListenerRuleMatchOutputReference;
    putMatch(value: VpclatticeListenerRuleMatch): void;
    get matchInput(): VpclatticeListenerRuleMatch | undefined;
    private _timeouts;
    get timeouts(): VpclatticeListenerRuleTimeoutsOutputReference;
    putTimeouts(value: VpclatticeListenerRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeListenerRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
