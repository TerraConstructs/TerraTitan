/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationFsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#id DatasyncLocationFsxOntapFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#security_group_arns DatasyncLocationFsxOntapFileSystem#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#storage_virtual_machine_arn DatasyncLocationFsxOntapFileSystem#storage_virtual_machine_arn}
    */
    readonly storageVirtualMachineArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#subdirectory DatasyncLocationFsxOntapFileSystem#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#tags DatasyncLocationFsxOntapFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#tags_all DatasyncLocationFsxOntapFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * protocol block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#protocol DatasyncLocationFsxOntapFileSystem#protocol}
    */
    readonly protocol: DatasyncLocationFsxOntapFileSystemProtocol;
}
export interface DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#version DatasyncLocationFsxOntapFileSystem#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions): any;
export declare function datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions): any;
export declare class DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions | undefined;
    set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface DatasyncLocationFsxOntapFileSystemProtocolNfs {
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options DatasyncLocationFsxOntapFileSystem#mount_options}
    */
    readonly mountOptions: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions;
}
export declare function datasyncLocationFsxOntapFileSystemProtocolNfsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfs): any;
export declare function datasyncLocationFsxOntapFileSystemProtocolNfsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfs): any;
export declare class DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolNfs | undefined;
    set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolNfs | undefined);
    private _mountOptions;
    get mountOptions(): DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions): void;
    get mountOptionsInput(): DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions | undefined;
}
export interface DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#version DatasyncLocationFsxOntapFileSystem#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions): any;
export declare function datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions): any;
export declare class DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions | undefined;
    set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface DatasyncLocationFsxOntapFileSystemProtocolSmb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#domain DatasyncLocationFsxOntapFileSystem#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#password DatasyncLocationFsxOntapFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#user DatasyncLocationFsxOntapFileSystem#user}
    */
    readonly user: string;
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options DatasyncLocationFsxOntapFileSystem#mount_options}
    */
    readonly mountOptions: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions;
}
export declare function datasyncLocationFsxOntapFileSystemProtocolSmbToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmb): any;
export declare function datasyncLocationFsxOntapFileSystemProtocolSmbToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmb): any;
export declare class DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolSmb | undefined;
    set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolSmb | undefined);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string | undefined;
    private _mountOptions;
    get mountOptions(): DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions): void;
    get mountOptionsInput(): DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions | undefined;
}
export interface DatasyncLocationFsxOntapFileSystemProtocol {
    /**
    * nfs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#nfs DatasyncLocationFsxOntapFileSystem#nfs}
    */
    readonly nfs?: DatasyncLocationFsxOntapFileSystemProtocolNfs;
    /**
    * smb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#smb DatasyncLocationFsxOntapFileSystem#smb}
    */
    readonly smb?: DatasyncLocationFsxOntapFileSystemProtocolSmb;
}
export declare function datasyncLocationFsxOntapFileSystemProtocolToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolOutputReference | DatasyncLocationFsxOntapFileSystemProtocol): any;
export declare function datasyncLocationFsxOntapFileSystemProtocolToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolOutputReference | DatasyncLocationFsxOntapFileSystemProtocol): any;
export declare class DatasyncLocationFsxOntapFileSystemProtocolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOntapFileSystemProtocol | undefined;
    set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocol | undefined);
    private _nfs;
    get nfs(): DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference;
    putNfs(value: DatasyncLocationFsxOntapFileSystemProtocolNfs): void;
    resetNfs(): void;
    get nfsInput(): DatasyncLocationFsxOntapFileSystemProtocolNfs | undefined;
    private _smb;
    get smb(): DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference;
    putSmb(value: DatasyncLocationFsxOntapFileSystemProtocolSmb): void;
    resetSmb(): void;
    get smbInput(): DatasyncLocationFsxOntapFileSystemProtocolSmb | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system}
*/
export declare class DatasyncLocationFsxOntapFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_fsx_ontap_file_system";
    /**
    * Generates CDKTF code for importing a DatasyncLocationFsxOntapFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationFsxOntapFileSystem to import
    * @param importFromId The id of the existing DatasyncLocationFsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationFsxOntapFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxOntapFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxOntapFileSystemConfig);
    get arn(): string;
    get creationTime(): string;
    get fsxFilesystemArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[] | undefined;
    private _storageVirtualMachineArn?;
    get storageVirtualMachineArn(): string;
    set storageVirtualMachineArn(value: string);
    get storageVirtualMachineArnInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _protocol;
    get protocol(): DatasyncLocationFsxOntapFileSystemProtocolOutputReference;
    putProtocol(value: DatasyncLocationFsxOntapFileSystemProtocol): void;
    get protocolInput(): DatasyncLocationFsxOntapFileSystemProtocol | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
