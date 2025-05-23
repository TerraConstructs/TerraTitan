/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}
    */
    readonly endpointConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#id SagemakerEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#name SagemakerEndpoint#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#tags SagemakerEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#tags_all SagemakerEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * deployment_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#deployment_config SagemakerEndpoint#deployment_config}
    */
    readonly deploymentConfig?: SagemakerEndpointDeploymentConfig;
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#alarm_name SagemakerEndpoint#alarm_name}
    */
    readonly alarmName: string;
}
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable): any;
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToHclTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable): any;
export declare class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined);
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string | undefined;
}
export declare class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference;
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfiguration {
    /**
    * alarms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#alarms SagemakerEndpoint#alarms}
    */
    readonly alarms?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable;
}
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference | SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): any;
export declare function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToHclTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference | SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): any;
export declare class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined);
    private _alarms;
    get alarms(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList;
    putAlarms(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable): void;
    resetAlarms(): void;
    get alarmsInput(): cdktf.IResolvable | SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | undefined;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): any;
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToHclTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): any;
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToHclTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds: number;
    /**
    * canary_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#canary_size SagemakerEndpoint#canary_size}
    */
    readonly canarySize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
    /**
    * linear_step_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#linear_step_size SagemakerEndpoint#linear_step_size}
    */
    readonly linearStepSize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): any;
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToHclTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _waitIntervalInSeconds?;
    get waitIntervalInSeconds(): number;
    set waitIntervalInSeconds(value: number);
    get waitIntervalInSecondsInput(): number | undefined;
    private _canarySize;
    get canarySize(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference;
    putCanarySize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): void;
    resetCanarySize(): void;
    get canarySizeInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined;
    private _linearStepSize;
    get linearStepSize(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference;
    putLinearStepSize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): void;
    resetLinearStepSize(): void;
    get linearStepSizeInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined;
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}
    */
    readonly terminationWaitInSeconds?: number;
    /**
    * traffic_routing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}
    */
    readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): any;
export declare function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToHclTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): any;
export declare class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined);
    private _maximumExecutionTimeoutInSeconds?;
    get maximumExecutionTimeoutInSeconds(): number;
    set maximumExecutionTimeoutInSeconds(value: number);
    resetMaximumExecutionTimeoutInSeconds(): void;
    get maximumExecutionTimeoutInSecondsInput(): number | undefined;
    private _terminationWaitInSeconds?;
    get terminationWaitInSeconds(): number;
    set terminationWaitInSeconds(value: number);
    resetTerminationWaitInSeconds(): void;
    get terminationWaitInSecondsInput(): number | undefined;
    private _trafficRoutingConfiguration;
    get trafficRoutingConfiguration(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference;
    putTrafficRoutingConfiguration(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): void;
    get trafficRoutingConfigurationInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined;
}
export interface SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any;
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeToHclTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize): any;
export declare class SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#type SagemakerEndpoint#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#value SagemakerEndpoint#value}
    */
    readonly value: number;
}
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any;
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeToHclTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): any;
export declare class SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SagemakerEndpointDeploymentConfigRollingUpdatePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}
    */
    readonly maximumExecutionTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}
    */
    readonly waitIntervalInSeconds: number;
    /**
    * maximum_batch_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#maximum_batch_size SagemakerEndpoint#maximum_batch_size}
    */
    readonly maximumBatchSize: SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
    /**
    * rollback_maximum_batch_size block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#rollback_maximum_batch_size SagemakerEndpoint#rollback_maximum_batch_size}
    */
    readonly rollbackMaximumBatchSize?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
}
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyToTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicy): any;
export declare function sagemakerEndpointDeploymentConfigRollingUpdatePolicyToHclTerraform(struct?: SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigRollingUpdatePolicy): any;
export declare class SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfigRollingUpdatePolicy | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicy | undefined);
    private _maximumExecutionTimeoutInSeconds?;
    get maximumExecutionTimeoutInSeconds(): number;
    set maximumExecutionTimeoutInSeconds(value: number);
    resetMaximumExecutionTimeoutInSeconds(): void;
    get maximumExecutionTimeoutInSecondsInput(): number | undefined;
    private _waitIntervalInSeconds?;
    get waitIntervalInSeconds(): number;
    set waitIntervalInSeconds(value: number);
    get waitIntervalInSecondsInput(): number | undefined;
    private _maximumBatchSize;
    get maximumBatchSize(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference;
    putMaximumBatchSize(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize): void;
    get maximumBatchSizeInput(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize | undefined;
    private _rollbackMaximumBatchSize;
    get rollbackMaximumBatchSize(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference;
    putRollbackMaximumBatchSize(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize): void;
    resetRollbackMaximumBatchSize(): void;
    get rollbackMaximumBatchSizeInput(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize | undefined;
}
export interface SagemakerEndpointDeploymentConfig {
    /**
    * auto_rollback_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
    /**
    * blue_green_update_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}
    */
    readonly blueGreenUpdatePolicy?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
    /**
    * rolling_update_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#rolling_update_policy SagemakerEndpoint#rolling_update_policy}
    */
    readonly rollingUpdatePolicy?: SagemakerEndpointDeploymentConfigRollingUpdatePolicy;
}
export declare function sagemakerEndpointDeploymentConfigToTerraform(struct?: SagemakerEndpointDeploymentConfigOutputReference | SagemakerEndpointDeploymentConfig): any;
export declare function sagemakerEndpointDeploymentConfigToHclTerraform(struct?: SagemakerEndpointDeploymentConfigOutputReference | SagemakerEndpointDeploymentConfig): any;
export declare class SagemakerEndpointDeploymentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointDeploymentConfig | undefined;
    set internalValue(value: SagemakerEndpointDeploymentConfig | undefined);
    private _autoRollbackConfiguration;
    get autoRollbackConfiguration(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference;
    putAutoRollbackConfiguration(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): void;
    resetAutoRollbackConfiguration(): void;
    get autoRollbackConfigurationInput(): SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined;
    private _blueGreenUpdatePolicy;
    get blueGreenUpdatePolicy(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference;
    putBlueGreenUpdatePolicy(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): void;
    resetBlueGreenUpdatePolicy(): void;
    get blueGreenUpdatePolicyInput(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined;
    private _rollingUpdatePolicy;
    get rollingUpdatePolicy(): SagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference;
    putRollingUpdatePolicy(value: SagemakerEndpointDeploymentConfigRollingUpdatePolicy): void;
    resetRollingUpdatePolicy(): void;
    get rollingUpdatePolicyInput(): SagemakerEndpointDeploymentConfigRollingUpdatePolicy | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint}
*/
export declare class SagemakerEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_endpoint";
    /**
    * Generates CDKTF code for importing a SagemakerEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerEndpoint to import
    * @param importFromId The id of the existing SagemakerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint aws_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerEndpointConfig);
    get arn(): string;
    private _endpointConfigName?;
    get endpointConfigName(): string;
    set endpointConfigName(value: string);
    get endpointConfigNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    private _deploymentConfig;
    get deploymentConfig(): SagemakerEndpointDeploymentConfigOutputReference;
    putDeploymentConfig(value: SagemakerEndpointDeploymentConfig): void;
    resetDeploymentConfig(): void;
    get deploymentConfigInput(): SagemakerEndpointDeploymentConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
