/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SpotInstanceRequestConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ami SpotInstanceRequest#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#associate_public_ip_address SpotInstanceRequest#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#availability_zone SpotInstanceRequest#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#block_duration_minutes SpotInstanceRequest#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#cpu_core_count SpotInstanceRequest#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#cpu_threads_per_core SpotInstanceRequest#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#disable_api_stop SpotInstanceRequest#disable_api_stop}
    */
    readonly disableApiStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#disable_api_termination SpotInstanceRequest#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ebs_optimized SpotInstanceRequest#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#enable_primary_ipv6 SpotInstanceRequest#enable_primary_ipv6}
    */
    readonly enablePrimaryIpv6?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#get_password_data SpotInstanceRequest#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#hibernation SpotInstanceRequest#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#host_id SpotInstanceRequest#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#host_resource_group_arn SpotInstanceRequest#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#iam_instance_profile SpotInstanceRequest#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#id SpotInstanceRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#instance_initiated_shutdown_behavior SpotInstanceRequest#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#instance_interruption_behavior SpotInstanceRequest#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#instance_type SpotInstanceRequest#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ipv6_address_count SpotInstanceRequest#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ipv6_addresses SpotInstanceRequest#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#key_name SpotInstanceRequest#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#launch_group SpotInstanceRequest#launch_group}
    */
    readonly launchGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#monitoring SpotInstanceRequest#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#placement_group SpotInstanceRequest#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#placement_partition_number SpotInstanceRequest#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#private_ip SpotInstanceRequest#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#secondary_private_ips SpotInstanceRequest#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#security_groups SpotInstanceRequest#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#source_dest_check SpotInstanceRequest#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#spot_price SpotInstanceRequest#spot_price}
    */
    readonly spotPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#spot_type SpotInstanceRequest#spot_type}
    */
    readonly spotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#subnet_id SpotInstanceRequest#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags_all SpotInstanceRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tenancy SpotInstanceRequest#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#user_data SpotInstanceRequest#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#user_data_base64 SpotInstanceRequest#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#user_data_replace_on_change SpotInstanceRequest#user_data_replace_on_change}
    */
    readonly userDataReplaceOnChange?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#valid_from SpotInstanceRequest#valid_from}
    */
    readonly validFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#valid_until SpotInstanceRequest#valid_until}
    */
    readonly validUntil?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#volume_tags SpotInstanceRequest#volume_tags}
    */
    readonly volumeTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#vpc_security_group_ids SpotInstanceRequest#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#wait_for_fulfillment SpotInstanceRequest#wait_for_fulfillment}
    */
    readonly waitForFulfillment?: boolean | cdktf.IResolvable;
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#capacity_reservation_specification SpotInstanceRequest#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: SpotInstanceRequestCapacityReservationSpecification;
    /**
    * cpu_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#cpu_options SpotInstanceRequest#cpu_options}
    */
    readonly cpuOptions?: SpotInstanceRequestCpuOptions;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#credit_specification SpotInstanceRequest#credit_specification}
    */
    readonly creditSpecification?: SpotInstanceRequestCreditSpecification;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ebs_block_device SpotInstanceRequest#ebs_block_device}
    */
    readonly ebsBlockDevice?: SpotInstanceRequestEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#enclave_options SpotInstanceRequest#enclave_options}
    */
    readonly enclaveOptions?: SpotInstanceRequestEnclaveOptions;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#ephemeral_block_device SpotInstanceRequest#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: SpotInstanceRequestEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#launch_template SpotInstanceRequest#launch_template}
    */
    readonly launchTemplate?: SpotInstanceRequestLaunchTemplate;
    /**
    * maintenance_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#maintenance_options SpotInstanceRequest#maintenance_options}
    */
    readonly maintenanceOptions?: SpotInstanceRequestMaintenanceOptions;
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#metadata_options SpotInstanceRequest#metadata_options}
    */
    readonly metadataOptions?: SpotInstanceRequestMetadataOptions;
    /**
    * network_interface block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#network_interface SpotInstanceRequest#network_interface}
    */
    readonly networkInterface?: SpotInstanceRequestNetworkInterface[] | cdktf.IResolvable;
    /**
    * private_dns_name_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#private_dns_name_options SpotInstanceRequest#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: SpotInstanceRequestPrivateDnsNameOptions;
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#root_block_device SpotInstanceRequest#root_block_device}
    */
    readonly rootBlockDevice?: SpotInstanceRequestRootBlockDevice;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#timeouts SpotInstanceRequest#timeouts}
    */
    readonly timeouts?: SpotInstanceRequestTimeouts;
}
export interface SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#capacity_reservation_id SpotInstanceRequest#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#capacity_reservation_resource_group_arn SpotInstanceRequest#capacity_reservation_resource_group_arn}
    */
    readonly capacityReservationResourceGroupArn?: string;
}
export declare function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference | SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): any;
export declare function spotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference | SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined);
    private _capacityReservationId?;
    get capacityReservationId(): string;
    set capacityReservationId(value: string);
    resetCapacityReservationId(): void;
    get capacityReservationIdInput(): string | undefined;
    private _capacityReservationResourceGroupArn?;
    get capacityReservationResourceGroupArn(): string;
    set capacityReservationResourceGroupArn(value: string);
    resetCapacityReservationResourceGroupArn(): void;
    get capacityReservationResourceGroupArnInput(): string | undefined;
}
export interface SpotInstanceRequestCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#capacity_reservation_preference SpotInstanceRequest#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#capacity_reservation_target SpotInstanceRequest#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function spotInstanceRequestCapacityReservationSpecificationToTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationOutputReference | SpotInstanceRequestCapacityReservationSpecification): any;
export declare function spotInstanceRequestCapacityReservationSpecificationToHclTerraform(struct?: SpotInstanceRequestCapacityReservationSpecificationOutputReference | SpotInstanceRequestCapacityReservationSpecification): any;
export declare class SpotInstanceRequestCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestCapacityReservationSpecification | undefined;
    set internalValue(value: SpotInstanceRequestCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string | undefined;
    private _capacityReservationTarget;
    get capacityReservationTarget(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): SpotInstanceRequestCapacityReservationSpecificationCapacityReservationTarget | undefined;
}
export interface SpotInstanceRequestCpuOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#amd_sev_snp SpotInstanceRequest#amd_sev_snp}
    */
    readonly amdSevSnp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#core_count SpotInstanceRequest#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#threads_per_core SpotInstanceRequest#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export declare function spotInstanceRequestCpuOptionsToTerraform(struct?: SpotInstanceRequestCpuOptionsOutputReference | SpotInstanceRequestCpuOptions): any;
export declare function spotInstanceRequestCpuOptionsToHclTerraform(struct?: SpotInstanceRequestCpuOptionsOutputReference | SpotInstanceRequestCpuOptions): any;
export declare class SpotInstanceRequestCpuOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestCpuOptions | undefined;
    set internalValue(value: SpotInstanceRequestCpuOptions | undefined);
    private _amdSevSnp?;
    get amdSevSnp(): string;
    set amdSevSnp(value: string);
    resetAmdSevSnp(): void;
    get amdSevSnpInput(): string | undefined;
    private _coreCount?;
    get coreCount(): number;
    set coreCount(value: number);
    resetCoreCount(): void;
    get coreCountInput(): number | undefined;
    private _threadsPerCore?;
    get threadsPerCore(): number;
    set threadsPerCore(value: number);
    resetThreadsPerCore(): void;
    get threadsPerCoreInput(): number | undefined;
}
export interface SpotInstanceRequestCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#cpu_credits SpotInstanceRequest#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function spotInstanceRequestCreditSpecificationToTerraform(struct?: SpotInstanceRequestCreditSpecificationOutputReference | SpotInstanceRequestCreditSpecification): any;
export declare function spotInstanceRequestCreditSpecificationToHclTerraform(struct?: SpotInstanceRequestCreditSpecificationOutputReference | SpotInstanceRequestCreditSpecification): any;
export declare class SpotInstanceRequestCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestCreditSpecification | undefined;
    set internalValue(value: SpotInstanceRequestCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string | undefined;
}
export interface SpotInstanceRequestEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#snapshot_id SpotInstanceRequest#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags_all SpotInstanceRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotInstanceRequestEbsBlockDeviceToTerraform(struct?: SpotInstanceRequestEbsBlockDevice | cdktf.IResolvable): any;
export declare function spotInstanceRequestEbsBlockDeviceToHclTerraform(struct?: SpotInstanceRequestEbsBlockDevice | cdktf.IResolvable): any;
export declare class SpotInstanceRequestEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotInstanceRequestEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotInstanceRequestEbsBlockDevice | cdktf.IResolvable | undefined);
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
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    get volumeId(): string;
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
export declare class SpotInstanceRequestEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotInstanceRequestEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotInstanceRequestEbsBlockDeviceOutputReference;
}
export interface SpotInstanceRequestEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#enabled SpotInstanceRequest#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function spotInstanceRequestEnclaveOptionsToTerraform(struct?: SpotInstanceRequestEnclaveOptionsOutputReference | SpotInstanceRequestEnclaveOptions): any;
export declare function spotInstanceRequestEnclaveOptionsToHclTerraform(struct?: SpotInstanceRequestEnclaveOptionsOutputReference | SpotInstanceRequestEnclaveOptions): any;
export declare class SpotInstanceRequestEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestEnclaveOptions | undefined;
    set internalValue(value: SpotInstanceRequestEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SpotInstanceRequestEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#device_name SpotInstanceRequest#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#no_device SpotInstanceRequest#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#virtual_name SpotInstanceRequest#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function spotInstanceRequestEphemeralBlockDeviceToTerraform(struct?: SpotInstanceRequestEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function spotInstanceRequestEphemeralBlockDeviceToHclTerraform(struct?: SpotInstanceRequestEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class SpotInstanceRequestEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotInstanceRequestEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: SpotInstanceRequestEphemeralBlockDevice | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _noDevice?;
    get noDevice(): boolean | cdktf.IResolvable;
    set noDevice(value: boolean | cdktf.IResolvable);
    resetNoDevice(): void;
    get noDeviceInput(): boolean | cdktf.IResolvable | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    resetVirtualName(): void;
    get virtualNameInput(): string | undefined;
}
export declare class SpotInstanceRequestEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotInstanceRequestEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotInstanceRequestEphemeralBlockDeviceOutputReference;
}
export interface SpotInstanceRequestLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#id SpotInstanceRequest#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#name SpotInstanceRequest#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#version SpotInstanceRequest#version}
    */
    readonly version?: string;
}
export declare function spotInstanceRequestLaunchTemplateToTerraform(struct?: SpotInstanceRequestLaunchTemplateOutputReference | SpotInstanceRequestLaunchTemplate): any;
export declare function spotInstanceRequestLaunchTemplateToHclTerraform(struct?: SpotInstanceRequestLaunchTemplateOutputReference | SpotInstanceRequestLaunchTemplate): any;
export declare class SpotInstanceRequestLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestLaunchTemplate | undefined;
    set internalValue(value: SpotInstanceRequestLaunchTemplate | undefined);
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
export interface SpotInstanceRequestMaintenanceOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#auto_recovery SpotInstanceRequest#auto_recovery}
    */
    readonly autoRecovery?: string;
}
export declare function spotInstanceRequestMaintenanceOptionsToTerraform(struct?: SpotInstanceRequestMaintenanceOptionsOutputReference | SpotInstanceRequestMaintenanceOptions): any;
export declare function spotInstanceRequestMaintenanceOptionsToHclTerraform(struct?: SpotInstanceRequestMaintenanceOptionsOutputReference | SpotInstanceRequestMaintenanceOptions): any;
export declare class SpotInstanceRequestMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestMaintenanceOptions | undefined;
    set internalValue(value: SpotInstanceRequestMaintenanceOptions | undefined);
    private _autoRecovery?;
    get autoRecovery(): string;
    set autoRecovery(value: string);
    resetAutoRecovery(): void;
    get autoRecoveryInput(): string | undefined;
}
export interface SpotInstanceRequestMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#http_endpoint SpotInstanceRequest#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#http_protocol_ipv6 SpotInstanceRequest#http_protocol_ipv6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#http_put_response_hop_limit SpotInstanceRequest#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#http_tokens SpotInstanceRequest#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#instance_metadata_tags SpotInstanceRequest#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
export declare function spotInstanceRequestMetadataOptionsToTerraform(struct?: SpotInstanceRequestMetadataOptionsOutputReference | SpotInstanceRequestMetadataOptions): any;
export declare function spotInstanceRequestMetadataOptionsToHclTerraform(struct?: SpotInstanceRequestMetadataOptionsOutputReference | SpotInstanceRequestMetadataOptions): any;
export declare class SpotInstanceRequestMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestMetadataOptions | undefined;
    set internalValue(value: SpotInstanceRequestMetadataOptions | undefined);
    private _httpEndpoint?;
    get httpEndpoint(): string;
    set httpEndpoint(value: string);
    resetHttpEndpoint(): void;
    get httpEndpointInput(): string | undefined;
    private _httpProtocolIpv6?;
    get httpProtocolIpv6(): string;
    set httpProtocolIpv6(value: string);
    resetHttpProtocolIpv6(): void;
    get httpProtocolIpv6Input(): string | undefined;
    private _httpPutResponseHopLimit?;
    get httpPutResponseHopLimit(): number;
    set httpPutResponseHopLimit(value: number);
    resetHttpPutResponseHopLimit(): void;
    get httpPutResponseHopLimitInput(): number | undefined;
    private _httpTokens?;
    get httpTokens(): string;
    set httpTokens(value: string);
    resetHttpTokens(): void;
    get httpTokensInput(): string | undefined;
    private _instanceMetadataTags?;
    get instanceMetadataTags(): string;
    set instanceMetadataTags(value: string);
    resetInstanceMetadataTags(): void;
    get instanceMetadataTagsInput(): string | undefined;
}
export interface SpotInstanceRequestNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#device_index SpotInstanceRequest#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#network_card_index SpotInstanceRequest#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#network_interface_id SpotInstanceRequest#network_interface_id}
    */
    readonly networkInterfaceId: string;
}
export declare function spotInstanceRequestNetworkInterfaceToTerraform(struct?: SpotInstanceRequestNetworkInterface | cdktf.IResolvable): any;
export declare function spotInstanceRequestNetworkInterfaceToHclTerraform(struct?: SpotInstanceRequestNetworkInterface | cdktf.IResolvable): any;
export declare class SpotInstanceRequestNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SpotInstanceRequestNetworkInterface | cdktf.IResolvable | undefined;
    set internalValue(value: SpotInstanceRequestNetworkInterface | cdktf.IResolvable | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _deviceIndex?;
    get deviceIndex(): number;
    set deviceIndex(value: number);
    get deviceIndexInput(): number | undefined;
    private _networkCardIndex?;
    get networkCardIndex(): number;
    set networkCardIndex(value: number);
    resetNetworkCardIndex(): void;
    get networkCardIndexInput(): number | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string | undefined;
}
export declare class SpotInstanceRequestNetworkInterfaceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SpotInstanceRequestNetworkInterface[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SpotInstanceRequestNetworkInterfaceOutputReference;
}
export interface SpotInstanceRequestPrivateDnsNameOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#enable_resource_name_dns_a_record SpotInstanceRequest#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#enable_resource_name_dns_aaaa_record SpotInstanceRequest#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#hostname_type SpotInstanceRequest#hostname_type}
    */
    readonly hostnameType?: string;
}
export declare function spotInstanceRequestPrivateDnsNameOptionsToTerraform(struct?: SpotInstanceRequestPrivateDnsNameOptionsOutputReference | SpotInstanceRequestPrivateDnsNameOptions): any;
export declare function spotInstanceRequestPrivateDnsNameOptionsToHclTerraform(struct?: SpotInstanceRequestPrivateDnsNameOptionsOutputReference | SpotInstanceRequestPrivateDnsNameOptions): any;
export declare class SpotInstanceRequestPrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestPrivateDnsNameOptions | undefined;
    set internalValue(value: SpotInstanceRequestPrivateDnsNameOptions | undefined);
    private _enableResourceNameDnsARecord?;
    get enableResourceNameDnsARecord(): boolean | cdktf.IResolvable;
    set enableResourceNameDnsARecord(value: boolean | cdktf.IResolvable);
    resetEnableResourceNameDnsARecord(): void;
    get enableResourceNameDnsARecordInput(): boolean | cdktf.IResolvable | undefined;
    private _enableResourceNameDnsAaaaRecord?;
    get enableResourceNameDnsAaaaRecord(): boolean | cdktf.IResolvable;
    set enableResourceNameDnsAaaaRecord(value: boolean | cdktf.IResolvable);
    resetEnableResourceNameDnsAaaaRecord(): void;
    get enableResourceNameDnsAaaaRecordInput(): boolean | cdktf.IResolvable | undefined;
    private _hostnameType?;
    get hostnameType(): string;
    set hostnameType(value: string);
    resetHostnameType(): void;
    get hostnameTypeInput(): string | undefined;
}
export interface SpotInstanceRequestRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#delete_on_termination SpotInstanceRequest#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#encrypted SpotInstanceRequest#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#iops SpotInstanceRequest#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#kms_key_id SpotInstanceRequest#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags SpotInstanceRequest#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#tags_all SpotInstanceRequest#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#throughput SpotInstanceRequest#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#volume_size SpotInstanceRequest#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#volume_type SpotInstanceRequest#volume_type}
    */
    readonly volumeType?: string;
}
export declare function spotInstanceRequestRootBlockDeviceToTerraform(struct?: SpotInstanceRequestRootBlockDeviceOutputReference | SpotInstanceRequestRootBlockDevice): any;
export declare function spotInstanceRequestRootBlockDeviceToHclTerraform(struct?: SpotInstanceRequestRootBlockDeviceOutputReference | SpotInstanceRequestRootBlockDevice): any;
export declare class SpotInstanceRequestRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestRootBlockDevice | undefined;
    set internalValue(value: SpotInstanceRequestRootBlockDevice | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): boolean | cdktf.IResolvable;
    set deleteOnTermination(value: boolean | cdktf.IResolvable);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): boolean | cdktf.IResolvable | undefined;
    get deviceName(): string;
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
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    get volumeId(): string;
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
export interface SpotInstanceRequestTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#create SpotInstanceRequest#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#delete SpotInstanceRequest#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#read SpotInstanceRequest#read}
    */
    readonly read?: string;
}
export declare function spotInstanceRequestTimeoutsToTerraform(struct?: SpotInstanceRequestTimeouts | cdktf.IResolvable): any;
export declare function spotInstanceRequestTimeoutsToHclTerraform(struct?: SpotInstanceRequestTimeouts | cdktf.IResolvable): any;
export declare class SpotInstanceRequestTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SpotInstanceRequestTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SpotInstanceRequestTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request aws_spot_instance_request}
*/
export declare class SpotInstanceRequest extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_spot_instance_request";
    /**
    * Generates CDKTF code for importing a SpotInstanceRequest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SpotInstanceRequest to import
    * @param importFromId The id of the existing SpotInstanceRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SpotInstanceRequest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/spot_instance_request aws_spot_instance_request} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SpotInstanceRequestConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SpotInstanceRequestConfig);
    private _ami?;
    get ami(): string;
    set ami(value: string);
    resetAmi(): void;
    get amiInput(): string | undefined;
    get arn(): string;
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
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
    private _cpuCoreCount?;
    get cpuCoreCount(): number;
    set cpuCoreCount(value: number);
    resetCpuCoreCount(): void;
    get cpuCoreCountInput(): number | undefined;
    private _cpuThreadsPerCore?;
    get cpuThreadsPerCore(): number;
    set cpuThreadsPerCore(value: number);
    resetCpuThreadsPerCore(): void;
    get cpuThreadsPerCoreInput(): number | undefined;
    private _disableApiStop?;
    get disableApiStop(): boolean | cdktf.IResolvable;
    set disableApiStop(value: boolean | cdktf.IResolvable);
    resetDisableApiStop(): void;
    get disableApiStopInput(): boolean | cdktf.IResolvable | undefined;
    private _disableApiTermination?;
    get disableApiTermination(): boolean | cdktf.IResolvable;
    set disableApiTermination(value: boolean | cdktf.IResolvable);
    resetDisableApiTermination(): void;
    get disableApiTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _enablePrimaryIpv6?;
    get enablePrimaryIpv6(): boolean | cdktf.IResolvable;
    set enablePrimaryIpv6(value: boolean | cdktf.IResolvable);
    resetEnablePrimaryIpv6(): void;
    get enablePrimaryIpv6Input(): boolean | cdktf.IResolvable | undefined;
    private _getPasswordData?;
    get fetchPasswordData(): boolean | cdktf.IResolvable;
    set fetchPasswordData(value: boolean | cdktf.IResolvable);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | cdktf.IResolvable | undefined;
    private _hibernation?;
    get hibernation(): boolean | cdktf.IResolvable;
    set hibernation(value: boolean | cdktf.IResolvable);
    resetHibernation(): void;
    get hibernationInput(): boolean | cdktf.IResolvable | undefined;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string | undefined;
    private _hostResourceGroupArn?;
    get hostResourceGroupArn(): string;
    set hostResourceGroupArn(value: string);
    resetHostResourceGroupArn(): void;
    get hostResourceGroupArnInput(): string | undefined;
    private _iamInstanceProfile?;
    get iamInstanceProfile(): string;
    set iamInstanceProfile(value: string);
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string | undefined;
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string | undefined;
    get instanceState(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _ipv6AddressCount?;
    get ipv6AddressCount(): number;
    set ipv6AddressCount(value: number);
    resetIpv6AddressCount(): void;
    get ipv6AddressCountInput(): number | undefined;
    private _ipv6Addresses?;
    get ipv6Addresses(): string[];
    set ipv6Addresses(value: string[]);
    resetIpv6Addresses(): void;
    get ipv6AddressesInput(): string[] | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _launchGroup?;
    get launchGroup(): string;
    set launchGroup(value: string);
    resetLaunchGroup(): void;
    get launchGroupInput(): string | undefined;
    private _monitoring?;
    get monitoring(): boolean | cdktf.IResolvable;
    set monitoring(value: boolean | cdktf.IResolvable);
    resetMonitoring(): void;
    get monitoringInput(): boolean | cdktf.IResolvable | undefined;
    get outpostArn(): string;
    get passwordData(): string;
    private _placementGroup?;
    get placementGroup(): string;
    set placementGroup(value: string);
    resetPlacementGroup(): void;
    get placementGroupInput(): string | undefined;
    private _placementPartitionNumber?;
    get placementPartitionNumber(): number;
    set placementPartitionNumber(value: number);
    resetPlacementPartitionNumber(): void;
    get placementPartitionNumberInput(): number | undefined;
    get primaryNetworkInterfaceId(): string;
    get privateDns(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    get publicDns(): string;
    get publicIp(): string;
    private _secondaryPrivateIps?;
    get secondaryPrivateIps(): string[];
    set secondaryPrivateIps(value: string[]);
    resetSecondaryPrivateIps(): void;
    get secondaryPrivateIpsInput(): string[] | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceDestCheck?;
    get sourceDestCheck(): boolean | cdktf.IResolvable;
    set sourceDestCheck(value: boolean | cdktf.IResolvable);
    resetSourceDestCheck(): void;
    get sourceDestCheckInput(): boolean | cdktf.IResolvable | undefined;
    get spotBidStatus(): string;
    get spotInstanceId(): string;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
    get spotRequestState(): string;
    private _spotType?;
    get spotType(): string;
    set spotType(value: string);
    resetSpotType(): void;
    get spotTypeInput(): string | undefined;
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
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    private _userDataBase64?;
    get userDataBase64(): string;
    set userDataBase64(value: string);
    resetUserDataBase64(): void;
    get userDataBase64Input(): string | undefined;
    private _userDataReplaceOnChange?;
    get userDataReplaceOnChange(): boolean | cdktf.IResolvable;
    set userDataReplaceOnChange(value: boolean | cdktf.IResolvable);
    resetUserDataReplaceOnChange(): void;
    get userDataReplaceOnChangeInput(): boolean | cdktf.IResolvable | undefined;
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
    private _volumeTags?;
    get volumeTags(): {
        [key: string]: string;
    };
    set volumeTags(value: {
        [key: string]: string;
    });
    resetVolumeTags(): void;
    get volumeTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _waitForFulfillment?;
    get waitForFulfillment(): boolean | cdktf.IResolvable;
    set waitForFulfillment(value: boolean | cdktf.IResolvable);
    resetWaitForFulfillment(): void;
    get waitForFulfillmentInput(): boolean | cdktf.IResolvable | undefined;
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): SpotInstanceRequestCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: SpotInstanceRequestCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): SpotInstanceRequestCapacityReservationSpecification | undefined;
    private _cpuOptions;
    get cpuOptions(): SpotInstanceRequestCpuOptionsOutputReference;
    putCpuOptions(value: SpotInstanceRequestCpuOptions): void;
    resetCpuOptions(): void;
    get cpuOptionsInput(): SpotInstanceRequestCpuOptions | undefined;
    private _creditSpecification;
    get creditSpecification(): SpotInstanceRequestCreditSpecificationOutputReference;
    putCreditSpecification(value: SpotInstanceRequestCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): SpotInstanceRequestCreditSpecification | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): SpotInstanceRequestEbsBlockDeviceList;
    putEbsBlockDevice(value: SpotInstanceRequestEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | SpotInstanceRequestEbsBlockDevice[] | undefined;
    private _enclaveOptions;
    get enclaveOptions(): SpotInstanceRequestEnclaveOptionsOutputReference;
    putEnclaveOptions(value: SpotInstanceRequestEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): SpotInstanceRequestEnclaveOptions | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): SpotInstanceRequestEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: SpotInstanceRequestEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | SpotInstanceRequestEphemeralBlockDevice[] | undefined;
    private _launchTemplate;
    get launchTemplate(): SpotInstanceRequestLaunchTemplateOutputReference;
    putLaunchTemplate(value: SpotInstanceRequestLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): SpotInstanceRequestLaunchTemplate | undefined;
    private _maintenanceOptions;
    get maintenanceOptions(): SpotInstanceRequestMaintenanceOptionsOutputReference;
    putMaintenanceOptions(value: SpotInstanceRequestMaintenanceOptions): void;
    resetMaintenanceOptions(): void;
    get maintenanceOptionsInput(): SpotInstanceRequestMaintenanceOptions | undefined;
    private _metadataOptions;
    get metadataOptions(): SpotInstanceRequestMetadataOptionsOutputReference;
    putMetadataOptions(value: SpotInstanceRequestMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): SpotInstanceRequestMetadataOptions | undefined;
    private _networkInterface;
    get networkInterface(): SpotInstanceRequestNetworkInterfaceList;
    putNetworkInterface(value: SpotInstanceRequestNetworkInterface[] | cdktf.IResolvable): void;
    resetNetworkInterface(): void;
    get networkInterfaceInput(): cdktf.IResolvable | SpotInstanceRequestNetworkInterface[] | undefined;
    private _privateDnsNameOptions;
    get privateDnsNameOptions(): SpotInstanceRequestPrivateDnsNameOptionsOutputReference;
    putPrivateDnsNameOptions(value: SpotInstanceRequestPrivateDnsNameOptions): void;
    resetPrivateDnsNameOptions(): void;
    get privateDnsNameOptionsInput(): SpotInstanceRequestPrivateDnsNameOptions | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): SpotInstanceRequestRootBlockDeviceOutputReference;
    putRootBlockDevice(value: SpotInstanceRequestRootBlockDevice): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): SpotInstanceRequestRootBlockDevice | undefined;
    private _timeouts;
    get timeouts(): SpotInstanceRequestTimeoutsOutputReference;
    putTimeouts(value: SpotInstanceRequestTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SpotInstanceRequestTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
