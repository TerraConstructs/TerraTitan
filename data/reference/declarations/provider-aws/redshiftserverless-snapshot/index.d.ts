/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot#id RedshiftserverlessSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot#namespace_name RedshiftserverlessSnapshot#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot#retention_period RedshiftserverlessSnapshot#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot#snapshot_name RedshiftserverlessSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot aws_redshiftserverless_snapshot}
*/
export declare class RedshiftserverlessSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_snapshot";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessSnapshot to import
    * @param importFromId The id of the existing RedshiftserverlessSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_snapshot aws_redshiftserverless_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessSnapshotConfig);
    get accountsWithProvisionedRestoreAccess(): string[];
    get accountsWithRestoreAccess(): string[];
    get adminUsername(): string;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get namespaceArn(): string;
    private _namespaceName?;
    get namespaceName(): string;
    set namespaceName(value: string);
    get namespaceNameInput(): string | undefined;
    get ownerAccount(): string;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _snapshotName?;
    get snapshotName(): string;
    set snapshotName(value: string);
    get snapshotNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
