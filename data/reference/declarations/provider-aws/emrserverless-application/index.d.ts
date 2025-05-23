/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrserverlessApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#architecture EmrserverlessApplication#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#id EmrserverlessApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#name EmrserverlessApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#release_label EmrserverlessApplication#release_label}
    */
    readonly releaseLabel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#tags EmrserverlessApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#tags_all EmrserverlessApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#type EmrserverlessApplication#type}
    */
    readonly type: string;
    /**
    * auto_start_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}
    */
    readonly autoStartConfiguration?: EmrserverlessApplicationAutoStartConfiguration;
    /**
    * auto_stop_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}
    */
    readonly autoStopConfiguration?: EmrserverlessApplicationAutoStopConfiguration;
    /**
    * image_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#image_configuration EmrserverlessApplication#image_configuration}
    */
    readonly imageConfiguration?: EmrserverlessApplicationImageConfiguration;
    /**
    * initial_capacity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}
    */
    readonly initialCapacity?: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable;
    /**
    * interactive_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#interactive_configuration EmrserverlessApplication#interactive_configuration}
    */
    readonly interactiveConfiguration?: EmrserverlessApplicationInteractiveConfiguration;
    /**
    * maximum_capacity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}
    */
    readonly maximumCapacity?: EmrserverlessApplicationMaximumCapacity;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}
    */
    readonly networkConfiguration?: EmrserverlessApplicationNetworkConfiguration;
}
export interface EmrserverlessApplicationAutoStartConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function emrserverlessApplicationAutoStartConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStartConfigurationOutputReference | EmrserverlessApplicationAutoStartConfiguration): any;
export declare function emrserverlessApplicationAutoStartConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStartConfigurationOutputReference | EmrserverlessApplicationAutoStartConfiguration): any;
export declare class EmrserverlessApplicationAutoStartConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationAutoStartConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationAutoStartConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EmrserverlessApplicationAutoStopConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#enabled EmrserverlessApplication#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}
    */
    readonly idleTimeoutMinutes?: number;
}
export declare function emrserverlessApplicationAutoStopConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStopConfigurationOutputReference | EmrserverlessApplicationAutoStopConfiguration): any;
export declare function emrserverlessApplicationAutoStopConfigurationToHclTerraform(struct?: EmrserverlessApplicationAutoStopConfigurationOutputReference | EmrserverlessApplicationAutoStopConfiguration): any;
export declare class EmrserverlessApplicationAutoStopConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationAutoStopConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationAutoStopConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _idleTimeoutMinutes?;
    get idleTimeoutMinutes(): number;
    set idleTimeoutMinutes(value: number);
    resetIdleTimeoutMinutes(): void;
    get idleTimeoutMinutesInput(): number | undefined;
}
export interface EmrserverlessApplicationImageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#image_uri EmrserverlessApplication#image_uri}
    */
    readonly imageUri: string;
}
export declare function emrserverlessApplicationImageConfigurationToTerraform(struct?: EmrserverlessApplicationImageConfigurationOutputReference | EmrserverlessApplicationImageConfiguration): any;
export declare function emrserverlessApplicationImageConfigurationToHclTerraform(struct?: EmrserverlessApplicationImageConfigurationOutputReference | EmrserverlessApplicationImageConfiguration): any;
export declare class EmrserverlessApplicationImageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationImageConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationImageConfiguration | undefined);
    private _imageUri?;
    get imageUri(): string;
    set imageUri(value: string);
    get imageUriInput(): string | undefined;
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
    */
    readonly cpu: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
    */
    readonly disk?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
    */
    readonly memory: string;
}
export declare function emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): any;
export declare function emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): any;
export declare class EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    get cpuInput(): string | undefined;
    private _disk?;
    get disk(): string;
    set disk(value: string);
    resetDisk(): void;
    get diskInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    get memoryInput(): string | undefined;
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#worker_count EmrserverlessApplication#worker_count}
    */
    readonly workerCount: number;
    /**
    * worker_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}
    */
    readonly workerConfiguration?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration;
}
export declare function emrserverlessApplicationInitialCapacityInitialCapacityConfigToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfig): any;
export declare function emrserverlessApplicationInitialCapacityInitialCapacityConfigToHclTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfig): any;
export declare class EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined;
    set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined);
    private _workerCount?;
    get workerCount(): number;
    set workerCount(value: number);
    get workerCountInput(): number | undefined;
    private _workerConfiguration;
    get workerConfiguration(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference;
    putWorkerConfiguration(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): void;
    resetWorkerConfiguration(): void;
    get workerConfigurationInput(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined;
}
export interface EmrserverlessApplicationInitialCapacity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}
    */
    readonly initialCapacityType: string;
    /**
    * initial_capacity_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}
    */
    readonly initialCapacityConfig?: EmrserverlessApplicationInitialCapacityInitialCapacityConfig;
}
export declare function emrserverlessApplicationInitialCapacityToTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable): any;
export declare function emrserverlessApplicationInitialCapacityToHclTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable): any;
export declare class EmrserverlessApplicationInitialCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined;
    set internalValue(value: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined);
    private _initialCapacityType?;
    get initialCapacityType(): string;
    set initialCapacityType(value: string);
    get initialCapacityTypeInput(): string | undefined;
    private _initialCapacityConfig;
    get initialCapacityConfig(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference;
    putInitialCapacityConfig(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig): void;
    resetInitialCapacityConfig(): void;
    get initialCapacityConfigInput(): EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined;
}
export declare class EmrserverlessApplicationInitialCapacityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrserverlessApplicationInitialCapacityOutputReference;
}
export interface EmrserverlessApplicationInteractiveConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#livy_endpoint_enabled EmrserverlessApplication#livy_endpoint_enabled}
    */
    readonly livyEndpointEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#studio_enabled EmrserverlessApplication#studio_enabled}
    */
    readonly studioEnabled?: boolean | cdktf.IResolvable;
}
export declare function emrserverlessApplicationInteractiveConfigurationToTerraform(struct?: EmrserverlessApplicationInteractiveConfigurationOutputReference | EmrserverlessApplicationInteractiveConfiguration): any;
export declare function emrserverlessApplicationInteractiveConfigurationToHclTerraform(struct?: EmrserverlessApplicationInteractiveConfigurationOutputReference | EmrserverlessApplicationInteractiveConfiguration): any;
export declare class EmrserverlessApplicationInteractiveConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationInteractiveConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationInteractiveConfiguration | undefined);
    private _livyEndpointEnabled?;
    get livyEndpointEnabled(): boolean | cdktf.IResolvable;
    set livyEndpointEnabled(value: boolean | cdktf.IResolvable);
    resetLivyEndpointEnabled(): void;
    get livyEndpointEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _studioEnabled?;
    get studioEnabled(): boolean | cdktf.IResolvable;
    set studioEnabled(value: boolean | cdktf.IResolvable);
    resetStudioEnabled(): void;
    get studioEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EmrserverlessApplicationMaximumCapacity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#cpu EmrserverlessApplication#cpu}
    */
    readonly cpu: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#disk EmrserverlessApplication#disk}
    */
    readonly disk?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#memory EmrserverlessApplication#memory}
    */
    readonly memory: string;
}
export declare function emrserverlessApplicationMaximumCapacityToTerraform(struct?: EmrserverlessApplicationMaximumCapacityOutputReference | EmrserverlessApplicationMaximumCapacity): any;
export declare function emrserverlessApplicationMaximumCapacityToHclTerraform(struct?: EmrserverlessApplicationMaximumCapacityOutputReference | EmrserverlessApplicationMaximumCapacity): any;
export declare class EmrserverlessApplicationMaximumCapacityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationMaximumCapacity | undefined;
    set internalValue(value: EmrserverlessApplicationMaximumCapacity | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    get cpuInput(): string | undefined;
    private _disk?;
    get disk(): string;
    set disk(value: string);
    resetDisk(): void;
    get diskInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    get memoryInput(): string | undefined;
}
export interface EmrserverlessApplicationNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function emrserverlessApplicationNetworkConfigurationToTerraform(struct?: EmrserverlessApplicationNetworkConfigurationOutputReference | EmrserverlessApplicationNetworkConfiguration): any;
export declare function emrserverlessApplicationNetworkConfigurationToHclTerraform(struct?: EmrserverlessApplicationNetworkConfigurationOutputReference | EmrserverlessApplicationNetworkConfiguration): any;
export declare class EmrserverlessApplicationNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrserverlessApplicationNetworkConfiguration | undefined;
    set internalValue(value: EmrserverlessApplicationNetworkConfiguration | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application aws_emrserverless_application}
*/
export declare class EmrserverlessApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emrserverless_application";
    /**
    * Generates CDKTF code for importing a EmrserverlessApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrserverlessApplication to import
    * @param importFromId The id of the existing EmrserverlessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrserverlessApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrserverless_application aws_emrserverless_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrserverlessApplicationConfig
    */
    constructor(scope: Construct, id: string, config: EmrserverlessApplicationConfig);
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _autoStartConfiguration;
    get autoStartConfiguration(): EmrserverlessApplicationAutoStartConfigurationOutputReference;
    putAutoStartConfiguration(value: EmrserverlessApplicationAutoStartConfiguration): void;
    resetAutoStartConfiguration(): void;
    get autoStartConfigurationInput(): EmrserverlessApplicationAutoStartConfiguration | undefined;
    private _autoStopConfiguration;
    get autoStopConfiguration(): EmrserverlessApplicationAutoStopConfigurationOutputReference;
    putAutoStopConfiguration(value: EmrserverlessApplicationAutoStopConfiguration): void;
    resetAutoStopConfiguration(): void;
    get autoStopConfigurationInput(): EmrserverlessApplicationAutoStopConfiguration | undefined;
    private _imageConfiguration;
    get imageConfiguration(): EmrserverlessApplicationImageConfigurationOutputReference;
    putImageConfiguration(value: EmrserverlessApplicationImageConfiguration): void;
    resetImageConfiguration(): void;
    get imageConfigurationInput(): EmrserverlessApplicationImageConfiguration | undefined;
    private _initialCapacity;
    get initialCapacity(): EmrserverlessApplicationInitialCapacityList;
    putInitialCapacity(value: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable): void;
    resetInitialCapacity(): void;
    get initialCapacityInput(): cdktf.IResolvable | EmrserverlessApplicationInitialCapacity[] | undefined;
    private _interactiveConfiguration;
    get interactiveConfiguration(): EmrserverlessApplicationInteractiveConfigurationOutputReference;
    putInteractiveConfiguration(value: EmrserverlessApplicationInteractiveConfiguration): void;
    resetInteractiveConfiguration(): void;
    get interactiveConfigurationInput(): EmrserverlessApplicationInteractiveConfiguration | undefined;
    private _maximumCapacity;
    get maximumCapacity(): EmrserverlessApplicationMaximumCapacityOutputReference;
    putMaximumCapacity(value: EmrserverlessApplicationMaximumCapacity): void;
    resetMaximumCapacity(): void;
    get maximumCapacityInput(): EmrserverlessApplicationMaximumCapacity | undefined;
    private _networkConfiguration;
    get networkConfiguration(): EmrserverlessApplicationNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: EmrserverlessApplicationNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EmrserverlessApplicationNetworkConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
