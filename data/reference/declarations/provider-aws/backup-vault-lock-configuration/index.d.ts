/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupVaultLockConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}
    */
    readonly backupVaultName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}
    */
    readonly changeableForDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}
    */
    readonly maxRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}
    */
    readonly minRetentionDays?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration aws_backup_vault_lock_configuration}
*/
export declare class BackupVaultLockConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_vault_lock_configuration";
    /**
    * Generates CDKTF code for importing a BackupVaultLockConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupVaultLockConfiguration to import
    * @param importFromId The id of the existing BackupVaultLockConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupVaultLockConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_vault_lock_configuration aws_backup_vault_lock_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupVaultLockConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: BackupVaultLockConfigurationConfig);
    get backupVaultArn(): string;
    private _backupVaultName?;
    get backupVaultName(): string;
    set backupVaultName(value: string);
    get backupVaultNameInput(): string | undefined;
    private _changeableForDays?;
    get changeableForDays(): number;
    set changeableForDays(value: number);
    resetChangeableForDays(): void;
    get changeableForDaysInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxRetentionDays?;
    get maxRetentionDays(): number;
    set maxRetentionDays(value: number);
    resetMaxRetentionDays(): void;
    get maxRetentionDaysInput(): number | undefined;
    private _minRetentionDays?;
    get minRetentionDays(): number;
    set minRetentionDays(value: number);
    resetMinRetentionDays(): void;
    get minRetentionDaysInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
