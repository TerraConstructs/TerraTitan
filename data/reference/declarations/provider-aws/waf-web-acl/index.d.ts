/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#id WafWebAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#metric_name WafWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#name WafWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#tags WafWebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#tags_all WafWebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#default_action WafWebAcl#default_action}
    */
    readonly defaultAction: WafWebAclDefaultAction;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#logging_configuration WafWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafWebAclLoggingConfiguration;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#rules WafWebAcl#rules}
    */
    readonly rules?: WafWebAclRules[] | cdktf.IResolvable;
}
export interface WafWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultActionOutputReference | WafWebAclDefaultAction): any;
export declare function wafWebAclDefaultActionToHclTerraform(struct?: WafWebAclDefaultActionOutputReference | WafWebAclDefaultAction): any;
export declare class WafWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafWebAclDefaultAction | undefined;
    set internalValue(value: WafWebAclDefaultAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#data WafWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable): any;
export declare function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToHclTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable): any;
export declare class WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable | undefined;
    set internalValue(value: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch | cdktf.IResolvable | undefined);
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
export declare class WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference;
}
export interface WafWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#field_to_match WafWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable;
}
export declare function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsOutputReference | WafWebAclLoggingConfigurationRedactedFields): any;
export declare function wafWebAclLoggingConfigurationRedactedFieldsToHclTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsOutputReference | WafWebAclLoggingConfigurationRedactedFields): any;
export declare class WafWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafWebAclLoggingConfigurationRedactedFields | undefined;
    set internalValue(value: WafWebAclLoggingConfigurationRedactedFields | undefined);
    private _fieldToMatch;
    get fieldToMatch(): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatchList;
    putFieldToMatch(value: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | cdktf.IResolvable): void;
    get fieldToMatchInput(): cdktf.IResolvable | WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[] | undefined;
}
export interface WafWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#log_destination WafWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#redacted_fields WafWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields;
}
export declare function wafWebAclLoggingConfigurationToTerraform(struct?: WafWebAclLoggingConfigurationOutputReference | WafWebAclLoggingConfiguration): any;
export declare function wafWebAclLoggingConfigurationToHclTerraform(struct?: WafWebAclLoggingConfigurationOutputReference | WafWebAclLoggingConfiguration): any;
export declare class WafWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafWebAclLoggingConfiguration | undefined;
    set internalValue(value: WafWebAclLoggingConfiguration | undefined);
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    get logDestinationInput(): string | undefined;
    private _redactedFields;
    get redactedFields(): WafWebAclLoggingConfigurationRedactedFieldsOutputReference;
    putRedactedFields(value: WafWebAclLoggingConfigurationRedactedFields): void;
    resetRedactedFields(): void;
    get redactedFieldsInput(): WafWebAclLoggingConfigurationRedactedFields | undefined;
}
export interface WafWebAclRulesAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesActionOutputReference | WafWebAclRulesAction): any;
export declare function wafWebAclRulesActionToHclTerraform(struct?: WafWebAclRulesActionOutputReference | WafWebAclRulesAction): any;
export declare class WafWebAclRulesActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafWebAclRulesAction | undefined;
    set internalValue(value: WafWebAclRulesAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafWebAclRulesOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideActionOutputReference | WafWebAclRulesOverrideAction): any;
export declare function wafWebAclRulesOverrideActionToHclTerraform(struct?: WafWebAclRulesOverrideActionOutputReference | WafWebAclRulesOverrideAction): any;
export declare class WafWebAclRulesOverrideActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WafWebAclRulesOverrideAction | undefined;
    set internalValue(value: WafWebAclRulesOverrideAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface WafWebAclRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#priority WafWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#rule_id WafWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#type WafWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#action WafWebAcl#action}
    */
    readonly action?: WafWebAclRulesAction;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#override_action WafWebAcl#override_action}
    */
    readonly overrideAction?: WafWebAclRulesOverrideAction;
}
export declare function wafWebAclRulesToTerraform(struct?: WafWebAclRules | cdktf.IResolvable): any;
export declare function wafWebAclRulesToHclTerraform(struct?: WafWebAclRules | cdktf.IResolvable): any;
export declare class WafWebAclRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafWebAclRules | cdktf.IResolvable | undefined;
    set internalValue(value: WafWebAclRules | cdktf.IResolvable | undefined);
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
    get action(): WafWebAclRulesActionOutputReference;
    putAction(value: WafWebAclRulesAction): void;
    resetAction(): void;
    get actionInput(): WafWebAclRulesAction | undefined;
    private _overrideAction;
    get overrideAction(): WafWebAclRulesOverrideActionOutputReference;
    putOverrideAction(value: WafWebAclRulesOverrideAction): void;
    resetOverrideAction(): void;
    get overrideActionInput(): WafWebAclRulesOverrideAction | undefined;
}
export declare class WafWebAclRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafWebAclRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafWebAclRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl aws_waf_web_acl}
*/
export declare class WafWebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_web_acl";
    /**
    * Generates CDKTF code for importing a WafWebAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafWebAcl to import
    * @param importFromId The id of the existing WafWebAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafWebAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_web_acl aws_waf_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafWebAclConfig
    */
    constructor(scope: Construct, id: string, config: WafWebAclConfig);
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
    get defaultAction(): WafWebAclDefaultActionOutputReference;
    putDefaultAction(value: WafWebAclDefaultAction): void;
    get defaultActionInput(): WafWebAclDefaultAction | undefined;
    private _loggingConfiguration;
    get loggingConfiguration(): WafWebAclLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: WafWebAclLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafWebAclLoggingConfiguration | undefined;
    private _rules;
    get rules(): WafWebAclRulesList;
    putRules(value: WafWebAclRules[] | cdktf.IResolvable): void;
    resetRules(): void;
    get rulesInput(): cdktf.IResolvable | WafWebAclRules[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
