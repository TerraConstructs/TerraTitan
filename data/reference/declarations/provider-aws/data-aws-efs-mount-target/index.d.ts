/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target#id DataAwsEfsMountTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}
    */
    readonly mountTargetId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target aws_efs_mount_target}
*/
export declare class DataAwsEfsMountTarget extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_efs_mount_target";
    /**
    * Generates CDKTF code for importing a DataAwsEfsMountTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEfsMountTarget to import
    * @param importFromId The id of the existing DataAwsEfsMountTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEfsMountTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_mount_target aws_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsMountTargetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEfsMountTargetConfig);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    resetAccessPointId(): void;
    get accessPointIdInput(): string | undefined;
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    get dnsName(): string;
    get fileSystemArn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddress(): string;
    get mountTargetDnsName(): string;
    private _mountTargetId?;
    get mountTargetId(): string;
    set mountTargetId(value: string);
    resetMountTargetId(): void;
    get mountTargetIdInput(): string | undefined;
    get networkInterfaceId(): string;
    get ownerId(): string;
    get securityGroups(): string[];
    get subnetId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
