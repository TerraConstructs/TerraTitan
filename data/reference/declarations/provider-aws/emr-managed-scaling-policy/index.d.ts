/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrManagedScalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#cluster_id EmrManagedScalingPolicy#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#id EmrManagedScalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * compute_limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#compute_limits EmrManagedScalingPolicy#compute_limits}
    */
    readonly computeLimits: EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable;
}
export interface EmrManagedScalingPolicyComputeLimits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#maximum_capacity_units EmrManagedScalingPolicy#maximum_capacity_units}
    */
    readonly maximumCapacityUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#maximum_core_capacity_units EmrManagedScalingPolicy#maximum_core_capacity_units}
    */
    readonly maximumCoreCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#maximum_ondemand_capacity_units EmrManagedScalingPolicy#maximum_ondemand_capacity_units}
    */
    readonly maximumOndemandCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#minimum_capacity_units EmrManagedScalingPolicy#minimum_capacity_units}
    */
    readonly minimumCapacityUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#unit_type EmrManagedScalingPolicy#unit_type}
    */
    readonly unitType: string;
}
export declare function emrManagedScalingPolicyComputeLimitsToTerraform(struct?: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable): any;
export declare function emrManagedScalingPolicyComputeLimitsToHclTerraform(struct?: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable): any;
export declare class EmrManagedScalingPolicyComputeLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable | undefined;
    set internalValue(value: EmrManagedScalingPolicyComputeLimits | cdktf.IResolvable | undefined);
    private _maximumCapacityUnits?;
    get maximumCapacityUnits(): number;
    set maximumCapacityUnits(value: number);
    get maximumCapacityUnitsInput(): number | undefined;
    private _maximumCoreCapacityUnits?;
    get maximumCoreCapacityUnits(): number;
    set maximumCoreCapacityUnits(value: number);
    resetMaximumCoreCapacityUnits(): void;
    get maximumCoreCapacityUnitsInput(): number | undefined;
    private _maximumOndemandCapacityUnits?;
    get maximumOndemandCapacityUnits(): number;
    set maximumOndemandCapacityUnits(value: number);
    resetMaximumOndemandCapacityUnits(): void;
    get maximumOndemandCapacityUnitsInput(): number | undefined;
    private _minimumCapacityUnits?;
    get minimumCapacityUnits(): number;
    set minimumCapacityUnits(value: number);
    get minimumCapacityUnitsInput(): number | undefined;
    private _unitType?;
    get unitType(): string;
    set unitType(value: string);
    get unitTypeInput(): string | undefined;
}
export declare class EmrManagedScalingPolicyComputeLimitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrManagedScalingPolicyComputeLimitsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy aws_emr_managed_scaling_policy}
*/
export declare class EmrManagedScalingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_managed_scaling_policy";
    /**
    * Generates CDKTF code for importing a EmrManagedScalingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrManagedScalingPolicy to import
    * @param importFromId The id of the existing EmrManagedScalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrManagedScalingPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_managed_scaling_policy aws_emr_managed_scaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrManagedScalingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EmrManagedScalingPolicyConfig);
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _computeLimits;
    get computeLimits(): EmrManagedScalingPolicyComputeLimitsList;
    putComputeLimits(value: EmrManagedScalingPolicyComputeLimits[] | cdktf.IResolvable): void;
    get computeLimitsInput(): cdktf.IResolvable | EmrManagedScalingPolicyComputeLimits[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
