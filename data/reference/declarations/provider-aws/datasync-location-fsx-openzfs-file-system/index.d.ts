/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationFsxOpenzfsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * protocol block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#protocol DatasyncLocationFsxOpenzfsFileSystem#protocol}
    */
    readonly protocol: DatasyncLocationFsxOpenzfsFileSystemProtocol;
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#version DatasyncLocationFsxOpenzfsFileSystem#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions): any;
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions): any;
export declare class DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions | undefined;
    set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocolNfs {
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#mount_options DatasyncLocationFsxOpenzfsFileSystem#mount_options}
    */
    readonly mountOptions: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions;
}
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolNfsToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfs): any;
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolNfsToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfs): any;
export declare class DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfs | undefined;
    set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs | undefined);
    private _mountOptions;
    get mountOptions(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions): void;
    get mountOptionsInput(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions | undefined;
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocol {
    /**
    * nfs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#nfs DatasyncLocationFsxOpenzfsFileSystem#nfs}
    */
    readonly nfs: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs;
}
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocol): any;
export declare function datasyncLocationFsxOpenzfsFileSystemProtocolToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocol): any;
export declare class DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocol | undefined;
    set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocol | undefined);
    private _nfs;
    get nfs(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference;
    putNfs(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs): void;
    get nfsInput(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system aws_datasync_location_fsx_openzfs_file_system}
*/
export declare class DatasyncLocationFsxOpenzfsFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_fsx_openzfs_file_system";
    /**
    * Generates CDKTF code for importing a DatasyncLocationFsxOpenzfsFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationFsxOpenzfsFileSystem to import
    * @param importFromId The id of the existing DatasyncLocationFsxOpenzfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationFsxOpenzfsFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_openzfs_file_system aws_datasync_location_fsx_openzfs_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxOpenzfsFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxOpenzfsFileSystemConfig);
    get arn(): string;
    get creationTime(): string;
    private _fsxFilesystemArn?;
    get fsxFilesystemArn(): string;
    set fsxFilesystemArn(value: string);
    get fsxFilesystemArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[] | undefined;
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
    get protocol(): DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference;
    putProtocol(value: DatasyncLocationFsxOpenzfsFileSystemProtocol): void;
    get protocolInput(): DatasyncLocationFsxOpenzfsFileSystemProtocol | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
