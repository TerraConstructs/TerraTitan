/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsTaskSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#cluster EcsTaskSet#cluster}
    */
    readonly cluster: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#external_id EcsTaskSet#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#force_delete EcsTaskSet#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#id EcsTaskSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#launch_type EcsTaskSet#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#platform_version EcsTaskSet#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#service EcsTaskSet#service}
    */
    readonly service: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#tags_all EcsTaskSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#task_definition EcsTaskSet#task_definition}
    */
    readonly taskDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#wait_until_stable EcsTaskSet#wait_until_stable}
    */
    readonly waitUntilStable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}
    */
    readonly waitUntilStableTimeout?: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsTaskSetCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * load_balancer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#load_balancer EcsTaskSet#load_balancer}
    */
    readonly loadBalancer?: EcsTaskSetLoadBalancer[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#network_configuration EcsTaskSet#network_configuration}
    */
    readonly networkConfiguration?: EcsTaskSetNetworkConfiguration;
    /**
    * scale block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#scale EcsTaskSet#scale}
    */
    readonly scale?: EcsTaskSetScale;
    /**
    * service_registries block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#service_registries EcsTaskSet#service_registries}
    */
    readonly serviceRegistries?: EcsTaskSetServiceRegistries;
}
export interface EcsTaskSetCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#base EcsTaskSet#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#weight EcsTaskSet#weight}
    */
    readonly weight: number;
}
export declare function ecsTaskSetCapacityProviderStrategyToTerraform(struct?: EcsTaskSetCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function ecsTaskSetCapacityProviderStrategyToHclTerraform(struct?: EcsTaskSetCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class EcsTaskSetCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsTaskSetCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: EcsTaskSetCapacityProviderStrategy | cdktf.IResolvable | undefined);
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
    get weightInput(): number | undefined;
}
export declare class EcsTaskSetCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsTaskSetCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsTaskSetCapacityProviderStrategyOutputReference;
}
export interface EcsTaskSetLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#load_balancer_name EcsTaskSet#load_balancer_name}
    */
    readonly loadBalancerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export declare function ecsTaskSetLoadBalancerToTerraform(struct?: EcsTaskSetLoadBalancer | cdktf.IResolvable): any;
export declare function ecsTaskSetLoadBalancerToHclTerraform(struct?: EcsTaskSetLoadBalancer | cdktf.IResolvable): any;
export declare class EcsTaskSetLoadBalancerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsTaskSetLoadBalancer | cdktf.IResolvable | undefined;
    set internalValue(value: EcsTaskSetLoadBalancer | cdktf.IResolvable | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string | undefined;
    private _containerPort?;
    get containerPort(): number;
    set containerPort(value: number);
    resetContainerPort(): void;
    get containerPortInput(): number | undefined;
    private _loadBalancerName?;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    resetLoadBalancerName(): void;
    get loadBalancerNameInput(): string | undefined;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    resetTargetGroupArn(): void;
    get targetGroupArnInput(): string | undefined;
}
export declare class EcsTaskSetLoadBalancerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsTaskSetLoadBalancer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsTaskSetLoadBalancerOutputReference;
}
export interface EcsTaskSetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#security_groups EcsTaskSet#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#subnets EcsTaskSet#subnets}
    */
    readonly subnets: string[];
}
export declare function ecsTaskSetNetworkConfigurationToTerraform(struct?: EcsTaskSetNetworkConfigurationOutputReference | EcsTaskSetNetworkConfiguration): any;
export declare function ecsTaskSetNetworkConfigurationToHclTerraform(struct?: EcsTaskSetNetworkConfigurationOutputReference | EcsTaskSetNetworkConfiguration): any;
export declare class EcsTaskSetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskSetNetworkConfiguration | undefined;
    set internalValue(value: EcsTaskSetNetworkConfiguration | undefined);
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
export interface EcsTaskSetScale {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#unit EcsTaskSet#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#value EcsTaskSet#value}
    */
    readonly value?: number;
}
export declare function ecsTaskSetScaleToTerraform(struct?: EcsTaskSetScaleOutputReference | EcsTaskSetScale): any;
export declare function ecsTaskSetScaleToHclTerraform(struct?: EcsTaskSetScaleOutputReference | EcsTaskSetScale): any;
export declare class EcsTaskSetScaleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskSetScale | undefined;
    set internalValue(value: EcsTaskSetScale | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface EcsTaskSetServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#port EcsTaskSet#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#registry_arn EcsTaskSet#registry_arn}
    */
    readonly registryArn: string;
}
export declare function ecsTaskSetServiceRegistriesToTerraform(struct?: EcsTaskSetServiceRegistriesOutputReference | EcsTaskSetServiceRegistries): any;
export declare function ecsTaskSetServiceRegistriesToHclTerraform(struct?: EcsTaskSetServiceRegistriesOutputReference | EcsTaskSetServiceRegistries): any;
export declare class EcsTaskSetServiceRegistriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskSetServiceRegistries | undefined;
    set internalValue(value: EcsTaskSetServiceRegistries | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set aws_ecs_task_set}
*/
export declare class EcsTaskSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_task_set";
    /**
    * Generates CDKTF code for importing a EcsTaskSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsTaskSet to import
    * @param importFromId The id of the existing EcsTaskSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsTaskSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_set aws_ecs_task_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: EcsTaskSetConfig);
    get arn(): string;
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string | undefined;
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    resetExternalId(): void;
    get externalIdInput(): string | undefined;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable | undefined;
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
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string | undefined;
    get stabilityStatus(): string;
    get status(): string;
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
    get taskDefinitionInput(): string | undefined;
    get taskSetId(): string;
    private _waitUntilStable?;
    get waitUntilStable(): boolean | cdktf.IResolvable;
    set waitUntilStable(value: boolean | cdktf.IResolvable);
    resetWaitUntilStable(): void;
    get waitUntilStableInput(): boolean | cdktf.IResolvable | undefined;
    private _waitUntilStableTimeout?;
    get waitUntilStableTimeout(): string;
    set waitUntilStableTimeout(value: string);
    resetWaitUntilStableTimeout(): void;
    get waitUntilStableTimeoutInput(): string | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): EcsTaskSetCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: EcsTaskSetCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | EcsTaskSetCapacityProviderStrategy[] | undefined;
    private _loadBalancer;
    get loadBalancer(): EcsTaskSetLoadBalancerList;
    putLoadBalancer(value: EcsTaskSetLoadBalancer[] | cdktf.IResolvable): void;
    resetLoadBalancer(): void;
    get loadBalancerInput(): cdktf.IResolvable | EcsTaskSetLoadBalancer[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): EcsTaskSetNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: EcsTaskSetNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsTaskSetNetworkConfiguration | undefined;
    private _scale;
    get scale(): EcsTaskSetScaleOutputReference;
    putScale(value: EcsTaskSetScale): void;
    resetScale(): void;
    get scaleInput(): EcsTaskSetScale | undefined;
    private _serviceRegistries;
    get serviceRegistries(): EcsTaskSetServiceRegistriesOutputReference;
    putServiceRegistries(value: EcsTaskSetServiceRegistries): void;
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsTaskSetServiceRegistries | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
