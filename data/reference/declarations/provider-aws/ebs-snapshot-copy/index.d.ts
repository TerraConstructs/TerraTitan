/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#completion_duration_minutes EbsSnapshotCopy#completion_duration_minutes}
    */
    readonly completionDurationMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#description EbsSnapshotCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#id EbsSnapshotCopy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}
    */
    readonly permanentRestore?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}
    */
    readonly sourceRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}
    */
    readonly sourceSnapshotId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}
    */
    readonly storageTier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}
    */
    readonly temporaryRestoreDays?: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}
    */
    readonly timeouts?: EbsSnapshotCopyTimeouts;
}
export interface EbsSnapshotCopyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#create EbsSnapshotCopy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}
    */
    readonly delete?: string;
}
export declare function ebsSnapshotCopyTimeoutsToTerraform(struct?: EbsSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare function ebsSnapshotCopyTimeoutsToHclTerraform(struct?: EbsSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare class EbsSnapshotCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotCopyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EbsSnapshotCopyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy aws_ebs_snapshot_copy}
*/
export declare class EbsSnapshotCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ebs_snapshot_copy";
    /**
    * Generates CDKTF code for importing a EbsSnapshotCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EbsSnapshotCopy to import
    * @param importFromId The id of the existing EbsSnapshotCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EbsSnapshotCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_copy aws_ebs_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotCopyConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotCopyConfig);
    get arn(): string;
    private _completionDurationMinutes?;
    get completionDurationMinutes(): number;
    set completionDurationMinutes(value: number);
    resetCompletionDurationMinutes(): void;
    get completionDurationMinutesInput(): number | undefined;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get outpostArn(): string;
    get ownerAlias(): string;
    get ownerId(): string;
    private _permanentRestore?;
    get permanentRestore(): boolean | cdktf.IResolvable;
    set permanentRestore(value: boolean | cdktf.IResolvable);
    resetPermanentRestore(): void;
    get permanentRestoreInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceRegion?;
    get sourceRegion(): string;
    set sourceRegion(value: string);
    get sourceRegionInput(): string | undefined;
    private _sourceSnapshotId?;
    get sourceSnapshotId(): string;
    set sourceSnapshotId(value: string);
    get sourceSnapshotIdInput(): string | undefined;
    private _storageTier?;
    get storageTier(): string;
    set storageTier(value: string);
    resetStorageTier(): void;
    get storageTierInput(): string | undefined;
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
    private _temporaryRestoreDays?;
    get temporaryRestoreDays(): number;
    set temporaryRestoreDays(value: number);
    resetTemporaryRestoreDays(): void;
    get temporaryRestoreDaysInput(): number | undefined;
    get volumeId(): string;
    get volumeSize(): number;
    private _timeouts;
    get timeouts(): EbsSnapshotCopyTimeoutsOutputReference;
    putTimeouts(value: EbsSnapshotCopyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EbsSnapshotCopyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
