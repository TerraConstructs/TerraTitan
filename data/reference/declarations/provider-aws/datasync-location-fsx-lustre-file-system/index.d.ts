/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationFsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system aws_datasync_location_fsx_lustre_file_system}
*/
export declare class DatasyncLocationFsxLustreFileSystem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_fsx_lustre_file_system";
    /**
    * Generates CDKTF code for importing a DatasyncLocationFsxLustreFileSystem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationFsxLustreFileSystem to import
    * @param importFromId The id of the existing DatasyncLocationFsxLustreFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationFsxLustreFileSystem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_fsx_lustre_file_system aws_datasync_location_fsx_lustre_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxLustreFileSystemConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationFsxLustreFileSystemConfig);
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
