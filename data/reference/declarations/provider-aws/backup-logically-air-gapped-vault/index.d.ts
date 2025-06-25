/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupLogicallyAirGappedVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}
    */
    readonly maxRetentionDays: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}
    */
    readonly minRetentionDays: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}
    */
    readonly timeouts?: BackupLogicallyAirGappedVaultTimeouts;
}
export interface BackupLogicallyAirGappedVaultTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}
    */
    readonly create?: string;
}
export declare function backupLogicallyAirGappedVaultTimeoutsToTerraform(struct?: BackupLogicallyAirGappedVaultTimeouts | cdktf.IResolvable): any;
export declare function backupLogicallyAirGappedVaultTimeoutsToHclTerraform(struct?: BackupLogicallyAirGappedVaultTimeouts | cdktf.IResolvable): any;
export declare class BackupLogicallyAirGappedVaultTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BackupLogicallyAirGappedVaultTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BackupLogicallyAirGappedVaultTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault}
*/
export declare class BackupLogicallyAirGappedVault extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_logically_air_gapped_vault";
    /**
    * Generates CDKTF code for importing a BackupLogicallyAirGappedVault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupLogicallyAirGappedVault to import
    * @param importFromId The id of the existing BackupLogicallyAirGappedVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupLogicallyAirGappedVault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupLogicallyAirGappedVaultConfig
    */
    constructor(scope: Construct, id: string, config: BackupLogicallyAirGappedVaultConfig);
    get arn(): string;
    get id(): string;
    private _maxRetentionDays?;
    get maxRetentionDays(): number;
    set maxRetentionDays(value: number);
    get maxRetentionDaysInput(): number | undefined;
    private _minRetentionDays?;
    get minRetentionDays(): number;
    set minRetentionDays(value: number);
    get minRetentionDaysInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): BackupLogicallyAirGappedVaultTimeoutsOutputReference;
    putTimeouts(value: BackupLogicallyAirGappedVaultTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BackupLogicallyAirGappedVaultTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
