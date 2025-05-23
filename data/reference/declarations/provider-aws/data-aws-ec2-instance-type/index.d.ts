/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2InstanceTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type#id DataAwsEc2InstanceType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type#instance_type DataAwsEc2InstanceType#instance_type}
    */
    readonly instanceType: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type#timeouts DataAwsEc2InstanceType#timeouts}
    */
    readonly timeouts?: DataAwsEc2InstanceTypeTimeouts;
}
export interface DataAwsEc2InstanceTypeFpgas {
}
export declare function dataAwsEc2InstanceTypeFpgasToTerraform(struct?: DataAwsEc2InstanceTypeFpgas): any;
export declare function dataAwsEc2InstanceTypeFpgasToHclTerraform(struct?: DataAwsEc2InstanceTypeFpgas): any;
export declare class DataAwsEc2InstanceTypeFpgasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeFpgas | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeFpgas | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeFpgasList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeFpgasOutputReference;
}
export interface DataAwsEc2InstanceTypeGpus {
}
export declare function dataAwsEc2InstanceTypeGpusToTerraform(struct?: DataAwsEc2InstanceTypeGpus): any;
export declare function dataAwsEc2InstanceTypeGpusToHclTerraform(struct?: DataAwsEc2InstanceTypeGpus): any;
export declare class DataAwsEc2InstanceTypeGpusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeGpus | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeGpus | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeGpusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeGpusOutputReference;
}
export interface DataAwsEc2InstanceTypeInferenceAccelerators {
}
export declare function dataAwsEc2InstanceTypeInferenceAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators): any;
export declare function dataAwsEc2InstanceTypeInferenceAcceleratorsToHclTerraform(struct?: DataAwsEc2InstanceTypeInferenceAccelerators): any;
export declare class DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeInferenceAccelerators | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeInferenceAccelerators | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeInferenceAcceleratorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeInferenceAcceleratorsOutputReference;
}
export interface DataAwsEc2InstanceTypeInstanceDisks {
}
export declare function dataAwsEc2InstanceTypeInstanceDisksToTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks): any;
export declare function dataAwsEc2InstanceTypeInstanceDisksToHclTerraform(struct?: DataAwsEc2InstanceTypeInstanceDisks): any;
export declare class DataAwsEc2InstanceTypeInstanceDisksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeInstanceDisks | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeInstanceDisks | undefined);
    get count(): number;
    get size(): number;
    get type(): string;
}
export declare class DataAwsEc2InstanceTypeInstanceDisksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeInstanceDisksOutputReference;
}
export interface DataAwsEc2InstanceTypeMediaAccelerators {
}
export declare function dataAwsEc2InstanceTypeMediaAcceleratorsToTerraform(struct?: DataAwsEc2InstanceTypeMediaAccelerators): any;
export declare function dataAwsEc2InstanceTypeMediaAcceleratorsToHclTerraform(struct?: DataAwsEc2InstanceTypeMediaAccelerators): any;
export declare class DataAwsEc2InstanceTypeMediaAcceleratorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeMediaAccelerators | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeMediaAccelerators | undefined);
    get count(): number;
    get manufacturer(): string;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeMediaAcceleratorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeMediaAcceleratorsOutputReference;
}
export interface DataAwsEc2InstanceTypeNetworkCards {
}
export declare function dataAwsEc2InstanceTypeNetworkCardsToTerraform(struct?: DataAwsEc2InstanceTypeNetworkCards): any;
export declare function dataAwsEc2InstanceTypeNetworkCardsToHclTerraform(struct?: DataAwsEc2InstanceTypeNetworkCards): any;
export declare class DataAwsEc2InstanceTypeNetworkCardsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeNetworkCards | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeNetworkCards | undefined);
    get baselineBandwidth(): number;
    get index(): number;
    get maximumInterfaces(): number;
    get peakBandwidth(): number;
    get performance(): string;
}
export declare class DataAwsEc2InstanceTypeNetworkCardsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeNetworkCardsOutputReference;
}
export interface DataAwsEc2InstanceTypeNeuronDevices {
}
export declare function dataAwsEc2InstanceTypeNeuronDevicesToTerraform(struct?: DataAwsEc2InstanceTypeNeuronDevices): any;
export declare function dataAwsEc2InstanceTypeNeuronDevicesToHclTerraform(struct?: DataAwsEc2InstanceTypeNeuronDevices): any;
export declare class DataAwsEc2InstanceTypeNeuronDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2InstanceTypeNeuronDevices | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeNeuronDevices | undefined);
    get coreCount(): number;
    get coreVersion(): number;
    get count(): number;
    get memorySize(): number;
    get name(): string;
}
export declare class DataAwsEc2InstanceTypeNeuronDevicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2InstanceTypeNeuronDevicesOutputReference;
}
export interface DataAwsEc2InstanceTypeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type#read DataAwsEc2InstanceType#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2InstanceTypeTimeoutsToTerraform(struct?: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2InstanceTypeTimeoutsToHclTerraform(struct?: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2InstanceTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2InstanceTypeTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type aws_ec2_instance_type}
*/
export declare class DataAwsEc2InstanceType extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_instance_type";
    /**
    * Generates CDKTF code for importing a DataAwsEc2InstanceType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2InstanceType to import
    * @param importFromId The id of the existing DataAwsEc2InstanceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2InstanceType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_instance_type aws_ec2_instance_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2InstanceTypeConfig);
    get autoRecoverySupported(): cdktf.IResolvable;
    get bandwidthWeightings(): string[];
    get bareMetal(): cdktf.IResolvable;
    get bootModes(): string[];
    get burstablePerformanceSupported(): cdktf.IResolvable;
    get currentGeneration(): cdktf.IResolvable;
    get dedicatedHostsSupported(): cdktf.IResolvable;
    get defaultCores(): number;
    get defaultNetworkCardIndex(): number;
    get defaultThreadsPerCore(): number;
    get defaultVcpus(): number;
    get ebsEncryptionSupport(): string;
    get ebsNvmeSupport(): string;
    get ebsOptimizedSupport(): string;
    get ebsPerformanceBaselineBandwidth(): number;
    get ebsPerformanceBaselineIops(): number;
    get ebsPerformanceBaselineThroughput(): number;
    get ebsPerformanceMaximumBandwidth(): number;
    get ebsPerformanceMaximumIops(): number;
    get ebsPerformanceMaximumThroughput(): number;
    get efaMaximumInterfaces(): number;
    get efaSupported(): cdktf.IResolvable;
    get enaSrdSupported(): cdktf.IResolvable;
    get enaSupport(): string;
    get encryptionInTransitSupported(): cdktf.IResolvable;
    private _fpgas;
    get fpgas(): DataAwsEc2InstanceTypeFpgasList;
    get freeTierEligible(): cdktf.IResolvable;
    private _gpus;
    get gpus(): DataAwsEc2InstanceTypeGpusList;
    get hibernationSupported(): cdktf.IResolvable;
    get hypervisor(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inferenceAccelerators;
    get inferenceAccelerators(): DataAwsEc2InstanceTypeInferenceAcceleratorsList;
    private _instanceDisks;
    get instanceDisks(): DataAwsEc2InstanceTypeInstanceDisksList;
    get instanceStorageSupported(): cdktf.IResolvable;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    get ipv6Supported(): cdktf.IResolvable;
    get maximumIpv4AddressesPerInterface(): number;
    get maximumIpv6AddressesPerInterface(): number;
    get maximumNetworkCards(): number;
    get maximumNetworkInterfaces(): number;
    private _mediaAccelerators;
    get mediaAccelerators(): DataAwsEc2InstanceTypeMediaAcceleratorsList;
    get memorySize(): number;
    private _networkCards;
    get networkCards(): DataAwsEc2InstanceTypeNetworkCardsList;
    get networkPerformance(): string;
    private _neuronDevices;
    get neuronDevices(): DataAwsEc2InstanceTypeNeuronDevicesList;
    get nitroEnclavesSupport(): string;
    get nitroTpmSupport(): string;
    get nitroTpmSupportedVersions(): string[];
    get phcSupport(): string;
    get supportedArchitectures(): string[];
    get supportedCpuFeatures(): string[];
    get supportedPlacementStrategies(): string[];
    get supportedRootDeviceTypes(): string[];
    get supportedUsagesClasses(): string[];
    get supportedVirtualizationTypes(): string[];
    get sustainedClockSpeed(): number;
    get totalFpgaMemory(): number;
    get totalGpuMemory(): number;
    get totalInferenceMemory(): number;
    get totalInstanceStorage(): number;
    get totalMediaMemory(): number;
    get totalNeuronDeviceMemory(): number;
    get validCores(): number[];
    get validThreadsPerCore(): number[];
    private _timeouts;
    get timeouts(): DataAwsEc2InstanceTypeTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2InstanceTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2InstanceTypeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
