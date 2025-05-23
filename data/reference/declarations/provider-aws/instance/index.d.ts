/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface InstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ami Instance#ami}
    */
    readonly ami?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#associate_public_ip_address Instance#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#availability_zone Instance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#cpu_core_count Instance#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#cpu_threads_per_core Instance#cpu_threads_per_core}
    */
    readonly cpuThreadsPerCore?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#disable_api_stop Instance#disable_api_stop}
    */
    readonly disableApiStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#disable_api_termination Instance#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ebs_optimized Instance#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#enable_primary_ipv6 Instance#enable_primary_ipv6}
    */
    readonly enablePrimaryIpv6?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#get_password_data Instance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#hibernation Instance#hibernation}
    */
    readonly hibernation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#host_id Instance#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#host_resource_group_arn Instance#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#iam_instance_profile Instance#iam_instance_profile}
    */
    readonly iamInstanceProfile?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#id Instance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#instance_initiated_shutdown_behavior Instance#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#instance_type Instance#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ipv6_address_count Instance#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ipv6_addresses Instance#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#key_name Instance#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#monitoring Instance#monitoring}
    */
    readonly monitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#placement_group Instance#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#placement_partition_number Instance#placement_partition_number}
    */
    readonly placementPartitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#private_ip Instance#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#secondary_private_ips Instance#secondary_private_ips}
    */
    readonly secondaryPrivateIps?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#security_groups Instance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#source_dest_check Instance#source_dest_check}
    */
    readonly sourceDestCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#subnet_id Instance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags_all Instance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tenancy Instance#tenancy}
    */
    readonly tenancy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#user_data Instance#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#user_data_base64 Instance#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#user_data_replace_on_change Instance#user_data_replace_on_change}
    */
    readonly userDataReplaceOnChange?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#volume_tags Instance#volume_tags}
    */
    readonly volumeTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#vpc_security_group_ids Instance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#capacity_reservation_specification Instance#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: InstanceCapacityReservationSpecification;
    /**
    * cpu_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#cpu_options Instance#cpu_options}
    */
    readonly cpuOptions?: InstanceCpuOptions;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#credit_specification Instance#credit_specification}
    */
    readonly creditSpecification?: InstanceCreditSpecification;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ebs_block_device Instance#ebs_block_device}
    */
    readonly ebsBlockDevice?: InstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#enclave_options Instance#enclave_options}
    */
    readonly enclaveOptions?: InstanceEnclaveOptions;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#ephemeral_block_device Instance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: InstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * instance_market_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#instance_market_options Instance#instance_market_options}
    */
    readonly instanceMarketOptions?: InstanceInstanceMarketOptions;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#launch_template Instance#launch_template}
    */
    readonly launchTemplate?: InstanceLaunchTemplate;
    /**
    * maintenance_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#maintenance_options Instance#maintenance_options}
    */
    readonly maintenanceOptions?: InstanceMaintenanceOptions;
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#metadata_options Instance#metadata_options}
    */
    readonly metadataOptions?: InstanceMetadataOptions;
    /**
    * network_interface block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#network_interface Instance#network_interface}
    */
    readonly networkInterface?: InstanceNetworkInterface[] | cdktf.IResolvable;
    /**
    * private_dns_name_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#private_dns_name_options Instance#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: InstancePrivateDnsNameOptions;
    /**
    * root_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#root_block_device Instance#root_block_device}
    */
    readonly rootBlockDevice?: InstanceRootBlockDevice;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#timeouts Instance#timeouts}
    */
    readonly timeouts?: InstanceTimeouts;
}
export interface InstanceCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#capacity_reservation_id Instance#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#capacity_reservation_resource_group_arn Instance#capacity_reservation_resource_group_arn}
    */
    readonly capacityReservationResourceGroupArn?: string;
}
export declare function instanceCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference | InstanceCapacityReservationSpecificationCapacityReservationTarget): any;
export declare function instanceCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference | InstanceCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined);
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
export interface InstanceCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#capacity_reservation_preference Instance#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#capacity_reservation_target Instance#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: InstanceCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function instanceCapacityReservationSpecificationToTerraform(struct?: InstanceCapacityReservationSpecificationOutputReference | InstanceCapacityReservationSpecification): any;
export declare function instanceCapacityReservationSpecificationToHclTerraform(struct?: InstanceCapacityReservationSpecificationOutputReference | InstanceCapacityReservationSpecification): any;
export declare class InstanceCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceCapacityReservationSpecification | undefined;
    set internalValue(value: InstanceCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string | undefined;
    private _capacityReservationTarget;
    get capacityReservationTarget(): InstanceCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: InstanceCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): InstanceCapacityReservationSpecificationCapacityReservationTarget | undefined;
}
export interface InstanceCpuOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#amd_sev_snp Instance#amd_sev_snp}
    */
    readonly amdSevSnp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#core_count Instance#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#threads_per_core Instance#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export declare function instanceCpuOptionsToTerraform(struct?: InstanceCpuOptionsOutputReference | InstanceCpuOptions): any;
export declare function instanceCpuOptionsToHclTerraform(struct?: InstanceCpuOptionsOutputReference | InstanceCpuOptions): any;
export declare class InstanceCpuOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceCpuOptions | undefined;
    set internalValue(value: InstanceCpuOptions | undefined);
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
export interface InstanceCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#cpu_credits Instance#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function instanceCreditSpecificationToTerraform(struct?: InstanceCreditSpecificationOutputReference | InstanceCreditSpecification): any;
export declare function instanceCreditSpecificationToHclTerraform(struct?: InstanceCreditSpecificationOutputReference | InstanceCreditSpecification): any;
export declare class InstanceCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceCreditSpecification | undefined;
    set internalValue(value: InstanceCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string | undefined;
}
export interface InstanceEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#snapshot_id Instance#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags_all Instance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function instanceEbsBlockDeviceToTerraform(struct?: InstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare function instanceEbsBlockDeviceToHclTerraform(struct?: InstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare class InstanceEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): InstanceEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: InstanceEbsBlockDevice | cdktf.IResolvable | undefined);
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
export declare class InstanceEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: InstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): InstanceEbsBlockDeviceOutputReference;
}
export interface InstanceEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#enabled Instance#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function instanceEnclaveOptionsToTerraform(struct?: InstanceEnclaveOptionsOutputReference | InstanceEnclaveOptions): any;
export declare function instanceEnclaveOptionsToHclTerraform(struct?: InstanceEnclaveOptionsOutputReference | InstanceEnclaveOptions): any;
export declare class InstanceEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceEnclaveOptions | undefined;
    set internalValue(value: InstanceEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface InstanceEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#device_name Instance#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#no_device Instance#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#virtual_name Instance#virtual_name}
    */
    readonly virtualName?: string;
}
export declare function instanceEphemeralBlockDeviceToTerraform(struct?: InstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function instanceEphemeralBlockDeviceToHclTerraform(struct?: InstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class InstanceEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): InstanceEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: InstanceEphemeralBlockDevice | cdktf.IResolvable | undefined);
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
export declare class InstanceEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: InstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): InstanceEphemeralBlockDeviceOutputReference;
}
export interface InstanceInstanceMarketOptionsSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#instance_interruption_behavior Instance#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#max_price Instance#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#spot_instance_type Instance#spot_instance_type}
    */
    readonly spotInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#valid_until Instance#valid_until}
    */
    readonly validUntil?: string;
}
export declare function instanceInstanceMarketOptionsSpotOptionsToTerraform(struct?: InstanceInstanceMarketOptionsSpotOptionsOutputReference | InstanceInstanceMarketOptionsSpotOptions): any;
export declare function instanceInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: InstanceInstanceMarketOptionsSpotOptionsOutputReference | InstanceInstanceMarketOptionsSpotOptions): any;
export declare class InstanceInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceInstanceMarketOptionsSpotOptions | undefined;
    set internalValue(value: InstanceInstanceMarketOptionsSpotOptions | undefined);
    private _instanceInterruptionBehavior?;
    get instanceInterruptionBehavior(): string;
    set instanceInterruptionBehavior(value: string);
    resetInstanceInterruptionBehavior(): void;
    get instanceInterruptionBehaviorInput(): string | undefined;
    private _maxPrice?;
    get maxPrice(): string;
    set maxPrice(value: string);
    resetMaxPrice(): void;
    get maxPriceInput(): string | undefined;
    private _spotInstanceType?;
    get spotInstanceType(): string;
    set spotInstanceType(value: string);
    resetSpotInstanceType(): void;
    get spotInstanceTypeInput(): string | undefined;
    private _validUntil?;
    get validUntil(): string;
    set validUntil(value: string);
    resetValidUntil(): void;
    get validUntilInput(): string | undefined;
}
export interface InstanceInstanceMarketOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#market_type Instance#market_type}
    */
    readonly marketType?: string;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#spot_options Instance#spot_options}
    */
    readonly spotOptions?: InstanceInstanceMarketOptionsSpotOptions;
}
export declare function instanceInstanceMarketOptionsToTerraform(struct?: InstanceInstanceMarketOptionsOutputReference | InstanceInstanceMarketOptions): any;
export declare function instanceInstanceMarketOptionsToHclTerraform(struct?: InstanceInstanceMarketOptionsOutputReference | InstanceInstanceMarketOptions): any;
export declare class InstanceInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceInstanceMarketOptions | undefined;
    set internalValue(value: InstanceInstanceMarketOptions | undefined);
    private _marketType?;
    get marketType(): string;
    set marketType(value: string);
    resetMarketType(): void;
    get marketTypeInput(): string | undefined;
    private _spotOptions;
    get spotOptions(): InstanceInstanceMarketOptionsSpotOptionsOutputReference;
    putSpotOptions(value: InstanceInstanceMarketOptionsSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): InstanceInstanceMarketOptionsSpotOptions | undefined;
}
export interface InstanceLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#id Instance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#name Instance#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#version Instance#version}
    */
    readonly version?: string;
}
export declare function instanceLaunchTemplateToTerraform(struct?: InstanceLaunchTemplateOutputReference | InstanceLaunchTemplate): any;
export declare function instanceLaunchTemplateToHclTerraform(struct?: InstanceLaunchTemplateOutputReference | InstanceLaunchTemplate): any;
export declare class InstanceLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceLaunchTemplate | undefined;
    set internalValue(value: InstanceLaunchTemplate | undefined);
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
export interface InstanceMaintenanceOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#auto_recovery Instance#auto_recovery}
    */
    readonly autoRecovery?: string;
}
export declare function instanceMaintenanceOptionsToTerraform(struct?: InstanceMaintenanceOptionsOutputReference | InstanceMaintenanceOptions): any;
export declare function instanceMaintenanceOptionsToHclTerraform(struct?: InstanceMaintenanceOptionsOutputReference | InstanceMaintenanceOptions): any;
export declare class InstanceMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceMaintenanceOptions | undefined;
    set internalValue(value: InstanceMaintenanceOptions | undefined);
    private _autoRecovery?;
    get autoRecovery(): string;
    set autoRecovery(value: string);
    resetAutoRecovery(): void;
    get autoRecoveryInput(): string | undefined;
}
export interface InstanceMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#http_endpoint Instance#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#http_protocol_ipv6 Instance#http_protocol_ipv6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#http_put_response_hop_limit Instance#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#http_tokens Instance#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#instance_metadata_tags Instance#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
export declare function instanceMetadataOptionsToTerraform(struct?: InstanceMetadataOptionsOutputReference | InstanceMetadataOptions): any;
export declare function instanceMetadataOptionsToHclTerraform(struct?: InstanceMetadataOptionsOutputReference | InstanceMetadataOptions): any;
export declare class InstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceMetadataOptions | undefined;
    set internalValue(value: InstanceMetadataOptions | undefined);
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
export interface InstanceNetworkInterface {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#device_index Instance#device_index}
    */
    readonly deviceIndex: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#network_card_index Instance#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#network_interface_id Instance#network_interface_id}
    */
    readonly networkInterfaceId: string;
}
export declare function instanceNetworkInterfaceToTerraform(struct?: InstanceNetworkInterface | cdktf.IResolvable): any;
export declare function instanceNetworkInterfaceToHclTerraform(struct?: InstanceNetworkInterface | cdktf.IResolvable): any;
export declare class InstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): InstanceNetworkInterface | cdktf.IResolvable | undefined;
    set internalValue(value: InstanceNetworkInterface | cdktf.IResolvable | undefined);
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
export declare class InstanceNetworkInterfaceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: InstanceNetworkInterface[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): InstanceNetworkInterfaceOutputReference;
}
export interface InstancePrivateDnsNameOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#enable_resource_name_dns_a_record Instance#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#enable_resource_name_dns_aaaa_record Instance#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#hostname_type Instance#hostname_type}
    */
    readonly hostnameType?: string;
}
export declare function instancePrivateDnsNameOptionsToTerraform(struct?: InstancePrivateDnsNameOptionsOutputReference | InstancePrivateDnsNameOptions): any;
export declare function instancePrivateDnsNameOptionsToHclTerraform(struct?: InstancePrivateDnsNameOptionsOutputReference | InstancePrivateDnsNameOptions): any;
export declare class InstancePrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstancePrivateDnsNameOptions | undefined;
    set internalValue(value: InstancePrivateDnsNameOptions | undefined);
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
export interface InstanceRootBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#delete_on_termination Instance#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#encrypted Instance#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#iops Instance#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#kms_key_id Instance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags Instance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#tags_all Instance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#throughput Instance#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#volume_size Instance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#volume_type Instance#volume_type}
    */
    readonly volumeType?: string;
}
export declare function instanceRootBlockDeviceToTerraform(struct?: InstanceRootBlockDeviceOutputReference | InstanceRootBlockDevice): any;
export declare function instanceRootBlockDeviceToHclTerraform(struct?: InstanceRootBlockDeviceOutputReference | InstanceRootBlockDevice): any;
export declare class InstanceRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceRootBlockDevice | undefined;
    set internalValue(value: InstanceRootBlockDevice | undefined);
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
export interface InstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#create Instance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#delete Instance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#read Instance#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#update Instance#update}
    */
    readonly update?: string;
}
export declare function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any;
export declare function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any;
export declare class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance aws_instance}
*/
export declare class Instance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_instance";
    /**
    * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Instance to import
    * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Instance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/instance aws_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: InstanceConfig);
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
    get instanceLifecycle(): string;
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
    get spotInstanceRequestId(): string;
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
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): InstanceCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: InstanceCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): InstanceCapacityReservationSpecification | undefined;
    private _cpuOptions;
    get cpuOptions(): InstanceCpuOptionsOutputReference;
    putCpuOptions(value: InstanceCpuOptions): void;
    resetCpuOptions(): void;
    get cpuOptionsInput(): InstanceCpuOptions | undefined;
    private _creditSpecification;
    get creditSpecification(): InstanceCreditSpecificationOutputReference;
    putCreditSpecification(value: InstanceCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): InstanceCreditSpecification | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): InstanceEbsBlockDeviceList;
    putEbsBlockDevice(value: InstanceEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | InstanceEbsBlockDevice[] | undefined;
    private _enclaveOptions;
    get enclaveOptions(): InstanceEnclaveOptionsOutputReference;
    putEnclaveOptions(value: InstanceEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): InstanceEnclaveOptions | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): InstanceEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: InstanceEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | InstanceEphemeralBlockDevice[] | undefined;
    private _instanceMarketOptions;
    get instanceMarketOptions(): InstanceInstanceMarketOptionsOutputReference;
    putInstanceMarketOptions(value: InstanceInstanceMarketOptions): void;
    resetInstanceMarketOptions(): void;
    get instanceMarketOptionsInput(): InstanceInstanceMarketOptions | undefined;
    private _launchTemplate;
    get launchTemplate(): InstanceLaunchTemplateOutputReference;
    putLaunchTemplate(value: InstanceLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): InstanceLaunchTemplate | undefined;
    private _maintenanceOptions;
    get maintenanceOptions(): InstanceMaintenanceOptionsOutputReference;
    putMaintenanceOptions(value: InstanceMaintenanceOptions): void;
    resetMaintenanceOptions(): void;
    get maintenanceOptionsInput(): InstanceMaintenanceOptions | undefined;
    private _metadataOptions;
    get metadataOptions(): InstanceMetadataOptionsOutputReference;
    putMetadataOptions(value: InstanceMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): InstanceMetadataOptions | undefined;
    private _networkInterface;
    get networkInterface(): InstanceNetworkInterfaceList;
    putNetworkInterface(value: InstanceNetworkInterface[] | cdktf.IResolvable): void;
    resetNetworkInterface(): void;
    get networkInterfaceInput(): cdktf.IResolvable | InstanceNetworkInterface[] | undefined;
    private _privateDnsNameOptions;
    get privateDnsNameOptions(): InstancePrivateDnsNameOptionsOutputReference;
    putPrivateDnsNameOptions(value: InstancePrivateDnsNameOptions): void;
    resetPrivateDnsNameOptions(): void;
    get privateDnsNameOptionsInput(): InstancePrivateDnsNameOptions | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): InstanceRootBlockDeviceOutputReference;
    putRootBlockDevice(value: InstanceRootBlockDevice): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): InstanceRootBlockDevice | undefined;
    private _timeouts;
    get timeouts(): InstanceTimeoutsOutputReference;
    putTimeouts(value: InstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | InstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
