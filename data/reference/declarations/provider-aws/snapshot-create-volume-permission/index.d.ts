/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SnapshotCreateVolumePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}
    */
    readonly snapshotId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#timeouts SnapshotCreateVolumePermission#timeouts}
    */
    readonly timeouts?: SnapshotCreateVolumePermissionTimeouts;
}
export interface SnapshotCreateVolumePermissionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#create SnapshotCreateVolumePermission#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#delete SnapshotCreateVolumePermission#delete}
    */
    readonly delete?: string;
}
export declare function snapshotCreateVolumePermissionTimeoutsToTerraform(struct?: SnapshotCreateVolumePermissionTimeouts | cdktf.IResolvable): any;
export declare function snapshotCreateVolumePermissionTimeoutsToHclTerraform(struct?: SnapshotCreateVolumePermissionTimeouts | cdktf.IResolvable): any;
export declare class SnapshotCreateVolumePermissionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SnapshotCreateVolumePermissionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SnapshotCreateVolumePermissionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission aws_snapshot_create_volume_permission}
*/
export declare class SnapshotCreateVolumePermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_snapshot_create_volume_permission";
    /**
    * Generates CDKTF code for importing a SnapshotCreateVolumePermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SnapshotCreateVolumePermission to import
    * @param importFromId The id of the existing SnapshotCreateVolumePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SnapshotCreateVolumePermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/snapshot_create_volume_permission aws_snapshot_create_volume_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SnapshotCreateVolumePermissionConfig
    */
    constructor(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    get snapshotIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): SnapshotCreateVolumePermissionTimeoutsOutputReference;
    putTimeouts(value: SnapshotCreateVolumePermissionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SnapshotCreateVolumePermissionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
