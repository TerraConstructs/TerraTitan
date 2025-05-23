/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftGameServerGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#balancing_strategy GameliftGameServerGroup#balancing_strategy}
    */
    readonly balancingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#game_server_group_name GameliftGameServerGroup#game_server_group_name}
    */
    readonly gameServerGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#game_server_protection_policy GameliftGameServerGroup#game_server_protection_policy}
    */
    readonly gameServerProtectionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#id GameliftGameServerGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#max_size GameliftGameServerGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#min_size GameliftGameServerGroup#min_size}
    */
    readonly minSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#role_arn GameliftGameServerGroup#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#tags GameliftGameServerGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#tags_all GameliftGameServerGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#vpc_subnets GameliftGameServerGroup#vpc_subnets}
    */
    readonly vpcSubnets?: string[];
    /**
    * auto_scaling_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#auto_scaling_policy GameliftGameServerGroup#auto_scaling_policy}
    */
    readonly autoScalingPolicy?: GameliftGameServerGroupAutoScalingPolicy;
    /**
    * instance_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#instance_definition GameliftGameServerGroup#instance_definition}
    */
    readonly instanceDefinition: GameliftGameServerGroupInstanceDefinition[] | cdktf.IResolvable;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#launch_template GameliftGameServerGroup#launch_template}
    */
    readonly launchTemplate: GameliftGameServerGroupLaunchTemplate;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#timeouts GameliftGameServerGroup#timeouts}
    */
    readonly timeouts?: GameliftGameServerGroupTimeouts;
}
export interface GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#target_value GameliftGameServerGroup#target_value}
    */
    readonly targetValue: number;
}
export declare function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference | GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any;
export declare function gameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference | GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): any;
export declare class GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | undefined;
    set internalValue(value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | undefined);
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number | undefined;
}
export interface GameliftGameServerGroupAutoScalingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#estimated_instance_warmup GameliftGameServerGroup#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * target_tracking_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#target_tracking_configuration GameliftGameServerGroup#target_tracking_configuration}
    */
    readonly targetTrackingConfiguration: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
}
export declare function gameliftGameServerGroupAutoScalingPolicyToTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyOutputReference | GameliftGameServerGroupAutoScalingPolicy): any;
export declare function gameliftGameServerGroupAutoScalingPolicyToHclTerraform(struct?: GameliftGameServerGroupAutoScalingPolicyOutputReference | GameliftGameServerGroupAutoScalingPolicy): any;
export declare class GameliftGameServerGroupAutoScalingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftGameServerGroupAutoScalingPolicy | undefined;
    set internalValue(value: GameliftGameServerGroupAutoScalingPolicy | undefined);
    private _estimatedInstanceWarmup?;
    get estimatedInstanceWarmup(): number;
    set estimatedInstanceWarmup(value: number);
    resetEstimatedInstanceWarmup(): void;
    get estimatedInstanceWarmupInput(): number | undefined;
    private _targetTrackingConfiguration;
    get targetTrackingConfiguration(): GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfigurationOutputReference;
    putTargetTrackingConfiguration(value: GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration): void;
    get targetTrackingConfigurationInput(): GameliftGameServerGroupAutoScalingPolicyTargetTrackingConfiguration | undefined;
}
export interface GameliftGameServerGroupInstanceDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#instance_type GameliftGameServerGroup#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#weighted_capacity GameliftGameServerGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
}
export declare function gameliftGameServerGroupInstanceDefinitionToTerraform(struct?: GameliftGameServerGroupInstanceDefinition | cdktf.IResolvable): any;
export declare function gameliftGameServerGroupInstanceDefinitionToHclTerraform(struct?: GameliftGameServerGroupInstanceDefinition | cdktf.IResolvable): any;
export declare class GameliftGameServerGroupInstanceDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GameliftGameServerGroupInstanceDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftGameServerGroupInstanceDefinition | cdktf.IResolvable | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): string;
    set weightedCapacity(value: string);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): string | undefined;
}
export declare class GameliftGameServerGroupInstanceDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GameliftGameServerGroupInstanceDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GameliftGameServerGroupInstanceDefinitionOutputReference;
}
export interface GameliftGameServerGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#id GameliftGameServerGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#name GameliftGameServerGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#version GameliftGameServerGroup#version}
    */
    readonly version?: string;
}
export declare function gameliftGameServerGroupLaunchTemplateToTerraform(struct?: GameliftGameServerGroupLaunchTemplateOutputReference | GameliftGameServerGroupLaunchTemplate): any;
export declare function gameliftGameServerGroupLaunchTemplateToHclTerraform(struct?: GameliftGameServerGroupLaunchTemplateOutputReference | GameliftGameServerGroupLaunchTemplate): any;
export declare class GameliftGameServerGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftGameServerGroupLaunchTemplate | undefined;
    set internalValue(value: GameliftGameServerGroupLaunchTemplate | undefined);
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
export interface GameliftGameServerGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#create GameliftGameServerGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#delete GameliftGameServerGroup#delete}
    */
    readonly delete?: string;
}
export declare function gameliftGameServerGroupTimeoutsToTerraform(struct?: GameliftGameServerGroupTimeouts | cdktf.IResolvable): any;
export declare function gameliftGameServerGroupTimeoutsToHclTerraform(struct?: GameliftGameServerGroupTimeouts | cdktf.IResolvable): any;
export declare class GameliftGameServerGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftGameServerGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftGameServerGroupTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group aws_gamelift_game_server_group}
*/
export declare class GameliftGameServerGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_gamelift_game_server_group";
    /**
    * Generates CDKTF code for importing a GameliftGameServerGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GameliftGameServerGroup to import
    * @param importFromId The id of the existing GameliftGameServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GameliftGameServerGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_server_group aws_gamelift_game_server_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftGameServerGroupConfig
    */
    constructor(scope: Construct, id: string, config: GameliftGameServerGroupConfig);
    get arn(): string;
    get autoScalingGroupArn(): string;
    private _balancingStrategy?;
    get balancingStrategy(): string;
    set balancingStrategy(value: string);
    resetBalancingStrategy(): void;
    get balancingStrategyInput(): string | undefined;
    private _gameServerGroupName?;
    get gameServerGroupName(): string;
    set gameServerGroupName(value: string);
    get gameServerGroupNameInput(): string | undefined;
    private _gameServerProtectionPolicy?;
    get gameServerProtectionPolicy(): string;
    set gameServerProtectionPolicy(value: string);
    resetGameServerProtectionPolicy(): void;
    get gameServerProtectionPolicyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number | undefined;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _vpcSubnets?;
    get vpcSubnets(): string[];
    set vpcSubnets(value: string[]);
    resetVpcSubnets(): void;
    get vpcSubnetsInput(): string[] | undefined;
    private _autoScalingPolicy;
    get autoScalingPolicy(): GameliftGameServerGroupAutoScalingPolicyOutputReference;
    putAutoScalingPolicy(value: GameliftGameServerGroupAutoScalingPolicy): void;
    resetAutoScalingPolicy(): void;
    get autoScalingPolicyInput(): GameliftGameServerGroupAutoScalingPolicy | undefined;
    private _instanceDefinition;
    get instanceDefinition(): GameliftGameServerGroupInstanceDefinitionList;
    putInstanceDefinition(value: GameliftGameServerGroupInstanceDefinition[] | cdktf.IResolvable): void;
    get instanceDefinitionInput(): cdktf.IResolvable | GameliftGameServerGroupInstanceDefinition[] | undefined;
    private _launchTemplate;
    get launchTemplate(): GameliftGameServerGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: GameliftGameServerGroupLaunchTemplate): void;
    get launchTemplateInput(): GameliftGameServerGroupLaunchTemplate | undefined;
    private _timeouts;
    get timeouts(): GameliftGameServerGroupTimeoutsOutputReference;
    putTimeouts(value: GameliftGameServerGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GameliftGameServerGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
