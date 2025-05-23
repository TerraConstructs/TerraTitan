/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#filter DataAwsLaunchTemplate#filter}
    */
    readonly filter?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#timeouts DataAwsLaunchTemplate#timeouts}
    */
    readonly timeouts?: DataAwsLaunchTemplateTimeouts;
}
export interface DataAwsLaunchTemplateBlockDeviceMappingsEbs {
}
export declare function dataAwsLaunchTemplateBlockDeviceMappingsEbsToTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappingsEbs): any;
export declare function dataAwsLaunchTemplateBlockDeviceMappingsEbsToHclTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappingsEbs): any;
export declare class DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateBlockDeviceMappingsEbs | undefined;
    set internalValue(value: DataAwsLaunchTemplateBlockDeviceMappingsEbs | undefined);
    get deleteOnTermination(): string;
    get encrypted(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchTemplateBlockDeviceMappingsEbsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference;
}
export interface DataAwsLaunchTemplateBlockDeviceMappings {
}
export declare function dataAwsLaunchTemplateBlockDeviceMappingsToTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappings): any;
export declare function dataAwsLaunchTemplateBlockDeviceMappingsToHclTerraform(struct?: DataAwsLaunchTemplateBlockDeviceMappings): any;
export declare class DataAwsLaunchTemplateBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateBlockDeviceMappings | undefined;
    set internalValue(value: DataAwsLaunchTemplateBlockDeviceMappings | undefined);
    get deviceName(): string;
    private _ebs;
    get ebs(): DataAwsLaunchTemplateBlockDeviceMappingsEbsList;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchTemplateBlockDeviceMappingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateBlockDeviceMappingsOutputReference;
}
export interface DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
}
export declare function dataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any;
export declare function dataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined);
    get capacityReservationId(): string;
    get capacityReservationResourceGroupArn(): string;
}
export declare class DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
}
export interface DataAwsLaunchTemplateCapacityReservationSpecification {
}
export declare function dataAwsLaunchTemplateCapacityReservationSpecificationToTerraform(struct?: DataAwsLaunchTemplateCapacityReservationSpecification): any;
export declare function dataAwsLaunchTemplateCapacityReservationSpecificationToHclTerraform(struct?: DataAwsLaunchTemplateCapacityReservationSpecification): any;
export declare class DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateCapacityReservationSpecification | undefined;
    set internalValue(value: DataAwsLaunchTemplateCapacityReservationSpecification | undefined);
    get capacityReservationPreference(): string;
    private _capacityReservationTarget;
    get capacityReservationTarget(): DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList;
}
export declare class DataAwsLaunchTemplateCapacityReservationSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference;
}
export interface DataAwsLaunchTemplateCpuOptions {
}
export declare function dataAwsLaunchTemplateCpuOptionsToTerraform(struct?: DataAwsLaunchTemplateCpuOptions): any;
export declare function dataAwsLaunchTemplateCpuOptionsToHclTerraform(struct?: DataAwsLaunchTemplateCpuOptions): any;
export declare class DataAwsLaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateCpuOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateCpuOptions | undefined);
    get amdSevSnp(): string;
    get coreCount(): number;
    get threadsPerCore(): number;
}
export declare class DataAwsLaunchTemplateCpuOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateCpuOptionsOutputReference;
}
export interface DataAwsLaunchTemplateCreditSpecification {
}
export declare function dataAwsLaunchTemplateCreditSpecificationToTerraform(struct?: DataAwsLaunchTemplateCreditSpecification): any;
export declare function dataAwsLaunchTemplateCreditSpecificationToHclTerraform(struct?: DataAwsLaunchTemplateCreditSpecification): any;
export declare class DataAwsLaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateCreditSpecification | undefined;
    set internalValue(value: DataAwsLaunchTemplateCreditSpecification | undefined);
    get cpuCredits(): string;
}
export declare class DataAwsLaunchTemplateCreditSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateCreditSpecificationOutputReference;
}
export interface DataAwsLaunchTemplateElasticGpuSpecifications {
}
export declare function dataAwsLaunchTemplateElasticGpuSpecificationsToTerraform(struct?: DataAwsLaunchTemplateElasticGpuSpecifications): any;
export declare function dataAwsLaunchTemplateElasticGpuSpecificationsToHclTerraform(struct?: DataAwsLaunchTemplateElasticGpuSpecifications): any;
export declare class DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateElasticGpuSpecifications | undefined;
    set internalValue(value: DataAwsLaunchTemplateElasticGpuSpecifications | undefined);
    get type(): string;
}
export declare class DataAwsLaunchTemplateElasticGpuSpecificationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateElasticGpuSpecificationsOutputReference;
}
export interface DataAwsLaunchTemplateElasticInferenceAccelerator {
}
export declare function dataAwsLaunchTemplateElasticInferenceAcceleratorToTerraform(struct?: DataAwsLaunchTemplateElasticInferenceAccelerator): any;
export declare function dataAwsLaunchTemplateElasticInferenceAcceleratorToHclTerraform(struct?: DataAwsLaunchTemplateElasticInferenceAccelerator): any;
export declare class DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateElasticInferenceAccelerator | undefined;
    set internalValue(value: DataAwsLaunchTemplateElasticInferenceAccelerator | undefined);
    get type(): string;
}
export declare class DataAwsLaunchTemplateElasticInferenceAcceleratorList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateElasticInferenceAcceleratorOutputReference;
}
export interface DataAwsLaunchTemplateEnclaveOptions {
}
export declare function dataAwsLaunchTemplateEnclaveOptionsToTerraform(struct?: DataAwsLaunchTemplateEnclaveOptions): any;
export declare function dataAwsLaunchTemplateEnclaveOptionsToHclTerraform(struct?: DataAwsLaunchTemplateEnclaveOptions): any;
export declare class DataAwsLaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateEnclaveOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateEnclaveOptions | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateEnclaveOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateEnclaveOptionsOutputReference;
}
export interface DataAwsLaunchTemplateHibernationOptions {
}
export declare function dataAwsLaunchTemplateHibernationOptionsToTerraform(struct?: DataAwsLaunchTemplateHibernationOptions): any;
export declare function dataAwsLaunchTemplateHibernationOptionsToHclTerraform(struct?: DataAwsLaunchTemplateHibernationOptions): any;
export declare class DataAwsLaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateHibernationOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateHibernationOptions | undefined);
    get configured(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateHibernationOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateHibernationOptionsOutputReference;
}
export interface DataAwsLaunchTemplateIamInstanceProfile {
}
export declare function dataAwsLaunchTemplateIamInstanceProfileToTerraform(struct?: DataAwsLaunchTemplateIamInstanceProfile): any;
export declare function dataAwsLaunchTemplateIamInstanceProfileToHclTerraform(struct?: DataAwsLaunchTemplateIamInstanceProfile): any;
export declare class DataAwsLaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateIamInstanceProfile | undefined;
    set internalValue(value: DataAwsLaunchTemplateIamInstanceProfile | undefined);
    get arn(): string;
    get name(): string;
}
export declare class DataAwsLaunchTemplateIamInstanceProfileList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateIamInstanceProfileOutputReference;
}
export interface DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions {
}
export declare function dataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare function dataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions | undefined);
    get blockDurationMinutes(): number;
    get instanceInterruptionBehavior(): string;
    get maxPrice(): string;
    get spotInstanceType(): string;
    get validUntil(): string;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
}
export interface DataAwsLaunchTemplateInstanceMarketOptions {
}
export declare function dataAwsLaunchTemplateInstanceMarketOptionsToTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptions): any;
export declare function dataAwsLaunchTemplateInstanceMarketOptionsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceMarketOptions): any;
export declare class DataAwsLaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceMarketOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceMarketOptions | undefined);
    get marketType(): string;
    private _spotOptions;
    get spotOptions(): DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceMarketOptionsOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsAcceleratorCountToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsAcceleratorCountToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsMemoryMib {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsMemoryMibToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsMemoryMib): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsMemoryMibToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsMemoryMib): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsMemoryMib | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsMemoryMibList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirementsVcpuCount {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsVcpuCountToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsVcpuCount): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsVcpuCountToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirementsVcpuCount): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirementsVcpuCount | undefined);
    get max(): number;
    get min(): number;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsVcpuCountList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference;
}
export interface DataAwsLaunchTemplateInstanceRequirements {
}
export declare function dataAwsLaunchTemplateInstanceRequirementsToTerraform(struct?: DataAwsLaunchTemplateInstanceRequirements): any;
export declare function dataAwsLaunchTemplateInstanceRequirementsToHclTerraform(struct?: DataAwsLaunchTemplateInstanceRequirements): any;
export declare class DataAwsLaunchTemplateInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateInstanceRequirements | undefined;
    set internalValue(value: DataAwsLaunchTemplateInstanceRequirements | undefined);
    private _acceleratorCount;
    get acceleratorCount(): DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList;
    get acceleratorManufacturers(): string[];
    get acceleratorNames(): string[];
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList;
    get acceleratorTypes(): string[];
    get allowedInstanceTypes(): string[];
    get bareMetal(): string;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList;
    get burstablePerformance(): string;
    get cpuManufacturers(): string[];
    get excludedInstanceTypes(): string[];
    get instanceGenerations(): string[];
    get localStorage(): string;
    get localStorageTypes(): string[];
    get maxSpotPriceAsPercentageOfOptimalOnDemandPrice(): number;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList;
    private _memoryMib;
    get memoryMib(): DataAwsLaunchTemplateInstanceRequirementsMemoryMibList;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList;
    private _networkInterfaceCount;
    get networkInterfaceCount(): DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList;
    get onDemandMaxPricePercentageOverLowestPrice(): number;
    get requireHibernateSupport(): cdktf.IResolvable;
    get spotMaxPricePercentageOverLowestPrice(): number;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList;
    private _vcpuCount;
    get vcpuCount(): DataAwsLaunchTemplateInstanceRequirementsVcpuCountList;
}
export declare class DataAwsLaunchTemplateInstanceRequirementsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateInstanceRequirementsOutputReference;
}
export interface DataAwsLaunchTemplateLicenseSpecification {
}
export declare function dataAwsLaunchTemplateLicenseSpecificationToTerraform(struct?: DataAwsLaunchTemplateLicenseSpecification): any;
export declare function dataAwsLaunchTemplateLicenseSpecificationToHclTerraform(struct?: DataAwsLaunchTemplateLicenseSpecification): any;
export declare class DataAwsLaunchTemplateLicenseSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateLicenseSpecification | undefined;
    set internalValue(value: DataAwsLaunchTemplateLicenseSpecification | undefined);
    get licenseConfigurationArn(): string;
}
export declare class DataAwsLaunchTemplateLicenseSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateLicenseSpecificationOutputReference;
}
export interface DataAwsLaunchTemplateMaintenanceOptions {
}
export declare function dataAwsLaunchTemplateMaintenanceOptionsToTerraform(struct?: DataAwsLaunchTemplateMaintenanceOptions): any;
export declare function dataAwsLaunchTemplateMaintenanceOptionsToHclTerraform(struct?: DataAwsLaunchTemplateMaintenanceOptions): any;
export declare class DataAwsLaunchTemplateMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateMaintenanceOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateMaintenanceOptions | undefined);
    get autoRecovery(): string;
}
export declare class DataAwsLaunchTemplateMaintenanceOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateMaintenanceOptionsOutputReference;
}
export interface DataAwsLaunchTemplateMetadataOptions {
}
export declare function dataAwsLaunchTemplateMetadataOptionsToTerraform(struct?: DataAwsLaunchTemplateMetadataOptions): any;
export declare function dataAwsLaunchTemplateMetadataOptionsToHclTerraform(struct?: DataAwsLaunchTemplateMetadataOptions): any;
export declare class DataAwsLaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateMetadataOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplateMetadataOptions | undefined);
    get httpEndpoint(): string;
    get httpProtocolIpv6(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
    get instanceMetadataTags(): string;
}
export declare class DataAwsLaunchTemplateMetadataOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateMetadataOptionsOutputReference;
}
export interface DataAwsLaunchTemplateMonitoring {
}
export declare function dataAwsLaunchTemplateMonitoringToTerraform(struct?: DataAwsLaunchTemplateMonitoring): any;
export declare function dataAwsLaunchTemplateMonitoringToHclTerraform(struct?: DataAwsLaunchTemplateMonitoring): any;
export declare class DataAwsLaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateMonitoring | undefined;
    set internalValue(value: DataAwsLaunchTemplateMonitoring | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsLaunchTemplateMonitoringList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateMonitoringOutputReference;
}
export interface DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification {
}
export declare function dataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationToTerraform(struct?: DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification): any;
export declare function dataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationToHclTerraform(struct?: DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification): any;
export declare class DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification | undefined;
    set internalValue(value: DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification | undefined);
    get tcpEstablishedTimeout(): number;
    get udpStreamTimeout(): number;
    get udpTimeout(): number;
}
export declare class DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference;
}
export interface DataAwsLaunchTemplateNetworkInterfaces {
}
export declare function dataAwsLaunchTemplateNetworkInterfacesToTerraform(struct?: DataAwsLaunchTemplateNetworkInterfaces): any;
export declare function dataAwsLaunchTemplateNetworkInterfacesToHclTerraform(struct?: DataAwsLaunchTemplateNetworkInterfaces): any;
export declare class DataAwsLaunchTemplateNetworkInterfacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateNetworkInterfaces | undefined;
    set internalValue(value: DataAwsLaunchTemplateNetworkInterfaces | undefined);
    get associateCarrierIpAddress(): string;
    get associatePublicIpAddress(): string;
    private _connectionTrackingSpecification;
    get connectionTrackingSpecification(): DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList;
    get deleteOnTermination(): string;
    get description(): string;
    get deviceIndex(): number;
    get interfaceType(): string;
    get ipv4AddressCount(): number;
    get ipv4Addresses(): string[];
    get ipv4PrefixCount(): number;
    get ipv4Prefixes(): string[];
    get ipv6AddressCount(): number;
    get ipv6Addresses(): string[];
    get ipv6PrefixCount(): number;
    get ipv6Prefixes(): string[];
    get networkCardIndex(): number;
    get networkInterfaceId(): string;
    get primaryIpv6(): string;
    get privateIpAddress(): string;
    get securityGroups(): string[];
    get subnetId(): string;
}
export declare class DataAwsLaunchTemplateNetworkInterfacesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateNetworkInterfacesOutputReference;
}
export interface DataAwsLaunchTemplatePlacement {
}
export declare function dataAwsLaunchTemplatePlacementToTerraform(struct?: DataAwsLaunchTemplatePlacement): any;
export declare function dataAwsLaunchTemplatePlacementToHclTerraform(struct?: DataAwsLaunchTemplatePlacement): any;
export declare class DataAwsLaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplatePlacement | undefined;
    set internalValue(value: DataAwsLaunchTemplatePlacement | undefined);
    get affinity(): string;
    get availabilityZone(): string;
    get groupName(): string;
    get hostId(): string;
    get hostResourceGroupArn(): string;
    get partitionNumber(): number;
    get spreadDomain(): string;
    get tenancy(): string;
}
export declare class DataAwsLaunchTemplatePlacementList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplatePlacementOutputReference;
}
export interface DataAwsLaunchTemplatePrivateDnsNameOptions {
}
export declare function dataAwsLaunchTemplatePrivateDnsNameOptionsToTerraform(struct?: DataAwsLaunchTemplatePrivateDnsNameOptions): any;
export declare function dataAwsLaunchTemplatePrivateDnsNameOptionsToHclTerraform(struct?: DataAwsLaunchTemplatePrivateDnsNameOptions): any;
export declare class DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplatePrivateDnsNameOptions | undefined;
    set internalValue(value: DataAwsLaunchTemplatePrivateDnsNameOptions | undefined);
    get enableResourceNameDnsARecord(): cdktf.IResolvable;
    get enableResourceNameDnsAaaaRecord(): cdktf.IResolvable;
    get hostnameType(): string;
}
export declare class DataAwsLaunchTemplatePrivateDnsNameOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference;
}
export interface DataAwsLaunchTemplateTagSpecifications {
}
export declare function dataAwsLaunchTemplateTagSpecificationsToTerraform(struct?: DataAwsLaunchTemplateTagSpecifications): any;
export declare function dataAwsLaunchTemplateTagSpecificationsToHclTerraform(struct?: DataAwsLaunchTemplateTagSpecifications): any;
export declare class DataAwsLaunchTemplateTagSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateTagSpecifications | undefined;
    set internalValue(value: DataAwsLaunchTemplateTagSpecifications | undefined);
    get resourceType(): string;
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsLaunchTemplateTagSpecificationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchTemplateTagSpecificationsOutputReference;
}
export interface DataAwsLaunchTemplateFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#values DataAwsLaunchTemplate#values}
    */
    readonly values: string[];
}
export declare function dataAwsLaunchTemplateFilterToTerraform(struct?: DataAwsLaunchTemplateFilter | cdktf.IResolvable): any;
export declare function dataAwsLaunchTemplateFilterToHclTerraform(struct?: DataAwsLaunchTemplateFilter | cdktf.IResolvable): any;
export declare class DataAwsLaunchTemplateFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchTemplateFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLaunchTemplateFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsLaunchTemplateFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsLaunchTemplateFilterOutputReference;
}
export interface DataAwsLaunchTemplateTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#read DataAwsLaunchTemplate#read}
    */
    readonly read?: string;
}
export declare function dataAwsLaunchTemplateTimeoutsToTerraform(struct?: DataAwsLaunchTemplateTimeouts | cdktf.IResolvable): any;
export declare function dataAwsLaunchTemplateTimeoutsToHclTerraform(struct?: DataAwsLaunchTemplateTimeouts | cdktf.IResolvable): any;
export declare class DataAwsLaunchTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLaunchTemplateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLaunchTemplateTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template aws_launch_template}
*/
export declare class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_launch_template";
    /**
    * Generates CDKTF code for importing a DataAwsLaunchTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLaunchTemplate to import
    * @param importFromId The id of the existing DataAwsLaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLaunchTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_template aws_launch_template} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchTemplateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLaunchTemplateConfig);
    get arn(): string;
    private _blockDeviceMappings;
    get blockDeviceMappings(): DataAwsLaunchTemplateBlockDeviceMappingsList;
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): DataAwsLaunchTemplateCapacityReservationSpecificationList;
    private _cpuOptions;
    get cpuOptions(): DataAwsLaunchTemplateCpuOptionsList;
    private _creditSpecification;
    get creditSpecification(): DataAwsLaunchTemplateCreditSpecificationList;
    get defaultVersion(): number;
    get description(): string;
    get disableApiStop(): cdktf.IResolvable;
    get disableApiTermination(): cdktf.IResolvable;
    get ebsOptimized(): string;
    private _elasticGpuSpecifications;
    get elasticGpuSpecifications(): DataAwsLaunchTemplateElasticGpuSpecificationsList;
    private _elasticInferenceAccelerator;
    get elasticInferenceAccelerator(): DataAwsLaunchTemplateElasticInferenceAcceleratorList;
    private _enclaveOptions;
    get enclaveOptions(): DataAwsLaunchTemplateEnclaveOptionsList;
    private _hibernationOptions;
    get hibernationOptions(): DataAwsLaunchTemplateHibernationOptionsList;
    private _iamInstanceProfile;
    get iamInstanceProfile(): DataAwsLaunchTemplateIamInstanceProfileList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageId(): string;
    get instanceInitiatedShutdownBehavior(): string;
    private _instanceMarketOptions;
    get instanceMarketOptions(): DataAwsLaunchTemplateInstanceMarketOptionsList;
    private _instanceRequirements;
    get instanceRequirements(): DataAwsLaunchTemplateInstanceRequirementsList;
    get instanceType(): string;
    get kernelId(): string;
    get keyName(): string;
    get latestVersion(): number;
    private _licenseSpecification;
    get licenseSpecification(): DataAwsLaunchTemplateLicenseSpecificationList;
    private _maintenanceOptions;
    get maintenanceOptions(): DataAwsLaunchTemplateMaintenanceOptionsList;
    private _metadataOptions;
    get metadataOptions(): DataAwsLaunchTemplateMetadataOptionsList;
    private _monitoring;
    get monitoring(): DataAwsLaunchTemplateMonitoringList;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _networkInterfaces;
    get networkInterfaces(): DataAwsLaunchTemplateNetworkInterfacesList;
    private _placement;
    get placement(): DataAwsLaunchTemplatePlacementList;
    private _privateDnsNameOptions;
    get privateDnsNameOptions(): DataAwsLaunchTemplatePrivateDnsNameOptionsList;
    get ramDiskId(): string;
    get securityGroupNames(): string[];
    private _tagSpecifications;
    get tagSpecifications(): DataAwsLaunchTemplateTagSpecificationsList;
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
    get userData(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter;
    get filter(): DataAwsLaunchTemplateFilterList;
    putFilter(value: DataAwsLaunchTemplateFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsLaunchTemplateFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsLaunchTemplateTimeoutsOutputReference;
    putTimeouts(value: DataAwsLaunchTemplateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsLaunchTemplateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
