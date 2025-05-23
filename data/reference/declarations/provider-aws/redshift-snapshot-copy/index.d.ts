/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSnapshotCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#cluster_identifier RedshiftSnapshotCopy#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#destination_region RedshiftSnapshotCopy#destination_region}
    */
    readonly destinationRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#manual_snapshot_retention_period RedshiftSnapshotCopy#manual_snapshot_retention_period}
    */
    readonly manualSnapshotRetentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#retention_period RedshiftSnapshotCopy#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#snapshot_copy_grant_name RedshiftSnapshotCopy#snapshot_copy_grant_name}
    */
    readonly snapshotCopyGrantName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy aws_redshift_snapshot_copy}
*/
export declare class RedshiftSnapshotCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_snapshot_copy";
    /**
    * Generates CDKTF code for importing a RedshiftSnapshotCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftSnapshotCopy to import
    * @param importFromId The id of the existing RedshiftSnapshotCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftSnapshotCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_copy aws_redshift_snapshot_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotCopyConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftSnapshotCopyConfig);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    get destinationRegionInput(): string | undefined;
    get id(): string;
    private _manualSnapshotRetentionPeriod?;
    get manualSnapshotRetentionPeriod(): number;
    set manualSnapshotRetentionPeriod(value: number);
    resetManualSnapshotRetentionPeriod(): void;
    get manualSnapshotRetentionPeriodInput(): number | undefined;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _snapshotCopyGrantName?;
    get snapshotCopyGrantName(): string;
    set snapshotCopyGrantName(value: string);
    resetSnapshotCopyGrantName(): void;
    get snapshotCopyGrantNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
