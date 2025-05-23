/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsFastSnapshotRestoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#availability_zone EbsFastSnapshotRestore#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#snapshot_id EbsFastSnapshotRestore#snapshot_id}
    */
    readonly snapshotId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#timeouts EbsFastSnapshotRestore#timeouts}
    */
    readonly timeouts?: EbsFastSnapshotRestoreTimeouts;
}
export interface EbsFastSnapshotRestoreTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#create EbsFastSnapshotRestore#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#delete EbsFastSnapshotRestore#delete}
    */
    readonly delete?: string;
}
export declare function ebsFastSnapshotRestoreTimeoutsToTerraform(struct?: EbsFastSnapshotRestoreTimeouts | cdktf.IResolvable): any;
export declare function ebsFastSnapshotRestoreTimeoutsToHclTerraform(struct?: EbsFastSnapshotRestoreTimeouts | cdktf.IResolvable): any;
export declare class EbsFastSnapshotRestoreTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsFastSnapshotRestoreTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EbsFastSnapshotRestoreTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore aws_ebs_fast_snapshot_restore}
*/
export declare class EbsFastSnapshotRestore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ebs_fast_snapshot_restore";
    /**
    * Generates CDKTF code for importing a EbsFastSnapshotRestore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EbsFastSnapshotRestore to import
    * @param importFromId The id of the existing EbsFastSnapshotRestore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EbsFastSnapshotRestore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_fast_snapshot_restore aws_ebs_fast_snapshot_restore} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsFastSnapshotRestoreConfig
    */
    constructor(scope: Construct, id: string, config: EbsFastSnapshotRestoreConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string | undefined;
    get id(): string;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    get snapshotIdInput(): string | undefined;
    get state(): string;
    private _timeouts;
    get timeouts(): EbsFastSnapshotRestoreTimeoutsOutputReference;
    putTimeouts(value: EbsFastSnapshotRestoreTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EbsFastSnapshotRestoreTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
