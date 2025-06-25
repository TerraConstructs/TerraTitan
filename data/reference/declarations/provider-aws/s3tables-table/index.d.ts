/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3TablesTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#encryption_configuration S3TablesTable#encryption_configuration}
    */
    readonly encryptionConfiguration?: S3TablesTableEncryptionConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#format S3TablesTable#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}
    */
    readonly maintenanceConfiguration?: S3TablesTableMaintenanceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#name S3TablesTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}
    */
    readonly tableBucketArn: string;
}
export interface S3TablesTableEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#kms_key_arn S3TablesTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#sse_algorithm S3TablesTable#sse_algorithm}
    */
    readonly sseAlgorithm?: string;
}
export declare function s3TablesTableEncryptionConfigurationToTerraform(struct?: S3TablesTableEncryptionConfiguration | cdktf.IResolvable): any;
export declare function s3TablesTableEncryptionConfigurationToHclTerraform(struct?: S3TablesTableEncryptionConfiguration | cdktf.IResolvable): any;
export declare class S3TablesTableEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _sseAlgorithm?;
    get sseAlgorithm(): string;
    set sseAlgorithm(value: string);
    resetSseAlgorithm(): void;
    get sseAlgorithmInput(): string | undefined;
}
export interface S3TablesTableMaintenanceConfigurationIcebergCompactionSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}
    */
    readonly targetFileSizeMb?: number;
}
export declare function s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable): any;
export declare function s3TablesTableMaintenanceConfigurationIcebergCompactionSettingsToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable): any;
export declare class S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | cdktf.IResolvable | undefined);
    private _targetFileSizeMb?;
    get targetFileSizeMb(): number;
    set targetFileSizeMb(value: number);
    resetTargetFileSizeMb(): void;
    get targetFileSizeMbInput(): number | undefined;
}
export interface S3TablesTableMaintenanceConfigurationIcebergCompaction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#settings S3TablesTable#settings}
    */
    readonly settings?: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#status S3TablesTable#status}
    */
    readonly status?: string;
}
export declare function s3TablesTableMaintenanceConfigurationIcebergCompactionToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable): any;
export declare function s3TablesTableMaintenanceConfigurationIcebergCompactionToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable): any;
export declare class S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergCompaction | cdktf.IResolvable | undefined);
    private _settings;
    get settings(): S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference;
    putSettings(value: S3TablesTableMaintenanceConfigurationIcebergCompactionSettings): void;
    resetSettings(): void;
    get settingsInput(): cdktf.IResolvable | S3TablesTableMaintenanceConfigurationIcebergCompactionSettings | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}
    */
    readonly maxSnapshotAgeHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}
    */
    readonly minSnapshotsToKeep?: number;
}
export declare function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable): any;
export declare function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable): any;
export declare class S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | cdktf.IResolvable | undefined);
    private _maxSnapshotAgeHours?;
    get maxSnapshotAgeHours(): number;
    set maxSnapshotAgeHours(value: number);
    resetMaxSnapshotAgeHours(): void;
    get maxSnapshotAgeHoursInput(): number | undefined;
    private _minSnapshotsToKeep?;
    get minSnapshotsToKeep(): number;
    set minSnapshotsToKeep(value: number);
    resetMinSnapshotsToKeep(): void;
    get minSnapshotsToKeepInput(): number | undefined;
}
export interface S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#settings S3TablesTable#settings}
    */
    readonly settings?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#status S3TablesTable#status}
    */
    readonly status?: string;
}
export declare function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable): any;
export declare function s3TablesTableMaintenanceConfigurationIcebergSnapshotManagementToHclTerraform(struct?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable): any;
export declare class S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | cdktf.IResolvable | undefined);
    private _settings;
    get settings(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference;
    putSettings(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings): void;
    resetSettings(): void;
    get settingsInput(): cdktf.IResolvable | S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface S3TablesTableMaintenanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}
    */
    readonly icebergCompaction?: S3TablesTableMaintenanceConfigurationIcebergCompaction;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}
    */
    readonly icebergSnapshotManagement?: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement;
}
export declare function s3TablesTableMaintenanceConfigurationToTerraform(struct?: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable): any;
export declare function s3TablesTableMaintenanceConfigurationToHclTerraform(struct?: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable): any;
export declare class S3TablesTableMaintenanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3TablesTableMaintenanceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3TablesTableMaintenanceConfiguration | cdktf.IResolvable | undefined);
    private _icebergCompaction;
    get icebergCompaction(): S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference;
    putIcebergCompaction(value: S3TablesTableMaintenanceConfigurationIcebergCompaction): void;
    resetIcebergCompaction(): void;
    get icebergCompactionInput(): cdktf.IResolvable | S3TablesTableMaintenanceConfigurationIcebergCompaction | undefined;
    private _icebergSnapshotManagement;
    get icebergSnapshotManagement(): S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference;
    putIcebergSnapshotManagement(value: S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement): void;
    resetIcebergSnapshotManagement(): void;
    get icebergSnapshotManagementInput(): cdktf.IResolvable | S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table aws_s3tables_table}
*/
export declare class S3TablesTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3tables_table";
    /**
    * Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3TablesTable to import
    * @param importFromId The id of the existing S3TablesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3TablesTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3tables_table aws_s3tables_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3TablesTableConfig
    */
    constructor(scope: Construct, id: string, config: S3TablesTableConfig);
    get arn(): string;
    get createdAt(): string;
    get createdBy(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): S3TablesTableEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: S3TablesTableEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | S3TablesTableEncryptionConfiguration | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _maintenanceConfiguration;
    get maintenanceConfiguration(): S3TablesTableMaintenanceConfigurationOutputReference;
    putMaintenanceConfiguration(value: S3TablesTableMaintenanceConfiguration): void;
    resetMaintenanceConfiguration(): void;
    get maintenanceConfigurationInput(): cdktf.IResolvable | S3TablesTableMaintenanceConfiguration | undefined;
    get metadataLocation(): string;
    get modifiedAt(): string;
    get modifiedBy(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    get ownerAccountId(): string;
    private _tableBucketArn?;
    get tableBucketArn(): string;
    set tableBucketArn(value: string);
    get tableBucketArnInput(): string | undefined;
    get type(): string;
    get versionToken(): string;
    get warehouseLocation(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
