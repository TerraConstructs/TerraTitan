/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `vpcZoneIdentifier` attribute, or for attaching a network interface when an existing network interface ID is specified in a launch template. Conflicts with `vpcZoneIdentifier`. */
    readonly availabilityZones?: string[];
    /** (Optional) Whether capacity rebalance is enabled. Otherwise, capacity rebalance is disabled. */
    readonly capacityRebalance?: boolean | cdktf.IResolvable;
    /** (Optional) Reserved. */
    readonly context?: string;
    /** (Optional) Amount of time, in seconds, after a scaling activity completes before another scaling activity can start. */
    readonly defaultCooldown?: number;
    /** (Optional) Amount of time, in seconds, until a newly launched instance can contribute to the Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling aggregates instance metrics, resulting in more reliable usage data. Set this value equal to the amount of time that it takes for resource consumption to become stable after an instance reaches the InService state. (See [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html)) - `launchConfiguration` - (Optional) Name of the launch configuration to use. */
    readonly defaultInstanceWarmup?: number;
    /** (Optional) Number of Amazon EC2 instances that should be running in the group. (See also [Waiting for Capacity](#waiting-for-capacity) below.) - `desiredCapacityType` - (Optional) The unit of measurement for the value specified for `desiredCapacity`. Supported for attribute-based instance type selection only. Valid values: `"units"`, `"vcpu"`, `"memory-mib"`. */
    readonly desiredCapacity?: number;
    /** (Optional) The unit of measurement for the value specified for `desiredCapacity`. Supported for attribute-based instance type selection only. Valid values: `"units"`, `"vcpu"`, `"memory-mib"`. */
    readonly desiredCapacityType?: string;
    /** (Optional) List of metrics to collect. The allowed values are defined by the [underlying AWS API](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html). */
    readonly enabledMetrics?: string[];
    /** (Optional) Allows deleting the Auto Scaling Group without waiting for all instances in the pool to terminate. You can force an Auto Scaling Group to delete even if it's in the process of scaling a resource. Normally, Terraform drains all the instances before deleting the group. This bypasses that behavior and potentially leaves resources dangling. */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /** (Optional) Allows deleting the Auto Scaling Group without waiting for all instances in the warm pool to terminate. */
    readonly forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    /** (Optional, Default: 300) Time (in seconds) after instance comes into service before checking health. */
    readonly healthCheckGracePeriod?: number;
    /** (Optional) "EC2" or "ELB". Controls how health checking is done. */
    readonly healthCheckType?: string;
    /** (Optional) ID of the launch template. Conflicts with `name`. */
    readonly id?: string;
    /** (Optional) Whether to ignore failed [Auto Scaling scaling activities](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-verify-scaling-activity.html) while [waiting for capacity](#waiting-for-capacity). The default is `false` -- failed scaling activities cause errors to be returned. */
    readonly ignoreFailedScalingActivities?: boolean | cdktf.IResolvable;
    /** (Optional) Name of the launch configuration to use. */
    readonly launchConfiguration?: string;
    /** (Optional) List of elastic load balancer names to add to the autoscaling group names. Only valid for classic load balancers. For ALBs, use `targetGroupArns` instead. To remove all load balancer attachments an empty list should be specified. */
    readonly loadBalancers?: string[];
    /** (Optional) Maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 86400 and 31536000 seconds. */
    readonly maxInstanceLifetime?: number;
    /** (Required) Maximum size of the Auto Scaling Group. */
    readonly maxSize: number;
    /** (Optional) Granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`. */
    readonly metricsGranularity?: string;
    /** (Optional) Setting this causes Terraform to wait for this number of instances from this Auto Scaling Group to show up healthy in the ELB only on creation. Updates will not wait on ELB instance number changes. */
    readonly minElbCapacity?: number;
    /** (Required) Minimum size of the Auto Scaling Group. */
    readonly minSize: number;
    /** (Optional) Name of the Auto Scaling Group. By default generated by Terraform. Conflicts with `namePrefix`. */
    readonly name?: string;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    readonly namePrefix?: string;
    /** (Optional) Name of the placement group into which you'll launch your instances, if any. */
    readonly placementGroup?: string;
    /** (Optional) Whether newly launched instances are automatically protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see [Using instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the Amazon EC2 Auto Scaling User Guide. */
    readonly protectFromScaleIn?: boolean | cdktf.IResolvable;
    /** (Optional) ARN of the service-linked role that the ASG will use to call other AWS services - `maxInstanceLifetime` - (Optional) Maximum amount of time, in seconds, that an instance can be in service, values must be either equal to 0 or between 86400 and 31536000 seconds. */
    readonly serviceLinkedRoleArn?: string;
    /** (Optional) List of processes to suspend for the Auto Scaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`, `InstanceRefresh`. */
    readonly suspendedProcesses?: string[];
    /** (Optional) Set of `aws_alb_target_group` ARNs, for use with Application or Network Load Balancing. To remove all target group attachments an empty list should be specified. */
    readonly targetGroupArns?: string[];
    /** (Optional) List of policies to decide how the instances in the Auto Scaling Group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `OldestLaunchTemplate`, `AllocationStrategy`, `Default`. Additionally, the ARN of a Lambda function can be specified for custom termination policies. */
    readonly terminationPolicies?: string[];
    /** (Optional) List of subnet IDs to launch resources in. Subnets automatically determine which availability zones the group will reside. Conflicts with `availabilityZones`. */
    readonly vpcZoneIdentifier?: string[];
    /** (Optional, Default: "10m") Maximum [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should wait for ASG instances to be healthy before timing out. (See also [Waiting for Capacity](#waiting-for-capacity) below.) Setting this to "0" causes Terraform to skip all Capacity Waiting behavior. */
    readonly waitForCapacityTimeout?: string;
    /** (Optional) Setting this will cause Terraform to wait for exactly this number of healthy instances from this Auto Scaling Group in all attached load balancers on both create and update operations. (Takes precedence over `minElbCapacity` behavior.) (See also [Waiting for Capacity](#waiting-for-capacity) below.) */
    readonly waitForElbCapacity?: number;
    /** */
    readonly availabilityZoneDistribution?: AutoscalingGroupAvailabilityZoneDistribution;
    /** */
    readonly capacityReservationSpecification?: AutoscalingGroupCapacityReservationSpecification;
    /** */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[] | cdktf.IResolvable;
    /** */
    readonly instanceMaintenancePolicy?: AutoscalingGroupInstanceMaintenancePolicy;
    /** */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh;
    /** */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate;
    /** */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy;
    /** */
    readonly tag?: AutoscalingGroupTag[] | cdktf.IResolvable;
    /** */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /** */
    readonly trafficSource?: AutoscalingGroupTrafficSource[] | cdktf.IResolvable;
    /** */
    readonly warmPool?: AutoscalingGroupWarmPool;
}
export interface AutoscalingGroupAvailabilityZoneDistribution {
    /** (Required) The strategy to use for distributing capacity across the Availability Zones. Valid values are `balanced-only` and `balanced-best-effort`. Default is `balanced-best-effort`. */
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
export interface AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget {
    /** */
    readonly capacityReservationIds?: string[];
    /** */
    readonly capacityReservationResourceGroupArns?: string[];
}
export declare function autoscalingGroupCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: AutoscalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference | AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget): any;
export declare function autoscalingGroupCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: AutoscalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference | AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class AutoscalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget | undefined);
    private _capacityReservationIds?;
    get capacityReservationIds(): string[];
    set capacityReservationIds(value: string[]);
    resetCapacityReservationIds(): void;
    get capacityReservationIdsInput(): string[] | undefined;
    private _capacityReservationResourceGroupArns?;
    get capacityReservationResourceGroupArns(): string[];
    set capacityReservationResourceGroupArns(value: string[]);
    resetCapacityReservationResourceGroupArns(): void;
    get capacityReservationResourceGroupArnsInput(): string[] | undefined;
}
export interface AutoscalingGroupCapacityReservationSpecification {
    /** (Required) Capacity Reservation preference helps you use Capacity Reservations efficiently by prioritizing reserved capacity in a Capacity Reservation before using On-Demand capacity. Valid values are `default`, `capacity-reservations-only`, `capacity-reservations-first` and `none`. Default is `default`. */
    readonly capacityReservationPreference?: string;
    /** */
    readonly capacityReservationTarget?: AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function autoscalingGroupCapacityReservationSpecificationToTerraform(struct?: AutoscalingGroupCapacityReservationSpecificationOutputReference | AutoscalingGroupCapacityReservationSpecification): any;
export declare function autoscalingGroupCapacityReservationSpecificationToHclTerraform(struct?: AutoscalingGroupCapacityReservationSpecificationOutputReference | AutoscalingGroupCapacityReservationSpecification): any;
export declare class AutoscalingGroupCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingGroupCapacityReservationSpecification | undefined;
    set internalValue(value: AutoscalingGroupCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string | undefined;
    private _capacityReservationTarget;
    get capacityReservationTarget(): AutoscalingGroupCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): AutoscalingGroupCapacityReservationSpecificationCapacityReservationTarget | undefined;
}
export interface AutoscalingGroupInitialLifecycleHook {
    /** */
    readonly defaultResult?: string;
    /** */
    readonly heartbeatTimeout?: number;
    /** */
    readonly lifecycleTransition: string;
    /** (Optional) Name of the Auto Scaling Group. By default generated by Terraform. Conflicts with `namePrefix`. */
    readonly name: string;
    /** */
    readonly notificationMetadata?: string;
    /** */
    readonly notificationTargetArn?: string;
    /** */
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
    /** (Required) Specifies the upper limit on the number of instances that are in the InService or Pending state with a healthy status during an instance replacement activity. */
    readonly maxHealthyPercentage: number;
    /** (Required) Specifies the lower limit on the number of instances that must be in the InService state with a healthy status during an instance replacement activity. */
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
    /** (Required) List of Cloudwatch alarms. If any of these alarms goes into ALARM state, Instance Refresh is failed. */
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
    /** (Optional) Automatically rollback if instance refresh fails. Defaults to `false`. This option may only be set to `true` when specifying a `launchTemplate` or `mixedInstancesPolicy`. */
    readonly autoRollback?: boolean | cdktf.IResolvable;
    /** (Optional) Number of seconds to wait after a checkpoint. Defaults to `3600`. */
    readonly checkpointDelay?: string;
    /** (Optional) List of percentages for each checkpoint. Values must be unique and in ascending order. To replace all instances, the final number must be `100`. */
    readonly checkpointPercentages?: number[];
    /** (Optional) Number of seconds until a newly launched instance is configured and ready to use. Default behavior is to use the Auto Scaling Group's health check grace period. */
    readonly instanceWarmup?: string;
    /** (Optional) Amount of capacity in the Auto Scaling group that can be in service and healthy, or pending, to support your workload when an instance refresh is in place, as a percentage of the desired capacity of the Auto Scaling group. Values must be between `100` and `200`, defaults to `100`. */
    readonly maxHealthyPercentage?: number;
    /** (Optional) Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. Defaults to `90`. */
    readonly minHealthyPercentage?: number;
    /** (Optional) Behavior when encountering instances protected from scale in are found. Available behaviors are `Refresh`, `Ignore`, and `Wait`. Default is `Ignore`. */
    readonly scaleInProtectedInstances?: string;
    /** (Optional) Replace instances that already have your desired configuration. Defaults to `false`. */
    readonly skipMatching?: boolean | cdktf.IResolvable;
    /** (Optional) Behavior when encountering instances in the `Standby` state in are found. Available behaviors are `Terminate`, `Ignore`, and `Wait`. Default is `Ignore`. */
    readonly standbyInstances?: string;
    /** */
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
    /** (Required) Strategy to use for instance refresh. The only allowed value is `Rolling`. See [StartInstanceRefresh Action](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_StartInstanceRefresh.html#API_StartInstanceRefresh_RequestParameters) for more information. */
    readonly strategy: string;
    /** (Optional) Set of additional property names that will trigger an Instance Refresh. A refresh will always be triggered by a change in any of `launchConfiguration`, `launchTemplate`, or `mixedInstancesPolicy`. */
    readonly triggers?: string[];
    /** */
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
    /** (Optional) ID of the launch template. Conflicts with `name`. */
    readonly id?: string;
    /** (Optional) Name of the launch template. Conflicts with `id`. */
    readonly name?: string;
    /** (Optional) Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`). */
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
    /** (Optional) Strategy to use when launching on-demand instances. Valid values: `prioritized`, `lowest-price`. Default: `prioritized`. */
    readonly onDemandAllocationStrategy?: string;
    /** (Optional) Absolute minimum amount of desired capacity that must be fulfilled by on-demand instances. Default: `0`. */
    readonly onDemandBaseCapacity?: number;
    /** (Optional) Percentage split between on-demand and Spot instances above the base on-demand capacity. Default: `100`. */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /** (Optional) How to allocate capacity across the Spot pools. Valid values: `lowest-price`, `capacity-optimized`, `capacity-optimized-prioritized`, and `price-capacity-optimized`. Default: `lowest-price`. */
    readonly spotAllocationStrategy?: string;
    /** (Optional) Number of Spot pools per availability zone to allocate capacity. EC2 Auto Scaling selects the cheapest Spot pools and evenly allocates Spot capacity across the number of Spot pools that you specify. Only available with `spotAllocationStrategy` set to `lowest-price`. Otherwise it must be set to `0`, if it has been defined before. Default: `2`. */
    readonly spotInstancePools?: number;
    /** (Optional) Maximum price per unit hour that the user is willing to pay for the Spot instances. Default: an empty string which means the on-demand price. */
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
    /** (Optional) ID of the launch template. Conflicts with `launchTemplateName`. */
    readonly launchTemplateId?: string;
    /** (Optional) Name of the launch template. Conflicts with `launchTemplateId`. */
    readonly launchTemplateName?: string;
    /** (Optional) Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`). */
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
    /** (Optional) Maximum. Set to `0` to exclude instance types with accelerators. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. May be a decimal number, e.g. `0.5`. */
    readonly max?: number;
    /** (Optional) Minimum. May be a decimal number, e.g. `0.5`. */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#max AutoscalingGroup#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#min AutoscalingGroup#min}
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. May be a decimal number, e.g. `0.5`. */
    readonly max?: number;
    /** (Optional) Minimum. May be a decimal number, e.g. `0.5`. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Required) Minimum. */
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
    /** (Optional) List of accelerator manufacturer names. Default is any manufacturer. */
    readonly acceleratorManufacturers?: string[];
    /** (Optional) List of accelerator names. Default is any acclerator. */
    readonly acceleratorNames?: string[];
    /** (Optional) List of accelerator types. Default is any accelerator type. */
    readonly acceleratorTypes?: string[];
    /** (Optional) List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types. */
    readonly allowedInstanceTypes?: string[];
    /** (Optional) Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    readonly bareMetal?: string;
    /** (Optional) Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    readonly burstablePerformance?: string;
    /** */
    readonly cpuManufacturers?: string[];
    /** (Optional) List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. */
    readonly excludedInstanceTypes?: string[];
    /** (Optional) List of instance generation names. Default is any generation. */
    readonly instanceGenerations?: string[];
    /** (Optional) Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`. */
    readonly localStorage?: string;
    /** (Optional) List of local storage type names. Default any storage type. */
    readonly localStorageTypes?: string[];
    /** (Optional) The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Conflicts with `spotMaxPricePercentageOverLowestPrice` - `memoryGibPerVcpu` - (Optional) Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum. */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /** (Optional) Price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20. */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /** (Optional) Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`. */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /** (Optional) Price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `maxSpotPriceAsPercentageOfOptimalOnDemandPrice` If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price. */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /** */
    readonly acceleratorCount?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount;
    /** */
    readonly acceleratorTotalMemoryMib?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib;
    /** */
    readonly baselineEbsBandwidthMbps?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps;
    /** */
    readonly memoryGibPerVcpu?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu;
    /** */
    readonly memoryMib?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib;
    /** */
    readonly networkBandwidthGbps?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps;
    /** */
    readonly networkInterfaceCount?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount;
    /** */
    readonly totalLocalStorageGb?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#version AutoscalingGroup#version}
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
    /** (Optional) Override the instance type in the Launch Template. */
    readonly instanceType?: string;
    /** (Optional) Number of capacity units, which gives the instance type a proportional weight to other instance types. */
    readonly weightedCapacity?: string;
    /** */
    readonly instanceRequirements?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#override AutoscalingGroup#override}
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
    /** */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution;
    /** */
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
    /** (Required) Key - `value` - (Required) Value - `propagateAtLaunch` - (Required) Enables propagation of the tag to Amazon EC2 instances launched via this ASG To declare multiple tags, additional `tag` blocks can be specified. */
    readonly key: string;
    /** (Required) Enables propagation of the tag to Amazon EC2 instances launched via this ASG To declare multiple tags, additional `tag` blocks can be specified. */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /** (Required) Value - `propagateAtLaunch` - (Required) Enables propagation of the tag to Amazon EC2 instances launched via this ASG To declare multiple tags, additional `tag` blocks can be specified. */
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
    /** (Default `10m`) */
    readonly delete?: string;
    /** */
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
    /** */
    readonly identifier: string;
    /** */
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
    /** (Optional) Whether instances in the Auto Scaling group can be returned to the warm pool on scale in. */
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
    /** (Optional) Total maximum number of instances that are allowed to be in the warm pool or in any state except Terminated for the Auto Scaling group. */
    readonly maxGroupPreparedCapacity?: number;
    /** (Optional) Minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified. */
    readonly minSize?: number;
    /** (Optional) Sets the instance state to transition to after the lifecycle hooks finish. Valid values are: Stopped (default), Running or Hibernated. */
    readonly poolState?: string;
    /** */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group aws_autoscaling_group}
*/
export declare class AutoscalingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_group";
    /**
    * Generates CDKTF code for importing a AutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingGroup to import
    * @param importFromId The id of the existing AutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_group aws_autoscaling_group} Resource
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
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): AutoscalingGroupCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: AutoscalingGroupCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): AutoscalingGroupCapacityReservationSpecification | undefined;
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
