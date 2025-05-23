/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrInstanceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#ebs_config EmrInstanceGroup#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceGroupEbsConfig[] | cdktf.IResolvable;
}
export interface EmrInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrInstanceGroupEbsConfigToTerraform(struct?: EmrInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare function emrInstanceGroupEbsConfigToHclTerraform(struct?: EmrInstanceGroupEbsConfig | cdktf.IResolvable): any;
export declare class EmrInstanceGroupEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceGroupEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceGroupEbsConfig | cdktf.IResolvable | undefined);
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _volumesPerInstance?;
    get volumesPerInstance(): number;
    set volumesPerInstance(value: number);
    resetVolumesPerInstance(): void;
    get volumesPerInstanceInput(): number | undefined;
}
export declare class EmrInstanceGroupEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceGroupEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceGroupEbsConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group aws_emr_instance_group}
*/
export declare class EmrInstanceGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_instance_group";
    /**
    * Generates CDKTF code for importing a EmrInstanceGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrInstanceGroup to import
    * @param importFromId The id of the existing EmrInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrInstanceGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_group aws_emr_instance_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceGroupConfig
    */
    constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig);
    private _autoscalingPolicy?;
    get autoscalingPolicy(): string;
    set autoscalingPolicy(value: string);
    resetAutoscalingPolicy(): void;
    get autoscalingPolicyInput(): string | undefined;
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
    private _configurationsJson?;
    get configurationsJson(): string;
    set configurationsJson(value: string);
    resetConfigurationsJson(): void;
    get configurationsJsonInput(): string | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get runningInstanceCount(): number;
    get status(): string;
    private _ebsConfig;
    get ebsConfig(): EmrInstanceGroupEbsConfigList;
    putEbsConfig(value: EmrInstanceGroupEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrInstanceGroupEbsConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
