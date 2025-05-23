/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#app_name CodedeployDeploymentGroup#app_name}
    */
    readonly appName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}
    */
    readonly autoscalingGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}
    */
    readonly deploymentConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}
    */
    readonly deploymentGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#id CodedeployDeploymentGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#outdated_instances_strategy CodedeployDeploymentGroup#outdated_instances_strategy}
    */
    readonly outdatedInstancesStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#service_role_arn CodedeployDeploymentGroup#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#tags CodedeployDeploymentGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#tags_all CodedeployDeploymentGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#termination_hook_enabled CodedeployDeploymentGroup#termination_hook_enabled}
    */
    readonly terminationHookEnabled?: boolean | cdktf.IResolvable;
    /**
    * alarm_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}
    */
    readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration;
    /**
    * auto_rollback_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration;
    /**
    * blue_green_deployment_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}
    */
    readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
    /**
    * deployment_style block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_style CodedeployDeploymentGroup#deployment_style}
    */
    readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle;
    /**
    * ec2_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable;
    /**
    * ec2_tag_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}
    */
    readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable;
    /**
    * ecs_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#ecs_service CodedeployDeploymentGroup#ecs_service}
    */
    readonly ecsService?: CodedeployDeploymentGroupEcsService;
    /**
    * load_balancer_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}
    */
    readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo;
    /**
    * on_premises_instance_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}
    */
    readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable;
    /**
    * trigger_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}
    */
    readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable;
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#alarms CodedeployDeploymentGroup#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}
    */
    readonly ignorePollAlarmFailure?: boolean | cdktf.IResolvable;
}
export declare function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: CodedeployDeploymentGroupAlarmConfigurationOutputReference | CodedeployDeploymentGroupAlarmConfiguration): any;
export declare function codedeployDeploymentGroupAlarmConfigurationToHclTerraform(struct?: CodedeployDeploymentGroupAlarmConfigurationOutputReference | CodedeployDeploymentGroupAlarmConfiguration): any;
export declare class CodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupAlarmConfiguration | undefined;
    set internalValue(value: CodedeployDeploymentGroupAlarmConfiguration | undefined);
    private _alarms?;
    get alarms(): string[];
    set alarms(value: string[]);
    resetAlarms(): void;
    get alarmsInput(): string[] | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ignorePollAlarmFailure?;
    get ignorePollAlarmFailure(): boolean | cdktf.IResolvable;
    set ignorePollAlarmFailure(value: boolean | cdktf.IResolvable);
    resetIgnorePollAlarmFailure(): void;
    get ignorePollAlarmFailureInput(): boolean | cdktf.IResolvable | undefined;
}
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#events CodedeployDeploymentGroup#events}
    */
    readonly events?: string[];
}
export declare function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference | CodedeployDeploymentGroupAutoRollbackConfiguration): any;
export declare function codedeployDeploymentGroupAutoRollbackConfigurationToHclTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference | CodedeployDeploymentGroupAutoRollbackConfiguration): any;
export declare class CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupAutoRollbackConfiguration | undefined;
    set internalValue(value: CodedeployDeploymentGroupAutoRollbackConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _events?;
    get events(): string[];
    set events(value: string[]);
    resetEvents(): void;
    get eventsInput(): string[] | undefined;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}
    */
    readonly actionOnTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}
    */
    readonly waitTimeInMinutes?: number;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any;
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToHclTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined);
    private _actionOnTimeout?;
    get actionOnTimeout(): string;
    set actionOnTimeout(value: string);
    resetActionOnTimeout(): void;
    get actionOnTimeoutInput(): string | undefined;
    private _waitTimeInMinutes?;
    get waitTimeInMinutes(): number;
    set waitTimeInMinutes(value: number);
    resetWaitTimeInMinutes(): void;
    get waitTimeInMinutesInput(): number | undefined;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any;
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToHclTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}
    */
    readonly terminationWaitTimeInMinutes?: number;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any;
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToHclTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
    private _terminationWaitTimeInMinutes?;
    get terminationWaitTimeInMinutes(): number;
    set terminationWaitTimeInMinutes(value: number);
    resetTerminationWaitTimeInMinutes(): void;
    get terminationWaitTimeInMinutesInput(): number | undefined;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
    /**
    * deployment_ready_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}
    */
    readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
    /**
    * green_fleet_provisioning_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}
    */
    readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
    /**
    * terminate_blue_instances_on_deployment_success block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}
    */
    readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfig): any;
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigToHclTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfig): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined);
    private _deploymentReadyOption;
    get deploymentReadyOption(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference;
    putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): void;
    resetDeploymentReadyOption(): void;
    get deploymentReadyOptionInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined;
    private _greenFleetProvisioningOption;
    get greenFleetProvisioningOption(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference;
    putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): void;
    resetGreenFleetProvisioningOption(): void;
    get greenFleetProvisioningOptionInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined;
    private _terminateBlueInstancesOnDeploymentSuccess;
    get terminateBlueInstancesOnDeploymentSuccess(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference;
    putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): void;
    resetTerminateBlueInstancesOnDeploymentSuccess(): void;
    get terminateBlueInstancesOnDeploymentSuccessInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined;
}
export interface CodedeployDeploymentGroupDeploymentStyle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_option CodedeployDeploymentGroup#deployment_option}
    */
    readonly deploymentOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#deployment_type CodedeployDeploymentGroup#deployment_type}
    */
    readonly deploymentType?: string;
}
export declare function codedeployDeploymentGroupDeploymentStyleToTerraform(struct?: CodedeployDeploymentGroupDeploymentStyleOutputReference | CodedeployDeploymentGroupDeploymentStyle): any;
export declare function codedeployDeploymentGroupDeploymentStyleToHclTerraform(struct?: CodedeployDeploymentGroupDeploymentStyleOutputReference | CodedeployDeploymentGroupDeploymentStyle): any;
export declare class CodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupDeploymentStyle | undefined;
    set internalValue(value: CodedeployDeploymentGroupDeploymentStyle | undefined);
    private _deploymentOption?;
    get deploymentOption(): string;
    set deploymentOption(value: string);
    resetDeploymentOption(): void;
    get deploymentOptionInput(): string | undefined;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string | undefined;
}
export interface CodedeployDeploymentGroupEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupEc2TagFilterToHclTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupEc2TagFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupEc2TagFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupEc2TagFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupEc2TagFilterOutputReference;
}
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupEc2TagSetEc2TagFilterToHclTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupEc2TagSetEc2TagFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupEc2TagSetEc2TagFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupEc2TagSetEc2TagFilterOutputReference;
}
export interface CodedeployDeploymentGroupEc2TagSet {
    /**
    * ec2_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable;
}
export declare function codedeployDeploymentGroupEc2TagSetToTerraform(struct?: CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupEc2TagSetToHclTerraform(struct?: CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupEc2TagSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupEc2TagSet | cdktf.IResolvable | undefined);
    private _ec2TagFilter;
    get ec2TagFilter(): CodedeployDeploymentGroupEc2TagSetEc2TagFilterList;
    putEc2TagFilter(value: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | cdktf.IResolvable): void;
    resetEc2TagFilter(): void;
    get ec2TagFilterInput(): cdktf.IResolvable | CodedeployDeploymentGroupEc2TagSetEc2TagFilter[] | undefined;
}
export declare class CodedeployDeploymentGroupEc2TagSetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupEc2TagSetOutputReference;
}
export interface CodedeployDeploymentGroupEcsService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#cluster_name CodedeployDeploymentGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#service_name CodedeployDeploymentGroup#service_name}
    */
    readonly serviceName: string;
}
export declare function codedeployDeploymentGroupEcsServiceToTerraform(struct?: CodedeployDeploymentGroupEcsServiceOutputReference | CodedeployDeploymentGroupEcsService): any;
export declare function codedeployDeploymentGroupEcsServiceToHclTerraform(struct?: CodedeployDeploymentGroupEcsServiceOutputReference | CodedeployDeploymentGroupEcsService): any;
export declare class CodedeployDeploymentGroupEcsServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupEcsService | undefined;
    set internalValue(value: CodedeployDeploymentGroupEcsService | undefined);
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoElbInfoToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupLoadBalancerInfoElbInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupLoadBalancerInfoElbInfoOutputReference;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoOutputReference;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined);
    private _listenerArns?;
    get listenerArns(): string[];
    set listenerArns(value: string[]);
    get listenerArnsInput(): string[] | undefined;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#name CodedeployDeploymentGroup#name}
    */
    readonly name: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupOutputReference;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined);
    private _listenerArns?;
    get listenerArns(): string[];
    set listenerArns(value: string[]);
    get listenerArnsInput(): string[] | undefined;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
    /**
    * prod_traffic_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}
    */
    readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#target_group CodedeployDeploymentGroup#target_group}
    */
    readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable;
    /**
    * test_traffic_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}
    */
    readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined);
    private _prodTrafficRoute;
    get prodTrafficRoute(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference;
    putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): void;
    get prodTrafficRouteInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined;
    private _targetGroup;
    get targetGroup(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupList;
    putTargetGroup(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | cdktf.IResolvable): void;
    get targetGroupInput(): cdktf.IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[] | undefined;
    private _testTrafficRoute;
    get testTrafficRoute(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference;
    putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): void;
    resetTestTrafficRoute(): void;
    get testTrafficRouteInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined;
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
    /**
    * elb_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#elb_info CodedeployDeploymentGroup#elb_info}
    */
    readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable;
    /**
    * target_group_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#target_group_info CodedeployDeploymentGroup#target_group_info}
    */
    readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable;
    /**
    * target_group_pair_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}
    */
    readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfo): any;
export declare function codedeployDeploymentGroupLoadBalancerInfoToHclTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfo): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfo | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfo | undefined);
    private _elbInfo;
    get elbInfo(): CodedeployDeploymentGroupLoadBalancerInfoElbInfoList;
    putElbInfo(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | cdktf.IResolvable): void;
    resetElbInfo(): void;
    get elbInfoInput(): cdktf.IResolvable | CodedeployDeploymentGroupLoadBalancerInfoElbInfo[] | undefined;
    private _targetGroupInfo;
    get targetGroupInfo(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoList;
    putTargetGroupInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | cdktf.IResolvable): void;
    resetTargetGroupInfo(): void;
    get targetGroupInfoInput(): cdktf.IResolvable | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[] | undefined;
    private _targetGroupPairInfo;
    get targetGroupPairInfo(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference;
    putTargetGroupPairInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): void;
    resetTargetGroupPairInfo(): void;
    get targetGroupPairInfoInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined;
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupOnPremisesInstanceTagFilterToHclTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupOnPremisesInstanceTagFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupOnPremisesInstanceTagFilterOutputReference;
}
export interface CodedeployDeploymentGroupTriggerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#trigger_events CodedeployDeploymentGroup#trigger_events}
    */
    readonly triggerEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#trigger_name CodedeployDeploymentGroup#trigger_name}
    */
    readonly triggerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}
    */
    readonly triggerTargetArn: string;
}
export declare function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable): any;
export declare function codedeployDeploymentGroupTriggerConfigurationToHclTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable): any;
export declare class CodedeployDeploymentGroupTriggerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CodedeployDeploymentGroupTriggerConfiguration | cdktf.IResolvable | undefined);
    private _triggerEvents?;
    get triggerEvents(): string[];
    set triggerEvents(value: string[]);
    get triggerEventsInput(): string[] | undefined;
    private _triggerName?;
    get triggerName(): string;
    set triggerName(value: string);
    get triggerNameInput(): string | undefined;
    private _triggerTargetArn?;
    get triggerTargetArn(): string;
    set triggerTargetArn(value: string);
    get triggerTargetArnInput(): string | undefined;
}
export declare class CodedeployDeploymentGroupTriggerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodedeployDeploymentGroupTriggerConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group aws_codedeploy_deployment_group}
*/
export declare class CodedeployDeploymentGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codedeploy_deployment_group";
    /**
    * Generates CDKTF code for importing a CodedeployDeploymentGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodedeployDeploymentGroup to import
    * @param importFromId The id of the existing CodedeployDeploymentGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodedeployDeploymentGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_group aws_codedeploy_deployment_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig);
    private _appName?;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string | undefined;
    get arn(): string;
    private _autoscalingGroups?;
    get autoscalingGroups(): string[];
    set autoscalingGroups(value: string[]);
    resetAutoscalingGroups(): void;
    get autoscalingGroupsInput(): string[] | undefined;
    get computePlatform(): string;
    private _deploymentConfigName?;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    resetDeploymentConfigName(): void;
    get deploymentConfigNameInput(): string | undefined;
    get deploymentGroupId(): string;
    private _deploymentGroupName?;
    get deploymentGroupName(): string;
    set deploymentGroupName(value: string);
    get deploymentGroupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _outdatedInstancesStrategy?;
    get outdatedInstancesStrategy(): string;
    set outdatedInstancesStrategy(value: string);
    resetOutdatedInstancesStrategy(): void;
    get outdatedInstancesStrategyInput(): string | undefined;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string | undefined;
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
    private _terminationHookEnabled?;
    get terminationHookEnabled(): boolean | cdktf.IResolvable;
    set terminationHookEnabled(value: boolean | cdktf.IResolvable);
    resetTerminationHookEnabled(): void;
    get terminationHookEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _alarmConfiguration;
    get alarmConfiguration(): CodedeployDeploymentGroupAlarmConfigurationOutputReference;
    putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration): void;
    resetAlarmConfiguration(): void;
    get alarmConfigurationInput(): CodedeployDeploymentGroupAlarmConfiguration | undefined;
    private _autoRollbackConfiguration;
    get autoRollbackConfiguration(): CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;
    putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration): void;
    resetAutoRollbackConfiguration(): void;
    get autoRollbackConfigurationInput(): CodedeployDeploymentGroupAutoRollbackConfiguration | undefined;
    private _blueGreenDeploymentConfig;
    get blueGreenDeploymentConfig(): CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference;
    putBlueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig): void;
    resetBlueGreenDeploymentConfig(): void;
    get blueGreenDeploymentConfigInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined;
    private _deploymentStyle;
    get deploymentStyle(): CodedeployDeploymentGroupDeploymentStyleOutputReference;
    putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle): void;
    resetDeploymentStyle(): void;
    get deploymentStyleInput(): CodedeployDeploymentGroupDeploymentStyle | undefined;
    private _ec2TagFilter;
    get ec2TagFilter(): CodedeployDeploymentGroupEc2TagFilterList;
    putEc2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[] | cdktf.IResolvable): void;
    resetEc2TagFilter(): void;
    get ec2TagFilterInput(): cdktf.IResolvable | CodedeployDeploymentGroupEc2TagFilter[] | undefined;
    private _ec2TagSet;
    get ec2TagSet(): CodedeployDeploymentGroupEc2TagSetList;
    putEc2TagSet(value: CodedeployDeploymentGroupEc2TagSet[] | cdktf.IResolvable): void;
    resetEc2TagSet(): void;
    get ec2TagSetInput(): cdktf.IResolvable | CodedeployDeploymentGroupEc2TagSet[] | undefined;
    private _ecsService;
    get ecsService(): CodedeployDeploymentGroupEcsServiceOutputReference;
    putEcsService(value: CodedeployDeploymentGroupEcsService): void;
    resetEcsService(): void;
    get ecsServiceInput(): CodedeployDeploymentGroupEcsService | undefined;
    private _loadBalancerInfo;
    get loadBalancerInfo(): CodedeployDeploymentGroupLoadBalancerInfoOutputReference;
    putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo): void;
    resetLoadBalancerInfo(): void;
    get loadBalancerInfoInput(): CodedeployDeploymentGroupLoadBalancerInfo | undefined;
    private _onPremisesInstanceTagFilter;
    get onPremisesInstanceTagFilter(): CodedeployDeploymentGroupOnPremisesInstanceTagFilterList;
    putOnPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | cdktf.IResolvable): void;
    resetOnPremisesInstanceTagFilter(): void;
    get onPremisesInstanceTagFilterInput(): cdktf.IResolvable | CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | undefined;
    private _triggerConfiguration;
    get triggerConfiguration(): CodedeployDeploymentGroupTriggerConfigurationList;
    putTriggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[] | cdktf.IResolvable): void;
    resetTriggerConfiguration(): void;
    get triggerConfigurationInput(): cdktf.IResolvable | CodedeployDeploymentGroupTriggerConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
