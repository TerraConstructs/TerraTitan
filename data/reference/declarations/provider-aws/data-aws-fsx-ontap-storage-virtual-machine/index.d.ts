/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsFsxOntapStorageVirtualMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#filter DataAwsFsxOntapStorageVirtualMachine#filter}
    */
    readonly filter?: DataAwsFsxOntapStorageVirtualMachineFilter[] | cdktf.IResolvable;
}
export interface DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
}
export declare function dataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any;
export declare function dataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any;
export declare class DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined);
    get dnsIps(): string[];
    get domainName(): string;
    get fileSystemAdministratorsGroup(): string;
    get organizationalUnitDistinguishedName(): string;
    get username(): string;
}
export declare class DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration {
}
export declare function dataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any;
export declare function dataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any;
export declare class DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined);
    get netbiosName(): string;
    private _selfManagedActiveDirectoryConfiguration;
    get selfManagedActiveDirectoryConfiguration(): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList;
}
export declare class DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi {
}
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsIscsiToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi): any;
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsIscsiToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi): any;
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineEndpointsManagement {
}
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsManagementToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsManagement): any;
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsManagementToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsManagement): any;
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineEndpointsManagement | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineEndpointsManagement | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineEndpointsNfs {
}
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsNfsToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsNfs): any;
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsNfsToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsNfs): any;
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineEndpointsNfs | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineEndpointsNfs | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineEndpointsSmb {
}
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsSmbToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsSmb): any;
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsSmbToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpointsSmb): any;
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineEndpointsSmb | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineEndpointsSmb | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineEndpoints {
}
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpoints): any;
export declare function dataAwsFsxOntapStorageVirtualMachineEndpointsToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineEndpoints): any;
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineEndpoints | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineEndpoints | undefined);
    private _iscsi;
    get iscsi(): DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList;
    private _management;
    get management(): DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList;
    private _nfs;
    get nfs(): DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList;
    private _smb;
    get smb(): DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList;
}
export declare class DataAwsFsxOntapStorageVirtualMachineEndpointsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason {
}
export declare function dataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason): any;
export declare function dataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason): any;
export declare class DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason | undefined);
    get message(): string;
}
export declare class DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList extends cdktf.ComplexList {
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
    get(index: number): DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference;
}
export interface DataAwsFsxOntapStorageVirtualMachineFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#name DataAwsFsxOntapStorageVirtualMachine#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#values DataAwsFsxOntapStorageVirtualMachine#values}
    */
    readonly values: string[];
}
export declare function dataAwsFsxOntapStorageVirtualMachineFilterToTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineFilter | cdktf.IResolvable): any;
export declare function dataAwsFsxOntapStorageVirtualMachineFilterToHclTerraform(struct?: DataAwsFsxOntapStorageVirtualMachineFilter | cdktf.IResolvable): any;
export declare class DataAwsFsxOntapStorageVirtualMachineFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsFsxOntapStorageVirtualMachineFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsFsxOntapStorageVirtualMachineFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsFsxOntapStorageVirtualMachineFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsFsxOntapStorageVirtualMachineFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsFsxOntapStorageVirtualMachineFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}
*/
export declare class DataAwsFsxOntapStorageVirtualMachine extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_fsx_ontap_storage_virtual_machine";
    /**
    * Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsFsxOntapStorageVirtualMachine to import
    * @param importFromId The id of the existing DataAwsFsxOntapStorageVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsFsxOntapStorageVirtualMachine to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsFsxOntapStorageVirtualMachineConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsFsxOntapStorageVirtualMachineConfig);
    private _activeDirectoryConfiguration;
    get activeDirectoryConfiguration(): DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList;
    get arn(): string;
    get creationTime(): string;
    private _endpoints;
    get endpoints(): DataAwsFsxOntapStorageVirtualMachineEndpointsList;
    get fileSystemId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lifecycleStatus(): string;
    private _lifecycleTransitionReason;
    get lifecycleTransitionReason(): DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList;
    get name(): string;
    get subtype(): string;
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
    get uuid(): string;
    private _filter;
    get filter(): DataAwsFsxOntapStorageVirtualMachineFilterList;
    putFilter(value: DataAwsFsxOntapStorageVirtualMachineFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsFsxOntapStorageVirtualMachineFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
