/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#default_version LaunchTemplate#default_version}
    */
    readonly defaultVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}
    */
    readonly disableApiStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}
    */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}
    */
    readonly ebsOptimized?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#id LaunchTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#image_id LaunchTemplate#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}
    */
    readonly instanceInitiatedShutdownBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#key_name LaunchTemplate#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#name LaunchTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}
    */
    readonly ramDiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}
    */
    readonly securityGroupNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tags LaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tags_all LaunchTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}
    */
    readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#user_data LaunchTemplate#user_data}
    */
    readonly userData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * block_device_mappings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}
    */
    readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable;
    /**
    * capacity_reservation_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}
    */
    readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification;
    /**
    * cpu_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#cpu_options LaunchTemplate#cpu_options}
    */
    readonly cpuOptions?: LaunchTemplateCpuOptions;
    /**
    * credit_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#credit_specification LaunchTemplate#credit_specification}
    */
    readonly creditSpecification?: LaunchTemplateCreditSpecification;
    /**
    * elastic_gpu_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#elastic_gpu_specifications LaunchTemplate#elastic_gpu_specifications}
    */
    readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable;
    /**
    * elastic_inference_accelerator block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#elastic_inference_accelerator LaunchTemplate#elastic_inference_accelerator}
    */
    readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator;
    /**
    * enclave_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#enclave_options LaunchTemplate#enclave_options}
    */
    readonly enclaveOptions?: LaunchTemplateEnclaveOptions;
    /**
    * hibernation_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#hibernation_options LaunchTemplate#hibernation_options}
    */
    readonly hibernationOptions?: LaunchTemplateHibernationOptions;
    /**
    * iam_instance_profile block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}
    */
    readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile;
    /**
    * instance_market_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_market_options LaunchTemplate#instance_market_options}
    */
    readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
    /**
    * instance_requirements block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_requirements LaunchTemplate#instance_requirements}
    */
    readonly instanceRequirements?: LaunchTemplateInstanceRequirements;
    /**
    * license_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#license_specification LaunchTemplate#license_specification}
    */
    readonly licenseSpecification?: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable;
    /**
    * maintenance_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#maintenance_options LaunchTemplate#maintenance_options}
    */
    readonly maintenanceOptions?: LaunchTemplateMaintenanceOptions;
    /**
    * metadata_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#metadata_options LaunchTemplate#metadata_options}
    */
    readonly metadataOptions?: LaunchTemplateMetadataOptions;
    /**
    * monitoring block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#monitoring LaunchTemplate#monitoring}
    */
    readonly monitoring?: LaunchTemplateMonitoring;
    /**
    * network_interfaces block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#network_interfaces LaunchTemplate#network_interfaces}
    */
    readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable;
    /**
    * placement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#placement LaunchTemplate#placement}
    */
    readonly placement?: LaunchTemplatePlacement;
    /**
    * private_dns_name_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#private_dns_name_options LaunchTemplate#private_dns_name_options}
    */
    readonly privateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;
    /**
    * tag_specifications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tag_specifications LaunchTemplate#tag_specifications}
    */
    readonly tagSpecifications?: LaunchTemplateTagSpecifications[] | cdktf.IResolvable;
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#iops LaunchTemplate#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#throughput LaunchTemplate#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}
    */
    readonly volumeType?: string;
}
export declare function launchTemplateBlockDeviceMappingsEbsToTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any;
export declare function launchTemplateBlockDeviceMappingsEbsToHclTerraform(struct?: LaunchTemplateBlockDeviceMappingsEbsOutputReference | LaunchTemplateBlockDeviceMappingsEbs): any;
export declare class LaunchTemplateBlockDeviceMappingsEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateBlockDeviceMappingsEbs | undefined;
    set internalValue(value: LaunchTemplateBlockDeviceMappingsEbs | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): string;
    set deleteOnTermination(value: string);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): string | undefined;
    private _encrypted?;
    get encrypted(): string;
    set encrypted(value: string);
    resetEncrypted(): void;
    get encryptedInput(): string | undefined;
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
export interface LaunchTemplateBlockDeviceMappings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#device_name LaunchTemplate#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#no_device LaunchTemplate#no_device}
    */
    readonly noDevice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ebs LaunchTemplate#ebs}
    */
    readonly ebs?: LaunchTemplateBlockDeviceMappingsEbs;
}
export declare function launchTemplateBlockDeviceMappingsToTerraform(struct?: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable): any;
export declare function launchTemplateBlockDeviceMappingsToHclTerraform(struct?: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable): any;
export declare class LaunchTemplateBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchTemplateBlockDeviceMappings | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchTemplateBlockDeviceMappings | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    private _noDevice?;
    get noDevice(): string;
    set noDevice(value: string);
    resetNoDevice(): void;
    get noDeviceInput(): string | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    resetVirtualName(): void;
    get virtualNameInput(): string | undefined;
    private _ebs;
    get ebs(): LaunchTemplateBlockDeviceMappingsEbsOutputReference;
    putEbs(value: LaunchTemplateBlockDeviceMappingsEbs): void;
    resetEbs(): void;
    get ebsInput(): LaunchTemplateBlockDeviceMappingsEbs | undefined;
}
export declare class LaunchTemplateBlockDeviceMappingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchTemplateBlockDeviceMappingsOutputReference;
}
export interface LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}
    */
    readonly capacityReservationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}
    */
    readonly capacityReservationResourceGroupArn?: string;
}
export declare function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any;
export declare function launchTemplateCapacityReservationSpecificationCapacityReservationTargetToHclTerraform(struct?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference | LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): any;
export declare class LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined;
    set internalValue(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined);
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
export interface LaunchTemplateCapacityReservationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}
    */
    readonly capacityReservationPreference?: string;
    /**
    * capacity_reservation_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}
    */
    readonly capacityReservationTarget?: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;
}
export declare function launchTemplateCapacityReservationSpecificationToTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any;
export declare function launchTemplateCapacityReservationSpecificationToHclTerraform(struct?: LaunchTemplateCapacityReservationSpecificationOutputReference | LaunchTemplateCapacityReservationSpecification): any;
export declare class LaunchTemplateCapacityReservationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateCapacityReservationSpecification | undefined;
    set internalValue(value: LaunchTemplateCapacityReservationSpecification | undefined);
    private _capacityReservationPreference?;
    get capacityReservationPreference(): string;
    set capacityReservationPreference(value: string);
    resetCapacityReservationPreference(): void;
    get capacityReservationPreferenceInput(): string | undefined;
    private _capacityReservationTarget;
    get capacityReservationTarget(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;
    putCapacityReservationTarget(value: LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget): void;
    resetCapacityReservationTarget(): void;
    get capacityReservationTargetInput(): LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget | undefined;
}
export interface LaunchTemplateCpuOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#amd_sev_snp LaunchTemplate#amd_sev_snp}
    */
    readonly amdSevSnp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#core_count LaunchTemplate#core_count}
    */
    readonly coreCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}
    */
    readonly threadsPerCore?: number;
}
export declare function launchTemplateCpuOptionsToTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any;
export declare function launchTemplateCpuOptionsToHclTerraform(struct?: LaunchTemplateCpuOptionsOutputReference | LaunchTemplateCpuOptions): any;
export declare class LaunchTemplateCpuOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateCpuOptions | undefined;
    set internalValue(value: LaunchTemplateCpuOptions | undefined);
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
export interface LaunchTemplateCreditSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}
    */
    readonly cpuCredits?: string;
}
export declare function launchTemplateCreditSpecificationToTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any;
export declare function launchTemplateCreditSpecificationToHclTerraform(struct?: LaunchTemplateCreditSpecificationOutputReference | LaunchTemplateCreditSpecification): any;
export declare class LaunchTemplateCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateCreditSpecification | undefined;
    set internalValue(value: LaunchTemplateCreditSpecification | undefined);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    resetCpuCredits(): void;
    get cpuCreditsInput(): string | undefined;
}
export interface LaunchTemplateElasticGpuSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#type LaunchTemplate#type}
    */
    readonly type: string;
}
export declare function launchTemplateElasticGpuSpecificationsToTerraform(struct?: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable): any;
export declare function launchTemplateElasticGpuSpecificationsToHclTerraform(struct?: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable): any;
export declare class LaunchTemplateElasticGpuSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchTemplateElasticGpuSpecifications | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class LaunchTemplateElasticGpuSpecificationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchTemplateElasticGpuSpecificationsOutputReference;
}
export interface LaunchTemplateElasticInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#type LaunchTemplate#type}
    */
    readonly type: string;
}
export declare function launchTemplateElasticInferenceAcceleratorToTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any;
export declare function launchTemplateElasticInferenceAcceleratorToHclTerraform(struct?: LaunchTemplateElasticInferenceAcceleratorOutputReference | LaunchTemplateElasticInferenceAccelerator): any;
export declare class LaunchTemplateElasticInferenceAcceleratorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateElasticInferenceAccelerator | undefined;
    set internalValue(value: LaunchTemplateElasticInferenceAccelerator | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface LaunchTemplateEnclaveOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function launchTemplateEnclaveOptionsToTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any;
export declare function launchTemplateEnclaveOptionsToHclTerraform(struct?: LaunchTemplateEnclaveOptionsOutputReference | LaunchTemplateEnclaveOptions): any;
export declare class LaunchTemplateEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateEnclaveOptions | undefined;
    set internalValue(value: LaunchTemplateEnclaveOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface LaunchTemplateHibernationOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#configured LaunchTemplate#configured}
    */
    readonly configured: boolean | cdktf.IResolvable;
}
export declare function launchTemplateHibernationOptionsToTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any;
export declare function launchTemplateHibernationOptionsToHclTerraform(struct?: LaunchTemplateHibernationOptionsOutputReference | LaunchTemplateHibernationOptions): any;
export declare class LaunchTemplateHibernationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateHibernationOptions | undefined;
    set internalValue(value: LaunchTemplateHibernationOptions | undefined);
    private _configured?;
    get configured(): boolean | cdktf.IResolvable;
    set configured(value: boolean | cdktf.IResolvable);
    get configuredInput(): boolean | cdktf.IResolvable | undefined;
}
export interface LaunchTemplateIamInstanceProfile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#arn LaunchTemplate#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#name LaunchTemplate#name}
    */
    readonly name?: string;
}
export declare function launchTemplateIamInstanceProfileToTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any;
export declare function launchTemplateIamInstanceProfileToHclTerraform(struct?: LaunchTemplateIamInstanceProfileOutputReference | LaunchTemplateIamInstanceProfile): any;
export declare class LaunchTemplateIamInstanceProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateIamInstanceProfile | undefined;
    set internalValue(value: LaunchTemplateIamInstanceProfile | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
}
export interface LaunchTemplateInstanceMarketOptionsSpotOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}
    */
    readonly blockDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}
    */
    readonly instanceInterruptionBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max_price LaunchTemplate#max_price}
    */
    readonly maxPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}
    */
    readonly spotInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}
    */
    readonly validUntil?: string;
}
export declare function launchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare function launchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | LaunchTemplateInstanceMarketOptionsSpotOptions): any;
export declare class LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceMarketOptionsSpotOptions | undefined;
    set internalValue(value: LaunchTemplateInstanceMarketOptionsSpotOptions | undefined);
    private _blockDurationMinutes?;
    get blockDurationMinutes(): number;
    set blockDurationMinutes(value: number);
    resetBlockDurationMinutes(): void;
    get blockDurationMinutesInput(): number | undefined;
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
export interface LaunchTemplateInstanceMarketOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#market_type LaunchTemplate#market_type}
    */
    readonly marketType?: string;
    /**
    * spot_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#spot_options LaunchTemplate#spot_options}
    */
    readonly spotOptions?: LaunchTemplateInstanceMarketOptionsSpotOptions;
}
export declare function launchTemplateInstanceMarketOptionsToTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any;
export declare function launchTemplateInstanceMarketOptionsToHclTerraform(struct?: LaunchTemplateInstanceMarketOptionsOutputReference | LaunchTemplateInstanceMarketOptions): any;
export declare class LaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceMarketOptions | undefined;
    set internalValue(value: LaunchTemplateInstanceMarketOptions | undefined);
    private _marketType?;
    get marketType(): string;
    set marketType(value: string);
    resetMarketType(): void;
    get marketTypeInput(): string | undefined;
    private _spotOptions;
    get spotOptions(): LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;
    putSpotOptions(value: LaunchTemplateInstanceMarketOptionsSpotOptions): void;
    resetSpotOptions(): void;
    get spotOptionsInput(): LaunchTemplateInstanceMarketOptionsSpotOptions | undefined;
}
export interface LaunchTemplateInstanceRequirementsAcceleratorCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsAcceleratorCountToTerraform(struct?: LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference | LaunchTemplateInstanceRequirementsAcceleratorCount): any;
export declare function launchTemplateInstanceRequirementsAcceleratorCountToHclTerraform(struct?: LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference | LaunchTemplateInstanceRequirementsAcceleratorCount): any;
export declare class LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsAcceleratorCount | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsAcceleratorCount | undefined);
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
export interface LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToTerraform(struct?: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare function launchTemplateInstanceRequirementsAcceleratorTotalMemoryMibToHclTerraform(struct?: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference | LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): any;
export declare class LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined);
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
export interface LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToTerraform(struct?: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare function launchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsToHclTerraform(struct?: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference | LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): any;
export declare class LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined);
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
export interface LaunchTemplateInstanceRequirementsMemoryGibPerVcpu {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsMemoryGibPerVcpuToTerraform(struct?: LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference | LaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any;
export declare function launchTemplateInstanceRequirementsMemoryGibPerVcpuToHclTerraform(struct?: LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference | LaunchTemplateInstanceRequirementsMemoryGibPerVcpu): any;
export declare class LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined);
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
export interface LaunchTemplateInstanceRequirementsMemoryMib {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min: number;
}
export declare function launchTemplateInstanceRequirementsMemoryMibToTerraform(struct?: LaunchTemplateInstanceRequirementsMemoryMibOutputReference | LaunchTemplateInstanceRequirementsMemoryMib): any;
export declare function launchTemplateInstanceRequirementsMemoryMibToHclTerraform(struct?: LaunchTemplateInstanceRequirementsMemoryMibOutputReference | LaunchTemplateInstanceRequirementsMemoryMib): any;
export declare class LaunchTemplateInstanceRequirementsMemoryMibOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsMemoryMib | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsMemoryMib | undefined);
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
export interface LaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsNetworkBandwidthGbpsToTerraform(struct?: LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference | LaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any;
export declare function launchTemplateInstanceRequirementsNetworkBandwidthGbpsToHclTerraform(struct?: LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference | LaunchTemplateInstanceRequirementsNetworkBandwidthGbps): any;
export declare class LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined);
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
export interface LaunchTemplateInstanceRequirementsNetworkInterfaceCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsNetworkInterfaceCountToTerraform(struct?: LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference | LaunchTemplateInstanceRequirementsNetworkInterfaceCount): any;
export declare function launchTemplateInstanceRequirementsNetworkInterfaceCountToHclTerraform(struct?: LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference | LaunchTemplateInstanceRequirementsNetworkInterfaceCount): any;
export declare class LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined);
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
export interface LaunchTemplateInstanceRequirementsTotalLocalStorageGb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min?: number;
}
export declare function launchTemplateInstanceRequirementsTotalLocalStorageGbToTerraform(struct?: LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference | LaunchTemplateInstanceRequirementsTotalLocalStorageGb): any;
export declare function launchTemplateInstanceRequirementsTotalLocalStorageGbToHclTerraform(struct?: LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference | LaunchTemplateInstanceRequirementsTotalLocalStorageGb): any;
export declare class LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined);
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
export interface LaunchTemplateInstanceRequirementsVcpuCount {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#min LaunchTemplate#min}
    */
    readonly min: number;
}
export declare function launchTemplateInstanceRequirementsVcpuCountToTerraform(struct?: LaunchTemplateInstanceRequirementsVcpuCountOutputReference | LaunchTemplateInstanceRequirementsVcpuCount): any;
export declare function launchTemplateInstanceRequirementsVcpuCountToHclTerraform(struct?: LaunchTemplateInstanceRequirementsVcpuCountOutputReference | LaunchTemplateInstanceRequirementsVcpuCount): any;
export declare class LaunchTemplateInstanceRequirementsVcpuCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirementsVcpuCount | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirementsVcpuCount | undefined);
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
export interface LaunchTemplateInstanceRequirements {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}
    */
    readonly acceleratorManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#accelerator_names LaunchTemplate#accelerator_names}
    */
    readonly acceleratorNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#accelerator_types LaunchTemplate#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#allowed_instance_types LaunchTemplate#allowed_instance_types}
    */
    readonly allowedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#bare_metal LaunchTemplate#bare_metal}
    */
    readonly bareMetal?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#burstable_performance LaunchTemplate#burstable_performance}
    */
    readonly burstablePerformance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}
    */
    readonly cpuManufacturers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}
    */
    readonly excludedInstanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_generations LaunchTemplate#instance_generations}
    */
    readonly instanceGenerations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#local_storage LaunchTemplate#local_storage}
    */
    readonly localStorage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#local_storage_types LaunchTemplate#local_storage_types}
    */
    readonly localStorageTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#max_spot_price_as_percentage_of_optimal_on_demand_price LaunchTemplate#max_spot_price_as_percentage_of_optimal_on_demand_price}
    */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}
    */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}
    */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}
    */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /**
    * accelerator_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#accelerator_count LaunchTemplate#accelerator_count}
    */
    readonly acceleratorCount?: LaunchTemplateInstanceRequirementsAcceleratorCount;
    /**
    * accelerator_total_memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#accelerator_total_memory_mib LaunchTemplate#accelerator_total_memory_mib}
    */
    readonly acceleratorTotalMemoryMib?: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib;
    /**
    * baseline_ebs_bandwidth_mbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#baseline_ebs_bandwidth_mbps LaunchTemplate#baseline_ebs_bandwidth_mbps}
    */
    readonly baselineEbsBandwidthMbps?: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps;
    /**
    * memory_gib_per_vcpu block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#memory_gib_per_vcpu LaunchTemplate#memory_gib_per_vcpu}
    */
    readonly memoryGibPerVcpu?: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu;
    /**
    * memory_mib block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#memory_mib LaunchTemplate#memory_mib}
    */
    readonly memoryMib: LaunchTemplateInstanceRequirementsMemoryMib;
    /**
    * network_bandwidth_gbps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#network_bandwidth_gbps LaunchTemplate#network_bandwidth_gbps}
    */
    readonly networkBandwidthGbps?: LaunchTemplateInstanceRequirementsNetworkBandwidthGbps;
    /**
    * network_interface_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#network_interface_count LaunchTemplate#network_interface_count}
    */
    readonly networkInterfaceCount?: LaunchTemplateInstanceRequirementsNetworkInterfaceCount;
    /**
    * total_local_storage_gb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#total_local_storage_gb LaunchTemplate#total_local_storage_gb}
    */
    readonly totalLocalStorageGb?: LaunchTemplateInstanceRequirementsTotalLocalStorageGb;
    /**
    * vcpu_count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#vcpu_count LaunchTemplate#vcpu_count}
    */
    readonly vcpuCount: LaunchTemplateInstanceRequirementsVcpuCount;
}
export declare function launchTemplateInstanceRequirementsToTerraform(struct?: LaunchTemplateInstanceRequirementsOutputReference | LaunchTemplateInstanceRequirements): any;
export declare function launchTemplateInstanceRequirementsToHclTerraform(struct?: LaunchTemplateInstanceRequirementsOutputReference | LaunchTemplateInstanceRequirements): any;
export declare class LaunchTemplateInstanceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateInstanceRequirements | undefined;
    set internalValue(value: LaunchTemplateInstanceRequirements | undefined);
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
    get acceleratorCount(): LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference;
    putAcceleratorCount(value: LaunchTemplateInstanceRequirementsAcceleratorCount): void;
    resetAcceleratorCount(): void;
    get acceleratorCountInput(): LaunchTemplateInstanceRequirementsAcceleratorCount | undefined;
    private _acceleratorTotalMemoryMib;
    get acceleratorTotalMemoryMib(): LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;
    putAcceleratorTotalMemoryMib(value: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib): void;
    resetAcceleratorTotalMemoryMib(): void;
    get acceleratorTotalMemoryMibInput(): LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib | undefined;
    private _baselineEbsBandwidthMbps;
    get baselineEbsBandwidthMbps(): LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
    putBaselineEbsBandwidthMbps(value: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps): void;
    resetBaselineEbsBandwidthMbps(): void;
    get baselineEbsBandwidthMbpsInput(): LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps | undefined;
    private _memoryGibPerVcpu;
    get memoryGibPerVcpu(): LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference;
    putMemoryGibPerVcpu(value: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu): void;
    resetMemoryGibPerVcpu(): void;
    get memoryGibPerVcpuInput(): LaunchTemplateInstanceRequirementsMemoryGibPerVcpu | undefined;
    private _memoryMib;
    get memoryMib(): LaunchTemplateInstanceRequirementsMemoryMibOutputReference;
    putMemoryMib(value: LaunchTemplateInstanceRequirementsMemoryMib): void;
    get memoryMibInput(): LaunchTemplateInstanceRequirementsMemoryMib | undefined;
    private _networkBandwidthGbps;
    get networkBandwidthGbps(): LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference;
    putNetworkBandwidthGbps(value: LaunchTemplateInstanceRequirementsNetworkBandwidthGbps): void;
    resetNetworkBandwidthGbps(): void;
    get networkBandwidthGbpsInput(): LaunchTemplateInstanceRequirementsNetworkBandwidthGbps | undefined;
    private _networkInterfaceCount;
    get networkInterfaceCount(): LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference;
    putNetworkInterfaceCount(value: LaunchTemplateInstanceRequirementsNetworkInterfaceCount): void;
    resetNetworkInterfaceCount(): void;
    get networkInterfaceCountInput(): LaunchTemplateInstanceRequirementsNetworkInterfaceCount | undefined;
    private _totalLocalStorageGb;
    get totalLocalStorageGb(): LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference;
    putTotalLocalStorageGb(value: LaunchTemplateInstanceRequirementsTotalLocalStorageGb): void;
    resetTotalLocalStorageGb(): void;
    get totalLocalStorageGbInput(): LaunchTemplateInstanceRequirementsTotalLocalStorageGb | undefined;
    private _vcpuCount;
    get vcpuCount(): LaunchTemplateInstanceRequirementsVcpuCountOutputReference;
    putVcpuCount(value: LaunchTemplateInstanceRequirementsVcpuCount): void;
    get vcpuCountInput(): LaunchTemplateInstanceRequirementsVcpuCount | undefined;
}
export interface LaunchTemplateLicenseSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}
    */
    readonly licenseConfigurationArn: string;
}
export declare function launchTemplateLicenseSpecificationToTerraform(struct?: LaunchTemplateLicenseSpecification | cdktf.IResolvable): any;
export declare function launchTemplateLicenseSpecificationToHclTerraform(struct?: LaunchTemplateLicenseSpecification | cdktf.IResolvable): any;
export declare class LaunchTemplateLicenseSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchTemplateLicenseSpecification | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchTemplateLicenseSpecification | cdktf.IResolvable | undefined);
    private _licenseConfigurationArn?;
    get licenseConfigurationArn(): string;
    set licenseConfigurationArn(value: string);
    get licenseConfigurationArnInput(): string | undefined;
}
export declare class LaunchTemplateLicenseSpecificationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchTemplateLicenseSpecificationOutputReference;
}
export interface LaunchTemplateMaintenanceOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#auto_recovery LaunchTemplate#auto_recovery}
    */
    readonly autoRecovery?: string;
}
export declare function launchTemplateMaintenanceOptionsToTerraform(struct?: LaunchTemplateMaintenanceOptionsOutputReference | LaunchTemplateMaintenanceOptions): any;
export declare function launchTemplateMaintenanceOptionsToHclTerraform(struct?: LaunchTemplateMaintenanceOptionsOutputReference | LaunchTemplateMaintenanceOptions): any;
export declare class LaunchTemplateMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateMaintenanceOptions | undefined;
    set internalValue(value: LaunchTemplateMaintenanceOptions | undefined);
    private _autoRecovery?;
    get autoRecovery(): string;
    set autoRecovery(value: string);
    resetAutoRecovery(): void;
    get autoRecoveryInput(): string | undefined;
}
export interface LaunchTemplateMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}
    */
    readonly httpProtocolIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
export declare function launchTemplateMetadataOptionsToTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any;
export declare function launchTemplateMetadataOptionsToHclTerraform(struct?: LaunchTemplateMetadataOptionsOutputReference | LaunchTemplateMetadataOptions): any;
export declare class LaunchTemplateMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateMetadataOptions | undefined;
    set internalValue(value: LaunchTemplateMetadataOptions | undefined);
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
export interface LaunchTemplateMonitoring {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function launchTemplateMonitoringToTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any;
export declare function launchTemplateMonitoringToHclTerraform(struct?: LaunchTemplateMonitoringOutputReference | LaunchTemplateMonitoring): any;
export declare class LaunchTemplateMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateMonitoring | undefined;
    set internalValue(value: LaunchTemplateMonitoring | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface LaunchTemplateNetworkInterfacesConnectionTrackingSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tcp_established_timeout LaunchTemplate#tcp_established_timeout}
    */
    readonly tcpEstablishedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#udp_stream_timeout LaunchTemplate#udp_stream_timeout}
    */
    readonly udpStreamTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#udp_timeout LaunchTemplate#udp_timeout}
    */
    readonly udpTimeout?: number;
}
export declare function launchTemplateNetworkInterfacesConnectionTrackingSpecificationToTerraform(struct?: LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference | LaunchTemplateNetworkInterfacesConnectionTrackingSpecification): any;
export declare function launchTemplateNetworkInterfacesConnectionTrackingSpecificationToHclTerraform(struct?: LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference | LaunchTemplateNetworkInterfacesConnectionTrackingSpecification): any;
export declare class LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateNetworkInterfacesConnectionTrackingSpecification | undefined;
    set internalValue(value: LaunchTemplateNetworkInterfacesConnectionTrackingSpecification | undefined);
    private _tcpEstablishedTimeout?;
    get tcpEstablishedTimeout(): number;
    set tcpEstablishedTimeout(value: number);
    resetTcpEstablishedTimeout(): void;
    get tcpEstablishedTimeoutInput(): number | undefined;
    private _udpStreamTimeout?;
    get udpStreamTimeout(): number;
    set udpStreamTimeout(value: number);
    resetUdpStreamTimeout(): void;
    get udpStreamTimeoutInput(): number | undefined;
    private _udpTimeout?;
    get udpTimeout(): number;
    set udpTimeout(value: number);
    resetUdpTimeout(): void;
    get udpTimeoutInput(): number | undefined;
}
export interface LaunchTemplateNetworkInterfaces {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}
    */
    readonly associateCarrierIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}
    */
    readonly associatePublicIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#description LaunchTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#device_index LaunchTemplate#device_index}
    */
    readonly deviceIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#interface_type LaunchTemplate#interface_type}
    */
    readonly interfaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}
    */
    readonly ipv4AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}
    */
    readonly ipv4Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}
    */
    readonly ipv4PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}
    */
    readonly ipv4Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}
    */
    readonly ipv6AddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}
    */
    readonly ipv6Addresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}
    */
    readonly ipv6PrefixCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}
    */
    readonly ipv6Prefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#network_card_index LaunchTemplate#network_card_index}
    */
    readonly networkCardIndex?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#primary_ipv6 LaunchTemplate#primary_ipv6}
    */
    readonly primaryIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}
    */
    readonly privateIpAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * connection_tracking_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#connection_tracking_specification LaunchTemplate#connection_tracking_specification}
    */
    readonly connectionTrackingSpecification?: LaunchTemplateNetworkInterfacesConnectionTrackingSpecification;
}
export declare function launchTemplateNetworkInterfacesToTerraform(struct?: LaunchTemplateNetworkInterfaces | cdktf.IResolvable): any;
export declare function launchTemplateNetworkInterfacesToHclTerraform(struct?: LaunchTemplateNetworkInterfaces | cdktf.IResolvable): any;
export declare class LaunchTemplateNetworkInterfacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchTemplateNetworkInterfaces | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchTemplateNetworkInterfaces | cdktf.IResolvable | undefined);
    private _associateCarrierIpAddress?;
    get associateCarrierIpAddress(): string;
    set associateCarrierIpAddress(value: string);
    resetAssociateCarrierIpAddress(): void;
    get associateCarrierIpAddressInput(): string | undefined;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): string;
    set associatePublicIpAddress(value: string);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): string | undefined;
    private _deleteOnTermination?;
    get deleteOnTermination(): string;
    set deleteOnTermination(value: string);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _deviceIndex?;
    get deviceIndex(): number;
    set deviceIndex(value: number);
    resetDeviceIndex(): void;
    get deviceIndexInput(): number | undefined;
    private _interfaceType?;
    get interfaceType(): string;
    set interfaceType(value: string);
    resetInterfaceType(): void;
    get interfaceTypeInput(): string | undefined;
    private _ipv4AddressCount?;
    get ipv4AddressCount(): number;
    set ipv4AddressCount(value: number);
    resetIpv4AddressCount(): void;
    get ipv4AddressCountInput(): number | undefined;
    private _ipv4Addresses?;
    get ipv4Addresses(): string[];
    set ipv4Addresses(value: string[]);
    resetIpv4Addresses(): void;
    get ipv4AddressesInput(): string[] | undefined;
    private _ipv4PrefixCount?;
    get ipv4PrefixCount(): number;
    set ipv4PrefixCount(value: number);
    resetIpv4PrefixCount(): void;
    get ipv4PrefixCountInput(): number | undefined;
    private _ipv4Prefixes?;
    get ipv4Prefixes(): string[];
    set ipv4Prefixes(value: string[]);
    resetIpv4Prefixes(): void;
    get ipv4PrefixesInput(): string[] | undefined;
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
    private _ipv6PrefixCount?;
    get ipv6PrefixCount(): number;
    set ipv6PrefixCount(value: number);
    resetIpv6PrefixCount(): void;
    get ipv6PrefixCountInput(): number | undefined;
    private _ipv6Prefixes?;
    get ipv6Prefixes(): string[];
    set ipv6Prefixes(value: string[]);
    resetIpv6Prefixes(): void;
    get ipv6PrefixesInput(): string[] | undefined;
    private _networkCardIndex?;
    get networkCardIndex(): number;
    set networkCardIndex(value: number);
    resetNetworkCardIndex(): void;
    get networkCardIndexInput(): number | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    private _primaryIpv6?;
    get primaryIpv6(): string;
    set primaryIpv6(value: string);
    resetPrimaryIpv6(): void;
    get primaryIpv6Input(): string | undefined;
    private _privateIpAddress?;
    get privateIpAddress(): string;
    set privateIpAddress(value: string);
    resetPrivateIpAddress(): void;
    get privateIpAddressInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _connectionTrackingSpecification;
    get connectionTrackingSpecification(): LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference;
    putConnectionTrackingSpecification(value: LaunchTemplateNetworkInterfacesConnectionTrackingSpecification): void;
    resetConnectionTrackingSpecification(): void;
    get connectionTrackingSpecificationInput(): LaunchTemplateNetworkInterfacesConnectionTrackingSpecification | undefined;
}
export declare class LaunchTemplateNetworkInterfacesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchTemplateNetworkInterfacesOutputReference;
}
export interface LaunchTemplatePlacement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#affinity LaunchTemplate#affinity}
    */
    readonly affinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#group_name LaunchTemplate#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#host_id LaunchTemplate#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}
    */
    readonly partitionNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}
    */
    readonly spreadDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}
    */
    readonly tenancy?: string;
}
export declare function launchTemplatePlacementToTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any;
export declare function launchTemplatePlacementToHclTerraform(struct?: LaunchTemplatePlacementOutputReference | LaunchTemplatePlacement): any;
export declare class LaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplatePlacement | undefined;
    set internalValue(value: LaunchTemplatePlacement | undefined);
    private _affinity?;
    get affinity(): string;
    set affinity(value: string);
    resetAffinity(): void;
    get affinityInput(): string | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string | undefined;
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
    private _partitionNumber?;
    get partitionNumber(): number;
    set partitionNumber(value: number);
    resetPartitionNumber(): void;
    get partitionNumberInput(): number | undefined;
    private _spreadDomain?;
    get spreadDomain(): string;
    set spreadDomain(value: string);
    resetSpreadDomain(): void;
    get spreadDomainInput(): string | undefined;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
}
export interface LaunchTemplatePrivateDnsNameOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}
    */
    readonly enableResourceNameDnsARecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}
    */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#hostname_type LaunchTemplate#hostname_type}
    */
    readonly hostnameType?: string;
}
export declare function launchTemplatePrivateDnsNameOptionsToTerraform(struct?: LaunchTemplatePrivateDnsNameOptionsOutputReference | LaunchTemplatePrivateDnsNameOptions): any;
export declare function launchTemplatePrivateDnsNameOptionsToHclTerraform(struct?: LaunchTemplatePrivateDnsNameOptionsOutputReference | LaunchTemplatePrivateDnsNameOptions): any;
export declare class LaunchTemplatePrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplatePrivateDnsNameOptions | undefined;
    set internalValue(value: LaunchTemplatePrivateDnsNameOptions | undefined);
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
export interface LaunchTemplateTagSpecifications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#tags LaunchTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function launchTemplateTagSpecificationsToTerraform(struct?: LaunchTemplateTagSpecifications | cdktf.IResolvable): any;
export declare function launchTemplateTagSpecificationsToHclTerraform(struct?: LaunchTemplateTagSpecifications | cdktf.IResolvable): any;
export declare class LaunchTemplateTagSpecificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchTemplateTagSpecifications | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchTemplateTagSpecifications | cdktf.IResolvable | undefined);
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string | undefined;
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
}
export declare class LaunchTemplateTagSpecificationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchTemplateTagSpecifications[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchTemplateTagSpecificationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template aws_launch_template}
*/
export declare class LaunchTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_launch_template";
    /**
    * Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LaunchTemplate to import
    * @param importFromId The id of the existing LaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LaunchTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/launch_template aws_launch_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchTemplateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LaunchTemplateConfig);
    get arn(): string;
    private _defaultVersion?;
    get defaultVersion(): number;
    set defaultVersion(value: number);
    resetDefaultVersion(): void;
    get defaultVersionInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    get ebsOptimized(): string;
    set ebsOptimized(value: string);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string | undefined;
    private _instanceInitiatedShutdownBehavior?;
    get instanceInitiatedShutdownBehavior(): string;
    set instanceInitiatedShutdownBehavior(value: string);
    resetInstanceInitiatedShutdownBehavior(): void;
    get instanceInitiatedShutdownBehaviorInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _kernelId?;
    get kernelId(): string;
    set kernelId(value: string);
    resetKernelId(): void;
    get kernelIdInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    get latestVersion(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _ramDiskId?;
    get ramDiskId(): string;
    set ramDiskId(value: string);
    resetRamDiskId(): void;
    get ramDiskIdInput(): string | undefined;
    private _securityGroupNames?;
    get securityGroupNames(): string[];
    set securityGroupNames(value: string[]);
    resetSecurityGroupNames(): void;
    get securityGroupNamesInput(): string[] | undefined;
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
    private _updateDefaultVersion?;
    get updateDefaultVersion(): boolean | cdktf.IResolvable;
    set updateDefaultVersion(value: boolean | cdktf.IResolvable);
    resetUpdateDefaultVersion(): void;
    get updateDefaultVersionInput(): boolean | cdktf.IResolvable | undefined;
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
    private _blockDeviceMappings;
    get blockDeviceMappings(): LaunchTemplateBlockDeviceMappingsList;
    putBlockDeviceMappings(value: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable): void;
    resetBlockDeviceMappings(): void;
    get blockDeviceMappingsInput(): cdktf.IResolvable | LaunchTemplateBlockDeviceMappings[] | undefined;
    private _capacityReservationSpecification;
    get capacityReservationSpecification(): LaunchTemplateCapacityReservationSpecificationOutputReference;
    putCapacityReservationSpecification(value: LaunchTemplateCapacityReservationSpecification): void;
    resetCapacityReservationSpecification(): void;
    get capacityReservationSpecificationInput(): LaunchTemplateCapacityReservationSpecification | undefined;
    private _cpuOptions;
    get cpuOptions(): LaunchTemplateCpuOptionsOutputReference;
    putCpuOptions(value: LaunchTemplateCpuOptions): void;
    resetCpuOptions(): void;
    get cpuOptionsInput(): LaunchTemplateCpuOptions | undefined;
    private _creditSpecification;
    get creditSpecification(): LaunchTemplateCreditSpecificationOutputReference;
    putCreditSpecification(value: LaunchTemplateCreditSpecification): void;
    resetCreditSpecification(): void;
    get creditSpecificationInput(): LaunchTemplateCreditSpecification | undefined;
    private _elasticGpuSpecifications;
    get elasticGpuSpecifications(): LaunchTemplateElasticGpuSpecificationsList;
    putElasticGpuSpecifications(value: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable): void;
    resetElasticGpuSpecifications(): void;
    get elasticGpuSpecificationsInput(): cdktf.IResolvable | LaunchTemplateElasticGpuSpecifications[] | undefined;
    private _elasticInferenceAccelerator;
    get elasticInferenceAccelerator(): LaunchTemplateElasticInferenceAcceleratorOutputReference;
    putElasticInferenceAccelerator(value: LaunchTemplateElasticInferenceAccelerator): void;
    resetElasticInferenceAccelerator(): void;
    get elasticInferenceAcceleratorInput(): LaunchTemplateElasticInferenceAccelerator | undefined;
    private _enclaveOptions;
    get enclaveOptions(): LaunchTemplateEnclaveOptionsOutputReference;
    putEnclaveOptions(value: LaunchTemplateEnclaveOptions): void;
    resetEnclaveOptions(): void;
    get enclaveOptionsInput(): LaunchTemplateEnclaveOptions | undefined;
    private _hibernationOptions;
    get hibernationOptions(): LaunchTemplateHibernationOptionsOutputReference;
    putHibernationOptions(value: LaunchTemplateHibernationOptions): void;
    resetHibernationOptions(): void;
    get hibernationOptionsInput(): LaunchTemplateHibernationOptions | undefined;
    private _iamInstanceProfile;
    get iamInstanceProfile(): LaunchTemplateIamInstanceProfileOutputReference;
    putIamInstanceProfile(value: LaunchTemplateIamInstanceProfile): void;
    resetIamInstanceProfile(): void;
    get iamInstanceProfileInput(): LaunchTemplateIamInstanceProfile | undefined;
    private _instanceMarketOptions;
    get instanceMarketOptions(): LaunchTemplateInstanceMarketOptionsOutputReference;
    putInstanceMarketOptions(value: LaunchTemplateInstanceMarketOptions): void;
    resetInstanceMarketOptions(): void;
    get instanceMarketOptionsInput(): LaunchTemplateInstanceMarketOptions | undefined;
    private _instanceRequirements;
    get instanceRequirements(): LaunchTemplateInstanceRequirementsOutputReference;
    putInstanceRequirements(value: LaunchTemplateInstanceRequirements): void;
    resetInstanceRequirements(): void;
    get instanceRequirementsInput(): LaunchTemplateInstanceRequirements | undefined;
    private _licenseSpecification;
    get licenseSpecification(): LaunchTemplateLicenseSpecificationList;
    putLicenseSpecification(value: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable): void;
    resetLicenseSpecification(): void;
    get licenseSpecificationInput(): cdktf.IResolvable | LaunchTemplateLicenseSpecification[] | undefined;
    private _maintenanceOptions;
    get maintenanceOptions(): LaunchTemplateMaintenanceOptionsOutputReference;
    putMaintenanceOptions(value: LaunchTemplateMaintenanceOptions): void;
    resetMaintenanceOptions(): void;
    get maintenanceOptionsInput(): LaunchTemplateMaintenanceOptions | undefined;
    private _metadataOptions;
    get metadataOptions(): LaunchTemplateMetadataOptionsOutputReference;
    putMetadataOptions(value: LaunchTemplateMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): LaunchTemplateMetadataOptions | undefined;
    private _monitoring;
    get monitoring(): LaunchTemplateMonitoringOutputReference;
    putMonitoring(value: LaunchTemplateMonitoring): void;
    resetMonitoring(): void;
    get monitoringInput(): LaunchTemplateMonitoring | undefined;
    private _networkInterfaces;
    get networkInterfaces(): LaunchTemplateNetworkInterfacesList;
    putNetworkInterfaces(value: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable): void;
    resetNetworkInterfaces(): void;
    get networkInterfacesInput(): cdktf.IResolvable | LaunchTemplateNetworkInterfaces[] | undefined;
    private _placement;
    get placement(): LaunchTemplatePlacementOutputReference;
    putPlacement(value: LaunchTemplatePlacement): void;
    resetPlacement(): void;
    get placementInput(): LaunchTemplatePlacement | undefined;
    private _privateDnsNameOptions;
    get privateDnsNameOptions(): LaunchTemplatePrivateDnsNameOptionsOutputReference;
    putPrivateDnsNameOptions(value: LaunchTemplatePrivateDnsNameOptions): void;
    resetPrivateDnsNameOptions(): void;
    get privateDnsNameOptionsInput(): LaunchTemplatePrivateDnsNameOptions | undefined;
    private _tagSpecifications;
    get tagSpecifications(): LaunchTemplateTagSpecificationsList;
    putTagSpecifications(value: LaunchTemplateTagSpecifications[] | cdktf.IResolvable): void;
    resetTagSpecifications(): void;
    get tagSpecificationsInput(): cdktf.IResolvable | LaunchTemplateTagSpecifications[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
