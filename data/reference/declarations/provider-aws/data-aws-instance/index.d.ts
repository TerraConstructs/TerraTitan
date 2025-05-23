/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#get_password_data DataAwsInstance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#get_user_data DataAwsInstance#get_user_data}
    */
    readonly fetchUserData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#id DataAwsInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#instance_id DataAwsInstance#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#instance_tags DataAwsInstance#instance_tags}
    */
    readonly instanceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#tags DataAwsInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#filter DataAwsInstance#filter}
    */
    readonly filter?: DataAwsInstanceFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#timeouts DataAwsInstance#timeouts}
    */
    readonly timeouts?: DataAwsInstanceTimeouts;
}
export interface DataAwsInstanceCreditSpecification {
}
export declare function dataAwsInstanceCreditSpecificationToTerraform(struct?: DataAwsInstanceCreditSpecification): any;
export declare function dataAwsInstanceCreditSpecificationToHclTerraform(struct?: DataAwsInstanceCreditSpecification): any;
export declare class DataAwsInstanceCreditSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceCreditSpecification | undefined;
    set internalValue(value: DataAwsInstanceCreditSpecification | undefined);
    get cpuCredits(): string;
}
export declare class DataAwsInstanceCreditSpecificationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceCreditSpecificationOutputReference;
}
export interface DataAwsInstanceEbsBlockDevice {
}
export declare function dataAwsInstanceEbsBlockDeviceToTerraform(struct?: DataAwsInstanceEbsBlockDevice): any;
export declare function dataAwsInstanceEbsBlockDeviceToHclTerraform(struct?: DataAwsInstanceEbsBlockDevice): any;
export declare class DataAwsInstanceEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceEbsBlockDevice | undefined;
    set internalValue(value: DataAwsInstanceEbsBlockDevice | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get deviceName(): string;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsInstanceEbsBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceEbsBlockDeviceOutputReference;
}
export interface DataAwsInstanceEnclaveOptions {
}
export declare function dataAwsInstanceEnclaveOptionsToTerraform(struct?: DataAwsInstanceEnclaveOptions): any;
export declare function dataAwsInstanceEnclaveOptionsToHclTerraform(struct?: DataAwsInstanceEnclaveOptions): any;
export declare class DataAwsInstanceEnclaveOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceEnclaveOptions | undefined;
    set internalValue(value: DataAwsInstanceEnclaveOptions | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsInstanceEnclaveOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceEnclaveOptionsOutputReference;
}
export interface DataAwsInstanceEphemeralBlockDevice {
}
export declare function dataAwsInstanceEphemeralBlockDeviceToTerraform(struct?: DataAwsInstanceEphemeralBlockDevice): any;
export declare function dataAwsInstanceEphemeralBlockDeviceToHclTerraform(struct?: DataAwsInstanceEphemeralBlockDevice): any;
export declare class DataAwsInstanceEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceEphemeralBlockDevice | undefined;
    set internalValue(value: DataAwsInstanceEphemeralBlockDevice | undefined);
    get deviceName(): string;
    get noDevice(): cdktf.IResolvable;
    get virtualName(): string;
}
export declare class DataAwsInstanceEphemeralBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceEphemeralBlockDeviceOutputReference;
}
export interface DataAwsInstanceMaintenanceOptions {
}
export declare function dataAwsInstanceMaintenanceOptionsToTerraform(struct?: DataAwsInstanceMaintenanceOptions): any;
export declare function dataAwsInstanceMaintenanceOptionsToHclTerraform(struct?: DataAwsInstanceMaintenanceOptions): any;
export declare class DataAwsInstanceMaintenanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceMaintenanceOptions | undefined;
    set internalValue(value: DataAwsInstanceMaintenanceOptions | undefined);
    get autoRecovery(): string;
}
export declare class DataAwsInstanceMaintenanceOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceMaintenanceOptionsOutputReference;
}
export interface DataAwsInstanceMetadataOptions {
}
export declare function dataAwsInstanceMetadataOptionsToTerraform(struct?: DataAwsInstanceMetadataOptions): any;
export declare function dataAwsInstanceMetadataOptionsToHclTerraform(struct?: DataAwsInstanceMetadataOptions): any;
export declare class DataAwsInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceMetadataOptions | undefined;
    set internalValue(value: DataAwsInstanceMetadataOptions | undefined);
    get httpEndpoint(): string;
    get httpProtocolIpv6(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
    get instanceMetadataTags(): string;
}
export declare class DataAwsInstanceMetadataOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceMetadataOptionsOutputReference;
}
export interface DataAwsInstancePrivateDnsNameOptions {
}
export declare function dataAwsInstancePrivateDnsNameOptionsToTerraform(struct?: DataAwsInstancePrivateDnsNameOptions): any;
export declare function dataAwsInstancePrivateDnsNameOptionsToHclTerraform(struct?: DataAwsInstancePrivateDnsNameOptions): any;
export declare class DataAwsInstancePrivateDnsNameOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstancePrivateDnsNameOptions | undefined;
    set internalValue(value: DataAwsInstancePrivateDnsNameOptions | undefined);
    get enableResourceNameDnsARecord(): cdktf.IResolvable;
    get enableResourceNameDnsAaaaRecord(): cdktf.IResolvable;
    get hostnameType(): string;
}
export declare class DataAwsInstancePrivateDnsNameOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstancePrivateDnsNameOptionsOutputReference;
}
export interface DataAwsInstanceRootBlockDevice {
}
export declare function dataAwsInstanceRootBlockDeviceToTerraform(struct?: DataAwsInstanceRootBlockDevice): any;
export declare function dataAwsInstanceRootBlockDeviceToHclTerraform(struct?: DataAwsInstanceRootBlockDevice): any;
export declare class DataAwsInstanceRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceRootBlockDevice | undefined;
    set internalValue(value: DataAwsInstanceRootBlockDevice | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get deviceName(): string;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get kmsKeyId(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsInstanceRootBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsInstanceRootBlockDeviceOutputReference;
}
export interface DataAwsInstanceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#name DataAwsInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#values DataAwsInstance#values}
    */
    readonly values: string[];
}
export declare function dataAwsInstanceFilterToTerraform(struct?: DataAwsInstanceFilter | cdktf.IResolvable): any;
export declare function dataAwsInstanceFilterToHclTerraform(struct?: DataAwsInstanceFilter | cdktf.IResolvable): any;
export declare class DataAwsInstanceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstanceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInstanceFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsInstanceFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsInstanceFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsInstanceFilterOutputReference;
}
export interface DataAwsInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#read DataAwsInstance#read}
    */
    readonly read?: string;
}
export declare function dataAwsInstanceTimeoutsToTerraform(struct?: DataAwsInstanceTimeouts | cdktf.IResolvable): any;
export declare function dataAwsInstanceTimeoutsToHclTerraform(struct?: DataAwsInstanceTimeouts | cdktf.IResolvable): any;
export declare class DataAwsInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInstanceTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance aws_instance}
*/
export declare class DataAwsInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_instance";
    /**
    * Generates CDKTF code for importing a DataAwsInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsInstance to import
    * @param importFromId The id of the existing DataAwsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instance aws_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInstanceConfig);
    get ami(): string;
    get arn(): string;
    get associatePublicIpAddress(): cdktf.IResolvable;
    get availabilityZone(): string;
    private _creditSpecification;
    get creditSpecification(): DataAwsInstanceCreditSpecificationList;
    get disableApiStop(): cdktf.IResolvable;
    get disableApiTermination(): cdktf.IResolvable;
    private _ebsBlockDevice;
    get ebsBlockDevice(): DataAwsInstanceEbsBlockDeviceList;
    get ebsOptimized(): cdktf.IResolvable;
    private _enclaveOptions;
    get enclaveOptions(): DataAwsInstanceEnclaveOptionsList;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): DataAwsInstanceEphemeralBlockDeviceList;
    private _getPasswordData?;
    get fetchPasswordData(): boolean | cdktf.IResolvable;
    set fetchPasswordData(value: boolean | cdktf.IResolvable);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | cdktf.IResolvable | undefined;
    private _getUserData?;
    get fetchUserData(): boolean | cdktf.IResolvable;
    set fetchUserData(value: boolean | cdktf.IResolvable);
    resetFetchUserData(): void;
    get fetchUserDataInput(): boolean | cdktf.IResolvable | undefined;
    get hostId(): string;
    get hostResourceGroupArn(): string;
    get iamInstanceProfile(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    get instanceState(): string;
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    };
    set instanceTags(value: {
        [key: string]: string;
    });
    resetInstanceTags(): void;
    get instanceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get instanceType(): string;
    get ipv6Addresses(): string[];
    get keyName(): string;
    get launchTime(): string;
    private _maintenanceOptions;
    get maintenanceOptions(): DataAwsInstanceMaintenanceOptionsList;
    private _metadataOptions;
    get metadataOptions(): DataAwsInstanceMetadataOptionsList;
    get monitoring(): cdktf.IResolvable;
    get networkInterfaceId(): string;
    get outpostArn(): string;
    get passwordData(): string;
    get placementGroup(): string;
    get placementPartitionNumber(): number;
    get privateDns(): string;
    private _privateDnsNameOptions;
    get privateDnsNameOptions(): DataAwsInstancePrivateDnsNameOptionsList;
    get privateIp(): string;
    get publicDns(): string;
    get publicIp(): string;
    private _rootBlockDevice;
    get rootBlockDevice(): DataAwsInstanceRootBlockDeviceList;
    get secondaryPrivateIps(): string[];
    get securityGroups(): string[];
    get sourceDestCheck(): cdktf.IResolvable;
    get subnetId(): string;
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
    get tenancy(): string;
    get userData(): string;
    get userDataBase64(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter;
    get filter(): DataAwsInstanceFilterList;
    putFilter(value: DataAwsInstanceFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsInstanceFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsInstanceTimeoutsOutputReference;
    putTimeouts(value: DataAwsInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
