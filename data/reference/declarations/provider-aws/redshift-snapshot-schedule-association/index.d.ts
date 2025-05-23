/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftSnapshotScheduleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}
    */
    readonly scheduleIdentifier: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association}
*/
export declare class RedshiftSnapshotScheduleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_snapshot_schedule_association";
    /**
    * Generates CDKTF code for importing a RedshiftSnapshotScheduleAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftSnapshotScheduleAssociation to import
    * @param importFromId The id of the existing RedshiftSnapshotScheduleAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftSnapshotScheduleAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftSnapshotScheduleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _scheduleIdentifier?;
    get scheduleIdentifier(): string;
    set scheduleIdentifier(value: string);
    get scheduleIdentifierInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
