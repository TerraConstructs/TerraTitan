/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrInstanceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#cluster_id EmrInstanceFleet#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#id EmrInstanceFleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#name EmrInstanceFleet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#target_on_demand_capacity EmrInstanceFleet#target_on_demand_capacity}
    */
    readonly targetOnDemandCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#target_spot_capacity EmrInstanceFleet#target_spot_capacity}
    */
    readonly targetSpotCapacity?: number;
    /**
    * instance_type_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#instance_type_configs EmrInstanceFleet#instance_type_configs}
    */
    readonly instanceTypeConfigs?: EmrInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * launch_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#launch_specifications EmrInstanceFleet#launch_specifications}
    */
    readonly launchSpecifications?: EmrInstanceFleetLaunchSpecifications;
}
export interface EmrInstanceFleetInstanceTypeConfigsConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#classification EmrInstanceFleet#classification}
    */
    readonly classification?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#properties EmrInstanceFleet#properties}
    */
    readonly properties?: {
        [key: string]: string;
    };
}
export declare function emrInstanceFleetInstanceTypeConfigsConfigurationsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare function emrInstanceFleetInstanceTypeConfigsConfigurationsToHclTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable): any;
export declare class EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceFleetInstanceTypeConfigsConfigurations | cdktf.IResolvable | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    resetClassification(): void;
    get classificationInput(): string | undefined;
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
}
export declare class EmrInstanceFleetInstanceTypeConfigsConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceFleetInstanceTypeConfigsConfigurationsOutputReference;
}
export interface EmrInstanceFleetInstanceTypeConfigsEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#iops EmrInstanceFleet#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#size EmrInstanceFleet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#type EmrInstanceFleet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#volumes_per_instance EmrInstanceFleet#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrInstanceFleetInstanceTypeConfigsEbsConfigToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare function emrInstanceFleetInstanceTypeConfigsEbsConfigToHclTerraform(struct?: EmrInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable): any;
export declare class EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceFleetInstanceTypeConfigsEbsConfig | cdktf.IResolvable | undefined);
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
export declare class EmrInstanceFleetInstanceTypeConfigsEbsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceFleetInstanceTypeConfigsEbsConfigOutputReference;
}
export interface EmrInstanceFleetInstanceTypeConfigs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#bid_price EmrInstanceFleet#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#bid_price_as_percentage_of_on_demand_price EmrInstanceFleet#bid_price_as_percentage_of_on_demand_price}
    */
    readonly bidPriceAsPercentageOfOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#instance_type EmrInstanceFleet#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#weighted_capacity EmrInstanceFleet#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#configurations EmrInstanceFleet#configurations}
    */
    readonly configurations?: EmrInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#ebs_config EmrInstanceFleet#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable;
}
export declare function emrInstanceFleetInstanceTypeConfigsToTerraform(struct?: EmrInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare function emrInstanceFleetInstanceTypeConfigsToHclTerraform(struct?: EmrInstanceFleetInstanceTypeConfigs | cdktf.IResolvable): any;
export declare class EmrInstanceFleetInstanceTypeConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceFleetInstanceTypeConfigs | cdktf.IResolvable | undefined);
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string | undefined;
    private _bidPriceAsPercentageOfOnDemandPrice?;
    get bidPriceAsPercentageOfOnDemandPrice(): number;
    set bidPriceAsPercentageOfOnDemandPrice(value: number);
    resetBidPriceAsPercentageOfOnDemandPrice(): void;
    get bidPriceAsPercentageOfOnDemandPriceInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): number;
    set weightedCapacity(value: number);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): number | undefined;
    private _configurations;
    get configurations(): EmrInstanceFleetInstanceTypeConfigsConfigurationsList;
    putConfigurations(value: EmrInstanceFleetInstanceTypeConfigsConfigurations[] | cdktf.IResolvable): void;
    resetConfigurations(): void;
    get configurationsInput(): cdktf.IResolvable | EmrInstanceFleetInstanceTypeConfigsConfigurations[] | undefined;
    private _ebsConfig;
    get ebsConfig(): EmrInstanceFleetInstanceTypeConfigsEbsConfigList;
    putEbsConfig(value: EmrInstanceFleetInstanceTypeConfigsEbsConfig[] | cdktf.IResolvable): void;
    resetEbsConfig(): void;
    get ebsConfigInput(): cdktf.IResolvable | EmrInstanceFleetInstanceTypeConfigsEbsConfig[] | undefined;
}
export declare class EmrInstanceFleetInstanceTypeConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceFleetInstanceTypeConfigsOutputReference;
}
export interface EmrInstanceFleetLaunchSpecificationsOnDemandSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
}
export declare function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare function emrInstanceFleetLaunchSpecificationsOnDemandSpecificationToHclTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable): any;
export declare class EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
}
export declare class EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference;
}
export interface EmrInstanceFleetLaunchSpecificationsSpotSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#allocation_strategy EmrInstanceFleet#allocation_strategy}
    */
    readonly allocationStrategy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#block_duration_minutes EmrInstanceFleet#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#timeout_action EmrInstanceFleet#timeout_action}
    */
    readonly timeoutAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#timeout_duration_minutes EmrInstanceFleet#timeout_duration_minutes}
    */
    readonly timeoutDurationMinutes: number;
}
export declare function emrInstanceFleetLaunchSpecificationsSpotSpecificationToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare function emrInstanceFleetLaunchSpecificationsSpotSpecificationToHclTerraform(struct?: EmrInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable): any;
export declare class EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: EmrInstanceFleetLaunchSpecificationsSpotSpecification | cdktf.IResolvable | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    get allocationStrategyInput(): string | undefined;
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
    private _timeoutAction?;
    get timeoutAction(): string;
    set timeoutAction(value: string);
    get timeoutActionInput(): string | undefined;
    private _timeoutDurationMinutes?;
    get timeoutDurationMinutes(): number;
    set timeoutDurationMinutes(value: number);
    get timeoutDurationMinutesInput(): number | undefined;
}
export declare class EmrInstanceFleetLaunchSpecificationsSpotSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference;
}
export interface EmrInstanceFleetLaunchSpecifications {
    /**
    * on_demand_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#on_demand_specification EmrInstanceFleet#on_demand_specification}
    */
    readonly onDemandSpecification?: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable;
    /**
    * spot_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#spot_specification EmrInstanceFleet#spot_specification}
    */
    readonly spotSpecification?: EmrInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable;
}
export declare function emrInstanceFleetLaunchSpecificationsToTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOutputReference | EmrInstanceFleetLaunchSpecifications): any;
export declare function emrInstanceFleetLaunchSpecificationsToHclTerraform(struct?: EmrInstanceFleetLaunchSpecificationsOutputReference | EmrInstanceFleetLaunchSpecifications): any;
export declare class EmrInstanceFleetLaunchSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrInstanceFleetLaunchSpecifications | undefined;
    set internalValue(value: EmrInstanceFleetLaunchSpecifications | undefined);
    private _onDemandSpecification;
    get onDemandSpecification(): EmrInstanceFleetLaunchSpecificationsOnDemandSpecificationList;
    putOnDemandSpecification(value: EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[] | cdktf.IResolvable): void;
    resetOnDemandSpecification(): void;
    get onDemandSpecificationInput(): cdktf.IResolvable | EmrInstanceFleetLaunchSpecificationsOnDemandSpecification[] | undefined;
    private _spotSpecification;
    get spotSpecification(): EmrInstanceFleetLaunchSpecificationsSpotSpecificationList;
    putSpotSpecification(value: EmrInstanceFleetLaunchSpecificationsSpotSpecification[] | cdktf.IResolvable): void;
    resetSpotSpecification(): void;
    get spotSpecificationInput(): cdktf.IResolvable | EmrInstanceFleetLaunchSpecificationsSpotSpecification[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet aws_emr_instance_fleet}
*/
export declare class EmrInstanceFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_instance_fleet";
    /**
    * Generates CDKTF code for importing a EmrInstanceFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrInstanceFleet to import
    * @param importFromId The id of the existing EmrInstanceFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrInstanceFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_instance_fleet aws_emr_instance_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceFleetConfig
    */
    constructor(scope: Construct, id: string, config: EmrInstanceFleetConfig);
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
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
    get provisionedOnDemandCapacity(): number;
    get provisionedSpotCapacity(): number;
    private _targetOnDemandCapacity?;
    get targetOnDemandCapacity(): number;
    set targetOnDemandCapacity(value: number);
    resetTargetOnDemandCapacity(): void;
    get targetOnDemandCapacityInput(): number | undefined;
    private _targetSpotCapacity?;
    get targetSpotCapacity(): number;
    set targetSpotCapacity(value: number);
    resetTargetSpotCapacity(): void;
    get targetSpotCapacityInput(): number | undefined;
    private _instanceTypeConfigs;
    get instanceTypeConfigs(): EmrInstanceFleetInstanceTypeConfigsList;
    putInstanceTypeConfigs(value: EmrInstanceFleetInstanceTypeConfigs[] | cdktf.IResolvable): void;
    resetInstanceTypeConfigs(): void;
    get instanceTypeConfigsInput(): cdktf.IResolvable | EmrInstanceFleetInstanceTypeConfigs[] | undefined;
    private _launchSpecifications;
    get launchSpecifications(): EmrInstanceFleetLaunchSpecificationsOutputReference;
    putLaunchSpecifications(value: EmrInstanceFleetLaunchSpecifications): void;
    resetLaunchSpecifications(): void;
    get launchSpecificationsInput(): EmrInstanceFleetLaunchSpecifications | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
