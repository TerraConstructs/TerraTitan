/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#description ConfigConfigRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#id ConfigConfigRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#input_parameters ConfigConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#name ConfigConfigRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#tags ConfigConfigRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#tags_all ConfigConfigRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * evaluation_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#evaluation_mode ConfigConfigRule#evaluation_mode}
    */
    readonly evaluationMode?: ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#scope ConfigConfigRule#scope}
    */
    readonly scope?: ConfigConfigRuleScope;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#source ConfigConfigRule#source}
    */
    readonly source: ConfigConfigRuleSource;
}
export interface ConfigConfigRuleEvaluationMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#mode ConfigConfigRule#mode}
    */
    readonly mode?: string;
}
export declare function configConfigRuleEvaluationModeToTerraform(struct?: ConfigConfigRuleEvaluationMode | cdktf.IResolvable): any;
export declare function configConfigRuleEvaluationModeToHclTerraform(struct?: ConfigConfigRuleEvaluationMode | cdktf.IResolvable): any;
export declare class ConfigConfigRuleEvaluationModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigConfigRuleEvaluationMode | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigConfigRuleEvaluationMode | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
}
export declare class ConfigConfigRuleEvaluationModeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigConfigRuleEvaluationModeOutputReference;
}
export interface ConfigConfigRuleScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}
    */
    readonly complianceResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#tag_key ConfigConfigRule#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#tag_value ConfigConfigRule#tag_value}
    */
    readonly tagValue?: string;
}
export declare function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any;
export declare function configConfigRuleScopeToHclTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any;
export declare class ConfigConfigRuleScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigRuleScope | undefined;
    set internalValue(value: ConfigConfigRuleScope | undefined);
    private _complianceResourceId?;
    get complianceResourceId(): string;
    set complianceResourceId(value: string);
    resetComplianceResourceId(): void;
    get complianceResourceIdInput(): string | undefined;
    private _complianceResourceTypes?;
    get complianceResourceTypes(): string[];
    set complianceResourceTypes(value: string[]);
    resetComplianceResourceTypes(): void;
    get complianceResourceTypesInput(): string[] | undefined;
    private _tagKey?;
    get tagKey(): string;
    set tagKey(value: string);
    resetTagKey(): void;
    get tagKeyInput(): string | undefined;
    private _tagValue?;
    get tagValue(): string;
    set tagValue(value: string);
    resetTagValue(): void;
    get tagValueInput(): string | undefined;
}
export interface ConfigConfigRuleSourceCustomPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}
    */
    readonly enableDebugLogDelivery?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}
    */
    readonly policyRuntime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#policy_text ConfigConfigRule#policy_text}
    */
    readonly policyText: string;
}
export declare function configConfigRuleSourceCustomPolicyDetailsToTerraform(struct?: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference | ConfigConfigRuleSourceCustomPolicyDetails): any;
export declare function configConfigRuleSourceCustomPolicyDetailsToHclTerraform(struct?: ConfigConfigRuleSourceCustomPolicyDetailsOutputReference | ConfigConfigRuleSourceCustomPolicyDetails): any;
export declare class ConfigConfigRuleSourceCustomPolicyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigRuleSourceCustomPolicyDetails | undefined;
    set internalValue(value: ConfigConfigRuleSourceCustomPolicyDetails | undefined);
    private _enableDebugLogDelivery?;
    get enableDebugLogDelivery(): boolean | cdktf.IResolvable;
    set enableDebugLogDelivery(value: boolean | cdktf.IResolvable);
    resetEnableDebugLogDelivery(): void;
    get enableDebugLogDeliveryInput(): boolean | cdktf.IResolvable | undefined;
    private _policyRuntime?;
    get policyRuntime(): string;
    set policyRuntime(value: string);
    get policyRuntimeInput(): string | undefined;
    private _policyText?;
    get policyText(): string;
    set policyText(value: string);
    get policyTextInput(): string | undefined;
}
export interface ConfigConfigRuleSourceSourceDetail {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#event_source ConfigConfigRule#event_source}
    */
    readonly eventSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#message_type ConfigConfigRule#message_type}
    */
    readonly messageType?: string;
}
export declare function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable): any;
export declare function configConfigRuleSourceSourceDetailToHclTerraform(struct?: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable): any;
export declare class ConfigConfigRuleSourceSourceDetailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigConfigRuleSourceSourceDetail | cdktf.IResolvable | undefined);
    private _eventSource?;
    get eventSource(): string;
    set eventSource(value: string);
    resetEventSource(): void;
    get eventSourceInput(): string | undefined;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string | undefined;
    private _messageType?;
    get messageType(): string;
    set messageType(value: string);
    resetMessageType(): void;
    get messageTypeInput(): string | undefined;
}
export declare class ConfigConfigRuleSourceSourceDetailList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigConfigRuleSourceSourceDetailOutputReference;
}
export interface ConfigConfigRuleSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#owner ConfigConfigRule#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#source_identifier ConfigConfigRule#source_identifier}
    */
    readonly sourceIdentifier?: string;
    /**
    * custom_policy_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}
    */
    readonly customPolicyDetails?: ConfigConfigRuleSourceCustomPolicyDetails;
    /**
    * source_detail block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#source_detail ConfigConfigRule#source_detail}
    */
    readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable;
}
export declare function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any;
export declare function configConfigRuleSourceToHclTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any;
export declare class ConfigConfigRuleSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigRuleSource | undefined;
    set internalValue(value: ConfigConfigRuleSource | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
    private _sourceIdentifier?;
    get sourceIdentifier(): string;
    set sourceIdentifier(value: string);
    resetSourceIdentifier(): void;
    get sourceIdentifierInput(): string | undefined;
    private _customPolicyDetails;
    get customPolicyDetails(): ConfigConfigRuleSourceCustomPolicyDetailsOutputReference;
    putCustomPolicyDetails(value: ConfigConfigRuleSourceCustomPolicyDetails): void;
    resetCustomPolicyDetails(): void;
    get customPolicyDetailsInput(): ConfigConfigRuleSourceCustomPolicyDetails | undefined;
    private _sourceDetail;
    get sourceDetail(): ConfigConfigRuleSourceSourceDetailList;
    putSourceDetail(value: ConfigConfigRuleSourceSourceDetail[] | cdktf.IResolvable): void;
    resetSourceDetail(): void;
    get sourceDetailInput(): cdktf.IResolvable | ConfigConfigRuleSourceSourceDetail[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule aws_config_config_rule}
*/
export declare class ConfigConfigRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_config_rule";
    /**
    * Generates CDKTF code for importing a ConfigConfigRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigConfigRule to import
    * @param importFromId The id of the existing ConfigConfigRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigConfigRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_config_rule aws_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigRuleConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig);
    get arn(): string;
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
    private _inputParameters?;
    get inputParameters(): string;
    set inputParameters(value: string);
    resetInputParameters(): void;
    get inputParametersInput(): string | undefined;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ruleId(): string;
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
    private _evaluationMode;
    get evaluationMode(): ConfigConfigRuleEvaluationModeList;
    putEvaluationMode(value: ConfigConfigRuleEvaluationMode[] | cdktf.IResolvable): void;
    resetEvaluationMode(): void;
    get evaluationModeInput(): cdktf.IResolvable | ConfigConfigRuleEvaluationMode[] | undefined;
    private _scope;
    get scope(): ConfigConfigRuleScopeOutputReference;
    putScope(value: ConfigConfigRuleScope): void;
    resetScope(): void;
    get scopeInput(): ConfigConfigRuleScope | undefined;
    private _source;
    get source(): ConfigConfigRuleSourceOutputReference;
    putSource(value: ConfigConfigRuleSource): void;
    get sourceInput(): ConfigConfigRuleSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
