/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationCustomPolicyRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#debug_log_delivery_accounts ConfigOrganizationCustomPolicyRule#debug_log_delivery_accounts}
    */
    readonly debugLogDeliveryAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#description ConfigOrganizationCustomPolicyRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#excluded_accounts ConfigOrganizationCustomPolicyRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#id ConfigOrganizationCustomPolicyRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#input_parameters ConfigOrganizationCustomPolicyRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#maximum_execution_frequency ConfigOrganizationCustomPolicyRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#name ConfigOrganizationCustomPolicyRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#policy_runtime ConfigOrganizationCustomPolicyRule#policy_runtime}
    */
    readonly policyRuntime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#policy_text ConfigOrganizationCustomPolicyRule#policy_text}
    */
    readonly policyText: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#resource_id_scope ConfigOrganizationCustomPolicyRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#resource_types_scope ConfigOrganizationCustomPolicyRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#tag_key_scope ConfigOrganizationCustomPolicyRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#tag_value_scope ConfigOrganizationCustomPolicyRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#trigger_types ConfigOrganizationCustomPolicyRule#trigger_types}
    */
    readonly triggerTypes: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#timeouts ConfigOrganizationCustomPolicyRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationCustomPolicyRuleTimeouts;
}
export interface ConfigOrganizationCustomPolicyRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#create ConfigOrganizationCustomPolicyRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#delete ConfigOrganizationCustomPolicyRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#update ConfigOrganizationCustomPolicyRule#update}
    */
    readonly update?: string;
}
export declare function configOrganizationCustomPolicyRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomPolicyRuleTimeouts | cdktf.IResolvable): any;
export declare function configOrganizationCustomPolicyRuleTimeoutsToHclTerraform(struct?: ConfigOrganizationCustomPolicyRuleTimeouts | cdktf.IResolvable): any;
export declare class ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigOrganizationCustomPolicyRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigOrganizationCustomPolicyRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule}
*/
export declare class ConfigOrganizationCustomPolicyRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_organization_custom_policy_rule";
    /**
    * Generates CDKTF code for importing a ConfigOrganizationCustomPolicyRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigOrganizationCustomPolicyRule to import
    * @param importFromId The id of the existing ConfigOrganizationCustomPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigOrganizationCustomPolicyRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_policy_rule aws_config_organization_custom_policy_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationCustomPolicyRuleConfig
    */
    constructor(scope: Construct, id: string, config: ConfigOrganizationCustomPolicyRuleConfig);
    get arn(): string;
    private _debugLogDeliveryAccounts?;
    get debugLogDeliveryAccounts(): string[];
    set debugLogDeliveryAccounts(value: string[]);
    resetDebugLogDeliveryAccounts(): void;
    get debugLogDeliveryAccountsInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _excludedAccounts?;
    get excludedAccounts(): string[];
    set excludedAccounts(value: string[]);
    resetExcludedAccounts(): void;
    get excludedAccountsInput(): string[] | undefined;
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
    private _policyRuntime?;
    get policyRuntime(): string;
    set policyRuntime(value: string);
    get policyRuntimeInput(): string | undefined;
    private _policyText?;
    get policyText(): string;
    set policyText(value: string);
    get policyTextInput(): string | undefined;
    private _resourceIdScope?;
    get resourceIdScope(): string;
    set resourceIdScope(value: string);
    resetResourceIdScope(): void;
    get resourceIdScopeInput(): string | undefined;
    private _resourceTypesScope?;
    get resourceTypesScope(): string[];
    set resourceTypesScope(value: string[]);
    resetResourceTypesScope(): void;
    get resourceTypesScopeInput(): string[] | undefined;
    private _tagKeyScope?;
    get tagKeyScope(): string;
    set tagKeyScope(value: string);
    resetTagKeyScope(): void;
    get tagKeyScopeInput(): string | undefined;
    private _tagValueScope?;
    get tagValueScope(): string;
    set tagValueScope(value: string);
    resetTagValueScope(): void;
    get tagValueScopeInput(): string | undefined;
    private _triggerTypes?;
    get triggerTypes(): string[];
    set triggerTypes(value: string[]);
    get triggerTypesInput(): string[] | undefined;
    private _timeouts;
    get timeouts(): ConfigOrganizationCustomPolicyRuleTimeoutsOutputReference;
    putTimeouts(value: ConfigOrganizationCustomPolicyRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ConfigOrganizationCustomPolicyRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
