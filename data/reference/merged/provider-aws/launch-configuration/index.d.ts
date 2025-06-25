/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Associate a public ip address with an instance in a VPC. */
    readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
    /** (Optional) If true, the launched EC2 instance will be EBS-optimized. */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /** (Optional) Enables/disables detailed monitoring. This is enabled by default. */
    readonly enableMonitoring?: boolean | cdktf.IResolvable;
    /** (Optional) The name attribute of the IAM instance profile to associate with launched instances. */
    readonly iamInstanceProfile?: string;
    /** */
    readonly id?: string;
    /** (Required) The EC2 image ID to launch. */
    readonly imageId: string;
    /** (Required) The size of instance to launch. */
    readonly instanceType: string;
    /** (Optional) The key name that should be used for the instance. */
    readonly keyName?: string;
    /** (Optional) The name of the launch configuration. If you leave this blank, Terraform will auto-generate a unique name. Conflicts with `namePrefix`. */
    readonly name?: string;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    readonly namePrefix?: string;
    /** (Optional) The tenancy of the instance. Valid values are `default` or `dedicated`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html) for more details. */
    readonly placementTenancy?: string;
    /** (Optional) A list of associated security group IDS. */
    readonly securityGroups?: string[];
    /** (Optional; Default: On-demand price) The maximum price to use for reserving spot instances. */
    readonly spotPrice?: string;
    /** (Optional) The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `userDataBase64` instead. */
    readonly userData?: string;
    /** (Optional) Can be used instead of `userData` to pass base64-encoded binary data directly. Use this instead of `userData` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption. */
    readonly userDataBase64?: string;
    /** */
    readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[] | cdktf.IResolvable;
    /** */
    readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[] | cdktf.IResolvable;
    /** */
    readonly metadataOptions?: LaunchConfigurationMetadataOptions;
    /** */
    readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice;
}
export interface LaunchConfigurationEbsBlockDevice {
    /** (Optional) Whether the volume should be destroyed on instance termination (Default: `true`). */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /** (Required) The name of the device to mount. */
    readonly deviceName: string;
    /** (Optional) Whether the volume should be encrypted or not. Defaults to `false`. */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /** (Optional) The amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). */
    readonly iops?: number;
    /** (Optional) Whether the device in the block device mapping of the AMI is suppressed. */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /** (Optional) The Snapshot ID to mount. */
    readonly snapshotId?: string;
    /** (Optional) The throughput (MiBps) to provision for a `gp3` volume. */
    readonly throughput?: number;
    /** (Optional) The size of the volume in gigabytes. */
    readonly volumeSize?: number;
    /** (Optional) The type of volume. Can be `standard`, `gp2`, `gp3`, `st1`, `sc1` or `io1`. */
    readonly volumeType?: string;
}
export declare function launchConfigurationEbsBlockDeviceToTerraform(struct?: LaunchConfigurationEbsBlockDevice | cdktf.IResolvable): any;
export declare function launchConfigurationEbsBlockDeviceToHclTerraform(struct?: LaunchConfigurationEbsBlockDevice | cdktf.IResolvable): any;
export declare class LaunchConfigurationEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchConfigurationEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchConfigurationEbsBlockDevice | cdktf.IResolvable | undefined);
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
    private _noDevice?;
    get noDevice(): boolean | cdktf.IResolvable;
    set noDevice(value: boolean | cdktf.IResolvable);
    resetNoDevice(): void;
    get noDeviceInput(): boolean | cdktf.IResolvable | undefined;
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
export declare class LaunchConfigurationEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchConfigurationEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchConfigurationEbsBlockDeviceOutputReference;
}
export interface LaunchConfigurationEphemeralBlockDevice {
    /** (Required) The name of the block device to mount on the instance. */
    readonly deviceName: string;
    /** (Optional) Whether the device in the block device mapping of the AMI is suppressed. */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /** (Optional) The [Instance Store Device Name](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#InstanceStoreDeviceNames). */
    readonly virtualName?: string;
}
export declare function launchConfigurationEphemeralBlockDeviceToTerraform(struct?: LaunchConfigurationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function launchConfigurationEphemeralBlockDeviceToHclTerraform(struct?: LaunchConfigurationEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class LaunchConfigurationEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LaunchConfigurationEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: LaunchConfigurationEphemeralBlockDevice | cdktf.IResolvable | undefined);
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
export declare class LaunchConfigurationEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LaunchConfigurationEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LaunchConfigurationEphemeralBlockDeviceOutputReference;
}
export interface LaunchConfigurationMetadataOptions {
    /** */
    readonly httpEndpoint?: string;
    /** */
    readonly httpPutResponseHopLimit?: number;
    /** */
    readonly httpTokens?: string;
}
export declare function launchConfigurationMetadataOptionsToTerraform(struct?: LaunchConfigurationMetadataOptionsOutputReference | LaunchConfigurationMetadataOptions): any;
export declare function launchConfigurationMetadataOptionsToHclTerraform(struct?: LaunchConfigurationMetadataOptionsOutputReference | LaunchConfigurationMetadataOptions): any;
export declare class LaunchConfigurationMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchConfigurationMetadataOptions | undefined;
    set internalValue(value: LaunchConfigurationMetadataOptions | undefined);
    private _httpEndpoint?;
    get httpEndpoint(): string;
    set httpEndpoint(value: string);
    resetHttpEndpoint(): void;
    get httpEndpointInput(): string | undefined;
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
}
export interface LaunchConfigurationRootBlockDevice {
    /** (Optional) Whether the volume should be destroyed on instance termination. Defaults to `true`. */
    readonly deleteOnTermination?: boolean | cdktf.IResolvable;
    /** (Optional) Whether the volume should be encrypted or not. Defaults to `false`. */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /** (Optional) The amount of provisioned [IOPS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-io-characteristics.html). This must be set with a `volumeType` of `io1`. */
    readonly iops?: number;
    /** (Optional) The throughput (MiBps) to provision for a `gp3` volume. */
    readonly throughput?: number;
    /** (Optional) The size of the volume in gigabytes. */
    readonly volumeSize?: number;
    /** (Optional) The type of volume. Can be `standard`, `gp2`, `gp3`, `st1`, `sc1` or `io1`. */
    readonly volumeType?: string;
}
export declare function launchConfigurationRootBlockDeviceToTerraform(struct?: LaunchConfigurationRootBlockDeviceOutputReference | LaunchConfigurationRootBlockDevice): any;
export declare function launchConfigurationRootBlockDeviceToHclTerraform(struct?: LaunchConfigurationRootBlockDeviceOutputReference | LaunchConfigurationRootBlockDevice): any;
export declare class LaunchConfigurationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LaunchConfigurationRootBlockDevice | undefined;
    set internalValue(value: LaunchConfigurationRootBlockDevice | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_configuration aws_launch_configuration}
*/
export declare class LaunchConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_launch_configuration";
    /**
    * Generates CDKTF code for importing a LaunchConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LaunchConfiguration to import
    * @param importFromId The id of the existing LaunchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LaunchConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/launch_configuration aws_launch_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LaunchConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: LaunchConfigurationConfig);
    get arn(): string;
    private _associatePublicIpAddress?;
    get associatePublicIpAddress(): boolean | cdktf.IResolvable;
    set associatePublicIpAddress(value: boolean | cdktf.IResolvable);
    resetAssociatePublicIpAddress(): void;
    get associatePublicIpAddressInput(): boolean | cdktf.IResolvable | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _enableMonitoring?;
    get enableMonitoring(): boolean | cdktf.IResolvable;
    set enableMonitoring(value: boolean | cdktf.IResolvable);
    resetEnableMonitoring(): void;
    get enableMonitoringInput(): boolean | cdktf.IResolvable | undefined;
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
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
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
    private _placementTenancy?;
    get placementTenancy(): string;
    set placementTenancy(value: string);
    resetPlacementTenancy(): void;
    get placementTenancyInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _spotPrice?;
    get spotPrice(): string;
    set spotPrice(value: string);
    resetSpotPrice(): void;
    get spotPriceInput(): string | undefined;
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
    private _ebsBlockDevice;
    get ebsBlockDevice(): LaunchConfigurationEbsBlockDeviceList;
    putEbsBlockDevice(value: LaunchConfigurationEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | LaunchConfigurationEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): LaunchConfigurationEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | LaunchConfigurationEphemeralBlockDevice[] | undefined;
    private _metadataOptions;
    get metadataOptions(): LaunchConfigurationMetadataOptionsOutputReference;
    putMetadataOptions(value: LaunchConfigurationMetadataOptions): void;
    resetMetadataOptions(): void;
    get metadataOptionsInput(): LaunchConfigurationMetadataOptions | undefined;
    private _rootBlockDevice;
    get rootBlockDevice(): LaunchConfigurationRootBlockDeviceOutputReference;
    putRootBlockDevice(value: LaunchConfigurationRootBlockDevice): void;
    resetRootBlockDevice(): void;
    get rootBlockDeviceInput(): LaunchConfigurationRootBlockDevice | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
