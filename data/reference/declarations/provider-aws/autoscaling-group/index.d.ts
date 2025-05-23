/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#availability_zones AutoscalingGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#capacity_rebalance AutoscalingGroup#capacity_rebalance}
    */
    readonly capacityRebalance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#context AutoscalingGroup#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#default_cooldown AutoscalingGroup#default_cooldown}
    */
    readonly defaultCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#default_instance_warmup AutoscalingGroup#default_instance_warmup}
    */
    readonly defaultInstanceWarmup?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#desired_capacity AutoscalingGroup#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#desired_capacity_type AutoscalingGroup#desired_capacity_type}
    */
    readonly desiredCapacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#enabled_metrics AutoscalingGroup#enabled_metrics}
    */
    readonly enabledMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#force_delete AutoscalingGroup#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}
    */
    readonly forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#health_check_grace_period AutoscalingGroup#health_check_grace_period}
    */
    readonly healthCheckGracePeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#health_check_type AutoscalingGroup#health_check_type}
    */
    readonly healthCheckType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#id AutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#ignore_failed_scaling_activities AutoscalingGroup#ignore_failed_scaling_activities}
    */
    readonly ignoreFailedScalingActivities?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_configuration AutoscalingGroup#launch_configuration}
    */
    readonly launchConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#load_balancers AutoscalingGroup#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}
    */
    readonly maxInstanceLifetime?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_size AutoscalingGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#metrics_granularity AutoscalingGroup#metrics_granularity}
    */
    readonly metricsGranularity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min_elb_capacity AutoscalingGroup#min_elb_capacity}
    */
    readonly minElbCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}
    */
    readonly minSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#name_prefix AutoscalingGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#placement_group AutoscalingGroup#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}
    */
    readonly protectFromScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}
    */
    readonly serviceLinkedRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#suspended_processes AutoscalingGroup#suspended_processes}
    */
    readonly suspendedProcesses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#target_group_arns AutoscalingGroup#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#termination_policies AutoscalingGroup#termination_policies}
    */
    readonly terminationPolicies?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}
    */
    readonly vpcZoneIdentifier?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}
    */
    readonly waitForCapacityTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}
    */
    readonly waitForElbCapacity?: number;
    /**
    * availability_zone_distribution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#availability_zone_distribution AutoscalingGroup#availability_zone_distribution}
    */
    readonly availabilityZoneDistribution?: AutoscalingGroupAvailabilityZoneDistribution;
    /**
    * initial_lifecycle_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
    */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable;
    /**
    * instance_maintenance_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_maintenance_policy AutoscalingGroup#instance_maintenance_policy}
    */
    readonly instanceMaintenancePolicy?: AutoscalingGroupInstanceMaintenancePolicy;
    /**
    * instance_refresh block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_refresh AutoscalingGroup#instance_refresh}
    */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate;
    /**
    * mixed_instances_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
    */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#tag AutoscalingGroup#tag}
    */
    readonly tag?: AutoscalingGroupTag[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#timeouts AutoscalingGroup#timeouts}
    */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /**
    * traffic_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#traffic_source AutoscalingGroup#traffic_source}
    */
    readonly trafficSource?: AutoscalingGroupTrafficSource[] | cdktf.IResolvable;
    /**
    * warm_pool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#warm_pool AutoscalingGroup#warm_pool}
    */
    readonly warmPool?: AutoscalingGroupWarmPool;
}
export interface AutoscalingGroupAvailabilityZoneDistribution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#capacity_distribution_strategy AutoscalingGroup#capacity_distribution_strategy}
    */
    readonly capacityDistributionStrategy?: string;
}
export declare function autoscalingGroupAvailabilityZoneDistributionToTerraform(struct?: AutoscalingGroupAvailabilityZoneDistributionOutputReference | AutoscalingGroupAvailabilityZoneDistribution): any;
export declare function autoscalingGroupAvailabilityZoneDistributionToHclTerraform(struct?: AutoscalingGroupAvailabilityZoneDistributionOutputReference | AutoscalingGroupAvailabilityZoneDistribution): any;
export declare class AutoscalingGroupAvailabilityZoneDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupAvailabilityZoneDistribution | undefined;
    set internalValue(value: AutoscalingGroupAvailabilityZoneDistribution | undefined);
    private _capacityDistributionStrategy?;
    get capacityDistributionStrategy(): string;
    set capacityDistributionStrategy(value: string);
    resetCapacityDistributionStrategy(): void;
    get capacityDistributionStrategyInput(): string | undefined;
}
export interface AutoscalingGroupInitialLifecycleHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#default_result AutoscalingGroup#default_result}
    */
    readonly defaultResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#lifecycle_transition AutoscalingGroup#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#notification_metadata AutoscalingGroup#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#notification_target_arn AutoscalingGroup#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#role_arn AutoscalingGroup#role_arn}
    */
    readonly roleArn?: string;
}
export declare function autoscalingGroupInitialLifecycleHookToTerraform(struct?: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable): any;
export declare function autoscalingGroupInitialLifecycleHookToHclTerraform(struct?: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable): any;
export declare class AutoscalingGroupInitialLifecycleHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupInitialLifecycleHook | cdktf.IResolvable | undefined);
    private _defaultResult?;
    get defaultResult(): string;
    set defaultResult(value: string);
    resetDefaultResult(): void;
    get defaultResultInput(): string | undefined;
    private _heartbeatTimeout?;
    get heartbeatTimeout(): number;
    set heartbeatTimeout(value: number);
    resetHeartbeatTimeout(): void;
    get heartbeatTimeoutInput(): number | undefined;
    private _lifecycleTransition?;
    get lifecycleTransition(): string;
    set lifecycleTransition(value: string);
    get lifecycleTransitionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationMetadata?;
    get notificationMetadata(): string;
    set notificationMetadata(value: string);
    resetNotificationMetadata(): void;
    get notificationMetadataInput(): string | undefined;
    private _notificationTargetArn?;
    get notificationTargetArn(): string;
    set notificationTargetArn(value: string);
    resetNotificationTargetArn(): void;
    get notificationTargetArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
}
export declare class AutoscalingGroupInitialLifecycleHookList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupInitialLifecycleHookOutputReference;
}
export interface AutoscalingGroupInstanceMaintenancePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_healthy_percentage AutoscalingGroup#max_healthy_percentage}
    */
    readonly maxHealthyPercentage: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage: number;
}
export declare function autoscalingGroupInstanceMaintenancePolicyToTerraform(struct?: AutoscalingGroupInstanceMaintenancePolicyOutputReference | AutoscalingGroupInstanceMaintenancePolicy): any;
export declare function autoscalingGroupInstanceMaintenancePolicyToHclTerraform(struct?: AutoscalingGroupInstanceMaintenancePolicyOutputReference | AutoscalingGroupInstanceMaintenancePolicy): any;
export declare class AutoscalingGroupInstanceMaintenancePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceMaintenancePolicy | undefined;
    set internalValue(value: AutoscalingGroupInstanceMaintenancePolicy | undefined);
    private _maxHealthyPercentage?;
    get maxHealthyPercentage(): number;
    set maxHealthyPercentage(value: number);
    get maxHealthyPercentageInput(): number | undefined;
    private _minHealthyPercentage?;
    get minHealthyPercentage(): number;
    set minHealthyPercentage(value: number);
    get minHealthyPercentageInput(): number | undefined;
}
export interface AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#alarms AutoscalingGroup#alarms}
    */
    readonly alarms?: string[];
}
export declare function autoscalingGroupInstanceRefreshPreferencesAlarmSpecificationToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesAlarmSpecificationOutputReference | AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification): any;
export declare function autoscalingGroupInstanceRefreshPreferencesAlarmSpecificationToHclTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesAlarmSpecificationOutputReference | AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification): any;
export declare class AutoscalingGroupInstanceRefreshPreferencesAlarmSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification | undefined);
    private _alarms?;
    get alarms(): string[];
    set alarms(value: string[]);
    resetAlarms(): void;
    get alarmsInput(): string[] | undefined;
}
export interface AutoscalingGroupInstanceRefreshPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#auto_rollback AutoscalingGroup#auto_rollback}
    */
    readonly autoRollback?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#checkpoint_delay AutoscalingGroup#checkpoint_delay}
    */
    readonly checkpointDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#checkpoint_percentages AutoscalingGroup#checkpoint_percentages}
    */
    readonly checkpointPercentages?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_warmup AutoscalingGroup#instance_warmup}
    */
    readonly instanceWarmup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_healthy_percentage AutoscalingGroup#max_healthy_percentage}
    */
    readonly maxHealthyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#scale_in_protected_instances AutoscalingGroup#scale_in_protected_instances}
    */
    readonly scaleInProtectedInstances?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#skip_matching AutoscalingGroup#skip_matching}
    */
    readonly skipMatching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#standby_instances AutoscalingGroup#standby_instances}
    */
    readonly standbyInstances?: string;
    /**
    * alarm_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#alarm_specification AutoscalingGroup#alarm_specification}
    */
    readonly alarmSpecification?: AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification;
}
export declare function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesOutputReference | AutoscalingGroupInstanceRefreshPreferences): any;
export declare function autoscalingGroupInstanceRefreshPreferencesToHclTerraform(struct?: AutoscalingGroupInstanceRefreshPreferencesOutputReference | AutoscalingGroupInstanceRefreshPreferences): any;
export declare class AutoscalingGroupInstanceRefreshPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceRefreshPreferences | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefreshPreferences | undefined);
    private _autoRollback?;
    get autoRollback(): boolean | cdktf.IResolvable;
    set autoRollback(value: boolean | cdktf.IResolvable);
    resetAutoRollback(): void;
    get autoRollbackInput(): boolean | cdktf.IResolvable | undefined;
    private _checkpointDelay?;
    get checkpointDelay(): string;
    set checkpointDelay(value: string);
    resetCheckpointDelay(): void;
    get checkpointDelayInput(): string | undefined;
    private _checkpointPercentages?;
    get checkpointPercentages(): number[];
    set checkpointPercentages(value: number[]);
    resetCheckpointPercentages(): void;
    get checkpointPercentagesInput(): number[] | undefined;
    private _instanceWarmup?;
    get instanceWarmup(): string;
    set instanceWarmup(value: string);
    resetInstanceWarmup(): void;
    get instanceWarmupInput(): string | undefined;
    private _maxHealthyPercentage?;
    get maxHealthyPercentage(): number;
    set maxHealthyPercentage(value: number);
    resetMaxHealthyPercentage(): void;
    get maxHealthyPercentageInput(): number | undefined;
    private _minHealthyPercentage?;
    get minHealthyPercentage(): number;
    set minHealthyPercentage(value: number);
    resetMinHealthyPercentage(): void;
    get minHealthyPercentageInput(): number | undefined;
    private _scaleInProtectedInstances?;
    get scaleInProtectedInstances(): string;
    set scaleInProtectedInstances(value: string);
    resetScaleInProtectedInstances(): void;
    get scaleInProtectedInstancesInput(): string | undefined;
    private _skipMatching?;
    get skipMatching(): boolean | cdktf.IResolvable;
    set skipMatching(value: boolean | cdktf.IResolvable);
    resetSkipMatching(): void;
    get skipMatchingInput(): boolean | cdktf.IResolvable | undefined;
    private _standbyInstances?;
    get standbyInstances(): string;
    set standbyInstances(value: string);
    resetStandbyInstances(): void;
    get standbyInstancesInput(): string | undefined;
    private _alarmSpecification;
    get alarmSpecification(): AutoscalingGroupInstanceRefreshPreferencesAlarmSpecificationOutputReference;
    putAlarmSpecification(value: AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification): void;
    resetAlarmSpecification(): void;
    get alarmSpecificationInput(): AutoscalingGroupInstanceRefreshPreferencesAlarmSpecification | undefined;
}
export interface AutoscalingGroupInstanceRefresh {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#strategy AutoscalingGroup#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#triggers AutoscalingGroup#triggers}
    */
    readonly triggers?: string[];
    /**
    * preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#preferences AutoscalingGroup#preferences}
    */
    readonly preferences?: AutoscalingGroupInstanceRefreshPreferences;
}
export declare function autoscalingGroupInstanceRefreshToTerraform(struct?: AutoscalingGroupInstanceRefreshOutputReference | AutoscalingGroupInstanceRefresh): any;
export declare function autoscalingGroupInstanceRefreshToHclTerraform(struct?: AutoscalingGroupInstanceRefreshOutputReference | AutoscalingGroupInstanceRefresh): any;
export declare class AutoscalingGroupInstanceRefreshOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupInstanceRefresh | undefined;
    set internalValue(value: AutoscalingGroupInstanceRefresh | undefined);
    private _strategy?;
    get strategy(): string;
    set strategy(value: string);
    get strategyInput(): string | undefined;
    private _triggers?;
    get triggers(): string[];
    set triggers(value: string[]);
    resetTriggers(): void;
    get triggersInput(): string[] | undefined;
    private _preferences;
    get preferences(): AutoscalingGroupInstanceRefreshPreferencesOutputReference;
    putPreferences(value: AutoscalingGroupInstanceRefreshPreferences): void;
    resetPreferences(): void;
    get preferencesInput(): AutoscalingGroupInstanceRefreshPreferences | undefined;
}
export interface AutoscalingGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#id AutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupLaunchTemplateToTerraform(struct?: AutoscalingGroupLaunchTemplateOutputReference | AutoscalingGroupLaunchTemplate): any;
export declare function autoscalingGroupLaunchTemplateToHclTerraform(struct?: AutoscalingGroupLaunchTemplateOutputReference | AutoscalingGroupLaunchTemplate): any;
export declare class AutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupLaunchTemplate | undefined);
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}
    */
    readonly onDemandBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}
    */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}
    */
    readonly spotAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#spot_instance_pools AutoscalingGroup#spot_instance_pools}
    */
    readonly spotInstancePools?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#spot_max_price AutoscalingGroup#spot_max_price}
    */
    readonly spotMaxPrice?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference | AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare function autoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference | AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare class AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined);
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string | undefined;
    private _onDemandBaseCapacity?;
    get onDemandBaseCapacity(): number;
    set onDemandBaseCapacity(value: number);
    resetOnDemandBaseCapacity(): void;
    get onDemandBaseCapacityInput(): number | undefined;
    private _onDemandPercentageAboveBaseCapacity?;
    get onDemandPercentageAboveBaseCapacity(): number;
    set onDemandPercentageAboveBaseCapacity(value: number);
    resetOnDemandPercentageAboveBaseCapacity(): void;
    get onDemandPercentageAboveBaseCapacityInput(): number | undefined;
    private _spotAllocationStrategy?;
    get spotAllocationStrategy(): string;
    set spotAllocationStrategy(value: string);
    resetSpotAllocationStrategy(): void;
    get spotAllocationStrategyInput(): string | undefined;
    private _spotInstancePools?;
    get spotInstancePools(): number;
    set spotInstancePools(value: number);
    resetSpotInstancePools(): void;
    get spotInstancePoolsInput(): number | undefined;
    private _spotMaxPrice?;
    get spotMaxPrice(): string;
    set spotMaxPrice(value: string);
    resetSpotMaxPrice(): void;
    get spotMaxPriceInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string | undefined;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
    */
    readonly min?: number;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#accelerator_manufacturers AutoscalingGroup#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#accelerator_names AutoscalingGroup#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#accelerator_types AutoscalingGroup#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#allowed_instance_types AutoscalingGroup#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#bare_metal AutoscalingGroup#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#burstable_performance AutoscalingGroup#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#cpu_manufacturers AutoscalingGroup#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#excluded_instance_types AutoscalingGroup#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_generations AutoscalingGroup#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#local_storage AutoscalingGroup#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#local_storage_types AutoscalingGroup#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_spot_price_as_percentage_of_optimal_on_demand_price AutoscalingGroup#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#on_demand_max_price_percentage_over_lowest_price AutoscalingGroup#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#require_hibernate_support AutoscalingGroup#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#spot_max_price_percentage_over_lowest_price AutoscalingGroup#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * accelerator_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#accelerator_count AutoscalingGroup#accelerator_count}
    */
    readonly acceleratorCount?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount;
    /**
    * accelerator_total_memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#accelerator_total_memory_mib AutoscalingGroup#accelerator_total_memory_mib}
    */
    readonly acceleratorTotalMemoryMib?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib;
    /**
    * baseline_ebs_bandwidth_mbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#baseline_ebs_bandwidth_mbps AutoscalingGroup#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps;
    /**
    * memory_gib_per_vcpu block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#memory_gib_per_vcpu AutoscalingGroup#memory_gib_per_vcpu}
    */
    readonly memoryGibPerVcpu?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu;
    /**
    * memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#memory_mib AutoscalingGroup#memory_mib}
    */
    readonly memoryMib?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib;
    /**
    * network_bandwidth_gbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#network_bandwidth_gbps AutoscalingGroup#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps;
    /**
    * network_interface_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#network_interface_count AutoscalingGroup#network_interface_count}
    */
    readonly networkInterfaceCount?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount;
    /**
    * total_local_storage_gb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#total_local_storage_gb AutoscalingGroup#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb;
    /**
    * vcpu_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#vcpu_count AutoscalingGroup#vcpu_count}
    */
    readonly vcpuCount?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements | undefined);
    private _acceleratorManufacturers?;
    get acceleratorManufacturers(): string[];
    set acceleratorManufacturers(value: string[]);
    resetAcceleratorManufacturers(): void;
    get acceleratorManufacturersInput(): string[] | undefined;
    private _acceleratorNames?;
    get acceleratorNames(): string[];
    set acceleratorNames(value: string[]);
    resetAcceleratorNames(): void;
    get acceleratorNamesInput(): string[] | undefined;
    private _acceleratorTypes?;
    get acceleratorTypes(): string[];
    set acceleratorTypes(value: string[]);
    resetAcceleratorTypes(): void;
    get acceleratorTypesInput(): string[] | undefined;
    private _allowedInstanceTypes?;
    get allowedInstanceTypes(): string[];
    set allowedInstanceTypes(value: string[]);
    resetAllowedInstanceTypes(): void;
    get allowedInstanceTypesInput(): string[] | undefined;
    private _bareMetal?;
    get bareMetal(): string;
    set bareMetal(value: string);
    resetBareMetal(): void;
    get bareMetalInput(): string | undefined;
    private _burstablePerformance?;
    get burstablePerformance(): string;
    set burstablePerformance(value: string);
    resetBurstablePerformance(): void;
    get burstablePerformanceInput(): string | undefined;
    private _cpuManufacturers?;
    get cpuManufacturers(): string[];
    set cpuManufacturers(value: string[]);
    resetCpuManufacturers(): void;
    get cpuManufacturersInput(): string[] | undefined;
    private _excludedInstanceTypes?;
    get excludedInstanceTypes(): string[];
    set excludedInstanceTypes(value: string[]);
    resetExcludedInstanceTypes(): void;
    get excludedInstanceTypesInput(): string[] | undefined;
    private _instanceGenerations?;
    get instanceGenerations(): string[];
    set instanceGenerations(value: string[]);
    resetInstanceGenerations(): void;
    get instanceGenerationsInput(): string[] | undefined;
    private _localStorage?;
    get localStorage(): string;
    set localStorage(value: string);
    resetLocalStorage(): void;
    get localStorageInput(): string | undefined;
    private _localStorageTypes?;
    get localStorageTypes(): string[];
    set localStorageTypes(value: string[]);
    resetLocalStorageTypes(): void;
    get localStorageTypesInput(): string[] | undefined;
    private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?;
    get maxSpotPriceAsPercentageOfOptimalOnDemandPrice(): number;
    set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number);
    resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice(): void;
    get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput(): number | undefined;
    private _onDemandMaxPricePercentageOverLowestPrice?;
    get onDemandMaxPricePercentageOverLowestPrice(): number;
    set onDemandMaxPricePercentageOverLowestPrice(value: number);
    resetOnDemandMaxPricePercentageOverLowestPrice(): void;
    get onDemandMaxPricePercentageOverLowestPriceInput(): number | undefined;
    private _requireHibernateSupport?;
    get requireHibernateSupport(): boolean | cdktf.IResolvable;
    set requireHibernateSupport(value: boolean | cdktf.IResolvable);
    resetRequireHibernateSupport(): void;
    get requireHibernateSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _spotMaxPricePercentageOverLowestPrice?;
    get spotMaxPricePercentageOverLowestPrice(): number;
    set spotMaxPricePercentageOverLowestPrice(value: number);
    resetSpotMaxPricePercentageOverLowestPrice(): void;
    get spotMaxPricePercentageOverLowestPriceInput(): number | undefined;
    private _acceleratorCount;
    get acceleratorCount(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference;
    putAcceleratorCount(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount): void;
    resetAcceleratorCount(): void;
    get acceleratorCountInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount | undefined;
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
    putAcceleratorTotalMemoryMib(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib): void;
    resetAcceleratorTotalMemoryMib(): void;
    get acceleratorTotalMemoryMibInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
    putBaselineEbsBandwidthMbps(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps): void;
    resetBaselineEbsBandwidthMbps(): void;
    get baselineEbsBandwidthMbpsInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference;
    putMemoryGibPerVcpu(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu): void;
    resetMemoryGibPerVcpu(): void;
    get memoryGibPerVcpuInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu | undefined;
    private _memoryMib;
    get memoryMib(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference;
    putMemoryMib(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib): void;
    resetMemoryMib(): void;
    get memoryMibInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib | undefined;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference;
    putNetworkBandwidthGbps(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps): void;
    resetNetworkBandwidthGbps(): void;
    get networkBandwidthGbpsInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps | undefined;
    private _networkInterfaceCount;
    get networkInterfaceCount(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference;
    putNetworkInterfaceCount(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount): void;
    resetNetworkInterfaceCount(): void;
    get networkInterfaceCountInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount | undefined;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference;
    putTotalLocalStorageGb(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb): void;
    resetTotalLocalStorageGb(): void;
    get totalLocalStorageGbInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb | undefined;
    private _vcpuCount;
    get vcpuCount(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference;
    putVcpuCount(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount): void;
    resetVcpuCount(): void;
    get vcpuCountInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#version AutoscalingGroup#version}
    */
    readonly version?: string;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string | undefined;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_type AutoscalingGroup#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#weighted_capacity AutoscalingGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * instance_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_requirements AutoscalingGroup#instance_requirements}
    */
    readonly instanceRequirements?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements;
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | cdktf.IResolvable | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): string;
    set weightedCapacity(value: string);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): string | undefined;
    private _instanceRequirements;
    get instanceRequirements(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference;
    putInstanceRequirements(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements): void;
    resetInstanceRequirements(): void;
    get instanceRequirementsInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements | undefined;
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): void;
    resetLaunchTemplateSpecification(): void;
    get launchTemplateSpecificationInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
}
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#override AutoscalingGroup#override}
    */
    readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable;
}
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare function autoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference | AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare class AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    private _override;
    get override(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;
    putOverride(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | cdktf.IResolvable): void;
    resetOverride(): void;
    get overrideInput(): cdktf.IResolvable | AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[] | undefined;
}
export interface AutoscalingGroupMixedInstancesPolicy {
    /**
    * instances_distribution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instances_distribution AutoscalingGroup#instances_distribution}
    */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate;
}
export declare function autoscalingGroupMixedInstancesPolicyToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyOutputReference | AutoscalingGroupMixedInstancesPolicy): any;
export declare function autoscalingGroupMixedInstancesPolicyToHclTerraform(struct?: AutoscalingGroupMixedInstancesPolicyOutputReference | AutoscalingGroupMixedInstancesPolicy): any;
export declare class AutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupMixedInstancesPolicy | undefined;
    set internalValue(value: AutoscalingGroupMixedInstancesPolicy | undefined);
    private _instancesDistribution;
    get instancesDistribution(): AutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
    putInstancesDistribution(value: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): void;
    resetInstancesDistribution(): void;
    get instancesDistributionInput(): AutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): void;
    get launchTemplateInput(): AutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
}
export interface AutoscalingGroupTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#key AutoscalingGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#propagate_at_launch AutoscalingGroup#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#value AutoscalingGroup#value}
    */
    readonly value: string;
}
export declare function autoscalingGroupTagToTerraform(struct?: AutoscalingGroupTag | cdktf.IResolvable): any;
export declare function autoscalingGroupTagToHclTerraform(struct?: AutoscalingGroupTag | cdktf.IResolvable): any;
export declare class AutoscalingGroupTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupTag | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupTag | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _propagateAtLaunch?;
    get propagateAtLaunch(): boolean | cdktf.IResolvable;
    set propagateAtLaunch(value: boolean | cdktf.IResolvable);
    get propagateAtLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingGroupTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupTagOutputReference;
}
export interface AutoscalingGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#delete AutoscalingGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#update AutoscalingGroup#update}
    */
    readonly update?: string;
}
export declare function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any;
export declare function autoscalingGroupTimeoutsToHclTerraform(struct?: AutoscalingGroupTimeouts | cdktf.IResolvable): any;
export declare class AutoscalingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupTimeouts | cdktf.IResolvable | undefined);
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
export interface AutoscalingGroupTrafficSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#identifier AutoscalingGroup#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#type AutoscalingGroup#type}
    */
    readonly type?: string;
}
export declare function autoscalingGroupTrafficSourceToTerraform(struct?: AutoscalingGroupTrafficSource | cdktf.IResolvable): any;
export declare function autoscalingGroupTrafficSourceToHclTerraform(struct?: AutoscalingGroupTrafficSource | cdktf.IResolvable): any;
export declare class AutoscalingGroupTrafficSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingGroupTrafficSource | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingGroupTrafficSource | cdktf.IResolvable | undefined);
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class AutoscalingGroupTrafficSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingGroupTrafficSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingGroupTrafficSourceOutputReference;
}
export interface AutoscalingGroupWarmPoolInstanceReusePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#reuse_on_scale_in AutoscalingGroup#reuse_on_scale_in}
    */
    readonly reuseOnScaleIn?: boolean | cdktf.IResolvable;
}
export declare function autoscalingGroupWarmPoolInstanceReusePolicyToTerraform(struct?: AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference | AutoscalingGroupWarmPoolInstanceReusePolicy): any;
export declare function autoscalingGroupWarmPoolInstanceReusePolicyToHclTerraform(struct?: AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference | AutoscalingGroupWarmPoolInstanceReusePolicy): any;
export declare class AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupWarmPoolInstanceReusePolicy | undefined;
    set internalValue(value: AutoscalingGroupWarmPoolInstanceReusePolicy | undefined);
    private _reuseOnScaleIn?;
    get reuseOnScaleIn(): boolean | cdktf.IResolvable;
    set reuseOnScaleIn(value: boolean | cdktf.IResolvable);
    resetReuseOnScaleIn(): void;
    get reuseOnScaleInInput(): boolean | cdktf.IResolvable | undefined;
}
export interface AutoscalingGroupWarmPool {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}
    */
    readonly maxGroupPreparedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#min_size AutoscalingGroup#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#pool_state AutoscalingGroup#pool_state}
    */
    readonly poolState?: string;
    /**
    * instance_reuse_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#instance_reuse_policy AutoscalingGroup#instance_reuse_policy}
    */
    readonly instanceReusePolicy?: AutoscalingGroupWarmPoolInstanceReusePolicy;
}
export declare function autoscalingGroupWarmPoolToTerraform(struct?: AutoscalingGroupWarmPoolOutputReference | AutoscalingGroupWarmPool): any;
export declare function autoscalingGroupWarmPoolToHclTerraform(struct?: AutoscalingGroupWarmPoolOutputReference | AutoscalingGroupWarmPool): any;
export declare class AutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupWarmPool | undefined;
    set internalValue(value: AutoscalingGroupWarmPool | undefined);
    private _maxGroupPreparedCapacity?;
    get maxGroupPreparedCapacity(): number;
    set maxGroupPreparedCapacity(value: number);
    resetMaxGroupPreparedCapacity(): void;
    get maxGroupPreparedCapacityInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    resetMinSize(): void;
    get minSizeInput(): number | undefined;
    private _poolState?;
    get poolState(): string;
    set poolState(value: string);
    resetPoolState(): void;
    get poolStateInput(): string | undefined;
    private _instanceReusePolicy;
    get instanceReusePolicy(): AutoscalingGroupWarmPoolInstanceReusePolicyOutputReference;
    putInstanceReusePolicy(value: AutoscalingGroupWarmPoolInstanceReusePolicy): void;
    resetInstanceReusePolicy(): void;
    get instanceReusePolicyInput(): AutoscalingGroupWarmPoolInstanceReusePolicy | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group aws_autoscaling_group}
*/
export declare class AutoscalingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_group";
    /**
    * Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingGroup to import
    * @param importFromId The id of the existing AutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/autoscaling_group aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingGroupConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _capacityRebalance?;
    get capacityRebalance(): boolean | cdktf.IResolvable;
    set capacityRebalance(value: boolean | cdktf.IResolvable);
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): boolean | cdktf.IResolvable | undefined;
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string | undefined;
    private _defaultCooldown?;
    get defaultCooldown(): number;
    set defaultCooldown(value: number);
    resetDefaultCooldown(): void;
    get defaultCooldownInput(): number | undefined;
    private _defaultInstanceWarmup?;
    get defaultInstanceWarmup(): number;
    set defaultInstanceWarmup(value: number);
    resetDefaultInstanceWarmup(): void;
    get defaultInstanceWarmupInput(): number | undefined;
    private _desiredCapacity?;
    get desiredCapacity(): number;
    set desiredCapacity(value: number);
    resetDesiredCapacity(): void;
    get desiredCapacityInput(): number | undefined;
    private _desiredCapacityType?;
    get desiredCapacityType(): string;
    set desiredCapacityType(value: string);
    resetDesiredCapacityType(): void;
    get desiredCapacityTypeInput(): string | undefined;
    private _enabledMetrics?;
    get enabledMetrics(): string[];
    set enabledMetrics(value: string[]);
    resetEnabledMetrics(): void;
    get enabledMetricsInput(): string[] | undefined;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _forceDeleteWarmPool?;
    get forceDeleteWarmPool(): boolean | cdktf.IResolvable;
    set forceDeleteWarmPool(value: boolean | cdktf.IResolvable);
    resetForceDeleteWarmPool(): void;
    get forceDeleteWarmPoolInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheckGracePeriod?;
    get healthCheckGracePeriod(): number;
    set healthCheckGracePeriod(value: number);
    resetHealthCheckGracePeriod(): void;
    get healthCheckGracePeriodInput(): number | undefined;
    private _healthCheckType?;
    get healthCheckType(): string;
    set healthCheckType(value: string);
    resetHealthCheckType(): void;
    get healthCheckTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignoreFailedScalingActivities?;
    get ignoreFailedScalingActivities(): boolean | cdktf.IResolvable;
    set ignoreFailedScalingActivities(value: boolean | cdktf.IResolvable);
    resetIgnoreFailedScalingActivities(): void;
    get ignoreFailedScalingActivitiesInput(): boolean | cdktf.IResolvable | undefined;
    private _launchConfiguration?;
    get launchConfiguration(): string;
    set launchConfiguration(value: string);
    resetLaunchConfiguration(): void;
    get launchConfigurationInput(): string | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _maxInstanceLifetime?;
    get maxInstanceLifetime(): number;
    set maxInstanceLifetime(value: number);
    resetMaxInstanceLifetime(): void;
    get maxInstanceLifetimeInput(): number | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number | undefined;
    private _metricsGranularity?;
    get metricsGranularity(): string;
    set metricsGranularity(value: string);
    resetMetricsGranularity(): void;
    get metricsGranularityInput(): string | undefined;
    private _minElbCapacity?;
    get minElbCapacity(): number;
    set minElbCapacity(value: number);
    resetMinElbCapacity(): void;
    get minElbCapacityInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number | undefined;
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
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    get predictedCapacity(): number;
    private _protectFromScaleIn?;
    get protectFromScaleIn(): boolean | cdktf.IResolvable;
    set protectFromScaleIn(value: boolean | cdktf.IResolvable);
    resetProtectFromScaleIn(): void;
    get protectFromScaleInInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceLinkedRoleArn?;
    get serviceLinkedRoleArn(): string;
    set serviceLinkedRoleArn(value: string);
    resetServiceLinkedRoleArn(): void;
    get serviceLinkedRoleArnInput(): string | undefined;
    private _suspendedProcesses?;
    get suspendedProcesses(): string[];
    set suspendedProcesses(value: string[]);
    resetSuspendedProcesses(): void;
    get suspendedProcessesInput(): string[] | undefined;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminationPolicies?;
    get terminationPolicies(): string[];
    set terminationPolicies(value: string[]);
    resetTerminationPolicies(): void;
    get terminationPoliciesInput(): string[] | undefined;
    private _vpcZoneIdentifier?;
    get vpcZoneIdentifier(): string[];
    set vpcZoneIdentifier(value: string[]);
    resetVpcZoneIdentifier(): void;
    get vpcZoneIdentifierInput(): string[] | undefined;
    private _waitForCapacityTimeout?;
    get waitForCapacityTimeout(): string;
    set waitForCapacityTimeout(value: string);
    resetWaitForCapacityTimeout(): void;
    get waitForCapacityTimeoutInput(): string | undefined;
    private _waitForElbCapacity?;
    get waitForElbCapacity(): number;
    set waitForElbCapacity(value: number);
    resetWaitForElbCapacity(): void;
    get waitForElbCapacityInput(): number | undefined;
    get warmPoolSize(): number;
    private _availabilityZoneDistribution;
    get availabilityZoneDistribution(): AutoscalingGroupAvailabilityZoneDistributionOutputReference;
    putAvailabilityZoneDistribution(value: AutoscalingGroupAvailabilityZoneDistribution): void;
    resetAvailabilityZoneDistribution(): void;
    get availabilityZoneDistributionInput(): AutoscalingGroupAvailabilityZoneDistribution | undefined;
    private _initialLifecycleHook;
    get initialLifecycleHook(): AutoscalingGroupInitialLifecycleHookList;
    putInitialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable): void;
    resetInitialLifecycleHook(): void;
    get initialLifecycleHookInput(): cdktf.IResolvable | AutoscalingGroupInitialLifecycleHook[] | undefined;
    private _instanceMaintenancePolicy;
    get instanceMaintenancePolicy(): AutoscalingGroupInstanceMaintenancePolicyOutputReference;
    putInstanceMaintenancePolicy(value: AutoscalingGroupInstanceMaintenancePolicy): void;
    resetInstanceMaintenancePolicy(): void;
    get instanceMaintenancePolicyInput(): AutoscalingGroupInstanceMaintenancePolicy | undefined;
    private _instanceRefresh;
    get instanceRefresh(): AutoscalingGroupInstanceRefreshOutputReference;
    putInstanceRefresh(value: AutoscalingGroupInstanceRefresh): void;
    resetInstanceRefresh(): void;
    get instanceRefreshInput(): AutoscalingGroupInstanceRefresh | undefined;
    private _launchTemplate;
    get launchTemplate(): AutoscalingGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: AutoscalingGroupLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): AutoscalingGroupLaunchTemplate | undefined;
    private _mixedInstancesPolicy;
    get mixedInstancesPolicy(): AutoscalingGroupMixedInstancesPolicyOutputReference;
    putMixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy): void;
    resetMixedInstancesPolicy(): void;
    get mixedInstancesPolicyInput(): AutoscalingGroupMixedInstancesPolicy | undefined;
    private _tag;
    get tag(): AutoscalingGroupTagList;
    putTag(value: AutoscalingGroupTag[] | cdktf.IResolvable): void;
    resetTag(): void;
    get tagInput(): cdktf.IResolvable | AutoscalingGroupTag[] | undefined;
    private _timeouts;
    get timeouts(): AutoscalingGroupTimeoutsOutputReference;
    putTimeouts(value: AutoscalingGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AutoscalingGroupTimeouts | undefined;
    private _trafficSource;
    get trafficSource(): AutoscalingGroupTrafficSourceList;
    putTrafficSource(value: AutoscalingGroupTrafficSource[] | cdktf.IResolvable): void;
    resetTrafficSource(): void;
    get trafficSourceInput(): cdktf.IResolvable | AutoscalingGroupTrafficSource[] | undefined;
    private _warmPool;
    get warmPool(): AutoscalingGroupWarmPoolOutputReference;
    putWarmPool(value: AutoscalingGroupWarmPool): void;
    resetWarmPool(): void;
    get warmPoolInput(): AutoscalingGroupWarmPool | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
