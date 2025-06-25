/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#copy_tags RdsClusterSnapshotCopy#copy_tags}
    */
    readonly copyTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#destination_region RdsClusterSnapshotCopy#destination_region}
    */
    readonly destinationRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#kms_key_id RdsClusterSnapshotCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#presigned_url RdsClusterSnapshotCopy#presigned_url}
    */
    readonly presignedUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#shared_accounts RdsClusterSnapshotCopy#shared_accounts}
    */
    readonly sharedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#source_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#source_db_cluster_snapshot_identifier}
    */
    readonly sourceDbClusterSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#tags RdsClusterSnapshotCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#target_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#target_db_cluster_snapshot_identifier}
    */
    readonly targetDbClusterSnapshotIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#timeouts RdsClusterSnapshotCopy#timeouts}
    */
    readonly timeouts?: RdsClusterSnapshotCopyTimeouts;
}
export interface RdsClusterSnapshotCopyTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#create RdsClusterSnapshotCopy#create}
    */
    readonly create?: string;
}
export declare function rdsClusterSnapshotCopyTimeoutsToTerraform(struct?: RdsClusterSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare function rdsClusterSnapshotCopyTimeoutsToHclTerraform(struct?: RdsClusterSnapshotCopyTimeouts | cdktf.IResolvable): any;
export declare class RdsClusterSnapshotCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsClusterSnapshotCopyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsClusterSnapshotCopyTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy aws_rds_cluster_snapshot_copy}
*/
export declare class RdsClusterSnapshotCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_snapshot_copy";
    /**
    * Generates CDKTF code for importing a RdsClusterSnapshotCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterSnapshotCopy to import
    * @param importFromId The id of the existing RdsClusterSnapshotCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterSnapshotCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_cluster_snapshot_copy aws_rds_cluster_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterSnapshotCopyConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterSnapshotCopyConfig);
    get allocatedStorage(): number;
    private _copyTags?;
    get copyTags(): boolean | cdktf.IResolvable;
    set copyTags(value: boolean | cdktf.IResolvable);
    resetCopyTags(): void;
    get copyTagsInput(): boolean | cdktf.IResolvable | undefined;
    get dbClusterSnapshotArn(): string;
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    resetDestinationRegion(): void;
    get destinationRegionInput(): string | undefined;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get licenseModel(): string;
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
    private _sourceDbClusterSnapshotIdentifier?;
    get sourceDbClusterSnapshotIdentifier(): string;
    set sourceDbClusterSnapshotIdentifier(value: string);
    get sourceDbClusterSnapshotIdentifierInput(): string | undefined;
    get storageEncrypted(): cdktf.IResolvable;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _targetDbClusterSnapshotIdentifier?;
    get targetDbClusterSnapshotIdentifier(): string;
    set targetDbClusterSnapshotIdentifier(value: string);
    get targetDbClusterSnapshotIdentifierInput(): string | undefined;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): RdsClusterSnapshotCopyTimeoutsOutputReference;
    putTimeouts(value: RdsClusterSnapshotCopyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsClusterSnapshotCopyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
