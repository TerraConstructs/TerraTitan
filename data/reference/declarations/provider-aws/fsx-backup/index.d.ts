/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxBackupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#file_system_id FsxBackup#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#id FsxBackup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#tags FsxBackup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#tags_all FsxBackup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#volume_id FsxBackup#volume_id}
    */
    readonly volumeId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#timeouts FsxBackup#timeouts}
    */
    readonly timeouts?: FsxBackupTimeouts;
}
export interface FsxBackupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#create FsxBackup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#delete FsxBackup#delete}
    */
    readonly delete?: string;
}
export declare function fsxBackupTimeoutsToTerraform(struct?: FsxBackupTimeouts | cdktf.IResolvable): any;
export declare function fsxBackupTimeoutsToHclTerraform(struct?: FsxBackupTimeouts | cdktf.IResolvable): any;
export declare class FsxBackupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxBackupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxBackupTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup aws_fsx_backup}
*/
export declare class FsxBackup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_backup";
    /**
    * Generates CDKTF code for importing a FsxBackup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxBackup to import
    * @param importFromId The id of the existing FsxBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxBackup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_backup aws_fsx_backup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxBackupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: FsxBackupConfig);
    get arn(): string;
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
    get kmsKeyId(): string;
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
    get type(): string;
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    resetVolumeId(): void;
    get volumeIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): FsxBackupTimeoutsOutputReference;
    putTimeouts(value: FsxBackupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxBackupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
