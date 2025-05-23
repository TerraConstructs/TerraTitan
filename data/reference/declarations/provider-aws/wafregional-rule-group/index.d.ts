/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#id WafregionalRuleGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#metric_name WafregionalRuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#name WafregionalRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#tags WafregionalRuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#tags_all WafregionalRuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * activated_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#activated_rule WafregionalRuleGroup#activated_rule}
    */
    readonly activatedRule?: WafregionalRuleGroupActivatedRule[] | cdktf.IResolvable;
}
export interface WafregionalRuleGroupActivatedRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#type WafregionalRuleGroup#type}
    */
    readonly type: string;
}
export declare function wafregionalRuleGroupActivatedRuleActionToTerraform(struct?: WafregionalRuleGroupActivatedRuleActionOutputReference | WafregionalRuleGroupActivatedRuleAction): any;
export declare function wafregionalRuleGroupActivatedRuleActionToHclTerraform(struct?: WafregionalRuleGroupActivatedRuleActionOutputReference | WafregionalRuleGroupActivatedRuleAction): any;
export declare class WafregionalRuleGroupActivatedRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalRuleGroupActivatedRuleAction | undefined;
    set internalValue(value: WafregionalRuleGroupActivatedRuleAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafregionalRuleGroupActivatedRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#priority WafregionalRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#rule_id WafregionalRuleGroup#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#type WafregionalRuleGroup#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#action WafregionalRuleGroup#action}
    */
    readonly action: WafregionalRuleGroupActivatedRuleAction;
}
export declare function wafregionalRuleGroupActivatedRuleToTerraform(struct?: WafregionalRuleGroupActivatedRule | cdktf.IResolvable): any;
export declare function wafregionalRuleGroupActivatedRuleToHclTerraform(struct?: WafregionalRuleGroupActivatedRule | cdktf.IResolvable): any;
export declare class WafregionalRuleGroupActivatedRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalRuleGroupActivatedRule | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalRuleGroupActivatedRule | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _ruleId?;
    get ruleId(): string;
    set ruleId(value: string);
    get ruleIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _action;
    get action(): WafregionalRuleGroupActivatedRuleActionOutputReference;
    putAction(value: WafregionalRuleGroupActivatedRuleAction): void;
    get actionInput(): WafregionalRuleGroupActivatedRuleAction | undefined;
}
export declare class WafregionalRuleGroupActivatedRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalRuleGroupActivatedRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalRuleGroupActivatedRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group aws_wafregional_rule_group}
*/
export declare class WafregionalRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_rule_group";
    /**
    * Generates CDKTF code for importing a WafregionalRuleGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalRuleGroup to import
    * @param importFromId The id of the existing WafregionalRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalRuleGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_rule_group aws_wafregional_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalRuleGroupConfig);
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
    private _activatedRule;
    get activatedRule(): WafregionalRuleGroupActivatedRuleList;
    putActivatedRule(value: WafregionalRuleGroupActivatedRule[] | cdktf.IResolvable): void;
    resetActivatedRule(): void;
    get activatedRuleInput(): cdktf.IResolvable | WafregionalRuleGroupActivatedRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
