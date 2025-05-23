/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FsxOpenzfsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#id FsxOpenzfsSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#name FsxOpenzfsSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#tags FsxOpenzfsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#tags_all FsxOpenzfsSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#volume_id FsxOpenzfsSnapshot#volume_id}
    */
    readonly volumeId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#timeouts FsxOpenzfsSnapshot#timeouts}
    */
    readonly timeouts?: FsxOpenzfsSnapshotTimeouts;
}
export interface FsxOpenzfsSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#create FsxOpenzfsSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#delete FsxOpenzfsSnapshot#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#read FsxOpenzfsSnapshot#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#update FsxOpenzfsSnapshot#update}
    */
    readonly update?: string;
}
export declare function fsxOpenzfsSnapshotTimeoutsToTerraform(struct?: FsxOpenzfsSnapshotTimeouts | cdktf.IResolvable): any;
export declare function fsxOpenzfsSnapshotTimeoutsToHclTerraform(struct?: FsxOpenzfsSnapshotTimeouts | cdktf.IResolvable): any;
export declare class FsxOpenzfsSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FsxOpenzfsSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FsxOpenzfsSnapshotTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}
*/
export declare class FsxOpenzfsSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fsx_openzfs_snapshot";
    /**
    * Generates CDKTF code for importing a FsxOpenzfsSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FsxOpenzfsSnapshot to import
    * @param importFromId The id of the existing FsxOpenzfsSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FsxOpenzfsSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOpenzfsSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: FsxOpenzfsSnapshotConfig);
    get arn(): string;
    get creationTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): FsxOpenzfsSnapshotTimeoutsOutputReference;
    putTimeouts(value: FsxOpenzfsSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FsxOpenzfsSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
