/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsTaskExecutionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#client_token DataAwsEcsTaskExecution#client_token}
    */
    readonly clientToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#cluster DataAwsEcsTaskExecution#cluster}
    */
    readonly cluster: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#desired_count DataAwsEcsTaskExecution#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#enable_ecs_managed_tags DataAwsEcsTaskExecution#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#enable_execute_command DataAwsEcsTaskExecution#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#group DataAwsEcsTaskExecution#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#id DataAwsEcsTaskExecution#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#launch_type DataAwsEcsTaskExecution#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#platform_version DataAwsEcsTaskExecution#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#propagate_tags DataAwsEcsTaskExecution#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#reference_id DataAwsEcsTaskExecution#reference_id}
    */
    readonly referenceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#started_by DataAwsEcsTaskExecution#started_by}
    */
    readonly startedBy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#tags DataAwsEcsTaskExecution#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#task_definition DataAwsEcsTaskExecution#task_definition}
    */
    readonly taskDefinition: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#capacity_provider_strategy DataAwsEcsTaskExecution#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: DataAwsEcsTaskExecutionCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#network_configuration DataAwsEcsTaskExecution#network_configuration}
    */
    readonly networkConfiguration?: DataAwsEcsTaskExecutionNetworkConfiguration;
    /**
    * overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#overrides DataAwsEcsTaskExecution#overrides}
    */
    readonly overrides?: DataAwsEcsTaskExecutionOverrides;
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#placement_constraints DataAwsEcsTaskExecution#placement_constraints}
    */
    readonly placementConstraints?: DataAwsEcsTaskExecutionPlacementConstraints[] | cdktf.IResolvable;
    /**
    * placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#placement_strategy DataAwsEcsTaskExecution#placement_strategy}
    */
    readonly placementStrategy?: DataAwsEcsTaskExecutionPlacementStrategy[] | cdktf.IResolvable;
}
export interface DataAwsEcsTaskExecutionCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#base DataAwsEcsTaskExecution#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#capacity_provider DataAwsEcsTaskExecution#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#weight DataAwsEcsTaskExecution#weight}
    */
    readonly weight?: number;
}
export declare function dataAwsEcsTaskExecutionCapacityProviderStrategyToTerraform(struct?: DataAwsEcsTaskExecutionCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionCapacityProviderStrategyToHclTerraform(struct?: DataAwsEcsTaskExecutionCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionCapacityProviderStrategy | cdktf.IResolvable | undefined);
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
export declare class DataAwsEcsTaskExecutionCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionCapacityProviderStrategyOutputReference;
}
export interface DataAwsEcsTaskExecutionNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#assign_public_ip DataAwsEcsTaskExecution#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#security_groups DataAwsEcsTaskExecution#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#subnets DataAwsEcsTaskExecution#subnets}
    */
    readonly subnets: string[];
}
export declare function dataAwsEcsTaskExecutionNetworkConfigurationToTerraform(struct?: DataAwsEcsTaskExecutionNetworkConfigurationOutputReference | DataAwsEcsTaskExecutionNetworkConfiguration): any;
export declare function dataAwsEcsTaskExecutionNetworkConfigurationToHclTerraform(struct?: DataAwsEcsTaskExecutionNetworkConfigurationOutputReference | DataAwsEcsTaskExecutionNetworkConfiguration): any;
export declare class DataAwsEcsTaskExecutionNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEcsTaskExecutionNetworkConfiguration | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionNetworkConfiguration | undefined);
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
export interface DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#key DataAwsEcsTaskExecution#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}
    */
    readonly value: string;
}
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentToTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentToHclTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentOutputReference;
}
export interface DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#value DataAwsEcsTaskExecution#value}
    */
    readonly value: string;
}
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsToTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsToHclTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsOutputReference;
}
export interface DataAwsEcsTaskExecutionOverridesContainerOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#command DataAwsEcsTaskExecution#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}
    */
    readonly cpu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}
    */
    readonly memory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#memory_reservation DataAwsEcsTaskExecution#memory_reservation}
    */
    readonly memoryReservation?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#name DataAwsEcsTaskExecution#name}
    */
    readonly name: string;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#environment DataAwsEcsTaskExecution#environment}
    */
    readonly environment?: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[] | cdktf.IResolvable;
    /**
    * resource_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#resource_requirements DataAwsEcsTaskExecution#resource_requirements}
    */
    readonly resourceRequirements?: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable;
}
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesToTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverrides | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionOverridesContainerOverridesToHclTerraform(struct?: DataAwsEcsTaskExecutionOverridesContainerOverrides | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionOverridesContainerOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionOverridesContainerOverrides | cdktf.IResolvable | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _cpu?;
    get cpu(): number;
    set cpu(value: number);
    resetCpu(): void;
    get cpuInput(): number | undefined;
    private _memory?;
    get memory(): number;
    set memory(value: number);
    resetMemory(): void;
    get memoryInput(): number | undefined;
    private _memoryReservation?;
    get memoryReservation(): number;
    set memoryReservation(value: number);
    resetMemoryReservation(): void;
    get memoryReservationInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _environment;
    get environment(): DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironmentList;
    putEnvironment(value: DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[] | cdktf.IResolvable): void;
    resetEnvironment(): void;
    get environmentInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesEnvironment[] | undefined;
    private _resourceRequirements;
    get resourceRequirements(): DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirementsList;
    putResourceRequirements(value: DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[] | cdktf.IResolvable): void;
    resetResourceRequirements(): void;
    get resourceRequirementsInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverridesResourceRequirements[] | undefined;
}
export declare class DataAwsEcsTaskExecutionOverridesContainerOverridesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionOverridesContainerOverrides[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionOverridesContainerOverridesOutputReference;
}
export interface DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#device_name DataAwsEcsTaskExecution#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#device_type DataAwsEcsTaskExecution#device_type}
    */
    readonly deviceType?: string;
}
export declare function dataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesToTerraform(struct?: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesToHclTerraform(struct?: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    private _deviceType?;
    get deviceType(): string;
    set deviceType(value: string);
    resetDeviceType(): void;
    get deviceTypeInput(): string | undefined;
}
export declare class DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesOutputReference;
}
export interface DataAwsEcsTaskExecutionOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#cpu DataAwsEcsTaskExecution#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#execution_role_arn DataAwsEcsTaskExecution#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#memory DataAwsEcsTaskExecution#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#task_role_arn DataAwsEcsTaskExecution#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * container_overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#container_overrides DataAwsEcsTaskExecution#container_overrides}
    */
    readonly containerOverrides?: DataAwsEcsTaskExecutionOverridesContainerOverrides[] | cdktf.IResolvable;
    /**
    * inference_accelerator_overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#inference_accelerator_overrides DataAwsEcsTaskExecution#inference_accelerator_overrides}
    */
    readonly inferenceAcceleratorOverrides?: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable;
}
export declare function dataAwsEcsTaskExecutionOverridesToTerraform(struct?: DataAwsEcsTaskExecutionOverridesOutputReference | DataAwsEcsTaskExecutionOverrides): any;
export declare function dataAwsEcsTaskExecutionOverridesToHclTerraform(struct?: DataAwsEcsTaskExecutionOverridesOutputReference | DataAwsEcsTaskExecutionOverrides): any;
export declare class DataAwsEcsTaskExecutionOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEcsTaskExecutionOverrides | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionOverrides | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string | undefined;
    private _containerOverrides;
    get containerOverrides(): DataAwsEcsTaskExecutionOverridesContainerOverridesList;
    putContainerOverrides(value: DataAwsEcsTaskExecutionOverridesContainerOverrides[] | cdktf.IResolvable): void;
    resetContainerOverrides(): void;
    get containerOverridesInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionOverridesContainerOverrides[] | undefined;
    private _inferenceAcceleratorOverrides;
    get inferenceAcceleratorOverrides(): DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverridesList;
    putInferenceAcceleratorOverrides(value: DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[] | cdktf.IResolvable): void;
    resetInferenceAcceleratorOverrides(): void;
    get inferenceAcceleratorOverridesInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionOverridesInferenceAcceleratorOverrides[] | undefined;
}
export interface DataAwsEcsTaskExecutionPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#expression DataAwsEcsTaskExecution#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}
    */
    readonly type: string;
}
export declare function dataAwsEcsTaskExecutionPlacementConstraintsToTerraform(struct?: DataAwsEcsTaskExecutionPlacementConstraints | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionPlacementConstraintsToHclTerraform(struct?: DataAwsEcsTaskExecutionPlacementConstraints | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionPlacementConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionPlacementConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionPlacementConstraints | cdktf.IResolvable | undefined);
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
export declare class DataAwsEcsTaskExecutionPlacementConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionPlacementConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionPlacementConstraintsOutputReference;
}
export interface DataAwsEcsTaskExecutionPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#field DataAwsEcsTaskExecution#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#type DataAwsEcsTaskExecution#type}
    */
    readonly type: string;
}
export declare function dataAwsEcsTaskExecutionPlacementStrategyToTerraform(struct?: DataAwsEcsTaskExecutionPlacementStrategy | cdktf.IResolvable): any;
export declare function dataAwsEcsTaskExecutionPlacementStrategyToHclTerraform(struct?: DataAwsEcsTaskExecutionPlacementStrategy | cdktf.IResolvable): any;
export declare class DataAwsEcsTaskExecutionPlacementStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskExecutionPlacementStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcsTaskExecutionPlacementStrategy | cdktf.IResolvable | undefined);
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
export declare class DataAwsEcsTaskExecutionPlacementStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcsTaskExecutionPlacementStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskExecutionPlacementStrategyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution aws_ecs_task_execution}
*/
export declare class DataAwsEcsTaskExecution extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecs_task_execution";
    /**
    * Generates CDKTF code for importing a DataAwsEcsTaskExecution resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcsTaskExecution to import
    * @param importFromId The id of the existing DataAwsEcsTaskExecution that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcsTaskExecution to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_task_execution aws_ecs_task_execution} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskExecutionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcsTaskExecutionConfig);
    private _clientToken?;
    get clientToken(): string;
    set clientToken(value: string);
    resetClientToken(): void;
    get clientTokenInput(): string | undefined;
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string | undefined;
    private _desiredCount?;
    get desiredCount(): number;
    set desiredCount(value: number);
    resetDesiredCount(): void;
    get desiredCountInput(): number | undefined;
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
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _startedBy?;
    get startedBy(): string;
    set startedBy(value: string);
    resetStartedBy(): void;
    get startedByInput(): string | undefined;
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
    get taskArns(): string[];
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): DataAwsEcsTaskExecutionCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: DataAwsEcsTaskExecutionCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionCapacityProviderStrategy[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): DataAwsEcsTaskExecutionNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: DataAwsEcsTaskExecutionNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): DataAwsEcsTaskExecutionNetworkConfiguration | undefined;
    private _overrides;
    get overrides(): DataAwsEcsTaskExecutionOverridesOutputReference;
    putOverrides(value: DataAwsEcsTaskExecutionOverrides): void;
    resetOverrides(): void;
    get overridesInput(): DataAwsEcsTaskExecutionOverrides | undefined;
    private _placementConstraints;
    get placementConstraints(): DataAwsEcsTaskExecutionPlacementConstraintsList;
    putPlacementConstraints(value: DataAwsEcsTaskExecutionPlacementConstraints[] | cdktf.IResolvable): void;
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionPlacementConstraints[] | undefined;
    private _placementStrategy;
    get placementStrategy(): DataAwsEcsTaskExecutionPlacementStrategyList;
    putPlacementStrategy(value: DataAwsEcsTaskExecutionPlacementStrategy[] | cdktf.IResolvable): void;
    resetPlacementStrategy(): void;
    get placementStrategyInput(): cdktf.IResolvable | DataAwsEcsTaskExecutionPlacementStrategy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
