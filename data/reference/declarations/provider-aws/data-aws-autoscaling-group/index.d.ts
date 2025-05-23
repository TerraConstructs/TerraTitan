/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/autoscaling_group#id DataAwsAutoscalingGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/autoscaling_group#name DataAwsAutoscalingGroup#name}
    */
    readonly name: string;
}
export interface DataAwsAutoscalingGroupInstanceMaintenancePolicy {
}
export declare function dataAwsAutoscalingGroupInstanceMaintenancePolicyToTerraform(struct?: DataAwsAutoscalingGroupInstanceMaintenancePolicy): any;
export declare function dataAwsAutoscalingGroupInstanceMaintenancePolicyToHclTerraform(struct?: DataAwsAutoscalingGroupInstanceMaintenancePolicy): any;
export declare class DataAwsAutoscalingGroupInstanceMaintenancePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupInstanceMaintenancePolicy | undefined;
    set internalValue(value: DataAwsAutoscalingGroupInstanceMaintenancePolicy | undefined);
    get maxHealthyPercentage(): number;
    get minHealthyPercentage(): number;
}
export declare class DataAwsAutoscalingGroupInstanceMaintenancePolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupInstanceMaintenancePolicyOutputReference;
}
export interface DataAwsAutoscalingGroupLaunchTemplate {
}
export declare function dataAwsAutoscalingGroupLaunchTemplateToTerraform(struct?: DataAwsAutoscalingGroupLaunchTemplate): any;
export declare function dataAwsAutoscalingGroupLaunchTemplateToHclTerraform(struct?: DataAwsAutoscalingGroupLaunchTemplate): any;
export declare class DataAwsAutoscalingGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupLaunchTemplate | undefined;
    set internalValue(value: DataAwsAutoscalingGroupLaunchTemplate | undefined);
    get id(): string;
    get name(): string;
    get version(): string;
}
export declare class DataAwsAutoscalingGroupLaunchTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupLaunchTemplateOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistribution {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistribution): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistribution | undefined);
    get onDemandAllocationStrategy(): string;
    get onDemandBaseCapacity(): number;
    get onDemandPercentageAboveBaseCapacity(): number;
    get spotAllocationStrategy(): string;
    get spotInstancePools(): number;
    get spotMaxPrice(): string;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification | undefined);
    get launchTemplateId(): string;
    get launchTemplateName(): string;
    get version(): string;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements | undefined);
    private _acceleratorCount;
    get acceleratorCount(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCountList;
    get acceleratorManufacturers(): string[];
    get acceleratorNames(): string[];
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMibList;
    get acceleratorTypes(): string[];
    get allowedInstanceTypes(): string[];
    get bareMetal(): string;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbpsList;
    get burstablePerformance(): string;
    get cpuManufacturers(): string[];
    get excludedInstanceTypes(): string[];
    get instanceGenerations(): string[];
    get localStorage(): string;
    get localStorageTypes(): string[];
    get maxSpotPriceAsPercentageOfOptimalOnDemandPrice(): number;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpuList;
    private _memoryMib;
    get memoryMib(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMibList;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbpsList;
    private _networkInterfaceCount;
    get networkInterfaceCount(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCountList;
    get onDemandMaxPricePercentageOverLowestPrice(): number;
    get requireHibernateSupport(): cdktf.IResolvable;
    get spotMaxPricePercentageOverLowestPrice(): number;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGbList;
    private _vcpuCount;
    get vcpuCount(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCountList;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification | undefined);
    get launchTemplateId(): string;
    get launchTemplateName(): string;
    get version(): string;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride | undefined);
    private _instanceRequirements;
    get instanceRequirements(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsList;
    get instanceType(): string;
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationList;
    get weightedCapacity(): string;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplate {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplate): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplate | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationList;
    private _override;
    get override(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideList;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateOutputReference;
}
export interface DataAwsAutoscalingGroupMixedInstancesPolicy {
}
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyToTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicy): any;
export declare function dataAwsAutoscalingGroupMixedInstancesPolicyToHclTerraform(struct?: DataAwsAutoscalingGroupMixedInstancesPolicy): any;
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupMixedInstancesPolicy | undefined;
    set internalValue(value: DataAwsAutoscalingGroupMixedInstancesPolicy | undefined);
    private _instancesDistribution;
    get instancesDistribution(): DataAwsAutoscalingGroupMixedInstancesPolicyInstancesDistributionList;
    private _launchTemplate;
    get launchTemplate(): DataAwsAutoscalingGroupMixedInstancesPolicyLaunchTemplateList;
}
export declare class DataAwsAutoscalingGroupMixedInstancesPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupMixedInstancesPolicyOutputReference;
}
export interface DataAwsAutoscalingGroupTag {
}
export declare function dataAwsAutoscalingGroupTagToTerraform(struct?: DataAwsAutoscalingGroupTag): any;
export declare function dataAwsAutoscalingGroupTagToHclTerraform(struct?: DataAwsAutoscalingGroupTag): any;
export declare class DataAwsAutoscalingGroupTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupTag | undefined;
    set internalValue(value: DataAwsAutoscalingGroupTag | undefined);
    get key(): string;
    get propagateAtLaunch(): cdktf.IResolvable;
    get value(): string;
}
export declare class DataAwsAutoscalingGroupTagList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupTagOutputReference;
}
export interface DataAwsAutoscalingGroupTrafficSource {
}
export declare function dataAwsAutoscalingGroupTrafficSourceToTerraform(struct?: DataAwsAutoscalingGroupTrafficSource): any;
export declare function dataAwsAutoscalingGroupTrafficSourceToHclTerraform(struct?: DataAwsAutoscalingGroupTrafficSource): any;
export declare class DataAwsAutoscalingGroupTrafficSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupTrafficSource | undefined;
    set internalValue(value: DataAwsAutoscalingGroupTrafficSource | undefined);
    get identifier(): string;
    get type(): string;
}
export declare class DataAwsAutoscalingGroupTrafficSourceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupTrafficSourceOutputReference;
}
export interface DataAwsAutoscalingGroupWarmPoolInstanceReusePolicy {
}
export declare function dataAwsAutoscalingGroupWarmPoolInstanceReusePolicyToTerraform(struct?: DataAwsAutoscalingGroupWarmPoolInstanceReusePolicy): any;
export declare function dataAwsAutoscalingGroupWarmPoolInstanceReusePolicyToHclTerraform(struct?: DataAwsAutoscalingGroupWarmPoolInstanceReusePolicy): any;
export declare class DataAwsAutoscalingGroupWarmPoolInstanceReusePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupWarmPoolInstanceReusePolicy | undefined;
    set internalValue(value: DataAwsAutoscalingGroupWarmPoolInstanceReusePolicy | undefined);
    get reuseOnScaleIn(): cdktf.IResolvable;
}
export declare class DataAwsAutoscalingGroupWarmPoolInstanceReusePolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupWarmPoolInstanceReusePolicyOutputReference;
}
export interface DataAwsAutoscalingGroupWarmPool {
}
export declare function dataAwsAutoscalingGroupWarmPoolToTerraform(struct?: DataAwsAutoscalingGroupWarmPool): any;
export declare function dataAwsAutoscalingGroupWarmPoolToHclTerraform(struct?: DataAwsAutoscalingGroupWarmPool): any;
export declare class DataAwsAutoscalingGroupWarmPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAutoscalingGroupWarmPool | undefined;
    set internalValue(value: DataAwsAutoscalingGroupWarmPool | undefined);
    private _instanceReusePolicy;
    get instanceReusePolicy(): DataAwsAutoscalingGroupWarmPoolInstanceReusePolicyList;
    get maxGroupPreparedCapacity(): number;
    get minSize(): number;
    get poolState(): string;
}
export declare class DataAwsAutoscalingGroupWarmPoolList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAutoscalingGroupWarmPoolOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/autoscaling_group aws_autoscaling_group}
*/
export declare class DataAwsAutoscalingGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_autoscaling_group";
    /**
    * Generates CDKTF code for importing a DataAwsAutoscalingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAutoscalingGroup to import
    * @param importFromId The id of the existing DataAwsAutoscalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/autoscaling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAutoscalingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/autoscaling_group aws_autoscaling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get defaultCooldown(): number;
    get desiredCapacity(): number;
    get desiredCapacityType(): string;
    get enabledMetrics(): string[];
    get healthCheckGracePeriod(): number;
    get healthCheckType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceMaintenancePolicy;
    get instanceMaintenancePolicy(): DataAwsAutoscalingGroupInstanceMaintenancePolicyList;
    get launchConfiguration(): string;
    private _launchTemplate;
    get launchTemplate(): DataAwsAutoscalingGroupLaunchTemplateList;
    get loadBalancers(): string[];
    get maxInstanceLifetime(): number;
    get maxSize(): number;
    get minSize(): number;
    private _mixedInstancesPolicy;
    get mixedInstancesPolicy(): DataAwsAutoscalingGroupMixedInstancesPolicyList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get newInstancesProtectedFromScaleIn(): cdktf.IResolvable;
    get placementGroup(): string;
    get predictedCapacity(): number;
    get serviceLinkedRoleArn(): string;
    get status(): string;
    get suspendedProcesses(): string[];
    private _tag;
    get tag(): DataAwsAutoscalingGroupTagList;
    get targetGroupArns(): string[];
    get terminationPolicies(): string[];
    private _trafficSource;
    get trafficSource(): DataAwsAutoscalingGroupTrafficSourceList;
    get vpcZoneIdentifier(): string;
    private _warmPool;
    get warmPool(): DataAwsAutoscalingGroupWarmPoolList;
    get warmPoolSize(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
