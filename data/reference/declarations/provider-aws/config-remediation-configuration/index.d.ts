/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}
    */
    readonly automatic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}
    */
    readonly configRuleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#id ConfigRemediationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}
    */
    readonly maximumAutomaticAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}
    */
    readonly retryAttemptSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}
    */
    readonly targetType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}
    */
    readonly targetVersion?: string;
    /**
    * execution_controls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}
    */
    readonly executionControls?: ConfigRemediationConfigurationExecutionControls;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}
    */
    readonly parameter?: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable;
}
export interface ConfigRemediationConfigurationExecutionControlsSsmControls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}
    */
    readonly concurrentExecutionRatePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}
    */
    readonly errorPercentage?: number;
}
export declare function configRemediationConfigurationExecutionControlsSsmControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference | ConfigRemediationConfigurationExecutionControlsSsmControls): any;
export declare function configRemediationConfigurationExecutionControlsSsmControlsToHclTerraform(struct?: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference | ConfigRemediationConfigurationExecutionControlsSsmControls): any;
export declare class ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigRemediationConfigurationExecutionControlsSsmControls | undefined;
    set internalValue(value: ConfigRemediationConfigurationExecutionControlsSsmControls | undefined);
    private _concurrentExecutionRatePercentage?;
    get concurrentExecutionRatePercentage(): number;
    set concurrentExecutionRatePercentage(value: number);
    resetConcurrentExecutionRatePercentage(): void;
    get concurrentExecutionRatePercentageInput(): number | undefined;
    private _errorPercentage?;
    get errorPercentage(): number;
    set errorPercentage(value: number);
    resetErrorPercentage(): void;
    get errorPercentageInput(): number | undefined;
}
export interface ConfigRemediationConfigurationExecutionControls {
    /**
    * ssm_controls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}
    */
    readonly ssmControls?: ConfigRemediationConfigurationExecutionControlsSsmControls;
}
export declare function configRemediationConfigurationExecutionControlsToTerraform(struct?: ConfigRemediationConfigurationExecutionControlsOutputReference | ConfigRemediationConfigurationExecutionControls): any;
export declare function configRemediationConfigurationExecutionControlsToHclTerraform(struct?: ConfigRemediationConfigurationExecutionControlsOutputReference | ConfigRemediationConfigurationExecutionControls): any;
export declare class ConfigRemediationConfigurationExecutionControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigRemediationConfigurationExecutionControls | undefined;
    set internalValue(value: ConfigRemediationConfigurationExecutionControls | undefined);
    private _ssmControls;
    get ssmControls(): ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
    putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls): void;
    resetSsmControls(): void;
    get ssmControlsInput(): ConfigRemediationConfigurationExecutionControlsSsmControls | undefined;
}
export interface ConfigRemediationConfigurationParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#name ConfigRemediationConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}
    */
    readonly resourceValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}
    */
    readonly staticValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#static_values ConfigRemediationConfiguration#static_values}
    */
    readonly staticValues?: string[];
}
export declare function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter | cdktf.IResolvable): any;
export declare function configRemediationConfigurationParameterToHclTerraform(struct?: ConfigRemediationConfigurationParameter | cdktf.IResolvable): any;
export declare class ConfigRemediationConfigurationParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigRemediationConfigurationParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigRemediationConfigurationParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceValue?;
    get resourceValue(): string;
    set resourceValue(value: string);
    resetResourceValue(): void;
    get resourceValueInput(): string | undefined;
    private _staticValue?;
    get staticValue(): string;
    set staticValue(value: string);
    resetStaticValue(): void;
    get staticValueInput(): string | undefined;
    private _staticValues?;
    get staticValues(): string[];
    set staticValues(value: string[]);
    resetStaticValues(): void;
    get staticValuesInput(): string[] | undefined;
}
export declare class ConfigRemediationConfigurationParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigRemediationConfigurationParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration aws_config_remediation_configuration}
*/
export declare class ConfigRemediationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_remediation_configuration";
    /**
    * Generates CDKTF code for importing a ConfigRemediationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigRemediationConfiguration to import
    * @param importFromId The id of the existing ConfigRemediationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigRemediationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_remediation_configuration aws_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRemediationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig);
    get arn(): string;
    private _automatic?;
    get automatic(): boolean | cdktf.IResolvable;
    set automatic(value: boolean | cdktf.IResolvable);
    resetAutomatic(): void;
    get automaticInput(): boolean | cdktf.IResolvable | undefined;
    private _configRuleName?;
    get configRuleName(): string;
    set configRuleName(value: string);
    get configRuleNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maximumAutomaticAttempts?;
    get maximumAutomaticAttempts(): number;
    set maximumAutomaticAttempts(value: number);
    resetMaximumAutomaticAttempts(): void;
    get maximumAutomaticAttemptsInput(): number | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string | undefined;
    private _retryAttemptSeconds?;
    get retryAttemptSeconds(): number;
    set retryAttemptSeconds(value: number);
    resetRetryAttemptSeconds(): void;
    get retryAttemptSecondsInput(): number | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string | undefined;
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    get targetTypeInput(): string | undefined;
    private _targetVersion?;
    get targetVersion(): string;
    set targetVersion(value: string);
    resetTargetVersion(): void;
    get targetVersionInput(): string | undefined;
    private _executionControls;
    get executionControls(): ConfigRemediationConfigurationExecutionControlsOutputReference;
    putExecutionControls(value: ConfigRemediationConfigurationExecutionControls): void;
    resetExecutionControls(): void;
    get executionControlsInput(): ConfigRemediationConfigurationExecutionControls | undefined;
    private _parameter;
    get parameter(): ConfigRemediationConfigurationParameterList;
    putParameter(value: ConfigRemediationConfigurationParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | ConfigRemediationConfigurationParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
