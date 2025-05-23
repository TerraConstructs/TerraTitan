/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#container_definitions EcsTaskDefinition#container_definitions}
    */
    readonly containerDefinitions: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#cpu EcsTaskDefinition#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#enable_fault_injection EcsTaskDefinition#enable_fault_injection}
    */
    readonly enableFaultInjection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#execution_role_arn EcsTaskDefinition#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#family EcsTaskDefinition#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#id EcsTaskDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#ipc_mode EcsTaskDefinition#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#memory EcsTaskDefinition#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#network_mode EcsTaskDefinition#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#pid_mode EcsTaskDefinition#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
    */
    readonly requiresCompatibilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#skip_destroy EcsTaskDefinition#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#tags EcsTaskDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#tags_all EcsTaskDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#task_role_arn EcsTaskDefinition#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#track_latest EcsTaskDefinition#track_latest}
    */
    readonly trackLatest?: boolean | cdktf.IResolvable;
    /**
    * ephemeral_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
    */
    readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
    /**
    * inference_accelerator block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#inference_accelerator EcsTaskDefinition#inference_accelerator}
    */
    readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable;
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#placement_constraints EcsTaskDefinition#placement_constraints}
    */
    readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable;
    /**
    * proxy_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#proxy_configuration EcsTaskDefinition#proxy_configuration}
    */
    readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
    /**
    * runtime_platform block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#runtime_platform EcsTaskDefinition#runtime_platform}
    */
    readonly runtimePlatform?: EcsTaskDefinitionRuntimePlatform;
    /**
    * volume block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#volume EcsTaskDefinition#volume}
    */
    readonly volume?: EcsTaskDefinitionVolume[] | cdktf.IResolvable;
}
export interface EcsTaskDefinitionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#size_in_gib EcsTaskDefinition#size_in_gib}
    */
    readonly sizeInGib: number;
}
export declare function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any;
export declare function ecsTaskDefinitionEphemeralStorageToHclTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any;
export declare class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionEphemeralStorage | undefined;
    set internalValue(value: EcsTaskDefinitionEphemeralStorage | undefined);
    private _sizeInGib?;
    get sizeInGib(): number;
    set sizeInGib(value: number);
    get sizeInGibInput(): number | undefined;
}
export interface EcsTaskDefinitionInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#device_name EcsTaskDefinition#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#device_type EcsTaskDefinition#device_type}
    */
    readonly deviceType: string;
}
export declare function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable): any;
export declare function ecsTaskDefinitionInferenceAcceleratorToHclTerraform(struct?: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable): any;
export declare class EcsTaskDefinitionInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable | undefined;
    set internalValue(value: EcsTaskDefinitionInferenceAccelerator | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _deviceType?;
    get deviceType(): string;
    set deviceType(value: string);
    get deviceTypeInput(): string | undefined;
}
export declare class EcsTaskDefinitionInferenceAcceleratorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsTaskDefinitionInferenceAcceleratorOutputReference;
}
export interface EcsTaskDefinitionPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#expression EcsTaskDefinition#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
    */
    readonly type: string;
}
export declare function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable): any;
export declare function ecsTaskDefinitionPlacementConstraintsToHclTerraform(struct?: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable): any;
export declare class EcsTaskDefinitionPlacementConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: EcsTaskDefinitionPlacementConstraints | cdktf.IResolvable | undefined);
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
export declare class EcsTaskDefinitionPlacementConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsTaskDefinitionPlacementConstraintsOutputReference;
}
export interface EcsTaskDefinitionProxyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#container_name EcsTaskDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#properties EcsTaskDefinition#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#type EcsTaskDefinition#type}
    */
    readonly type?: string;
}
export declare function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any;
export declare function ecsTaskDefinitionProxyConfigurationToHclTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any;
export declare class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionProxyConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionProxyConfiguration | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string | undefined;
    private _properties?;
    get properties(): {
        [key: string]: string;
    };
    set properties(value: {
        [key: string]: string;
    });
    resetProperties(): void;
    get propertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface EcsTaskDefinitionRuntimePlatform {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#cpu_architecture EcsTaskDefinition#cpu_architecture}
    */
    readonly cpuArchitecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#operating_system_family EcsTaskDefinition#operating_system_family}
    */
    readonly operatingSystemFamily?: string;
}
export declare function ecsTaskDefinitionRuntimePlatformToTerraform(struct?: EcsTaskDefinitionRuntimePlatformOutputReference | EcsTaskDefinitionRuntimePlatform): any;
export declare function ecsTaskDefinitionRuntimePlatformToHclTerraform(struct?: EcsTaskDefinitionRuntimePlatformOutputReference | EcsTaskDefinitionRuntimePlatform): any;
export declare class EcsTaskDefinitionRuntimePlatformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionRuntimePlatform | undefined;
    set internalValue(value: EcsTaskDefinitionRuntimePlatform | undefined);
    private _cpuArchitecture?;
    get cpuArchitecture(): string;
    set cpuArchitecture(value: string);
    resetCpuArchitecture(): void;
    get cpuArchitectureInput(): string | undefined;
    private _operatingSystemFamily?;
    get operatingSystemFamily(): string;
    set operatingSystemFamily(value: string);
    resetOperatingSystemFamily(): void;
    get operatingSystemFamilyInput(): string | undefined;
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#autoprovision EcsTaskDefinition#autoprovision}
    */
    readonly autoprovision?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#driver EcsTaskDefinition#driver}
    */
    readonly driver?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#driver_opts EcsTaskDefinition#driver_opts}
    */
    readonly driverOpts?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#labels EcsTaskDefinition#labels}
    */
    readonly labels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#scope EcsTaskDefinition#scope}
    */
    readonly scope?: string;
}
export declare function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any;
export declare function ecsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined);
    private _autoprovision?;
    get autoprovision(): boolean | cdktf.IResolvable;
    set autoprovision(value: boolean | cdktf.IResolvable);
    resetAutoprovision(): void;
    get autoprovisionInput(): boolean | cdktf.IResolvable | undefined;
    private _driver?;
    get driver(): string;
    set driver(value: string);
    resetDriver(): void;
    get driverInput(): string | undefined;
    private _driverOpts?;
    get driverOpts(): {
        [key: string]: string;
    };
    set driverOpts(value: {
        [key: string]: string;
    });
    resetDriverOpts(): void;
    get driverOptsInput(): {
        [key: string]: string;
    } | undefined;
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    } | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#access_point_id EcsTaskDefinition#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#iam EcsTaskDefinition#iam}
    */
    readonly iam?: string;
}
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any;
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any;
export declare class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    resetAccessPointId(): void;
    get accessPointIdInput(): string | undefined;
    private _iam?;
    get iam(): string;
    set iam(value: string);
    resetIam(): void;
    get iamInput(): string | undefined;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#transit_encryption EcsTaskDefinition#transit_encryption}
    */
    readonly transitEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
    /**
    * authorization_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any;
export declare function ecsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _rootDirectory?;
    get rootDirectory(): string;
    set rootDirectory(value: string);
    resetRootDirectory(): void;
    get rootDirectoryInput(): string | undefined;
    private _transitEncryption?;
    get transitEncryption(): string;
    set transitEncryption(value: string);
    resetTransitEncryption(): void;
    get transitEncryptionInput(): string | undefined;
    private _transitEncryptionPort?;
    get transitEncryptionPort(): number;
    set transitEncryptionPort(value: number);
    resetTransitEncryptionPort(): void;
    get transitEncryptionPortInput(): number | undefined;
    private _authorizationConfig;
    get authorizationConfig(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
    putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): void;
    resetAuthorizationConfig(): void;
    get authorizationConfigInput(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined;
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#credentials_parameter EcsTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#domain EcsTaskDefinition#domain}
    */
    readonly domain: string;
}
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any;
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any;
export declare class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined);
    private _credentialsParameter?;
    get credentialsParameter(): string;
    set credentialsParameter(value: string);
    get credentialsParameterInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
}
export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory: string;
    /**
    * authorization_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any;
export declare function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any;
export declare class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined;
    set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _rootDirectory?;
    get rootDirectory(): string;
    set rootDirectory(value: string);
    get rootDirectoryInput(): string | undefined;
    private _authorizationConfig;
    get authorizationConfig(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
    putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): void;
    get authorizationConfigInput(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined;
}
export interface EcsTaskDefinitionVolume {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#configure_at_launch EcsTaskDefinition#configure_at_launch}
    */
    readonly configureAtLaunch?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#host_path EcsTaskDefinition#host_path}
    */
    readonly hostPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#name EcsTaskDefinition#name}
    */
    readonly name: string;
    /**
    * docker_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
    */
    readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
    /**
    * efs_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
    */
    readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
    /**
    * fsx_windows_file_server_volume_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
    */
    readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
}
export declare function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume | cdktf.IResolvable): any;
export declare function ecsTaskDefinitionVolumeToHclTerraform(struct?: EcsTaskDefinitionVolume | cdktf.IResolvable): any;
export declare class EcsTaskDefinitionVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcsTaskDefinitionVolume | cdktf.IResolvable | undefined;
    set internalValue(value: EcsTaskDefinitionVolume | cdktf.IResolvable | undefined);
    private _configureAtLaunch?;
    get configureAtLaunch(): boolean | cdktf.IResolvable;
    set configureAtLaunch(value: boolean | cdktf.IResolvable);
    resetConfigureAtLaunch(): void;
    get configureAtLaunchInput(): boolean | cdktf.IResolvable | undefined;
    private _hostPath?;
    get hostPath(): string;
    set hostPath(value: string);
    resetHostPath(): void;
    get hostPathInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _dockerVolumeConfiguration;
    get dockerVolumeConfiguration(): EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference;
    putDockerVolumeConfiguration(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration): void;
    resetDockerVolumeConfiguration(): void;
    get dockerVolumeConfigurationInput(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined;
    private _efsVolumeConfiguration;
    get efsVolumeConfiguration(): EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference;
    putEfsVolumeConfiguration(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration): void;
    resetEfsVolumeConfiguration(): void;
    get efsVolumeConfigurationInput(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined;
    private _fsxWindowsFileServerVolumeConfiguration;
    get fsxWindowsFileServerVolumeConfiguration(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference;
    putFsxWindowsFileServerVolumeConfiguration(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): void;
    resetFsxWindowsFileServerVolumeConfiguration(): void;
    get fsxWindowsFileServerVolumeConfigurationInput(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined;
}
export declare class EcsTaskDefinitionVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcsTaskDefinitionVolume[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcsTaskDefinitionVolumeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition aws_ecs_task_definition}
*/
export declare class EcsTaskDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_task_definition";
    /**
    * Generates CDKTF code for importing a EcsTaskDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsTaskDefinition to import
    * @param importFromId The id of the existing EcsTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsTaskDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_task_definition aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig);
    get arn(): string;
    get arnWithoutRevision(): string;
    private _containerDefinitions?;
    get containerDefinitions(): string;
    set containerDefinitions(value: string);
    get containerDefinitionsInput(): string | undefined;
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _enableFaultInjection?;
    get enableFaultInjection(): boolean | cdktf.IResolvable;
    set enableFaultInjection(value: boolean | cdktf.IResolvable);
    resetEnableFaultInjection(): void;
    get enableFaultInjectionInput(): boolean | cdktf.IResolvable | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _family?;
    get family(): string;
    set family(value: string);
    get familyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipcMode?;
    get ipcMode(): string;
    set ipcMode(value: string);
    resetIpcMode(): void;
    get ipcModeInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
    private _networkMode?;
    get networkMode(): string;
    set networkMode(value: string);
    resetNetworkMode(): void;
    get networkModeInput(): string | undefined;
    private _pidMode?;
    get pidMode(): string;
    set pidMode(value: string);
    resetPidMode(): void;
    get pidModeInput(): string | undefined;
    private _requiresCompatibilities?;
    get requiresCompatibilities(): string[];
    set requiresCompatibilities(value: string[]);
    resetRequiresCompatibilities(): void;
    get requiresCompatibilitiesInput(): string[] | undefined;
    get revision(): number;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
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
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string | undefined;
    private _trackLatest?;
    get trackLatest(): boolean | cdktf.IResolvable;
    set trackLatest(value: boolean | cdktf.IResolvable);
    resetTrackLatest(): void;
    get trackLatestInput(): boolean | cdktf.IResolvable | undefined;
    private _ephemeralStorage;
    get ephemeralStorage(): EcsTaskDefinitionEphemeralStorageOutputReference;
    putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage): void;
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): EcsTaskDefinitionEphemeralStorage | undefined;
    private _inferenceAccelerator;
    get inferenceAccelerator(): EcsTaskDefinitionInferenceAcceleratorList;
    putInferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] | cdktf.IResolvable): void;
    resetInferenceAccelerator(): void;
    get inferenceAcceleratorInput(): cdktf.IResolvable | EcsTaskDefinitionInferenceAccelerator[] | undefined;
    private _placementConstraints;
    get placementConstraints(): EcsTaskDefinitionPlacementConstraintsList;
    putPlacementConstraints(value: EcsTaskDefinitionPlacementConstraints[] | cdktf.IResolvable): void;
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): cdktf.IResolvable | EcsTaskDefinitionPlacementConstraints[] | undefined;
    private _proxyConfiguration;
    get proxyConfiguration(): EcsTaskDefinitionProxyConfigurationOutputReference;
    putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration): void;
    resetProxyConfiguration(): void;
    get proxyConfigurationInput(): EcsTaskDefinitionProxyConfiguration | undefined;
    private _runtimePlatform;
    get runtimePlatform(): EcsTaskDefinitionRuntimePlatformOutputReference;
    putRuntimePlatform(value: EcsTaskDefinitionRuntimePlatform): void;
    resetRuntimePlatform(): void;
    get runtimePlatformInput(): EcsTaskDefinitionRuntimePlatform | undefined;
    private _volume;
    get volume(): EcsTaskDefinitionVolumeList;
    putVolume(value: EcsTaskDefinitionVolume[] | cdktf.IResolvable): void;
    resetVolume(): void;
    get volumeInput(): cdktf.IResolvable | EcsTaskDefinitionVolume[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
