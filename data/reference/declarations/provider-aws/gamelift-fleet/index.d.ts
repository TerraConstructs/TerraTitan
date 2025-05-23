/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}
    */
    readonly buildId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#description GameliftFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}
    */
    readonly ec2InstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#id GameliftFleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#name GameliftFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}
    */
    readonly scriptId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#tags_all GameliftFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * certificate_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}
    */
    readonly certificateConfiguration?: GameliftFleetCertificateConfiguration;
    /**
    * ec2_inbound_permission block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}
    */
    readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[] | cdktf.IResolvable;
    /**
    * resource_creation_limit_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
    */
    readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
    /**
    * runtime_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}
    */
    readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#timeouts GameliftFleet#timeouts}
    */
    readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetCertificateConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}
    */
    readonly certificateType?: string;
}
export declare function gameliftFleetCertificateConfigurationToTerraform(struct?: GameliftFleetCertificateConfigurationOutputReference | GameliftFleetCertificateConfiguration): any;
export declare function gameliftFleetCertificateConfigurationToHclTerraform(struct?: GameliftFleetCertificateConfigurationOutputReference | GameliftFleetCertificateConfiguration): any;
export declare class GameliftFleetCertificateConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftFleetCertificateConfiguration | undefined;
    set internalValue(value: GameliftFleetCertificateConfiguration | undefined);
    private _certificateType?;
    get certificateType(): string;
    set certificateType(value: string);
    resetCertificateType(): void;
    get certificateTypeInput(): string | undefined;
}
export interface GameliftFleetEc2InboundPermission {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}
    */
    readonly ipRange: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}
    */
    readonly toPort: number;
}
export declare function gameliftFleetEc2InboundPermissionToTerraform(struct?: GameliftFleetEc2InboundPermission | cdktf.IResolvable): any;
export declare function gameliftFleetEc2InboundPermissionToHclTerraform(struct?: GameliftFleetEc2InboundPermission | cdktf.IResolvable): any;
export declare class GameliftFleetEc2InboundPermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GameliftFleetEc2InboundPermission | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftFleetEc2InboundPermission | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _ipRange?;
    get ipRange(): string;
    set ipRange(value: string);
    get ipRangeInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class GameliftFleetEc2InboundPermissionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GameliftFleetEc2InboundPermission[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GameliftFleetEc2InboundPermissionOutputReference;
}
export interface GameliftFleetResourceCreationLimitPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
}
export declare function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicyOutputReference | GameliftFleetResourceCreationLimitPolicy): any;
export declare function gameliftFleetResourceCreationLimitPolicyToHclTerraform(struct?: GameliftFleetResourceCreationLimitPolicyOutputReference | GameliftFleetResourceCreationLimitPolicy): any;
export declare class GameliftFleetResourceCreationLimitPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftFleetResourceCreationLimitPolicy | undefined;
    set internalValue(value: GameliftFleetResourceCreationLimitPolicy | undefined);
    private _newGameSessionsPerCreator?;
    get newGameSessionsPerCreator(): number;
    set newGameSessionsPerCreator(value: number);
    resetNewGameSessionsPerCreator(): void;
    get newGameSessionsPerCreatorInput(): number | undefined;
    private _policyPeriodInMinutes?;
    get policyPeriodInMinutes(): number;
    set policyPeriodInMinutes(value: number);
    resetPolicyPeriodInMinutes(): void;
    get policyPeriodInMinutesInput(): number | undefined;
}
export interface GameliftFleetRuntimeConfigurationServerProcess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}
    */
    readonly concurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}
    */
    readonly launchPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}
    */
    readonly parameters?: string;
}
export declare function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable): any;
export declare function gameliftFleetRuntimeConfigurationServerProcessToHclTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable): any;
export declare class GameliftFleetRuntimeConfigurationServerProcessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable | undefined);
    private _concurrentExecutions?;
    get concurrentExecutions(): number;
    set concurrentExecutions(value: number);
    get concurrentExecutionsInput(): number | undefined;
    private _launchPath?;
    get launchPath(): string;
    set launchPath(value: string);
    get launchPathInput(): string | undefined;
    private _parameters?;
    get parameters(): string;
    set parameters(value: string);
    resetParameters(): void;
    get parametersInput(): string | undefined;
}
export declare class GameliftFleetRuntimeConfigurationServerProcessList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GameliftFleetRuntimeConfigurationServerProcessOutputReference;
}
export interface GameliftFleetRuntimeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}
    */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}
    */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
    * server_process block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#server_process GameliftFleet#server_process}
    */
    readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable;
}
export declare function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfigurationOutputReference | GameliftFleetRuntimeConfiguration): any;
export declare function gameliftFleetRuntimeConfigurationToHclTerraform(struct?: GameliftFleetRuntimeConfigurationOutputReference | GameliftFleetRuntimeConfiguration): any;
export declare class GameliftFleetRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftFleetRuntimeConfiguration | undefined;
    set internalValue(value: GameliftFleetRuntimeConfiguration | undefined);
    private _gameSessionActivationTimeoutSeconds?;
    get gameSessionActivationTimeoutSeconds(): number;
    set gameSessionActivationTimeoutSeconds(value: number);
    resetGameSessionActivationTimeoutSeconds(): void;
    get gameSessionActivationTimeoutSecondsInput(): number | undefined;
    private _maxConcurrentGameSessionActivations?;
    get maxConcurrentGameSessionActivations(): number;
    set maxConcurrentGameSessionActivations(value: number);
    resetMaxConcurrentGameSessionActivations(): void;
    get maxConcurrentGameSessionActivationsInput(): number | undefined;
    private _serverProcess;
    get serverProcess(): GameliftFleetRuntimeConfigurationServerProcessList;
    putServerProcess(value: GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable): void;
    resetServerProcess(): void;
    get serverProcessInput(): cdktf.IResolvable | GameliftFleetRuntimeConfigurationServerProcess[] | undefined;
}
export interface GameliftFleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#create GameliftFleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#delete GameliftFleet#delete}
    */
    readonly delete?: string;
}
export declare function gameliftFleetTimeoutsToTerraform(struct?: GameliftFleetTimeouts | cdktf.IResolvable): any;
export declare function gameliftFleetTimeoutsToHclTerraform(struct?: GameliftFleetTimeouts | cdktf.IResolvable): any;
export declare class GameliftFleetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftFleetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftFleetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet aws_gamelift_fleet}
*/
export declare class GameliftFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_gamelift_fleet";
    /**
    * Generates CDKTF code for importing a GameliftFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GameliftFleet to import
    * @param importFromId The id of the existing GameliftFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GameliftFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_fleet aws_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig
    */
    constructor(scope: Construct, id: string, config: GameliftFleetConfig);
    get arn(): string;
    get buildArn(): string;
    private _buildId?;
    get buildId(): string;
    set buildId(value: string);
    resetBuildId(): void;
    get buildIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ec2InstanceType?;
    get ec2InstanceType(): string;
    set ec2InstanceType(value: string);
    get ec2InstanceTypeInput(): string | undefined;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string | undefined;
    get logPaths(): string[];
    private _metricGroups?;
    get metricGroups(): string[];
    set metricGroups(value: string[]);
    resetMetricGroups(): void;
    get metricGroupsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _newGameSessionProtectionPolicy?;
    get newGameSessionProtectionPolicy(): string;
    set newGameSessionProtectionPolicy(value: string);
    resetNewGameSessionProtectionPolicy(): void;
    get newGameSessionProtectionPolicyInput(): string | undefined;
    get operatingSystem(): string;
    get scriptArn(): string;
    private _scriptId?;
    get scriptId(): string;
    set scriptId(value: string);
    resetScriptId(): void;
    get scriptIdInput(): string | undefined;
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
    private _certificateConfiguration;
    get certificateConfiguration(): GameliftFleetCertificateConfigurationOutputReference;
    putCertificateConfiguration(value: GameliftFleetCertificateConfiguration): void;
    resetCertificateConfiguration(): void;
    get certificateConfigurationInput(): GameliftFleetCertificateConfiguration | undefined;
    private _ec2InboundPermission;
    get ec2InboundPermission(): GameliftFleetEc2InboundPermissionList;
    putEc2InboundPermission(value: GameliftFleetEc2InboundPermission[] | cdktf.IResolvable): void;
    resetEc2InboundPermission(): void;
    get ec2InboundPermissionInput(): cdktf.IResolvable | GameliftFleetEc2InboundPermission[] | undefined;
    private _resourceCreationLimitPolicy;
    get resourceCreationLimitPolicy(): GameliftFleetResourceCreationLimitPolicyOutputReference;
    putResourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy): void;
    resetResourceCreationLimitPolicy(): void;
    get resourceCreationLimitPolicyInput(): GameliftFleetResourceCreationLimitPolicy | undefined;
    private _runtimeConfiguration;
    get runtimeConfiguration(): GameliftFleetRuntimeConfigurationOutputReference;
    putRuntimeConfiguration(value: GameliftFleetRuntimeConfiguration): void;
    resetRuntimeConfiguration(): void;
    get runtimeConfigurationInput(): GameliftFleetRuntimeConfiguration | undefined;
    private _timeouts;
    get timeouts(): GameliftFleetTimeoutsOutputReference;
    putTimeouts(value: GameliftFleetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GameliftFleetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
