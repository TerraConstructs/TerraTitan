/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#id WafregionalRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#metric_name WafregionalRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#name WafregionalRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#tags WafregionalRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#tags_all WafregionalRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#predicate WafregionalRule#predicate}
    */
    readonly predicate?: WafregionalRulePredicate[] | cdktf.IResolvable;
}
export interface WafregionalRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#data_id WafregionalRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#negated WafregionalRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#type WafregionalRule#type}
    */
    readonly type: string;
}
export declare function wafregionalRulePredicateToTerraform(struct?: WafregionalRulePredicate | cdktf.IResolvable): any;
export declare function wafregionalRulePredicateToHclTerraform(struct?: WafregionalRulePredicate | cdktf.IResolvable): any;
export declare class WafregionalRulePredicateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalRulePredicate | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalRulePredicate | cdktf.IResolvable | undefined);
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
export declare class WafregionalRulePredicateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalRulePredicate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalRulePredicateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule aws_wafregional_rule}
*/
export declare class WafregionalRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_rule";
    /**
    * Generates CDKTF code for importing a WafregionalRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalRule to import
    * @param importFromId The id of the existing WafregionalRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule aws_wafregional_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRuleConfig);
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
    get predicate(): WafregionalRulePredicateList;
    putPredicate(value: WafregionalRulePredicate[] | cdktf.IResolvable): void;
    resetPredicate(): void;
    get predicateInput(): cdktf.IResolvable | WafregionalRulePredicate[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
