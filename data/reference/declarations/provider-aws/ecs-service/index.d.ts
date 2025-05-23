/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#availability_zone_rebalancing EcsService#availability_zone_rebalancing}
    */
    readonly availabilityZoneRebalancing?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#cluster EcsService#cluster}
    */
    readonly cluster?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}
    */
    readonly deploymentMaximumPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
    */
    readonly deploymentMinimumHealthyPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#desired_count EcsService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#enable_execute_command EcsService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#force_delete EcsService#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#force_new_deployment EcsService#force_new_deployment}
    */
    readonly forceNewDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#iam_role EcsService#iam_role}
    */
    readonly iamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#id EcsService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#launch_type EcsService#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#name EcsService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#platform_version EcsService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#scheduling_strategy EcsService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#tags EcsService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#tags_all EcsService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#task_definition EcsService#task_definition}
    */
    readonly taskDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#triggers EcsService#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}
    */
    readonly waitForSteadyState?: boolean | cdktf.IResolvable;
    /**
    * alarms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#alarms EcsService#alarms}
    */
    readonly alarms?: EcsServiceAlarms;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * deployment_circuit_breaker block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker;
    /**
    * deployment_controller block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#deployment_controller EcsService#deployment_controller}
    */
    readonly deploymentController?: EcsServiceDeploymentController;
    /**
    * load_balancer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#load_balancer EcsService#load_balancer}
    */
    readonly loadBalancer?: EcsServiceLoadBalancer[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#network_configuration EcsService#network_configuration}
    */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration;
    /**
    * ordered_placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}
    */
    readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable;
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#placement_constraints EcsService#placement_constraints}
    */
    readonly placementConstraints?: EcsServicePlacementConstraints[] | cdktf.IResolvable;
    /**
    * service_connect_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#service_connect_configuration EcsService#service_connect_configuration}
    */
    readonly serviceConnectConfiguration?: EcsServiceServiceConnectConfiguration;
    /**
    * service_registries block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#service_registries EcsService#service_registries}
    */
    readonly serviceRegistries?: EcsServiceServiceRegistries;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#timeouts EcsService#timeouts}
    */
    readonly timeouts?: EcsServiceTimeouts;
    /**
    * volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#volume_configuration EcsService#volume_configuration}
    */
    readonly volumeConfiguration?: EcsServiceVolumeConfiguration;
    /**
    * vpc_lattice_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#vpc_lattice_configurations EcsService#vpc_lattice_configurations}
    */
    readonly vpcLatticeConfigurations?: EcsServiceVpcLatticeConfigurations[] | cdktf.IResolvable;
}
export interface EcsServiceAlarms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#alarm_names EcsService#alarm_names}
    */
    readonly alarmNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
}
export declare function ecsServiceAlarmsToTerraform(struct?: EcsServiceAlarmsOutputReference | EcsServiceAlarms): any;
export declare function ecsServiceAlarmsToHclTerraform(struct?: EcsServiceAlarmsOutputReference | EcsServiceAlarms): any;
export declare class EcsServiceAlarmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceAlarms | undefined;
    set internalValue(value: EcsServiceAlarms | undefined);
    private _alarmNames?;
    get alarmNames(): string[];
    set alarmNames(value: string[]);
    get alarmNamesInput(): string[] | undefined;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _rollback?;
    get rollback(): boolean | cdktf.IResolvable;
    set rollback(value: boolean | cdktf.IResolvable);
    get rollbackInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EcsServiceCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#base EcsService#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#capacity_provider EcsService#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#weight EcsService#weight}
    */
    readonly weight?: number;
}
export declare function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function ecsServiceCapacityProviderStrategyToHclTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class EcsServiceCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined);
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
export declare class EcsServiceCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceCapacityProviderStrategyOutputReference;
}
export interface EcsServiceDeploymentCircuitBreaker {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
}
export declare function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any;
export declare function ecsServiceDeploymentCircuitBreakerToHclTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any;
export declare class EcsServiceDeploymentCircuitBreakerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceDeploymentCircuitBreaker | undefined;
    set internalValue(value: EcsServiceDeploymentCircuitBreaker | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _rollback?;
    get rollback(): boolean | cdktf.IResolvable;
    set rollback(value: boolean | cdktf.IResolvable);
    get rollbackInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EcsServiceDeploymentController {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#type EcsService#type}
    */
    readonly type?: string;
}
export declare function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any;
export declare function ecsServiceDeploymentControllerToHclTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any;
export declare class EcsServiceDeploymentControllerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceDeploymentController | undefined;
    set internalValue(value: EcsServiceDeploymentController | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface EcsServiceLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#container_name EcsService#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#container_port EcsService#container_port}
    */
    readonly containerPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#elb_name EcsService#elb_name}
    */
    readonly elbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export declare function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any;
export declare function ecsServiceLoadBalancerToHclTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any;
export declare class EcsServiceLoadBalancerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceLoadBalancer | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceLoadBalancer | cdktf.IResolvable | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string | undefined;
    private _containerPort?;
    get containerPort(): number;
    set containerPort(value: number);
    get containerPortInput(): number | undefined;
    private _elbName?;
    get elbName(): string;
    set elbName(value: string);
    resetElbName(): void;
    get elbNameInput(): string | undefined;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    resetTargetGroupArn(): void;
    get targetGroupArnInput(): string | undefined;
}
export declare class EcsServiceLoadBalancerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceLoadBalancer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceLoadBalancerOutputReference;
}
export interface EcsServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#assign_public_ip EcsService#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#security_groups EcsService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#subnets EcsService#subnets}
    */
    readonly subnets: string[];
}
export declare function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any;
export declare function ecsServiceNetworkConfigurationToHclTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any;
export declare class EcsServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceNetworkConfiguration | undefined;
    set internalValue(value: EcsServiceNetworkConfiguration | undefined);
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
export interface EcsServiceOrderedPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#field EcsService#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable): any;
export declare function ecsServiceOrderedPlacementStrategyToHclTerraform(struct?: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable): any;
export declare class EcsServiceOrderedPlacementStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceOrderedPlacementStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable | undefined);
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
export declare class EcsServiceOrderedPlacementStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceOrderedPlacementStrategyOutputReference;
}
export interface EcsServicePlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#expression EcsService#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints | cdktf.IResolvable): any;
export declare function ecsServicePlacementConstraintsToHclTerraform(struct?: EcsServicePlacementConstraints | cdktf.IResolvable): any;
export declare class EcsServicePlacementConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServicePlacementConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServicePlacementConstraints | cdktf.IResolvable | undefined);
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
export declare class EcsServicePlacementConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServicePlacementConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServicePlacementConstraintsOutputReference;
}
export interface EcsServiceServiceConnectConfigurationLogConfigurationSecretOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#name EcsService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#value_from EcsService#value_from}
    */
    readonly valueFrom: string;
}
export declare function ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable): any;
export declare function ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToHclTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable): any;
export declare class EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _valueFrom?;
    get valueFrom(): string;
    set valueFrom(value: string);
    get valueFromInput(): string | undefined;
}
export declare class EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference;
}
export interface EcsServiceServiceConnectConfigurationLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#log_driver EcsService#log_driver}
    */
    readonly logDriver: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#options EcsService#options}
    */
    readonly options?: {
        [key: string]: string;
    };
    /**
    * secret_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#secret_option EcsService#secret_option}
    */
    readonly secretOption?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable;
}
export declare function ecsServiceServiceConnectConfigurationLogConfigurationToTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference | EcsServiceServiceConnectConfigurationLogConfiguration): any;
export declare function ecsServiceServiceConnectConfigurationLogConfigurationToHclTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference | EcsServiceServiceConnectConfigurationLogConfiguration): any;
export declare class EcsServiceServiceConnectConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfigurationLogConfiguration | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationLogConfiguration | undefined);
    private _logDriver?;
    get logDriver(): string;
    set logDriver(value: string);
    get logDriverInput(): string | undefined;
    private _options?;
    get options(): {
        [key: string]: string;
    };
    set options(value: {
        [key: string]: string;
    });
    resetOptions(): void;
    get optionsInput(): {
        [key: string]: string;
    } | undefined;
    private _secretOption;
    get secretOption(): EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList;
    putSecretOption(value: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable): void;
    resetSecretOption(): void;
    get secretOptionInput(): cdktf.IResolvable | EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | undefined;
}
export interface EcsServiceServiceConnectConfigurationServiceClientAlias {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#dns_name EcsService#dns_name}
    */
    readonly dnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#port EcsService#port}
    */
    readonly port: number;
}
export declare function ecsServiceServiceConnectConfigurationServiceClientAliasToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference | EcsServiceServiceConnectConfigurationServiceClientAlias): any;
export declare function ecsServiceServiceConnectConfigurationServiceClientAliasToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference | EcsServiceServiceConnectConfigurationServiceClientAlias): any;
export declare class EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfigurationServiceClientAlias | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationServiceClientAlias | undefined);
    private _dnsName?;
    get dnsName(): string;
    set dnsName(value: string);
    resetDnsName(): void;
    get dnsNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
}
export interface EcsServiceServiceConnectConfigurationServiceTimeout {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#idle_timeout_seconds EcsService#idle_timeout_seconds}
    */
    readonly idleTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#per_request_timeout_seconds EcsService#per_request_timeout_seconds}
    */
    readonly perRequestTimeoutSeconds?: number;
}
export declare function ecsServiceServiceConnectConfigurationServiceTimeoutToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference | EcsServiceServiceConnectConfigurationServiceTimeout): any;
export declare function ecsServiceServiceConnectConfigurationServiceTimeoutToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference | EcsServiceServiceConnectConfigurationServiceTimeout): any;
export declare class EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfigurationServiceTimeout | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationServiceTimeout | undefined);
    private _idleTimeoutSeconds?;
    get idleTimeoutSeconds(): number;
    set idleTimeoutSeconds(value: number);
    resetIdleTimeoutSeconds(): void;
    get idleTimeoutSecondsInput(): number | undefined;
    private _perRequestTimeoutSeconds?;
    get perRequestTimeoutSeconds(): number;
    set perRequestTimeoutSeconds(value: number);
    resetPerRequestTimeoutSeconds(): void;
    get perRequestTimeoutSecondsInput(): number | undefined;
}
export interface EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#aws_pca_authority_arn EcsService#aws_pca_authority_arn}
    */
    readonly awsPcaAuthorityArn: string;
}
export declare function ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference | EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): any;
export declare function ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference | EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): any;
export declare class EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority | undefined);
    private _awsPcaAuthorityArn?;
    get awsPcaAuthorityArn(): string;
    set awsPcaAuthorityArn(value: string);
    get awsPcaAuthorityArnInput(): string | undefined;
}
export interface EcsServiceServiceConnectConfigurationServiceTls {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#kms_key EcsService#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#role_arn EcsService#role_arn}
    */
    readonly roleArn?: string;
    /**
    * issuer_cert_authority block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#issuer_cert_authority EcsService#issuer_cert_authority}
    */
    readonly issuerCertAuthority: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;
}
export declare function ecsServiceServiceConnectConfigurationServiceTlsToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsOutputReference | EcsServiceServiceConnectConfigurationServiceTls): any;
export declare function ecsServiceServiceConnectConfigurationServiceTlsToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsOutputReference | EcsServiceServiceConnectConfigurationServiceTls): any;
export declare class EcsServiceServiceConnectConfigurationServiceTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfigurationServiceTls | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationServiceTls | undefined);
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _issuerCertAuthority;
    get issuerCertAuthority(): EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference;
    putIssuerCertAuthority(value: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): void;
    get issuerCertAuthorityInput(): EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority | undefined;
}
export interface EcsServiceServiceConnectConfigurationService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#discovery_name EcsService#discovery_name}
    */
    readonly discoveryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#ingress_port_override EcsService#ingress_port_override}
    */
    readonly ingressPortOverride?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#port_name EcsService#port_name}
    */
    readonly portName: string;
    /**
    * client_alias block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#client_alias EcsService#client_alias}
    */
    readonly clientAlias?: EcsServiceServiceConnectConfigurationServiceClientAlias;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#timeout EcsService#timeout}
    */
    readonly timeout?: EcsServiceServiceConnectConfigurationServiceTimeout;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#tls EcsService#tls}
    */
    readonly tls?: EcsServiceServiceConnectConfigurationServiceTls;
}
export declare function ecsServiceServiceConnectConfigurationServiceToTerraform(struct?: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable): any;
export declare function ecsServiceServiceConnectConfigurationServiceToHclTerraform(struct?: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable): any;
export declare class EcsServiceServiceConnectConfigurationServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceServiceConnectConfigurationService | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable | undefined);
    private _discoveryName?;
    get discoveryName(): string;
    set discoveryName(value: string);
    resetDiscoveryName(): void;
    get discoveryNameInput(): string | undefined;
    private _ingressPortOverride?;
    get ingressPortOverride(): number;
    set ingressPortOverride(value: number);
    resetIngressPortOverride(): void;
    get ingressPortOverrideInput(): number | undefined;
    private _portName?;
    get portName(): string;
    set portName(value: string);
    get portNameInput(): string | undefined;
    private _clientAlias;
    get clientAlias(): EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference;
    putClientAlias(value: EcsServiceServiceConnectConfigurationServiceClientAlias): void;
    resetClientAlias(): void;
    get clientAliasInput(): EcsServiceServiceConnectConfigurationServiceClientAlias | undefined;
    private _timeout;
    get timeout(): EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference;
    putTimeout(value: EcsServiceServiceConnectConfigurationServiceTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): EcsServiceServiceConnectConfigurationServiceTimeout | undefined;
    private _tls;
    get tls(): EcsServiceServiceConnectConfigurationServiceTlsOutputReference;
    putTls(value: EcsServiceServiceConnectConfigurationServiceTls): void;
    resetTls(): void;
    get tlsInput(): EcsServiceServiceConnectConfigurationServiceTls | undefined;
}
export declare class EcsServiceServiceConnectConfigurationServiceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceServiceConnectConfigurationServiceOutputReference;
}
export interface EcsServiceServiceConnectConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#enabled EcsService#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#namespace EcsService#namespace}
    */
    readonly namespace?: string;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#log_configuration EcsService#log_configuration}
    */
    readonly logConfiguration?: EcsServiceServiceConnectConfigurationLogConfiguration;
    /**
    * service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#service EcsService#service}
    */
    readonly service?: EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable;
}
export declare function ecsServiceServiceConnectConfigurationToTerraform(struct?: EcsServiceServiceConnectConfigurationOutputReference | EcsServiceServiceConnectConfiguration): any;
export declare function ecsServiceServiceConnectConfigurationToHclTerraform(struct?: EcsServiceServiceConnectConfigurationOutputReference | EcsServiceServiceConnectConfiguration): any;
export declare class EcsServiceServiceConnectConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceConnectConfiguration | undefined;
    set internalValue(value: EcsServiceServiceConnectConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _logConfiguration;
    get logConfiguration(): EcsServiceServiceConnectConfigurationLogConfigurationOutputReference;
    putLogConfiguration(value: EcsServiceServiceConnectConfigurationLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): EcsServiceServiceConnectConfigurationLogConfiguration | undefined;
    private _service;
    get service(): EcsServiceServiceConnectConfigurationServiceList;
    putService(value: EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable): void;
    resetService(): void;
    get serviceInput(): cdktf.IResolvable | EcsServiceServiceConnectConfigurationService[] | undefined;
}
export interface EcsServiceServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#port EcsService#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#registry_arn EcsService#registry_arn}
    */
    readonly registryArn: string;
}
export declare function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any;
export declare function ecsServiceServiceRegistriesToHclTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any;
export declare class EcsServiceServiceRegistriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceServiceRegistries | undefined;
    set internalValue(value: EcsServiceServiceRegistries | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    resetContainerName(): void;
    get containerNameInput(): string | undefined;
    private _containerPort?;
    get containerPort(): number;
    set containerPort(value: number);
    resetContainerPort(): void;
    get containerPortInput(): number | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _registryArn?;
    get registryArn(): string;
    set registryArn(value: string);
    get registryArnInput(): string | undefined;
}
export interface EcsServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#create EcsService#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#delete EcsService#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#update EcsService#update}
    */
    readonly update?: string;
}
export declare function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any;
export declare function ecsServiceTimeoutsToHclTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any;
export declare class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceTimeouts | cdktf.IResolvable | undefined);
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
export interface EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#resource_type EcsService#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#tags EcsService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function ecsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsToTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications | cdktf.IResolvable): any;
export declare function ecsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsToHclTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications | cdktf.IResolvable): any;
export declare class EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications | cdktf.IResolvable | undefined);
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
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
}
export declare class EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsOutputReference;
}
export interface EcsServiceVolumeConfigurationManagedEbsVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#encrypted EcsService#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#file_system_type EcsService#file_system_type}
    */
    readonly fileSystemType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#iops EcsService#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#kms_key_id EcsService#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#role_arn EcsService#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#size_in_gb EcsService#size_in_gb}
    */
    readonly sizeInGb?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#snapshot_id EcsService#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#throughput EcsService#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#volume_type EcsService#volume_type}
    */
    readonly volumeType?: string;
    /**
    * tag_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#tag_specifications EcsService#tag_specifications}
    */
    readonly tagSpecifications?: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[] | cdktf.IResolvable;
}
export declare function ecsServiceVolumeConfigurationManagedEbsVolumeToTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference | EcsServiceVolumeConfigurationManagedEbsVolume): any;
export declare function ecsServiceVolumeConfigurationManagedEbsVolumeToHclTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference | EcsServiceVolumeConfigurationManagedEbsVolume): any;
export declare class EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceVolumeConfigurationManagedEbsVolume | undefined;
    set internalValue(value: EcsServiceVolumeConfigurationManagedEbsVolume | undefined);
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _fileSystemType?;
    get fileSystemType(): string;
    set fileSystemType(value: string);
    resetFileSystemType(): void;
    get fileSystemTypeInput(): string | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _sizeInGb?;
    get sizeInGb(): number;
    set sizeInGb(value: number);
    resetSizeInGb(): void;
    get sizeInGbInput(): number | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
    private _tagSpecifications;
    get tagSpecifications(): EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecificationsList;
    putTagSpecifications(value: EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[] | cdktf.IResolvable): void;
    resetTagSpecifications(): void;
    get tagSpecificationsInput(): cdktf.IResolvable | EcsServiceVolumeConfigurationManagedEbsVolumeTagSpecifications[] | undefined;
}
export interface EcsServiceVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#name EcsService#name}
    */
    readonly name: string;
    /**
    * managed_ebs_volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#managed_ebs_volume EcsService#managed_ebs_volume}
    */
    readonly managedEbsVolume: EcsServiceVolumeConfigurationManagedEbsVolume;
}
export declare function ecsServiceVolumeConfigurationToTerraform(struct?: EcsServiceVolumeConfigurationOutputReference | EcsServiceVolumeConfiguration): any;
export declare function ecsServiceVolumeConfigurationToHclTerraform(struct?: EcsServiceVolumeConfigurationOutputReference | EcsServiceVolumeConfiguration): any;
export declare class EcsServiceVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsServiceVolumeConfiguration | undefined;
    set internalValue(value: EcsServiceVolumeConfiguration | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _managedEbsVolume;
    get managedEbsVolume(): EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference;
    putManagedEbsVolume(value: EcsServiceVolumeConfigurationManagedEbsVolume): void;
    get managedEbsVolumeInput(): EcsServiceVolumeConfigurationManagedEbsVolume | undefined;
}
export interface EcsServiceVpcLatticeConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#port_name EcsService#port_name}
    */
    readonly portName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#role_arn EcsService#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn: string;
}
export declare function ecsServiceVpcLatticeConfigurationsToTerraform(struct?: EcsServiceVpcLatticeConfigurations | cdktf.IResolvable): any;
export declare function ecsServiceVpcLatticeConfigurationsToHclTerraform(struct?: EcsServiceVpcLatticeConfigurations | cdktf.IResolvable): any;
export declare class EcsServiceVpcLatticeConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsServiceVpcLatticeConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: EcsServiceVpcLatticeConfigurations | cdktf.IResolvable | undefined);
    private _portName?;
    get portName(): string;
    set portName(value: string);
    get portNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    get targetGroupArnInput(): string | undefined;
}
export declare class EcsServiceVpcLatticeConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsServiceVpcLatticeConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsServiceVpcLatticeConfigurationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service aws_ecs_service}
*/
export declare class EcsService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_service";
    /**
    * Generates CDKTF code for importing a EcsService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsService to import
    * @param importFromId The id of the existing EcsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_service aws_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig
    */
    constructor(scope: Construct, id: string, config: EcsServiceConfig);
    private _availabilityZoneRebalancing?;
    get availabilityZoneRebalancing(): string;
    set availabilityZoneRebalancing(value: string);
    resetAvailabilityZoneRebalancing(): void;
    get availabilityZoneRebalancingInput(): string | undefined;
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    resetCluster(): void;
    get clusterInput(): string | undefined;
    private _deploymentMaximumPercent?;
    get deploymentMaximumPercent(): number;
    set deploymentMaximumPercent(value: number);
    resetDeploymentMaximumPercent(): void;
    get deploymentMaximumPercentInput(): number | undefined;
    private _deploymentMinimumHealthyPercent?;
    get deploymentMinimumHealthyPercent(): number;
    set deploymentMinimumHealthyPercent(value: number);
    resetDeploymentMinimumHealthyPercent(): void;
    get deploymentMinimumHealthyPercentInput(): number | undefined;
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
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _forceNewDeployment?;
    get forceNewDeployment(): boolean | cdktf.IResolvable;
    set forceNewDeployment(value: boolean | cdktf.IResolvable);
    resetForceNewDeployment(): void;
    get forceNewDeploymentInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheckGracePeriodSeconds?;
    get healthCheckGracePeriodSeconds(): number;
    set healthCheckGracePeriodSeconds(value: number);
    resetHealthCheckGracePeriodSeconds(): void;
    get healthCheckGracePeriodSecondsInput(): number | undefined;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    resetIamRole(): void;
    get iamRoleInput(): string | undefined;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _schedulingStrategy?;
    get schedulingStrategy(): string;
    set schedulingStrategy(value: string);
    resetSchedulingStrategy(): void;
    get schedulingStrategyInput(): string | undefined;
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
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    resetTaskDefinition(): void;
    get taskDefinitionInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _waitForSteadyState?;
    get waitForSteadyState(): boolean | cdktf.IResolvable;
    set waitForSteadyState(value: boolean | cdktf.IResolvable);
    resetWaitForSteadyState(): void;
    get waitForSteadyStateInput(): boolean | cdktf.IResolvable | undefined;
    private _alarms;
    get alarms(): EcsServiceAlarmsOutputReference;
    putAlarms(value: EcsServiceAlarms): void;
    resetAlarms(): void;
    get alarmsInput(): EcsServiceAlarms | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): EcsServiceCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | EcsServiceCapacityProviderStrategy[] | undefined;
    private _deploymentCircuitBreaker;
    get deploymentCircuitBreaker(): EcsServiceDeploymentCircuitBreakerOutputReference;
    putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker): void;
    resetDeploymentCircuitBreaker(): void;
    get deploymentCircuitBreakerInput(): EcsServiceDeploymentCircuitBreaker | undefined;
    private _deploymentController;
    get deploymentController(): EcsServiceDeploymentControllerOutputReference;
    putDeploymentController(value: EcsServiceDeploymentController): void;
    resetDeploymentController(): void;
    get deploymentControllerInput(): EcsServiceDeploymentController | undefined;
    private _loadBalancer;
    get loadBalancer(): EcsServiceLoadBalancerList;
    putLoadBalancer(value: EcsServiceLoadBalancer[] | cdktf.IResolvable): void;
    resetLoadBalancer(): void;
    get loadBalancerInput(): cdktf.IResolvable | EcsServiceLoadBalancer[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): EcsServiceNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: EcsServiceNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsServiceNetworkConfiguration | undefined;
    private _orderedPlacementStrategy;
    get orderedPlacementStrategy(): EcsServiceOrderedPlacementStrategyList;
    putOrderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable): void;
    resetOrderedPlacementStrategy(): void;
    get orderedPlacementStrategyInput(): cdktf.IResolvable | EcsServiceOrderedPlacementStrategy[] | undefined;
    private _placementConstraints;
    get placementConstraints(): EcsServicePlacementConstraintsList;
    putPlacementConstraints(value: EcsServicePlacementConstraints[] | cdktf.IResolvable): void;
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): cdktf.IResolvable | EcsServicePlacementConstraints[] | undefined;
    private _serviceConnectConfiguration;
    get serviceConnectConfiguration(): EcsServiceServiceConnectConfigurationOutputReference;
    putServiceConnectConfiguration(value: EcsServiceServiceConnectConfiguration): void;
    resetServiceConnectConfiguration(): void;
    get serviceConnectConfigurationInput(): EcsServiceServiceConnectConfiguration | undefined;
    private _serviceRegistries;
    get serviceRegistries(): EcsServiceServiceRegistriesOutputReference;
    putServiceRegistries(value: EcsServiceServiceRegistries): void;
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsServiceServiceRegistries | undefined;
    private _timeouts;
    get timeouts(): EcsServiceTimeoutsOutputReference;
    putTimeouts(value: EcsServiceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EcsServiceTimeouts | undefined;
    private _volumeConfiguration;
    get volumeConfiguration(): EcsServiceVolumeConfigurationOutputReference;
    putVolumeConfiguration(value: EcsServiceVolumeConfiguration): void;
    resetVolumeConfiguration(): void;
    get volumeConfigurationInput(): EcsServiceVolumeConfiguration | undefined;
    private _vpcLatticeConfigurations;
    get vpcLatticeConfigurations(): EcsServiceVpcLatticeConfigurationsList;
    putVpcLatticeConfigurations(value: EcsServiceVpcLatticeConfigurations[] | cdktf.IResolvable): void;
    resetVpcLatticeConfigurations(): void;
    get vpcLatticeConfigurationsInput(): cdktf.IResolvable | EcsServiceVpcLatticeConfigurations[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
