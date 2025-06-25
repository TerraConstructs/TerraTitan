/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Default Version of the launch template. */
    readonly defaultVersion?: number;
    /** (Optional) Description of the launch template. */
    readonly description?: string;
    /** (Optional) If true, enables [EC2 Instance Stop Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html). */
    readonly disableApiStop?: boolean | cdktf.IResolvable;
    /** (Optional) If `true`, enables [EC2 Instance Termination Protection](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingDisableAPITermination.html) */
    readonly disableApiTermination?: boolean | cdktf.IResolvable;
    /** (Optional) If `true`, the launched EC2 instance will be EBS-optimized. */
    readonly ebsOptimized?: string;
    /** */
    readonly id?: string;
    /** (Optional) The AMI from which to launch the instance or use a Systems Manager parameter convention e.g. `resolve:ssm:parameter-name`. See [docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-launch-template.html#use-an-ssm-parameter-instead-of-an-ami-id) for more details. */
    readonly imageId?: string;
    /** (Optional) Shutdown behavior for the instance. Can be `stop` or `terminate`. */
    readonly instanceInitiatedShutdownBehavior?: string;
    /** (Optional) The type of the instance. If present then `instanceRequirements` cannot be present. */
    readonly instanceType?: string;
    /** (Optional) The kernel ID. */
    readonly kernelId?: string;
    /** (Optional) The key name to use for the instance. */
    readonly keyName?: string;
    /** (Optional) The name of the launch template. If you leave this blank, Terraform will auto-generate a unique name. */
    readonly name?: string;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    readonly namePrefix?: string;
    /** (Optional) The ID of the RAM disk. */
    readonly ramDiskId?: string;
    /** (Optional) A list of security group names to associate with. If you are creating Instances in a VPC, use `vpcSecurityGroupIds` instead. */
    readonly securityGroupNames?: string[];
    /** (Optional) A map of tags to assign to the launch template. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Whether to update Default Version each update. Conflicts with `defaultVersion`. */
    readonly updateDefaultVersion?: boolean | cdktf.IResolvable;
    /** (Optional) The base64-encoded user data to provide when launching the instance. */
    readonly userData?: string;
    /** (Optional) A list of security group IDs to associate with. Conflicts with `network_interfaces.security_groups` */
    readonly vpcSecurityGroupIds?: string[];
    /** */
    readonly blockDeviceMappings?: LaunchTemplateBlockDeviceMappings[] | cdktf.IResolvable;
    /** */
    readonly capacityReservationSpecification?: LaunchTemplateCapacityReservationSpecification;
    /** */
    readonly cpuOptions?: LaunchTemplateCpuOptions;
    /** */
    readonly creditSpecification?: LaunchTemplateCreditSpecification;
    /** */
    readonly elasticGpuSpecifications?: LaunchTemplateElasticGpuSpecifications[] | cdktf.IResolvable;
    /** */
    readonly elasticInferenceAccelerator?: LaunchTemplateElasticInferenceAccelerator;
    /** */
    readonly enclaveOptions?: LaunchTemplateEnclaveOptions;
    /** */
    readonly hibernationOptions?: LaunchTemplateHibernationOptions;
    /** */
    readonly iamInstanceProfile?: LaunchTemplateIamInstanceProfile;
    /** */
    readonly instanceMarketOptions?: LaunchTemplateInstanceMarketOptions;
    /** */
    readonly instanceRequirements?: LaunchTemplateInstanceRequirements;
    /** */
    readonly licenseSpecification?: LaunchTemplateLicenseSpecification[] | cdktf.IResolvable;
    /** */
    readonly maintenanceOptions?: LaunchTemplateMaintenanceOptions;
    /** */
    readonly metadataOptions?: LaunchTemplateMetadataOptions;
    /** */
    readonly monitoring?: LaunchTemplateMonitoring;
    /** */
    readonly networkInterfaces?: LaunchTemplateNetworkInterfaces[] | cdktf.IResolvable;
    /** */
    readonly placement?: LaunchTemplatePlacement;
    /** */
    readonly privateDnsNameOptions?: LaunchTemplatePrivateDnsNameOptions;
    /** */
    readonly tagSpecifications?: LaunchTemplateTagSpecifications[] | cdktf.IResolvable;
}
export interface LaunchTemplateBlockDeviceMappingsEbs {
    /** (Optional) Whether the volume should be destroyed on instance termination. */
    readonly deleteOnTermination?: string;
    /** (Optional) Enables [EBS encryption](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html) on the volume. */
    readonly encrypted?: string;
    /** (Optional) The amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). */
    readonly iops?: number;
    /** (Optional) The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use when creating the encrypted volume. */
    readonly kmsKeyId?: string;
    /** (Optional) The Snapshot ID to mount. */
    readonly snapshotId?: string;
    /** (Optional) The throughput to provision for a `gp3` volume in MiB/s (specified as an integer, e.g., 500), with a maximum of 1,000 MiB/s. */
    readonly throughput?: number;
    /** (Optional) The volume initialization rate in MiB/s (specified as an integer, e.g. 100), with a minimum of 100 MiB/s and maximum of 300 MiB/s. */
    readonly volumeInitializationRate?: number;
    /** (Optional) The size of the volume in gigabytes. */
    readonly volumeSize?: number;
    /** (Optional) The volume type. */
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
    private _volumeInitializationRate?;
    get volumeInitializationRate(): number;
    set volumeInitializationRate(value: number);
    resetVolumeInitializationRate(): void;
    get volumeInitializationRateInput(): number | undefined;
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
    /** (Required) The name of the device to mount. */
    readonly deviceName?: string;
    /** (Optional) Suppresses the specified device included in the AMI's block device mapping. */
    readonly noDevice?: string;
    /** (Optional) The [Instance Store Device Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames) (e.g., `"ephemeral0"`). */
    readonly virtualName?: string;
    /** */
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
    /** */
    readonly capacityReservationId?: string;
    /** */
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
    /** */
    readonly capacityReservationPreference?: string;
    /** */
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
    /** */
    readonly amdSevSnp?: string;
    /** */
    readonly coreCount?: number;
    /** */
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
    /** */
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
    /** (Required) Accelerator type. */
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
    /** (Required) Accelerator type. */
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
    /** */
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
    /** */
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
    /** */
    readonly arn?: string;
    /** (Optional) The name of the launch template. If you leave this blank, Terraform will auto-generate a unique name. */
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
    /** */
    readonly blockDurationMinutes?: number;
    /** */
    readonly instanceInterruptionBehavior?: string;
    /** */
    readonly maxPrice?: string;
    /** */
    readonly spotInstanceType?: string;
    /** */
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
    /** */
    readonly marketType?: string;
    /** */
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
    /** (Optional) Maximum. Set to `0` to exclude instance types with accelerators. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. May be a decimal number, e.g. `0.5`. */
    readonly max?: number;
    /** (Optional) Minimum. May be a decimal number, e.g. `0.5`. */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_template#max LaunchTemplate#max}
    */
    readonly max?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_template#min LaunchTemplate#min}
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Optional) Minimum. */
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
    /** (Optional) Maximum. May be a decimal number, e.g. `0.5`. */
    readonly max?: number;
    /** (Optional) Minimum. May be a decimal number, e.g. `0.5`. */
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
    /** (Optional) Maximum. */
    readonly max?: number;
    /** (Required) Minimum. */
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
    /** (Optional) List of accelerator manufacturer names. Default is any manufacturer. */
    readonly acceleratorManufacturers?: string[];
    /** (Optional) List of accelerator names. Default is any acclerator. */
    readonly acceleratorNames?: string[];
    /** (Optional) List of accelerator types. Default is any accelerator type. */
    readonly acceleratorTypes?: string[];
    /** (Optional) List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types. */
    readonly allowedInstanceTypes?: string[];
    /** (Optional) Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    readonly bareMetal?: string;
    /** (Optional) Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`. */
    readonly burstablePerformance?: string;
    /** */
    readonly cpuManufacturers?: string[];
    /** (Optional) List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. */
    readonly excludedInstanceTypes?: string[];
    /** (Optional) List of instance generation names. Default is any generation. */
    readonly instanceGenerations?: string[];
    /** (Optional) Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`. */
    readonly localStorage?: string;
    /** (Optional) List of local storage type names. Default any storage type. */
    readonly localStorageTypes?: string[];
    /** (Optional) The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Conflicts with `spotMaxPricePercentageOverLowestPrice` */
    readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;
    /** (Optional) The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20. */
    readonly onDemandMaxPricePercentageOverLowestPrice?: number;
    /** (Optional) Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`. */
    readonly requireHibernateSupport?: boolean | cdktf.IResolvable;
    /** (Optional) The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `maxSpotPriceAsPercentageOfOptimalOnDemandPrice` If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price. */
    readonly spotMaxPricePercentageOverLowestPrice?: number;
    /** */
    readonly acceleratorCount?: LaunchTemplateInstanceRequirementsAcceleratorCount;
    /** */
    readonly acceleratorTotalMemoryMib?: LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib;
    /** */
    readonly baselineEbsBandwidthMbps?: LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps;
    /** */
    readonly memoryGibPerVcpu?: LaunchTemplateInstanceRequirementsMemoryGibPerVcpu;
    /** */
    readonly memoryMib: LaunchTemplateInstanceRequirementsMemoryMib;
    /** */
    readonly networkBandwidthGbps?: LaunchTemplateInstanceRequirementsNetworkBandwidthGbps;
    /** */
    readonly networkInterfaceCount?: LaunchTemplateInstanceRequirementsNetworkInterfaceCount;
    /** */
    readonly totalLocalStorageGb?: LaunchTemplateInstanceRequirementsTotalLocalStorageGb;
    /** */
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
    /** (Required) ARN of the license configuration. */
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
    /** (Optional) Disables the automatic recovery behavior of your instance or sets it to default. Can be `"default"` or `"disabled"`. See [Recover your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html) for more details. */
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
    /** (Optional) Whether the metadata service is available. Can be `"enabled"` or `"disabled"`. (Default: `"enabled"`). */
    readonly httpEndpoint?: string;
    /** (Optional) Enables or disables the IPv6 endpoint for the instance metadata service. Can be `"enabled"` or `"disabled"`. */
    readonly httpProtocolIpv6?: string;
    /** (Optional) The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Can be an integer from `1` to `64`. (Default: `1`). */
    readonly httpPutResponseHopLimit?: number;
    /** (Optional) Whether or not the metadata service requires session tokens, also referred to as _Instance Metadata Service Version 2 (IMDSv2)_. Can be `"optional"` or `"required"`. (Default: `"optional"`). */
    readonly httpTokens?: string;
    /** (Optional) Enables or disables access to instance tags from the instance metadata service. Can be `"enabled"` or `"disabled"`. */
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
    /** */
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
    /** (Optional) Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 432000 seconds. Recommended: Less than 432000 seconds. */
    readonly tcpEstablishedTimeout?: number;
    /** (Optional) Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds. */
    readonly udpStreamTimeout?: number;
    /** (Optional) Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds. */
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
export interface LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification {
    /** (Optional) Whether to enable UDP traffic optimization through ENA Express. Requires `enaSrdEnabled` to be `true`. */
    readonly enaSrdUdpEnabled?: boolean | cdktf.IResolvable;
}
export declare function launchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToTerraform(struct?: LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference | LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification): any;
export declare function launchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationToHclTerraform(struct?: LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference | LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification): any;
export declare class LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | undefined;
    set internalValue(value: LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | undefined);
    private _enaSrdUdpEnabled?;
    get enaSrdUdpEnabled(): boolean | cdktf.IResolvable;
    set enaSrdUdpEnabled(value: boolean | cdktf.IResolvable);
    resetEnaSrdUdpEnabled(): void;
    get enaSrdUdpEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface LaunchTemplateNetworkInterfacesEnaSrdSpecification {
    /** (Optional) Whether to enable ENA Express. ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to improve the performance of TCP traffic. */
    readonly enaSrdEnabled?: boolean | cdktf.IResolvable;
    /** */
    readonly enaSrdUdpSpecification?: LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
}
export declare function launchTemplateNetworkInterfacesEnaSrdSpecificationToTerraform(struct?: LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference | LaunchTemplateNetworkInterfacesEnaSrdSpecification): any;
export declare function launchTemplateNetworkInterfacesEnaSrdSpecificationToHclTerraform(struct?: LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference | LaunchTemplateNetworkInterfacesEnaSrdSpecification): any;
export declare class LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchTemplateNetworkInterfacesEnaSrdSpecification | undefined;
    set internalValue(value: LaunchTemplateNetworkInterfacesEnaSrdSpecification | undefined);
    private _enaSrdEnabled?;
    get enaSrdEnabled(): boolean | cdktf.IResolvable;
    set enaSrdEnabled(value: boolean | cdktf.IResolvable);
    resetEnaSrdEnabled(): void;
    get enaSrdEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _enaSrdUdpSpecification;
    get enaSrdUdpSpecification(): LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;
    putEnaSrdUdpSpecification(value: LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification): void;
    resetEnaSrdUdpSpecification(): void;
    get enaSrdUdpSpecificationInput(): LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification | undefined;
}
export interface LaunchTemplateNetworkInterfaces {
    /** (Optional) Associate a Carrier IP address with `eth0` for a new network interface. Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. Boolean value, can be left unset. */
    readonly associateCarrierIpAddress?: string;
    /** (Optional) Associate a public ip address with the network interface. Boolean value, can be left unset. */
    readonly associatePublicIpAddress?: string;
    /** (Optional) Whether the network interface should be destroyed on instance termination. */
    readonly deleteOnTermination?: string;
    /** (Optional) Description of the network interface. */
    readonly description?: string;
    /** (Optional) The integer index of the network interface attachment. */
    readonly deviceIndex?: number;
    /** (Optional) The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa`. */
    readonly interfaceType?: string;
    /** (Optional) The number of secondary private IPv4 addresses to assign to a network interface. Conflicts with `ipv4Addresses` */
    readonly ipv4AddressCount?: number;
    /** (Optional) One or more private IPv4 addresses to associate. Conflicts with `ipv4AddressCount` */
    readonly ipv4Addresses?: string[];
    /** (Optional) The number of IPv4 prefixes to be automatically assigned to the network interface. Conflicts with `ipv4Prefixes` */
    readonly ipv4PrefixCount?: number;
    /** (Optional) One or more IPv4 prefixes to be assigned to the network interface. Conflicts with `ipv4PrefixCount` */
    readonly ipv4Prefixes?: string[];
    /** (Optional) The number of IPv6 addresses to assign to a network interface. Conflicts with `ipv6Addresses` */
    readonly ipv6AddressCount?: number;
    /** (Optional) One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. Conflicts with `ipv6AddressCount` */
    readonly ipv6Addresses?: string[];
    /** (Optional) The number of IPv6 prefixes to be automatically assigned to the network interface. Conflicts with `ipv6Prefixes` */
    readonly ipv6PrefixCount?: number;
    /** (Optional) One or more IPv6 prefixes to be assigned to the network interface. Conflicts with `ipv6PrefixCount` */
    readonly ipv6Prefixes?: string[];
    /** (Optional) The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0. */
    readonly networkCardIndex?: number;
    /** (Optional) The ID of the network interface to attach. */
    readonly networkInterfaceId?: string;
    /** (Optional) Whether the first IPv6 GUA will be made the primary IPv6 address. */
    readonly primaryIpv6?: string;
    /** (Optional) The primary private IPv4 address. */
    readonly privateIpAddress?: string;
    /** (Optional) A list of security group IDs to associate. */
    readonly securityGroups?: string[];
    /** (Optional) The VPC Subnet ID to associate. */
    readonly subnetId?: string;
    /** */
    readonly connectionTrackingSpecification?: LaunchTemplateNetworkInterfacesConnectionTrackingSpecification;
    /** */
    readonly enaSrdSpecification?: LaunchTemplateNetworkInterfacesEnaSrdSpecification;
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
    private _enaSrdSpecification;
    get enaSrdSpecification(): LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference;
    putEnaSrdSpecification(value: LaunchTemplateNetworkInterfacesEnaSrdSpecification): void;
    resetEnaSrdSpecification(): void;
    get enaSrdSpecificationInput(): LaunchTemplateNetworkInterfacesEnaSrdSpecification | undefined;
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
    /** (Optional) The affinity setting for an instance on a Dedicated Host. */
    readonly affinity?: string;
    /** (Optional) The Availability Zone for the instance. */
    readonly availabilityZone?: string;
    /** (Optional) The name of the placement group for the instance. */
    readonly groupName?: string;
    /** (Optional) The ID of the Dedicated Host for the instance. */
    readonly hostId?: string;
    /** (Optional) The ARN of the Host Resource Group in which to launch instances. */
    readonly hostResourceGroupArn?: string;
    /** (Optional) The number of the partition the instance should launch in. Valid only if the placement group strategy is set to partition. */
    readonly partitionNumber?: number;
    /** (Optional) Reserved for future use. */
    readonly spreadDomain?: string;
    /** (Optional) The tenancy of the instance (if the instance is running in a VPC). Can be `default`, `dedicated`, or `host`. */
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
    /** (Optional) Indicates whether to respond to DNS queries for instance hostnames with DNS A records. */
    readonly enableResourceNameDnsARecord?: boolean | cdktf.IResolvable;
    /** (Optional) Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. */
    readonly enableResourceNameDnsAaaaRecord?: boolean | cdktf.IResolvable;
    /** (Optional) The type of hostname for Amazon EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 native subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. Valid values: `ip-name` and `resource-name`. */
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
    /** (Optional) The type of resource to tag. */
    readonly resourceType?: string;
    /** (Optional)  A map of tags to assign to the resource. */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_template aws_launch_template}
*/
export declare class LaunchTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_launch_template";
    /**
    * Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LaunchTemplate to import
    * @param importFromId The id of the existing LaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LaunchTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_template aws_launch_template} Resource
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
