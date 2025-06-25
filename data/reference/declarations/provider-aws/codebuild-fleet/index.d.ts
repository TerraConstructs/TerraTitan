/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}
    */
    readonly baseCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}
    */
    readonly computeType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}
    */
    readonly environmentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}
    */
    readonly fleetServiceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}
    */
    readonly overflowBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * compute_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}
    */
    readonly computeConfiguration?: CodebuildFleetComputeConfiguration;
    /**
    * scaling_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}
    */
    readonly scalingConfiguration?: CodebuildFleetScalingConfiguration;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#vpc_config CodebuildFleet#vpc_config}
    */
    readonly vpcConfig?: CodebuildFleetVpcConfig[] | cdktf.IResolvable;
}
export interface CodebuildFleetStatus {
}
export declare function codebuildFleetStatusToTerraform(struct?: CodebuildFleetStatus): any;
export declare function codebuildFleetStatusToHclTerraform(struct?: CodebuildFleetStatus): any;
export declare class CodebuildFleetStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildFleetStatus | undefined;
    set internalValue(value: CodebuildFleetStatus | undefined);
    get context(): string;
    get message(): string;
    get statusCode(): string;
}
export declare class CodebuildFleetStatusList extends cdktf.ComplexList {
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
    get(index: number): CodebuildFleetStatusOutputReference;
}
export interface CodebuildFleetComputeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}
    */
    readonly disk?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}
    */
    readonly machineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}
    */
    readonly memory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#vcpu CodebuildFleet#vcpu}
    */
    readonly vcpu?: number;
}
export declare function codebuildFleetComputeConfigurationToTerraform(struct?: CodebuildFleetComputeConfigurationOutputReference | CodebuildFleetComputeConfiguration): any;
export declare function codebuildFleetComputeConfigurationToHclTerraform(struct?: CodebuildFleetComputeConfigurationOutputReference | CodebuildFleetComputeConfiguration): any;
export declare class CodebuildFleetComputeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildFleetComputeConfiguration | undefined;
    set internalValue(value: CodebuildFleetComputeConfiguration | undefined);
    private _disk?;
    get disk(): number;
    set disk(value: number);
    resetDisk(): void;
    get diskInput(): number | undefined;
    private _machineType?;
    get machineType(): string;
    set machineType(value: string);
    resetMachineType(): void;
    get machineTypeInput(): string | undefined;
    private _memory?;
    get memory(): number;
    set memory(value: number);
    resetMemory(): void;
    get memoryInput(): number | undefined;
    private _vcpu?;
    get vcpu(): number;
    set vcpu(value: number);
    resetVcpu(): void;
    get vcpuInput(): number | undefined;
}
export interface CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}
    */
    readonly metricType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}
    */
    readonly targetValue?: number;
}
export declare function codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToTerraform(struct?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable): any;
export declare function codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToHclTerraform(struct?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable): any;
export declare class CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable | undefined);
    private _metricType?;
    get metricType(): string;
    set metricType(value: string);
    resetMetricType(): void;
    get metricTypeInput(): string | undefined;
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    resetTargetValue(): void;
    get targetValueInput(): number | undefined;
}
export declare class CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference;
}
export interface CodebuildFleetScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}
    */
    readonly scalingType?: string;
    /**
    * target_tracking_scaling_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}
    */
    readonly targetTrackingScalingConfigs?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable;
}
export declare function codebuildFleetScalingConfigurationToTerraform(struct?: CodebuildFleetScalingConfigurationOutputReference | CodebuildFleetScalingConfiguration): any;
export declare function codebuildFleetScalingConfigurationToHclTerraform(struct?: CodebuildFleetScalingConfigurationOutputReference | CodebuildFleetScalingConfiguration): any;
export declare class CodebuildFleetScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildFleetScalingConfiguration | undefined;
    set internalValue(value: CodebuildFleetScalingConfiguration | undefined);
    get desiredCapacity(): number;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _scalingType?;
    get scalingType(): string;
    set scalingType(value: string);
    resetScalingType(): void;
    get scalingTypeInput(): string | undefined;
    private _targetTrackingScalingConfigs;
    get targetTrackingScalingConfigs(): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;
    putTargetTrackingScalingConfigs(value: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable): void;
    resetTargetTrackingScalingConfigs(): void;
    get targetTrackingScalingConfigsInput(): cdktf.IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | undefined;
}
export interface CodebuildFleetVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}
    */
    readonly vpcId: string;
}
export declare function codebuildFleetVpcConfigToTerraform(struct?: CodebuildFleetVpcConfig | cdktf.IResolvable): any;
export declare function codebuildFleetVpcConfigToHclTerraform(struct?: CodebuildFleetVpcConfig | cdktf.IResolvable): any;
export declare class CodebuildFleetVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodebuildFleetVpcConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CodebuildFleetVpcConfig | cdktf.IResolvable | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
export declare class CodebuildFleetVpcConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodebuildFleetVpcConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodebuildFleetVpcConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet aws_codebuild_fleet}
*/
export declare class CodebuildFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codebuild_fleet";
    /**
    * Generates CDKTF code for importing a CodebuildFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodebuildFleet to import
    * @param importFromId The id of the existing CodebuildFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodebuildFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/codebuild_fleet aws_codebuild_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildFleetConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildFleetConfig);
    get arn(): string;
    private _baseCapacity?;
    get baseCapacity(): number;
    set baseCapacity(value: number);
    get baseCapacityInput(): number | undefined;
    private _computeType?;
    get computeType(): string;
    set computeType(value: string);
    get computeTypeInput(): string | undefined;
    get created(): string;
    private _environmentType?;
    get environmentType(): string;
    set environmentType(value: string);
    get environmentTypeInput(): string | undefined;
    private _fleetServiceRole?;
    get fleetServiceRole(): string;
    set fleetServiceRole(value: string);
    resetFleetServiceRole(): void;
    get fleetServiceRoleInput(): string | undefined;
    get id(): string;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string | undefined;
    get lastModified(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _overflowBehavior?;
    get overflowBehavior(): string;
    set overflowBehavior(value: string);
    resetOverflowBehavior(): void;
    get overflowBehaviorInput(): string | undefined;
    private _status;
    get status(): CodebuildFleetStatusList;
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
    private _computeConfiguration;
    get computeConfiguration(): CodebuildFleetComputeConfigurationOutputReference;
    putComputeConfiguration(value: CodebuildFleetComputeConfiguration): void;
    resetComputeConfiguration(): void;
    get computeConfigurationInput(): CodebuildFleetComputeConfiguration | undefined;
    private _scalingConfiguration;
    get scalingConfiguration(): CodebuildFleetScalingConfigurationOutputReference;
    putScalingConfiguration(value: CodebuildFleetScalingConfiguration): void;
    resetScalingConfiguration(): void;
    get scalingConfigurationInput(): CodebuildFleetScalingConfiguration | undefined;
    private _vpcConfig;
    get vpcConfig(): CodebuildFleetVpcConfigList;
    putVpcConfig(value: CodebuildFleetVpcConfig[] | cdktf.IResolvable): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): cdktf.IResolvable | CodebuildFleetVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
