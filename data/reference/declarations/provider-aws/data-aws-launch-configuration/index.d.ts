/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_configuration#id DataAwsLaunchConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_configuration#name DataAwsLaunchConfiguration#name}
    */
    readonly name: string;
}
export interface DataAwsLaunchConfigurationEbsBlockDevice {
}
export declare function dataAwsLaunchConfigurationEbsBlockDeviceToTerraform(struct?: DataAwsLaunchConfigurationEbsBlockDevice): any;
export declare function dataAwsLaunchConfigurationEbsBlockDeviceToHclTerraform(struct?: DataAwsLaunchConfigurationEbsBlockDevice): any;
export declare class DataAwsLaunchConfigurationEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchConfigurationEbsBlockDevice | undefined;
    set internalValue(value: DataAwsLaunchConfigurationEbsBlockDevice | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get deviceName(): string;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get noDevice(): cdktf.IResolvable;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchConfigurationEbsBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchConfigurationEbsBlockDeviceOutputReference;
}
export interface DataAwsLaunchConfigurationEphemeralBlockDevice {
}
export declare function dataAwsLaunchConfigurationEphemeralBlockDeviceToTerraform(struct?: DataAwsLaunchConfigurationEphemeralBlockDevice): any;
export declare function dataAwsLaunchConfigurationEphemeralBlockDeviceToHclTerraform(struct?: DataAwsLaunchConfigurationEphemeralBlockDevice): any;
export declare class DataAwsLaunchConfigurationEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchConfigurationEphemeralBlockDevice | undefined;
    set internalValue(value: DataAwsLaunchConfigurationEphemeralBlockDevice | undefined);
    get deviceName(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchConfigurationEphemeralBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchConfigurationEphemeralBlockDeviceOutputReference;
}
export interface DataAwsLaunchConfigurationMetadataOptions {
}
export declare function dataAwsLaunchConfigurationMetadataOptionsToTerraform(struct?: DataAwsLaunchConfigurationMetadataOptions): any;
export declare function dataAwsLaunchConfigurationMetadataOptionsToHclTerraform(struct?: DataAwsLaunchConfigurationMetadataOptions): any;
export declare class DataAwsLaunchConfigurationMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchConfigurationMetadataOptions | undefined;
    set internalValue(value: DataAwsLaunchConfigurationMetadataOptions | undefined);
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsLaunchConfigurationMetadataOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchConfigurationMetadataOptionsOutputReference;
}
export interface DataAwsLaunchConfigurationRootBlockDevice {
}
export declare function dataAwsLaunchConfigurationRootBlockDeviceToTerraform(struct?: DataAwsLaunchConfigurationRootBlockDevice): any;
export declare function dataAwsLaunchConfigurationRootBlockDeviceToHclTerraform(struct?: DataAwsLaunchConfigurationRootBlockDevice): any;
export declare class DataAwsLaunchConfigurationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLaunchConfigurationRootBlockDevice | undefined;
    set internalValue(value: DataAwsLaunchConfigurationRootBlockDevice | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchConfigurationRootBlockDeviceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLaunchConfigurationRootBlockDeviceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_configuration aws_launch_configuration}
*/
export declare class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_launch_configuration";
    /**
    * Generates CDKTF code for importing a DataAwsLaunchConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLaunchConfiguration to import
    * @param importFromId The id of the existing DataAwsLaunchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLaunchConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/launch_configuration aws_launch_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLaunchConfigurationConfig);
    get arn(): string;
    get associatePublicIpAddress(): cdktf.IResolvable;
    private _ebsBlockDevice;
    get ebsBlockDevice(): DataAwsLaunchConfigurationEbsBlockDeviceList;
    get ebsOptimized(): cdktf.IResolvable;
    get enableMonitoring(): cdktf.IResolvable;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): DataAwsLaunchConfigurationEphemeralBlockDeviceList;
    get iamInstanceProfile(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageId(): string;
    get instanceType(): string;
    get keyName(): string;
    private _metadataOptions;
    get metadataOptions(): DataAwsLaunchConfigurationMetadataOptionsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get placementTenancy(): string;
    private _rootBlockDevice;
    get rootBlockDevice(): DataAwsLaunchConfigurationRootBlockDeviceList;
    get securityGroups(): string[];
    get spotPrice(): string;
    get userData(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
