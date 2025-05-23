/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2FleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#context Ec2Fleet#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#excess_capacity_termination_policy Ec2Fleet#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#fleet_state Ec2Fleet#fleet_state}
    */
    readonly fleetState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#fulfilled_capacity Ec2Fleet#fulfilled_capacity}
    */
    readonly fulfilledCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#fulfilled_on_demand_capacity Ec2Fleet#fulfilled_on_demand_capacity}
    */
    readonly fulfilledOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#id Ec2Fleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#replace_unhealthy_instances Ec2Fleet#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#tags Ec2Fleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#tags_all Ec2Fleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#terminate_instances Ec2Fleet#terminate_instances}
    */
    readonly terminateInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#terminate_instances_with_expiration Ec2Fleet#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#type Ec2Fleet#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#valid_from Ec2Fleet#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#valid_until Ec2Fleet#valid_until}
    */
    readonly validUntil?: string;
    /**
    * fleet_instance_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#fleet_instance_set Ec2Fleet#fleet_instance_set}
    */
    readonly fleetInstanceSet?: Ec2FleetFleetInstanceSet[] | cdktf.IResolvable;
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#launch_template_config Ec2Fleet#launch_template_config}
    */
    readonly launchTemplateConfig: Ec2FleetLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * on_demand_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#on_demand_options Ec2Fleet#on_demand_options}
    */
    readonly onDemandOptions?: Ec2FleetOnDemandOptions;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#spot_options Ec2Fleet#spot_options}
    */
    readonly spotOptions?: Ec2FleetSpotOptions;
    /**
    * target_capacity_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#target_capacity_specification Ec2Fleet#target_capacity_specification}
    */
    readonly targetCapacitySpecification: Ec2FleetTargetCapacitySpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#timeouts Ec2Fleet#timeouts}
    */
    readonly timeouts?: Ec2FleetTimeouts;
}
export interface Ec2FleetFleetInstanceSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_ids Ec2Fleet#instance_ids}
    */
    readonly instanceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_type Ec2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#lifecycle Ec2Fleet#lifecycle}
    */
    readonly lifecycle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#platform Ec2Fleet#platform}
    */
    readonly platform?: string;
}
export declare function ec2FleetFleetInstanceSetToTerraform(struct?: Ec2FleetFleetInstanceSet | cdktf.IResolvable): any;
export declare function ec2FleetFleetInstanceSetToHclTerraform(struct?: Ec2FleetFleetInstanceSet | cdktf.IResolvable): any;
export declare class Ec2FleetFleetInstanceSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2FleetFleetInstanceSet | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetFleetInstanceSet | cdktf.IResolvable | undefined);
    private _instanceIds?;
    get instanceIds(): string[];
    set instanceIds(value: string[]);
    resetInstanceIds(): void;
    get instanceIdsInput(): string[] | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _lifecycle?;
    get lifecycle(): string;
    set lifecycle(value: string);
    resetLifecycle(): void;
    get lifecycleInput(): string | undefined;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string | undefined;
}
export declare class Ec2FleetFleetInstanceSetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2FleetFleetInstanceSet[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2FleetFleetInstanceSetOutputReference;
}
export interface Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#launch_template_id Ec2Fleet#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#launch_template_name Ec2Fleet#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#version Ec2Fleet#version}
    */
    readonly version: string;
}
export declare function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare function ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string | undefined;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min?: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    resetMin(): void;
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max Ec2Fleet#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min Ec2Fleet#min}
    */
    readonly min: number;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount | undefined);
    private _max?;
    get max(): number;
    set max(value: number);
    resetMax(): void;
    get maxInput(): number | undefined;
    private _min?;
    get min(): number;
    set min(value: number);
    get minInput(): number | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#accelerator_manufacturers Ec2Fleet#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#accelerator_names Ec2Fleet#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#accelerator_types Ec2Fleet#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#allowed_instance_types Ec2Fleet#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#bare_metal Ec2Fleet#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#burstable_performance Ec2Fleet#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#cpu_manufacturers Ec2Fleet#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#excluded_instance_types Ec2Fleet#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_generations Ec2Fleet#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#local_storage Ec2Fleet#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#local_storage_types Ec2Fleet#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max_spot_price_as_percentage_of_optimal_on_demand_price Ec2Fleet#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#on_demand_max_price_percentage_over_lowest_price Ec2Fleet#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#require_hibernate_support Ec2Fleet#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#spot_max_price_percentage_over_lowest_price Ec2Fleet#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * accelerator_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#accelerator_count Ec2Fleet#accelerator_count}
    */
    readonly acceleratorCount?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount;
    /**
    * accelerator_total_memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#accelerator_total_memory_mib Ec2Fleet#accelerator_total_memory_mib}
    */
    readonly acceleratorTotalMemoryMib?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib;
    /**
    * baseline_ebs_bandwidth_mbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#baseline_ebs_bandwidth_mbps Ec2Fleet#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps;
    /**
    * memory_gib_per_vcpu block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#memory_gib_per_vcpu Ec2Fleet#memory_gib_per_vcpu}
    */
    readonly memoryGibPerVcpu?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu;
    /**
    * memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#memory_mib Ec2Fleet#memory_mib}
    */
    readonly memoryMib: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib;
    /**
    * network_bandwidth_gbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#network_bandwidth_gbps Ec2Fleet#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps;
    /**
    * network_interface_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#network_interface_count Ec2Fleet#network_interface_count}
    */
    readonly networkInterfaceCount?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount;
    /**
    * total_local_storage_gb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#total_local_storage_gb Ec2Fleet#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb;
    /**
    * vcpu_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#vcpu_count Ec2Fleet#vcpu_count}
    */
    readonly vcpuCount: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount;
}
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements): any;
export declare function ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference | Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements | undefined);
    private _acceleratorManufacturers?;
    get acceleratorManufacturers(): string[];
    set acceleratorManufacturers(value: string[]);
    resetAcceleratorManufacturers(): void;
    get acceleratorManufacturersInput(): string[] | undefined;
    private _acceleratorNames?;
    get acceleratorNames(): string[];
    set acceleratorNames(value: string[]);
    resetAcceleratorNames(): void;
    get acceleratorNamesInput(): string[] | undefined;
    private _acceleratorTypes?;
    get acceleratorTypes(): string[];
    set acceleratorTypes(value: string[]);
    resetAcceleratorTypes(): void;
    get acceleratorTypesInput(): string[] | undefined;
    private _allowedInstanceTypes?;
    get allowedInstanceTypes(): string[];
    set allowedInstanceTypes(value: string[]);
    resetAllowedInstanceTypes(): void;
    get allowedInstanceTypesInput(): string[] | undefined;
    private _bareMetal?;
    get bareMetal(): string;
    set bareMetal(value: string);
    resetBareMetal(): void;
    get bareMetalInput(): string | undefined;
    private _burstablePerformance?;
    get burstablePerformance(): string;
    set burstablePerformance(value: string);
    resetBurstablePerformance(): void;
    get burstablePerformanceInput(): string | undefined;
    private _cpuManufacturers?;
    get cpuManufacturers(): string[];
    set cpuManufacturers(value: string[]);
    resetCpuManufacturers(): void;
    get cpuManufacturersInput(): string[] | undefined;
    private _excludedInstanceTypes?;
    get excludedInstanceTypes(): string[];
    set excludedInstanceTypes(value: string[]);
    resetExcludedInstanceTypes(): void;
    get excludedInstanceTypesInput(): string[] | undefined;
    private _instanceGenerations?;
    get instanceGenerations(): string[];
    set instanceGenerations(value: string[]);
    resetInstanceGenerations(): void;
    get instanceGenerationsInput(): string[] | undefined;
    private _localStorage?;
    get localStorage(): string;
    set localStorage(value: string);
    resetLocalStorage(): void;
    get localStorageInput(): string | undefined;
    private _localStorageTypes?;
    get localStorageTypes(): string[];
    set localStorageTypes(value: string[]);
    resetLocalStorageTypes(): void;
    get localStorageTypesInput(): string[] | undefined;
    private _maxSpotPriceAsPercentageOfOptimalOnDemandPrice?;
    get maxSpotPriceAsPercentageOfOptimalOnDemandPrice(): number;
    set maxSpotPriceAsPercentageOfOptimalOnDemandPrice(value: number);
    resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice(): void;
    get maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput(): number | undefined;
    private _onDemandMaxPricePercentageOverLowestPrice?;
    get onDemandMaxPricePercentageOverLowestPrice(): number;
    set onDemandMaxPricePercentageOverLowestPrice(value: number);
    resetOnDemandMaxPricePercentageOverLowestPrice(): void;
    get onDemandMaxPricePercentageOverLowestPriceInput(): number | undefined;
    private _requireHibernateSupport?;
    get requireHibernateSupport(): boolean | cdktf.IResolvable;
    set requireHibernateSupport(value: boolean | cdktf.IResolvable);
    resetRequireHibernateSupport(): void;
    get requireHibernateSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _spotMaxPricePercentageOverLowestPrice?;
    get spotMaxPricePercentageOverLowestPrice(): number;
    set spotMaxPricePercentageOverLowestPrice(value: number);
    resetSpotMaxPricePercentageOverLowestPrice(): void;
    get spotMaxPricePercentageOverLowestPriceInput(): number | undefined;
    private _acceleratorCount;
    get acceleratorCount(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCountOutputReference;
    putAcceleratorCount(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount): void;
    resetAcceleratorCount(): void;
    get acceleratorCountInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount | undefined;
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
    putAcceleratorTotalMemoryMib(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib): void;
    resetAcceleratorTotalMemoryMib(): void;
    get acceleratorTotalMemoryMibInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
    putBaselineEbsBandwidthMbps(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps): void;
    resetBaselineEbsBandwidthMbps(): void;
    get baselineEbsBandwidthMbpsInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference;
    putMemoryGibPerVcpu(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu): void;
    resetMemoryGibPerVcpu(): void;
    get memoryGibPerVcpuInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu | undefined;
    private _memoryMib;
    get memoryMib(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMibOutputReference;
    putMemoryMib(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib): void;
    get memoryMibInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib | undefined;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference;
    putNetworkBandwidthGbps(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps): void;
    resetNetworkBandwidthGbps(): void;
    get networkBandwidthGbpsInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps | undefined;
    private _networkInterfaceCount;
    get networkInterfaceCount(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCountOutputReference;
    putNetworkInterfaceCount(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount): void;
    resetNetworkInterfaceCount(): void;
    get networkInterfaceCountInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount | undefined;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGbOutputReference;
    putTotalLocalStorageGb(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb): void;
    resetTotalLocalStorageGb(): void;
    get totalLocalStorageGbInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb | undefined;
    private _vcpuCount;
    get vcpuCount(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCountOutputReference;
    putVcpuCount(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount): void;
    get vcpuCountInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount | undefined;
}
export interface Ec2FleetLaunchTemplateConfigOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#availability_zone Ec2Fleet#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_type Ec2Fleet#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max_price Ec2Fleet#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#priority Ec2Fleet#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#subnet_id Ec2Fleet#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#weighted_capacity Ec2Fleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * instance_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_requirements Ec2Fleet#instance_requirements}
    */
    readonly instanceRequirements?: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements;
}
export declare function ec2FleetLaunchTemplateConfigOverrideToTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any;
export declare function ec2FleetLaunchTemplateConfigOverrideToHclTerraform(struct?: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable): any;
export declare class Ec2FleetLaunchTemplateConfigOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfigOverride | cdktf.IResolvable | undefined);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _maxPrice?;
    get maxPrice(): string;
    set maxPrice(value: string);
    resetMaxPrice(): void;
    get maxPriceInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): number;
    set weightedCapacity(value: number);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): number | undefined;
    private _instanceRequirements;
    get instanceRequirements(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirementsOutputReference;
    putInstanceRequirements(value: Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements): void;
    resetInstanceRequirements(): void;
    get instanceRequirementsInput(): Ec2FleetLaunchTemplateConfigOverrideInstanceRequirements | undefined;
}
export declare class Ec2FleetLaunchTemplateConfigOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2FleetLaunchTemplateConfigOverrideOutputReference;
}
export interface Ec2FleetLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#launch_template_specification Ec2Fleet#launch_template_specification}
    */
    readonly launchTemplateSpecification?: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#override Ec2Fleet#override}
    */
    readonly override?: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable;
}
export declare function ec2FleetLaunchTemplateConfigToTerraform(struct?: Ec2FleetLaunchTemplateConfig | cdktf.IResolvable): any;
export declare function ec2FleetLaunchTemplateConfigToHclTerraform(struct?: Ec2FleetLaunchTemplateConfig | cdktf.IResolvable): any;
export declare class Ec2FleetLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2FleetLaunchTemplateConfig | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetLaunchTemplateConfig | cdktf.IResolvable | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification): void;
    resetLaunchTemplateSpecification(): void;
    get launchTemplateSpecificationInput(): Ec2FleetLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    private _override;
    get override(): Ec2FleetLaunchTemplateConfigOverrideList;
    putOverride(value: Ec2FleetLaunchTemplateConfigOverride[] | cdktf.IResolvable): void;
    resetOverride(): void;
    get overrideInput(): cdktf.IResolvable | Ec2FleetLaunchTemplateConfigOverride[] | undefined;
}
export declare class Ec2FleetLaunchTemplateConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2FleetLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2FleetLaunchTemplateConfigOutputReference;
}
export interface Ec2FleetOnDemandOptionsCapacityReservationOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#usage_strategy Ec2Fleet#usage_strategy}
    */
    readonly usageStrategy?: string;
}
export declare function ec2FleetOnDemandOptionsCapacityReservationOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference | Ec2FleetOnDemandOptionsCapacityReservationOptions): any;
export declare function ec2FleetOnDemandOptionsCapacityReservationOptionsToHclTerraform(struct?: Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference | Ec2FleetOnDemandOptionsCapacityReservationOptions): any;
export declare class Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetOnDemandOptionsCapacityReservationOptions | undefined;
    set internalValue(value: Ec2FleetOnDemandOptionsCapacityReservationOptions | undefined);
    private _usageStrategy?;
    get usageStrategy(): string;
    set usageStrategy(value: string);
    resetUsageStrategy(): void;
    get usageStrategyInput(): string | undefined;
}
export interface Ec2FleetOnDemandOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#max_total_price Ec2Fleet#max_total_price}
    */
    readonly maxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#min_target_capacity Ec2Fleet#min_target_capacity}
    */
    readonly minTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#single_availability_zone Ec2Fleet#single_availability_zone}
    */
    readonly singleAvailabilityZone?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#single_instance_type Ec2Fleet#single_instance_type}
    */
    readonly singleInstanceType?: boolean | cdktf.IResolvable;
    /**
    * capacity_reservation_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#capacity_reservation_options Ec2Fleet#capacity_reservation_options}
    */
    readonly capacityReservationOptions?: Ec2FleetOnDemandOptionsCapacityReservationOptions;
}
export declare function ec2FleetOnDemandOptionsToTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any;
export declare function ec2FleetOnDemandOptionsToHclTerraform(struct?: Ec2FleetOnDemandOptionsOutputReference | Ec2FleetOnDemandOptions): any;
export declare class Ec2FleetOnDemandOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetOnDemandOptions | undefined;
    set internalValue(value: Ec2FleetOnDemandOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    private _maxTotalPrice?;
    get maxTotalPrice(): string;
    set maxTotalPrice(value: string);
    resetMaxTotalPrice(): void;
    get maxTotalPriceInput(): string | undefined;
    private _minTargetCapacity?;
    get minTargetCapacity(): number;
    set minTargetCapacity(value: number);
    resetMinTargetCapacity(): void;
    get minTargetCapacityInput(): number | undefined;
    private _singleAvailabilityZone?;
    get singleAvailabilityZone(): boolean | cdktf.IResolvable;
    set singleAvailabilityZone(value: boolean | cdktf.IResolvable);
    resetSingleAvailabilityZone(): void;
    get singleAvailabilityZoneInput(): boolean | cdktf.IResolvable | undefined;
    private _singleInstanceType?;
    get singleInstanceType(): boolean | cdktf.IResolvable;
    set singleInstanceType(value: boolean | cdktf.IResolvable);
    resetSingleInstanceType(): void;
    get singleInstanceTypeInput(): boolean | cdktf.IResolvable | undefined;
    private _capacityReservationOptions;
    get capacityReservationOptions(): Ec2FleetOnDemandOptionsCapacityReservationOptionsOutputReference;
    putCapacityReservationOptions(value: Ec2FleetOnDemandOptionsCapacityReservationOptions): void;
    resetCapacityReservationOptions(): void;
    get capacityReservationOptionsInput(): Ec2FleetOnDemandOptionsCapacityReservationOptions | undefined;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#replacement_strategy Ec2Fleet#replacement_strategy}
    */
    readonly replacementStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#termination_delay Ec2Fleet#termination_delay}
    */
    readonly terminationDelay?: number;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any;
export declare function ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference | Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string | undefined;
    private _terminationDelay?;
    get terminationDelay(): number;
    set terminationDelay(value: number);
    resetTerminationDelay(): void;
    get terminationDelayInput(): number | undefined;
}
export interface Ec2FleetSpotOptionsMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#capacity_rebalance Ec2Fleet#capacity_rebalance}
    */
    readonly capacityRebalance?: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance;
}
export declare function ec2FleetSpotOptionsMaintenanceStrategiesToTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any;
export declare function ec2FleetSpotOptionsMaintenanceStrategiesToHclTerraform(struct?: Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference | Ec2FleetSpotOptionsMaintenanceStrategies): any;
export declare class Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined;
    set internalValue(value: Ec2FleetSpotOptionsMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): Ec2FleetSpotOptionsMaintenanceStrategiesCapacityRebalance | undefined;
}
export interface Ec2FleetSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#allocation_strategy Ec2Fleet#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_interruption_behavior Ec2Fleet#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#instance_pools_to_use_count Ec2Fleet#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#maintenance_strategies Ec2Fleet#maintenance_strategies}
    */
    readonly maintenanceStrategies?: Ec2FleetSpotOptionsMaintenanceStrategies;
}
export declare function ec2FleetSpotOptionsToTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any;
export declare function ec2FleetSpotOptionsToHclTerraform(struct?: Ec2FleetSpotOptionsOutputReference | Ec2FleetSpotOptions): any;
export declare class Ec2FleetSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetSpotOptions | undefined;
    set internalValue(value: Ec2FleetSpotOptions | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string | undefined;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number | undefined;
    private _maintenanceStrategies;
    get maintenanceStrategies(): Ec2FleetSpotOptionsMaintenanceStrategiesOutputReference;
    putMaintenanceStrategies(value: Ec2FleetSpotOptionsMaintenanceStrategies): void;
    resetMaintenanceStrategies(): void;
    get maintenanceStrategiesInput(): Ec2FleetSpotOptionsMaintenanceStrategies | undefined;
}
export interface Ec2FleetTargetCapacitySpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#default_target_capacity_type Ec2Fleet#default_target_capacity_type}
    */
    readonly defaultTargetCapacityType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#on_demand_target_capacity Ec2Fleet#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#spot_target_capacity Ec2Fleet#spot_target_capacity}
    */
    readonly spotTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#target_capacity_unit_type Ec2Fleet#target_capacity_unit_type}
    */
    readonly targetCapacityUnitType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#total_target_capacity Ec2Fleet#total_target_capacity}
    */
    readonly totalTargetCapacity: number;
}
export declare function ec2FleetTargetCapacitySpecificationToTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any;
export declare function ec2FleetTargetCapacitySpecificationToHclTerraform(struct?: Ec2FleetTargetCapacitySpecificationOutputReference | Ec2FleetTargetCapacitySpecification): any;
export declare class Ec2FleetTargetCapacitySpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetTargetCapacitySpecification | undefined;
    set internalValue(value: Ec2FleetTargetCapacitySpecification | undefined);
    private _defaultTargetCapacityType?;
    get defaultTargetCapacityType(): string;
    set defaultTargetCapacityType(value: string);
    get defaultTargetCapacityTypeInput(): string | undefined;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number | undefined;
    private _spotTargetCapacity?;
    get spotTargetCapacity(): number;
    set spotTargetCapacity(value: number);
    resetSpotTargetCapacity(): void;
    get spotTargetCapacityInput(): number | undefined;
    private _targetCapacityUnitType?;
    get targetCapacityUnitType(): string;
    set targetCapacityUnitType(value: string);
    resetTargetCapacityUnitType(): void;
    get targetCapacityUnitTypeInput(): string | undefined;
    private _totalTargetCapacity?;
    get totalTargetCapacity(): number;
    set totalTargetCapacity(value: number);
    get totalTargetCapacityInput(): number | undefined;
}
export interface Ec2FleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#create Ec2Fleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#delete Ec2Fleet#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#update Ec2Fleet#update}
    */
    readonly update?: string;
}
export declare function ec2FleetTimeoutsToTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any;
export declare function ec2FleetTimeoutsToHclTerraform(struct?: Ec2FleetTimeouts | cdktf.IResolvable): any;
export declare class Ec2FleetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2FleetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2FleetTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet aws_ec2_fleet}
*/
export declare class Ec2Fleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_fleet";
    /**
    * Generates CDKTF code for importing a Ec2Fleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2Fleet to import
    * @param importFromId The id of the existing Ec2Fleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2Fleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_fleet aws_ec2_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2FleetConfig
    */
    constructor(scope: Construct, id: string, config: Ec2FleetConfig);
    get arn(): string;
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string | undefined;
    private _excessCapacityTerminationPolicy?;
    get excessCapacityTerminationPolicy(): string;
    set excessCapacityTerminationPolicy(value: string);
    resetExcessCapacityTerminationPolicy(): void;
    get excessCapacityTerminationPolicyInput(): string | undefined;
    private _fleetState?;
    get fleetState(): string;
    set fleetState(value: string);
    resetFleetState(): void;
    get fleetStateInput(): string | undefined;
    private _fulfilledCapacity?;
    get fulfilledCapacity(): number;
    set fulfilledCapacity(value: number);
    resetFulfilledCapacity(): void;
    get fulfilledCapacityInput(): number | undefined;
    private _fulfilledOnDemandCapacity?;
    get fulfilledOnDemandCapacity(): number;
    set fulfilledOnDemandCapacity(value: number);
    resetFulfilledOnDemandCapacity(): void;
    get fulfilledOnDemandCapacityInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable | undefined;
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
    private _terminateInstances?;
    get terminateInstances(): boolean | cdktf.IResolvable;
    set terminateInstances(value: boolean | cdktf.IResolvable);
    resetTerminateInstances(): void;
    get terminateInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _validFrom?;
    get validFrom(): string;
    set validFrom(value: string);
    resetValidFrom(): void;
    get validFromInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
    private _fleetInstanceSet;
    get fleetInstanceSet(): Ec2FleetFleetInstanceSetList;
    putFleetInstanceSet(value: Ec2FleetFleetInstanceSet[] | cdktf.IResolvable): void;
    resetFleetInstanceSet(): void;
    get fleetInstanceSetInput(): cdktf.IResolvable | Ec2FleetFleetInstanceSet[] | undefined;
    private _launchTemplateConfig;
    get launchTemplateConfig(): Ec2FleetLaunchTemplateConfigList;
    putLaunchTemplateConfig(value: Ec2FleetLaunchTemplateConfig[] | cdktf.IResolvable): void;
    get launchTemplateConfigInput(): cdktf.IResolvable | Ec2FleetLaunchTemplateConfig[] | undefined;
    private _onDemandOptions;
    get onDemandOptions(): Ec2FleetOnDemandOptionsOutputReference;
    putOnDemandOptions(value: Ec2FleetOnDemandOptions): void;
    resetOnDemandOptions(): void;
    get onDemandOptionsInput(): Ec2FleetOnDemandOptions | undefined;
    private _spotOptions;
    get spotOptions(): Ec2FleetSpotOptionsOutputReference;
    putSpotOptions(value: Ec2FleetSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): Ec2FleetSpotOptions | undefined;
    private _targetCapacitySpecification;
    get targetCapacitySpecification(): Ec2FleetTargetCapacitySpecificationOutputReference;
    putTargetCapacitySpecification(value: Ec2FleetTargetCapacitySpecification): void;
    get targetCapacitySpecificationInput(): Ec2FleetTargetCapacitySpecification | undefined;
    private _timeouts;
    get timeouts(): Ec2FleetTimeoutsOutputReference;
    putTimeouts(value: Ec2FleetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2FleetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
