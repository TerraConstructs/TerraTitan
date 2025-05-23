/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotFleetRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#allocation_strategy SpotFleetRequest#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#context SpotFleetRequest#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#excess_capacity_termination_policy SpotFleetRequest#excess_capacity_termination_policy}
    */
    readonly excessCapacityTerminationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#fleet_type SpotFleetRequest#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#iam_fleet_role SpotFleetRequest#iam_fleet_role}
    */
    readonly iamFleetRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#id SpotFleetRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_interruption_behaviour SpotFleetRequest#instance_interruption_behaviour}
    */
    readonly instanceInterruptionBehaviour?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_pools_to_use_count SpotFleetRequest#instance_pools_to_use_count}
    */
    readonly instancePoolsToUseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#load_balancers SpotFleetRequest#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#on_demand_allocation_strategy SpotFleetRequest#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#on_demand_max_total_price SpotFleetRequest#on_demand_max_total_price}
    */
    readonly onDemandMaxTotalPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#on_demand_target_capacity SpotFleetRequest#on_demand_target_capacity}
    */
    readonly onDemandTargetCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#replace_unhealthy_instances SpotFleetRequest#replace_unhealthy_instances}
    */
    readonly replaceUnhealthyInstances?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#tags_all SpotFleetRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#target_capacity SpotFleetRequest#target_capacity}
    */
    readonly targetCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#target_capacity_unit_type SpotFleetRequest#target_capacity_unit_type}
    */
    readonly targetCapacityUnitType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#target_group_arns SpotFleetRequest#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#terminate_instances_on_delete SpotFleetRequest#terminate_instances_on_delete}
    */
    readonly terminateInstancesOnDelete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#terminate_instances_with_expiration SpotFleetRequest#terminate_instances_with_expiration}
    */
    readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#valid_from SpotFleetRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#valid_until SpotFleetRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#wait_for_fulfillment SpotFleetRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * launch_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#launch_specification SpotFleetRequest#launch_specification}
    */
    readonly launchSpecification?: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable;
    /**
    * launch_template_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#launch_template_config SpotFleetRequest#launch_template_config}
    */
    readonly launchTemplateConfig?: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * spot_maintenance_strategies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#spot_maintenance_strategies SpotFleetRequest#spot_maintenance_strategies}
    */
    readonly spotMaintenanceStrategies?: SpotFleetRequestSpotMaintenanceStrategies;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#timeouts SpotFleetRequest#timeouts}
    */
    readonly timeouts?: SpotFleetRequestTimeouts;
}
export interface SpotFleetRequestLaunchSpecificationEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#snapshot_id SpotFleetRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationEbsBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationEbsBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationEbsBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationEbsBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecificationEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#device_name SpotFleetRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#virtual_name SpotFleetRequest#virtual_name}
    */
    readonly virtualName: string;
}
export declare function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationEphemeralBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    get virtualNameInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecificationRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#delete_on_termination SpotFleetRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#encrypted SpotFleetRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#iops SpotFleetRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#kms_key_id SpotFleetRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#throughput SpotFleetRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#volume_size SpotFleetRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#volume_type SpotFleetRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotFleetRequestLaunchSpecificationRootBlockDeviceToTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationRootBlockDeviceToHclTerraform(struct?: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecificationRootBlockDevice | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationRootBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationRootBlockDeviceOutputReference;
}
export interface SpotFleetRequestLaunchSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#ami SpotFleetRequest#ami}
    */
    readonly ami: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#associate_public_ip_address SpotFleetRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#ebs_optimized SpotFleetRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#iam_instance_profile SpotFleetRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#iam_instance_profile_arn SpotFleetRequest#iam_instance_profile_arn}
    */
    readonly iamInstanceProfileArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#key_name SpotFleetRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#monitoring SpotFleetRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#placement_group SpotFleetRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#placement_tenancy SpotFleetRequest#placement_tenancy}
    */
    readonly placementTenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#tags SpotFleetRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#user_data SpotFleetRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#vpc_security_group_ids SpotFleetRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#ebs_block_device SpotFleetRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#ephemeral_block_device SpotFleetRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#root_block_device SpotFleetRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable;
}
export declare function spotFleetRequestLaunchSpecificationToTerraform(struct?: SpotFleetRequestLaunchSpecification | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchSpecificationToHclTerraform(struct?: SpotFleetRequestLaunchSpecification | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchSpecification | cdktf.IResolvable | undefined);
    private _ami?;
    get ami(): string;
    set ami(value: string);
    get amiInput(): string | undefined;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean | cdktf.IResolvable;
    set associatePublicIpAddress(value: boolean | cdktf.IResolvable);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | cdktf.IResolvable | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string | undefined;
    private _iamInstanceProfileArn?;
    get iamInstanceProfileArn(): string;
    set iamInstanceProfileArn(value: string);
    resetIamInstanceProfileArn(): void;
    get iamInstanceProfileArnInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _monitoring?;
    get monitoring(): boolean | cdktf.IResolvable;
    set monitoring(value: boolean | cdktf.IResolvable);
    resetMonitoring(): void;
    get monitoringInput(): boolean | cdktf.IResolvable | undefined;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _placementTenancy?;
    get placementTenancy(): string;
    set placementTenancy(value: string);
    resetPlacementTenancy(): void;
    get placementTenancyInput(): string | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _weightedCapacity?;
    get weightedCapacity(): string;
    set weightedCapacity(value: string);
    resetWeightedCapacity(): void;
    get weightedCapacityInput(): string | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): SpotFleetRequestLaunchSpecificationEbsBlockDeviceList;
    putEbsBlockDevice(value: SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): SpotFleetRequestLaunchSpecificationEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationEphemeralBlockDevice[] | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): SpotFleetRequestLaunchSpecificationRootBlockDeviceList;
    putRootBlockDevice(value: SpotFleetRequestLaunchSpecificationRootBlockDevice[] | cdktf.IResolvable): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecificationRootBlockDevice[] | undefined;
}
export declare class SpotFleetRequestLaunchSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchSpecificationOutputReference;
}
export interface SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#id SpotFleetRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#name SpotFleetRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#version SpotFleetRequest#version}
    */
    readonly version?: string;
}
export declare function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare function spotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference | SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): any;
export declare class SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined);
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#max SpotFleetRequest#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#min SpotFleetRequest#min}
    */
    readonly min?: number;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount | undefined);
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
export interface SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#accelerator_manufacturers SpotFleetRequest#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#accelerator_names SpotFleetRequest#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#accelerator_types SpotFleetRequest#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#allowed_instance_types SpotFleetRequest#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#bare_metal SpotFleetRequest#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#burstable_performance SpotFleetRequest#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#cpu_manufacturers SpotFleetRequest#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#excluded_instance_types SpotFleetRequest#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_generations SpotFleetRequest#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#local_storage SpotFleetRequest#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#local_storage_types SpotFleetRequest#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#on_demand_max_price_percentage_over_lowest_price SpotFleetRequest#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#require_hibernate_support SpotFleetRequest#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#spot_max_price_percentage_over_lowest_price SpotFleetRequest#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * accelerator_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#accelerator_count SpotFleetRequest#accelerator_count}
    */
    readonly acceleratorCount?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount;
    /**
    * accelerator_total_memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#accelerator_total_memory_mib SpotFleetRequest#accelerator_total_memory_mib}
    */
    readonly acceleratorTotalMemoryMib?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib;
    /**
    * baseline_ebs_bandwidth_mbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#baseline_ebs_bandwidth_mbps SpotFleetRequest#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps;
    /**
    * memory_gib_per_vcpu block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#memory_gib_per_vcpu SpotFleetRequest#memory_gib_per_vcpu}
    */
    readonly memoryGibPerVcpu?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu;
    /**
    * memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#memory_mib SpotFleetRequest#memory_mib}
    */
    readonly memoryMib?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib;
    /**
    * network_bandwidth_gbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#network_bandwidth_gbps SpotFleetRequest#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps;
    /**
    * network_interface_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#network_interface_count SpotFleetRequest#network_interface_count}
    */
    readonly networkInterfaceCount?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount;
    /**
    * total_local_storage_gb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#total_local_storage_gb SpotFleetRequest#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb;
    /**
    * vcpu_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#vcpu_count SpotFleetRequest#vcpu_count}
    */
    readonly vcpuCount?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference | SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements | undefined);
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
    get acceleratorCount(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCountOutputReference;
    putAcceleratorCount(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount): void;
    resetAcceleratorCount(): void;
    get acceleratorCountInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorCount | undefined;
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
    putAcceleratorTotalMemoryMib(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib): void;
    resetAcceleratorTotalMemoryMib(): void;
    get acceleratorTotalMemoryMibInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
    putBaselineEbsBandwidthMbps(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps): void;
    resetBaselineEbsBandwidthMbps(): void;
    get baselineEbsBandwidthMbpsInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpuOutputReference;
    putMemoryGibPerVcpu(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu): void;
    resetMemoryGibPerVcpu(): void;
    get memoryGibPerVcpuInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryGibPerVcpu | undefined;
    private _memoryMib;
    get memoryMib(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMibOutputReference;
    putMemoryMib(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib): void;
    resetMemoryMib(): void;
    get memoryMibInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsMemoryMib | undefined;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbpsOutputReference;
    putNetworkBandwidthGbps(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps): void;
    resetNetworkBandwidthGbps(): void;
    get networkBandwidthGbpsInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkBandwidthGbps | undefined;
    private _networkInterfaceCount;
    get networkInterfaceCount(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCountOutputReference;
    putNetworkInterfaceCount(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount): void;
    resetNetworkInterfaceCount(): void;
    get networkInterfaceCountInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsNetworkInterfaceCount | undefined;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGbOutputReference;
    putTotalLocalStorageGb(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb): void;
    resetTotalLocalStorageGb(): void;
    get totalLocalStorageGbInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsTotalLocalStorageGb | undefined;
    private _vcpuCount;
    get vcpuCount(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCountOutputReference;
    putVcpuCount(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount): void;
    resetVcpuCount(): void;
    get vcpuCountInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsVcpuCount | undefined;
}
export interface SpotFleetRequestLaunchTemplateConfigOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#availability_zone SpotFleetRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_type SpotFleetRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#priority SpotFleetRequest#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#spot_price SpotFleetRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#subnet_id SpotFleetRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#weighted_capacity SpotFleetRequest#weighted_capacity}
    */
    readonly weightedCapacity?: number;
    /**
    * instance_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#instance_requirements SpotFleetRequest#instance_requirements}
    */
    readonly instanceRequirements?: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements;
}
export declare function spotFleetRequestLaunchTemplateConfigOverridesToTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchTemplateConfigOverridesToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchTemplateConfigOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfigOverrides | cdktf.IResolvable | undefined);
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
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
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
    get instanceRequirements(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirementsOutputReference;
    putInstanceRequirements(value: SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements): void;
    resetInstanceRequirements(): void;
    get instanceRequirementsInput(): SpotFleetRequestLaunchTemplateConfigOverridesInstanceRequirements | undefined;
}
export declare class SpotFleetRequestLaunchTemplateConfigOverridesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchTemplateConfigOverridesOutputReference;
}
export interface SpotFleetRequestLaunchTemplateConfig {
    /**
    * launch_template_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#launch_template_specification SpotFleetRequest#launch_template_specification}
    */
    readonly launchTemplateSpecification: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification;
    /**
    * overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#overrides SpotFleetRequest#overrides}
    */
    readonly overrides?: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable;
}
export declare function spotFleetRequestLaunchTemplateConfigToTerraform(struct?: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable): any;
export declare function spotFleetRequestLaunchTemplateConfigToHclTerraform(struct?: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable): any;
export declare class SpotFleetRequestLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestLaunchTemplateConfig | cdktf.IResolvable | undefined);
    private _launchTemplateSpecification;
    get launchTemplateSpecification(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecificationOutputReference;
    putLaunchTemplateSpecification(value: SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification): void;
    get launchTemplateSpecificationInput(): SpotFleetRequestLaunchTemplateConfigLaunchTemplateSpecification | undefined;
    private _overrides;
    get overrides(): SpotFleetRequestLaunchTemplateConfigOverridesList;
    putOverrides(value: SpotFleetRequestLaunchTemplateConfigOverrides[] | cdktf.IResolvable): void;
    resetOverrides(): void;
    get overridesInput(): cdktf.IResolvable | SpotFleetRequestLaunchTemplateConfigOverrides[] | undefined;
}
export declare class SpotFleetRequestLaunchTemplateConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotFleetRequestLaunchTemplateConfigOutputReference;
}
export interface SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#replacement_strategy SpotFleetRequest#replacement_strategy}
    */
    readonly replacementStrategy?: string;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any;
export declare function spotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceToHclTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference | SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined);
    private _replacementStrategy?;
    get replacementStrategy(): string;
    set replacementStrategy(value: string);
    resetReplacementStrategy(): void;
    get replacementStrategyInput(): string | undefined;
}
export interface SpotFleetRequestSpotMaintenanceStrategies {
    /**
    * capacity_rebalance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#capacity_rebalance SpotFleetRequest#capacity_rebalance}
    */
    readonly capacityRebalance?: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance;
}
export declare function spotFleetRequestSpotMaintenanceStrategiesToTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any;
export declare function spotFleetRequestSpotMaintenanceStrategiesToHclTerraform(struct?: SpotFleetRequestSpotMaintenanceStrategiesOutputReference | SpotFleetRequestSpotMaintenanceStrategies): any;
export declare class SpotFleetRequestSpotMaintenanceStrategiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestSpotMaintenanceStrategies | undefined;
    set internalValue(value: SpotFleetRequestSpotMaintenanceStrategies | undefined);
    private _capacityRebalance;
    get capacityRebalance(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalanceOutputReference;
    putCapacityRebalance(value: SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance): void;
    resetCapacityRebalance(): void;
    get capacityRebalanceInput(): SpotFleetRequestSpotMaintenanceStrategiesCapacityRebalance | undefined;
}
export interface SpotFleetRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#create SpotFleetRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#delete SpotFleetRequest#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#update SpotFleetRequest#update}
    */
    readonly update?: string;
}
export declare function spotFleetRequestTimeoutsToTerraform(struct?: SpotFleetRequestTimeouts | cdktf.IResolvable): any;
export declare function spotFleetRequestTimeoutsToHclTerraform(struct?: SpotFleetRequestTimeouts | cdktf.IResolvable): any;
export declare class SpotFleetRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotFleetRequestTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SpotFleetRequestTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request aws_spot_fleet_request}
*/
export declare class SpotFleetRequest extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_spot_fleet_request";
    /**
    * Generates CDKTF code for importing a SpotFleetRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpotFleetRequest to import
    * @param importFromId The id of the existing SpotFleetRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpotFleetRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_fleet_request aws_spot_fleet_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotFleetRequestConfig
    */
    constructor(scope: Construct, id: string, config: SpotFleetRequestConfig);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string | undefined;
    get clientToken(): string;
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
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string | undefined;
    private _iamFleetRole?;
    get iamFleetRole(): string;
    set iamFleetRole(value: string);
    get iamFleetRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceInterruptionBehaviour?;
    get instanceInterruptionBehaviour(): string;
    set instanceInterruptionBehaviour(value: string);
    resetInstanceInterruptionBehaviour(): void;
    get instanceInterruptionBehaviourInput(): string | undefined;
    private _instancePoolsToUseCount?;
    get instancePoolsToUseCount(): number;
    set instancePoolsToUseCount(value: number);
    resetInstancePoolsToUseCount(): void;
    get instancePoolsToUseCountInput(): number | undefined;
    private _loadBalancers?;
    get loadBalancers(): string[];
    set loadBalancers(value: string[]);
    resetLoadBalancers(): void;
    get loadBalancersInput(): string[] | undefined;
    private _onDemandAllocationStrategy?;
    get onDemandAllocationStrategy(): string;
    set onDemandAllocationStrategy(value: string);
    resetOnDemandAllocationStrategy(): void;
    get onDemandAllocationStrategyInput(): string | undefined;
    private _onDemandMaxTotalPrice?;
    get onDemandMaxTotalPrice(): string;
    set onDemandMaxTotalPrice(value: string);
    resetOnDemandMaxTotalPrice(): void;
    get onDemandMaxTotalPriceInput(): string | undefined;
    private _onDemandTargetCapacity?;
    get onDemandTargetCapacity(): number;
    set onDemandTargetCapacity(value: number);
    resetOnDemandTargetCapacity(): void;
    get onDemandTargetCapacityInput(): number | undefined;
    private _replaceUnhealthyInstances?;
    get replaceUnhealthyInstances(): boolean | cdktf.IResolvable;
    set replaceUnhealthyInstances(value: boolean | cdktf.IResolvable);
    resetReplaceUnhealthyInstances(): void;
    get replaceUnhealthyInstancesInput(): boolean | cdktf.IResolvable | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    get spotRequestState(): string;
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
    private _targetCapacity?;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    get targetCapacityInput(): number | undefined;
    private _targetCapacityUnitType?;
    get targetCapacityUnitType(): string;
    set targetCapacityUnitType(value: string);
    resetTargetCapacityUnitType(): void;
    get targetCapacityUnitTypeInput(): string | undefined;
    private _targetGroupArns?;
    get targetGroupArns(): string[];
    set targetGroupArns(value: string[]);
    resetTargetGroupArns(): void;
    get targetGroupArnsInput(): string[] | undefined;
    private _terminateInstancesOnDelete?;
    get terminateInstancesOnDelete(): string;
    set terminateInstancesOnDelete(value: string);
    resetTerminateInstancesOnDelete(): void;
    get terminateInstancesOnDeleteInput(): string | undefined;
    private _terminateInstancesWithExpiration?;
    get terminateInstancesWithExpiration(): boolean | cdktf.IResolvable;
    set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable);
    resetTerminateInstancesWithExpiration(): void;
    get terminateInstancesWithExpirationInput(): boolean | cdktf.IResolvable | undefined;
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
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean | cdktf.IResolvable;
    set waitForFulfillment(value: boolean | cdktf.IResolvable);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | cdktf.IResolvable | undefined;
    private _launchSpecification;
    get launchSpecification(): SpotFleetRequestLaunchSpecificationList;
    putLaunchSpecification(value: SpotFleetRequestLaunchSpecification[] | cdktf.IResolvable): void;
    resetLaunchSpecification(): void;
    get launchSpecificationInput(): cdktf.IResolvable | SpotFleetRequestLaunchSpecification[] | undefined;
    private _launchTemplateConfig;
    get launchTemplateConfig(): SpotFleetRequestLaunchTemplateConfigList;
    putLaunchTemplateConfig(value: SpotFleetRequestLaunchTemplateConfig[] | cdktf.IResolvable): void;
    resetLaunchTemplateConfig(): void;
    get launchTemplateConfigInput(): cdktf.IResolvable | SpotFleetRequestLaunchTemplateConfig[] | undefined;
    private _spotMaintenanceStrategies;
    get spotMaintenanceStrategies(): SpotFleetRequestSpotMaintenanceStrategiesOutputReference;
    putSpotMaintenanceStrategies(value: SpotFleetRequestSpotMaintenanceStrategies): void;
    resetSpotMaintenanceStrategies(): void;
    get spotMaintenanceStrategiesInput(): SpotFleetRequestSpotMaintenanceStrategies | undefined;
    private _timeouts;
    get timeouts(): SpotFleetRequestTimeoutsOutputReference;
    putTimeouts(value: SpotFleetRequestTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SpotFleetRequestTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
