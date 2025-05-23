/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsSnapshotImportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#id EbsSnapshotImport#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}
    */
    readonly permanentRestore?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}
    */
    readonly storageTier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#tags EbsSnapshotImport#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}
    */
    readonly temporaryRestoreDays?: number;
    /**
    * client_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}
    */
    readonly clientData?: EbsSnapshotImportClientData;
    /**
    * disk_container block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}
    */
    readonly diskContainer: EbsSnapshotImportDiskContainer;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}
    */
    readonly timeouts?: EbsSnapshotImportTimeouts;
}
export interface EbsSnapshotImportClientData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#comment EbsSnapshotImport#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}
    */
    readonly uploadEnd?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}
    */
    readonly uploadSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}
    */
    readonly uploadStart?: string;
}
export declare function ebsSnapshotImportClientDataToTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any;
export declare function ebsSnapshotImportClientDataToHclTerraform(struct?: EbsSnapshotImportClientDataOutputReference | EbsSnapshotImportClientData): any;
export declare class EbsSnapshotImportClientDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotImportClientData | undefined;
    set internalValue(value: EbsSnapshotImportClientData | undefined);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _uploadEnd?;
    get uploadEnd(): string;
    set uploadEnd(value: string);
    resetUploadEnd(): void;
    get uploadEndInput(): string | undefined;
    private _uploadSize?;
    get uploadSize(): number;
    set uploadSize(value: number);
    resetUploadSize(): void;
    get uploadSizeInput(): number | undefined;
    private _uploadStart?;
    get uploadStart(): string;
    set uploadStart(value: string);
    resetUploadStart(): void;
    get uploadStartInput(): string | undefined;
}
export interface EbsSnapshotImportDiskContainerUserBucket {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}
    */
    readonly s3Key: string;
}
export declare function ebsSnapshotImportDiskContainerUserBucketToTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any;
export declare function ebsSnapshotImportDiskContainerUserBucketToHclTerraform(struct?: EbsSnapshotImportDiskContainerUserBucketOutputReference | EbsSnapshotImportDiskContainerUserBucket): any;
export declare class EbsSnapshotImportDiskContainerUserBucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotImportDiskContainerUserBucket | undefined;
    set internalValue(value: EbsSnapshotImportDiskContainerUserBucket | undefined);
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    get s3KeyInput(): string | undefined;
}
export interface EbsSnapshotImportDiskContainer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#description EbsSnapshotImport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#format EbsSnapshotImport#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#url EbsSnapshotImport#url}
    */
    readonly url?: string;
    /**
    * user_bucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}
    */
    readonly userBucket?: EbsSnapshotImportDiskContainerUserBucket;
}
export declare function ebsSnapshotImportDiskContainerToTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any;
export declare function ebsSnapshotImportDiskContainerToHclTerraform(struct?: EbsSnapshotImportDiskContainerOutputReference | EbsSnapshotImportDiskContainer): any;
export declare class EbsSnapshotImportDiskContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotImportDiskContainer | undefined;
    set internalValue(value: EbsSnapshotImportDiskContainer | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _userBucket;
    get userBucket(): EbsSnapshotImportDiskContainerUserBucketOutputReference;
    putUserBucket(value: EbsSnapshotImportDiskContainerUserBucket): void;
    resetUserBucket(): void;
    get userBucketInput(): EbsSnapshotImportDiskContainerUserBucket | undefined;
}
export interface EbsSnapshotImportTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#create EbsSnapshotImport#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#delete EbsSnapshotImport#delete}
    */
    readonly delete?: string;
}
export declare function ebsSnapshotImportTimeoutsToTerraform(struct?: EbsSnapshotImportTimeouts | cdktf.IResolvable): any;
export declare function ebsSnapshotImportTimeoutsToHclTerraform(struct?: EbsSnapshotImportTimeouts | cdktf.IResolvable): any;
export declare class EbsSnapshotImportTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EbsSnapshotImportTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EbsSnapshotImportTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import aws_ebs_snapshot_import}
*/
export declare class EbsSnapshotImport extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ebs_snapshot_import";
    /**
    * Generates CDKTF code for importing a EbsSnapshotImport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EbsSnapshotImport to import
    * @param importFromId The id of the existing EbsSnapshotImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EbsSnapshotImport to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_snapshot_import aws_ebs_snapshot_import} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotImportConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotImportConfig);
    get arn(): string;
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
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string | undefined;
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
    private _clientData;
    get clientData(): EbsSnapshotImportClientDataOutputReference;
    putClientData(value: EbsSnapshotImportClientData): void;
    resetClientData(): void;
    get clientDataInput(): EbsSnapshotImportClientData | undefined;
    private _diskContainer;
    get diskContainer(): EbsSnapshotImportDiskContainerOutputReference;
    putDiskContainer(value: EbsSnapshotImportDiskContainer): void;
    get diskContainerInput(): EbsSnapshotImportDiskContainer | undefined;
    private _timeouts;
    get timeouts(): EbsSnapshotImportTimeoutsOutputReference;
    putTimeouts(value: EbsSnapshotImportTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EbsSnapshotImportTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
