/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SchedulerScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#id SchedulerSchedule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}
    */
    readonly scheduleExpressionTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}
    */
    readonly startDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}
    */
    readonly state?: string;
    /**
    * flexible_time_window block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}
    */
    readonly flexibleTimeWindow: SchedulerScheduleFlexibleTimeWindow;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}
    */
    readonly target: SchedulerScheduleTarget;
}
export interface SchedulerScheduleFlexibleTimeWindow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}
    */
    readonly maximumWindowInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}
    */
    readonly mode: string;
}
export declare function schedulerScheduleFlexibleTimeWindowToTerraform(struct?: SchedulerScheduleFlexibleTimeWindowOutputReference | SchedulerScheduleFlexibleTimeWindow): any;
export declare function schedulerScheduleFlexibleTimeWindowToHclTerraform(struct?: SchedulerScheduleFlexibleTimeWindowOutputReference | SchedulerScheduleFlexibleTimeWindow): any;
export declare class SchedulerScheduleFlexibleTimeWindowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleFlexibleTimeWindow | undefined;
    set internalValue(value: SchedulerScheduleFlexibleTimeWindow | undefined);
    private _maximumWindowInMinutes?;
    get maximumWindowInMinutes(): number;
    set maximumWindowInMinutes(value: number);
    resetMaximumWindowInMinutes(): void;
    get maximumWindowInMinutesInput(): number | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
}
export interface SchedulerScheduleTargetDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}
    */
    readonly arn: string;
}
export declare function schedulerScheduleTargetDeadLetterConfigToTerraform(struct?: SchedulerScheduleTargetDeadLetterConfigOutputReference | SchedulerScheduleTargetDeadLetterConfig): any;
export declare function schedulerScheduleTargetDeadLetterConfigToHclTerraform(struct?: SchedulerScheduleTargetDeadLetterConfigOutputReference | SchedulerScheduleTargetDeadLetterConfig): any;
export declare class SchedulerScheduleTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetDeadLetterConfig | undefined;
    set internalValue(value: SchedulerScheduleTargetDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
}
export interface SchedulerScheduleTargetEcsParametersCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#base SchedulerSchedule#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#weight SchedulerSchedule#weight}
    */
    readonly weight?: number;
}
export declare function schedulerScheduleTargetEcsParametersCapacityProviderStrategyToTerraform(struct?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function schedulerScheduleTargetEcsParametersCapacityProviderStrategyToHclTerraform(struct?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable | undefined);
    private _base?;
    get base(): number;
    set base(value: number);
    resetBase(): void;
    get baseInput(): number | undefined;
    private _capacityProvider?;
    get capacityProvider(): string;
    set capacityProvider(value: string);
    get capacityProviderInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference;
}
export interface SchedulerScheduleTargetEcsParametersNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}
    */
    readonly subnets: string[];
}
export declare function schedulerScheduleTargetEcsParametersNetworkConfigurationToTerraform(struct?: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference | SchedulerScheduleTargetEcsParametersNetworkConfiguration): any;
export declare function schedulerScheduleTargetEcsParametersNetworkConfigurationToHclTerraform(struct?: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference | SchedulerScheduleTargetEcsParametersNetworkConfiguration): any;
export declare class SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetEcsParametersNetworkConfiguration | undefined;
    set internalValue(value: SchedulerScheduleTargetEcsParametersNetworkConfiguration | undefined);
    private _assignPublicIp?;
    get assignPublicIp(): boolean | cdktf.IResolvable;
    set assignPublicIp(value: boolean | cdktf.IResolvable);
    resetAssignPublicIp(): void;
    get assignPublicIpInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
export interface SchedulerScheduleTargetEcsParametersPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#expression SchedulerSchedule#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}
    */
    readonly type: string;
}
export declare function schedulerScheduleTargetEcsParametersPlacementConstraintsToTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable): any;
export declare function schedulerScheduleTargetEcsParametersPlacementConstraintsToHclTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable): any;
export declare class SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class SchedulerScheduleTargetEcsParametersPlacementConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference;
}
export interface SchedulerScheduleTargetEcsParametersPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#field SchedulerSchedule#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}
    */
    readonly type: string;
}
export declare function schedulerScheduleTargetEcsParametersPlacementStrategyToTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable): any;
export declare function schedulerScheduleTargetEcsParametersPlacementStrategyToHclTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable): any;
export declare class SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable | undefined);
    private _field?;
    get field(): string;
    set field(value: string);
    resetField(): void;
    get fieldInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class SchedulerScheduleTargetEcsParametersPlacementStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference;
}
export interface SchedulerScheduleTargetEcsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}
    */
    readonly referenceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}
    */
    readonly networkConfiguration?: SchedulerScheduleTargetEcsParametersNetworkConfiguration;
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}
    */
    readonly placementConstraints?: SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable;
    /**
    * placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}
    */
    readonly placementStrategy?: SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable;
}
export declare function schedulerScheduleTargetEcsParametersToTerraform(struct?: SchedulerScheduleTargetEcsParametersOutputReference | SchedulerScheduleTargetEcsParameters): any;
export declare function schedulerScheduleTargetEcsParametersToHclTerraform(struct?: SchedulerScheduleTargetEcsParametersOutputReference | SchedulerScheduleTargetEcsParameters): any;
export declare class SchedulerScheduleTargetEcsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetEcsParameters | undefined;
    set internalValue(value: SchedulerScheduleTargetEcsParameters | undefined);
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable | undefined;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string | undefined;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
    private _referenceId?;
    get referenceId(): string;
    set referenceId(value: string);
    resetReferenceId(): void;
    get referenceIdInput(): string | undefined;
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
    private _taskCount?;
    get taskCount(): number;
    set taskCount(value: number);
    resetTaskCount(): void;
    get taskCountInput(): number | undefined;
    private _taskDefinitionArn?;
    get taskDefinitionArn(): string;
    set taskDefinitionArn(value: string);
    get taskDefinitionArnInput(): string | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: SchedulerScheduleTargetEcsParametersNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): SchedulerScheduleTargetEcsParametersNetworkConfiguration | undefined;
    private _placementConstraints;
    get placementConstraints(): SchedulerScheduleTargetEcsParametersPlacementConstraintsList;
    putPlacementConstraints(value: SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable): void;
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): cdktf.IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints[] | undefined;
    private _placementStrategy;
    get placementStrategy(): SchedulerScheduleTargetEcsParametersPlacementStrategyList;
    putPlacementStrategy(value: SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable): void;
    resetPlacementStrategy(): void;
    get placementStrategyInput(): cdktf.IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy[] | undefined;
}
export interface SchedulerScheduleTargetEventbridgeParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}
    */
    readonly detailType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}
    */
    readonly source: string;
}
export declare function schedulerScheduleTargetEventbridgeParametersToTerraform(struct?: SchedulerScheduleTargetEventbridgeParametersOutputReference | SchedulerScheduleTargetEventbridgeParameters): any;
export declare function schedulerScheduleTargetEventbridgeParametersToHclTerraform(struct?: SchedulerScheduleTargetEventbridgeParametersOutputReference | SchedulerScheduleTargetEventbridgeParameters): any;
export declare class SchedulerScheduleTargetEventbridgeParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetEventbridgeParameters | undefined;
    set internalValue(value: SchedulerScheduleTargetEventbridgeParameters | undefined);
    private _detailType?;
    get detailType(): string;
    set detailType(value: string);
    get detailTypeInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
}
export interface SchedulerScheduleTargetKinesisParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}
    */
    readonly partitionKey: string;
}
export declare function schedulerScheduleTargetKinesisParametersToTerraform(struct?: SchedulerScheduleTargetKinesisParametersOutputReference | SchedulerScheduleTargetKinesisParameters): any;
export declare function schedulerScheduleTargetKinesisParametersToHclTerraform(struct?: SchedulerScheduleTargetKinesisParametersOutputReference | SchedulerScheduleTargetKinesisParameters): any;
export declare class SchedulerScheduleTargetKinesisParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetKinesisParameters | undefined;
    set internalValue(value: SchedulerScheduleTargetKinesisParameters | undefined);
    private _partitionKey?;
    get partitionKey(): string;
    set partitionKey(value: string);
    get partitionKeyInput(): string | undefined;
}
export interface SchedulerScheduleTargetRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
}
export declare function schedulerScheduleTargetRetryPolicyToTerraform(struct?: SchedulerScheduleTargetRetryPolicyOutputReference | SchedulerScheduleTargetRetryPolicy): any;
export declare function schedulerScheduleTargetRetryPolicyToHclTerraform(struct?: SchedulerScheduleTargetRetryPolicyOutputReference | SchedulerScheduleTargetRetryPolicy): any;
export declare class SchedulerScheduleTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetRetryPolicy | undefined;
    set internalValue(value: SchedulerScheduleTargetRetryPolicy | undefined);
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
}
export interface SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#value SchedulerSchedule#value}
    */
    readonly value: string;
}
export declare function schedulerScheduleTargetSagemakerPipelineParametersPipelineParameterToTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable): any;
export declare function schedulerScheduleTargetSagemakerPipelineParametersPipelineParameterToHclTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable): any;
export declare class SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference;
}
export interface SchedulerScheduleTargetSagemakerPipelineParameters {
    /**
    * pipeline_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#pipeline_parameter SchedulerSchedule#pipeline_parameter}
    */
    readonly pipelineParameter?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable;
}
export declare function schedulerScheduleTargetSagemakerPipelineParametersToTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersOutputReference | SchedulerScheduleTargetSagemakerPipelineParameters): any;
export declare function schedulerScheduleTargetSagemakerPipelineParametersToHclTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersOutputReference | SchedulerScheduleTargetSagemakerPipelineParameters): any;
export declare class SchedulerScheduleTargetSagemakerPipelineParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetSagemakerPipelineParameters | undefined;
    set internalValue(value: SchedulerScheduleTargetSagemakerPipelineParameters | undefined);
    private _pipelineParameter;
    get pipelineParameter(): SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList;
    putPipelineParameter(value: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable): void;
    resetPipelineParameter(): void;
    get pipelineParameterInput(): cdktf.IResolvable | SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | undefined;
}
export interface SchedulerScheduleTargetSqsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}
    */
    readonly messageGroupId?: string;
}
export declare function schedulerScheduleTargetSqsParametersToTerraform(struct?: SchedulerScheduleTargetSqsParametersOutputReference | SchedulerScheduleTargetSqsParameters): any;
export declare function schedulerScheduleTargetSqsParametersToHclTerraform(struct?: SchedulerScheduleTargetSqsParametersOutputReference | SchedulerScheduleTargetSqsParameters): any;
export declare class SchedulerScheduleTargetSqsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTargetSqsParameters | undefined;
    set internalValue(value: SchedulerScheduleTargetSqsParameters | undefined);
    private _messageGroupId?;
    get messageGroupId(): string;
    set messageGroupId(value: string);
    resetMessageGroupId(): void;
    get messageGroupIdInput(): string | undefined;
}
export interface SchedulerScheduleTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}
    */
    readonly roleArn: string;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}
    */
    readonly deadLetterConfig?: SchedulerScheduleTargetDeadLetterConfig;
    /**
    * ecs_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}
    */
    readonly ecsParameters?: SchedulerScheduleTargetEcsParameters;
    /**
    * eventbridge_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#eventbridge_parameters SchedulerSchedule#eventbridge_parameters}
    */
    readonly eventbridgeParameters?: SchedulerScheduleTargetEventbridgeParameters;
    /**
    * kinesis_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}
    */
    readonly kinesisParameters?: SchedulerScheduleTargetKinesisParameters;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}
    */
    readonly retryPolicy?: SchedulerScheduleTargetRetryPolicy;
    /**
    * sagemaker_pipeline_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#sagemaker_pipeline_parameters SchedulerSchedule#sagemaker_pipeline_parameters}
    */
    readonly sagemakerPipelineParameters?: SchedulerScheduleTargetSagemakerPipelineParameters;
    /**
    * sqs_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}
    */
    readonly sqsParameters?: SchedulerScheduleTargetSqsParameters;
}
export declare function schedulerScheduleTargetToTerraform(struct?: SchedulerScheduleTargetOutputReference | SchedulerScheduleTarget): any;
export declare function schedulerScheduleTargetToHclTerraform(struct?: SchedulerScheduleTargetOutputReference | SchedulerScheduleTarget): any;
export declare class SchedulerScheduleTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SchedulerScheduleTarget | undefined;
    set internalValue(value: SchedulerScheduleTarget | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _input?;
    get input(): string;
    set input(value: string);
    resetInput(): void;
    get inputInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _deadLetterConfig;
    get deadLetterConfig(): SchedulerScheduleTargetDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: SchedulerScheduleTargetDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): SchedulerScheduleTargetDeadLetterConfig | undefined;
    private _ecsParameters;
    get ecsParameters(): SchedulerScheduleTargetEcsParametersOutputReference;
    putEcsParameters(value: SchedulerScheduleTargetEcsParameters): void;
    resetEcsParameters(): void;
    get ecsParametersInput(): SchedulerScheduleTargetEcsParameters | undefined;
    private _eventbridgeParameters;
    get eventbridgeParameters(): SchedulerScheduleTargetEventbridgeParametersOutputReference;
    putEventbridgeParameters(value: SchedulerScheduleTargetEventbridgeParameters): void;
    resetEventbridgeParameters(): void;
    get eventbridgeParametersInput(): SchedulerScheduleTargetEventbridgeParameters | undefined;
    private _kinesisParameters;
    get kinesisParameters(): SchedulerScheduleTargetKinesisParametersOutputReference;
    putKinesisParameters(value: SchedulerScheduleTargetKinesisParameters): void;
    resetKinesisParameters(): void;
    get kinesisParametersInput(): SchedulerScheduleTargetKinesisParameters | undefined;
    private _retryPolicy;
    get retryPolicy(): SchedulerScheduleTargetRetryPolicyOutputReference;
    putRetryPolicy(value: SchedulerScheduleTargetRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): SchedulerScheduleTargetRetryPolicy | undefined;
    private _sagemakerPipelineParameters;
    get sagemakerPipelineParameters(): SchedulerScheduleTargetSagemakerPipelineParametersOutputReference;
    putSagemakerPipelineParameters(value: SchedulerScheduleTargetSagemakerPipelineParameters): void;
    resetSagemakerPipelineParameters(): void;
    get sagemakerPipelineParametersInput(): SchedulerScheduleTargetSagemakerPipelineParameters | undefined;
    private _sqsParameters;
    get sqsParameters(): SchedulerScheduleTargetSqsParametersOutputReference;
    putSqsParameters(value: SchedulerScheduleTargetSqsParameters): void;
    resetSqsParameters(): void;
    get sqsParametersInput(): SchedulerScheduleTargetSqsParameters | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule aws_scheduler_schedule}
*/
export declare class SchedulerSchedule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_scheduler_schedule";
    /**
    * Generates CDKTF code for importing a SchedulerSchedule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SchedulerSchedule to import
    * @param importFromId The id of the existing SchedulerSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SchedulerSchedule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/scheduler_schedule aws_scheduler_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchedulerScheduleConfig
    */
    constructor(scope: Construct, id: string, config: SchedulerScheduleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _endDate?;
    get endDate(): string;
    set endDate(value: string);
    resetEndDate(): void;
    get endDateInput(): string | undefined;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
    private _scheduleExpressionTimezone?;
    get scheduleExpressionTimezone(): string;
    set scheduleExpressionTimezone(value: string);
    resetScheduleExpressionTimezone(): void;
    get scheduleExpressionTimezoneInput(): string | undefined;
    private _startDate?;
    get startDate(): string;
    set startDate(value: string);
    resetStartDate(): void;
    get startDateInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    private _flexibleTimeWindow;
    get flexibleTimeWindow(): SchedulerScheduleFlexibleTimeWindowOutputReference;
    putFlexibleTimeWindow(value: SchedulerScheduleFlexibleTimeWindow): void;
    get flexibleTimeWindowInput(): SchedulerScheduleFlexibleTimeWindow | undefined;
    private _target;
    get target(): SchedulerScheduleTargetOutputReference;
    putTarget(value: SchedulerScheduleTarget): void;
    get targetInput(): SchedulerScheduleTarget | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
