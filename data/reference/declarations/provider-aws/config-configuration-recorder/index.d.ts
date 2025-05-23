/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#id ConfigConfigurationRecorder#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}
    */
    readonly roleArn: string;
    /**
    * recording_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}
    */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
    /**
    * recording_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}
    */
    readonly recordingMode?: ConfigConfigurationRecorderRecordingMode;
}
export interface ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
}
export declare function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktf.IResolvable): any;
export declare function configConfigurationRecorderRecordingGroupExclusionByResourceTypesToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktf.IResolvable): any;
export declare class ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes | cdktf.IResolvable | undefined);
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    resetResourceTypes(): void;
    get resourceTypesInput(): string[] | undefined;
}
export declare class ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference;
}
export interface ConfigConfigurationRecorderRecordingGroupRecordingStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}
    */
    readonly useOnly?: string;
}
export declare function configConfigurationRecorderRecordingGroupRecordingStrategyToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktf.IResolvable): any;
export declare function configConfigurationRecorderRecordingGroupRecordingStrategyToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktf.IResolvable): any;
export declare class ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy | cdktf.IResolvable | undefined);
    private _useOnly?;
    get useOnly(): string;
    set useOnly(value: string);
    resetUseOnly(): void;
    get useOnlyInput(): string | undefined;
}
export declare class ConfigConfigurationRecorderRecordingGroupRecordingStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference;
}
export interface ConfigConfigurationRecorderRecordingGroup {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}
    */
    readonly allSupported?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
    */
    readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
    /**
    * exclusion_by_resource_types block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}
    */
    readonly exclusionByResourceTypes?: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktf.IResolvable;
    /**
    * recording_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}
    */
    readonly recordingStrategy?: ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktf.IResolvable;
}
export declare function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any;
export declare function configConfigurationRecorderRecordingGroupToHclTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any;
export declare class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationRecorderRecordingGroup | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingGroup | undefined);
    private _allSupported?;
    get allSupported(): boolean | cdktf.IResolvable;
    set allSupported(value: boolean | cdktf.IResolvable);
    resetAllSupported(): void;
    get allSupportedInput(): boolean | cdktf.IResolvable | undefined;
    private _includeGlobalResourceTypes?;
    get includeGlobalResourceTypes(): boolean | cdktf.IResolvable;
    set includeGlobalResourceTypes(value: boolean | cdktf.IResolvable);
    resetIncludeGlobalResourceTypes(): void;
    get includeGlobalResourceTypesInput(): boolean | cdktf.IResolvable | undefined;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    resetResourceTypes(): void;
    get resourceTypesInput(): string[] | undefined;
    private _exclusionByResourceTypes;
    get exclusionByResourceTypes(): ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesList;
    putExclusionByResourceTypes(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | cdktf.IResolvable): void;
    resetExclusionByResourceTypes(): void;
    get exclusionByResourceTypesInput(): cdktf.IResolvable | ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes[] | undefined;
    private _recordingStrategy;
    get recordingStrategy(): ConfigConfigurationRecorderRecordingGroupRecordingStrategyList;
    putRecordingStrategy(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | cdktf.IResolvable): void;
    resetRecordingStrategy(): void;
    get recordingStrategyInput(): cdktf.IResolvable | ConfigConfigurationRecorderRecordingGroupRecordingStrategy[] | undefined;
}
export interface ConfigConfigurationRecorderRecordingModeRecordingModeOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
    */
    readonly recordingFrequency: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes: string[];
}
export declare function configConfigurationRecorderRecordingModeRecordingModeOverrideToTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference | ConfigConfigurationRecorderRecordingModeRecordingModeOverride): any;
export declare function configConfigurationRecorderRecordingModeRecordingModeOverrideToHclTerraform(struct?: ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference | ConfigConfigurationRecorderRecordingModeRecordingModeOverride): any;
export declare class ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationRecorderRecordingModeRecordingModeOverride | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverride | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _recordingFrequency?;
    get recordingFrequency(): string;
    set recordingFrequency(value: string);
    get recordingFrequencyInput(): string | undefined;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    get resourceTypesInput(): string[] | undefined;
}
export interface ConfigConfigurationRecorderRecordingMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}
    */
    readonly recordingFrequency?: string;
    /**
    * recording_mode_override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#recording_mode_override ConfigConfigurationRecorder#recording_mode_override}
    */
    readonly recordingModeOverride?: ConfigConfigurationRecorderRecordingModeRecordingModeOverride;
}
export declare function configConfigurationRecorderRecordingModeToTerraform(struct?: ConfigConfigurationRecorderRecordingModeOutputReference | ConfigConfigurationRecorderRecordingMode): any;
export declare function configConfigurationRecorderRecordingModeToHclTerraform(struct?: ConfigConfigurationRecorderRecordingModeOutputReference | ConfigConfigurationRecorderRecordingMode): any;
export declare class ConfigConfigurationRecorderRecordingModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationRecorderRecordingMode | undefined;
    set internalValue(value: ConfigConfigurationRecorderRecordingMode | undefined);
    private _recordingFrequency?;
    get recordingFrequency(): string;
    set recordingFrequency(value: string);
    resetRecordingFrequency(): void;
    get recordingFrequencyInput(): string | undefined;
    private _recordingModeOverride;
    get recordingModeOverride(): ConfigConfigurationRecorderRecordingModeRecordingModeOverrideOutputReference;
    putRecordingModeOverride(value: ConfigConfigurationRecorderRecordingModeRecordingModeOverride): void;
    resetRecordingModeOverride(): void;
    get recordingModeOverrideInput(): ConfigConfigurationRecorderRecordingModeRecordingModeOverride | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder aws_config_configuration_recorder}
*/
export declare class ConfigConfigurationRecorder extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_configuration_recorder";
    /**
    * Generates CDKTF code for importing a ConfigConfigurationRecorder resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigConfigurationRecorder to import
    * @param importFromId The id of the existing ConfigConfigurationRecorder that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigConfigurationRecorder to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_recorder aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig);
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
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _recordingGroup;
    get recordingGroup(): ConfigConfigurationRecorderRecordingGroupOutputReference;
    putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup): void;
    resetRecordingGroup(): void;
    get recordingGroupInput(): ConfigConfigurationRecorderRecordingGroup | undefined;
    private _recordingMode;
    get recordingMode(): ConfigConfigurationRecorderRecordingModeOutputReference;
    putRecordingMode(value: ConfigConfigurationRecorderRecordingMode): void;
    resetRecordingMode(): void;
    get recordingModeInput(): ConfigConfigurationRecorderRecordingMode | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
