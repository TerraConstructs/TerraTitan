/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOntapStorageVirtualMachineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#file_system_id FsxOntapStorageVirtualMachine#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#id FsxOntapStorageVirtualMachine#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#name FsxOntapStorageVirtualMachine#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}
    */
    readonly rootVolumeSecurityStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}
    */
    readonly svmAdminPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#tags FsxOntapStorageVirtualMachine#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#tags_all FsxOntapStorageVirtualMachine#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * active_directory_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}
    */
    readonly activeDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#timeouts FsxOntapStorageVirtualMachine#timeouts}
    */
    readonly timeouts?: FsxOntapStorageVirtualMachineTimeouts;
}
export interface FsxOntapStorageVirtualMachineEndpointsIscsi {
}
export declare function fsxOntapStorageVirtualMachineEndpointsIscsiToTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsIscsi): any;
export declare function fsxOntapStorageVirtualMachineEndpointsIscsiToHclTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsIscsi): any;
export declare class FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineEndpointsIscsi | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineEndpointsIscsi | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsIscsiList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapStorageVirtualMachineEndpointsIscsiOutputReference;
}
export interface FsxOntapStorageVirtualMachineEndpointsManagement {
}
export declare function fsxOntapStorageVirtualMachineEndpointsManagementToTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsManagement): any;
export declare function fsxOntapStorageVirtualMachineEndpointsManagementToHclTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsManagement): any;
export declare class FsxOntapStorageVirtualMachineEndpointsManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineEndpointsManagement | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineEndpointsManagement | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsManagementList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapStorageVirtualMachineEndpointsManagementOutputReference;
}
export interface FsxOntapStorageVirtualMachineEndpointsNfs {
}
export declare function fsxOntapStorageVirtualMachineEndpointsNfsToTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsNfs): any;
export declare function fsxOntapStorageVirtualMachineEndpointsNfsToHclTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsNfs): any;
export declare class FsxOntapStorageVirtualMachineEndpointsNfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineEndpointsNfs | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineEndpointsNfs | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsNfsList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapStorageVirtualMachineEndpointsNfsOutputReference;
}
export interface FsxOntapStorageVirtualMachineEndpointsSmb {
}
export declare function fsxOntapStorageVirtualMachineEndpointsSmbToTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsSmb): any;
export declare function fsxOntapStorageVirtualMachineEndpointsSmbToHclTerraform(struct?: FsxOntapStorageVirtualMachineEndpointsSmb): any;
export declare class FsxOntapStorageVirtualMachineEndpointsSmbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineEndpointsSmb | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineEndpointsSmb | undefined);
    get dnsName(): string;
    get ipAddresses(): string[];
}
export declare class FsxOntapStorageVirtualMachineEndpointsSmbList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapStorageVirtualMachineEndpointsSmbOutputReference;
}
export interface FsxOntapStorageVirtualMachineEndpoints {
}
export declare function fsxOntapStorageVirtualMachineEndpointsToTerraform(struct?: FsxOntapStorageVirtualMachineEndpoints): any;
export declare function fsxOntapStorageVirtualMachineEndpointsToHclTerraform(struct?: FsxOntapStorageVirtualMachineEndpoints): any;
export declare class FsxOntapStorageVirtualMachineEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FsxOntapStorageVirtualMachineEndpoints | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineEndpoints | undefined);
    private _iscsi;
    get iscsi(): FsxOntapStorageVirtualMachineEndpointsIscsiList;
    private _management;
    get management(): FsxOntapStorageVirtualMachineEndpointsManagementList;
    private _nfs;
    get nfs(): FsxOntapStorageVirtualMachineEndpointsNfsList;
    private _smb;
    get smb(): FsxOntapStorageVirtualMachineEndpointsSmbList;
}
export declare class FsxOntapStorageVirtualMachineEndpointsList extends cdktf.ComplexList {
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
    get(index: number): FsxOntapStorageVirtualMachineEndpointsOutputReference;
}
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#dns_ips FsxOntapStorageVirtualMachine#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#domain_name FsxOntapStorageVirtualMachine#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#organizational_unit_distinguished_name FsxOntapStorageVirtualMachine#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#password FsxOntapStorageVirtualMachine#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#username FsxOntapStorageVirtualMachine#username}
    */
    readonly username: string;
}
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any;
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToHclTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any;
export declare class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined);
    private _dnsIps?;
    get dnsIps(): string[];
    set dnsIps(value: string[]);
    get dnsIpsInput(): string[] | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _fileSystemAdministratorsGroup?;
    get fileSystemAdministratorsGroup(): string;
    set fileSystemAdministratorsGroup(value: string);
    resetFileSystemAdministratorsGroup(): void;
    get fileSystemAdministratorsGroupInput(): string | undefined;
    private _organizationalUnitDistinguishedName?;
    get organizationalUnitDistinguishedName(): string;
    set organizationalUnitDistinguishedName(value: string);
    resetOrganizationalUnitDistinguishedName(): void;
    get organizationalUnitDistinguishedNameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#netbios_name FsxOntapStorageVirtualMachine#netbios_name}
    */
    readonly netbiosName?: string;
    /**
    * self_managed_active_directory_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}
    */
    readonly selfManagedActiveDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any;
export declare function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToHclTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any;
export declare class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined);
    private _netbiosName?;
    get netbiosName(): string;
    set netbiosName(value: string);
    resetNetbiosName(): void;
    get netbiosNameInput(): string | undefined;
    private _selfManagedActiveDirectoryConfiguration;
    get selfManagedActiveDirectoryConfiguration(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference;
    putSelfManagedActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): void;
    resetSelfManagedActiveDirectoryConfiguration(): void;
    get selfManagedActiveDirectoryConfigurationInput(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined;
}
export interface FsxOntapStorageVirtualMachineTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#create FsxOntapStorageVirtualMachine#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#delete FsxOntapStorageVirtualMachine#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#update FsxOntapStorageVirtualMachine#update}
    */
    readonly update?: string;
}
export declare function fsxOntapStorageVirtualMachineTimeoutsToTerraform(struct?: FsxOntapStorageVirtualMachineTimeouts | cdktf.IResolvable): any;
export declare function fsxOntapStorageVirtualMachineTimeoutsToHclTerraform(struct?: FsxOntapStorageVirtualMachineTimeouts | cdktf.IResolvable): any;
export declare class FsxOntapStorageVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOntapStorageVirtualMachineTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOntapStorageVirtualMachineTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}
*/
export declare class FsxOntapStorageVirtualMachine extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_ontap_storage_virtual_machine";
    /**
    * Generates CDKTF code for importing a FsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOntapStorageVirtualMachine to import
    * @param importFromId The id of the existing FsxOntapStorageVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOntapStorageVirtualMachine to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapStorageVirtualMachineConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapStorageVirtualMachineConfig);
    get arn(): string;
    private _endpoints;
    get endpoints(): FsxOntapStorageVirtualMachineEndpointsList;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _rootVolumeSecurityStyle?;
    get rootVolumeSecurityStyle(): string;
    set rootVolumeSecurityStyle(value: string);
    resetRootVolumeSecurityStyle(): void;
    get rootVolumeSecurityStyleInput(): string | undefined;
    get subtype(): string;
    private _svmAdminPassword?;
    get svmAdminPassword(): string;
    set svmAdminPassword(value: string);
    resetSvmAdminPassword(): void;
    get svmAdminPasswordInput(): string | undefined;
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
    get uuid(): string;
    private _activeDirectoryConfiguration;
    get activeDirectoryConfiguration(): FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference;
    putActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): void;
    resetActiveDirectoryConfiguration(): void;
    get activeDirectoryConfigurationInput(): FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined;
    private _timeouts;
    get timeouts(): FsxOntapStorageVirtualMachineTimeoutsOutputReference;
    putTimeouts(value: FsxOntapStorageVirtualMachineTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOntapStorageVirtualMachineTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
