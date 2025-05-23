/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#copy_tags DbSnapshotCopy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#destination_region DbSnapshotCopy#destination_region}
    */
    readonly destinationRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#id DbSnapshotCopy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#kms_key_id DbSnapshotCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#option_group_name DbSnapshotCopy#option_group_name}
    */
    readonly optionGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#presigned_url DbSnapshotCopy#presigned_url}
    */
    readonly presignedUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#shared_accounts DbSnapshotCopy#shared_accounts}
    */
    readonly sharedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#source_db_snapshot_identifier DbSnapshotCopy#source_db_snapshot_identifier}
    */
    readonly sourceDbSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#tags DbSnapshotCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#tags_all DbSnapshotCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#target_custom_availability_zone DbSnapshotCopy#target_custom_availability_zone}
    */
    readonly targetCustomAvailabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#target_db_snapshot_identifier DbSnapshotCopy#target_db_snapshot_identifier}
    */
    readonly targetDbSnapshotIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#timeouts DbSnapshotCopy#timeouts}
    */
    readonly timeouts?: DbSnapshotCopyTimeouts;
}
export interface DbSnapshotCopyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#create DbSnapshotCopy#create}
    */
    readonly create?: string;
}
export declare function dbSnapshotCopyTimeoutsToTerraform(struct?: DbSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare function dbSnapshotCopyTimeoutsToHclTerraform(struct?: DbSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare class DbSnapshotCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbSnapshotCopyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbSnapshotCopyTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy aws_db_snapshot_copy}
*/
export declare class DbSnapshotCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_snapshot_copy";
    /**
    * Generates CDKTF code for importing a DbSnapshotCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbSnapshotCopy to import
    * @param importFromId The id of the existing DbSnapshotCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbSnapshotCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot_copy aws_db_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSnapshotCopyConfig
    */
    constructor(scope: Construct, id: string, config: DbSnapshotCopyConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _copyTags?;
    get copyTags(): boolean | cdktf.IResolvable;
    set copyTags(value: boolean | cdktf.IResolvable);
    resetCopyTags(): void;
    get copyTagsInput(): boolean | cdktf.IResolvable | undefined;
    get dbSnapshotArn(): string;
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    resetDestinationRegion(): void;
    get destinationRegionInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
    get engine(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get iops(): number;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get licenseModel(): string;
    private _optionGroupName?;
    get optionGroupName(): string;
    set optionGroupName(value: string);
    resetOptionGroupName(): void;
    get optionGroupNameInput(): string | undefined;
    get port(): number;
    private _presignedUrl?;
    get presignedUrl(): string;
    set presignedUrl(value: string);
    resetPresignedUrl(): void;
    get presignedUrlInput(): string | undefined;
    private _sharedAccounts?;
    get sharedAccounts(): string[];
    set sharedAccounts(value: string[]);
    resetSharedAccounts(): void;
    get sharedAccountsInput(): string[] | undefined;
    get snapshotType(): string;
    private _sourceDbSnapshotIdentifier?;
    get sourceDbSnapshotIdentifier(): string;
    set sourceDbSnapshotIdentifier(value: string);
    get sourceDbSnapshotIdentifierInput(): string | undefined;
    get sourceRegion(): string;
    get storageType(): string;
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
    private _targetCustomAvailabilityZone?;
    get targetCustomAvailabilityZone(): string;
    set targetCustomAvailabilityZone(value: string);
    resetTargetCustomAvailabilityZone(): void;
    get targetCustomAvailabilityZoneInput(): string | undefined;
    private _targetDbSnapshotIdentifier?;
    get targetDbSnapshotIdentifier(): string;
    set targetDbSnapshotIdentifier(value: string);
    get targetDbSnapshotIdentifierInput(): string | undefined;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DbSnapshotCopyTimeoutsOutputReference;
    putTimeouts(value: DbSnapshotCopyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbSnapshotCopyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
