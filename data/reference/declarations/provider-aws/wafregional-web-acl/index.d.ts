/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#id WafregionalWebAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#name WafregionalWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#tags WafregionalWebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#default_action WafregionalWebAcl#default_action}
    */
    readonly defaultAction: WafregionalWebAclDefaultAction;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#logging_configuration WafregionalWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#rule WafregionalWebAcl#rule}
    */
    readonly rule?: WafregionalWebAclRule[] | cdktf.IResolvable;
}
export interface WafregionalWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclDefaultActionToTerraform(struct?: WafregionalWebAclDefaultActionOutputReference | WafregionalWebAclDefaultAction): any;
export declare function wafregionalWebAclDefaultActionToHclTerraform(struct?: WafregionalWebAclDefaultActionOutputReference | WafregionalWebAclDefaultAction): any;
export declare class WafregionalWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclDefaultAction | undefined;
    set internalValue(value: WafregionalWebAclDefaultAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#data WafregionalWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable): any;
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToHclTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable): any;
export declare class WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable | undefined);
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference;
}
export interface WafregionalWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#field_to_match WafregionalWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable;
}
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference | WafregionalWebAclLoggingConfigurationRedactedFields): any;
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsToHclTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference | WafregionalWebAclLoggingConfigurationRedactedFields): any;
export declare class WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclLoggingConfigurationRedactedFields | undefined;
    set internalValue(value: WafregionalWebAclLoggingConfigurationRedactedFields | undefined);
    private _fieldToMatch;
    get fieldToMatch(): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList;
    putFieldToMatch(value: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable): void;
    get fieldToMatchInput(): cdktf.IResolvable | WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | undefined;
}
export interface WafregionalWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#redacted_fields WafregionalWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafregionalWebAclLoggingConfigurationRedactedFields;
}
export declare function wafregionalWebAclLoggingConfigurationToTerraform(struct?: WafregionalWebAclLoggingConfigurationOutputReference | WafregionalWebAclLoggingConfiguration): any;
export declare function wafregionalWebAclLoggingConfigurationToHclTerraform(struct?: WafregionalWebAclLoggingConfigurationOutputReference | WafregionalWebAclLoggingConfiguration): any;
export declare class WafregionalWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclLoggingConfiguration | undefined;
    set internalValue(value: WafregionalWebAclLoggingConfiguration | undefined);
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    get logDestinationInput(): string | undefined;
    private _redactedFields;
    get redactedFields(): WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference;
    putRedactedFields(value: WafregionalWebAclLoggingConfigurationRedactedFields): void;
    resetRedactedFields(): void;
    get redactedFieldsInput(): WafregionalWebAclLoggingConfigurationRedactedFields | undefined;
}
export interface WafregionalWebAclRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclRuleActionToTerraform(struct?: WafregionalWebAclRuleActionOutputReference | WafregionalWebAclRuleAction): any;
export declare function wafregionalWebAclRuleActionToHclTerraform(struct?: WafregionalWebAclRuleActionOutputReference | WafregionalWebAclRuleAction): any;
export declare class WafregionalWebAclRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclRuleAction | undefined;
    set internalValue(value: WafregionalWebAclRuleAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafregionalWebAclRuleOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclRuleOverrideActionToTerraform(struct?: WafregionalWebAclRuleOverrideActionOutputReference | WafregionalWebAclRuleOverrideAction): any;
export declare function wafregionalWebAclRuleOverrideActionToHclTerraform(struct?: WafregionalWebAclRuleOverrideActionOutputReference | WafregionalWebAclRuleOverrideAction): any;
export declare class WafregionalWebAclRuleOverrideActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafregionalWebAclRuleOverrideAction | undefined;
    set internalValue(value: WafregionalWebAclRuleOverrideAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafregionalWebAclRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#priority WafregionalWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#rule_id WafregionalWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#type WafregionalWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#action WafregionalWebAcl#action}
    */
    readonly action?: WafregionalWebAclRuleAction;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#override_action WafregionalWebAcl#override_action}
    */
    readonly overrideAction?: WafregionalWebAclRuleOverrideAction;
}
export declare function wafregionalWebAclRuleToTerraform(struct?: WafregionalWebAclRule | cdktf.IResolvable): any;
export declare function wafregionalWebAclRuleToHclTerraform(struct?: WafregionalWebAclRule | cdktf.IResolvable): any;
export declare class WafregionalWebAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafregionalWebAclRule | cdktf.IResolvable | undefined;
    set internalValue(value: WafregionalWebAclRule | cdktf.IResolvable | undefined);
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
    get action(): WafregionalWebAclRuleActionOutputReference;
    putAction(value: WafregionalWebAclRuleAction): void;
    resetAction(): void;
    get actionInput(): WafregionalWebAclRuleAction | undefined;
    private _overrideAction;
    get overrideAction(): WafregionalWebAclRuleOverrideActionOutputReference;
    putOverrideAction(value: WafregionalWebAclRuleOverrideAction): void;
    resetOverrideAction(): void;
    get overrideActionInput(): WafregionalWebAclRuleOverrideAction | undefined;
}
export declare class WafregionalWebAclRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafregionalWebAclRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafregionalWebAclRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl aws_wafregional_web_acl}
*/
export declare class WafregionalWebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafregional_web_acl";
    /**
    * Generates CDKTF code for importing a WafregionalWebAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafregionalWebAcl to import
    * @param importFromId The id of the existing WafregionalWebAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafregionalWebAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafregional_web_acl aws_wafregional_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalWebAclConfig);
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
    private _defaultAction;
    get defaultAction(): WafregionalWebAclDefaultActionOutputReference;
    putDefaultAction(value: WafregionalWebAclDefaultAction): void;
    get defaultActionInput(): WafregionalWebAclDefaultAction | undefined;
    private _loggingConfiguration;
    get loggingConfiguration(): WafregionalWebAclLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: WafregionalWebAclLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafregionalWebAclLoggingConfiguration | undefined;
    private _rule;
    get rule(): WafregionalWebAclRuleList;
    putRule(value: WafregionalWebAclRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | WafregionalWebAclRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
