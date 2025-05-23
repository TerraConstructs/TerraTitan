/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsFsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_file_system#id DataAwsFsxOntapFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_file_system#tags DataAwsFsxOntapFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsFsxOntapFileSystemDiskIopsConfiguration {
}
export declare function dataAwsFsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: DataAwsFsxOntapFileSystemDiskIopsConfiguration): any;
export declare function dataAwsFsxOntapFileSystemDiskIopsConfigurationToHclTerraform(struct?: DataAwsFsxOntapFileSystemDiskIopsConfiguration): any;
export declare class DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapFileSystemDiskIopsConfiguration | undefined;
    set internalValue(value: DataAwsFsxOntapFileSystemDiskIopsConfiguration | undefined);
    get iops(): number;
    get mode(): string;
}
export declare class DataAwsFsxOntapFileSystemDiskIopsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapFileSystemDiskIopsConfigurationOutputReference;
}
export interface DataAwsFsxOntapFileSystemEndpointsIntercluster {
}
export declare function dataAwsFsxOntapFileSystemEndpointsInterclusterToTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsIntercluster): any;
export declare function dataAwsFsxOntapFileSystemEndpointsInterclusterToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsIntercluster): any;
export declare class DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapFileSystemEndpointsIntercluster | undefined;
    set internalValue(value: DataAwsFsxOntapFileSystemEndpointsIntercluster | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapFileSystemEndpointsInterclusterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapFileSystemEndpointsInterclusterOutputReference;
}
export interface DataAwsFsxOntapFileSystemEndpointsManagement {
}
export declare function dataAwsFsxOntapFileSystemEndpointsManagementToTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsManagement): any;
export declare function dataAwsFsxOntapFileSystemEndpointsManagementToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpointsManagement): any;
export declare class DataAwsFsxOntapFileSystemEndpointsManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapFileSystemEndpointsManagement | undefined;
    set internalValue(value: DataAwsFsxOntapFileSystemEndpointsManagement | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapFileSystemEndpointsManagementList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapFileSystemEndpointsManagementOutputReference;
}
export interface DataAwsFsxOntapFileSystemEndpoints {
}
export declare function dataAwsFsxOntapFileSystemEndpointsToTerraform(struct?: DataAwsFsxOntapFileSystemEndpoints): any;
export declare function dataAwsFsxOntapFileSystemEndpointsToHclTerraform(struct?: DataAwsFsxOntapFileSystemEndpoints): any;
export declare class DataAwsFsxOntapFileSystemEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapFileSystemEndpoints | undefined;
    set internalValue(value: DataAwsFsxOntapFileSystemEndpoints | undefined);
    private _intercluster;
    get intercluster(): DataAwsFsxOntapFileSystemEndpointsInterclusterList;
    private _management;
    get management(): DataAwsFsxOntapFileSystemEndpointsManagementList;
}
export declare class DataAwsFsxOntapFileSystemEndpointsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapFileSystemEndpointsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system}
*/
export declare class DataAwsFsxOntapFileSystem extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_fsx_ontap_file_system";
    /**
    * Generates CDKTF code for importing a DataAwsFsxOntapFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsFsxOntapFileSystem to import
    * @param importFromId The id of the existing DataAwsFsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsFsxOntapFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_file_system aws_fsx_ontap_file_system} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsFsxOntapFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsFsxOntapFileSystemConfig);
    get arn(): string;
    get automaticBackupRetentionDays(): number;
    get dailyAutomaticBackupStartTime(): string;
    get deploymentType(): string;
    private _diskIopsConfiguration;
    get diskIopsConfiguration(): DataAwsFsxOntapFileSystemDiskIopsConfigurationList;
    get dnsName(): string;
    get endpointIpAddressRange(): string;
    private _endpoints;
    get endpoints(): DataAwsFsxOntapFileSystemEndpointsList;
    get haPairs(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get preferredSubnetId(): string;
    get routeTableIds(): string[];
    get storageCapacity(): number;
    get storageType(): string;
    get subnetIds(): string[];
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
    get throughputCapacity(): number;
    get throughputCapacityPerHaPair(): number;
    get vpcId(): string;
    get weeklyMaintenanceStartTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
