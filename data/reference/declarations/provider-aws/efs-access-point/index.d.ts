/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#file_system_id EfsAccessPoint#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#id EfsAccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#tags EfsAccessPoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#tags_all EfsAccessPoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * posix_user block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#posix_user EfsAccessPoint#posix_user}
    */
    readonly posixUser?: EfsAccessPointPosixUser;
    /**
    * root_directory block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#root_directory EfsAccessPoint#root_directory}
    */
    readonly rootDirectory?: EfsAccessPointRootDirectory;
}
export interface EfsAccessPointPosixUser {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#gid EfsAccessPoint#gid}
    */
    readonly gid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#secondary_gids EfsAccessPoint#secondary_gids}
    */
    readonly secondaryGids?: number[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#uid EfsAccessPoint#uid}
    */
    readonly uid: number;
}
export declare function efsAccessPointPosixUserToTerraform(struct?: EfsAccessPointPosixUserOutputReference | EfsAccessPointPosixUser): any;
export declare function efsAccessPointPosixUserToHclTerraform(struct?: EfsAccessPointPosixUserOutputReference | EfsAccessPointPosixUser): any;
export declare class EfsAccessPointPosixUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsAccessPointPosixUser | undefined;
    set internalValue(value: EfsAccessPointPosixUser | undefined);
    private _gid?;
    get gid(): number;
    set gid(value: number);
    get gidInput(): number | undefined;
    private _secondaryGids?;
    get secondaryGids(): number[];
    set secondaryGids(value: number[]);
    resetSecondaryGids(): void;
    get secondaryGidsInput(): number[] | undefined;
    private _uid?;
    get uid(): number;
    set uid(value: number);
    get uidInput(): number | undefined;
}
export interface EfsAccessPointRootDirectoryCreationInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#owner_gid EfsAccessPoint#owner_gid}
    */
    readonly ownerGid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#owner_uid EfsAccessPoint#owner_uid}
    */
    readonly ownerUid: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#permissions EfsAccessPoint#permissions}
    */
    readonly permissions: string;
}
export declare function efsAccessPointRootDirectoryCreationInfoToTerraform(struct?: EfsAccessPointRootDirectoryCreationInfoOutputReference | EfsAccessPointRootDirectoryCreationInfo): any;
export declare function efsAccessPointRootDirectoryCreationInfoToHclTerraform(struct?: EfsAccessPointRootDirectoryCreationInfoOutputReference | EfsAccessPointRootDirectoryCreationInfo): any;
export declare class EfsAccessPointRootDirectoryCreationInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsAccessPointRootDirectoryCreationInfo | undefined;
    set internalValue(value: EfsAccessPointRootDirectoryCreationInfo | undefined);
    private _ownerGid?;
    get ownerGid(): number;
    set ownerGid(value: number);
    get ownerGidInput(): number | undefined;
    private _ownerUid?;
    get ownerUid(): number;
    set ownerUid(value: number);
    get ownerUidInput(): number | undefined;
    private _permissions?;
    get permissions(): string;
    set permissions(value: string);
    get permissionsInput(): string | undefined;
}
export interface EfsAccessPointRootDirectory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#path EfsAccessPoint#path}
    */
    readonly path?: string;
    /**
    * creation_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#creation_info EfsAccessPoint#creation_info}
    */
    readonly creationInfo?: EfsAccessPointRootDirectoryCreationInfo;
}
export declare function efsAccessPointRootDirectoryToTerraform(struct?: EfsAccessPointRootDirectoryOutputReference | EfsAccessPointRootDirectory): any;
export declare function efsAccessPointRootDirectoryToHclTerraform(struct?: EfsAccessPointRootDirectoryOutputReference | EfsAccessPointRootDirectory): any;
export declare class EfsAccessPointRootDirectoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsAccessPointRootDirectory | undefined;
    set internalValue(value: EfsAccessPointRootDirectory | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _creationInfo;
    get creationInfo(): EfsAccessPointRootDirectoryCreationInfoOutputReference;
    putCreationInfo(value: EfsAccessPointRootDirectoryCreationInfo): void;
    resetCreationInfo(): void;
    get creationInfoInput(): EfsAccessPointRootDirectoryCreationInfo | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point aws_efs_access_point}
*/
export declare class EfsAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_efs_access_point";
    /**
    * Generates CDKTF code for importing a EfsAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EfsAccessPoint to import
    * @param importFromId The id of the existing EfsAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EfsAccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_access_point aws_efs_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: EfsAccessPointConfig);
    get arn(): string;
    get fileSystemArn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
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
    private _posixUser;
    get posixUser(): EfsAccessPointPosixUserOutputReference;
    putPosixUser(value: EfsAccessPointPosixUser): void;
    resetPosixUser(): void;
    get posixUserInput(): EfsAccessPointPosixUser | undefined;
    private _rootDirectory;
    get rootDirectory(): EfsAccessPointRootDirectoryOutputReference;
    putRootDirectory(value: EfsAccessPointRootDirectory): void;
    resetRootDirectory(): void;
    get rootDirectoryInput(): EfsAccessPointRootDirectory | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
