/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#description EbsSnapshot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#id EbsSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#outpost_arn EbsSnapshot#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#permanent_restore EbsSnapshot#permanent_restore}
    */
    readonly permanentRestore?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#storage_tier EbsSnapshot#storage_tier}
    */
    readonly storageTier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#tags EbsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#tags_all EbsSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#temporary_restore_days EbsSnapshot#temporary_restore_days}
    */
    readonly temporaryRestoreDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#volume_id EbsSnapshot#volume_id}
    */
    readonly volumeId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#timeouts EbsSnapshot#timeouts}
    */
    readonly timeouts?: EbsSnapshotTimeouts;
}
export interface EbsSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#create EbsSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#delete EbsSnapshot#delete}
    */
    readonly delete?: string;
}
export declare function ebsSnapshotTimeoutsToTerraform(struct?: EbsSnapshotTimeouts | cdktf.IResolvable): any;
export declare function ebsSnapshotTimeoutsToHclTerraform(struct?: EbsSnapshotTimeouts | cdktf.IResolvable): any;
export declare class EbsSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EbsSnapshotTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot aws_ebs_snapshot}
*/
export declare class EbsSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ebs_snapshot";
    /**
    * Generates CDKTF code for importing a EbsSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EbsSnapshot to import
    * @param importFromId The id of the existing EbsSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EbsSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot aws_ebs_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
    get ownerAlias(): string;
    get ownerId(): string;
    private _permanentRestore?;
    get permanentRestore(): boolean | cdktf.IResolvable;
    set permanentRestore(value: boolean | cdktf.IResolvable);
    resetPermanentRestore(): void;
    get permanentRestoreInput(): boolean | cdktf.IResolvable | undefined;
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
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string | undefined;
    get volumeSize(): number;
    private _timeouts;
    get timeouts(): EbsSnapshotTimeoutsOutputReference;
    putTimeouts(value: EbsSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EbsSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
