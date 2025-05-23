/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbInstanceAutomatedBackupsReplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#id DbInstanceAutomatedBackupsReplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#kms_key_id DbInstanceAutomatedBackupsReplication#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#pre_signed_url DbInstanceAutomatedBackupsReplication#pre_signed_url}
    */
    readonly preSignedUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#retention_period DbInstanceAutomatedBackupsReplication#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#source_db_instance_arn DbInstanceAutomatedBackupsReplication#source_db_instance_arn}
    */
    readonly sourceDbInstanceArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#timeouts DbInstanceAutomatedBackupsReplication#timeouts}
    */
    readonly timeouts?: DbInstanceAutomatedBackupsReplicationTimeouts;
}
export interface DbInstanceAutomatedBackupsReplicationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#create DbInstanceAutomatedBackupsReplication#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#delete DbInstanceAutomatedBackupsReplication#delete}
    */
    readonly delete?: string;
}
export declare function dbInstanceAutomatedBackupsReplicationTimeoutsToTerraform(struct?: DbInstanceAutomatedBackupsReplicationTimeouts | cdktf.IResolvable): any;
export declare function dbInstanceAutomatedBackupsReplicationTimeoutsToHclTerraform(struct?: DbInstanceAutomatedBackupsReplicationTimeouts | cdktf.IResolvable): any;
export declare class DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbInstanceAutomatedBackupsReplicationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbInstanceAutomatedBackupsReplicationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication}
*/
export declare class DbInstanceAutomatedBackupsReplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_instance_automated_backups_replication";
    /**
    * Generates CDKTF code for importing a DbInstanceAutomatedBackupsReplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbInstanceAutomatedBackupsReplication to import
    * @param importFromId The id of the existing DbInstanceAutomatedBackupsReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbInstanceAutomatedBackupsReplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_instance_automated_backups_replication aws_db_instance_automated_backups_replication} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceAutomatedBackupsReplicationConfig
    */
    constructor(scope: Construct, id: string, config: DbInstanceAutomatedBackupsReplicationConfig);
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
    private _preSignedUrl?;
    get preSignedUrl(): string;
    set preSignedUrl(value: string);
    resetPreSignedUrl(): void;
    get preSignedUrlInput(): string | undefined;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _sourceDbInstanceArn?;
    get sourceDbInstanceArn(): string;
    set sourceDbInstanceArn(value: string);
    get sourceDbInstanceArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): DbInstanceAutomatedBackupsReplicationTimeoutsOutputReference;
    putTimeouts(value: DbInstanceAutomatedBackupsReplicationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbInstanceAutomatedBackupsReplicationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
