/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_task_definition#id DataAwsEcsTaskDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_task_definition#task_definition DataAwsEcsTaskDefinition#task_definition}
    */
    readonly taskDefinition: string;
}
export interface DataAwsEcsTaskDefinitionEphemeralStorage {
}
export declare function dataAwsEcsTaskDefinitionEphemeralStorageToTerraform(struct?: DataAwsEcsTaskDefinitionEphemeralStorage): any;
export declare function dataAwsEcsTaskDefinitionEphemeralStorageToHclTerraform(struct?: DataAwsEcsTaskDefinitionEphemeralStorage): any;
export declare class DataAwsEcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionEphemeralStorage | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionEphemeralStorage | undefined);
    get sizeInGib(): number;
}
export declare class DataAwsEcsTaskDefinitionEphemeralStorageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionEphemeralStorageOutputReference;
}
export interface DataAwsEcsTaskDefinitionInferenceAccelerator {
}
export declare function dataAwsEcsTaskDefinitionInferenceAcceleratorToTerraform(struct?: DataAwsEcsTaskDefinitionInferenceAccelerator): any;
export declare function dataAwsEcsTaskDefinitionInferenceAcceleratorToHclTerraform(struct?: DataAwsEcsTaskDefinitionInferenceAccelerator): any;
export declare class DataAwsEcsTaskDefinitionInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionInferenceAccelerator | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionInferenceAccelerator | undefined);
    get deviceName(): string;
    get deviceType(): string;
}
export declare class DataAwsEcsTaskDefinitionInferenceAcceleratorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionInferenceAcceleratorOutputReference;
}
export interface DataAwsEcsTaskDefinitionPlacementConstraints {
}
export declare function dataAwsEcsTaskDefinitionPlacementConstraintsToTerraform(struct?: DataAwsEcsTaskDefinitionPlacementConstraints): any;
export declare function dataAwsEcsTaskDefinitionPlacementConstraintsToHclTerraform(struct?: DataAwsEcsTaskDefinitionPlacementConstraints): any;
export declare class DataAwsEcsTaskDefinitionPlacementConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionPlacementConstraints | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionPlacementConstraints | undefined);
    get expression(): string;
    get type(): string;
}
export declare class DataAwsEcsTaskDefinitionPlacementConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionPlacementConstraintsOutputReference;
}
export interface DataAwsEcsTaskDefinitionProxyConfiguration {
}
export declare function dataAwsEcsTaskDefinitionProxyConfigurationToTerraform(struct?: DataAwsEcsTaskDefinitionProxyConfiguration): any;
export declare function dataAwsEcsTaskDefinitionProxyConfigurationToHclTerraform(struct?: DataAwsEcsTaskDefinitionProxyConfiguration): any;
export declare class DataAwsEcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionProxyConfiguration | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionProxyConfiguration | undefined);
    get containerName(): string;
    private _properties;
    get properties(): cdktf.StringMap;
    get type(): string;
}
export declare class DataAwsEcsTaskDefinitionProxyConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionProxyConfigurationOutputReference;
}
export interface DataAwsEcsTaskDefinitionRuntimePlatform {
}
export declare function dataAwsEcsTaskDefinitionRuntimePlatformToTerraform(struct?: DataAwsEcsTaskDefinitionRuntimePlatform): any;
export declare function dataAwsEcsTaskDefinitionRuntimePlatformToHclTerraform(struct?: DataAwsEcsTaskDefinitionRuntimePlatform): any;
export declare class DataAwsEcsTaskDefinitionRuntimePlatformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionRuntimePlatform | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionRuntimePlatform | undefined);
    get cpuArchitecture(): string;
    get operatingSystemFamily(): string;
}
export declare class DataAwsEcsTaskDefinitionRuntimePlatformList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionRuntimePlatformOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolumeDockerVolumeConfiguration {
}
export declare function dataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: DataAwsEcsTaskDefinitionVolumeDockerVolumeConfiguration): any;
export declare function dataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolumeDockerVolumeConfiguration): any;
export declare class DataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined);
    get autoprovision(): cdktf.IResolvable;
    get driver(): string;
    private _driverOpts;
    get driverOpts(): cdktf.StringMap;
    private _labels;
    get labels(): cdktf.StringMap;
    get scope(): string;
}
export declare class DataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
}
export declare function dataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any;
export declare function dataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any;
export declare class DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined);
    get accessPointId(): string;
    get iam(): string;
}
export declare class DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolumeEfsVolumeConfiguration {
}
export declare function dataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfiguration): any;
export declare function dataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfiguration): any;
export declare class DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined);
    private _authorizationConfig;
    get authorizationConfig(): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigList;
    get fileSystemId(): string;
    get rootDirectory(): string;
    get transitEncryption(): string;
    get transitEncryptionPort(): number;
}
export declare class DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
}
export declare function dataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any;
export declare function dataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any;
export declare class DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined);
    get credentialsParameter(): string;
    get domain(): string;
}
export declare class DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
}
export declare function dataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any;
export declare function dataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any;
export declare class DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined);
    private _authorizationConfig;
    get authorizationConfig(): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigList;
    get fileSystemId(): string;
    get rootDirectory(): string;
}
export declare class DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference;
}
export interface DataAwsEcsTaskDefinitionVolume {
}
export declare function dataAwsEcsTaskDefinitionVolumeToTerraform(struct?: DataAwsEcsTaskDefinitionVolume): any;
export declare function dataAwsEcsTaskDefinitionVolumeToHclTerraform(struct?: DataAwsEcsTaskDefinitionVolume): any;
export declare class DataAwsEcsTaskDefinitionVolumeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsTaskDefinitionVolume | undefined;
    set internalValue(value: DataAwsEcsTaskDefinitionVolume | undefined);
    get configureAtLaunch(): cdktf.IResolvable;
    private _dockerVolumeConfiguration;
    get dockerVolumeConfiguration(): DataAwsEcsTaskDefinitionVolumeDockerVolumeConfigurationList;
    private _efsVolumeConfiguration;
    get efsVolumeConfiguration(): DataAwsEcsTaskDefinitionVolumeEfsVolumeConfigurationList;
    private _fsxWindowsFileServerVolumeConfiguration;
    get fsxWindowsFileServerVolumeConfiguration(): DataAwsEcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationList;
    get hostPath(): string;
    get name(): string;
}
export declare class DataAwsEcsTaskDefinitionVolumeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcsTaskDefinitionVolumeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_task_definition aws_ecs_task_definition}
*/
export declare class DataAwsEcsTaskDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecs_task_definition";
    /**
    * Generates CDKTF code for importing a DataAwsEcsTaskDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcsTaskDefinition to import
    * @param importFromId The id of the existing DataAwsEcsTaskDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_task_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcsTaskDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_task_definition aws_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcsTaskDefinitionConfig);
    get arn(): string;
    get arnWithoutRevision(): string;
    get containerDefinitions(): string;
    get cpu(): string;
    get enableFaultInjection(): cdktf.IResolvable;
    private _ephemeralStorage;
    get ephemeralStorage(): DataAwsEcsTaskDefinitionEphemeralStorageList;
    get executionRoleArn(): string;
    get family(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inferenceAccelerator;
    get inferenceAccelerator(): DataAwsEcsTaskDefinitionInferenceAcceleratorList;
    get ipcMode(): string;
    get memory(): string;
    get networkMode(): string;
    get pidMode(): string;
    private _placementConstraints;
    get placementConstraints(): DataAwsEcsTaskDefinitionPlacementConstraintsList;
    private _proxyConfiguration;
    get proxyConfiguration(): DataAwsEcsTaskDefinitionProxyConfigurationList;
    get requiresCompatibilities(): string[];
    get revision(): number;
    private _runtimePlatform;
    get runtimePlatform(): DataAwsEcsTaskDefinitionRuntimePlatformList;
    get status(): string;
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string | undefined;
    get taskRoleArn(): string;
    private _volume;
    get volume(): DataAwsEcsTaskDefinitionVolumeList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
