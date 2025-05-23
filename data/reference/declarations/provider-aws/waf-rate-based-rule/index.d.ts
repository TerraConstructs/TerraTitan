/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#id WafRateBasedRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#name WafRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#tags WafRateBasedRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * predicates block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#predicates WafRateBasedRule#predicates}
    */
    readonly predicates?: WafRateBasedRulePredicates[] | cdktf.IResolvable;
}
export interface WafRateBasedRulePredicates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#data_id WafRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#negated WafRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#type WafRateBasedRule#type}
    */
    readonly type: string;
}
export declare function wafRateBasedRulePredicatesToTerraform(struct?: WafRateBasedRulePredicates | cdktf.IResolvable): any;
export declare function wafRateBasedRulePredicatesToHclTerraform(struct?: WafRateBasedRulePredicates | cdktf.IResolvable): any;
export declare class WafRateBasedRulePredicatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafRateBasedRulePredicates | cdktf.IResolvable | undefined;
    set internalValue(value: WafRateBasedRulePredicates | cdktf.IResolvable | undefined);
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
export declare class WafRateBasedRulePredicatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafRateBasedRulePredicates[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafRateBasedRulePredicatesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule aws_waf_rate_based_rule}
*/
export declare class WafRateBasedRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_rate_based_rule";
    /**
    * Generates CDKTF code for importing a WafRateBasedRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafRateBasedRule to import
    * @param importFromId The id of the existing WafRateBasedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafRateBasedRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_rate_based_rule aws_waf_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafRateBasedRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafRateBasedRuleConfig);
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
    private _predicates;
    get predicates(): WafRateBasedRulePredicatesList;
    putPredicates(value: WafRateBasedRulePredicates[] | cdktf.IResolvable): void;
    resetPredicates(): void;
    get predicatesInput(): cdktf.IResolvable | WafRateBasedRulePredicates[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
