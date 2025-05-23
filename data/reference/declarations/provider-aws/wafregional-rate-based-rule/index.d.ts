/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#predicate WafregionalRateBasedRule#predicate}
    */
    readonly predicate?: WafregionalRateBasedRulePredicate[] | cdktf.IResolvable;
}
export interface WafregionalRateBasedRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#data_id WafregionalRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#negated WafregionalRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#type WafregionalRateBasedRule#type}
    */
    readonly type: string;
}
export declare function wafregionalRateBasedRulePredicateToTerraform(struct?: WafregionalRateBasedRulePredicate | cdktf.IResolvable): any;
export declare function wafregionalRateBasedRulePredicateToHclTerraform(struct?: WafregionalRateBasedRulePredicate | cdktf.IResolvable): any;
export declare class WafregionalRateBasedRulePredicateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalRateBasedRulePredicate | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalRateBasedRulePredicate | cdktf.IResolvable | undefined);
    private _dataId?;
    get dataId(): string;
    set dataId(value: string);
    get dataIdInput(): string | undefined;
    private _negated?;
    get negated(): boolean | cdktf.IResolvable;
    set negated(value: boolean | cdktf.IResolvable);
    get negatedInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class WafregionalRateBasedRulePredicateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalRateBasedRulePredicate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalRateBasedRulePredicateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule aws_wafregional_rate_based_rule}
*/
export declare class WafregionalRateBasedRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_rate_based_rule";
    /**
    * Generates CDKTF code for importing a WafregionalRateBasedRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalRateBasedRule to import
    * @param importFromId The id of the existing WafregionalRateBasedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalRateBasedRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rate_based_rule aws_wafregional_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRateBasedRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRateBasedRuleConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _rateKey?;
    get rateKey(): string;
    set rateKey(value: string);
    get rateKeyInput(): string | undefined;
    private _rateLimit?;
    get rateLimit(): number;
    set rateLimit(value: number);
    get rateLimitInput(): number | undefined;
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
    private _predicate;
    get predicate(): WafregionalRateBasedRulePredicateList;
    putPredicate(value: WafregionalRateBasedRulePredicate[] | cdktf.IResolvable): void;
    resetPredicate(): void;
    get predicateInput(): cdktf.IResolvable | WafregionalRateBasedRulePredicate[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
