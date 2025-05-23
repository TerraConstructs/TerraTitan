/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationCustomRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#description ConfigOrganizationCustomRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#id ConfigOrganizationCustomRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#input_parameters ConfigOrganizationCustomRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}
    */
    readonly lambdaFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#name ConfigOrganizationCustomRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#trigger_types ConfigOrganizationCustomRule#trigger_types}
    */
    readonly triggerTypes: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#timeouts ConfigOrganizationCustomRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationCustomRuleTimeouts;
}
export interface ConfigOrganizationCustomRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#create ConfigOrganizationCustomRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#delete ConfigOrganizationCustomRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#update ConfigOrganizationCustomRule#update}
    */
    readonly update?: string;
}
export declare function configOrganizationCustomRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomRuleTimeouts | cdktf.IResolvable): any;
export declare function configOrganizationCustomRuleTimeoutsToHclTerraform(struct?: ConfigOrganizationCustomRuleTimeouts | cdktf.IResolvable): any;
export declare class ConfigOrganizationCustomRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigOrganizationCustomRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigOrganizationCustomRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule aws_config_organization_custom_rule}
*/
export declare class ConfigOrganizationCustomRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_organization_custom_rule";
    /**
    * Generates CDKTF code for importing a ConfigOrganizationCustomRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigOrganizationCustomRule to import
    * @param importFromId The id of the existing ConfigOrganizationCustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigOrganizationCustomRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_custom_rule aws_config_organization_custom_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationCustomRuleConfig
    */
    constructor(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig);
    get arn(): string;
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
    private _lambdaFunctionArn?;
    get lambdaFunctionArn(): string;
    set lambdaFunctionArn(value: string);
    get lambdaFunctionArnInput(): string | undefined;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    get timeouts(): ConfigOrganizationCustomRuleTimeoutsOutputReference;
    putTimeouts(value: ConfigOrganizationCustomRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ConfigOrganizationCustomRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
