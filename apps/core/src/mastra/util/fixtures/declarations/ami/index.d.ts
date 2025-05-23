/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#architecture Ami#architecture}
    */
    readonly architecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#boot_mode Ami#boot_mode}
    */
    readonly bootMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#deprecation_time Ami#deprecation_time}
    */
    readonly deprecationTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#description Ami#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#ena_support Ami#ena_support}
    */
    readonly enaSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#id Ami#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#image_location Ami#image_location}
    */
    readonly imageLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#imds_support Ami#imds_support}
    */
    readonly imdsSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#kernel_id Ami#kernel_id}
    */
    readonly kernelId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#name Ami#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#ramdisk_id Ami#ramdisk_id}
    */
    readonly ramdiskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#root_device_name Ami#root_device_name}
    */
    readonly rootDeviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#sriov_net_support Ami#sriov_net_support}
    */
    readonly sriovNetSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#tags Ami#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#tags_all Ami#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#tpm_support Ami#tpm_support}
    */
    readonly tpmSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#uefi_data Ami#uefi_data}
    */
    readonly uefiData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#virtualization_type Ami#virtualization_type}
    */
    readonly virtualizationType?: string;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#ebs_block_device Ami#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#ephemeral_block_device Ami#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#timeouts Ami#timeouts}
    */
    readonly timeouts?: AmiTimeouts;
}
export interface AmiEbsBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#delete_on_termination Ami#delete_on_termination}
    */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#device_name Ami#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#encrypted Ami#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#iops Ami#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#outpost_arn Ami#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#snapshot_id Ami#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#throughput Ami#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#volume_size Ami#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#volume_type Ami#volume_type}
    */
    readonly volumeType?: string;
}
export declare function amiEbsBlockDeviceToTerraform(struct?: AmiEbsBlockDevice | cdktf.IResolvable): any;
export declare function amiEbsBlockDeviceToHclTerraform(struct?: AmiEbsBlockDevice | cdktf.IResolvable): any;
export declare class AmiEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiEbsBlockDevice | cdktf.IResolvable | undefined);
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
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
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
export declare class AmiEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiEbsBlockDeviceOutputReference;
}
export interface AmiEphemeralBlockDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#device_name Ami#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#virtual_name Ami#virtual_name}
    */
    readonly virtualName: string;
}
export declare function amiEphemeralBlockDeviceToTerraform(struct?: AmiEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function amiEphemeralBlockDeviceToHclTerraform(struct?: AmiEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class AmiEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiEphemeralBlockDevice | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    get virtualNameInput(): string | undefined;
}
export declare class AmiEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiEphemeralBlockDeviceOutputReference;
}
export interface AmiTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#create Ami#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#delete Ami#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#update Ami#update}
    */
    readonly update?: string;
}
export declare function amiTimeoutsToTerraform(struct?: AmiTimeouts | cdktf.IResolvable): any;
export declare function amiTimeoutsToHclTerraform(struct?: AmiTimeouts | cdktf.IResolvable): any;
export declare class AmiTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmiTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AmiTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami aws_ami}
*/
export declare class Ami extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ami";
    /**
    * Generates CDKTF code for importing a Ami resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ami to import
    * @param importFromId The id of the existing Ami that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ami to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami aws_ami} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiConfig
    */
    constructor(scope: Construct, id: string, config: AmiConfig);
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string | undefined;
    get arn(): string;
    private _bootMode?;
    get bootMode(): string;
    set bootMode(value: string);
    resetBootMode(): void;
    get bootModeInput(): string | undefined;
    private _deprecationTime?;
    get deprecationTime(): string;
    set deprecationTime(value: string);
    resetDeprecationTime(): void;
    get deprecationTimeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enaSupport?;
    get enaSupport(): boolean | cdktf.IResolvable;
    set enaSupport(value: boolean | cdktf.IResolvable);
    resetEnaSupport(): void;
    get enaSupportInput(): boolean | cdktf.IResolvable | undefined;
    get hypervisor(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageLocation?;
    get imageLocation(): string;
    set imageLocation(value: string);
    resetImageLocation(): void;
    get imageLocationInput(): string | undefined;
    get imageOwnerAlias(): string;
    get imageType(): string;
    private _imdsSupport?;
    get imdsSupport(): string;
    set imdsSupport(value: string);
    resetImdsSupport(): void;
    get imdsSupportInput(): string | undefined;
    private _kernelId?;
    get kernelId(): string;
    set kernelId(value: string);
    resetKernelId(): void;
    get kernelIdInput(): string | undefined;
    get manageEbsSnapshots(): cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ownerId(): string;
    get platform(): string;
    get platformDetails(): string;
    get public(): cdktf.IResolvable;
    private _ramdiskId?;
    get ramdiskId(): string;
    set ramdiskId(value: string);
    resetRamdiskId(): void;
    get ramdiskIdInput(): string | undefined;
    private _rootDeviceName?;
    get rootDeviceName(): string;
    set rootDeviceName(value: string);
    resetRootDeviceName(): void;
    get rootDeviceNameInput(): string | undefined;
    get rootSnapshotId(): string;
    private _sriovNetSupport?;
    get sriovNetSupport(): string;
    set sriovNetSupport(value: string);
    resetSriovNetSupport(): void;
    get sriovNetSupportInput(): string | undefined;
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
    private _tpmSupport?;
    get tpmSupport(): string;
    set tpmSupport(value: string);
    resetTpmSupport(): void;
    get tpmSupportInput(): string | undefined;
    private _uefiData?;
    get uefiData(): string;
    set uefiData(value: string);
    resetUefiData(): void;
    get uefiDataInput(): string | undefined;
    get usageOperation(): string;
    private _virtualizationType?;
    get virtualizationType(): string;
    set virtualizationType(value: string);
    resetVirtualizationType(): void;
    get virtualizationTypeInput(): string | undefined;
    private _ebsBlockDevice;
    get ebsBlockDevice(): AmiEbsBlockDeviceList;
    putEbsBlockDevice(value: AmiEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | AmiEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): AmiEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: AmiEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | AmiEphemeralBlockDevice[] | undefined;
    private _timeouts;
    get timeouts(): AmiTimeoutsOutputReference;
    putTimeouts(value: AmiTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AmiTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
