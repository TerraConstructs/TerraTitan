/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayStoredIscsiVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}
    */
    readonly kmsKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}
    */
    readonly preserveExistingData: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}
    */
    readonly targetName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume}
*/
export declare class StoragegatewayStoredIscsiVolume extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_stored_iscsi_volume";
    /**
    * Generates CDKTF code for importing a StoragegatewayStoredIscsiVolume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayStoredIscsiVolume to import
    * @param importFromId The id of the existing StoragegatewayStoredIscsiVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayStoredIscsiVolume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayStoredIscsiVolumeConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayStoredIscsiVolumeConfig);
    get arn(): string;
    get chapEnabled(): cdktf.IResolvable;
    private _diskId?;
    get diskId(): string;
    set diskId(value: string);
    get diskIdInput(): string | undefined;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsEncrypted?;
    get kmsEncrypted(): boolean | cdktf.IResolvable;
    set kmsEncrypted(value: boolean | cdktf.IResolvable);
    resetKmsEncrypted(): void;
    get kmsEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    get lunNumber(): number;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string | undefined;
    get networkInterfacePort(): number;
    private _preserveExistingData?;
    get preserveExistingData(): boolean | cdktf.IResolvable;
    set preserveExistingData(value: boolean | cdktf.IResolvable);
    get preserveExistingDataInput(): boolean | cdktf.IResolvable | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
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
    get targetArn(): string;
    private _targetName?;
    get targetName(): string;
    set targetName(value: string);
    get targetNameInput(): string | undefined;
    get volumeAttachmentStatus(): string;
    get volumeId(): string;
    get volumeSizeInBytes(): number;
    get volumeStatus(): string;
    get volumeType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
